import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
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
import { CATERING_PATHS } from '@/content/cateringCluster'
import {
  WEDDING_DIETARY,
  WEDDING_FINAL_NUMBERS,
  WEDDING_IDENTITY,
  WEDDING_INQUIRY,
  WEDDING_PATHS,
  WEDDING_TASTING,
  WEDDING_TIMELINE,
  WEDDING_WHATSAPP_LINK,
  WEDDING_WHATSAPP_MESSAGE,
  hubEstimateSummary,
  inclusionBuckets,
} from '@/content/weddingCluster'
import {
  WEDDING_KEYWORD_LOCK,
  weddingClusterLinks,
  weddingCuisines,
  weddingFaqs,
  weddingFormats,
  weddingHero,
  weddingProcess,
  weddingSettings,
} from '@/content/weddingCateringPage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Wedding Catering Dubai',
      serviceType: 'Wedding Catering',
      provider: {
        '@type': 'Organization',
        name: 'myCHEF Dubai',
        url: 'https://www.mychef.ae',
        telephone: '+971-55-174-4849',
        areaServed: 'Dubai, UAE',
        description:
          'myCHEF Dubai designs and coordinates wedding catering and matches the couple with vetted chefs, service professionals and licensed culinary partners. Culinary preparation is performed by those licensed third parties, whom the client engages.',
      },
      areaServed: 'Dubai, UAE',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Wedding Catering Dubai', item: `https://www.mychef.ae${WEDDING_PATHS.hub}` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: weddingFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(faq.a) },
      })),
    },
  ],
}

