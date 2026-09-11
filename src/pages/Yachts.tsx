// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /yachts
//     primary:     "yacht catering dubai"
//     subkeywords: "yacht chef dubai" · "private chef yacht dubai" · "boat catering dubai" · "yacht party catering dubai" · "chef for yacht charter dubai" · "yacht catering packages dubai" · "new year yacht catering dubai" · "small yacht catering dubai" · "yacht catering dubai harbour" · "yacht dinner cruise dubai" · "food to bring on a yacht party"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import FaqAccordion from '../components/FaqAccordion'
import YachtCateringEstimator from '../components/YachtCateringEstimator'
import YachtHero from '../components/yachts/YachtHero'
import YachtOccasions from '../components/yachts/YachtOccasions'
import YachtQuoteForm, { type YachtQuotePrefill } from '../components/yachts/YachtQuoteForm'
import YachtServiceSelector from '../components/yachts/YachtServiceSelector'
import YachtStickyCta from '../components/yachts/YachtStickyCta'
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
import { CATERING_PATHS } from '@/content/cateringCluster'
import { faqPageSchema } from '@/utils/schema'
import {
  YACHT_BOOKING_TERMS,
  YACHT_EXTRAS,
  YACHT_FAQS,
  YACHT_INCLUDED,
  YACHT_MENU_FORMATS,
  YACHT_NOT_INCLUDED,
  YACHT_PRICING_DISCLAIMER,
  YACHT_QUOTE_EXAMPLE_GUESTS,
  formatYachtAed,
  type YachtEstimate,
  type YachtFormatId,
} from '@/content/yachtCateringQuote'
import {
  YACHT_HOW,
  YACHT_MARINAS,
  YACHT_OPERATIONS,
  YACHT_POSITIONING,
  YACHT_SEO,
  YACHT_SIBLINGS,
  YACHT_TRUST,
  YACHT_WHATSAPP_BASE,
  type YachtServiceId,
} from '@/content/yachtPage'

const PATH = CATERING_PATHS.yachts
const HERO = '/images/yacht-catering-dubai-hero.webp'
const WHATSAPP_LINK = `https://wa.me/971551744849?text=${encodeURIComponent(YACHT_WHATSAPP_BASE)}`

const FORMAT_TO_STYLE: Record<YachtFormatId, YachtServiceId> = {
  canape: 'canapes',
  buffet: 'buffet',
  'canape-live': 'live-bbq',
}

const yachtFaq = faqPageSchema(YACHT_FAQS.map((item) => ({ question: item.q, answer: item.a })))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/yachts#service',
      name: 'Yacht Catering Dubai',
      serviceType: 'Yacht Catering',
      description:
        'Yacht catering Dubai with a myCHEF chef and service team. Menus, marina loading, galley service and clear-down on a vessel you charter separately.',
      url: 'https://www.mychef.ae/yachts',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@type': 'City', name: 'Dubai' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Private chef', item: 'https://www.mychef.ae/private-chef-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Yacht catering', item: 'https://www.mychef.ae/yachts' },
      ],
    },
    ...(yachtFaq ? [yachtFaq] : []),
  ],
}

