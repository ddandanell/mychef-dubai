#!/usr/bin/env python3
"""Keep unassigned upstream exports as drafts until editorial approval."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def quarantine(article, approved_routes, redirects):
    route = '/blog/' + article.get('slug', '')
    if article.get('status') != 'published' or route in approved_routes or route in redirects:
        return False
    article['status'] = 'pending_review'
    article['import_review'] = {
        'upstream_status': 'published',
        'reason': 'Awaiting approved informational intent, money-page owner, photographs and daily slot.',
    }
    return True


def main():
    contract = json.loads((ROOT / 'docs/seo/myCHEF-AE-SEO-STANDARD.json').read_text())
    approved = set(contract['pages'])
    # A stale generated projection must never hide an existing approved article.
    approved.update(json.loads((ROOT / 'src/content/pageAuthority.json').read_text()))
    redirects = {r['source'] for r in json.loads((ROOT / 'vercel.json').read_text())['redirects']}
    count = 0
    for file in sorted((ROOT / 'blog/data').glob('*.json')):
        article = json.loads(file.read_text())
        if quarantine(article, approved, redirects):
            file.write_text(json.dumps(article, ensure_ascii=False, indent=2) + '\n')
            count += 1
    print(f'Ryze intake: {count} unassigned exports held for review; approved articles remain subject to all existing guards.')


if __name__ == '__main__':
    main()
