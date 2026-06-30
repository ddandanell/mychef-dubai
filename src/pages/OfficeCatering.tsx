import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Coffee,
  Sandwich,
  CalendarClock,
  Building2,
  Users,
  Leaf,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to set up office catering for our team (via mychef.ae/office-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const officeFormats = [
  {
    icon: Sandwich,
    title: 'Daily Office Lunches',
    description: 'Rotating lunch menus delivered to your floor each day — hot mains, salads, and sides that keep teams fuelled without the midday queue.',
    link: '/business-lunch-catering-dubai',
  },
  {
    icon: Coffee,
    title: 'Breakfast & Morning Spreads',
    description: 'Pastries, fruit, yoghurt, and freshly prepared hot breakfast for early starts, leadership mornings, and welcome days.',
    link: '/catering-dubai',
  },
  {
    icon: CalendarClock,
    title: 'Recurring Retainers',
    description: 'A standing weekly or monthly catering arrangement with a planned menu rotation, predictable invoicing, and a single point of contact.',
    link: '/corporate',
  },
  {
    icon: Users,
    title: 'Team & Department Meals',
    description: 'Shared team lunches, project celebrations, and all-hands gatherings catered for any headcount across your office.',
    link: '/staff-meals-catering-dubai',
  },
  {
    icon: Building2,
    title: 'DIFC & Business Bay Offices',
    description: 'Reliable delivery and on-site service for offices in DIFC, Business Bay, and the wider commercial districts of Dubai.',
    link: '/corporate',
  },
  {
    icon: Leaf,
    title: 'Healthy & Dietary Menus',
    description: 'Balanced, lighter options alongside vegetarian, vegan, and gluten-free choices so every member of your team is catered for.',
    link: '/healthy-catering-dubai',
  },
]

const includedItems = [
  { title: 'Planned Menu Rotation', description: 'A varied weekly rotation so lunch never feels repetitive for your team.' },
  { title: 'Reliable Daily Delivery', description: 'Consistent, on-time delivery to your floor across Dubai business districts.' },
  { title: 'Dietary Inclusivity', description: 'Vegetarian, vegan, gluten-free, and halal options arranged as standard.' },
  { title: 'Single Point of Contact', description: 'One account contact who knows your office, preferences, and schedule.' },
  { title: 'Flexible Headcount', description: 'Scale daily covers up or down as your team size and needs change.' },
  { title: 'Predictable Invoicing', description: 'Clear, consolidated billing on a weekly or monthly retainer cycle.' },
  { title: 'On-Site Set-Up', description: 'Buffet styling, labelling, and tidy pack-down handled by our team.' },
  { title: 'Quality Ingredients', description: 'Fresh produce and proteins prepared to a high standard every service.' },
]

const useCases = [
  {
    title: 'Daily Team Lunches',
    description: 'For offices that want to keep people on-site and energised, we run a planned daily lunch service with a rotating menu of hot mains, salads, and sides. A standing arrangement removes the daily decision-making and gives your team something genuinely good to look forward to — far more sustainable than ad-hoc deliveries.',
  },
  {
    title: 'Leadership Breakfasts',
    description: 'Early board sessions, investor mornings, and leadership stand-ups run smoother with a considered breakfast spread waiting in the room. Pastries, fresh fruit, and hot options arrive set up and ready, so your morning starts on the agenda rather than on logistics.',
  },
  {
    title: 'DIFC & Business Bay Retainers',
    description: 'For corporate offices in DIFC, Business Bay, and surrounding districts, a recurring retainer is the most cost-effective way to cater. You lock in a reliable rhythm, a known contact, and consolidated invoicing, while we handle the planning, delivery, and service week after week.',
  },
  {
    title: 'Growing Teams',
    description: 'As headcount grows, your catering should grow with it. We adjust daily covers, expand the menu, and add stations as your office scales — without renegotiating from scratch each time. It is catering built to keep pace with a busy, expanding workplace.',
  },
]

const galleryImages = [
  { src: '/service-corporate.webp', alt: 'Office catering set-up for a Dubai workplace' },
  { src: '/menu-appetizer.webp', alt: 'Fresh office lunch spread of appetizers and sides' },
  { src: '/service-catering.webp', alt: 'Daily office lunch buffet styling in Dubai' },
  { src: '/service-events.webp', alt: 'Corporate team gathering catering' },
  { src: '/menu-seafood.webp', alt: 'Lighter office lunch plate' },
  { src: '/menu-canapes.webp', alt: 'Office celebration finger food selection' },
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
    q: 'Do you offer recurring daily office catering?',
    a: 'Yes. A recurring retainer is our most popular office arrangement. We agree a weekly or monthly rotation, a delivery schedule, and a headcount, then run the service consistently. You get a planned menu, a single point of contact, and predictable invoicing rather than ad-hoc ordering.',
  },
  {
    q: 'Which areas of Dubai do you deliver office lunches to?',
    a: 'We regularly cater offices across DIFC, Business Bay, Downtown Dubai, Dubai Marina, and the wider commercial districts. If your office sits outside the central business areas, share your location when planning and we will confirm delivery.',
  },
  {
    q: 'Can you cater for dietary requirements across a whole team?',
    a: 'Absolutely. Vegetarian, vegan, gluten-free, and halal options are arranged as standard, and we can build lighter, balanced choices into every rotation. Share your team’s requirements once and we factor them into each service.',
  },
  {
    q: 'How does pricing work for an office retainer?',
    a: 'Retainer pricing is based on your headcount, frequency, and menu tier. Because it is a standing arrangement, invoicing is consolidated and predictable rather than billed per order. Request a quote and we will build a clear proposal around your office.',
  },
  {
    q: 'Can we adjust the headcount or pause the service?',
    a: 'Yes. Office life changes week to week, so we keep covers flexible. You can scale numbers up or down with reasonable notice, and pause around holidays or quieter periods, then resume the same arrangement when your team is back.',
  },
  {
    q: 'How far in advance should we set up office catering?',
    a: 'For a one-off office lunch, a few days’ notice is usually enough. To establish a recurring retainer, we recommend a short planning conversation one to two weeks ahead so we can agree the rotation, logistics, and dietary needs before the first service.',
  },
]

