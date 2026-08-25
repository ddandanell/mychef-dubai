/**
 * Catering cluster — existing SEO URLs, grouped for nav.
 * Do not nest under /catering-dubai/. Do not change these paths.
 *
 * Hub primary: "catering dubai". Sibling occasion/format primaries stay on
 * their own pages. See skills/mychef-writing-system/06-seo-language.md.
 */

export const CATERING_ROOT = '/catering-dubai' as const

export const CATERING_PATHS = {
  overview: CATERING_ROOT,
  fullService: `${CATERING_ROOT}#full-service`,
  styles: `${CATERING_ROOT}#styles`,
  weddings: '/wedding-catering-dubai',
  corporateEvents: '/corporate-event-catering-dubai',
  corporateHub: '/corporate',
  office: '/office-catering-dubai',
  birthdays: '/birthday-catering-dubai',
  privateEvents: '/private-party-catering-dubai',
  villas: '/villas-private-residences',
  yachts: '/yachts',
  privateJet: '/private-jet-catering-dubai',
  dropOff: '/drop-off-catering-dubai',
  menus: '/menus',
  cuisines: '/cuisines-dubai',
  packages: '/catering-packages-dubai',
  priceGuide: '/dubai-catering-prices-guide',
  calculator: '/catering-cost-calculator-dubai',
} as const

export type CateringNavItem = {
  href: string
  label: string
  description: string
}

/** Compact mega + mobile list. Six items, same shape as private chef CLUSTER_NAV. */
export const CATERING_NAV = [
  {
    href: CATERING_PATHS.overview,
    label: 'Catering Dubai',
    description: 'Everything we can build around your event',
  },
  {
    href: CATERING_PATHS.weddings,
    label: 'Weddings',
    description: 'Intimate dinner to a larger reception',
  },
  {
    href: CATERING_PATHS.corporateEvents,
    label: 'Corporate Events',
    description: 'Board meetings, launches, client dinners',
  },
  {
    href: CATERING_PATHS.villas,
    label: 'Villa Catering',
    description: 'Food only through to a complete villa event',
  },
  {
    href: CATERING_PATHS.yachts,
    label: 'Yacht Catering',
    description: 'Timing, storage, setup and service on the water',
  },
  {
    href: CATERING_PATHS.privateJet,
    label: 'Private Jet Catering',
    description: 'Food coordinated around the flight',
  },
] as const

export const CATERING_NAV_CHILDREN: CateringNavItem[] = CATERING_NAV.map((item) => ({
  href: item.href,
  label: item.label,
  description: item.description,
}))

/** Pathnames that should gold-state the Catering nav item. Hashes ignored. */
const ACTIVE_PATHS = new Set([
  ...CATERING_NAV_CHILDREN.map((item) => item.href.split('#')[0]).filter(Boolean),
  CATERING_PATHS.birthdays,
  CATERING_PATHS.privateEvents,
  CATERING_PATHS.dropOff,
  CATERING_PATHS.menus,
  '/blog/wedding-catering-cost-dubai',
  '/wedding-catering-checklist-dubai',
  '/wedding-catering-menu-planning-dubai',
])

export function cateringClusterActive(pathname: string) {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.replace(/\/+$/, '') : pathname
  return ACTIVE_PATHS.has(path)
}

export const CATERING_INQUIRY_HREF =
  '/inquiry'

export const CATERING_WHATSAPP_NUMBER = '971551744849'
export const CATERING_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like a catering quote for an event. Date: __, Guests: __, Venue: __, What we are planning: __ (via mychef.ae/catering-dubai)"
export const CATERING_WHATSAPP_LINK = `https://wa.me/${CATERING_WHATSAPP_NUMBER}?text=${encodeURIComponent(CATERING_WHATSAPP_MESSAGE)}`

export const CATERING_KEYWORD_LOCK = {
  primary: 'catering dubai',
  title: 'Catering Dubai | Food Only to Full Event Support | myCHEF',
  description:
    'Catering in Dubai built around your event: food delivered to the venue, or chefs, staff, tables and full event support. Tell us what you are planning.',
} as const

export const CATERING_FOOTER_LINKS = [
  { label: 'Catering Dubai', href: CATERING_PATHS.overview },
  { label: 'Weddings', href: CATERING_PATHS.weddings },
  { label: 'Corporate Events', href: CATERING_PATHS.corporateEvents },
  { label: 'Birthdays & Celebrations', href: CATERING_PATHS.birthdays },
  { label: 'Private Events', href: CATERING_PATHS.privateEvents },
  { label: 'Villa Catering', href: CATERING_PATHS.villas },
  { label: 'Yacht Catering', href: CATERING_PATHS.yachts },
  { label: 'Private Jet Catering', href: CATERING_PATHS.privateJet },
  { label: 'Food Only & Drop-Off', href: CATERING_PATHS.dropOff },
] as const
