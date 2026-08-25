/**
 * Dining Experiences cluster.
 *
 * Product boundary (must stay consistent site-wide):
 *   Private Chef  — "I need someone to cook for me regularly."   (3+ days, household service)
 *   Catering      — "I have people to feed or an event to run."  (one event)
 *   Experiences   — "I want to DO or EXPERIENCE something."      (the experience is the product)
 *
 * No URL changes. This file only changes hierarchy, linking and SEO ownership on
 * URLs that already exist and already hold authority.
 */

export const EXPERIENCES_ROOT = '/luxury-dining-experiences' as const

export const EXPERIENCES_PATHS = {
  hub: EXPERIENCES_ROOT,
  romantic: '/romantic-dinner-dubai',
  tasting: '/tasting-menu-dubai',
  cookingClasses: '/private-cooking-classes-dubai',
  desert: '/desert-dining-dubai',
  giftCards: '/gift-cards',
  /** Supporting pages — reached through the hub, deliberately not in the dropdown. */
  halal: '/halal-private-dining-dubai',
  valentines: '/valentines-day-catering-dubai',
  vipClub: '/vip-club',
} as const

/** Adjacent categories. Linked where the visitor's intent changes, never absorbed. */
export const CROSS_CATEGORY_PATHS = {
  yachts: '/yachts',
  birthdayCatering: '/birthday-catering-dubai',
  catering: '/catering-dubai',
  privateChef: '/private-chef-dubai',
  menus: '/menus',
  cuisines: '/cuisines-dubai',
  ourChefs: '/our-chefs',
  locations: '/locations',
} as const

export type ExperiencePath = (typeof EXPERIENCES_PATHS)[keyof typeof EXPERIENCES_PATHS]

/**
 * The visible navigation. Six items — deliberately compact.
 * Supporting pages (halal, Valentine's, VIP Club) are reached through the hub.
 */
export const EXPERIENCES_NAV = [
  {
    href: EXPERIENCES_PATHS.hub,
    label: 'Luxury Dining Experiences',
    description: 'Explore all chef-led experiences',
    owns: 'Private dining experiences Dubai',
  },
  {
    href: EXPERIENCES_PATHS.romantic,
    label: 'Romantic Dinner',
    description: 'For two, proposals and anniversaries',
    owns: 'Romantic dinner Dubai',
  },
  {
    href: EXPERIENCES_PATHS.tasting,
    label: 'Tasting Menu',
    description: 'Multi-course private dining',
    owns: 'Private tasting menu Dubai',
  },
  {
    href: EXPERIENCES_PATHS.cookingClasses,
    label: 'Private Cooking Classes',
    description: 'Cook and learn with a professional chef',
    owns: 'Private cooking classes Dubai',
  },
  {
    href: EXPERIENCES_PATHS.desert,
    label: 'Desert Dining',
    description: 'Private dining in an extraordinary setting',
    owns: 'Desert dining Dubai',
  },
  {
    href: EXPERIENCES_PATHS.giftCards,
    label: 'Gift Cards',
    description: 'Give someone a myCHEF experience',
    owns: 'Dining experience gift card Dubai',
  },
] as const

/**
 * KEYWORD LOCKS — one exclusive primary per page, same discipline as the
 * Private Chef cluster. Secondaries may repeat across pages; primaries may not.
 *
 * `volume`/`kd` are null on purpose: at the time of writing the Semrush MCP had no
 * API units left and the Ahrefs plan does not expose Keywords Explorer, so no UAE
 * volume could be measured. Locks below are assigned by SEARCH INTENT, which is what
 * prevents cannibalisation. Fill the numbers in before using them to justify effort —
 * do not guess them.
 */
