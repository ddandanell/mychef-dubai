// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /villas-private-residences
//     primary:     "villa chef dubai"
//     subkeywords: "private chef villa dubai" · "villa catering dubai" · "villa dinner party dubai" · "private dining at villa dubai" · "palm jumeirah villa dining" · "villa catering dubai menu" · "chef villa heanor" · "chef villa in the sky" · "chef villa klope" · "chef villa lorraine" · "chef villa navarre" · "chef villa orsini"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight, ChevronRight } from 'lucide-react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import FaqAccordion from '@/components/FaqAccordion'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
  SequenceRail,
  CTAGroup,
  EditorialImage,
} from '@/components/system'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

const WHATSAPP_NUMBER = '971551744849'
const PAGE_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like a villa private chef / catering quote. Date(s): __, Guests: __, Villa community: __, Occasion: __ (via mychef.ae/villas-private-residences)"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PAGE_WHATSAPP_MESSAGE)}`

const HERO_IMAGE = '/images/villa-catering-dubai-hero.webp'

/** pages["/villas-private-residences"].internal_linking.siblings — render exactly. */
const siblingLinks = [
  { href: '/tourist-villa-chef-dubai', label: 'Holiday villa chef' },
  { href: '/villa-catering-ideas-dubai', label: 'Villa catering ideas' },
  { href: '/private-party-catering-dubai', label: 'Pool party catering' },
  { href: '/bbq-catering-dubai', label: 'BBQ catering' },
] as const

const supportingGuides = [
  { href: '/villa-catering-ideas-dubai', label: 'Villa catering ideas' },
  { href: '/blog/private-chef-palm-jumeirah-guide', label: 'Private dining palm jumeirah' },
] as const

const villaAreas = [
  { name: 'Palm Jumeirah', href: '/locations/palm-jumeirah', image: '/loc-palm-jumeirah.webp' },
  { name: 'Emirates Hills', href: '/locations/emirates-hills', image: '/loc-emirates-hills.webp' },
  { name: 'Dubai Hills', href: '/locations/dubai-hills', image: '/loc-downtown.webp' },
] as const

const includedItems = [
  {
    title: 'The chef, matched to the job',
    body: 'Identity, right-to-work, a cooking assessment and references before anyone enters the house. Independent licensed partners cook. myCHEF matches, briefs and stays the contact.',
  },
  {
    title: 'The kitchen you actually have',
    body: 'The team works in your villa kitchen and brings the kit it does not have. Oven, hob, fridge space and plating room are checked before the night, not discovered at six o’clock.',
  },
  {
    title: 'Service when the list needs it',
    body: 'A household dinner may be the chef alone. A larger guest list adds waiters, a bar and a run-sheet. The team size follows the job.',
  },
  {
    title: 'Setup and a complete clear-down',
    body: 'Load-in, service and pack-down are part of the booking. The kitchen is left as it was found. You stay at the table.',
  },
] as const

const howItRuns = [
  'Tell us whether this is the household week or one night — plus the community, date and headcount.',
  'We check the kitchen, the gate, parking and any outdoor constraints.',
  'You get a written household plan or an event proposal before anyone is booked.',
  'The chef cooks in the villa. Service staff join if the list needs them.',
  'The kitchen is cleared. You do not finish the night at the sink.',
] as const

const faqItems = [
  {
    q: 'Can a chef cook in my villa kitchen?',
    a: 'Yes. The chef works in the kitchen you have and brings equipment where it is short. Compact apartments, staff kitchens and large estate kitchens are all briefed before the day — oven, hob, fridge space and where plates leave the pass. If the space cannot support the menu, we say so in the proposal rather than discovering it in service.',
  },
  {
    q: 'Is this a household chef or catering for a party?',
    a: 'Those are two products. A standing chef for the house is the [private chef](/private-chef-dubai) service: same person, Food Profile, backup if they are off. One night for guests is [catering](/catering-dubai), and named occasions sit on [events](/events). This page is the villa: access, the kitchen and how the team works inside a compound.',
  },
  {
    q: 'Do I need to be home while the chef is there?',
    a: 'Not if access is arranged. Many households are out while lunch is prepared or dinner is set. Gate codes, parking and who meets the team are written into the brief. Chefs are identity-checked before they are sent to a client home; see [how we vet chefs](/how-we-vet-our-chefs) and [privacy inside the home](/private-chef-dubai/privacy-security).',
  },
  {
    q: 'We are renting a villa for a holiday. Is this the right page?',
    a: 'For a stay of a few days, open [holiday villa chef](/tourist-villa-chef-dubai). That page is built around a rental, a concierge and a short run of dinners. A resident household that wants the same chef back week after week belongs on [private chef](/private-chef-dubai). A single party in the rental is still catering.',
  },
  {
    q: 'Do you provide private chef villa Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide villa catering Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide villa dinner party Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide holiday villa in france with private chef?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide private dining at villa Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide Palm Jumeirah villa dining?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide villa catering Dubai menu?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide villa with chef france?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide private chef villa Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide villa catering Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide villa dinner party Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide holiday villa in france with private chef?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide private dining at villa Dubai?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide Palm Jumeirah villa dining?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide villa catering Dubai menu?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
  {
    q: 'Do you provide villa with chef france?',
    a: 'Yes — cooking at your own address is the core of what we do. We bring the equipment, set up a working kitchen in your space, serve, and leave the home as we found it. Across Palm Jumeirah, Emirates Hills, Jumeirah this is our most common booking.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/villas-private-residences#service',
      name: 'Villa Chef Dubai',
      serviceType: 'Villa Chef',
      description:
        'Villa Chef Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
      url: 'https://www.mychef.ae/villas-private-residences',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Private chef', item: 'https://www.mychef.ae/private-chef-dubai' },
        { '@type': 'ListItem', position: 3, name: 'Villa dining', item: 'https://www.mychef.ae/villas-private-residences' },
      ],
    },
  ],
}

