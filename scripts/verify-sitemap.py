#!/usr/bin/env python3
"""Validate sitemap XML and indexation rules before a publishing run."""
from pathlib import Path
from urllib.parse import urlsplit
import json
import sys
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
NS = '{http://www.sitemaps.org/schemas/sitemap/0.9}'


def validate(file):
    root = ET.parse(file).getroot()  # Strict XML parse: catches missing closing tags.
    assert root.tag == NS + 'urlset', 'Expected a sitemap urlset and namespace'
    redirects = {r['source'] for r in json.loads((ROOT / 'vercel.json').read_text()).get('redirects', [])
                 if ':' not in r['source'] and '*' not in r['source']}
    parked = set(json.loads((ROOT / 'docs/seo/parked-urls.json').read_text()).get('urls', {}))
    seen = set()
    for entry in root:
        assert entry.tag == NS + 'url', 'Unexpected element below urlset'
        loc = entry.findall(NS + 'loc')
        assert len(loc) == 1 and loc[0].text, 'Each URL needs exactly one loc'
        url = loc[0].text.strip()
        parsed = urlsplit(url)
        assert parsed.scheme == 'https' and parsed.netloc == 'www.mychef.ae', f'Wrong host: {url}'
        assert parsed.path.startswith('/') and not parsed.query and not parsed.fragment, f'Noncanonical URL: {url}'
        assert url not in seen, f'Duplicate URL: {url}'
        assert parsed.path not in redirects | parked, f'Redirected or parked URL: {url}'
        assert parsed.path not in {'/inquiry', '/thank-you'} and not parsed.path.startswith('/blog/topic/'), f'Noindex URL: {url}'
        assert not any(child.tag == NS + 'url' for child in entry), 'Nested URL element'
        seen.add(url)
    assert 'https://www.mychef.ae/' in seen, 'Homepage missing'
    return len(seen)


if __name__ == '__main__':
    file = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'public/sitemap.xml'
    try:
        print(f'Sitemap passed: {validate(file)} unique, canonical URLs; valid XML.')
    except (ET.ParseError, AssertionError, ValueError) as error:
        sys.exit(f'Sitemap validation failed: {error}')
