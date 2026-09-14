import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'
import {
  Sunrise,
  Moon,
  Building,
  Home,
  Coffee,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { eventSchema } from '../utils/schema'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan suhoor catering in Dubai (via mychef.ae/suhoor-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const suhoorFormats = [
  {
    icon: Sunrise,
    title: 'Pre-dawn suhoor menus',
    description: 'Food for the hours before Fajr: dishes that hold, hydrating sides, served quietly.',
    link: '/ramadan-catering-dubai',
  },
  {
    icon: Home,
    title: 'Home and majlis suhoor',
    description: 'On-site cooking in your home or majlis. Quiet service. You host.',
    link: '/catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate suhoor',
    description: 'A late sitting for a team or night shift: buffet or plated, timed to your hours.',
    link: '/corporate',
  },
  {
    icon: Coffee,
    title: 'Light savoury and pastries',
    description: 'Pastries, eggs, labneh and fruit when the table wants a lighter pre-dawn meal.',
    link: '/arabic-catering-dubai',
  },
  {
    icon: Moon,
    title: 'Hot dishes',
    description: 'Foul, shakshuka, grills and slow-cooked plates when the table wants more.',
    link: '/arabic-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa suhoor service',
    description: 'Setup, cooking, service and pack-down at a villa you control, kept quiet.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Pre-dawn menus', description: 'Written for the hours before Fajr, not copied from an iftar buffet.' },
  { title: 'Hot and cold options', description: 'Pastries and fruit, or foul, shakshuka and grills, as the table wants.' },
  { title: 'Halal ingredients', description: 'Halal sourcing is the default.' },
  { title: 'Drinks', description: 'Laban, juice and water, named in the draft.' },
  { title: 'Quiet service', description: 'Staff who can work early hours without turning it into a party.' },
  { title: 'Buffet or plated', description: 'A maintained spread or plates, sized to the room.' },
  { title: 'Timing around Fajr', description: 'Ready late, cleared before the call to prayer.' },
  { title: 'Setup and pack-down', description: 'We arrive, serve and leave the kitchen as we found it.' },
]

const useCases = [
  {
    title: 'Home and majlis suhoor',
    description: 'Family suhoor at your address. You gather. We cook and clear before Fajr.',
  },
  {
    title: 'Corporate and night-shift suhoor',
    description: 'A team sitting timed to night hours. Buffet or plated, then pack-down.',
  },
  {
    title: 'Light pre-dawn spreads',
    description: 'Pastries, eggs, labneh and fruit when the table does not want a heavy plate.',
  },
  {
    title: 'Heartier suhoor',
    description: 'Foul, shakshuka and grills when the table wants more. Drawn from Arabic catering when that kitchen is the right match.',
  },
]

const galleryImages = [
  { src: '/menu-appetizer.webp', alt: 'Light suhoor savoury plates in Dubai' },
  { src: '/service-events.webp', alt: 'Late-night suhoor catering event in Dubai' },
  { src: '/menu-meat.webp', alt: 'Hot suhoor grilled dishes in Dubai' },
  { src: '/service-villa.webp', alt: 'Villa suhoor catering styling' },
  { src: '/service-catering.webp', alt: 'Suhoor buffet catering spread' },
  { src: '/menu-canapes.webp', alt: 'Suhoor pastries and finger food in Dubai' },
]

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'Jumeirah Islands', slug: 'jumeirah-islands' },
  { name: 'Al Barari', slug: 'al-barari' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim' },
  { name: 'Meydan', slug: 'meydan' },
  { name: 'Dubai Creek Harbour', slug: 'dubai-creek-harbour' },
]

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


const faqs = [
  {
    q: 'What is suhoor catering?',
    a: 'Suhoor catering Dubai is the pre-dawn meal before Fajr, cooked and served at your address. It is quieter than iftar. This URL redirects into the Ramadan hub, which owns the month.',
  },
  {
    q: 'Do you offer light and hearty suhoor options?',
    a: 'Yes. Pastries, eggs, labneh and fruit, or foul, shakshuka and grills. The table can hold both, labelled.',
  },
  {
    q: 'Is your suhoor catering halal?',
    a: 'Yes. Halal sourcing is the default.',
  },
  {
    q: 'Can you cater corporate and night-shift suhoor?',
    a: 'Yes. Buffet or plated, timed to the hours you give us.',
  },
  {
    q: 'How is suhoor service timed?',
    a: 'Ready in the late hours, cleared before Fajr. Staff work quietly.',
  },
  {
    q: 'How far in advance should I book suhoor catering?',
    a: 'Six to eight weeks is the usual window. Late-night staffing books earlier.',
  },
]

const relatedServices = [
  {
    title: 'Ramadan Catering',
    description: 'The month this suhoor sitting belongs to.',
    image: '/service-events.webp',
    link: '/ramadan-catering-dubai',
  },
  {
    title: 'Iftar Catering',
    description: 'The Maghrib sitting, if that is the brief instead.',
    image: '/menu-meat.webp',
    link: '/iftar-catering-dubai',
  },
  {
    title: 'Arabic Catering',
    description: 'Year-round Arabic menus, when the date is not Ramadan.',
    image: '/menu-appetizer.webp',
    link: '/arabic-catering-dubai',
  },
]

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Suhoor Catering Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Suhoor Catering Dubai', item: 'https://www.mychef.ae/suhoor-catering-dubai' },
  ],
}

