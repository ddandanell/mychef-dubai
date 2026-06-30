import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Flame,
  Leaf,
  Cake,
  ChefHat,
  Home,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Diwali catering in Dubai (via mychef.ae/diwali-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const diwaliFormats = [
  {
    icon: Flame,
    title: 'Indian Festive Menus',
    description: 'Vibrant, celebratory menus of North and South Indian classics — rich curries, biryanis, breads, and aromatic rice dishes for the festival of lights.',
    link: '/indian-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Vegetarian & Jain Spreads',
    description: 'Fully vegetarian and Jain-friendly spreads built for Diwali, with paneer, dals, sabzis, and chaat prepared to suit your guests and traditions.',
    link: '/vegetarian-catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Live Chaat Stations',
    description: 'Interactive live chaat and dosa stations that bring theatre to your celebration, freshly assembled in front of your guests.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Cake,
    title: 'Mithai & Sweet Tables',
    description: 'Traditional Diwali mithai — laddoo, barfi, jalebi, and gulab jamun — styled into generous sweet tables to mark the occasion.',
    link: '/dessert-table-catering-dubai',
  },
  {
    icon: Home,
    title: 'Home & Family Diwali',
    description: 'Warm, abundant catering for Diwali gatherings at home, with on-site cooking and service so the hosts can celebrate alongside their guests.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Corporate & Villa Diwali',
    description: 'Full-service Diwali catering for offices and villa celebrations across Dubai — setup, cooking, service, and pack-down all handled.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'North & South Indian Menus', description: 'Festive curries, biryanis, breads, dosas, and aromatic rice dishes across regions.' },
  { title: 'Vegetarian & Jain Options', description: 'Fully vegetarian and Jain-friendly spreads prepared to suit your traditions.' },
  { title: 'Live Chaat & Dosa Stations', description: 'Interactive stations assembling chaat and dosas fresh in front of your guests.' },
  { title: 'Mithai & Indian Sweets', description: 'Laddoo, barfi, jalebi, and gulab jamun, or a styled mithai table on request.' },
  { title: 'Halal Ingredients', description: 'Any non-vegetarian dishes are prepared with halal ingredients from trusted suppliers.' },
  { title: 'Spice Levels to Taste', description: 'Heat and seasoning adjusted to your guests, from mild to authentically spiced.' },
  { title: 'Service Staff & Setup', description: 'Waiters, hosts, and styling arranged for your home, office, or villa.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so the celebration runs effortlessly.' },
]

const useCases = [
  {
    title: 'Home & Family Diwali',
    description: 'For Diwali gatherings at home, we bring warm, abundant Indian spreads to your table, cooking and serving on-site so the hosts can light the diyas and celebrate with family rather than manage the kitchen.',
  },
  {
    title: 'Corporate Diwali Functions',
    description: 'For offices and client celebrations across Dubai, we plan corporate Diwali functions with festive buffets, live chaat stations, and mithai tables, pairing naturally with our wider Indian catering for a memorable event.',
  },
  {
    title: 'Vegetarian & Jain Gatherings',
    description: 'For guests who keep vegetarian or Jain traditions, we design fully meat-free spreads of paneer, dals, sabzis, and chaat, drawing on our vegetarian catering so everyone shares the same generous, celebratory table.',
  },
  {
    title: 'Villa & Large Celebrations',
    description: 'For villa parties and large Diwali celebrations, our team scales menus and adds live cooking stations for theatre, keeping quality and presentation consistent however many guests gather.',
  },
]

const galleryImages = [
  { src: '/menu-meat.webp', alt: 'Indian festive mains for Diwali in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Traditional Diwali mithai and sweets' },
  { src: '/service-events.webp', alt: 'Diwali celebration catering event in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Indian chaat and appetizers for Diwali' },
  { src: '/service-villa.webp', alt: 'Villa Diwali catering styling in Dubai' },
  { src: '/service-catering.webp', alt: 'Diwali festive buffet catering spread' },
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
    q: 'What kind of Diwali menus do you offer?',
    a: 'We design vibrant Indian festive menus drawing on North and South Indian cooking — rich curries, biryanis, fresh breads, dosas, and aromatic rice dishes, finished with traditional mithai. Menus are tailored to your guests and the spirit of the festival of lights.',
  },
  {
    q: 'Can you cater fully vegetarian and Jain spreads?',
    a: 'Yes. We regularly prepare fully vegetarian and Jain-friendly Diwali spreads with paneer, dals, sabzis, and chaat. Share your guests’ traditions when planning and we will build the menu to honour them.',
  },
  {
    q: 'Do you offer live chaat and dosa stations?',
    a: 'We do. Interactive live chaat and dosa stations are a highlight of our Diwali catering, assembled fresh in front of your guests to bring theatre and energy to the celebration.',
  },
  {
    q: 'Do you provide Diwali mithai and sweets?',
    a: 'Yes. Traditional mithai such as laddoo, barfi, jalebi, and gulab jamun are part of our Diwali menus, and we can style a full sweet table as a generous, festive finish to the meal.',
  },
  {
    q: 'Can you adjust spice levels for mixed guests?',
    a: 'Absolutely. We adjust heat and seasoning to your guests, from mild and approachable to authentically spiced, and can prepare different intensities side by side so everyone enjoys the spread.',
  },
  {
    q: 'How far in advance should I book Diwali catering?',
    a: 'Diwali is a busy festive period in Dubai, so we recommend booking four to six weeks ahead to secure your date. Larger celebrations with live stations in particular benefit from earlier planning.',
  },
]

const relatedServices = [
  {
    title: 'Indian Catering',
    description: 'Authentic North and South Indian menus — curries, biryanis, and breads for any event.',
    image: '/menu-meat.webp',
    link: '/indian-catering-dubai',
  },
  {
    title: 'Vegetarian Catering',
    description: 'Inventive, fully vegetarian menus — paneer, dals, chaat, and more for inclusive events.',
    image: '/menu-appetizer.webp',
    link: '/vegetarian-catering-dubai',
  },
  {
    title: 'Live Cooking Stations',
    description: 'Interactive chef stations — chaat, dosa, and more — that bring theatre to your event.',
    image: '/service-events.webp',
    link: '/live-cooking-stations-dubai',
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
  name: 'Diwali Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Diwali Catering Dubai', item: 'https://mychef.ae/diwali-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function DiwaliCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.diw-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.diw-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.diw-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.diw-fmt-card', {
      scrollTrigger: { trigger: '.diw-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.diw-uc-item', {
      scrollTrigger: { trigger: '.diw-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.diw-inc-item', {
      scrollTrigger: { trigger: '.diw-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.diw-gallery-img', {
      scrollTrigger: { trigger: '.diw-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.diw-faq-item', {
      scrollTrigger: { trigger: '.diw-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.diw-loc-item', {
      scrollTrigger: { trigger: '.diw-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.diw-rel-card', {
      scrollTrigger: { trigger: '.diw-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.diw-cta', {
      scrollTrigger: { trigger: '.diw-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Diwali Catering Dubai | Indian Festive & Mithai Menus"
        description="Diwali catering in Dubai with festive Indian menus, vegetarian and Jain spreads, live chaat stations, and traditional mithai. Book four to six weeks ahead — request your quote today."
        canonicalPath="/diwali-catering-dubai"
        ogImage="/menu-meat.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/diwali-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 diw-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Diwali Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 diw-hero-h1">
            Diwali Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 diw-hero-sub">
            Festive Indian menus for Diwali celebrations across Dubai — vegetarian and Jain spreads, live chaat stations, and traditional mithai for home, corporate, and villa gatherings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=diwali-catering-dubai" className="btn-primary opacity-0 translate-y-4 diw-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 diw-hero-cta"
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
            THE FESTIVAL OF LIGHTS IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Festive Table to Celebrate Diwali
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Diwali is a festival of light, abundance, and togetherness — and the food carries its joy. At myCHEF Dubai, we bring vibrant Indian festive menus to homes, offices, and villas across the city, from rich North and South Indian classics to fully vegetarian and Jain spreads. Live chaat and dosa stations add theatre, while generous tables of mithai bring the celebration to a sweet close.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting an intimate family Diwali, a corporate celebration, or a large villa party, our chefs cook on-site and our staff handle the service and pack-down, so the hosts can light the diyas and enjoy the evening. Our Diwali catering draws on our <Link to="/indian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Indian catering</Link> and <Link to="/vegetarian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">vegetarian catering</Link> menus, adds <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">live cooking stations</Link> for energy, and fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>. Because the festive period is busy, we recommend booking four to six weeks ahead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DIWALI FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Festive Indian for Every Gathering
            </h2>
          </div>

          <div className="diw-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diwaliFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="diw-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              Designed for the Occasion
            </h2>
          </div>

          <div className="diw-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="diw-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Diwali Catering Includes
          </h2>

          <div className="diw-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="diw-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Diwali Catering
          </h2>

          <div className="diw-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="diw-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Diwali Catering Questions
          </h2>

          <div className="diw-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="diw-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="diw-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="diw-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="diw-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="diw-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center diw-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Diwali Celebration
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your Diwali gathering and we'll design a festive Indian menu — vegetarian or mixed, with live stations and mithai — and handle every detail. Book four to six weeks ahead to secure your date.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=diwali-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
