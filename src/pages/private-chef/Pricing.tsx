// KEYWORD LOCK — this page owns: "home chef dubai" (50/mo, UAE).
// Secondary: private chef hire (30), personal cook dubai (70), part time cook in dubai (40).
// Do not target another cluster page's primary here. See KEYWORD_LOCKS in content/privateChefCluster.ts.
import { Link } from 'react-router'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import FaqAccordion from '../../components/FaqAccordion'
import { Section, Container, Eyebrow, DisplayHeading, BodyCopy } from '../../components/system'
import ClusterNav from '../../components/private-chef/ClusterNav'
import ClusterCTA from '../../components/private-chef/ClusterCTA'
import HouseholdPricingSection from '../../components/private-chef/HouseholdPricingSection'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { plainFaqAnswer } from '../../utils/schema'
import { clusterHeroes, WHATSAPP_MESSAGE } from '../../content/privateChefPage'
import { CLUSTER_PATHS, FIND_CHEF_LABEL, INQUIRY_HREF, childSeo, pricingFaqs } from '../../content/privateChefCluster'

const PATH = CLUSTER_PATHS.pricing
const seo = childSeo.pricing

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Offer',
      name: 'Private Chef Dubai prices — standing household plans',
      description: seo.description,
      url: `https://www.mychef.ae${PATH}`,
      priceCurrency: 'AED',
      price: '2700',
      unitText: 'MONTH',
    },
    {
      '@type': 'FAQPage',
      mainEntity: pricingFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Private Chef Dubai', item: 'https://www.mychef.ae/private-chef-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Pricing & Plans', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

export default function PrivateChefPricing() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={seo.title}
        description={seo.description}
        canonicalPath={PATH}
        ogImage={clusterHeroes.pricing.src}
        hideSiteName
        preloadHero={clusterHeroes.pricing.src}
        schema={schema}
      />
      <PageHero
        variant="quiet"
        eyebrow={seo.eyebrow}
        title={seo.h1}
        subtitle={seo.subtitle}
        image={clusterHeroes.pricing.src}
        imageAlt={clusterHeroes.pricing.alt}
        imageWidth={clusterHeroes.pricing.width}
        imageHeight={clusterHeroes.pricing.height}
        cta={{ label: 'Build Your Price', href: '#calculator' }}
        secondaryCta={{ label: FIND_CHEF_LABEL, href: INQUIRY_HREF }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Private Chef Dubai', href: CLUSTER_PATHS.overview },
          { label: 'Pricing & Plans' },
        ]}
        minHeight="tall"
        overlay="left"
        align="left"
        imagePosition="64% 48%"
      />
      <ClusterNav />

      <HouseholdPricingSection />

      <Section tone="ivory">
        <Container>
          <Eyebrow>Same logic, whatever you call it</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">Private chef hire, a personal cook, a part-time cook — priced the same way</DisplayHeading>
          <BodyCopy className="max-w-[760px]">
            People search for this service under different names: private chef hire, a personal cook, a part-time cook a few days a week, a full home chef in Dubai. The price logic does not change with the label. It is built from the role — format, days per week, chef level, plan length and transport zone — and the full figure arrives in writing before anything starts.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <Eyebrow>Not this page</Eyebrow>
          <DisplayHeading size="h2" className="text-black mb-4">One night is a different product</DisplayHeading>
          <BodyCopy className="mb-5 max-w-[760px]">
            Household plans — Daily Prep, Dinner Service or a Full-Day Chef, week after week — are priced above. A birthday, a date night, clients for an evening or a yacht is a different product, with its own figure.
          </BodyCopy>
          <BodyCopy className="max-w-[760px]">
            See{' '}
            <Link to="/private-chef-prices-dubai" className="text-gold-ink underline underline-offset-4">event prices</Link>
            {' '}and{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4">catering</Link>
            . Chef level and matching — why Professional is the displayed rate — are explained on{' '}
            <Link to={CLUSTER_PATHS.ourChefs} className="text-gold-ink underline underline-offset-4">Our Chefs</Link>
            . What the monthly plan actually includes is on{' '}
            <Link to={CLUSTER_PATHS.howItWorks} className="text-gold-ink underline underline-offset-4">How It Works</Link>.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <Eyebrow>Continue</Eyebrow>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link to={CLUSTER_PATHS.howItWorks} className="border border-gray-200 hover:border-gold p-6 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">How It Works</p>
              <p className="font-playfair text-h4 text-black">Food Profile, backup and who does what</p>
            </Link>
            <Link to={CLUSTER_PATHS.ourChefs} className="border border-gray-200 hover:border-gold p-6 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Our Chefs</p>
              <p className="font-playfair text-h4 text-black">Why chef level changes the figure</p>
            </Link>
            <Link to="/private-chef-prices-dubai" className="border border-gray-200 hover:border-gold p-6 transition-colors bg-white">
              <p className="font-inter text-caption uppercase tracking-wider text-gold-ink mb-2">Events</p>
              <p className="font-playfair text-h4 text-black">One-night and occasion prices</p>
            </Link>
          </div>
        </Container>
      </Section>

      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-8">Questions about home chef prices in Dubai</h2>
          <FaqAccordion items={[...pricingFaqs]} defaultOpen={-1} />
        </div>
      </section>

      <ClusterCTA
        title="Get the household figure in writing"
        body="Choose a format and how many days a week. We calculate the role, recommend the chef level, and send the full price before anything starts."
        inquiryLabel="Get the household figure"
      />
    </div>
  )
}
