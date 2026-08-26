// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /contact
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { locationPath } from '@/data/locations'
import {
  ArrowRight,
  Building2,
  Check,
  ChefHat,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Newspaper,
  Phone,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import {
  BodyCopy,
  Container,
  DisplayHeading,
  Section,
  SectionLabel,
  SequenceRail,
} from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to get in touch (via mychef.ae/contact)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
const EMAIL = 'info@mychef.id'
const INQUIRY_LINK = '/inquiry'
const PRESS_MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent('Press enquiry — myCHEF Dubai')}`
const GENERAL_MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent('Contact — myCHEF Dubai')}`

const routes = [
  {
    icon: ChefHat,
    title: 'Private Chef & Household Service',
    body: 'For ongoing or part-time chef support at home.',
    cta: 'Plan your household service',
    href: '/private-chef-dubai',
    kind: 'internal' as const,
  },
  {
    icon: UtensilsCrossed,
    title: 'Catering & Events',
    body: 'For private events, corporate dining, villas and larger celebrations.',
    cta: 'Plan an event',
    href: '/catering-dubai',
    kind: 'internal' as const,
  },
  {
    icon: Handshake,
    title: 'Partnerships',
    body: 'For villas, hotels, concierge companies, event planners, yacht companies and hospitality partners.',
    cta: 'Partner with myCHEF',
    href: '/partner-with-us',
    kind: 'internal' as const,
  },
  {
    icon: Newspaper,
    title: 'Press & Media',
    body: 'For interviews, company information, imagery and media requests.',
    cta: 'Media enquiries',
    href: PRESS_MAIL,
    kind: 'mailto' as const,
  },
  {
    icon: Users,
    title: 'Chefs & Hospitality Professionals',
    body: 'For chefs and service professionals interested in working through myCHEF.',
    cta: 'Join our network',
    href: '/become-a-mychef',
    kind: 'internal' as const,
  },
  {
    icon: MessageCircle,
    title: 'General / Something Else',
    body: 'If it does not fit neatly into a box, send it here.',
    cta: 'Contact the team',
    href: WHATSAPP_LINK,
    kind: 'external' as const,
  },
]

const clientBrief = [
  'Date',
  'Location',
  'Number of guests',
  'Type of service',
  'Dietary requirements',
  'Anything unusual about the event or household',
]

const partnerExamples = [
  'Luxury villa managers',
  'Concierge companies',
  'Hotels and serviced residences',
  'Yacht operators',
  'Event planners',
  'Wedding planners',
  'Corporate event agencies',
  'Property managers',
  'Travel designers',
]

const enquirySteps = [
  'Tell us what you need',
  'We route it to the right person',
  'We clarify the important details',
  'You receive the next step in writing',
] as const

const featuredLocations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Jumeirah', slug: 'jumeirah' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.mychef.ae/contact' },
  ],
}

