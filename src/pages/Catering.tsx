import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /catering-dubai
//     primary:     "catering dubai"
//     subkeywords: "catering services dubai" · "food catering dubai" · "home catering dubai" · "catering dubai party" · "catering service in dubai" · "catering services in dubai" · "small catering dubai party" · "full service catering dubai" · "private catering dubai" · "bespoke catering dubai" · "outdoor catering dubai" · "party food catering dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
import EventLayers from '../components/catering/EventLayers'
import EventPathway from '../components/catering/EventPathway'
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
import {
  CATERING_INQUIRY_HREF,
  CATERING_KEYWORD_LOCK,
  CATERING_PATHS,
  CATERING_ROOT,
  CATERING_SIBLING_LINKS,
  CATERING_WHATSAPP_LINK,
  CATERING_WHATSAPP_MESSAGE,
} from '@/content/cateringCluster'
import {
  cateringFaqs,
  cateringHero,
  cuisinesLine,
  eventPathways,
  exampleEvents,
  jetPathway,
  jumpNav,
  officePathway,
  priceRows,
  pricingNotes,
  proofItems,
  quoteFactors,
  SAME_PARTNERS,
  serviceStyles,
  startSteps,
  unsureLinks,
  venuePathways,
} from '@/content/cateringPage'
import { faqPageSchema } from '@/utils/schema'
import { christmasMenus } from '@/content/christmasMenus'

const faqSchema = faqPageSchema(cateringFaqs.map((f) => ({ question: f.q, answer: f.a })))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/catering-dubai#service',
      name: 'Catering Dubai',
      serviceType: 'Catering Service',
      description:
        'Bespoke catering in Dubai for weddings, villas, yachts, corporate events and private celebrations. Food delivery, chefs and service staff, live cooking, or full event catering. Food-only catering starts from AED 90 per person.',
      url: 'https://www.mychef.ae/catering-dubai',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Catering pathways',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Catering', url: 'https://www.mychef.ae/wedding-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event Catering', url: 'https://www.mychef.ae/corporate-event-catering-dubai' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Villa Catering', url: 'https://www.mychef.ae/villas-private-residences' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Yacht Catering', url: 'https://www.mychef.ae/yachts' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drop-Off Catering', url: 'https://www.mychef.ae/drop-off-catering-dubai' } },
        ],
      },
    },
    ...(faqSchema ? [faqSchema] : []),
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
      ],
    },
  ],
}

