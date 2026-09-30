import { faqPageSchema, serviceSchema } from '@/utils/schema'
export function householdSchema(name: string, description: string, faqs: readonly { q: string; a: string }[]) {
  return { '@context': 'https://schema.org', '@graph': [serviceSchema(name, description, 'Private chef service'), faqPageSchema(faqs.map(f => ({ question: f.q, answer: f.a })))] }
}
