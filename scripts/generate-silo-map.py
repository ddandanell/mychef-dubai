#!/usr/bin/env python3
"""
Build the internal-linking contract from the locked keyword map.

Input : docs/seo/mychef-master-keywords.json  (226 pages, silos, primaries)
        vercel.json                            (redirect sources)
Output: src/content/siloMap.json

Direction is fixed: hub -> children -> guides/blogs -> commercial owner.

Templates read one entry and render modules from it. Never hand-write a
sibling list for a new URL -- add the URL to the keyword map and regenerate,
because a guessed "You May Also Like" is how an exact-match farm starts.

    const page = siloMap.pages[path]
    page.siblings           -> replaces You May Also Like (4-5 same-silo relatives)
    page.featured_children  -> hub cards (hubs only, 6-12)
    page.silo_index         -> rest of the silo (hubs only)
    page.commercial_owners  -> blog/guide CTA to the booking page
    page.do_not_link        -> never render
"""
import json, os, re, collections

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(REPO, 'docs/seo/mychef-master-keywords.json')
VERCEL = os.path.join(REPO, 'vercel.json')
OUT_FULL = os.path.join(REPO, 'docs/seo/silo-map.json')      # human-readable, for audit
OUT_RUNTIME = os.path.join(REPO, 'src/content/siloMap.json')  # compact, shipped in the bundle

SIBLING_CAP = 5
CHILD_CAP = 12
OWNER_CAP = 2
GUIDE_CAP = 3
AREA_CAP = 3

# Pages that must never be rendered by an automatic module.
# Redirect sources and robots-disallowed paths are added programmatically.
SUPPRESSED = {
    # Household-plan modules. The flat URL owns the query; these are product
    # modules reached from inside the plan flow, not sitewide nav destinations.
    '/private-chef-dubai/how-it-works',
    '/private-chef-dubai/our-chefs',
    '/private-chef-dubai/pricing',
    '/private-chef-dubai/quality-training',
    '/private-chef-dubai/privacy-security',
    '/private-chef-dubai/how-your-plan-works',
    # Recruitment intent. Lives on About and Partners only.
    '/become-a-mychef',
}

# Out of sitewide nav, but still carried by its own silo. Suppressing it
# everywhere would leave a sitemapped page with zero internal links, which is
# worse than the low-margin traffic the blueprint warned about.
# (/staff-meals-catering-dubai was here; it is a corporate spoke, not a hub.)

# The 52 URLs the architecture file never assigned. Pattern -> (silo, hub).
# Ordered: first match wins.
FALLBACK_SILOS = [
    (r'^/$',                                   (None, None)),
    (r'^/(privacy-policy|terms|site-map)$',    ('Legal and Utility', None)),
    (r'^/chefs/',                              ('Private Chef', '/our-chefs')),
    (r'^/private-chef-dubai/',                 ('Private Chef', '/private-chef-dubai')),
    (r'^/(our-chefs|how-it-works|how-we-vet-our-chefs)$', ('Private Chef', '/private-chef-dubai')),
    (r'^/partners',                            ('Partners', '/partners')),
    (r'^/(partner-with-us|venue-partners|influencer-partnerships|become-a-mychef)$',
                                               ('Partners', '/partners')),
    (r'^/(mychef-membership|loyalty-programme|vip-club|referral-programme|founding-customer-offer)$',
                                               ('Membership and Offers', '/mychef-membership')),
    (r'^/allergen-aware-catering-dubai$',      ('Cuisines and Dietary', '/cuisines-dubai')),
    (r'^/blog$',                               ('Blog and Guides', None)),
    (r'^/(about|faq|contact|case-studies|press|gallery|review|booking-protection-insurance'
     r'|quality-guarantee-dubai|mychef-certified|chef-training-academy|trust-and-programs)$',
                                               ('Trust and About', '/about')),
]

