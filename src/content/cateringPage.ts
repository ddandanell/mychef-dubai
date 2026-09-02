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
  { href: '#styles', label: 'Styles' },
  { href: '#events', label: 'Events' },
  { href: '#venues', label: 'Venues' },
  { href: '#examples', label: 'Examples' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#get-quote', label: 'Get a quote' },
] as const

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

export const pricingNotes = [
  'Drop-off: 10 guests minimum and AED 900 minimum order.',
  'A standard event buffet starts from 20 guests.',
  'All figures are before 5% VAT, which is shown as its own line.',
  'Not every event meets the starting points. Guest count, menu, staffing, venue access, timing and equipment move the total.',
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

/** The one sentence that keeps the two doors the same company. */
export const SAME_PARTNERS =
  'The partner houses behind an event are the ones behind the household plans: the same licensed suppliers, the same visas we have asked to see, the same score after the work. A chef who holds a house together is who we want running your night — which is why the good ones stay.'

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
  body: 'A much more focused service. Tell us the flight, passenger count, timing, food preferences and dietary requirements. We prepare and coordinate the food around the journey — ask for it in the brief.',
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
    title: 'Finger food',
    body: 'No cutlery. Kids versus adults, tray versus passed, and how many pieces a head before people start looking for a chair.',
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
  'Once the structure is agreed, a 50% deposit holds the date and the team, and we confirm the operational plan. For a wedding or a large event, the tasting happens here — quoted as its own line, before the menu is locked.',
  'On the day, everyone knows what they are responsible for. You can spend more time with your guests.',
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
  { prompt: 'I need help with most of the event', href: CATERING_INQUIRY_HREF, label: 'Get a tailored catering quote' },
] as const

export const proofItems = [
  {
    title: 'How culinary partners are selected',
    claim: 'Vetted chef and culinary-partner network.',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks for a client, and the partner house employs them on a visa we have seen. On an event no chef is guaranteed by name — we match the night. That is the honest difference from the household service, where the whole point is that the same person comes back.',
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
    body: 'Culinary preparation is performed by licensed culinary partners working to Dubai Municipality food-safety standards. Those partners employ the cooks, on visas we have asked to see; myCHEF takes the brief, matches the event, scores the work and pays. The booking is with us — you are not putting anyone on your payroll, and nobody invoices your villa personally.',
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
    a: 'Many Dubai caterers present a package of menus, buffets and staff. myCHEF starts with the event you are actually planning. You add only the layers that make it work — food, kitchen, service, table, atmosphere, event support. Licensed culinary partners employ the cooks and do the cooking; we take the brief, match the event, score the work and carry the booking. You do not have to buy a complete event package to get the food right.',
  },
  {
    q: 'What is the minimum number of guests?',
    a: 'From about 10 guests upward, and small parties of 10 to 20 at home are a large part of what we do — that is not a reluctant minimum. The one case where we send you elsewhere is a *seated* dinner under about 20: a [private chef](/private-chef-dubai/pricing) is priced per visit rather than per person, which is usually both cheaper and a better evening. Anything with a buffet, a bar, passed food or a running order is catering at any headcount.',
  },
  {
    q: 'How much does catering cost in Dubai?',
    a: 'It depends on guest count, menu, service style, staffing and venue — not on a single package price. Drop-off starts from AED 90 per person, a standard event buffet from AED 120, premium buffet, BBQ, live stations and canapés from AED 150, and chef-led plated dining at AED 700–950 per person. Guest count and staff move it from there. Every quote is itemised in writing, with 5% VAT shown separately. See the [catering prices guide](/dubai-catering-prices-guide) or the [cost calculator](/catering-cost-calculator-dubai).',
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
    a: 'Culinary preparation is performed by licensed culinary partners working to Dubai Municipality food-safety standards. Those partner houses employ the cooks on proper visas; myCHEF designs and coordinates the catering around your event, and the contract and the invoice are with myCHEF. You are not hiring a stranger off an app, and you are not employing anyone.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For events under 50 guests, a week ahead is typical. Larger events: 2–4 weeks. Peak season (November–March) and holidays book faster. Short notice is often possible — message the date via [contact](/contact). During business hours, 9am to 9pm, a reply typically comes back within 15 minutes; a message sent overnight is answered first thing.',
  },
  {
    q: 'Do you cater small parties of 10 to 20 guests at home?',
    a: 'Yes. For a party of 10 to 20 at home, home catering Dubai is most of what we do: a birthday, a dinner for twelve on a villa terrace, a family lunch with one chef and one server. Under about 20 guests you can also book a [private chef](/private-chef-dubai) to cook in your kitchen — often the better fit for a seated dinner. Either way the food is cooked for your date, not pulled from a standing buffet menu.',
  },
  {
    q: 'Do you provide grazing tables, live stations, gala dinners and waiters?',
    a: 'All four, as layers on the same booking. [Grazing tables](/grazing-table-dubai) and [live cooking stations](/live-cooking-stations-dubai) suit standing events; a gala dinner is plated with a full service team; waiters, hosts and bartenders are added by guest count. Tell us the format and we size the team — you never pay for staff the format does not need.',
  },
  {
    q: 'How do I compare catering companies in Dubai?',
    a: 'On what they publish. We keep a page that compares the [best catering companies in Dubai](/best-catering-companies-dubai) on 102 per-person prices, minimum orders and notice periods, all taken from their own menus and source-linked — including where myCHEF is not the cheapest. Read it before you ask anyone for a quote.',
  },
  {
    q: 'What is the cancellation window?',
    a: 'For an event, 48 hours before the date: cancel or move it with more notice than that and nothing is charged beyond costs already committed — ingredients ordered, equipment reserved, staff released late. Inside 48 hours the booking stands, because the team and the food are already bought. A standing household visit runs on a shorter clock, 24 hours, and the supplier who employs the chefs works to the same two numbers, so nobody is told a different rule to the one you were told.',
  },
  {
    q: 'What happens if the party runs late?',
    a: 'Extra time is charged at the hourly rate of that job plus 50%, agreed on the night before anyone stays. The 50% goes to the partner house that employs the team; the cooks and waiters stay on their normal rate, so nobody on the floor has a reason to make a night run long. It is the same rule as the household service — one paper for both doors.',
  },
  {
    q: 'Is there a tasting?',
    a: 'For weddings and larger or high-value events, yes: a tasting is arranged before the menu is locked, and it is quoted as its own line rather than hidden in the per-person price. For a standard party or a corporate booking a tasting is not usually necessary, and we would rather spend that budget on the night itself. Ask, and we will tell you honestly which side of that line your event sits on.',
  },
  {
    q: 'Who is on the invoice, and when is the deposit due?',
    a: 'myCHEF invoices you, and myCHEF pays the partner house that employs the cooks and the service team. No guest, host or venue pays a chef directly. A 50% deposit holds the date and the team; the balance is due as agreed in writing before the event, with 5% VAT shown on its own line throughout.',
  },
  {
    q: 'I already have a planner, florist or rental company. Can you still help?',
    a: 'Yes. We do not need to replace them. We coordinate our part of the catering around the suppliers you already have. The objective is for the event to work.',
  },
] as const
