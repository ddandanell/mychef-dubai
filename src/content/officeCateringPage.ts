/**
 * Content for /office-catering-dubai
 *
 * KEYWORD LOCK: "office catering dubai" (STANDARD pages["/office-catering-dubai"]).
 * Scope: recurring workplace catering — daily and weekly lunches for a known
 * headcount. One-off company events belong on /corporate-event-catering-dubai.
 * The corporate hub is /corporate. Luxury catering in Dubai (/catering-dubai)
 * is an uplink only.
 *
 * PRICING PROVENANCE — every figure is already published in
 * src/content/seo-pages/office-catering-dubai.json (opening_paragraph, add_block
 * rate card, booking steps, FAQs) and in src/content/corporate-catering-dubaiPage.ts
 * (formatLadder / pricingNotes). Nothing here is estimated.
 */

import { CORPORATE_PATHS } from './corporateCluster'

export const OFFICE_ROOT = '/office-catering-dubai' as const

export const OFFICE_KEYWORD_LOCK = {
  primary: 'office catering dubai',
  title: 'Office Catering Dubai | myCHEF',
  description:
    'Office Catering Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
  h1: 'Office Catering Dubai',
} as const

export const OFFICE_WHATSAPP_NUMBER = '971551744849'
export const OFFICE_WHATSAPP_MESSAGE =
  'Hi myCHEF Dubai, I need office catering. Days: __, Headcount: __, Office/area: __, Format: drop-off or staffed __ (via mychef.ae/office-catering-dubai)'
export const OFFICE_WHATSAPP_LINK = `https://wa.me/${OFFICE_WHATSAPP_NUMBER}?text=${encodeURIComponent(OFFICE_WHATSAPP_MESSAGE)}`

/** STANDARD internal_linking.siblings — render exactly. */
export const OFFICE_SIBLING_LINKS = [
  { href: '/business-lunch-catering-dubai', label: 'Business lunch catering' },
  { href: '/drop-off-catering-dubai', label: 'Drop-off catering' },
  { href: '/breakfast-catering-dubai', label: 'Breakfast catering' },
] as const

