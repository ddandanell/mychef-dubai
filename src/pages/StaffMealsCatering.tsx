import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  ChefHat,
  CalendarClock,
  Users,
  HandPlatter,
  Leaf,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to arrange staff meals catering (via mychef.ae/staff-meals-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const staffFormats = [
  {
    icon: UtensilsCrossed,
    title: 'Daily Team Meals',
    description: 'Hearty, balanced meals delivered each day to keep your whole team well fed and productive throughout the working week.',
    link: '/office-catering-dubai',
  },
  {
    icon: HandPlatter,
    title: 'Staff Canteen Service',
    description: 'A managed canteen-style buffet for larger workforces, with hot mains, sides, and salads served on-site at scale.',
    link: '/corporate',
  },
  {
    icon: CalendarClock,
    title: 'Recurring Retainers',
    description: 'A standing weekly or monthly meal contract with a planned rotation, predictable invoicing, and one point of contact.',
    link: '/corporate',
  },
  {
    icon: ChefHat,
    title: 'Halal Menus',
    description: 'Fully halal menus prepared to a high standard, suitable for diverse teams across your organisation.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Shift & Site Catering',
    description: 'Reliable meals for shift workers and operational sites, scheduled around your rosters and delivery windows.',
    link: '/corporate',
  },
  {
    icon: Leaf,
    title: 'Healthy & Dietary Options',
    description: 'Balanced, lighter choices alongside vegetarian, vegan, and gluten-free options so every team member is catered for.',
    link: '/healthy-catering-dubai',
  },
]

const includedItems = [
  { title: 'Planned Meal Rotation', description: 'A varied weekly rotation that keeps daily team meals interesting.' },
  { title: 'Halal Preparation', description: 'Fully halal menus prepared to a consistently high standard.' },
  { title: 'Reliable Daily Delivery', description: 'Dependable, on-time delivery scheduled around your operating hours.' },
  { title: 'Dietary Inclusivity', description: 'Vegetarian, vegan, gluten-free, and balanced options as standard.' },
  { title: 'Canteen-Style Service', description: 'Buffet set-up and service for larger workforces, handled on-site.' },
  { title: 'Single Point of Contact', description: 'One account contact who knows your team, rosters, and preferences.' },
  { title: 'Predictable Invoicing', description: 'Consolidated billing on a weekly or monthly retainer cycle.' },
  { title: 'Scalable Headcount', description: 'Daily covers scaled smoothly as your workforce grows or shifts.' },
]

const useCases = [
  {
    title: 'Daily Workforce Meals',
    description: 'When teams are on-site all day, a reliable daily meal keeps people fuelled, focused, and looked after. We run a planned rotation of hearty, balanced meals so staff have something good to count on each day — far more sustainable and cost-effective than ad-hoc ordering across a large workforce.',
  },
  {
    title: 'Staff Canteens at Scale',
    description: 'For larger organisations, a managed canteen-style service is the efficient way to feed many people well. We set up buffet stations with hot mains, sides, and salads, serve on-site, and clear away — giving your workforce a proper meal without you running an in-house kitchen.',
  },
  {
    title: 'Recurring Retainers',
    description: 'A standing meal retainer is the backbone of dependable staff catering. We agree a rotation, schedule, and headcount, then deliver consistently week after week, with consolidated invoicing and a single contact. It removes the daily admin and locks in a reliable standard for the whole team.',
  },
  {
    title: 'Shift & Operational Sites',
    description: 'Shift work and operational sites need catering that fits the roster, not the other way around. We schedule meals around your shift patterns and delivery windows, so teams working early, late, or around the clock are reliably fed at the right times.',
  },
]

const galleryImages = [
  { src: '/service-corporate.webp', alt: 'Staff meals catering set-up for a Dubai workforce' },
  { src: '/menu-meat.webp', alt: 'Hearty daily staff meal main course' },
  { src: '/service-catering.webp', alt: 'Staff canteen buffet service styling' },
  { src: '/service-events.webp', alt: 'Team meal catering for a large organisation' },
  { src: '/menu-appetizer.webp', alt: 'Balanced staff meal sides and salads' },
  { src: '/menu-seafood.webp', alt: 'Lighter staff meal option plate' },
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
    q: 'Do you offer recurring daily staff meals?',
    a: 'Yes. A recurring retainer is our most popular staff catering arrangement. We agree a weekly or monthly rotation, a delivery schedule, and a headcount, then deliver consistently. You get a planned menu, a single point of contact, and predictable invoicing instead of ad-hoc daily ordering.',
  },
  {
    q: 'Are your staff menus halal?',
    a: 'Yes. We prepare fully halal menus to a high standard, which makes them suitable for diverse teams. If your workforce has additional requirements, share them when planning and we will build the rotation to suit everyone.',
  },
  {
    q: 'Can you cater large workforces with a canteen service?',
    a: 'We can. For larger organisations we provide a managed canteen-style buffet — hot mains, sides, and salads set up and served on-site at scale, then cleared away. It gives your team a proper meal without you needing to run an in-house kitchen.',
  },
  {
    q: 'Can you work around shift patterns and delivery windows?',
    a: 'Yes. For shift workers and operational sites, we schedule meals around your rosters and preferred delivery windows, so teams working early, late, or around the clock are reliably fed at the right times rather than catered to a standard schedule.',
  },
  {
    q: 'How does pricing work for a staff meals retainer?',
    a: 'Retainer pricing is based on your headcount, frequency, and menu tier. Because it is a standing arrangement, invoicing is consolidated and predictable rather than billed per order. Request a quote and we will build a clear proposal around your workforce.',
  },
  {
    q: 'How far in advance should we set up staff catering?',
    a: 'For a one-off team meal, a few days’ notice is usually enough. To establish a recurring retainer or canteen service, we recommend a short planning conversation one to two weeks ahead so we can agree the rotation, dietary needs, and delivery logistics before the first service.',
  },
]

