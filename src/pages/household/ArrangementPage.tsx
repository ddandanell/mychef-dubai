import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import ClusterNav from '@/components/private-chef/ClusterNav'
import { ChefSection, ChefEnquiry } from '@/components/private-chef/ChefSections'
import { HouseholdJourney, HouseholdSupport } from '@/components/household/HouseholdSections'
import HouseholdImage from '@/components/household/HouseholdImage'
import FaqAccordion from '@/components/FaqAccordion'
import { HOUSEHOLD_PATH, LIVE_IN_PATH, LIVE_OUT_PATH, householdPriceNote } from '@/content/householdChefs'
import { householdInquiryHref } from '@/lib/householdInquiry'
import { householdSchema } from '@/lib/householdSchema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

const arrangements = {
  'live-in': {
    path: LIVE_IN_PATH, title: 'Live In Private Chef Dubai | Household Matching | myCHEF',
    description: 'Find a live-in private chef in Dubai from AED 18,000/month. Personal household matching, recruitment coordination, introductions and ongoing support.',
    h1: 'Live In Private Chef Dubai.', flourish: 'A familiar rhythm at home.',
    intro: 'A chef who lives in your home and understands its daily rhythm. We help you find the right person, agree the practical details and settle into an arrangement that feels comfortable for everyone.',
    image: 'live-in-hero', alt: 'Chef preparing breakfast in a bright family kitchen',
    heading: 'A live in private chef in Dubai, matched to your way of living.',
    body: 'A resident chef can bring continuity to a busy home: familiar breakfasts, thoughtfully planned lunches and dinners ready at the agreed time. The brief might include family cooking, hosting friends or a more individual menu for the principal household. We start with the food and the person who will make your routine easier.',
    details: [
      ['A comfortable place to live', 'We discuss a suitable private room, bathroom access, meals, privacy and household boundaries before introducing chefs for a resident role.'],
      ['Working hours that work for everyone', 'Live-in describes accommodation. Cooking hours, breaks, weekly days off and any split shifts are agreed separately, so expectations are clear.'],
      ['A kitchen with a shared plan', 'Agree meal times, who shops, storage, kitchen equipment and how the chef works alongside other household staff.'],
      ['Guests, travel and time away', 'Let us know about regular entertaining, family travel and residence changes. Extra hours, travel and cover are planned and quoted around the brief.'],
    ],
    faqs: [
      { q: 'Does a live-in chef work around the clock?', a: 'No. The chef lives at the property, with agreed working hours, breaks and days off. We discuss early breakfasts, later dinners and split shifts before confirming the schedule.' },
      { q: 'What accommodation should we provide?', a: 'Tell us about the private room, bathroom access and household facilities available. We confirm the practical accommodation expectations with you and the chef before the arrangement starts.' },
      { q: 'Can our chef travel with the household?', a: 'Include destinations, dates and likely frequency in your brief. Travel availability, documents, working hours, accommodation and extra costs need to be agreed for each arrangement.' },
      { q: 'How much does a live-in chef cost?', a: 'Indicative monthly service bands run from AED 18,000 to AED 50,000 across five chef levels, before VAT. Groceries and agreed extras are separate. The accommodation, working schedule and culinary brief shape your written proposal.' },
      { q: 'Can we meet and try the chef first?', a: 'Yes, we coordinate introductions and can arrange a paid cooking trial. Agree a representative menu so you can discuss the food, communication and household fit before committing.' },
    ],
    alternative: LIVE_OUT_PATH, alternativeLabel: 'Prefer a chef who comes each day? Explore live-out chefs',
  },
  'live-out': {
    path: LIVE_OUT_PATH, title: 'Live Out Private Chef Dubai | Daily Household Chef | myCHEF',
    description: 'Find a live-out private chef for your Dubai home. Daily cooking on an agreed schedule, five levels from AED 18,000/month and personal matching support.',
    h1: 'Live Out Private Chef Dubai.', flourish: 'Your chef, each cooking day.',
    intro: 'A dedicated household chef who arrives on your agreed days, cooks the food you love and leaves your kitchen ready for tomorrow. We handle the search and help build a routine that lasts.',
    image: 'live-out-hero', alt: 'Chef unpacking fresh ingredients at the start of a household cooking day',
    heading: 'A live out private chef in Dubai, with a routine built around you.',
    body: 'For households that want consistent cooking while keeping their home to themselves at the end of the day, a daily live-out arrangement offers a practical balance. We match the chef to your food preferences, location and schedule, then coordinate the introduction and the details behind each cooking day.',
    details: [
      ['Agreed days and arrival times', 'Choose the days and hours your household needs. We discuss your location, travel time, access and transport arrangements when building the shortlist.'],
      ['Meals during and after the visit', 'Your chef can cook for service during the shift and prepare agreed meals for later, with storage and reheating instructions suited to the dishes.'],
      ['One familiar way of cooking', 'Favourite recipes, portions, shopping lists and pantry preferences develop into a useful household routine with your chef.'],
      ['A plan for weekends and changes', 'Weekends, late dinners, guests and extra days are agreed within the schedule or quoted separately. Your myCHEF contact helps coordinate changes and cover.'],
    ],
    faqs: [
      { q: 'Will the same chef come each day?', a: 'A long-term arrangement is built around a regular chef and an agreed weekly schedule. Time off, availability or a change of match can require cover, which your myCHEF contact helps coordinate under the service terms.' },
      { q: 'Can a live-out chef prepare dinner before leaving?', a: 'Yes, where the menu and schedule allow. We agree which meals are served during the visit and which are prepared for later, including suitable storage and reheating instructions.' },
      { q: 'Are transport and shopping included?', a: 'Your proposal confirms transport, shopping responsibilities, the time allowed and any separate costs. Groceries are separate from the monthly chef service fee.' },
      { q: 'How is this different from part-time chef visits?', a: 'A monthly live-out arrangement includes a personal chef search and an ongoing household role. If you need a smaller number of cooking visits or a short stay, use our [short-term chef service](/private-chef-dubai/short-term-chef) and visit calculator.' },
      { q: 'What monthly budget should we allow?', a: 'Our five culinary levels range from AED 18,000 to AED 50,000 per month before VAT and agreed separate costs. We confirm a proposal around the working days, hours, food preferences and household responsibilities.' },
    ],
    alternative: LIVE_IN_PATH, alternativeLabel: 'Have room for a resident chef? Explore live-in chefs',
  },
} as const

