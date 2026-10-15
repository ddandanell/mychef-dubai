#!/usr/bin/env python3
"""Register new archive pages as the reviewed article inventory grows."""
import importlib.util
import json
import math
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('daily', ROOT / 'scripts/daily-supporting-blogs.py')
daily = importlib.util.module_from_spec(spec)
spec.loader.exec_module(daily)
file = ROOT / daily.CONTRACT
original = file.read_text()
contract = json.loads(original)
parked = set(json.loads((ROOT / 'docs/seo/parked-urls.json').read_text())['urls'])
posts = [p for u, p in contract['pages'].items() if u.startswith('/blog/') and not u.startswith('/blog/topic/') and u not in parked
         and p.get('page_type') == 'Blog post' and not p.get('indexation', {}).get('redirect_to')]
additions = {}
for n in range(2, math.ceil(len(posts) / 12) + 1):
    url = f'/blog/page/{n}'
    if url in contract['pages']:
        continue
    title, h1 = f'Blog – Page {n} | myCHEF', f'Blog – Page {n}'
    description = 'The myCHEF Dubai blog: private chef and catering guides, published prices, and how a night is actually run.'
    additions[url] = {
        'url': url, 'absolute_url': daily.SITE + url, 'page_type': 'Blog archive',
        'silo': 'Blog and Guides', 'hub': '/blog', 'status': 'LOCKED', 'is_hub': False,
        'intent_owner': {'primary_keyword': None, 'subkeywords': [], 'subkeyword_cap': 0},
        'on_page': {'title': title, 'h1': h1, 'h1_count': 1, 'meta_description': description},
        'indexation': {'robots': {'index': True, 'follow': True}, 'canonical': daily.SITE + url,
                       'redirect_to': None, 'in_sitemap': True},
        'schema': ['CollectionPage', 'BreadcrumbList'],
        'internal_linking': {'breadcrumb': [{'url': '/', 'anchor': 'Home'},
            {'url': '/blog', 'anchor': 'Blog'}, {'url': url, 'anchor': f'Page {n}', 'current': True}]},
        'content_source': 'src/pages/Blog.tsx',
        'authority': {'role': 'supporting', 'purpose': 'utility', 'money_page': '/catering-dubai',
                      'anchor': 'catering services in Dubai', 'title': title, 'h1': h1, 'description': description},
    }
if additions:
    file.write_text(daily.append_contract(original, additions))
    for script in ['generate-page-authority.py', 'generate-keyword-locks.py', 'generate-breadcrumbs.py']:
        subprocess.run([sys.executable, str(ROOT / 'scripts' / script)], check=True)
print(f'Blog archive contracts: {math.ceil(len(posts) / 12)} pages; {len(additions)} new records.')
