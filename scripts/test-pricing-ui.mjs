/** Production-build browser acceptance test. Blocks all external traffic and submits no leads. */
import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
const root=process.cwd(), require=createRequire(path.join(root,'package.json'))
const express=require('express'), puppeteer=require('puppeteer-core'), chromium=require('@sparticuz/chromium').default
const output=process.env.PRICING_QA_DIR || '/tmp/mychef-pricing-qa'
await mkdir(output,{recursive:true})
const app=express();app.use(express.static(path.join(root,'dist')))
const server=await new Promise(resolve=>{const s=app.listen(0,'127.0.0.1',()=>resolve(s))})
const origin=`http://127.0.0.1:${server.address().port}`
const browser=await puppeteer.launch({args:chromium.args,executablePath:await chromium.executablePath(),headless:true})
const results=[], errors=[], posts=[]
async function visit(route,width=1440){
 const page=await browser.newPage();page.on('pageerror',error=>errors.push(String(error)))
 await page.setViewport({width,height:1000,deviceScaleFactor:1});await page.setRequestInterception(true)
 page.on('request',request=>{if(request.method()==='POST'){posts.push(request.url());return request.abort()};return request.url().startsWith(origin)||/^(data|blob):/.test(request.url())?request.continue():request.abort()})
 await page.goto(origin+route,{waitUntil:'networkidle0'});await page.waitForSelector('h1');return page
}
async function layout(page,name){
 const data=await page.evaluate(()=>({width:innerWidth,pageWidth:document.documentElement.scrollWidth,h1:document.querySelectorAll('h1').length}))
 assert.equal(data.pageWidth,data.width,`${name}: no horizontal overflow`);assert.equal(data.h1,1)
 results.push({name,...data});return data
}
async function clickText(page,selector,text){
 const clicked=await page.$$eval(selector,(elements,text)=>{const button=elements.find(el=>el.textContent.includes(text));button?.click();return !!button},text)
 assert(clicked,`Control not found: ${text}`)
}
async function summaryContains(page,text){await page.waitForFunction(text=>document.querySelector('[data-testid="chef-plan-summary"]')?.textContent.includes(text),{},text)}
try {
 const page=await visit('/private-chef-dubai/pricing')
 await summaryContains(page,'AED 1,125')
 await clickText(page,'#calculator button','Chef by the Day')
 await summaryContains(page,'AED 2,000');await summaryContains(page,'10 hours')
 await clickText(page,'[aria-label="Choose single or member rates"] button','Member plan')
 await summaryContains(page,'AED 5,800')
 await clickText(page,'#calculator button','5days/wk')
 await summaryContains(page,'AED 29,000')
 await page.select('#chef-transport-zone','marina-palm');await summaryContains(page,'AED 32,445')
 let wa=await page.$eval('[data-testid="chef-plan-summary"] a[href*="wa.me"]',el=>new URL(el.href).searchParams.get('text'))
 assert(wa.includes('AED 32,445')&&wa.includes('4+ prepaid visits')&&wa.includes('no markup'))
 await clickText(page,'[aria-label="Choose single or member rates"] button','Single visits')
 await clickText(page,'#calculator button','Fridge Reset, chef shops');await summaryContains(page,'AED 1,575')
 await page.select('[aria-label="Meal pack booking rate"]','member')
 await page.waitForFunction(()=>document.querySelector('[data-testid="meal-pack-summary"]')?.textContent.includes('AED 1,750'))
 await page.select('[aria-label="Meals per week"]','15')
 await page.waitForFunction(()=>document.querySelector('[data-testid="meal-pack-summary"]')?.textContent.includes('15 meals'))
 await layout(page,'calculator-desktop-interactions');await page.close()
 for(const [name,route,selector,width] of [
  ['pricing-desktop','/private-chef-dubai/pricing','#visit-rates',1440],
  ['pricing-mobile','/private-chef-dubai/pricing','#calculator',390],
  ['meal-packs-desktop','/weekly-meal-prep-dubai','#meal-packs',1440],
  ['meal-packs-mobile','/weekly-meal-prep-dubai','#meal-packs',390],
  ['short-term-mobile','/private-chef-dubai/short-term-chef','.pc-rate-grid',390],
  ['home-mobile','/','.starter-package-card',390],
 ]){
  const page=await visit(route,width);await layout(page,name)
  await page.$eval(selector,el=>window.scrollTo(0,window.scrollY+el.getBoundingClientRect().top-95))
  await new Promise(resolve=>setTimeout(resolve,350));await page.screenshot({path:path.join(output,name+'.png')})
  if(name==='pricing-mobile'){
   const chatBottom=await page.$eval('[data-floating-chef-chat]',el=>el.getBoundingClientRect().bottom)
   const barTop=await page.$eval('.lg\\:hidden.fixed.inset-x-0.bottom-0',el=>el.getBoundingClientRect().top)
   assert(chatBottom<=barTop,'Contact launcher remains above the pricing bar')
   await clickText(page,'button','View plan');await page.waitForSelector('[role="dialog"]')
   const drawer=await page.$eval('[role="dialog"]',el=>el.textContent)
   assert(drawer.includes('AED 1,125')&&drawer.includes('5% VAT')&&drawer.includes('40–130'))
  }
  await page.close()
 }
 await writeFile(path.join(output,'results.json'),JSON.stringify({results,errors,blockedPosts:posts},null,2))
 assert.equal(errors.length,0,errors.join('\n'));assert.equal(posts.filter(url => /submit-lead|wa\.me|inquiry/.test(url)).length,0,'Must not submit enquiries or messages')
}finally{await browser.close();server.close()}
await writeFile(path.join(output,'results.json'),JSON.stringify({results,errors,posts},null,2))
console.log(JSON.stringify({results,errors,posts},null,2))
