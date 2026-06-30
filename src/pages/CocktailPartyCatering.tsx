import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Martini,
  Wine,
  Building2,
  Ship,
  Sparkles,
  Users,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan cocktail party catering in Dubai')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const cocktailFormats = [
  {
    icon: Martini,
    title: 'Mixology Bar Service',
    description: 'Professional mixologists crafting signature cocktails at a styled bar, tailored to your theme, palette, and guest preferences.',
    link: '/catering-dubai',
  },
  {
    icon: Sparkles,
    title: 'Passed Canapés',
    description: 'Elegant bite-sized canapés circulated by service staff throughout the reception, designed to pair with the cocktail menu.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Building2,
    title: 'Rooftop Receptions',
    description: 'Polished cocktail receptions for rooftop venues and terraces, with compact menus that look striking against the Dubai skyline.',
    link: '/catering-dubai',
  },
  {
    icon: Ship,
    title: 'Yacht & Marina Parties',
    description: 'Chilled cocktails, sparkling service, and mess-free canapés designed for yacht receptions around Dubai Marina.',
    link: '/yachts',
  },
  {
    icon: Wine,
    title: 'Champagne & Wine Service',
    description: 'Sparkling reception service, curated wine pairings, and elegant pours delivered by attentive, well-presented staff.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Corporate Cocktails',
    description: 'Sophisticated cocktail receptions for launches, networking evenings, and client entertaining that keep guests mingling.',
    link: '/corporate',
  },
]

const includedItems = [
  { title: 'Signature Cocktail Menu', description: 'A bespoke cocktail list designed around your theme and tastes.' },
  { title: 'Professional Mixologists', description: 'Skilled bartenders crafting drinks at a styled, fully-stocked bar.' },
  { title: 'Passed Canapés', description: 'Elegant canapés circulated throughout the reception by service staff.' },
  { title: 'Premium Spirits & Mixers', description: 'Quality spirits, fresh mixers, garnishes, and glassware.' },
  { title: 'Mobile Bar Set-Up', description: 'A styled bar built for villas, rooftops, yachts, and venues.' },
  { title: 'Mocktail Options', description: 'Crafted alcohol-free cocktails so every guest is looked after.' },
  { title: 'Service & Bar Staff', description: 'Bartenders, hosts, and waiters scaled to your guest count.' },
  { title: 'Full Set-Up & Clear-Down', description: 'We arrive early, run the bar, and leave the space spotless.' },
]

const useCases = [
  {
    title: 'Rooftop & Skyline Receptions',
    description: 'Cocktail receptions are made for Dubai’s rooftops and terraces. We design compact, striking menus and a styled bar that hold their own against the skyline, with mixologists shaking drinks to order all evening.',
  },
  {
    title: 'Yacht & Marina Gatherings',
    description: 'For receptions on the water around Dubai Marina, we bring chilled cocktails, sparkling service, and mess-free canapés engineered for deck life — elegant, easy to hold, and beautiful to photograph.',
  },
  {
    title: 'Private Villa Soirées',
    description: 'Transform your villa, garden, or pool deck into a sophisticated cocktail lounge. We bring the bar, the mixologists, the canapés, and the styling, then handle every detail from set-up to clear-down.',
  },
  {
    title: 'Corporate & Networking Evenings',
    description: 'Launches, client entertaining, and networking receptions call for drinks that impress and canapés that travel. Our cocktail service keeps guests circulating and conversation flowing throughout the event.',
  },
]

