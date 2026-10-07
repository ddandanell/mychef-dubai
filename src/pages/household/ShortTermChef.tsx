// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai/short-term-chef
//     primary:     "short term private chef dubai"
//     subkeywords: "holiday chef dubai" · "temporary private chef dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ChefMenuInspiration from '@/components/private-chef/ChefMenuInspiration'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { ChefSection, ChefJourney, ChefEnquiry, ServiceRates } from '@/components/private-chef/ChefSections'
import { HouseholdCallout } from '@/components/household/HouseholdSections'
import ServiceImage from '@/components/private-chef/ServiceImage'
import FaqAccordion from '@/components/FaqAccordion'
import { SHORT_TERM_PATH } from '@/content/householdChefs'
import { chefVisitSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
const faqs = [
  { q: 'Can I book a chef for just a few hours?', a: 'Yes. A single three-hour Private Chef Visit is AED 1,125. No minimum number of days. A ten-hour Chef by the Day is AED 2,000. Both are before 5% VAT, groceries at actual cost with no markup and zone transport of AED 40–130 per visit. We agree the menu and portions to fit the booked time.' },
  { q: 'Can I arrange a chef for a holiday stay?', a: 'Yes. Share your arrival and departure dates, Dubai address, household size and preferred cooking days. Book one visit or a run of cooking days at the single rate shown in the [pricing calculator](/private-chef-dubai/pricing?duration=short#calculator).' },
  { q: 'Can I use the member rate?', a: 'Yes, with a monthly plan of four or more prepaid visits. Member rates are AED 750 for a three-hour visit, AED 900 for a four-hour Fridge Reset, AED 1,050 for a five-hour Fridge Reset with shopping, and AED 1,450 for a ten-hour day. Before 5% VAT; groceries at actual cost, no markup, and zone transport AED 40–130 per visit are separate.' },
  { q: 'Can the chef come regularly without living in?', a: 'Yes. You can arrange recurring [part-time cooking visits](/part-time-private-chef-dubai) or [weekly meal preparation](/weekly-meal-prep-dubai). For a dedicated ongoing role with personal recruitment support, explore our [household chefs](/full-time-private-chef-dubai).' },
  { q: 'Are groceries included?', a: 'Groceries are separate at actual cost, no markup. Provide ingredients from the chef’s shopping list, or choose a service with shopping management. Zone transport is AED 40–130 per visit before 5% VAT. Your quote confirms the menu, hours, VAT, any assistants and agreed extras.' },
  { q: 'Is this the right service for a dinner party?', a: 'For a single hosted occasion with a special menu, table service or a larger group, explore our [private dining experiences](/luxury-dining-experiences). We will help you choose the appropriate format.' },
]
export default function ShortTermChef() {
  useWhatsAppMessage('Hi myCHEF, I would like a short-term private chef booking. Location: __. Dates: __. Cooking hours: __. Household size: __. Favourite cuisines: __.')
  return <div><SEO title="Short Term Private Chef Dubai | Visits & Stays | myCHEF" description="Short term private chef in Dubai from AED 1,125 a visit — single visits welcome, no minimum days. Vetted chefs for holidays and busy weeks. Get a proposal." canonicalPath={SHORT_TERM_PATH} schema={chefVisitSchema('Short-term private chef in Dubai', 'Chef visits, recurring cooking days and short stays with menus shaped around the household.', faqs)}/>
  <PageHero eyebrow="MYCHEF · CHEF VISITS & SHORT STAYS" title={<>Short Term Private Chef Dubai.<br/><em>For the time you need.</em></>} subtitle="Single visits from AED 1,125. A ten-hour chef day is AED 2,000. No minimum number of days. Enjoy fresh meals or a stocked fridge during your stay. Before 5% VAT, groceries and transport." cta={{ label: 'Plan meals for my stay', href: `/inquiry?from=${SHORT_TERM_PATH}` }} secondaryCta={{ label: 'Calculate my visit price', href: '/private-chef-dubai/pricing?duration=short#calculator' }}/><ClusterNav/>
  <ChefSection eyebrow="Make room for good food" title="Your short term private chef in Dubai."><p className="pc-section-intro">Planning beyond this stay? Compare the ways to <Link to="/private-chef-dubai" className="pc-link">hire a private chef in Dubai</Link>, from cooking visits to an ongoing household arrangement.</p><div className="hc-choice-grid">{[
    ['A few hours each visit', 'Start with one three-hour Private Chef Visit for a freshly cooked breakfast, lunch or dinner. Your chef cooks the agreed menu and leaves the kitchen clean.', '/private-chef-dubai/pricing?duration=short#calculator', 'Compare visit prices'],
    ['A few days or a holiday stay', 'A chef for agreed days while you settle in, welcome family or enjoy Dubai. Tell us the dates, address and meals you have in mind.', `/inquiry?from=${SHORT_TERM_PATH}`, 'Tell us about your stay'],
    ['Regular part-time cooking', 'Choose a monthly plan of four or more prepaid visits for the member rate. Agree your cooking days and let the menu evolve with your preferences.', '/part-time-private-chef-dubai', 'Explore part-time visits'],
    ['Meals prepared for later', 'A Fridge Reset prepares about 20–25 labelled portions, depending on the menu and kitchen. Or choose a 15, 30 or 45-meal pack priced by the dish.', '/weekly-meal-prep-dubai', 'Explore weekly meal preparation'],
  ].map(([title, body, href, label]) => <article className="hc-level" key={title}><h3>{title}</h3><p>{body}</p><Link className="pc-link" to={href}>{label} →</Link></article>)}</div></ChefSection>
  <ChefMenuInspiration kind="short-stay"/>
  <ChefSection eyebrow="Cooking time, clearly priced" title="Single chef visits from AED 1,125." tone="pc-tone-cream"><ServiceRates shortStay/><p className="pc-fineprint">Chef by the Day is ten hours: AED 2,000 single or AED 1,450 at the member rate. Before 5% VAT; groceries at actual cost with no markup and zone transport AED 40–130 per visit are separate. Assistants and agreed extras are itemised before booking. A full-time household arrangement is quoted separately.</p><Link className="pc-button" to="/private-chef-dubai/pricing?duration=short#calculator">Build my visit plan</Link></ChefSection>
  <ChefSection eyebrow="A little planning makes the difference" title="Your food. Your dates. A suitable chef."><div className="pc-split"><ServiceImage imageKey="planning"/><ChefJourney/></div></ChefSection>
  <ChefSection eyebrow="Before you arrive" title="Make the first cooking day easy."><div className="pc-prose"><p>For a holiday stay, send the property address, check-in time, kitchen photographs if available and the meals you want covered. Confirm who can admit the chef, where groceries can be received and whether your host has any restrictions on outside suppliers. These details help us assess the kitchen and timing before proposing a booking.</p><p>Plan the arrival day separately from the rest of the stay. A late flight, a large grocery shop and a full dinner menu may need different preparation time. Tell us which meals are essential, the ages of children eating with you and any dietary instructions that need to be reviewed before the menu is agreed.</p><p>If your stay includes a hosted occasion, describe that separately: guest numbers, service style and any table service or equipment required. Our <Link to="/villas-private-residences">villa dining service</Link> explains that format. The written proposal will confirm which household cooking and event tasks are included, with availability and any extra costs agreed before booking.</p></div></ChefSection>
  <HouseholdCallout/>
  <ChefSection eyebrow="Before you book" title="Your chef booking questions."><div className="pc-prose"><FaqAccordion items={faqs} defaultOpen={-1}/></div></ChefSection><ChefEnquiry/>
  </div>
}
