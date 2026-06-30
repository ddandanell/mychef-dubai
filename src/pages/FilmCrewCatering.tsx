import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Clapperboard,
  Sunrise,
  Salad,
  Clock,
  Truck,
  Coffee,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to arrange film crew catering in Dubai (via mychef.ae/film-crew-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const crewFormats = [
  {
    icon: Sunrise,
    title: 'Early Call Breakfasts',
    description: 'Hot breakfasts and grab-and-go options ready before sunrise call times, keeping cast and crew fuelled from the first shot of the day.',
    link: '/catering-dubai',
  },
  {
    icon: Clapperboard,
    title: 'On-Set Hot Lunches',
    description: 'Substantial, freshly cooked lunches served on location, with rotating menus that hold up across long, demanding shoot days.',
    link: '/production-catering-dubai',
  },
  {
    icon: Coffee,
    title: 'Craft Services Tables',
    description: 'Continuous craft tables stocked with snacks, fruit, pastries, and hot drinks so the unit can refuel between takes without losing momentum.',
    link: '/staff-meals-catering-dubai',
  },
  {
    icon: Salad,
    title: 'Full Dietary Range',
    description: 'Vegetarian, vegan, gluten-free, halal, and allergy-aware meals prepared alongside the main service so every crew member is covered.',
    link: '/corporate',
  },
  {
    icon: Clock,
    title: 'Overtime & Wrap Meals',
    description: 'Warm second meals and late-night wrap catering for extended schedules, night shoots, and overtime that runs well past the standard day.',
    link: '/production-catering-dubai',
  },
  {
    icon: Truck,
    title: 'Mobile Location Service',
    description: 'Self-sufficient setups for remote desert, beach, and city locations, with our own equipment, power, and crew bringing the kitchen to you.',
    link: '/catering-dubai',
  },
]

const useCases = [
  {
    title: 'Feature Films & Commercials',
    description: 'For feature shoots and high-end commercials across Dubai, we run reliable daily service for large units, scaling breakfast, lunch, and craft tables to the headcount on the call sheet and adapting as the schedule shifts.',
  },
  {
    title: 'Long Shoot Days & Night Shoots',
    description: 'Twelve-hour days and overnight shoots demand steady, energising food at the right moments. We plan hot meals, second meals, and continuous craft services around your shooting blocks so the crew never flags.',
  },
  {
    title: 'Remote & Desert Locations',
    description: 'When production moves to the desert, the coast, or an industrial backlot, we arrive fully equipped and self-contained, delivering the same standard of on-set catering far from any fixed kitchen.',
  },
  {
    title: 'Mixed Cast & Crew Requirements',
    description: 'From talent with specific dietary plans to a large technical crew, we prepare a full range of options side by side, keeping vegetarian, vegan, gluten-free, and halal meals clearly separated and easy to find.',
  },
]

const includedItems = [
  { title: 'Early Call Readiness', description: 'Breakfast and hot drinks prepared and served before pre-dawn call times.' },
  { title: 'Hot On-Set Lunches', description: 'Freshly cooked midday meals served on location, plated or buffet style.' },
  { title: 'Continuous Craft Services', description: 'Snacks, fruit, pastries, and drinks kept stocked throughout the shoot day.' },
  { title: 'Full Dietary Coverage', description: 'Vegetarian, vegan, gluten-free, halal, and allergy-aware meals as needed.' },
  { title: 'Overtime & Wrap Meals', description: 'Second meals and late catering for extended and night schedules.' },
  { title: 'Mobile Equipment', description: 'Self-sufficient kitchen setups for remote and off-grid locations.' },
  { title: 'On-Location Service Staff', description: 'A discreet team that works around the rhythm of your unit.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away with minimal footprint on set.' },
]

const galleryImages = [
  { src: '/service-catering.webp', alt: 'On-set film crew catering buffet in Dubai' },
  { src: '/menu-meat.webp', alt: 'Hot grilled main course for a film crew lunch' },
  { src: '/service-events.webp', alt: 'Location catering setup for a production unit' },
  { src: '/service-corporate.webp', alt: 'Craft services table for cast and crew' },
  { src: '/menu-appetizer.webp', alt: 'Fresh craft service snacks on set' },
  { src: '/service-villa.webp', alt: 'Catering service for a Dubai film shoot' },
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
    q: 'Can you handle very early call times?',
    a: 'Yes. We routinely arrive and serve before pre-dawn call times, with hot breakfasts, coffee, and grab-and-go options ready the moment your unit needs them. Share the call sheet and we will plan our timings around it.',
  },
  {
    q: 'Do you cater on remote or desert locations?',
    a: 'We do. Our setups are self-sufficient, with our own equipment and power, so we can deliver full on-set catering at desert, beach, industrial, and off-grid locations across the Dubai region.',
  },
  {
    q: 'How do you manage different dietary needs across a crew?',
    a: 'We prepare vegetarian, vegan, gluten-free, halal, and allergy-aware meals alongside the main service and label them clearly. Provide a breakdown of requirements and we will make sure every cast and crew member is covered.',
  },
  {
    q: 'Can you provide second meals and wrap catering?',
    a: 'Yes. For long shoot days, night shoots, and overtime, we plan warm second meals and late-night wrap catering so the unit stays fuelled however far the schedule runs.',
  },
  {
    q: 'How do you scale for large units?',
    a: 'We cater everything from small commercial crews to large feature units, scaling breakfast, lunch, and craft tables to the headcount on the call sheet and adjusting day to day as numbers change.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'For multi-day shoots we recommend booking two to four weeks ahead so we can plan logistics around your locations and schedule. For shorter or last-minute productions, contact us and we will do our best to accommodate.',
  },
]

