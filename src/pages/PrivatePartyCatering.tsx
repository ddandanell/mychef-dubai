// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-party-catering-dubai
//     primary:     "private party catering dubai"
//     subkeywords: "private party catering dubai price" · "private party catering cost per person dubai" · "best private party catering dubai" · "private party catering packages dubai" · "private party catering menu dubai" · "halal private party catering dubai" · "party catering dubai" · "house party catering dubai" · "dinner party catering dubai" · "private catering near me" · "small party catering dubai indian price list" · "annual company party catering dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
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
  PRIVATE_PARTY_KEYWORD_LOCK,
  PRIVATE_PARTY_ROOT,
  PRIVATE_PARTY_SIBLING_LINKS,
  PRIVATE_PARTY_WHATSAPP_LINK,
  PRIVATE_PARTY_WHATSAPP_MESSAGE,
  decisionModule,
  exampleEvents,
  hostedHere,
  hostedHereIntro,
  includedItems,
  jumpNav,
  menuFormats,
  otherUniqueOccasions,
  partyFaqs,
  partyHero,
  partyHeroCopy,
  priceRows,
  pricingIntro,
  pricingNotes,
  proofItems,
  siloIntro,
  startSteps,
  uniqueCardsIntro,
  uniqueOccasionCards,
} from '@/content/privatePartyPage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/private-party-catering-dubai#service',
      name: 'Private Party Catering Dubai',
      serviceType: 'Private Party Catering',
      description:
        'Private party catering Dubai for homes, villas and gardens. Drop-off, buffet from AED 120 per person, live stations or chef-led plated dining. Menu, chefs, staffing, setup and cleanup.',
      url: 'https://www.mychef.ae/private-party-catering-dubai',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Events', item: 'https://www.mychef.ae/events' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Private party catering',
          item: 'https://www.mychef.ae/private-party-catering-dubai',
        },
      ],
    },
  ],
}

