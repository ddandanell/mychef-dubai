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
import { cateringPricingNotes, hubPriceRows } from './cateringPricing'

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
  { href: '/villa-catering-ideas-dubai', label: 'Villa catering ideas' },
] as const

export const partyHero = {
  src: '/images/party-catering-dubai-hero.webp',
  alt: 'A private party in a Dubai villa garden: standing guests, passed food, warm lighting. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

export const partyHeroCopy = {
  eyebrow: 'Private events',
  title: 'Private Party Catering Dubai',
  subtitle:
    "Private party catering in Dubai for birthdays, anniversaries, family gatherings and evenings with friends. Choose delivered food, buffets from AED 120 per person, live stations or a private plated menu, with chefs, service and setup tailored to your home and guest list.",
  priceLine: 'Event buffets from AED 120 per person.',
  replyLine: 'Share your date, address and guest count. We typically reply within 15 minutes during business hours.',
} as const

export const siloIntro = {
  lead:
    'Bring friends and family together with a menu that suits your home and the way you like to host. From housewarmings and poolside gatherings to anniversaries and relaxed evenings, we plan the food, service and timing around your guest list.',
  eventsHref: '/events',
  eventsLabel: 'Event catering in Dubai',
  cateringHref: '/catering-dubai',
  cateringLabel: 'Luxury catering in Dubai',
  eventsNote: 'offers ideas for celebrations, receptions and gatherings of every size.',
  cateringNote: 'covers food delivery, staffed buffets, live stations and full service.',
} as const

export const jumpNav = [
  { href: '#occasions', label: 'What you are hosting' },
  { href: '#anniversary', label: 'Anniversaries' },
  { href: '#graduation', label: 'Graduations' },
  { href: '#pricing', label: 'Formats & prices' },
  { href: '#menus', label: 'How food is served' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#examples', label: 'Party ideas' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Quote' },
] as const

/**
 * Occasions that 301 here. Mention as use-cases. Do not card them back to this URL.
 */
export const hostedHere = [
  'Anniversaries with friends at the table',
  'Bachelor and bachelorette nights',
  'Pool, terrace and beach gatherings',
  'Housewarmings',
  'Graduations, farewells and reunions',
  'Picnics and garden days',
  'Mother’s Day and Father’s Day',
  'Easter and Halloween at home',
] as const

export const hostedHereIntro =
  'Every gathering has its own rhythm. We plan around your guest list, available kitchen, serving space and preferred schedule, with clear arrangements for setup and clearance so the home remains comfortable throughout the occasion.'

export const uniqueCardsIntro =
  'Explore tailored menus and service ideas for engagement parties, cocktail receptions, baby showers and BBQ gatherings.'

export const anniversaryBlock = {
  h2: 'An anniversary with friends at the table',
  paragraphs: [
    'An anniversary with friends deserves food and service that let everyone enjoy the moment. Share the guest list, menu preferences and timing of any toast so the meal fits naturally around the celebration.',
    "The menu and service are tailored to the occasion, whether you are celebrating a milestone or simply bringing friends and family together.",
  ],
  romanticHref: '/romantic-dinner-dubai',
  romanticLabel: 'Romantic dinner in Dubai',
} as const

export const graduationBlock = {
  h2: 'Graduation is a daytime mixed-ages table',
  paragraphs: [
    'A graduation at home is usually lunch or a late afternoon, not an evening party. Grandparents, siblings and classmates eat at different speeds. The brief is daytime food, earlier service, and a menu that does not assume a night out.',
    'Choose a relaxed service format that gives guests time to gather, eat and celebrate together.',
  ],
} as const

/** Unique remaining URLs only — one card each. No Halloween/Easter cards to this same path. */
export const uniqueOccasionCards = [
  {
    title: 'Engagement party catering',
    body: 'Two families, a toast, a night that is not yet a wedding. Open engagement catering for that brief.',
    href: '/engagement-catering-dubai',
    linkLabel: 'Engagement party catering in Dubai',
    image: '/images/engagement-catering-dubai-hero.webp',
    imageAlt: 'An engagement gathering in a Dubai home. Experience concept shown.',
  },
  {
    title: 'Cocktail party catering',
    body: 'Standing food, a bar and a room that has to keep moving. Open cocktail catering for the drinks brief.',
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
    body: 'Gates, kitchen access, outdoor power and where the team unloads. Open villa catering for the operating detail.',
    href: CATERING_PATHS.villas,
    linkLabel: 'Villa catering in Dubai',
    image: '/images/villa-catering-dubai-hero.webp',
    imageAlt: 'Villa catering in Dubai: outdoor table and service team. Experience concept shown.',
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
export const priceRows = hubPriceRows()

export const pricingIntro = [
  'These are the published bands. Format decides most of a private party catering Dubai price: the same guests cost different amounts dropped off, as a buffet, or plated.',
  'A house party catering Dubai night uses the same figures as any other staffed event. Guest count, menu, staffing, access and 5% VAT still move the total. If you want a set menu band rather than a scoped brief, start on catering packages.',
] as const

export const pricingNotes = cateringPricingNotes()

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
    body: 'Waiters, bartenders and runners sized to the format, added when the room needs them.',
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
    'best when everyone sits at one table and dinner is the event: cooked in your kitchen, at the pace of the conversation.',
  partyLead: 'Private party catering:',
  partyBody:
    'well suited to a larger guest list, a standing reception or a home where food is best prepared and served through a coordinated catering setup.',
  events:
    'Explore our event catering options for menus and service tailored to weddings, birthdays, company events and house parties.',
  catering: 'Compare catering formats from delivered food to a fully staffed event, then choose the support that suits your gathering.',
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
    outcome: "An illustrative Eid gathering with Arabic grills, fresh bread and a dessert table.",
    href: '/eid-catering-dubai',
    linkLabel: 'Eid catering in Dubai',
  },
  {
    title: 'Intimate anniversary dinner, Palm Jumeirah',
    guests: '8 guests',
    venue: 'Private villa, Palm Jumeirah',
    setup: 'Seven-course tasting with a private chef. A table this small is usually a chef night, not a staffed party.',
    outcome: 'Paired courses and discreet service for a milestone at home.',
    href: '/private-chef-dubai',
    linkLabel: 'Private chef services in Dubai',
  },
  {
    title: 'Yacht birthday celebration, Dubai Marina',
    guests: '25 guests',
    venue: 'Yacht, Dubai Marina',
    setup: 'Sunset canapés, BBQ and signature mocktails, planned around loading and storage.',
    outcome: "An illustrative yacht menu combining passed bites, grilled dishes and alcohol-free drinks.",
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht catering in Dubai',
  },
] as const

export const partyFaqs = [
  {
    q: 'What kinds of private parties can you cater?',
    a: 'We plan menus for gatherings with friends and family, including anniversaries, graduations, pool parties and housewarmings. For an engagement celebration, explore [engagement party catering](/engagement-catering-dubai). You can also compare [event catering options](/events) and the full range of [catering services](/catering-dubai).',
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
    q: 'Can you cater an anniversary party at home?',
    a: "Yes. We can plan an anniversary dinner with friends, with a menu and service suited to your gathering. For a private celebration for two, explore our [romantic dinner options](/romantic-dinner-dubai).",
  },
  {
    q: 'Do you cater graduations?',
    a: 'Yes. A graduation can be planned as a relaxed daytime gathering or an evening celebration. We shape the menu, portions and service around the age range, guest count and schedule, including time for photographs or speeches.',
  },
  {
    q: 'Is the food halal?',
    a: 'Halal ingredients are sourced by default for myCHEF party menus in Dubai. Mixed guest lists and specific certification requirements should be in the brief. More on [halal catering](/halal-catering-dubai).',
  },
] as const
