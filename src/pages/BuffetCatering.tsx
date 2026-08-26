// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /buffet-catering-dubai
//     primary:     "buffet catering dubai"
//     subkeywords: "buffet catering dubai price" · "buffet catering price per person dubai" · "best buffet catering dubai" · "buffet catering packages dubai" · "buffet catering menu dubai" · "halal buffet catering dubai" · "breakfast buffet catering dubai" · "international buffet catering dubai" · "birthday buffet catering dubai" · "christmas buffet catering dubai" · "corporate buffet catering dubai" · "eid buffet catering dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
  SequenceRail,
  CTAGroup,
  EditorialImage,
} from '../components/system'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { CATERING_INQUIRY_HREF, CATERING_PATHS } from '@/content/cateringCluster'

const HERO = {
  src: '/images/buffet-catering-dubai-hero.webp',
  alt: 'Guests at a Dubai villa buffet while the catering team replenishes a hot station. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like a buffet catering quote. Date: __ Guests: __ Area: __ (via mychef.ae/buffet-catering-dubai)"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

/** pages["/buffet-catering-dubai"].internal_linking.siblings — render exactly. */
const SIBLINGS = [
  {
    href: '/buffet-vs-plated-dubai',
    label: 'Buffet vs plated',
    body: 'When the room should sit for courses, and when it should move.',
  },
  {
    href: '/grazing-table-dubai',
    label: 'Grazing tables',
    body: 'A styled centrepiece. Not a dinner line.',
  },
  {
    href: '/live-cooking-stations-dubai',
    label: 'Live cooking stations',
    body: 'Dishes finished in front of guests.',
  },
  {
    href: '/canape-catering-dubai',
    label: 'Canapé catering',
    body: 'One-bite food for a standing room.',
  },
] as const

const INCLUDED = [
  {
    title: 'The menu',
    body: 'Hot and cold dishes, sides, breads and dessert, sized to the guest count and the diets in the room.',
  },
  {
    title: 'The kitchen',
    body: 'Licensed culinary partners matched to the brief. No chef is promised by name until the event is scoped.',
  },
  {
    title: 'The line',
    body: 'Chafing and holding equipment, platters, labels, linen for the spread, and a layout that does not stall at one tray.',
  },
  {
    title: 'The team',
    body: 'Station staff sized to the count — enough to replenish, label and keep a queue moving. Not a waiter on every chair.',
  },
  {
    title: 'The night',
    body: 'Arrival, setup, service, replenishment and clear-down. You are not stacking dishes at midnight.',
  },
  {
    title: 'The diets',
    body: 'Halal ingredients by default. Vegetarian, vegan and allergy dishes cooked and labelled as separate items, not as an afterthought.',
  },
] as const

const PRICE_ROWS = [
  {
    format: 'Staffed buffet',
    what: 'A maintained spread. Typically 1–2 staff.',
    price: 'From AED 120 per person',
    note: 'From 20 guests.',
    href: null as string | null,
  },
  {
    format: 'Drop-off',
    what: 'Food delivered ready to serve. No team on site.',
    price: 'From AED 90 per person',
    note: 'From 10 guests. AED 900 minimum order.',
    href: CATERING_PATHS.dropOff,
  },
  {
    format: 'Live finishing',
    what: 'Cooking in front of guests, often beside a buffet.',
    price: 'From AED 150 per person',
    note: 'A different format when the pan is the point.',
    href: '/live-cooking-stations-dubai',
  },
  {
    format: 'Plated dining',
    what: 'Courses cooked and served to the table.',
    price: 'AED 700–950 per person',
    note: 'A different product. Compare before you mix the two.',
    href: '/buffet-vs-plated-dubai',
  },
] as const

const STEPS = [
  'Date, guest count, venue, and how you want people to eat.',
  'An itemised proposal: the line, the team, the figure, 5% VAT on its own line.',
  'You confirm diets and final numbers.',
  'The team sets up, holds, replenishes and clears. You stay with your guests.',
] as const

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Buffet Catering Dubai',
      serviceType: 'Buffet catering',
      description:
        'Buffet Catering Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
      url: 'https://www.mychef.ae/buffet-catering-dubai',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@type': 'City', name: 'Dubai' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Catering', item: 'https://www.mychef.ae/catering-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Buffet catering', item: 'https://www.mychef.ae/buffet-catering-dubai' },
      ],
    },
  ],
}

