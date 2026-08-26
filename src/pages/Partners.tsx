// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /partners
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
import { PARTNER_CARDS, partnersSeo } from '@/content/hubPages'

const SITE = 'https://www.mychef.ae'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: partnersSeo.h1,
      description: partnersSeo.description,
      url: `${SITE}${partnersSeo.canonical}`,
      hasPart: PARTNER_CARDS.map((c) => ({
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
        { '@type': 'ListItem', position: 3, name: 'Partners', item: `${SITE}${partnersSeo.canonical}` },
      ],
    },
  ],
}

export default function Partners() {
  return (
    <div>
      <SEO
        title={partnersSeo.title}
        description={partnersSeo.description}
        canonicalPath={partnersSeo.canonical}
        hideSiteName
        schema={schema}
      />

      <PageHero
        variant="quiet"
        eyebrow="About myCHEF"
        title={partnersSeo.h1}
        subtitle="myCHEF works alongside the businesses whose clients already expect good food — concierge teams, event planners, villa rentals and yacht charters."
        image="/images/luxury-dining-experiences-dubai-hero.webp"
        imageAlt="A chef-led dinner being served to guests in a Dubai residence. Experience concept shown."
        imageWidth={1683}
        imageHeight={935}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Partners' },
        ]}
        minHeight="tall"
        overlay="left"
        align="left"
      />

      <TrustSignalStrip />

      <Section tone="white" rhythm="chapter">
        <Container>
          <div className="mb-12 max-w-[760px]">
            <SectionLabel>Partner categories</SectionLabel>
            <DisplayHeading size="h2" className="mb-5 text-black">
              Four Ways We Work With Other Businesses
            </DisplayHeading>
            <BodyCopy tone="muted">
              Each category works a little differently. Pick the one that describes your business and the
              page explains how the arrangement runs.
            </BodyCopy>
          </div>

          <div className="grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2">
            {PARTNER_CARDS.map((card) => (
              <Link
                key={card.href}
                to={card.href}
                className="group flex flex-col bg-white p-7 transition-colors hover:bg-cream lg:p-8"
              >
                <h2 className="font-playfair text-h3 text-black transition-colors group-hover:text-gold-ink">
                  {card.title}
                </h2>
                <p className="mt-3 flex-1 font-inter text-body-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                  Learn more
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 font-inter text-body-sm text-gray-500">
            Want to partner in another way?{' '}
            <Link to="/partner-with-us" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Partner with us
            </Link>
            {' · '}
            <Link to="/trust-and-programs" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Trust and programs
            </Link>
          </p>

          <p className="mt-3 font-inter text-body-sm text-gray-500">
            If you cook rather than refer,{' '}
            <Link to="/become-a-mychef" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              join the myCHEF chef roster
            </Link>
            .
          </p>
        </Container>
      </Section>
    </div>
  )
}