export default function Contact() {
  return (
    <div>
      <SEO
        title="Contact myCHEF Dubai — Enquiries"
        hideSiteName
        description="Contact myCHEF Dubai for a private chef, catering, partnership or press enquiry. WhatsApp is usually fastest. We typically reply within 15 minutes during business hours."
        canonicalPath="/contact"
        ogImage="/images/mychef-household-plan-consultation.webp"
        preloadHero="/images/mychef-household-plan-consultation.webp"
        schema={breadcrumbSchema}
      />

      <PageHero
        variant="quiet"
        eyebrow="Contact myCHEF"
        title="Whatever you are planning, start here."
        subtitle="Private chef service, catering, partnerships, press or something less ordinary. Tell us what you need and we will route it to the right person."
        image="/images/mychef-household-plan-consultation.webp"
        imageAlt="A household sitting with a myCHEF coordinator in a Dubai villa. Experience concept shown."
        imageWidth={1910}
        imageHeight={823}
        cta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        secondaryCta={{ label: 'Send an Email', href: GENERAL_MAIL, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        minHeight="tall"
        overlay="left"
        align="left"
        imagePosition="62% 48%"
      />

      <div className="bg-black">
        <TrustSignalStrip />
        <p className="container-custom pb-6 font-inter text-[12px] uppercase tracking-[0.12em] text-white/50 leading-relaxed">
          Dubai-based · Typical reply within 15 minutes · Vetted culinary network
        </p>
      </div>

      <Section tone="ivory">
        <Container>
          <div className="max-w-[760px] mb-10 md:mb-12">
            <SectionLabel>What are you contacting us about?</SectionLabel>
            <DisplayHeading size="h2" className="text-black mb-4">
              Who you should speak to depends on the job.
            </DisplayHeading>
            <BodyCopy muted>
              One inbox for everything is how messages get lost. Pick the path that matches what you need.
            </BodyCopy>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {routes.map((item) => {
              const panel =
                'group flex h-full flex-col p-6 lg:p-8 bg-white transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold'
              const inner = (
                <>
                  <span className="mb-5 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/35 text-gold-ink">
                    <item.icon size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <h3 className="font-playfair text-h4 text-black mb-2">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed flex-1">{item.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink group-hover:text-gold">
                    {item.cta} <ArrowRight size={14} aria-hidden />
                  </span>
                </>
              )
              return (
                <li key={item.title} className="bg-white">
                  {item.kind === 'internal' ? (
                    <Link to={item.href} className={panel}>{inner}</Link>
                  ) : (
                    <a
                      href={item.href}
                      className={panel}
                      {...(item.kind === 'external' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {inner}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionLabel>For clients</SectionLabel>
              <DisplayHeading size="h2" className="text-black mb-4">Planning a private chef or event?</DisplayHeading>
              <BodyCopy muted className="mb-8">
                Send the details below and the first reply is useful, not a request for more information.
              </BodyCopy>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {clientBrief.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-gold-ink mt-1 shrink-0" aria-hidden />
                    <span className="font-inter text-body text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-inter text-body text-gray-600 mb-6">WhatsApp is usually the fastest way to start.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2">
                  <Phone size={18} aria-hidden />
                  Chat on WhatsApp
                </a>
                <Link to={INQUIRY_LINK} className="btn-secondary text-center">Request a quote</Link>
              </div>
            </div>
            <div>
              <SectionLabel>How we handle your enquiry</SectionLabel>
              <DisplayHeading size="h2" className="text-black mb-8">One message. Then it is routed.</DisplayHeading>
              <SequenceRail steps={enquirySteps} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 lg:gap-16 items-center">
            <div>
              <SectionLabel tone="dark">For partners</SectionLabel>
              <DisplayHeading size="h2" className="text-white mb-4">We work behind other hospitality businesses too.</DisplayHeading>
              <BodyCopy tone="dark" className="mb-8">
                If your clients need chefs, catering or private dining in Dubai, we can work as an operating partner behind your service.
              </BodyCopy>
              <ul className="grid sm:grid-cols-2 gap-2 mb-10">
                {partnerExamples.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 shrink-0" aria-hidden />
                    <span className="font-inter text-body-sm text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/partner-with-us" className="btn-primary inline-flex">
                Discuss a partnership
              </Link>
            </div>
            <img
              src="/images/private-chef-dubai-manager.webp"
              alt="A myCHEF household manager coordinating service. Experience concept shown."
              width={1280}
              height={720}
              className="w-full aspect-[16/10] object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <SectionLabel>Press & media</SectionLabel>
              <DisplayHeading size="h2" className="text-black mb-4">Press, interviews & media</DisplayHeading>
              <BodyCopy muted className="mb-6">
                For company information, founder commentary, Dubai private-chef trends, hospitality insights, images or interview requests, contact our media team.
              </BodyCopy>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={PRESS_MAIL} className="btn-primary text-center">Media enquiries</a>
                <Link to="/press" className="btn-secondary text-center">Press kit & brand assets</Link>
              </div>
            </div>
            <div>
              <SectionLabel>Work with myCHEF</SectionLabel>
              <DisplayHeading size="h2" className="text-black mb-4">Are you a chef?</DisplayHeading>
              <BodyCopy muted className="mb-6">
                We work with professional chefs and hospitality specialists across different types of private service. Applications are reviewed separately from client enquiries.
              </BodyCopy>
              <Link to="/become-a-mychef" className="btn-primary inline-flex">
                Become a myCHEF chef
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="charcoal">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16">
            <div>
              <SectionLabel tone="dark" icon={Building2}>Company details</SectionLabel>
              <DisplayHeading size="h2" className="text-white mb-6">myCHEF Dubai</DisplayHeading>
              <p className="font-inter text-body text-white/85 leading-relaxed mb-2">Dubai, United Arab Emirates</p>
              <p className="font-inter text-body text-white/85 leading-relaxed mb-6">
                Customer-facing brand of Numini FZC. Registered at Business Centre, Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
              </p>
              <BodyCopy tone="dark">
                Services are provided through professional culinary partners and chefs operating under the applicable food-safety requirements. Independent, licensed culinary partners cook. myCHEF organises the match, the standard and the backup.
              </BodyCopy>
            </div>
            <div>
              <SectionLabel tone="dark" icon={MapPin}>Where we work</SectionLabel>
              <DisplayHeading size="h2" className="text-white mb-4">Across Dubai.</DisplayHeading>
              <BodyCopy tone="dark" className="mb-8">
                From Palm Jumeirah and Emirates Hills to Downtown, Dubai Marina and private residences across the city.
              </BodyCopy>
              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {featuredLocations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      to={locationPath(loc.slug)}
                      className="inline-flex min-h-[44px] items-center font-inter text-body text-white/80 hover:text-gold transition-colors"
                    >
                      {loc.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/locations"
                className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold hover:text-gold-light"
              >
                See all locations <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <div className="bg-black py-6">
        <TrustSignalStrip />
      </div>

      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden bg-black">
        <img
          src="/images/private-chef-dubai-cta.webp"
          alt="A Dubai villa kitchen at the end of service. Experience concept shown."
          width={1568}
          height={672}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="relative z-10 container-custom py-16 md:py-20">
          <SectionLabel tone="dark">Start</SectionLabel>
          <h2 className="font-playfair text-h2 text-white mb-4 max-w-[640px]">Tell us what you need. We will take it from there.</h2>
          <p className="font-inter text-body-lg text-white/85 max-w-[560px] mb-8 leading-relaxed">
            Private chef, event, partnership or press enquiry. Start with one message.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center justify-center gap-2">
              <Phone size={18} aria-hidden />
              WhatsApp myCHEF
            </a>
            <a href={GENERAL_MAIL} className="btn-secondary inline-flex items-center justify-center gap-2">
              <Mail size={18} aria-hidden />
              Email the team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
