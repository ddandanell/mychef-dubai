/**
 * Corporate catering cluster.
 *
 * Hierarchy (information, not URL — the URLs are established and do not move):
 *   /corporate                        broad hub — owns "corporate catering dubai"
 *   └─ /corporate-event-catering-dubai one-off company events — owns "corporate event catering dubai"
 *      └─ speciality pages (launches, galas, exhibitions, brand activations, dinner packages)
 *   └─ recurring/workplace pages (office, business lunch, conference, staff meals, meal prep, retainer)
 *   └─ production pages (production, film crew)
 *
 * The event page targets ONE-OFF company events: parties, launches, celebrations,
 * networking, award nights, branded events. It must NOT compete for daily office
 * lunches, conference coffee breaks, staff meals or production catering — each of
 * those has its own page below.
 */

export const CORPORATE_PATHS = {
  hub: '/corporate',
  events: '/corporate-event-catering-dubai',
  // Recurring / workplace
  office: '/office-catering-dubai',
  businessLunch: '/business-lunch-catering-dubai',
  conference: '/conference-catering-dubai',
  staffMeals: '/staff-meals-catering-dubai',
  mealPrep: '/corporate-meal-prep-dubai',
  retainer: '/corporate-retainer-dubai',
  // Event specialities
  productLaunch: '/product-launch-catering-dubai',
  brandActivation: '/brand-activation-catering-dubai',
  exhibition: '/exhibition-catering-dubai',
  gala: '/gala-dinner-catering-dubai',
  dinnerPackage: '/corporate-dinner-package-dubai',
  // Production
  production: '/production-catering-dubai',
  filmCrew: '/film-crew-catering-dubai',
  // Informational
  checklist: '/corporate-catering-checklist-dubai',
  fullServiceVsDropOff: '/blog/corporate-catering-full-service-vs-drop-off',
  eventIdeas: '/blog/corporate-event-catering-ideas-dubai',
  // Cross-category
  priceGuide: '/dubai-catering-prices-guide',
  catering: '/catering-dubai',
  canape: '/canape-catering-dubai',
  halal: '/halal-catering-dubai',
  farewell: '/farewell-catering-dubai',
} as const

/**
 * KEYWORD LOCKS — one exclusive primary per page. Secondaries may repeat; primaries may not.
 *
 * Volumes are null: the connected Semrush account has zero API units and the Ahrefs plan
 * does not expose Keywords Explorer, so no UAE volume could be measured. Allocation below
 * is by commercial intent and site architecture. Add volume/difficulty once units are
 * restored — do not guess them.
 */
export const CORPORATE_KEYWORD_LOCKS = {
  hub: {
    primary: 'corporate catering dubai',
    note: 'Broad hub. The event page must not target this.',
  },
  events: {
    primary: 'corporate event catering dubai',
    secondary: [
      'corporate event caterers dubai',
      'corporate event catering services dubai',
      'company event catering dubai',
      'company party catering dubai',
      'corporate party catering dubai',
      'office party catering dubai',
      'business event catering dubai',
      'corporate function catering dubai',
      'staff party catering dubai',
      'employee party catering dubai',
      'annual company party catering dubai',
      'corporate holiday party catering dubai',
      'office christmas party catering dubai',
      'networking event catering dubai',
      'awards night catering dubai',
      'corporate buffet catering dubai',
      'corporate canape catering dubai',
      'corporate event catering packages dubai',
      'corporate event catering cost dubai',
      'halal corporate event catering dubai',
    ],
    note: 'Owns one-off company events INCLUDING the whole company-party family. No separate company-party page yet.',
  },
  office: { primary: 'office catering dubai', note: 'Daily/office lunch catering.' },
  businessLunch: { primary: 'business lunch catering dubai', note: 'Boardroom and client-meeting lunches.' },
  conference: { primary: 'conference catering dubai', note: 'Delegates, coffee breaks, multi-day programmes.' },
  staffMeals: { primary: 'staff meals catering dubai', note: 'Daily workforce meals and canteen.' },
  mealPrep: { primary: 'corporate meal prep dubai', note: 'Portioned employee meals, workplace wellness.' },
  retainer: { primary: 'corporate catering retainer dubai', note: 'Recurring accounts and retained service.' },
  productLaunch: { primary: 'product launch catering dubai' },
  brandActivation: { primary: 'brand activation catering dubai' },
  exhibition: { primary: 'exhibition catering dubai' },
  gala: { primary: 'gala dinner catering dubai' },
  dinnerPackage: { primary: 'corporate dinner package dubai' },
  production: { primary: 'production catering dubai' },
  filmCrew: { primary: 'film crew catering dubai' },
} as const

export const corporateEventSeo = {
  title: 'Corporate Event Catering Dubai | Company Parties & Galas | myCHEF',
  description:
    'Corporate event catering in Dubai for company parties, launches, galas and networking events. Menus, chefs, staff, setup and itemised proposals.',
  h1: 'Corporate Event Catering in Dubai for Company Parties and Events',
  canonical: CORPORATE_PATHS.events,
} as const

const SITE = 'https://www.mychef.ae'

/** Home > Corporate Catering > Corporate Event Catering */
export function corporateBreadcrumb(pageName: string, path: string) {
  const trail = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Corporate Catering', item: `${SITE}${CORPORATE_PATHS.hub}` },
  ]
  if (path !== CORPORATE_PATHS.hub) {
    trail.push({ '@type': 'ListItem', position: 3, name: pageName, item: `${SITE}${path}` })
  }
  return { '@type': 'BreadcrumbList', itemListElement: trail }
}

export const CORPORATE_INQUIRY_HREF =
  '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate-event-catering'

export const CORPORATE_WHATSAPP_MESSAGE =
  "Hi myCHEF, I'd like a proposal for a corporate event"

export const CORPORATE_WHATSAPP_LINK = `https://wa.me/971551744849?text=${encodeURIComponent(
  CORPORATE_WHATSAPP_MESSAGE,
)}`
