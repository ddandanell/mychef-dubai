/**
 * Copy for /engagement-catering-dubai
 *
 * KEYWORD LOCK: pages["/engagement-catering-dubai"] — primary
 * "engagement party catering dubai".
 *
 * This page owns two families, a toast, and a pre-wedding gathering.
 * It does not own the proposal (two people), the wedding, a two-cover
 * dinner, or an anniversary with friends — those leave.
 *
 * Prices match the published bands on /events and /catering-dubai.
 */

export const ENGAGEMENT_ROOT = '/engagement-catering-dubai' as const

export const ENGAGEMENT_KEYWORD_LOCK = {
  primary: 'engagement party catering dubai',
  title: 'Engagement Party Catering Dubai | Two Families & a Toast | myCHEF',
  description:
    'Engagement party catering Dubai for two families and a toast. Drop-off from AED 90, buffet from AED 120. Menu, staff, setup and clear-down.',
} as const

export const ENGAGEMENT_WHATSAPP_NUMBER = '971551744849'
export const ENGAGEMENT_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'm planning engagement party catering. Date: __, Guests: __, Venue: __, Families / toast: __ (via mychef.ae/engagement-catering-dubai)"
export const ENGAGEMENT_WHATSAPP_LINK = `https://wa.me/${ENGAGEMENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(ENGAGEMENT_WHATSAPP_MESSAGE)}`

/** pages["/engagement-catering-dubai"].internal_linking.siblings — render exactly. */
export const ENGAGEMENT_SIBLING_LINKS = [
  { href: '/wedding-catering-dubai', label: 'Wedding catering' },
  { href: '/proposal-dinner-dubai', label: 'Proposal dinner' },
  { href: '/private-party-catering-dubai', label: 'Private party catering' },
] as const