const relatedServices = [
  {
    title: 'Office Catering',
    description: 'Daily office lunches, breakfast spreads, and recurring retainers for teams across Dubai.',
    image: '/menu-appetizer.webp',
    link: '/office-catering-dubai',
  },
  {
    title: 'Healthy Catering',
    description: 'Balanced, nutrition-focused menus with low-carb, keto, and lighter options for teams.',
    image: '/menu-seafood.webp',
    link: '/healthy-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional corporate dining, from daily staff meals to large company functions.',
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
  name: 'Staff Meals Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Staff Meals Catering Dubai', item: 'https://mychef.ae/staff-meals-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function StaffMealsCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.staff-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.staff-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.staff-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.staff-fmt-card', {
      scrollTrigger: { trigger: '.staff-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.staff-uc-item', {
      scrollTrigger: { trigger: '.staff-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.staff-inc-item', {
      scrollTrigger: { trigger: '.staff-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.staff-gallery-img', {
      scrollTrigger: { trigger: '.staff-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.staff-faq-item', {
      scrollTrigger: { trigger: '.staff-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.staff-loc-item', {
      scrollTrigger: { trigger: '.staff-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.staff-rel-card', {
      scrollTrigger: { trigger: '.staff-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.staff-cta', {
      scrollTrigger: { trigger: '.staff-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Staff Meals Catering Dubai | Daily Team & Canteen"
        description="Staff meals catering in Dubai with daily team meals, canteen service, and recurring retainers. Halal menus, reliable delivery, and clear billing. Request your quote today."
        canonicalPath="/staff-meals-catering-dubai"
        ogImage="/service-corporate.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/staff-meals-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 staff-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Staff Meals Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 staff-hero-h1">
            Staff Meals Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 staff-hero-sub">
            Daily team meals, canteen service, and recurring retainers — with fully halal menus, reliable delivery, and predictable billing for workforces across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=staff-meals-catering-dubai" className="btn-primary opacity-0 translate-y-4 staff-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 staff-hero-cta"
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
            CATERING FOR YOUR WORKFORCE
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Reliable Meal for Every Team Member
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Feeding a workforce well is one of the quieter ways an organisation shows it values its people. A dependable daily meal keeps teams energised, saves staff the hassle of sorting lunch themselves, and builds a small but real sense of being looked after. The challenge at scale is consistency and cost — which is exactly what a planned staff meals service is built to solve. At myCHEF Dubai, we provide reliable team catering designed around the realities of a working operation.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From daily team meals and managed staff canteens to recurring retainers and shift-based catering, we keep your people well fed without the daily admin. Menus are fully halal and built to a high standard, with balanced and dietary options throughout, and a standing retainer gives you predictable invoicing and one reliable point of contact. Explore the formats below, or see how staff catering fits within our wider <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              STAFF MEALS FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering Built Around Your Team
            </h2>
          </div>

          <div className="staff-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="staff-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              From Daily Meals to Canteens
            </h2>
          </div>

          <div className="staff-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="staff-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Staff Meals Catering Includes
          </h2>

          <div className="staff-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="staff-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Staff Catering
          </h2>

          <div className="staff-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="staff-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Staff Meals Questions
          </h2>

          <div className="staff-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="staff-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="staff-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="staff-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="staff-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="staff-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center staff-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Feed Your Team, Every Day
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us your headcount, schedule, and dietary needs and we'll build a reliable staff meals plan — daily, canteen, or recurring retainer — with halal menus and clear, predictable pricing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=staff-meals-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
