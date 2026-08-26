import { CATERING_INQUIRY_HREF, CATERING_PATHS } from './cateringCluster'

export const cateringHero = {
  src: '/images/catering-dubai-hero.webp',
  alt: 'A private dinner about to begin on a Dubai villa terrace at night — a long table set, one chef plating, city lights across the water. Experience concept shown.',
  width: 2560,
  height: 1440,
} as const

export const jumpNav = [
  { href: '#pricing', label: 'Pricing' },
  { href: '#options', label: 'Catering options' },
  { href: '#events', label: 'Events' },
  { href: '#venues', label: 'Venues' },
  { href: '#examples', label: 'Examples' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Get a quote' },
] as const

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
    hint: 'Menu, staffing, service flow, equipment and supplier coordination for complex events.',
  },
] as const

export const quoteFactors =
  'Guest count, menu, service format, staffing, venue and kitchen access, equipment, and timing. 5% VAT is shown separately on the written proposal.'

export const scopeSteps = [
  {
    id: 'food-only',
    title: 'Food Only',
    body: 'We prepare the food and deliver it to you. Ideal when you already have the venue, staff and setup handled.',
    bestFor: 'Best for venues or households that already have staff, tables and service covered.',
    href: CATERING_PATHS.dropOff,
    linkLabel: 'Food delivery and drop-off catering',
  },
  {
    id: 'food-setup',
    title: 'Food + Setup',
    body: 'We deliver the food and help arrange the serving area, buffet or presentation. You handle the event from there.',
    bestFor: 'Best for buffet-style gatherings where you need presentation but not a staffed event.',
  },
  {
    id: 'food-service',
    title: 'Food + Service',
    body: 'Add the people needed to run it properly: chefs, waiters, bartenders, service staff, kitchen assistants.',
    bestFor: 'Best for events that need professional chefs, waiters, bartenders or kitchen support.',
  },
  {
    id: 'full-service',
    title: 'Full-Service Catering',
    body: 'We coordinate the food, team, equipment, setup and service flow around your event.',
    bestFor: 'Best when one catering team should coordinate food, equipment, staff and service flow.',
  },
  {
    id: 'complete',
    title: 'Complete Event Support',
    body: 'Need more? We can also help coordinate tables and chairs, tableware, glassware, linen, flowers, bar setup, entertainment, photography, décor and event coordination. You choose how far we go.',
    bestFor: 'Best for larger or more complex events that need suppliers beyond food and service.',
  },
] as const

export const eventPathways = [
  {
    title: 'Wedding',
    body: 'From an intimate wedding dinner to a larger reception. We can help with the menu, tasting, chefs, service team, bar, tables, equipment and the flow of the meal.',
    href: CATERING_PATHS.weddings,
    linkLabel: 'Wedding catering in Dubai',
    image: '/images/wedding-catering-dubai-hero.webp',
    imageAlt: 'Wedding dinner table in a Dubai villa — candlelight, set places, service in the background. Experience concept shown.',
  },
  {
    title: 'Corporate Event',
    body: 'Board meetings, launches, office events, networking, conferences and client dinners. Start with food delivery or build a fully serviced corporate event.',
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Corporate catering for Dubai events',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Corporate reception in Dubai — canapés and service staff in a polished venue. Experience concept shown.',
  },
  {
    title: 'Birthday or Celebration',
    body: 'A dinner at home, a villa party, anniversary, engagement or larger celebration. We build the food and service around the atmosphere you want rather than forcing the event into a fixed package.',
    href: CATERING_PATHS.birthdays,
    linkLabel: 'Birthday catering in Dubai',
    image: '/images/birthday-catering-dubai-hero.webp',
    imageAlt: 'A birthday dinner in a Dubai home — guests at the table, chef finishing plates. Experience concept shown.',
  },
  {
    title: 'Private Event or Party',
    body: 'You have the guest list and the location. We help build everything else around it. Small dinners, large parties, receptions, cocktail evenings and private gatherings.',
    href: CATERING_PATHS.privateEvents,
    linkLabel: 'Private party catering in Dubai',
    image: '/images/party-catering-dubai-hero.webp',
    imageAlt: 'A private party in a Dubai villa garden — standing guests, passed food, warm lighting. Experience concept shown.',
  },
] as const

export const venuePathways = [
  {
    title: 'Villas & Private Homes',
    body: 'Food only, private dinners, parties, birthdays, weddings or complete villa events. We plan around the kitchen, access, guest count and space available.',
    href: CATERING_PATHS.villas,
    linkLabel: 'Villa catering in Dubai',
    image: '/images/villa-catering-dubai-hero.webp',
    imageAlt: 'Villa catering in Dubai — outdoor table, kitchen access, service team at work. Experience concept shown.',
  },
  {
    title: 'Yachts',
    body: 'Yacht catering requires a different approach to timing, delivery, storage, setup and service. We can arrange anything from prepared food and canapés to staffed yacht events.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht catering in Dubai',
    image: '/images/yacht-catering-dubai-hero.webp',
    imageAlt: 'Yacht catering in Dubai — canapés and service on deck at dusk. Experience concept shown.',
  },
] as const