export default function Yachts() {
  const [prefill, setPrefill] = useState<YachtQuotePrefill>({ style: 'not-sure' })
  useWhatsAppMessage(YACHT_WHATSAPP_BASE)

  const goQuote = (next?: YachtQuotePrefill) => {
    if (next) setPrefill((current) => ({ ...current, ...next }))
    document.getElementById('yacht-quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onEstimate = (estimate: YachtEstimate) => {
    goQuote({
      style: FORMAT_TO_STYLE[estimate.formatId],
      guests: String(estimate.guests),
      estimate: `${formatYachtAed(estimate.total)} incl. VAT · ${estimate.format.name} · ${estimate.guests} guests`,
    })
  }

  return (
    <div className="yacht-page bg-white pb-20 md:pb-0">
      <SEO
        title={YACHT_SEO.title}
        description={YACHT_SEO.description}
        canonicalPath={PATH}
        ogImage={HERO}
        hideSiteName
        preloadHero={HERO}
        schema={schema}
      />

      <YachtHero image={HERO} quoteHref="#yacht-quote" whatsappHref={WHATSAPP_LINK} />

      <YachtServiceSelector onSelect={(id) => goQuote({ style: id })} />
      <YachtOccasions />

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>Real Dubai charter</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-3">A 113-guest day at Dubai Harbour</DisplayHeading>
          <BodyCopy className="mb-4 max-w-[62ch]">
            {YACHT_QUOTE_EXAMPLE_GUESTS} guests · 4 hours · Dubai Harbour · corporate event. Client identity stays private.
            Three menus were priced for the same day. These are not a general starting price for a smaller birthday.
          </BodyCopy>
          <p className="font-inter text-body-sm text-gray-600 mb-10 max-w-[62ch]">
            Yacht catering Dubai is quoted from the vessel, the headcount and the hours — a yacht chef Dubai brief for ten
            people is not the same slip as this 113-guest day.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {YACHT_MENU_FORMATS.map((format) => (
              <article key={format.id} className="border border-gray-200 bg-[#F4F0E8] p-6 md:p-7">
                <h3 className="font-playfair text-h4 text-[#1B2A4A] mb-3">{format.name}</h3>
                <p className="font-playfair text-h3 text-[#1B2A4A] tabular-nums">
                  {formatYachtAed(format.perGuestAed)}
                  <span className="font-inter text-body-sm text-gray-500"> / guest</span>
                </p>
                <p className="mt-4 font-inter text-body-sm text-gray-600 leading-relaxed">{format.includes}</p>
                <p className="mt-6 font-inter text-body-xs text-gray-500 leading-relaxed">
                  Real total, {YACHT_QUOTE_EXAMPLE_GUESTS} guests incl. VAT: {formatYachtAed(format.quotedTotalInclVat113)}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 font-inter text-body-sm text-gray-600 leading-relaxed max-w-[62ch]">{YACHT_PRICING_DISCLAIMER}</p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-14">
            <div>
              <h3 className="font-playfair text-h4 text-[#1B2A4A] mb-4">In that written proposal</h3>
              <ul className="space-y-3">
                {YACHT_INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 font-inter text-body-sm text-gray-700 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-h4 text-[#1B2A4A] mb-4">Yours to arrange</h3>
              <ul className="space-y-3">
                {YACHT_NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 font-inter text-body-sm text-gray-700 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gray-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
                {YACHT_EXTRAS.map((extra) => (
                  <li key={extra.id} className="flex items-baseline justify-between gap-6 py-3">
                    <span className="font-inter text-body-sm text-gray-700 leading-relaxed">{extra.name}</span>
                    <span className="font-playfair text-body text-[#1B2A4A] tabular-nums shrink-0">
                      {formatYachtAed(extra.aed)}
                    </span>
                  </li>
                ))}
                <li className="flex items-baseline justify-between gap-6 py-3">
                  <span className="font-inter text-body-sm text-gray-700 leading-relaxed">Overtime</span>
                  <span className="font-playfair text-body text-[#1B2A4A] tabular-nums shrink-0">AED 240 / server / hour</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="estimate" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>Estimate</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-3">Estimate your yacht catering</DisplayHeading>
          <BodyCopy className="mb-10 max-w-[58ch]">
            Choose your guest count and menu style for an indicative estimate. Rates come from the 113-guest Dubai Harbour
            charter. Get This Quote copies the numbers into the form below.
          </BodyCopy>
          <YachtCateringEstimator onRequestQuote={onEstimate} />
        </Container>
      </Section>

      <Section id="yacht-quote" tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>Quote</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-4">Tell us the charter</DisplayHeading>
          <BodyCopy className="mb-8">
            Date, marina and guest count is enough. You do not need a finished menu. Yacht catering packages Dubai are
            written proposals, not brochure deals.
          </BodyCopy>
          <YachtQuoteForm
            key={`${prefill.style || ''}-${prefill.guests || ''}-${prefill.estimate || ''}`}
            prefill={prefill}
          />
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>Why hosts use myCHEF on the water</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-10">{YACHT_POSITIONING}</DisplayHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {YACHT_TRUST.map((item) => (
              <article key={item.title}>
                <h3 className="font-playfair text-h4 text-[#1B2A4A] mb-2">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
          <BodyCopy className="mt-12 max-w-[62ch]">
            No yacht-specific public reviews are shown here because we do not invent testimonials. The 113-guest Harbour
            charter above is the commercial proof we can stand behind.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>How it works</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-10">How yacht catering Dubai is planned</DisplayHeading>
          <SequenceRail steps={[...YACHT_HOW]} />
          <BodyCopy className="mt-12 max-w-[62ch]">
            A private chef yacht Dubai day is still one charter, not a household plan. If you want the same chef in a
            home, week after week, that is{' '}
            <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              private chef Dubai
            </Link>
            . Land events sit on{' '}
            <Link to="/events" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Event catering in Dubai
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>On the water</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-10">Built around the yacht, not a restaurant kitchen</DisplayHeading>
          <div className="grid sm:grid-cols-2 gap-10">
            {YACHT_OPERATIONS.map((item) => (
              <article key={item.title}>
                <h3 className="font-playfair text-h4 text-[#1B2A4A] mb-2">{item.title}</h3>
                <p className="font-inter text-body text-gray-600 leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
          <BodyCopy className="mt-12 max-w-[62ch]">
            Small yacht catering Dubai and a yacht dinner cruise Dubai use the same rules: the galley, the loading window
            and the hours you have the vessel. Food to bring on a yacht party is planned against that, not against a
            restaurant pass. New year yacht catering Dubai is still a charter-day brief.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>Boarding</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-4">Marinas we load from</DisplayHeading>
          <BodyCopy className="mb-10 max-w-[62ch]">
            Yacht catering Dubai Harbour is one example — we follow the boat. Most charters we cook for board at Dubai
            Marina, the Harbour, Palm Jumeirah or JBR.
          </BodyCopy>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {YACHT_MARINAS.map((marina) => {
              const inner = (
                <>
                  <span className="font-playfair text-h4 text-[#1B2A4A] block mb-1">{marina.name}</span>
                  <span className="font-inter text-body-sm text-gray-600 leading-relaxed">{marina.note}</span>
                </>
              )
              return marina.href ? (
                <Link
                  key={marina.name}
                  to={marina.href}
                  className="border border-gray-200 bg-[#F4F0E8] p-5 hover:border-gold transition-colors"
                >
                  {inner}
                </Link>
              ) : (
                <div key={marina.name} className="border border-gray-200 bg-[#F4F0E8] p-5">
                  {inner}
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="standard">
        <Container>
          <SectionLabel>Next</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-8">Guides and neighbouring pages</DisplayHeading>
          <ul className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {YACHT_SIBLINGS.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="group flex items-center justify-between gap-6 py-5">
                  <span className="font-inter text-body text-gray-700">{item.label}</span>
                  <ArrowRight
                    size={16}
                    className="flex-shrink-0 text-gold-ink transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="yacht-faqs" tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>Questions</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-10">Before you send the brief</DisplayHeading>
          <FaqAccordion items={[...YACHT_FAQS]} />
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>Book the food, not the boat</SectionLabel>
          <DisplayHeading className="text-[#1B2A4A] mb-6">
            Tell us your date, marina and guest count. We will build the menu around the yacht.
          </DisplayHeading>
          <p className="font-inter text-body text-gray-600 leading-relaxed mb-8 max-w-[58ch]">
            Boat catering Dubai is the same job: food planned for a moving deck, on a vessel you already have.
          </p>
          <CTAGroup>
            <a href="#yacht-quote" className="btn-primary">
              Get a Yacht Catering Quote
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary !text-[#1B2A4A] !border-[#1B2A4A]/25">
              WhatsApp myCHEF
            </a>
          </CTAGroup>
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container className="max-w-3xl">
          <dl className="divide-y divide-gray-200 border-y border-gray-200">
            {YACHT_BOOKING_TERMS.map((term) => (
              <div key={term.title} className="py-5">
                <dt className="font-playfair text-h4 text-[#1B2A4A] mb-2">{term.title}</dt>
                <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{term.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <YachtStickyCta quoteHref="#yacht-quote" whatsappHref={WHATSAPP_LINK} />
    </div>
  )
}
