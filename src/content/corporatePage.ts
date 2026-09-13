/**
 * Content for the corporate hub: /corporate
 *
 * KEYWORD LOCK: "corporate catering dubai".
 *
 * PRICING PROVENANCE — every figure below was already published by myCHEF in
 * src/content/seo-pages/corporate.json (opening_paragraph, add_block[5]/[6], faq[0]/[10])
 * and in this page's own <title>. That block used to be appended to the page by
 * SeoContent as a separate second article; suppressing the duplicate removed the only
 * place these numbers were rendered. They are relocated here so the hub is the single
 * on-page source of corporate pricing. Nothing here is estimated or invented — update
 * Format floors live in src/content/cateringPricing.ts. Update that file
 * when the published catering numbers change.
 */

import { hubPriceRows } from './cateringPricing'

export interface FormatRow {
  format: string
  what: string
  staff: string
  price: string
}

/** The corporate service-format price ladder — same source as Catering hub. */
export const formatLadder: FormatRow[] = hubPriceRows().map((row) => ({
  format: row.format,
  what: row.what,
  staff: row.staff,
  price: row.price,
}))

export const pricingNotes = [
  'Volume formats start at 10 guests, a full buffet at 20.',
  'Minimum order value is AED 900 on dropped-off formats.',
  'A chef cooking on site has no minimum headcount — a board dinner for six is a normal booking.',
  'All figures are before 5% VAT, which is shown as its own line.',
  'Recurring work is priced against the weekly or monthly schedule instead.',
]

export const pricingIntro = [
  'Corporate catering in Dubai opens at AED 90 per person and moves with headcount, menu and how much service you want in the room. The format decides most of it: the same guests cost very different amounts dropped off versus plated.',
  'Every quote is itemised — food, staffing, equipment, delivery and VAT as separate lines — so your finance team can see exactly what is being approved, and you can compare it fairly against another quote. A quote that hides those lines is not cheaper, it is less complete.',
]

/** Routing prose: the hub's real job is sending people to the right service. */
export const routing = {
  h2: 'Which Corporate Service Do You Actually Need?',
  paragraphs: [
    'Corporate catering is not one product. The three things companies ask us for run on different operations, different lead times and different pricing, and putting them on one page is how people end up with the wrong quote.',
    'The first is recurring workplace catering: office lunches, boardroom meetings, daily staff meals, portioned meal prep. These are planned around a weekly rhythm and a headcount you already know. Consistency and timing matter more than presentation, and cost per head is the number that gets scrutinised.',
    'The second is one-off company events: parties, launches, award nights, networking receptions. These are planned around a date, a venue and a format. They need service staff, setup and pack-down, and they are quoted per event rather than per week.',
    'The third is production catering — film crews and shoots — where the schedule is unpredictable, meals move with the call sheet, and feeding people properly on a long day matters more than styling.',
    'If you are not sure which one you are planning, describe the day rather than the category. We will tell you which service fits and what it should cost.',
  ],
}

export const whatWeHandle = {
  h2: 'What corporate catering services in Dubai include',
  paragraphs: [
    'myCHEF runs the food and hospitality operation: menus, food preparation or supply, chefs, catering service staff, beverages, food-service equipment, setup, service and clearance. Corporate catering food is planned for the room you actually have, not for a restaurant floor plan.',
    'Corporate catering services in Dubai cover office meals, meetings, conferences, staff parties, launches, exhibitions, executive dinners and productions. Conference support means the catering operation around the agenda. We do not add AV, staging, entertainment or venue hire.',
    'Halal ingredients are the default. Vegetarian, vegan and gluten-free dishes are planned when named in the brief. That is not a medical or allergen-free promise. Alcohol is only where the venue is licensed and it is agreed in writing.',
  ],
} as const

export const meetingRouting = {
  h2: 'Company lunch, boardroom catering and business meetings',
  paragraphs: [
    'Google often shows this hub for business meeting catering and business lunch searches. Those jobs have owner pages. This page is the centre: corporate catering Dubai as a supplier comparison, then a route to the right operation.',
    'Company lunch catering in Dubai for a repeating team is office catering. Boardroom catering for a client sitting is business lunch catering. Recurring corporate catering is a weekly or monthly rhythm on the office or staff-meals pages. A VIP table is still a plated dinner or the 10 to 15 guest package, not a different product name.',
    'A Diwali gathering or other seasonal company sitting is quoted as an event. Price per head moves with format more than with the calendar. Tell us the day. We will put it on the page that owns it.',
  ],
} as const

