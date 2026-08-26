/**
 * Copy for /private-party-catering-dubai
 *
 * KEYWORD LOCK: pages["/private-party-catering-dubai"] — primary "private party catering dubai".
 * This page owns the house night. It does not duplicate /events (occasion hub) or
 * /catering-dubai (format catalogue). Seasonal URLs that 301 here are use-cases,
 * not cards back to this same path.
 *
 * Prices match the published bands on /events and /catering-dubai. Do not invent a
 * party-only ladder.
 */

import { CATERING_PATHS } from './cateringCluster'

export const PRIVATE_PARTY_ROOT = '/private-party-catering-dubai' as const

export const PRIVATE_PARTY_KEYWORD_LOCK = {
  primary: 'private party catering dubai',
  title: 'Private Party Catering Dubai | myCHEF',
  description:
    'Private Party Catering Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
} as const

export const PRIVATE_PARTY_WHATSAPP_NUMBER = '971551744849'
export const PRIVATE_PARTY_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'm planning private party catering. Date: __, Guests: __, Venue: __, What we are hosting: __ (via mychef.ae/private-party-catering-dubai)"
export const PRIVATE_PARTY_WHATSAPP_LINK = `https://wa.me/${PRIVATE_PARTY_WHATSAPP_NUMBER}?text=${encodeURIComponent(PRIVATE_PARTY_WHATSAPP_MESSAGE)}`

/** pages["/private-party-catering-dubai"].internal_linking.siblings — render exactly. */
export const PRIVATE_PARTY_SIBLING_LINKS = [
  { href: '/blog/dinner-party-menu-ideas-dubai', label: 'Dinner party menu ideas' },
  { href: '/villa-catering-ideas-dubai', label: 'Villa catering ideas' },
] as const

