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
  proofItems,
  quoteFactors,
  scopeSteps,
  serviceLevelChoices,
  serviceStyles,
  startSteps,
  unsureLinks,
  venuePathways,
} from '@/content/cateringPage'

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

      <PageHero
        eyebrow="Catering Dubai"
        title="Luxury Catering Dubai, Built Around Your Event"
        subtitle="From delivered buffet food to chefs, service staff, live cooking and full event support, myCHEF designs catering around the event you are actually hosting. Our catering services in Dubai cover weddings, villa events, yachts, private celebrations, offices and corporate events. Food-only catering starts from AED 90 per person; full service catering with staff, bar and live cooking is priced to the guest count and format."
        image={cateringHero.src}
        imageAlt={cateringHero.alt}
        imageWidth={cateringHero.width}
        imageHeight={cateringHero.height}
        imagePosition="100% 50%"
        align="left"
        cta={{ label: 'Get a tailored catering quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: CATERING_WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Catering Dubai' }]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/70 max-w-[58ch]">
          Share your date, venue and guest count. Typical reply within 15 minutes during business hours.
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
          <SectionLabel>HOW THIS IS RUN</SectionLabel>
          <DisplayHeading className="text-black mb-8">Standards you can open, not slogans</DisplayHeading>
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
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container>
          <SectionLabel>CHOOSE A LEVEL</SectionLabel>
          <DisplayHeading className="text-black mb-4">Food delivery, catering plus service, or the full event.</DisplayHeading>
          <BodyCopy className="mb-8">What affects your quote: {quoteFactors}</BodyCopy>
          <div className="grid md:grid-cols-3 gap-4">
            {serviceLevelChoices.map((choice) => (
              <Link
                key={choice.label}
                to={choice.href}
                className="border border-gray-200 bg-white p-6 hover:border-gold/50 transition-colors"
              >
                <h3 className="font-playfair text-h4 text-black mb-2">{choice.label}</h3>
                <p className="font-inter text-body-sm text-gray-500">{choice.hint}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="pricing" tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">PRICING</SectionLabel>
          <DisplayHeading className="text-white mb-6">Catering pricing in Dubai</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            Food-only buffet and drop-off catering starts from AED 90 per person. Chef-led on-site catering starts from AED 700 per person.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[65ch]">
            Your written proposal is based on guest count, menu, staffing, service format, venue access, timing and equipment. Minimums and 5% VAT are shown clearly before you book. Not every event meets the starting points.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[65ch]">
            Party food catering Dubai is planned around the room and the running order, with chefs, service staff and clear-down included. Private catering Dubai, bespoke catering Dubai and outdoor catering Dubai are the same service under another name.
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
          <DisplayHeading className="text-black mb-6">Not sure which service fits?</DisplayHeading>
          <BodyCopy className="mb-4">
            <strong className="text-black">Private chef:</strong> best for intimate, chef-led dining in your home, villa or yacht.
          </BodyCopy>
          <BodyCopy className="mb-5">
            <strong className="text-black">Catering:</strong> best for events of 10+ guests, flexible menus, buffet or plated formats, staffing and larger-scale service.
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
          <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-4">Also in this silo</p>
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

      <Section id="options" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE RANGE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Catering Dubai, from food only to full event support</DisplayHeading>
          <BodyCopy className="mb-12">
            Start with food. Stop wherever you want. You do not buy a complete event package to get the food right.
          </BodyCopy>
          <ol className="max-w-3xl">
            {scopeSteps.map((step, i) => (
              <li
                key={step.id}
                id={step.id === 'full-service' ? 'full-service' : undefined}
                className="border-t border-gray-200 py-8 last:border-b scroll-mt-24"
              >
                <p className="font-playfair text-gold-ink text-h4 mb-2">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-playfair text-h3 text-black mb-3">{step.title}</h3>
                <p className="font-inter text-body text-gray-600 leading-relaxed max-w-[58ch]">{step.body}</p>
                <p className="mt-3 font-inter text-body-sm text-gray-500 max-w-[58ch]">{step.bestFor}</p>
                {'href' in step && step.href && 'linkLabel' in step && step.linkLabel && (
                  <Link
                    to={step.href}
                    className="mt-4 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                  >
                    {step.linkLabel} <ArrowRight size={14} aria-hidden />
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="events" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>WHAT ARE YOU PLANNING?</SectionLabel>
          <DisplayHeading className="text-black mb-4">Tell us the event. We build the catering around it.</DisplayHeading>
          <BodyCopy className="mb-12">
            Wedding, corporate, birthday and private-party searches belong on those pages. This hub sends you there with the right brief.
          </BodyCopy>
          <EventPathway items={eventPathways} />
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
              <Link
                to={jetPathway.href}
                className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
              >
                {jetPathway.linkLabel} <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="menus" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THE FOOD IS SERVED</SectionLabel>
          <DisplayHeading className="text-black mb-4">You do not need to choose this before speaking with us</DisplayHeading>
          <BodyCopy className="mb-12">These are formats we can build around your event. Each line opens the page that owns that format.</BodyCopy>
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
          <DisplayHeading className="text-black mb-12">What each standard actually means</DisplayHeading>
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
          <DisplayHeading className="text-black mb-4">Event formats we have run</DisplayHeading>
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

      <Section id="layers" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHAT CAN WE ADD?</SectionLabel>
          <DisplayHeading className="text-black mb-4">Think of the event in layers</DisplayHeading>
          <BodyCopy className="mb-12">You can stop at any layer.</BodyCopy>
          <EventLayers />
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>FOOD ONLY</SectionLabel>
          <DisplayHeading className="text-black mb-6">Food only is completely fine</DisplayHeading>
          <BodyCopy className="mb-5">
            Not every event needs full service. If your team, venue or household already has everything else covered, we can simply provide the food — buffet food, sharing dishes, corporate meals, canapés, breakfast, lunch, dinner, party food, desserts — delivered to the agreed location and time.
          </BodyCopy>
          <Link
            to={CATERING_PATHS.dropOff}
            className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
          >
            Food delivery and drop-off catering <ArrowRight size={14} aria-hidden />
          </Link>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>OTHER SUPPLIERS</SectionLabel>
          <DisplayHeading className="text-black mb-6">Already working with other suppliers? Good.</DisplayHeading>
          <BodyCopy className="mb-5">
            We do not need to replace them. If you already have a venue, wedding planner, event organiser, decorator, AV company, photographer, florist or rental company, we can coordinate our part of the catering around them.
          </BodyCopy>
          <BodyCopy>The objective is not for myCHEF to own every supplier. The objective is for the event to work.</BodyCopy>
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
            You do not need to build the event before contacting us. We typically reply within 15 minutes during business hours.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get a tailored catering quote
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
            <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Palm Jumeirah</Link>,{' '}
            <Link to="/locations/dubai-marina" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Dubai Marina</Link>
            {' '}and{' '}
            <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Downtown Dubai</Link>.
          </>
        }
      />
    </div>
  )
}
