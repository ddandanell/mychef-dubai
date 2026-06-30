import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sunrise,
  Moon,
  Building,
  Home,
  Coffee,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan suhoor catering in Dubai')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const suhoorFormats = [
  {
    icon: Sunrise,
    title: 'Pre-Dawn Suhoor Menus',
    description: 'Sustaining late-night menus designed for the hours before Fajr — slow-release dishes, hydrating sides, and comforting flavours to carry guests through the fasting day.',
    link: '/ramadan-catering-dubai',
  },
  {
    icon: Home,
    title: 'Home & Majlis Suhoor',
    description: 'Intimate suhoor gatherings in your home or majlis, with on-site cooking and quiet, attentive service into the early hours so you can host without interruption.',
    link: '/catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Suhoor',
    description: 'Late-night suhoor functions for teams, clients, and night-shift offices across Dubai — buffet stations or plated service, fully coordinated around your schedule.',
    link: '/corporate',
  },
  {
    icon: Coffee,
    title: 'Light Savoury & Pastries',
    description: 'Lighter suhoor spreads of savoury pastries, eggs, labneh, and fresh fruit for guests who prefer to keep the pre-dawn meal simple and easy to digest.',
    link: '/arabic-catering-dubai',
  },
  {
    icon: Moon,
    title: 'Hot Comfort Dishes',
    description: 'Warming, slow-cooked plates — foul, shakshuka, grilled proteins, and traditional mains — for a hearty suhoor that holds well through the fast.',
    link: '/arabic-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa Suhoor Service',
    description: 'Full-service suhoor catering for villa gatherings across Dubai, with setup, cooking, service, and pack-down handled quietly so the night runs smoothly.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Pre-Dawn Suhoor Menus', description: 'Sustaining menus built for the hours before Fajr, balanced to hold through the fast.' },
  { title: 'Hot & Cold Options', description: 'Warming comfort dishes alongside lighter savoury plates, pastries, and fresh fruit.' },
  { title: 'Halal Ingredients', description: 'Every dish is prepared with halal ingredients sourced from trusted suppliers.' },
  { title: 'Hydrating Sides & Drinks', description: 'Laban, fresh juices, and hydrating accompaniments to support the fasting day ahead.' },
  { title: 'Quiet Late-Night Service', description: 'Discreet, attentive staff who serve calmly into the early hours.' },
  { title: 'Buffet & Plated Service', description: 'Buffet stations, family-style platters, or plated service to suit your gathering.' },
  { title: 'Timing Around Fajr', description: 'Service planned so the meal is ready and cleared before the call to Fajr.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so you can simply host.' },
]

const useCases = [
  {
    title: 'Home & Majlis Suhoor',
    description: 'For family and majlis suhoor, we bring sustaining late-night spreads to your home, cooking and serving on-site with quiet, attentive staff so you can gather before Fajr without managing the kitchen yourself.',
  },
  {
    title: 'Corporate & Night-Shift Suhoor',
    description: 'For teams, clients, and night-shift offices across Dubai, we plan corporate suhoor functions with buffet stations or plated service, fully coordinated around your hours, pairing naturally with our wider corporate catering.',
  },
  {
    title: 'Light Pre-Dawn Spreads',
    description: 'For guests who prefer to keep suhoor simple, we design lighter spreads of savoury pastries, eggs, labneh, and fresh fruit — easy to digest and gentle, yet still balanced enough to carry the fasting day.',
  },
  {
    title: 'Hearty Comfort Suhoor',
    description: 'For a more substantial pre-dawn meal, warming dishes such as foul, shakshuka, and grilled proteins anchor the table, drawing on our Arabic catering to keep guests sustained well into the morning.',
  },
]

const galleryImages = [
  { src: '/menu-appetizer.jpg', alt: 'Light suhoor savoury plates in Dubai' },
  { src: '/service-events.jpg', alt: 'Late-night suhoor catering event in Dubai' },
  { src: '/menu-meat.jpg', alt: 'Hot suhoor grilled dishes in Dubai' },
  { src: '/service-villa.jpg', alt: 'Villa suhoor catering styling' },
  { src: '/service-catering.jpg', alt: 'Suhoor buffet catering spread' },
  { src: '/menu-canapes.jpg', alt: 'Suhoor pastries and finger food in Dubai' },
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
    q: 'What is suhoor catering?',
    a: 'Suhoor catering is the pre-dawn meal eaten before Fajr during Ramadan, prepared and served to your gathering. We design late-night menus that are sustaining and balanced, so guests are nourished and ready for the fasting day ahead, with quiet service into the early hours.',
  },
  {
    q: 'Do you offer light and hearty suhoor options?',
    a: 'Both. Some guests prefer a light pre-dawn meal of savoury pastries, eggs, labneh, and fresh fruit, while others want hearty comfort dishes like foul, shakshuka, and grilled proteins. We can build either, or combine the two across one table.',
  },
  {
    q: 'Is your suhoor catering halal?',
    a: 'Always. Every dish across our suhoor and Ramadan menus is prepared with halal ingredients sourced from trusted suppliers. This is our standard throughout the holy month and the rest of the year.',
  },
  {
    q: 'Can you cater corporate and night-shift suhoor?',
    a: 'Yes. For teams, clients, and night-shift offices across Dubai, we plan corporate suhoor functions with buffet stations or plated service, fully coordinated around your hours so the meal is ready when your people need it.',
  },
  {
    q: 'How is suhoor service timed?',
    a: 'We plan service so the meal is ready in the late-night hours and cleared before the call to Fajr. Our staff work quietly and attentively, keeping the table replenished without disrupting the calm of the gathering.',
  },
  {
    q: 'How far in advance should I book suhoor catering?',
    a: 'Ramadan is our busiest season, so we recommend booking six to eight weeks ahead to secure your preferred dates. Late-night service in particular requires careful scheduling, and earlier booking gives us the most time to tailor your menu.',
  },
]