export const partyHero = {
  src: '/images/party-catering-dubai-hero.webp',
  alt: 'A private party in a Dubai villa garden — standing guests, passed food, warm lighting. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

export const partyHeroCopy = {
  eyebrow: 'Private events',
  title: 'Private Party Catering Dubai',
  subtitle:
    'Private party catering Dubai for a house, villa, garden or apartment — the night you are actually hosting, not a wedding catalogue and not a company event. Drop-off, a buffet from AED 120 per person, live stations, or a chef plating at the table. Menu, chefs, staff, setup and clear-down, scoped to the room.',
  priceLine: 'Event buffets from AED 120 per person.',
  replyLine: 'Share your date, address and guest count. We typically reply within 15 minutes during business hours.',
} as const

export const siloIntro = {
  lead:
    'This page is the house night: friends in, family in, a date on the calendar. Wedding, birthday and company-event searches belong on those pages.',
  eventsHref: '/events',
  eventsLabel: 'Event catering in Dubai',
  cateringHref: '/catering-dubai',
  cateringLabel: 'Luxury catering in Dubai',
  eventsNote: 'is the occasion hub — use it when the night is still unnamed.',
  cateringNote: 'is the format catalogue: food-only through full service.',
} as const

export const jumpNav = [
  { href: '#occasions', label: 'What you are hosting' },
  { href: '#pricing', label: 'Formats & prices' },
  { href: '#menus', label: 'How food is served' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#examples', label: 'Case studies' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

/**
 * Occasions that 301 here. Mention as use-cases. Do not card them back to this URL.
 */
export const hostedHere = [
  'Engagements and anniversaries',
  'Bachelor and bachelorette nights',
  'Pool, terrace and beach gatherings',
  'Housewarmings',
  'Graduations, farewells and reunions',
  'Picnics and garden days',
  'Mother’s Day and Father’s Day',
  'Easter and Halloween at home',
] as const

export const hostedHereIntro =
  'The occasion name changes. The job does not: a guest list, a kitchen that may be small, a clock, and a house you still have to live in tomorrow. Those nights stay on this page. They are not separate products.'

export const uniqueCardsIntro =
  'If the night already has its own page — a cocktail reception, a baby shower, a BBQ — that page owns the brief. What follows are those pages, not another copy of this one.'

/** Unique remaining URLs only — one card each. No Halloween/Easter cards to this same path. */
export const uniqueOccasionCards = [
  {
    title: 'Cocktail party catering',
    body: 'Standing food, a bar and a room that has to keep moving. The cocktail page owns the drinks brief.',
    href: '/cocktail-party-catering-dubai',
    linkLabel: 'Cocktail party catering in Dubai',
    image: '/images/cocktail-party-catering-dubai-hero.webp',
    imageAlt: 'Cocktail reception catering in Dubai. Experience concept shown.',
  },
  {
    title: 'Baby shower catering',
    body: 'Daytime food, a table people gather around, usually no alcohol. Planned on its own page.',
    href: '/baby-shower-catering-dubai',
    linkLabel: 'Baby shower catering in Dubai',
    image: '/images/celebration-catering-dubai-hero.webp',
    imageAlt: 'A daytime celebration table in a Dubai home. Experience concept shown.',
  },
  {
    title: 'BBQ catering',
    body: 'Grill in the garden or on the terrace, planned around heat, smoke and how long people stay outside.',
    href: '/bbq-catering-dubai',
    linkLabel: 'BBQ catering in Dubai',
    image: '/images/bbq-catering-dubai-hero.webp',
    imageAlt: 'Live grill catering at a Dubai villa. Experience concept shown.',
  },
  {
    title: 'Brunch catering',
    body: 'A late morning or afternoon table. Different pacing than an evening party.',
    href: '/brunch-catering-dubai',
    linkLabel: 'Brunch catering in Dubai',
    image: '/images/brunch-catering-dubai-hero.webp',
    imageAlt: 'Brunch table in a Dubai home. Experience concept shown.',
  },
  {
    title: 'Villa party catering',
    body: 'Gates, kitchen access, outdoor power and where the team unloads. The villa page owns the operating detail.',
    href: CATERING_PATHS.villas,
    linkLabel: 'Villa catering in Dubai',
    image: '/images/villa-catering-dubai-hero.webp',
    imageAlt: 'Villa catering in Dubai — outdoor table and service team. Experience concept shown.',
  },
  {
    title: 'Yacht party catering',
    body: 'Canapés, BBQ or plated service planned around loading, storage and galley limits.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht catering in Dubai',
    image: '/images/yacht-catering-dubai-hero.webp',
    imageAlt: 'Yacht catering in Dubai. Experience concept shown.',
  },
] as const

export const otherUniqueOccasions = [
  {
    title: 'Birthday catering',
    href: '/birthday-catering-dubai',
    linkLabel: 'Birthday catering in Dubai',
  },
  {
    title: 'Wedding catering',
    href: '/wedding-catering-dubai',
    linkLabel: 'Wedding catering in Dubai',
  },
  {
    title: 'Corporate event catering',
    href: '/corporate-event-catering-dubai',
    linkLabel: 'Corporate event catering in Dubai',
  },
  {
    title: 'Kids birthday catering',
    href: '/birthday-catering-dubai',
    linkLabel: 'Kids birthday catering in Dubai',
  },
  {
    title: 'Festive catering',
    href: '/festive-catering-dubai',
    linkLabel: 'Festive catering in Dubai',
  },
  {
    title: 'Afternoon tea',
    href: '/afternoon-tea-catering-dubai',
    linkLabel: 'Afternoon tea catering in Dubai',
  },
  {
    title: 'Diwali catering',
    href: '/diwali-catering-dubai',
    linkLabel: 'Diwali catering in Dubai',
  },
  {
    title: 'Eid catering',
    href: '/eid-catering-dubai',
    linkLabel: 'Eid catering in Dubai',
  },
] as const

/** Published event/catering bands. Not a party-only invention. */
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
  'These are the published bands. Format decides most of a private party catering Dubai price: the same guests cost different amounts dropped off, as a buffet, or plated.',
  'A house party catering Dubai night uses the same figures as any other staffed event. Guest count, menu, staffing, access and 5% VAT still move the total. If you want a set menu band rather than a scoped brief, start on catering packages.',
] as const

export const pricingNotes = [
  'Drop-off: 10 guests minimum and AED 900 minimum order.',
  'A standard event buffet starts from 20 guests.',
  'All figures are before 5% VAT, which is shown as its own line.',
  'Not every party meets the starting points. Guest count, menu, staffing, venue access, timing and equipment move the total.',
] as const

export const includedItems = [
  {
    title: 'Menu',
    body: 'Written around who is eating, whether they sit or stand, dietary needs, and what the kitchen can actually hold.',
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
    title: 'Equipment',
    body: 'Cooking equipment, holding, tableware and glassware as the brief requires. A villa kitchen is rarely enough on its own.',
  },
  {
    title: 'Bar',
    body: 'Optional bar team and drinks service. Alcohol at a private residence is sourced by the host.',
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
    title: 'BBQ',
    body: 'Grill as the centre of the evening, planned for heat, smoke and outdoor holding.',
    href: '/bbq-catering-dubai',
    linkLabel: 'BBQ catering in Dubai',
  },
  {
    title: 'Live stations',
    body: 'Cooking in front of guests. Useful when the room should move rather than sit.',
    href: '/live-cooking-stations-dubai',
    linkLabel: 'Live cooking stations in Dubai',
  },
  {
    title: 'Grazing tables',
    body: 'A set display that fills the room visually with a smaller team than plated service.',
    href: '/grazing-table-dubai',
    linkLabel: 'Grazing tables in Dubai',
  },
  {
    title: 'Plated dining',
    body: 'Courses served to seated guests. Best when timing and table service matter.',
    href: '/buffet-vs-plated-dubai',
    linkLabel: 'Compare catering formats',
  },
] as const

export const startSteps = [
  'Share the date, address, guest count and what you are hosting.',
  'We send an itemised proposal: menu direction, format, staffing and the figures that move with them.',
  'You review it. Swap dishes, drop a layer, or add a station before anything is confirmed.',
  'On the night the team runs setup, service and clear-down. You stay with your guests.',
] as const

export const decisionModule = {
  h2: 'A chef at the table, or a team in the house',
  privateChefLead: 'Private chef:',
  privateChefBody:
    'best when everyone sits at one table and dinner is the event — cooked in your kitchen, at the pace of the conversation.',
  partyLead: 'Private party catering:',
  partyBody:
    'best when the guest list outgrows one stove, people stand, or the kitchen cannot plate the room at once. That is this page.',
  events:
    'If you are still choosing between a wedding, a birthday, a company event or a house party, start on the events hub.',
  catering: 'If the question is food-only through full service, that sits on catering, not this occasion page.',
  chefHref: '/private-chef-dubai',
  chefLabel: 'Private chef services in Dubai',
  eventsHref: '/events',
  eventsLabel: 'Event catering in Dubai',
  cateringHref: '/catering-dubai',
  cateringLabel: 'Luxury catering in Dubai',
} as const

export const proofItems = [
  {
    title: 'How culinary partners are selected',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks in a client’s home. No chef is guaranteed by name; we match the night.',
    href: '/how-we-vet-our-chefs',
    linkLabel: 'How myCHEF quality standards work',
  },
  {
    title: 'What halal-first means here',
    body: 'Halal ingredients are sourced by default for myCHEF party menus in Dubai. Specific certification needs belong in the brief.',
    href: '/halal-catering-dubai',
    linkLabel: 'Halal catering',
  },
  {
    title: 'Food safety and who cooks',
    body: 'Culinary preparation is performed by independent, licensed culinary partners working to Dubai Municipality food-safety standards. myCHEF designs and coordinates the catering. The client engages those professionals.',
    href: '/how-it-works',
    linkLabel: 'How booking works',
  },
  {
    title: 'Written proposals',
    body: 'Guest count, menu, staffing, format, access, timing and equipment are itemised. Minimums and 5% VAT are shown before you book.',
    href: `${PRIVATE_PARTY_ROOT}#pricing`,
    linkLabel: 'See the published format bands',
  },
] as const

/** Published on /case-studies — no client names, no new claims. Do not link case-study slugs. */
export const exampleEvents = [
  {
    title: 'Family Eid gathering, Arabian Ranches',
    guests: '40 guests',
    venue: 'Villa, Arabian Ranches',
    setup: 'Buffet with Arabic grills, salads and desserts.',
    outcome: 'Live Arabic grill, fresh breads and a dessert table carried the gathering from lunch into the evening.',
    href: '/eid-catering-dubai',
    linkLabel: 'Eid catering in Dubai',
  },
  {
    title: 'Intimate anniversary dinner, Palm Jumeirah',
    guests: '8 guests',
    venue: 'Private villa, Palm Jumeirah',
    setup: 'Seven-course tasting with a private chef — a table this small is usually a chef night, not a staffed party.',
    outcome: 'Paired courses and discreet service for a milestone at home.',
    href: '/private-chef-dubai',
    linkLabel: 'Private chef services in Dubai',
  },
  {
    title: 'Yacht birthday celebration, Dubai Marina',
    guests: '25 guests',
    venue: 'Yacht, Dubai Marina',
    setup: 'Sunset canapés, BBQ and signature mocktails, planned around loading and storage.',
    outcome: 'Passed bites, grills and alcohol-free craft drinks served as the yacht cruised the marina.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht catering in Dubai',
  },
] as const

export const partyFaqs = [
  {
    q: 'Is this the same as event catering or luxury catering?',
    a: 'No. This page is the house night — friends, family, an engagement, a pool gathering, a housewarming. [Event catering in Dubai](/events) is the occasion hub. [Luxury catering in Dubai](/catering-dubai) is food-only through full service. Birthday, wedding and company events have their own pages.',
  },
  {
    q: 'How is a house party priced?',
    a: 'Drop-off food starts from AED 90 per person. A standard event buffet starts from AED 120 per person. Premium buffet, BBQ, live stations and canapés start from AED 150. Chef-led plated dining is typically AED 700–950 per person. Guest count, menu, staffing, access and 5% VAT move the total. Every proposal is itemised. See [catering packages](/catering-packages-dubai) or the [catering prices guide](/dubai-catering-prices-guide).',
  },
  {
    q: 'What is the minimum guest count?',
    a: 'Drop-off starts from 10 guests, with a minimum order of AED 900. A standard event buffet starts from 20 guests. Under around 10 guests, a [private chef](/private-chef-dubai) cooking in your kitchen is usually the better product.',
  },
  {
    q: 'Can you cater at a villa, apartment, garden or pool?',
    a: 'Yes. Home and villa parties are the core of this page. Outdoor service is planned around heat, access, power and whether the kitchen is indoors. Those constraints belong in the brief so the proposal is honest. Operating detail for villas sits on [villa catering](/villas-private-residences).',
  },
  {
    q: 'Do you bring a bar? Who supplies alcohol?',
    a: 'A bar team can be part of a staffed booking. In a private residence, alcohol is sourced by the host from a licensed retailer. We run mixing, glassware and service around what you provide. A non-alcoholic drinks list is a normal brief.',
  },
  {
    q: 'Is the food halal?',
    a: 'Halal ingredients are sourced by default for myCHEF party menus in Dubai. Mixed guest lists and specific certification requirements should be in the brief. More on [halal catering](/halal-catering-dubai).',
  },
  {
    q: 'Who cooks — does myCHEF employ the chefs?',
    a: 'Culinary preparation is performed by independent, licensed culinary partners who work to Dubai Municipality food-safety standards. myCHEF designs and coordinates the catering. The client engages those professionals. No chef is guaranteed by name.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For parties under 50 guests, a week ahead is typical. Larger nights: 2–4 weeks. Peak season (November–March) and holidays book faster. Short notice is often possible — message the date. We typically reply within 15 minutes during business hours.',
  },
  {
    q: 'How much does private party catering Dubai price come to?',
    a: 'There is no single number for private party catering Dubai price: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'How much does private party catering cost per person Dubai come to?',
    a: 'There is no single number for private party catering cost per person Dubai: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'What makes myCHEF a strong choice for best private party catering Dubai?',
    a: 'One team owns the whole event — menu, shopping, cooking on site, service and clear-down — so nothing falls between suppliers. The chefs are vetted and matched to the occasion, ingredients are charged at cost with no markup, and every quote is itemised.',
  },
  {
    q: 'Do you offer private party catering packages Dubai?',
    a: 'Yes. We start from set formats and adjust them to your event rather than selling a fixed box: menu length, service style, staff and equipment are chosen for the day. Starting points begin at AED 120 per person. Ask for the format closest to what you are planning and we shape it from there.',
  },
  {
    q: 'Do you cater private party catering menu Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'Can you handle halal private party catering Dubai?',
    a: 'Yes. Dietary needs are planned into the menu from the first draft, not bolted on: dishes are labelled, cross-contact is managed in the kitchen we set up on site, and the chef is briefed on every guest requirement before the day.',
  },
  {
    q: 'Do you provide house party catering Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Dubai Marina, Downtown Dubai this is our most common booking.',
  },
  {
    q: 'How much does private party catering Dubai price come to?',
    a: 'There is no single number for private party catering Dubai price: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'How much does private party catering cost per person Dubai come to?',
    a: 'There is no single number for private party catering cost per person Dubai: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per person. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'What makes myCHEF a strong choice for best private party catering Dubai?',
    a: 'One team owns the whole event — menu, shopping, cooking on site, service and clear-down — so nothing falls between suppliers. The chefs are vetted and matched to the occasion, ingredients are charged at cost with no markup, and every quote is itemised.',
  },
  {
    q: 'Do you offer private party catering packages Dubai?',
    a: 'Yes. We start from set formats and adjust them to your event rather than selling a fixed box: menu length, service style, staff and equipment are chosen for the day. Starting points begin at AED 120 per person. Ask for the format closest to what you are planning and we shape it from there.',
  },
  {
    q: 'Do you cater private party catering menu Dubai?',
    a: 'Yes. We plan the menu around the occasion and the room — plated, buffet, canapés or live stations — bring chefs, service staff and equipment, and handle the clear-down. Share the date, guest count and venue and you get a proposal with the format we would recommend and why.',
  },
  {
    q: 'Can you handle halal private party catering Dubai?',
    a: 'Yes. Dietary needs are planned into the menu from the first draft, not bolted on: dishes are labelled, cross-contact is managed in the kitchen we set up on site, and the chef is briefed on every guest requirement before the day.',
  },
  {
    q: 'Do you provide house party catering Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Dubai Marina, Downtown Dubai this is our most common booking.',
  },
] as const
