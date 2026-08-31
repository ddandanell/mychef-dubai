/**
 * The single business entity for myCHEF.
 *
 * Service-area business: chefs go to the villa. There is no dining room.
 * Do not mark this as Restaurant or FoodEstablishment.
 *
 * Aligned to the Google Business Profile lock and the visible footer:
 *
 *   public name   myCHEF
 *   legal name    Numini FZC
 *   phone         +971 55 174 4849
 *   website       https://www.mychef.ae/
 *   registered    Business Centre, Sharjah Publishing City Free Zone, Sharjah
 *   service area  Dubai (not Abu Dhabi, not a fake Palm kitchen)
 *
 * Emit the full node only on `/` and `/about`. Everywhere else, point at `@id`.
 */

import { ALL_AREA_REFS, PLACE_NODES } from './serviceAreas'

export const ORGANIZATION_ID = 'https://www.mychef.ae/#organization'
export const WEBSITE_ID = 'https://www.mychef.ae/#website'
export const LOGO_URL = 'https://www.mychef.ae/logo.svg'
export const SITE_URL = 'https://www.mychef.ae'

export const ORGANIZATION_SCHEMA = {
  '@type': ['Organization', 'ProfessionalService', 'FoodService'],
  '@id': ORGANIZATION_ID,
  name: 'myCHEF',
  legalName: 'Numini FZC',
  url: `${SITE_URL}/`,
  logo: LOGO_URL,
  image: `${SITE_URL}/images/home-hero.webp`,
  description:
    'Private chef and catering in Dubai. myCHEF designs the experience and brings vetted chefs and catering partners who cook at the client’s villa, yacht or home. There is no dining room.',
  telephone: '+971 55 174 4849',
  priceRange: '$$$$',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  knowsLanguage: ['en', 'ar'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Business Centre, Sharjah Publishing City Free Zone',
    addressLocality: 'Sharjah',
    addressRegion: 'Sharjah',
    addressCountry: 'AE',
  },
  areaServed: ALL_AREA_REFS,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+971 55 174 4849',
    availableLanguage: ['English', 'Arabic'],
    areaServed: { '@id': `${SITE_URL}/#place-dubai` },
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61591681367227',
    'https://www.pinterest.com/mychefdubai/',
    'https://www.linkedin.com/company/mychefdubai/',
    'https://www.youtube.com/@mychefuae',
    'https://x.com/mychefdubai',
    'https://www.reddit.com/user/myChefDUBAI',
  ],
}

export const WEBSITE_SCHEMA = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'myCHEF',
  inLanguage: 'en-AE',
  publisher: { '@id': ORGANIZATION_ID },
}

/** Reference the business from another node instead of restating it. */
export const ORGANIZATION_REF = { '@id': ORGANIZATION_ID }

export function homepageGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, ...PLACE_NODES],
  }
}

export function aboutGraph(breadcrumb: Record<string, unknown>) {
  return {
    '@context': 'https://schema.org',
    '@graph': [ORGANIZATION_SCHEMA, breadcrumb],
  }
}
