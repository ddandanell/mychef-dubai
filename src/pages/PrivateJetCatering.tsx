import { Link } from 'react-router'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
  SequenceRail,
  CTAGroup,
} from '../components/system'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { CATERING_INQUIRY_HREF, CATERING_PATHS } from '@/content/cateringCluster'

const PATH = CATERING_PATHS.privateJet
const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I need private jet catering. Flight: __, Passengers: __, Timing: __, Dietary: __ (via mychef.ae/private-jet-catering-dubai)"
const WHATSAPP_LINK = `https://wa.me/971551744849?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
const HERO = '/images/private-jet-catering-dubai-hero.webp'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Private Jet Catering Dubai',
      serviceType: 'Private Jet Catering',
      provider: {
        '@type': 'Organization',
        name: 'myCHEF Dubai',
        url: 'https://www.mychef.ae',
        telephone: '+971-55-174-4849',
        areaServed: 'Dubai, UAE',
      },
      areaServed: 'Dubai, UAE',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae' },
        { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Private Jet Catering', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

export default function PrivateJetCatering() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title="Private Jet Catering Dubai | Food Coordinated Around the Flight | myCHEF"
        description="Private jet catering from Dubai. Tell us the flight, passenger count, timing and dietary requirements. We prepare and coordinate the food around the journey."
        canonicalPath={PATH}
        ogImage={HERO}
        hideSiteName
        preloadHero={HERO}
        schema={schema}
      />
      <PageHero
        variant="quiet"
        eyebrow="Private Jet Catering"
        title="Food coordinated around the flight."
        subtitle="A focused service. Tell us the flight, passenger count, timing, food preferences and dietary requirements. We prepare and coordinate the food around the journey."
        image={HERO}
        imageAlt="Prepared jet catering packed for boarding in Dubai — labelled trays, quiet galley light, no cabin party. Experience concept shown."
        imageWidth={2560}
        imageHeight={1440}
        imagePosition="70% 50%"
        align="left"
        cta={{ label: 'Plan This Service', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'WhatsApp Us', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Catering Dubai', href: CATERING_PATHS.overview },
          { label: 'Private Jet Catering' },
        ]}
        minHeight="large"
        overlay="dark"
      />
      <TrustSignalStrip />

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>A DIFFERENT OPERATING MODEL</SectionLabel>
          <DisplayHeading className="text-black mb-6">This is not an event with a smaller room</DisplayHeading>
          <BodyCopy className="mb-5">
            Yacht and villa catering can scale into a party. Jet catering cannot. Timing is the brief. Storage is limited. There is no spare kitchen on board.
          </BodyCopy>
          <BodyCopy>
            We treat it as food coordinated around a journey: what can be prepared on the ground, what travels well, what must be labelled, and what dietary requirements cannot be improvised at 35,000 feet.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHAT TO TELL US</SectionLabel>
          <DisplayHeading className="text-black mb-12">The flight details decide the food</DisplayHeading>
          <SequenceRail
            steps={[
              'Flight number or route, departure time, and whether this is outbound, inbound or both.',
              'Passenger count, including children, and any dietary requirements.',
              'What you want on board: breakfast, a light meal, canapés, or a seated service if the cabin allows it.',
              'We prepare the food, pack it for the operator’s handling rules, and coordinate delivery to the FBO or handler.',
            ]}
          />
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>AROUND THE JOURNEY</SectionLabel>
          <DisplayHeading className="text-black mb-6">We coordinate our part. We do not replace your operator</DisplayHeading>
          <BodyCopy className="mb-5">
            Hangar access, security and loading sit with the aircraft operator or handler. We work around their window. If they already have a preferred receiving point, we use it.
          </BodyCopy>
          <BodyCopy className="mb-8">
            This sits inside catering, not household chef. If you need a chef in a villa the night before the flight, that is a separate{' '}
            <Link to={CATERING_PATHS.overview} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              catering
            </Link>{' '}
            or{' '}
            <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              private chef
            </Link>{' '}
            brief.
          </BodyCopy>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Plan My Event
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </CTAGroup>
          <p className="mt-8">
            <Link
              to={CATERING_PATHS.overview}
              className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              ← All catering in Dubai
            </Link>
          </p>
        </Container>
      </Section>
    </div>
  )
}
