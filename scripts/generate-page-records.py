#!/usr/bin/env python3
"""Project the SEO contract and a local production build into one JSON record per URL.
Run after build + prerender. --check verifies committed records without changing them.
Keyword volumes are deliberately null: this audit did not measure demand.
"""
from __future__ import annotations
import argparse, json, re, sys
from html.parser import HTMLParser
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'docs/seo/page-records'
AUDIT=ROOT/'docs/editorial-audit/2026-09-22'

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True);self.meta={};self.canonical=None;self.stack=[];self.captures=[];self.result=[];self.main=False;self.words=[];self.skip=0
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='meta':self.meta[a.get('name') or a.get('property')]=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
        if tag=='main':self.main=True
        if tag in ['script','style']:self.skip+=1
        if tag in ['title','h1','h2','h3','p']:self.captures.append([tag,[]])
    def handle_endtag(self,tag):
        if tag in ['script','style']:self.skip=max(0,self.skip-1)
        if tag=='main':self.main=False
        for i in range(len(self.captures)-1,-1,-1):
            if self.captures[i][0]==tag:
                kind,text=self.captures.pop(i);self.result.append((kind,re.sub(r'\s+',' ',' '.join(text)).strip()));break
    def handle_data(self,data):
        if self.skip:return
        for _,parts in self.captures:parts.append(data)
        if self.main:self.words.append(data)
    def record(self,path):
        return {'path':path,'title':next((v for k,v in self.result if k=='title'),''),'description':self.meta.get('description',''),'canonical':self.canonical,'robots':self.meta.get('robots',''),'h1':[v for k,v in self.result if k=='h1'],'headings':[{'level':k,'text':v} for k,v in self.result if k in ['h2','h3']],'word_count':len(' '.join(self.words).split()),'first_paragraphs':[v for k,v in self.result if k=='p'][:4]}

def read(p,default=None):return json.loads(p.read_text()) if p.exists() else default

def rendered_pages():
    rows={}
    for f in (ROOT/'dist').rglob('index.html'):
        path='/'+str(f.parent.relative_to(ROOT/'dist'));path='/' if path=='/.' else path
        parser=PageParser();parser.feed(f.read_text());rows[path]=parser.record(path)
    return rows

def resolve(spec,parent):
    base=ROOT/'src'/spec[2:] if spec.startswith('@/') else parent.parent/spec
    for f in [base,Path(str(base)+'.tsx'),Path(str(base)+'.ts'),Path(str(base)+'.json'),base/'index.ts',base/'index.tsx']:
        if f.is_file():return f.resolve()
    return None

def dependencies(f,seen=None):
    seen=seen or set()
    if not f or not f.exists() or f in seen:return seen
    seen.add(f)
    if f.suffix not in ['.tsx','.ts']:return seen
    for spec in re.findall(r'(?:from\s*|import\s*)[\'"]([^\'"]+)[\'"]',f.read_text()):
        if not spec.startswith(('.', '@/')):continue
        dep=resolve(spec,f)
        # Global navigation/maps are documented once; avoid attributing every page
        # in a generated registry to every component which imports the registry.
        if dep and dep.name not in ['siloMap.json','breadcrumbTrails.ts','keywordLocks.ts','blogTaxonomy.ts','seoAuditOverrides.ts']:
            dependencies(dep,seen)
    return seen