export const jetPathway = {
  title: 'Private Jets',
  body: 'A much more focused service. Tell us the flight, passenger count, timing, food preferences and dietary requirements. We prepare and coordinate the food around the journey.',
  href: CATERING_PATHS.privateJet,
  linkLabel: 'Private Jet Catering',
} as const

export const officePathway = {
  title: 'Offices & Event Venues',
  body: 'From delivered meals to full event catering. We adapt the service to your building, venue, timetable and guest flow.',
  href: CATERING_PATHS.corporateEvents,
  secondaryHref: CATERING_PATHS.office,
  linkLabel: 'Corporate catering for Dubai events',
} as const

export const serviceStyles = [
  {
    title: 'Plated Dining',
    body: 'Individual courses served to seated guests. Best when timing, presentation and table service are important.',
    href: '/buffet-vs-plated-dubai',
  },
  {
    title: 'Family Style',
    body: 'Food placed on the table for guests to share. More relaxed while still feeling considered.',
    href: '/buffet-vs-plated-dubai',
  },
  {
    title: 'Buffet',
    body: 'A practical format for larger groups and events where guests should have more choice.',
    href: '/buffet-catering-dubai',
  },
  {
    title: 'BBQ & Live Cooking',
    body: 'Food prepared in front of guests with chefs working live at the event.',
    href: '/bbq-catering-dubai',
  },
  {
    title: 'Canapés & Cocktail Food',
    body: 'Designed for standing events, receptions, launches and social occasions.',
    href: '/canape-catering-dubai',
  },
  {
    title: 'Food Stations',
    body: 'Different food experiences positioned around the event. Useful for larger guest counts and events with movement.',
    href: '/live-cooking-stations-dubai',
  },
  {
    title: 'Breakfast & Brunch',
    body: 'For private mornings, corporate events, villa gatherings and daytime celebrations.',
    href: '/brunch-catering-dubai',
  },
  {
    title: 'Drop-Off',
    body: 'Prepared food delivered ready for your event without a full service team.',
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
    items: ['Flowers', 'Candles', 'Styling', 'Decor'],
  },
  {
    name: 'Event',
    items: ['Music', 'Entertainment', 'Photography', 'Additional suppliers', 'Event coordination'],
  },
] as const

export const startSteps = [
  'Tell us about the event: date, location, guest count, type of event, anything you already know.',
  'We build the structure: food, service style, team, equipment, any additional support.',
  'You review it. You can remove things, add things, change the menu, adjust the scope.',
  'Once the structure is agreed, we confirm the team and operational plan.',
  'On the day, everyone knows what they are responsible for. You can spend more time with your guests.',
] as const

