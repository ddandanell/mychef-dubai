// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /cuisines-dubai
//     primary:     "multi cuisine catering dubai"
//     subkeywords: "international catering dubai" · "fusion catering dubai" · "multi cuisine catering packages dubai" · "largest catering companies in uae" · "top rated catering services in dubai" · "best food catering in dubai" · "cuisines dubai catering" · "catering companies in uae" · "biggest catering companies in uae" · "top 10 catering companies in uae" · "top catering providers in dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
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
import { locationPath } from '@/data/locations'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I need multi cuisine catering in Dubai. Date: __ Guests: __ Area: __ Cuisines: __ (via mychef.ae/cuisines-dubai)"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const PAGE_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I need multi cuisine catering in Dubai. Date: __ Guests: __ Area: __ Cuisines: __"

/** pages["/cuisines-dubai"].internal_linking.siblings — render exactly. */
const SIBLING_LINKS = [
  {
    href: '/arabic-catering-dubai',
    label: 'Arabic catering',
    body: 'Mezze, grills and sharing rice — open this page if Arabic is the main kitchen.',
    image: '/images/arabic-catering-dubai-hero.webp',
    imageAlt: 'Arabic sharing table in a Dubai home. Experience concept shown.',
  },
  {
    href: '/indian-catering-dubai',
    label: 'Indian catering',
    body: 'Regional Indian menus for mixed tables. The Indian page owns the split.',
    image: '/images/indian-catering-dubai-hero.webp',
    imageAlt: 'Indian catering service in a Dubai villa. Experience concept shown.',
  },
  {
    href: '/italian-catering-dubai',
    label: 'Italian catering',
    body: 'Pasta, antipasti and risotto. Use this when Italian is the lead cuisine.',
    image: '/images/italian-catering-dubai-hero.webp',
    imageAlt: 'Italian pasta service at a Dubai table. Experience concept shown.',
  },
  {
    href: '/halal-catering-dubai',
    label: 'Halal catering',
    body: 'Open this when sourcing is the brief, not when you are choosing a cuisine.',
    image: '/images/halal-catering-dubai-hero.webp',
    imageAlt: 'Halal catering in a Dubai home. Experience concept shown.',
  },
] as const

const HERO = {
  src: '/images/cuisines-hub-dubai-hero.webp',
  alt: 'A mixed dining table in a Dubai villa, service in the background. Experience concept shown.',
  width: 1344,
  height: 752,
} as const

const jumpNav = [
  { href: '#kitchens', label: 'Cuisines' },
  { href: '#mixed', label: 'Mixed tables' },
  { href: '#diet', label: 'Diet' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#get-quote', label: 'Quote' },
] as const

const cuisineKitchens = [
  {
    href: '/arabic-catering-dubai',
    title: 'Arabic catering',
    body: 'Mezze, charcoal grills and sharing rice dishes. The Arabic page owns the menu and how it is served.',
    linkLabel: 'Arabic catering',
    image: '/images/arabic-catering-dubai-hero.webp',
    imageAlt: 'Arabic sharing table in a Dubai home. Experience concept shown.',
  },
  {
    href: '/indian-catering-dubai',
    title: 'Indian catering',
    body: 'Regional menus, not one curry list. Live chaat or dosa when the room can take it.',
    linkLabel: 'Indian catering',
    image: '/images/indian-catering-dubai-hero.webp',
    imageAlt: 'Indian catering service in a Dubai villa. Experience concept shown.',
  },
  {
    href: '/italian-catering-dubai',
    title: 'Italian catering',
    body: 'Antipasti, pasta and risotto. Live pasta when you want the kitchen in the room.',
    linkLabel: 'Italian catering',
    image: '/images/italian-catering-dubai-hero.webp',
    imageAlt: 'Italian pasta service at a Dubai table. Experience concept shown.',
  },
  {
    href: '/asian-catering-dubai',
    title: 'Asian catering',
    body: 'Thai, Chinese and pan-Asian plates run as named kitchens — not one “Asian” dish.',
    linkLabel: 'Asian catering',
    image: '/images/asian-catering-dubai-hero.webp',
    imageAlt: 'Asian tasting plates prepared for a Dubai event. Experience concept shown.',
  },
  {
    href: '/mediterranean-catering-dubai',
    title: 'Mediterranean catering',
    body: 'Vegetable-forward sharing, grilled fish and olive-oil cooking for heat and mixed tables.',
    linkLabel: 'Mediterranean catering',
    image: '/images/mediterranean-catering-dubai-hero.webp',
    imageAlt: 'Mediterranean sharing plates in Dubai. Experience concept shown.',
  },
  {
    href: '/sushi-catering-dubai',
    title: 'Sushi catering',
    body: 'Counter service, timing on ice, and a station that works in a villa or on a boat.',
    linkLabel: 'Sushi catering',
    image: '/images/sushi-catering-dubai-hero.webp',
    imageAlt: 'Sushi counter prepared for a Dubai gathering. Experience concept shown.',
  },
] as const

const dietaryRoutes = [
  { href: '/vegan-catering-dubai', label: 'Vegan catering' },
  { href: '/vegetarian-catering-dubai', label: 'Vegetarian catering' },
  { href: '/allergy-safe-catering-dubai', label: 'Gluten free catering' },
  { href: '/jain-catering-dubai', label: 'Jain catering' },
] as const

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
] as const

