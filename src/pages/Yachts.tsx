// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /yachts
//     primary:     "yacht catering dubai"
//     subkeywords: "yacht chef dubai" · "private chef yacht dubai" · "boat catering dubai" · "yacht party catering dubai" · "chef for yacht charter dubai" · "yacht catering packages dubai" · "new year yacht catering dubai" · "small yacht catering dubai" · "yacht catering dubai harbour" · "yacht dinner cruise dubai" · "food to bring on a yacht party"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import YachtCateringEstimator from '../components/YachtCateringEstimator'
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
} from '@/content/yachtCateringQuote'

const PATH = CATERING_PATHS.yachts
const HERO = '/images/yacht-catering-dubai-hero.webp'
const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like yacht catering. Charter date: __, Marina: __, Guests: __, Format: __ (via mychef.ae/yachts)"
const WHATSAPP_LINK = `https://wa.me/971551744849?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

/** pages["/yachts"].internal_linking.siblings — render exactly. */
const SIBLINGS = [
  { href: '/yacht-catering-guide-dubai', label: 'Yacht catering guide' },
  { href: '/yacht-catering-checklist-dubai', label: 'Yacht catering checklist' },
  { href: '/blog/yacht-party-menu-ideas-dubai', label: 'Yacht party menu ideas' },
  { href: '/bar-services-dubai', label: 'Bar services' },
  { href: '/locations/dubai-marina', label: 'Dubai Marina' },
] as const

const BOARDING = [
  { href: '/locations/jbr', label: 'JBR' },
] as const

const formats = [
  {
    title: 'Chef on board',
    body: 'A chef cooks in the galley for the hours you have the vessel. Plates come out as you cruise. This is still a charter-day brief, not a household chef plan.',
  },
  {
    title: 'Standing food and canapés',
    body: 'Passed bites and platters that guests can hold on a moving deck. Useful when people are standing, swimming, or moving between saloon and bow.',
  },
  {
    title: 'Grill on deck',
    body: 'A compact grill when the captain allows it and there is a safe patch of deck. Seafood, cuts and sides, finished in the open air rather than a land buffet.',
  },
  {
    title: 'Seated dinner',
    body: 'Courses at a table in the saloon or on the aft deck. Timing has to match the route and the swell, not a restaurant pass.',
  },
  {
    title: 'A larger day on the water',
    body: 'More guests, more staff, a mix of canapés, a grill and a dessert. The headcount and the vessel decide the team, not a named package.',
  },
  {
    title: 'Morning or sunset brunch',
    body: 'Lighter food for a shorter cruise. Fruit, eggs, bakery, cold seafood — whatever the galley and the hour can actually support.',
  },
] as const

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
        'Yacht Catering Dubai with a myCHEF chef and service team. Menus, marina loading, galley service and clear-down on a vessel you charter separately.',
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
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title="Yacht Catering Dubai | Chef & Crew for Charter Days | myCHEF"
        description="Yacht Catering Dubai with indicative pricing from AED 162 per guest: canapés, buffet or live station, extras and written terms. You charter the yacht."
        canonicalPath={PATH}
        ogImage={HERO}
        hideSiteName
        preloadHero={HERO}
        schema={schema}
      />

      <PageHero
        eyebrow="Charter days"
        title="Yacht Catering Dubai"
        subtitle="Yacht Catering Dubai with a chef and crew for the charter day. You book the yacht. We handle menus, marina loading, galley service and clear-down so you stay a guest at the table."
        image={HERO}
        imageAlt="Chef and service on a Dubai yacht deck at dusk. Experience concept shown."
        imageWidth={1344}
        imageHeight={752}
        align="left"
        cta={{ label: 'Get a yacht catering quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Private chef', href: '/private-chef-dubai' },
          { label: 'Yacht catering' },
        ]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-6 font-inter text-body-sm text-white/80 max-w-[600px]">
          Real pricing on this page —{' '}
          <a href="#estimate" className="text-gold underline underline-offset-4 hover:text-gold-light">
            see what a charter day costs
          </a>{' '}
          before you enquire.
        </p>
      </PageHero>
      <TrustSignalStrip />

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT THIS IS</SectionLabel>
          <DisplayHeading className="text-black mb-6">You charter the yacht. We do the food.</DisplayHeading>
          <BodyCopy className="mb-5">
            We do not supply the vessel. You arrange the charter, or you already own the boat. We bring the food, the chef and the people who serve it, then we clear the galley before you dock — or whenever the crew asks us to be off.
          </BodyCopy>
          <BodyCopy className="mb-5">
            A private chef yacht Dubai brief is still one day or one evening on the water. It is not a standing household plan. If you want the same chef in a home, week after week, that is{' '}
            <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              private chef Dubai
            </Link>
            .
          </BodyCopy>
          <BodyCopy>
            This page sits inside{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Luxury catering in Dubai
            </Link>
            . If the night is on land — a villa, a garden, an office — start with{' '}
            <Link to="/events" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Event catering in Dubai
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>ON THE WATER</SectionLabel>
          <DisplayHeading className="text-black mb-6">How yacht catering Dubai is planned around the galley</DisplayHeading>
          <BodyCopy className="mb-12">
            A yacht chef Dubai assignment is whoever can work that galley: smaller than a villa kitchen, fridge already half full of crew food, loading only when the marina opens the door. The menu has to survive that, or it should not be on the menu.
          </BodyCopy>
          <SequenceRail
            steps={[
              'Send the charter date, marina or berth, guest count, format, and anything you know about the galley.',
              'We plan what can be finished on land and what can honestly be cooked on board. Fridge space and oven space decide more than taste notes.',
              'Loading happens in the window the captain sets. Crates, ice, kit and people go on at the marina — not when it happens to suit a van.',
              'Service on deck or in the saloon, then clear-down before you return, or at the time the crew agrees.',
            ]}
          />
          <BodyCopy className="mt-12">
            A chef for yacht charter Dubai needs the boarding time and the captain's contact, not a mood board. Boat catering Dubai is the same job with a different search: food planned for a moving deck.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>FORMATS</SectionLabel>
          <DisplayHeading className="text-black mb-4">What we can cook and serve on board</DisplayHeading>
          <BodyCopy className="mb-12">
            Light food holds up better in heat and swell: seafood, mezze, canapés, a grill if the deck allows it. Yacht party catering Dubai is the larger version of the same rules — more guests, more staff, still no dishes that only work in a restaurant pass.
          </BodyCopy>
          <div className="grid md:grid-cols-2 gap-x-12 border-t border-gray-200">
            {formats.map((fmt) => (
              <article key={fmt.title} className="border-b border-gray-200 py-6">
                <h3 className="font-playfair text-h4 text-black mb-2">{fmt.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed max-w-[52ch]">{fmt.body}</p>
              </article>
            ))}
          </div>
          <BodyCopy className="mt-10">
            Drinks sit with{' '}
            <Link to="/bar-services-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Bar services
            </Link>
            {' '}when the operator allows alcohol and you want a bar on deck. Menu ideas that actually travel are on{' '}
            <Link to="/blog/yacht-party-menu-ideas-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Yacht party menu ideas
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <div className="max-w-3xl">
          <SectionLabel>THE QUOTE</SectionLabel>
          <DisplayHeading className="text-black mb-6">What the quote is built from</DisplayHeading>
          <BodyCopy className="mb-5">
            Hosts looking for yacht catering packages Dubai get a written proposal, not a brochure of named deals. Guest count, menu, hours on board, staff, boarding marina and galley capacity are what build it.
          </BodyCopy>
          <BodyCopy className="mb-5">
            Food, chef, service staff when the headcount needs them, setup and clear-down are in the proposal when they are in the brief. The yacht, fuel, marina fees and charter are yours.
          </BodyCopy>
          <BodyCopy>
            Share the date, the marina, the guest count and the format. That is enough to start. The{' '}
            <Link to="/yacht-catering-checklist-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Yacht catering checklist
            </Link>
            {' '}is the list of what we will ask; the{' '}
            <Link to="/yacht-catering-guide-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Yacht catering guide
            </Link>
            {' '}is the longer explanation of galley limits and routes.
          </BodyCopy>
          </div>

          <div className="mt-14 pt-12 border-t border-gray-200">
            <SectionLabel>A REAL QUOTE, WITH REAL NUMBERS</SectionLabel>
            <DisplayHeading className="text-black mb-6">What yacht catering actually costs</DisplayHeading>
            <BodyCopy className="mb-10">
              Here is a real quote, client details removed: a corporate charter, {YACHT_QUOTE_EXAMPLE_GUESTS} guests, four hours on board, boarding at Dubai Harbour. Three menus were priced for the same day.
            </BodyCopy>
            <div className="grid md:grid-cols-3 gap-px bg-gray-200">
              {YACHT_MENU_FORMATS.map((format) => (
                <article key={format.id} className="bg-white p-6 md:p-7">
                  <h3 className="font-playfair text-h4 text-black mb-3">{format.name}</h3>
                  <p className="font-playfair text-h3 text-black tabular-nums">
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
            <p className="mt-8 font-inter text-body-sm text-gray-600 leading-relaxed max-w-[62ch]">
              Per-guest pricing moves with headcount, menu and hours. A 20-guest birthday and a 113-guest corporate are quoted on the same lines — they just land at different numbers. Indicative only — every event is quoted in writing.
            </p>
            <p className="mt-4 font-inter text-body-xs text-gray-500 leading-relaxed max-w-[62ch]">{YACHT_PRICING_DISCLAIMER}</p>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>WHAT&apos;S IN THE PRICE</SectionLabel>
          <DisplayHeading className="text-black mb-10">Included, and not included</DisplayHeading>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="font-playfair text-h4 text-black mb-4">In the proposal, when it is in the brief</h3>
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
              <h3 className="font-playfair text-h4 text-black mb-4">Yours to arrange</h3>
              <ul className="space-y-3">
                {YACHT_NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 font-inter text-body-sm text-gray-700 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gray-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 font-inter text-body-xs text-gray-500 leading-relaxed max-w-[62ch]">{YACHT_PRICING_DISCLAIMER}</p>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE EXTRAS</SectionLabel>
          <DisplayHeading className="text-black mb-4">Optional charges, on the table</DisplayHeading>
          <BodyCopy className="mb-10">No surprises after the proposal. The extras we get asked about most:</BodyCopy>
          <ul className="divide-y divide-gray-200 border-y border-gray-200">
            {YACHT_EXTRAS.map((extra) => (
              <li key={extra.id} className="flex items-baseline justify-between gap-6 py-4">
                <span className="font-inter text-body-sm text-gray-700 leading-relaxed">{extra.name}</span>
                <span className="font-playfair text-h4 text-black tabular-nums shrink-0">{formatYachtAed(extra.aed)}</span>
              </li>
            ))}
            <li className="flex items-baseline justify-between gap-6 py-4">
              <span className="font-inter text-body-sm text-gray-700 leading-relaxed">Overtime (agreed extension of hours)</span>
              <span className="font-playfair text-h4 text-black tabular-nums shrink-0">AED 240 / server / hour</span>
            </li>
          </ul>
          <p className="mt-6 font-inter text-body-xs text-gray-500 leading-relaxed">{YACHT_PRICING_DISCLAIMER}</p>
        </Container>
      </Section>

      <Section id="estimate" tone="dark" rhythm="chapter">
        <Container>
          <SectionLabel tone="dark">ROUGH NUMBERS, BEFORE YOU ASK</SectionLabel>
          <DisplayHeading className="text-white mb-4">Estimate your charter day</DisplayHeading>
          <p className="font-inter text-body text-white/70 leading-relaxed mb-12 max-w-[58ch]">
            Move the guest count and pick a menu. VAT is a separate line. The total is indicative — not an offer.
          </p>
          <YachtCateringEstimator />
        </Container>
      </Section>

      <Section id="booking" tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE TERMS, BEFORE YOU ASK</SectionLabel>
          <DisplayHeading className="text-black mb-10">How booking works</DisplayHeading>
          <dl className="divide-y divide-gray-200 border-y border-gray-200">
            {YACHT_BOOKING_TERMS.map((term) => (
              <div key={term.title} className="py-5">
                <dt className="font-playfair text-h4 text-black mb-2">{term.title}</dt>
                <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{term.body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>BOARDING</SectionLabel>
          <DisplayHeading className="text-black mb-4">Where we board</DisplayHeading>
          <BodyCopy className="mb-10">
            Most charters we cook for board at Dubai Marina, Palm Jumeirah or JBR. We also load where the vessel actually is — Dubai Harbour, Dubai Creek, Bluewaters — when the captain gives us a window.
          </BodyCopy>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px]">
            {BOARDING.map((loc) => (
              <Link
                key={loc.href}
                to={loc.href}
                className="group flex items-center justify-between border border-gray-200 bg-white p-6 transition-colors hover:border-gold"
              >
                <span className="font-playfair text-h4 text-black group-hover:text-gold-ink">{loc.label}</span>
                <ArrowRight size={16} className="text-gold-ink" aria-hidden />
              </Link>
            ))}
          </div>
          <p className="mt-8">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              Areas we serve <ArrowRight size={14} aria-hidden />
            </Link>
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container>
          <SectionLabel>NEXT STEPS</SectionLabel>
          <DisplayHeading className="text-black mb-10">You May Also Like</DisplayHeading>
          <ul className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {SIBLINGS.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group flex items-center justify-between gap-6 py-5"
                >
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

      <LocationStrip
        title="Yacht catering across Dubai"
        subtitle={
          <>
            Boarding most often from{' '}
            <Link to="/locations/dubai-marina" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
              Dubai Marina
            </Link>
            {', '}
            <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
              Palm Jumeirah
            </Link>
            {' '}and{' '}
            <Link to="/locations/jbr" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
              JBR
            </Link>
            .
          </>
        }
      />

      <Section id="yacht-faqs" tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>QUESTIONS</SectionLabel>
          <DisplayHeading className="text-black mb-10">Before you send the brief</DisplayHeading>
          <FaqAccordion items={[...YACHT_FAQS]} />
        </Container>
      </Section>

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US THE CHARTER</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, marina and guest count is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            You do not need a finished menu. Send the charter date, where you board, how many people, and whether you want a chef, standing food, a grill or a seated dinner.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get a yacht catering quote
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </CTAGroup>
        </Container>
      </Section>
    </div>
  )
}