# The architecture file filed some pillars under the wrong silo. The locked
# blueprint wins, exactly as it does for keywords. url -> (silo, hub).
SILO_OVERRIDES = {
    '/wedding-catering-dubai':   ('Catering', '/catering-dubai'),
    '/yachts':                   ('Catering', '/catering-dubai'),
    '/villas-private-residences':('Catering', '/catering-dubai'),
    '/private-jet-catering-dubai':('Catering', '/catering-dubai'),
    '/office-catering-dubai':    ('Corporate Catering', '/corporate'),
    '/romantic-dinner-dubai':    ('Dining Experiences', '/luxury-dining-experiences'),
    '/weekly-meal-prep-dubai':   ('Private Chef', '/private-chef-dubai'),
    '/private-chef-prices-dubai':('Private Chef', '/private-chef-dubai'),
    '/our-chefs':                ('Private Chef', '/private-chef-dubai'),
    '/cuisines-dubai':           ('Cuisines and Dietary', None),
    '/locations':                ('Locations', None),
}


# ---------------------------------------------------------------------------
# Sibling rules.
#
# TF-IDF alone gives same-silo padding, not next-step relevance. The test a
# sibling has to survive is: would this buyer click that card next, or is it
# only there because both URLs sit in the same folder? If the honest answer is
# the folder, it belongs in the hub's silo index, not in You May Also Like.
# ---------------------------------------------------------------------------

# Pages that render no siblings at all. Legal, forms, media and the nested
# household modules have no next step to sell.
NO_SIBLINGS = {
    '/privacy-policy', '/terms', '/site-map', '/contact', '/inquiry', '/thank-you',
    '/gallery', '/press', '/review', '/faq', '/blog', '/guides',
    '/private-chef-dubai/how-it-works', '/private-chef-dubai/our-chefs',
    '/private-chef-dubai/pricing', '/private-chef-dubai/quality-training',
    '/private-chef-dubai/privacy-security', '/private-chef-dubai/how-your-plan-works',
    '/staff-meals-catering-dubai', '/become-a-mychef',
}

# Geography, not keyword overlap. JVC does not next-step to Emirates Hills.
AREA_NEIGHBOURS = {
    'dubai-marina': ['jbr', 'bluewaters-island', 'jlt', 'palm-jumeirah'],
    'jbr': ['dubai-marina', 'bluewaters-island', 'palm-jumeirah', 'jlt'],
    'bluewaters-island': ['jbr', 'dubai-marina', 'palm-jumeirah'],
    'palm-jumeirah': ['dubai-marina', 'jbr', 'umm-suqeim', 'bluewaters-island'],
    'jlt': ['dubai-marina', 'jvc', 'jbr', 'al-barsha'],
    'jvc': ['jlt', 'al-barsha', 'dubai-hills', 'arabian-ranches'],
    'al-barsha': ['jvc', 'jlt', 'umm-suqeim', 'dubai-hills'],
    'umm-suqeim': ['jumeirah', 'al-barsha', 'palm-jumeirah'],
    'jumeirah': ['umm-suqeim', 'downtown-dubai', 'business-bay', 'difc'],
    'downtown-dubai': ['business-bay', 'difc', 'jumeirah'],
    'business-bay': ['downtown-dubai', 'difc', 'jumeirah'],
    'difc': ['downtown-dubai', 'business-bay', 'jumeirah'],
    'emirates-hills': ['dubai-hills', 'arabian-ranches', 'jvc'],
    'arabian-ranches': ['dubai-hills', 'emirates-hills', 'jvc'],
    'dubai-hills': ['emirates-hills', 'arabian-ranches', 'al-barsha'],
}

