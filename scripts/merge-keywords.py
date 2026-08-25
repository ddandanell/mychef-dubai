#!/usr/bin/env python3
"""Historical merge only. Do not feed the output to writers.

Shipping contract: docs/seo/myCHEF-AE-SEO-STANDARD.json
"""
import json, re, os, glob, sys
from collections import defaultdict

REPO = '/Users/openclaw/Documents/GitHub/mychef-dubai'
DL   = os.path.expanduser('~/Downloads')

def norm_url(u):
    if not u: return None
    u = u.strip()
    u = re.sub(r'^https?://(www\.)?mychef\.ae', '', u)
    u = u.split('?')[0].split('#')[0]
    if not u.startswith('/'): u = '/' + u
    if len(u) > 1 and u.endswith('/'): u = u[:-1]
    return u

def norm_kw(k):
    if not k: return None
    k = re.sub(r'\s+', ' ', str(k)).strip().lower()
    k = k.strip('.,;:—–-*_`"\'')
    # strip markdown bold/italics leftovers
    k = k.replace('**','').replace('*','').strip()
    if len(k) < 3 or len(k) > 90: return None
    if k in ('—','-','n/a','none','null'): return None
    return k

# url -> keyword -> {roles:set, intents:set, sources:set, silos:set}
PAGES = defaultdict(lambda: defaultdict(lambda: {'roles': set(), 'intents': set(), 'sources': set()}))
META  = defaultdict(lambda: {'silo': set(), 'parent_hub': set(), 'page_type': set(),
                             'primary_claims': defaultdict(set), 'notes': []})
SOURCE_STATS = {}

def add(url, kw, role, source, intent=None):
    u, k = norm_url(url), norm_kw(kw)
    if not u or not k: return False
    e = PAGES[u][k]
    if role: e['roles'].add(role)
    if intent: e['intents'].add(intent)
    e['sources'].add(source)
    if role == 'Primary':
        META[u]['primary_claims'][k].add(source)
    return True

# ─────────── 1. architecture JSON (500 kw) ───────────
src = 'architecture-500'
n = 0
arch = json.load(open(f'{DL}/mychef_ae_keyword_architecture_500.json'))
for r in arch.get('keyword_map', []):
    if add(r.get('target_url'), r.get('keyword'), r.get('role'), src, r.get('search_intent')):
        n += 1
    u = norm_url(r.get('target_url'))
    if u:
        if r.get('silo'): META[u]['silo'].add(r['silo'])
        if r.get('parent_hub'): META[u]['parent_hub'].add(norm_url(r['parent_hub']))
for r in arch.get('page_ownership', []):
    u = norm_url(r.get('target_url'))
    if u and r.get('page_type'): META[u]['page_type'].add(r['page_type'])
SOURCE_STATS[src] = n

# ─────────── 2. MYCHEF-KEYWORD-MAP.md ───────────
src = 'keyword-map-md'
n = 0
md = open(f'{DL}/MYCHEF-KEYWORD-MAP.md', encoding='utf-8').read()
# rows: | `/url` | **main** | sub; sub; sub | previous |
row = re.compile(r'^\|\s*`([^`]+)`\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|', re.M)
for m in row.finditer(md):
    u, main, subs = m.group(1), m.group(2), m.group(3)
    if not u.startswith('/'): continue
    main_clean = norm_kw(main)
    # skip the "why no keyword target" table (col2 is prose, not a keyword)
    if main_clean and '**' in main and add(u, main_clean, 'Primary', src):
        n += 1
    for s in re.split(r'[;·]', subs):
        if add(u, s, 'Secondary', src): n += 1
SOURCE_STATS[src] = n

# ─────────── 3. seo-pages/*.json (live on-page strategy) ───────────
src = 'seo-pages-json'
n = 0
routes_map = {}
rp = f'{REPO}/src/content/seo/routes.json'
if os.path.exists(rp):
    routes_map = {v: k for k, v in json.load(open(rp)).items()}  # slug -> url
