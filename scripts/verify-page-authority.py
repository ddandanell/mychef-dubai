#!/usr/bin/env python3
"""Verify the money-page hierarchy in source and, optionally, every rendered page."""
import json, re, sys, subprocess
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
contract = json.loads((ROOT/'docs/seo/myCHEF-AE-SEO-STANDARD.json').read_text())
mapping = json.loads((ROOT/'src/content/pageAuthority.json').read_text())
core = set(contract['authority_policy']['money_pages'])
redirects = {r['source'] for r in json.loads((ROOT/'vercel.json').read_text())['redirects']}
errors = []
def check(ok, message):
    if not ok: errors.append(message)
check({p for p,a in mapping.items() if a['role']=='money'} == core, 'Money-page projection differs from contract')
for path,a in mapping.items():
    check(a['money_page'] in core, path+': destination must be a core money page')
    check(a['money_page'] not in redirects, path+': owner must not redirect')
    check(a['role']!='supporting' or a['money_page']!=path, path+': support page cannot own its core term')
    if a.get('h1'):
        p=contract['pages'][path]
        check(a['h1']==p['on_page']['h1'] and a['title']==p['on_page']['title'],path+': copy differs from contract')
    if path in core:
        check(contract['pages'][path]['indexation']['robots']['index'],path+': money page must remain indexable')
for loc in ET.parse(ROOT/'public/sitemap.xml').getroot().iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
    path=urlparse(loc.text).path or '/'
    check(path in mapping,path+': missing money-page assignment')
for f in (ROOT/'blog/data').glob('*.json'):
    article=json.loads(f.read_text());path='/blog/'+article['slug']
    if article.get('status')!='published' or path in redirects:continue
    check(path in mapping,path+': assign a core service before publishing')
    if path in mapping and mapping[path].get('h1'):
        a=mapping[path]
        check(article['title']==a['h1'] and article['meta_title']==a['title'],path+': article metadata reverted from editorial assignment')

class Page(HTMLParser):
    def __init__(self):super().__init__();self.main=0;self.h1=0;self.title=0;self.h1s=[];self.titles=[];self.links=[];self.robots=''
    def handle_starttag(self,t,attrs):
        a=dict(attrs)
        if t=='main':self.main+=1
        if t=='h1':self.h1+=1;self.h1s.append('')
        if t=='title':self.title+=1;self.titles.append('')
        if t=='a' and self.main:self.links.append(a.get('href',''))
        if t=='meta' and a.get('name')=='robots':self.robots=a.get('content','')
    def handle_endtag(self,t):
        if t=='main':self.main-=1
        if t=='h1':self.h1-=1
        if t=='title':self.title-=1
    def handle_data(self,s):
        if self.h1:self.h1s[-1]+=s
        if self.title:self.titles[-1]+=s
def norm(s):return re.sub(r'\s+',' ',s).strip()
count=0
if '--rendered' in sys.argv:
    for path,a in mapping.items():
        f=ROOT/'dist'/path.strip('/')/'index.html' if path!='/' else ROOT/'dist/index.html'
        check(f.exists(),path+': missing rendered HTML')
        if not f.exists():continue
        p=Page();p.feed(f.read_text());count+=1
        check(len(p.h1s)==1,path+': expected one visible H1')
        if a.get('h1'):
            check([norm(x) for x in p.h1s]==[norm(a['h1'])],path+': rendered H1 differs from authority contract')
            check([norm(x) for x in p.titles]==[norm(a['title'])],path+': rendered title differs from authority contract')
        if a['role']=='supporting' and a['purpose']!='utility':
            check(any((urlparse(h).path or '/')==a['money_page'] for h in p.links),path+': no direct main-content link to its money page')
        should_index=contract['pages'][path]['indexation']['robots']['index']
        check(('noindex' not in p.robots)==should_index,path+': indexation policy changed')
subprocess.run([sys.executable,str(ROOT/'scripts/generate-page-authority.py'),'--check'],check=True)
if errors:
    print('\n'.join(errors));raise SystemExit(f'Authority check failed: {len(errors)} errors')
print(f'Authority passed: {len(mapping)} routes, {len(core)} core money pages, {count} rendered pages checked.')
