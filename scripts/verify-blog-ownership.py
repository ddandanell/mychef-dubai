#!/usr/bin/env python3
"""Reject article exports that lose their approved intent or service links."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
SITE = 'https://www.mychef.ae'


class Body(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.words = 0
        self.links = []
        self.scripts = 0
        self.h1s = 0
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'a':
            self.links.append((attrs.get('href', ''), self.words))
        if tag == 'script':
            self.scripts += 1
        if tag == 'h1':
            self.h1s += 1

    def handle_data(self, text):
        self.words += len(text.split())


def validate_article(article, page, core, redirects, pages):
    errors = []
    route = '/blog/' + article.get('slug', '')
    if not page:
        return ['missing SEO contract and core money-page assignment']
    authority = page.get('authority', {})
    owner = authority.get('money_page')
    if authority.get('role') != 'supporting' or owner not in core:
        errors.append('article must support one existing core money page')
    if page.get('indexation', {}).get('canonical') != SITE + route:
        errors.append('article canonical differs from its approved URL')
    on_page = page.get('on_page', {})
    for field, expected in [('title', on_page.get('h1')), ('meta_title', on_page.get('title')),
                            ('meta_description', on_page.get('meta_description'))]:
        if not article.get(field, '').strip():
            errors.append('missing ' + field)
        elif authority.get('h1') and article[field] != expected:
            errors.append(field + ' reverted from the approved editorial assignment')
    primary = page.get('intent_owner', {}).get('primary_keyword')
    if primary and article.get('primary_keyword') != primary:
        errors.append('primary keyword differs from its approved informational question')
    exported_primary = (article.get('primary_keyword') or '').strip().lower()
    for destination, target in pages.items():
        commercial = target.get('authority', {}).get('purpose') == 'service-detail'
        target_primary = (target.get('intent_owner', {}).get('primary_keyword') or '').strip().lower()
        if commercial and target_primary and exported_primary == target_primary:
            errors.append('article claims the commercial primary owned by ' + destination)
    body = Body(article.get('body_html') or '')
    if not body.words:
        errors.append('missing visible article body')
    if body.h1s:
        errors.append('body adds an H1 to the shared article headline')
    if body.scripts:
        errors.append('body contains scripts or duplicate structured data; use the shared page graph')
    owner_links = []
    for href, words in body.links:
        target = urlsplit(href)
        if target.netloc not in ('', 'www.mychef.ae', 'mychef.ae'):
            continue
        if not target.netloc and not target.path.startswith('/'):
            continue
        path = target.path.rstrip('/') or '/'
        if target.netloc == 'mychef.ae':
            errors.append('internal link uses the redirected apex host: ' + href)
        if path in redirects:
            errors.append('internal link uses a retired destination: ' + href)
        if path not in pages and not path.startswith('/inquiry'):
            errors.append('internal link has no contracted destination: ' + href)
        if path == owner:
            owner_links.append(words)
    if not owner_links or min(owner_links) > 200:
        errors.append('add an authored contextual link to the assigned money page within 200 words')
    return errors


def main():
    contract = json.loads((ROOT / 'docs/seo/myCHEF-AE-SEO-STANDARD.json').read_text())
    pages = contract['pages']
    core = set(contract['authority_policy']['money_pages'])
    redirects = {r['source'] for r in json.loads((ROOT / 'vercel.json').read_text())['redirects']}
    errors = []
    count = 0
    for file in sorted((ROOT / 'blog/data').glob('*.json')):
        article = json.loads(file.read_text())
        route = '/blog/' + article['slug']
        if article.get('status') != 'published' or route in redirects:
            continue
        count += 1
        errors.extend(route + ': ' + error for error in
                      validate_article(article, pages.get(route), core, redirects, pages))
    if errors:
        raise SystemExit('\n'.join(errors))
    print(f'Blog ownership passed: {count} active exports, approved informational intent, early owner links and canonical destinations.')


if __name__ == '__main__':
    main()