export default function WeddingCatering() {
  useWhatsAppMessage(WEDDING_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={WEDDING_KEYWORD_LOCK.title}
        description={WEDDING_KEYWORD_LOCK.description}
        canonicalPath={WEDDING_PATHS.hub}
        ogImage={weddingHero.src}
        hideSiteName
        preloadHero={weddingHero.src}
        schema={schema}
      />

      <PageHero
        variant="quiet"
        eyebrow="Wedding Catering Dubai"
        title="Wedding catering in Dubai for villas, gardens and venues"
        subtitle="From an intimate dinner in a Palm garden to a full reception in a licensed venue — we design the food, match you with the right chefs and service team, and stay your single point of contact so you can be guests at your own wedding."
        image={weddingHero.src}
        imageAlt={weddingHero.alt}
        imageWidth={weddingHero.width}
        imageHeight={weddingHero.height}
        imagePosition="70% 45%"
        align="left"
        cta={{ label: 'Request a quote', href: WEDDING_INQUIRY }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WEDDING_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Catering Dubai', href: CATERING_PATHS.overview },
          { label: 'Wedding Catering Dubai' },
        ]}
        minHeight="full"
        overlay="dark"
      />
      <TrustSignalStrip />

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT THIS IS</SectionLabel>
          <DisplayHeading className="text-black mb-6">What does wedding catering through myCHEF actually mean?</DisplayHeading>
          <BodyCopy className="mb-5">
            For one couple it is an intimate dinner for twenty around one table. For another it is a hundred guests arriving for canapés, then a buffet, live stations and dessert. A third needs a plated menu, waiters on every table, a bar team and someone holding the timing between the food and the rest of the celebration.
          </BodyCopy>
          <BodyCopy className="mb-5">
            That is why we do not begin by asking you to choose Package A, B or C. We begin with the wedding.
          </BodyCopy>
          <BodyCopy className="mb-5">{WEDDING_IDENTITY}</BodyCopy>
          <BodyCopy>
            We are not a wedding planner. If you are comparing wedding caterers in Dubai, that distinction matters more than a brochure list of inclusions.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT MYCHEF HANDLES</SectionLabel>
          <DisplayHeading className="text-black mb-6">The catering. Not the whole wedding.</DisplayHeading>
          <BodyCopy className="mb-5">
            Menu design, the culinary team, ingredient sourcing, food preparation, service staff, setup and clear-down of the catering operation, and dietary planning sit with us when they are in the brief.
          </BodyCopy>
          <BodyCopy className="mb-5">
            Bar team, tableware, glassware, serving equipment and food presentation can be added. Cake can be coordinated; a specialist wedding cake often comes from a dedicated cake partner.
          </BodyCopy>
          <BodyCopy>
            Venue sourcing, ceremony production, florals, entertainment, photography and invitations do not. We would rather be clear about that than pretend to be every supplier in the room.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW GUESTS EAT</SectionLabel>
          <DisplayHeading className="text-black mb-4">How do you want your guests to eat?</DisplayHeading>
          <BodyCopy className="mb-12">
            There is no universally correct format. A plated dinner, a buffet, live stations, canapés and sharing tables create different evenings. One wedding can use more than one.
          </BodyCopy>
          <div className="grid md:grid-cols-2 gap-x-12 border-t border-gray-200">
            {weddingFormats.map((fmt) => (
              <Link
                key={fmt.title}
                to={fmt.href}
                className="group flex items-start gap-5 border-b border-gray-200 py-6"
              >
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-4">
                    <h3 className="font-playfair text-h4 text-black transition-colors group-hover:text-gold-ink">{fmt.title}</h3>
                    <ArrowRight size={16} className="flex-shrink-0 text-gold-ink opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                  </span>
                  <p className="mt-1 font-inter text-body-sm text-gray-500 leading-relaxed">{fmt.body}</p>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>INCLUDED AND OPTIONAL</SectionLabel>
          <DisplayHeading className="text-black mb-6">You do not have to buy a complete event package</DisplayHeading>
          <BodyCopy className="mb-5">
            Some couples already have a planner, a venue team and suppliers. They need the food. Others need more of the hospitality around it.
          </BodyCopy>
          <dl className="grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">Always coordinated</dt>
              <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{inclusionBuckets.always.join(' · ')}</dd>
            </div>
            <div>
              <dt className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">When the plan says so</dt>
              <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{inclusionBuckets.whenAgreed.join(' · ')}</dd>
            </div>
            <div>
              <dt className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">Optional additions</dt>
              <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">{inclusionBuckets.optional.join(' · ')}</dd>
            </div>
            <div>
              <dt className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-2">Venue or licensed partners</dt>
              <dd className="font-inter text-body-sm text-gray-600 leading-relaxed">
                {inclusionBuckets.venue.join(' · ')}. {inclusionBuckets.partners.join(' · ')}.
              </dd>
            </div>
          </dl>
          <BodyCopy className="mt-8">
            If a line is optional, it is labelled optional. Same idea as{' '}
            <Link to={CATERING_PATHS.overview} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              catering in Dubai
            </Link>
            : start with what you need.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>COST</SectionLabel>
          <DisplayHeading className="text-black mb-6">What determines wedding catering cost in Dubai?</DisplayHeading>
          <BodyCopy className="mb-5">
            Wedding catering in Dubai is custom-quoted. Treat any number you see online, including ours, as a planning estimate until you have a written proposal for your date, venue and guest count.
          </BodyCopy>
          <BodyCopy className="mb-5">{hubEstimateSummary}</BodyCopy>
          <BodyCopy className="mb-5">
            Every proposal shows 5% VAT as its own line. For the full picture — what moves the number, what often sits outside it, and how to read two quotes side by side — see how a quote is built.
          </BodyCopy>
          <Link
            to={WEDDING_PATHS.cost}
            className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
          >
            Wedding catering cost guide <ArrowRight size={14} aria-hidden />
          </Link>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHERE THE WEDDING HAPPENS</SectionLabel>
          <DisplayHeading className="text-black mb-12">Villa, garden, outdoor — the venue changes the catering</DisplayHeading>
          <EventPathway items={weddingSettings} compact />
          <p className="mt-12 max-w-[58ch] font-inter text-body text-gray-600 leading-relaxed">
            For a larger reception we can design the food across several moments: welcome drinks, canapés, dinner, dessert, late-night food, bar. Different parts can use different formats. Palm Jumeirah, Emirates Hills and Dubai Hills each have their own gate and kitchen realities —{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Palm
            </Link>
            {', '}
            <Link to="/locations/emirates-hills" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Emirates Hills
            </Link>
            {', '}
            <Link to="/locations/dubai-hills" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Dubai Hills
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>THE MENU</SectionLabel>
          <DisplayHeading className="text-black mb-4">Build the menu around the wedding</DisplayHeading>
          <BodyCopy className="mb-10">
            Some couples know exactly what they want. Others only know the feeling — elegant, relaxed, traditional, modern. Both are enough to start. We look at guest count, format, season, venue, timing, dietary needs and how the food sits in the rest of the day.{' '}
            <Link to={WEDDING_PATHS.menu} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Wedding menu planning guide
            </Link>
            {' · '}
            <Link to="/dessert-table-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Dessert table catering
            </Link>
            {' · '}
            <Link to={CATERING_PATHS.menus} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Menus
            </Link>
            .
          </BodyCopy>
          <div className="grid gap-10 lg:grid-cols-3">
            {weddingCuisines.map((c) => (
              <article key={c.title}>
                <h3 className="font-playfair text-h4 text-black mb-3">{c.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4">{c.body}</p>
                <Link
                  to={c.href}
                  className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                >
                  {c.title.replace(' wedding catering', '')} <ArrowRight size={14} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-[62ch] font-inter text-body text-gray-600 leading-relaxed">
            Mediterranean, Italian, Asian, international and fusion menus sit under the same rule: one coherent meal, not a random collection of dishes.{' '}
            <Link to={CATERING_PATHS.cuisines} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Explore cuisines
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>DIETARY REQUIREMENTS</SectionLabel>
          <DisplayHeading className="text-black mb-6">Halal, allergies and the rest of the guest list</DisplayHeading>
          <BodyCopy className="mb-5">
            Requirements belong in the menu from the beginning, not as a surprise on the day. Halal sourcing is the default for myCHEF catering menus in Dubai — tell us the standard you expect.{' '}
            <Link to="/halal-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Halal catering
            </Link>
            .
          </BodyCopy>
          <BodyCopy>
            {WEDDING_DIETARY} We do not promise an “allergy-safe” environment we cannot guarantee.{' '}
            <Link to="/vegan-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Vegan
            </Link>
            {' · '}
            <Link to="/vegetarian-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Vegetarian
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>STAFF AND BAR</SectionLabel>
          <DisplayHeading className="text-black mb-6">The team should match the wedding</DisplayHeading>
          <BodyCopy className="mb-5">
            Food can be excellent and still fail if service does not work. Waiters, runners and bartenders are scaled to guest count and format — not because they sit in a package.
          </BodyCopy>
          <BodyCopy>
            If you need wedding bar service in Dubai, it is planned with the catering so service points, glassware, ice and guest flow make sense together. Venue licensing decides what can be poured.{' '}
            <Link to="/bar-services-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Bar services
            </Link>
            . To see how chefs are selected, read{' '}
            <Link to="/how-we-vet-our-chefs" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              how we vet chefs
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <DisplayHeading className="text-black mb-12">A sequence of decisions, not dozens of disconnected questions</DisplayHeading>
          <SequenceRail steps={weddingProcess} />
          <p className="mt-12 max-w-[58ch] font-inter text-body text-gray-600 leading-relaxed mb-5">
            {WEDDING_TIMELINE}
          </p>
          <p className="max-w-[58ch] font-inter text-body text-gray-600 leading-relaxed">
            Tasting: {WEDDING_TASTING} {WEDDING_FINAL_NUMBERS}{' '}
            <Link to={WEDDING_PATHS.checklist} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Wedding catering checklist
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">SMALL WEDDINGS</SectionLabel>
          <DisplayHeading className="text-white mb-6">A small wedding should not be a simplified large one</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            With fewer guests the food can be more personal: a private chef, a longer tasting menu, detailed plating, a sharing dinner. If the table is intimate, you may want{' '}
            <Link to="/private-chef-dubai" className="text-gold underline underline-offset-4 hover:text-gold-light">
              private chef Dubai
            </Link>
            {' '}or{' '}
            <Link to="/luxury-dining-experiences" className="text-gold underline underline-offset-4 hover:text-gold-light">
              private dining
            </Link>
            .
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed max-w-[65ch]">
            Previous celebrations:{' '}
            <Link to="/gallery" className="text-gold underline underline-offset-4 hover:text-gold-light">
              gallery
            </Link>
            {' · '}
            <Link to="/case-studies" className="text-gold underline underline-offset-4 hover:text-gold-light">
              case studies
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>THE WEDDING CLUSTER</SectionLabel>
          <DisplayHeading className="text-black mb-10">Cost, checklist and menu live on their own pages</DisplayHeading>
          <ul className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {weddingClusterLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-playfair text-h4 text-black group-hover:text-gold-ink">{item.label}</span>
                  <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                    {item.note} <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">QUESTIONS</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">Wedding catering questions</DisplayHeading>
          <FaqAccordion items={[...weddingFaqs]} />
        </Container>
      </Section>

      <LocationStrip
        title="Wedding catering across Dubai"
        subtitle={
          <>
            Palm Jumeirah, Dubai Marina, Downtown, Jumeirah, Emirates Hills, Dubai Hills and other Dubai locations. Send the venue — the property matters more than the neighbourhood name.
          </>
        }
      />

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">START WITH THE WEDDING</SectionLabel>
          <DisplayHeading className="text-white mb-6">You do not need to know exactly what to order</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Date, venue or area, guest count, format, cuisine, dietary requirements, budget band, and whether you already have a planner. That is enough to begin. We typically reply within 15 minutes during business hours.
          </p>
          <CTAGroup>
            <Link to={WEDDING_INQUIRY} className="btn-primary">
              Request a quote
            </Link>
            <a href={WEDDING_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </CTAGroup>
        </Container>
      </Section>
    </div>
  )
}
