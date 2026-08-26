// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /trust-and-programs
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { Section, Container, SectionLabel, DisplayHeading, BodyCopy } from '../components/system'
import { TRUST_PROGRAM_CARDS, trustAndProgramsSeo } from '@/content/hubPages'

const SITE = 'https://www.mychef.ae'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: trustAndProgramsSeo.h1,
      description: trustAndProgramsSeo.description,
      url: `${SITE}${trustAndProgramsSeo.canonical}`,
      hasPart: TRUST_PROGRAM_CARDS.map((c) => ({
        '@type': 'WebPage',
        name: c.title,
        description: c.description,
        url: `${SITE}${c.href}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}/about` },
        { '@type': 'ListItem', position: 3, name: 'Trust and Programs', item: `${SITE}${trustAndProgramsSeo.canonical}` },
      ],
    },
  ],
}

export default function TrustAndPrograms() {
  return (
    <div>
      <SEO
        title={trustAndProgramsSeo.title}
        description={trustAndProgramsSeo.description}
        canonicalPath={trustAndProgramsSeo.canonical}
        hideSiteName
        schema={schema}
      />

      <PageHero
        variant="quiet"
        eyebrow="About myCHEF"
        title={trustAndProgramsSeo.h1}
        subtitle="How the standards, protection and programmes behind a myCHEF booking actually work — each one explained on its own page."
        image="/images/private-chef-dubai-hero.webp"
        imageAlt="A private chef working in a Dubai kitchen. Experience concept shown."
        imageWidth={1683}
        imageHeight={935}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Trust and Programs' },
        ]}
        minHeight="tall"
        overlay="left"
        align="left"
      />

      <TrustSignalStrip />

      <Section tone="white" rhythm="chapter">
        <Container>
          <div className="mb-12 max-w-[760px]">
            <SectionLabel>Standards & programmes</SectionLabel>
            <DisplayHeading size="h2" className="mb-5 text-black">
              Everything That Sits Behind the Booking
            </DisplayHeading>
            <BodyCopy tone="muted">
              Chef certification, quality cover and booking protection on one side; membership, loyalty,
              referrals and how to work with us on the other. Each page carries its own detail and terms.
            </BodyCopy>
          </div>

          <div className="grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST_PROGRAM_CARDS.map((card) => (
              <Link
                key={card.href}
                to={card.href}
                className="group flex flex-col bg-white p-6 transition-colors hover:bg-cream lg:p-7"
              >
                <h2 className="font-playfair text-h4 text-black transition-colors group-hover:text-gold-ink">
                  {card.title}
                </h2>
                <p className="mt-2 flex-1 font-inter text-body-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                  Read more
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 font-inter text-body-sm text-gray-500">
            Looking for the businesses we work with?{' '}
            <Link to="/partners" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              See our partner categories
            </Link>
            .
          </p>
        </Container>
      </Section>
    </div>
  )
}
