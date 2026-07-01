import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Wine,
  Users,
  GlassWater,
  Leaf,
  Ship,
  Home,
  Heart,
  Building2,
  PartyPopper,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to enquire about bar services and bartender hire in Dubai (via mychef.ae/bar-services-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const barFormats = [
  {
    icon: Wine,
    title: 'Mobile Bar Hire',
    description: 'A fully equipped pop-up bar delivered to your villa, yacht, or venue — styled, stocked, and ready to serve.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    icon: Users,
    title: 'Bartender Service',
    description: 'Professional bartenders and bar backs scaled precisely to your guest count and event flow.',
    link: '/bar-services-dubai',
  },
  {
    icon: GlassWater,
    title: 'Mixology & Craft Cocktails',
    description: 'Signature cocktails designed around your event theme, season, and personal taste by experienced mixologists.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Mocktail & Non-Alcoholic Bar',
    description: 'Elevated zero-proof options so every guest can enjoy beautifully crafted drinks.',
    link: '/mocktail-bar-catering-dubai',
  },
]

const includedItems = [
  { title: 'Menu Consultation & Drink Curation', description: 'A bespoke drinks list built around your theme, preferences, and guest profile.' },
  { title: 'Bartenders & Bar Backs', description: 'Professional bar staff scaled to your guest count for smooth, attentive service.' },
  { title: 'Mobile Bar Setup, Glassware & Garnishes', description: 'A styled bar counter, quality glassware, fresh garnishes, and complete presentation.' },
  { title: 'Premium Spirits, Mixers & Fresh Ingredients', description: 'Quality spirits, hand-picked mixers, and fresh produce for every pour.' },
  { title: 'Non-Alcoholic Menu Options', description: 'Creative mocktails and zero-proof drinks for inclusive events.' },
  { title: 'Setup, Service & Breakdown', description: 'We handle delivery, installation, service, and clear-down from start to finish.' },
]

const useCases = [
  {
    title: 'Yacht Parties',
    description: 'A sleek mobile bar and steady-handed bartenders bring energy to Dubai marina cruises and yacht celebrations without missing a wave.',
    link: '/yachts',
  },
  {
    title: 'Villa Dinners & Private Parties',
    description: 'From intimate villa dinners to lively private parties, we set up an elegant bar that matches the mood of your home or rental.',
    link: '/villas-private-residences',
  },
  {
    title: 'Weddings & Engagement Celebrations',
    description: 'Toast the occasion with a curated cocktail or mocktail menu served by bartenders who understand the pace of wedding service.',
    link: '/wedding-catering-dubai',
  },
  {
    title: 'Corporate Launches & Gala Dinners',
    description: 'Polished bar service for product launches, gala dinners, and brand activations where first impressions matter.',
    link: '/corporate-event-catering-dubai',
  },
  {
    title: 'Birthdays & Anniversaries',
    description: 'Celebrate another year with custom drinks, creative garnishes, and a bar team that keeps the party flowing.',
    link: '/birthday-catering-dubai',
  },
]

const sampleMenu = [
  { name: 'Date & Rose Spritz', description: 'A fragrant, lightly floral refresher inspired by local flavours.' },
  { name: 'Yuzu Basil Smash', description: 'Citrus brightness balanced with fresh basil and a touch of sweetness.' },
  { name: 'Smoked Old Fashioned', description: 'A classic cocktail finished with aromatic smoke for theatrical presentation.' },
  { name: 'Passionfruit Nojito', description: 'A tropical zero-proof twist on the mojito, vibrant and alcohol-free.' },
]

const galleryImages = [
  { src: '/menu-cocktails.webp', alt: 'Premium cocktail and bar service in Dubai' },
  { src: '/service-events.webp', alt: 'Mobile bar setup for an event in Dubai' },
  { src: '/service-villa.webp', alt: 'Villa party bartender service in Dubai' },
  { src: '/service-yacht.webp', alt: 'Yacht bar service in Dubai marina' },
  { src: '/service-corporate.webp', alt: 'Corporate event bar service in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Canapés and cocktails served at a Dubai event' },
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
    q: 'Do you provide bartenders and a mobile bar for private events in Dubai?',
    a: 'Yes. We supply trained bartenders, mobile bar counters, glassware, ingredients, and garnishes for villa, yacht, and venue events across Dubai.',
  },
  {
    q: 'Can you create a custom cocktail menu for our event?',
    a: 'Absolutely. Our team designs signature cocktails and mocktails to match your event theme, season, and guest preferences.',
  },
  {
    q: 'Do you offer non-alcoholic / mocktail bars?',
    a: 'Yes. We offer premium mocktail bars with creative, beautifully presented zero-proof drinks suitable for all guests and occasions.',
  },
  {
    q: 'What types of events do you provide bar services for?',
    a: 'We cater weddings, yacht parties, villa dinners, corporate events, gala dinners, birthdays, and brand activations.',
  },
  {
    q: 'Is glassware and bar equipment included?',
    a: 'Yes. Our bar packages include glassware, bar tools, ice, garnishes, and a styled mobile bar setup unless you prefer to use venue-supplied equipment.',
  },
]