# Constraint families and calendars. A page only siblings inside its own family.
# Jain never sits next to halal -- the keyword review already killed that pair.
FAMILIES = [
    # dietary: allergy and intolerance
    ['/allergy-safe-catering-dubai', '/allergen-aware-catering-dubai', '/nut-free-catering-dubai',
     '/gluten-free-catering-dubai', '/dairy-free-catering-dubai', '/fodmap-catering-dubai'],
    # dietary: plant-based
    ['/vegan-catering-dubai', '/vegetarian-catering-dubai', '/jain-catering-dubai'],
    # dietary: macro and health
    ['/keto-catering-dubai', '/sugar-free-catering-dubai', '/healthy-catering-dubai',
     '/pescatarian-catering-dubai'],
    # faith
    ['/halal-catering-dubai', '/halal-private-dining-dubai'],
    # calendar: Ramadan
    ['/ramadan-catering-dubai', '/iftar-catering-dubai', '/suhoor-catering-dubai',
     '/eid-catering-dubai'],
    # calendar: western winter
    ['/christmas-catering-dubai', '/new-year-catering-dubai'],
    # calendar: cultural
    ['/diwali-catering-dubai', '/holi-catering-dubai', '/chinese-new-year-catering-dubai'],
    # calendar: secular days
    ['/valentines-day-catering-dubai', '/mothers-day-catering-dubai',
     '/fathers-day-catering-dubai', '/easter-catering-dubai'],
    # production crews, not boardrooms
    ['/film-crew-catering-dubai', '/production-catering-dubai'],
    # recruitment and B2B supply stay apart from customer pages
    ['/partner-with-us', '/venue-partners', '/partners/concierge-services-dubai',
     '/partners/event-planners-dubai', '/partners/villa-rentals-dubai',
     '/partners/yacht-charters-dubai'],
]
FAMILY_OF = {u: set(f) for f in FAMILIES for u in f}

# A sibling has to clear this much similarity. Below it the honest answer is
# "no next step", and the list is short or empty rather than padded.
SIBLING_FLOOR = 0.045

# Hubs, from the blueprint silo table. A hub renders featured_children +
# silo_index; everything else renders siblings.
HUBS = {
    '/catering-dubai', '/events', '/corporate', '/cuisines-dubai',
    '/luxury-dining-experiences', '/locations', '/catering-packages-dubai',
    '/guides', '/private-chef-dubai', '/blog', '/about', '/partners',
    '/our-chefs', '/mychef-membership',
}

STOP = {
    'dubai', 'in', 'at', 'a', 'the', 'for', 'and', 'to', 'of', 'my', 'your',
    'best', 'top', 'near', 'me', 'uae', 'price', 'prices', 'cost', 'costs',
    'per', 'person', 'how', 'much', 'is', 'do', 'you', 'can', 'what', 'with',
    'service', 'services', 'company', 'companies', 'mychef',
}


SMALL = {'a', 'an', 'and', 'at', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'vs', 'with'}
CAPS = {'bbq': 'BBQ', 'vip': 'VIP', 'difc': 'DIFC', 'jbr': 'JBR', 'jlt': 'JLT',
        'jvc': 'JVC', 'uae': 'UAE', 'faq': 'FAQ', 'mychef': 'myCHEF'}


def human_label(url):
    """Readable anchor text from the slug.

    Deliberately not the primary keyword. Anchors that all read
    "wedding catering dubai" are the exact-match pattern this project exists to
    remove, and varied natural anchors describe the destination better anyway.
    """
    if url == '/':
        return 'Home'
    slug = url.strip('/')
    for prefix in ('blog/', 'guide/', 'guides/', 'locations/', 'chefs/',
                   'partners/', 'private-chef-dubai/'):
        if slug.startswith(prefix):
            slug = slug[len(prefix):]
            break
    slug = re.sub(r'-dubai$', '', slug)
    words = [w for w in slug.split('-') if w]
    out = []
    for i, w in enumerate(words):
        if w in CAPS:
            out.append(CAPS[w])
        elif i > 0 and w in SMALL:
            out.append(w)
        else:
            out.append(w.capitalize())
    return ' '.join(out) or url


def editorial_routes():
    """URLs whose route element lives in src/pages/guides or src/pages/blog.

    Read from routes.tsx rather than guessed from the slug, because the
    editorial pages are exactly the ones the keyword map mistyped.
    """
    routes_tsx = os.path.join(REPO, 'src/routes.tsx')
    src = open(routes_tsx, encoding='utf-8').read()
    editorial_components = set(
        re.findall(r"const (\w+)[^=]*=\s*lazyPreloadable\(\(\)\s*=>\s*import\('\./pages/(?:guides|blog)/[^']+'\)\)", src)
    )
    urls = set()
    for path_str, comp in re.findall(r'\{\s*path:\s*"([^"]+)",\s*element:\s*<(\w+)', src):
        if comp in editorial_components:
            urls.add(path_str)
    return urls


