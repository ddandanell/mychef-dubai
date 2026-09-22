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
 return <div><SEO title={caseStudy?'Catering Case Studies Dubai | Previous Work | myCHEF':'Event Gallery | Previous Work & Dining Inspiration | myCHEF'} description={caseStudy?'Explore a previous myCHEF yacht catering brief, with practical ideas for menus, service and event setup in Dubai. Plan the details for your own occasion.':'Browse dining, household and celebration ideas from myCHEF, with links to our yacht portfolio and services for planning your next occasion in Dubai.'} canonicalPath={caseStudy?'/case-studies':'/gallery'}/>
 <PageHero eyebrow={caseStudy?'MYCHEF · PREVIOUS WORK':'MYCHEF · THE GALLERY'} title={caseStudy?'Catering Case Studies Dubai. A closer look at the details.':'Good food. Thoughtful settings. Memorable moments.'} subtitle="A look at previous myCHEF yacht service, followed by ideas for the food and occasions you could make your own." cta={{label:'Plan an occasion',href:'/inquiry?from=portfolio'}} secondaryCta={{label:'See previous work',href:'#previous-work'}}/>
 <RealWork/>
 {caseStudy && <ChefSection eyebrow="A documented occasion" title="A myCHEF yacht catering day." tone="pc-tone-cream"><div><div className="pc-prose"><h3>Food, table and service.</h3><p>Our yacht portfolio brings together an upper-deck dining table, individually presented canapés and a grazing setup inside the salon, all from a previous myCHEF catering day.</p><p>For your own booking, the menu, staffing and service format are agreed around the vessel, kitchen facilities, guest count and schedule.</p><Link className="pc-link" to="/yachts">Explore yacht catering →</Link></div></div></ChefSection>}
 <ChefSection eyebrow="Ideas for your next occasion" title="Make the inspiration your own." tone={caseStudy?'':'pc-tone-cream'}><p className="pc-section-intro">Explore dining ideas, menus and settings for your next myCHEF experience. We tailor the details to your occasion.</p><div className="pc-gallery-filters" role="group" aria-label="Filter inspiration">{['All','Dining','Food','At home'].map(f=><button key={f} onClick={()=>setFilter(f)} aria-pressed={f===filter}>{f}</button>)}</div><p className="sr-only" aria-live="polite">{visible.length} inspiration images</p><div className="pc-gallery-grid">{visible.map(item=><Link key={item.image} to={item.href}><ServiceImage imageKey={item.image} sizes="(min-width:900px) 30vw, (min-width:600px) 46vw, 100vw"/><p className="pc-eyebrow">{item.category}</p><h3>{item.title}</h3><span className="pc-link">Explore the experience →</span></Link>)}</div></ChefSection><ChefEnquiry title="What would you like to create?"/>
 </div>
}
