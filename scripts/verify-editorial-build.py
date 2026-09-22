#!/usr/bin/env python3
"""Check customer-visible HTML, sitemap and article hydration after prerender."""
from pathlib import Path
import json,re,sys
from importlib.util import spec_from_file_location,module_from_spec
ROOT=Path(__file__).resolve().parents[1]
spec=spec_from_file_location('page_records',ROOT/'scripts/generate-page-records.py');module=module_from_spec(spec);spec.loader.exec_module(module)
rows=module.rendered_pages();fail=[]
if len(rows)<150:fail.append('Production prerender is missing or incomplete.')
for url,p in rows.items():
 if len(p['h1'])!=1:fail.append(f'{url}: expected one H1')
 if not p['title'] or len(p['title'])>65:fail.append(f'{url}: invalid title length')
 if not p['description'] or len(p['description'])>160:fail.append(f'{url}: invalid description length')
 if not (p['canonical'] or '').startswith('https://www.mychef.ae/'):fail.append(f'{url}: missing canonical')
xml=(ROOT/'public/sitemap.xml').read_text();urls=re.findall(r'<loc>([^<]+)</loc>',xml)
if len(urls)!=len(set(urls)):fail.append('Duplicate sitemap URLs')
redirects={r['source'] for r in json.loads((ROOT/'vercel.json').read_text())['redirects']}
for absolute in urls:
 url=absolute.removeprefix('https://www.mychef.ae') or '/'
 if url in redirects:fail.append(f'{url}: redirect in sitemap')
 if url not in rows:fail.append(f'{url}: sitemap page not prerendered')
 elif 'noindex' in rows[url]['robots']:fail.append(f'{url}: noindex in sitemap')
# Initial hydration must receive the same figures and FAQs that rendered the HTML.
for f in (ROOT/'dist').rglob('index.html'):
 html=f.read_text();match=re.search(r'window\.__SEO__=(.*?)</script>',html,re.S)
 if not match:continue
 data=json.loads(match[1]);route=data['path'];slug=json.loads((ROOT/'src/content/seo/routes.json').read_text()).get(route)
 if not slug:continue
 source=json.loads((ROOT/'src/content/seo-pages'/f'{slug}.json').read_text())
 for key in ['head','images','faq','references','updated_at']:
  if data['data'].get(key)!=source.get(key):fail.append(f'{route}: hydration payload differs for {key}')
# The HTML shell must not install another automatic GA page-view tracker or
# a second WhatsApp click handler alongside the SPA analytics component.
shell=(ROOT/'index.html').read_text()
if 'gtag/js?' in shell or 'function trackWhatsAppClick' in shell:fail.append('Duplicate analytics bootstrap in HTML shell')
if fail:
 print('\n'.join(fail));sys.exit(1)
print(f'Editorial build OK: {len(rows)} pages, {len(urls)} sitemap URLs, metadata, canonical tags, article hydration and analytics bootstrap.')
