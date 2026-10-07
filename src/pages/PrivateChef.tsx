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
import { ChefSection, Inclusions, ChefJourney, PricePreview, ChefEnquiry, ScheduleChoices } from '@/components/private-chef/ChefSections'
import ChefMenuInspiration from '@/components/private-chef/ChefMenuInspiration'
import FaqAccordion from '@/components/FaqAccordion'
import { parentFaqs } from '@/content/privateChefCluster'
import { householdSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

export default function PrivateChef() {
  useWhatsAppMessage('Hi myCHEF Dubai, I would like a private chef for my home. Location: __. Days per week: __. Household size: __. (via mychef.ae/private-chef-dubai)')
  return <div>
    <SEO title="Private Chef Dubai | Single Visits & Member Plans | myCHEF" description="Private chef Dubai: single visits from AED 1,125 or member visits from AED 750 with 4+ prepaid visits/month. VAT, groceries and transport extra." canonicalPath="/private-chef-dubai" schema={householdSchema('Private chef in Dubai', 'Recurring cooking visits, meal preparation and dedicated household chef arrangements, with menus, schedule and costs agreed in writing.', parentFaqs)}/>
    <PageHero eyebrow="MYCHEF · AT HOME IN DUBAI" title={<>Private Chef Dubai.<br/><em>Made personal.</em></>} subtitle="Your private chef in Dubai for one meal, a stocked fridge or a longer household arrangement. Single visits from AED 1,125; member visits from AED 750 with 4+ prepaid visits per month. Before 5% VAT, groceries and transport. We confirm your menu, chef and complete price before booking." cta={{label:'Choose my chef service',href:'#chef-service-choice'}} secondaryCta={{label:'Explore plans & prices',href:'/private-chef-dubai/pricing'}}/>
    <ClusterNav/>
    <nav className="pc-page-nav" aria-label="On this page">
      <a href="#chef-service-choice">Services</a>
      <a href="#menu-inspiration">Menu ideas</a>
      <a href="#chef-prices">Visit prices</a>
      <a href="#chef-faqs">Questions</a>
      <a href="#chef-enquiry">Enquire</a>
    </nav>
    <ChefSection id="chef-service-choice" eyebrow="Two clear ways to begin" title={<>Book a little time.<br/><em>Or find your long-term chef.</em></>}><ChefServiceChoice/></ChefSection>
    <ChefSection eyebrow="Find your everyday fit" title="Private Chef Dubai: a plan for the way you live."><p className="pc-section-intro">Start with what would make your day easier. Cooked meals on a few chosen days, a fridge ready for the week or a chef who learns your household routine.</p><ScheduleChoices/><p className="pc-fineprint">Here for a few days? Explore <Link className="underline underline-offset-4" to="/private-chef-dubai/short-term-chef">single visits and holiday stays</Link>. Planning a staffed celebration? See <Link className="underline underline-offset-4" to="/luxury-dining-experiences">private dining experiences</Link>.</p></ChefSection>
    <ChefMenuInspiration/>
    <ChefSection eyebrow="More than the meal" title="The details, thoughtfully handled." tone="pc-tone-cream"><Inclusions/></ChefSection>
    <ChefSection><div className="pc-split"><ServiceImage imageKey="planning"/><div><p className="pc-eyebrow">From the first conversation</p><h2>We learn your home.<br/><em>Then we get cooking.</em></h2><ChefJourney/><Link className="pc-link" to="/private-chef-dubai/how-it-works">How your chef arrangement works →</Link></div></div></ChefSection>

    <ChefSection id="chef-prices" eyebrow="Chef visits & recurring bookings" title="Visit prices, clearly explained." tone="pc-tone-cream"><PricePreview/></ChefSection>
    <ChefSection id="chef-faqs" eyebrow="Before you begin" title="A few helpful answers."><div className="pc-prose"><FaqAccordion items={[...parentFaqs]} defaultOpen={-1}/></div></ChefSection>
    <ChefEnquiry id="chef-enquiry"/>
  </div>
}
