import assert from 'node:assert/strict'
import nodemailer from 'nodemailer'
import process from 'node:process'
import {randomUUID} from 'node:crypto'
import type {VercelRequest,VercelResponse} from '@vercel/node'
import handler,{parseDiningRequest} from '../src/server/diningRequest'
import {createDiningInput,earliestDiningDate,emptyDetails} from '../src/lib/privateDining'
const body={requestId:randomUUID(),intent:'confirm',website:'',input:createDiningInput(),details:{...emptyDetails,name:'Request test',email:'test@example.com',whatsapp:'+971501234567',date:earliestDiningDate(),kitchen:'yes'}}
assert.equal(parseDiningRequest(body).errors.length,0)
assert.ok(parseDiningRequest({...body,input:{...body.input,guests:2}}).errors.length>0)
assert.ok(parseDiningRequest({...body,details:{...body.details,date:'2026-01-01'}}).errors.length>0)
assert.ok(parseDiningRequest({...body,input:{...body.input,furniture:{bogus:2}}}).errors.length>0)
assert.equal(parseDiningRequest({...body,price:1}).data?.input.guests,6)
async function call(method:string,payload:unknown,origin='https://www.mychef.ae'){
 let code=200;let result:Record<string,unknown>={}
 const res={setHeader:()=>{},status:(n:number)=>{code=n;return res},json:(d:Record<string,unknown>)=>{result=d;return res}} as unknown as VercelResponse
 await handler({method,body:payload,headers:{origin}} as VercelRequest,res)
 return {code,result}
}
const oldCreate=nodemailer.createTransport
const oldEnv={host:process.env.SMTP_HOST,user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}
process.env.SMTP_HOST='mock';process.env.SMTP_USER='mock';process.env.SMTP_PASS='mock'
let calls=0
nodemailer.createTransport=(()=>({sendMail:async(options:{to:string;text:string})=>{calls++;assert.ok(options.text.includes('VAT 5%'));assert.ok(options.text.includes('AED 2,562'));return {accepted:[options.to]}}})) as unknown as typeof nodemailer.createTransport
try{
 const sent=await call('POST',body);assert.equal(sent.code,200);assert.equal(sent.result.emailSent,true);assert.equal(sent.result.whatsappQueued,false);assert.equal(calls,2)
 const duplicate=await call('POST',body);assert.equal(duplicate.result.reference,sent.result.reference);assert.equal(calls,2)
 assert.equal((await call('POST',body,'https://unrelated.example')).code,403)
 assert.equal((await call('POST',{...body,requestId:randomUUID(),website:'spam'})).code,400)
 assert.equal((await call('GET',null)).result.email,true)
 nodemailer.createTransport=(()=>({sendMail:async()=>{throw new Error('simulated failure')}})) as unknown as typeof nodemailer.createTransport
 assert.equal((await call('POST',{...body,requestId:randomUUID()})).code,502)
 let sends=0
 nodemailer.createTransport=(()=>({sendMail:async(options:{to:string})=>{if(++sends===2)throw new Error('receipt rejected');return {accepted:[options.to]}}})) as unknown as typeof nodemailer.createTransport
 const noReceipt=await call('POST',{...body,requestId:randomUUID()});assert.equal(noReceipt.result.success,true);assert.equal(noReceipt.result.emailSent,false)
 delete process.env.SMTP_HOST
 assert.equal((await call('POST',{...body,requestId:randomUUID()})).code,503)
 console.log('Dining request API: server validation, email fallback, idempotency, rejected sending and truthful receipt states passed. No messages sent.')
}finally{
 nodemailer.createTransport=oldCreate
 for(const [key,value] of [['SMTP_HOST',oldEnv.host],['SMTP_USER',oldEnv.user],['SMTP_PASS',oldEnv.pass]]){if(value===undefined)delete process.env[key];else process.env[key]=value}
}
