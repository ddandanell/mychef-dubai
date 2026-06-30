import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Briefcase,
  Handshake,
  Clock,
  Utensils,
  Presentation,
  Leaf,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to arrange business lunch catering')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const lunchFormats = [
  {
    icon: Presentation,
    title: 'Boardroom Lunches',
    description: 'Discreet, polished lunches delivered and set up in your boardroom so meetings flow without breaking for an off-site.',
    link: '/corporate',
  },
  {
    icon: Handshake,
    title: 'Client Meeting Catering',
    description: 'Impressive plated or shared menus for hosting clients and partners — the kind of detail that reflects well on your firm.',
    link: '/conference-catering-dubai',
  },
  {
    icon: Clock,
    title: 'Working Lunches',
    description: 'Efficient, hand-friendly menus designed to keep a session moving — eaten at the table, with minimal disruption.',
    link: '/office-catering-dubai',
  },
  {
    icon: Briefcase,
    title: 'Executive Lunches',
    description: 'Elevated menus for leadership lunches, partner meetings, and investor sessions where presentation matters.',
    link: '/corporate',
  },
  {
    icon: Utensils,
    title: 'Plated & Buffet Service',
    description: 'Choose individually plated lunches for formal settings or a tidy buffet for larger groups and flexible timing.',
    link: '/catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Dietary-Inclusive Menus',
    description: 'Vegetarian, vegan, gluten-free, and lighter options built in, so every guest at the table is well looked after.',
    link: '/healthy-catering-dubai',
  },
]

const includedItems = [
  { title: 'Refined Presentation', description: 'Menus styled and served to a standard that reflects well on your business.' },
  { title: 'Punctual Delivery', description: 'On-time arrival and set-up timed precisely around your meeting agenda.' },
  { title: 'Discreet On-Site Service', description: 'Quiet, professional set-up and clearing that never interrupts the room.' },
  { title: 'Dietary Inclusivity', description: 'Vegetarian, vegan, gluten-free, and halal options arranged on request.' },
  { title: 'Plated or Buffet', description: 'Formal individual plating or a flexible buffet, suited to your setting.' },
  { title: 'Flexible Group Sizes', description: 'From an intimate boardroom of six to large client gatherings.' },
  { title: 'Single Point of Contact', description: 'One contact to plan menus, timings, and recurring meeting catering.' },
  { title: 'Quality Ingredients', description: 'Fresh produce and proteins prepared to a consistently high standard.' },
]

const useCases = [
  {
    title: 'Boardroom & Partner Meetings',
    description: 'When a meeting runs through lunch, stepping out costs momentum. A boardroom lunch keeps everyone in the room and the agenda on track. We deliver, set up discreetly, and clear away just as quietly, so the focus stays on the conversation rather than the catering.',
  },
  {
    title: 'Hosting Clients & Investors',
    description: 'A considered lunch is part of how you present your firm. For client pitches, partner negotiations, and investor sessions, we provide refined, well-styled menus that make hosting effortless and leave the right impression — without you needing to leave the building.',
  },
  {
    title: 'Recurring Meeting Catering',
    description: 'Firms that host regular client lunches or weekly leadership sessions benefit from a standing arrangement. We keep your preferences, dietary notes, and timings on file, so each booking takes a single message and the quality stays consistent meeting after meeting.',
  },
  {
    title: 'Working Lunches Under Pressure',
    description: 'Some sessions cannot pause. For deal rooms, planning days, and back-to-back agendas, we design efficient, hand-friendly menus that can be eaten at the table with minimal disruption — fuelling the team without breaking the flow of work.',
  },
]

