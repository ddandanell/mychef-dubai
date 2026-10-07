/** Contact coverage + interaction checks. No live leads or analytics are sent. */
import assert from 'node:assert/strict'
import fs from 'node:fs'
import express from 'express'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
const app=express();app.get('/_vercel/*',(_req,res)=>res.type('application/javascript').send(''));app.use(express.static('dist'));app.get('*',(_req,res)=>res.sendFile(process.cwd()+'/dist/index.html'))
const server=await new Promise(resolve=>{const s=app.listen(0,'127.0.0.1',()=>resolve(s))})
const origin=`http://127.0.0.1:${server.address().port}`
const browser=await puppeteer.launch({executablePath:process.env.CHROME_BIN || await chromium.executablePath(),args:chromium.args,headless:true,pipe:true})
const results=[],errors=[]
async function page(width=1440){
 const p=await browser.newPage();await p.setViewport({width,height:900,deviceScaleFactor:1})
 p.on('pageerror',e=>errors.push(String(e)))
 await p.setRequestInterception(true)
 p.on('request',r=>r.method()==='GET' && r.url().startsWith(origin)?r.continue():r.abort())
 return p
}
async function visit(p,path){await p.goto(origin+path,{waitUntil:'domcontentloaded'});await p.waitForSelector('.mc-contact-launcher');await p.waitForSelector('main h1');}
try {
 const p=await page()
 await visit(p,'/');await p.waitForSelector('#mychef-contact-panel',{timeout:8000});await new Promise(r=>setTimeout(r,300))
 await p.screenshot({path:'/tmp/mychef-contact-desktop.png'})
 await p.click('.mc-contact-close')
 assert.equal(await p.$('#mychef-contact-panel'),null)
 await p.$eval('a[href="/contact"]',a=>a.click());await p.waitForFunction(()=>location.pathname==='/contact')
 await new Promise(r=>setTimeout(r,4800));assert.equal(await p.$('#mychef-contact-panel'),null,'Dismissal persists through SPA navigation')
 await p.click('.mc-contact-launcher');await p.waitForSelector('#mychef-contact-panel');await new Promise(r=>setTimeout(r,300))
 const wa=await p.$eval('.mc-contact-whatsapp',a=>a.href)
 assert(new URL(wa).searchParams.get('text').includes('Page: https://www.mychef.ae/contact'))
 assert(new URL(wa).searchParams.get('text').includes('First visited: https://www.mychef.ae/'))
 // Prevent navigation after the document capture handler has recorded the click.
 await p.$eval('.mc-contact-whatsapp',a=>a.addEventListener('click',e=>e.preventDefault()))
 const before=await p.evaluate(()=>window.dataLayer.filter(e=>e[1]==='whatsapp_click').length)
 await p.click('.mc-contact-whatsapp')
 const hits=await p.evaluate(()=>window.dataLayer.filter(e=>e[1]==='whatsapp_click').map(e=>e[2]))
 assert.equal(hits.length,before+1,'One GA event per chat CTA click');assert.equal(hits.at(-1).page_path,'/contact');assert(!hits.at(-1).link_url.includes('?'))
 await p.$eval('.mc-contact-email',a=>a.addEventListener('click',e=>e.preventDefault()))
 await p.click('.mc-contact-email')
 assert.equal(await p.evaluate(()=>window.dataLayer.filter(e=>e[1]==='email_click').at(-1)[2].page_path),'/contact')
 await p.keyboard.press('Escape');assert.equal(await p.$('#mychef-contact-panel'),null)
 await p.close()
 console.log('PASS: automatic greeting, dismiss, reopen, SPA attribution, email and WhatsApp events, Escape')
 for(const route of ['/','/private-chef-dubai/pricing','/yachts','/inquiry','/thank-you']){
  const p=await page(390);await visit(p,route);await p.click('.mc-contact-launcher');await p.waitForSelector('#mychef-contact-panel');await new Promise(r=>setTimeout(r,300))
  const bounds=await p.$eval('.mc-contact',el=>{const r=el.getBoundingClientRect();return {x:r.x,right:r.right,top:r.top,bottom:r.bottom,w:innerWidth,h:innerHeight}})
  assert(bounds.x>=0 && bounds.right<=bounds.w && bounds.top>=0 && bounds.bottom<=bounds.h,route+' panel fits mobile')
  if(route==='/private-chef-dubai/pricing'){
   const bar=await p.$eval('.lg\\:hidden.fixed.inset-x-0.bottom-0',el=>el.getBoundingClientRect().top)
   assert(bounds.bottom<=bar,'Pricing bar remains unobstructed')
  }
  if(route==='/')await p.screenshot({path:'/tmp/mychef-contact-mobile.png'})
  await p.close()
 }
 const privatePage=await page(320)
 await privatePage.evaluateOnNewDocument(()=>{Object.defineProperty(window,'sessionStorage',{get(){throw new Error('Storage blocked')}})})
 await visit(privatePage,'/contact');await privatePage.click('.mc-contact-launcher');await privatePage.click('.mc-contact-close');await privatePage.click('.mc-contact-launcher');assert(await privatePage.$('.mc-contact-email'));await privatePage.close()
 console.log('PASS: mobile panels and storage-blocked browser')
 const source=fs.readFileSync('src/routes.tsx','utf8')
 const redirects=new Set(JSON.parse(fs.readFileSync('vercel.json')).redirects.map(r=>r.source))
 const blogPaths=[...fs.readFileSync('src/content/ryzeBlogPaths.ts','utf8').matchAll(/"(\/blog\/[^"]+)"/g)].map(m=>m[1])
 const paths=[...new Set([...source.matchAll(/path:\s*"([^"*:]+)"/g)].map(m=>m[1]).concat(blogPaths).concat([...fs.readFileSync('public/sitemap.xml','utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>new URL(m[1]).pathname)))].filter(p=>p.startsWith('/')&&!p.startsWith('/seo')&&!redirects.has(p))
 let index=0
 await Promise.all(Array.from({length:4},async()=>{
  const p=await page()
  while(index<paths.length){const path=paths[index++];try{
   await visit(p,path)
   const result=await p.evaluate(()=>{
    const links=[...document.querySelectorAll('a[href]')].filter(a=>/^https:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//.test(a.href)||a.href.startsWith('mailto:info@mychef.ae'))
    return {path:location.pathname,links:links.length,unattributed:links.filter(a=>!(new URL(a.href).searchParams.get(a.href.startsWith('mailto:')?'body':'text')||'').includes('Page: https://www.mychef.ae'+location.pathname.replace(/\/$/,'')+(location.pathname==='/'?'/':''))).map(a=>a.textContent.trim()),launcher:!!document.querySelector('.mc-contact-launcher')}
   })
   assert(result.launcher && result.links>0 && result.unattributed.length===0,JSON.stringify(result));results.push(result)
  }catch(e){errors.push(path+': '+e.message)}}
  await p.close()
 }))
 fs.writeFileSync('/tmp/mychef-contact-audit.json',JSON.stringify({results,errors},null,2))
 console.log(`Audited ${results.length}/${paths.length} public routes; ${errors.length} errors`)
 assert.equal(errors.length,0,errors.join('\n'))
} finally {await browser.close();server.close()}
