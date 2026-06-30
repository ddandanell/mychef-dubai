import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sparkles,
  Drumstick,
  Cake,
  Users,
  Home,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Eid catering in Dubai (via mychef.ae/eid-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const eidFormats = [
  {
    icon: Sparkles,
    title: 'Eid al-Fitr Feasts',
    description: 'Celebratory spreads to mark the end of Ramadan — generous tables of mezze, grills, and sweets that bring family and friends together after the fast.',
    link: '/catering-dubai',
  },
  {
    icon: Drumstick,
    title: 'Eid al-Adha Feasts',
    description: 'Traditional Eid al-Adha menus built around roasted and slow-cooked lamb, ouzi, and rich mains — a fitting centrepiece for the occasion.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Ouzi & Whole-Lamb Roasts',
    description: 'Showstopping ouzi and whole-lamb roasts on beds of fragrant rice, carved and served at the table for a true Eid celebration.',
    link: '/arabic-catering-dubai',
  },
  {
    icon: Users,
    title: 'Family Gatherings',
    description: 'Warm, abundant catering for Eid family gatherings of every size, with on-site cooking and service so the hosts can enjoy the day too.',
    link: '/catering-dubai',
  },
  {
    icon: Cake,
    title: 'Eid Sweets & Dessert Tables',
    description: 'Traditional Eid sweets, kunafa, baklava, and styled dessert tables to finish the feast on a generous, celebratory note.',
    link: '/dessert-table-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa Eid Service',
    description: 'Full-service Eid catering for villa celebrations across Dubai — setup, cooking, service, and pack-down handled so you can simply host.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Eid al-Fitr & al-Adha Menus', description: 'Celebratory menus tailored to either Eid, built around the spirit of the occasion.' },
  { title: 'Ouzi & Whole-Lamb Roasts', description: 'Showstopping ouzi and slow-roasted lamb carved and served at the table.' },
  { title: 'Halal Ingredients', description: 'Every dish is prepared with halal ingredients sourced from trusted suppliers.' },
  { title: 'Traditional Grills & Mains', description: 'Mixed grills, kebabs, and slow-cooked mains rooted in regional tradition.' },
  { title: 'Mezze & Salads', description: 'Generous spreads of hot and cold mezze, salads, and fresh accompaniments.' },
  { title: 'Eid Sweets & Desserts', description: 'Kunafa, baklava, and traditional sweets, or a styled dessert table on request.' },
  { title: 'Service Staff & Setup', description: 'Waiters, hosts, and styling arranged for your home, majlis, or venue.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so the celebration runs effortlessly.' },
]

const useCases = [
  {
    title: 'Eid al-Fitr Celebrations',
    description: 'After a month of fasting, Eid al-Fitr calls for abundance. We design celebratory spreads of mezze, grills, and sweets that bring family and friends together, cooking and serving on-site so the table feels generous from the first plate to the last.',
  },
  {
    title: 'Eid al-Adha Feasts',
    description: 'For Eid al-Adha, the table centres on roasted and slow-cooked lamb. Our ouzi and whole-lamb roasts, drawn from our Arabic catering, make a fitting centrepiece, carved and served with rice, mezze, and rich traditional mains.',
  },
  {
    title: 'Family Gatherings at Home',
    description: 'For Eid gatherings at home across Palm Jumeirah, Emirates Hills, and Dubai Hills, we bring warm, abundant catering to your villa or majlis, handling the cooking and service so the hosts can enjoy the day alongside their guests.',
  },
  {
    title: 'Large Eid Celebrations',
    description: 'For sizeable Eid celebrations and extended-family feasts, our team scales menus and service while keeping quality and presentation consistent, however many guests gather around the table.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Eid celebration catering event in Dubai' },
  { src: '/menu-meat.webp', alt: 'Eid ouzi and grilled lamb in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Traditional Eid sweets and desserts' },
  { src: '/service-villa.webp', alt: 'Villa Eid catering styling in Dubai' },
  { src: '/service-catering.webp', alt: 'Eid feast buffet catering spread' },
  { src: '/menu-appetizer.webp', alt: 'Arabic mezze and appetizers for Eid' },
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
    q: 'Do you cater for both Eid al-Fitr and Eid al-Adha?',
    a: 'Yes. We design celebratory menus for both occasions — abundant mezze, grills, and sweets for Eid al-Fitr after the fast, and lamb-centred feasts with ouzi and slow-cooked mains for Eid al-Adha. We tailor the spread to the spirit of each Eid.',
  },
  {
    q: 'Can you prepare ouzi and whole-lamb roasts?',
    a: 'We can. Ouzi and whole-lamb roasts on beds of fragrant rice are a signature of our Eid catering, carved and served at the table. They make a striking centrepiece, especially for Eid al-Adha and larger family gatherings.',
  },
  {
    q: 'Is all your Eid catering halal?',
    a: 'Always. Every dish across our Eid and seasonal menus is prepared with halal ingredients sourced from trusted suppliers. This is our standard for the occasion and throughout the year.',
  },
  {
    q: 'Do you provide Eid sweets and dessert tables?',
    a: 'Yes. We include traditional Eid sweets such as kunafa and baklava, and can style a full dessert table to your theme as a generous, celebratory finish to the feast.',
  },
  {
    q: 'Do you handle home and villa Eid gatherings?',
    a: 'We do. We bring warm, abundant catering to your home, villa, or majlis across Dubai, cooking and serving on-site with our own staff. Setup, service, and pack-down are all handled so the hosts can enjoy the day.',
  },
  {
    q: 'How far in advance should I book Eid catering?',
    a: 'Eid follows immediately after Ramadan and demand is high, so we recommend booking six to eight weeks ahead to secure your dates. Whole-lamb roasts and larger family feasts in particular benefit from earlier planning.',
  },
]