const galleryImages = [
  { src: '/service-corporate.jpg', alt: 'Business lunch catering set-up in a Dubai boardroom' },
  { src: '/menu-appetizer.jpg', alt: 'Plated business lunch appetizer selection' },
  { src: '/menu-seafood.jpg', alt: 'Executive lunch seafood plate' },
  { src: '/service-catering.jpg', alt: 'Working lunch buffet styling for a meeting' },
  { src: '/service-events.jpg', alt: 'Client meeting catering in Dubai' },
  { src: '/menu-canapes.jpg', alt: 'Light finger food for a working session' },
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
    q: 'What is the minimum group size for a business lunch?',
    a: 'We cater business lunches from small boardroom groups of around six upward. For intimate executive lunches we lean towards plated service, while larger meetings and client gatherings often work best as a buffet. Tell us your numbers and we will recommend the right format.',
  },
  {
    q: 'Can you time the lunch precisely around our meeting?',
    a: 'Yes. We plan delivery and set-up around your agenda so food is ready exactly when you break, not before. Our team works discreetly, and for working lunches we can have everything in place so the session never has to stop.',
  },
  {
    q: 'Do you cater recurring client or leadership lunches?',
    a: 'We do, and it is one of our most valued arrangements. For firms hosting regular client lunches or weekly leadership sessions, we keep your menus, dietary notes, and timings on file so each booking is quick to confirm and consistently high in quality.',
  },
  {
    q: 'Can you accommodate dietary requirements for guests?',
    a: 'Absolutely. Vegetarian, vegan, gluten-free, and halal options are arranged as standard, and we can build lighter, balanced choices into any lunch. Share your guests’ needs in advance and we will make sure everyone at the table is looked after.',
  },
  {
    q: 'Do you deliver to offices across the Dubai business districts?',
    a: 'Yes. We regularly cater business lunches in DIFC, Business Bay, Downtown Dubai, and the wider commercial areas of the city. Provide your office location when planning and we will confirm delivery and timing.',
  },
  {
    q: 'How much notice do you need for a business lunch?',
    a: 'For a standard business lunch, a few working days’ notice is usually sufficient. For larger client events or bespoke executive menus, we recommend a little more lead time. If you cater regularly, a standing arrangement makes last-minute bookings far simpler.',
  },
]

const relatedServices = [
  {
    title: 'Office Catering',
    description: 'Daily office lunches, breakfast spreads, and recurring retainers for teams across Dubai.',
    image: '/menu-appetizer.jpg',
    link: '/office-catering-dubai',
  },
  {
    title: 'Conference Catering',
    description: 'Coffee breaks, working lunches, and multi-day catering for conferences and seminars.',
    image: '/service-events.jpg',
    link: '/conference-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional corporate dining, from boardroom lunches to large company functions.',
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
  name: 'Business Lunch Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Business Lunch Catering Dubai', item: 'https://mychef.ae/business-lunch-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function BusinessLunchCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.blun-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.blun-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.blun-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.blun-fmt-card', {
      scrollTrigger: { trigger: '.blun-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.blun-uc-item', {
      scrollTrigger: { trigger: '.blun-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.blun-inc-item', {
      scrollTrigger: { trigger: '.blun-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.blun-gallery-img', {
      scrollTrigger: { trigger: '.blun-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.blun-faq-item', {
      scrollTrigger: { trigger: '.blun-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.blun-loc-item', {
      scrollTrigger: { trigger: '.blun-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.blun-rel-card', {
      scrollTrigger: { trigger: '.blun-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.blun-cta', {
      scrollTrigger: { trigger: '.blun-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Business Lunch Catering Dubai | Boardroom & Clients"
        description="Business lunch catering in Dubai for boardroom meetings, client hosting, and working lunches. Refined plated or buffet service, timed around your agenda. Request a quote today."
        canonicalPath="/business-lunch-catering-dubai"
        ogImage="/service-corporate.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-corporate.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 blun-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Business Lunch Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 blun-hero-h1">
            Business Lunch Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 blun-hero-sub">
            Boardroom lunches, client meeting catering, and efficient working lunches — refined, punctual, and delivered to your office across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 blun-hero-cta">
              Request a Business Lunch Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 blun-hero-cta"
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
            CATERING FOR MEETINGS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Lunches That Keep Business Moving
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            A business lunch is rarely just about food. It is a chance to keep a meeting moving, to host a client well, or to give a hard-working team the break they need without losing the thread of the day. Done badly, catering interrupts the room. Done well, it disappears into the background — arriving on time, presented properly, and cleared away just as quietly. That is the standard we hold every business lunch to at myCHEF Dubai.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            From discreet boardroom lunches and polished client hosting to fast, hand-friendly working lunches, we tailor each menu to the setting and the agenda. Firms that host regularly find a standing arrangement saves time and keeps quality consistent, booking after booking. Explore the formats below, or see how business lunches sit within our wider <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              BUSINESS LUNCH FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              The Right Lunch for the Room
            </h2>
          </div>

          <div className="blun-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lunchFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="blun-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE IT FITS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Made for the Moment
            </h2>
          </div>

          <div className="blun-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="blun-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Business Lunch Catering Includes
          </h2>

          <div className="blun-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="blun-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Business Lunches
          </h2>

          <div className="blun-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="blun-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Business Lunch Questions
          </h2>

          <div className="blun-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="blun-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
            Catering Across Dubai
          </h2>

          <div className="blun-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="blun-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="blun-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="blun-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center blun-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Business Lunch
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your meeting, your guests, and your timings, and we'll arrange a refined business lunch — one-off or recurring — that keeps the room on track and impresses every guest.
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