export default function Catering() {
  useWhatsAppMessage(CATERING_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={CATERING_KEYWORD_LOCK.title}
        description={CATERING_KEYWORD_LOCK.description}
        canonicalPath={CATERING_ROOT}
        ogImage={cateringHero.src}
        hideSiteName
        preloadHero={cateringHero.src}
        schema={schema}
      />

      <NonCateringVisual><PageHero
        eyebrow="Catering Dubai"
        title="Catering Dubai — buffets, canapés and chef-led service"
        subtitle={"Catering in Dubai, tailored to your venue, guests and occasion. Drop-off menus start from AED 90 per person for 10 guests, with a minimum order of AED 900. Staffed buffets start from AED 120 for 20 guests, canapés from AED 150, bespoke plated dining from AED 700 and yacht catering from AED 280. Your proposal confirms staffing, setup and any optional event support."}
        image={cateringHero.src}
        imageAlt={cateringHero.alt}
        imageWidth={cateringHero.width}
        imageHeight={cateringHero.height}
        imagePosition="100% 50%"
        align="left"
        cta={{ label: 'Request your catering quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: CATERING_WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Catering Dubai' }]}
        minHeight="full"
        overlay="dark"
      /></NonCateringVisual>
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
          <SectionLabel>HOW THIS IS RUN</SectionLabel>
          <DisplayHeading className="text-black mb-8">Explore our service approach</DisplayHeading>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-5 max-w-4xl">
            {proofItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="font-inter text-body-sm text-gray-700 underline decoration-gold/40 underline-offset-4 hover:text-gold-ink"
                >
                  {item.claim}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link
              to="/how-we-vet-our-chefs"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              How myCHEF quality standards work <ArrowRight size={14} aria-hidden />
            </Link>
          </p>
          <p className="mt-6 max-w-[65ch] font-inter text-body-sm text-gray-500 leading-relaxed">
            {SAME_PARTNERS}
          </p>
          <p className="mt-4 max-w-[65ch] font-inter text-body-sm text-gray-500 leading-relaxed">
            Choose food delivered ready to serve, a chef-led dinner at home, or catering with service staff. For a gathering of 10–20 guests, the team and setup depend on the menu, service style and kitchen facilities; your proposal confirms what is included. Explore menus for Christmas, Diwali, Ramadan and National Day through our{' '}
            <Link
              to="/festive-catering-dubai"
              className="text-gold-ink underline underline-offset-4 hover:text-gold"
            >
              festive catering options
            </Link>
            , or plan a traditional roast cooked in your kitchen on 25 December with{' '}
            <Link
              to="/christmas-catering-dubai"
              className="text-gold-ink underline underline-offset-4 hover:text-gold"
            >
              Christmas catering in Dubai
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section id="pricing" tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">PRICING</SectionLabel>
          <DisplayHeading className="text-white mb-6">Catering pricing in Dubai</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            Compare published starting prices, clearly identified market ranges and the calculator’s indicative estimate. Your chosen format determines the menu and staffing required; the written proposal confirms the complete scope and total.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            Your quote reflects the guest count, menu and work required at the venue. Confirm who supplies the ingredients, which staff are included and whether setup and clear-down are covered. Drop-off is food delivery; a chef, waiters or other event support are included only where your proposal specifies them. Share dietary requirements and, for outdoor catering, the available power, water and preparation space.
          </p>
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
                      <Link to={row.href} className="hover:text-gold">
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
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[65ch]">
            Compare{' '}
            <Link to="/events" className="text-gold underline underline-offset-4 hover:text-gold-light">event catering</Link>
            {' and '}
            <Link to="/buffet-catering-dubai" className="text-gold underline underline-offset-4 hover:text-gold-light">buffet catering</Link>
            {' proposals by menu, staffing, service time and equipment. A household cooking visit has a different scope from a catered celebration. Our '}
            <Link to="/private-chef-dubai/pricing" className="text-gold underline underline-offset-4 hover:text-gold-light">private chef prices</Link>
            {' explain the visit options; event staffing and presentation are quoted for the occasion.'}
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              to={CATERING_PATHS.packages}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              View catering packages <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={CATERING_PATHS.calculator}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Estimate your catering cost <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={CATERING_PATHS.priceGuide}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Catering pricing and package guide <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container className="max-w-3xl">
          <SectionLabel>PRIVATE CHEF OR CATERING</SectionLabel>
          <DisplayHeading className="text-black mb-6">Choose the service that fits your occasion</DisplayHeading>
          <BodyCopy className="mb-4">
            <strong className="text-black">Food delivery:</strong> prepared food delivered ready to serve, with no team staying at the venue. Drop-off catering starts from AED 90 per person for 10 guests, with a minimum order of AED 900.
          </BodyCopy>
          <BodyCopy className="mb-4">
            <strong className="text-black">One-off chef-led dining:</strong> a chef prepares an agreed menu in your kitchen for a single lunch or dinner. Serving staff, tableware and styling are agreed separately. Explore our{' '}
            <Link to="/luxury-dining-experiences" className="text-gold-ink underline underline-offset-4">private dining experiences</Link>.
          </BodyCopy>
          <BodyCopy className="mb-4">
            <strong className="text-black">Staffed event catering:</strong> food, chefs, service staff and equipment planned around one occasion. Your proposal sets out the menu, staffing, setup and clear-down included for your event.
          </BodyCopy>
          <BodyCopy className="mb-4">
            <strong className="text-black">Recurring household cooking:</strong> regular chef visits built around your household's preferences and schedule. Published visit prices start from AED 750; your plan confirms the arrangements.
          </BodyCopy>
          <BodyCopy className="mb-5">
            Choose by the help you need, as well as the number of guests. A dinner for eight can be a one-off chef booking; a regular household plan covers ongoing cooking. See{' '}
            <Link to="/private-chef-dubai/pricing" className="text-gold-ink underline underline-offset-4">private chef prices</Link>
            {' for household visit options, or send an event brief for a party, buffet, bar or timed service.'}
          </BodyCopy>
          <BodyCopy className="mb-5">
            For example, bespoke plated dining for 12 guests at AED 700 per person totals AED 8,400 before VAT and any agreed extras. A Full-Day household chef visit is AED 1,500 plus groceries and has a different scope. Compare the staffing, presentation and service required for your occasion before choosing.
          </BodyCopy>
          <Link
            to="/private-chef-dubai"
            className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
          >
            Explore private chef services in Dubai <ArrowRight size={14} aria-hidden />
          </Link>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="connected">
        <Container>
          <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-4">Related catering services</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {CATERING_SIBLING_LINKS.map((item) => (
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
        </Container>
      </Section>

      {/* One ladder for the whole page. The three cards and the five steps said this same thing
          in different clothes, which read to a client — and to Google — as three overlapping offers. */}
      <Section id="options" tone="white" rhythm="chapter">
        <Container>
          <span id="layers" className="block scroll-mt-24" aria-hidden />
          <SectionLabel>THE RANGE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Catering Dubai with the support your occasion needs</DisplayHeading>
          <BodyCopy className="mb-4">
            Start with food. Add only what the night actually needs. You do not buy a complete event package to get
            the food right, and the quote is itemised so you can see what each layer costs before you keep it.
          </BodyCopy>
          <BodyCopy className="mb-12">What affects your quote: {quoteFactors}</BodyCopy>
          <EventLayers />
          <p className="mt-10 max-w-[65ch] font-inter text-body-sm text-gray-500 leading-relaxed">
            One honest note on the last layer: we are a food company. Flowers, entertainment, photography and the
            other suppliers are coordinated around the food, not promised as a planning service — if your event needs
            a planner, you need a planner, and we work happily alongside one.
          </p>
          <p className="mt-4 max-w-[65ch] font-inter text-body-sm text-gray-500 leading-relaxed">
            Food only is completely fine.{' '}
            <Link to={CATERING_PATHS.dropOff} className="text-gold-ink underline underline-offset-4">
              Drop-off catering
            </Link>{' '}
            is the first layer on its own: the food delivered ready to serve, and nothing you did not ask for.
          </p>
        </Container>
      </Section>

      <Section id="events" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>WHAT ARE YOU PLANNING?</SectionLabel>
          <DisplayHeading className="text-black mb-4">Tell us the event. We build the catering around it.</DisplayHeading>
          <BodyCopy className="mb-12">
            Explore catering for weddings, corporate events, birthdays and private parties, with menus and service options tailored to each occasion.
          </BodyCopy>
          <EventPathway items={eventPathways} />
        </Container>
      </Section>

      <Section id="christmas" tone="charcoal" rhythm="chapter">
        <Container>
          <SectionLabel tone="dark">CHRISTMAS DINNERS</SectionLabel>
          <DisplayHeading className="text-white mb-4">Seven Christmas dinners, cooked in your kitchen</DisplayHeading>
          <BodyCopy tone="dark-strong" className="mb-10">
            Christmas Eve, Christmas Day and Orthodox Christmas are catering nights with one difference: the menu is a
            family tradition, not a format. Pick the table you grew up with, or mix dishes across them. The chef shops,
            cooks, serves and clears down; the quote follows the guest count and the centrepiece. Full menus, FAQs and
            the booking path are on{' '}
            <Link to="/christmas-catering-dubai" className="text-gold underline underline-offset-4 hover:text-gold-light">
              Christmas catering in Dubai
            </Link>
            .
          </BodyCopy>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-7">
            {christmasMenus.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={`/christmas-catering-dubai#${menu.id}`}
                  data-track="christmas_menu_card"
                  className="group block h-full border border-white/10 bg-black/40 transition-colors hover:border-gold/60"
                >
                  <div className="p-4 border-t-2 border-gold/70">
                    <h3 className="font-playfair text-h4 text-white mb-1">{menu.cardTitle}</h3>
                    <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{menu.cardBlurb}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-inter text-body-sm text-gray-400 max-w-[70ch]">
            No prices are printed on the Christmas menus. Send the date, headcount, area and the menu you have in mind and
            the proposal lists food, chef, staff and 5% VAT separately.
          </p>
        </Container>
      </Section>

      <Section id="venues" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHERE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Catering wherever you are hosting</DisplayHeading>
          <BodyCopy className="mb-12">The venue changes how catering needs to work. We plan around it, then you open the specialist page.</BodyCopy>
          <EventPathway items={venuePathways} compact />

          <div className="mt-16 grid gap-10 border-t border-gray-200 pt-12 lg:grid-cols-2">
            <div>
              <h3 className="font-playfair text-h4 text-black mb-3">{officePathway.title}</h3>
              <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4 max-w-[48ch]">
                {officePathway.body}
              </p>
              <Link
                to={officePathway.href}
                className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
              >
                {officePathway.linkLabel} <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
            <div className="border border-gold/25 bg-cream p-6 lg:p-8">
              <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-3">A different operating model</p>
              <h3 className="font-playfair text-h4 text-black mb-3">{jetPathway.title}</h3>
              <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4 max-w-[48ch]">
                {jetPathway.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="styles" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THE FOOD IS SERVED</SectionLabel>
          <DisplayHeading className="text-black mb-4">You do not need to choose this before speaking with us</DisplayHeading>
          <BodyCopy className="mb-12">Explore the menu and service details for each catering format below.</BodyCopy>
          <div className="grid md:grid-cols-2 gap-x-12 border-t border-gray-200">
            {serviceStyles.map((style) => (
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
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>COMBINING STYLES</SectionLabel>
          <DisplayHeading className="text-black mb-6">One event can use more than one style</DisplayHeading>
          <BodyCopy className="mb-5">
            You do not have to choose between “buffet” and “plated”. An event could begin with canapés, move into a seated dinner, and finish with a dessert station.
          </BodyCopy>
          <BodyCopy className="mb-8">
            Or welcome drinks, then a live BBQ, then late-night food. We build the service around how the event should move.
          </BodyCopy>
          <SequenceRail
            steps={[
              'Canapés or welcome drinks as guests arrive',
              'A seated dinner, buffet or live cooking as the main service',
              'A dessert station or late-night food as the room changes',
            ]}
          />
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THIS IS RUN</SectionLabel>
          <DisplayHeading className="text-black mb-12">How our service standards apply to your booking</DisplayHeading>
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

      <Section id="examples" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THIS LOOKS IN PRACTICE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Illustrative event formats</DisplayHeading>
          <BodyCopy className="mb-12">
            These examples show how a menu and service could be arranged. Guest counts and settings are illustrative, rather than documented client results. Explore more on our{' '}
            <Link to="/case-studies" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              case studies
            </Link>{' '}
            page.
          </BodyCopy>
          <div className="grid md:grid-cols-3 gap-8">
            {exampleEvents.map((item) => (
              <article key={item.title} className="border border-gray-200 p-6">
                <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-3">{item.guests} · {item.venue}</p>
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

      <Section id="how-it-works" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT STARTS</SectionLabel>
          <DisplayHeading className="text-black mb-12">Five steps. You stay in the review.</DisplayHeading>
          <SequenceRail steps={[...startSteps]} />
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>FOOD COMES FIRST</SectionLabel>
          <DisplayHeading className="text-black mb-6">Before flowers, tables or entertainment, the food has to work</DisplayHeading>
          <BodyCopy className="mb-8">
            We look at guest count, type of event, cuisine, dietary requirements, service format, venue, kitchen facilities, timing, budget, and how formal or relaxed the event should feel. Then we build the menu and service around those decisions.
          </BodyCopy>
          <h3 className="font-playfair text-h3 text-black mb-4">One cuisine or several</h3>
          <BodyCopy className="mb-5">
            Your event does not need to fit one predefined cuisine. Depending on the format and chef team, we can build around styles such as {cuisinesLine.join(', ')}. Or combine different influences across the event.
          </BodyCopy>
          <Link
            to={CATERING_PATHS.cuisines}
            className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
          >
            Menus and cuisines in Dubai <ArrowRight size={14} aria-hidden />
          </Link>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE TEAM</SectionLabel>
          <DisplayHeading className="text-black mb-6">The team should match the event</DisplayHeading>
          <BodyCopy className="mb-5">
            A dinner for twelve does not need the same team as a wedding for two hundred. We calculate staffing around guest count, menu, service style, venue, number of courses, bar requirements and timing.
          </BodyCopy>
          <BodyCopy>
            That may include head chefs, chefs, kitchen assistants, waiters, bartenders, runners and event coordination. We add people because the event requires them, not because they belong in a package.
          </BodyCopy>
        </Container>
      </Section>


      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>OTHER SUPPLIERS</SectionLabel>
          <DisplayHeading className="text-black mb-6">Already working with other suppliers? Good.</DisplayHeading>
          <BodyCopy className="mb-5">
            We do not need to replace them. If you already have a venue, wedding planner, event organiser, decorator, AV company, photographer, florist or rental company, we can coordinate our part of the catering around them.
          </BodyCopy>
          <BodyCopy>We coordinate the catering with your chosen suppliers so the agreed food and service plan works smoothly.</BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>NOT SURE WHICH SERVICE?</SectionLabel>
          <DisplayHeading className="text-black mb-10">Start with the event</DisplayHeading>
          <ul className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {unsureLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-inter text-body text-gray-600">{item.prompt}</span>
                  <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink group-hover:text-gold">
                    {item.label} <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="faqs" tone="white" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU BOOK</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">What should I know before booking catering in Dubai?</DisplayHeading>
          <FaqAccordion items={[...cateringFaqs]} showJumpNav />
        </Container>
      </Section>

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US WHAT YOU ARE PLANNING</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, venue and guest count is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            You do not need to build the event before contacting us. During business hours, 9am to 9pm, a reply typically comes back within 15 minutes; a message sent overnight is answered first thing.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Request your catering quote
            </Link>
            <a
              href={CATERING_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </CTAGroup>
        </Container>
      </Section>

      <LocationStrip
        title="Catering across Dubai"
        subtitle={
          <>
            Available across Dubai including{' '}
            Palm Jumeirah,{' '}
            Dubai Marina
            {' '}and{' '}
            Downtown Dubai.
          </>
        }
      />
    </div>
  )
}