export default function ArrangementPage({ arrangement }: { arrangement: keyof typeof arrangements }) {
  const page = arrangements[arrangement]
  useWhatsAppMessage(`Hi myCHEF, I am looking for a long-term ${arrangement} household chef. Location: __. Household size: __. Monthly budget: __. Start date: __.`)
  return <div><SEO title={page.title} description={page.description} canonicalPath={page.path} schema={householdSchema(page.h1, page.description, page.faqs)}/>
    <PageHero eyebrow={`MYCHEF · ${arrangement.toUpperCase()} HOUSEHOLD CHEFS`} title={<>{page.h1}<br/><em>{page.flourish}</em></>} subtitle={page.intro} cta={{ label: `Find my ${arrangement} chef`, href: householdInquiryHref(page.path, { arrangement }) }} secondaryCta={{ label: 'Compare five chef levels', href: `${HOUSEHOLD_PATH}#chef-levels` }}/><ClusterNav/>
    <ChefSection eyebrow="Your home. Your way of living." title={page.heading}><div className="pc-split"><HouseholdImage id={page.image} alt={page.alt}/><div className="pc-prose"><p className="pc-lead">{page.body}</p><p>We coordinate the chef search, recruitment process, introductions and household onboarding, then remain your contact for feedback and support.</p><Link className="pc-link" to="/our-chefs#household-profiles">Explore 25 chef styles →</Link></div></div></ChefSection>
    <ChefSection eyebrow="A comfortable arrangement starts here" title="The details we work through together." tone="pc-tone-cream"><div className="pc-detail-grid">{page.details.map(([title, body], i) => <article key={title}><p className="pc-eyebrow">0{i+1}</p><h3>{title}</h3><p>{body}</p></article>)}</div></ChefSection>
    <ChefSection eyebrow="Standard through to Elite" title="Five chef levels. From AED 18,000 a month."><div className="pc-prose"><p>Start with the food and service you want: reliable family favourites, a wider repertoire, specialist cuisines or refined private dining. Your chef’s culinary level is independent of whether they live in or live out.</p><p>{householdPriceNote}</p><Link className="pc-button" to={`${HOUSEHOLD_PATH}#chef-levels`}>Compare all five monthly levels</Link></div></ChefSection>
    <ChefSection eyebrow="Finding your person" title="A personal introduction, then a thoughtful start." tone="pc-tone-cream"><div className="pc-prose"><HouseholdJourney/></div></ChefSection>
    <ChefSection eyebrow="With you as the routine develops" title="One team to keep things moving."><HouseholdSupport/></ChefSection>
    <ChefSection eyebrow="Useful to know" title={`Your ${arrangement} chef questions.`} tone="pc-tone-cream"><div className="pc-prose"><FaqAccordion items={[...page.faqs]} defaultOpen={-1}/><p><Link className="pc-link" to={page.alternative}>{page.alternativeLabel} →</Link></p><p><Link className="pc-link" to={HOUSEHOLD_PATH}>See the complete household chef service →</Link></p></div></ChefSection>
    <ChefEnquiry title="Tell us what a good day at home looks like."/>
  </div>
}