const relatedServices = [
  {
    title: 'Ramadan Catering',
    description: 'The full Ramadan hub — iftar, suhoor, corporate, and villa gatherings across Dubai.',
    image: '/service-events.jpg',
    link: '/ramadan-catering-dubai',
  },
  {
    title: 'Iftar Catering',
    description: 'Generous iftar spreads to break the fast — dates, soups, grills, and Arabic mains.',
    image: '/menu-meat.jpg',
    link: '/iftar-catering-dubai',
  },
  {
    title: 'Arabic Catering',
    description: 'Authentic Arabic menus — mezze, grills, and slow-cooked classics for any gathering.',
    image: '/menu-appetizer.jpg',
    link: '/arabic-catering-dubai',
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
  name: 'Suhoor Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Suhoor Catering Dubai', item: 'https://mychef.ae/suhoor-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function SuhoorCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.suh-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.suh-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.suh-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.suh-fmt-card', {
      scrollTrigger: { trigger: '.suh-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.suh-uc-item', {
      scrollTrigger: { trigger: '.suh-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.suh-inc-item', {
      scrollTrigger: { trigger: '.suh-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.suh-gallery-img', {
      scrollTrigger: { trigger: '.suh-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.suh-faq-item', {
      scrollTrigger: { trigger: '.suh-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.suh-loc-item', {
      scrollTrigger: { trigger: '.suh-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.suh-rel-card', {
      scrollTrigger: { trigger: '.suh-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.suh-cta', {
      scrollTrigger: { trigger: '.suh-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Suhoor Catering Dubai | Pre-Dawn Ramadan Menus"
        description="Suhoor catering in Dubai with halal pre-dawn menus, light and hearty options, home, majlis, and corporate service. Book six to eight weeks ahead — request your custom quote today."
        canonicalPath="/suhoor-catering-dubai"
        ogImage="/menu-appetizer.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/menu-appetizer.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 suh-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Suhoor Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 suh-hero-h1">
            Suhoor Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 suh-hero-sub">
            Halal pre-dawn suhoor menus for home, majlis, and corporate gatherings across Dubai — light or hearty, sustaining, and served quietly into the early hours before Fajr.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 suh-hero-cta">
              Request a Suhoor Catering Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 suh-hero-cta"
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
            THE PRE-DAWN MEAL IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Sustaining Suhoor, Served with Calm
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Suhoor is the quiet meal of Ramadan — eaten before Fajr to carry you through the fasting day. At myCHEF Dubai, we bring that pre-dawn moment the same care we give any gathering, designing halal menus that are balanced, sustaining, and easy on the early-morning appetite. From light savoury pastries and labneh to warming dishes of foul, shakshuka, and grilled proteins, we build the suhoor your guests will actually want at that hour.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Whether you are hosting an intimate family suhoor at home, a majlis gathering, or a late-night function for your team, our chefs cook on-site and our staff serve quietly into the early hours. Suhoor sits within our wider <Link to="/ramadan-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Ramadan catering in Dubai</Link>, alongside <Link to="/iftar-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">iftar catering</Link> and our <Link to="/arabic-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Arabic catering</Link> menus — and slots naturally into our <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>. Because the season is in such demand, we recommend booking six to eight weeks ahead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SUHOOR FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built for the Hours Before Fajr
            </h2>
          </div>

          <div className="suh-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suhoorFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="suh-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE WE CATER
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Designed for the Occasion
            </h2>
          </div>

          <div className="suh-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="suh-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Suhoor Catering Includes
          </h2>

          <div className="suh-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="suh-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Suhoor Catering
          </h2>

          <div className="suh-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="suh-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Suhoor Catering Questions
          </h2>

          <div className="suh-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="suh-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

          <div className="suh-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="suh-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="suh-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="suh-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center suh-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Suhoor
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your pre-dawn gathering and we'll design a halal menu — light or hearty — time the service before Fajr, and handle every detail. Book six to eight weeks ahead to secure your dates.
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