const relatedServices = [
  {
    title: 'Ramadan Catering',
    description: 'The full Ramadan hub — iftar, suhoor, corporate, and villa gatherings across Dubai.',
    image: '/service-events.webp',
    link: '/ramadan-catering-dubai',
  },
  {
    title: 'Arabic Catering',
    description: 'Authentic Arabic menus — mezze, grills, ouzi, and slow-cooked classics for any feast.',
    image: '/menu-meat.webp',
    link: '/arabic-catering-dubai',
  },
  {
    title: 'Dessert Tables',
    description: 'Styled sweet tables, kunafa, baklava, and patisserie — the perfect finish to any celebration.',
    image: '/menu-dessert.webp',
    link: '/dessert-table-catering-dubai',
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
  name: 'Eid Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Eid Catering Dubai', item: 'https://mychef.ae/eid-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function EidCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.eid-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.eid-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.eid-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.eid-fmt-card', {
      scrollTrigger: { trigger: '.eid-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.eid-uc-item', {
      scrollTrigger: { trigger: '.eid-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.eid-inc-item', {
      scrollTrigger: { trigger: '.eid-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.eid-gallery-img', {
      scrollTrigger: { trigger: '.eid-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.eid-faq-item', {
      scrollTrigger: { trigger: '.eid-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.eid-loc-item', {
      scrollTrigger: { trigger: '.eid-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.eid-rel-card', {
      scrollTrigger: { trigger: '.eid-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.eid-cta', {
      scrollTrigger: { trigger: '.eid-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Eid Catering Dubai | Eid al-Fitr & al-Adha Feasts"
        description="Eid catering in Dubai with halal feasts for Eid al-Fitr and al-Adha, ouzi and whole-lamb roasts, family gatherings, and Eid sweets. Book early — request your custom quote today."
        canonicalPath="/eid-catering-dubai"
        ogImage="/service-events.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/eid-suhoor-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 eid-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Eid Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 eid-hero-h1">
            Eid Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 eid-hero-sub">
            Halal Eid al-Fitr and Eid al-Adha feasts for family gatherings across Dubai — ouzi and whole-lamb roasts, generous mezze and grills, and traditional Eid sweets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=eid-catering-dubai" className="btn-primary opacity-0 translate-y-4 eid-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 eid-hero-cta"
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
            THE CELEBRATION IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Feast to Mark the Occasion
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Eid is a time of abundance, gratitude, and gathering — and the table sits at the heart of it. At myCHEF Dubai, we bring generous, halal feasts to homes, villas, and majlis across the city for both Eid al-Fitr and Eid al-Adha. From mezze and mixed grills to showstopping ouzi and whole-lamb roasts carved at the table, every menu is built to celebrate the occasion and welcome the people you love.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting an intimate family gathering or a large extended-family feast, our chefs cook on-site and our staff handle the service and pack-down, so the hosts can enjoy the day too. Eid follows our wider <Link to="/ramadan-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Ramadan catering in Dubai</Link>, draws on our <Link to="/arabic-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Arabic catering</Link> menus, finishes with a <Link to="/dessert-table-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">dessert table</Link> of traditional sweets, and fits within our <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>. Because demand around Eid is high, we recommend booking six to eight weeks ahead.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              EID FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Feasts for Eid al-Fitr & al-Adha
            </h2>
          </div>

          <div className="eid-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eidFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="eid-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

          <div className="eid-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="eid-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Eid Catering Includes
          </h2>

          <div className="eid-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="eid-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Eid Catering
          </h2>

          <div className="eid-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="eid-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Eid Catering Questions
          </h2>

          <div className="eid-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="eid-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="eid-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="eid-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="eid-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="eid-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center eid-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Eid Feast
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your Eid gathering and we'll design a halal feast — ouzi, grills, and sweets — handle the cooking and service, and let you enjoy the day. Book six to eight weeks ahead to secure your dates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=eid-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