const suhoorEventSchema = eventSchema(
  'Suhoor Catering Dubai',
  'Halal pre-dawn suhoor catering in Dubai for home, majlis, and corporate gatherings during Ramadan.',
  undefined,
  undefined,
  'Dubai',
  '/ramadan-catering-dubai',
)

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, suhoorEventSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Suhoor quote in Dubai. Date: __ Guests: __ Area: __"
export default function SuhoorCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.suh-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.suh-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.suh-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.suh-fmt-card', {
      scrollTrigger: { trigger: '.suh-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.suh-uc-item', {
      scrollTrigger: { trigger: '.suh-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.suh-inc-item', {
      scrollTrigger: { trigger: '.suh-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.suh-gallery-img', {
      scrollTrigger: { trigger: '.suh-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.suh-faq-item', {
      scrollTrigger: { trigger: '.suh-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.suh-loc-item', {
      scrollTrigger: { trigger: '.suh-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.suh-rel-card', {
      scrollTrigger: { trigger: '.suh-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.suh-cta', {
      scrollTrigger: { trigger: '.suh-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Suhoor Catering Dubai | myCHEF"
        description="Suhoor catering Dubai before Fajr at your home, majlis or office. Halal menus, quiet service. Quoted on the Ramadan hub. Itemised quote."
        canonicalPath="/ramadan-catering-dubai"
        ogImage="/menu-appetizer.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/eid-suhoor-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 suh-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Suhoor Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 suh-hero-h1">
            Suhoor Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 suh-hero-sub">
            Suhoor catering Dubai is the pre-dawn sitting before Fajr, at your home, majlis or office. Halal menus, quiet service, then pack-down.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 suh-hero-cta">Get a Suhoor Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 suh-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">THE PRE-DAWN MEAL IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Suhoor catering Dubai, before Fajr
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Suhoor catering Dubai is the pre-dawn meal at your home, majlis or office. Halal menus. Pastries and labneh, or foul, shakshuka and grills. We cook there. Service stays quiet. This URL redirects into Ramadan catering, which owns the month.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            A staffed buffet starts from AED 120 per person. Drop-off from AED 90. All before 5% VAT. Book through <Link to="/ramadan-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Ramadan catering in Dubai</Link>. Iftar is a different sitting on <Link to="/iftar-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">iftar catering</Link>. Year-round dishes sit on <Link to="/arabic-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Arabic catering</Link> and <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>. Book six to eight weeks ahead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">SUHOOR FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Built for the Hours Before Fajr
            </h2>
          </div>

          <div className="suh-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suhoorFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="suh-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Use Cases ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHERE WE SERVE</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Home, majlis, night shift
            </h2>
          </div>

          <div className="suh-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="suh-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What a staffed suhoor sitting includes
          </h2>

          <div className="suh-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="suh-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            How suhoor catering looks in Dubai
          </h2>

          <div className="suh-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="suh-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Suhoor Catering Questions
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="suh-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="suh-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="suh-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="suh-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-gray-400 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    {svc.title} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocationStrip title="Suhoor catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center suh-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the Fajr time, guest count and address
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us home, majlis or office, how many people and whether the table wants a light plate or a hot one. We send an itemised quote. Book six to eight weeks ahead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get a Suhoor Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
