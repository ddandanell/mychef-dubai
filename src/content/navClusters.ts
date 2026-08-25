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
 *   Packages          Predefined packaged solutions
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

export const CATERING_FORMATS_GROUPS: NavGroup[] = [
  {
    heading: 'Service formats',
    items: [
      { href: '/catering-dubai', label: 'Catering Dubai', description: 'Start here — the full service' },
      { href: '/buffet-catering-dubai', label: 'Buffet Catering', description: 'Relaxed, scales to bigger guest lists' },
      { href: '/canape-catering-dubai', label: 'Canapé Catering', description: 'Passed bites for standing receptions' },
      { href: '/finger-food-catering-dubai', label: 'Finger Food', description: 'Informal, no cutlery needed' },
    ],
  },
  {
    heading: 'Cooked on site',
    items: [
      { href: '/live-cooking-stations-dubai', label: 'Live Cooking Stations', description: 'Cooked in front of your guests' },
      { href: '/bbq-catering-dubai', label: 'BBQ Catering', description: 'Live fire, outdoors' },
      { href: '/grazing-table-dubai', label: 'Grazing Tables', description: 'A centrepiece spread to graze from' },
      { href: '/drop-off-catering-dubai', label: 'Drop-Off Catering', description: 'Delivered ready to serve' },
    ],
  },
]

/* ─────────────── Private Events — the occasion ─────────────── */

export const PRIVATE_EVENTS_ROOT = '/events'

export const PRIVATE_EVENTS_GROUPS: NavGroup[] = [
  {
    heading: 'Celebrations',
    items: [
      { href: '/birthday-catering-dubai', label: 'Birthday Catering', description: 'Adults, milestones and villa parties' },
      { href: '/kids-birthday-catering-dubai', label: 'Kids Birthdays', description: "Children's menus and party food" },
      { href: '/anniversary-catering-dubai', label: 'Anniversaries', description: 'Intimate dinners and milestones' },
      { href: '/graduation-catering-dubai', label: 'Graduations', description: 'Marking the end of something' },
    ],
  },
  {
    heading: 'Milestones & parties',
    items: [
      { href: '/wedding-catering-dubai', label: 'Wedding Catering', description: 'The full food and beverage operation' },
      { href: '/engagement-catering-dubai', label: 'Engagements', description: 'Proposals and engagement parties' },
      { href: '/baby-shower-catering-dubai', label: 'Baby Showers', description: 'Daytime gatherings and afternoon food' },
      { href: '/private-party-catering-dubai', label: 'Private Parties', description: 'Everything that is simply a party' },
    ],
  },
]

/* ─────────────── Corporate — the business use case ─────────────── */

export const CORPORATE_NAV_ROOT = '/corporate'

export const CORPORATE_NAV_GROUPS: NavGroup[] = [
  {
    heading: 'Company events',
    items: [
      { href: '/corporate', label: 'Corporate Catering', description: 'Start here — the full picture' },
      { href: '/corporate-event-catering-dubai', label: 'Corporate Events', description: 'Company parties, launches, awards' },
      { href: '/product-launch-catering-dubai', label: 'Product Launches', description: 'Receptions that open the doors well' },
      { href: '/gala-dinner-catering-dubai', label: 'Gala Dinners', description: 'Formal dinners and award nights' },
    ],
  },
  {
    heading: 'Workplace & venues',
    items: [
      { href: '/office-catering-dubai', label: 'Office Catering', description: 'Day-to-day workplace lunches' },
      { href: '/conference-catering-dubai', label: 'Conference Catering', description: 'Delegates, breaks, multi-day' },
      { href: '/exhibition-catering-dubai', label: 'Exhibition Catering', description: 'Stands and hospitality suites' },
      { href: '/staff-meals-catering-dubai', label: 'Staff Meals', description: 'Daily meals at volume' },
    ],
  },
]

/* ─────────────── Packages — predefined solutions ─────────────── */

export const PACKAGES_ROOT = '/catering-packages-dubai'

export const PACKAGES_GROUPS: NavGroup[] = [
  {
    heading: 'All packages',
    items: [
      { href: '/catering-packages-dubai', label: 'Catering Packages', description: 'Every package and starting price' },
      { href: '/birthday-catering-package-dubai', label: 'Birthday Package', description: 'Private chef for 8–12 guests' },
      { href: '/family-feast-package-dubai', label: 'Family Feast', description: 'A shared table for the household' },
    ],
  },
  {
    heading: 'More packages',
    items: [
      { href: '/corporate-dinner-package-dubai', label: 'Corporate Dinner', description: 'Executive dinners for small groups' },
      { href: '/date-night-package-dubai', label: 'Date Night', description: 'A chef-cooked dinner for two' },
    ],
  },
]

/* ─────────────── Shared helpers ─────────────── */

const flatten = (groups: NavGroup[]): NavChild[] => groups.flatMap((g) => g.items)

export const CATERING_FORMATS_CHILDREN = flatten(CATERING_FORMATS_GROUPS)
export const PRIVATE_EVENTS_CHILDREN = flatten(PRIVATE_EVENTS_GROUPS)
export const CORPORATE_NAV_CHILDREN = flatten(CORPORATE_NAV_GROUPS)
export const PACKAGES_CHILDREN = flatten(PACKAGES_GROUPS)

const normalize = (p: string) => (p.length > 1 && p.endsWith('/') ? p.replace(/\/+$/, '') : p)

const activeSet = (groups: NavGroup[], root: string) =>
  new Set<string>([root, ...flatten(groups).map((i) => i.href.split('#')[0])])

const CATERING_ACTIVE = activeSet(CATERING_FORMATS_GROUPS, CATERING_FORMATS_ROOT)
const EVENTS_ACTIVE = activeSet(PRIVATE_EVENTS_GROUPS, PRIVATE_EVENTS_ROOT)
const CORPORATE_ACTIVE = activeSet(CORPORATE_NAV_GROUPS, CORPORATE_NAV_ROOT)
const PACKAGES_ACTIVE = activeSet(PACKAGES_GROUPS, PACKAGES_ROOT)

export const cateringFormatsActive = (p: string) => CATERING_ACTIVE.has(normalize(p))
export const privateEventsActive = (p: string) => EVENTS_ACTIVE.has(normalize(p))
export const corporateNavActive = (p: string) => CORPORATE_ACTIVE.has(normalize(p))
export const packagesNavActive = (p: string) => PACKAGES_ACTIVE.has(normalize(p))
