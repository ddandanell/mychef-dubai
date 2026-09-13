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
import CorporatePackageCompare from '@/components/corporate/CorporatePackageCompare'
import CorporateQuoteNeeds from '@/components/corporate/CorporateQuoteNeeds'
import CorporateSiblings from '@/components/corporate/CorporateSiblings'
import CorporateWorkedBudgets from '@/components/corporate/CorporateWorkedBudgets'
import CorporateInventory from '@/components/corporate/CorporateInventory'
import { CATERING_INQUIRY_HREF, CATERING_PATHS } from '@/content/cateringCluster'
import { packageById } from '@/content/corporatePackages'
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
  dietaryAtScale,
  hubWorkedExamples,
  meetingRouting,
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
  whatWeHandle,
} from '@/content/corporatePage'

const hubPackages = [
  packageById('corp-office-lunch-dropoff'),
  packageById('corp-lunch-client'),
  packageById('corp-conf-full-day'),
  packageById('corp-event-networking'),
  packageById('corp-dinner-package'),
].filter((pkg): pkg is NonNullable<typeof pkg> => Boolean(pkg))

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
      '@type': 'FAQPage',
      mainEntity: corporateFaqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
        },
      })),
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
        subtitle="Corporate catering in Dubai for offices, boardrooms, client lunches and company events. Start with drop-off food from AED 90 per person, or add chefs, service staff and plated dining when the occasion needs it. Recurring workplace catering, one-off company events and production catering are different operations. Pick the page that matches the day you are planning."
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
          Share the date, venue, headcount and whether you need drop-off or staffed service.
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
          <CorporateSiblings
            items={CORPORATE_SIBLING_LINKS}
            note="This page is the corporate hub: offices, boardrooms, conferences and company events. Weddings, birthdays, yachts and private parties are quoted on their own pages."
          />
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

      <Section id="packages" tone="ivory" rhythm="chapter">
        <Container>
          <CorporatePackageCompare
            packages={hubPackages}
            heading="Which package fits the occasion"
            intro="These are advertised starting points, not 30 shop-window SKUs. Each owner page lists the menu, minimums and what the headline actually covers. Unusual venue costs sit on their own line."
          />
        </Container>
      </Section>

      <CorporateInventory path={CORPORATE_ROOT} quoteHref="#quote" />

      <Section id="budgets" tone="white" rhythm="chapter">
        <Container>
          <CorporateWorkedBudgets
            heading="Worked totals from advertised floors"
            intro="These examples use the public package record. They are planning numbers, not a booking. Corporate catering price per head in Dubai moves with format more than with a slogan."
            examples={hubWorkedExamples}
          />
        </Container>
      </Section>

      <Section id="included" tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE OPERATION</SectionLabel>
          <DisplayHeading className="text-black mb-6">{whatWeHandle.h2}</DisplayHeading>
          {whatWeHandle.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-4">
              {p}
            </BodyCopy>
          ))}
        </Container>
      </Section>

      <Section id="meetings" tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>LUNCH AND BOARDROOM</SectionLabel>
          <DisplayHeading className="text-black mb-6">{meetingRouting.h2}</DisplayHeading>
          {meetingRouting.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-4">
              {p}
            </BodyCopy>
          ))}
        </Container>
      </Section>

      <Section id="dietary" tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>MIXED ROOMS</SectionLabel>
          <DisplayHeading className="text-black mb-6">{dietaryAtScale.h2}</DisplayHeading>
          {dietaryAtScale.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-4">
              {p}
            </BodyCopy>
          ))}
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE RANGE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Pick the page that matches the day</DisplayHeading>
          <BodyCopy className="mb-12">
            Recurring lunches, one-off parties, conferences and crew meals run on different operations. Use the page for the day you are planning.
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
          <div className="mt-10">
            <CorporateQuoteNeeds inquiryHref={CATERING_INQUIRY_HREF} whatsappHref={CORPORATE_WHATSAPP_LINK} />
          </div>
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
            Business Bay
            {' '}and{' '}
            Downtown Dubai.
          </>
        }
      />

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US THE DAY</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, venue and headcount is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Drop-off starts from AED 90 per person. Date, venue and headcount is enough to start. Dietary notes can follow.
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
