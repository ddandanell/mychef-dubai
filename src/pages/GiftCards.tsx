// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /gift-cards
//     primary:     none (untargeted by decision)
//     subkeywords: none
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
  CTAGroup,
} from '../components/system'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { EXPERIENCES_INQUIRY_HREF, EXPERIENCES_PATHS, EXPERIENCES_WHATSAPP_LINK } from '@/content/experiencesCluster'

const WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like to book an evening in someone else's name (via mychef.ae/gift-cards)"

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Book the evening in their name',
      description:
        'myCHEF does not issue stored-value gift cards. We can book a private dinner in Dubai in someone else’s name, on a date they choose.',
      url: 'https://www.mychef.ae/gift-cards',
      publisher: { '@id': 'https://www.mychef.ae/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
        { '@type': 'ListItem', position: 2, name: 'Dining experiences', item: 'https://www.mychef.ae/luxury-dining-experiences' },
        { '@type': 'ListItem', position: 3, name: 'Book an evening in their name', item: 'https://www.mychef.ae/gift-cards' },
      ],
    },
  ],
}

const nextSteps = [
  {
    title: 'Romantic dinner',
    body: 'Two people, one table, a chef in the kitchen.',
    href: EXPERIENCES_PATHS.romantic,
    linkLabel: 'Romantic dinner in Dubai',
  },
  {
    title: 'Private chef',
    body: 'A chef cooking in their home when the evening is the household, not a gathering.',
    href: '/private-chef-dubai',
    linkLabel: 'Private chef services in Dubai',
  },
  {
    title: 'Dining experiences',
    body: 'Tasting menus, cooking classes, desert tables — pick the night, then we book it in their name.',
    href: EXPERIENCES_PATHS.hub,
    linkLabel: 'Private dining experience in Dubai',
  },
] as const

export default function GiftCards() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)

  return (
    <div>
      <SEO
        title="Book the Evening in Their Name | myCHEF"
        description="myCHEF does not issue stored-value gift cards. We can book a private dinner in Dubai in someone else’s name, on a date they choose."
        canonicalPath="/gift-cards"
        ogImage="/images/gift-cards-hero.webp"
        hideSiteName
        noindex
        preloadHero="/images/gift-cards-hero.webp"
        schema={schema}
      />

      <PageHero
        eyebrow="Dining experiences"
        title="We book the evening in their name"
        subtitle="myCHEF does not issue stored-value gift cards, vouchers or a balance you can spend later. What we can do is take the booking for a private dinner, a tasting menu or a cooking class, hold the date, and let them choose the menu."
        image="/images/gift-cards-hero.webp"
        imageAlt="Guests at a chef-led dinner at home in Dubai. Experience concept shown."
        align="left"
        cta={{ label: 'Book an evening in their name', href: EXPERIENCES_INQUIRY_HREF }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: EXPERIENCES_WHATSAPP_LINK, external: true }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Dining experiences', href: EXPERIENCES_PATHS.hub },
          { label: 'Book an evening in their name' },
        ]}
        minHeight="full"
        overlay="dark"
      />
      <TrustSignalStrip />

      <Section tone="white" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel>WHAT WE CAN ISSUE, AND WHAT WE CANNOT</SectionLabel>
          <DisplayHeading className="text-black mb-6">There is no card. There is a booking.</DisplayHeading>
          <BodyCopy className="mb-5">
            A stored-value gift card would be a product we do not currently sell. Pages that pretend otherwise are a trust problem. This one does not.
          </BodyCopy>
          <BodyCopy className="mb-5">
            If you want to give someone an evening, tell us who it is for, a date range that works, and roughly what the night should be — two people at home, a small tasting, a cooking class. We confirm the booking in their name. They still choose the menu.
          </BodyCopy>
          <BodyCopy>
            That is the whole product. No digital voucher, no printed card, no 12-month balance, no corporate bulk SKU.
          </BodyCopy>
        </Container>
      </Section>

      <Section tone="ivory" rhythm="chapter">
        <Container>
          <SectionLabel>WHERE TO SEND THEM</SectionLabel>
          <DisplayHeading className="text-black mb-12">Pick the night, then we hold the date</DisplayHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((item) => (
              <article key={item.href} className="border-t border-gray-200 pt-6">
                <h3 className="font-playfair text-h4 text-black mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-600 leading-relaxed mb-4">{item.body}</p>
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

      <Section tone="dark" rhythm="chapter">
        <Container className="max-w-3xl">
          <SectionLabel tone="dark">START WITH THE PERSON, NOT A SKU</SectionLabel>
          <DisplayHeading className="text-white mb-6">Date range, guest count, what the night should be</DisplayHeading>
          <p className="font-inter text-body text-gray-300 leading-relaxed mb-8 max-w-[58ch]">
            We typically reply within 15 minutes during business hours. There is nothing to buy until a date is held.
          </p>
          <CTAGroup>
            <Link to={EXPERIENCES_INQUIRY_HREF} className="btn-primary">
              Book an evening in their name
            </Link>
            <a
              href={EXPERIENCES_WHATSAPP_LINK}
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
