import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Salad,
  Fish,
  Apple,
  Dumbbell,
  Home,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan healthy catering in Dubai (via mychef.ae/healthy-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const healthyFormats = [
  {
    icon: Salad,
    title: 'Balanced Plated Menus',
    description: 'Nutrition-focused plated meals built on lean proteins, whole grains, and seasonal vegetables — satisfying, considered, and full of flavour.',
    link: '/catering-dubai',
  },
  {
    icon: Fish,
    title: 'Low-Carb & Keto',
    description: 'Low-carb and keto-friendly dishes for guests watching their macros, from grilled proteins and salads to vegetable-forward sides.',
    link: '/mediterranean-catering-dubai',
  },
  {
    icon: Apple,
    title: 'Salad Bars & Grain Bowls',
    description: 'Build-your-own salad bars and pre-styled grain bowls that keep lunches light, fresh, and genuinely energising.',
    link: '/mediterranean-catering-dubai',
  },
  {
    icon: Dumbbell,
    title: 'Corporate Wellness',
    description: 'Healthy reception menus and working lunches for wellness days, team events, and offices that care about how their people eat.',
    link: '/corporate',
  },
  {
    icon: Home,
    title: 'Villa & Family Healthy Menus',
    description: 'Wholesome, balanced catering for villa gatherings and family days across Dubai, with on-site service and pack-down.',
    link: '/catering-dubai',
  },
  {
    icon: Salad,
    title: 'Meal Prep & Boxes',
    description: 'Portioned, balanced meal boxes for retreats, fitness events, and multi-day gatherings where consistency and nutrition matter.',
    link: '/corporate',
  },
]

const includedItems = [
  { title: 'Nutrition-Focused Menus', description: 'Balanced dishes built on lean proteins, whole grains, and vegetables.' },
  { title: 'Low-Carb & Keto Options', description: 'Macro-conscious dishes for guests following low-carb or keto plans.' },
  { title: 'Fresh Seasonal Produce', description: 'Seasonal vegetables, fruits, and herbs sourced from trusted suppliers.' },
  { title: 'Lean Proteins', description: 'Grilled fish, poultry, and plant proteins prepared with minimal added fat.' },
  { title: 'Salad Bars & Bowls', description: 'Build-your-own salad bars and pre-styled grain bowls on request.' },
  { title: 'Dietary Inclusivity', description: 'Vegetarian, vegan, gluten-free, and dairy-free elements arranged as needed.' },
  { title: 'On-Site Service', description: 'Plating, service staff, and styling handled at your venue.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so you can simply host.' },
]

const useCases = [
  {
    title: 'Corporate Wellness Days',
    description: 'For wellness days, team off-sites, and health-conscious offices, we design balanced reception menus and working lunches that leave people energised rather than sluggish, pairing naturally with our wider corporate catering.',
  },
  {
    title: 'Fitness Events & Retreats',
    description: 'For fitness gatherings, retreats, and multi-day events, portioned and macro-conscious menus keep nutrition consistent. We can plan low-carb, keto, and high-protein options around the goals of the group.',
  },
  {
    title: 'Villa & Family Gatherings',
    description: 'For at-home events across Palm Jumeirah, Emirates Hills, and Dubai Hills, we bring wholesome, balanced menus to your terrace or garden, cooking and serving on-site so healthy never means dull.',
  },
  {
    title: 'Light Receptions & Lunches',
    description: 'Salad bars, grain bowls, and Mediterranean-inspired plates make beautiful, light spreads for daytime receptions and summer gatherings, when guests want food that feels fresh rather than heavy.',
  },
]

const galleryImages = [
  { src: '/menu-seafood.webp', alt: 'Healthy lean protein and seafood plate in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Fresh healthy appetizer selection' },
  { src: '/service-corporate.webp', alt: 'Healthy corporate catering set-up' },
  { src: '/service-catering.webp', alt: 'Balanced catering spread at a Dubai event' },
  { src: '/service-villa.webp', alt: 'Villa healthy dinner styling' },
  { src: '/service-events.webp', alt: 'Healthy event catering in Dubai' },
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
    q: 'What makes your catering "healthy"?',
    a: 'Our healthy menus are built around balance — lean proteins, whole grains, plenty of vegetables, and considered portioning, with less reliance on heavy sauces and added fats. The aim is food that tastes generous and leaves guests energised rather than weighed down.',
  },
  {
    q: 'Do you offer low-carb and keto options?',
    a: 'Yes. We regularly prepare low-carb and keto-friendly dishes, from grilled proteins and salads to vegetable-forward sides. If your guests are following a specific plan, let us know and we will design the menu around it.',
  },
  {
    q: 'Can you handle corporate wellness events and meal prep?',
    a: 'We do. For wellness days, team events, retreats, and multi-day gatherings, we design balanced reception menus, working lunches, and portioned meal boxes that keep nutrition consistent across the event.',
  },
  {
    q: 'Will healthy menus still feel satisfying?',
    a: 'Absolutely. A well-built healthy menu is filling and flavourful — the focus is on quality ingredients and balance, not restriction. Guests leave satisfied, just without the heaviness of richer catering.',
  },
  {
    q: 'Do you cater for other dietary needs alongside healthy menus?',
    a: 'Yes. Vegetarian, vegan, gluten-free, and dairy-free elements can all be arranged within a healthy menu. Share your guests’ requirements when planning and we will build the spread to suit everyone.',
  },
  {
    q: 'How far in advance should I book healthy catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For larger events, retreats, or meal-prep programmes, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Gluten-Free Catering',
    description: 'Coeliac-safe menus and clearly labelled dishes for guests avoiding gluten.',
    image: '/images/gluten-free-catering-dubai-hero.webp',
    link: '/gluten-free-catering-dubai',
  },
  {
    title: 'Keto & Low-Carb Catering',
    description: 'High-protein, low-carb menus designed for macro-conscious guests and wellness events.',
    image: '/images/keto-catering-dubai-hero.webp',
    link: '/keto-catering-dubai',
  },
  {
    title: 'Dairy-Free Catering',
    description: 'Lactose-free menus with creamy plant-based alternatives for every course.',
    image: '/images/dairy-free-catering-dubai-hero.webp',
    link: '/dairy-free-catering-dubai',
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
  name: 'Healthy Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Healthy Catering Dubai', item: 'https://mychef.ae/healthy-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function HealthyCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.hlth-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.hlth-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.hlth-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.hlth-fmt-card', {
      scrollTrigger: { trigger: '.hlth-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.hlth-uc-item', {
      scrollTrigger: { trigger: '.hlth-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hlth-inc-item', {
      scrollTrigger: { trigger: '.hlth-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hlth-gallery-img', {
      scrollTrigger: { trigger: '.hlth-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.hlth-faq-item', {
      scrollTrigger: { trigger: '.hlth-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hlth-loc-item', {
      scrollTrigger: { trigger: '.hlth-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.hlth-rel-card', {
      scrollTrigger: { trigger: '.hlth-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.hlth-cta', {
      scrollTrigger: { trigger: '.hlth-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Healthy Catering Dubai | Balanced & Wellness Menus"
        description="Healthy catering in Dubai with nutrition-focused, balanced menus, low-carb and keto options, salad bars, and corporate wellness lunches. Request your custom quote today."
        canonicalPath="/healthy-catering-dubai"
        ogImage="/menu-seafood.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/healthy-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 hlth-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Healthy Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 hlth-hero-h1">
            Healthy Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 hlth-hero-sub">
            Nutrition-focused, balanced menus — with low-carb and keto options — for corporate wellness days, fitness events, and gatherings across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=healthy-catering-dubai" className="btn-primary opacity-0 translate-y-4 hlth-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 hlth-hero-cta"
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
            BALANCED DINING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Food That Leaves You Energised
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Healthy catering should never feel like a sacrifice. The best balanced menus are built on quality ingredients and thoughtful composition — lean proteins, whole grains, vibrant vegetables, and just enough indulgence — so guests finish a meal feeling light and energised rather than weighed down. At myCHEF Dubai, we treat nutrition and flavour as partners, not trade-offs, crafting menus that look generous and eat well.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are planning a corporate wellness day, a fitness retreat, a light summer reception, or a balanced family gathering, our team designs menus around your goals. Explore dedicated <Link to="/keto-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">keto catering Dubai</Link> and <Link to="/gluten-free-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">gluten-free catering Dubai</Link> options, or see how healthy dining fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HEALTHY FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Balanced for Every Occasion
            </h2>
          </div>

          <div className="hlth-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthyFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="hlth-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE HEALTHY SHINES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Designed for the Moment
            </h2>
          </div>

          <div className="hlth-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="hlth-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Healthy Catering Includes
          </h2>

          <div className="hlth-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="hlth-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Healthy Catering
          </h2>

          <div className="hlth-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="hlth-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Healthy Catering Questions
          </h2>

          <div className="hlth-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="hlth-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="hlth-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="hlth-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="hlth-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="hlth-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center hlth-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Design Your Healthy Menu
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your event and goals and we'll create a balanced, nutrition-focused menu — low-carb, keto, or wholesome — that leaves every guest feeling their best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=healthy-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
