// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /catering-dubai
//     primary:     "catering dubai"
//     subkeywords: "catering services dubai" · "food catering dubai" · "home catering dubai" · "catering dubai party" · "catering service in dubai" · "catering services in dubai" · "small catering dubai party" · "full service catering dubai" · "private catering dubai" · "bespoke catering dubai" · "outdoor catering dubai" · "party food catering dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import SEO from '@/components/SEO'
import CateringHub, { CATERING_HUB_IMAGE } from '@/components/catering/CateringHub'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { CATERING_KEYWORD_LOCK, CATERING_ROOT, CATERING_WHATSAPP_MESSAGE } from '@/content/cateringCluster'
import { cateringFaqs } from '@/content/cateringPage'
import { faqPageSchema } from '@/utils/schema'

const faqSchema = faqPageSchema(cateringFaqs.map((f) => ({ question: f.q, answer: f.a })))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/catering-dubai#service',
      name: 'Catering Dubai',
      serviceType: 'Catering Service',
      description:
        'Bespoke catering in Dubai for weddings, villas, yachts, corporate events and private celebrations. Food delivery, chefs and service staff, live cooking, or full event catering. Food-only catering starts from AED 90 per person.',
      url: 'https://www.mychef.ae/catering-dubai',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Catering pathways',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Catering', url: 'https://www.mychef.ae/wedding-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event Catering', url: 'https://www.mychef.ae/corporate-event-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Villa Catering', url: 'https://www.mychef.ae/villas-private-residences' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Yacht Catering', url: 'https://www.mychef.ae/yachts' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drop-Off Catering', url: 'https://www.mychef.ae/drop-off-catering-dubai' } },
        ],
      },
    },
    ...(faqSchema ? [faqSchema] : []),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
      ],
    },
  ],
}

export default function Catering() {
  useWhatsAppMessage(CATERING_WHATSAPP_MESSAGE)
  return <>
    <SEO title={CATERING_KEYWORD_LOCK.title} description={CATERING_KEYWORD_LOCK.description}
      canonicalPath={CATERING_ROOT} ogImage={CATERING_HUB_IMAGE} hideSiteName schema={schema} />
    <CateringHub />
  </>
}
