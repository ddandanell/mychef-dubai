// KEYWORD LOCK — this page owns: "private chef dubai prices" (owner decision 2026-08-25; was "home chef dubai").
// Secondary: home chef dubai (50), private chef hire (30), personal cook dubai (70), part time cook in dubai (40).
// Do not target another cluster page's primary here. See KEYWORD_LOCKS in content/privateChefCluster.ts.
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import FaqAccordion from '../../components/FaqAccordion'
import { Section, Container } from '../../components/system'
import ClusterNav from '../../components/private-chef/ClusterNav'
import ClusterCTA from '../../components/private-chef/ClusterCTA'
import PriceCalculator from '../../components/private-chef/pricing/PriceCalculator'
import PlanTermsDigest from '../../components/private-chef/pricing/PlanTermsDigest'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../../utils/schema'
import { photos, WHATSAPP_MESSAGE } from '../../content/privateChefPage'
import { CLUSTER_PATHS, childSeo } from '../../content/privateChefCluster'
import { PRICING_FAQS, SERVICES } from '../../content/privateChefPricing'

const PATH = CLUSTER_PATHS.pricing
const seo = childSeo.pricing
const hero = photos[3]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Private chef — household plans (3+ days)',
      url: `https://www.mychef.ae${PATH}`,
      provider: { '@type': 'Organization', name: 'myCHEF Dubai' },
      areaServed: 'Dubai',
      offers: SERVICES.map((s) => ({
        '@type': 'Offer',
        name: `${s.name} (${s.hours}h) — Professional Chef`,
        priceCurrency: 'AED',
        price: String(s.rates.professional),
        unitText: s.unit === 'day' ? 'DAY' : 'SERVICE',
      })),
    },
    { '@type': 'FAQPage', mainEntity: PRICING_FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(f.a) } })) },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Private Chef Dubai', item: 'https://www.mychef.ae/private-chef-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Prices', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

export default function PrivateChefPricing() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div className="pb-20 lg:pb-0">
      <SEO title={seo.title} description={seo.description} canonicalPath={PATH} ogImage={hero.src} hideSiteName preloadHero={hero.src} schema={schema} />

      {/* 1 — hero: title, one line, then straight into the calculator */}
      <PageHero
        variant="quiet"
        eyebrow="Private Chef Dubai"
        title={seo.h1}
        subtitle={seo.subtitle}
        image={hero.src}
        imageAlt={hero.alt}
        imageWidth={hero.width}
        imageHeight={hero.height}
        cta={{ label: 'See my price', href: '#calculator' }}
        secondaryCta={{ label: 'How It Works', href: CLUSTER_PATHS.howItWorks }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Dubai', href: CLUSTER_PATHS.overview }, { label: 'Prices' }]}
        minHeight="medium"
        overlay="cinematic"
        align="left"
      />
      <ClusterNav />

      {/* 2 — build the plan, see the price, send it */}
      <Section tone="white">
        <Container>
          <PriceCalculator />
        </Container>
      </Section>

      {/* 3 — the rules that shape the price */}
      <Section tone="ivory">
        <Container>
          <PlanTermsDigest />
        </Container>
      </Section>

      {/* 4 — FAQs */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-8">Questions about private chef prices in Dubai</h2>
          <FaqAccordion items={[...PRICING_FAQS]} defaultOpen={-1} />
        </div>
      </section>

      {/* 5 — final CTA */}
      <ClusterCTA
        title="Build the plan, send it, get the figure in writing."
        body="The calculator above is the enquiry. Design the service, send it to us, and a coordinator confirms availability and the exact price — before anything starts."
        inquiryLabel="Build my plan"
      />
    </div>
  )
}