def tokens(page):
    """Content fingerprint: every keyword on the page, minus geo/commodity noise."""
    bag = collections.Counter()
    for k in page.get('keywords', []):
        weight = 3 if k.get('role') == 'Primary' else 1
        for t in re.split(r'[^a-z0-9]+', k['keyword'].lower()):
            if t and t not in STOP and len(t) > 2:
                bag[t] += weight
    return bag


def idf_weights(bags):
    """Inverse document frequency across the corpus.

    Without this, "catering" and "menu" carry the same weight as "wedding" and
    every page looks equally related to every other -- which is how a related
    module degenerates into the same five generic links on all 216 URLs.
    """
    import math
    n = len(bags)
    df = collections.Counter()
    for bag in bags:
        df.update(set(bag))
    return {t: math.log(n / (1 + c)) + 0.25 for t, c in df.items()}


def similarity(a, b, idf):
    """TF-IDF cosine. Shared distinctive terms decide; shared boilerplate does not."""
    if not a or not b:
        return 0.0
    shared = set(a) & set(b)
    if not shared:
        return 0.0
    num = sum(a[t] * b[t] * idf.get(t, 1.0) ** 2 for t in shared)
    na = sum((v * idf.get(t, 1.0)) ** 2 for t, v in a.items()) ** 0.5
    nb = sum((v * idf.get(t, 1.0)) ** 2 for t, v in b.items()) ** 0.5
    return num / (na * nb) if na and nb else 0.0


def redirect_sources():
    cfg = json.load(open(VERCEL))
    return {r['source'] for r in cfg.get('redirects', []) if ':' not in r['source'] and '*' not in r['source']}


