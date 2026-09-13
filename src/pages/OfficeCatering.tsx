// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /office-catering-dubai
//     primary:     "office catering dubai"
//     subkeywords: "daily office lunch dubai" · "office lunch catering dubai" · "team lunch catering dubai" · "weekly office catering dubai" · "corporate lunch delivery dubai" · "office food delivery dubai" · "office catering packages dubai" · "luxury office catering dubai" · "small office catering dubai" · "daily office catering dubai" · "ramadan office catering dubai" · "catering for office meeting dubai"
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
import { CORPORATE_PATHS } from '@/content/corporateCluster'
import { packagesForOwner } from '@/content/corporatePackages'
import {
  OFFICE_KEYWORD_LOCK,
  OFFICE_ROOT,
  OFFICE_SIBLING_LINKS,
  OFFICE_WHATSAPP_LINK,
  OFFICE_WHATSAPP_MESSAGE,
  boundaries,
  formatLadder,
  formats,
  jumpNav,
  officeFaqs,
  officeHero,
  practiceLooks,
  pricingIntro,
  pricingNotes,
  proofItems,
  officeMenuCycle,
  quoting,
  recurring,
  routing,
  siblingCards,
  startSteps,
} from '@/content/officeCateringPage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/office-catering-dubai#service',
      name: 'Office Catering Dubai',
      serviceType: 'Office Catering',
      description: OFFICE_KEYWORD_LOCK.description,
      url: 'https://www.mychef.ae/office-catering-dubai',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Office catering formats',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Working lunch drop-off', url: 'https://www.mychef.ae/drop-off-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business lunch catering', url: 'https://www.mychef.ae/business-lunch-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Breakfast catering', url: 'https://www.mychef.ae/breakfast-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate meal prep', url: 'https://www.mychef.ae/staff-meals-catering-dubai' } },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Corporate dining', item: 'https://www.mychef.ae/corporate' },
        { '@type': 'ListItem', position: 3, name: 'Office catering', item: 'https://www.mychef.ae/office-catering-dubai' },
      ],
    },
  ],
}