export default function BuffetCatering() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title="Buffet Catering Dubai | myCHEF"
        description="Buffet Catering Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table."
        canonicalPath="/buffet-catering-dubai"
        ogImage={HERO.src}
        hideSiteName
        preloadHero={HERO.src}
        schema={schema}
      />

      <PageHero
        title="Buffet Catering Dubai"
        subtitle="Buffet catering Dubai is a staffed self-serve line: heat held, labels honest, trays replenished, the queue watched. From 20 guests, from AED 120 per person before 5% VAT. You stay with your guests."
        image={HERO.src}
        imageAlt={HERO.alt}
        imageWidth={HERO.width}
        imageHeight={HERO.height}
        align="left"
        cta={{ label: 'Get an itemised buffet quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Catering', href: CATERING_PATHS.overview },
          { label: 'Buffet catering' },
        ]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/70 max-w-[58ch]">
          Share the date, headcount and venue. We typically reply within 15 minutes during business hours.
        </p>
      </PageHero>
      <TrustSignalStrip />

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT THIS IS</SectionLabel>
          <DisplayHeading className="text-black mb-6">A buffet is a line that has to keep moving</DisplayHeading>
          <BodyCopy className="mb-5">
            Guests serve themselves. That only works if hot food stays hot, cold food stays cold, labels stay honest, and someone is watching the queue before it forms. A row of trays left on a table is not a service.
          </BodyCopy>
          <BodyCopy className="mb-5">
            myCHEF designs the spread and matches licensed culinary partners to the room you actually have. They cook; we coordinate the line, the staffing and the clear-down. You are not the person topping up rice during your own party.
          </BodyCopy>
          <BodyCopy>
            The format sits inside{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Luxury catering in Dubai
            </Link>
            . If the brief is a named night — a wedding, a birthday, a company event — start with{' '}
            <Link to="/events" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Event catering in Dubai
            </Link>
            {' '}and come back here for how people will eat.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <SectionLabel>WHO THIS IS FOR</SectionLabel>
              <DisplayHeading className="text-black mb-6">Mixed guest lists. Rooms that cannot sit everyone at once.</DisplayHeading>
              <BodyCopy className="mb-5">
                A buffet earns its place when tastes differ, when the count runs from about twenty into the hundreds, and when you want people on their feet between plates. Villa receptions, company lunches, family gatherings — same format, different rooms.
              </BodyCopy>
              <BodyCopy className="mb-5">
                It is the wrong tool below about twenty guests. The line looks thin and dishes cool between visits. Food delivered with no team on site starts from 10 guests — that is{' '}
                <Link to={CATERING_PATHS.dropOff} className="text-gold-ink underline underline-offset-4 hover:text-gold">
                  drop-off catering
                </Link>
                . A dinner for a handful of people belongs with a{' '}
                <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                  Private chef
                </Link>
                , which has no minimum headcount.
              </BodyCopy>
              <BodyCopy>
                If you want courses to the table, read{' '}
                <Link to="/buffet-vs-plated-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                  Buffet vs plated
                </Link>
                . If the food is a styled centrepiece rather than a meal, that is{' '}
                <Link to="/grazing-table-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                  Grazing tables
                </Link>
                . If the cooking is the entertainment, use{' '}
                <Link to="/live-cooking-stations-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                  Live cooking stations
                </Link>
                . If people are standing with a drink in one hand, use{' '}
                <Link to="/canape-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
                  Canapé catering
                </Link>
                .
              </BodyCopy>
            </div>
            <EditorialImage
              src="/service-catering.webp"
              alt="A catering team holding a self-serve line at a Dubai event. Experience concept shown."
              width={1264}
              height={848}
              aspect="aspect-[3/2]"
              objectPosition="center 45%"
            />
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE NIGHT</SectionLabel>
          <DisplayHeading className="text-black mb-6">What buffet catering Dubai has to do on the night</DisplayHeading>
          <BodyCopy className="mb-5">
            Heat. Replenish. Labels. Queue. That is the job. What people mean by the best buffet catering Dubai can book is not the opening photograph. It is whether the last guests still find hot food, a label they can trust, and a line that moves.
          </BodyCopy>
          <BodyCopy className="mb-5">
            Hot pans go into holding equipment, not onto a table to go lukewarm. Fresh trays replace tired ones before the station looks empty. Halal buffet catering Dubai is the default: ingredients are sourced that way unless the brief says otherwise. Vegetarian, vegan and allergy dishes are separate, labelled items — specific certificates belong in the brief, not after the fact.
          </BodyCopy>
          <BodyCopy>
            One long table in a large room becomes a queue. We split the line — more than one point of service — when the count and the layout need it. Independent licensed partners cook to Dubai Municipality food-safety standards. myCHEF coordinates the structure. You engage those professionals for the night.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>WHAT YOU ARE BUYING</SectionLabel>
          <DisplayHeading className="text-black mb-4">What the booking includes</DisplayHeading>
          <BodyCopy className="mb-12">
            The quote is the spread plus the people who keep it. You do not hire trays and hope someone watches them.
          </BodyCopy>
          <ul className="grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item.title} className="bg-white p-6 md:p-8">
                <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE SPREAD</SectionLabel>
          <DisplayHeading className="text-black mb-6">The menu has to hold</DisplayHeading>
          <BodyCopy className="mb-5">
            The buffet catering menu Dubai is built for holding time, not only for a tasting. Curries, grills, rice, salads, breads, a dessert that can sit. Pasta finished in a pan belongs on a live station, not in a tray for an hour.
          </BodyCopy>
          <BodyCopy>
            Arabic, Indian, Mediterranean, Asian, Italian or a mixed line — chosen because of who is in the room, not because a brochure lists cuisines. We fix the balance of meat, seafood, vegetarian and labelled diets with you before anyone shops.
          </BodyCopy>
        </Container>
      </Section>

      <Section id="pricing" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE FIGURE</SectionLabel>
          <DisplayHeading className="text-black mb-6">How the price is built</DisplayHeading>
          <BodyCopy className="mb-5">
            The buffet catering Dubai price is a per-person band plus staff, equipment and VAT — not a hidden box. Guest count, menu, how many stations, venue access and timing move it. Every proposal is itemised in writing before you confirm.
          </BodyCopy>
          <BodyCopy className="mb-12">
            A staffed event buffet starts from AED 120 per person, from 20 guests — the buffet catering price per person Dubai we publish for a maintained spread with a small team. 5% VAT is shown as its own line. The bands below are already on this site; they are not a quote.
          </BodyCopy>
          <div className="overflow-x-auto border border-gray-200">
            <table className="w-full min-w-[36rem] text-left">
              <thead className="bg-cream">
                <tr className="font-inter text-caption uppercase tracking-[0.12em] text-gray-500">
                  <th className="px-5 py-3 font-medium">Format</th>
                  <th className="px-5 py-3 font-medium">What you get</th>
                  <th className="px-5 py-3 font-medium">Published band</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((row) => (
                  <tr key={row.format} className="border-t border-gray-200">
                    <td className="px-5 py-4 font-inter text-body-sm text-black align-top">
                      {row.href ? (
                        <Link to={row.href} className="text-gold-ink underline underline-offset-4 hover:text-gold">
                          {row.format}
                        </Link>
                      ) : (
                        row.format
                      )}
                    </td>
                    <td className="px-5 py-4 font-inter text-body-sm text-gray-600 align-top">
                      {row.what} {row.note}
                    </td>
                    <td className="px-5 py-4 font-inter text-body-sm text-black align-top whitespace-nowrap">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <BodyCopy className="mt-8">
            Starting points for buffet catering packages Dubai live on{' '}
            <Link to={CATERING_PATHS.packages} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              catering packages
            </Link>
            . They are not fixed boxes. The method and the published bands are also on the{' '}
            <Link to={CATERING_PATHS.priceGuide} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              catering prices guide
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT STARTS</SectionLabel>
          <DisplayHeading className="text-black mb-12">Four steps. You stay in the review.</DisplayHeading>
          <SequenceRail steps={[...STEPS]} />
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHERE</SectionLabel>
          <DisplayHeading className="text-black mb-6">Where the line is set</DisplayHeading>
          <BodyCopy className="mb-5">
            We bring the kit to the kitchen you have — villa, apartment, office floor, garden or licensed venue. Access, power, shade and how far the food travels from the van to the table are part of the brief, especially outdoors in heat.
          </BodyCopy>
          <BodyCopy>
            Regular rooms include{' '}
            <Link to="/locations/palm-jumeirah" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Palm Jumeirah
            </Link>
            ,{' '}
            <Link to="/locations/dubai-marina" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Dubai Marina
            </Link>
            {' '}and{' '}
            <Link to="/locations/downtown-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Downtown Dubai
            </Link>
            . The full list is on{' '}
            <Link to="/locations" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Areas we serve
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>You May Also Like</SectionLabel>
          <DisplayHeading className="text-black mb-10">If the line is not the right tool</DisplayHeading>
          <ul className="grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2">
            {SIBLINGS.map((item) => (
              <li key={item.href} className="bg-white">
                <Link to={item.href} className="group flex h-full flex-col p-6 md:p-8">
                  <h3 className="font-playfair text-h4 text-black transition-colors group-hover:text-gold-ink">{item.label}</h3>
                  <p className="mt-2 flex-1 font-inter text-body-sm text-gray-600 leading-relaxed">{item.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                    {item.label}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US THE NIGHT</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, guest count and venue is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            You do not need a finished menu before you write. We typically reply within 15 minutes during business hours, with an itemised proposal to follow.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get an itemised buffet quote
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
