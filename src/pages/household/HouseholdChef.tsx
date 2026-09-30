import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { ChefSection } from '@/components/private-chef/ChefSections'
import { HouseholdArrangements, HouseholdJourney, HouseholdLevels } from '@/components/household/HouseholdSections'
import { ManagedHouseholdPricing, LearningMonth, HouseholdFoodProfile, HouseholdContinuity, ManagedHouseholdEnquiry } from '@/components/household/ManagedHousehold'
import { HouseholdStartOffer, HouseholdBriefGuide, HouseholdDecisionChecks } from '@/components/household/HouseholdOffer'
import HouseholdImage from '@/components/household/HouseholdImage'
import FaqAccordion from '@/components/FaqAccordion'
import { HOUSEHOLD_PATH, householdFaqs, householdImage } from '@/content/householdChefs'
import { householdInquiryHref } from '@/lib/householdInquiry'
import { householdSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

export default function HouseholdChef() {
  useWhatsAppMessage('Hi myCHEF, I would like a dedicated full-time household chef. Dubai area: __. Adults and children: __. Preferred schedule: __. Start date: __. Monthly service budget: __. Please help me check the fit and timing.')
  return <div>
    <SEO title="Full Time Private Chef Dubai | Managed Household | myCHEF" description="A full-time private chef in Dubai from AED 15,000/month. Personal matching, a paid trial, first-month onboarding and ongoing myCHEF support. Enquire without obligation." canonicalPath={HOUSEHOLD_PATH} ogImage={householdImage('managed-household-table', 1536)} schema={householdSchema('myCHEF Managed Household — full-time private chef in Dubai', 'Personal household chef matching, onboarding, a Household Food Profile and ongoing relationship management.', householdFaqs)}/>
    <PageHero eyebrow="MYCHEF · YOUR HOUSEHOLD, UNDERSTOOD" title={<>Full Time Private Chef Dubai.<br/><em>Come home to your kind of food.</em></>} subtitle="A dedicated chef matched to your tastes and routine, with one myCHEF contact keeping the relationship on track. Full-time Managed Household starts from AED 15,000/month before VAT. We help you choose the person, settle in and keep making the food yours." cta={{ label: 'Check my start date', href: householdInquiryHref() }} secondaryCta={{ label: 'See the complete offer', href: '#household-offer' }}/>
    <ClusterNav/>
    <ChefSection id="household-offer"><HouseholdStartOffer/><nav className="mh-section-nav" aria-label="Managed Household guide"><a href="#how-it-works">How you begin</a><a href="#food-profile">What we remember</a><a href="#managed-pricing">Fees & inclusions</a><a href="#continuity">If the match changes</a></nav></ChefSection>
    <ChefSection id="how-it-works" eyebrow="Four steps, with you in control" title="Your full time private chef in Dubai. A personal match from the start." tone="pc-tone-cream"><div className="pc-split mh-process"><div><HouseholdImage id="managed-household-brief" alt="A household food discussion around a kitchen island"/><HouseholdBriefGuide/></div><HouseholdJourney/></div></ChefSection>
    <HouseholdFoodProfile/>
    <LearningMonth/>
    <HouseholdDecisionChecks/>
    <ChefSection id="arrangements" eyebrow="Two ways to make it work" title="A chef who lives in. Or comes each cooking day." tone="pc-tone-cream"><p className="pc-section-intro">Choose the living arrangement that suits your home. Both follow the same matching and management approach, with cooking days, hours and responsibilities agreed in writing.</p><HouseholdArrangements/><details id="chef-levels" className="mh-details"><summary>Need a cuisine specialist or a more senior chef?</summary><p className="pc-section-intro">Tell us the food and responsibilities first. These five culinary levels help us describe the experience your brief needs; you do not need to choose a level before enquiring.</p><HouseholdLevels/><div className="pc-actions"><Link className="pc-link" to="/our-chefs#household-profiles">Explore 25 cooking-style examples →</Link></div></details></ChefSection>
    <ChefSection id="managed-pricing" eyebrow="The complete price before commitment" title="Choose the scope. We confirm the full arrangement."><p className="pc-section-intro">Full-time Managed Household starts from AED 15,000/month. A more senior chef or complex role may suit Premium or Executive. These monthly arrangements are separate from daily chef bookings and their visit rates.</p><ManagedHouseholdPricing/></ChefSection>
    <HouseholdContinuity/>
    <ChefSection id="household-questions" eyebrow="Your questions, before you begin" title="The decisions that matter." tone="pc-tone-cream"><div className="pc-prose"><FaqAccordion items={householdFaqs} defaultOpen={-1}/><p>Need fewer cooking days? Compare <Link to="/weekly-meal-prep-dubai">weekly meal preparation</Link>, <Link to="/part-time-private-chef-dubai">part-time visits</Link> or <Link to="/private-chef-dubai/short-term-chef">short stays</Link>.</p></div></ChefSection>
    <ManagedHouseholdEnquiry/>
  </div>
}
