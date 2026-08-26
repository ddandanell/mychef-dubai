// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /corporate
//     primary:     "corporate catering dubai"
//     subkeywords: "company lunch catering dubai" · "boardroom catering dubai" · "corporate catering price per head dubai" · "corporate catering companies dubai" · "corporate catering services dubai" · "small corporate catering dubai" · "vip corporate catering dubai" · "diwali corporate catering dubai" · "recurring corporate catering dubai" · "corporate catering food" · "corporate catering halal" · "corporate lunch packages dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import CorporateTrustStrip from '../components/CorporateTrustStrip'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
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
import {
  CORPORATE_KEYWORD_LOCK,
  CORPORATE_ROOT,
  CORPORATE_SIBLING_LINKS,
  CORPORATE_WHATSAPP_LINK,
  CORPORATE_WHATSAPP_MESSAGE,
  boundaries,
  corePathways,
  corporateFaqs,
  corporateHero,
  exampleEvents,
  formatLadder,
  jumpNav,
  moreCorporate,
  pricingIntro,
  pricingNotes,
  proofItems,
  quoting,
  routing,
  startSteps,
} from '@/content/corporatePage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/corporate#service',
      name: 'Corporate Catering Dubai',
      serviceType: 'Corporate Catering',
      description:
        'Corporate catering in Dubai for offices, boardrooms, client lunches and company events. Drop-off, buffet, live stations or plated service. Drop-off starts from AED 90 per person.',
      url: 'https://www.mychef.ae/corporate',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Corporate catering pathways',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Catering', url: 'https://www.mychef.ae/office-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event Catering', url: 'https://www.mychef.ae/corporate-event-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Lunch Catering', url: 'https://www.mychef.ae/business-lunch-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Staff Meals Catering', url: 'https://www.mychef.ae/staff-meals-catering-dubai' } },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Corporate dining', item: 'https://www.mychef.ae/corporate' },
      ],
    },
  ],
}

