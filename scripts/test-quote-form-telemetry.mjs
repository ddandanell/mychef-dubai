import assert from 'node:assert/strict';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import express from 'express';
const app=express();app.get('/_vercel/*',(_req,res)=>res.type('application/javascript').send(''));app.use(express.static('dist'));app.get('*',(_req,res)=>res.sendFile(process.cwd()+'/dist/index.html'));
const server=await new Promise(resolve=>{const s=app.listen(0,'127.0.0.1',()=>resolve(s))});
const origin='http://127.0.0.1:'+server.address().port;
const browser=await puppeteer.launch({executablePath:process.env.CHROME_BIN || await chromium.executablePath(),args:['--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--disable-software-rasterizer'],headless:true,pipe:true});
const out=[];
try{
 for(const mode of ['email','whatsapp']){
  const p=await browser.newPage();await p.setViewport({width:390,height:844,deviceScaleFactor:1,isMobile:true,hasTouch:true});
  let reply='http';let submitted=0;const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.evaluateOnNewDocument(()=>{window.croHits=[];window.gtag=(...args)=>window.croHits.push(args)});
  await p.setRequestInterception(true);p.on('request',r=>{
   if(r.url().startsWith(origin+'/api/submit-lead')){submitted++;return reply==='network'?r.abort():r.respond({status:reply==='ok'?200:500,contentType:'application/json',body:JSON.stringify({ok:reply==='ok'})})}
   if(r.url().startsWith(origin+'/api/e'))return r.respond({status:204,body:''});
   if(r.url().startsWith(origin))return r.continue();return r.abort();
  });
  await p.goto(origin+'/inquiry?from=/catering-dubai',{waitUntil:'networkidle0'});await p.waitForSelector('#quote_request');
  await p.$eval('#quote_request input[name=guests]',e=>e.focus());await p.$eval('#quote_request input[name=location]',e=>e.focus());
  assert.equal(await p.evaluate(()=>window.croHits.filter(x=>x[1]==='quote_form_start').length),1);
  await p.$eval('#quote_request',f=>f.requestSubmit());
  assert.equal(await p.evaluate(()=>window.croHits.filter(x=>x[1]==='quote_form_validation_error').length),1);
  assert.equal(submitted,0);
  await p.type('#quote_request input[name=guests]','25');await p.type('#quote_request input[name=location]','Dubai Marina');
  if(mode==='whatsapp')await p.$eval('#quote_request input[name=contactBy]:not(:checked)',e=>e.click());
  await p.type('#quote_request input[name='+ (mode==='email'?'email':'phone')+']',mode==='email'?'cro-test@example.invalid':'+971500000000');
  await p.$eval('#quote_request',f=>f.requestSubmit());await p.waitForFunction(()=>document.querySelector('#quote_request [role=alert]'));
  assert.equal(await p.evaluate(()=>window.croHits.filter(x=>x[1]==='quote_form_error'&&x[2].failure_type==='http').length),1);
  assert.equal(await p.evaluate(()=>window.croHits.filter(x=>x[1]==='generate_lead').length),0);
  reply='network';await p.$eval('#quote_request',f=>f.requestSubmit());await p.waitForFunction(()=>window.croHits.some(x=>x[1]==='quote_form_error'&&x[2].failure_type==='network'));
  assert.equal(await p.evaluate(()=>window.croHits.filter(x=>x[1]==='generate_lead').length),0);
  reply='ok';await p.$eval('#quote_request',f=>f.requestSubmit());await p.waitForFunction(()=>document.body.innerText.includes('Request sent'));
  const hits=await p.evaluate(()=>window.croHits);
  assert.equal(hits.filter(x=>x[1]==='generate_lead').length,1);assert.equal(hits.filter(x=>x[1]==='conversion').length,1);assert.equal(hits.filter(x=>x[1]==='quote_form_submit').length,3);
  const diagnostics=JSON.stringify(hits.filter(x=>String(x[1]).startsWith('quote_form_')));
  for(const pii of ['cro-test@example.invalid','+971500000000','Dubai Marina','25'])assert(!diagnostics.includes(pii),'Diagnostics exclude '+pii);
  assert.equal(errs.length,0,errs.join(';'));out.push({mode,viewport:390,formStartOnce:true,validationOnce:true,httpFailure:true,networkFailure:true,deliveredOnlyAfterSuccess:true,noDiagnosticPII:true,realEnquiriesSent:0});
  await p.close();
 }
 console.log(JSON.stringify(out,null,2));
}finally{await browser.close();server.close();}

