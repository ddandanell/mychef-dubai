#!/usr/bin/env python3
"""Plan, stage and verify reviewed editorial batches. Does not generate filler."""
import argparse
import hashlib
import importlib.util
import json
import re
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parents[1]
SITE = 'https://www.mychef.ae'
CONTRACT = 'docs/seo/myCHEF-AE-SEO-STANDARD.json'
POLICY = 'blog/publishing-policy.json'
LEDGER = 'blog/publishing-ledger.json'
STOP = set('a an the in for of to with and on at your dubai mychef how what when is'.split())


def read(name):
    return json.loads((ROOT / name).read_text())


def save(name, data):
    (ROOT / name).write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')


def today():
    return datetime.now(ZoneInfo(read(POLICY)['day_timezone'])).date().isoformat()


def digest(article):
    return hashlib.sha256(json.dumps(article, sort_keys=True, ensure_ascii=False).encode()).hexdigest()


def tokens(text):
    return set(re.findall(r'[a-z0-9]+', text.lower())) - STOP


def similar(a, b):
    a, b = tokens(a), tokens(b)
    return bool(a and b) and len(a & b) / len(a | b) >= 0.7


def owner_slots(policy, cursor, count):
    cycle = policy['owner_cycle']
    return [cycle[(cursor + i) % len(cycle)] for i in range(count)]


def allowance(ledger, date, target):
    return target - sum(len(b['articles']) for b in ledger['batches']
        if b.get('verification', {}).get('publication_day', b['date']) == date)


def append_contract(original, additions):
    """Add pages without reformatting or mutating any existing contract."""
    expected = json.loads(original)
    assert not (set(expected['pages']) & set(additions)), 'Existing page contracts cannot be replaced'
    expected['pages'].update(additions)
    start = original.index('{', original.index('"pages"'))
    _, end = json.JSONDecoder().raw_decode(original, start)
    fragment = json.dumps(additions, ensure_ascii=False, indent=1)[2:-2]
    fragment = '\n'.join(' ' + line for line in fragment.splitlines())
    updated = original[:end - 1].rstrip() + ',\n' + fragment + '\n ' + original[end - 1:]
    assert json.loads(updated) == expected
    return updated


