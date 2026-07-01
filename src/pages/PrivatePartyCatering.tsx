import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Home,
  Flame,
  Martini,
  Utensils,
  Users,
  Sparkles,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan private party catering in Dubai (via mychef.ae/private-party-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const partyFormats = [
  {
    icon: Home,
    title: 'Villa & Home Parties',
    description: 'Full-service catering brought to your villa, apartment, or garden — we set up a complete kitchen and service around your space.',
  },
  {
    icon: Flame,
    title: 'Live Cooking Stations',
    description: 'Chef-manned stations — pasta, grills, carving, and more — that turn the food into part of the entertainment.',
  },
  {
    icon: Sparkles,
    title: 'Canapés & Sharing',
    description: 'Passed canapés and elegant sharing boards that keep guests mingling rather than seated for a relaxed atmosphere.',
  },
  {
    icon: Martini,
    title: 'Cocktails & Bar Service',
    description: 'Professional bartenders, signature cocktails, mocktails, and a fully styled bar tailored to your party.',
  },
  {
    icon: Utensils,
    title: 'Plated & Buffet Dining',
    description: 'When you want a seated moment — refined plated courses or generous buffet stations served by our team.',
  },
  {
    icon: Users,
    title: 'Full Service Staff',
    description: 'Waiters, hosts, and bartenders scaled to your guest count, handling everything from welcome drinks to the final clear-down.',
  },
]

const includedItems = [
  { title: 'Bespoke Party Menu', description: 'A menu designed around your guests, theme, and the feel of the evening.' },
  { title: 'On-Site Chefs', description: 'Our culinary team cooks and finishes dishes live at your venue.' },
  { title: 'Live Cooking Stations', description: 'Interactive grills, carving, and made-to-order stations as you like.' },
  { title: 'Bar & Mixology', description: 'Cocktails, mocktails, and bartender service styled to your party.' },
  { title: 'Service & Hosting Staff', description: 'Discreet, polished waiters and hosts to look after every guest.' },
  { title: 'Tableware & Styling', description: 'Glassware, linens, and presentation to match your home and theme.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, run the service, and leave your home immaculate.' },
  { title: 'Event Coordination', description: 'A coordinator manages timing so the evening flows effortlessly.' },
]

const useCases = [
  {
    title: 'Villa & Garden Gatherings',
    description: 'Your villa becomes the venue. We build a working kitchen, set up live stations and a bar, and run full service across the garden, terrace, or majlis — common across Palm Jumeirah, Emirates Hills, and Dubai Hills.',
  },
  {
    title: 'Milestone & Anniversary Dinners',
    description: 'For the parties that matter most, we design a considered menu and seamless service — whether that means a plated dinner, a generous buffet, or a relaxed canapé-and-cocktail evening.',
  },
  {
    title: 'Cocktail & Canapé Receptions',
    description: 'A sophisticated, free-flowing format where passed canapés and signature cocktails keep guests circulating. Ideal for stylish home entertaining and celebrations of every kind.',
  },
  {
    title: 'Intimate Home Celebrations',
    description: 'Even for smaller groups, a dedicated chef and host elevate the evening. We handle the cooking, serving, and cleanup so you can host without lifting a finger.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Private party catering in Dubai' },
  { src: '/service-villa.webp', alt: 'Villa private party catering setup' },
  { src: '/menu-canapes.webp', alt: 'Canapés for a private party' },
  { src: '/service-villa.webp', alt: 'Live cooking station at a home party' },
  { src: '/menu-canapes.webp', alt: 'Sharing boards for a private party' },
  { src: '/service-events.webp', alt: 'Full service private party in Dubai' },
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
    q: 'Do you cater private parties at home and in villas?',
    a: 'Yes — private home and villa parties are our specialty. We bring a full mobile kitchen, chefs, service staff, and a bar to your space, and handle setup and cleanup so your home is left exactly as we found it.',
  },
  {
    q: 'What is a live cooking station?',
    a: 'A live station is a chef-manned setup where dishes are prepared or finished in front of your guests — for example a pasta, grill, carving, or dessert station. It adds theatre and keeps the food fresh, hot, and interactive.',
  },
  {
    q: 'Can you provide bartenders and cocktails?',
    a: 'Absolutely. We offer professional bartenders, signature cocktails, mocktails, and a fully styled bar. We tailor the drinks menu to your party, including non-alcoholic and themed options.',
  },
  {
    q: 'How many staff will you bring?',
    a: 'We scale the team to your guest count and service style — typically chefs, waiters, hosts, and bartenders. During planning we recommend the right number to ensure attentive, unhurried service throughout the evening.',
  },
  {
    q: 'How many guests can you cater for at a private party?',
    a: 'We cater intimate gatherings of around 10 guests up to large home parties of a few hundred. For smaller, more personal evenings, our private chef service may also suit, and we are happy to advise.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For most private parties, one to two weeks is ideal. For larger events with live stations and full bar service, we recommend two to four weeks. During peak season (November to March), earlier booking is advised.',
  },
]

