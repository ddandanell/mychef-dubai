#!/usr/bin/env python3
"""Audit every blog article's rendered HTML, photographs and internal links.

Local: node scripts/build-blog-audit.mjs && node .blog-audit/ssr/blog-ssr-audit.js
       python3 scripts/audit-blog-pages.py --html-dir .blog-audit/rendered
Live:  python3 scripts/audit-blog-pages.py --live --output /path/to/report.json
Requires beautifulsoup4 and Pillow, also used by the editorial review tooling.
"""
import argparse
import concurrent.futures
import hashlib
import json
import re
import urllib.parse
import urllib.request
from collections import defaultdict
from pathlib import Path

from bs4 import BeautifulSoup
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SITE = 'https://www.mychef.ae'
parser = argparse.ArgumentParser()
parser.add_argument('--html-dir', default='.blog-audit/rendered')
parser.add_argument('--live', action='store_true')
parser.add_argument('--output', default='.blog-audit/report.json')
args = parser.parse_args()
routes = set(re.findall(r'path: ["\'](/blog/[^"\':]+)["\']', (ROOT / 'src/routes.tsx').read_text()))
routes.update(json.loads(re.search(r'= (\[.*\])', (ROOT / 'src/content/ryzeBlogPaths.ts').read_text(), re.S)[1]))
redirects = {r['source']: r['destination'] for r in json.loads((ROOT / 'vercel.json').read_text())['redirects']}
parked = set(re.findall(r'"(/[^"\n]+)"', (ROOT / 'src/content/parkedUrls.ts').read_text()))
html_dir = Path(args.html_dir)
html_dir.mkdir(parents=True, exist_ok=True)

def fetch(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'myCHEF editorial link audit'})
        with urllib.request.urlopen(req, timeout=45) as response:
            return {'status': response.status, 'url': response.url, 'type': response.headers.get('content-type', ''), 'body': response.read()}
    except Exception as exc:
        return {'error': str(exc)}

if args.live:
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        results = list(pool.map(lambda route: (route, fetch(SITE + route)), sorted(routes)))
    for route, result in results:
        if 'error' in result:
            raise RuntimeError(f"{route}: {result['error']}")
        (html_dir / (route.split('/')[-1] + '.html')).write_bytes(result['body'])
    index_result = fetch(SITE + '/blog')
    if 'error' in index_result:
        raise RuntimeError(index_result['error'])
    (html_dir / 'index.html').write_bytes(index_result['body'])

