import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /ramadan-catering-dubai
//     primary:     "ramadan catering dubai"
//     subkeywords: "ramadan catering dubai price" · "ramadan catering cost per person dubai" · "best ramadan catering dubai" · "ramadan catering packages dubai" · "ramadan catering menu dubai" · "ramadan majlis catering dubai" · "ramadan buffet catering" · "ramadan iftar buffet dubai price"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'
import {
  Moon,
  Sunrise,
  Building,
  Home,
  Users,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import LocationStrip from '../components/LocationStrip'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { eventSchema } from '../utils/schema'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Ramadan catering in Dubai (via mychef.ae/ramadan-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const ramadanFormats = [
  {
    icon: Moon,
    title: 'Iftar catering',
    description: 'Dates, soup, Arabic mains and grills, timed to Maghrib at the address you give us.',
    link: '/iftar-catering-dubai',
  },
  {
    icon: Sunrise,
    title: 'Suhoor catering',
    description: 'A quieter pre-dawn sitting: light plates or hot dishes, served before Fajr.',
    link: '/ramadan-catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate iftar',
    description: 'An office or client iftar with a clock: buffet or plated, packed before the next slot.',
    link: '/corporate',
  },
  {
    icon: Home,
    title: 'Home and majlis iftar',
    description: 'On-site cooking and service in the kitchen or majlis you already have.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Large gatherings',
    description: 'Community and charity iftars. Guest count and holding decide the crew.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa Ramadan service',
    description: 'Setup, cooking, service and pack-down at a villa you control.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Iftar and suhoor menus', description: 'Two different sittings. The clock is Maghrib or Fajr, not a dinner slot.' },
  { title: 'Arabic dishes', description: 'Mezze, soups, grills and slow-cooked mains written for this table.' },
  { title: 'Halal ingredients', description: 'Halal sourcing is the default.' },
  { title: 'Dates and staples', description: 'Dates, laban and the opening plates named in the menu draft.' },
  { title: 'Buffet or plated', description: 'A maintained spread, family-style platters, or courses at the table.' },
  { title: 'Staff', description: 'Waiters sized to the home, majlis or hall you have booked.' },
  { title: 'Timing around prayer', description: 'Food hot at Maghrib. Suhoor served quietly before Fajr.' },
  { title: 'Setup and pack-down', description: 'We arrive, serve and leave the kitchen as we found it.' },
]

const useCases = [
  {
    title: 'Home and majlis iftar',
    description: 'Family iftar at your address. You welcome guests. We cook and clear.',
  },
  {
    title: 'Corporate iftar functions',
    description: 'Offices, clients and teams. Buffet or plated, timed to Maghrib, then a room that has to work again.',
  },
  {
    title: 'Suhoor gatherings',
    description: 'A quieter sitting before Fajr: pastries, eggs, foul, shakshuka or grills, served without a party volume.',
  },
  {
    title: 'Large and community evenings',
    description: 'Charity and community iftars. Guest count and holding decide the crew. No chef is guaranteed by name.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Ramadan iftar catering event in Dubai' },
  { src: '/menu-meat.webp', alt: 'Traditional grilled meats for iftar in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Arabic appetizers and mezze for Ramadan' },
  { src: '/service-villa.webp', alt: 'Villa iftar catering styling in Dubai' },
  { src: '/service-catering.webp', alt: 'Ramadan buffet catering spread' },
  { src: '/menu-dessert.webp', alt: 'Ramadan sweets and desserts in Dubai' },
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
    q: 'Do you cater both iftar and suhoor during Ramadan?',
    a: 'Yes. Iftar at Maghrib and suhoor before Fajr. We can quote one sitting or both. Suhoor as a standalone search sits on this Ramadan hub.',
  },
  {
    q: 'Is all your Ramadan catering halal?',
    a: 'Yes. Halal sourcing is the default on iftar, suhoor and Ramadan menus.',
  },
  {
    q: 'Can you cater corporate iftar functions?',
    a: 'Yes. Buffet or plated, timed to Maghrib, then pack-down. Access times belong in the brief.',
  },
  {
    q: 'Do you handle home and majlis gatherings?',
    a: 'Yes. We cook at your home or majlis. Staffed bookings include setup, service and pack-down.',
  },
  {
    q: 'How is service timed around prayer?',
    a: 'Iftar is hot at Maghrib. Suhoor is served quietly before Fajr. The running order is written into the quote.',
  },
  {
    q: 'How far in advance should I book Ramadan catering?',
    a: 'Six to eight weeks is the usual window. Corporate iftars and larger gatherings book earlier.',
  },
]

const relatedServices = [
  {
    title: 'Iftar Catering',
    description: 'The Maghrib sitting: dates, soup, grills and mains.',
    image: '/service-events.webp',
    link: '/iftar-catering-dubai',
  },
  {
    title: 'Suhoor Catering',
    description: 'The pre-dawn sitting. Quoted on this Ramadan hub.',
    image: '/menu-appetizer.webp',
    link: '/ramadan-catering-dubai',
  },
  {
    title: 'Eid Catering',
    description: 'The sitting after the month: ouzi, grills and sweets.',
    image: '/menu-meat.webp',
    link: '/eid-catering-dubai',
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
  name: 'Ramadan Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Ramadan Catering Dubai', item: 'https://www.mychef.ae/ramadan-catering-dubai' },
  ],
}

