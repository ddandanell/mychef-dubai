import { isParked } from '@/content/parkedUrls'

/**
 * Top-level navigation clusters.
 *
 * Four separate areas, deliberately not mixed:
 *
 *   Catering          HOW the food and service is delivered (BBQ, buffet, canapés,
 *                     grazing, live cooking, finger food, drop-off)
 *   Private Events    WHAT private occasion is being planned (birthday, anniversary,
 *                     baby shower, engagement, wedding, parties)
 *   Corporate         WHAT business use case (office, conferences, exhibitions,
 *                     product launches, galas, staff meals)
 *   Cuisines          WHICH cuisine the menu is built from
 *
 * Every href below points at a route that already exists in src/routes.tsx.
 * No new URLs, no /private-events — the Private Events group links to /events.
 */

export interface NavChild {
  href: string
  label: string
  description: string
}

export interface NavGroup {
  heading: string
  items: NavChild[]
}

/* ─────────────── Catering — service formats ─────────────── */

export const CATERING_FORMATS_ROOT = '/catering-dubai'

const CATERING_FORMATS_GROUPS_RAW: NavGroup[] = [
  {
    heading: 'Service formats',
    items: [
      { href: '/catering-dubai', label: 'Catering Dubai', description: 'Start here — the full service' },
      { href: '/buffet-catering-dubai', label: 'Buffet Catering', description: 'Relaxed, scales to bigger guest lists' },
      { href: '/canape-catering-dubai', label: 'Canapé Catering', description: 'Passed bites for standing receptions' },
    ],
  },
  {
    heading: 'Cooked on site',
    items: [
      { href: '/live-cooking-stations-dubai', label: 'Live Cooking Stations', description: 'Cooked in front of your guests' },
      { href: '/bbq-catering-dubai', label: 'BBQ Catering', description: 'Live fire, outdoors' },
      { href: '/grazing-table-dubai', label: 'Grazing Tables', description: 'A centrepiece spread to graze from' },
      { href: '/drop-off-catering-dubai', label: 'Drop-Off Catering', description: 'Delivered ready to serve' },
      { href: '/catering-packages-dubai', label: 'Catering Package', description: 'Every package option in one place' },
    ],
  },
]

/* ─────────────── Private Events — the occasion ─────────────── */

export const PRIVATE_EVENTS_ROOT = '/events'

const PRIVATE_EVENTS_GROUPS_RAW: NavGroup[] = [
  {
    heading: 'Celebrations',
    items: [
      { href: '/wedding-catering-dubai', label: 'Wedding Catering', description: 'The full food and beverage operation' },
      { href: '/birthday-catering-dubai', label: 'Birthday Catering', description: 'Adults, children, milestones and villa parties' },
      { href: '/private-party-catering-dubai', label: 'Private Parties', description: 'Engagements, anniversaries, pool parties and family gatherings' },
      { href: '/baby-shower-catering-dubai', label: 'Baby Showers', description: 'Daytime gatherings and afternoon food' },
    ],
  },
  {
    heading: 'Places & formats',
    items: [
      { href: '/desert-dining-dubai', label: 'Desert Dining', description: 'Dining in the dunes, not a villa table' },
      { href: '/afternoon-tea-catering-dubai', label: 'Afternoon Tea', description: 'A distinct service, not a dinner' },
      { href: '/yachts', label: 'Yacht Catering', description: 'Menus built for the water' },
      { href: '/events', label: 'All Events', description: 'The event planning hub' },
    ],
  },
]

/* ─────────────── Corporate — the business use case ─────────────── */

export const CORPORATE_NAV_ROOT = '/corporate'

const CORPORATE_NAV_GROUPS_RAW: NavGroup[] = [
  {
    heading: 'Company events',
    items: [
      { href: '/corporate', label: 'Corporate Catering', description: 'Start here — the full picture' },
      { href: '/corporate-event-catering-dubai', label: 'Corporate Events', description: 'Company parties, launches, awards' },
    ],
  },
  {
    heading: 'Workplace & venues',
    items: [
      { href: '/office-catering-dubai', label: 'Office Catering', description: 'Day-to-day workplace lunches' },
      { href: '/conference-catering-dubai', label: 'Conference Catering', description: 'Delegates, breaks, multi-day' },
    ],
  },
]

