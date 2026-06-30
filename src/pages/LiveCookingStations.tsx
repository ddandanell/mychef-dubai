import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ChefHat,
  Flame,
  Soup,
  Beef,
  Heart,
  Building,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan live cooking stations in Dubai')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const stationFormats = [
  {
    icon: Beef,
    title: 'Carving Stations',
    description: 'A chef carves roasts, prime cuts, and whole joints to order, plating each portion with sauces and garnishes in front of your guests.',
    link: '/bbq-catering-dubai',
  },
  {
    icon: Soup,
    title: 'Pasta & Risotto',
    description: 'Made-to-order pasta and risotto finished live in the pan, letting guests choose their sauce and watch each plate come together.',
    link: '/catering-dubai',
  },
  {
    icon: Flame,
    title: 'Grill & BBQ Stations',
    description: 'Open-flame grilling of meats, seafood, and vegetables, with the aroma and theatre of live fire cooking at the heart of the room.',
    link: '/bbq-catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Global Street Food',
    description: 'Interactive stations serving Arabic, Asian, and Mediterranean street-food classics, freshly assembled and full of character.',
    link: '/catering-dubai',
  },
  {
    icon: Heart,
    title: 'Dessert & Sweet Stations',
    description: 'Live crepes, flambé, ice cream, and plated desserts finished to order — a sweet finale that doubles as entertainment.',
    link: '/wedding-catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Showpieces',
    description: 'Branded, themed stations that become a talking point at launches, conferences, and client events — polished and memorable.',
    link: '/corporate',
  },
]

const includedItems = [
  { title: 'Chef-Manned Stations', description: 'Skilled chefs cooking and plating live throughout your event.' },
  { title: 'Made-to-Order Dishes', description: 'Guests choose their components and watch each plate finished fresh.' },
  { title: 'Curated Station Menus', description: 'Carving, pasta, grill, street food, and dessert stations, mixed to suit.' },
  { title: 'Theatre & Interaction', description: 'The cooking becomes part of the entertainment and the conversation.' },
  { title: 'Station Styling & Setup', description: 'Designed, branded counters with signage, lighting, and presentation.' },
  { title: 'Professional Service Staff', description: 'Station chefs, runners, and hosts scaled to your guest count.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, run the service, and leave your space spotless.' },
  { title: 'Dietary Flexibility', description: 'Halal, vegetarian, vegan, and allergy-aware options at every station.' },
]

const useCases = [
  {
    title: 'Weddings & Receptions',
    description: 'Live stations turn dining into a moment of theatre at weddings and receptions. Guests gather, watch, and interact, while carving, pasta, and dessert counters keep the celebration moving and memorable.',
  },
  {
    title: 'Corporate Events & Launches',
    description: 'Branded, themed stations create a talking point at product launches, conferences, and client entertaining. The interaction breaks the ice and gives your event a polished, premium edge across DIFC and Business Bay.',
  },
  {
    title: 'Villa & Garden Celebrations',
    description: 'Bring the energy of a live kitchen to your villa terrace, garden, or rooftop. We set up self-contained stations and a chef team across Palm Jumeirah, Emirates Hills, Dubai Hills, and beyond.',
  },
  {
    title: 'Galas & Large Functions',
    description: 'For large functions, multiple stations spread guests across the room, shorten queues, and add variety, with each counter offering a different freshly cooked experience.',
  },
]

