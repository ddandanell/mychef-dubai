import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
import vm from 'node:vm'

const html=readFileSync('index.html','utf8')
const script=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).find(s=>s.includes('"ym0dx1ue9z"'))
assert.ok(script,'Clarity bootstrap exists')
for(const existingTag of [false,true]){
 let inserted=0,hasTag=existingTag
 const window={},document={querySelector:()=>hasTag?{}:null,createElement:()=>({}),getElementsByTagName:()=>[{parentNode:{insertBefore:()=>{hasTag=true;inserted++}}}]}
 const context=vm.createContext({window,document})
 vm.runInContext(script,context)
 assert.equal(typeof window.clarity,'function','existing saved tag still receives its required queue')
 window.clarity('event','test-enquiry')
 assert.equal(window.clarity.q[0][0],'event');assert.equal(window.clarity.q[0][1],'test-enquiry')
 const queue=window.clarity;vm.runInContext(script,context)
 assert.equal(window.clarity,queue,'repeated bootstrap preserves queued events')
 assert.equal(inserted,existingTag?0:1,'only one external tag is inserted')
}
const window={__MYCHEF_PRERENDER__:true}
vm.runInNewContext(script,{window,document:{querySelector:()=>{throw new Error('Build rendering must not load Clarity')}}})
assert.equal(window.clarity,undefined)
console.log('PASS Clarity visitor queue, saved tag, repeated bootstrap and build suppression')
