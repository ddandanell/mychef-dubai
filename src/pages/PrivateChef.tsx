// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai
//     primary:     "private chef dubai"
//     subkeywords: "personal chef dubai" · "chef at home dubai" · "private chef service dubai" · "book a private chef dubai" · "private chef for dinner party dubai" · "private chef near me dubai" · "private chef" · "private chef near me" · "french private chef dubai" · "private chef dubai daily" · "private chefs dubai" · "private chef dubai monthly"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { ChefServiceChoice } from '@/components/household/HouseholdSections'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { Link } from 'react-router'
import ClusterNav from '@/components/private-chef/ClusterNav'
import ServiceImage from '@/components/private-chef/ServiceImage'
import { ChefSection, Inclusions, ChefJourney, PricePreview, ChefEnquiry } from '@/components/private-chef/ChefSections'
import FaqAccordion from '@/components/FaqAccordion'
import { parentFaqs } from '@/content/privateChefCluster'
import { householdSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

export default function PrivateChef() {
  useWhatsAppMessage('Hi myCHEF Dubai, I would like a private chef for my home. Location: __. Days per week: __. Household size: __. (via mychef.ae/private-chef-dubai)')
  return <div>
    <SEO title="Private Chef & Home Chef Dubai | From AED 750 a Visit | myCHEF" description="Private chef and home chef visits from AED 750 or long-term household chefs from AED 15,000/month in Dubai. Personal menus, chef matching and ongoing myCHEF support." canonicalPath="/private-chef-dubai" schema={householdSchema('Private chef in Dubai', 'Recurring cooking visits, meal preparation and dedicated household chef arrangements, with menus, schedule and costs agreed in writing.', parentFaqs)}/>
    <PageHero eyebrow="MYCHEF · AT HOME IN DUBAI" title={<>Private Chef Dubai.<br/><em>Made personal.</em></>} subtitle="Your private chef in Dubai, for a few hours or a long-term household role. We match your food, schedule and home, then confirm fees and groceries in writing. Recurring visits from AED 750; dedicated full-time arrangements from AED 15,000/month before VAT. Daily bookings and monthly household roles have separate pricing." cta={{label:'Choose my chef service',href:'#chef-service-choice'}} secondaryCta={{label:'Explore plans & prices',href:'/private-chef-dubai/pricing'}}/>
    <ClusterNav/>
    <ChefSection id="chef-service-choice" eyebrow="Two clear ways to begin" title={<>Book a little time.<br/><em>Or find your long-term chef.</em></>}><ChefServiceChoice/></ChefSection>
    <ChefSection eyebrow="A plan for the way you live" title="Private Chef Dubai, with your everyday food in mind."><p className="pc-section-intro">Choose <Link className="pc-link" to="/weekly-meal-prep-dubai">meals prepared for later</Link>, <Link className="pc-link" to="/part-time-private-chef-dubai">a few cooking days a week</Link> or a dedicated household role. Tell us what would make your week easier; we will help you choose the right scope.</p><p className="pc-fineprint">Planning a single dinner or party? Explore <Link className="underline underline-offset-4" to="/luxury-dining-experiences">private dining</Link> or <Link className="underline underline-offset-4" to="/catering-dubai">catering services in Dubai</Link>.</p></ChefSection>
    <ChefSection eyebrow="More than the meal" title="The details, thoughtfully handled." tone="pc-tone-cream"><Inclusions/></ChefSection>
    <ChefSection><div className="pc-split"><ServiceImage imageKey="planning"/><div><p className="pc-eyebrow">From the first conversation</p><h2>We learn your home.<br/><em>Then we get cooking.</em></h2><ChefJourney/><Link className="pc-link" to="/private-chef-dubai/how-it-works">How your chef arrangement works →</Link></div></div></ChefSection>
    <ChefSection eyebrow="Food you look forward to" title={<>Your favourites.<br/><em>With room to discover.</em></>} tone="pc-tone-cream"><div className="pc-section-summary"><p>Comforting family meals, lighter lunches, a favourite regional cuisine or something special for guests. We start with what you enjoy, record allergies and preferences, and agree menus that suit your kitchen and the time available.</p><Link className="pc-link" to="/menus">Explore menu inspiration →</Link></div><div className="pc-food-grid"><figure><ServiceImage imageKey="family-table"/><figcaption><h3>A table everyone can enjoy</h3><p>Familiar favourites, family portions and your preferred way of eating.</p></figcaption></figure><figure><ServiceImage imageKey="wellness"/><figcaption><h3>Thoughtful everyday choices</h3><p>Balanced meals tailored to preferences, with specialist dietary guidance where needed.</p></figcaption></figure></div></ChefSection>
    <ChefSection eyebrow="Chef visits & recurring bookings" title="Visit prices, clearly explained." tone="pc-tone-cream"><PricePreview/></ChefSection>
    <ChefSection eyebrow="Before you begin" title="A few helpful answers."><div className="pc-prose"><FaqAccordion items={[...parentFaqs]} defaultOpen={-1}/></div></ChefSection>
    <ChefEnquiry/>
  </div>
}
