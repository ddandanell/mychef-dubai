import { HouseholdCallout } from '@/components/household/HouseholdSections'
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ServiceImage from './ServiceImage'
import { ChefSection, Inclusions, PricePreview, ChefEnquiry, RealWork } from './ChefSections'
import ChefMealPacks from './ChefMealPacks'
import FaqAccordion from '@/components/FaqAccordion'
import { householdServices } from '@/content/householdServices'
import { householdSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
export default function HouseholdServicePage({kind}:{kind:keyof typeof householdServices}){
 const p=householdServices[kind];const faqs=p.faq.map(([q,a])=>({q,a}))
 useWhatsAppMessage(`Hi myCHEF Dubai, I would like to discuss ${p.primary}. (via mychef.ae${p.path})`)
 return <div><SEO title={`${p.primary} | Plans for Your Home | myCHEF`} description={p.intro} canonicalPath={p.path} schema={householdSchema(p.primary, p.intro, faqs)}/><PageHero eyebrow="MYCHEF · COOKING AT HOME" title={p.h1} subtitle={p.intro} cta={{label:'Find my chef',href:`/inquiry?from=${p.path}`}} secondaryCta={{label:'Explore plans & prices',href:'/private-chef-dubai/pricing#calculator'}}/>
 <ChefSection eyebrow="Around your household" title={p.heading}><div className="pc-split"><ServiceImage imageKey={p.image}/><div className="pc-prose"><p className="pc-lead">{p.body}</p>{kind === 'PartTimePrivateChef' && <p>Still deciding how often you need help? Compare the <Link to="/private-chef-dubai">private chef options for your home</Link> before settling on a recurring schedule.</p>}{kind === 'WellnessMealPrep' && <p>If you also want freshly served meals or wider kitchen support, explore <Link to="/private-chef-dubai">a personal chef in Dubai</Link> and discuss how the cooking can fit around your preparation plan.</p>}{kind === 'WeeklyMealPrep' && <p>Need a chef for regular household cooking beyond a weekly preparation visit? Compare the <Link to="/private-chef-dubai">private chef plans for your Dubai home</Link>, including <Link to="/part-time-private-chef-dubai">part-time cooking visits</Link> when you want meals served during the visit as well as food prepared for later.</p>}{kind === 'WeeklyMealPrep' && <p>When preparation needs to follow specific food preferences or dietary instructions, explore <Link to="/wellness-meal-prep-dubai">wellness meal prep</Link> and share those requirements in your brief. Our <Link to="/blog/household-menu-brief-dubai">household menu brief guide</Link> helps you explain favourites, portions and foods to avoid.</p>}<Link className="pc-link" to="/private-chef-dubai/how-it-works">See how it works →</Link></div></div></ChefSection>
 <ChefSection eyebrow="Your service, in detail" title="The little things that make it work." tone="pc-tone-cream"><div className="pc-detail-grid">{p.details.map(([title,body],i)=><article key={title}><p className="pc-eyebrow">0{i+1}</p><h3>{title}</h3><p>{body}</p></article>)}</div></ChefSection>
 <ChefSection eyebrow="People and support" title="A chef in your kitchen. A team behind the details."><Inclusions/><p className="pc-fineprint"><Link to="/our-chefs">Explore chef profiles</Link> and <Link to="/private-chef-dubai/how-it-works">how we make a household match</Link>.</p></ChefSection>
 {kind === 'WeeklyMealPrep' ? <ChefSection id="meal-packs" eyebrow="15, 30 or 45 meals" title="Meal plan Dubai: weekly menus priced per dish" tone="pc-tone-cream"><ChefMealPacks/></ChefSection> : <ChefSection eyebrow="Plan with clarity" title="Choose the service that fits." tone="pc-tone-cream"><PricePreview/>{kind === 'WellnessMealPrep' && <p className="pc-fineprint">Prefer an agreed meal count? Explore <Link to="/private-chef-dubai/pricing#meal-packs">meal packs priced by the dish</Link>, with your food preferences included in the brief.</p>}</ChefSection>}<RealWork compact/><HouseholdCallout compact/>
 <ChefSection eyebrow="Useful to know" title="Before your first visit."><div className="pc-prose"><FaqAccordion items={faqs} defaultOpen={-1}/></div></ChefSection><ChefEnquiry/>
 </div>
}
