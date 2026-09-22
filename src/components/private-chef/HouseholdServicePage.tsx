import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ServiceImage from './ServiceImage'
import { ChefSection, Inclusions, PricePreview, ChefEnquiry, RealWork } from './ChefSections'
import FaqAccordion from '@/components/FaqAccordion'
import { householdServices } from '@/content/householdServices'
import { faqPageSchema } from '@/utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
export default function HouseholdServicePage({kind}:{kind:keyof typeof householdServices}){
 const p=householdServices[kind];const faqs=p.faq.map(([q,a])=>({q,a}))
 useWhatsAppMessage(`Hi myCHEF Dubai, I would like to discuss ${p.primary}. (via mychef.ae${p.path})`)
 return <div><SEO title={`${p.primary} | Plans for Your Home | myCHEF`} description={p.intro} canonicalPath={p.path} schema={faqPageSchema(faqs.map(f=>({question:f.q,answer:f.a}))) || undefined}/><PageHero eyebrow="MYCHEF · COOKING AT HOME" title={p.h1} subtitle={p.intro} cta={{label:'Find my chef',href:`/inquiry?from=${p.path}`}} secondaryCta={{label:'Explore plans & prices',href:'/private-chef-dubai/pricing#calculator'}}/>
 <ChefSection eyebrow="Around your household" title={p.heading}><div className="pc-split"><ServiceImage imageKey={p.image}/><div className="pc-prose"><p className="pc-lead">{p.body}</p><Link className="pc-link" to="/private-chef-dubai/how-it-works">See how it works →</Link></div></div></ChefSection>
 <ChefSection eyebrow="Your service, in detail" title="The little things that make it work." tone="pc-tone-cream"><div className="pc-detail-grid">{p.details.map(([title,body],i)=><article key={title}><p className="pc-eyebrow">0{i+1}</p><h3>{title}</h3><p>{body}</p></article>)}</div></ChefSection>
 <ChefSection eyebrow="People and support" title="A chef in your kitchen. A team behind the details."><Inclusions/><p className="pc-fineprint"><Link to="/our-chefs">Explore chef profiles</Link> and <Link to="/private-chef-dubai/our-chefs">how we make a household match</Link>.</p></ChefSection>
 <ChefSection eyebrow="Plan with clarity" title="Choose the service that fits." tone="pc-tone-cream"><PricePreview/></ChefSection><RealWork compact/>
 <ChefSection eyebrow="Useful to know" title="Before your first visit."><div className="pc-prose"><FaqAccordion items={faqs} defaultOpen={-1}/></div></ChefSection><ChefEnquiry/>
 </div>
}