export const officeHero = {
  src: '/images/office-catering-dubai-hero.webp',
  alt: 'Office catering in a Dubai workplace — a dressed meeting table, devices stacked away, service setting lunch. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

export const jumpNav = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Prices' },
  { href: '#formats', label: 'Delivery or staffed' },
  { href: '#quote', label: 'How a quote is built' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#examples', label: 'How this looks' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

export const routing = {
  h2: 'Which service do you actually need?',
  paragraphs: [
    'Office catering is not a party and it is not a canteen. It is the repeating week: the same people, the same days, food that lands before the room fills. Consistency and timing matter more than theatre, and cost per head is the number finance will scrutinise.',
    'Most offices already know the headcount. A daily office lunch in Dubai then runs on a weekly rhythm — same days, same delivery window, a menu that rotates. Team lunch catering in Dubai for a department of ten is still that job, not a buffet line built for a hundred.',
    'One-off company events — parties, launches, award nights — are a different operation. They are quoted per event, they need setup and pack-down, and they live on their own page. Volume meals for a workforce are a third operation. If you describe the day rather than the category, we will tell you which page fits.',
  ],
}

export const boundaries = [
  {
    q: 'A one-off company event?',
    a: 'Parties, launches, galas and networking receptions. Quoted per event, not per week.',
    href: CORPORATE_PATHS.events,
    cta: 'Corporate event catering',
  },
  {
    q: 'A boardroom or client lunch?',
    a: 'Plated or buffet, sized to the room and the agenda.',
    href: '/business-lunch-catering-dubai',
    cta: 'Business lunch catering',
  },
  {
    q: 'Food delivered, nobody in the room?',
    a: 'Meals and platters laid out. Your team helps itself. Facilities clears the trays.',
    href: '/drop-off-catering-dubai',
    cta: 'Drop-off catering',
  },
  {
    q: 'Breakfast before the floor fills?',
    a: 'The same working format as lunch, timed to land before the room is occupied.',
    href: '/breakfast-catering-dubai',
    cta: 'Breakfast catering',
  },
] as const

export interface FormatRow {
  format: string
  what: string
  staff: string
  price: string
}

/** Rate card already published on this URL’s seo-pages JSON. */
export const formatLadder: FormatRow[] = [
  {
    format: 'Working lunch or breakfast',
    what: 'Delivered, laid out, you clear',
    staff: 'None',
    price: 'From AED 90 per person',
  },
  {
    format: 'Office event buffet',
    what: 'Delivered and set up; staff optional',
    staff: 'Optional',
    price: 'From AED 120 per person',
  },
  {
    format: 'Premium buffet, BBQ or live station',
    what: 'Staffed on site',
    staff: 'On site',
    price: 'From AED 150 per person',
  },
  {
    format: 'Chef cooking in the office',
    what: 'Cooked and served in front of you',
    staff: 'Chef plus service team',
    price: 'AED 700–950 per person',
  },
]

export const pricingIntro = [
  'Office catering in Dubai starts at AED 90 per person for a delivered working lunch, laid out, with no extras folded into the per-head figure. An office event buffet starts at AED 120. A premium spread with a BBQ or live station starts at AED 150. A chef who cooks and serves on site is AED 700–950 per person. Add 5% VAT.',
  'The AED 700–950 band is a board dinner or a client evening, not feeding the floor on a Tuesday. Two things move the number inside each band: how big the room is, and how much labour the format needs. Every quote is itemised — food, staffing, equipment, delivery and VAT as separate lines — so finance can see what is being approved.',
]

export const pricingNotes = [
  'Delivered formats start at 10 guests. A buffet starts at 20.',
  'Minimum order value is AED 900 on dropped-off formats.',
  'A chef cooking on site has no minimum headcount — a board dinner for six is a normal booking.',
  'All figures are before 5% VAT, which is shown as its own line.',
  'Recurring work is priced against the weekly or monthly schedule instead.',
]

export const formats = {
  h2: 'Delivery, staffed service, or a chef in the room',
  paragraphs: [
    'This is the choice that sets the budget. Decide it before you shortlist anyone.',
    'Drop-off is the AED 90 tier — corporate lunch delivery in Dubai to the floor. Office food delivery of that kind arrives hot or chilled as the dish needs, in sealed single portions or on shared platters, with serving tongs, napkins and labels. We lay it out. Your team helps itself. Facilities clears the trays. That covers most weekday office lunches.',
    'Staffed service: the team arrives ahead of the sitting, builds the line with chafing dishes and linen, keeps hot food hot and cold food cold, serves or replenishes, then clears and wipes down so the room is usable for the next meeting. That is where the AED 120 and AED 150 tiers sit.',
    'A chef cooking on site is cooking and plating in front of your guests. That is the AED 700–950 band, priced for a board dinner or a client evening. If a quote does not tell you which of those three you are getting, it is not a quote yet.',
  ],
}

export const recurring = {
  h2: 'The repeating week, not a prepaid plan',
  paragraphs: [
    'Most offices that call us are not planning an event. They want the same team fed on the same days without anybody in HR chasing a caterer every Monday. Weekly office catering in Dubai means fixed delivery windows, a menu that rotates so nobody sees the same grain bowl twice in two weeks, one contact, and one monthly invoice instead of forty receipts.',
    'The food rate stays the AED 90 working-lunch tier. Office lunch catering in Dubai on a recurring programme is quoted against your real schedule and headcount. We do not sell office catering packages in Dubai as prepaid memberships, and there is no published discount table for volume. If a fixed monthly rate matters to finance, say so at the brief and the proposal is built that way.',
  ],
}

export const quoting = {
  h2: 'How an office quote is built',
  paragraphs: [
    'A useful proposal needs four things: the days or the date, the office, how many people, and whether you want it delivered or staffed. Dietary requirements and a budget position help. Telling us the budget early is not a trap — it means the first proposal is realistic rather than the third one.',
    'Access, parking and lift timing change when food can arrive at temperature. Mention the building early. Headcounts move on the morning; we will tell you the last point at which the kitchen can still change the order.',
    'What comes back is itemised. Food, staff, delivery, equipment and 5% VAT sit on separate lines rather than being folded into a per-head figure that is impossible to compare.',
  ],
}

export const startSteps = [
  'Send the headcount, the days or the date, dietary needs, and whether you want it delivered or staffed.',
  'We typically reply within 15 minutes during business hours to confirm whether a chef and kitchen are free.',
  'An itemised proposal follows within one business day: menu, format, per-head rate, staff, delivery, equipment and VAT as separate lines.',
  'Confirm numbers. We deliver, set up and clear to the timetable you approved.',
] as const

export const siblingCards = [
  {
    title: 'Business lunch catering',
    body: 'Board meetings and client lunches. Plated or buffet, sized to the room and the agenda.',
    href: '/business-lunch-catering-dubai',
    linkLabel: 'Business lunch catering',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Business lunch catering in Dubai. Experience concept shown.',
  },
  {
    title: 'Drop-off catering',
    body: 'Food delivered ready to serve. No staff in the room. The weekday default for most floors.',
    href: '/drop-off-catering-dubai',
    linkLabel: 'Drop-off catering',
    image: '/images/drop-off-catering-dubai-hero.webp',
    imageAlt: 'Drop-off catering delivered to a Dubai office. Experience concept shown.',
  },
  {
    title: 'Breakfast catering',
    body: 'The same working format as lunch, timed to land before the room fills.',
    href: '/breakfast-catering-dubai',
    linkLabel: 'Breakfast catering',
    image: '/images/breakfast-catering-dubai-hero.webp',
    imageAlt: 'Breakfast catering in a Dubai office. Experience concept shown.',
  },
] as const

export const proofItems = [
  {
    title: 'How culinary partners are selected',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks for a client. No chef is guaranteed by name; we match the brief.',
    href: '/how-we-vet-our-chefs',
    linkLabel: 'How myCHEF quality standards work',
  },
  {
    title: 'What halal-first means here',
    body: 'Halal ingredients are sourced by default for myCHEF office menus in Dubai. Vegetarian, vegan and gluten-free options are planned into the menu rather than added at the end. Specific certification needs belong in the brief.',
    href: '/halal-catering-dubai',
    linkLabel: 'Halal catering',
  },
  {
    title: 'Invoicing',
    body: 'Food, staffing, equipment, delivery and 5% VAT are shown separately so finance can approve a real number, not a blended headline. TRN-ready VAT invoices, weekly or monthly.',
    href: `${OFFICE_ROOT}#pricing`,
    linkLabel: 'Office catering prices',
  },
  {
    title: 'Written proposals',
    body: 'Days, office, headcount, format and dietary requirements shape the first proposal. The written booking is the contract. We typically reply within 15 minutes during business hours.',
    href: `${OFFICE_ROOT}#quote`,
    linkLabel: 'How an office quote is built',
  },
] as const

export const practiceLooks = [
  {
    title: 'Daily floor lunch',
    detail: 'Drop-off · from AED 90 per person',
    body: 'Hot mains, salads and sides delivered and laid out. Your team eats. Facilities clears. This is the AED 90 working-lunch tier most weekday programmes run on.',
  },
  {
    title: 'A team of ten to fifteen',
    detail: 'Drop-off · AED 900 minimum order',
    body: 'Ten guests is where the delivered format starts. Up to about fifteen we run it as drop-off rather than a staffed buffet, because putting two people behind a line for a dozen guests costs more than the food. Below ten, a chef cooking on site has no minimum headcount.',
  },
  {
    title: 'A staffed line when the room needs it',
    detail: 'Buffet from 20 guests · from AED 120 per person',
    body: 'Above roughly twenty-five people a staffed line starts to earn its cost. Past sixty you want it, because a queue that moves badly ruins a lunch break faster than average food does.',
  },
] as const

export const officeFaqs = [
  {
    q: 'How much does office catering cost in Dubai?',
    a: 'A delivered working lunch or breakfast starts at AED 90 per person. A standard office event buffet starts at AED 120. A premium buffet, BBQ or canapé spread starts at AED 150. A chef cooking and serving on site is AED 700–950 per person. Add 5% VAT. See the [catering prices guide](/dubai-catering-prices-guide).',
  },
  {
    q: 'Is there a minimum headcount or minimum order?',
    a: 'Delivered formats start at 10 guests. A buffet starts at 20. The minimum order value is AED 900, which is 10 heads at the AED 90 tier. A chef cooking on site has no minimum headcount.',
  },
  {
    q: 'What is the difference between delivery and staffed service?',
    a: 'Delivery means the food arrives ready, laid out on your counter or boardroom table, and you clear it away. Staffed means our team sets the line, keeps hot food hot and cold food cold, serves, then clears. Delivery starts at AED 90 per person. Staffed service costs more because you are paying for the people and the equipment as well as the food. The operational split is in [full service vs drop-off](/blog/corporate-catering-full-service-vs-drop-off).',
  },
  {
    q: 'Do you run daily or weekly office lunches?',
    a: 'Yes. A recurring arrangement with fixed delivery windows, a rotating menu and one monthly invoice. The per-head food rate is the AED 90 working-lunch tier. We do not publish a subscription price, so the programme is quoted on your schedule and headcount.',
  },
  {
    q: 'Can we adjust headcount or pause around holidays?',
    a: 'Yes. Office life changes week to week. Scale numbers up or down with notice, pause around holidays, then resume the same arrangement. The last point at which the kitchen can still change an order is stated in the proposal.',
  },
  {
    q: 'How much notice do you need?',
    a: 'We do not publish a fixed minimum notice. Send the date and headcount and we tell you the same working day whether a chef and kitchen are free. We typically reply within 15 minutes during business hours. An itemised proposal follows within one business day. A few days is usually enough for regular office catering.',
  },
  {
    q: 'Can you cater dietary requirements across a whole team?',
    a: 'Halal ingredients are sourced by default. Vegetarian, vegan, gluten-free, dairy-free, keto and nut-free options are planned into the menu, with allergens labelled on each dish. Share the requirements once and they stay on the rotation.',
  },
]