def main():
    data = json.load(open(SRC))
    pages = data['pages']

    dead = redirect_sources() | {'/inquiry', '/thank-you'}
    do_not_link = sorted(dead | SUPPRESSED)

    # ---- resolve silo + hub for every page -------------------------------
    silo_of, hub_of = {}, {}
    for url, p in pages.items():
        silo, hub = p.get('silo'), p.get('parent_hub')
        if url in SILO_OVERRIDES:
            silo, hub = SILO_OVERRIDES[url]
        elif not silo:
            for pattern, (s, h) in FALLBACK_SILOS:
                if re.match(pattern, url):
                    silo, hub = s, h
                    break
        silo_of[url] = silo
        hub_of[url] = hub if hub != url else None

    live = {u for u, p in pages.items() if p.get('live') and u not in dead}
    linkable = live - SUPPRESSED

    by_silo = collections.defaultdict(list)
    for u in sorted(live):
        if silo_of[u]:
            by_silo[silo_of[u]].append(u)

    children_of = collections.defaultdict(list)
    for u in sorted(live):
        if hub_of[u]:
            children_of[hub_of[u]].append(u)

    fp = {u: tokens(pages[u]) for u in live}
    idf = idf_weights(list(fp.values()))
    # Several guides are typed "Commercial landing page" in the map. The repo is
    # the honest signal: whatever routes.tsx renders from pages/guides or
    # pages/blog is editorial, whatever the spreadsheet called it.
    editorial = editorial_routes()
    is_guide = {u: (pages[u].get('page_type') == 'Blog / Guide / Tool'
                    or u in editorial
                    or u in ('/blog', '/guides')
                    or u.startswith(('/blog/', '/guide/'))) for u in live}
    is_commercial = {u: (not is_guide[u]
                         and pages[u].get('page_type') == 'Commercial landing page') for u in live}
    areas = sorted(u for u in live if u.startswith('/locations/'))

    def rank(cands, seed, cap, prefer=(), floor=0.0):
        """Rank by keyword overlap, weighted toward the seed's own family.

        A strict same-silo pool cannot serve a page whose nearest relatives were
        filed elsewhere -- wedding needs engagement and dessert table, which the
        blueprint files under Private Events. Widening the pool and biasing the
        family gets both: relatives first, genuine relevance second.
        """
        prefer = set(prefer)
        scored = sorted(((similarity(fp[seed], fp[c], idf) * (1.0 if c in prefer else 0.72), c)
                         for c in cands), key=lambda x: (-x[0], x[1]))
        # No padding. If nothing clears the floor the honest answer is that this
        # page has no next step, and the module renders nothing.
        return [c for sc, c in scored if sc > floor][:cap]

    def entry(url):
        return {'url': url,
                'label': human_label(url),
                'keyword': pages[url].get('primary_keyword'),
                'silo': silo_of[url]}

    out_pages = {}
    for url in sorted(live):
        silo, hub = silo_of[url], hub_of[url]
        hub_is = url in HUBS
        family = [u for u in by_silo.get(silo, []) if u != url and u in linkable and u not in HUBS]

        # Siblings: nearest same-silo relatives by keyword fingerprint.
        if url in NO_SIBLINGS:
            siblings = []
        elif url.startswith('/locations/'):
            # Geographic neighbours, in adjacency order. Someone comparing areas
            # compares the ones next door, not the ones with similar copy.
            area = url.rsplit('/', 1)[-1]
            siblings = [f'/locations/{a}' for a in AREA_NEIGHBOURS.get(area, [])
                        if f'/locations/{a}' in linkable][:SIBLING_CAP]
        elif url in FAMILY_OF:
            # Constraint families and calendars only. Everything else the page
            # relates to belongs in the hub index, not in You May Also Like.
            fam = [u for u in FAMILY_OF[url] if u != url and u in linkable]
            siblings = rank(fam, url, SIBLING_CAP) if fam else []
        else:
            kin = set(family) | {u for u in linkable if hub and hub_of[u] == hub and u != url}
            kind = is_guide[url]
            # The homepage is reached from the breadcrumb on every page. It is
            # never a lateral relative.
            pool = [u for u in linkable
                    if u != url and u != '/' and u not in HUBS and is_guide[u] == kind
                    and u not in NO_SIBLINGS and u not in FAMILY_OF]
            siblings = rank(pool, url, SIBLING_CAP, prefer=kin, floor=SIBLING_FLOOR) if pool else []

        featured, index = [], []
        if hub_is:
            kids = [u for u in children_of.get(url, []) if u in linkable and is_commercial[u]]
            featured = sorted(kids, key=lambda u: (-pages[u].get('keyword_count', 0), u))[:CHILD_CAP]
            # Own silo plus every declared child, so a spoke filed under a
            # different silo (seasonal hangs off /catering-dubai) still gets
            # hub inbound.
            index = sorted({u for u in by_silo.get(silo, []) + kids
                            if u in linkable and u != url and u not in featured})

        owners = []
        if is_guide[url]:
            pool = [u for u in linkable if is_commercial[u]]
            owners = rank(pool, url, OWNER_CAP)

        guides = []
        if is_commercial[url]:
            pool = [u for u in linkable if is_guide[u]]
            guides = rank(pool, url, GUIDE_CAP)

        crumb = [{'url': '/', 'label': 'Home'}]
        if hub and hub in pages:
            crumb.append({'url': hub, 'label': human_label(hub)})
        crumb.append({'url': url, 'label': human_label(url)})

        out_pages[url] = {
            'url': url,
            'silo': silo,
            'hub': hub,
            'is_hub': hub_is,
            'page_type': pages[url].get('page_type'),
            'primary_keyword': pages[url].get('primary_keyword'),
            'breadcrumb': crumb,
            'uplink': ({'url': hub, 'label': human_label(hub),
                        'keyword': pages[hub].get('primary_keyword')}
                       if hub and hub in pages else None),
            'siblings': [entry(u) for u in siblings],
            'featured_children': [entry(u) for u in featured],
            'silo_index': [entry(u) for u in index],
            'commercial_owners': [entry(u) for u in owners],
            'supporting_guides': [entry(u) for u in guides],
            'areas': ([entry(u) for u in rank(areas, url, AREA_CAP)] if areas and not url.startswith('/locations') else []),
        }

    edges = sum(len(p['siblings']) + len(p['featured_children']) + len(p['silo_index'])
                + len(p['commercial_owners']) + len(p['supporting_guides']) + len(p['areas'])
                for p in out_pages.values())
    inbound = collections.Counter()
    for src, p in out_pages.items():
        targets = [e['url'] for e in p['siblings'] + p['featured_children'] + p['silo_index']
                   + p['commercial_owners'] + p['supporting_guides'] + p['areas']]
        targets += [c['url'] for c in p['breadcrumb']]
        if p['uplink']:
            targets.append(p['uplink']['url'])
        for t in set(targets):
            if t != src:
                inbound[t] += 1
    # Legal and utility pages live in the global footer by design. They are not
    # part of any silo and must not be padded into a contextual module.
    footer_only = {'/privacy-policy', '/terms', '/site-map'}
    orphans = sorted(u for u in linkable if inbound[u] == 0 and u not in footer_only)

    doc = {
        'schema_version': '1',
        'generated_from': 'docs/seo/mychef-master-keywords.json',
        'direction': 'hub -> children -> guides/blogs -> commercial owner',
        'how_to_use': [
            'const page = siloMap.pages[path]',
            'page.siblings          — replaces You May Also Like',
            'page.featured_children — hub cards, hubs only',
            'page.silo_index        — rest of the silo, hubs only',
            'page.commercial_owners — blog/guide CTA to the booking page',
            'page.do_not_link       — never render',
            'Do not hand-write a sibling list. Add the URL to the keyword map and regenerate.',
        ],
        'stats': {
            'pages': len(out_pages),
            'linkable': len(linkable),
            'contextual_edges': edges,
            'orphans': len(orphans),
            'silos': len(by_silo),
        },
        'do_not_link': do_not_link,
        'orphans': orphans,
        'silos': {s: sorted(u for u in v) for s, v in sorted(by_silo.items())},
        'pages': out_pages,
    }

    with open(OUT_FULL, 'w') as f:
        json.dump(doc, f, indent=1, ensure_ascii=False)
        f.write('\n')

    # ---- compact runtime encoding ---------------------------------------
    # The readable form is ~450KB, which would sit in the main bundle and be
    # parsed on every page load. Ship an index-encoded version instead and let
    # src/content/siloMap.ts hand the ergonomic shape back to templates.
    # do_not_link must be in the index even though these URLs are never link
    # targets -- otherwise the runtime set silently loses the redirect sources
    # and the disallowed paths, which are the ones a template most needs to
    # refuse to render.
    urls = sorted({u for u in out_pages} | set(do_not_link) | {e['url']
                  for p in out_pages.values()
                  for e in p['siblings'] + p['featured_children'] + p['silo_index']
                  + p['commercial_owners'] + p['supporting_guides'] + p['areas']
                  + p['breadcrumb'] + ([p['uplink']] if p['uplink'] else [])})
    idx = {u: i for i, u in enumerate(urls)}
    labels = [human_label(u) for u in urls]

    def ids(entries):
        return [idx[e['url']] for e in entries]

    compact = {
        'u': urls,
        'l': labels,
        'd': [idx[u] for u in do_not_link],
        'p': {u: {
            'h': idx[p['uplink']['url']] if p['uplink'] else -1,
            'H': 1 if p['is_hub'] else 0,
            'b': [idx[c['url']] for c in p['breadcrumb']],
            's': ids(p['siblings']),
            'c': ids(p['featured_children']),
            'i': ids(p['silo_index']),
            'o': ids(p['commercial_owners']),
            'g': ids(p['supporting_guides']),
            'a': ids(p['areas']),
            'z': p['silo'] or '',
        } for u, p in out_pages.items()},
    }
    with open(OUT_RUNTIME, 'w') as f:
        json.dump(compact, f, separators=(',', ':'), ensure_ascii=False)
        f.write('\n')

    print(f"pages            {doc['stats']['pages']}")
    print(f"linkable         {doc['stats']['linkable']}")
    print(f"contextual edges {doc['stats']['contextual_edges']}")
    print(f"silos            {doc['stats']['silos']}")
    print(f"orphans          {doc['stats']['orphans']}")
    for o in orphans:
        print('   orphan:', o)
    print(f"readable        {os.path.getsize(OUT_FULL)//1024} KB  {OUT_FULL}")
    print(f"runtime         {os.path.getsize(OUT_RUNTIME)//1024} KB  {OUT_RUNTIME}")


if __name__ == '__main__':
    main()
