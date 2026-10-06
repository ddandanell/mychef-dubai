import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import express from 'express'
import puppeteer from 'puppeteer-core'
import chromium from '@sparticuz/chromium'

// Verify the actual hydrated article at both viewport sizes, without sending
// forms, tracking events or requests to third parties.
const authority=JSON.parse(fs.readFileSync('src/content/pageAuthority.json','utf8'))
const routes=Object.keys(authority).filter(p=>p.startsWith('/blog/')&&!p.startsWith('/blog/topic/'))
const output=process.env.BLOG_VISUAL_QA_DIR||'/tmp/mychef-blog-visual-qa'
fs.mkdirSync(output,{recursive:true})
const app=express();app.get('/_vercel/*',(_req,res)=>res.type('text/javascript').send(''))
app.get('/blog/:slug', (req,res)=>res.sendFile(path.resolve('dist/blog',req.params.slug,'index.html')))
app.use(express.static(path.resolve('dist'),{redirect:false}));app.use((_req,res)=>res.sendFile(path.resolve('dist/fallback.html')))
const server=await new Promise(resolve=>{const s=app.listen(0,'127.0.0.1',()=>resolve(s))})
const origin=`http://127.0.0.1:${server.address().port}`
const browser=await puppeteer.launch({executablePath:await chromium.executablePath(),args:chromium.args,headless:true})
const results=[]
const samples=new Set(['/blog/best-gluten-free-catering-companies-in-dubai','/blog/best-arabic-catering-companies-in-dubai','/blog/mychef-vs-chef-maison-which-is-better-in','/blog/private-chefs-for-expat-families-in-dubai-complete-guide','/blog/nursery-meals-vs-packed-lunch-dubai','/blog/best-luxury-private-dining-experiences-in-dubai'])
try {
 for(const width of [390,1440]){
  const page=await browser.newPage();await page.setViewport({width,height:900});await page.setRequestInterception(true)
  page.on('request',r=>r.url().startsWith(origin)&&r.method()==='GET'?void r.continue():void r.abort())
  const errors=[];page.on('pageerror',e=>errors.push(e.message))
  for(const route of routes){
   const from=errors.length
   await page.goto(origin+route,{waitUntil:'networkidle0',timeout:30000})
   await page.waitForFunction(()=>!document.head.querySelector('[data-prerender-seo="true"]'))
   // Loading all article images catches failed derivatives, even below the fold.
   await page.evaluate(async()=>{
    const images=[...document.querySelectorAll('main img')].filter(im=>!im.closest('[data-blog-related],a.blog-card'))
    await Promise.all(images.map(async im=>{im.loading='eager';try{await im.decode()}catch{}}))
   })
   const result=await page.evaluate(()=>({
    overflow:document.documentElement.scrollWidth>innerWidth+1,
    headings:document.querySelectorAll('h1').length,
    photos:[...document.querySelectorAll('main img')].filter(im=>!im.closest('[data-blog-related],a.blog-card')).map(im=>({src:im.getAttribute('src'),width:im.naturalWidth,height:im.naturalHeight,alt:im.alt,visible:im.getBoundingClientRect().width>0,paintedWidth:im.getBoundingClientRect().width,viewport:innerWidth})),
    captions:[...document.querySelectorAll('[data-editorial-photo] figcaption')].map(el=>({text:el.textContent,width:el.getBoundingClientRect().width,fontSize:parseFloat(getComputedStyle(el).fontSize)}))
   }))
   assert.equal(result.overflow,false,route+' horizontal overflow')
   assert.equal(result.headings,1,route+' heading count')
   assert.ok(result.photos.length>=3,route+' needs three article photos')
   assert.ok(result.photos.every(im=>im.width>0&&im.height>0&&im.alt&&im.visible),route+' broken, hidden or inaccessible image')
   assert.ok(result.captions.every(c=>c.fontSize>=13&&c.width<=width),route+' caption layout')
   assert.deepEqual(errors.slice(from),[],route+' browser error')
   if(samples.has(route)){
    await page.screenshot({path:path.join(output,route.slice(6)+'-'+width+'-hero.jpg'),type:'jpeg',quality:82})
    const figure=await page.$('[data-editorial-photo],article .blog-editorial-photo')
    if(figure){await figure.evaluate(el=>el.scrollIntoView({block:'center'}));await page.screenshot({path:path.join(output,route.slice(6)+'-'+width+'-figure.jpg'),type:'jpeg',quality:82})}
   }
   results.push({route,width,photos:result.photos.length,errors:errors.slice(from)})
  }
  await page.close();console.log(`PASS ${width}px: ${routes.length} articles, all photographs loaded, one H1, no overflow or browser errors.`)
 }
 fs.writeFileSync(path.join(output,'results.json'),JSON.stringify(results,null,2))
}finally{await browser.close();await new Promise(resolve=>server.close(resolve))}