export const engagementHero = {
  src: '/images/engagement-catering-dubai-hero.webp',
  alt: 'Two families at an engagement gathering in a Dubai home — standing guests, a toast, warm lighting. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

export const engagementHeroCopy = {
  eyebrow: 'Private events',
  title: 'Engagement party catering Dubai for two families and a toast',
  subtitle:
    'Engagement party catering Dubai for the night two families share a house and a toast — not a proposal at a table for two, and not the wedding.',
  priceLine: 'Event buffets from AED 120 per person.',
  replyLine: 'Share the date, address, guest count and who is in the room. We typically reply within 15 minutes during business hours.',
} as const

export const siloIntro = {
  lead:
    'This page is the gathering after the ask and before the marriage. The proposal, the wedding, a dinner for two, and an anniversary with friends each have their own page. Drop-off from AED 90 per person, a buffet from AED 120, live stations, or a chef plating at the table — menu, chefs, staff, setup and clear-down, scoped to the room.',
  eventsHref: '/events',
  eventsLabel: 'Event catering in Dubai',
  partyHref: '/private-party-catering-dubai',
  partyLabel: 'Private party catering',
  eventsNote: 'is the occasion hub — use it when the night is still unnamed.',
  partyNote: 'owns the unnamed house night, including an anniversary with friends.',
} as const

export const jumpNav = [
  { href: '#who-leaves', label: 'Who this is for' },
  { href: '#pricing', label: 'Formats & prices' },
  { href: '#menus', label: 'How food is served' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

export const whoLeaves = [
  {
    title: 'The proposal is not this page',
    body: 'One person, one table, a ring. That night belongs on the proposal dinner page — or a romantic dinner if you have not opened that URL yet.',
    href: '/proposal-dinner-dubai',
    linkLabel: 'Proposal dinner in Dubai',
  },
  {
    title: 'The wedding is not this page',
    body: 'Once you are planning the marriage — tastings, timings, a guest list that is already a seating chart — that is wedding catering.',
    href: '/wedding-catering-dubai',
    linkLabel: 'Wedding catering in Dubai',
  },
  {
    title: 'Two covers is not this page',
    body: 'If it is just the two of you and a chef, start with a romantic dinner. A private chef cooking in your kitchen is the better product when everyone sits at one table.',
    href: '/romantic-dinner-dubai',
    linkLabel: 'Romantic dinner in Dubai',
    secondaryHref: '/private-chef-dubai',
    secondaryLabel: 'Private chef services in Dubai',
  },
  {
    title: 'An anniversary with friends is not this page',
    body: 'Friends at the table for a year already lived sits on private party catering, not here. Two-cover anniversaries go to romantic dinner.',
    href: '/private-party-catering-dubai#anniversary',
    linkLabel: 'Anniversary with friends — private party catering',
  },
] as const

export const whatItIs = {
  h2: 'What engagement party catering Dubai actually covers',
  paragraphs: [
    'The job is a room with two families in it, a toast that has to land, and a kitchen that may not be built for either. Engagement catering Dubai is that night — not a restaurant booking and not a standing household chef.',
    'A small engagement still belongs here when one stove cannot plate the room. Six people at one table is an engagement dinner a private chef can run. Parents, siblings and friends standing in the garden need a team.',
    'Halal ingredients are sourced by default for myCHEF engagement menus in Dubai. Mixed lists and any certification you actually need belong in the brief, not as an assumption after the fact.',
  ],
} as const

export const priceRows = [
  {
    format: 'Drop-off food',
    what: 'Food delivered ready to serve',
    staff: 'None',
    price: 'From AED 90 per person',
    href: '/drop-off-catering-dubai',
  },
  {
    format: 'Standard event buffet',
    what: 'Presentation plus a maintained spread',
    staff: '1–2',
    price: 'From AED 120 per person',
    href: '/buffet-catering-dubai',
  },
  {
    format: 'Premium buffet, BBQ, live stations or canapés',
    what: 'Cooking or passed food in front of guests',
    staff: '2–4',
    price: 'From AED 150 per person',
    href: '/live-cooking-stations-dubai',
  },
  {
    format: 'Chef-led plated dining',
    what: 'Courses cooked and served at the table',
    staff: '3 and above',
    price: 'AED 700–950 per person',
    href: '/buffet-vs-plated-dubai',
  },
] as const

export const pricingIntro = [
  'These are the published bands. Format decides most of an engagement party catering cost per person in Dubai: the same guests cost different amounts dropped off, as a buffet, or plated. Engagement catering packages in Dubai are not a named SKU — the written proposal is the package, with menu, staffing, equipment and 5% VAT as separate lines.',
] as const

export const pricingNotes = [
  'Drop-off: 10 guests minimum and AED 900 minimum order.',
  'A standard event buffet starts from 20 guests.',
  'All figures are before 5% VAT, which is shown as its own line.',
  'Not every gathering meets the starting points. Guest count, menu, staffing, venue access, timing and equipment move the total.',
] as const

export const includedItems = [
  {
    title: 'Menu',
    body: 'Written around who is eating — both families, dietary notes, whether people sit or stand, and what the kitchen can actually hold.',
  },
  {
    title: 'Chefs',
    body: 'Licensed culinary partners matched to the night. No chef is guaranteed by name.',
  },
  {
    title: 'Staff',
    body: 'Waiters, bartenders and runners sized to the format — added when the room needs them.',
  },
  {
    title: 'Setup and cleanup',
    body: 'Arrival, setup, service and clear-down are part of a staffed booking. You should still be able to use the house in the morning.',
  },
] as const

export const menuFormats = [
  {
    title: 'Drop-off',
    body: 'Food delivered ready to serve. No service team on site. You host; you clear.',
    href: '/drop-off-catering-dubai',
    linkLabel: 'Drop-off catering in Dubai',
  },
  {
    title: 'Buffet',
    body: 'A maintained spread for mixed guest lists and rooms that do not all sit at once.',
    href: '/buffet-catering-dubai',
    linkLabel: 'Buffet catering in Dubai',
  },
  {
    title: 'Canapés and standing food',
    body: 'Passed or tray service when people are standing for a toast. Finger food is planned on the canapé page, not as a second URL.',
    href: '/canape-catering-dubai',
    linkLabel: 'Canapé catering in Dubai',
  },
  {
    title: 'Plated dining',
    body: 'Courses served to seated guests. Best when timing and table service matter more than movement.',
    href: '/buffet-vs-plated-dubai',
    linkLabel: 'Compare catering formats',
  },
] as const

export const gallery = [
  {
    src: '/images/engagement-catering-dubai-plated.webp',
    alt: 'Plated courses at an engagement dinner in a Dubai home. Experience concept shown.',
  },
  {
    src: '/images/engagement-catering-dubai-canapes.webp',
    alt: 'Passed bites on a tray at a Dubai engagement gathering. Experience concept shown.',
  },
  {
    src: '/images/engagement-catering-dubai-dessert.webp',
    alt: 'Dessert service after an engagement toast in Dubai. Experience concept shown.',
  },
  {
    src: '/images/engagement-catering-dubai-villa.webp',
    alt: 'A villa set for an engagement gathering in Dubai. Experience concept shown.',
  },
] as const

export const startSteps = [
  'Share the date, address, guest count and who is in the room — both families, a toast, or a small engagement dinner.',
  'We send an itemised proposal: menu direction, format, staffing and the figures that move with them.',
  'You review it. Swap dishes, drop a layer, or add a station before anything is confirmed.',
  'On the night the team runs setup, service and clear-down. You stay with your guests.',
] as const

export const engagementFaqs = [
  {
    q: 'How is engagement party catering priced in Dubai?',
    a: 'Drop-off food starts from AED 90 per person. A standard event buffet starts from AED 120. Premium buffet, live stations and canapés start from AED 150. Chef-led plated dining is typically AED 700–950 per person. Guest count, menu, staffing, access and 5% VAT move the total. Every proposal is itemised. See [catering packages](/catering-packages-dubai).',
  },
  {
    q: 'What is the minimum guest count?',
    a: 'Drop-off starts from 10 guests, with a minimum order of AED 900. A standard event buffet starts from 20 guests. Under around 10 guests, a [private chef](/private-chef-dubai) cooking in your kitchen is usually the better product.',
  },
  {
    q: 'Is this the same as a proposal dinner?',
    a: 'No. A proposal is two people and the ask. That sits on [proposal dinner](/proposal-dinner-dubai). This page is two families, a toast, and a gathering before the wedding.',
  },
  {
    q: 'Do you cater a small engagement?',
    a: 'Yes, when it is still a gathering — not a table for two. A small engagement dinner at one table is usually a [romantic dinner](/romantic-dinner-dubai) or a [private chef](/private-chef-dubai). If parents and friends are in the house, this page is the right brief.',
  },
  {
    q: 'Is the food halal?',
    a: 'Halal ingredients are sourced by default for myCHEF engagement menus in Dubai. Mixed guest lists and specific certification requirements should be in the brief. More on [halal catering](/halal-catering-dubai).',
  },
  {
    q: 'How is this different from wedding catering?',
    a: 'Wedding catering owns the marriage — tastings, timings, a guest list that is already a seating chart. This page is the night before that work starts. Open [wedding catering](/wedding-catering-dubai) when you are planning the wedding itself.',
  },
] as const
