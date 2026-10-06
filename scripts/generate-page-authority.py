#!/usr/bin/env python3
"""Project the existing SEO contract into the site's core service-link map."""
import json, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
contract = json.loads((ROOT / 'docs/seo/myCHEF-AE-SEO-STANDARD.json').read_text())
entries = {}
for path, page in sorted(contract['pages'].items()):
    if page.get('authority') and not page.get('indexation', {}).get('redirect_to'):
        entries[path] = page['authority']
target = ROOT / 'src/content/pageAuthority.json'
content = json.dumps(entries, ensure_ascii=False, indent=2) + '\n'
if '--check' in sys.argv:
    if not target.exists() or target.read_text() != content:
        raise SystemExit('Page authority projection is stale. Run python3 scripts/generate-page-authority.py')
else:
    target.write_text(content)
print(f'Page authority: {len(entries)} assigned routes; {sum(p["role"] == "money" for p in entries.values())} core money pages.')
