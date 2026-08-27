import { CATERING_PATHS } from './cateringCluster'

export const EVENTS_ROOT = '/events' as const

export const EVENTS_KEYWORD_LOCK = {
  primary: 'event catering dubai',
  title: 'Event Catering Dubai | Weddings, Parties & Corporate | myCHEF',
  description:
    'Book bespoke event catering Dubai for weddings, birthdays, private parties and corporate events. Menus, chefs, staffing, setup and cleanup—from AED 120 per person.',
} as const

export const EVENTS_WHATSAPP_NUMBER = '971551744849'
export const EVENTS_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'm planning an event and need catering. Date: __, Guests: __, Venue: __, Event type: __ (via mychef.ae/events)"
export const EVENTS_WHATSAPP_LINK = `https://wa.me/${EVENTS_WHATSAPP_NUMBER}?text=${encodeURIComponent(EVENTS_WHATSAPP_MESSAGE)}`

/** pages["/events"].internal_linking.siblings — render exactly. */
export const EVENTS_SIBLING_LINKS = [
  { href: '/wedding-catering-dubai', label: 'Wedding catering' },
  { href: '/birthday-catering-dubai', label: 'Birthday catering' },
  { href: '/private-party-catering-dubai', label: 'Private party catering' },
  { href: '/corporate-event-catering-dubai', label: 'Corporate event catering' },
] as const

