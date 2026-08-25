import { CATERING_PATHS } from './cateringCluster'

export const cateringHero = {
  src: '/images/catering-dubai-hero.webp',
  alt: 'A private dinner about to begin on a Dubai villa terrace at night — a long table set, one chef plating, city lights across the water. Experience concept shown.',
  width: 2560,
  height: 1440,
} as const

export const scopeSteps = [
  {
    id: 'food-only',
    title: 'Food Only',
    body: 'We prepare the food and deliver it to you. Ideal when you already have the venue, staff and setup handled.',
    href: CATERING_PATHS.dropOff,
    linkLabel: 'Explore Food & Drop-Off Catering',
  },
  {
    id: 'food-setup',
    title: 'Food + Setup',
    body: 'We deliver the food and help arrange the serving area, buffet or presentation. You handle the event from there.',
  },
  {
    id: 'food-service',
    title: 'Food + Service',
    body: 'Add the people needed to run it properly: chefs, waiters, bartenders, service staff, kitchen assistants.',
  },
  {
    id: 'full-service',
    title: 'Full-Service Catering',
    body: 'We coordinate the food, team, equipment, setup and service flow around your event.',
  },
  {
    id: 'complete',
    title: 'Complete Event Support',
    body: 'Need more? We can also help coordinate tables and chairs, tableware, glassware, linen, flowers, bar setup, entertainment, photography, décor and event coordination. You choose how far we go.',
  },
] as const

export const eventPathways = [
  {
    title: 'Wedding',
    body: 'From an intimate wedding dinner to a larger reception. We can help with the menu, tasting, chefs, service team, bar, tables, equipment and the flow of the meal.',
    href: CATERING_PATHS.weddings,
    linkLabel: 'Explore Wedding Catering',
    image: '/images/wedding-catering-dubai-hero.webp',
    imageAlt: 'Wedding dinner table in a Dubai villa — candlelight, set places, service in the background. Experience concept shown.',
  },
  {
    title: 'Corporate Event',
    body: 'Board meetings, launches, office events, networking, conferences and client dinners. Start with food delivery or build a fully serviced corporate event.',
    href: CATERING_PATHS.corporateEvents,
    linkLabel: 'Explore Corporate Catering',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Corporate reception in Dubai — canapés and service staff in a polished venue. Experience concept shown.',
  },
  {
    title: 'Birthday or Celebration',
    body: 'A dinner at home, a villa party, anniversary, engagement or larger celebration. We build the food and service around the atmosphere you want rather than forcing the event into a fixed package.',
    href: CATERING_PATHS.birthdays,
    linkLabel: 'Explore Birthdays & Celebrations',
    image: '/images/birthday-catering-dubai-hero.webp',
    imageAlt: 'A birthday dinner in a Dubai home — guests at the table, chef finishing plates. Experience concept shown.',
  },
  {
    title: 'Private Event or Party',
    body: 'You have the guest list and the location. We help build everything else around it. Small dinners, large parties, receptions, cocktail evenings and private gatherings.',
    href: CATERING_PATHS.privateEvents,
    linkLabel: 'Explore Private Events',
    image: '/images/party-catering-dubai-hero.webp',
    imageAlt: 'A private party in a Dubai villa garden — standing guests, passed food, warm lighting. Experience concept shown.',
  },
] as const

export const venuePathways = [
  {
    title: 'Villas & Private Homes',
    body: 'Food only, private dinners, parties, birthdays, weddings or complete villa events. We plan around the kitchen, access, guest count and space available.',
    href: CATERING_PATHS.villas,
    linkLabel: 'Villa Catering',
    image: '/images/villa-catering-dubai-hero.webp',
    imageAlt: 'Villa catering in Dubai — outdoor table, kitchen access, service team at work. Experience concept shown.',
  },
  {
    title: 'Yachts',
    body: 'Yacht catering requires a different approach to timing, delivery, storage, setup and service. We can arrange anything from prepared food and canapés to staffed yacht events.',
    href: CATERING_PATHS.yachts,
    linkLabel: 'Yacht Catering',
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
  linkLabel: 'Corporate Catering',
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
  { prompt: 'I am planning a wedding', href: CATERING_PATHS.weddings, label: 'Wedding Catering' },
  { prompt: 'I am planning a company event', href: CATERING_PATHS.corporateEvents, label: 'Corporate Catering' },
  { prompt: 'I am planning a birthday or celebration', href: CATERING_PATHS.birthdays, label: 'Birthdays & Celebrations' },
  { prompt: 'I am hosting at a villa', href: CATERING_PATHS.villas, label: 'Villa Catering' },
  { prompt: 'I am hosting on a yacht', href: CATERING_PATHS.yachts, label: 'Yacht Catering' },
  { prompt: 'I need food for a private jet', href: CATERING_PATHS.privateJet, label: 'Private Jet Catering' },
  { prompt: 'I only need food delivered', href: CATERING_PATHS.dropOff, label: 'Food & Drop-Off Catering' },
  { prompt: 'I need help with most of the event', href: CATERING_PATHS.fullService, label: 'Full-Service Catering' },
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
    q: 'I already have a planner, florist or rental company. Can you still help?',
    a: 'Yes. We do not need to replace them. We coordinate our part of the catering around the suppliers you already have. The objective is for the event to work.',
  },
] as const