export const EXPERIENCE_KEYWORD_LOCKS = {
  hub: {
    primary: { keyword: 'private dining experience dubai', volume: null, kd: null, intent: 'commercial' },
    secondary: [
      { keyword: 'luxury dining experience dubai', volume: null, kd: null },
      { keyword: 'private dining dubai', volume: null, kd: null },
      { keyword: 'unique dining experiences dubai', volume: null, kd: null },
      { keyword: 'fine dining at home dubai', volume: null, kd: null },
      { keyword: 'chef experience dubai', volume: null, kd: null },
      { keyword: 'exclusive dining experience dubai', volume: null, kd: null },
    ],
  },
  romantic: {
    primary: { keyword: 'romantic dinner dubai', volume: null, kd: null, intent: 'commercial' },
    secondary: [
      { keyword: 'private romantic dinner dubai', volume: null, kd: null },
      { keyword: 'proposal dinner dubai', volume: null, kd: null },
      { keyword: 'anniversary dinner dubai', volume: null, kd: null },
    ],
  },
  tasting: {
    primary: { keyword: 'private tasting menu dubai', volume: null, kd: null, intent: 'commercial' },
    secondary: [
      { keyword: 'tasting menu dubai', volume: null, kd: null },
      { keyword: 'chef tasting menu dubai', volume: null, kd: null },
    ],
  },
  cookingClasses: {
    primary: { keyword: 'private cooking classes dubai', volume: null, kd: null, intent: 'commercial' },
    secondary: [
      { keyword: 'cooking classes dubai', volume: null, kd: null },
      { keyword: 'couples cooking class dubai', volume: null, kd: null },
      { keyword: 'group cooking class dubai', volume: null, kd: null },
    ],
  },
  desert: {
    primary: { keyword: 'desert dining dubai', volume: null, kd: null, intent: 'commercial' },
    secondary: [
      { keyword: 'private desert dinner dubai', volume: null, kd: null },
      { keyword: 'luxury desert dining dubai', volume: null, kd: null },
    ],
  },
  giftCards: {
    primary: { keyword: 'dining experience gift card dubai', volume: null, kd: null, intent: 'transactional' },
    secondary: [{ keyword: 'private chef gift card', volume: null, kd: null }],
  },
  halal: {
    primary: { keyword: 'halal private dining dubai', volume: null, kd: null, intent: 'commercial' },
    secondary: [
      { keyword: 'halal private chef dining', volume: null, kd: null },
      { keyword: 'halal fine dining at home', volume: null, kd: null },
    ],
  },
  valentines: {
    primary: { keyword: 'valentines day dinner dubai', volume: null, kd: null, intent: 'commercial' },
    secondary: [{ keyword: 'valentines day private chef dubai', volume: null, kd: null }],
  },
} as const

/** Hub SEO. Keeps the existing "Luxury Dining Experiences" positioning, widens the semantics. */
export const experiencesHubSeo = {
  title: 'Luxury Dining Experiences Dubai | Private Chef Dining | myCHEF',
  description:
    'Luxury dining experiences in Dubai, from romantic dinners and tasting menus to cooking classes and desert dining. Designed around you by myCHEF.',
  h1: 'Luxury dining in Dubai, designed around the moment',
  canonical: EXPERIENCES_PATHS.hub,
} as const

export const EXPERIENCES_INQUIRY_HREF =
  '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=dining-experiences'

export const EXPERIENCES_WHATSAPP_MESSAGE =
  "Hi myCHEF, I'd like to plan a private dining experience"

/** Flat list the mobile menu consumes. */
export const EXPERIENCES_NAV_CHILDREN = EXPERIENCES_NAV.map((i) => ({
  href: i.href,
  label: i.label,
  description: i.description,
}))

/** Paths that should light up the "Dining Experiences" nav item. */
const ACTIVE_PATHS = new Set<string>([
  ...Object.values(EXPERIENCES_PATHS),
])

export function experiencesClusterActive(pathname: string): boolean {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return ACTIVE_PATHS.has(path)
}

export const EXPERIENCES_WHATSAPP_NUMBER = '971551744849'
export const EXPERIENCES_WHATSAPP_LINK = `https://wa.me/${EXPERIENCES_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  EXPERIENCES_WHATSAPP_MESSAGE,
)}`

export const EXPERIENCES_FOOTER_LINKS = [
  { label: 'Dining Experiences', href: EXPERIENCES_PATHS.hub },
  { label: 'Romantic Dinner', href: EXPERIENCES_PATHS.romantic },
  { label: 'Tasting Menu', href: EXPERIENCES_PATHS.tasting },
  { label: 'Private Cooking Classes', href: EXPERIENCES_PATHS.cookingClasses },
  { label: 'Desert Dining', href: EXPERIENCES_PATHS.desert },
  { label: 'Halal Private Dining', href: EXPERIENCES_PATHS.halal },
  { label: 'Gift Cards', href: EXPERIENCES_PATHS.giftCards },
] as const

const SITE = 'https://www.mychef.ae'

/**
 * Breadcrumb JSON-LD. The visible and structured hierarchy is
 * Home > Dining Experiences > <page>, even though the URLs stay flat —
 * information hierarchy and URL hierarchy do not have to match.
 */
export function experiencesBreadcrumb(pageName: string, path: string) {
  const trail = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Dining Experiences', item: `${SITE}${EXPERIENCES_PATHS.hub}` },
  ]
  if (path !== EXPERIENCES_PATHS.hub) {
    trail.push({ '@type': 'ListItem', position: 3, name: pageName, item: `${SITE}${path}` })
  }
  return { '@type': 'BreadcrumbList', itemListElement: trail }
}
