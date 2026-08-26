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
 * this file when the real prices change, and no other file needs touching.
 */

export interface FormatRow {
  format: string
  what: string
  staff: string
  price: string
}

/** The corporate service-format price ladder. */
export const formatLadder: FormatRow[] = [
  { format: 'Drop-off', what: 'Food delivered ready to serve', staff: 'None', price: 'From AED 90 per person' },
  { format: 'Buffet', what: 'Presentation plus a maintained spread', staff: '1–2', price: 'From AED 120 per person' },
  { format: 'Live stations', what: 'Cooking in front of your guests', staff: '2–4', price: 'From AED 150 per person' },
  { format: 'Plated', what: 'Every course served together', staff: '3 and above', price: 'AED 700–950 per person' },
]

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
    'Book corporate catering Dubai for offices, boardrooms, client lunches and company events. Drop-off, buffet or plated service—from AED 90 per person.',
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
  {
    title: 'Staff meals',
    body: 'Volume meals for a workforce. A different operation from a client-facing lunch.',
    href: '/staff-meals-catering-dubai',
    linkLabel: 'Staff meals catering in Dubai',
    image: '/images/staff-meals-catering-dubai-hero.webp',
    imageAlt: 'Staff meals catering in Dubai. Experience concept shown.',
  },
  {
    title: 'Production catering',
    body: 'Meals that move with a call sheet. Crew feeding, not a styled reception.',
    href: '/production-catering-dubai',
    linkLabel: 'Production catering in Dubai',
    image: '/images/film-production-catering-dubai-hero.webp',
    imageAlt: 'Production catering in Dubai. Experience concept shown.',
  },
] as const

export const moreCorporate = [
  { href: '/gala-dinner-catering-dubai', label: 'Gala dinner catering' },
  { href: '/product-launch-catering-dubai', label: 'Product launch catering' },
  { href: '/exhibition-catering-dubai', label: 'Exhibition catering' },
  { href: '/brand-activation-catering-dubai', label: 'Brand activation catering' },
  { href: '/corporate-dinner-package-dubai', label: 'Corporate dinner package' },
  { href: '/corporate-retainer-dubai', label: 'Corporate catering contract' },
] as const

export const startSteps = [
  'Send the date, venue or office, headcount and what kind of occasion it is.',
  'We scope the format against the room: access, power, open-flame rules and service flow.',
  'You get an itemised proposal — food, staffing, equipment, delivery and 5% VAT as separate lines.',
  'On the day the team runs setup, service and clear-down to the timetable you approved.',
] as const

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
    title: 'Product launch, DIFC',
    guests: '60 guests',
    venue: 'Venue, DIFC',
    setup: 'Branded canapés, a live chef station, timed guest flow around the reveal.',
    outcome: 'Service timed to the product reveal, with interactive cooking in the room.',
    href: '/product-launch-catering-dubai',
    linkLabel: 'Product launch catering in Dubai',
  },
  {
    title: 'Corporate gala dinner, Downtown Dubai',
    guests: '200 guests',
    venue: 'Ballroom, Downtown Dubai',
    setup: 'Four-course plated service, timed courses, full front-of-house staffing.',
    outcome: 'Seated dinner held timing, dietary coverage and service across a large room.',
    href: '/gala-dinner-catering-dubai',
    linkLabel: 'Gala dinner catering in Dubai',
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
    a: 'Yes. A written contract suits organisations catering regularly through the year. It removes the briefing from every booking. See [corporate catering contracts](/corporate-retainer-dubai).',
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
    a: 'A few days is usually enough for regular office catering. For larger company events, two to four weeks is comfortable, and earlier between November and March. We typically reply within 15 minutes during business hours.',
  },
  {
    q: 'Which areas of Dubai do you cover?',
    a: 'DIFC, Business Bay, Downtown, Dubai Media City, Dubai Marina, JLT and the wider business districts. Access, parking and building rules affect delivery timing, so mention the venue early.',
  },
  {
    q: 'Do you handle company lunch catering Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you offer boardroom catering Dubai?',
    a: 'Yes. It sits inside the same service as corporate catering Dubai: we design the menu around your event, bring the chef and team to your address, and quote it itemised so you can see what each part costs. Tell us the date and headcount and we recommend the format.',
  },
  {
    q: 'How much does corporate catering price per head Dubai come to?',
    a: 'There is no single number for corporate catering price per head Dubai: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 90 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'Do you handle corporate catering companies Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle corporate catering services Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle small corporate catering Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle VIP corporate catering Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle Diwali corporate catering Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle company lunch catering Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you offer boardroom catering Dubai?',
    a: 'Yes. It sits inside the same service as corporate catering Dubai: we design the menu around your event, bring the chef and team to your address, and quote it itemised so you can see what each part costs. Tell us the date and headcount and we recommend the format.',
  },
  {
    q: 'How much does corporate catering price per head Dubai come to?',
    a: 'There is no single number for corporate catering price per head Dubai: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 90 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'Do you handle corporate catering companies Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle corporate catering services Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle small corporate catering Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle VIP corporate catering Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
  },
  {
    q: 'Do you handle Diwali corporate catering Dubai?',
    a: 'Yes. For companies we work to a fixed timing, invoice properly, cater dietary requirements per employee and keep the set-up clean and quick. Budgets typically start around AED 90 per person. One contact, one itemised quote, and the same team every time if you want continuity.',
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
  {
    q: 'Daily meals for a workforce?',
    a: 'Volume staff meals are a different operation entirely.',
    href: '/staff-meals-catering-dubai',
    cta: 'Staff meals',
  },
  {
    q: 'Catering a shoot or crew?',
    a: 'Meals that move with the call sheet.',
    href: '/production-catering-dubai',
    cta: 'Production catering',
  },
]
