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
import { plainFaqAnswer } from '../utils/schema'
import {
  CATERING_INQUIRY_HREF,
  CATERING_KEYWORD_LOCK,
  CATERING_PATHS,
  CATERING_ROOT,
  CATERING_WHATSAPP_LINK,
  CATERING_WHATSAPP_MESSAGE,
} from '@/content/cateringCluster'
import {
  cateringFaqs,
  cateringHero,
  cuisinesLine,
  eventPathways,
  jetPathway,
  officePathway,
  scopeSteps,
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
      name: 'Catering Dubai',
      serviceType: 'Catering Service',
      provider: {
        '@type': 'Organization',
        '@id': 'https://www.mychef.ae/#organization',
        name: 'myCHEF',
        url: 'https://www.mychef.ae',
        telephone: '+971-55-174-4849',
        areaServed: 'Dubai, UAE',
        description:
          'myCHEF Dubai designs and manages private dining and event catering and connects clients with independent, licensed chefs and catering professionals. Culinary preparation is performed by those licensed third parties, whom the client engages.',
      },
      areaServed: 'Dubai, UAE',
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae' },
        { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: cateringFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
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
        variant="quiet"
        eyebrow="Catering Dubai"
        title="Catering in Dubai, built around your event."
        subtitle="Food can be the whole brief. Or it can be the beginning. myCHEF helps private clients and companies build catering around the event they are actually planning."
        image={cateringHero.src}
        imageAlt={cateringHero.alt}
        imageWidth={cateringHero.width}
        imageHeight={cateringHero.height}
        imagePosition="100% 50%"
        align="left"
        cta={{ label: 'Plan My Event', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'WhatsApp Us', href: CATERING_WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Catering Dubai' }]}
        minHeight="full"
        overlay="dark"
      />
      <TrustSignalStrip />

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE BRIEF</SectionLabel>
          <DisplayHeading className="text-black mb-6">You do not need to know exactly what to book</DisplayHeading>
          <BodyCopy className="mb-5">
            Some clients come to us knowing exactly what they want. A buffet for 40. A plated wedding dinner. Lunch delivered to an office. Food for a yacht.
          </BodyCopy>
          <BodyCopy className="mb-5">
            Others simply know the date, the number of guests and the kind of evening they want.
          </BodyCopy>
          <BodyCopy>Both are fine. We start with the event and build the catering around it.</BodyCopy>
        </Container>
      </Section>

      <Section id="scope" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE RANGE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Start with food. Stop wherever you want.</DisplayHeading>
          <BodyCopy className="mb-12">
            Catering through myCHEF can be as simple or as complete as you need.
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
          <DisplayHeading className="text-black mb-12">Tell us the event. We build the catering around it.</DisplayHeading>
          <EventPathway items={eventPathways} />
        </Container>
      </Section>

      <Section id="where" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHERE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Catering wherever you are hosting</DisplayHeading>
          <BodyCopy className="mb-12">The venue changes how catering needs to work. We plan around it.</BodyCopy>
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

      <Section id="styles" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THE FOOD IS SERVED</SectionLabel>
          <DisplayHeading className="text-black mb-4">You do not need to choose this before speaking with us</DisplayHeading>
          <BodyCopy className="mb-12">These are some of the formats we can build around your event.</BodyCopy>
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
            Explore Menus &amp; Cuisines <ArrowRight size={14} aria-hidden />
          </Link>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
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

      <Section tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">WHAT MYCHEF ACTUALLY DOES</SectionLabel>
          <DisplayHeading className="text-white mb-6">Our role is not simply to send food and disappear</DisplayHeading>
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-h4 text-gold mb-2">Before</h3>
              <p className="font-inter text-body text-gray-300 leading-relaxed">
                We understand the event. We clarify what you need. We help build the food and service plan. We coordinate the required team. For larger or more complex events, we can inspect the venue and work through logistics before the day.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-h4 text-gold mb-2">During</h3>
              <p className="font-inter text-body text-gray-300 leading-relaxed">
                The food, kitchen, service and agreed event elements are coordinated around the schedule.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-h4 text-gold mb-2">After</h3>
              <p className="font-inter text-body text-gray-300 leading-relaxed">
                The catering operation is cleared down according to the agreed scope.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>YOU STAY IN CONTROL</SectionLabel>
          <DisplayHeading className="text-black mb-6">If you only want food, you should not have to buy a complete event package</DisplayHeading>
          <BodyCopy className="mb-5">
            If you already have tables, we do not need to sell you tables. If your venue provides staff, we work around that. If you want us to coordinate nearly everything, we can build a larger team.
          </BodyCopy>
          <BodyCopy>You pay for the solution your event needs.</BodyCopy>
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
            Explore Food &amp; Drop-Off Catering <ArrowRight size={14} aria-hidden />
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

      <Section tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">WHEN THIS FITS</SectionLabel>
          <DisplayHeading className="text-white mb-6">myCHEF is for clients who want flexibility without coordinating every small catering decision themselves</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            You may know exactly what you want. Or you may simply say: “We have 60 people at our villa on Saturday. We need food, drinks and staff. Help us work out the rest.”
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed max-w-[65ch]">That is enough to begin.</p>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT STARTS</SectionLabel>
          <DisplayHeading className="text-black mb-12">Five steps. You stay in the review.</DisplayHeading>
          <SequenceRail steps={startSteps} />
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
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

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US WHAT YOU ARE PLANNING</SectionLabel>
          <DisplayHeading className="text-white mb-6">You do not need to build the event before contacting us</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Start with the basics: when, where, how many people, and what you are celebrating or organising. We can work through the rest with you.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Plan My Event
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
          <p className="mt-10 font-inter text-body-sm text-white/45">
            Prefer a priced starting point? See{' '}
            <Link to={CATERING_PATHS.packages} className="text-gold hover:text-gold-light underline underline-offset-4">
              catering packages
            </Link>{' '}
            or the{' '}
            <Link to={CATERING_PATHS.priceGuide} className="text-gold hover:text-gold-light underline underline-offset-4">
              catering prices guide
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU BOOK</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">What should I know before booking catering in Dubai?</DisplayHeading>
          <FaqAccordion items={[...cateringFaqs]} showJumpNav />
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
