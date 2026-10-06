#!/usr/bin/env python3
"""Check curated blog imagery and optionally all prerendered article photographs."""
import json,re,sys
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
ROOT=Path(__file__).resolve().parents[1]
plans=json.loads((ROOT/'src/content/blogPhotography.json').read_text())
authority=json.loads((ROOT/'src/content/pageAuthority.json').read_text())
redirects={p['source'] for p in json.loads((ROOT/'vercel.json').read_text())['redirects']}
errors=[]
def check(ok,message):
 if not ok:errors.append(message)
def local(src):return ROOT/'public'/urlparse(src).path.lstrip('/')
def identity(src):return re.sub(r'-(480|800|1200|1536)(?=\.webp$)','',src)
for file in (ROOT/'blog/data').glob('*.json'):
 article=json.loads(file.read_text());path='/blog/'+article['slug']
 if article.get('status')=='published' and path not in redirects:check(path in plans,path+': add a curated photography plan before publishing')
for path,plan in plans.items():
 photos=plan.get('inline',[])
 check(len(photos)>=2,path+': requires at least two inline photographs')
 check(len({identity(p['src']) for p in photos})==len(photos),path+': repeated inline photograph')
 for p in photos:
  check(p['src'].startswith('/') and local(p['src']).is_file(),path+': missing local image '+p['src'])
  check(bool(p.get('alt','').strip()) and bool(p.get('caption','').strip()),path+': missing descriptive alt/caption')
  check(p.get('width',0)>0 and p.get('height',0)>0,path+': missing intrinsic dimensions')
 if plan.get('hero'):check(local(plan['hero']['src']).is_file(),path+': missing local hero')
class Page(HTMLParser):
 def __init__(self):super().__init__();self.stack=[];self.images=[]
 def handle_starttag(self,t,attrs):
  a=dict(attrs);anc=[x[0] for x in self.stack];parents=[x[1] for x in self.stack]
  if t=='img' and 'main' in anc and not any('data-blog-related' in p or 'blog-card' in p.get('class','') for p in parents):self.images.append(a)
  if t not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:self.stack.append((t,a))
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,-1,-1):
   if self.stack[i][0]==t:self.stack=self.stack[:i];break
count=0;image_count=0
if '--rendered' in sys.argv:
 for path in authority:
  if not path.startswith('/blog/') or path.startswith('/blog/topic/'):continue
  f=ROOT/'dist'/path.strip('/')/'index.html';check(f.exists(),path+': missing rendered article')
  if not f.exists():continue
  page=Page();page.feed(f.read_text());count+=1;image_count+=len(page.images)
  check(len(page.images)>=3,path+': fewer than three article photographs (related cards excluded)')
  check(len({identity(p.get('src','')) for p in page.images})==len(page.images),path+': duplicate article photograph')
  for im in page.images:
   src=im.get('src','');check(src.startswith('/') and local(src).is_file(),path+': image is remote or missing: '+src)
   check(bool(im.get('alt','').strip()),path+': image lacks alt text')
   for item in im.get('srcset','').split(','):
    if item.strip():check(local(item.strip().split()[0]).is_file(),path+': missing responsive variant '+item)
if errors:print('\n'.join(errors));raise SystemExit(f'Blog photography failed: {len(errors)} issues')
print(f'Blog photography passed: {len(plans)} curated article plans; {count} rendered articles; {image_count} article photographs.')