def ownership_validator():
    spec = importlib.util.spec_from_file_location('ownership', ROOT / 'scripts/verify-blog-ownership.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.validate_article


def page_record(article, owner, anchor):
    route = '/blog/' + article['slug']
    hub_url = '/blog/topic/' + article['hub']
    hub_title = read(POLICY)['hub_titles'][article['hub']]
    return {
        'url': route, 'absolute_url': SITE + route, 'silo': 'Blog and Guides',
        'silo_priority': 'P2', 'page_type': 'Blog post', 'hub': hub_url,
        'is_hub': False, 'status': 'LOCKED',
        'intent_owner': {'primary_keyword': article['primary_keyword'], 'subkeywords': [],
                         'subkeyword_cap': 8,
                         'primary_may_appear_in': ['title', 'h1', 'first_100_words', 'one_subheading'],
                         'subkeywords_may_appear_in': ['body_sentences_only'],
                         'subkeywords_must_not_appear_in': ['h1', 'h2', 'h3', 'title'],
                         'subkeyword_notes': {}},
        'on_page': {'title': article['meta_title'], 'title_max_chars': 65,
                    'h1': article['title'], 'h1_count': 1,
                    'meta_description': article['meta_description'], 'meta_description_max_chars': 160,
                    'og_title': article['meta_title'], 'og_type': 'article'},
        'indexation': {'robots': {'index': True, 'follow': True}, 'canonical': SITE + route,
                       'redirect_to': None, 'in_sitemap': True},
        'schema': ['WebPage', 'Article', 'BreadcrumbList'],
        'internal_linking': {
            'breadcrumb': [{'url': '/', 'anchor': 'Home'}, {'url': '/blog', 'anchor': 'Blog'},
                           {'url': hub_url, 'anchor': hub_title},
                           {'url': route, 'anchor': article['title'], 'current': True}],
            'uplink_hub': {'url': owner, 'anchor': anchor, 'alt_anchors': []},
            'siblings': [], 'commercial_owners': [{'url': owner, 'anchor': anchor, 'alt_anchors': []}],
            'supporting_guides': []},
        'content_source': 'blog/data/' + article['slug'] + '.json',
        'authority': {'role': 'supporting', 'purpose': 'editorial', 'money_page': owner,
                      'anchor': anchor, 'title': article['meta_title'], 'h1': article['title'],
                      'description': article['meta_description']},
    }


def check_editorial(article, review, photo_ids, photos, pages, owner, redirects):
    route = '/blog/' + article['slug']
    assert re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*', article['slug']), 'Invalid slug'
    for field in ['reader_question', 'distinct_value', 'overlap_review', 'claims_review', 'demand_basis']:
        assert len(review.get(field, '').strip()) >= 25, 'Document editorial review: ' + field
    assert review.get('nearest_existing_url') in pages, 'Review the closest existing page'
    assert len(article['meta_title']) <= 60 and 140 <= len(article['meta_description']) <= 160, 'Use a concise title and a useful 140–160 character description'
    assert article.get('hub') in read(POLICY)['hub_titles'], 'Assign an existing topic cluster'
    backlinks = article.get('related_from', [])
    assert len(set(backlinks)) >= 2 and all(u in pages and pages[u].get('page_type') == 'Blog post' for u in backlinks), 'Choose two existing relevant guides for reverse links'
    evidence = review.get('demand_evidence', {})
    assert evidence.get('source') == 'GSC' and evidence.get('observed_query') and evidence.get('impressions', 0) > 0, 'Record measured topic demand, never invent keyword volumes'
    assert 'exact_query_demand' in evidence and 'volume' in evidence, 'Distinguish observed topic demand from exact-keyword volume'
    body = article.get('body_html', '')
    assert len(re.findall(r'<h2\b', body, re.I)) >= 2, 'Explain the question in useful sections'
    assert re.search(r'<(?:ul|ol|table)\b', body, re.I), 'Include an actionable checklist or decision aid'
    assert not re.search(r'<(?:iframe|form|style)\b|\bon\w+\s*=|javascript:', body, re.I), 'Unsafe article HTML'
    assert len(photo_ids) >= 3 and len(photo_ids) == len(set(photo_ids)), 'Choose three distinct photographs'
    for pid in photo_ids:
        p = photos.get(pid)
        assert p and p.get('sourceBatch', 0) > 0, 'Only approved original photographs: ' + pid
        assert (ROOT / 'public' / p['src'].lstrip('/')).is_file(), 'Missing photo asset'
        assert p.get('width', 0) > 0 and p.get('height', 0) > 0 and p.get('alt'), 'Missing image metadata'
    assert article.get('supporting_pages') == [owner], 'Use the single assigned owner'
    errors = ownership_validator()(article, pages[route], set(read(POLICY)['owner_cycle']), redirects, pages)
    assert not errors, route + ': ' + '; '.join(errors)


def plan():
    policy, ledger, contract = read(POLICY), read(LEDGER), read(CONTRACT)
    date = today()
    remaining = allowance(ledger, date, policy['daily_target'])
    queue = []
    for file in sorted((ROOT / 'blog/data').glob('*.json')):
        a = json.loads(file.read_text())
        if a.get('status') != 'published':
            queue.append({'slug': a['slug'], 'title': a.get('title'), 'status': a.get('status')})
    print(json.dumps({'date': date, 'remaining': remaining,
        'owner_slots': owner_slots(policy, ledger['next_slot'], remaining),
        'recover_before_new_work': [b for b in ledger['batches'] if b['status'] != 'live'],
        'queued_imports': queue,
        'existing_topics': [{'path': url, 'title': p['on_page']['h1'],
            'primary': p['intent_owner'].get('primary_keyword')}
            for url, p in contract['pages'].items() if url.startswith('/blog/')]}, indent=2))


def stage(payload_file):
    policy, ledger = read(POLICY), read(LEDGER)
    date = today()
    payload = json.loads(Path(payload_file).read_text())
    assert payload['date'] == date, 'Use the actual Dubai publishing day; never backdate batches'
    assert not any(b['status'] != 'live' for b in ledger['batches']), 'Recover the staged batch before starting another'
    items = payload['articles']
    remaining = allowance(ledger, date, policy['daily_target'])
    assert 0 < len(items) <= remaining, f'Daily allowance exceeded ({remaining} remaining)'
    assert len(items) == remaining or len(payload.get('shortfall_reason', '')) >= 25, 'Document any genuine shortfall'
    contract_text = (ROOT / CONTRACT).read_text()
    contract = json.loads(contract_text)
    pages = contract['pages']
    redirects = {r['source'] for r in read('vercel.json')['redirects']}
    photos = {p['id']: p for p in read('src/content/previousWorkPhotos.json')}
    photography, media = read('src/content/blogPhotography.json'), read('src/content/blogMedia.json')
    expected = owner_slots(policy, ledger['next_slot'], len(items))
    additions, prepared, records = {}, {}, []
    stamp = datetime.now(ZoneInfo('UTC')).isoformat(timespec='seconds').replace('+00:00', 'Z')
    for i, item in enumerate(items):
        a, review, ids = dict(item['article']), item['review'], item['photo_ids']
        owner, route = item['owner'], '/blog/' + a['slug']
        assert owner == expected[i], f'Owner rotation expects {expected[i]}'
        assert route not in pages and route not in redirects and route not in additions, 'Existing URLs require maintenance, not a new publication'
        primary = a['primary_keyword'].strip().lower()
        assert primary, 'Choose a distinct informational intent'
        for url, p in {**pages, **additions}.items():
            assert primary != (p.get('intent_owner', {}).get('primary_keyword') or '').strip().lower(), 'Existing intent: ' + url
            if p.get('page_type') == 'Blog post':
                assert not similar(a['title'], p['on_page']['h1']), 'Review a possibly duplicate title: ' + url
        source = 'blog/data/' + a['slug'] + '.json'
        if (ROOT / source).exists():
            upstream = read(source)
            assert upstream.get('status') == 'pending_review', 'Hold the upstream draft before approval'
            a['import_review'] = {'upstream_status': upstream.get('import_review', {}).get('upstream_status'),
                                  'reviewed_for': date}
            a['upstream_published_at'] = upstream.get('published_at')
        a.update({'status': 'published', 'published_at': stamp, 'updated_at': stamp,
                  'supporting_pages': [owner], 'category': 'Planning guides'})
        a['image'] = {'url': photos[ids[0]]['src'], 'alt': photos[ids[0]]['alt'], **({'caption': item['hero_caption']} if item.get('hero_caption') else {})}
        p = page_record(a, owner, item['owner_anchor'])
        additions[route] = p
        check_editorial(a, review, ids, photos, {**pages, **additions}, owner, redirects)
        prepared[source] = a
        hero = {'src': photos[ids[0]]['src'], 'alt': photos[ids[0]]['alt']}
        captions = item['photo_captions']
        assert len(captions) == len(ids) - 1 and all(c.strip() for c in captions), 'Caption each inline photo'
        photography[route] = {'hero': hero, 'inline': [
            {'src': photos[pid]['src'], 'alt': photos[pid]['alt'], 'caption': captions[j],
             'width': photos[pid]['width'], 'height': photos[pid]['height']}
            for j, pid in enumerate(ids[1:])],
            'provenance': 'Owner-supplied myCHEF previous-work photographs, catalogued source batches. Illustrate service context; not evidence of the hypothetical plan described.'}
        media['pages'][route] = {'hero': hero}
        for pid in ids:
            im = photos[pid]
            media['widths'][im['src']] = im['width']
            media['dimensions'][im['src']] = {'width': im['width'], 'height': im['height']}
            media['srcsets'][im['src']] = f"{im['thumbnail']} {im['thumbnailWidth']}w, {im['src']} {im['width']}w"
        records.append({'path': route, 'owner': owner, 'source_sha256': digest(a),
                        'photo_ids': ids, 'review': review})
    updated_contract = append_contract(contract_text, additions)
    # Validate the complete batch before writing; publish all files in one Git commit.
    for name, data in prepared.items():
        save(name, data)
    (ROOT / CONTRACT).write_text(updated_contract)
    save('src/content/blogPhotography.json', photography)
    save('src/content/blogMedia.json', media)
    ledger['batches'].append({'id': date + '-' + str(len(ledger['batches']) + 1),
        'date': date, 'status': 'staged', 'staged_at': stamp, 'articles': records,
        **({'shortfall_reason': payload['shortfall_reason']} if payload.get('shortfall_reason') else {})})
    ledger['next_slot'] += len(items)
    save(LEDGER, ledger)
    print(f'Staged {len(items)} reviewed articles for {date}; regenerate projections, test and deploy before counting them live.')


def verify():
    policy, ledger, contract = read(POLICY), read(LEDGER), read(CONTRACT)
    assert policy['daily_target'] == 5 and set(policy['owner_cycle']) == set(contract['authority_policy']['money_pages'])
    photos = {p['id']: p for p in read('src/content/previousWorkPhotos.json')}
    redirects = {r['source'] for r in read('vercel.json')['redirects']}
    counts, seen = {}, set()
    for batch in ledger['batches']:
        assert batch['status'] in ['staged', 'live']
        day = batch.get('verification', {}).get('publication_day', batch['date'])
        counts[day] = counts.get(day, 0) + len(batch['articles'])
        assert counts[day] <= policy['daily_target'], 'Daily cap exceeded'
        for entry in batch['articles']:
            route = entry['path']
            assert route not in seen and route not in ledger['baseline_routes'], 'Duplicate publication'
            seen.add(route)
            article = read('blog/data/' + route.split('/')[-1] + '.json')
            assert digest(article) == entry['source_sha256'], 'Unreviewed article change: ' + route + '; use approve-edits with a reason'
            assert datetime.fromisoformat(article['published_at'].replace('Z', '+00:00')).astimezone(ZoneInfo(policy['day_timezone'])).date().isoformat() == batch['date']
            check_editorial(article, entry['review'], entry['photo_ids'], photos, contract['pages'], entry['owner'], redirects)
            plan = read('src/content/blogPhotography.json')[route]
            expected_images = [photos[pid]['src'] for pid in entry['photo_ids']]
            assert read('src/content/blogMedia.json')['pages'][route]['hero']['src'] == expected_images[0]
            assert [p['src'] for p in plan['inline']] == expected_images[1:], 'Photographs differ from reviewed selection'
    assert ledger['next_slot'] == len(seen), 'Owner rotation cursor differs from published reservations'
    approved = {u for u, p in contract['pages'].items() if u.startswith('/blog/')
        and not u.startswith('/blog/topic/') and p.get('page_type') == 'Blog post'
        and not p.get('indexation', {}).get('redirect_to')}
    assert not (approved - set(ledger['baseline_routes']) - seen), 'New article contracts must use the reviewed daily ledger'
    print(f'Daily publishing checks passed: {len(seen)} reviewed articles, five-per-day cap, original photos, protected service owners.')


class LivePage(HTMLParser):
    def __init__(self):
        super().__init__()
        self.canonical, self.robots, self.images, self.links = [], [], [], []
        self.h1s, self.title = [], ''
        self.in_h1 = self.in_title = False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical.append(a.get('href'))
        if tag == 'meta' and a.get('name') == 'robots': self.robots.append(a.get('content', ''))
        if tag == 'img': self.images.append(a.get('src'))
        if tag == 'a': self.links.append(a.get('href'))
        if tag == 'h1': self.in_h1 = True; self.h1s.append('')
        if tag == 'title': self.in_title = True

    def handle_endtag(self, tag):
        if tag == 'h1': self.in_h1 = False
        if tag == 'title': self.in_title = False

    def handle_data(self, text):
        if self.in_h1: self.h1s[-1] += text
        if self.in_title: self.title += text


def fetch(url):
    with urlopen(Request(url, headers={'User-Agent': 'myCHEF-Publication-Check/1.0'}), timeout=45) as r:
        assert r.status == 200 and r.url == url, 'Unexpected response or redirect: ' + url
        return r.read()


def verify_live(date, commit, record):
    assert re.fullmatch(r'[0-9a-f]{40}', commit), 'Supply the deployed Git commit SHA'
    ledger, photos = read(LEDGER), {p['id']: p for p in read('src/content/previousWorkPhotos.json')}
    batches = [b for b in ledger['batches'] if b['date'] == date]
    assert batches, 'No reserved batch for this date'
    sitemap = fetch(SITE + '/sitemap.xml').decode()
    for batch in batches:
        for entry in batch['articles']:
            route = entry['path']
            article = read('blog/data/' + route.split('/')[-1] + '.json')
            page = LivePage(); page.feed(fetch(SITE + route).decode())
            assert page.canonical == [SITE + route] and page.h1s == [article['title']], 'Canonical/H1 mismatch: ' + route
            assert page.title == article['meta_title'], 'Title mismatch: ' + route
            assert len(page.robots) == 1 and 'noindex' not in page.robots[0] and 'nofollow' not in page.robots[0], 'Robots mismatch'
            assert entry['owner'] in page.links or SITE + entry['owner'] in page.links, 'Missing owner link'
            assert SITE + route in sitemap, 'Missing sitemap URL'
            for pid in entry['photo_ids']:
                src = photos[pid]['src']
                assert src in page.images, 'Expected article photograph missing: ' + route
                fetch(SITE + src)
            print('LIVE PASS ' + SITE + route)
        publication_day = batch.get('verification', {}).get('publication_day', today())
        batch.update({'status': 'live', 'verification': {
            'publication_day': publication_day,
            'verified_at': datetime.now(ZoneInfo('UTC')).isoformat(timespec='seconds'),
            'deployed_commit': commit, 'checks': ['HTTP 200', 'title', 'one H1', 'self canonical',
                'indexable robots', 'owner link', 'three approved photos and HTTP 200 assets', 'canonical sitemap']}})
    if record:
        for day in {b.get('verification', {}).get('publication_day', b['date']) for b in ledger['batches']}:
            assert allowance(ledger, day, read(POLICY)['daily_target']) >= 0, 'Recovered batch would exceed the daily cap'
        save(LEDGER, ledger)


def approve_edits(slugs, reason):
    assert len(reason.strip()) >= 25, 'Explain the maintenance change and review the complete article'
    ledger = read(LEDGER)
    found = set()
    for batch in ledger['batches']:
        for entry in batch['articles']:
            slug = entry['path'].split('/')[-1]
            if slug in slugs:
                entry['source_sha256'] = digest(read('blog/data/' + slug + '.json'))
                entry.setdefault('maintenance_reviews', []).append({'reason': reason,
                    'at': datetime.now(ZoneInfo('UTC')).isoformat(timespec='seconds')})
                found.add(slug)
    assert found == set(slugs), 'Unknown ledger article'
    old = (ROOT / LEDGER).read_text()
    save(LEDGER, ledger)
    try: verify()
    except BaseException:
        (ROOT / LEDGER).write_text(old)
        raise


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest='command', required=True)
    sub.add_parser('plan'); sub.add_parser('verify')
    p = sub.add_parser('stage'); p.add_argument('payload')
    p = sub.add_parser('verify-live'); p.add_argument('--date', required=True); p.add_argument('--commit', required=True); p.add_argument('--record', action='store_true')
    p = sub.add_parser('approve-edits'); p.add_argument('slugs', nargs='+'); p.add_argument('--reason', required=True)
    args = parser.parse_args()
    if args.command == 'plan': plan()
    elif args.command == 'stage': stage(args.payload)
    elif args.command == 'verify': verify()
    elif args.command == 'verify-live': verify_live(args.date, args.commit, args.record)
    else: approve_edits(args.slugs, args.reason)
