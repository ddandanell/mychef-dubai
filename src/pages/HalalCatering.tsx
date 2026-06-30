import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ShieldCheck,
  Beef,
  Moon,
  Heart,
  Home,
  Building,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan halal catering in Dubai (via mychef.ae/halal-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const halalFormats = [
  {
    icon: Beef,
    title: 'Halal Grills & Mains',
    description: 'Slow-cooked and grilled halal meats — lamb, beef, and chicken — prepared as plated mains, sharing platters, or live grill stations.',
    link: '/arabic-catering-dubai',
  },
  {
    icon: Moon,
    title: 'Iftar & Suhoor Spreads',
    description: 'Generous halal Ramadan menus for iftar and suhoor, from dates and soups to mixed grills and traditional sweets.',
    link: '/iftar-catering-dubai',
  },
  {
    icon: Heart,
    title: 'Halal Wedding Catering',
    description: 'Elegant fully halal wedding menus, from canapés and plated dinners to grand buffets, served with the polish your celebration deserves.',
    link: '/wedding-catering-dubai',
  },
  {
    icon: ShieldCheck,
    title: 'Multi-Cuisine Halal',
    description: 'Arabic, Indian, Asian, and Continental dishes — all prepared within a fully halal kitchen so every guest can eat with confidence.',
    link: '/arabic-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Garden Halal Menus',
    description: 'Full-service halal catering for villa dinners and garden gatherings across Dubai, with on-site cooking, service, and pack-down.',
    link: '/catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Halal Catering',
    description: 'Halal lunches, reception menus, and event catering for offices and functions where every guest should be looked after.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Fully Halal Sourcing', description: 'Halal meat and ingredients sourced from trusted halal suppliers.' },
  { title: 'Halal Kitchen Standards', description: 'Menus prepared to halal standards throughout the kitchen and service.' },
  { title: 'Multi-Cuisine Menus', description: 'Arabic, Indian, Asian, and Continental dishes, all fully halal.' },
  { title: 'Live Grill Stations', description: 'Halal grills and live cooking stations on request for a sense of theatre.' },
  { title: 'Iftar & Suhoor Options', description: 'Traditional Ramadan menus designed for iftar and suhoor gatherings.' },
  { title: 'Vegetarian & Dietary', description: 'Vegetarian, vegan, and allergen-conscious elements arranged on request.' },
  { title: 'On-Site Service', description: 'Plating, service staff, and styling handled at your venue.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so you can simply host.' },
]

const useCases = [
  {
    title: 'Weddings & Family Celebrations',
    description: 'For weddings, engagements, and family gatherings, a fully halal menu means every guest can enjoy the food without question. We design plated dinners, buffets, and canapé receptions with care and polish.',
  },
  {
    title: 'Ramadan Iftar & Suhoor',
    description: 'During Ramadan, we prepare generous halal iftar and suhoor spreads — from dates, soups, and salads to mixed grills and traditional sweets — for homes, majlis gatherings, and corporate iftars across Dubai.',
  },
  {
    title: 'Villa & Garden Gatherings',
    description: 'For at-home events across Palm Jumeirah, Emirates Hills, and Dubai Hills, we bring a full halal menu to your terrace or garden, cooking and serving on-site with the same standards as any fine event.',
  },
  {
    title: 'Corporate & Mixed Events',
    description: 'A fully halal kitchen makes catering simple for diverse teams and guest lists. From office lunches to large functions, halal menus ensure everyone is included without compromise.',
  },
]

const galleryImages = [
  { src: '/menu-meat.jpg', alt: 'Halal grilled meats and mains in Dubai' },
  { src: '/menu-appetizer.jpg', alt: 'Halal appetizer selection' },
  { src: '/service-events.jpg', alt: 'Halal catering at a Dubai event' },
  { src: '/service-catering.jpg', alt: 'Halal catering set-up' },
  { src: '/service-villa.jpg', alt: 'Villa halal dinner styling' },
  { src: '/menu-dessert.jpg', alt: 'Traditional halal dessert display' },
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
    q: 'Is all of your catering halal?',
    a: 'When you book halal catering, the full menu is prepared to halal standards, with halal meat and ingredients sourced from trusted suppliers. Every dish — from canapés to mains and desserts — is designed so all of your guests can eat with confidence.',
  },
  {
    q: 'Where do you source your halal meat?',
    a: 'We work with trusted halal suppliers and take care over sourcing and handling throughout the kitchen. If you have specific requirements for your event, let us know and we will plan the menu and sourcing around them.',
  },
  {
    q: 'Can you cater halal for large weddings and events?',
    a: 'Yes. We regularly cater fully halal weddings, engagements, and large functions across Dubai, with plated dinners, buffets, and canapé receptions scaled to your guest count and styled to your celebration.',
  },
  {
    q: 'Do you offer halal iftar and suhoor catering?',
    a: 'We do. During Ramadan we prepare generous halal iftar and suhoor menus for homes, majlis gatherings, and corporate iftars, from dates and soups to mixed grills and traditional sweets. Booking early in the season is recommended.',
  },
  {
    q: 'What cuisines do you offer within a halal menu?',
    a: 'Our halal menus span Arabic, Indian, Asian, and Continental dishes, all prepared within a fully halal kitchen. We can build a single-cuisine menu or a multi-cuisine spread, with vegetarian and dietary options arranged on request.',
  },
  {
    q: 'How far in advance should I book halal catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For larger events such as weddings, we recommend two to four weeks. During Ramadan and the peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Arabic Catering',
    description: 'Authentic Arabic and Levantine menus, from mezze to mixed grills, for any celebration.',
    image: '/menu-meat.jpg',
    link: '/arabic-catering-dubai',
  },
  {
    title: 'Iftar Catering',
    description: 'Generous halal iftar and suhoor spreads for homes, majlis, and corporate Ramadan events.',
    image: '/menu-appetizer.jpg',
    link: '/iftar-catering-dubai',
  },
  {
    title: 'Wedding Catering',
    description: 'Elegant fully halal wedding menus, from canapés to grand buffets and plated dinners.',
    image: '/service-events.jpg',
    link: '/wedding-catering-dubai',
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
  name: 'Halal Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Halal Catering Dubai', item: 'https://mychef.ae/halal-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function HalalCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.hal-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.hal-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.hal-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.hal-fmt-card', {
      scrollTrigger: { trigger: '.hal-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.hal-uc-item', {
      scrollTrigger: { trigger: '.hal-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hal-inc-item', {
      scrollTrigger: { trigger: '.hal-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hal-gallery-img', {
      scrollTrigger: { trigger: '.hal-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.hal-faq-item', {
      scrollTrigger: { trigger: '.hal-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hal-loc-item', {
      scrollTrigger: { trigger: '.hal-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.hal-rel-card', {
      scrollTrigger: { trigger: '.hal-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.hal-cta', {
      scrollTrigger: { trigger: '.hal-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Halal Catering Dubai | Fully Halal Event Menus"
        description="Halal catering in Dubai from a fully halal kitchen — multi-cuisine menus for weddings, iftar, villa dinners, and corporate events. Request your custom quote today."
        canonicalPath="/halal-catering-dubai"
        ogImage="/menu-meat.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/halal-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 hal-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Halal Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 hal-hero-h1">
            Halal Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 hal-hero-sub">
            Fully halal, multi-cuisine menus prepared with care — for weddings, iftar gatherings, villa dinners, and corporate events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=halal-catering-dubai" className="btn-primary opacity-0 translate-y-4 hal-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 hal-hero-cta"
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
            HALAL DINING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering Every Guest Can Enjoy
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            For many gatherings in Dubai, halal catering is not a special request — it is the natural starting point. When the full menu is prepared to halal standards, there are no questions and no exceptions to manage; every guest sits down to the same table and enjoys the same food. At myCHEF Dubai, halal sourcing and preparation run through everything we do, so hosts can plan with confidence and guests can eat with ease.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Our halal menus are as varied as they are considered — spanning Arabic grills, Indian classics, Asian favourites, and Continental plates, all from a fully halal kitchen. Whether you are hosting a wedding, a Ramadan iftar, a villa dinner, or a corporate function, our team designs and serves a menu suited to your occasion. Explore the formats below, or see how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HALAL FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Halal for Every Occasion
            </h2>
          </div>

          <div className="hal-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {halalFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="hal-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE HALAL SHINES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Designed for the Moment
            </h2>
          </div>

          <div className="hal-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="hal-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Halal Catering Includes
          </h2>

          <div className="hal-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="hal-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Halal Catering
          </h2>

          <div className="hal-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="hal-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Halal Catering Questions
          </h2>

          <div className="hal-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="hal-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

          <div className="hal-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="hal-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="hal-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="hal-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center hal-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Halal Menu
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design a fully halal menu — single-cuisine or multi-cuisine — that brings every guest to the same table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=halal-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
