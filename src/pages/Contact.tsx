import { useRef } from 'react'
import { Link } from 'react-router'
import { Phone, Mail, Clock, ChevronRight, Check, MapPin, MessageCircle, ClipboardList, ArrowRight, Headset } from 'lucide-react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import { BodyCopy, Container, DisplayHeading, Section, SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to get in touch (via mychef.ae/contact)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
const INQUIRY_LINK = '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=contact'

// Three real ways in. Each panel is one tap target; the note says what the channel is best for.
const channels = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    detail: '+971 55 174 4849',
    note: 'Fastest. We typically reply within 15 minutes during business hours.',
    action: 'Open WhatsApp',
    href: WHATSAPP_LINK,
    kind: 'external' as const,
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'info@mychef.id',
    note: 'For written briefs, documents and anything that needs a longer answer.',
    action: 'Send an email',
    href: 'mailto:info@mychef.id',
    kind: 'mailto' as const,
  },
  {
    icon: ClipboardList,
    title: 'Quote request',
    detail: 'Menu ideas and an indicative price',
    note: 'Tell us what you are planning. A coordinator reviews it and replies with a tailored proposal.',
    action: 'Request a quote',
    href: INQUIRY_LINK,
    kind: 'internal' as const,
  },
]

const nextSteps = [
  { step: 'You write', desc: 'WhatsApp, email or a quote request. Say what the occasion is, or what the household needs. A rough idea is enough.' },
  { step: 'We ask what changes the price', desc: 'Date, guest count, location, dietary needs and how often. Prices and hours are agreed before any work starts.' },
  { step: 'A vetted chef within 24 hours', desc: 'We come back with a chef we have checked and a proposal you can say yes or no to.' },
]

const included: { text: string; href?: string }[] = [
  { text: 'Menus designed around each client' },
  { text: 'Ingredients sourced daily' },
  { text: 'Chefs vetted before they are put forward' },
  { text: 'Setup and cleanup included with full service' },
  { text: 'Every community in Dubai' },
  { text: 'Discretion inside the home' },
  { text: 'Booking protection and insurance', href: '/booking-protection-insurance' },
]

// Communities that have their own page under /locations/:slug (see src/data/locations.ts).
// Anything else renders as plain text instead of linking to "Location Not Found".
const LOCATION_PAGES = new Set([
  'palm-jumeirah', 'bluewaters-island', 'dubai-marina', 'jbr', 'jlt', 'jvc', 'downtown-dubai', 'difc',
  'business-bay', 'emirates-hills', 'dubai-hills', 'arabian-ranches', 'jumeirah', 'umm-suqeim', 'al-barsha',
])
const toLocationSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-')