const galleryImages = [
  { src: '/process-2.jpg', alt: 'Chef at a live cooking station in Dubai' },
  { src: '/menu-meat.jpg', alt: 'Carving station with prime cuts' },
  { src: '/service-events.jpg', alt: 'Live cooking stations at a Dubai event' },
  { src: '/process-3.jpg', alt: 'Chef grilling at an interactive station' },
  { src: '/menu-seafood.jpg', alt: 'Seafood prepared live at a station' },
  { src: '/service-catering.jpg', alt: 'Interactive station catering setup' },
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
    q: 'What are live cooking stations?',
    a: 'Live cooking stations are chef-manned counters where dishes are prepared and plated to order in front of your guests. From carving and pasta to grill and dessert stations, the cooking becomes part of the entertainment.',
  },
  {
    q: 'What types of stations can you provide?',
    a: 'We offer carving, pasta and risotto, grill and BBQ, global street food, and live dessert stations, among others. Most events combine several stations to give guests variety and keep the room flowing.',
  },
  {
    q: 'How many guests do live stations work best for?',
    a: 'Live stations suit gatherings from around 40 guests upward and scale beautifully to large weddings and corporate functions. Multiple stations spread guests across the room and shorten queues.',
  },
  {
    q: 'Are live cooking stations suitable for weddings and corporate events?',
    a: 'Yes. They are a favourite for weddings, galas, product launches, and conferences. The interaction adds theatre and a premium feel, and stations can be branded or themed to match your event.',
  },
  {
    q: 'Do you provide the equipment and setup for each station?',
    a: 'Absolutely. We bring self-contained, professionally styled counters with all cooking equipment, signage, and presentation, plus the chefs and service staff to run them throughout your event.',
  },
  {
    q: 'How far in advance should I book live cooking stations?',
    a: 'For larger events and weddings, we recommend two to four weeks so we can plan the stations and staffing carefully. During peak season (November to March), earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Full-service luxury catering for events of every size across Dubai.',
    image: '/service-catering.jpg',
    link: '/catering-dubai',
  },
  {
    title: 'BBQ Catering',
    description: 'Chef-manned grills, premium meats, and seafood for villa and yacht events.',
    image: '/service-events.jpg',
    link: '/bbq-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional dining for boardroom lunches, conferences, and functions.',
    image: '/service-corporate.jpg',
    link: '/corporate',
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
  name: 'Live Cooking Stations Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Live Cooking Stations Dubai', item: 'https://mychef.ae/live-cooking-stations-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function LiveCookingStations() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.lcs-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.lcs-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.lcs-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.lcs-fmt-card', {
      scrollTrigger: { trigger: '.lcs-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lcs-uc-item', {
      scrollTrigger: { trigger: '.lcs-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lcs-inc-item', {
      scrollTrigger: { trigger: '.lcs-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lcs-gallery-img', {
      scrollTrigger: { trigger: '.lcs-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.lcs-faq-item', {
      scrollTrigger: { trigger: '.lcs-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lcs-loc-item', {
      scrollTrigger: { trigger: '.lcs-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.lcs-rel-card', {
      scrollTrigger: { trigger: '.lcs-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lcs-cta', {
      scrollTrigger: { trigger: '.lcs-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Live Cooking Stations Dubai | Interactive Chefs"
        description="Premium live cooking stations in Dubai with chef-manned carving, pasta, grill, and dessert counters. Interactive, made-to-order catering for weddings and corporate events."
        canonicalPath="/live-cooking-stations-dubai"
        ogImage="/process-2.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/process-2.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 lcs-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Live Cooking Stations Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 lcs-hero-h1">
            Live Cooking Stations in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 lcs-hero-sub">
            Interactive chef-manned stations — carving, pasta, grill, street food, and dessert counters cooked to order. The theatre of food, plated fresh in front of your guests at weddings and corporate events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 lcs-hero-cta">
              Request a Stations Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 lcs-hero-cta"
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
            DUBAI LIVE STATION SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The Theatre of Food, Brought to You
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Some of the most memorable moments at an event happen around the food — guests gathering at a counter, watching a chef finish a dish, the aroma rising as it is plated to order. At myCHEF Dubai, live cooking stations turn dining into an experience, where the cooking itself becomes part of the entertainment and the conversation.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Our chefs work at self-contained, beautifully styled counters — carving prime cuts, finishing pasta and risotto in the pan, grilling over open flame, assembling global street food, and flambéing desserts. Stations can be mixed and themed to match your event, spreading guests across the room and offering variety at every turn. Whether it is a wedding, a gala, or a corporate launch, we bring the stations, the chefs, and the styling to you. Explore our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or speak to us to start planning.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Station Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              STATION TYPES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Stations
            </h2>
          </div>

          <div className="lcs-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stationFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="lcs-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
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
              Stations for Every Occasion
            </h2>
          </div>

          <div className="lcs-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="lcs-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Our Live Cooking Stations Include
          </h2>

          <div className="lcs-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="lcs-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 6: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            A Taste of Our Live Stations
          </h2>

          <div className="lcs-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="lcs-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Live Cooking Station Questions
          </h2>

          <div className="lcs-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="lcs-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Live Cooking Stations Across Dubai
          </h2>

          <div className="lcs-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="lcs-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="lcs-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="lcs-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center lcs-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Bring Your Event to Life
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your event and we'll design a set of live stations and a service plan that fits it perfectly.
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
