#!/usr/bin/env python3
"""
On-page audit: every prerendered URL against its locked primary keyword.

Reads dist/**/index.html (produced by npm run build:prerender) and the locked
keyword map, then reports where title / description / H1 / canonical do not
carry the keyword that page is supposed to own.

Not a stuffing checklist. The rule from the blueprint is that the main keyword
appears in the title, the H1, the first 100 words and one subheading -- nowhere
else. This finds pages that miss those four, and pages that duplicate another
page's title or description.
"""
import json, os, re, sys, html, collections, unicodedata

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(REPO, 'dist')
MAP = os.path.join(REPO, 'docs/seo/mychef-master-keywords.json')


# ---------------------------------------------------------------------------
# Pages whose locked keyword is deliberately NOT forced into the title, H1 or
# description. Every one of these was looked at; forcing the term would produce
# worse copy than leaving it, and that is the exact-match pattern this project
# exists to remove. Reason recorded so nobody "fixes" them later by stuffing.
# ---------------------------------------------------------------------------
EXEMPT = {
    # A chef profile leads with the chef's name. That is the page.
    '/chefs/layla-middle-eastern-chef': "chef's name owns the title and H1",
    '/chefs/marco-italian-chef':        "chef's name owns the title and H1",
    '/chefs/matteo-pastry-chef':        "chef's name owns the title and H1",
    '/chefs/ahmed-executive-chef':      "chef's name owns the title and H1",

    # Hubs and utility pages. The blueprint lists these as untargeted, and the
    # keywords attached to them are invented compounds, not demand.
    '/about': 'untargeted; editorial H1 is the brand thesis',
    '/blog': 'untargeted hub',
    '/guides': 'untargeted hub',
    '/site-map': '"site map dubai" is not a real query',
    '/locations': '"catering near me dubai" cannot go in a title as written',
    '/faq': '"catering faq dubai" is an invented compound',
    '/case-studies': 'invented compound',
    '/menus': 'title carries it; H1 stays natural copy',

    # Partners and recruitment. B2B supply, not customer intent.
    '/partner-with-us': 'invented compound',
    '/venue-partners': 'invented compound',
    '/partners/concierge-services-dubai': 'invented compound',
    '/partners/event-planners-dubai': 'invented compound',
    '/partners/villa-rentals-dubai': 'invented compound',
    '/partners/yacht-charters-dubai': 'invented compound',
    '/influencer-partnerships': 'invented compound',
    '/become-a-mychef': 'recruitment intent, kept off customer surfaces',

    # Brand-name programmes. The keyword is the brand, already in the title.
    '/loyalty-programme': 'brand-name keyword',
    '/referral-programme': 'brand-name keyword',
    '/founding-customer-offer': 'brand-name keyword',
    '/mychef-certified': 'brand-name keyword',
    '/vip-club': 'brand-name keyword',
    '/trust-and-programs': 'brand-name keyword',
    '/chef-training-academy': 'brand-name keyword',
    '/quality-guarantee-dubai': 'invented compound',
    '/booking-protection-insurance': 'invented compound',
    '/how-we-vet-our-chefs': '"background checks dubai" is an invented compound',
    '/gift-cards': 'brand-name keyword; the H1 says what is actually for sale',

    # The keyword map carries "corporate catering retainer dubai" for this URL.
    # The blueprint rejected exactly that phrase as agency jargon and locked
    # "corporate catering contract dubai", which is what the page already says.
    # The page is right and the map row is wrong; recorded rather than "fixed".
    '/corporate-retainer-dubai': 'map row contradicts the blueprint lock; page follows the lock',

    # Household-plan modules. Suppressed in nav and canonicalised to the flat
    # owner, so they must not compete for the term in the first place.
    '/private-chef-dubai/how-it-works': 'canonicalised module',
    '/private-chef-dubai/how-your-plan-works': 'canonicalised module',
    '/private-chef-dubai/privacy-security': 'canonicalised module',
    '/private-chef-dubai/quality-training': 'canonicalised module',

    # Articles. A headline that reads is worth more than the exact phrase.
    '/blog/corporate-catering-full-service-vs-drop-off': 'natural headline',
    '/blog/halal-private-dining-dubai-what-to-ask': 'natural headline',
    '/blog/how-far-ahead-book-caterer-dubai': 'natural headline',
    '/blog/private-chef-palm-jumeirah-guide': 'natural headline',
    '/blog/ramadan-iftar-catering-trends-2026': 'natural headline',
    '/blog/vegan-catering-dubai-guide': 'natural headline',
    '/blog/weekly-meal-prep-vs-full-time-chef-dubai': 'natural headline',
    '/luxury-dinner-planning-guide-dubai': 'natural headline',
    '/dubai-event-catering-price-guide-2026': 'natural headline',
}

TITLE_MAX = 65
DESC_MIN, DESC_MAX = 110, 170


def text_of(fragment):
    return html.unescape(re.sub(r'<[^>]+>', ' ', fragment))


