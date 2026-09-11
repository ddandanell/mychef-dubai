/**
 * Copy and structure for /yachts only.
 * Prices and staffing come from yachtCateringQuote.ts (one real 113-guest proposal).
 * Do not invent a general starting price. Do not claim yacht rental.
 */
import {
  YACHT_MENU_FORMATS,
  formatYachtAed,
} from './yachtCateringQuote'

export const YACHT_SEO = {
  title: 'Yacht Catering Dubai | Private Chef & Catering | myCHEF',
  description:
    'Yacht catering Dubai with private chefs, canapés, buffet, live stations and onboard service. You charter the yacht. Tell us the date, marina and guest count.',
  h1: 'Yacht Catering Dubai',
  ogTitle: 'Yacht Catering Dubai | Private Chef & Catering',
} as const

export const YACHT_POSITIONING =
  'You book the yacht. We handle the food, chefs, waiters and onboard service.' as const

export const YACHT_HERO = {
  eyebrow: 'Private chef & full-service yacht catering',
  h1: YACHT_SEO.h1,
  support:
    'Yacht catering Dubai is the complete food and service experience onboard a vessel you already have. Choose delivered catering, canapés, a private chef, buffet, a live station or a fully staffed yacht event. We coordinate loading, setup, service and clear-down with your crew.',
  priceLine: `Recent yacht catering menus from ${formatYachtAed(YACHT_MENU_FORMATS[1].perGuestAed)} per guest*`,
  priceNote:
    '*From a 113-guest corporate charter at Dubai Harbour. Pricing varies by guest count, menu, staffing and vessel.',
  primaryCta: 'Get a Yacht Catering Quote',
  secondaryCta: 'WhatsApp myCHEF',
  micro: 'Send us your date, marina and guest count. That is enough to start.',
  reply: 'Typical reply within 15 minutes during business hours.',
  trust: ['Food, chefs and waiters', 'Halal-first', 'Marina coordination', 'Written proposal'],
} as const

export const YACHT_FULL_SERVICE = {
  label: 'What you get',
  h2: 'Yacht Catering Dubai — one team for the food experience',
  intro:
    'A yacht day is more than a menu. Food has to reach the right marina. Equipment has to load on time. Guests may need waiters. A buffet has to be set, replenished and cleared. We handle the culinary side so you are not coordinating separate suppliers on the charter.',
  items: [
    {
      title: 'Food',
      body: 'Menu planning, sourcing, preparation and delivery to the marina — built around how you want to eat.',
    },
    {
      title: 'Chefs',
      body: 'A chef cooks or finishes onboard where the galley allows. You stay with your guests.',
    },
    {
      title: 'Waiters',
      body: 'Welcome, canapés, buffet, table service, drinks where booked, clearing and guest support.',
    },
    {
      title: 'Setup',
      body: 'Glassware, plates, cutlery, napkins, and buffet or pass-around layout — when the proposal includes them.',
    },
    {
      title: 'Service',
      body: 'The team runs the food on deck or in the saloon so you are not managing trays after they arrive.',
    },
    {
      title: 'Clear-down',
      body: 'Galley and service areas cleared on the captain’s timing, before you dock when that is the brief.',
    },
  ],
} as const

export type YachtServiceId = 'private-chef' | 'canapes' | 'buffet' | 'live-bbq' | 'seated'
export type YachtFormStyleId =
  | YachtServiceId
  | 'not-sure'
  | 'delivery'
  | 'catering-service'
  | 'full-service'
  | 'luxury'
  | 'event-management'

export const YACHT_LEVELS_COPY = {
  label: 'How much we handle',
  h2: 'Choose how much you want us to handle',
  intro: 'You choose the type of service. We build the right team around it. Pick a level to pre-fill the quote form.',
} as const

export const YACHT_LEVELS: readonly {
  id: YachtFormStyleId
  title: string
  line: string
  bestFor: string
}[] = [
  {
    id: 'full-service',
    title: 'Full-service yacht event',
    line: 'Menu, food, chefs, waiters, setup, buffet or plated service, equipment and clear-down.',
    bestFor: 'Larger parties, corporate events and hosts who want everything handled.',
  },
  {
    id: 'catering-service',
    title: 'Catering + service',
    line: 'Food plus waiters, setup and service onboard.',
    bestFor: 'Parties, birthdays and social events.',
  },
  {
    id: 'private-chef',
    title: 'Private chef',
    line: 'A chef cooks, finishes and plates onboard where the yacht permits it.',
    bestFor: 'Smaller groups and private dining.',
  },
  {
    id: 'delivery',
    title: 'Catering delivery',
    line: 'Food prepared and delivered for your charter, with basic setup if the brief needs it.',
    bestFor: 'Simple yacht days and smaller groups.',
  },
  {
    id: 'luxury',
    title: 'Luxury yacht experience',
    line: 'Premium menu, live stations, full staff, rentals, décor and beverage service including bartenders where the operator permits it.',
    bestFor: 'VIP charters and hosts who want the room styled as well as fed.',
  },
  {
    id: 'event-management',
    title: 'Full yacht event management',
    line: 'Food, beverage, staffing, rentals, décor, logistics, optional entertainment and an event manager coordinating the day.',
    bestFor: 'Corporate days, speeches, and anyone who does not want to run the event themselves.',
  },
]

