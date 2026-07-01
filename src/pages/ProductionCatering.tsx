import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Video,
  Camera,
  Coffee,
  Sunrise,
  Salad,
  Truck,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to arrange production catering in Dubai (via mychef.ae/production-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const productionFormats = [
  {
    icon: Video,
    title: 'TV & Broadcast Catering',
    description: 'Full daily catering for television and broadcast shoots, scaled to large casts and crews and timed precisely around recording and rehearsal blocks.',
    link: '/film-crew-catering-dubai',
  },
  {
    icon: Camera,
    title: 'Photo & Editorial Shoots',
    description: 'Lighter, elegant catering for photographic and editorial productions, where presentation matters and talent need fresh, considered food on hand.',
    link: '/catering-dubai',
  },
  {
    icon: Coffee,
    title: 'Craft Services',
    description: 'Continuous craft tables of snacks, fruit, pastries, and hot drinks that keep production teams refuelled between setups without breaking the flow.',
    link: '/office-catering-dubai',
  },
  {
    icon: Sunrise,
    title: 'Early & Extended Hours',
    description: 'Pre-call breakfasts and late wrap meals for productions that start before dawn and run well into the night across multi-day schedules.',
    link: '/film-crew-catering-dubai',
  },
  {
    icon: Salad,
    title: 'Full Dietary Range',
    description: 'Vegetarian, vegan, gluten-free, halal, and allergy-aware options prepared alongside the main service so every member of the production is looked after.',
    link: '/corporate',
  },
  {
    icon: Truck,
    title: 'Mobile Location Service',
    description: 'Self-contained setups with our own equipment for studio, warehouse, desert, and on-street productions anywhere across the Dubai region.',
    link: '/catering-dubai',
  },
]

const useCases = [
  {
    title: 'TV & Commercial Productions',
    description: 'For television series, commercials, and branded content shot across Dubai, we run dependable daily service for large units, planning breakfast, lunch, and craft tables around the production schedule and adjusting as the day evolves.',
  },
  {
    title: 'Photo & Editorial Shoots',
    description: 'Fashion, product, and editorial shoots call for catering that looks as good as it tastes. We keep talent and crew supplied with fresh, light, beautifully presented food that suits long studio days without weighing anyone down.',
  },
  {
    title: 'Event & Live Productions',
    description: 'Behind every event production is a crew that needs feeding. From conferences and concerts to brand activations, we cater the technical and operational teams who build, run, and break down the show.',
  },
  {
    title: 'Multi-Day & Remote Shoots',
    description: 'For extended schedules and locations away from any fixed kitchen, we arrive fully equipped and self-sufficient, delivering consistent catering and craft services across every day of the production.',
  },
]

const includedItems = [
  { title: 'Daily Production Service', description: 'Breakfast, lunch, and craft tables timed to the production schedule.' },
  { title: 'Craft Services', description: 'Continuously stocked snacks, fruit, pastries, and hot drinks on set.' },
  { title: 'Early & Late Catering', description: 'Pre-call breakfasts and wrap meals for extended shooting hours.' },
  { title: 'Full Dietary Coverage', description: 'Vegetarian, vegan, gluten-free, halal, and allergy-aware meals as needed.' },
  { title: 'Considered Presentation', description: 'Catering styled to suit photo, editorial, and brand-conscious shoots.' },
  { title: 'Mobile Equipment', description: 'Self-sufficient kitchen setups for studio, warehouse, and remote sites.' },
  { title: 'On-Location Service Staff', description: 'A discreet team that works around the rhythm of the production.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away with minimal footprint.' },
]

const galleryImages = [
  { src: '/service-catering.webp', alt: 'Production catering buffet on a Dubai shoot' },
  { src: '/menu-appetizer.webp', alt: 'Fresh craft services selection for a production crew' },
  { src: '/service-events.webp', alt: 'On-location catering setup for an event production' },
  { src: '/service-corporate.webp', alt: 'Catering for a TV production team in Dubai' },
  { src: '/menu-seafood.webp', alt: 'Light plated catering for a photo shoot' },
  { src: '/service-villa.webp', alt: 'Production unit catering service in Dubai' },
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
    q: 'What types of production do you cater for?',
    a: 'We cater television and broadcast shoots, commercials, photographic and editorial productions, branded content, and event productions across Dubai. Whether the unit is small or large, we scale the service to suit.',
  },
  {
    q: 'What does craft services include?',
    a: 'Our craft tables are kept continuously stocked with snacks, fresh fruit, pastries, and hot drinks throughout the shoot, so the production team can refuel between setups without losing momentum.',
  },
  {
    q: 'Can you cater early starts and late wraps?',
    a: 'Yes. We routinely serve pre-call breakfasts before dawn and provide wrap meals for productions running late into the night, planning our timings around your shooting schedule.',
  },
  {
    q: 'Do you handle a full range of dietary needs?',
    a: 'We do. Vegetarian, vegan, gluten-free, halal, and allergy-aware meals are prepared alongside the main service and clearly labelled. Share your requirements and we will make sure everyone on the production is covered.',
  },
  {
    q: 'Can you work at studios, warehouses, and remote locations?',
    a: 'Yes. Our setups are self-sufficient, with our own equipment, so we can deliver full production catering at studios, warehouses, desert, and on-street locations across the Dubai region.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'For multi-day productions we recommend two to four weeks so we can plan logistics around your schedule and locations. For shorter or last-minute shoots, contact us and we will do our best to accommodate.',
  },
]