export default function OfficeCatering() {
  useWhatsAppMessage(OFFICE_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={OFFICE_KEYWORD_LOCK.title}
        description={OFFICE_KEYWORD_LOCK.description}
        canonicalPath={OFFICE_ROOT}
        ogImage={officeHero.src}
        hideSiteName
        preloadHero={officeHero.src}
        schema={schema}
      />

      <PageHero
        eyebrow="Office catering"
        title={OFFICE_KEYWORD_LOCK.h1}
        subtitle="Office catering Dubai for daily lunches, breakfasts and weekly workplace service. Start with drop-off food from AED 90 per person, or add chefs and service staff when the sitting needs it. Recurring workplace catering and one-off company events are different operations. Pick the page that matches the day you are planning."
        image={officeHero.src}
        imageAlt={officeHero.alt}
        imageWidth={officeHero.width}
        imageHeight={officeHero.height}
        align="left"
        cta={{ label: 'Get an office catering quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: OFFICE_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Corporate dining', href: CORPORATE_PATHS.hub },
          { label: 'Office catering' },
        ]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/70 max-w-[58ch]">
          Share the days, office, headcount and whether you want drop-off or staffed service.
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
            items={OFFICE_SIBLING_LINKS}
            note="This page is the repeating workplace week: breakfast and lunch for a known headcount. One-off parties sit on corporate event catering. Boardroom client lunches sit on business lunch catering."
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
          <DisplayHeading className="text-white mb-6">Office Catering Dubai, from drop-off lunches to a chef in the room</DisplayHeading>
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
              to={CORPORATE_PATHS.events}
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Corporate event catering <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={CATERING_INQUIRY_HREF}
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Get an office catering quote <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="packages" tone="ivory" rhythm="chapter">
        <Container>
          <CorporatePackageCompare
            packages={packagesForOwner('/office-catering-dubai')}
            heading="Office breakfast, lunch and meeting packages"
            intro="Drop-off food starts from AED 90 per person, minimum 10 guests and AED 900. A staffed buffet starts from AED 120 and 20 guests. Recurring weeks are billed on the actual service days. No automatic volume discount."
          />
          <div className="mt-12">
            <CorporateWorkedBudgets
              heading="Office catering packages, worked totals"
              intro="Daily office lunch in Dubai is usually drop-off. Weekly office catering is the same food on named days. Catering for an office meeting that needs a line in the room is the staffed buffet."
              examples={[
                {
                  title: '12-person breakfast drop-off',
                  packageId: 'corp-office-breakfast-dropoff',
                  guests: 12,
                  note: 'Laid out before the floor fills.',
                },
                {
                  title: '12-person weekday lunch',
                  packageId: 'corp-office-lunch-dropoff',
                  guests: 12,
                  note: 'Corporate lunch delivery. You clear trays.',
                },
                {
                  title: '15 people, four days',
                  packageId: 'corp-office-weekly-lunch',
                  guests: 15,
                  days: 4,
                  note: 'Actual service days. No automatic volume discount.',
                },
              ]}
            />
          </div>
          <div className="mt-12 overflow-x-auto">
            <h3 className="font-playfair text-h4 text-black mb-4">Sample lunch cycle</h3>
            <p className="font-inter text-body-sm text-gray-600 mb-4 max-w-[65ch]">
              A repeating week rotates so the same grain bowl does not appear twice in two weeks. This is a sample, not a locked menu.
            </p>
            <table className="w-full min-w-[480px] text-left font-inter text-body-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-black">Day</th>
                  <th className="py-3 font-medium text-black">Lunch</th>
                </tr>
              </thead>
              <tbody>
                {officeMenuCycle.map((row) => (
                  <tr key={row.day} className="border-b border-gray-100">
                    <td className="py-3 pr-4 text-black">{row.day}</td>
                    <td className="py-3">{row.lunch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <CorporateInventory path={OFFICE_ROOT} quoteHref="#quote" />

      <Section id="formats" tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE FORMAT</SectionLabel>
          <DisplayHeading className="text-black mb-6">{formats.h2}</DisplayHeading>
          {formats.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-4">
              {p}
            </BodyCopy>
          ))}
          <p className="mt-6 font-inter text-body-sm text-gray-600">
            The operational split is in{' '}
            <Link
              to={CORPORATE_PATHS.fullServiceVsDropOff}
              className="text-gold-ink underline underline-offset-4 hover:text-gold"
            >
              Full service vs drop off catering
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE REPEATING WEEK</SectionLabel>
          <DisplayHeading className="text-black mb-6">{recurring.h2}</DisplayHeading>
          {recurring.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-4">
              {p}
            </BodyCopy>
          ))}
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>IF THE BRIEF IS SLIGHTLY DIFFERENT</SectionLabel>
          <DisplayHeading className="text-black mb-4">If the brief is slightly different</DisplayHeading>
          <BodyCopy className="mb-12">
            Breakfast, drop-off mechanics, a client lunch and workforce canteen meals have their own pages. Use those when that is the actual job.
          </BodyCopy>
          <div className="grid md:grid-cols-2 gap-8">
            {siblingCards.map((item) => (
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
          <p className="mt-6 font-inter text-body-sm text-gray-600">
            Planning a larger programme?{' '}
            <Link
              to={CORPORATE_PATHS.checklist}
              className="text-gold-ink underline underline-offset-4 hover:text-gold"
            >
              Corporate catering checklist
            </Link>
            .
          </p>
          <div className="mt-10">
            <CorporateQuoteNeeds inquiryHref={CATERING_INQUIRY_HREF} whatsappHref={OFFICE_WHATSAPP_LINK} />
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
          <DisplayHeading className="text-black mb-4">Three common office sittings</DisplayHeading>
          <BodyCopy className="mb-12">
            Guest counts and rates below are the published format rules, not named client stories. We do not publish office logos without written permission.
          </BodyCopy>
          <div className="grid md:grid-cols-3 gap-8">
            {practiceLooks.map((item) => (
              <article key={item.title} className="border border-gray-200 p-6 bg-white">
                <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-3">{item.detail}</p>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed">{item.body}</p>
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
          <DisplayHeading className="text-black text-center mb-10">What should I know before booking office catering in Dubai?</DisplayHeading>
          <FaqAccordion items={[...officeFaqs]} showJumpNav />
        </Container>
      </Section>

      <LocationStrip
        title="Office catering across Dubai"
        subtitle={
          <>
            Trusted for office catering in{' '}
            <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
              DIFC
            </Link>
            ,{' '}
            
              Business Bay
            {' '}
            and{' '}
            
              Downtown Dubai
            
            .
          </>
        }
      />

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US THE WEEK</SectionLabel>
          <DisplayHeading className="text-white mb-6">Days, office and headcount is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Drop-off starts from AED 90 per person. Days, office and headcount is enough to start. Dietary notes can follow.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get an office catering quote
            </Link>
            <a href={OFFICE_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </CTAGroup>
        </Container>
      </Section>
    </div>
  )
}