const startSteps = [
  'Tell us the date, venue, guest count and which kitchens the table needs.',
  'We match chefs who cook those menus and draft one service plan — food, staff, timing.',
  'You review the menu, staffing and price. 5% VAT is shown as its own line.',
  'On the night the team cooks, serves and clears. You stay a guest at your own table.',
] as const

const faqs = [
  {
    q: 'Can one booking run two cuisines?',
    a: 'Yes. That is the usual brief on this page. We match chefs who cook those kitchens and run them as one service, not as two caterers sharing a villa kitchen. [Arabic catering](/arabic-catering-dubai) next to [Italian catering](/italian-catering-dubai) is a common mix.',
  },
  {
    q: 'Does the cuisine change the starting price?',
    a: 'No. Cuisine is the menu direction. The ladder is the format: food-only from AED 90 per person, a standard event buffet from AED 120, premium buffet or live stations from AED 150, chef-led plated dining from AED 700. The method sits on [Catering](/catering-dubai).',
  },
  {
    q: 'Where do vegan, vegetarian and allergy menus sit?',
    a: 'On their own pages. [Vegan catering](/vegan-catering-dubai), [vegetarian catering](/vegetarian-catering-dubai) and [allergy-safe catering](/allergy-safe-catering-dubai) own those menus. Halal sourcing is the default here; the dedicated page is [Halal catering](/halal-catering-dubai).',
  },
  {
    q: 'Do you guarantee a named chef for a cuisine?',
    a: 'No. Italian menus are often matched to Marco Rossi and Arabic menus to Layla Hassan, but a named chef is confirmed only after the brief, the date and availability. Independent licensed partners cook. You are not putting a chef on your payroll.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mychef.ae/cuisines-dubai#service',
      name: 'Multi Cuisine Catering Dubai',
      serviceType: 'Multi Cuisine Catering',
      description:
        'Multi Cuisine Catering Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
      url: 'https://www.mychef.ae/cuisines-dubai',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@id': 'https://www.mychef.ae/#place-dubai' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Cuisine kitchens',
        itemListElement: cuisineKitchens.map((item) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            url: `https://www.mychef.ae${item.href}`,
          },
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Cuisines', item: 'https://www.mychef.ae/cuisines-dubai' },
      ],
    },
  ],
}

