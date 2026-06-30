import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Moon,
  Sunrise,
  Building,
  Home,
  Users,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Ramadan catering in Dubai (via mychef.ae/ramadan-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const ramadanFormats = [
  {
    icon: Moon,
    title: 'Iftar Catering',
    description: 'Generous iftar spreads to break the fast — dates, soups, traditional Arabic mains, and grilled dishes, served with warmth and care for your gathering.',
    link: '/iftar-catering-dubai',
  },
  {
    icon: Sunrise,
    title: 'Suhoor Catering',
    description: 'Late-night, pre-dawn suhoor menus designed to sustain the day ahead, from light savoury plates to comforting hot dishes and refreshing drinks.',
    link: '/suhoor-catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Iftar',
    description: 'Professional iftar functions for offices, clients, and teams across Dubai — buffet stations, plated service, and full coordination for the occasion.',
    link: '/corporate',
  },
  {
    icon: Home,
    title: 'Home & Majlis Iftar',
    description: 'Intimate iftar and family gatherings in your home or majlis, with on-site cooking, service staff, and a spread styled to welcome your guests.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Large Gatherings',
    description: 'Iftar and suhoor for sizeable gatherings, charity events, and community evenings, planned and delivered with consistency from first guest to last.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa Ramadan Service',
    description: 'Full-service Ramadan catering for villa events across Dubai — setup, cooking, service, and pack-down handled so you can simply host.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Iftar & Suhoor Menus', description: 'Curated menus for breaking the fast and pre-dawn suhoor, built around the occasion.' },
  { title: 'Traditional Arabic Dishes', description: 'Classic mezze, soups, grills, and slow-cooked mains rooted in regional tradition.' },
  { title: 'Halal Ingredients', description: 'All dishes are prepared with halal ingredients sourced from trusted suppliers.' },
  { title: 'Dates & Ramadan Staples', description: 'Premium dates, laban, and seasonal Ramadan favourites included as standard.' },
  { title: 'Buffet & Plated Service', description: 'Buffet stations, family-style platters, or plated service to suit your gathering.' },
  { title: 'Service Staff & Setup', description: 'Waiters, hosts, and styling arranged for your home, majlis, or venue.' },
  { title: 'Timing Around Prayer', description: 'Service planned around Maghrib and your schedule so food is ready when you are.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so the evening runs effortlessly.' },
]

const useCases = [
  {
    title: 'Home & Majlis Iftar',
    description: 'For family iftars and majlis gatherings, we bring traditional Arabic spreads to your home, cooking and serving on-site so you can welcome guests and break the fast together without lifting a finger in the kitchen.',
  },
  {
    title: 'Corporate Iftar Functions',
    description: 'For offices, clients, and teams across Dubai, we plan and deliver corporate iftar functions — buffet stations or plated service, full coordination, and timing built around Maghrib, pairing naturally with our wider corporate catering.',
  },
  {
    title: 'Suhoor Gatherings',
    description: 'For late-night suhoor with family, friends, or colleagues, we design pre-dawn menus that sustain the day ahead, from light savoury plates and pastries to comforting hot dishes served quietly into the early hours.',
  },
  {
    title: 'Large & Community Evenings',
    description: 'For sizeable gatherings, charity iftars, and community evenings, our team scales menus and service while keeping quality consistent from the first guest to the last, however large the room.',
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

const faqs = [
  {
    q: 'Do you cater both iftar and suhoor during Ramadan?',
    a: 'Yes. We cater the full Ramadan calendar — generous iftar spreads to break the fast at Maghrib and quieter, sustaining suhoor menus in the pre-dawn hours. We can design a menu for either, or both across the same gathering.',
  },
  {
    q: 'Is all your Ramadan catering halal?',
    a: 'Always. Every dish across our iftar, suhoor, and Ramadan menus is prepared with halal ingredients sourced from trusted suppliers. This is our standard for the season and throughout the year.',
  },
  {
    q: 'Can you cater corporate iftar functions?',
    a: 'We do. For offices, clients, and teams across Dubai, we plan corporate iftar functions with buffet stations or plated service, full coordination, and timing built around Maghrib so everything is ready the moment the fast breaks.',
  },
  {
    q: 'Do you handle home and majlis gatherings?',
    a: 'Yes. We bring traditional Arabic spreads to your home or majlis, cooking and serving on-site with our own staff. Setup, service, and pack-down are all handled so you can focus on welcoming your guests.',
  },
  {
    q: 'How is service timed around prayer?',
    a: 'We plan every iftar around Maghrib and your schedule, with the table ready and the meal hot the moment the fast breaks. For suhoor, we serve quietly into the early hours so guests are sustained for the day ahead.',
  },
  {
    q: 'How far in advance should I book Ramadan catering?',
    a: 'Ramadan is our busiest season, so we recommend booking six to eight weeks ahead to secure your preferred dates. Corporate functions and larger gatherings in particular fill quickly, and earlier booking gives us the most time to tailor your menu.',
  },
]

const relatedServices = [
  {
    title: 'Iftar Catering',
    description: 'Generous iftar spreads to break the fast — dates, soups, grills, and Arabic mains.',
    image: '/service-events.webp',
    link: '/iftar-catering-dubai',
  },
  {
    title: 'Suhoor Catering',
    description: 'Pre-dawn suhoor menus to sustain the day ahead, for home and corporate gatherings.',
    image: '/menu-appetizer.webp',
    link: '/suhoor-catering-dubai',
  },
  {
    title: 'Eid Catering',
    description: 'Celebratory Eid feasts — ouzi, grills, and sweets for family gatherings across Dubai.',
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
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Ramadan Catering Dubai', item: 'https://mychef.ae/ramadan-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function RamadanCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
        title="Ramadan Catering Dubai | Iftar & Suhoor Menus"
        description="Ramadan catering in Dubai with halal iftar and suhoor menus, corporate iftar, home and majlis gatherings, and villa service. Book six to eight weeks ahead — request your quote."
        canonicalPath="/ramadan-catering-dubai"
        ogImage="/service-events.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
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
            Ramadan Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ram-hero-sub">
            Halal iftar and suhoor menus for home, majlis, corporate, and villa gatherings across Dubai — traditional spreads, attentive service, and timing planned around prayer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=ramadan-catering-dubai" className="btn-primary opacity-0 translate-y-4 ram-hero-cta">Request a Proposal</Link>
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
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            THE HOLY MONTH IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering for Every Evening of Ramadan
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Ramadan is a season of gathering — of breaking the fast together at Maghrib and sharing quiet suhoor before the day begins. At myCHEF Dubai, we treat the holy month with the care it deserves, bringing generous, halal spreads to homes, majlis, offices, and villas across the city. From the first date and bowl of soup to slow-cooked mains and traditional sweets, every menu is built to honour the occasion and welcome your guests.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting an intimate family iftar, a corporate function for your team, a community evening, or a late-night suhoor, our chefs and service staff handle the cooking, timing, and pack-down on-site. Explore our Ramadan formats below — from <Link to="/iftar-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">iftar catering</Link> and <Link to="/suhoor-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">suhoor catering</Link> to <Link to="/eid-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Eid feasts</Link> — or see how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>. Because the season is in such demand, we recommend booking six to eight weeks ahead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              RAMADAN FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Iftar, Suhoor & Everything Between
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHERE WE CATER
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Designed for the Occasion
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
            What Our Ramadan Catering Includes
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
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            A Taste of Our Ramadan Catering
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
      </section>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Ramadan Catering Questions
          </h2>

          <div className="ram-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="ram-faq-item border border-gray-200 opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-inter text-base font-medium text-black pr-4">{faq.q}</span>
                  <ChevronRight
                    size={18}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5">
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="ram-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
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
                    Explore <ArrowRight size={14} />
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
            <Link to="/ramadan-catering-guide-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Ramadan Catering Guide</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ram-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Ramadan Gathering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your iftar or suhoor and we'll design a halal menu, time the service around prayer, and handle every detail. Booking six to eight weeks ahead secures your dates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=ramadan-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
