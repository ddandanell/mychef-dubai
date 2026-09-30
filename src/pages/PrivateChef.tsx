// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai
//     primary:     "private chef dubai"
//     subkeywords: "personal chef dubai" · "chef at home dubai" · "private chef service dubai" · "book a private chef dubai" · "private chef for dinner party dubai" · "private chef near me dubai" · "private chef" · "private chef near me" · "french private chef dubai" · "private chef dubai daily" · "private chef dubai full time" · "private chef dubai monthly"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { ChefServiceChoice } from '@/components/household/HouseholdSections'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { Link } from 'react-router'
import ClusterNav from '@/components/private-chef/ClusterNav'
import ServiceImage from '@/components/private-chef/ServiceImage'
import { ChefSection, ScheduleChoices, Inclusions, ChefJourney, TeamCapability, RealWork, PricePreview, ChefEnquiry } from '@/components/private-chef/ChefSections'
import FaqAccordion from '@/components/FaqAccordion'
import { parentFaqs } from '@/content/privateChefCluster'
import { faqPageSchema } from '@/utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

export default function PrivateChef() {
  useWhatsAppMessage('Hi myCHEF Dubai, I would like a private chef for my home. Location: __. Days per week: __. Household size: __. (via mychef.ae/private-chef-dubai)')
  return <div>
    <SEO title="Private Chef & Home Chef Dubai | From AED 750 a Visit | myCHEF" description="Private chef and home chef visits from AED 750 or long-term household chefs from approximately AED 20,000/month in Dubai. Personal menus, chef matching and ongoing myCHEF support." canonicalPath="/private-chef-dubai" schema={faqPageSchema(parentFaqs.map(f => ({question:f.q,answer:f.a}))) || undefined}/>
    <PageHero eyebrow="MYCHEF · AT HOME IN DUBAI" title={<>Private Chef Dubai.<br/><em>Made personal.</em></>} subtitle="Your private chef in Dubai, for a few hours or a long-term household role. We match your food, schedule and home, then confirm fees and groceries in writing. Chef visits from AED 750; monthly household plans from approximately AED 20,000 before VAT." cta={{label:'Find my chef',href:'/inquiry?from=/private-chef-dubai'}} secondaryCta={{label:'Explore plans & prices',href:'/private-chef-dubai/pricing'}}/>
    <ClusterNav/>
    <ChefSection eyebrow="Two ways to welcome a chef" title={<>Book a little time.<br/><em>Or find your long-term chef.</em></>}><ChefServiceChoice/></ChefSection>
    <ChefSection eyebrow="Choose the right service" title={<>Private Chef Dubai,<br/><em>on your schedule.</em></>}>
      <p className="pc-fineprint">From recurring visits to a dedicated household role, choose the rhythm that suits you below. For a single dinner at home, see our <Link className="underline underline-offset-4" to="/luxury-dining-experiences">chef-led dining experiences</Link>. For a party with food delivery or a service team, explore <Link className="underline underline-offset-4" to="/catering-dubai">catering services in Dubai</Link>.</p>
      <ScheduleChoices/>
    </ChefSection>
    <ChefSection eyebrow="More than the meal" title="The details, thoughtfully handled." tone="pc-tone-cream"><Inclusions/></ChefSection>
    <ChefSection><div className="pc-split"><ServiceImage imageKey="planning"/><div><p className="pc-eyebrow">From the first conversation</p><h2>We learn your home.<br/><em>Then we get cooking.</em></h2><ChefJourney/><Link className="pc-link" to="/private-chef-dubai/how-it-works">How your chef arrangement works →</Link></div></div></ChefSection>
    <ChefSection eyebrow="Food you look forward to" title={<>Your favourites.<br/><em>With room to discover.</em></>} tone="pc-tone-cream"><div className="pc-section-summary"><p>Comforting family meals, lighter lunches, a favourite regional cuisine or something special for guests. We start with what you enjoy, record allergies and preferences, and agree menus that suit your kitchen and the time available.</p><Link className="pc-link" to="/menus">Explore menu inspiration →</Link></div><div className="pc-food-grid"><figure><ServiceImage imageKey="family-table"/><figcaption><h3>A table everyone can enjoy</h3><p>Familiar favourites, family portions and your preferred way of eating.</p></figcaption></figure><figure><ServiceImage imageKey="wellness"/><figcaption><h3>Thoughtful everyday choices</h3><p>Balanced meals tailored to preferences, with specialist dietary guidance where needed.</p></figcaption></figure></div></ChefSection>
    <TeamCapability/>
    <RealWork/>
    <ChefSection eyebrow="Chef visits & recurring bookings" title="Visit prices, clearly explained." tone="pc-tone-cream"><PricePreview/></ChefSection>
    <ChefSection eyebrow="Before you begin" title="A few helpful answers."><div className="pc-prose"><FaqAccordion items={[...parentFaqs]} defaultOpen={-1}/></div></ChefSection>
    <ChefEnquiry/>
  </div>
}
