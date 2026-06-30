import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sandwich,
  Building,
  Users,
  Coffee,
  PartyPopper,
  Salad,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan finger food catering in Dubai (via mychef.ae/finger-food-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const fingerFoodFormats = [
  {
    icon: Building,
    title: 'Office & Corporate',
    description: 'Bite-size spreads for meetings, training days, and office celebrations — easy to serve, easy to eat, and kind to your schedule.',
    link: '/corporate',
  },
  {
    icon: PartyPopper,
    title: 'Casual Celebrations',
    description: 'Relaxed birthdays, get-togethers, and house parties with generous platters guests can graze on throughout the event.',
    link: '/party-catering-dubai',
  },
  {
    icon: Salad,
    title: 'Sharing Platters',
    description: 'Mezze boards, sliders, mini wraps, and dips arranged as beautiful sharing displays for tables and counters.',
    link: '/catering-dubai',
  },
  {
    icon: Coffee,
    title: 'Networking & Workshops',
    description: 'Light, mess-free bites that keep conversations flowing at networking sessions, seminars, and breakout breaks.',
    link: '/corporate',
  },
  {
    icon: Users,
    title: 'Receptions & Mixers',
    description: 'Stand-up receptions and informal mixers served with a steady flow of warm and cold finger food.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Sandwich,
    title: 'Buffet-Style Bites',
    description: 'A relaxed alternative to a full meal — abundant finger-food stations that let guests serve themselves.',
    link: '/buffet-catering-dubai',
  },
]

const includedItems = [
  { title: 'Bite-Size Menus', description: 'Sliders, wraps, skewers, dips, and mini bites designed to eat on the move.' },
  { title: 'Hot & Cold Selections', description: 'A balanced range of warm savoury bites and fresh chilled options.' },
  { title: 'Sharing Platters & Boards', description: 'Generous, styled grazing boards for tables, counters, and breakout areas.' },
  { title: 'Office-Friendly Delivery', description: 'Clean, organised drop-off and setup that fits around your working day.' },
  { title: 'Service Staff (Optional)', description: 'Servers and hosts available when you want full-service presentation.' },
  { title: 'Dietary Flexibility', description: 'Halal, vegetarian, vegan, and allergy-aware bites clearly labelled.' },
  { title: 'Presentation & Styling', description: 'Tidy, attractive displays that look considered without being fussy.' },
  { title: 'Setup & Cleanup', description: 'We set up, keep things flowing, and clear away so you can carry on.' },
]

const useCases = [
  {
    title: 'Office Events & Meetings',
    description: 'Working lunches, training days, board meetings, and office celebrations served with clean, mess-free bites that fit around a busy schedule. Reliable delivery and setup across DIFC, Business Bay, and beyond.',
  },
  {
    title: 'Casual Home Gatherings',
    description: 'Relaxed birthdays, family get-togethers, and house parties where guests prefer to graze rather than sit down. Generous platters let everyone help themselves throughout the event.',
  },
  {
    title: 'Networking & Workshops',
    description: 'Light, easy-to-hold finger food that keeps conversation flowing at networking sessions, seminars, and breakout breaks, without interrupting the flow of the day.',
  },
  {
    title: 'Receptions & Mixers',
    description: 'Stand-up receptions and informal mixers served with a steady rhythm of warm and cold bites, designed to keep energy high and guests mingling.',
  },
]

const galleryImages = [
  { src: '/menu-canapes.webp', alt: 'Finger food selection in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Sharing platters and bite-size food' },
  { src: '/service-corporate.webp', alt: 'Corporate finger food catering' },
  { src: '/service-events.webp', alt: 'Finger food at a Dubai event' },
  { src: '/menu-cocktails.webp', alt: 'Drinks and finger food reception' },
  { src: '/service-catering.webp', alt: 'Buffet-style finger food spread' },
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
    q: 'What is the difference between finger food and canapés?',
    a: 'Finger food tends to be slightly larger, more casual, and generous — sliders, wraps, skewers, and sharing boards. Canapés are smaller, more refined single bites for formal receptions. We offer both and can advise on the right fit.',
  },
  {
    q: 'Is finger food suitable for office and corporate events?',
    a: 'Yes. Finger food is ideal for meetings, training days, and office celebrations. It is mess-free, easy to serve, and fits around a working schedule, with clean delivery and setup that does not disrupt your day.',
  },
  {
    q: 'Do you offer hot and cold finger food?',
    a: 'Absolutely. We balance warm savoury bites with fresh chilled options, so every spread feels varied and satisfying. Menus are built around your event, guest count, and the time of day.',
  },
  {
    q: 'Can you deliver finger food without full service staff?',
    a: 'Yes. For office and casual events, we offer clean drop-off and setup without staff. For receptions and larger gatherings, full-service waiters and hosts are available on request.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We routinely create vegetarian, vegan, halal, gluten-free, and allergy-aware finger food, clearly labelled, so every guest can eat with confidence.',
  },
  {
    q: 'How far in advance should I book finger food catering?',
    a: 'For office and smaller events, a few days to one week is usually enough. For larger gatherings, we recommend one to two weeks. During peak season (November to March), earlier booking is advised.',
  },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Full-service luxury catering for events of every size across Dubai.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Canapé Catering',
    description: 'Refined passed canapés and styled displays for elegant receptions.',
    image: '/menu-canapes.webp',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional dining for boardroom lunches, conferences, and functions.',
    image: '/service-corporate.webp',
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
  name: 'Finger Food Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Finger Food Catering Dubai', item: 'https://mychef.ae/finger-food-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function FingerFoodCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.fin-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.fin-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.fin-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.fin-fmt-card', {
      scrollTrigger: { trigger: '.fin-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fin-uc-item', {
      scrollTrigger: { trigger: '.fin-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fin-inc-item', {
      scrollTrigger: { trigger: '.fin-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fin-gallery-img', {
      scrollTrigger: { trigger: '.fin-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.fin-faq-item', {
      scrollTrigger: { trigger: '.fin-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fin-loc-item', {
      scrollTrigger: { trigger: '.fin-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.fin-rel-card', {
      scrollTrigger: { trigger: '.fin-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fin-cta', {
      scrollTrigger: { trigger: '.fin-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Finger Food Catering Dubai | Bite-Size Menus"
        description="Premium finger food catering in Dubai for offices, corporate events, and casual celebrations. Bite-size menus, sharing platters, hot and cold options, easy service."
        canonicalPath="/finger-food-catering-dubai"
        ogImage="/menu-canapes.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/canape-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 fin-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Finger Food Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 fin-hero-h1">
            Finger Food Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 fin-hero-sub">
            Generous bite-size menus, sharing platters, and easy service for offices, corporate events, and casual celebrations — relaxed, mess-free, and beautifully presented across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=finger-food-catering-dubai" className="btn-primary opacity-0 translate-y-4 fin-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 fin-hero-cta"
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
            DUBAI FINGER FOOD SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Effortless Bites for Every Gathering
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Not every event calls for a seated meal. Sometimes the best hosting is a generous spread of bites that lets guests eat, move, and talk freely. At myCHEF Dubai, finger food catering is about exactly that — relaxed, satisfying, mess-free food that keeps an office meeting, a casual party, or a stand-up reception flowing.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Our menus span sliders, wraps, skewers, mezze boards, dips, and warm savoury bites, balanced between hot and cold and built around the time of day. For corporate events, we deliver and set up cleanly around your schedule; for casual gatherings, we lay out abundant platters guests can graze on all evening. Add service staff when you want full presentation, or keep it simple with a tidy drop-off. Explore our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or speak to us to start planning.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Finger Food Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FINGER FOOD FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Finger Food for Every Event
            </h2>
          </div>

          <div className="fin-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fingerFoodFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="fin-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              Finger Food for Every Setting
            </h2>
          </div>

          <div className="fin-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="fin-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Finger Food Catering Includes
          </h2>

          <div className="fin-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="fin-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Finger Food Catering
          </h2>

          <div className="fin-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="fin-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Finger Food Catering Questions
          </h2>

          <div className="fin-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="fin-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Finger Food Catering Across Dubai
          </h2>

          <div className="fin-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="fin-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="fin-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="fin-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center fin-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Finger Food Spread
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your event and we'll design a bite-size menu and service plan that fits it perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=finger-food-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
