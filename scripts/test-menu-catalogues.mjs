import assert from 'node:assert/strict'
import { readFileSync, mkdirSync } from 'node:fs'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'
import express from 'express'
import path from 'node:path'
const app=express();app.get('/_vercel/*',(_req,res)=>res.type('application/javascript').send(''));app.use(express.static(path.resolve('dist'),{index:false,redirect:false}));app.get('*',(_req,res)=>res.sendFile(path.resolve('dist/index.html')));
const server=await new Promise(resolve=>{const s=app.listen(0,'127.0.0.1',()=>resolve(s))});
const origin=`http://127.0.0.1:${server.address().port}`
const output=process.env.MENU_QA_DIR||'/tmp/mychef-menu-qa';mkdirSync(output,{recursive:true})
const browser=await puppeteer.launch({executablePath:await chromium.executablePath(),args:chromium.args,headless:true})
try{
for(const width of [1440,390])for(const [mode,route,count] of [['corporate','/corporate/menus-prices',49],['dinner','/luxury-dining-experiences/menus-prices',13]]){
 const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setViewport({width,height:1000});await page.evaluateOnNewDocument(()=>{window.__MYCHEF_PRERENDER__=true});await page.setRequestInterception(true);page.on('request',r=>r.url().startsWith(origin)&&r.method()==='GET'?r.continue():r.abort())
 await page.goto(origin+route,{waitUntil:'networkidle0'});await page.waitForSelector('.mc-card');await page.evaluate(()=>document.fonts.ready)
 const initial=await page.evaluate(()=>({h1:document.querySelectorAll('h1').length,cards:document.querySelectorAll('.mc-card').length,canonical:[...document.querySelectorAll('link[rel=canonical]')].map(x=>x.href),robots:[...document.querySelectorAll('meta[name=robots]')].map(x=>x.content),overflow:document.documentElement.scrollWidth>innerWidth,details:document.querySelectorAll('.mc-full-menu').length}))
 assert.equal(initial.h1,1);assert.equal(initial.cards,count);assert.equal(initial.details,count);assert.equal(initial.overflow,false);assert.deepEqual(initial.canonical,['https://www.mychef.ae'+route]);assert.ok(initial.robots.every(x=>!x.includes('noindex')))
 await page.screenshot({path:`${output}/${mode}-${width}.png`})
 await page.evaluate(()=>document.querySelector('.mc-card-footer button').click())
 await page.waitForSelector('.mc-total');let total=await page.$eval('.mc-total strong',e=>e.textContent)
 assert.equal(total,mode==='corporate'?'AED 3,360':'AED 1,260')
 await page.evaluate(()=>document.querySelector('.mc-full-menu').open=true);assert.ok((await page.$eval('.mc-full-menu',e=>e.innerText)).length>150)
 await page.$eval('.mc-search input',e=>e.focus());await page.type('.mc-search input','no-such-menu-abc');assert.equal(await page.$$eval('.mc-card',a=>a.length),0)
 await page.focus('.mc-search input');await page.keyboard.down('Control');await page.keyboard.press('KeyA');await page.keyboard.up('Control');await page.keyboard.press('Backspace');await page.waitForFunction(()=>document.querySelectorAll('.mc-card').length>0)
 if(mode==='dinner'){
  await page.evaluate(()=>{const e=document.querySelector('.mc-quote-fields input[type=date]');Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(e,'2026-12-25');e.dispatchEvent(new Event('input',{bubbles:true}))});await page.waitForFunction(()=>document.querySelector('.mc-total strong').textContent==='AED 1,890')
 }else{
  await page.evaluate(()=>{const i=document.querySelector('.mc-quote-fields input[type=number]');Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(i,'16');i.dispatchEvent(new Event('input',{bubbles:true}))});await page.waitForSelector('.mc-warning');assert.equal(await page.$('.mc-total'),null)
 }
 await page.evaluate(()=>document.getElementById('your-quote').scrollIntoView());await page.screenshot({path:`${output}/${mode}-quote-${width}.png`});assert.deepEqual(errors,[]);console.log('PASS',mode,width,JSON.stringify(initial));await page.close()
}
const c=JSON.parse(readFileSync('src/content/catalogues/corporate.json')),d=JSON.parse(readFileSync('src/content/catalogues/dinner.json'))
assert.equal(c.sections.flatMap(s=>s.packages).length,33);assert.equal(c.stations.length,16);assert.equal(d.menus.length,13)
for(const [file,data] of [['corporate',c],['dinner',d]])assert.ok(!/"(cedarRate|cedar|chefCost|markupRule)"/.test(JSON.stringify(data)),file+' has no supplier costs')
console.log('PASS complete catalogues and supplier-cost exclusion')
}finally{await browser.close();server.close()}
