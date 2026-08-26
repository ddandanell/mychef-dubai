/**
 * Birthday cluster.
 *
 * Live URLs:
 *   /birthday-catering-dubai                       commercial owner — adults, kids, mixed-age, home, villa
 *   /birthday-catering-package-dubai               one bookable package (8–12 guests)
 *   /blog/best-private-chef-birthday-dinner-dubai  informational, chef-led birthday dinner
 *
 * /birthday-catering-dubai 301s here. Do not add a second kids page.
 * Do not add adult / milestone / villa birthday URLs — those intents live on the hub.
 */

export const BIRTHDAY_PATHS = {
  hub: '/birthday-catering-dubai',
  kids: '/birthday-catering-dubai',
  package: '/birthday-catering-package-dubai',
  dinnerArticle: '/blog/best-private-chef-birthday-dinner-dubai',
} as const

export const BIRTHDAY_SUPPORT = {
  privateChef: '/private-chef-dubai',
  privateParty: '/private-party-catering-dubai',
  buffet: '/buffet-catering-dubai',
  canape: '/canape-catering-dubai',
  grazing: '/grazing-table-dubai',
  bbq: '/bbq-catering-dubai',
  liveStations: '/live-cooking-stations-dubai',
  dropOff: '/drop-off-catering-dubai',
  dessertTable: '/dessert-table-catering-dubai',
  mocktail: '/bar-services-dubai',
  barServices: '/bar-services-dubai',
  villas: '/villas-private-residences',
  yachts: '/yachts',
  priceGuide: '/dubai-catering-prices-guide',
  packages: '/catering-packages-dubai',
  gallery: '/gallery',
  caseStudies: '/case-studies',
  menus: '/menus',
  cuisines: '/cuisines-dubai',
  locations: '/locations',
  chefVsCatering: '/private-chef-vs-catering-dubai',
  events: '/events',
  catering: '/catering-dubai',
  dining: '/luxury-dining-experiences',
} as const

/** pages["/birthday-catering-dubai"].intent_owner + on_page */
export const BIRTHDAY_KEYWORD_LOCK = {
  primary: 'birthday catering dubai',
  title: 'Birthday Catering Dubai | myCHEF',
  description:
    'Birthday Catering Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
  h1: 'Birthday Catering Dubai',
} as const

/** pages["/birthday-catering-dubai"].internal_linking.siblings — render exactly. */
export const BIRTHDAY_SIBLING_LINKS = [
  { href: '/birthday-catering-package-dubai', label: 'Birthday catering packages' },
  { href: '/blog/best-private-chef-birthday-dinner-dubai', label: 'Private chef for birthday dinner' },
  { href: '/private-party-catering-dubai', label: 'Private party catering' },
] as const

/**
 * Published on /birthday-catering-package-dubai. This hub may point at it.
 * Do not retarget the package primary here.
 */
export const BIRTHDAY_PACKAGE = {
  guests: '8–12 guests',
  from: 'AED 3,600',
  perPerson: 'AED 300–450 per person',
  href: BIRTHDAY_PATHS.package,
} as const

export const BIRTHDAY_INQUIRY_HREF = '/inquiry'

export const BIRTHDAY_WHATSAPP_NUMBER = '971551744849'
export const BIRTHDAY_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'm planning a birthday and need catering. Date: __, Guests: __, Venue: __, Kind of birthday: __ (via mychef.ae/birthday-catering-dubai)"
export const BIRTHDAY_WHATSAPP_LINK = `https://wa.me/${BIRTHDAY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  BIRTHDAY_WHATSAPP_MESSAGE,
)}`
