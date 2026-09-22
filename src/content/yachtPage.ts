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
  'Private dining and entertaining on the water.' as const

export const YACHT_PHOTO_CREDIT = 'From a previous myCHEF yacht catering day.' as const

export const YACHT_HERO = {
  eyebrow: 'Chefs, menus and onboard service',
  h1: YACHT_SEO.h1,
  support:
    "For your chartered yacht, with preparation, loading and service coordinated around the captain’s requirements.",
  priceLine: `Example menus from ${formatYachtAed(YACHT_MENU_FORMATS[1].perGuestAed)} per guest*`,
  priceNote:
    '*113-guest example, before 5% VAT. Your proposal confirms the full service and price.',
  primaryCta: 'Get a Yacht Catering Quote',
  secondaryCta: 'WhatsApp myCHEF',
  micro: 'Share your date, marina and guest count.',
  reply: 'Typical reply: 15 minutes, 9am–11pm Dubai time.',
  trust: ['Food, chefs and waiters', 'Halal-first', 'Marina coordination', 'Written proposal'],
  imageCaption: `${YACHT_PHOTO_CREDIT} The host chartered the yacht.`,
} as const

export const YACHT_FULL_SERVICE = {
  label: 'What you get',
  h2: 'Yacht Catering Dubai — one team for the food experience',
  intro:
    'A successful catered charter brings the menu, preparation and service together. We assess the galley, coordinate loading with the captain and plan staffing around the vessel and itinerary. Your proposal sets out the food, equipment, service and clear-down responsibilities.',
  items: [
    {
      title: 'Food',
      body: 'Menu, sourcing, prep and delivery to the marina — built around how this group actually eats.',
    },
    {
      title: 'Chefs',
      body: 'Your chef prepares or finishes dishes onboard where the galley permits, with the menu and service timed around the charter.',
    },
    {
      title: 'Waiters',
      body: 'Welcome, canapés, buffet, table service, drinks where booked, clearing and guest support.',
    },
    {
      title: 'Setup',
      body: 'Glassware, plates, cutlery, napkins, and the buffet or pass-around layout — when the proposal includes them.',
    },
    {
      title: 'Service',
      body: 'The team runs the food on deck or in the saloon. You are not managing trays after they arrive.',
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
  h2: 'You choose the type of service. We build the team.',
  intro:
    'Pick a level. It pre-fills the quote. We do not sell a shelf of yacht catering packages — we write a proposal from guest count, format and the yacht.',
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
    line: 'Food prepared and delivered for the yacht day, with basic setup if the brief needs it.',
    bestFor: 'Simple yacht days and smaller groups.',
  },
  {
    id: 'luxury',
    title: 'VIP yacht day',
    line: 'A tighter menu, live stations, full staff, rentals, décor and beverage service including bartenders where the operator permits it.',
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
  imageCaption: string
}[] = [
  {
    id: 'private-chef',
    title: 'Private chef',
    line: 'A chef handles the meal while you stay with your guests. The menu is built around galley, timing and guest count.',
    image: '/images/yacht-work/deck-table-marina.webp',
    imageAlt: 'Seated table set on the upper deck of a chartered Dubai yacht, from a previous myCHEF catering day.',
    imageCaption: YACHT_PHOTO_CREDIT,
  },
  {
    id: 'canapes',
    title: 'Canapés & pass-around food',
    line: 'For guests moving around the yacht rather than sitting for a formal meal. We prepare the food, bring the service team and keep bites moving.',
    image: '/images/yacht-work/beef-tartlets.webp',
    imageAlt: 'Beef tartlet canapés prepared for a yacht reception, from a previous myCHEF catering day.',
    imageCaption: YACHT_PHOTO_CREDIT,
  },
  {
    id: 'buffet',
    title: 'Premium buffet',
    line: 'Guests eat at their own pace while waiters replenish, clear and keep the table looking organised. Strong for larger groups.',
    image: '/images/yacht-work/sushi-service.webp',
    imageAlt: 'Sushi grazing table being set in a yacht salon on a previous myCHEF catering day.',
    imageCaption: YACHT_PHOTO_CREDIT,
  },
  {
    id: 'live-bbq',
    title: 'Live station / BBQ',
    line: 'Interactive cooking where the vessel and captain permit it. If they do not, we do not light a grill.',
    image: '/images/yacht-work/canape-spread.webp',
    imageAlt: 'Canapés and sushi set out for guests on a previous myCHEF yacht catering day.',
    imageCaption: YACHT_PHOTO_CREDIT,
  },
  {
    id: 'seated',
    title: 'Seated dinner',
    line: 'Coursed dining for smaller groups when you want a proper table, not a standing party.',
    image: '/images/yacht-work/seated-table.webp',
    imageAlt: 'Place settings and flowers on a seated yacht table, from a previous myCHEF catering day.',
    imageCaption: YACHT_PHOTO_CREDIT,
  },
]

export const YACHT_FORMATS_COPY = {
  label: 'How you eat',
  h2: 'How do you want to eat on the water?',
  intro:
    'Choose brunch, lunch, a canapé reception or a seated dinner. The menu, serving vessels and preparation plan should suit the space onboard, the sailing conditions and the way you want guests to dine.',
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
  h2: 'A birthday, a corporate charter, or dinner with family?',
  intro:
    'Menus and service can be tailored to birthdays, company gatherings and private celebrations. Choose your occasion to begin a brief covering food, staffing and clear-down.',
} as const

export const YACHT_WORK = {
  label: 'Previous work',
  h2: 'See a yacht day we already ran',
  intro:
    'These photographs show catering for a birthday on a yacht chartered by the host, with an upper-deck table, grazing selection in the salon and circulating canapés. Select an image to explore the setting.',
  how: [
    {
      title: 'The brief',
      body: 'For a smaller birthday, service can combine a table on deck with informal grazing inside. The plan follows the vessel’s layout and your guest list.',
    },
    {
      title: 'How we load it',
      body: 'Most of the cooking happens on land. We load in the captain’s window, set the table and the salon, then finish and serve onboard so you are not managing trays.',
    },
    {
      title: 'What you are looking at',
      body: 'Gold chargers and low flowers on the upper deck. Sushi, tartlets, sliders and desserts on the salon table. Waiters replenish. We clear on the captain’s timing.',
    },
  ],
  note: 'Every photograph on this page is from a previous myCHEF yacht catering day. The host chartered the yacht.',
  cta: 'Get a quote for a day like this',
} as const

export const YACHT_WORK_PHOTOS = [
  {
    src: '/images/yacht-work/deck-table-skyline.webp',
    alt: 'Seated table on a yacht upper deck with the Dubai skyline behind it, from a previous myCHEF catering day.',
    caption: `Upper-deck table. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/deck-table-marina.webp',
    alt: 'Long dressed table on a yacht deck beside the marina, from a previous myCHEF catering day.',
    caption: `Deck sitting. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/upper-deck.webp',
    alt: 'Yacht upper deck lounge with a seated table ready for guests, from a previous myCHEF catering day.',
    caption: `Upper deck before boarding. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/place-setting.webp',
    alt: 'Gold charger, napkin and low flowers on a yacht table, from a previous myCHEF catering day.',
    caption: `Place setting. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/seated-table.webp',
    alt: 'Overhead view of a seated yacht table with flowers and glassware, from a previous myCHEF catering day.',
    caption: `Seated table. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/salon-window.webp',
    alt: 'Yacht salon with birthday balloons and a marina view through the window, from a previous myCHEF catering day.',
    caption: `Salon before service. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/salon-overview.webp',
    alt: 'Yacht salon with a round grazing table and birthday styling, from a previous myCHEF catering day.',
    caption: `Salon overview. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/salon-grazing.webp',
    alt: 'Sushi and canapé grazing table set in a yacht salon, from a previous myCHEF catering day.',
    caption: `Grazing table. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/salon-buffet.webp',
    alt: 'Round buffet table of sushi and canapés in a styled yacht salon, from a previous myCHEF catering day.',
    caption: `Salon buffet. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/salon-styled.webp',
    alt: 'Yacht salon styled for a birthday with hanging balloons and a food table, from a previous myCHEF catering day.',
    caption: `Salon styling. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/birthday-wall.webp',
    alt: 'Birthday photo wall and florals inside a yacht salon, from a previous myCHEF catering day.',
    caption: `Birthday wall. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/tartlets-salon.webp',
    alt: 'Canapé tartlets in front of birthday styling in a yacht salon, from a previous myCHEF catering day.',
    caption: `Canapés in the salon. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/sushi-service.webp',
    alt: 'Service staff setting a sushi grazing table onboard a yacht, from a previous myCHEF catering day.',
    caption: `Sushi service. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/beef-tartlets.webp',
    alt: 'Beef tartlet canapés lined up for yacht service, from a previous myCHEF catering day.',
    caption: `Beef tartlets. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/sliders-sandwiches.webp',
    alt: 'Mini bagels and finger sandwiches prepared for a yacht party, from a previous myCHEF catering day.',
    caption: `Sliders and sandwiches. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/canape-spread.webp',
    alt: 'Meatball canapés and sushi rolls on a yacht grazing table, from a previous myCHEF catering day.',
    caption: `Canapé spread. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/dessert-canapes.webp',
    alt: 'Éclairs, tartlets and canapés on a yacht dessert table, from a previous myCHEF catering day.',
    caption: `Desserts and bites. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/tartare.webp',
    alt: 'Tuna and salmon tartare served in glasses for yacht canapé service, from a previous myCHEF catering day.',
    caption: `Tartare glasses. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/nigiri.webp',
    alt: 'Nigiri sushi prepared for a yacht grazing table, from a previous myCHEF catering day.',
    caption: `Nigiri. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/salmon-sliders.webp',
    alt: 'Smoked salmon sliders plated for yacht pass-around service, from a previous myCHEF catering day.',
    caption: `Salmon sliders. ${YACHT_PHOTO_CREDIT}`,
  },
  {
    src: '/images/yacht-work/nut-tartlets.webp',
    alt: 'Nut tartlets set out on a slate for yacht dessert service, from a previous myCHEF catering day.',
    caption: `Nut tartlets. ${YACHT_PHOTO_CREDIT}`,
  },
] as const

export const YACHT_PROOF_COPY = {
  label: 'Real event pricing',
  h2: 'A 113-guest day at Dubai Harbour',
  intro:
    'The published reference brief covered 113 guests and four hours onboard at Dubai Harbour. Three formats illustrate how menu choice affects the total. A smaller celebration requires its own quote.',
  note:
    'Your price depends on the guest count, menu, staffing, service hours, marina, vessel facilities and any bar service. The examples below use the published 113-guest catering rates. Yacht charter is arranged separately.',
} as const

export const YACHT_ESTIMATE_COPY = {
  label: 'Estimate',
  h2: 'See an indicative number, then send the brief',
  intro:
    'Choose guest count and menu style. Rates come from the 113-guest Dubai Harbour charter. Get This Quote copies the numbers into the form. The written proposal is the only offer.',
} as const

export const YACHT_FORM_COPY = {
  label: 'Quote',
  h2: 'Tell us about the yacht day',
  intro:
    'You do not need a finished menu. Date, marina, guest count and how you want to eat is enough.',
} as const

export const YACHT_TRUST_COPY = {
  label: 'Catering, not the charter',
  h2: 'The food plan is written before anyone loads',
  note:
    'No yacht-specific public reviews are shown here because we do not invent testimonials. The 113-guest Harbour charter above is the commercial proof we can stand behind.',
} as const

export const YACHT_HOW_COPY = {
  label: 'How it works',
  h2: 'Tell us the date. We write the food plan.',
  bridge:
    'A private chef yacht Dubai day is catering on a yacht you charter. It is not a household plan and it is not a boat we operate. If you want the same chef at home, week after week, that is',
} as const

export const YACHT_OPS_COPY = {
  label: 'On the water',
  h2: 'The yacht decides how the food can work',
  intro:
    'Galley size, loading windows and grill permissions are not trivia. They are how the food actually works on the day. A yacht dinner cruise Dubai search usually means a seated meal on a charter route. We still do not operate the boat.',
} as const

export const YACHT_BOARDING_COPY = {
  label: 'Boarding',
  h2: 'We follow the boat to the marina',
  intro:
    'Most yachts we cook for board at Dubai Marina, Dubai Harbour, Palm Jumeirah or JBR. The host or their operator books the charter.',
} as const

export const YACHT_NEXT_COPY = {
  label: 'Next',
  h2: 'Guides and neighbouring pages',
} as const

export const YACHT_FAQ_COPY = {
  label: 'Questions',
  h2: 'What hosts ask before they book',
} as const

export const YACHT_CLOSE_COPY = {
  label: 'Book the food, not the boat',
  h2: 'Have the party on the water. We handle the eating and drinking.',
  intro: 'Send the date, marina and guest count. We will help you build the rest.',
} as const

export const YACHT_TRUST = [
  {
    title: 'Vetted chefs',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks onboard.',
  },
  {
    title: 'Waiters from the headcount',
    body: 'Service staff are set in the written proposal from guest count and format — not left for you to guess on the day.',
  },
  {
    title: 'Menus for the yacht',
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
    body: 'We plan around actual fridge, oven and preparation space — usually smaller than a villa kitchen, and often already holding the operator’s stores.',
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
    title: 'We write the food and service plan',
    body: 'Menu, chefs, waiters and format — on paper before anyone loads.',
  },
  {
    title: 'We coordinate with the yacht',
    body: 'Loading and onboard rules are aligned with the captain or operator.',
  },
  {
    title: 'You keep the charter',
    body: 'The team runs the food and service, then clears to the agreed plan.',
  },
] as const

export const YACHT_MARINAS: readonly { name: string; href: string | null; note: string }[] = [
  { name: 'Dubai Marina', href: '', note: 'Frequent boarding. Skyline routes and sheltered water.' },
  { name: 'Dubai Harbour', href: null, note: 'The 113-guest corporate example boarded here.' },
  { name: 'Palm Jumeirah', href: '', note: 'Island routes and calmer anchorage.' },
  { name: 'JBR', href: '/locations/jbr', note: 'Beachfront boarding next to the Marina.' },
  { name: 'Bluewaters', href: null, note: 'When the vessel is there and the captain gives a window.' },
  { name: 'Dubai Creek', href: null, note: 'When the charter actually loads there — we follow the boat.' },
]

export const YACHT_FORM_STYLES: readonly { id: YachtFormStyleId; label: string }[] = [
  { id: 'not-sure', label: 'Not sure yet' },
  { id: 'full-service', label: 'Full-service yacht event' },
  { id: 'luxury', label: 'VIP yacht day' },
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
  { href: '/blog/yacht-party-menu-ideas-dubai', label: 'Yacht party menu ideas' },
  { href: '/bar-services-dubai', label: 'Bar services' },
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
