import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { ChefSection, ChefEnquiry } from '@/components/private-chef/ChefSections'
import { HouseholdArrangements, HouseholdJourney, HouseholdLevels, HouseholdSupport } from '@/components/household/HouseholdSections'
import HouseholdProfiles from '@/components/household/HouseholdProfiles'
import HouseholdImage from '@/components/household/HouseholdImage'
import FaqAccordion from '@/components/FaqAccordion'
import { HOUSEHOLD_PATH, householdFaqs } from '@/content/householdChefs'
import { householdInquiryHref } from '@/lib/householdInquiry'
import { householdSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

export default function HouseholdChef() {
  useWhatsAppMessage('Hi myCHEF, I am looking for a long-term household chef. Live-in or live-out: __. Household size: __. Monthly budget: __. Location: __. Preferred start: __.')
  return <div>
    <SEO title="Full Time Private Chef Dubai | Household Chefs | myCHEF" description="Find a full-time household chef in Dubai. Live-in or daily live-out, five levels from AED 18,000/month, personal matching and ongoing myCHEF support." canonicalPath={HOUSEHOLD_PATH} schema={householdSchema('Household chef matching in Dubai', 'Long-term live-in or daily live-out chef matching, recruitment coordination and ongoing support.', householdFaqs)}/>
    <PageHero eyebrow="MYCHEF · LONG-TERM HOUSEHOLD CHEFS" title={<>Full Time Private Chef Dubai.<br/><em>At home in your life.</em></>} subtitle="Your favourite food. A familiar face in the kitchen. We help you find a household chef who fits your home, coordinate the recruitment and stay by your side as the routine takes shape." cta={{ label: 'Find my household chef', href: householdInquiryHref() }} secondaryCta={{ label: 'Explore five chef levels', href: '#chef-levels' }}/>
    <ClusterNav/>
    <ChefSection eyebrow="A personal match, thoughtfully handled" title="A full time private chef in Dubai, around your home."><div className="pc-split"><HouseholdImage id="matching-hero" alt="Chef and homeowner planning meals together at the kitchen table"/><div className="pc-prose"><p className="pc-lead">The right chef understands how you like to live as well as what you like to eat.</p><p>Tell us about the weekday breakfasts, family favourites, working lunches and friends around your table. We turn that into a clear household brief, introduce suitable chefs and help you choose the person who feels right.</p><p>From the first conversation to the first menu and beyond, myCHEF coordinates the search, introductions, starting arrangements and ongoing support. You have one team to speak to as your needs change.</p></div></div></ChefSection>
    <ChefSection id="arrangements" eyebrow="Two ways to make it work" title="Live in. Or come each day." tone="pc-tone-cream"><p className="pc-section-intro">Choose the arrangement that suits your home. Living arrangements and culinary level are separate choices, so we can shape both around you.</p><HouseholdArrangements/></ChefSection>
    <ChefSection id="chef-levels" eyebrow="Five levels. One personal approach." title="From family favourites to exceptional private dining."><p className="pc-section-intro">Monthly household plans start at AED 18,000 and range up to AED 50,000. These are client service budgets for a long-term arrangement; we confirm the exact scope and total with your shortlist.</p><HouseholdLevels/></ChefSection>
    <ChefSection eyebrow="Begin with the food you love" title="Which chef feels like your kind of chef?" tone="pc-tone-cream"><HouseholdProfiles preview/></ChefSection>
    <ChefSection eyebrow="We handle the search with you" title="From your household brief to a settled routine."><div className="pc-split"><HouseholdImage id="live-in-hero" alt="Chef preparing breakfast in a welcoming household kitchen"/><HouseholdJourney/></div></ChefSection>
    <ChefSection eyebrow="Your ongoing myCHEF contact" title="Support that continues after the introduction." tone="pc-tone-cream"><HouseholdSupport/></ChefSection>
    <ChefSection eyebrow="Before we find your chef" title="Your household chef questions."><div className="pc-prose"><FaqAccordion items={householdFaqs} defaultOpen={-1}/></div></ChefSection>
    <ChefEnquiry title="Let’s find the person your kitchen is missing."/>
  </div>
}
