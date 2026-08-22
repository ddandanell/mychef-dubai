const SITE_URL = 'https://www.mychef.ae'
const SITE_NAME = 'myCHEF Dubai'
const LOGO_URL = `${SITE_URL}/logo.svg`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      'Premium private-dining and event design in Dubai. We design bespoke culinary experiences and connect clients with vetted, licensed independent chefs and catering partners.',
    // sameAs: add verified social profile URLs here once accounts are live
    // (Instagram, Facebook, LinkedIn, TikTok, Pinterest, Google Business Profile)
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-55-174-4849',
      email: 'info@mychef.id',
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: ['English'],
    },
  }
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      'Premium private-dining and event design in Dubai. We design bespoke culinary experiences and connect clients with vetted, licensed independent chefs and catering partners. Culinary preparation is performed by those licensed third parties.',
    url: SITE_URL,
    logo: LOGO_URL,
    image: `${SITE_URL}/images/home-hero.webp`,
    telephone: '+971-55-174-4849',
    email: 'info@mychef.id',
    priceRange: '$$$$',
    currenciesAccepted: 'AED',
    areaServed: { '@type': 'City', name: 'Dubai' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    knowsLanguage: ['en', 'ar'],
    slogan: 'One conversation. One plan. One standard. One unforgettable experience.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+971-55-174-4849',
      email: 'info@mychef.id',
      availableLanguage: ['English', 'Arabic'],
    },
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      'Premium private-dining and event design in Dubai. We design bespoke culinary experiences and connect clients with vetted, licensed independent chefs and catering partners.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    telephone: '+971-55-174-4849',
    priceRange: '$$$$',
    currenciesAccepted: 'AED, USD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/** Strip markdown-style links [text](url) → text so FAQ schema text stays clean
 * even when the visible answer renders in-answer internal links. */
export function plainFaqAnswer(answer: string): string {
  return answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainFaqAnswer(faq.answer),
      },
    })),
  }
}

export function serviceSchema(
  name: string,
  description: string,
  serviceType: string,
  area: string = 'Dubai',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    serviceType,
    areaServed: {
      '@type': 'City',
      name: area,
    },
  }
}

export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string; image?: string }[],
  totalTime?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

function toAbsoluteUrl(url?: string) {
  if (!url) return undefined
  if (/^https?:\/\//i.test(url)) return url
  return `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`
}

export function offerSchema(
  name: string,
  description: string,
  price: string,
  priceCurrency: string = 'AED',
  url?: string,
  availability: string = 'https://schema.org/InStock',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency,
    availability,
    url: toAbsoluteUrl(url),
    seller: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function aggregateOfferSchema(
  name: string,
  description: string,
  lowPrice: string,
  highPrice: string,
  priceCurrency: string = 'AED',
  url?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    name,
    description,
    lowPrice,
    highPrice,
    priceCurrency,
    url: toAbsoluteUrl(url),
    seller: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function eventSchema(
  name: string,
  description: string,
  startDate?: string,
  endDate?: string,
  location?: string,
  url?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: location
      ? {
          '@type': 'Place',
          name: location,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'AE',
          },
        }
      : undefined,
    url: url ? `${SITE_URL}${url}` : undefined,
    organizer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}
