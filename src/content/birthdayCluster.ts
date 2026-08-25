/**
 * Birthday catering cluster — four URLs, no more.
 *
 *   /birthday-catering-dubai                       broad commercial hub (adults, milestones,
 *                                                  mixed-age, home and villa parties)
 *   /kids-birthday-catering-dubai                  children's birthdays
 *   /birthday-catering-package-dubai               ONE bookable package (8–12 guests)
 *   /blog/best-private-chef-birthday-dinner-dubai  informational, chef-led birthday dinner
 *
 * Do NOT add "adult birthday catering", "milestone birthday catering" or
 * "villa birthday catering" pages. Those intents live on the hub; a separate page
 * would cannibalise it.
 */

export const BIRTHDAY_PATHS = {
  hub: '/birthday-catering-dubai',
  kids: '/kids-birthday-catering-dubai',
  package: '/birthday-catering-package-dubai',
  dinnerArticle: '/blog/best-private-chef-birthday-dinner-dubai',
} as const

/** Supporting pages. Linked selectively where they help a decision — not all at once. */
export const BIRTHDAY_SUPPORT = {
  privateChef: '/private-chef-dubai',
  partyCatering: '/party-catering-dubai',
  privateParty: '/private-party-catering-dubai',
  poolParty: '/pool-party-catering-dubai',
  buffet: '/buffet-catering-dubai',
  canape: '/canape-catering-dubai',
  fingerFood: '/finger-food-catering-dubai',
  grazing: '/grazing-table-dubai',
  bbq: '/bbq-catering-dubai',
  liveStations: '/live-cooking-stations-dubai',
  dropOff: '/drop-off-catering-dubai',
  dessertTable: '/dessert-table-catering-dubai',
  dessertCart: '/dessert-cart-dubai',
  mocktail: '/mocktail-bar-catering-dubai',
  barServices: '/bar-services-dubai',
  afternoonTea: '/afternoon-tea-catering-dubai',
  villas: '/villas-private-residences',
  priceGuide: '/dubai-catering-prices-guide',
  costCalculator: '/catering-cost-calculator-dubai',
  gallery: '/gallery',
  caseStudies: '/case-studies',
  menus: '/menus',
  cuisines: '/cuisines-dubai',
  locations: '/locations',
  chefVsCatering: '/private-chef-vs-catering-dubai',
} as const

/**
 * KEYWORD LOCKS — one primary owner per intent.
 *
 * Volumes are null: the Semrush account has zero API units and the Ahrefs plan does not
 * expose Keywords Explorer, so no UAE volume could be measured. Allocation is by
 * commercial intent. Populate volume/KD/CPC from a UAE export before using these to
 * justify effort — do not guess them.
 */
export const BIRTHDAY_KEYWORD_LOCKS = {
  hub: {
    primary: 'birthday catering dubai',
    secondary: [
      'birthday party catering dubai',
      'birthday caterers dubai',
      'birthday catering services dubai',
      'birthday party food catering dubai',
      'birthday catering prices dubai',
      'birthday catering at home dubai',
      'villa birthday catering dubai',
      'adult birthday catering dubai',
      'milestone birthday catering dubai',
      'birthday buffet catering dubai',
      'surprise birthday catering dubai',
      'halal birthday catering dubai',
    ],
    note: 'Owns the broad head term plus adult/milestone/villa intent. Introduces kids, package and private-chef dinner, then hands off.',
  },
  kids: {
    primary: 'kids birthday catering dubai',
    note: 'Children\'s menus, party boxes, age-aware presentation, allergy planning. The hub mentions it once and links.',
  },
  package: {
    primary: 'birthday catering package dubai',
    note: 'ONE bookable package (8–12 guests). Must not be optimised for the broad head term.',
  },
  dinnerArticle: {
    primary: 'private chef birthday dinner dubai',
    note: 'Informational/comparison. The hub carries a short comparison only.',
  },
} as const

/** Not primary targets — myCHEF does not contract or control these services. */
export const BIRTHDAY_NON_TARGETS = [
  'birthday party planner dubai',
  'birthday organizer dubai',
  'birthday venue dubai',
  'birthday decoration dubai',
  'birthday entertainer dubai',
  'balloon decoration dubai',
  'birthday photographer dubai',
  'cheap birthday catering dubai',
] as const

export const birthdayHubSeo = {
  title: 'Birthday Catering Dubai | Kids, Adults & Villas | myCHEF',
  description:
    'Plan birthday catering in Dubai for adult, kids and villa parties. Compare menus, service styles and optional add-ons, then request a tailored quote.',
  h1: 'Birthday Catering in Dubai for Every Kind of Celebration',
  canonical: BIRTHDAY_PATHS.hub,
} as const

/**
 * The one concrete package, as published on /birthday-catering-package-dubai.
 * Single source — if the package changes, edit it there and here together.
 */
export const BIRTHDAY_PACKAGE = {
  guests: '8–12 guests',
  from: 'AED 3,600',
  perPerson: 'AED 300–450 per person',
  href: BIRTHDAY_PATHS.package,
} as const

const SITE = 'https://www.mychef.ae'

export function birthdayBreadcrumb(pageName: string, path: string) {
  const trail = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Catering', item: `${SITE}/catering-dubai` },
  ]
  trail.push({ '@type': 'ListItem', position: 3, name: pageName, item: `${SITE}${path}` })
  return { '@type': 'BreadcrumbList', itemListElement: trail }
}

export const BIRTHDAY_INQUIRY_HREF =
  '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=birthday-catering-dubai'

export const BIRTHDAY_WHATSAPP_MESSAGE =
  "Hi myCHEF, I'd like a quote for birthday catering"

export const BIRTHDAY_WHATSAPP_LINK = `https://wa.me/971551744849?text=${encodeURIComponent(
  BIRTHDAY_WHATSAPP_MESSAGE,
)}`