export const YACHT_SERVICES: readonly {
  id: YachtServiceId
  title: string
  line: string
  image: string
  imageAlt: string
}[] = [
  {
    id: 'private-chef',
    title: 'Private chef',
    line: 'Your chef handles the meal while you stay with your guests. The menu is built around galley, timing and guest count.',
    image: '/images/private-chef-dubai-yacht.webp',
    imageAlt: 'Chef plating onboard a Dubai yacht. Experience concept shown.',
  },
  {
    id: 'canapes',
    title: 'Canapés & pass-around food',
    line: 'For guests moving around the yacht rather than sitting for a formal meal. We prepare the food, bring the service team and keep bites moving.',
    image: '/images/canape-catering-dubai-hero.webp',
    imageAlt: 'Canapés prepared for a standing yacht reception. Experience concept shown.',
  },
  {
    id: 'buffet',
    title: 'Premium buffet',
    line: 'Guests eat at their own pace while waiters replenish, clear and keep the table looking organised. Strong for larger groups.',
    image: '/images/buffet-catering-dubai-hero.webp',
    imageAlt: 'Buffet service set for a larger yacht group. Experience concept shown.',
  },
  {
    id: 'live-bbq',
    title: 'Live station / BBQ',
    line: 'Interactive cooking where the vessel and captain permit it. If they do not, we do not light a grill.',
    image: '/images/live-cooking-stations-dubai-hero.webp',
    imageAlt: 'Live cooking station prepared for a yacht charter. Experience concept shown.',
  },
  {
    id: 'seated',
    title: 'Seated dinner',
    line: 'Coursed dining for smaller groups when you want a proper table, not a standing party.',
    image: '/images/tasting-menu-dubai-hero.webp',
    imageAlt: 'Seated yacht dinner service. Experience concept shown.',
  },
]

export const YACHT_FORMATS_COPY = {
  label: 'How you eat',
  h2: 'Choose how you want to eat on board',
  intro:
    'Brunch, lunch, dinner or a standing party — pick the format. It pre-fills the quote form. You can still change it.',
} as const

export const YACHT_OCCASIONS = [
  'Birthday on a yacht',
  'Corporate charter',
  'Sunset celebration',
  'Proposal or anniversary',
  'Family day',
  'Client entertaining',
  'Wedding or engagement',
] as const

export const YACHT_OCCASIONS_COPY = {
  label: 'Occasions',
  h2: 'Birthday, corporate charter, or a day with family?',
  intro: 'We build the food and staffing around the occasion. Tap one to start the quote — the same team handles chefs, waiters and clear-down, not a different company for each kind of day.',
} as const

export const YACHT_PROOF_COPY = {
  label: 'Real event pricing',
  h2: 'A 113-guest day at Dubai Harbour',
  intro:
    '113 guests. Four hours onboard. Dubai Harbour. The client needed a complete food and service solution, so we priced three formats for the same charter. These are not a general starting price for a smaller birthday.',
} as const

export const YACHT_ESTIMATE_COPY = {
  label: 'Estimate',
  h2: 'See an indicative number, then send the brief',
  intro:
    'Choose guest count and menu style. Rates come from the 113-guest Dubai Harbour charter. Get This Quote copies the numbers into the form below. Your written proposal is the only offer.',
} as const

export const YACHT_FORM_COPY = {
  label: 'Quote',
  h2: 'Tell us about the yacht day',
  intro:
    'You do not need a finished menu. Date, marina, guest count and how you want to eat is enough. We will help you build the rest.',
} as const

export const YACHT_TRUST = [
  {
    title: 'Vetted chefs',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks on your charter.',
  },
  {
    title: 'Waiters from the headcount',
    body: 'Service staff are set in the written proposal from guest count and format — not left for you to guess on the day.',
  },
  {
    title: 'Menus for the yacht you have',
    body: 'We design the menu around the galley, route and hours, so the food works onboard rather than only looking good on paper.',
  },
  {
    title: 'Marina loading',
    body: 'Food, equipment and staff load in the captain’s approved window — not when a van happens to arrive.',
  },
  {
    title: 'Halal-first kitchen standards',
    body: 'Halal ingredients are the default. Specific certification needs belong in the brief.',
  },
  {
    title: 'Written proposal',
    body: 'Food, chefs, waiters, extras and 5% VAT as separate lines. Valid for one month.',
  },
  {
    title: 'Clear-down before docking',
    body: 'The galley and service areas are cleared on the captain’s timing.',
  },
  {
    title: 'Licensed culinary partners',
    body: 'Food safety sits with licensed culinary partners under Dubai Municipality rules.',
  },
] as const