const relatedServices = [
  {
    title: 'Cocktail Party Catering',
    description: 'Mixologists, signature cocktails, and canapés for receptions across Dubai.',
    image: '/menu-cocktails.webp',
    link: '/cocktail-party-catering-dubai',
  },
  {
    title: 'Mocktail Bar Catering',
    description: 'Alcohol-free craft bars with fresh, theatre-led mocktails for every guest.',
    image: '/service-events.webp',
    link: '/mocktail-bar-catering-dubai',
  },
  {
    title: 'Wedding Catering',
    description: 'Full wedding dining and bar service tailored to your celebration.',
    image: '/service-villa.webp',
    link: '/wedding-catering-dubai',
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
  name: 'Bar Services Dubai',
  serviceType: 'Bar & Bartender Hire Service',
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
    { '@type': 'ListItem', position: 2, name: 'Bar Services Dubai', item: 'https://mychef.ae/bar-services-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function BarServices() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bar-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bar-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bar-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bar-fmt-card', {
      scrollTrigger: { trigger: '.bar-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bar-uc-item', {
      scrollTrigger: { trigger: '.bar-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bar-menu-item', {
      scrollTrigger: { trigger: '.bar-menu-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bar-inc-item', {
      scrollTrigger: { trigger: '.bar-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bar-gallery-img', {
      scrollTrigger: { trigger: '.bar-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bar-faq-item', {
      scrollTrigger: { trigger: '.bar-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bar-loc-item', {
      scrollTrigger: { trigger: '.bar-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bar-rel-card', {
      scrollTrigger: { trigger: '.bar-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bar-cta', {
      scrollTrigger: { trigger: '.bar-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Premium Bar Services Dubai | Hire Bartenders | myCHEF"
        description="Hire bartenders and mobile bar services in Dubai for weddings, yachts, villas, and corporate events. Cocktails, mocktails & premium service."
        canonicalPath="/bar-services-dubai"
        ogImage="/images/bar-services-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/bar-services-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bar-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Bar Services Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bar-hero-h1">
            Premium Bar Services & Bartender Hire in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bar-hero-sub">
            Mobile bartenders, custom cocktails, and full bar setups for villas, yachts, weddings, and corporate events.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bar-services-dubai" className="btn-primary opacity-0 translate-y-4 bar-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bar-hero-cta"
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
            MOBILE BARS & BARTENDERS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Bar Service That Sets the Mood
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Premium bar service is about more than drinks — it shapes the atmosphere of your entire event. At myCHEF Dubai, we bring trained bartenders, curated menus, and elegant mobile bars to villas, yachts, venues, and private residences across the city. Whether your guests prefer classic cocktails, creative mocktails, or a fully alcohol-free bar, we design the experience around them.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From intimate villa dinners to large-scale corporate galas, our bar team delivers polished service, fresh ingredients, and a setup that looks as good as the drinks taste. Explore our formats below, or browse our dedicated <Link to="/mocktail-bar-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">non-alcoholic mocktail bar catering</Link> for an inclusive, zero-proof option.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              BAR SERVICE FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              A Bar Setup for Every Event
            </h2>
          </div>

          <div className="bar-fmt-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="bar-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              EVENTS WE SERVE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Bar Service for Every Dubai Occasion
            </h2>
          </div>

          <div className="bar-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => {
              const icons = [Ship, Home, Heart, Building2, PartyPopper]
              const Icon = icons[i % icons.length]
              return (
                <Link
                  key={i}
                  to={uc.link}
                  className="bar-uc-item group bg-charcoal p-8 opacity-0 translate-y-10 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon size={28} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">{uc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Sample Menu ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SIGNATURE SIPS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              A Taste of Our Drink Menu
            </h2>
          </div>

          <div className="bar-menu-grid grid md:grid-cols-2 gap-6">
            {sampleMenu.map((item, i) => (
              <div key={i} className="bar-menu-item bg-white p-6 opacity-0 translate-y-8">
                <h4 className="font-playfair text-h4 text-black mb-2">{item.name}</h4>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What's Included
          </h2>

          <div className="bar-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bar-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 7: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Bar Service in Action
          </h2>

          <div className="bar-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bar-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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

      {/* ═══════════════ Section 8: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Bar Service Questions
          </h2>

          <div className="bar-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bar-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 9: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Bar Service Across Dubai
          </h2>

          <div className="bar-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bar-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 10: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="bar-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bar-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 11: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bar-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book Your Mobile Bar Team
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Add a premium bar to your event. Tell us about your celebration and we'll design a custom bar setup and drinks menu that fits your guests and venue perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bar-services-dubai" className="btn-primary">Request a Custom Bar Quote</Link>
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
