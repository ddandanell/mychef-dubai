/**
 * The single business entity for myCHEF.
 *
 * Everything that describes the company emits this one node, at this one @id.
 * The site previously carried four: #organization, #business, and two with no
 * @id at all — which is how a search engine ends up holding three versions of
 * the same company.
 *
 * Aligned to the Google Business Profile lock. Change them together or the
 * profile, the site and the schema drift apart again:
 *
 *   public name   myCHEF          (no area or keywords in the title)
 *   legal name    Numini FZC      (on the licence and here, never in Maps)
 *   phone         +971 55 174 4849
 *   website       https://www.mychef.ae/
 *   type          service-area business, address hidden, one profile
 *   service area  Dubai and the 15 communities that have location pages,
 *                 not "AE" and not Abu Dhabi
 *
 * No street address: myCHEF cooks at the client's place, so there is no
 * customer-facing premises to publish. Locality only.
 */

/** The 15 communities with their own location pages. Keep in step with scripts/generate-sitemap.ts. */
const SERVICE_AREAS = [
  'Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'Jumeirah', 'JBR',
  'Business Bay', 'DIFC', 'Emirates Hills', 'Arabian Ranches', 'Dubai Hills',
  'Jumeirah Village Circle', 'Jumeirah Lake Towers', 'Bluewaters Island',
  'Umm Suqeim', 'Al Barsha',
] as const

export const ORGANIZATION_ID = 'https://www.mychef.ae/#organization'

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': ORGANIZATION_ID,
  name: 'myCHEF',
  legalName: 'Numini FZC',
  url: 'https://www.mychef.ae/',
  logo: 'https://www.mychef.ae/logo.svg',
  image: 'https://www.mychef.ae/images/home-hero.webp',
  description:
    'Private chef and catering in Dubai. myCHEF designs the experience and matches clients with vetted, licensed independent chefs and catering partners, who carry out the cooking.',
  telephone: '+971 55 174 4849',
  priceRange: '$$$$',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  knowsLanguage: ['en', 'ar'],
  // Locality only. A service-area business publishes no street address.
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  areaServed: [
    { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
    ...SERVICE_AREAS.map((name) => ({ '@type': 'Place' as const, name })),
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+971 55 174 4849',
    availableLanguage: ['English', 'Arabic'],
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=61591681367227',
    'https://www.pinterest.com/mychefdubai/',
    'https://www.linkedin.com/company/mychefdubai/',
    'https://www.youtube.com/@mychefuae',
    'https://x.com/mychefdubai',
    'https://www.reddit.com/user/myChefDUBAI',
    // Add the Google Maps URL here once the profile is verified, so the
    // listing and this entity are explicitly the same thing.
  ],
}

/** Reference the business from another node instead of restating it. */
export const ORGANIZATION_REF = { '@id': ORGANIZATION_ID }