export const dietaryAtScale = {
  h2: 'Corporate catering, halal, and mixed rooms',
  paragraphs: [
    'Corporate catering that is halal-first still has to work for a mixed room: colleagues who eat meat, guests who do not, and named allergens. Labels go on the tray. Separation is planned when you name the guest and the allergen.',
    'You do not need a full dietary list to start a proposal. Headcount and format first. Dietary notes can follow before the kitchen deadline in the booking.',
  ],
} as const

export const hubWorkedExamples = [
  {
    title: '12-person weekday company lunch',
    packageId: 'corp-office-lunch-dropoff',
    guests: 12,
    note: 'Drop-off. Food and delivery. Your team serves itself.',
  },
  {
    title: '15 people, four office days',
    packageId: 'corp-office-weekly-lunch',
    guests: 15,
    days: 4,
    note: 'Recurring week. Actual service days. No automatic volume discount.',
  },
  {
    title: '8-person client lunch, plated',
    packageId: 'corp-lunch-client',
    guests: 8,
    note: 'Boardroom client lunch. Chef-led plated band, not AED 90 drop-off.',
  },
  {
    title: '40-person conference day',
    packageId: 'corp-conf-full-day',
    guests: 40,
    note: 'Staffed buffet floor for a full day. Venue extras sit on their own line.',
  },
  {
    title: '60-person networking reception',
    packageId: 'corp-event-networking',
    guests: 60,
    note: 'Canapé reception. A business event, not a seated gala.',
  },
  {
    title: '12-person corporate dinner package',
    packageId: 'corp-dinner-package',
    guests: 12,
    note: 'Whole-event AED 4,500. Not multiplied by 12.',
  },
] as const

export const quoting = {
  h2: 'How a Corporate Quote Is Built',
  paragraphs: [
    'A useful proposal needs four things from you: the date, the venue or office, how many people, and what kind of occasion it is. Dietary requirements and a budget position help, and telling us the budget early is not a trap — it means the first proposal is realistic rather than the third one.',
    'From there we scope the format against the room. What a space can physically support changes what can be cooked and served in it: a floor with no service lift, a venue that will not allow open flame, or an office kitchen with one power point each rule out options that look fine on paper.',
    'What comes back is itemised. Where service staff, equipment hire or delivery are needed, they appear as their own lines rather than being folded into a per-head figure that is impossible to compare.',
  ],
}

export const CORPORATE_ROOT = '/corporate' as const

export const CORPORATE_KEYWORD_LOCK = {
  primary: 'corporate catering dubai',
  title: 'Corporate Catering Dubai | Offices, Boards & Events | myCHEF',
  description:
    'Corporate catering Dubai for offices, boardrooms and company events. Drop-off from AED 90 per person. Compare office, lunch, conference and event packages.',
} as const

export const CORPORATE_WHATSAPP_NUMBER = '971551744849'
export const CORPORATE_WHATSAPP_MESSAGE =
  'Hi myCHEF Dubai, I need corporate catering. Date: __, Guests: __, Venue/area: __, Format: __ (via mychef.ae/corporate)'
export const CORPORATE_WHATSAPP_LINK = `https://wa.me/${CORPORATE_WHATSAPP_NUMBER}?text=${encodeURIComponent(CORPORATE_WHATSAPP_MESSAGE)}`

export const CORPORATE_SIBLING_LINKS = [
  { href: '/office-catering-dubai', label: 'Office catering' },
  { href: '/corporate-event-catering-dubai', label: 'Corporate event catering' },
  { href: '/business-lunch-catering-dubai', label: 'Business lunch catering' },
  { href: '/corporate-catering-checklist-dubai', label: 'Corporate catering checklist' },
] as const

export const corporateHero = {
  src: '/images/corporate-catering-dubai-hero.webp',
  alt: 'Corporate catering in Dubai — canapés and service staff in a polished venue. Experience concept shown.',
  width: 1683,
  height: 935,
} as const