export const YACHT_OPERATIONS = [
  {
    title: 'Galley',
    body: 'We plan around actual fridge, oven and preparation space — usually smaller than a villa kitchen, and often already holding crew food.',
  },
  {
    title: 'Loading',
    body: 'Food, equipment and staff load during the captain’s approved marina window.',
  },
  {
    title: 'Service',
    body: 'Waiters and chefs work to how guests actually use the deck and saloon, including movement and heat.',
  },
  {
    title: 'Clear-down',
    body: 'Service areas are cleared according to the captain’s timing, before you dock when that is the brief.',
  },
] as const

export const YACHT_HOW = [
  {
    title: 'Send the basics',
    body: 'Date, marina, guest count and the kind of day. That is enough to start.',
  },
  {
    title: 'We build the food and service plan',
    body: 'Menu, chefs, waiters and format — written before anyone loads.',
  },
  {
    title: 'We coordinate with the yacht',
    body: 'Loading and onboard requirements are aligned with the captain or operator.',
  },
  {
    title: 'You enjoy the charter',
    body: 'The team runs the food and service, then clears to the agreed plan.',
  },
] as const

export const YACHT_MARINAS: readonly { name: string; href: string | null; note: string }[] = [
  { name: 'Dubai Marina', href: '/locations/dubai-marina', note: 'Frequent boarding. Skyline routes and sheltered water.' },
  { name: 'Dubai Harbour', href: null, note: 'The 113-guest corporate example boarded here.' },
  { name: 'Palm Jumeirah', href: '/locations/palm-jumeirah', note: 'Island routes and calmer anchorage.' },
  { name: 'JBR', href: '/locations/jbr', note: 'Beachfront boarding next to the Marina.' },
  { name: 'Bluewaters', href: null, note: 'When the vessel is there and the captain gives a window.' },
  { name: 'Dubai Creek', href: null, note: 'When the charter actually loads there — we follow the boat.' },
]

export const YACHT_FORM_STYLES: readonly { id: YachtFormStyleId; label: string }[] = [
  { id: 'not-sure', label: 'Not sure yet' },
  { id: 'full-service', label: 'Full-service yacht event' },
  { id: 'luxury', label: 'Luxury yacht experience' },
  { id: 'event-management', label: 'Full yacht event management' },
  { id: 'catering-service', label: 'Catering + service' },
  { id: 'delivery', label: 'Catering delivery' },
  { id: 'private-chef', label: 'Private chef' },
  { id: 'canapes', label: 'Canapés & pass-around' },
  { id: 'buffet', label: 'Premium buffet' },
  { id: 'live-bbq', label: 'Live station / BBQ' },
  { id: 'seated', label: 'Seated dinner' },
]

export const YACHT_SIBLINGS = [
  { href: '/yacht-catering-guide-dubai', label: 'Yacht catering guide' },
  { href: '/yacht-catering-checklist-dubai', label: 'Yacht catering checklist' },
  { href: '/blog/yacht-party-menu-ideas-dubai', label: 'Yacht party menu ideas' },
  { href: '/bar-services-dubai', label: 'Bar services' },
  { href: '/locations/dubai-marina', label: 'Dubai Marina' },
] as const

export const YACHT_WHATSAPP_BASE =
  'Hi myCHEF, I would like a quote for yacht catering in Dubai.\n\nDate:\nGuest count:\nMarina:\nOccasion:\nService style:\nYacht already booked: Yes / No\n\n(via mychef.ae/yachts)'

export function yachtQuoteWhatsApp(input: {
  date?: string
  guests?: string
  marina?: string
  occasion?: string
  style?: string
  yacht?: string
  estimate?: string
}): string {
  const lines = [
    'Hi myCHEF, I would like a quote for yacht catering in Dubai.',
    '',
    `Date: ${input.date || ''}`,
    `Guest count: ${input.guests || ''}`,
    `Marina: ${input.marina || ''}`,
    `Occasion: ${input.occasion || ''}`,
    `Service style: ${input.style || ''}`,
    `Yacht already booked: ${input.yacht || 'Yes / No'}`,
  ]
  if (input.estimate) lines.push(`Indicative estimate: ${input.estimate}`)
  lines.push('', '(via mychef.ae/yachts)')
  return lines.join('\n')
}
