import assert from 'node:assert/strict'
import {readFileSync,mkdirSync} from 'node:fs'
import express from 'express'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
const base=process.env.REVIEW_QA_DIR||'/tmp/mychef-review-qa';mkdirSync(base,{recursive:true});const app=express();app.get('/_vercel/*',(_r,s)=>s.type('text/javascript').send(''));app.use(express.static(process.cwd()+'/dist',{index:false,redirect:false}));app.get('*',(_r,s)=>s.sendFile(process.cwd()+'/dist/index.html'))
const server=await new Promise(resolve=>{const s=app.listen(0,'127.0.0.1',()=>resolve(s))});const origin=`http://127.0.0.1:${server.address().port}`
const widgetSource=process.env.REVIEW_QA_BUNDLE?readFileSync(process.env.REVIEW_QA_BUNDLE,'utf8'):await fetch('https://portal.giveme5.ai/public/widget.js').then(r=>r.text());
const widgetData=process.env.REVIEW_QA_DATA?readFileSync(process.env.REVIEW_QA_DATA,'utf8'):await fetch('https://api.giveme5.ai/api/v2/widget/embed?id=GxRGAhebMrf6',{headers:{Origin:'https://www.mychef.ae'}}).then(r=>r.text());
assert.equal(JSON.parse(widgetData).success,true,'the supplied widget account is active');
const browser=await puppeteer.launch({executablePath:await chromium.executablePath(),args:chromium.args,headless:true})
async function readyReviews(page,route,expected){
 await page.waitForFunction((route,expected)=>{
  const canonical=document.querySelector('link[rel=canonical]'),section=document.querySelector('[data-mychef-reviews]'),mount=section?.parentElement;
  if(!document.querySelector('h1')||!canonical||new URL(canonical.href).pathname!==route||!mount)return false;
  return expected==='before-extras'?mount.nextElementSibling?.id==='extras':expected==='fallback'||mount.previousElementSibling?.id===expected;
 },{timeout:15000},route,expected);
 // Route changes intentionally hold scroll at the top for 420ms. Wait for
 // that hold to finish before testing the intersection-triggered widget.
 await page.evaluate(()=>new Promise(resolve=>setTimeout(resolve,500)));
 await page.evaluate(()=>document.querySelector('[data-mychef-reviews]').scrollIntoView());
}
try{
for(const width of [1440,390]){
 const page=await browser.newPage(),errors=[];let bundleRequests=0,apiRequests=0;page.on('pageerror',e=>errors.push(e.message));await page.setViewport({width,height:1000});await page.setRequestInterception(true)
 page.on('request',request=>{
  if(request.url().startsWith('https://portal.giveme5.ai/public/widget.js')){bundleRequests++;void request.respond({status:200,contentType:'application/javascript',body:widgetSource})}
  else if(request.url().startsWith('https://api.giveme5.ai/api/v2/widget/')){apiRequests++;void request.respond({status:200,contentType:'application/json',body:widgetData,headers:{'Access-Control-Allow-Origin':'*'}})}
  else if(request.url().startsWith(origin)&&request.method()==='GET')void request.continue();else void request.abort()
 })
 for(const [route,expected] of [['/corporate','pricing'],['/private-chef-dubai/pricing','visit-rates'],['/corporate/menus-prices','before-extras'],['/luxury-dining-experiences/menus-prices','before-extras'],['/blog/office-breakfast-planning-dubai','fallback']]){
  await page.goto(origin+route,{waitUntil:'domcontentloaded'});await readyReviews(page,route,expected);assert.equal(await page.$$eval('[data-mychef-reviews]',a=>a.length),1)
  const placement=await page.evaluate(()=>{const section=document.querySelector('[data-mychef-reviews]'),mount=section.parentElement;return {after:mount.previousElementSibling?.id,before:mount.nextElementSibling?.id,portal:mount.hasAttribute('data-mychef-review-placement'),overflow:document.documentElement.scrollWidth>innerWidth}})
  if(expected==='before-extras')assert.equal(placement.before,'extras');else if(expected!=='fallback')assert.equal(placement.after,expected)
  assert.equal(placement.overflow,false)
  await page.evaluate(()=>document.querySelector('[data-mychef-reviews]').scrollIntoView());await page.waitForFunction(()=>{const h=document.querySelector('[data-mychef-review-host] .gm5-review-widget-container');return !!h?.shadowRoot?.querySelector('.rw-review-card,.rw-carousel,.rw-widget') && !h.shadowRoot.querySelector('.rw-loading,.rw-error')},{timeout:15000})
  await page.screenshot({path:`${base}/reviews-${width}-${route.includes('menus-prices')?(route.startsWith('/corporate')?'corporate':'dinner'):expected}.png`})
  assert.equal(await page.$$('.mychef-reviews-unavailable').then(a=>a.length),0);console.log('PASS reviews',width,route,JSON.stringify(placement))
 }
 const before=bundleRequests;for(const route of ['/corporate/menus-prices','/luxury-dining-experiences/menus-prices']){await page.evaluate(r=>document.querySelector(`footer a[href=\"${r}\"]`).click(),route);await page.waitForFunction(r=>location.pathname===r,{},route);await readyReviews(page,route,'before-extras');await page.waitForFunction(()=>!!document.querySelector('[data-mychef-review-host] .gm5-review-widget-container')?.shadowRoot?.querySelector('.rw-widget'));assert.equal(await page.$$eval('[data-mychef-reviews]',a=>a.length),1)}assert.equal(bundleRequests,before,'SPA navigation reuses the bundle');
 assert.deepEqual(errors,[]);console.log('PASS real provider bundle and seven-review response',width,{bundleRequests,apiRequests});await page.close()
}
}finally{await browser.close();server.close()}
