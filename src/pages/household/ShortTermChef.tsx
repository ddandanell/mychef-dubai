// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai/short-term-chef
//     primary:     "short term private chef dubai"
//     subkeywords: "holiday chef dubai" · "temporary private chef dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { ChefSection, ChefJourney, ChefEnquiry, ServiceRates } from '@/components/private-chef/ChefSections'
import { HouseholdCallout } from '@/components/household/HouseholdSections'
import ServiceImage from '@/components/private-chef/ServiceImage'
import FaqAccordion from '@/components/FaqAccordion'
import { SHORT_TERM_PATH } from '@/content/householdChefs'
import { householdSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
const faqs = [
  { q: 'Can I book a chef for just a few hours?', a: 'Yes. Our shortest chef visit is three hours, from AED 1,125 per visit for short stays of at least three chef days, before VAT and groceries. Recurring plans start from AED 750 per visit, with at least four visits over four weeks. The menu and household size need to fit the booked time.' },
  { q: 'Can I arrange a chef for a holiday stay?', a: 'Yes. Share your arrival and departure dates, Dubai address, household size and preferred cooking days. Short stays of 3–29 chef days use the short-stay rate shown in the [pricing calculator](/private-chef-dubai/pricing?duration=short#calculator).' },
  { q: 'Can the chef come regularly without living in?', a: 'Yes. You can arrange recurring [part-time cooking visits](/part-time-private-chef-dubai) or [weekly meal preparation](/weekly-meal-prep-dubai). For a dedicated ongoing role with personal recruitment support, explore our [household chefs](/full-time-private-chef-dubai).' },
  { q: 'Are groceries included?', a: 'Groceries are separate. You can provide ingredients or agree shopping support in the booking. Your quote confirms the service hours, shopping time, VAT and any extra staff or transport.' },
  { q: 'Is this the right service for a dinner party?', a: 'For a single hosted occasion with a special menu, table service or a larger group, explore our [private dining experiences](/luxury-dining-experiences). We will help you choose the appropriate format.' },
]
export default function ShortTermChef() {
  useWhatsAppMessage('Hi myCHEF, I would like a short-term private chef booking. Location: __. Dates: __. Cooking hours: __. Household size: __. Favourite cuisines: __.')
  return <div><SEO title="Short Term Private Chef Dubai | Visits & Stays | myCHEF" description="Book a short-term private chef in Dubai for a few hours, cooking days or a holiday stay. Short-stay visits from AED 1,125, with menus shaped around your home." canonicalPath={SHORT_TERM_PATH} schema={householdSchema('Short-term private chef in Dubai', 'Chef visits, recurring cooking days and short stays with menus shaped around the household.', faqs)}/>
  <PageHero eyebrow="MYCHEF · CHEF VISITS & SHORT STAYS" title={<>Short Term Private Chef Dubai.<br/><em>For the time you need.</em></>} subtitle="A freshly cooked dinner, meals ready for the week or a chef during your Dubai stay. Book the cooking time you need, with the food and practical details arranged around you." cta={{ label: 'Plan my chef booking', href: `/inquiry?from=${SHORT_TERM_PATH}` }} secondaryCta={{ label: 'Calculate my visit price', href: '/private-chef-dubai/pricing?duration=short#calculator' }}/><ClusterNav/>
  <ChefSection eyebrow="Make room for good food" title="Your short term private chef in Dubai."><div className="hc-choice-grid">{[
    ['A few hours', 'A fresh meal or focused preparation session. We agree what can be cooked within your visit and leave you with a clear plan.', '/private-chef-dubai/pricing?duration=short#calculator', 'Compare visit prices'],
    ['A few days or a holiday stay', 'A chef for agreed days while you settle in, welcome family or enjoy Dubai. Tell us the dates, address and meals you have in mind.', `/inquiry?from=${SHORT_TERM_PATH}`, 'Tell us about your stay'],
    ['Regular part-time cooking', 'Keep the same weekly rhythm with recurring cooking days and menus that evolve with your preferences.', '/part-time-private-chef-dubai', 'Explore part-time visits'],
    ['Meals prepared for later', 'A planned cooking session to portion, label and organise meals around your week, with storage guidance.', '/weekly-meal-prep-dubai', 'Explore weekly meal preparation'],
  ].map(([title, body, href, label]) => <article className="hc-level" key={title}><h3>{title}</h3><p>{body}</p><Link className="pc-link" to={href}>{label} →</Link></article>)}</div></ChefSection>
  <ChefSection eyebrow="Cooking time, clearly priced" title="Short-stay chef visits from AED 1,125." tone="pc-tone-cream"><ServiceRates shortStay/><p className="pc-fineprint">Short-stay rates for 3–29 chef days, before 5% VAT and separate groceries. A nine-hour full-day shift is AED 2,250. Recurring visits use their existing frequency rates. Dedicated full-time Managed Household is a separate monthly arrangement from AED 15,000; it is not the daily-booking tariff. Additional staff and agreed extras are separate.</p><Link className="pc-button" to="/private-chef-dubai/pricing?duration=short#calculator">Build my visit plan</Link></ChefSection>
  <ChefSection eyebrow="A little planning makes the difference" title="Your food. Your dates. A suitable chef."><div className="pc-split"><ServiceImage imageKey="planning"/><ChefJourney/></div></ChefSection>
  <HouseholdCallout/>
  <ChefSection eyebrow="Before you book" title="Your chef booking questions."><div className="pc-prose"><FaqAccordion items={faqs} defaultOpen={-1}/></div></ChefSection><ChefEnquiry title="Let’s plan your next cooking day."/>
  </div>
}