const relatedServices = [
  {
    title: 'Production Catering',
    description: 'On-location catering for TV, photo, and event productions, with full craft services.',
    image: '/service-catering.webp',
    link: '/production-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional corporate dining, from working lunches to large functions.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
  {
    title: 'Staff Meals Catering',
    description: 'Reliable daily meal programmes for teams, units, and on-site workforces.',
    image: '/menu-meat.webp',
    link: '/staff-meals-catering-dubai',
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
  name: 'Film Crew Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Film Crew Catering Dubai', item: 'https://mychef.ae/film-crew-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function FilmCrewCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.film-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.film-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.film-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.film-fmt-card', {
      scrollTrigger: { trigger: '.film-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.film-uc-item', {
      scrollTrigger: { trigger: '.film-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.film-inc-item', {
      scrollTrigger: { trigger: '.film-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.film-gallery-img', {
      scrollTrigger: { trigger: '.film-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.film-faq-item', {
      scrollTrigger: { trigger: '.film-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.film-loc-item', {
      scrollTrigger: { trigger: '.film-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.film-rel-card', {
      scrollTrigger: { trigger: '.film-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.film-cta', {
      scrollTrigger: { trigger: '.film-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Film Crew Catering Dubai | On-Set Production Meals"
        description="Film crew catering in Dubai with early call breakfasts, hot on-set lunches, craft services, and full dietary coverage for long shoots. Request your custom quote today."
        canonicalPath="/film-crew-catering-dubai"
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
          <nav className="mb-6 opacity-0 translate-y-4 film-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Film Crew Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 film-hero-h1">
            Film Crew Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 film-hero-sub">
            On-set catering for productions across Dubai — early call breakfasts, hot lunches, craft services, and full dietary coverage that keeps cast and crew fuelled through the longest shoot days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=film-crew-catering-dubai" className="btn-primary opacity-0 translate-y-4 film-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 film-hero-cta"
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
            CATERING THAT KEEPS THE UNIT MOVING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Food That Holds the Schedule Together
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            On a film set, catering is part of the schedule. A well-fed unit moves faster, holds its energy through the afternoon, and stays sharp into overtime — and that depends on hot, reliable food arriving exactly when the call sheet says it should. At myCHEF Dubai, we treat the kitchen as part of the production team, planning every meal around your shooting blocks, your headcount, and the rhythm of the day.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From early call breakfasts and substantial on-set lunches to continuously stocked craft tables and late wrap meals, we keep cast and crew looked after from the first shot to the last. Explore our crew formats below, or see how it sits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link> and dedicated <Link to="/production-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">production catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              ON-SET FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering for Every Stage of the Day
            </h2>
          </div>

          <div className="film-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crewFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="film-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE WE WORK
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built for the Production
            </h2>
          </div>

          <div className="film-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="film-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Film Crew Catering Includes
          </h2>

          <div className="film-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="film-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our On-Set Catering
          </h2>

          <div className="film-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="film-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
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
            Film Crew Catering Questions
          </h2>

          <div className="film-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="film-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="film-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="film-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="film-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="film-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center film-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Shoot Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Send us your call sheet, headcount, and locations and we'll build an on-set catering plan — breakfasts, lunches, craft services, and wrap meals — that keeps your unit fuelled from first light to wrap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=film-crew-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