const serviceAreas = [
  'Palm Jumeirah',
  'Downtown Dubai',
  'Dubai Marina',
  'Emirates Hills',
  'JBR',
  'DIFC',
  'Business Bay',
  'Jumeirah',
  'Arabian Ranches',
  'Dubai Hills',
  'Bluewaters Island',
  'Al Barari',
  'Jumeirah Islands',
  'Jumeirah Golf Estates',
  'Meydan',
  'Dubai Creek',
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
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.contact-hero-eyebrow, .contact-hero-h1, .contact-hero-sub, .contact-card, .contact-cta-left, .contact-cta-right, .service-area-tag, .contact-final-cta', {
          opacity: 1, y: 0, x: 0, scale: 1,
        })
        return
      }

      gsap.from('.contact-hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
      gsap.from('.contact-hero-h1', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.contact-hero-sub', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.5 })

      gsap.from('.contact-card', {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cards-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.contact-cta-left', {
        opacity: 0, x: -30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-cta-section', start: 'top 85%', toggleActions: 'play none none none' },
      })
      gsap.from('.contact-cta-right', {
        opacity: 0, x: 30, duration: 0.8, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.contact-cta-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.service-area-tag', {
        opacity: 0, scale: 0.9, duration: 0.5, stagger: 0.04, ease: 'power3.out',
        scrollTrigger: { trigger: '.service-areas-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.contact-final-cta', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-final-section', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Contact Us"
        description="Contact myCHEF Dubai on WhatsApp, email or the quote form for a private chef or catering. We typically reply within 15 minutes during business hours."
        canonicalPath="/contact"
        ogImage="/images/contact-hero.webp"
        preloadHero="/images/mychef-dubai-contact-support-hero.webp"
        schema={breadcrumbSchema}
      />

      {/* Section 1: Hero */}
      <section className="relative min-h-[85svh] md:min-h-[max(700px,100vh)] flex items-center bg-black overflow-hidden -mt-16">
        <img
          src="/images/mychef-dubai-contact-support-hero.webp"
          alt="A myCHEF team member in a headset talking with a client on a video call at a warm office desk with the myCHEF logo behind"
          width={1706}
          height={922}
          className="absolute inset-0 w-full h-full object-cover object-[50%_42%] md:object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Standard hero scrim — identical to every other hero (see PageHero HERO_SCRIM) */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/45" />
        <div className="relative z-10 container-custom flex flex-col items-center text-center md:items-start md:text-left pt-28 pb-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-inter text-body-sm text-gray-300">
              <li><Link to="/" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Home</Link></li>
              <li><ChevronRight size={14} className="text-gray-500" aria-hidden="true" /></li>
              <li className="text-gold">Contact</li>
            </ol>
          </nav>
          <p className="contact-hero-eyebrow font-inter text-caption font-medium uppercase tracking-[0.14em] text-gold mb-4">Contact myCHEF</p>
          <h1 className="contact-hero-h1 hero-title text-white mb-6 max-w-[16ch]">
            Tell us what you need. We’ll take it from here.
          </h1>
          <p className="contact-hero-sub font-inter text-body-lg text-white/85 max-w-[48ch] leading-relaxed mb-8">
            A dinner, an ongoing chef, a large event, or something you have not quite figured out yet. Talk to someone who understands the food and the operation behind it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <Link to={INQUIRY_LINK} className="btn-primary text-center">
              Start a Conversation
            </Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center">
              WhatsApp Us
            </a>
          </div>
          <p className="mt-6 font-inter text-body-sm text-white/70 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
            Real people. Real answers. No call centre.
          </p>
        </div>
      </section>

      <TrustSignalStrip />

      {/* Section 2: Channels — three real options; the whole panel is the tap target */}
      <Section tone="ivory">
        <Container>
          <div className="max-w-[720px] mb-10 md:mb-12">
            <SectionLabel icon={Headset}>Ways to reach us</SectionLabel>
            <DisplayHeading size="h2" className="text-black">Three ways in. Pick the one that fits the question.</DisplayHeading>
          </div>
          <ul className="contact-cards-grid grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {channels.map((c) => {
              const panelClass = 'group flex h-full flex-col p-6 lg:p-8 bg-white transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold'
              const inner = (
                <>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/35 text-gold-ink transition-colors group-hover:border-gold-ink">
                      <c.icon size={18} strokeWidth={1.5} aria-hidden />
                    </span>
                    <h3 className="font-playfair text-h4 text-black">{c.title}</h3>
                  </div>
                  <p className="font-inter text-body text-black">{c.detail}</p>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mt-2">{c.note}</p>
                  <span className="mt-auto pt-6 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink transition-colors group-hover:text-gold">
                    {c.action} <ArrowRight size={14} aria-hidden />
                  </span>
                </>
              )
              return (
                <li key={c.title} className="contact-card bg-white">
                  {c.kind === 'internal' ? (
                    <Link to={c.href} className={panelClass}>{inner}</Link>
                  ) : (
                    <a
                      href={c.href}
                      className={panelClass}
                      {...(c.kind === 'external' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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

      {/* Section 3: What happens next — inline chain 01 → 02 → 03, plus what every booking includes */}
      <section className="contact-cta-section bg-white section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-y-14 lg:gap-x-16">
            {/* Left column — the sequence, WhatsApp first */}
            <div className="contact-cta-left">
              <SectionLabel icon={Clock}>The next 24 hours</SectionLabel>
              <DisplayHeading size="h2" className="text-black mb-5">What happens after you write.</DisplayHeading>
              <BodyCopy muted className="mb-10">
                No call centre. A coordinator reads it, asks what is missing and comes back with a proposal.
              </BodyCopy>

              <ol className="grid sm:grid-cols-3 gap-x-6 gap-y-8 border-t border-gray-200 pt-8">
                {nextSteps.map((s, i) => (
                  <li key={s.step} className="max-sm:border-l max-sm:border-gold/30 max-sm:pl-5">
                    <p className="flex items-center gap-3 mb-3 font-playfair text-h4 text-gold-ink leading-none select-none">
                      <span>{String(i + 1).padStart(2, '0')}</span>
                      {i < nextSteps.length - 1 && <ArrowRight size={16} className="hidden sm:inline-block text-gold/70" aria-hidden />}
                    </p>
                    <h3 className="font-inter text-body font-medium text-black mb-2">{s.step}</h3>
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 focus-visible:ring-offset-white"
                >
                  <Phone size={18} aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>

              <p className="font-inter text-body-sm text-gray-500 mt-6">
                Prefer email?{' '}
                <a href="mailto:info@mychef.id" className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors">
                  info@mychef.id
                </a>
              </p>
            </div>

            {/* Right column — what every booking includes (a list, not a box) */}
            <aside className="contact-cta-right lg:border-l lg:border-gray-200 lg:pl-12">
              <h3 className="font-playfair text-fluid-h3 text-black mb-6" style={{ lineHeight: '1.2' }}>
                What comes with every booking
              </h3>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <Check size={16} className="text-gold-ink mt-1 flex-shrink-0" aria-hidden="true" />
                    {item.href ? (
                      <Link to={item.href} className="font-inter text-body text-gray-600 underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-ink hover:decoration-gold-ink">
                        {item.text}
                      </Link>
                    ) : (
                      <span className="font-inter text-body text-gray-600">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                <p className="flex items-center gap-2 font-inter text-body-sm text-gray-500">
                  <MapPin size={16} className="text-gold-ink flex-shrink-0" aria-hidden="true" />
                  Serving all of Dubai
                </p>
                <p className="font-inter text-body-sm text-gray-500">
                  Loved your experience?{' '}
                  <Link to="/review" className="text-gold-ink hover:underline">
                    Leave a review and earn AED 50 credit
                  </Link>
                  .
                </p>
                <p className="font-inter text-body-sm text-gray-500">
                  Own a venue?{' '}
                  <Link to="/partner-with-us" className="text-gold-ink hover:underline">
                    Partner with us
                  </Link>
                  .
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Section 4: Service Areas — linked where a location page exists, plain text where not */}
      <section className="service-areas-section bg-charcoal section-padding">
        <Container>
          <div className="max-w-[720px] mx-auto text-center mb-10">
            <SectionLabel align="center" tone="dark" icon={MapPin}>Coverage</SectionLabel>
            <DisplayHeading size="h2" className="text-white">We come to you. Name the community.</DisplayHeading>
            <BodyCopy tone="dark" className="mt-4 mx-auto">
              Linked communities have their own page. Not listed? Tell us the address — we serve all of Dubai.
            </BodyCopy>
          </div>
          <ul className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => {
              const slug = toLocationSlug(area)
              return (
                <li key={area} className="service-area-tag">
                  {LOCATION_PAGES.has(slug) ? (
                    <Link
                      to={`/locations/${slug}`}
                      className="inline-flex min-h-[44px] items-center px-4 font-inter text-body-sm text-gray-200 border border-gold/30 bg-charcoal-light transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                    >
                      {area}
                    </Link>
                  ) : (
                    <span className="inline-flex min-h-[44px] items-center px-4 font-inter text-body-sm text-gray-500 border border-white/10">
                      {area}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
          <p className="mt-8 text-center">
            <Link to="/locations" className="inline-flex min-h-[44px] items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold hover:text-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm">
              All location pages <ArrowRight size={14} aria-hidden />
            </Link>
          </p>
        </Container>
      </section>

      {/* Section 5: Final CTA */}
      <section className="contact-final-section bg-black py-20">
        <div className="contact-final-cta container-custom text-center">
          <DisplayHeading size="h3" className="text-white mb-4">One message is enough to start.</DisplayHeading>
          <BodyCopy tone="dark" className="mx-auto mb-8">
            Tell us the occasion, or the household and the week you need covered. We bring you a vetted chef within 24 hours, with the price agreed before anything is confirmed.
          </BodyCopy>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={INQUIRY_LINK}
              className="btn-primary focus-visible:ring-offset-black"
            >
              Request My Custom Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 focus-visible:ring-offset-black"
            >
              <Phone size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
