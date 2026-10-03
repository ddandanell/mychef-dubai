import { SERVICES, MEAL_COMPLEXITIES, MEMBER_NOTE, PRICE_NOTE } from '@/content/privateChefPricing'
import { faqPageSchema, serviceSchema } from '@/utils/schema'
export function householdSchema(
  name: string,
  description: string,
  faqs: readonly { q: string; a: string }[],
  offer?: { price: number; description: string; url: string },
) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...serviceSchema(name, description, 'Private chef service'),
        ...(offer ? { offers: {
          '@type': 'Offer', price: offer.price, priceCurrency: 'AED',
          description: offer.description, url: `https://www.mychef.ae${offer.url}`,
        } } : {}),
      },
      faqPageSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
    ],
  }
}

/** Price every published offer from the same rate card used in visible components. */
export function chefVisitSchema(name: string, description: string, faqs: readonly { q: string; a: string }[], includeMealPacks = false) {
  const base = householdSchema(name, description, faqs)
  const offer = (label: string, price: number, member: boolean, description: string) => ({
    '@type': 'Offer', name: `${label} · ${member ? 'member rate' : 'single rate'}`,
    price, priceCurrency: 'AED', url: 'https://www.mychef.ae/private-chef-dubai/pricing',
    description: `${description} ${member ? MEMBER_NOTE : 'Single bookings available.'} ${PRICE_NOTE}`,
    priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'AED', valueAddedTaxIncluded: false },
    itemOffered: { '@type': 'Service', name: label, provider: { '@id': 'https://www.mychef.ae/#organization' } },
  })
  return { ...base, '@graph': [
    { ...base['@graph'][0], hasOfferCatalog: {
      '@type': 'OfferCatalog', name: 'Signature private chef rates',
      itemListElement: [
        ...SERVICES.flatMap(service => [offer(service.name, service.singleRate, false, `${service.hours} hours per visit.`), offer(service.name, service.rate, true, `${service.hours} hours per visit.`)]),
        ...(includeMealPacks ? MEAL_COMPLEXITIES.flatMap(level => [offer(`${level.name} meal`, level.single, false, 'Per individual meal in an agreed meal pack.'), offer(`${level.name} meal`, level.member, true, 'Per individual meal in an agreed meal pack.')]) : []),
      ],
    } },
    ...base['@graph'].slice(1),
  ] }
}
