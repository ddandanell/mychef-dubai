// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai/pricing
//     primary:     "private chef dubai price"
//     subkeywords: "private chef cost dubai" · "how much is a private chef in dubai" · "private chef dubai rates" · "cost of private chef dubai" · "private chef for dinner party" · "average cost of personal chef in dubai" · "personal chef services rates dubai" · "private chef catering" · "private chef dubai price per day" · "part time private chef catering dubai price" · "part time cook for home dubai cost"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { ChefSection, ServiceRates, ChefEnquiry } from '@/components/private-chef/ChefSections'
import PriceCalculator from '@/components/private-chef/pricing/PriceCalculator'
import PlanTermsDigest from '@/components/private-chef/pricing/PlanTermsDigest'
import FaqAccordion from '@/components/FaqAccordion'
import { faqPageSchema } from '@/utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
const faqs=[
 {q:'What is included in the service fee?',a:'Your selected chef service and its stated hours, with coordination and the agreed kitchen responsibilities. The calculator shows any included shopping time and additional staffing. Your written proposal confirms the scope.'},
 {q:'Are groceries and VAT included?',a:'Groceries are separate at actual cost. The calculator explains grocery management and shows the service estimate. VAT at 5% is shown separately in your quote. Additional shopping time, transport or equipment is separate unless expressly included.'},
 {q:'Why do longer arrangements cost less per visit?',a:'The existing household rate tiers depend on cooking frequency. From 20 visits in four weeks, the chef service fee receives a 12% frequency reduction. Assistants are priced separately.'},
 {q:'Can I book for a holiday or short stay?',a:'Short stays of 3–29 chef days use the short-stay rate. Select short stay in the calculator to see the effect on your estimate.'},
 {q:'Is this a price for a one-off dinner party?',a:'This calculator is for household chef arrangements. For a single celebration, explore [private dining](/luxury-dining-experiences) or [catering](/catering-dubai).'}
]
export default function PrivateChefPrices(){
 useWhatsAppMessage('Hi myCHEF Dubai, I would like a household chef quote. (via mychef.ae/private-chef-dubai/pricing)')
 return <div><SEO title="Private Chef Dubai Price | Build Your Plan | myCHEF" description="Compare private chef Dubai prices by service, schedule and household size. Build your plan and see the estimate before you enquire." canonicalPath="/private-chef-dubai/pricing" schema={faqPageSchema(faqs.map(f=>({question:f.q,answer:f.a}))) || undefined}/>
 <PageHero eyebrow="PRICING & PLANS" title="Private Chef Dubai Price. Clear from the start." subtitle="Choose the cooking time, days and support your household needs. Explore the estimate, then confirm your personal arrangement with myCHEF." cta={{label:'Build my plan',href:'#calculator'}} secondaryCta={{label:'Ask a question',href:'/inquiry?from=/private-chef-dubai/pricing'}}/><ClusterNav/>
 <ChefSection eyebrow="Make it your own" title="Your private chef Dubai price, explained."><p className="pc-section-intro">The calculator uses our current household service rates. Adjust the options to see how your schedule, shopping and household size affect the estimate.</p><PriceCalculator/></ChefSection>
 <ChefSection eyebrow="Compare the services" title="A little help. Or the whole kitchen." tone="pc-tone-cream"><ServiceRates/><p className="pc-fineprint">Base long-term service fees, before frequency reductions and 5% VAT. Groceries are separate. Short stays and additional staffing use the rates shown in the calculator.</p></ChefSection>
 <ChefSection><PlanTermsDigest/></ChefSection>
 <ChefSection eyebrow="Before you book" title="A few pricing questions." tone="pc-tone-cream"><div className="pc-prose"><FaqAccordion items={faqs} defaultOpen={-1}/></div></ChefSection><ChefEnquiry title="Let’s find the right plan for your home."/>
 </div>
}
