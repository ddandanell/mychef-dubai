// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /catering-packages-dubai
//     primary:     "catering packages dubai"
//     subkeywords: "catering packages dubai price" · "catering package cost per person dubai" · "best catering packages dubai" · "halal catering packages dubai" · "all inclusive catering package dubai" · "food catering packages dubai" · "party catering packages dubai" · "small catering packages dubai" · "bachelor party catering packages dubai" · "bachelorette party catering packages dubai" · "birthday party catering packages dubai" · "finger food catering packages dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, Check, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import {
  Section,
  Container,
  SectionLabel,
  DisplayHeading,
  BodyCopy,
  CTAGroup,
} from '../components/system'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import {
  PACKAGE_FEATURED_EXTRAS,
  PACKAGE_HUB_SEO,
  PACKAGE_LOCATION_LINKS,
  PACKAGE_SIBLING_LINKS,
  PACKAGE_UPLINK,
  PRIMARY_PACKAGES,
} from '@/content/hubPages'
import { CATERING_INQUIRY_HREF, CATERING_WHATSAPP_NUMBER } from '@/content/cateringCluster'

const PATH = PACKAGE_HUB_SEO.canonical
const HERO = '/images/catering-packages-dubai-hero.webp'
const PAGE_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like a catering package for my event in Dubai. Date: __ Guests: __ Area: __"
const WHATSAPP_LINK = `https://wa.me/${CATERING_WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi myCHEF Dubai, I'd like to learn more about your catering packages (via mychef.ae/catering-packages-dubai)",
)}`

const includedItems = [
  'Menu written for the occasion and the table',
  'Chef on the night — service staff on Family Feast, Birthday and Corporate Dinner',
  'Ingredients for that menu',
  'Setup, service and clear-down',
  'Dietary needs confirmed before the night, including halal',
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: PACKAGE_HUB_SEO.h1,
      serviceType: 'Catering packages',
      provider: { '@id': 'https://www.mychef.ae/#organization' },
      areaServed: { '@type': 'City', name: 'Dubai', '@id': 'https://www.wikidata.org/wiki/Q612' },
      description: PACKAGE_HUB_SEO.description,
      url: `https://www.mychef.ae${PATH}`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: PACKAGE_HUB_SEO.h1,
        itemListElement: PRIMARY_PACKAGES.map((pkg) => ({
          '@type': 'Offer',
          name: pkg.title,
          description: pkg.description,
          url: `https://www.mychef.ae${pkg.href}`,
          price: pkg.price.replace(/,/g, ''),
          priceCurrency: 'AED',
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Catering packages', item: `https://www.mychef.ae${PATH}` },
      ],
    },
  ],
}

