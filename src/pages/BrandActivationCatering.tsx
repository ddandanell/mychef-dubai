import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  Store,
  Flame,
  ShoppingCart,
  Users,
  Megaphone,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss brand activation catering in Dubai (via mychef.ae/brand-activation-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const activationFormats = [
  {
    icon: UtensilsCrossed,
    title: 'Sampling Stations',
    description: 'Bite-sized tastings for product sampling or market activations, served by staff who know how to start conversations and drive trial.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Store,
    title: 'Themed Pop-Up Kitchen',
    description: 'A fully branded food station in malls, hotels, or public spaces, designed to match your campaign identity and stop foot traffic.',
    link: '/catering-dubai',
  },
  {
    icon: Flame,
    title: 'Live Chef Theatre',
    description: 'Chef-manned cooking demos that draw crowds, create social content, and turn passers-by into engaged audiences.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: ShoppingCart,
    title: 'Branded Food & Beverage Carts',
    description: 'Custom carts serving signature items with brand messaging, ideal for high-traffic activations and outdoor event spaces.',
    link: '/bar-services-dubai',
  },
  {
    icon: Users,
    title: 'Canapé Networking Reception',
    description: 'Elegant bites for press, influencers, and VIPs, served in a format that keeps guests moving, mingling, and posting.',
    link: '/cocktail-party-catering-dubai',
  },
]

const includedItems = [
  { title: 'Creative Menu Concept', description: 'A menu designed around your brand identity, campaign message, and target audience.' },
  { title: 'Branded Presentation', description: 'Servingware, signage, and staff uniforms aligned with your activation look and feel where required.' },
  { title: 'Chef & Brand Ambassador Staff', description: 'Professional chefs and service staff trained to engage guests and represent your brand.' },
  { title: 'Ingredient Sourcing & Logistics', description: 'Quality ingredients, reliable logistics, and timely delivery across Dubai venues.' },
  { title: 'Health, Safety & Venue Compliance', description: 'Support with Dubai food safety guidelines and coordination with venue management.' },
  { title: 'Setup, Service & Breakdown', description: 'Full event-day execution from build to clear-down, so your team can focus on the campaign.' },
]

const campaignTypes = [
  {
    title: 'New Product Sampling',
    description: 'Put your product directly into guests\' hands with tastings, samples, and pairing moments that build instant familiarity and social proof.',
  },
  {
    title: 'Luxury Brand Activations',
    description: 'Polished, premium food experiences for high-end brands that need every touchpoint to feel considered and Instagram-worthy.',
  },
  {
    title: 'Influencer & Media Events',
    description: 'Visually striking menus and interactive stations that give creators something worth capturing and sharing.',
  },
  {
    title: 'Mall & Retail Pop-Ups',
    description: 'Compact, high-impact setups for retail spaces and malls, designed to attract foot traffic without disrupting operations.',
  },
  {
    title: 'Automotive & Tech Launches',
    description: 'Sleek, modern catering concepts that complement product reveals and keep guests engaged between announcements.',
  },
  {
    title: 'Cultural & Seasonal Festivals',
    description: 'Scalable food stations for festivals, seasonal celebrations, and public events across Dubai\'s diverse event calendar.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Experiential brand activation catering in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Canapés served at a brand activation event in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Appetizer tasting station for experiential catering Dubai' },
  { src: '/menu-cocktails.webp', alt: 'Branded beverage service at a Dubai pop-up catering event' },
  { src: '/service-catering.webp', alt: 'Catering setup for a luxury activation in Dubai' },
  { src: '/service-corporate.webp', alt: 'Corporate brand activation catering in Dubai' },
]

const locations = [
  { name: 'Dubai Mall', slug: 'dubai-mall' },
  { name: 'Mall of the Emirates', slug: 'mall-of-the-emirates' },
  { name: 'City Walk', slug: 'city-walk' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Al Barari', slug: 'al-barari' },
  { name: 'Dubai Creek Harbour', slug: 'dubai-creek-harbour' },
]

const faqs = [
  {
    q: 'What is brand activation catering?',
    a: 'It is food and beverage service designed to engage audiences at brand activations, pop-ups, sampling campaigns, and experiential marketing events.',
  },
  {
    q: 'Can you create a branded food menu for our activation?',
    a: 'Yes. We design custom menus, named dishes, branded carts, and themed presentation to match your campaign identity.',
  },
  {
    q: 'Do you handle venue approvals for pop-up catering?',
    a: 'We work closely with venue management and follow Dubai\'s food safety requirements. Clients should confirm venue permissions early in planning.',
  },
  {
    q: 'Can you cater both indoor malls and outdoor locations in Dubai?',
    a: 'Yes. We have experience in malls, hotels, beaches, yachts, and outdoor event spaces, adapting setup and equipment accordingly.',
  },
  {
    q: 'Do you provide staff who can engage with guests about the brand?',
    a: 'Yes. We can provide trained service staff and chef-presenters who represent your brand professionally and create shareable moments.',
  },
]

const relatedServices = [
  {
    title: 'Product Launch Catering',
    description: 'Strategic menus and polished service for launches that need to impress press, partners, and guests.',
    image: '/service-events.webp',
    link: '/product-launch-catering-dubai',
  },
  {
    title: 'Corporate Event Catering',
    description: 'Professional dining and reception solutions for conferences, board dinners, and company celebrations.',
    image: '/service-corporate.webp',
    link: '/corporate-event-catering-dubai',
  },
  {
    title: 'Exhibition Catering Dubai',
    description: 'Trade show and exhibition catering for branded stands, pavilions and visitor hospitality.',
    image: '/service-events.webp',
    link: '/exhibition-catering-dubai',
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
  name: 'Brand Activation Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Brand Activation Catering Dubai', item: 'https://mychef.ae/brand-activation-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function BrandActivationCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bda-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bda-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bda-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bda-fmt-card', {
      scrollTrigger: { trigger: '.bda-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bda-camp-item', {
      scrollTrigger: { trigger: '.bda-camp-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bda-inc-item', {
      scrollTrigger: { trigger: '.bda-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bda-gallery-img', {
      scrollTrigger: { trigger: '.bda-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bda-faq-item', {
      scrollTrigger: { trigger: '.bda-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bda-loc-item', {
      scrollTrigger: { trigger: '.bda-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bda-rel-card', {
      scrollTrigger: { trigger: '.bda-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bda-cta', {
      scrollTrigger: { trigger: '.bda-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Brand Activation Catering Dubai | Experiential | myCHEF"
        description="Create memorable brand activations with experiential catering in Dubai. Sampling stations, themed menus, live chefs & branded food experiences."
        canonicalPath="/brand-activation-catering-dubai"
        ogImage="/images/brand-activation-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/brand-activation-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bda-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Brand Activation Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bda-hero-h1">
            Brand Activation Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bda-hero-sub">
            Food that stops the scroll. Experiential catering for brand activations, pop-ups, sampling campaigns, and influencer events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=brand-activation-catering-dubai" className="btn-primary opacity-0 translate-y-4 bda-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bda-hero-cta"
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
            EXPERIENTIAL CATERING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Why Experiential Catering Works
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Taste, theatre, and shareability are the three ingredients that make a brand activation memorable. When guests can see their food being prepared, interact with your team, and post a moment that looks as good as it tastes, your brand stays with them long after the event ends. At myCHEF Dubai, we create food experiences that align with campaign goals, audience demographics, and the premium expectations of the Dubai market.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From <Link to="/product-launch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">product launch catering Dubai</Link> to mall pop-ups and influencer events, our brand activation catering turns tastings into talk-of-the-town moments. Explore our formats below, or see how live chef theatre complements our <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">live cooking station hire</Link> and <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate event catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              ACTIVATION CATERING FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Formats Built for Engagement
            </h2>
          </div>

          <div className="bda-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activationFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="bda-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 4: Campaign Types ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CAMPAIGN TYPES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Where Brand Activation Catering Shines
            </h2>
          </div>

          <div className="bda-camp-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignTypes.map((camp, i) => (
              <div key={i} className="bda-camp-item bg-charcoal p-8 opacity-0 translate-y-10">
                <Megaphone size={28} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{camp.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{camp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What's Included
          </h2>

          <div className="bda-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bda-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            Activation Catering in Action
          </h2>

          <div className="bda-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bda-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Brand Activation Catering Questions
          </h2>

          <div className="bda-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bda-faq-item border border-gray-200 opacity-0 translate-y-5">
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
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Activation Catering Locations in Dubai
          </h2>

          <div className="bda-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bda-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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
            Related Services
          </h3>

          <div className="bda-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bda-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bda-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Make Your Next Activation Unforgettable
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your campaign, audience, and venue. We'll design an experiential catering concept that turns guests into advocates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=brand-activation-catering-dubai" className="btn-primary">Request an Activation Quote</Link>
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