const relatedServices = [
  {
    title: 'Business Lunch Catering',
    description: 'Boardroom lunches, client meetings, and working lunches presented to a professional standard.',
    image: '/menu-appetizer.webp',
    link: '/business-lunch-catering-dubai',
  },
  {
    title: 'Staff Meals Catering',
    description: 'Daily team meals, canteens, and retainer catering that keeps your whole workforce well fed.',
    image: '/menu-meat.webp',
    link: '/staff-meals-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional corporate dining, from recurring office lunches to large company functions.',
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
  name: 'Office Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Office Catering Dubai', item: 'https://mychef.ae/office-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function OfficeCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.off-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.off-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.off-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.off-fmt-card', {
      scrollTrigger: { trigger: '.off-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.off-uc-item', {
      scrollTrigger: { trigger: '.off-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.off-inc-item', {
      scrollTrigger: { trigger: '.off-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.off-gallery-img', {
      scrollTrigger: { trigger: '.off-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.off-faq-item', {
      scrollTrigger: { trigger: '.off-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.off-loc-item', {
      scrollTrigger: { trigger: '.off-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.off-rel-card', {
      scrollTrigger: { trigger: '.off-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.off-cta', {
      scrollTrigger: { trigger: '.off-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Office Catering Dubai | Daily Lunches & Retainers"
        description="Office catering in Dubai with daily lunches, breakfast spreads, and recurring retainers for DIFC and Business Bay teams. Reliable delivery and clear billing. Request a quote."
        canonicalPath="/office-catering-dubai"
        ogImage="/service-corporate.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/office-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 off-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Office Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 off-hero-h1">
            Office Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 off-hero-sub">
            Daily office lunches, breakfast spreads, and recurring catering retainers for teams across DIFC, Business Bay, and the wider Dubai business districts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=office-catering-dubai" className="btn-primary opacity-0 translate-y-4 off-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 off-hero-cta"
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
            CATERING FOR THE WORKPLACE
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Well-Fed Teams, Every Working Day
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A good office lunch does more than feed people — it keeps teams on-site, sharpens the afternoon, and quietly signals that a company looks after its own. The challenge is consistency. Ad-hoc deliveries are unpredictable, repetitive, and surprisingly hard to manage at scale. At myCHEF Dubai, we solve that with a planned, reliable office catering service designed around the rhythm of a working week, from daily lunches and breakfast spreads to full recurring retainers.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            For offices in DIFC, Business Bay, and across the city, a standing arrangement is the most cost-effective and dependable way to cater. You get a rotating menu your team genuinely looks forward to, a single point of contact who knows your preferences, and consolidated invoicing instead of a stream of individual orders. Explore the formats below, or see how office catering fits within our wider <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              OFFICE CATERING FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering Around Your Working Week
            </h2>
          </div>

          <div className="off-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="off-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHO WE CATER FOR
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built for Busy Offices
            </h2>
          </div>

          <div className="off-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="off-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Office Catering Includes
          </h2>

          <div className="off-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="off-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Office Catering
          </h2>

          <div className="off-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="off-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Office Catering Questions
          </h2>

          <div className="off-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="off-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="off-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="off-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="off-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="off-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center off-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Set Up Catering for Your Office
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your headcount, schedule, and dietary needs and we'll build a reliable office catering plan — daily, weekly, or on a recurring retainer — with clear, predictable pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=office-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
