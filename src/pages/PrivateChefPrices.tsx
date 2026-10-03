// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai/pricing
//     primary:     "private chef dubai price"
//     subkeywords: "private chef cost dubai" · "how much is a private chef in dubai" · "private chef dubai rates" · "cost of private chef dubai" · "private chef for dinner party" · "average cost of personal chef in dubai" · "personal chef services rates dubai" · "private chef catering" · "private chef dubai price per day" · "part time private chef catering dubai price" · "part time cook for home dubai cost"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ManagedHouseholdPricing } from '@/components/household/ManagedHousehold'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { ChefSection, ServiceRates, ChefEnquiry } from '@/components/private-chef/ChefSections'
import ChefMealPacks from '@/components/private-chef/ChefMealPacks'
import PriceCalculator from '@/components/private-chef/pricing/PriceCalculator'
import PlanTermsDigest from '@/components/private-chef/pricing/PlanTermsDigest'
import FaqAccordion from '@/components/FaqAccordion'
import { CHEF_LEVELS, PRICING_FAQS } from '@/content/privateChefPricing'
import { chefVisitSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
const faqs = [
 {q:'Can I book just one visit?',a:'Yes. Single visit at the page price: a three-hour Private Chef Visit is AED 1,125. There is no minimum number of days. Prices are before 5% VAT, groceries at actual cost with no markup, and zone transport of AED 40–130 per visit.'},
 {q:'How do I get the member rate?',a:'Prepay a monthly plan of four or more visits. Member rates are AED 750 for a three-hour Private Chef Visit, AED 900 for a four-hour Fridge Reset, AED 1,050 for a five-hour Fridge Reset with shopping, and AED 1,450 for a ten-hour Chef by the Day. The same rate applies at every frequency. All are before 5% VAT, groceries at actual cost with no markup and zone transport of AED 40–130 per visit.'},
 {q:'What is included, and what costs extra?',a:'Your chosen cooking time, the agreed menu, kitchen cleanup and myCHEF coordination are included. The five-hour Fridge Reset and ten-hour day include shopping management, but the ingredients are separate at actual cost, no markup. Zone transport is AED 40–130 per visit. Assistants, grocery delivery, containers supplied by us and agreed extras are separate. Prices are before 5% VAT.'},
 {q:'Do I pay a visit fee as well as the meal-pack price?',a:'No. Choose time-based visits or an output-based meal pack for the same cooking. A pack contains 15, 30 or 45 individual meals, priced by the agreed dish mix. We confirm the menu, portions, cooking schedule and number of visits before booking.'},
 {q:'How many portions does a Fridge Reset prepare?',a:'About 20–25 portions in labelled containers is a planning guide. The final output depends on the dishes, portion sizes, kitchen and whether you want a fresh meal during the visit. We agree what fits before booking; more involved menus may need more time.'},
 {q:'Can I choose a Reserve or Private Office chef?',a:'Yes. The published visit and meal-pack rates are for Signature. Reserve and Private Office are priced on request after we understand your brief and confirm a suitable chef. The calculator does not quote those services.'},
 {q:'Is a full-time household chef priced differently?',a:'Yes. A dedicated full-time role starts from AED 15,000 per month before 5% VAT, with its schedule, search, activation and responsibilities agreed in a personal proposal. It is a separate service from the visit rates here. See the [complete Managed Household service](/full-time-private-chef-dubai#managed-pricing).'},
 ...PRICING_FAQS.filter(faq => faq.q === 'Can I move a scheduled day?' || faq.q === 'What happens if my chef is sick?'),
]
export default function PrivateChefPrices(){
 useWhatsAppMessage('Hi myCHEF Dubai, I would like a private chef visit or meal-pack quote. (via mychef.ae/private-chef-dubai/pricing)')
 return <div><SEO title="Private Chef Dubai Prices | Visits from AED 750 | myCHEF" description="Private chef Dubai prices from AED 750 member rate: single visits, meal packs and full-day chefs. One rate card, groceries at cost. Build your plan online." canonicalPath="/private-chef-dubai/pricing" schema={chefVisitSchema('Private chef visits and meal packs', 'Single visits, monthly member plans of four or more prepaid visits, and meal packs cooked in your kitchen.', faqs, true)}/>
 <PageHero eyebrow="PRICING & PLANS" title="Private Chef Dubai Price. Clear from the start." subtitle="One meal, a stocked fridge or a chef for the day. Single visits from AED 1,125; member visits from AED 750 with 4+ prepaid visits per month. Before 5% VAT, groceries and transport." cta={{label:'Compare visit rates',href:'#visit-rates'}} secondaryCta={{label:'Build my estimate',href:'#calculator'}}/><ClusterNav/>
 <ChefSection id="visit-rates" eyebrow="Signature chef rates" title="Book once. Or make good food a routine." tone="pc-tone-cream"><p className="pc-section-intro">A single visit at the page price is always available. Choose a monthly member plan when you want four or more prepaid visits. The chef cooks in your kitchen, follows the agreed menu and leaves the workspace clean.</p><ServiceRates/><p className="pc-fineprint">Fridge Reset output is about 20–25 portions in labelled containers, depending on the menu, portions and kitchen. Shopping time is included only where stated; ingredients are always separate.</p><nav className="hc-anchor-nav" aria-label="Pricing options"><a href="#calculator">Visit calculator</a><a href="#meal-packs">15, 30 or 45 meal packs</a><a href="#chef-levels">Chef levels</a><a href="#household-plans">Full-time household service</a></nav></ChefSection>
 <ChefSection eyebrow="Make it your own" title="Your private chef Dubai price, explained."><PriceCalculator/></ChefSection>
 <ChefSection id="meal-packs" eyebrow="Meals ready for your week" title="Choose a meal pack, priced by the dish." tone="pc-tone-cream"><ChefMealPacks/></ChefSection>
 <ChefSection id="chef-levels" eyebrow="Choose the right support" title="Your food and your brief guide the chef match."><div className="pc-price-grid">{CHEF_LEVELS.map(level => <article className="pc-price-card" key={level.name}><h3>{level.name}</h3><p>{level.description}</p><Link className="pc-link" to={level.name === 'Signature' ? '#calculator' : '/inquiry?from=/private-chef-dubai/pricing'}>{level.name === 'Signature' ? 'Build a Signature estimate' : `Ask about ${level.name}`} →</Link></article>)}</div></ChefSection>
 <ChefSection><details className="mh-details"><summary>Visit-plan inclusions, changes and practical terms</summary><PlanTermsDigest/></details></ChefSection>
 <ChefSection id="household-plans" eyebrow="Long-term chef matching" title="Need a dedicated full-time household chef?" tone="pc-tone-cream"><p className="pc-section-intro">Managed Household is a separate monthly arrangement, with a personal chef search, a Learning Month and continuing support. The monthly fee includes your agreed chef service and myCHEF management. Match Activation begins the search after the brief and budget are approved.</p><ManagedHouseholdPricing/><div className="pc-actions"><Link className="pc-link" to="/full-time-private-chef-dubai">Explore the complete household service →</Link><Link className="pc-link" to="/private-chef-dubai">Compare private chef services →</Link></div></ChefSection>
 <ChefSection eyebrow="Before you book" title="A few pricing questions."><div className="pc-prose"><FaqAccordion items={faqs} defaultOpen={-1}/></div></ChefSection><ChefEnquiry title="Let’s find the right plan for your home."/>
 </div>
}
