import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import process from 'node:process'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { bookingErrors, calculateDining, diningBrief, money } from '../lib/privateDining'

const text=z.string().max(4000)
const quantity=z.number().int().nonnegative().max(1000)
const requestSchema=z.object({
 requestId:z.string().uuid(), intent:z.enum(['call','confirm']), website:z.string().max(100).default(''),
 input:z.object({service:z.enum(['home','delivery']),guests:quantity,area:text,cuisine:text,style:z.enum(['family','three-course','fine']),mood:text,extraDishes:quantity,dishIds:z.array(text).max(8),dietary:z.object({vegetarian:quantity,vegan:quantity}),alternatives:z.object({vegetarian:z.array(text).max(8),vegan:z.array(text).max(8)}),drinkIds:z.array(text).max(11),waiters:quantity,bartenders:quantity,kitchenHours:quantity,serviceHours:quantity,fineEquipment:z.enum(['','yes','hire']),bar:z.boolean(),furniture:z.record(z.string().max(50),quantity),styling:text,theme:text,cake:text,glassware:z.boolean()}),
 details:z.object({name:z.string().trim().min(1).max(150),whatsapp:z.string().max(30),email:z.string().trim().email().max(254),channel:z.enum(['whatsapp','email']),date:z.string().max(10),time:z.string().max(5),dietaryNotes:text,kitchen:z.enum(['','yes','field']),otherTheme:text,otherCake:text,specialRequests:text,notes:text,formalOffer:z.boolean(),company:text,companyAddress:text,trn:z.string().max(100)}),
})
type DeliveryResult={success:boolean;reference:string;emailSent:boolean;whatsappQueued:boolean;preferredChannel:string}
const completed=new Map<string,DeliveryResult>()
const inFlight=new Set<string>()
const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
export function parseDiningRequest(body:unknown){
 const parsed=requestSchema.safeParse(body)
 if(!parsed.success)return {errors:['Please check the event and contact details.'],data:null}
 const data=parsed.data
 const q=calculateDining(data.input,data.details)
 return {errors:[...q.errors,...bookingErrors(data.input,data.details)],data}
}
export function deliveryCapabilities(){
 return {email:!!(process.env.SMTP_HOST&&process.env.SMTP_USER&&process.env.SMTP_PASS),whatsapp:!!(process.env.DINING_WHATSAPP_TOKEN&&process.env.DINING_WHATSAPP_PHONE_ID&&process.env.DINING_WHATSAPP_TEMPLATE&&process.env.DINING_WHATSAPP_API_VERSION)}
}
async function queueWhatsApp(data:NonNullable<ReturnType<typeof parseDiningRequest>['data']>,reference:string):Promise<boolean>{
 if(data.details.channel!=='whatsapp'||!deliveryCapabilities().whatsapp)return false
 const q=calculateDining(data.input,data.details)
 const version=process.env.DINING_WHATSAPP_API_VERSION!,phoneId=process.env.DINING_WHATSAPP_PHONE_ID!
 if(!/^v\d+\.\d+$/.test(version)||!/^\d+$/.test(phoneId))return false
 try{
  const response=await fetch(`https://graph.facebook.com/${version}/${phoneId}/messages`,{method:'POST',headers:{Authorization:`Bearer ${process.env.DINING_WHATSAPP_TOKEN}`,'Content-Type':'application/json'},signal:AbortSignal.timeout(8000),body:JSON.stringify({messaging_product:'whatsapp',to:data.details.whatsapp.replace(/\D/g,''),type:'template',template:{name:process.env.DINING_WHATSAPP_TEMPLATE,language:{code:process.env.DINING_WHATSAPP_LANGUAGE||'en'},components:[{type:'body',parameters:[data.details.name,data.details.date,q.total===null?'Personal offer required':`${q.isFrom?'From ':''}${money(q.total)}`,reference,`${data.input.guests} guests · ${q.style?.name} · ${q.cuisine?.name}`].map(value=>({type:'text',text:value}))}]}})})
  const result=await response.json() as {messages?:{id?:string}[]}
  // Accepted is queued, not delivered. The email copy covers asynchronous WhatsApp failures too.
  return response.ok&&!!result.messages?.[0]?.id
 }catch{return false}
}
export default async function handler(req:VercelRequest,res:VercelResponse){
 let ownsRequest=false
 res.setHeader('Cache-Control','no-store')
 if(req.method==='GET')return res.status(200).json({ready:deliveryCapabilities().email,...deliveryCapabilities()})
 if(req.method!=='POST'){res.setHeader('Allow','GET, POST');return res.status(405).json({error:'Method not allowed'})}
 const origin=req.headers.origin
 if(origin&&!['https://www.mychef.ae','https://mychef.ae'].includes(origin)&&!/^https:\/\/mychef-dubai[-a-z0-9]*\.vercel\.app$/.test(origin))return res.status(403).json({error:'Please send this request from mychef.ae.'})
 try{
  const parsed=parseDiningRequest(req.body)
  if(!parsed.data||parsed.errors.length)return res.status(400).json({success:false,error:parsed.errors[0]})
  const data=parsed.data
  if(data.website)return res.status(400).json({success:false,error:'Please try again.'})
  if(completed.has(data.requestId))return res.status(200).json(completed.get(data.requestId))
  if(inFlight.has(data.requestId))return res.status(409).json({success:false,error:'Your request is already being sent. Please wait.'})
  if(!deliveryCapabilities().email)return res.status(503).json({success:false,error:'Automatic sending is temporarily unavailable. Your estimate is saved on this page; please use the WhatsApp backup link.'})
  inFlight.add(data.requestId)
  ownsRequest=true
  const reference=`MC-${randomUUID().slice(0,8).toUpperCase()}`,brief=diningBrief(data.input,data.details,data.intent)
  const port=Number(process.env.SMTP_PORT||587),team=process.env.LEAD_EMAIL_TO||'info@mychef.ae'
  const from=process.env.SMTP_FROM||process.env.SMTP_USER!
  const transport=nodemailer.createTransport({host:process.env.SMTP_HOST,port,secure:port===465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS},connectionTimeout:8000,socketTimeout:12000})
  const teamMail=await transport.sendMail({from,to:team,replyTo:data.details.email,subject:`myCHEF dinner request ${reference} · ${data.details.date}`,text:`Reference: ${reference}\n\n${brief}`,html:`<h1>myCHEF dinner request</h1><p>Reference: ${esc(reference)}</p><pre style="font:14px Arial;line-height:1.6;white-space:pre-wrap">${esc(brief)}</pre>`})
  if(!teamMail.accepted?.length)throw new Error('Team request was not accepted')
  let emailSent=false
  try{
   const receipt=await transport.sendMail({from,to:data.details.email,replyTo:team,subject:`Your myCHEF dinner estimate · ${reference}`,text:`Hello ${data.details.name},\n\nYour request has reached myCHEF. We will check availability and confirm your complete offer using your chosen reply channel. No booking or payment has been made.\n\nReference: ${reference}\n\n${brief}`,html:`<div style="max-width:640px;margin:auto;padding:28px;color:#1C1A17;background:#FAF7F2;font:15px Arial;line-height:1.6"><p>myCHEF · ${esc(reference)}</p><h1 style="font-family:Georgia">Your dinner estimate</h1><p>Hello ${esc(data.details.name)}, your request has reached our team. We will check availability and confirm the complete offer using your chosen reply channel.</p><p>Just an estimate · no commitment · no payment</p><pre style="font:14px Arial;line-height:1.6;white-space:pre-wrap">${esc(brief)}</pre><p>myCHEF is a brand of Numini. Reply to this email if you need to change anything.</p></div>`})
   emailSent=!!receipt.accepted?.length
  }catch{ /* The team already received the request; never ask the client to submit it twice. */ }
  const whatsappQueued=await queueWhatsApp(data,reference)
  const result={success:true,reference,emailSent,whatsappQueued,preferredChannel:data.details.channel}
  completed.set(data.requestId,result)
  if(completed.size>500)completed.delete(completed.keys().next().value!)
  return res.status(200).json(result)
 }catch{
  return res.status(502).json({success:false,error:'We could not confirm sending your request. Keep your estimate and use the WhatsApp backup, or try again later.'})
 }finally{
  if(ownsRequest&&req.body?.requestId)inFlight.delete(req.body.requestId)
 }
}