export const eventsHero = {
  src: '/images/events-catering-dubai-hero.webp',
  alt: 'Event catering in Dubai — a long table set for a villa celebration, service in the background. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

export const eventsHeroCopy = {
  eyebrow: 'Event Catering Dubai',
  title: 'Event Catering Dubai for Weddings, Parties & Corporate Events',
  subtitle:
    'Event catering in Dubai for a birthday dinner, a wedding reception or a company event. Choose delivered food, a buffet from AED 120 per person, live stations, canapés or chef-led plated dining—with menus, chefs, staffing, setup and cleanup scoped to the night you are hosting.',
  priceLine: 'Event buffets from AED 120 per person.',
  replyLine: 'Share your date, venue and guest count. We typically reply within 15 minutes during business hours.',
} as const

export const siloIntro = {
  lead:
    'This page is the hub for the occasion — not a standing household chef and not the catering format catalogue. Private event catering for a named night opens on the pages below.',
  cateringLabel: 'Luxury catering in Dubai',
  chefLabel: 'private chef services in Dubai',
  diningHref: '/luxury-dining-experiences',
  diningLabel: 'private dining',
} as const

export const jumpNav = [
  { href: '#event-types', label: 'Event types' },
  { href: '#pricing', label: 'Formats & prices' },
  { href: '#menus', label: 'Menus' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#examples', label: 'Case studies' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

/** Six core cards. Link text is the commercial anchor. */
export const coreEvents = [
  {
    title: 'Birthday Catering',
    body: 'Intimate dinners through milestone celebrations. Custom menus, cake and service sized to the guest list.',
    href: '/birthday-catering-dubai',
    linkLabel: 'Birthday catering in Dubai',
    image: '/images/birthday-catering-dubai-hero.webp',
    imageAlt: 'A birthday dinner in a Dubai home. Experience concept shown.',
  },
  {
    title: 'Wedding Catering',
    body: 'Receptions, rehearsal dinners and next-day brunches. The wedding page owns the tasting, timing and guest-list brief.',
    href: '/wedding-catering-dubai',
    linkLabel: 'Wedding catering in Dubai',
    image: '/images/wedding-catering-dubai-hero.webp',
    imageAlt: 'Wedding dinner table in a Dubai villa. Experience concept shown.',
  },
  {
    title: 'Villa Party Catering',
    body: 'Food, setup and service planned around kitchen access, gates and outdoor space. Open the villa page for the operating detail.',
    href: '/villas-private-residences',
    linkLabel: 'Villa party catering in Dubai',
    image: '/images/villa-catering-dubai-hero.webp',
    imageAlt: 'Villa catering in Dubai — outdoor table and service team. Experience concept shown.',
  },
  {
    title: 'Corporate Events',
    body: 'Launches, client entertaining and team celebrations. One-off company events belong on the corporate-event page, not this hub.',
    href: '/corporate-event-catering-dubai',
    linkLabel: 'Corporate event catering in Dubai',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Corporate reception in Dubai. Experience concept shown.',
  },
  {
    title: 'Yacht Event Catering',
    body: 'Canapés, BBQ or plated service planned around loading, storage and galley limits.',
    href: '/yachts',
    linkLabel: 'Yacht event catering in Dubai',
    image: '/images/yacht-catering-dubai-hero.webp',
    imageAlt: 'Yacht catering in Dubai. Experience concept shown.',
  },
  {
    title: 'Cocktail Receptions',
    body: 'Passed canapés, standing food and bar service for networking and arrivals.',
    href: '/cocktail-party-catering-dubai',
    linkLabel: 'Cocktail reception catering in Dubai',
    image: '/images/cocktail-party-catering-dubai-hero.webp',
    imageAlt: 'Cocktail reception catering in Dubai. Experience concept shown.',
  },
] as const

/** Unique maintained destinations only — no seasonal cards that 301 to the same party page. */
export const otherEvents = [
  {
    title: 'Engagement party catering',
    href: '/engagement-catering-dubai',
    linkLabel: 'Engagement party catering in Dubai',
  },
  {
    title: 'Private party catering',
    href: '/private-party-catering-dubai',
    linkLabel: 'Private party catering in Dubai',
  },
  {
    title: 'Baby shower catering',
    href: '/baby-shower-catering-dubai',
    linkLabel: 'Baby shower catering in Dubai',
  },
  {
    title: 'Festive catering',
    href: '/festive-catering-dubai',
    linkLabel: 'Festive catering in Dubai',
  },
  {
    title: 'Desert dining',
    href: '/desert-dining-dubai',
    linkLabel: 'Desert dining in Dubai',
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
] as const

export const priceRows = [
  {
    format: 'Drop-off food and working lunches',
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
  'These are the published bands. The format decides most of the figure: the same guests cost different amounts dropped off, as a buffet, or plated.',
  'If you want a set menu band rather than a fully scoped brief, event catering packages start on the packages page. Comparing event caterers in Dubai is only useful when each quote itemises food, staff, setup, cleanup and 5% VAT.',
] as const

export const pricingNotes = [
  'Drop-off: 10 guests minimum and AED 900 minimum order.',
  'A standard event buffet starts from 20 guests.',
  'All figures are before 5% VAT, which is shown as its own line.',
  'Not every event meets the starting points. Guest count, menu, staffing, venue access, timing and equipment move the total.',
] as const

export const includedItems = [
  { title: 'Menu', body: 'Bespoke menu design around guest count, cuisine, dietary needs and how the room should move.' },
  { title: 'Chefs', body: 'Licensed culinary partners matched to the event. No chef is guaranteed by name.' },
  { title: 'Staff', body: 'Waiters, bartenders and runners sized to the format — added when the event needs them.' },
  { title: 'Equipment', body: 'Cooking equipment, holding, tableware and glassware as required by the brief.' },
  { title: 'Bar', body: 'Optional bar team and drinks service. Alcohol at a private residence is sourced by the host.' },
  { title: 'Setup and cleanup', body: 'Arrival, setup, service and clear-down are part of a staffed booking.' },
] as const

export const menuFormats = [
  {
    title: 'Drop-off',
    body: 'Food delivered ready to serve. No service team on site.',
    href: '/drop-off-catering-dubai',
    linkLabel: 'Drop-off catering in Dubai',
  },
  {
    title: 'Buffet',
    body: 'A maintained spread for mixed guest lists and larger rooms.',
    href: '/buffet-catering-dubai',
    linkLabel: 'Buffet catering in Dubai',
  },
  {
    title: 'Canapés',
    body: 'Standing food for arrivals, launches and cocktail hours.',
    href: '/canape-catering-dubai',
    linkLabel: 'Canapé catering in Dubai',
  },
  {
    title: 'Live stations',
    body: 'Cooking in front of guests. Useful when the room should move.',
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
  'Share the date, venue, guest count and what you are hosting.',
  'We send an itemised proposal: menu direction, format, staffing and the figures that move with them.',
  'You review it. Swap dishes, drop a layer, or add a station before anything is confirmed.',
  'On the day the team runs setup, service and clear-down. You stay with your guests.',
] as const

export const decisionModule = {
  h2: 'Not sure which service fits?',
  privateChefLead: 'Private chef:',
  privateChefBody: 'best for intimate, chef-led dining in your home, villa or yacht.',
  eventLead: 'Event catering:',
  eventBody: 'best for events of 10+ guests, buffet or plated formats, staffing and larger-scale service.',
  catering:
    'If the question is food-only through full event support, that sits on catering — not this occasion hub.',
  dining:
    'If the night is a tasting, a desert dinner or a two-cover moment, that is private dining.',
  chefHref: '/private-chef-dubai',
  chefLabel: 'Private chef services in Dubai',
  cateringHref: '/catering-dubai',
  cateringLabel: 'Luxury catering in Dubai',
  diningHref: '/luxury-dining-experiences',
  diningLabel: 'Private dining in Dubai',
} as const

export const proofItems = [
  {
    title: 'How culinary partners are selected',
    claim: 'Vetted chef and culinary-partner network.',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks for a client. No chef is guaranteed by name; we match the event.',
    href: '/how-we-vet-our-chefs',
    linkLabel: 'How myCHEF quality standards work',
  },
  {
    title: 'What halal-first means here',
    claim: 'Halal-first menu planning and ingredient sourcing.',
    body: 'Halal ingredients are sourced by default for myCHEF event menus in Dubai. Specific certification needs belong in the brief.',
    href: '/halal-catering-dubai',
    linkLabel: 'Halal catering',
  },
  {
    title: 'Food safety and who cooks',
    claim: 'Food safety and licensed-partner operating standards.',
    body: 'Culinary preparation is performed by independent, licensed culinary partners working to Dubai Municipality food-safety standards. myCHEF designs and coordinates the event catering. The client engages those professionals.',
    href: '/how-it-works',
    linkLabel: 'How booking works',
  },
  {
    title: 'Written proposals',
    claim: 'Transparent written proposals before booking.',
    body: 'Guest count, menu, staffing, format, venue access, timing and equipment are itemised. Minimums and 5% VAT are shown before you book.',
    href: `${EVENTS_ROOT}#pricing`,
    linkLabel: 'Event catering prices in Dubai',
  },
] as const

/** Published on /case-studies — no client names, no new claims. */
export const exampleEvents = [
  {
    title: 'Villa wedding reception, Emirates Hills',
    guests: '80 guests',
    venue: 'Private villa, Emirates Hills',
    setup: 'Arabic-Mediterranean fusion; roaming canapés, live grill and family-style sharing plates.',
    outcome: 'Guests kept moving through canapés and sharing plates; the dance floor stayed full.',
    href: '/wedding-catering-dubai',
    linkLabel: 'Wedding catering in Dubai',
  },
  {
    title: 'Yacht birthday celebration, Dubai Marina',
    guests: '25 guests',
    venue: 'Yacht, Dubai Marina',
    setup: 'Sunset canapés, BBQ and signature mocktails, planned around loading and storage.',
    outcome: 'Passed bites, grills and alcohol-free craft drinks served as the yacht cruised the marina.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht event catering in Dubai',
  },
  {
    title: 'Corporate gala dinner, Downtown Dubai',
    guests: '200 guests',
    venue: 'Ballroom, Downtown Dubai',
    setup: 'Four-course plated menu with sommelier service and full front-of-house staffing.',
    outcome: 'Seated dinner held timing, dietary coverage and service across a large room.',
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Corporate event catering in Dubai',
  },
  {
    title: 'Product launch, DIFC',
    guests: '60 guests',
    venue: 'Venue, DIFC',
    setup: 'Branded canapés and a live chef station, timed to the reveal.',
    outcome: 'Service timed to the product reveal, with interactive cooking in the room.',
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Corporate event catering in Dubai',
  },
  {
    title: 'Family Eid gathering, Arabian Ranches',
    guests: '40 guests',
    venue: 'Villa, Arabian Ranches',
    setup: 'Buffet with Arabic grills, salads and desserts.',
    outcome: 'Live Arabic grill, fresh breads and a dessert table carried the gathering from lunch into the evening.',
    href: '/private-party-catering-dubai',
    linkLabel: 'Private party catering in Dubai',
  },
] as const

export const eventFaqs = [
  {
    q: 'What is the minimum guest count for event catering?',
    a: 'Drop-off, platters and working-lunch formats start from 10 guests, with a minimum order of AED 900. A standard event buffet starts from 20 guests. Small event catering in Dubai for under around 10 guests is usually a [private chef](/private-chef-dubai) cooking in your kitchen, not a scaled-down buffet.',
  },
  {
    q: 'How much does event catering cost in Dubai?',
    a: 'Drop-off food starts from AED 90 per person. A standard event buffet starts from AED 120 per person. Premium buffet, BBQ, live stations and canapés start from AED 150. Chef-led plated dining is typically AED 700–950 per person. Guest count, menu, staffing, venue and 5% VAT move the total. Every proposal is itemised. See [event catering packages](/catering-packages-dubai), the [catering prices guide](/dubai-catering-prices-guide) or the event catering price guide 2026.',
  },
  {
    q: 'What is the lowest-cost format?',
    a: 'Drop-off: food and packaging, no service team on site. From AED 90 per person, 10 guests, AED 900 minimum order. A buffet from AED 120 adds presentation and a small team to set out and keep the spread stocked.',
  },
  {
    q: 'Can you cater at any venue in Dubai?',
    a: 'We coordinate catering at villas, apartments, yachts, offices, event spaces and outdoor sites across Dubai. Outdoor event catering in Dubai is planned around heat, access, power and whether the kitchen is indoors or on the water. Those constraints belong in the brief so the proposal is honest.',
  },
  {
    q: 'Do you provide staff for large events?',
    a: 'Yes, as a layer. Chefs, waiters, bartenders and runners are sized to guest count and service style. If the venue already provides staff, we work around that.',
  },
  {
    q: 'Is the food halal?',
    a: 'Halal ingredients are sourced by default for myCHEF event menus in Dubai. Mixed guest lists and specific certification requirements should be told to us when we build the menu. More on [halal catering](/halal-catering-dubai).',
  },
  {
    q: 'Who cooks — does myCHEF employ the chefs?',
    a: 'Culinary preparation is performed by independent, licensed culinary partners who work to Dubai Municipality food-safety standards. myCHEF designs and coordinates the event catering. The client engages those professionals.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For events under 50 guests, a week ahead is typical. Larger events: 2–4 weeks. Peak season (November–March) and holidays book faster. Short notice is often possible — message the date. We typically reply within 15 minutes during business hours.',
  },
] as const
