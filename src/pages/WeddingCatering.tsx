// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /wedding-catering-dubai
//     primary:     "wedding catering dubai"
//     subkeywords: "wedding caterers dubai" · "wedding catering price per person dubai" · "wedding buffet catering dubai" · "wedding catering packages dubai" · "small wedding catering dubai" · "nikah catering dubai" · "wedding food packages dubai" · "when to book caterer for wedding" · "when to book catering for wedding" · "catering checklist for wedding" · "event catering for wedding" · "wedding catering blog dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
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
import {
  WEDDING_ALCOHOL,
  WEDDING_DIETARY,
  WEDDING_FINAL_NUMBERS,
  WEDDING_IDENTITY,
  WEDDING_INQUIRY,
  WEDDING_PATHS,
  WEDDING_SEASON,
  WEDDING_SETUP,
  WEDDING_TASTING,
  WEDDING_TIMELINE,
  WEDDING_WHATSAPP_LINK,
  WEDDING_WHATSAPP_MESSAGE,
  estimateBands,
} from '@/content/weddingCluster'
import {
  WEDDING_KEYWORD_LOCK,
  WEDDING_PATH,
  WEDDING_SIBLING_LINKS,
  WEDDING_SUPPORTING_GUIDES,
  decisionModule,
  exampleEvents,
  includedItems,
  jumpNav,
  proofItems,
  pricingIntro,
  pricingNotes,
  siloIntro,
  weddingCuisines,
  weddingFaqs,
  weddingFormats,
  weddingHero,
  weddingHeroCopy,
  weddingProcess,
  weddingSettings,
} from '@/content/weddingCateringPage'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/wedding-catering-dubai#service',
      name: 'Wedding Catering Dubai',
      serviceType: 'Wedding Catering',
      description:
        'Wedding Catering Dubai for villa, garden and licensed-venue receptions. myCHEF designs the catering plan and matches you with vetted chefs, service professionals and licensed culinary partners. A chef-led plated villa dinner typically sits around AED 700–950 per guest.',
      url: 'https://www.mychef.ae/wedding-catering-dubai',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://www.mychef.ae/catering-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Wedding catering', item: `https://www.mychef.ae${WEDDING_PATH}` },
      ],
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
        canonicalPath={WEDDING_PATH}
        ogImage={weddingHero.src}
        hideSiteName
        preloadHero={weddingHero.src}
        schema={schema}
      />

      <PageHero
        eyebrow={weddingHeroCopy.eyebrow}
        title={weddingHeroCopy.title}
        subtitle={weddingHeroCopy.subtitle}
        image={weddingHero.src}
        imageAlt={weddingHero.alt}
        imageWidth={weddingHero.width}
        imageHeight={weddingHero.height}
        imagePosition="70% 45%"
        align="left"
        cta={{ label: 'Get an itemised wedding-catering quote', href: WEDDING_INQUIRY }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WEDDING_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Catering', href: '/catering-dubai' },
          { label: 'Wedding catering' },
        ]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/90 max-w-[58ch]">
          {weddingHeroCopy.priceLine}
        </p>
        <p className="mt-3 font-inter text-body-sm text-white/70 max-w-[58ch]">
          {weddingHeroCopy.replyLine}
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
            {WEDDING_SIBLING_LINKS.map((item) => (
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
            {siloIntro.lead} Broader food-only through full-service catering sits on{' '}
            <Link to={siloIntro.cateringHref} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              {siloIntro.cateringLabel}
            </Link>
            . Other named nights sit on{' '}
            <Link to={siloIntro.eventsHref} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              {siloIntro.eventsLabel}
            </Link>
            . A standing household chef belongs on{' '}
            <Link to={siloIntro.chefHref} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              {siloIntro.chefLabel}
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT THIS IS</SectionLabel>
          <DisplayHeading className="text-black mb-6">What does the wedding meal through myCHEF actually mean?</DisplayHeading>
          <BodyCopy className="mb-5">
            For one couple it is an intimate dinner for twenty around one table. For another it is a hundred guests arriving for canapés, then a buffet, live stations and dessert. A third needs a plated menu, waiters on every table, a bar team and someone holding the timing between the food and the rest of the celebration.
          </BodyCopy>
          <BodyCopy className="mb-5">
            That is why we do not begin by asking you to choose Package A, B or C. We begin with the wedding. This page is the wedding brief; the wider operation sits on{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Luxury catering in Dubai
            </Link>
            .
          </BodyCopy>
          <BodyCopy className="mb-5">{WEDDING_IDENTITY}</BodyCopy>
          <BodyCopy>
            We are not a wedding planner. If you are comparing wedding caterers in Dubai, that distinction matters more than a brochure list of inclusions.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT MYCHEF HANDLES</SectionLabel>
          <DisplayHeading className="text-black mb-6">The catering. Not the whole wedding.</DisplayHeading>
          <BodyCopy className="mb-5">
            Menu design, the culinary team, ingredient sourcing, food preparation, service staff, setup and clear-down of the catering operation, and dietary planning sit with us when they are in the brief.
          </BodyCopy>
          <BodyCopy className="mb-5">
            Bar team, tableware, glassware, serving equipment and food presentation can be added. Cake can be coordinated; a specialist wedding cake often comes from a dedicated cake partner — pastry chef Matteo Moretti when the brief needs that work.
          </BodyCopy>
          <BodyCopy>
            Venue sourcing, ceremony production, florals, entertainment, photography and invitations do not. We would rather be clear about that than pretend to be every supplier in the room.
          </BodyCopy>
        </Container>
      </Section>

      <Section id="formats" tone="white" rhythm="chapter">
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
                  <span className="mt-3 inline-block font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">{fmt.linkLabel}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>INCLUDED AND OPTIONAL</SectionLabel>
          <DisplayHeading className="text-black mb-6">You do not have to buy a complete event package</DisplayHeading>
          <BodyCopy className="mb-12">
            Some couples already have a planner, a venue team and suppliers. They need the food. Others need more of the hospitality around it. If a line is optional, it is labelled optional.
          </BodyCopy>
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

      <Section id="pricing" tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">PRICING</SectionLabel>
          <DisplayHeading className="text-white mb-6">Wedding catering Dubai, quoted from the wedding</DisplayHeading>
          {pricingIntro.map((p) => (
            <p key={p.slice(0, 32)} className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
              {p}
            </p>
          ))}
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            A wedding catering price per person Dubai figure only means something once the format is named. Hotels sell wedding catering packages Dubai as a room-and-food bundle. We send an itemised plan instead: food, staff, rentals, extras, VAT.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            Wedding food packages Dubai start from a set format and get adjusted to your date rather than sold as a fixed box.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            Wedding caterers Dubai are planned around the room and the running order, with chefs, service staff and clear-down included.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            Event catering for wedding, wedding catering blog Dubai and catering checklist for wedding are planned around the room and the running order, with chefs, service staff and clear-down included.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[65ch]">
            Wedding buffet catering Dubai for a larger reception usually sits below plated service per guest, because the team is sized differently.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left font-inter text-body-sm text-gray-300">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 font-medium text-white">Format</th>
                  <th className="py-3 font-medium text-white">Planning estimate</th>
                </tr>
              </thead>
              <tbody>
                {estimateBands.map((row) => (
                  <tr key={row.product} className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white align-top">{row.product}</td>
                    <td className="py-3 align-top">{row.estimate}</td>
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
              to={WEDDING_PATHS.cost}
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Wedding catering cost <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to="/buffet-vs-plated-dubai"
              data-track="price_table"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Buffet vs plated <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={WEDDING_INQUIRY}
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
          <SectionLabel>SMALL WEDDINGS</SectionLabel>
          <DisplayHeading className="text-black mb-6">{decisionModule.h2}</DisplayHeading>
          <BodyCopy className="mb-4">
            Small wedding catering Dubai is not a banquet scaled down. <strong className="text-black">{decisionModule.intimateLead}</strong> {decisionModule.intimateBody}
          </BodyCopy>
          <BodyCopy className="mb-4">
            A nikah catering Dubai brief is the same operation at a smaller table: menu, service and timing still have to hold.
          </BodyCopy>
          <BodyCopy className="mb-4">
            <strong className="text-black">{decisionModule.cateringLead}</strong> {decisionModule.cateringBody}
          </BodyCopy>
          <BodyCopy className="mb-5">
            <strong className="text-black">{decisionModule.eventsLead}</strong> {decisionModule.eventsBody} {decisionModule.dining}
          </BodyCopy>
          <div className="flex flex-wrap gap-6">
            <Link
              to={decisionModule.chefHref}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              {decisionModule.chefLabel} <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={decisionModule.cateringHref}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              {decisionModule.cateringLabel} <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={decisionModule.eventsHref}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              {decisionModule.eventsLabel} <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={decisionModule.diningHref}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
            >
              {decisionModule.diningLabel} <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="venues" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>WHERE THE WEDDING HAPPENS</SectionLabel>
          <DisplayHeading className="text-black mb-12">Villa, garden, outdoor — the venue changes the catering</DisplayHeading>
          <EventPathway items={weddingSettings} compact />
          <p className="mt-12 max-w-[58ch] font-inter text-body text-gray-600 leading-relaxed mb-5">
            {WEDDING_SEASON} For a larger reception we can design the food across several moments: welcome drinks, canapés, dinner, dessert, late-night food, bar. Different parts can use different formats.
          </p>
          <p className="max-w-[58ch] font-inter text-body text-gray-600 leading-relaxed">
            Palm Jumeirah, Emirates Hills and Dubai Hills each have their own gate and kitchen realities —{' '}
            
              Palm Jumeirah
            
            {', '}
            
              Emirates Hills
            
            {', '}
            
              Dubai Hills
            
            .
          </p>
        </Container>
      </Section>

      <Section id="menus" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE MENU</SectionLabel>
          <DisplayHeading className="text-black mb-4">Build the menu around the wedding</DisplayHeading>
          <BodyCopy className="mb-10">
            Some couples know exactly what they want. Others only know the feeling — elegant, relaxed, traditional, modern. Both are enough to start. We look at guest count, format, season, venue, timing, dietary needs and how the food sits in the rest of the day.{' '}
            <Link to={WEDDING_PATHS.menu} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Wedding menu planning
            </Link>
            {' · '}
            <Link to="/dessert-table-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Dessert table catering
            </Link>
            {' · '}
            <Link to="/menus" className="text-gold-ink underline underline-offset-4 hover:text-gold">
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
                  {c.linkLabel} <ArrowRight size={14} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-[62ch] font-inter text-body text-gray-600 leading-relaxed">
            Mediterranean, Italian, Asian, international and fusion menus sit under the same rule: one coherent meal, not a random collection of dishes.{' '}
            <Link to="/cuisines-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Menus and cuisines
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
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
              Vegan catering
            </Link>
            {' · '}
            <Link to="/vegetarian-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Vegetarian catering
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>STAFF AND BAR</SectionLabel>
          <DisplayHeading className="text-black mb-6">The team should match the wedding</DisplayHeading>
          <BodyCopy className="mb-5">
            Food can be excellent and still fail if service does not work. Waiters, runners and bartenders are scaled to guest count and format — not because they sit in a package.
          </BodyCopy>
          <BodyCopy>
            {WEDDING_ALCOHOL}{' '}
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

      <Section id="how-it-works" tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <DisplayHeading className="text-black mb-12">A sequence of decisions, not dozens of disconnected questions</DisplayHeading>
          <SequenceRail steps={weddingProcess} />
          <p className="mt-12 max-w-[58ch] font-inter text-body text-gray-600 leading-relaxed mb-5">
            {WEDDING_TIMELINE} {WEDDING_SETUP}
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

      <Section id="examples" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THIS LOOKS IN PRACTICE</SectionLabel>
          <DisplayHeading className="text-black mb-4">A wedding format we have run</DisplayHeading>
          <BodyCopy className="mb-12">
            Client names stay private. Location, guest range, format and outcome are from an event already described on our{' '}
            <Link to="/case-studies" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              case studies
            </Link>
            {' '}page. Previous celebrations also sit in the{' '}
            <Link to="/gallery" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              gallery
            </Link>
            .
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

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>PLANNING PAGES</SectionLabel>
          <DisplayHeading className="text-black mb-10">Cost, checklist and menu live on their own pages</DisplayHeading>
          <ul className="max-w-3xl divide-y divide-gray-200 border-y border-gray-200">
            {WEDDING_SUPPORTING_GUIDES.map((item) => (
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

      <Section id="faqs" tone="ivory" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU BOOK</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">What should I know before I book the wedding meal?</DisplayHeading>
          <FaqAccordion items={[...weddingFaqs]} showJumpNav />
        </Container>
      </Section>

      <LocationStrip
        title="Wedding catering across Dubai"
        subtitle={
          <>
            Available across Dubai including{' '}
            Palm Jumeirah,{' '}
            Emirates Hills
            {' '}and{' '}
            Dubai Hills
            . See{' '}
            <Link to="/locations" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">areas we serve</Link>.
          </>
        }
      />

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US WHAT YOU ARE PLANNING</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, venue and guest count is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            You do not need to know exactly what to order. Date, venue or area, guest count, format, cuisine, dietary requirements, budget band, and whether you already have a planner. That is enough to begin. We typically reply within 15 minutes during business hours.
          </p>
          <CTAGroup>
            <Link to={WEDDING_INQUIRY} className="btn-primary">
              Get an itemised wedding-catering quote
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
