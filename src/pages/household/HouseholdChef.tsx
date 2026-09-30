import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { ChefSection } from '@/components/private-chef/ChefSections'
import { HouseholdArrangements, HouseholdJourney, HouseholdLevels } from '@/components/household/HouseholdSections'
import { ManagedHouseholdPillars, ManagedHouseholdPricing, LearningMonth, HouseholdFoodProfile, HouseholdContinuity, HouseholdLearning, ManagedHouseholdEnquiry } from '@/components/household/ManagedHousehold'
import HouseholdProfiles from '@/components/household/HouseholdProfiles'
import HouseholdImage from '@/components/household/HouseholdImage'
import FaqAccordion from '@/components/FaqAccordion'
import { HOUSEHOLD_PATH, householdFaqs, householdImage } from '@/content/householdChefs'
import { householdInquiryHref } from '@/lib/householdInquiry'
import { householdSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

export default function HouseholdChef() {
  useWhatsAppMessage('Hi myCHEF, I would like to discuss Managed Household. Live-in or live-out: __. Adults and children: __. Complete monthly budget: __. Dubai area: __. Days and hours: __. Preferred start: __.')
  return <div>
    <SEO title="Full Time Private Chef Dubai | Managed Household | myCHEF" description="A full-time private chef in Dubai, matched to your home. Personal search, a 30-day Learning Month and ongoing management. From approximately AED 20,000/month." canonicalPath={HOUSEHOLD_PATH} ogImage={householdImage('managed-household-table', 1536)} schema={householdSchema('myCHEF Managed Household — full-time private chef in Dubai', 'Personal household chef matching, onboarding, a Household Food Profile and ongoing relationship management.', householdFaqs)}/>
    <PageHero eyebrow="MYCHEF · MANAGED HOUSEHOLD" title={<>Full Time Private Chef Dubai.<br/><em>Food that feels like home.</em></>} subtitle="We learn your household, find a chef who fits it and stay involved as your needs evolve. Your food, your routines and the little things that make a meal feel yours — remembered over time." cta={{ label: 'Start my household brief', href: householdInquiryHref() }} secondaryCta={{ label: 'See how it works', href: '#how-it-works' }}/>
    <ClusterNav/>
    <ChefSection eyebrow="A Private Chef Service That Learns You" title="Your full time private chef in Dubai. A relationship, thoughtfully managed.">
      <p className="pc-section-intro">Two chefs can cook the same recipe and make it feel completely different. The right match understands the food you love, the pace of your home and how you like people to work. We bring those details together before introducing a chef — and keep learning after they arrive.</p>
      <div className="mh-at-a-glance"><span><strong>Live-in or live-out</strong>A dedicated role with agreed hours</span><span><strong>From approximately AED 20,000/month</strong>Chef service and myCHEF management</span><span><strong>AED 950 Match Activation</strong>After your brief and search are agreed</span></div>
      <p className="pc-fineprint">Fees before 5% VAT. Paid trials, groceries and agreed extras are separate.</p>
      <nav className="mh-section-nav" aria-label="Managed Household guide"><a href="#how-it-works">The matching journey</a><a href="#learning-month">Your first 30 days</a><a href="#food-profile">What we remember</a><a href="#managed-pricing">Fees & inclusions</a><a href="#continuity">When things change</a></nav>
    </ChefSection>
    <ChefSection eyebrow="Three parts. One continuing relationship." title="We learn. We match. We stay involved."><ManagedHouseholdPillars/></ChefSection>
    <ChefSection id="how-it-works" eyebrow="From your first conversation" title="Here is how your chef becomes your chef." tone="pc-tone-cream"><div className="pc-split"><div><HouseholdImage id="managed-household-brief" alt="Chef and household members discussing food preferences at a kitchen island"/><div className="pc-prose" style={{ marginTop: '1.5rem' }}><h3>Start with the essentials.</h3><p>Tell us what you need and the budget you have in mind. If the service fits, we build the detailed Private Household Brief together. You can include the dishes you grew up with, how you entertain and what would make everyday life easier.</p><p>We recommend people for their cuisine experience, availability, practical skills and household fit. You receive a small, considered shortlist with our reasons for each match.</p></div></div><HouseholdJourney/></div></ChefSection>
    <LearningMonth/>
    <HouseholdFoodProfile/>
    <ChefSection id="arrangements" eyebrow="Your home. Your arrangement." title="A resident chef, or a familiar face each day." tone="pc-tone-cream"><p className="pc-section-intro">The choice is about how your home works. Both arrangements follow the same personal matching and management approach, with clear cooking days, hours and responsibilities.</p><HouseholdArrangements/></ChefSection>
    <ChefSection id="managed-pricing" eyebrow="Your investment, clearly explained" title="A personal search. An ongoing monthly service."><p className="pc-section-intro">Your budget covers the complete managed chef arrangement. We review the chef, schedule, household size and responsibilities together, then put the full scope and price in writing.</p><ManagedHouseholdPricing/></ChefSection>
    <ChefSection id="chef-levels" eyebrow="Five culinary levels" title="Start with the food you want at home." tone="pc-tone-cream"><p className="pc-section-intro">From dependable family cooking to senior estate expertise, these levels help describe the experience your role needs. The three service bands above guide the budget; your proposal confirms the individual match and fee.</p><HouseholdLevels/></ChefSection>
    <ChefSection eyebrow="Make the brief personal" title="What is your kind of cooking?"><HouseholdProfiles preview/></ChefSection>
    <HouseholdContinuity/>
    <HouseholdLearning/>
    <ChefSection id="household-questions" eyebrow="Before you begin" title="Your household chef questions." tone="pc-tone-cream"><div className="pc-prose"><FaqAccordion items={householdFaqs} defaultOpen={-1}/><p>Need less cooking time? Explore <Link to="/weekly-meal-prep-dubai">weekly meal preparation</Link>, <Link to="/part-time-private-chef-dubai">part-time visits</Link> or <Link to="/private-chef-dubai/short-term-chef">a short-term chef booking</Link>.</p></div></ChefSection>
    <ManagedHouseholdEnquiry/>
  </div>
}
