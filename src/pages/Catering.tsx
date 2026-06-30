import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  PartyPopper,
  Heart,
  Building,
  Ship,
  Home,
  Cake,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a catering quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const cateringFormats = [
  {
    title: 'BBQ Catering',
    description: 'Premium outdoor BBQ with chef-manned grilling stations. Perfect for villa parties and casual celebrations.',
    link: '/bbq-catering-dubai',
  },
  {
    title: 'Buffet Catering',
    description: 'Beautifully presented buffet stations with hot and cold options. Ideal for larger gatherings and corporate events.',
    link: '/buffet-catering-dubai',
  },
  {
    title: 'Canapé Catering',
    description: 'Sophisticated passed canapés and finger food for cocktail receptions, openings, and networking events.',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Grazing Tables',
    description: 'Artisan grazing spreads of cheeses, charcuterie, and seasonal produce — a striking centrepiece for any gathering.',
    link: '/grazing-table-dubai',
  },
  {
    title: 'Live Cooking Stations',
    description: 'Interactive chef stations that bring theatre to your event, freshly prepared in front of your guests.',
    link: '/live-cooking-stations-dubai',
  },
  {
    title: 'Dessert Tables',
    description: 'Patisserie, cakes, and sweet tables styled to your theme — the perfect finish to weddings and celebrations.',
    link: '/dessert-table-catering-dubai',
  },
]

const eventTypes = [
  {
    icon: PartyPopper,
    title: 'Birthday Parties',
    description: 'From intimate family dinners to milestone celebrations. Custom cakes, themed menus, and full service.',
  },
  {
    icon: Heart,
    title: 'Wedding Catering',
    description: 'Elegant wedding receptions, rehearsal dinners, and post-wedding brunches. Bespoke menus for your special day.',
  },
  {
    icon: Building,
    title: 'Corporate Events',
    description: 'Boardroom lunches, product launches, client entertaining, and team events. Professional and impressive.',
  },
  {
    icon: Ship,
    title: 'Yacht Parties',
    description: 'Catering for yacht events in Dubai Marina and beyond. Canapes, BBQ, and plated service on the water.',
  },
  {
    icon: Home,
    title: 'Villa Celebrations',
    description: 'Full-service catering for villa events across Dubai. Setup, service, and cleanup \u2014 all handled.',
  },
  {
    icon: Cake,
    title: 'Kids Parties',
    description: 'Fun, delicious menus designed for younger guests. Interactive food stations and kid-friendly options.',
  },
]

const includedItems = [
  { title: 'Bespoke Menu Design', description: 'Custom menu created for your event, dietary needs, and preferences.' },
  { title: 'Premium Ingredients', description: 'Fresh, high-quality ingredients sourced from trusted suppliers.' },
  { title: 'Professional Chefs', description: 'Experienced culinary team led by our executive chef.' },
  { title: 'Service Staff', description: 'Waiters, bartenders, and hosts as required for your event size.' },
  { title: 'Table Setting & Decor', description: 'Elegant tableware, linens, and presentation styling.' },
  { title: 'Full Setup & Cleanup', description: 'We handle everything from arrival to departure.' },
  { title: 'On-Site Coordination', description: 'Event coordination to ensure flawless timing and service.' },
  { title: 'Flexible Service Style', description: 'Plated, buffet, family-style, or cocktail service \u2014 your choice.' },
]

const galleryImages = [
  { src: '/service-catering.jpg', alt: 'Elegant catering setup' },
  { src: '/service-events.jpg', alt: 'Luxury event catering' },
  { src: '/service-corporate.jpg', alt: 'Corporate catering' },
  { src: '/service-villa.jpg', alt: 'Villa celebration catering' },
  { src: '/menu-canapes.jpg', alt: 'Canapes and cocktail service' },
  { src: '/service-luxury-dining.jpg', alt: 'Luxury dining catering' },
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
    q: 'What is the minimum number of guests?',
    a: 'We cater events from 10 guests upward. For very small gatherings, our private chef service may be more suitable.',
  },
  {
    q: 'Do you provide tableware and linens?',
    a: 'Yes. We can provide full tableware, glassware, linens, and decor as part of our catering package. Let us know your requirements.',
  },
  {
    q: 'Can you cater outdoor events?',
    a: 'Absolutely. We regularly cater villa garden parties, beach events, yacht gatherings, and poolside celebrations across Dubai.',
  },
  {
    q: 'How is the food served at large events?',
    a: 'We offer plated service, buffet stations, family-style dining, and canape/cocktail service. We recommend the best format based on your event.',
  },
  {
    q: 'Do you handle setup and cleanup?',
    a: 'Yes. Full setup, service, and cleanup are included in every catering package. You do not need to worry about a thing.',
  },
  {
    q: 'How far in advance should I book catering?',
    a: 'For events under 50 guests, 1 week is recommended. For larger events, 2\u20134 weeks. Peak season (November\u2013March) requires earlier booking.',
  },
]

