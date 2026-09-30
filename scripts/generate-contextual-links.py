"""Generate service prose links from approved SEO relationships and editorial phrases."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
contract = json.loads((ROOT / 'docs/seo/myCHEF-AE-SEO-STANDARD.json').read_text())['pages']
phrases = json.loads((ROOT / 'src/content/serviceLinkPhrases.json').read_text())
redirects = {r['source'] for r in json.loads((ROOT / 'vercel.json').read_text())['redirects']}
protected = {'/', '/birthday-catering-dubai', '/yachts'}
output = {}
for path, page in contract.items():
    if path in protected or path in redirects or path.startswith('/blog/'):
        continue
    if not page.get('indexation', {}).get('robots', {}).get('index'):
        continue
    targets = set()
    blocked = set(page.get('internal_linking', {}).get('do_not_link', []))
    for key, values in page.get('internal_linking', {}).items():
        if key in ('breadcrumb', 'do_not_link'):
            continue
        for link in values if isinstance(values, list) else [values]:
            if isinstance(link, dict) and link.get('url'):
                targets.add(link['url'])
    rules = []
    for target, terms in phrases.items():
        if target == path or target not in targets or target in redirects or target in blocked:
            continue
        if not contract.get(target, {}).get('indexation', {}).get('robots', {}).get('index'):
            continue
        rules.append({'phrases': sorted(terms, key=len, reverse=True), 'href': target})
    # Prefer specific service names before short phrases.
    if rules:
        output[path] = sorted(rules, key=lambda r: max(map(len, r['phrases'])), reverse=True)
(ROOT / 'src/content/serviceLinkRules.json').write_text(json.dumps(output, ensure_ascii=False, indent=2) + '\n')
print(f'Generated contextual link rules for {len(output)} pages from the SEO contract.')