export default function Corporate() {
  useWhatsAppMessage(CORPORATE_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={CORPORATE_KEYWORD_LOCK.title}
        description={CORPORATE_KEYWORD_LOCK.description}
        canonicalPath={CORPORATE_ROOT}
        ogImage={corporateHero.src}
        hideSiteName
        preloadHero={corporateHero.src}
        schema={schema}
      />

      <PageHero
        eyebrow="Corporate Catering Dubai"
        title="Corporate Catering Dubai for Offices, Boards and Events"
        subtitle="Corporate catering in Dubai for offices, boardrooms, client lunches and company events. Start with drop-off food from AED 90 per person, or add chefs, service staff and plated dining when the occasion needs it. Recurring workplace catering, one-off company events and production catering are different operations — pick the page that matches the day you are planning."
        image={corporateHero.src}
        imageAlt={corporateHero.alt}
        imageWidth={corporateHero.width}
        imageHeight={corporateHero.height}
        align="left"
        cta={{ label: 'Get a corporate catering quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: CORPORATE_WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Corporate dining' }]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/70 max-w-[58ch]">
          Share the date, venue and headcount. We typically reply within 15 minutes during business hours.
        </p>
      </PageHero>
      <TrustSignalStrip />
      <div className="bg-black">
        <CorporateTrustStrip />
      </div>

      <nav aria-label="On this page" className="border-b border-gray-200 bg-white">
        <div className="container-custom flex flex-wrap gap-x-5 gap-y-2 py-4">
          {jumpNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500 hover:text-gold-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <Section tone="ivory" rhythm="connected">
        <Container>
          <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-4">Also in this silo</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {CORPORATE_SIBLING_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="font-inter text-body-sm text-gray-700 underline decoration-gold/40 underline-offset-4 hover:text-gold-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-inter text-body-sm text-gray-600 max-w-[62ch]">
            This page owns corporate catering in Dubai. Broader catering sits on{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Luxury catering in Dubai
            </Link>
            . Weddings, birthdays and private parties sit on{' '}
            <Link to="/events" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              event catering in Dubai
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section id="services" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>CHOOSING A SERVICE</SectionLabel>
          <DisplayHeading className="text-black mb-6">{routing.h2}</DisplayHeading>
          {routing.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-4 last:mb-8">
              {p}
            </BodyCopy>
          ))}
          <div className="grid md:grid-cols-2 gap-6">
            {boundaries.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                data-track="service_card"
                className="border border-gray-200 p-6 hover:border-gold/50 transition-colors"
              >
                <h3 className="font-playfair text-h4 text-black mb-2">{item.q}</h3>
                <p className="font-inter text-body-sm text-gray-600 mb-4">{item.a}</p>
                <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                  {item.cta} <ArrowRight size={14} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="pricing" tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">PRICING</SectionLabel>
          <DisplayHeading className="text-white mb-6">Corporate Catering Dubai, from drop-off to plated service</DisplayHeading>
          {pricingIntro.map((p) => (
            <p key={p.slice(0, 32)} className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
              {p}
            </p>
          ))}
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left font-inter text-body-sm text-gray-300">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 font-medium text-white">Format</th>
                  <th className="py-3 pr-4 font-medium text-white">What it is</th>
                  <th className="py-3 pr-4 font-medium text-white">Staff</th>
                  <th className="py-3 font-medium text-white">From</th>
                </tr>
              </thead>
              <tbody>
                {formatLadder.map((row) => (
                  <tr key={row.format} className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white">{row.format}</td>
                    <td className="py-3 pr-4">{row.what}</td>
                    <td className="py-3 pr-4">{row.staff}</td>
                    <td className="py-3">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mb-8 space-y-2">
            {pricingNotes.map((note) => (
              <li key={note} className="font-inter text-body-sm text-gray-400">
                {note}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-6">
            <Link
              to={CATERING_PATHS.priceGuide}
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Dubai catering prices guide <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to="/corporate-event-catering-dubai"
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Corporate event catering in Dubai <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={CATERING_INQUIRY_HREF}
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Get a corporate catering quote <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE RANGE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Open the page that owns the brief</DisplayHeading>
          <BodyCopy className="mb-12">
            This hub does not replace office, event, conference or staff-meal pages. It sends you there.
          </BodyCopy>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePathways.map((item) => (
              <article key={item.href} className="border border-gray-200">
                <Link to={item.href} data-track="service_card" className="block aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4">{item.body}</p>
                  <Link
                    to={item.href}
                    data-track="service_card"
                    className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                  >
                    {item.linkLabel} <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <ul className="mt-12 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {moreCorporate.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  data-track="service_card"
                  className="group flex items-center justify-between gap-6 py-5"
                >
                  <span className="font-inter text-body text-gray-700 group-hover:text-gold-ink">{item.label}</span>
                  <ArrowRight size={14} className="flex-shrink-0 text-gold-ink" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="quote" tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>QUOTING</SectionLabel>
          <DisplayHeading className="text-black mb-6">{quoting.h2}</DisplayHeading>
          {quoting.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-4">
              {p}
            </BodyCopy>
          ))}
        </Container>
      </Section>

      <Section id="how-it-works" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT STARTS</SectionLabel>
          <DisplayHeading className="text-black mb-12">Four steps. Finance sees the lines.</DisplayHeading>
          <SequenceRail steps={[...startSteps]} />
        </Container>
      </Section>

      <Section id="examples" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THIS LOOKS IN PRACTICE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Company events we have run</DisplayHeading>
          <BodyCopy className="mb-12">
            Client names stay private. Guest counts, venues and service shapes are from events already described on our{' '}
            <Link to="/case-studies" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              case studies
            </Link>{' '}
            page.
          </BodyCopy>
          <div className="grid md:grid-cols-2 gap-8">
            {exampleEvents.map((item) => (
              <article key={item.title} className="border border-gray-200 p-6 bg-white">
                <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-3">
                  {item.guests} · {item.venue}
                </p>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-3">{item.setup}</p>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">{item.outcome}</p>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                >
                  {item.linkLabel} <ArrowRight size={14} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHY MYCHEF</SectionLabel>
          <DisplayHeading className="text-black mb-12">Standards you can open, not slogans</DisplayHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {proofItems.map((item) => (
              <div key={item.title} className="border-t border-gray-200 pt-6">
                <h3 className="font-playfair text-h4 text-black mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4 max-w-[52ch]">{item.body}</p>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                >
                  {item.linkLabel} <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="faqs" tone="ivory" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU BOOK</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">What should I know before booking corporate catering in Dubai?</DisplayHeading>
          <FaqAccordion items={[...corporateFaqs]} showJumpNav />
        </Container>
      </Section>

      <LocationStrip
        title="Corporate catering across Dubai"
        subtitle={
          <>
            Trusted for corporate catering in{' '}
            <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">DIFC</Link>,{' '}
            <Link to="/locations/business-bay" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Business Bay</Link>
            {' '}and{' '}
            <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Downtown Dubai</Link>.
          </>
        }
      />

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US THE DAY</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, venue and headcount is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Drop-off starts from AED 90 per person. You do not need a finished brief. We typically reply within 15 minutes during business hours.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get a corporate catering quote
            </Link>
            <a
              href={CORPORATE_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </CTAGroup>
        </Container>
      </Section>
    </div>
  )
}
