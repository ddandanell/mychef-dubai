import { useState } from 'react'
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ServiceImage from './ServiceImage'
import { ChefSection, ChefEnquiry, RealWork } from './ChefSections'
import type { ChefImageKey } from '@/content/privateChefDesign'
const inspiration: {image:ChefImageKey;title:string;category:string;href:string}[]=[
 {image:'villa-evening',title:'An evening at home',category:'Dining',href:'/villas-private-residences'},
 {image:'romantic',title:'Just the two of you',category:'Dining',href:'/romantic-dinner-dubai'},
 {image:'family-table',title:'A generous family table',category:'Food',href:'/private-chef-dubai'},
 {image:'arabic',title:'Middle Eastern flavours',category:'Food',href:'/halal-private-dining-dubai'},
 {image:'meal-prep',title:'A prepared week',category:'At home',href:'/weekly-meal-prep-dubai'},
 {image:'breakfast',title:'A slower morning',category:'At home',href:'/full-time-private-chef-dubai'},
 {image:'chefs-table',title:'A front-row seat to dinner',category:'Dining',href:'/chefs-table-dubai'},
 {image:'dessert',title:'A thoughtful final course',category:'Food',href:'/chefs/matteo-pastry-chef'},
 {image:'cooking-class',title:'Something new to learn',category:'At home',href:'/private-cooking-classes-dubai'}
]
export default function PortfolioPage({caseStudy=false}:{caseStudy?:boolean}){
 const [filter,setFilter]=useState('All');const visible=inspiration.filter(i=>filter==='All'||i.category===filter)
 return <div><SEO title={caseStudy?'Catering Case Studies Dubai | Previous Work | myCHEF':'Event Gallery | Previous Work & Dining Inspiration | myCHEF'} description="Explore photographs from previous myCHEF yacht catering work and a separate collection of dining and household service inspiration." canonicalPath={caseStudy?'/case-studies':'/gallery'}/>
 <PageHero eyebrow={caseStudy?'MYCHEF · PREVIOUS WORK':'MYCHEF · THE GALLERY'} title={caseStudy?'Catering Case Studies Dubai. A closer look at the details.':'Good food. Thoughtful settings. Memorable moments.'} subtitle="A look at previous myCHEF yacht service, followed by ideas for the food and occasions you could make your own." cta={{label:'Plan an occasion',href:'/inquiry?from=portfolio'}} secondaryCta={{label:'See previous work',href:'#previous-work'}}/>
 <RealWork/>
 {caseStudy && <ChefSection eyebrow="A documented occasion" title="A myCHEF yacht catering day." tone="pc-tone-cream"><div className="pc-split"><img src="/images/yacht-work/salon-grazing.webp" alt="Grazing table in the yacht salon during previous myCHEF service" width="1000" height="750" loading="lazy" decoding="async"/><div className="pc-prose"><h3>Food, table and service.</h3><p>The photographs show the table prepared on deck, individually presented canapés, and a grazing setup inside the yacht. They are from a previous myCHEF catering day.</p><p>For your own booking, the menu, staffing and service format are agreed around the vessel, kitchen facilities, guest count and schedule.</p><Link className="pc-link" to="/yachts">Explore yacht catering →</Link></div></div></ChefSection>}
 <ChefSection eyebrow="Ideas for your next occasion" title="Make the inspiration your own." tone={caseStudy?'':'pc-tone-cream'}><p className="pc-section-intro">The collection below uses AI-created imagery to illustrate possible food and settings. It is inspiration for a brief, rather than photographs of previous bookings or named chefs.</p><div className="pc-gallery-filters" role="group" aria-label="Filter inspiration">{['All','Dining','Food','At home'].map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={f===filter}>{f}</button>)}</div><p className="sr-only" aria-live="polite">{visible.length} inspiration images</p><div className="pc-gallery-grid">{visible.map(item=><Link key={item.image} to={item.href}><ServiceImage imageKey={item.image} sizes="(min-width:900px) 30vw, (min-width:600px) 46vw, 100vw"/><p className="pc-eyebrow">{item.category} · Inspiration</p><h3>{item.title}</h3><span className="pc-link">Explore the experience →</span></Link>)}</div></ChefSection><ChefEnquiry title="What would you like to create?"/>
 </div>
}
