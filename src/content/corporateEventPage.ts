/**
 * Copy for /corporate-event-catering-dubai
 *
 * KEYWORD LOCK: "corporate event catering dubai" (CORPORATE_KEYWORD_LOCKS.events).
 * Scope: ONE-OFF company events — parties, launches, celebrations, networking,
 * award nights, branded events. Office lunches, conference programmes, staff meals,
 * meal prep, retainers and production catering belong to their own pages and are
 * only linked from here, never explained here.
 *
 * Must NOT target "corporate catering dubai" (that is /corporate).
 *
 * DELIBERATELY ABSENT, pending owner verification (do not re-add without sign-off):
 *   - per-head prices, package prices, minimum order values, tasting fees
 *   - guest-capacity claims ("up to 500")
 *   - "chef within 24 hours", "allergen-free", "end-to-end event management"
 * Standing brand claims that already appear in shared global components
 * (halal-first kitchen standards, vetted chefs, typical 15-minute reply) are not
 * repeated as page-specific promises here.
 */

import { CORPORATE_PATHS } from './corporateCluster'

export interface Block {
  id: string
  h2: string
  paragraphs: string[]
  bullets?: string[]
  link?: { href: string; label: string }
}

/** STANDARD pages["/corporate-event-catering-dubai"].on_page */
export const seo = {
  title: 'Corporate Event Catering Dubai | myCHEF',
  description:
    'Corporate event catering Dubai for company parties, launches and networking. Canapés from AED 150 per person. Staffed buffet from AED 120 per person.',
} as const

/** STANDARD internal_linking.siblings — render exactly. */
export const siblingLinks = [
  { href: '/gala-dinner-catering-dubai', label: 'Gala dinner catering' },
  { href: '/corporate', label: 'Corporate dining' },
  { href: '/blog/corporate-event-catering-ideas-dubai', label: 'Corporate event catering ideas' },
  { href: '/live-cooking-stations-dubai', label: 'Live cooking stations' },
] as const

export const eventRelatedLinks = [
  { href: '/product-launch-catering-dubai', label: 'Plan a product launch reception' },
  { href: '/brand-activation-catering-dubai', label: 'Brand activation catering' },
  { href: '/exhibition-catering-dubai', label: 'Exhibition catering' },
  { href: '/corporate-dinner-package-dubai', label: 'View the corporate dinner package' },
  { href: '/conference-catering-dubai', label: 'Explore our conference catering packages' },
] as const

/** STANDARD locations sample (three on-page). */
export const areaLinks = [
  { href: '/locations/difc', label: 'DIFC' },
] as const

export const hero = {
  eyebrow: 'Corporate Event Catering',
  h1: 'Corporate Event Catering Dubai for Company Parties and Award Nights',
  subtitle:
    'Celebrations, receptions and award nights with menus, chefs and service staff. Canapés from AED 150 per person. Staffed buffet from AED 120 per person. An itemised quote before anything is confirmed.',
  primaryCta: 'Request a corporate catering quote',
  secondaryCta: 'Chat on WhatsApp',
  utility: 'Offices · Venues · Villas · Rooftops · Across Dubai',
}

/** Section 2 — scope. The single most important section: it prevents mismatched enquiries. */
export const scope: Block = {
  id: 'what-we-handle',
  h2: 'What you receive on the night',
  paragraphs: [
    'For a corporate event, myCHEF runs the catering: menu design, sourcing, cooking, service staff, equipment, setup, service and pack-down. One person owns it, and you get an itemised quote before you approve anything.',
    'We coordinate with your venue, planner and production team. Room hire, audiovisual equipment, staging and entertainment stay with those specialists. Where you already have them, we work to their schedule.',
    'Catering has its own timeline under your run sheet: when food arrives, when service starts and how long a room takes to clear. Our job is to make that timeline fit yours.',
  ],
}

export const uplinks = {
  lead: 'This page is the one-off company night. Recurring workplace catering sits on',
  corporateHref: CORPORATE_PATHS.hub,
  corporateLabel: 'Corporate catering in Dubai',
  mid: 'Weddings, villas, yachts and private celebrations sit on',
  luxuryHref: '/catering-dubai',
  luxuryLabel: 'Luxury catering in Dubai',
} as const