export default function Villas() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title="Villa Chef Dubai | myCHEF"
        description="Villa Chef Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table."
        canonicalPath="/villas-private-residences"
        ogImage="/service-villa.webp"
        hideSiteName
        preloadHero={HERO_IMAGE}
        schema={schema}
      />

      <PageHero
        eyebrow="Villas & private residences"
        title="Villa Chef Dubai"
        subtitle="A chef in your kitchen — standing household days, or one night for guests. Villa chef Dubai covers the gate, the menu and the clear-down so you stay at the table."
        image={HERO_IMAGE}
        imageAlt="Villa catering in Dubai — outdoor table and service team. Experience concept shown."
        imageWidth={1344}
        imageHeight={752}
        align="left"
        cta={{ label: 'Get a villa quote', href: '/inquiry' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Private chef', href: '/private-chef-dubai' },
          { label: 'Villa dining' },
        ]}
        minHeight="full"
        overlay="dark"
      />
      <TrustSignalStrip />

      <Section tone="ivory" rhythm="connected">
        <Container>
          <SectionLabel>WHAT THIS PAGE IS</SectionLabel>
          <DisplayHeading className="text-black mb-6">The house is the same. The job is not.</DisplayHeading>
          <BodyCopy className="mb-5">
            The booking is a chef working in your home: the gate, the kitchen you actually have, and a kitchen left as they found it. Independent licensed partners cook. myCHEF matches the chef, sets the brief and stays the contact when the house changes.
          </BodyCopy>
          <BodyCopy>
            One dinner is catering. We send that brief there, not into a household plan. A chef who comes back — with a Food Profile behind them — is the other product.
          </BodyCopy>
        </Container>
      </Section>

      <Section id="the-split" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>TWO PRODUCTS</SectionLabel>
          <DisplayHeading className="text-black mb-4">Household chef, or a villa event.</DisplayHeading>
          <BodyCopy className="mb-12">
            Tell us which job it is. The team, the price method and the page you should open all follow from that.
          </BodyCopy>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="border border-gray-200 bg-white p-8">
              <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-3">Standing rhythm</p>
              <h3 className="font-playfair text-h3 text-black mb-4">A chef for the household</h3>
              <p className="font-inter text-body text-gray-600 leading-relaxed mb-6">
                A private chef villa Dubai arrangement is a standing rhythm: the same person, a Food Profile of how this house eats, and backup if they are off. Groceries as agreed, at actual receipts when we shop. Priced as working time, not per plate.
              </p>
              <p className="font-inter text-body text-gray-600 leading-relaxed mb-6">
                Chef villa klope, chef villa heanor, chef villa orsini, chef villa navarre, chef villa lorraine and chef villa in the sky are run at the address you give us: we bring the equipment, cook on site and leave the space as we found it.
              </p>
              <Link
                to="/private-chef-dubai"
                className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
              >
                Private chef <ArrowRight size={14} aria-hidden />
              </Link>
            </article>

            <article className="border border-gray-200 bg-white p-8">
              <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-3">One night</p>
              <h3 className="font-playfair text-h3 text-black mb-4">A team for the guest list</h3>
              <p className="font-inter text-body text-gray-600 leading-relaxed mb-6">
                Villa catering Dubai is the other job: a guest list, a clock, setup and a team that leaves before you start the washing up. A villa dinner party Dubai night is planned around heat, outdoor space, parking and when the gate will actually open.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  to="/catering-dubai"
                  className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                >
                  Catering <ArrowRight size={14} aria-hidden />
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                >
                  Events <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="includes" tone="ivory" rhythm="chapter">
        <Container>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>ON THE NIGHT, AND IN THE WEEK</SectionLabel>
              <DisplayHeading className="text-black mb-6">What villa chef Dubai includes</DisplayHeading>
              <BodyCopy className="mb-8">
                The villa is the constraint. The menu, the staff and the kit are built around it — then written down before anyone arrives.
              </BodyCopy>
              <ul className="space-y-8">
                {includedItems.map((item) => (
                  <li key={item.title} className="border-t border-gray-200 pt-6">
                    <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                    <p className="font-inter text-body-sm text-gray-600 leading-relaxed">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
            <EditorialImage
              src={HERO_IMAGE}
              alt="Poolside villa catering in Dubai with the skyline behind. Experience concept shown."
              width={1344}
              height={752}
              aspect="aspect-[4/5] lg:aspect-[4/5]"
              objectPosition="center 40%"
              className="w-full"
            />
          </div>
        </Container>
      </Section>

      <Section id="how-it-runs" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW THE TEAM WORKS HERE</SectionLabel>
          <DisplayHeading className="text-black mb-4">Tell us the job. We build the kitchen around it.</DisplayHeading>
          <BodyCopy className="mb-10">
            Gated compounds are not a restaurant pass. Parking, load-in, staff access and where smoke can go belong in the brief. Intimate chef-led dinners that are really an experience, not a household plan, sit on{' '}
            <Link to="/luxury-dining-experiences" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              luxury dining
            </Link>
            .
          </BodyCopy>
          <SequenceRail steps={howItRuns} />
        </Container>
      </Section>

      <Section id="areas" tone="charcoal" rhythm="chapter">
        <Container>
          <SectionLabel tone="dark">WHERE THE VILLA IS</SectionLabel>
          <DisplayHeading className="text-white mb-4">Three communities, then the rest of Dubai</DisplayHeading>
          <BodyCopy tone="dark" className="mb-10">
            The operating detail changes with the compound — beach access on the Palm is not a garden in the Hills. Other communities are listed with{' '}
            <Link to="/locations" className="text-gold hover:text-gold-light underline underline-offset-4">
              areas we serve
            </Link>
            .
          </BodyCopy>
          <div className="grid sm:grid-cols-3 gap-6">
            {villaAreas.map((area) => (
              <Link key={area.href} to={area.href} className="group relative block overflow-hidden">
                <img
                  src={area.image}
                  alt={area.name}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-h4 text-white group-hover:text-gold transition-colors">{area.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Areas we serve <ArrowRight size={14} aria-hidden />
            </Link>
          </p>
        </Container>
      </Section>

      <Section id="quote" tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>HOW THE QUOTE IS BUILT</SectionLabel>
          <DisplayHeading className="text-black mb-6">The method first. The number after.</DisplayHeading>
          <BodyCopy className="mb-5">
            A household chef is priced as working time × days, plus the published zone rate for the visit. Groceries sit on top, at receipts. That calculator lives on{' '}
            <Link to="/private-chef-prices-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              private chef prices
            </Link>
            .
          </BodyCopy>
          <BodyCopy>
            An event night is quoted from guest count, menu, staffing, access and whether service is indoors or by the pool. Food-only through full service is scoped on{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              catering
            </Link>
            . There is no single villa rate. Minimums and 5% VAT are shown on the written proposal.
          </BodyCopy>
        </Container>
      </Section>

      <Section id="faqs" tone="ivory" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU BOOK</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">What should I know before a chef arrives?</DisplayHeading>
          <FaqAccordion items={[...faqItems]} />
        </Container>
      </Section>

      <Section tone="white" rhythm="connected">
        <Container>
          <SectionLabel align="center">YOU MAY ALSO LIKE</SectionLabel>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {siblingLinks.map((svc) => (
              <Link
                key={svc.label}
                to={svc.href}
                className="inline-flex items-center gap-1 px-4 py-2 font-inter text-body-sm text-black border border-gray-200 hover:border-gold hover:text-gold transition-all duration-300 bg-white"
              >
                {svc.label}
                <ChevronRight size={14} />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="connected">
        <Container className="max-w-[720px] text-center">
          <SectionLabel align="center">PLANNING READING</SectionLabel>
          <DisplayHeading as="h2" size="h3" className="text-black mb-6">
            If you are still shaping the night
          </DisplayHeading>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            {supportingGuides.map((guide, i) => (
              <span key={guide.label}>
                {i > 0 && (i === supportingGuides.length - 1 ? ' and ' : ', ')}
                <Link
                  to={guide.href}
                  className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors"
                >
                  {guide.label}
                </Link>
              </span>
            ))}
            .
          </p>
        </Container>
      </Section>

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US THE HOUSE</SectionLabel>
          <DisplayHeading className="text-white mb-6">Community, date and the job is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Standing chef or one night. Guest count if you have it. We typically reply within 15 minutes during business hours.
          </p>
          <CTAGroup>
            <Link to="/inquiry" className="btn-primary">
              Get a villa quote
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
