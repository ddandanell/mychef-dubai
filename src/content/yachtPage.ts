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

export const YACHT_POSITIONING = 'You charter the yacht. We do the food.' as const

export const YACHT_HERO = {
  eyebrow: 'Private chef & yacht catering',
  h1: YACHT_SEO.h1,
  support:
    'Yacht catering Dubai is food, chef and service for a charter day you already have booked. You arrange the yacht. We handle the menu, marina loading, onboard service and clear-down.',
  priceLine: `Recent yacht catering menus from ${formatYachtAed(YACHT_MENU_FORMATS[1].perGuestAed)} per guest*`,
  priceNote:
    '*From a 113-guest corporate charter at Dubai Harbour. Pricing varies by guest count, menu, staffing and vessel.',
  primaryCta: 'Get a Yacht Catering Quote',
  secondaryCta: 'WhatsApp myCHEF',
  reply: 'Typical reply within 15 minutes during business hours.',
  trust: ['Vetted chefs', 'Halal-first', 'Marina coordination', 'Dubai yacht specialists'],
} as const

export type YachtServiceId = 'private-chef' | 'canapes' | 'buffet' | 'live-bbq' | 'seated'

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
    line: 'A chef cooks and plates onboard around your yacht’s galley.',
    image: '/images/private-chef-dubai-yacht.webp',
    imageAlt: 'Chef plating onboard a Dubai yacht. Experience concept shown.',
  },
  {
    id: 'canapes',
    title: 'Canapés & standing food',
    line: 'Passed bites for parties, networking and guests moving around the yacht.',
    image: '/images/canape-catering-dubai-hero.webp',
    imageAlt: 'Canapés prepared for a standing yacht reception. Experience concept shown.',
  },
  {
    id: 'buffet',
    title: 'Premium buffet',
    line: 'Efficient service for larger yacht groups, planned for a moving deck.',
    image: '/images/buffet-catering-dubai-hero.webp',
    imageAlt: 'Buffet service set for a larger yacht group. Experience concept shown.',
  },
  {
    id: 'live-bbq',
    title: 'Live station / BBQ',
    line: 'Interactive cooking where the vessel and captain permit it.',
    image: '/images/live-cooking-stations-dubai-hero.webp',
    imageAlt: 'Live cooking station prepared for a yacht charter. Experience concept shown.',
  },
  {
    id: 'seated',
    title: 'Seated dinner',
    line: 'Coursed dining for smaller groups and more formal occasions.',
    image: '/images/tasting-menu-dubai-hero.webp',
    imageAlt: 'Seated yacht dinner service. Experience concept shown.',
  },
]

export const YACHT_OCCASIONS = [
  'Birthdays',
  'Corporate yacht events',
  'Proposals and anniversaries',
  'Family celebrations',
  'Sunset dinners',
  'Weddings and engagement events',
  'Client entertaining',
] as const

export const YACHT_TRUST = [
  {
    title: 'Vetted chefs',
    body: 'Identity, right-to-work, skill and references are checked before anyone cooks on your charter.',
  },
  {
    title: 'Halal-first kitchen standards',
    body: 'Halal ingredients are the default. Specific certification needs belong in the brief.',
  },
  {
    title: 'Marina loading',
    body: 'Food, equipment and staff load in the captain’s approved window — not when a van happens to arrive.',
  },
  {
    title: 'Menus for the galley',
    body: 'Fridge space, oven space and a moving deck decide the menu before taste notes do.',
  },
  {
    title: 'Professional service staff',
    body: 'Waiters and chefs are set in the written proposal from your headcount and format.',
  },
  {
    title: 'Written proposal',
    body: 'Food, staffing, extras and 5% VAT as separate lines. Valid for one month.',
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
    body: 'Menus are designed for movement, heat and how guests actually use the deck and saloon.',
  },
  {
    title: 'Clear-down',
    body: 'The galley and service areas are cleared according to the captain’s timing, before you dock when that is the brief.',
  },
] as const

export const YACHT_HOW = [
  'Send the charter date, marina or berth, guest count, and how you want to eat — chef, canapés, buffet, grill or seated dinner.',
  'We plan what can be finished on land and what can honestly be cooked on board.',
  'Loading happens in the window the captain sets.',
  'Service on deck or in the saloon, then clear-down before you return, or at the time the crew agrees.',
] as const

export const YACHT_MARINAS: readonly { name: string; href: string | null; note: string }[] = [
  { name: 'Dubai Marina', href: '/locations/dubai-marina', note: 'Frequent boarding. Skyline routes and sheltered water.' },
  { name: 'Dubai Harbour', href: null, note: 'The 113-guest corporate example boarded here.' },
  { name: 'Palm Jumeirah', href: '/locations/palm-jumeirah', note: 'Island routes and calmer anchorage.' },
  { name: 'JBR', href: '/locations/jbr', note: 'Beachfront boarding next to the Marina.' },
  { name: 'Bluewaters', href: null, note: 'When the vessel is there and the captain gives a window.' },
  { name: 'Dubai Creek', href: null, note: 'When the charter actually loads there — we follow the boat.' },
]

export const YACHT_FORM_STYLES: readonly { id: YachtServiceId | 'not-sure'; label: string }[] = [
  { id: 'private-chef', label: 'Private chef' },
  { id: 'canapes', label: 'Canapés' },
  { id: 'buffet', label: 'Premium buffet' },
  { id: 'live-bbq', label: 'Live station / BBQ' },
  { id: 'seated', label: 'Seated dinner' },
  { id: 'not-sure', label: 'Not sure yet' },
]

export const YACHT_SIBLINGS = [
  { href: '/yacht-catering-guide-dubai', label: 'Yacht catering guide' },
  { href: '/yacht-catering-checklist-dubai', label: 'Yacht catering checklist' },
  { href: '/blog/yacht-party-menu-ideas-dubai', label: 'Yacht party menu ideas' },
  { href: '/bar-services-dubai', label: 'Bar services' },
  { href: '/locations/dubai-marina', label: 'Dubai Marina' },
] as const

export const YACHT_WHATSAPP_BASE =
  'Hi myCHEF, I would like a quote for yacht catering in Dubai.\n\nDate:\nGuest count:\nMarina:\nService style:\nYacht already booked: Yes / No\n\n(via mychef.ae/yachts)'

export function yachtQuoteWhatsApp(input: {
  date?: string
  guests?: string
  marina?: string
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
    `Service style: ${input.style || ''}`,
    `Yacht already booked: ${input.yacht || 'Yes / No'}`,
  ]
  if (input.estimate) lines.push(`Indicative estimate: ${input.estimate}`)
  lines.push('', '(via mychef.ae/yachts)')
  return lines.join('\n')
}