/* ─────────────── Cuisines ─────────────── */

export const CUISINES_ROOT = '/cuisines-dubai'

const CUISINES_GROUPS_RAW: NavGroup[] = [
  {
    heading: 'Cuisines',
    items: [
      { href: '/cuisines-dubai', label: 'All Cuisines', description: 'Every cuisine we cater in Dubai' },
      { href: '/arabic-catering-dubai', label: 'Arabic Catering', description: 'Mezze, grills and Levantine spreads' },
      { href: '/indian-catering-dubai', label: 'Indian Catering', description: 'Regional Indian cooking and thalis' },
    ],
  },
  {
    heading: 'More cuisines',
    items: [
      { href: '/italian-catering-dubai', label: 'Italian Catering', description: 'Pasta, antipasti and wood-fired dishes' },
      { href: '/mediterranean-catering-dubai', label: 'Mediterranean Catering', description: 'Light, shared, vegetable-forward' },
      { href: '/sushi-catering-dubai', label: 'Sushi Catering', description: 'Sushi counters and Japanese menus' },
    ],
  },
]

/* ─────────────── Shared helpers ─────────────── */

const live = (items: NavChild[]) => items.filter((i) => !isParked(i.href))

/** Navigation is the loudest link on the site. A parked page is not in it, anywhere. */
export const liveGroups = (groups: NavGroup[]): NavGroup[] =>
  groups.map((g) => ({ ...g, items: live(g.items) })).filter((g) => g.items.length > 0)

export const CATERING_FORMATS_GROUPS: NavGroup[] = liveGroups(CATERING_FORMATS_GROUPS_RAW)
export const PRIVATE_EVENTS_GROUPS: NavGroup[] = liveGroups(PRIVATE_EVENTS_GROUPS_RAW)
export const CORPORATE_NAV_GROUPS: NavGroup[] = liveGroups(CORPORATE_NAV_GROUPS_RAW)
export const CUISINES_GROUPS: NavGroup[] = liveGroups(CUISINES_GROUPS_RAW)

const flatten = (groups: NavGroup[]): NavChild[] => live(groups.flatMap((g) => g.items))

export const CATERING_FORMATS_CHILDREN = flatten(CATERING_FORMATS_GROUPS)
export const PRIVATE_EVENTS_CHILDREN = flatten(PRIVATE_EVENTS_GROUPS)
export const CORPORATE_NAV_CHILDREN = flatten(CORPORATE_NAV_GROUPS)
export const CUISINES_CHILDREN = flatten(CUISINES_GROUPS)

const normalize = (p: string) => (p.length > 1 && p.endsWith('/') ? p.replace(/\/+$/, '') : p)

const activeSet = (groups: NavGroup[], root: string) =>
  new Set<string>([root, ...flatten(groups).map((i) => i.href.split('#')[0])])

const CATERING_ACTIVE = activeSet(CATERING_FORMATS_GROUPS, CATERING_FORMATS_ROOT)
const EVENTS_ACTIVE = activeSet(PRIVATE_EVENTS_GROUPS, PRIVATE_EVENTS_ROOT)
const CORPORATE_ACTIVE = activeSet(CORPORATE_NAV_GROUPS, CORPORATE_NAV_ROOT)
const CUISINES_ACTIVE = activeSet(CUISINES_GROUPS, CUISINES_ROOT)

export const cateringFormatsActive = (p: string) => CATERING_ACTIVE.has(normalize(p))
export const privateEventsActive = (p: string) => EVENTS_ACTIVE.has(normalize(p))
export const corporateNavActive = (p: string) => CORPORATE_ACTIVE.has(normalize(p))
export const cuisinesNavActive = (p: string) => CUISINES_ACTIVE.has(normalize(p))
