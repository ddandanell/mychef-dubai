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