export default function Cuisines() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title="Multi Cuisine Catering Dubai | myCHEF"
        description="Multi Cuisine Catering Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table."
        canonicalPath="/cuisines-dubai"
        ogImage={HERO.src}
        hideSiteName
        preloadHero={HERO.src}
        schema={schema}
      />

      <PageHero
        eyebrow="Cuisines"
        title="Multi Cuisine Catering Dubai"
        subtitle="Multi cuisine catering Dubai is for mixed tables: more than one kitchen, one team on the night. You choose the cuisines. We match chefs who cook those menus, then staff, setup and clear-down. Format and price sit on Catering — this page is the cuisine index."
        image={HERO.src}
        imageAlt={HERO.alt}
        imageWidth={HERO.width}
        imageHeight={HERO.height}
        align="left"
        cta={{ label: 'Get an itemised quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Cuisines' }]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/70 max-w-[58ch]">
          Share the date, guest mix and the kitchens you want. We typically reply within 15 minutes during business hours.
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
            {SIBLING_LINKS.map((item) => (
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
            This page owns the cuisine index. Broader food-only through full-service catering sits on{' '}
            <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Catering
            </Link>
            . Named nights — weddings, birthdays, private parties — sit on{' '}
            <Link to="/events" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Events
            </Link>
            . A standing household chef belongs on{' '}
            <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              private chef services in Dubai
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT THIS PAGE IS</SectionLabel>
          <DisplayHeading className="text-black mb-6">What multi cuisine catering Dubai actually covers</DisplayHeading>
          <BodyCopy className="mb-4">
            You land here when the table is mixed. One side wants Arabic grills. The other wants pasta. Someone asked for sushi as a station. That is a cuisine brief, not a format brief.
          </BodyCopy>
          <BodyCopy className="mb-4">
            International catering in Dubai usually means that guest list — not a buffet of every flag. We write the menus around who is eating, then match chefs who actually cook those kitchens.
          </BodyCopy>
          <BodyCopy>
            Chefs are independent licensed partners. Identity, right-to-work, a cooking assessment and references are checked before anyone is sent into a home. Read{' '}
            <Link to="/how-we-vet-our-chefs" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              how we vet our chefs
            </Link>
            . No chef is guaranteed by name until the date and the brief are confirmed.
          </BodyCopy>
        </Container>
      </Section>

      <Section id="mixed" tone="ivory" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>THE MIXED TABLE</SectionLabel>
          <DisplayHeading className="text-black mb-6">Two families. Two kitchens. One team.</DisplayHeading>
          <BodyCopy className="mb-4">
            Fusion catering in Dubai is often one confused plate. Mixed cuisine here is two proper menus, timed as one service, with one clear-down.
          </BodyCopy>
          <BodyCopy className="mb-4">
            We do not send two competing caterers into your villa kitchen. We match the chefs, then run them as one team: one briefing, one timeline, one person you talk to.
          </BodyCopy>
          <BodyCopy>
            Halal sourcing is the default across these kitchens. If you need the sourcing rules written out, that lives on{' '}
            <Link to="/halal-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Halal catering
            </Link>
            — this page does not own it.
          </BodyCopy>
        </Container>
      </Section>

      <Section id="kitchens" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE KITCHENS</SectionLabel>
          <DisplayHeading className="text-black mb-4">Pick the kitchen. The specialist page owns the menu.</DisplayHeading>
          <BodyCopy className="mb-12">
            Open the cuisine you already know you want. Stay here only if the table needs more than one.
          </BodyCopy>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisineKitchens.map((item) => (
              <article key={item.href} className="border border-gray-200">
                <Link to={item.href} data-track="cuisine_card" className="block aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4">{item.body}</p>
                  <Link
                    to={item.href}
                    data-track="cuisine_card"
                    className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                  >
                    {item.linkLabel} <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="diet" tone="ivory" rhythm="standard">
        <Container className="max-w-3xl">
          <SectionLabel>DIET IS A DIFFERENT PAGE</SectionLabel>
          <DisplayHeading className="text-black mb-6">If the brief is the diet, not the kitchen</DisplayHeading>
          <BodyCopy className="mb-4">
            Vegan, vegetarian, Jain and allergy-safe cooking change the kitchen path. Those pages own how that cooking is done. This hub does not.
          </BodyCopy>
          <BodyCopy className="mb-8">
            Keto, pescatarian and “healthy” are not extra cuisine URLs. They are constraints inside the cuisine you already chose.
          </BodyCopy>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {dietaryRoutes.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 font-inter text-body-sm text-gold-ink underline decoration-gold/40 underline-offset-4 hover:text-gold"
                >
                  {item.label} <ArrowRight size={14} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="how-it-works" tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>HOW IT STARTS</SectionLabel>
          <DisplayHeading className="text-black mb-12">Four steps. You stay in the review.</DisplayHeading>
          <SequenceRail steps={[...startSteps]} />
        </Container>
      </Section>

      <Section tone="charcoal" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">PRICE</SectionLabel>
          <DisplayHeading className="text-white mb-6">Cuisine does not set a separate ladder</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            Food-only catering starts from AED 90 per person. A standard event buffet starts from AED 120. Premium buffet, BBQ or live stations start from AED 150. Chef-led plated dining starts from AED 700. 5% VAT is shown on the written proposal.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-5 max-w-[65ch]">
            If you are weighing up best food catering in Dubai, top catering providers in Dubai, top 10 catering companies in UAE and top rated catering services in Dubai, the things worth checking are the named chef, the itemised quote and who buys the ingredients. Catering companies in UAE, largest catering companies in UAE and biggest catering companies in UAE are run to a fixed timing, with one itemised invoice and dietary requirements tracked per person.
          </p>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[65ch]">
            There is no separate multi cuisine catering packages Dubai product. Packages are event packages; cuisine is the menu direction inside them. Guest count, format, staffing, venue access and timing move the total — not which cuisine you pick.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              to="/catering-dubai"
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Catering <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={CATERING_PATHS.packages}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Catering packages <ArrowRight size={14} aria-hidden />
            </Link>
            <Link
              to={CATERING_INQUIRY_HREF}
              className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold hover:text-gold-light"
            >
              Get an itemised quote <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container>
          <SectionLabel>WHERE WE COOK</SectionLabel>
          <DisplayHeading className="text-black mb-4">The same kitchens at your address</DisplayHeading>
          <BodyCopy className="mb-8">
            Quoted to the villa, apartment or yacht — not a restaurant you travel to.
          </BodyCopy>
          <ul className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  to={locationPath(loc.slug)}
                  className="inline-block px-4 py-2 font-inter text-body-sm text-gold-ink border border-gold/30 hover:bg-gold hover:text-black transition-colors"
                >
                  {loc.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/locations"
                className="inline-block px-4 py-2 font-inter text-body-sm text-gold-ink border border-gold/30 hover:bg-gold hover:text-black transition-colors"
              >
                Areas we serve
              </Link>
            </li>
          </ul>
        </Container>
      </Section>

      <Section tone="charcoal" rhythm="chapter">
        <Container>
          <h2 className="font-playfair text-h2 text-white text-center mb-10">Multi Cuisine Catering Dubai: You May Also Like</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SIBLING_LINKS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="group border border-white/12 hover:border-gold/50 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={1600}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-playfair text-h4 text-white mb-2">{item.label}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">{item.body}</p>
                  <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold group-hover:text-gold-light">
                    {item.label} <ArrowRight size={14} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="standard">
        <Container className="max-w-[800px]">
          <SectionLabel align="center">BEFORE YOU ENQUIRE</SectionLabel>
          <DisplayHeading className="text-black text-center mb-10">What should I know before I book?</DisplayHeading>
          <FaqAccordion items={faqs} />
        </Container>
      </Section>

      <Section id="get-quote" tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">TELL US THE TABLE</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, guest mix and the kitchens you want is enough</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            You do not need a finished menu. We typically reply within 15 minutes during business hours.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get an itemised quote
            </Link>
            <a
              href={WHATSAPP_LINK}
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
