import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Grape,
  Heart,
  Home,
  Sparkles,
  Baby,
  Users,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan a grazing table in Dubai (via mychef.ae/grazing-table-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const grazingFormats = [
  {
    icon: Grape,
    title: 'Classic Grazing Tables',
    description: 'Generous artisan spreads of cured meats, aged cheeses, fruits, dips, and warm breads, styled as an abundant centrepiece for your gathering.',
    link: '/catering-dubai',
  },
  {
    icon: Sparkles,
    title: 'Grazing Boards & Boxes',
    description: 'Compact, beautifully arranged boards and individual boxes — perfect for smaller groups, gifting, or distanced seating at intimate events.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Heart,
    title: 'Bridal & Hen Grazing',
    description: 'Soft palettes, florals, and sweet-and-savoury pairings designed for bridal showers, hen afternoons, and engagement celebrations.',
    link: '/bachelorette-party-catering-dubai',
  },
  {
    icon: Baby,
    title: 'Baby Shower Spreads',
    description: 'Pastel grazing tables with delicate canapés, fresh fruit, and dessert touches, styled to suit gentle baby shower themes.',
    link: '/baby-shower-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Garden Grazing',
    description: 'Full-scale grazing installations for villa terraces, gardens, and rooftops across Dubai, with on-site styling and replenishment.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Corporate Grazing',
    description: 'Elegant grazing stations for launches, networking receptions, and office celebrations that keep guests mingling and grazing throughout.',
    link: '/canape-catering-dubai',
  },
]

const includedItems = [
  { title: 'Artisan Charcuterie', description: 'Cured meats, aged and soft cheeses, and accompaniments sourced for quality.' },
  { title: 'Seasonal Fruit & Produce', description: 'Fresh seasonal fruits, berries, and crudités for colour and balance.' },
  { title: 'Breads, Crackers & Dips', description: 'Warm breads, artisan crackers, and house-made dips and preserves.' },
  { title: 'Bespoke Styling', description: 'On-trend grazing styling with boards, vessels, foliage, and florals.' },
  { title: 'Sweet & Savoury Mix', description: 'A considered balance of savoury bites and sweet touches across the table.' },
  { title: 'On-Site Set-Up', description: 'Our team builds and arranges the grazing table at your venue.' },
  { title: 'Dietary Options', description: 'Vegetarian, vegan, halal, and gluten-free elements arranged on request.' },
  { title: 'Full Pack-Down', description: 'We clear, pack down, and leave your space spotless after the event.' },
]

const useCases = [
  {
    title: 'Bridal Showers & Hen Afternoons',
    description: 'A grazing table is the natural centrepiece of a bridal celebration. We style soft, photogenic spreads with florals and sweet pairings for an afternoon your guests will remember — and photograph.',
  },
  {
    title: 'Villa & Garden Gatherings',
    description: 'For at-home celebrations across Palm Jumeirah, Emirates Hills, and Dubai Hills, we build full grazing installations on your terrace, garden, or rooftop, complete with styling and replenishment.',
  },
  {
    title: 'Baby Showers & Family Days',
    description: 'Gentle, pastel grazing tables with fruit, canapés, and dessert touches set the tone for baby showers and relaxed family celebrations where guests graze at their own pace.',
  },
  {
    title: 'Shareable, Visual Moments',
    description: 'Grazing tables are designed to be seen. Abundant, colourful, and styled corner to corner, they become a conversation piece and a backdrop guests gather around all day.',
  },
]

const galleryImages = [
  { src: '/menu-appetizer.webp', alt: 'Artisan grazing table appetizers in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Canapé selection on a grazing spread' },
  { src: '/service-villa.webp', alt: 'Villa grazing table set-up in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Sweet grazing dessert display' },
  { src: '/service-events.webp', alt: 'Event grazing table styling' },
  { src: '/menu-seafood.webp', alt: 'Seafood elements on a grazing board' },
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
    q: 'How many guests does a grazing table serve?',
    a: 'We scale grazing tables for any group, from an intimate gathering of around 10 to large celebrations of several hundred. The size, length, and abundance of the spread are tailored to your final guest count.',
  },
  {
    q: 'Is a grazing table a starter or a full meal?',
    a: 'It can be either. A grazing table can serve as a generous welcome and canapé course, or be built up into a full grazing meal with hot elements, sharing platters, and dessert. We advise based on your event timing.',
  },
  {
    q: 'Can you match my colour theme or styling?',
    a: 'Yes. We style each grazing table around your palette, theme, and venue, using boards, vessels, foliage, and florals. This is especially popular for bridal showers, baby showers, and themed celebrations.',
  },
  {
    q: 'Do you cater for dietary requirements?',
    a: 'Absolutely. We arrange vegetarian, vegan, halal, and gluten-free elements within the grazing table, and we can build entirely allergy-conscious spreads on request. Let us know your guests’ needs when planning.',
  },
  {
    q: 'Do you set up the grazing table on-site?',
    a: 'Yes. Our team builds and styles the grazing table at your venue, whether that is a villa, garden, rooftop, or office, and we return to pack down and clear afterwards so you do not have to.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For smaller grazing tables, one to two weeks is ideal. For larger or fully styled installations, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Canapé Catering',
    description: 'Passed canapés and bite-sized elegance for receptions and cocktail moments.',
    image: '/menu-canapes.webp',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Bachelorette Catering',
    description: 'Styled grazing, canapés, and dessert displays for a memorable hen celebration.',
    image: '/service-villa.webp',
    link: '/bachelorette-party-catering-dubai',
  },
  {
    title: 'Baby Shower Catering',
    description: 'Pastel grazing tables and afternoon-tea menus for an intimate baby shower.',
    image: '/menu-dessert.webp',
    link: '/baby-shower-catering-dubai',
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
  name: 'Grazing Table Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Grazing Table Dubai', item: 'https://mychef.ae/grazing-table-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function GrazingTable() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.graz-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.graz-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.graz-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.graz-fmt-card', {
      scrollTrigger: { trigger: '.graz-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.graz-uc-item', {
      scrollTrigger: { trigger: '.graz-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.graz-inc-item', {
      scrollTrigger: { trigger: '.graz-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.graz-gallery-img', {
      scrollTrigger: { trigger: '.graz-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.graz-faq-item', {
      scrollTrigger: { trigger: '.graz-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.graz-loc-item', {
      scrollTrigger: { trigger: '.graz-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.graz-rel-card', {
      scrollTrigger: { trigger: '.graz-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.graz-cta', {
      scrollTrigger: { trigger: '.graz-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Grazing Table Dubai | Artisan Grazing Spreads"
        description="Artisan grazing tables in Dubai for bridal showers, baby showers, villa parties, and corporate events. Styled charcuterie spreads, full set-up and dietary options."
        canonicalPath="/grazing-table-dubai"
        ogImage="/menu-appetizer.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/grazing-table-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 graz-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Grazing Table Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 graz-hero-h1">
            Grazing Tables in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 graz-hero-sub">
            Abundant artisan grazing spreads, styled corner to corner — from bridal showers and villa gatherings to corporate receptions across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=grazing-table-dubai" className="btn-primary opacity-0 translate-y-4 graz-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 graz-hero-cta"
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
            ARTISAN GRAZING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Centrepiece Guests Gather Around
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A grazing table is more than food on a board — it is a moment. The abundant cascade of cured meats, aged cheeses, seasonal fruits, warm breads, and house-made dips becomes the visual heart of your celebration, the place guests drift back to all afternoon. At myCHEF Dubai, we treat each grazing table as an edible installation, composed and styled corner to corner for both flavour and effect.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting a soft, floral bridal shower, a pastel baby shower, a relaxed villa gathering, or a polished corporate reception, our team builds the spread on-site and tailors every element to your palette, theme, and guest count. Explore our grazing formats below, or see how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              GRAZING FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Grazing for Every Occasion
            </h2>
          </div>

          <div className="graz-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grazingFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="graz-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE GRAZING SHINES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Styled for the Moment
            </h2>
          </div>

          <div className="graz-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="graz-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Grazing Tables Include
          </h2>

          <div className="graz-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="graz-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Grazing Tables
          </h2>

          <div className="graz-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="graz-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Grazing Table Questions
          </h2>

          <div className="graz-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="graz-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="graz-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="graz-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="graz-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="graz-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center graz-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Style Your Grazing Table
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design a grazing spread that fits your theme, palette, and guest count perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=grazing-table-dubai" className="btn-primary">Request a Proposal</Link>
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