export const jumpNav = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Prices' },
  { href: '#packages', label: 'Packages' },
  { href: '#inventory', label: 'Full brief' },
  { href: '#budgets', label: 'Worked totals' },
  { href: '#meetings', label: 'Lunch and boardroom' },
  { href: '#quote', label: 'How a quote is built' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#examples', label: 'Examples' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

export const corePathways = [
  {
    title: 'Office catering',
    body: 'Recurring breakfast and lunch for a known headcount. Timing and consistency matter more than theatre.',
    href: '/office-catering-dubai',
    linkLabel: 'Office catering in Dubai',
    image: '/images/office-catering-dubai-hero.webp',
    imageAlt: 'Office catering in a Dubai workplace. Experience concept shown.',
  },
  {
    title: 'Business lunch',
    body: 'Board meetings and client lunches. Plated or buffet, sized to the room and the agenda.',
    href: '/business-lunch-catering-dubai',
    linkLabel: 'Business lunch catering in Dubai',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Business lunch catering in Dubai. Experience concept shown.',
  },
  {
    title: 'Corporate events',
    body: 'One-off parties, launches, award nights and networking. Quoted per event, not per week.',
    href: '/corporate-event-catering-dubai',
    linkLabel: 'Corporate event catering in Dubai',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Corporate event catering in Dubai. Experience concept shown.',
  },
  {
    title: 'Conference catering',
    body: 'Delegate catering, coffee breaks and multi-day programmes.',
    href: '/conference-catering-dubai',
    linkLabel: 'Conference catering in Dubai',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Conference catering in Dubai. Experience concept shown.',
  },
] as const

export const moreCorporate = [
  { href: '/office-catering-dubai', label: 'Office catering' },
  { href: '/business-lunch-catering-dubai', label: 'Business lunch catering' },
  { href: '/conference-catering-dubai', label: 'Conference catering' },
  { href: '/corporate-event-catering-dubai', label: 'Corporate event catering' },
  { href: '/corporate-dinner-package-dubai', label: 'Corporate dinner package' },
  { href: '/product-launch-catering-dubai', label: 'Product launch catering' },
  { href: '/gala-dinner-catering-dubai', label: 'Gala dinner catering' },
  { href: '/exhibition-catering-dubai', label: 'Exhibition catering' },
  { href: '/staff-meals-catering-dubai', label: 'Staff meals' },
  { href: '/production-catering-dubai', label: 'Production catering' },
  { href: '/corporate-retainer-dubai', label: 'Corporate catering account' },
  { href: '/corporate-catering-checklist-dubai', label: 'Corporate catering checklist' },
] as const

export const startSteps = [
  'Send the date, venue or office, headcount and what kind of occasion it is.',
  'We scope the format against the room: access, power, open-flame rules and service flow.',
  'You get an itemised proposal — food, staffing, equipment, delivery and 5% VAT as separate lines.',
  'On the day the team runs setup, service and clear-down to the timetable you approved.',
] as const

export const quoteNeedsNote =
  'An LPO or consolidated invoice does not by itself create credit terms. We issue TRN-ready VAT invoices. Payment and cancellation follow the written booking, not a shop-window promise.'

export const proofItems = [
  {
    title: 'How culinary partners are selected',
    claim: 'Vetted chef and culinary-partner network.',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks for a client. No chef is guaranteed by name; we match the brief.',
    href: '/how-we-vet-our-chefs',
    linkLabel: 'How myCHEF quality standards work',
  },
  {
    title: 'What halal-first means here',
    claim: 'Halal-first menu planning and ingredient sourcing.',
    body: 'Halal ingredients are sourced by default for myCHEF corporate menus in Dubai. Specific certification needs belong in the brief.',
    href: '/halal-catering-dubai',
    linkLabel: 'Halal catering',
  },
  {
    title: 'Invoicing',
    claim: 'TRN-ready VAT invoices and itemised lines.',
    body: 'Food, staffing, equipment, delivery and 5% VAT are shown separately so finance can approve a real number, not a blended headline.',
    href: `${CORPORATE_ROOT}#pricing`,
    linkLabel: 'Corporate catering prices in Dubai',
  },
  {
    title: 'Written proposals',
    claim: 'Transparent written proposals before booking.',
    body: 'Date, venue, headcount, format and dietary requirements shape the first proposal. The written booking is the contract.',
    href: `${CORPORATE_ROOT}#quote`,
    linkLabel: 'How a corporate quote is built',
  },
] as const

export const exampleEvents = [
  {
    title: 'How a product launch is usually run',
    guests: 'Standing reception',
    venue: 'Showroom or office floor',
    setup: 'Passed canapés that can pause for the reveal. Live cooking only if the room allows it.',
    outcome: 'Food supports the product moment. It does not sit on laptops or compete with the brief.',
    href: '/product-launch-catering-dubai',
    linkLabel: 'Product launch catering',
  },
  {
    title: 'How a seated company dinner is usually run',
    guests: 'A known table, not an unnamed ballroom',
    venue: 'Office dining room or hired venue kitchen',
    setup: 'Courses timed to speeches. Staff sized to the table. Dietary plates labelled.',
    outcome: 'The room stays on the agenda. We do not publish client names or venue details unless you agree in writing.',
    href: '/corporate-dinner-package-dubai',
    linkLabel: 'Corporate dinner package',
  },
] as const

export const corporateFaqs = [
  {
    q: 'How much does corporate catering cost in Dubai?',
    a: 'Drop-off food starts from AED 90 per person. A buffet starts from AED 120. Live stations and canapés start from AED 150. Chef-led plated dining is typically AED 700–950 per person. Headcount, menu, staffing, venue and 5% VAT move the total. Every proposal is itemised. See the [catering prices guide](/dubai-catering-prices-guide).',
  },
  {
    q: 'What is the minimum guest count?',
    a: 'Volume drop-off starts from 10 guests with a minimum order of AED 900. A full buffet starts from 20 guests. A chef cooking on site has no minimum headcount — a board dinner for six is a normal booking.',
  },
  {
    q: 'Can you handle both daily office catering and one-off events?',
    a: 'Yes, but they are different operations. Recurring workplace catering is [office catering](/office-catering-dubai). One-off parties, launches and award nights are [corporate event catering](/corporate-event-catering-dubai).',
  },
  {
    q: 'Do you offer a standing corporate arrangement?',
    a: 'Yes. A written corporate catering contract suits organisations that book often. Fees, credit and expiry are set in that agreement, not as a shop price. See [corporate catering contracts](/corporate-retainer-dubai).',
  },
  {
    q: 'Is this the page for business lunch or a business meeting?',
    a: 'This hub is corporate catering in Dubai as a whole. A client or boardroom sitting is [business lunch catering](/business-lunch-catering-dubai). A repeating team lunch is [office catering](/office-catering-dubai). A party or launch is [corporate event catering](/corporate-event-catering-dubai).',
  },
  {
    q: 'What does a corporate catering company in Dubai actually run?',
    a: 'Menus, food preparation or supply, chefs, service staff, beverages, food-service equipment, setup, service and clearance. Not AV, staging, entertainment or venue hire. Halal ingredients are the default.',
  },
  {
    q: 'How do corporate lunch packages in Dubai work for a small team?',
    a: 'Small corporate catering still uses the same floors. Below ten guests, drop-off hits the AED 900 minimum order. A chef cooking on site has no headcount minimum. Recurring weeks are billed on actual service days.',
  },
  {
    q: 'Is invoicing available for corporate accounts?',
    a: 'Yes. We issue itemised, TRN-ready VAT invoices. Consolidated billing is available when you book more than one service in a period.',
  },
  {
    q: 'Can you cater dietary requirements for our team?',
    a: 'Halal ingredients are sourced by default. Vegetarian, vegan and gluten-free options are planned into the menu rather than added at the end. For allergies, tell us which guest and which allergen so labelling and separation can be planned.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'A few days is usually enough for regular office catering. For larger company events, two to four weeks is comfortable, and earlier between November and March.',
  },
  {
    q: 'Which areas of Dubai do you cover?',
    a: 'DIFC, Business Bay, Downtown, Dubai Media City, Dubai Marina, JLT and the wider business districts. Access, parking and building rules affect delivery timing, so mention the venue early.',
  },
]

export const boundaries = [
  {
    q: 'Feeding the office day to day?',
    a: 'Recurring workplace lunches run on a weekly rhythm.',
    href: '/office-catering-dubai',
    cta: 'Office catering',
  },
  {
    q: 'A one-off company event?',
    a: 'Parties, launches, galas and networking receptions.',
    href: '/corporate-event-catering-dubai',
    cta: 'Corporate event catering',
  },
]