export default function CateringPackages() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title={PACKAGE_HUB_SEO.title}
        description={PACKAGE_HUB_SEO.description}
        canonicalPath={PATH}
        ogImage={HERO}
        hideSiteName
        preloadHero={HERO}
        schema={schema}
      />

      <PageHero
        title={PACKAGE_HUB_SEO.h1}
        subtitle="Catering packages Dubai hosts use when they want a starting figure before the menu is written. Date Night, Family Feast, Birthday and Corporate Dinner each publish a typical guest count and what the chef and service team do on the night."
        image={HERO}
        imageAlt="A private chef dinner table in a Dubai home, service in the background. Experience concept shown."
        imageWidth={1344}
        imageHeight={752}
        align="left"
        cta={{ label: 'Get a catering package quote', href: CATERING_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Catering packages' }]}
        minHeight="full"
        overlay="dark"
      >
        <p className="mt-5 font-inter text-body-sm text-white/70 max-w-[58ch]">
          Share the date, guest count and area. We typically reply within 15 minutes during business hours.
        </p>
      </PageHero>
      <TrustSignalStrip />

      <Section tone="ivory" rhythm="connected">
        <Container>
          <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-4">Also in this silo</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {PACKAGE_SIBLING_LINKS.map((item) => (
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
            This page owns the published packages. They sit inside{' '}
            <Link to={PACKAGE_UPLINK.href} className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Catering Dubai
            </Link>
            — the hub for food-only through to full event support. A standing household chef belongs on{' '}
            <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Private chef
            </Link>
            .
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container>
          <SectionLabel>THE FOUR PACKAGES</SectionLabel>
          <DisplayHeading className="text-black mb-5 max-w-[22ch]">
            Four catering packages Dubai actually publishes
          </DisplayHeading>
          <BodyCopy className="mb-12 max-w-[62ch]">
            These are starting points, not sealed boxes. Headcount, menu and venue move the quote. The number on the
            card is the published floor for that typical table.
          </BodyCopy>
          <div className="grid gap-6 md:grid-cols-2">
            {PRIMARY_PACKAGES.map((pkg) => (
              <article key={pkg.href} className="flex flex-col border border-gray-200 bg-cream p-6 md:p-8">
                <h3 className="font-playfair text-h3 text-black">{pkg.title}</h3>
                <p className="mt-2 font-inter text-body-sm text-gray-500">
                  {pkg.guests} guests · from AED {pkg.price} · {pkg.perPerson} per person
                </p>
                <p className="mt-4 flex-1 font-inter text-body text-gray-600 leading-relaxed">{pkg.description}</p>
                <p className="mt-4 font-inter text-body-sm text-gray-500 leading-relaxed">{pkg.included}</p>
                <Link
                  to={pkg.href}
                  className="mt-6 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
                >
                  View package
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </article>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {PACKAGE_FEATURED_EXTRAS.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="font-inter text-body-sm text-gray-600 underline decoration-gold/40 underline-offset-4 hover:text-gold-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <SectionLabel>What sits inside the number</SectionLabel>
              <DisplayHeading className="text-black mb-6">What the starting price includes</DisplayHeading>
              <ul className="space-y-4">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-gold flex-shrink-0 mt-1" aria-hidden />
                    <span className="font-inter text-body text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <BodyCopy className="mb-4">
                Birthday includes a cake option. Corporate Dinner includes a VAT invoice. Drinks, rentals and extra
                stations are quoted separately on the package page.
              </BodyCopy>
              <BodyCopy>
                People looking for an all inclusive catering package in Dubai still need the quote to say whether
                drinks, rentals and VAT sit inside the number. On these four, the chef, menu, ingredients, service,
                setup and clear-down are in the starting figure.
              </BodyCopy>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>How the figure is built</SectionLabel>
          <DisplayHeading className="text-black mb-6">How the quote moves from the published figure</DisplayHeading>
          <BodyCopy className="mb-4">
            The catering packages Dubai price on each card is the starting total for that typical guest count. Catering
            package cost per person in Dubai is that total divided by the table: AED 600 for two on Date Night, about
            AED 300–450 on the larger dinners.
          </BodyCopy>
          <BodyCopy className="mb-4">
            The best catering packages Dubai hosts actually use are the ones that match the table — guest count and
            service — not a ranking.
          </BodyCopy>
          <BodyCopy className="mb-4">
            Date Night and Family Feast can be written as halal catering packages in Dubai. The starting price does not
            change because the kitchen cooks to that brief.
          </BodyCopy>
          <BodyCopy>
            5% VAT is shown on the proposal. Per-head format rates for buffets and drop-off sit on{' '}
            <Link to="/dubai-catering-prices-guide" className="text-gold-ink underline underline-offset-4 hover:text-gold">
              Catering prices
            </Link>
            .
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container className="max-w-[800px]">
          <SectionLabel>If you already know the occasion</SectionLabel>
          <DisplayHeading className="text-black mb-8">Point us at the table. We will name the package.</DisplayHeading>
          <PackageSelector />
        </Container>
      </Section>

      <Section tone="white" rhythm="connected">
        <Container>
          <SectionLabel>Where we serve</SectionLabel>
          <DisplayHeading className="text-black mb-6">The same packages, wherever you are hosting</DisplayHeading>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {PACKAGE_LOCATION_LINKS.map((item) => (
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

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">Tell us the table</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date, guest count and area is enough to start</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            Choose a published package or send the brief. We typically reply within 15 minutes during business hours.
          </p>
          <CTAGroup>
            <Link to={CATERING_INQUIRY_HREF} className="btn-primary">
              Get a catering package quote
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Phone size={16} className="mr-2" aria-hidden />
              Chat on WhatsApp
            </a>
          </CTAGroup>
        </Container>
      </Section>
    </div>
  )
}

function PackageSelector() {
  const [occasion, setOccasion] = useState('')
  const [guests, setGuests] = useState('')

  const recommendation = PRIMARY_PACKAGES.find((pkg) => pkg.occasion === occasion) ?? null
  const whatsappLink = `https://wa.me/${CATERING_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi myCHEF Dubai, I'm looking for a catering package. Occasion: ${occasion || 'not specified'}, Guests: ${guests || 'not specified'} (via mychef.ae/catering-packages-dubai)`,
  )}`

  return (
    <div className="bg-white p-6 md:p-8 border border-gray-200">
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="occasion" className="block font-inter text-body-sm text-gray-600 mb-2">
            Occasion
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            className="w-full bg-cream border border-gray-200 p-3 font-inter text-body text-black focus:outline-none focus:border-gold"
          >
            <option value="">Select an occasion</option>
            <option value="date-night">Date Night</option>
            <option value="family-dinner">Family Dinner</option>
            <option value="birthday">Birthday</option>
            <option value="corporate">Corporate Dinner</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label htmlFor="guests" className="block font-inter text-body-sm text-gray-600 mb-2">
            Number of guests
          </label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-cream border border-gray-200 p-3 font-inter text-body text-black focus:outline-none focus:border-gold"
          >
            <option value="">Select guest count</option>
            <option value="2">2</option>
            <option value="4-6">4–6</option>
            <option value="8-12">8–12</option>
            <option value="10-15">10–15</option>
            <option value="20+">20+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
      </div>

      {recommendation && (
        <div className="bg-black p-6 mb-6">
          <p className="font-inter text-caption text-gold uppercase tracking-wider mb-2">Published package</p>
          <h3 className="font-playfair text-h3 text-white mb-2">{recommendation.title}</h3>
          <p className="font-inter text-body text-gray-400 mb-1">{recommendation.description}</p>
          <p className="font-inter text-body text-gray-400 mb-4">
            {recommendation.guests} guests · from AED {recommendation.price}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to={recommendation.href} className="btn-primary text-center text-sm">
              View package
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center text-sm inline-flex items-center justify-center gap-2"
            >
              <Phone size={14} aria-hidden />
              Request on WhatsApp
            </a>
          </div>
        </div>
      )}

      {!recommendation && occasion === 'other' && (
        <div className="bg-black p-6 mb-6">
          <p className="font-inter text-body text-gray-300 mb-4">
            Send the date, guest count and what you are hosting. We will say whether one of the four packages fits, or
            quote the night from the same kitchen.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm">
            <Phone size={14} aria-hidden />
            Chat on WhatsApp
          </a>
        </div>
      )}

      <p className="font-inter text-body-sm text-gray-500 text-center">
        Not sure?{' '}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gold-ink hover:underline">
          Ask on WhatsApp
        </a>
        .
      </p>
    </div>
  )
}
