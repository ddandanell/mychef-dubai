#!/usr/bin/env python3
"""Check links, fragments and SEO tags in the complete prerendered website."""
from collections import Counter, defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse
import json
import sys

ROOT = Path(__file__).resolve().parents[1]
SITE = 'https://www.mychef.ae'


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = defaultdict(list)
        self.ids = Counter()
        self.links = []
        self.title = ''
        self.h1 = []
        self.current = None
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags[tag].append(attrs)
        if attrs.get('id'):
            self.ids[attrs['id']] += 1
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag in ('title', 'h1'):
            self.current = tag
        if tag == 'h1':
            self.h1.append('')

    def handle_endtag(self, tag):
        if tag == self.current:
            self.current = None

    def handle_data(self, data):
        if self.current == 'title':
            self.title += data
        elif self.current == 'h1':
            self.h1[-1] += data


def audit():
    dist = ROOT / 'dist'
    pages = {
        '/' if file.parent == dist else '/' + str(file.parent.relative_to(dist)): Page(file.read_text())
        for file in sorted(dist.rglob('index.html'))
    }
    redirects = {
        row['source']: row['destination']
        for row in json.loads((ROOT / 'vercel.json').read_text()).get('redirects', [])
        if ':' not in row['source'] and '*' not in row['source']
    }
    errors = []
    rows = []
    titles = defaultdict(list)
    links_checked = 0
    if len(pages) < 150:
        errors.append('Prerender is incomplete; build the entire website first.')

    for path, page in pages.items():
        titles[page.title].append(path)
        if len(page.tags['title']) != 1 or not page.title.strip():
            errors.append(f'{path}: expected one nonempty title')
        if len(page.h1) != 1 or not page.h1[0].strip():
            errors.append(f'{path}: expected one nonempty H1')
        metadata = {}
        for tag, key, value, field in [
            ('meta', 'name', 'description', 'content'),
            ('meta', 'name', 'robots', 'content'),
            ('link', 'rel', 'canonical', 'href'),
        ]:
            matches = [attrs for attrs in page.tags[tag] if attrs.get(key) == value]
            if len(matches) != 1 or not matches[0].get(field):
                errors.append(f'{path}: expected one nonempty {value}')
            metadata[value] = matches[0].get(field, '') if matches else ''
        if not metadata['canonical'].startswith(SITE + '/'):
            errors.append(f'{path}: canonical uses the wrong host')
        if path in redirects:
            errors.append(f'{path}: a redirected URL was prerendered')
        for element_id, count in page.ids.items():
            if count > 1:
                errors.append(f'{path}: duplicate id {element_id}')

        for href in set(page.links):
            target = urlsplit(href)
            if target.scheme and target.netloc not in ('www.mychef.ae', 'mychef.ae'):
                continue
            if not href.startswith(('/', '#', SITE, 'https://mychef.ae')):
                continue
            destination = (target.path.rstrip('/') or '/') if target.path else path
            if destination.startswith(('/seo', '/api')) or destination == '/thank-you':
                continue  # Deliberately dynamic app/API routes.
            if '.' in destination and destination not in pages:
                continue  # Downloadable assets, checked by verify:images.
            links_checked += 1
            if target.netloc == 'mychef.ae':
                errors.append(f'{path}: link uses the redirected apex host: {href}')
            if destination in redirects:
                errors.append(f'{path}: link uses a redirected URL: {href}')
                destination = urlsplit(redirects[destination]).path.rstrip('/') or '/'
            if destination not in pages:
                errors.append(f'{path}: link has no public page: {href}')
            elif target.fragment and unquote(target.fragment) not in pages[destination].ids:
                errors.append(f'{path}: fragment has no target: {href}')

        rows.append({'path': path, 'title': page.title, 'h1': page.h1, **metadata,
                     'internal_links': len(set(page.links)), 'status': 'checked'})
    for title, paths in titles.items():
        if len(paths) > 1:
            errors.append(f'Duplicate title {title}: {", ".join(paths)}')
    return {'pages_checked': len(pages), 'links_checked': links_checked,
            'errors': sorted(set(errors)), 'pages': rows}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--report', type=Path)
    args = parser.parse_args()
    result = audit()
    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    if result['errors']:
        print('\n'.join(result['errors']))
        sys.exit(1)
    print(f"Public page check passed: {result['pages_checked']} pages, {result['links_checked']} internal links and fragments, unique titles, H1s, descriptions and canonical tags.")