const galleryImages = [
  { src: '/menu-cocktails.jpg', alt: 'Cocktail party service in Dubai' },
  { src: '/menu-canapes.jpg', alt: 'Passed canapés at a reception' },
  { src: '/service-luxury-dining.jpg', alt: 'Luxury dining cocktail reception' },
  { src: '/service-events.jpg', alt: 'Event cocktail bar set-up' },
  { src: '/service-villa.jpg', alt: 'Villa cocktail party in Dubai' },
  { src: '/menu-seafood.jpg', alt: 'Seafood canapés for cocktails' },
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
    q: 'What does cocktail party catering include?',
    a: 'It typically includes a styled bar with professional mixologists, a bespoke cocktail menu, passed canapés, premium spirits and mixers, glassware, and full service staff. We tailor the bar and canapé selection to your theme and guest count.',
  },
  {
    q: 'Do you provide the bar, glassware, and bartenders?',
    a: 'Yes. We bring a fully-stocked mobile bar, glassware, garnishes, and professional mixologists. The bar is styled to suit your venue, whether that is a villa, rooftop, yacht, or corporate space.',
  },
  {
    q: 'Can you create signature and alcohol-free cocktails?',
    a: 'Absolutely. We design signature cocktails around your theme and tastes, and we always offer crafted mocktails so non-drinking guests are equally looked after. Ask us about a dedicated mocktail bar as well.',
  },
  {
    q: 'How many canapés do you serve per guest?',
    a: 'For a cocktail reception, we typically recommend six to eight canapés per guest for a few hours of service, more if it replaces a meal. We advise on quantities based on your timing and whether dinner follows.',
  },
  {
    q: 'Do you cater cocktail parties on yachts and rooftops?',
    a: 'Yes. We regularly cater cocktail receptions on yachts around Dubai Marina and on rooftops and terraces across the city, with compact, mess-free menus designed for those settings.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'For smaller receptions, one to two weeks is ideal. For larger or fully styled cocktail events, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Canapé Catering',
    description: 'Passed canapés and bite-sized elegance for receptions and cocktail moments.',
    image: '/menu-canapes.jpg',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Mocktail Bar Catering',
    description: 'A crafted alcohol-free bar with signature mocktails for every guest.',
    image: '/menu-cocktails.jpg',
    link: '/mocktail-bar-catering-dubai',
  },
  {
    title: 'Yacht Catering',
    description: 'Chilled cocktails and elegant canapés for receptions on the water.',
    image: '/service-luxury-dining.jpg',
    link: '/yachts',
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
  name: 'Cocktail Party Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Cocktail Party Catering Dubai', item: 'https://mychef.ae/cocktail-party-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function CocktailPartyCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.cock-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.cock-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.cock-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.cock-fmt-card', {
      scrollTrigger: { trigger: '.cock-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cock-uc-item', {
      scrollTrigger: { trigger: '.cock-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cock-inc-item', {
      scrollTrigger: { trigger: '.cock-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cock-gallery-img', {
      scrollTrigger: { trigger: '.cock-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.cock-faq-item', {
      scrollTrigger: { trigger: '.cock-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cock-loc-item', {
      scrollTrigger: { trigger: '.cock-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.cock-rel-card', {
      scrollTrigger: { trigger: '.cock-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cock-cta', {
      scrollTrigger: { trigger: '.cock-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Cocktail Party Catering Dubai | Mixology & Canapés"
        description="Cocktail party catering in Dubai with professional mixologists, signature cocktails, and passed canapés for rooftop, yacht, villa, and corporate receptions. Full bar service."
        canonicalPath="/cocktail-party-catering-dubai"
        ogImage="/menu-cocktails.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/menu-cocktails.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 cock-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Cocktail Party Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 cock-hero-h1">
            Cocktail Party Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 cock-hero-sub">
            Professional mixologists, signature cocktails, and elegant passed canapés — styled for rooftop receptions, yacht parties, and villa soirées across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 cock-hero-cta">
              Request a Cocktail Party Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 cock-hero-cta"
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
            MIXOLOGY & CANAPÉS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Reception That Keeps Guests Mingling
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            A great cocktail party has a rhythm of its own — the clink of a styled bar, a signature drink that becomes the talk of the evening, a tray of canapés arriving at exactly the right moment. At myCHEF Dubai, we design cocktail receptions as a complete experience, pairing professional mixologists and a bespoke drinks list with elegant, perfectly-timed canapés that keep your guests circulating.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Whether you are hosting a rooftop reception against the skyline, a yacht party around Dubai Marina, an intimate villa soirée, or a corporate networking evening, our team brings the bar, the staff, and the styling to you. Explore our cocktail formats below, or see how they fit within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              COCKTAIL FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Cocktail Catering for Every Setting
            </h2>
          </div>

          <div className="cock-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cocktailFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="cock-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE WE POUR
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Receptions for Every Venue
            </h2>
          </div>

          <div className="cock-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="cock-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Cocktail Catering Includes
          </h2>

          <div className="cock-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="cock-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Cocktail Catering
          </h2>

          <div className="cock-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="cock-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Cocktail Catering Questions
          </h2>

          <div className="cock-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="cock-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

          <div className="cock-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="cock-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="cock-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="cock-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center cock-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Cocktail Party
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your reception and we'll design a cocktail menu, bar, and canapé service that fits your venue and guest count perfectly.
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