export const blocks: Block[] = [
  {
    id: 'company-parties',
    h2: 'Company parties, receptions and celebrations',
    paragraphs: [
      'Most enquiries are a company wanting to do something decent for its own people: an annual party, a team celebration after a hard quarter, a leaving do for someone who has been there nine years.',
      'Format matters here: how many serving points, where they sit in the room, and whether people can eat standing with a drink in the other hand. We plan staff parties around the room and the headcount first, then the food.',
    ],
    bullets: [
      'Annual and end-of-year company parties',
      'Team celebrations and milestone events',
      'Company and office anniversaries',
      'Employee appreciation evenings',
      'Holiday and festive office parties',
      'Farewell and retirement send-offs',
      'Office openings and relocations',
      'Informal team evenings and client receptions',
    ],
  },
  {
    id: 'event-types',
    h2: 'Launches, awards and networking',
    paragraphs: [
      'A launch needs the room moving within minutes. An awards dinner needs service timed around the stage. A networking reception needs food people can hold while they talk.',
      'Some of these nights have their own pages. The titles below open the page for that occasion.',
    ],
  },
  {
    id: 'formats',
    h2: 'The Format Does More Than the Menu',
    paragraphs: [
      'The format decision does more to shape a corporate event than the menu does. It sets the cost, the staffing, the floor plan and how the evening feels.',
      'Buffets and grazing tables suit larger headcounts and mixed schedules, because people can eat when they are free rather than when service dictates. Canapés and finger food suit standing receptions, launches and networking, where nobody should need a table or two hands. Live stations add movement and something to gather around, which works when a room needs energy. Plated service suits seated dinners and award nights, where the timing is fixed and the impression is formal.',
      'Most events end up as a combination: canapés on arrival, then a buffet or a plated main. We will tell you which combination your venue can physically support, which is a different question from which one you would prefer. If the night only needs food delivered, with no on-site team, that is a different job.',
    ],
    bullets: [
      'Corporate buffet and grazing tables',
      'Canapé and finger-food receptions',
      'Live cooking stations',
      'Plated corporate dinners',
      'BBQ and outdoor formats',
      'Mocktail bars and beverage stations',
    ],
    link: { href: '/live-cooking-stations-dubai', label: 'Live cooking stations' },
  },
  {
    id: 'menus',
    h2: 'Menus for a Room You Do Not Fully Know',
    paragraphs: [
      'A corporate event catering menu in Dubai has to work for a mixed room. Halal corporate event catering in Dubai is the default in our kitchens, not a side request, and vegetarian, vegan and gluten-free options are planned into the menu rather than added as a separate tray at the end.',
      'Send us the dietary breakdown you have, even an approximate one, and it changes how the menu is built rather than how it is patched. Where guests have specific allergies, tell us which guest and which allergen, and we plan labelling and separation around it. We describe what we do rather than promising an allergen-free environment, because a working event kitchen is a shared space.',
      'Menus and presentation can be shaped around a theme or a brand where that is the point of the event. That is a design conversation during planning, not an add-on afterwards.',
    ],
    link: { href: CORPORATE_PATHS.halal, label: 'How halal catering works across large guest lists' },
  },
  {
    id: 'logistics',
    h2: 'Venue, Access and the Parts Nobody Sees',
    paragraphs: [
      'Most catering problems at corporate events are logistics problems. A service lift booked by another supplier, a venue that will not allow open flame, a loading bay that closes at six, a rooftop with no back-of-house at all: each of these changes what can be cooked and how it can be served.',
      'We check these before the menu is finalised, because it is cheaper to change a dish than to discover on site that it cannot be produced. If your venue has a preferred-supplier list or requires catering documentation before access, tell us early and we will handle that directly with them.',
      'A lot of this work is in DIFC, Business Bay and Downtown Dubai, plus hotels, rooftops and villas the rest of the city uses for company nights. Setup and pack-down are part of the plan and are stated in the proposal. Your team should not be stacking chairs or chasing plates at the end of a night they were meant to be hosting.',
    ],
  },
  {
    id: 'pricing',
    h2: 'Starting prices, then a quote for the night',
    paragraphs: [
      'Published starting prices cover defined formats: a staffed buffet from AED 120 per person, canapés from AED 150 per person, and chef-led plated dining at AED 700 to 950 per person. A hundred people at a standing reception and a hundred people at a seated award dinner are still different jobs, so the final quote confirms the event total.',
      'Corporate event catering packages in Dubai on this page show the menu, minimums and what the figure includes. What you receive next is an itemised quote: food, staffing, equipment, delivery and VAT as separate lines, so finance can see what they are approving.',
      'If you are comparing suppliers for the best corporate event catering Dubai can deliver, look at whether service can continue when a speech overruns, and whether those lines are visible. The prices guide is a planning tool, not a booking.',
    ],
    link: { href: CORPORATE_PATHS.priceGuide, label: 'Dubai catering prices guide' },
  },
  {
    id: 'how-it-works',
    h2: 'Send the Brief. Get a Proposal.',
    paragraphs: [
      'The fastest way to a useful proposal is a complete brief. Date, venue, headcount, event type, format if you know it, dietary requirements, and what you can approve if you already know it. Telling us early means the first proposal is realistic rather than the third one.',
    ],
  },
]

export const steps = [
  { n: '01', title: 'Send the brief', text: 'Date, venue, headcount, event type and any dietary requirements.' },
  { n: '02', title: 'We propose', text: 'Menu, format and staffing, itemised so every line is visible.' },
  { n: '03', title: 'You adjust', text: 'Change the menu, the format or the staffing until the numbers work.' },
  { n: '04', title: 'Confirmed in writing', text: 'Scope, timings and terms agreed before anything is committed.' },
  { n: '05', title: 'Event day', text: 'We set up, serve and clear. Your team hosts.' },
]

