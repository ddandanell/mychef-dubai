import { CATERING_INQUIRY_HREF, CATERING_PATHS } from './cateringCluster'
import { cateringCostSummary, cateringPricingNotes, hubPriceRows } from './cateringPricing'
import { CANCELLATION_FAQ_ANSWER } from './bookingTerms'

export const cateringHero = {
  src: '/images/catering-dubai-hero.webp',
  alt: 'A private dinner about to begin on a Dubai villa terrace at night: a long table set, one chef plating, city lights across the water. Experience concept shown.',
  width: 2560,
  height: 1440,
} as const

export const jumpNav = [
  { href: '#pricing', label: 'Pricing' },
  { href: '#options', label: 'Catering options' },
  { href: '#styles', label: 'Styles' },
  { href: '#events', label: 'Events' },
  { href: '#christmas', label: 'Christmas' },
  { href: '#venues', label: 'Venues' },
  { href: '#examples', label: 'Examples' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Get a quote' },
] as const

export const priceRows = hubPriceRows()

export const pricingNotes = cateringPricingNotes()

export const serviceLevelChoices = [
  {
    label: 'Food delivery',
    href: CATERING_PATHS.dropOff,
    hint: 'Buffet, canapés, BBQ and event food delivered ready to serve.',
  },
  {
    label: 'Catering + service',
    href: `${CATERING_PATHS.overview}#options`,
    hint: 'Food plus chefs, waiters, bartenders, setup, equipment or live stations.',
  },
  {
    label: 'Full event catering',
    href: CATERING_INQUIRY_HREF,
    hint: 'Menu, staffing, service flow and equipment. Supplier coordination only if you ask for it.',
  },
] as const

/** The one sentence that keeps the two doors the same company. */
export const SAME_PARTNERS =
  "We work with licensed culinary partners for household chef plans and events. Chefs are selected for the requirements of each booking, and client feedback informs our ongoing assessment of their work."

export const quoteFactors =
  'Guest count, menu, service format, staffing, venue and kitchen access, equipment, and timing. 5% VAT is shown separately on the written proposal.'

export const scopeSteps = [
  {
    id: 'food-only',
    title: 'Food Only',
    body: "Prepared food delivered to your venue, ready for your own team to serve.",
    bestFor: 'Best for venues or households that already have staff, tables and service covered.',
    href: CATERING_PATHS.dropOff,
    linkLabel: 'Food delivery and drop-off catering',
  },
  {
    id: 'food-setup',
    title: 'Food + Setup',
    body: "Food delivery with setup of the agreed buffet or serving area. Your own team handles service during the event.",
    bestFor: 'Best for buffet-style gatherings where you need presentation but not a staffed event.',
  },
  {
    id: 'food-service',
    title: 'Food + Service',
    body: "Add the chefs, waiters, bartenders or kitchen assistants your service style requires.",
    bestFor: 'Best for events that need professional chefs, waiters, bartenders or kitchen support.',
  },
  {
    id: 'full-service',
    title: 'Full-Service Catering',
    body: "A coordinated catering service covering food, staff, equipment, setup and service timing.",
    bestFor: 'Best when one catering team should coordinate food, equipment, staff and service flow.',
  },
  {
    id: 'complete',
    title: 'Complete Event Support',
    body: "Optional support with tables, chairs, tableware, glassware, linen, flowers, bar setup and other suppliers. The proposal identifies the coordination you have requested and the responsibilities of each supplier.",
    bestFor: 'Best when you want extra suppliers coordinated around the catering, and you have asked for that work.',
  },
] as const

export const eventPathways = [
  {
    title: 'Wedding',
    body: 'The wedding meal: menu, tasting, chefs, service team, bar and the flow of food. We do not plan the ceremony, florals or the rest of the day unless you add optional coordination.',
    href: CATERING_PATHS.weddings,
    linkLabel: 'Wedding catering in Dubai',
    image: '/images/wedding-catering-dubai-hero.webp',
    imageAlt: 'Wedding dinner table in a Dubai villa: candlelight, set places, service in the background. Experience concept shown.',
  },
  {
    title: 'Corporate Event',
    body: 'Board meetings, launches, office events, networking, conferences and client dinners. Start with food delivery, or add chefs and waiters for a staffed sitting.',
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Corporate catering for Dubai events',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Corporate reception in Dubai: canapés and service staff in a polished venue. Experience concept shown.',
  },
  {
    title: 'Birthday or Celebration',
    body: 'A dinner at home, a villa party, anniversary, engagement or larger celebration. We build the food and service around how you want the room to feel, not a fixed package.',
    href: CATERING_PATHS.birthdays,
    linkLabel: 'Birthday catering in Dubai',
    image: '/images/birthday-catering-dubai-hero.webp',
    imageAlt: 'A birthday dinner in a Dubai home: guests at the table, chef finishing plates. Experience concept shown.',
  },
  {
    title: 'Private Event or Party',
    body: 'You have the guest list and the location. We build the food and service around it: small dinners, large parties, receptions, cocktail evenings and private gatherings.',
    href: CATERING_PATHS.privateEvents,
    linkLabel: 'Private party catering in Dubai',
    image: '/images/party-catering-dubai-hero.webp',
    imageAlt: 'A private party in a Dubai villa garden: standing guests, passed food, warm lighting. Experience concept shown.',
  },
] as const

export const venuePathways = [
  {
    title: 'Villas & Private Homes',
    body: 'Food only, private dinners, parties, birthdays or a wedding meal in a home you already have. We plan around the kitchen, access, guest count and space. We do not provide the house.',
    href: CATERING_PATHS.villas,
    linkLabel: 'Villa catering in Dubai',
    image: '/images/villa-catering-dubai-hero.webp',
    imageAlt: 'Villa catering in Dubai: outdoor table, kitchen access, service team at work. Experience concept shown.',
  },
  {
    title: 'Yachts',
    body: 'Yacht catering is food, chefs and onboard service on a yacht you charter. Loading, storage, galley limits and timing are different from a villa. We do not operate the boat.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht catering in Dubai',
    image: '/images/yacht-catering-dubai-hero.webp',
    imageAlt: 'Yacht catering in Dubai: canapés and service on deck at dusk. Experience concept shown.',
  },
] as const

export const jetPathway = {
  title: 'Private Jets',
  body: 'A tighter brief. Tell us the flight, passenger count, timing, food preferences and dietary requirements. We prepare and coordinate the food around the journey. Ask for it in the enquiry.',
} as const

export const officePathway = {
  title: 'Offices & Event Venues',
  body: 'Delivered meals or staffed catering in a building you already use. We adapt to access, timetable and guest flow. We do not hire the venue.',
  href: CATERING_PATHS.corporateEvents,
  secondaryHref: CATERING_PATHS.office,
  linkLabel: 'Corporate catering for Dubai events',
} as const

export const serviceStyles = [
  {
    title: 'Plated Dining',
    body: 'Individual courses cooked and served to seated guests. Use it when timing and table service matter.',
    href: '/buffet-vs-plated-dubai',
  },
  {
    title: 'Family Style',
    body: 'Food placed on the table for guests to share. More relaxed while still feeling considered.',
    href: '/buffet-vs-plated-dubai',
  },
  {
    title: 'Buffet',
    body: 'A staffed self-serve line for larger groups who want more choice, with heat held and trays replenished.',
    href: '/buffet-catering-dubai',
  },
  {
    title: 'BBQ & Live Cooking',
    body: 'Food prepared in front of guests with chefs working live at the event.',
    href: '/bbq-catering-dubai',
  },
  {
    title: 'Canapés & Cocktail Food',
    body: 'One-bite food for standing receptions, launches and arrivals. Passed, displayed, or both.',
    href: '/canape-catering-dubai',
  },
  {
    title: 'Finger food',
    body: "Easy-to-eat bites for adults and children, with portion counts and presentation matched to the length and style of your event.",
    href: '/canape-catering-dubai#finger-food',
  },
  {
    title: 'Grazing tables',
    body: 'A set display that fills the room visually with a smaller team than plated service.',
    href: '/grazing-table-dubai',
  },
  {
    title: 'Food Stations',
    body: 'Different food experiences positioned around the event. Useful for larger guest counts and events with movement.',
    href: '/live-cooking-stations-dubai',
  },
  {
    title: 'Breakfast & Brunch',
    body: 'Private mornings, company breakfasts, villa gatherings and daytime celebrations.',
    href: '/brunch-catering-dubai',
  },
  {
    title: 'Drop-Off',
    body: 'Prepared food delivered ready to serve. Nobody from the catering team stays in the room.',
    href: CATERING_PATHS.dropOff,
  },
] as const

export const eventLayers = [
  {
    name: 'Food',
    items: ['Menu', 'Ingredients', 'Preparation', 'Delivery'],
  },
  {
    name: 'Kitchen',
    items: ['Chefs', 'Assistants', 'Cooking equipment', 'Live stations'],
  },
  {
    name: 'Service',
    items: ['Waiters', 'Bartenders', 'Runners', 'Service coordination'],
  },
  {
    name: 'Table',
    items: ['Tables', 'Chairs', 'Tableware', 'Glassware', 'Linen'],
  },
  {
    name: 'Atmosphere',
    items: ['Optional hire: flowers', 'Candles', 'Styling', 'Decor'],
  },
  {
    name: 'Event',
    items: ['Optional coordination you choose', 'Music', 'Entertainment', 'Photography', 'Other suppliers'],
  },
] as const

export const startSteps = [
  'Tell us about the event: date, location, guest count, type of event, anything you already know.',
  'We build the structure: food, service style, team, equipment, and any extra coordination you have asked for.',
  'You review it. You can remove things, add things, change the menu, adjust the scope.',
  'Once the structure is agreed, a 50% deposit holds the date and the team, and we confirm the operational plan. For a wedding or a large event, the tasting happens here, quoted as its own line, before the menu is locked.',
  'On the day the team runs the food, service and clear-down. You stay with your guests.',
] as const

export const unsureLinks = [
  { prompt: 'I am planning a wedding', href: CATERING_PATHS.weddings, label: 'Wedding catering in Dubai' },
  { prompt: 'I am planning a company event', href: CATERING_PATHS.corporateEvents, label: 'Corporate catering for Dubai events' },
  { prompt: 'I am planning a birthday or celebration', href: CATERING_PATHS.birthdays, label: 'Birthday catering in Dubai' },
  { prompt: 'I am planning festive or holiday catering', href: '/festive-catering-dubai', label: 'Festive catering Dubai' },
  { prompt: 'I am hosting at a villa', href: CATERING_PATHS.villas, label: 'Villa catering in Dubai' },
  { prompt: 'I am hosting on a yacht', href: CATERING_PATHS.yachts, label: 'Yacht catering in Dubai' },
  { prompt: 'I only need food delivered', href: CATERING_PATHS.dropOff, label: 'Food delivery and drop-off catering' },
  { prompt: 'I am comparing caterers first', href: '/best-catering-companies-dubai', label: 'Compare catering companies in Dubai on published prices' },
  { prompt: 'I need help with most of the event', href: CATERING_INQUIRY_HREF, label: 'Request your catering quote' },
] as const

export const proofItems = [
  {
    title: 'How culinary partners are selected',
    claim: 'Vetted chef and culinary-partner network.',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks for a client, and the partner house employs them on a visa we have seen. On an event no chef is guaranteed by name: we match the night. That is the honest difference from the household service, where the whole point is that the same person comes back.',
    href: '/how-we-vet-our-chefs',
    linkLabel: 'How myCHEF quality standards work',
  },
  {
    title: 'What halal-first means here',
    claim: 'Halal-first menu planning and ingredient sourcing.',
    body: 'Halal ingredients are sourced by default for myCHEF catering menus in Dubai. Specific certification needs belong in the brief, not as an assumption after the fact.',
    href: '/halal-catering-dubai',
    linkLabel: 'Halal catering',
  },
  {
    title: 'Food safety and who cooks',
    claim: 'Food safety and licensed-partner operating standards.',
    body: 'Culinary preparation is performed by licensed culinary partners working to Dubai Municipality food-safety standards. Those partners employ the cooks, on visas we have asked to see; myCHEF takes the brief, matches the event, scores the work and pays. The booking is with us. You are not putting anyone on your payroll, and nobody invoices your villa personally.',
    href: '/how-it-works',
    linkLabel: 'How booking works',
  },
  {
    title: 'Staffing and event flow',
    claim: 'Staffing, equipment and event-flow coordination available when required.',
    body: "Choose the staff, equipment and live stations your event needs. Each element is included in the written proposal for your approval.",
    href: `${CATERING_PATHS.overview}#options`,
    linkLabel: 'Catering options and service layers',
  },
  {
    title: 'Written proposals',
    claim: 'Transparent written proposals before booking.',
    body: 'Guest count, menu, staffing, service format, venue access, timing and equipment are itemised. Minimums and 5% VAT are shown before you book.',
    href: `${CATERING_PATHS.overview}#pricing`,
    linkLabel: 'Catering pricing in Dubai',
  },
  {
    title: 'Booking protection',
    claim: 'Backup and cancellation terms are written into the booking.',
    body: "Your written booking sets out the applicable cancellation terms, backup arrangements and responsibilities.",
    href: '/booking-protection-insurance',
    linkLabel: 'Booking protection',
  },
] as const

/** Formats already published on /case-studies — no client names, no new claims. */
export const exampleEvents = [
  {
    title: 'Villa wedding reception, Emirates Hills',
    guests: '80 guests',
    venue: 'Private villa, Emirates Hills',
    setup: 'Roaming canapés, live grill, family-style sharing plates.',
    outcome: "An illustrative reception format combining roaming canapés, a live grill and generous sharing plates.",
    href: '/wedding-catering-dubai',
    linkLabel: 'Wedding catering in Dubai',
  },
  {
    title: 'Product launch, DIFC',
    guests: '60 guests',
    venue: 'Venue, DIFC',
    setup: 'Branded canapés, a live chef station, timed guest flow around the reveal.',
    outcome: "An illustrative launch format with service timed around the product reveal and live cooking for guests.",
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Corporate catering for Dubai events',
  },
  {
    title: 'Yacht birthday, Dubai Marina',
    guests: '25 guests',
    venue: 'Yacht, Dubai Marina',
    setup: 'Sunset canapés, BBQ, compact service planned around loading and storage.',
    outcome: "An illustrative yacht celebration with passed bites and grills, planned around onboard storage and service space.",
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht catering in Dubai',
  },
  {
    title: 'Corporate gala dinner, Downtown Dubai',
    guests: '200 guests',
    venue: 'Ballroom, Downtown Dubai',
    setup: 'Four-course plated service, timed courses, full front-of-house staffing.',
    outcome: "An illustrative gala format with timed courses, dietary planning and a full service team.",
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Corporate catering for Dubai events',
  },
  {
    title: 'Family gathering, Arabian Ranches',
    guests: '40 guests',
    venue: 'Villa, Arabian Ranches',
    setup: 'Buffet with Arabic grills, salads and a dessert table through the afternoon.',
    outcome: "An illustrative family celebration with an Arabic grill, buffet and dessert table.",
    href: CATERING_PATHS.privateEvents,
    linkLabel: 'Private party catering in Dubai',
  },
] as const

export const cuisinesLine = [
  'Mediterranean',
  'Italian',
  'French',
  'Japanese',
  'Asian',
  'Indian',
  'Middle Eastern',
  'International',
  'BBQ',
  'Plant-based',
  'Healthy dining',
] as const

/** Residual objections. Cost figures already published on this URL — not new claims. */
export const cateringFaqs = [
  {
    q: 'Do I need to know the format before I contact you?',
    a: 'No. Date, location, guest count and what you are organising is enough to begin. We start with the event and build the catering around it: food only, food plus service, or optional extra coordination if you ask for it.',
  },
  {
    q: 'Can you do food only, without staff or setup?',
    a: 'Yes. If your venue, household or team already has everything else covered, we can prepare the food and deliver it. See [drop-off catering](/drop-off-catering-dubai).',
  },
  {
    q: 'How is myCHEF different from a traditional catering company?',
    a: 'Many Dubai caterers present a package of menus, buffets and staff. myCHEF starts with the event you are actually planning. You add only the layers that make it work: food, kitchen, service, then table hire or extra suppliers if you choose them. Licensed culinary partners employ the cooks and do the cooking; we take the brief, match the event, score the work and carry the booking. You do not have to buy a complete event package, or a planner, to get the food right.',
  },
  {
    q: 'What is the minimum number of guests?',
    a: "Drop-off catering starts from 10 guests, and a standard event buffet from 20. For a smaller seated occasion, we can arrange chef-led private dining in your kitchen. Regular cooking for your household is available through our [private chef plans](/private-chef-dubai).",
  },
  {
    q: 'How much does catering cost in Dubai?',
    a: `It depends on guest count, menu, service style, staffing and venue, not on a single package price. ${cateringCostSummary()} Guest count and staff move it from there. Every quote is itemised in writing, with 5% VAT shown separately. From, typical range and calculator estimate are labelled on the [catering prices guide](/dubai-catering-prices-guide) and the [cost calculator](/catering-cost-calculator-dubai).`,
  },
  {
    q: 'Do you provide waiters, bartenders and tableware?',
    a: 'Yes, as layers you can add. Serving staff, bartenders, tableware, glassware and linen are sized to the guest count and service style. If your venue already provides staff or tables, we work around that.',
  },
  {
    q: 'Is the food halal?',
    a: 'Halal ingredients are sourced by default for myCHEF catering menus in Dubai. Mixed guest lists and specific certification requirements should be told to us when we build the menu. More detail on [halal catering](/halal-catering-dubai).',
  },
  {
    q: 'Who cooks? Does myCHEF employ the chefs?',
    a: 'Culinary preparation is performed by licensed culinary partners working to Dubai Municipality food-safety standards. Those partner houses employ the cooks on proper visas; myCHEF designs and coordinates the catering around your event, and the contract and the invoice are with myCHEF. You are not hiring a stranger off an app, and you are not employing anyone.',
  },
  {
    q: 'How far in advance should I book?',
    a: "For events under 50 guests, aim to enquire at least a week ahead; larger events typically need 2–4 weeks. Allow more time in peak season and around holidays. We typically reply within 15 minutes between 9am and 11pm Dubai time. Short-notice availability is confirmed individually.",
  },
  {
    q: 'Do you cater small parties of 10 to 20 guests at home?',
    a: "Yes. We plan birthdays, family lunches and private dinners for groups of 10 to 20, with the menu and service matched to your home. For a seated dinner, a chef can prepare the meal in your kitchen; buffets and passed canapés offer a more informal format.",
  },
  {
    q: 'Do you provide grazing tables, live stations, gala dinners and waiters?',
    a: 'All four, as layers on the same booking. [Grazing tables](/grazing-table-dubai) and [live cooking stations](/live-cooking-stations-dubai) suit standing events; a gala dinner is plated with a full service team; waiters, hosts and bartenders are added by guest count. Tell us the format and we size the team. You never pay for staff the format does not need.',
  },
  {
    q: 'How do I compare catering companies in Dubai?',
    a: "Compare the published menus, minimum orders, service inclusions and notice periods before requesting like-for-like proposals. Our [Dubai catering comparison](/best-catering-companies-dubai) brings these points together and explains the differences between formats.",
  },
  {
    q: 'What is the cancellation window?',
    a: `${CANCELLATION_FAQ_ANSWER} Recurring household chef plans follow their own written service agreement.`,
  },
  {
    q: 'What happens if the party runs late?',
    a: "Additional time is charged at the applicable hourly rate plus 50%, agreed before the team stays beyond the booked hours. Your proposal and booking terms set out how overtime is handled.",
  },
  {
    q: 'Is there a tasting?',
    a: "Tastings can be arranged for weddings and larger events before the menu is confirmed. Any tasting fee appears separately in the proposal. For smaller bookings, we can discuss whether a tasting would be useful for your menu.",
  },
  {
    q: 'Who is on the invoice, and when is the deposit due?',
    a: 'myCHEF invoices you, and myCHEF pays the partner house that employs the cooks and the service team. No guest, host or venue pays a chef directly. A 50% deposit holds the date and the team; the balance is due as agreed in writing before the event, with 5% VAT shown on its own line throughout.',
  },
  {
    q: 'I already have a planner, florist or rental company. Can you still help?',
    a: "Yes. We coordinate the catering with your existing planner and suppliers, agreeing access, setup and service timings so everyone understands their responsibilities.",
  },
] as const