export default function PrivatePartyCatering() {
  useWhatsAppMessage(PRIVATE_PARTY_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={PRIVATE_PARTY_KEYWORD_LOCK.title}
        description={PRIVATE_PARTY_KEYWORD_LOCK.description}
        canonicalPath={PRIVATE_PARTY_ROOT}
        ogImage={partyHero.src}
        hideSiteName
        preloadHero={partyHero.src}
        schema={schema}
      />

      <PageHero
        eyebrow={partyHeroCopy.eyebrow}
        title={partyHeroCopy.title}
        subtitle={partyHeroCopy.subtitle}
        image={partyHero.src}
        imageAlt={partyHero.alt}
        imageWidth={partyHero.width}
        imageHeight={partyHero.height}
        align="left"
        cta={{ label: 'Get an itemised party-catering quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: PRIVATE_PARTY_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: 'Private party catering' },
        ]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/90 max-w-[58ch]">
          {partyHeroCopy.priceLine}
        </p>
        <p className="mt-3 font-inter text-body-sm text-white/70 max-w-[58ch]">
          {partyHeroCopy.replyLine}
        </p>
      </PageHero>
      <TrustSignalStrip />

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
            {PRIVATE_PARTY_SIBLING_LINKS.map((item) => (
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
            {siloIntro.lead}{' '}
            <Link to={siloIntro.eventsHref} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              {siloIntro.eventsLabel}
            </Link>{' '}
            {siloIntro.eventsNote}{' '}
            <Link to={siloIntro.cateringHref} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              {siloIntro.cateringLabel}
            </Link>{' '}
            {siloIntro.cateringNote}
          </p>
        </Container>
      </Section>

      <Section id="occasions" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHAT ARE YOU HOSTING?</SectionLabel>
          <DisplayHeading className="text-black mb-4">A house party, not a second events hub.</DisplayHeading>
          <BodyCopy className="mb-8">{hostedHereIntro}</BodyCopy>
          <ul className="mb-12 grid sm:grid-cols-2 gap-x-10 gap-y-2 max-w-3xl">
            {hostedHere.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-gray-200 py-2.5">
                <span className="mt-2.5 h-px w-3 shrink-0 bg-gold-ink/60" aria-hidden />
                <span className="font-inter text-body-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <BodyCopy className="mb-12">{uniqueCardsIntro}</BodyCopy>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uniqueOccasionCards.map((item) => (
              <article key={item.href} className="border border-gray-200">
                <Link to={item.href} data-track="party_card" className="block aspect-[16/10] overflow-hidden">
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
                    data-track="party_card"
                    className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                  >
                    {item.linkLabel} <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <ul className="mt-12 max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {otherUniqueOccasions.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  data-track="party_card"
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-inter text-body text-gray-600">{item.title}</span>
                  <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink group-hover:text-gold">
                    {item.linkLabel} <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="pricing" tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">FORMATS AND PRICES</SectionLabel>
          <DisplayHeading className="text-white mb-6">Private party catering Dubai, priced by format</DisplayHeading>
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
                {priceRows.map((row) => (
                  <tr key={row.format} className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white">
                      <Link to={row.href} data-track="price_table" className="hover:text-gold">
                        {row.format}
                      </Link>
                    </td>
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
              to={CATERING_PATHS.packages}
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              View catering packages <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to="/buffet-vs-plated-dubai"
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Compare catering formats <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={CATERING_INQUIRY_HREF}
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Get an itemised quote <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container className="max-w-3xl">
          <SectionLabel>PRIVATE CHEF OR PARTY CATERING</SectionLabel>
          <DisplayHeading className="text-black mb-6">{decisionModule.h2}</DisplayHeading>
          <BodyCopy className="mb-4">
            <strong className="text-black">{decisionModule.privateChefLead}</strong> {decisionModule.privateChefBody}
          </BodyCopy>
          <BodyCopy className="mb-4">
            <strong className="text-black">{decisionModule.partyLead}</strong> {decisionModule.partyBody}
          </BodyCopy>
          <BodyCopy className="mb-4">{decisionModule.events}</BodyCopy>
          <BodyCopy className="mb-5">{decisionModule.catering}</BodyCopy>
          <div className="flex flex-wrap gap-6">
            <Link
              to={decisionModule.chefHref}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              {decisionModule.chefLabel} <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={decisionModule.eventsHref}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              {decisionModule.eventsLabel} <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={decisionModule.cateringHref}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              {decisionModule.cateringLabel} <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>WHAT IS INCLUDED</SectionLabel>
          <DisplayHeading className="text-black mb-12">Menu, chefs, staff, equipment, bar, setup and cleanup</DisplayHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {includedItems.map((item) => (
              <div key={item.title} className="border-t border-gray-200 pt-6">
                <h3 className="font-playfair text-h4 text-black mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed max-w-[52ch]">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="menus" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THE FOOD IS SERVED</SectionLabel>
          <DisplayHeading className="text-black mb-4">From drop-off to plated service</DisplayHeading>
          <BodyCopy className="mb-12">
            Pick a format. The specialist page owns the full explanation. Cuisine direction lives on{' '}
            <Link to="/cuisines-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Cuisines
            </Link>
            .
          </BodyCopy>
          <div className="grid md:grid-cols-2 gap-x-12 border-t border-gray-200">
            {menuFormats.map((style) => (
              <Link
                key={style.title}
                to={style.href}
                className="group flex items-start gap-5 border-b border-gray-200 py-6"
              >
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-4">
                    <h3 className="font-playfair text-h4 text-black transition-colors group-hover:text-gold-ink">{style.title}</h3>
                    <ArrowRight size={16} className="flex-shrink-0 text-gold-ink opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                  </span>
                  <p className="mt-1 font-inter text-body-sm text-gray-500 leading-relaxed">{style.body}</p>
                  <span className="mt-3 inline-block font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">{style.linkLabel}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="how-it-works" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT STARTS</SectionLabel>
          <DisplayHeading className="text-black mb-12">Four steps. You stay with your guests.</DisplayHeading>
          <SequenceRail steps={[...startSteps]} />
        </Container>
      </Section>

      <Section id="examples" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THIS LOOKS IN PRACTICE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Parties we have already run</DisplayHeading>
          <BodyCopy className="mb-12">
            Client names stay private. Location, guest range, format and outcome are from events already described on our{' '}
            <Link to="/case-studies" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              case studies
            </Link>{' '}
            page.
          </BodyCopy>
          <div className="grid md:grid-cols-3 gap-8">
            {exampleEvents.map((item) => (
              <article key={item.title} className="border border-gray-200 p-6">
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

      <Section tone="ivory" rhythm="chapter">
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

      <Section id="faqs" tone="white" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU BOOK</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">What should I know before I book?</DisplayHeading>
          <FaqAccordion items={[...partyFaqs]} showJumpNav />
        </Container>
      </Section>

      <LocationStrip
        title="House parties across Dubai"
        subtitle={
          <>
            Available across Dubai including{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Palm Jumeirah</Link>,{' '}
            <Link to="/locations/dubai-marina" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Dubai Marina</Link>
            {' '}and{' '}
            <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Downtown Dubai</Link>
            . See{' '}
            <Link to="/locations" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">areas we serve</Link>.
          </>
        }
      />

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US WHAT YOU ARE PLANNING</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, address and guest count is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Event buffets start from AED 120 per person. You do not need to build the party before contacting us. We typically reply within 15 minutes during business hours.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get an itemised party-catering quote
            </Link>
            <a
              href={PRIVATE_PARTY_WHATSAPP_LINK}
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