def generate():
    c=read(ROOT/'docs/seo/myCHEF-AE-SEO-STANDARD.json');pages=c['pages'];cfg=read(ROOT/'vercel.json');redirects={r['source']:r['destination'] for r in cfg['redirects'] if ':' not in r['source'] and '*' not in r['source']};routes=(ROOT/'src/routes.tsx').read_text();imports=dict(re.findall(r'const (\w+):[^\n]*?import\([\'"]([^\'"]+)',routes));bindings=dict(re.findall(r'\{\s*path:\s*"([^"*:]+)"\s*,\s*element:\s*<(\w+)',routes));seo_routes=read(ROOT/'src/content/seo/routes.json',{});baseline=read(AUDIT/'public-baseline.json',{});baseline={p['path']:p for p in baseline.get('pages',[])};rendered=rendered_pages()
    if not rendered:raise SystemExit('Build and prerender the site before generating page records.')
    paths=set(pages)|set(bindings)|set(rendered)|set(redirects)|set(baseline)
    outputs={};counts={};index=[]
    for path in sorted(paths):
        if path.startswith('/seo') or ':' in path or '*' in path:continue
        p=pages.get(path,{});idx=p.get('indexation',{});old=baseline.get(path,{});actual=rendered.get(path);redirect=redirects.get(path);binding=bindings.get(path);files=set();root=None
        if binding in imports:root=resolve(imports[binding],ROOT/'src/routes.tsx')
        elif path.startswith('/locations/') and not redirect:root=ROOT/'src/pages/LocationDetail.tsx'
        elif path.startswith('/blog/topic/'):root=ROOT/'src/pages/BlogCategoryHub.tsx'
        if binding=='HandoffPage':
            root=ROOT/'src/components/HandoffPage.tsx';slug=seo_routes.get(path)
            if slug:files.add(ROOT/'src/content/seo-pages'/f'{slug}.json')
        if path.startswith('/blog/') and (ROOT/'blog/data'/f'{path[6:]}.json').exists():
            files.update([ROOT/'blog/data'/f'{path[6:]}.json',ROOT/'src/content/ryze-pages'/f'{path[6:]}.json']);root=ROOT/'src/pages/blog/RyzeArticlePage.tsx'
        files|=dependencies(root)
        source_files=sorted(str(f.relative_to(ROOT)) for f in files if f.exists())
        robots=actual['robots'] if actual else None
        noindex=bool(redirect) or ('noindex' in robots if robots is not None else not idx.get('robots',{}).get('index',False))
        role='redirect' if redirect else 'noindex support page' if noindex else 'indexable page'
        primary=p.get('intent_owner',{}).get('primary_keyword') if not redirect else None
        keywords=p.get('intent_owner',{}).get('subkeywords',[]) if not redirect else []
        meta={'title':actual['title'],'description':actual['description'],'h1':actual['h1']} if actual else {'title':p.get('on_page',{}).get('title'),'description':p.get('on_page',{}).get('meta_description'),'h1':[p.get('on_page',{}).get('h1')] if p.get('on_page',{}).get('h1') else []}
        purpose=('Redirect visitors to '+redirect) if redirect else old.get('role') or meta.get('description') or p.get('page_type') or 'Supporting website route; no separate search target assigned.'
        record={'schema_version':'1.0','reviewed_at':'2026-09-22','url':'https://www.mychef.ae'+path,'path':path,'role':role,'page_type':p.get('page_type') or ('Topic hub' if '/blog/topic/' in path else 'Supporting route'),'silo':p.get('silo') or old.get('category'),'purpose':purpose,'keywords':{'primary':primary,'secondary':keywords,'primary_owner':path if primary else None,'authority':'docs/seo/myCHEF-AE-SEO-STANDARD.json','search_volume':None,'volume_status':'Not measured in this editorial audit','intent':'informational' if ('Blog' in p.get('silo','') or '/blog/' in path or '/guides' in path) else 'transactional' if primary else 'navigational','placement':'Use naturally in relevant copy. Preserve one primary owner; do not force secondary phrases into headings.'},'metadata':meta,'metadata_source':'local production prerender' if actual else 'SEO contract; alias or route not prerendered','indexation':{'canonical':actual['canonical'] if actual else idx.get('canonical') or ('https://www.mychef.ae'+redirect if redirect and redirect.startswith('/') else None),'robots':robots or idx.get('robots'),'in_sitemap':path in sitemap_paths,'redirect_to':redirect},'source_files':source_files,'content_review':{'baseline_observed':bool(old),'baseline_word_count':old.get('word_count'),'current_word_count':actual.get('word_count') if actual else None,'headings':actual.get('headings',[]) if actual else [],'baseline_findings':old.get('findings',[]),'log':'docs/editorial-audit/2026-09-22/README.md','guidance':'Preserve published pricing and written booking terms. Confirm credentials, capacity and operational guarantees with the business before making stronger claims.'},'internal_linking':p.get('internal_linking',{})}
        name='home.json' if path=='/' else path.strip('/').replace('/','__')+('.trailing-slash' if path.endswith('/') else '')+'.json';outputs[name]=record;index.append({'path':path,'file':name,'primary_keyword':primary,'role':role,'silo':record['silo']});counts[role]=counts.get(role,0)+1
    outputs['_index.json']={'schema_version':'1.0','reviewed_at':'2026-09-22','counts':counts,'total':len(index),'records':index}
    return outputs,rendered

sitemap_paths=set(re.findall(r'<loc>https://www\.mychef\.ae([^<]*)</loc>',(ROOT/'public/sitemap.xml').read_text()))
if __name__=='__main__':
    args=argparse.ArgumentParser();args.add_argument('--check',action='store_true');check=args.parse_args().check
    outputs,rendered=generate();bad=[];OUT.mkdir(parents=True,exist_ok=True)
    for name,data in outputs.items():
        text=json.dumps(data,indent=2,ensure_ascii=False)+'\n';f=OUT/name
        if check:
            if not f.exists() or f.read_text()!=text:bad.append(name)
        else:f.write_text(text)
    stale=set(f.name for f in OUT.glob('*.json'))-set(outputs)
    if check:bad.extend(sorted(stale))
    else:
        for name in stale:(OUT/name).unlink()
        AUDIT.mkdir(parents=True,exist_ok=True);(AUDIT/'rendered-pages.json').write_text(json.dumps(list(rendered.values()),indent=2,ensure_ascii=False)+'\n')
    if bad:raise SystemExit('Page records out of date: '+', '.join(bad[:20]))
    print(f"Page records {'verified' if check else 'generated'}: {len(outputs)-1} URLs; {len(rendered)} prerendered pages")
