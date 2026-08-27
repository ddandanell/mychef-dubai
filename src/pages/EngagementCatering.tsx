// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /engagement-catering-dubai
//     primary:     "engagement party catering dubai"
//     subkeywords: "engagement catering dubai" · "engagement catering dubai price" · "engagement party catering cost per person dubai" · "best engagement catering dubai" · "engagement catering packages dubai" · "engagement catering menu dubai" · "halal engagement catering dubai" · "engagement dinner catering dubai"
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
import { CATERING_INQUIRY_HREF } from '@/content/cateringCluster'
import {
  ENGAGEMENT_KEYWORD_LOCK,
  ENGAGEMENT_ROOT,
  ENGAGEMENT_SIBLING_LINKS,
  ENGAGEMENT_WHATSAPP_LINK,
  ENGAGEMENT_WHATSAPP_MESSAGE,
  engagementFaqs,
  engagementHero,
  engagementHeroCopy,
  gallery,
  includedItems,
  jumpNav,
  menuFormats,
  priceRows,
  pricingIntro,
  pricingNotes,
  siloIntro,
  startSteps,
  whatItIs,
  whoLeaves,
} from '@/content/engagementPage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/engagement-catering-dubai#service',
      name: 'Engagement Party Catering Dubai',
      serviceType: 'Engagement Party Catering',
      description:
        'Engagement party catering Dubai for two families and a toast. Drop-off from AED 90 per person, buffet from AED 120, live stations or chef-led plated dining.',
      url: 'https://www.mychef.ae/engagement-catering-dubai',
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
          name: 'Engagement party catering',
          item: 'https://www.mychef.ae/engagement-catering-dubai',
        },
      ],
    },
  ],
}

export default function EngagementCatering() {
  useWhatsAppMessage(ENGAGEMENT_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={ENGAGEMENT_KEYWORD_LOCK.title}
        description={ENGAGEMENT_KEYWORD_LOCK.description}
        canonicalPath={ENGAGEMENT_ROOT}
        ogImage={engagementHero.src}
        hideSiteName
        preloadHero={engagementHero.src}
        schema={schema}
      />

      <PageHero
        eyebrow={engagementHeroCopy.eyebrow}
        title={engagementHeroCopy.title}
        subtitle={engagementHeroCopy.subtitle}
        image={engagementHero.src}
        imageAlt={engagementHero.alt}
        imageWidth={engagementHero.width}
        imageHeight={engagementHero.height}
        align="left"
        cta={{ label: 'Get an itemised engagement-catering quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: ENGAGEMENT_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: 'Engagement party catering' },
        ]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/90 max-w-[58ch]">
          {engagementHeroCopy.priceLine}
        </p>
        <p className="mt-3 font-inter text-body-sm text-white/70 max-w-[58ch]">
          {engagementHeroCopy.replyLine}
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
            {ENGAGEMENT_SIBLING_LINKS.map((item) => (
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
            <Link to={siloIntro.partyHref} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              {siloIntro.partyLabel}
            </Link>{' '}
            {siloIntro.partyNote}
          </p>
        </Container>
      </Section>

      <Section id="who-leaves" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHO THIS IS FOR</SectionLabel>
          <DisplayHeading className="text-black mb-6">{whatItIs.h2}</DisplayHeading>
          {whatItIs.paragraphs.map((p) => (
            <BodyCopy key={p.slice(0, 40)} className="mb-5">
              {p}
            </BodyCopy>
          ))}
          <ul className="mt-12 grid md:grid-cols-2 gap-8">
            {whoLeaves.map((item) => (
              <li key={item.href} className="border-t border-gray-200 pt-6">
                <h3 className="font-playfair text-h4 text-black mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4 max-w-[52ch]">{item.body}</p>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                >
                  {item.linkLabel} <ArrowRight size={14} aria-hidden />
                </Link>
                {'secondaryHref' in item && item.secondaryHref ? (
                  <Link
                    to={item.secondaryHref}
                    className="mt-3 flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                  >
                    {item.secondaryLabel} <ArrowRight size={14} aria-hidden />
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="pricing" tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">FORMATS AND PRICES</SectionLabel>
          <DisplayHeading className="text-white mb-6">Priced by format, not by a named package</DisplayHeading>
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
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container>
          <SectionLabel>WHAT IS INCLUDED</SectionLabel>
          <DisplayHeading className="text-black mb-12">Menu, chefs, staff, setup and cleanup</DisplayHeading>
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

      <Section id="menus" tone="ivory" rhythm="chapter">
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

      <Section id="gallery" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE ROOM</SectionLabel>
          <DisplayHeading className="text-black mb-4">How the night can look</DisplayHeading>
          <p className="font-inter text-body-sm text-gray-500 mb-10 max-w-[58ch]">
            Experience concept shown. These frames are not photographs of a booked event.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {gallery.map((img) => (
              <figure key={img.src} className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </figure>
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

      <Section id="faqs" tone="white" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU BOOK</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">What should I know before I book?</DisplayHeading>
          <FaqAccordion items={[...engagementFaqs]} showJumpNav />
        </Container>
      </Section>

      <LocationStrip
        title="Engagement gatherings across Dubai"
        subtitle={
          <>
            Available across Dubai including{' '}
            Palm Jumeirah,{' '}
            Dubai Marina
            {' '}and{' '}
            Downtown Dubai
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
            Event buffets start from AED 120 per person. You do not need to build the gathering before contacting us.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get an itemised engagement-catering quote
            </Link>
            <a
              href={ENGAGEMENT_WHATSAPP_LINK}
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