const relatedServices = [
  {
    title: 'Party Catering',
    description: 'The hub for birthdays, showers, and every kind of private celebration.',
    image: '/service-events.webp',
    link: '/party-catering-dubai',
  },
  {
    title: 'Luxury Catering',
    description: 'Bespoke menus and full service for events of any size across Dubai.',
    image: '/menu-canapes.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Villas & Private Residences',
    description: 'Tailored catering and chef service for villa and residence entertaining.',
    image: '/service-villa.webp',
    link: '/villas-private-residences',
  },
  {
    title: 'Housewarming Catering',
    description: 'Warm, welcoming menus and full service for new-home celebrations.',
    image: '/service-villa.webp',
    link: '/housewarming-catering-dubai',
  },
  {
    title: 'Graduation Party Catering',
    description: 'Milestone graduation celebrations with personalised menus and full service.',
    image: '/service-events.webp',
    link: '/graduation-catering-dubai',
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
  name: 'Private Party Catering Dubai',
  serviceType: 'Private Party Catering Service',
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
    { '@type': 'ListItem', position: 2, name: 'Private Party Catering Dubai', item: 'https://mychef.ae/private-party-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function PrivatePartyCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Hero
    gsap.to('.ppc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ppc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ppc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    // Format cards
    gsap.to('.ppc-fmt-card', {
      scrollTrigger: { trigger: '.ppc-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // Use cases
    gsap.to('.ppc-uc-item', {
      scrollTrigger: { trigger: '.ppc-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    // Included items
    gsap.to('.ppc-inc-item', {
      scrollTrigger: { trigger: '.ppc-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    // Gallery
    gsap.to('.ppc-gallery-img', {
      scrollTrigger: { trigger: '.ppc-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    // FAQ
    gsap.to('.ppc-faq-item', {
      scrollTrigger: { trigger: '.ppc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    // Locations
    gsap.to('.ppc-loc-item', {
      scrollTrigger: { trigger: '.ppc-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    // Related
    gsap.to('.ppc-rel-card', {
      scrollTrigger: { trigger: '.ppc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // CTA
    gsap.to('.ppc-cta', {
      scrollTrigger: { trigger: '.ppc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Party Catering Dubai | Home & Villa"
        description="Private party catering in Dubai for villas and homes — live cooking stations, canapés, cocktails, and full-service staff. Bespoke menus, flawless setup and service."
        canonicalPath="/private-party-catering-dubai"
        ogImage="/service-villa.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/party-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ppc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/party-catering-dubai" className="text-gray-400 hover:text-gold transition-colors">Party Catering</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Private Party</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ppc-hero-h1">
            Private Party Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ppc-hero-sub">
            Villa and home parties brought to life — live cooking stations, passed canapés, signature cocktails, and a full team of chefs and service staff, all handled for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-party-catering-dubai" className="btn-primary opacity-0 translate-y-4 ppc-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ppc-hero-cta"
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
            HOSTING, HANDLED
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Your Home, Transformed Into a Venue
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            The best private parties feel effortless — for the guests and, just as importantly, for the host. At myCHEF Dubai, we bring everything a great party needs directly to your villa or home: a full mobile kitchen, professional chefs, live cooking stations, a styled bar, and attentive service staff who look after every detail from the first welcome drink to the final clear-down.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are planning an intimate dinner, a lively cocktail reception, or a large celebration spilling across the garden and terrace, we design the menu and service around your space and your guests. Private party catering sits within our broader <Link to="/party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">party catering in Dubai</Link> and our full <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering service</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats Grid ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HOW WE SERVE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Private Party Catering Formats
            </h2>
          </div>

          <div className="ppc-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partyFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="ppc-fmt-card bg-charcoal p-8 opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
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
              EVERY KIND OF GATHERING
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Private Parties We Cater
            </h2>
          </div>

          <div className="ppc-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="ppc-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Private Party Catering Includes
          </h2>

          <div className="ppc-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="ppc-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            Private Parties We've Brought to Life
          </h2>

          <div className="ppc-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="ppc-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Private Party Catering Questions
          </h2>

          <div className="ppc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="ppc-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Private Party Catering Across Dubai
          </h2>

          <div className="ppc-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="ppc-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="ppc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ppc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center ppc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Host Without Lifting a Finger
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your party and your space, and we'll design the menu, bar, and service to bring it all together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-party-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
