import assert from 'node:assert/strict'
import { readFileSync, existsSync, statSync, mkdirSync, writeFileSync } from 'node:fs'
import express from 'express'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

const root=process.cwd(),qa=process.env.WORK_QA_DIR || '/tmp/mychef-work-qa'
mkdirSync(qa,{recursive:true})
const photos=JSON.parse(readFileSync(root+'/src/content/previousWorkPhotos.json','utf8'))
const manifest=JSON.parse(readFileSync(root+'/docs/previous-work/2026-10-12/image-manifest.json','utf8'))
const routesSource=readFileSync(root+'/src/routes.tsx','utf8')
const livePaths=new Set([...routesSource.matchAll(/\{\s*path:\s*"([^"]+)"/g)].map(match=>match[1]))
const allowedPhotos=new Set(photos.flatMap(photo=>[photo.src,photo.thumbnail]))
assert.equal(photos.length,154)
assert.equal(new Set(photos.map(photo=>photo.id)).size,154)
assert.equal(manifest.photos.length,154)
assert.equal(new Set(photos.map(photo=>photo.category)).size,19)
for(const photo of photos){
 assert.ok([1,2].includes(photo.sourceBatch),'only the two submitted ZIPs supply gallery photos')
 assert.ok(photo.alt.length>12&&photo.tags.length>=2)
 assert.ok(livePaths.has(photo.serviceHref),'direct, live service destination: '+photo.serviceHref)
 for(const src of [photo.src,photo.thumbnail]){assert.ok(src.startsWith('/images/previous-work/'));assert.ok(existsSync(root+'/public'+src));assert.ok(statSync(root+'/public'+src).size>20)}
}
const xml=readFileSync(root+'/public/sitemap.xml','utf8')
assert.equal((xml.match(/<image:image>/g)||[]).length,154)
const sitemapPaths=[...xml.matchAll(/<loc>https:\/\/www\.mychef\.ae([^<]*)<\/loc>/g)].map(match=>match[1]||'/')
const redirects=new Set(JSON.parse(readFileSync(root+'/vercel.json','utf8')).redirects.map(item=>item.source))
const utility=new Set(['/thank-you','/review','/privacy-policy','/terms','/private-client-booking-terms','/corporate-booking-terms','/site-map'])
const noReview=route=>utility.has(route)||route==='/best-catering-companies-dubai'||route==='/blog'||route.startsWith('/blog/')||route==='/guides'||route.startsWith('/guide/')||/guide|checklist|trends|report|private-chef-vs|buffet-vs/.test(route)
const app=express();app.get('/_vercel/*',(_r,s)=>s.type('text/javascript').send(''));app.use(express.static(root+'/dist',{index:false,redirect:false}));app.get('*',(_r,s)=>s.sendFile(root+'/dist/index.html'))
const server=await new Promise(resolve=>{const s=app.listen(0,'127.0.0.1',()=>resolve(s))})
const origin=`http://127.0.0.1:${server.address().port}`
const widgetSource=readFileSync(process.env.REVIEW_QA_BUNDLE,'utf8'),widgetData=readFileSync(process.env.REVIEW_QA_DATA,'utf8')
assert.equal(JSON.parse(widgetData).success,true)
const browser=await puppeteer.launch({executablePath:await chromium.executablePath(),args:chromium.args,headless:true,pipe:true})
const report={photos:154,categories:19,imageVariants:308,routes:[],interactions:[]},failures=[]
async function pageFor(width){
 const page=await browser.newPage();await page.setViewport({width,height:1000});await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);await page.setRequestInterception(true)
 page.on('request',request=>{
  const url=request.url()
  if(url.startsWith('https://portal.giveme5.ai/public/widget.js'))void request.respond({status:200,contentType:'application/javascript',body:widgetSource})
  else if(url.startsWith('https://api.giveme5.ai/api/v2/widget/')&&request.method()==='GET')void request.respond({status:200,contentType:'application/json',body:widgetData,headers:{'Access-Control-Allow-Origin':'*'}})
  else if(url.startsWith(origin)&&request.method()==='GET')void request.continue();else void request.abort()
 })
 return page
}
async function inspect(page,route,width){
 const errors=[];const handler=error=>errors.push(error.message);page.on('pageerror',handler)
 await page.goto(origin+route,{waitUntil:'domcontentloaded'})
 await page.waitForFunction(()=>[...document.querySelectorAll('main h1')].some(element=>element.getClientRects().length),{timeout:12000})
 await page.evaluate(()=>new Promise(resolve=>setTimeout(resolve,450)))
 if(!noReview(route))await page.waitForSelector('[data-mychef-reviews]',{timeout:7000})
 if(!utility.has(route)&&route!=='/gallery')await page.waitForSelector('[data-previous-work-preview]',{timeout:7000})
 const data=await page.evaluate(()=>{
  const reviews=[...document.querySelectorAll('[data-mychef-reviews]')],preview=[...document.querySelectorAll('[data-previous-work-preview]')]
  const chapters=[...document.querySelectorAll('main section,main header')].filter(element=>element.getClientRects().length&&element.querySelector('h1,h2,h3')&&!element.parentElement?.closest('section,header'))
  const reviewPosition=reviews[0]?chapters.indexOf(reviews[0])+1:0
  return {reviewCount:reviews.length,reviewPosition,reviewHosts:document.querySelectorAll('[data-mychef-review-host]').length,previewCount:preview.length,previewPhotos:preview[0]?.querySelectorAll('[data-work-photo]').length||0,previewAfterReviews:reviews[0]?.nextElementSibling?.matches('[data-previous-work-preview]')||false,visibleH1:[...document.querySelectorAll('main h1')].filter(element=>element.getClientRects().length).length,overflow:document.documentElement.scrollWidth>innerWidth,navOverlap:(()=>{const links=[...document.querySelector('nav').querySelectorAll('a')].filter(element=>element.getClientRects().length).map(element=>element.getBoundingClientRect()).sort((a,b)=>a.left-b.left);return links.some((rect,index)=>index&&rect.left<links[index-1].right-1)})(),chapterHeadings:chapters.slice(0,5).map(element=>element.querySelector('h1,h2,h3')?.textContent?.trim()),photoSources:[...document.querySelectorAll('[data-previous-work-preview] img')].map(element=>new URL(element.currentSrc||element.src).pathname)}
 })
 report.routes.push({route,width,...data,errors})
 assert.equal(data.visibleH1,1,route+' one H1')
 assert.equal(data.reviewCount,noReview(route)?0:1,route+' one relevant review section')
 assert.equal(data.reviewHosts,data.reviewCount,route+' one widget host')
 if(data.reviewCount){assert.ok([2,3].includes(data.reviewPosition),route+' reviews follow service content: '+JSON.stringify(data.chapterHeadings));if(route!=='/gallery')assert.ok(data.previewAfterReviews,route+' Google reviews precede work')}
 if(!utility.has(route)&&route!=='/gallery'){assert.equal(data.previewCount,1,route+' one photo preview');assert.equal(data.previewPhotos,6,route+' six related work photos');data.photoSources.forEach(src=>assert.ok(allowedPhotos.has(src),src))}
 assert.equal(data.overflow,false,route+' no horizontal overflow at '+width);assert.equal(data.navOverlap,false,route+' navigation labels do not overlap')
 assert.deepEqual(errors,[],route+' no browser errors');page.off('pageerror',handler)
}
try{
 const representative=['/','/gallery','/catering-dubai','/corporate','/corporate/menus-prices','/luxury-dining-experiences/menus-prices','/private-chef-dubai','/private-chef-dubai/pricing','/bbq-catering-dubai','/yachts','/christmas-catering-dubai','/about','/contact','/blog/office-breakfast-planning-dubai']
 for(const width of process.env.WORK_QA_INTERACTIONS_ONLY==='1'?[390]:[1440,390]){
  const page=await pageFor(width)
  for(const route of process.env.WORK_QA_INTERACTIONS_ONLY==='1'?[]:representative){try{await inspect(page,route,width);console.log('PASS representative',width,route)}catch(error){failures.push(error.message);console.log('FAIL',width,route,error.message)}}
  await page.goto(origin+'/corporate',{waitUntil:'domcontentloaded'});await page.waitForSelector('[data-mychef-reviews]');await page.evaluate(()=>new Promise(resolve=>setTimeout(resolve,550)));await page.evaluate(()=>document.querySelector('[data-mychef-reviews]').scrollIntoView());await page.waitForFunction(()=>!!document.querySelector('[data-mychef-review-host] .gm5-review-widget-container')?.shadowRoot?.querySelector('.rw-card'),{timeout:12000})
  const widget=await page.evaluate(()=>{const roots=[...document.querySelectorAll('.gm5-review-widget-container')];const shadow=roots[0]?.shadowRoot;const names=[...shadow.querySelectorAll('.rw-reviewer-name')].map(element=>element.textContent);return {containers:roots.length,names,grid:!!shadow.querySelector('.rw-grid'),clones:shadow.querySelectorAll('[data-clone-count]').length}})
  assert.equal(widget.containers,1);assert.ok(widget.grid,'compact grid replaces looping carousel');assert.equal(widget.names.length,new Set(widget.names).size,'each review card appears once');assert.equal(widget.clones,0)
  await page.screenshot({path:qa+`/review-and-work-${width}.png`});report.interactions.push({width,widget})
  await page.goto(origin+'/gallery',{waitUntil:'domcontentloaded'});await page.waitForSelector('[data-work-photo]')
  assert.equal(await page.$eval('h1',element=>element.textContent),'Previous Work');assert.ok((await page.$eval('meta[property="og:image"]',element=>element.content)).includes('/images/previous-work/'),'social previews use submitted photographs')
  assert.equal(await page.$$eval('.pw-page img',elements=>elements.every(element=>new URL(element.src).pathname.startsWith('/images/previous-work/'))),true,'gallery contains submitted images only')
  await page.screenshot({path:qa+`/gallery-${width}.png`,fullPage:false})
  await page.evaluate(()=>window.scrollTo({top:document.getElementById('work-gallery').getBoundingClientRect().top+scrollY,behavior:'instant'}));await page.evaluate(()=>new Promise(resolve=>setTimeout(resolve,500)))
  await page.evaluate(()=>window.dispatchEvent(new Event('wheel')));await page.evaluate(()=>window.scrollTo({top:document.getElementById('work-gallery').getBoundingClientRect().top+scrollY,behavior:'instant'}));const y=await page.evaluate(()=>scrollY);await page.click('.pw-filters button:nth-child(4)');await page.waitForFunction(()=>document.querySelector('.pw-filters button:nth-child(4)').getAttribute('aria-pressed')==='true');assert.equal(await page.$$eval('.pw-gallery-grid [data-work-photo]',elements=>elements.every(element=>element.dataset.workPhoto.startsWith('bbq-'))),true)
  const nextY=await page.evaluate(()=>scrollY);assert.ok(Math.abs(nextY-y)<50,'filtering retains position beside gallery: '+JSON.stringify({y,nextY}))
  const original=await page.$eval('.pw-gallery-grid .pw-photo-button img',element=>element.src)
  await page.click('.pw-gallery-grid .pw-photo-button');await page.waitForSelector('[role=dialog]');await page.keyboard.press('ArrowRight');await page.waitForFunction(id=>document.querySelector('[role=dialog] img').src!==id.replace('-thumb.webp','-large.webp'),{},original);await page.keyboard.press('Escape');await page.waitForSelector('[role=dialog]',{hidden:true});assert.equal(await page.$eval('.pw-gallery-grid .pw-photo-button',element=>element===document.activeElement),true,'lightbox restores focus')
  await page.click('.pw-clear');await page.waitForFunction(()=>location.search==='');await page.type('#pw-search','no-photos-match-this-query',{delay:50});await page.waitForSelector('.pw-empty',{timeout:5000}).catch(async error=>{console.log('SEARCH DEBUG',await page.evaluate(()=>({url:location.href,value:document.getElementById('pw-search').value,focus:document.activeElement?.outerHTML})));throw error});await page.click('.pw-empty .pw-button');await page.waitForSelector('.pw-gallery-grid',{timeout:5000}).catch(async error=>{console.log('CLEAR DEBUG',await page.evaluate(()=>({url:location.href,empty:document.querySelector('.pw-empty')?.textContent,button:document.querySelector('.pw-empty .pw-button')?.getBoundingClientRect().toJSON(),scroll:scrollY,focus:document.activeElement?.outerHTML})));await page.screenshot({path:qa+'/clear-debug.png'});throw error})
  for(let n=0;n<8;n++){if(!await page.$('.pw-load-more button'))break;const count=await page.$$eval('.pw-gallery-grid [data-work-photo]',elements=>elements.length);await page.evaluate(()=>document.querySelector('.pw-load-more button').click());await page.waitForFunction(count=>document.querySelectorAll('.pw-gallery-grid [data-work-photo]').length>count,{},count)}
  assert.equal(await page.$$eval('.pw-gallery-grid [data-work-photo]',elements=>elements.length),154,'all uploaded work can be browsed')
  const schema=await page.$$eval('script[type="application/ld+json"]',elements=>elements.map(element=>JSON.parse(element.textContent)).flatMap(data=>data['@graph']||[data]).find(node=>Array.isArray(node['@type'])&&node['@type'].includes('ImageGallery')))
  assert.equal(schema.hasPart.length,154)
  if(width===390){await page.click('[aria-label="Open menu"]');await page.waitForSelector('[role=dialog]');assert.ok(await page.$('a[href="/gallery"]'),'Previous Work appears in mobile menu');await page.click('[role=dialog] a[href="/gallery"]')}
  await page.close();console.log('PASS gallery interactions',width)
 }
 if(process.env.WORK_QA_ALL==='1'){
  const paths=[...new Set([...sitemapPaths,...[...livePaths].filter(route=>route!=='*'&&!route.includes(':')&&!redirects.has(route)&&!route.startsWith('/seo'))])].filter(route=>!representative.includes(route))
  let cursor=0
  await Promise.all(Array.from({length:4},async()=>{const page=await pageFor(1280);while(cursor<paths.length){const route=paths[cursor++];try{await inspect(page,route,1280)}catch(error){failures.push(error.message);console.log('FAIL route',route,error.message)}if(cursor%25===0)console.log('Audited',cursor,'/',paths.length)}await page.close()}))
 }
 writeFileSync(qa+'/validation.json',JSON.stringify({...report,failures},null,2)+'\n')
 assert.deepEqual(failures,[])
 console.log('PASS submitted-only gallery, image SEO, one review block, chapter placement, desktop/mobile interactions; audited renders:',report.routes.length)
}finally{await browser.close();server.close()}