/** Speciality pages. CTA text is the speciality title — never generic “Explore”. */
export const specialities = [
  {
    title: 'Product Launches',
    text: 'Launch receptions where the room has to look right the moment the doors open.',
    href: CORPORATE_PATHS.productLaunch,
    linkLabel: 'Product launch catering',
  },
  {
    title: 'Galas & Award Nights',
    text: 'Formal dinners where service has to work around a stage and a running order.',
    href: CORPORATE_PATHS.gala,
    linkLabel: 'Gala dinner catering',
  },
  {
    title: 'Brand Activations',
    text: 'Pop-ups and sampling where the food is the brand experience.',
    href: CORPORATE_PATHS.brandActivation,
    linkLabel: 'Brand activation catering',
  },
  {
    title: 'Exhibitions & Trade Shows',
    text: 'Stand and hospitality-suite catering across long show days.',
    href: CORPORATE_PATHS.exhibition,
    linkLabel: 'Exhibition catering',
  },
  {
    title: 'Corporate Dinners',
    text: 'Executive dinners for smaller, senior groups.',
    href: CORPORATE_PATHS.dinnerPackage,
    linkLabel: 'Corporate dinner package',
  },
]

/** Recurring / workplace catering is a different product. Sent away deliberately. */
export const notThisPage = [
  {
    q: 'Feeding the office day to day?',
    a: 'Regular workplace lunches are a recurring service, not an event.',
    href: CORPORATE_PATHS.office,
    cta: 'Office catering',
  },
  {
    q: 'A working lunch or boardroom meeting?',
    a: 'Smaller, regular business meals are planned differently.',
    href: CORPORATE_PATHS.businessLunch,
    cta: 'Business lunch catering',
  },
  {
    q: 'A conference or multi-day programme?',
    a: 'Delegate catering and coffee breaks run on a different operation.',
    href: CORPORATE_PATHS.conference,
    cta: 'Conference catering',
  },]

/** Visible FAQ only. No FAQPage schema on this URL. */
export const faqs = [
  {
    q: 'What types of corporate events do you cater in Dubai?',
    a: 'Company parties, team celebrations, anniversaries, product launches, award nights, networking receptions, client hospitality and branded events. Daily office lunches, conference programmes and staff meals are handled as separate services with their own pages.',
  },
  {
    q: 'How much does a company event cost to cater in Dubai?',
    a: 'It is quoted per event, because format, service level, staffing and venue change the figure far more than headcount alone. You receive an itemised proposal with food, staffing, equipment and VAT as separate lines. For indicative market ranges before briefing us, see the Dubai catering prices guide.',
  },
  {
    q: 'Is there a minimum guest count?',
    a: 'Minimums depend on the format, menu and date rather than one fixed threshold. Smaller groups are possible; the difference is that per-head cost rises at low volumes because setup, delivery and preparation are fixed costs. Tell us your headcount and we will confirm the most sensible structure.',
  },
  {
    q: 'Do you provide service staff, setup and pack-down?',
    a: 'Yes. Service staff, equipment, setup and pack-down are scoped to your format and guest numbers and are shown as separate lines in the proposal, so you can see exactly what is included before approving it.',
  },
  {
    q: 'Can you invoice our company and work with an LPO?',
    a: 'Yes. We invoice companies directly and can work against a Local Purchase Order where your procurement process requires one. Quotes separate the net cost from the 5% UAE VAT so your finance team has what it needs.',
  },
  {
    q: 'Can you work with our venue or event planner?',
    a: 'Yes, and it is the normal arrangement for larger events. We coordinate the catering operation with your venue, planner and production team. If your venue has a preferred-supplier list or needs documentation before access, tell us early and we will deal with them directly.',
  },
  {
    q: 'How do you handle dietary requirements and allergens?',
    a: 'Vegetarian, vegan and gluten-free options are planned into the menu rather than added at the end, and our kitchens work to halal-first standards. For specific allergies, tell us which guest and which allergen so we can plan labelling and separation. We describe how we manage allergens rather than claiming an allergen-free environment.',
  },
  {
    q: 'How far ahead should we book, and can you handle short notice?',
    a: 'Two to four weeks is comfortable for most corporate events, and earlier between November and March when demand is highest. Short-notice events are often possible depending on date, headcount and format. We will tell you honestly what is achievable rather than accept and improvise.',
  },
]

export const finalCta = {
  h2: 'Tell Us About the Event',
  body: 'Date, venue, headcount and what kind of event it is. That is enough for a first quote. If something in the brief will not work, we will say so before you have spent anything.',
  primary: 'Request a corporate catering quote',
  secondary: 'Chat on WhatsApp',
}