export const unsureLinks = [
  { prompt: 'I am planning a wedding', href: CATERING_PATHS.weddings, label: 'Wedding catering in Dubai' },
  { prompt: 'I am planning a company event', href: CATERING_PATHS.corporateEvents, label: 'Corporate catering for Dubai events' },
  { prompt: 'I am planning a birthday or celebration', href: CATERING_PATHS.birthdays, label: 'Birthday catering in Dubai' },
  { prompt: 'I am hosting at a villa', href: CATERING_PATHS.villas, label: 'Villa catering in Dubai' },
  { prompt: 'I am hosting on a yacht', href: CATERING_PATHS.yachts, label: 'Yacht catering in Dubai' },
  { prompt: 'I need food for a private jet', href: CATERING_PATHS.privateJet, label: 'Private jet catering' },
  { prompt: 'I only need food delivered', href: CATERING_PATHS.dropOff, label: 'Food delivery and drop-off catering' },
  { prompt: 'I am comparing caterers first', href: '/best-catering-companies-dubai', label: 'Compare catering companies in Dubai on published prices' },
  { prompt: 'I need help with most of the event', href: CATERING_INQUIRY_HREF, label: 'Get a tailored catering quote' },
] as const

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
    body: 'Halal ingredients are sourced by default for myCHEF catering menus in Dubai. Specific certification needs belong in the brief, not as an assumption after the fact.',
    href: '/halal-catering-dubai',
    linkLabel: 'Halal catering',
  },
  {
    title: 'Food safety and who cooks',
    claim: 'Food safety and licensed-partner operating standards.',
    body: 'Culinary preparation is performed by independent, licensed culinary partners working to Dubai Municipality food-safety standards. myCHEF designs and coordinates the catering. The client engages those professionals.',
    href: '/how-it-works',
    linkLabel: 'How booking works',
  },
  {
    title: 'Staffing and event flow',
    claim: 'Staffing, equipment and event-flow coordination available when required.',
    body: 'Chefs, waiters, bartenders, setup, equipment and live stations are added when the event needs them. You do not buy a full event package to get the food right.',
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
    body: 'Read the policy before you assume what is covered. The written booking is the contract, not a slogan on this page.',
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
    outcome: 'Guests kept moving through canapés and sharing plates; the dance floor stayed full.',
    href: '/wedding-catering-dubai',
    linkLabel: 'Wedding catering in Dubai',
  },
  {
    title: 'Product launch, DIFC',
    guests: '60 guests',
    venue: 'Venue, DIFC',
    setup: 'Branded canapés, a live chef station, timed guest flow around the reveal.',
    outcome: 'Service timed to the product reveal, with interactive cooking in the room.',
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Corporate catering for Dubai events',
  },
  {
    title: 'Yacht birthday, Dubai Marina',
    guests: '25 guests',
    venue: 'Yacht, Dubai Marina',
    setup: 'Sunset canapés, BBQ, compact service planned around loading and storage.',
    outcome: 'Passed bites and grills served as the yacht cruised the marina.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht catering in Dubai',
  },
  {
    title: 'Corporate gala dinner, Downtown Dubai',
    guests: '200 guests',
    venue: 'Ballroom, Downtown Dubai',
    setup: 'Four-course plated service, timed courses, full front-of-house staffing.',
    outcome: 'Seated dinner held timing, dietary coverage and service across a large room.',
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Corporate catering for Dubai events',
  },
  {
    title: 'Family gathering, Arabian Ranches',
    guests: '40 guests',
    venue: 'Villa, Arabian Ranches',
    setup: 'Buffet with Arabic grills, salads and a dessert table through the afternoon.',
    outcome: 'Live grill and dessert table carried the gathering from lunch into the evening.',
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
    a: 'No. Date, location, guest count and what you are organising is enough to begin. We start with the event and build the catering around it — food only, food plus service, or fuller support.',
  },
  {
    q: 'Can you do food only, without staff or setup?',
    a: 'Yes. If your venue, household or team already has everything else covered, we can prepare the food and deliver it. See [drop-off catering](/drop-off-catering-dubai).',
  },
  {
    q: 'How is myCHEF different from a traditional catering company?',
    a: 'Many Dubai caterers present a package of menus, buffets and staff. myCHEF starts with the event you are actually planning. You add only the layers that make it work — food, kitchen, service, table, atmosphere, event support. Independent licensed culinary partners cook; we coordinate the structure. You do not have to buy a complete event package to get the food right.',
  },
  {
    q: 'What is the minimum number of guests?',
    a: 'We coordinate catering from about 10 guests upward. Under around 20 guests, a [private chef](/private-chef-dubai) cooking in your kitchen is often the better fit for a dinner. Tell us the headcount and we will say which option makes sense.',
  },
  {
    q: 'How much does catering cost in Dubai?',
    a: 'It depends on guest count, menu, service style, staffing and venue — not on a single package price. On this site, buffet and drop-off catering is shown from AED 90 per person, and a chef cooking on site from AED 700 per person; guest count and staff move it from there. Every quote is itemised in writing, with 5% VAT shown separately. See the [catering prices guide](/dubai-catering-prices-guide) or the [cost calculator](/catering-cost-calculator-dubai).',
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
    q: 'Who cooks — does myCHEF employ the chefs?',
    a: 'Culinary preparation is performed by independent, licensed culinary partners who work to Dubai Municipality food-safety standards. myCHEF designs and coordinates the catering around your event. The client engages those professionals.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For events under 50 guests, a week ahead is typical. Larger events: 2–4 weeks. Peak season (November–March) and holidays book faster. Short notice is often possible — message the date via [contact](/contact). We typically reply within 15 minutes during business hours.',
  },
  {
    q: 'Do you cater small parties of 10 to 20 guests at home?',
    a: 'Yes. Small party catering in Dubai is most of what we do: home catering for a birthday, a dinner for twelve on a villa terrace, a family lunch with one chef and one server. Under about 20 guests you can also book a [private chef](/private-chef-dubai) to cook in your kitchen — often the better fit for a seated dinner. Either way the food is cooked for your date, not pulled from a standing buffet menu.',
  },
  {
    q: 'Do you provide grazing tables, live stations, gala dinners and waiters?',
    a: 'All four, as layers on the same booking. [Grazing tables](/grazing-table-dubai) and [live cooking stations](/live-cooking-stations-dubai) suit standing events; a [gala dinner](/gala-dinner-catering-dubai) is plated with a full service team; waiters, hosts and bartenders are added by guest count. Tell us the format and we size the team — you never pay for staff the format does not need.',
  },
  {
    q: 'How do I compare catering companies in Dubai?',
    a: 'On what they publish. We keep a page that compares the [best catering companies in Dubai](/best-catering-companies-dubai) on 102 per-person prices, minimum orders and notice periods, all taken from their own menus and source-linked — including where myCHEF is not the cheapest. Read it before you ask anyone for a quote.',
  },
  {
    q: 'I already have a planner, florist or rental company. Can you still help?',
    a: 'Yes. We do not need to replace them. We coordinate our part of the catering around the suppliers you already have. The objective is for the event to work.',
  },
] as const