for f in glob.glob(f'{REPO}/src/content/seo-pages/*.json'):
    try: d = json.load(open(f))
    except Exception: continue
    slug = os.path.basename(f)[:-5]
    u = norm_url(d.get('url')) or routes_map.get(slug) or '/' + slug
    ks = d.get('keyword_strategy') or {}
    if isinstance(ks, dict):
        if add(u, ks.get('main_keyword'), 'Primary', src): n += 1
        for s in ks.get('subkeywords_carried_list') or []:
            if add(u, s, 'Secondary', src): n += 1
        for s in ks.get('subkeywords_dropped_list') or []:
            if add(u, s, 'Dropped', src): n += 1
SOURCE_STATS[src] = n

# ─────────── 4. TypeScript keyword locks (authoritative, in-code) ───────────
src = 'code-locks'
n = 0
PATHS = {}
for f in glob.glob(f'{REPO}/src/content/*.ts'):
    t = open(f, encoding='utf-8').read()
    for pm in re.finditer(r"(\w+):\s*'(/[a-z0-9/\-]*)'", t):
        PATHS[pm.group(1)] = pm.group(2)
    # blocks: key: { primary: '...', secondary: [...] }  OR hub: {...}
    for bm in re.finditer(r"(\w+):\s*\{([^{}]*?primary:\s*'[^']+'[^{}]*?(?:\[[^\]]*\][^{}]*?)?)\}", t, re.S):
        key, body = bm.group(1), bm.group(2)
        prim = re.search(r"primary:\s*'([^']+)'", body)
        if not prim: continue
        url = PATHS.get(key)
        if not url:
            # map by convention: hub/kids/package/dinnerArticle etc already in PATHS
            continue
        if add(url, prim.group(1), 'Primary', src): n += 1
        sec = re.search(r"secondary:\s*\[(.*?)\]", body, re.S)
        if sec:
            for s in re.findall(r"'([^']+)'", sec.group(1)):
                if add(url, s, 'Secondary', src): n += 1
SOURCE_STATS[src] = n

# ─────────── 5. birthday total-SEO plan (140 research keywords) ───────────
src = 'birthday-seo-plan'
n = 0
plan = open(f'{DL}/mychef-birthday-catering-dubai-total-seo-plan.md', encoding='utf-8').read()
# section -> owning URL per the plan's own cannibalisation table
SECTION_URL = [
    (r'## 10\. Kids birthday keywords', '/kids-birthday-catering-dubai'),
    (r'## 11\. Private chef and intimate dinner', '/blog/best-private-chef-birthday-dinner-dubai'),
]
cur, bounds = '/birthday-catering-dubai', []
for pat, u in SECTION_URL:
    m = re.search(pat, plan)
    if m: bounds.append((m.start(), u))
nxt = re.search(r'## 12\. Menu and service-format', plan)
def owner(pos):
    for start, u in bounds:
        end = nxt.start() if (u.endswith('dinner-dubai') and nxt) else None
        seg_end = end or (bounds[bounds.index((start,u))+1][0] if bounds.index((start,u))+1 < len(bounds) else (nxt.start() if nxt else len(plan)))
        if start <= pos < seg_end: return u
    return '/birthday-catering-dubai'
for m in re.finditer(r'^- ([a-z][^\n]*?(?:dubai|Dubai)[^\n]*)$', plan, re.M):
    kw = m.group(1)
    if kw.startswith('['): continue
    if add(owner(m.start()), kw, 'Research', src): n += 1
SOURCE_STATS[src] = n