const relatedServices = [
  {
    title: 'Film Crew Catering',
    description: 'On-set catering for film shoots, with early calls, hot lunches, and wrap meals.',
    image: '/service-catering.webp',
    link: '/film-crew-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional corporate dining, from working lunches to large functions.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
  {
    title: 'Office Catering',
    description: 'Reliable catering for meetings, working lunches, and office events.',
    image: '/menu-appetizer.webp',
    link: '/office-catering-dubai',
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
  name: 'Production Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Production Catering Dubai', item: 'https://mychef.ae/production-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function ProductionCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.prod-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.prod-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.prod-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.prod-fmt-card', {
      scrollTrigger: { trigger: '.prod-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.prod-uc-item', {
      scrollTrigger: { trigger: '.prod-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.prod-inc-item', {
      scrollTrigger: { trigger: '.prod-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.prod-gallery-img', {
      scrollTrigger: { trigger: '.prod-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.prod-faq-item', {
      scrollTrigger: { trigger: '.prod-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.prod-loc-item', {
      scrollTrigger: { trigger: '.prod-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.prod-rel-card', {
      scrollTrigger: { trigger: '.prod-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.prod-cta', {
      scrollTrigger: { trigger: '.prod-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Production Catering Dubai | TV, Photo & Event Crews"
        description="Production catering in Dubai for TV, photo, and event shoots — daily crew meals, craft services, early calls, and full dietary coverage. Request your custom quote today."
        canonicalPath="/production-catering-dubai"
        ogImage="/service-catering.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/film-production-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 prod-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Production Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 prod-hero-h1">
            Production Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 prod-hero-sub">
            On-location catering for TV, photo, and event productions across Dubai — daily crew meals, craft services, and full dietary coverage that keeps every shoot running on time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=production-catering-dubai" className="btn-primary opacity-0 translate-y-4 prod-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 prod-hero-cta"
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
            CATERING THAT KEEPS PRODUCTION ON TIME
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Reliable Food for Demanding Schedules
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A production runs on its schedule, and catering is part of how that schedule holds. Hot meals served at the right moment, craft tables kept stocked between setups, and dietary needs handled without fuss all add up to a unit that stays focused and on time. At myCHEF Dubai, we plan production catering as part of the operation — timed to your call sheet, scaled to your headcount, and consistent across every day of the shoot.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From television and broadcast crews to photo shoots, branded content, and live event productions, we keep cast, talent, and technical teams looked after from the first setup to the final wrap. Explore our production formats below, or see how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link> and dedicated <Link to="/film-crew-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">film crew catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              PRODUCTION FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering for Every Production
            </h2>
          </div>

          <div className="prod-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="prod-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHO WE FEED
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built for the Production
            </h2>
          </div>

          <div className="prod-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="prod-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Production Catering Includes
          </h2>

          <div className="prod-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="prod-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Production Catering
          </h2>

          <div className="prod-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="prod-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Production Catering Questions
          </h2>

          <div className="prod-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="prod-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Catering Across Dubai
          </h2>

          <div className="prod-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="prod-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="prod-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="prod-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center prod-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Production Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your shoot — the dates, locations, headcount, and dietary needs — and we'll build a catering plan that keeps your production fed, focused, and on schedule.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=production-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