def norm(s):
    """Fold accents and drop apostrophes before comparing.

    Without this, "Canape Catering in Dubai" fails against "canape catering
    dubai" and "Mother's Day" fails against "mothers day" -- 20+ false
    positives that would send someone rewriting copy that was already correct.
    """
    s = unicodedata.normalize('NFKD', s or '')
    s = ''.join(c for c in s if not unicodedata.combining(c))
    s = s.replace("'", '').replace('\u2019', '')
    return re.sub(r'[^a-z0-9]+', ' ', s.lower()).strip()


def stem(w):
    """Crude singular form. "prices" must match "Price Guide", "chefs" "Chef"."""
    return w[:-1] if len(w) > 4 and w.endswith('s') and not w.endswith('ss') else w


def covers(haystack, keyword):
    """Every content word of the keyword present, order-independent."""
    hay = norm(haystack)
    words = [stem(w) for w in norm(keyword).split()
             if w not in ('a', 'the', 'and', 'for', 'in', 'of')]
    return all(re.search(r'\b' + re.escape(w), hay) for w in words) if words else False


def audit():
    data = json.load(open(MAP))
    pages = data['pages']

    sitemap = open(os.path.join(REPO, 'public/sitemap.xml'), encoding='utf-8').read()
    urls = [(u.replace('https://www.mychef.ae', '') or '/')
            for u in re.findall(r'<loc>([^<]+)</loc>', sitemap)]

    rows, exempted = [], []
    titles, descs = collections.defaultdict(list), collections.defaultdict(list)

    for url in urls:
        rel = 'index.html' if url == '/' else url.strip('/') + '/index.html'
        path = os.path.join(DIST, rel)
        if not os.path.exists(path):
            rows.append((url, 'NO_HTML', 'prerender produced no file'))
            continue
        doc = open(path, encoding='utf-8').read()

        title = text_of((re.search(r'<title[^>]*>(.*?)</title>', doc, re.S) or [None, ''])[1]).strip()
        m = re.search(r'<meta[^>]+name="description"[^>]+content="([^"]*)"', doc)
        desc = html.unescape(m.group(1)).strip() if m else ''
        h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', doc, re.S)
        h1 = text_of(h1s[0]).strip() if h1s else ''
        can = (re.search(r'<link[^>]+rel="canonical"[^>]+href="([^"]*)"', doc) or [None, ''])[1]

        titles[title].append(url)
        if desc:
            descs[desc].append(url)

        kw = (pages.get(url) or {}).get('primary_keyword')

        if not title:
            rows.append((url, 'TITLE_MISSING', ''))
        elif len(title) > TITLE_MAX:
            rows.append((url, 'TITLE_LONG', f'{len(title)} chars'))
        if not desc:
            rows.append((url, 'DESC_MISSING', ''))
        elif not (DESC_MIN <= len(desc) <= DESC_MAX):
            rows.append((url, 'DESC_LENGTH', f'{len(desc)} chars'))
        if not h1s:
            rows.append((url, 'H1_MISSING', ''))
        elif len(h1s) > 1:
            rows.append((url, 'H1_MULTIPLE', f'{len(h1s)} h1 tags'))
        if not can:
            rows.append((url, 'CANONICAL_MISSING', ''))

        if kw and url in EXEMPT:
            exempted.append((url, EXEMPT[url]))
        elif kw:
            if title and not covers(title, kw):
                rows.append((url, 'KW_NOT_IN_TITLE', f'"{kw}" | {title[:58]}'))
            if h1 and not covers(h1, kw):
                rows.append((url, 'KW_NOT_IN_H1', f'"{kw}" | {h1[:58]}'))
            if desc and not covers(desc, kw):
                rows.append((url, 'KW_NOT_IN_DESC', f'"{kw}"'))

    for t, us in titles.items():
        if len(us) > 1 and t:
            for u in us:
                rows.append((u, 'TITLE_DUPLICATE', f'{len(us)} pages share "{t[:45]}"'))
    for dsc, us in descs.items():
        if len(us) > 1:
            for u in us:
                rows.append((u, 'DESC_DUPLICATE', f'{len(us)} pages share this description'))

    by_kind = collections.Counter(k for _, k, _ in rows)
    print(f'audited {len(urls)} prerendered URLs\n')
    print('issues by kind')
    for k, n in by_kind.most_common():
        print(f'  {n:5}  {k}')
    print(f'\n  total {len(rows)} issues on {len(set(u for u, _, _ in rows))} URLs')
    print(f'  {len(exempted)} pages exempt by decision (see EXEMPT in this script)')

    out = os.path.join(REPO, 'docs/seo/onpage-audit.txt')
    with open(out, 'w') as f:
        for kind, _ in by_kind.most_common():
            f.write(f'\n===== {kind} =====\n')
            for u, k, note in sorted(rows):
                if k == kind:
                    f.write(f'{u:52} {note}\n')
    print(f'\nfull report -> {out}')
    return rows


if __name__ == '__main__':
    audit()