const ramadanEventSchema = eventSchema(
  'Ramadan Catering Dubai',
  'Halal iftar, suhoor, and private chef catering throughout Ramadan in Dubai for homes, majlis, villas, and corporate gatherings.',
  undefined,
  undefined,
  'Dubai',
  '/ramadan-catering-dubai',
)

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, ramadanEventSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Ramadan quote in Dubai. Date: __ Guests: __ Area: __"
export default function RamadanCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ram-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ram-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ram-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ram-fmt-card', {
      scrollTrigger: { trigger: '.ram-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ram-uc-item', {
      scrollTrigger: { trigger: '.ram-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ram-inc-item', {
      scrollTrigger: { trigger: '.ram-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ram-gallery-img', {
      scrollTrigger: { trigger: '.ram-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.ram-faq-item', {
      scrollTrigger: { trigger: '.ram-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ram-loc-item', {
      scrollTrigger: { trigger: '.ram-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.ram-rel-card', {
      scrollTrigger: { trigger: '.ram-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ram-cta', {
      scrollTrigger: { trigger: '.ram-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Ramadan Catering Dubai | myCHEF"
        description="Ramadan catering Dubai for iftar and suhoor at home, majlis or office. Halal menus, timed to prayer. Buffet from AED 120. Itemised quote."
        canonicalPath="/ramadan-catering-dubai"
        ogImage="/service-events.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <NonCateringVisual><section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/ramadan-iftar-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ram-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Ramadan Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ram-hero-h1">
            Ramadan Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ram-hero-sub">
            Ramadan catering in Dubai, with halal iftar and suhoor menus for homes, majlis gatherings and offices. Food and service are planned around prayer times, your guests and the setting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 ram-hero-cta">Secure My Ramadan Date</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ram-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section></NonCateringVisual>

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Urgency Banner ═══════════════ */}
      <section className="bg-gold py-4">
        <div className="container-custom text-center">
          <p className="font-inter text-sm font-medium text-black">
            Book early. Ramadan dates fill. Iftar and suhoor slots are limited during the month.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">THE HOLY MONTH IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Ramadan catering Dubai, timed to Maghrib and Fajr
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Ramadan catering in Dubai brings together iftar at Maghrib and suhoor before Fajr, with the menu and service timed accordingly. Choose dates, soups, main dishes and sweets for your home, majlis, office or villa, with halal requirements confirmed during planning.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A staffed buffet starts from AED 120 per person. Live stations from AED 150. Drop-off from AED 90. All before 5% VAT. No chef is guaranteed by name. Dietary notes go into the first draft.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            The Maghrib sitting is owned in more detail on <Link to="/iftar-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">iftar catering</Link>. Suhoor is quoted on this hub. Eid after the month sits on <Link to="/eid-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Eid feasts</Link>. The season sits on the <Link to="/festive-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">festive catering Dubai</Link> calendar. Book six to eight weeks ahead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">RAMADAN FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Iftar and suhoor formats for your gathering
            </h2>
          </div>

          <div className="ram-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ramadanFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="ram-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              Home, majlis, office, community hall
            </h2>
          </div>

          <div className="ram-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="ram-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What a staffed Ramadan service includes
          </h2>

          <div className="ram-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="ram-inc-item flex gap-3 opacity-0 -translate-x-5">
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
      <NonCateringVisual><section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            How Ramadan catering looks in Dubai
          </h2>

          <div className="ram-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="ram-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section></NonCateringVisual>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Questions before you book
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

          <div className="ram-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="ram-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="ram-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ram-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <NonCateringVisual><div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div></NonCateringVisual>
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

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Related Guides</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            Ramadan Catering Guide,
            {' '}see the latest{' '}
            Ramadan iftar catering trends for 2026,
            {' '}or browse dedicated{' '}
            <Link to="/iftar-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">iftar</Link>{' '}
            and{' '}
            <Link to="/ramadan-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">suhoor catering</Link>.
          </p>
        </div>
      </section>

      <LocationStrip title="Ramadan catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ram-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send iftar or suhoor, the date and the address
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us Maghrib or Fajr, guest count and whether it is home, majlis or office. We send an itemised Ramadan catering Dubai quote. Book six to eight weeks ahead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Secure My Ramadan Date</Link>
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