# ─────────── 6. gap fill: live pages that no source gave any keyword ───────────
# These are DERIVED from each page's own subject, not from research, and no keyword
# tool could validate them (Ahrefs: insufficient plan / Semrush: no API units /
# Bing: API error on 2026-08-25). Role "Proposed" keeps them separable from
# researched terms — validate volume before investing in any of them.
src = 'assigned-2026-08-25'
n = 0
GAP_FILL = {
    # sector catering pages — live, previously no target at all
    '/school-catering-dubai':            ('school catering dubai', ['school lunch catering dubai','student meal catering dubai','school canteen catering dubai','school event catering dubai']),
    '/university-catering-dubai':        ('university catering dubai', ['student catering dubai','campus catering dubai','university event catering dubai']),
    '/nursery-catering-dubai':           ('nursery catering dubai', ['nursery meal catering dubai','toddler meal catering dubai','early years catering dubai']),
    '/healthcare-catering-dubai':        ('healthcare catering dubai', ['hospital catering dubai','clinic catering dubai','patient meal catering dubai','medical facility catering dubai']),
    '/government-event-catering-dubai':  ('government event catering dubai', ['government catering dubai','official event catering dubai','protocol catering dubai','vip government dining dubai']),
    # pages created 2026-08-25 — no source predates them
    '/trust-and-programs':               ('mychef trust and programs', ['private chef standards dubai','catering quality guarantee dubai','mychef membership programmes']),
    # /partners: navigational hub, no primary — /partner-with-us owns 'catering partnerships dubai'
    '/partners':                         (None, ['private chef partner programme dubai','catering partner dubai','villa and yacht catering partners dubai']),
    '/private-chef-dubai/how-your-plan-works': ('how private chef plans work dubai', ['private chef plan terms dubai','private chef billing dubai','private chef rescheduling policy dubai']),
    '/chefs/matteo-pastry-chef':         ('private pastry chef dubai', ['dessert chef dubai','pastry chef for events dubai']),
}
for u, (prim, subs) in GAP_FILL.items():
    if prim and add(u, prim, 'Primary', src): n += 1
    for k in subs:
        if add(u, k, 'Proposed', src): n += 1
SOURCE_STATS[src] = n

# ─────────── build output ───────────
live_raw = set(l.strip() for l in open('/tmp/live_urls.txt') if l.strip())
DYNAMIC = [p for p in live_raw if ':' in p]
live = {p for p in live_raw if ':' not in p}
def is_live(u):
    if u in live: return True
    for d in DYNAMIC:                      # '/locations/:slug' covers '/locations/jbr'
        base = d.split('/:')[0]
        if u.startswith(base + '/') and u.count('/') == d.count('/'): return True
    return False

ROLE_RANK = {'Primary': 0, 'Secondary': 1, 'Long-tail': 2, 'Research': 3, 'Proposed': 4, 'Dropped': 5}
def best_role(roles):
    return sorted(roles, key=lambda r: ROLE_RANK.get(r, 9))[0] if roles else 'Secondary'

pages_out, conflicts, all_primary = {}, [], defaultdict(set)
for u in sorted(set(list(PAGES.keys()) + list(live))):
    kws = PAGES.get(u, {})
    meta = META[u]
    claims = meta['primary_claims']
    # primary = most-sourced claim; ties broken by code-locks > seo-pages > map > architecture
    # Authority order for choosing the primary:
    #   code-locks      hand-written in-code ownership (newest, deliberate)
    #   keyword-map-md  the reviewed correction set — it exists BECAUSE it fixed 77 bad mains
    #   architecture-500 fresh 500-kw research, but machine-generated phrasing
    #   seo-pages-json  the legacy on-page state the map was correcting — lowest authority
    PRIO = {'code-locks': 0, 'keyword-map-md': 1, 'architecture-500': 2, 'seo-pages-json': 3}
    ranked = sorted(claims.items(), key=lambda kv: (min(PRIO.get(s, 9) for s in kv[1]), -len(kv[1])))
    primary = ranked[0][0] if ranked else None
    if len(ranked) > 1:
        conflicts.append({'url': u, 'type': 'primary_disagreement',
                          'chosen': primary,
                          'candidates': [{'keyword': k, 'sources': sorted(v)} for k, v in ranked]})
    if primary: all_primary[primary].add(u)
    entries = []
    for k, e in sorted(kws.items(), key=lambda kv: (ROLE_RANK.get(best_role(kv[1]['roles']), 9), kv[0])):
        entries.append({'keyword': k,
                        'role': 'Primary' if k == primary else ('Secondary' if best_role(e['roles']) == 'Primary' else best_role(e['roles'])),
                        'intent': sorted(e['intents'])[0] if e['intents'] else None,
                        'sources': sorted(e['sources'])})
    pages_out[u] = {
        'url': u,
        'live': is_live(u),
        'silo': sorted(meta['silo'])[0] if meta['silo'] else None,
        'parent_hub': sorted(meta['parent_hub'])[0] if meta['parent_hub'] else None,
        'page_type': sorted(meta['page_type'])[0] if meta['page_type'] else None,
        'primary_keyword': primary,
        'keyword_count': len(entries),
        'keywords': entries,
    }