documents = {route: BeautifulSoup((html_dir / (route.split('/')[-1] + '.html')).read_text(), 'html.parser') for route in routes}
issues = []
records = []
image_owners = defaultdict(set)
image_fingerprints = {}
targets = defaultdict(set)
image_urls = set()
for route in sorted(routes):
    soup = documents[route]
    main = soup.find('main')
    if main is None:
        issues.append(f'{route}: no main content')
        continue
    images = []
    for img in main.select('img'):
        src = img.get('src', '')
        image_urls.add(urllib.parse.urljoin(SITE, src))
        local = ROOT / 'public' / urllib.parse.urlparse(src).path.lstrip('/')
        if not local.exists():
            issues.append(f'{route}: image not published locally: {src}')
            continue
        if not img.get('alt', '').strip():
            issues.append(f'{route}: empty image alt: {src}')
        identity = re.sub(r'-(480|800|1200|1536)(?=\.webp$)', '', src)
        if identity not in image_fingerprints:
            with Image.open(local) as photo:
                image_fingerprints[identity] = hashlib.sha256(photo.convert('RGB').tobytes()).hexdigest()
        identity = image_fingerprints[identity]
        if identity in [i['identity'] for i in images]:
            issues.append(f'{route}: repeated photograph: {src}')
        image_owners[identity].add(route)
        images.append({'src': src, 'alt': img.get('alt'), 'identity': identity})
    if len(images) < 2:
        issues.append(f'{route}: fewer than two content images')
    for picture in main.select('img[srcset], source[srcset]'):
        for candidate in picture['srcset'].split(','):
            src = candidate.strip().split(' ')[0]
            if src.startswith('/') and not (ROOT / 'public' / src.lstrip('/')).exists():
                issues.append(f'{route}: missing responsive image: {src}')
    ids = [tag['id'] for tag in soup.select('[id]')]
    for value in set(ids):
        if ids.count(value) > 1:
            issues.append(f'{route}: duplicate id #{value}')
    links = []
    for a in main.select('a[href]'):
        raw = a['href']
        url = urllib.parse.urlparse(urllib.parse.urljoin(SITE + route, raw))
        if url.hostname not in ('mychef.ae', 'www.mychef.ae'):
            continue
        path = url.path.rstrip('/') or '/'
        if path in redirects:
            issues.append(f'{route}: internal link uses a redirect: {raw}')
        if path in parked and path != route:
            issues.append(f'{route}: internal link points to parked page: {raw}')
        if path in documents:
            if url.fragment and not documents[path].find(id=urllib.parse.unquote(url.fragment)):
                issues.append(f'{route}: broken article section link: {raw}')
        elif args.live:
            targets[SITE + path].add(urllib.parse.unquote(url.fragment))
        links.append(raw)
    paragraphs = [p for p in main.select('article p, [data-chef-expansion] .pc-reading-copy > p') if not p.find_parent(['nav', 'aside', 'figcaption']) and not p.find_parent(attrs={'data-blog-related': True})]
    linked = [i for i, p in enumerate(paragraphs) if any(a.get('href', '').startswith(('/', SITE)) for a in p.select('a[href]'))]
    thirds = [sum(min(2, i * 3 // max(1, len(paragraphs))) == third for i in linked) for third in range(3)]
    if not linked:
        issues.append(f'{route}: no contextual links in article paragraphs')
    if any(n == 0 for n in thirds):
        issues.append(f'{route}: contextual linking gap (first/middle/final thirds: {thirds})')
    canonical = soup.select_one('link[rel="canonical"]')
    if not canonical or canonical.get('href') != SITE + route:
        issues.append(f'{route}: incorrect canonical')
    if len(main.select('h1')) != 1:
        issues.append(f'{route}: expected one H1')
    robots = soup.select_one('meta[name="robots"]')
    if bool(robots and 'noindex' in robots.get('content', '')) != (route in parked):
        issues.append(f'{route}: indexing policy changed')
    records.append({'path': route, 'images': images, 'internal_links': len(links), 'contextual_paragraphs': len(linked), 'linked_paragraphs_by_third': thirds, 'paragraphs': len(paragraphs), 'words': len(main.get_text(' ', strip=True).split()), 'noindex': route in parked})

for identity, owners in image_owners.items():
    if len(owners) > 1:
        issues.append('Photograph used in multiple articles: ' + ', '.join(sorted(owners)))

remote_results = []
index_file = html_dir / 'index.html'
index_cards = []
if index_file.exists():
    index = BeautifulSoup(index_file.read_text(), 'html.parser')
    for card in index.select('a.blog-card'):
        photo = card.find('img')
        index_cards.append({'path': card.get('href'), 'image': photo.get('src') if photo else None})
        if not photo or not photo.get('alt'):
            issues.append(f"Blog listing: missing image or alt for {card.get('href')}")
        else:
            image_urls.add(urllib.parse.urljoin(SITE, photo['src']))
    expected = routes - parked
    listed = {card['path'] for card in index_cards}
    if listed != expected:
        issues.append(f'Blog listing differs from published articles: missing {sorted(expected - listed)}, extra {sorted(listed - expected)}')
else:
    issues.append('Blog listing HTML missing from review')
if args.live:
    jobs = sorted(set(targets) | image_urls)
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        results = list(pool.map(lambda url: (url, fetch(url)), jobs))
    for url, result in results:
        remote_results.append({'url': url, **{k: v for k, v in result.items() if k != 'body'}})
        if 'error' in result:
            issues.append(f"{url}: {result['error']}")
            continue
        if url in image_urls and not result['type'].startswith('image/'):
            issues.append(f'{url}: expected an image response')
        if url in targets:
            page = BeautifulSoup(result['body'], 'html.parser')
            for anchor in targets[url]:
                if anchor and not page.find(id=anchor):
                    issues.append(f'{url}#{anchor}: missing destination section')

report = {'mode': 'live' if args.live else 'local', 'article_count': len(records), 'unique_article_images': len(image_owners), 'internal_link_count': sum(r['internal_links'] for r in records), 'issues': issues, 'pages': records, 'index_cards': index_cards, 'remote_checks': remote_results}
output = Path(args.output)
output.parent.mkdir(parents=True, exist_ok=True)
output.write_text(json.dumps(report, indent=2) + '\n')
print(f"{len(records)} articles; {len(image_owners)} unique article images; {report['internal_link_count']} internal links; {len(issues)} issues")
for issue in issues:
    print(' - ' + issue)
raise SystemExit(bool(issues))
