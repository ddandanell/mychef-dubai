const SITE_URL = 'https://mychef.ae'
const SITE_NAME = 'myCHEF Dubai'
const LOGO_URL = `${SITE_URL}/logo.svg`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'Premium private chef and luxury catering services in Dubai.',
    sameAs: [
      'https://www.instagram.com/mychefdubai',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-55-174-4849',
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: ['English'],
    },
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodService',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'Premium private chef and luxury catering services in Dubai.',
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

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
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