const relatedServices = [
  {
    title: 'Private Chef',
    description: 'Intimate dining with a dedicated chef in your home or villa.',
    image: '/service-private-chef.jpg',
    link: '/private-chef-dubai',
  },
  {
    title: 'Events',
    description: 'Full-service event planning and catering for celebrations of any size.',
    image: '/service-events.jpg',
    link: '/events',
  },
  {
    title: 'Corporate',
    description: 'Professional corporate dining, from boardroom lunches to large functions.',
    image: '/service-corporate.jpg',
    link: '/corporate',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Luxury Catering Dubai',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  serviceType: 'Catering Service',
  areaServed: 'Dubai, UAE',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Catering Services',
    itemListElement: cateringFormats.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae' },
    { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://mychef.ae/catering-dubai' },
  ],
}

/* ────────────────────── Component ────────────────────── */

export default function Catering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Hero
    gsap.to('.cat-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.cat-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.cat-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    // Catering format cards
    gsap.to('.cat-fmt-card', {
      scrollTrigger: { trigger: '.cat-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // Event types
    gsap.to('.cat-ev-item', {
      scrollTrigger: { trigger: '.cat-ev-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    // Included items
    gsap.to('.cat-inc-item', {
      scrollTrigger: { trigger: '.cat-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    // Gallery
    gsap.to('.cat-gallery-img', {
      scrollTrigger: { trigger: '.cat-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    // FAQ
    gsap.to('.cat-faq-item', {
      scrollTrigger: { trigger: '.cat-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    // Locations
    gsap.to('.cat-loc-item', {
      scrollTrigger: { trigger: '.cat-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    // Related
    gsap.to('.cat-rel-card', {
      scrollTrigger: { trigger: '.cat-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // CTA
    gsap.to('.cat-cta', {
      scrollTrigger: { trigger: '.cat-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Luxury Catering Dubai | Private Event Catering"
        description="Premium catering services in Dubai for events, corporate functions, weddings, and private celebrations. Bespoke menus, full service, flawless execution. Request a quote."
        canonicalPath="/catering-dubai"
        ogImage="/service-catering.jpg"
        schema={{ ...schema, ...breadcrumbSchema }}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-catering.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 cat-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 cat-hero-h1">
            Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[600px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 cat-hero-sub">
            Premium event catering across Dubai. From intimate gatherings to grand celebrations — every detail handled, every course perfected.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 cat-hero-cta">
              Request a Catering Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 cat-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 2: Catering Formats ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CATERING OPTIONS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Catering for Every Occasion
            </h2>
          </div>

          <div className="cat-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cateringFormats.map((fmt, i) => (
              <Link
                key={i}
                to={fmt.link}
                className="cat-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <UtensilsCrossed size={36} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed mb-4">
                  {fmt.description}
                </p>
                <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Event Types ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              EVENTS WE CATER
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering for Every Event
            </h2>
          </div>

          <div className="cat-ev-grid grid md:grid-cols-2 gap-6">
            {eventTypes.map((ev, i) => {
              const Icon = ev.icon
              return (
                <div
                  key={i}
                  className="cat-ev-item flex gap-4 bg-charcoal p-6 opacity-0 translate-y-10"
                >
                  <Icon size={36} className="text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-h3 text-white mb-2">{ev.title}</h3>
                    <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{ev.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Our Catering Includes
          </h2>

          <div className="cat-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="cat-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Gallery of Past Events
          </h2>

          <div className="cat-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="cat-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-400 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Catering Questions
          </h2>

          <div className="cat-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="cat-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
                    <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="cat-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="cat-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="cat-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="cat-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-[#A3A3A3] mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center cat-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Event Catering
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            From concept to execution — we handle every detail of your catering experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Custom Quote
            </Link>
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