# cross-page primary collisions
for k, urls in sorted(all_primary.items()):
    live_urls = sorted(u for u in urls if pages_out[u]['live'])
    if len(live_urls) > 1:
        conflicts.append({'type': 'primary_collision', 'keyword': k, 'urls': live_urls,
                          'action': 'One exact intent = one owner URL. Pick one; narrow the others.'})

gaps = sorted(u for u in live if not pages_out.get(u, {}).get('keywords'))
dead = sorted(u for u in pages_out if not pages_out[u]['live'])

out = {
    'schema_version': '2.0',
    'project': 'myCHEF Dubai — master keyword map',
    'generated_at': '2026-08-25',
    'site': 'https://www.mychef.ae',
    'how_to_use': [
        'One primary keyword per URL. Never target another page\'s primary.',
        'Secondary keywords belong inside sentences, never in headings.',
        'Role "Research" = from a research doc, not yet placed on the page.',
        'Role "Dropped" = deliberately not carried; kept for the record.',
        'Role "Proposed" = assigned to close a gap, never validated. Check volume before investing.',
        '"sources" shows every input that claimed the keyword for this URL.',
        'Volume/KD/CPC are absent: no keyword tool returned data. Do not invent them.',
    ],
    'sources': {
        'architecture-500': 'mychef_ae_keyword_architecture_500.json — 500 kw, roles + intent + silo + hub',
        'keyword-map-md': 'MYCHEF-KEYWORD-MAP.md — 197 mains + 984 subkeywords (19 Aug 2026 crawl)',
        'seo-pages-json': 'src/content/seo-pages/*.json — what each page actually carries today',
        'code-locks': 'src/content/*.ts KEYWORD_LOCKS — authoritative in-code ownership',
        'assigned-2026-08-25': 'Derived from each page subject to close zero-keyword gaps. UNVALIDATED — no tool returned volume.',
        'birthday-seo-plan': 'mychef-birthday-catering-dubai-total-seo-plan.md — 140 researched birthday terms',
        'excluded': 'anserSocrates_long_tail_keywords.csv — Bali market, not Dubai. Deliberately not merged.',
    },
    'stats': {},
    'conflicts': conflicts,
    'live_urls_without_keywords': gaps,
    'mapped_urls_not_live': dead,
    'pages': pages_out,
}
total_kw = sum(p['keyword_count'] for p in pages_out.values())
uniq = len({e['keyword'] for p in pages_out.values() for e in p['keywords']})
out['stats'] = {
    'pages_total': len(pages_out),
    'pages_live': len(live) + len(DYNAMIC),
    'pages_with_keywords': sum(1 for p in pages_out.values() if p['keyword_count']),
    'keyword_assignments': total_kw,
    'unique_keywords': uniq,
    'primary_collisions': sum(1 for c in conflicts if c['type'] == 'primary_collision'),
    'primary_disagreements': sum(1 for c in conflicts if c['type'] == 'primary_disagreement'),
    'live_urls_without_keywords': len(gaps),
    'mapped_urls_not_live': len(dead),
    'per_source_assignments': SOURCE_STATS,
}
dest = f'{REPO}/docs/seo/mychef-master-keywords.json'
json.dump(out, open(dest, 'w'), indent=1, ensure_ascii=False)
print(json.dumps(out['stats'], indent=1))
print('\nwrote:', dest)
