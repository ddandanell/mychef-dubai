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
    'Corporate Event Catering Dubai for company parties, launches and award nights. Menu, chefs, staff, setup and pack-down — itemised before you confirm.',
} as const

/** STANDARD internal_linking.siblings — render exactly. */
export const siblingLinks = [
  { href: '/gala-dinner-catering-dubai', label: 'Gala dinner catering' },
  { href: '/corporate', label: 'Corporate dining' },
  { href: '/blog/corporate-event-catering-ideas-dubai', label: 'Corporate event catering ideas' },
  { href: '/live-cooking-stations-dubai', label: 'Live cooking stations' },
] as const

/** STANDARD locations sample (three on-page). */
export const areaLinks = [
  { href: '/locations/difc', label: 'DIFC' },
  { href: '/locations/business-bay', label: 'Business Bay' },
  { href: '/locations/downtown-dubai', label: 'Downtown Dubai' },
] as const

export const hero = {
  eyebrow: 'Corporate Event Catering',
  h1: 'Corporate Event Catering Dubai for Company Parties and Award Nights',
  subtitle:
    'Corporate event catering Dubai is the one-off company night — parties, launches, award dinners and networking — with menu, chefs, service staff, setup and pack-down handled, and an itemised proposal before anything is confirmed.',
  primaryCta: 'Request a proposal',
  secondaryCta: 'Chat on WhatsApp',
  utility: 'Offices · Venues · Villas · Rooftops · Across Dubai',
}

/** Section 2 — scope. The single most important section: it prevents mismatched enquiries. */
export const scope: Block = {
  id: 'what-we-handle',
  h2: 'What myCHEF Handles, and What Stays With You',
  paragraphs: [
    'For a corporate event, myCHEF runs the catering operation: menu design, sourcing, cooking, service staff, equipment, setup, service on the night and pack-down afterwards. One person owns it, and you get an itemised proposal showing what each part costs before you approve anything.',
    'We coordinate that operation with your venue, your event planner and your production team. We are not an event production company — we do not supply AV, staging, entertainment or decor, and we would rather say so than let you discover it two days before the event. Where you already have those suppliers, we work to their schedule.',
    'That split matters most on the day. Catering has its own timeline running underneath your run sheet: when food arrives, when it can be held, when service starts and how long a room takes to clear. Our job is to make that timeline fit yours without you having to manage it.',
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
    h2: 'Most Company Events Are Parties, Not Galas',
    paragraphs: [
      'Most enquiries are not award nights. They are a company wanting to do something decent for its own people — an annual party, a team celebration after a hard quarter, a leaving do for someone who has been there nine years.',
      'These are easier to get wrong than formal events, because the bar is social rather than ceremonial. Food that arrives cold, a queue that never clears, or nothing left for the people who came late are what the team remembers. Format matters more than menu here: how many serving points, where they sit in the room, and whether people can eat standing with a drink in the other hand.',
      'We plan staff parties around the room and the headcount first, then the food. That is why the same menu can work for sixty people in an office and fail for sixty people in a venue with one doorway.',
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
    h2: 'Different Events Fail in Different Ways',
    paragraphs: [
      'A launch is judged on first impression and needs the room moving within minutes. An awards dinner is judged on timing, because service has to work around a stage. A networking reception is judged on whether people could actually hold a drink, eat, and shake a hand.',
      'Some of these have their own pages with the operational detail that belongs there. The titles below go to the page that specialises in that night, rather than repeating a summary here.',
    ],
  },
  {
    id: 'formats',
    h2: 'The Format Does More Than the Menu',
    paragraphs: [
      'The format decision does more to shape a corporate event than the menu does. It sets the cost, the staffing, the floor plan and how the evening feels.',
      'Buffets and grazing tables suit larger headcounts and mixed schedules, because people can eat when they are free rather than when service dictates. Canapés and finger food suit standing receptions, launches and networking, where nobody should need a table or two hands. Live stations add movement and something to gather around, which works when a room needs energy. Plated service suits seated dinners and award nights, where the timing is fixed and the impression is formal.',
      'Most events end up as a combination — canapés on arrival, then a buffet or a plated main. We will tell you which combination your venue can physically support, which is a different question from which one you would prefer. If the night only needs food delivered, with no on-site team, that is a different job.',
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
      'Send us the dietary breakdown you have — even an approximate one — and it changes how the menu is built rather than how it is patched. Where guests have specific allergies, tell us which guest and which allergen, and we plan labelling and separation around it. We describe what we do rather than promising an allergen-free environment, because a working event kitchen is a shared space.',
      'Menus and presentation can be shaped around a theme or a brand where that is the point of the event. That is a design conversation during planning, not an add-on afterwards.',
    ],
    link: { href: CORPORATE_PATHS.halal, label: 'How halal catering works across large guest lists' },
  },
  {
    id: 'logistics',
    h2: 'Venue, Access and the Parts Nobody Sees',
    paragraphs: [
      'Most catering problems at corporate events are logistics problems. A service lift booked by another supplier, a venue that will not allow open flame, a loading bay that closes at six, a rooftop with no back-of-house at all — each of these changes what can be cooked and how it can be served.',
      'We check these before the menu is finalised, because it is cheaper to change a dish than to discover on site that it cannot be produced. If your venue has a preferred-supplier list or requires catering documentation before access, tell us early and we will handle that directly with them.',
      'A lot of this work is in DIFC, Business Bay and Downtown Dubai, plus hotels, rooftops and villas the rest of the city uses for company nights. Setup and pack-down are part of the plan and are stated in the proposal. Your team should not be stacking chairs or chasing plates at the end of a night they were meant to be hosting.',
    ],
  },
  {
    id: 'pricing',
    h2: 'Corporate Event Catering Dubai Is Quoted Per Event',
    paragraphs: [
      'The same headcount produces very different figures depending on format, service level, staffing and venue. A hundred people at a standing reception and a hundred people at a seated award dinner are not the same job, so there is no printed rate that is honest for both.',
      'There is no single corporate event catering Dubai price on this page. What you receive is an itemised proposal: food, staffing, equipment, delivery and VAT as separate lines, so finance can see what they are approving and you can compare it fairly against another quote. Asking for a cost per person before the format is set is how two quotes become incomparable. If a quote from anyone hides those lines, it is not a better number — it is just less complete.',
      'We do not sell a printed set of corporate event catering packages in Dubai. The proposal is the package, built for that night. If you are comparing suppliers for the best corporate event catering Dubai can actually deliver, look at whether service can hold when a speech overruns, and whether those lines are visible. For indicative market ranges before you brief us, the catering price guide is the honest starting point. It is a planning tool, not a quotation.',
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
  },
  {
    q: 'A full calendar of events each year?',
    a: 'A standing arrangement removes the briefing from every booking.',
    href: CORPORATE_PATHS.retainer,
    cta: 'Corporate catering contract',
  },
]

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
    a: 'Two to four weeks is comfortable for most corporate events, and earlier between November and March when demand is highest. Short-notice events are often possible depending on date, headcount and format — we will tell you honestly what is achievable rather than accept and improvise.',
  },
]

export const finalCta = {
  h2: 'Tell Us About the Event',
  body: 'Date, venue, headcount and what kind of event it is. That is enough for a first proposal — and if something in the brief will not work, we will say so before you have spent anything.',
  primary: 'Request a proposal',
  secondary: 'Chat on WhatsApp',
}
