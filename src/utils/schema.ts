import { ORGANIZATION_REF, ORGANIZATION_SCHEMA } from '@/lib/organizationSchema'

const SITE_URL = 'https://www.mychef.ae'
const SITE_NAME = 'myCHEF'

/**
 * All three of these used to build separate business nodes — two of them with
 * no @id — so the site described itself as three different companies. They now
 * return the one entity in src/lib/organizationSchema.ts. Kept as named exports
 * because pages embed them by name; identical nodes sharing an @id collapse to
 * one on parse.
 */
export function organizationSchema() {
  return ORGANIZATION_SCHEMA
}

export function professionalServiceSchema() {
  return ORGANIZATION_SCHEMA
}

export function localBusinessSchema() {
  return ORGANIZATION_SCHEMA
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
  const items = (faqs || []).filter((faq) => faq.question?.trim() && faq.answer?.trim())
  if (!items.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
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
  _area: string = 'Dubai',
) {
  return {
    '@type': 'Service',
    name,
    description,
    provider: ORGANIZATION_REF,
    serviceType,
    areaServed: [{ '@id': 'https://www.mychef.ae/#place-dubai' }],
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
    seller: ORGANIZATION_REF,
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
    seller: ORGANIZATION_REF,
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
    organizer: ORGANIZATION_REF,
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': 'https://www.mychef.ae/#website',
    name: SITE_NAME,
    url: SITE_URL,
    publisher: ORGANIZATION_REF,
    inLanguage: 'en-AE',
  }
}
