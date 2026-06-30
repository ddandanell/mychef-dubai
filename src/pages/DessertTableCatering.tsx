import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Cake,
  Cookie,
  Heart,
  PartyPopper,
  Baby,
  Coffee,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan a dessert table in Dubai (via mychef.ae/dessert-table-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const dessertFormats = [
  {
    icon: Cake,
    title: 'Celebration Cakes',
    description: 'Bespoke layered and tiered cakes designed around your theme, from elegant wedding cakes to playful birthday centrepieces.',
    link: '/catering-dubai',
  },
  {
    icon: Cookie,
    title: 'French Patisserie',
    description: 'Macarons, éclairs, tarts, and petits fours arranged into a refined patisserie display for sophisticated celebrations.',
    link: '/catering-dubai',
  },
  {
    icon: Heart,
    title: 'Wedding Dessert Tables',
    description: 'Curated sweet tables and dessert stations styled to complement your wedding palette, florals, and venue.',
    link: '/wedding-catering-dubai',
  },
  {
    icon: PartyPopper,
    title: 'Birthday Sweet Tables',
    description: 'Cakes, cupcakes, cookies, and themed confections that bring colour and delight to birthday celebrations of every age.',
    link: '/birthday-catering-dubai',
  },
  {
    icon: Baby,
    title: 'Baby Shower Desserts',
    description: 'Soft, pastel dessert tables with delicate sweets, cake pops, and mini treats for a gentle baby shower celebration.',
    link: '/baby-shower-catering-dubai',
  },
  {
    icon: Coffee,
    title: 'Dessert & Coffee Stations',
    description: 'Live dessert stations and barista-style coffee service to close corporate events and private dinners on a sweet note.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Cake Design', description: 'A signature cake designed around your theme, palette, and flavour.' },
  { title: 'Patisserie Selection', description: 'Macarons, tarts, éclairs, and petits fours from our pastry kitchen.' },
  { title: 'Mini Sweets & Treats', description: 'Cupcakes, cake pops, cookies, and bite-sized confections.' },
  { title: 'Styled Display', description: 'Tiered stands, cake plinths, glassware, and themed styling.' },
  { title: 'Themed Presentation', description: 'Colour palettes, florals, and signage matched to your celebration.' },
  { title: 'On-Site Set-Up', description: 'We build and style the dessert table at your venue.' },
  { title: 'Dietary Options', description: 'Vegetarian, eggless, and gluten-free sweets arranged on request.' },
  { title: 'Full Pack-Down', description: 'We clear and pack down the dessert table after your event.' },
]

const useCases = [
  {
    title: 'Wedding Sweet Tables',
    description: 'A dessert table is one of the most photographed moments of a wedding. We curate cakes, patisserie, and sweet displays styled to your palette and florals, set up beautifully at your villa or venue across Dubai.',
  },
  {
    title: 'Birthday Celebrations',
    description: 'From first birthdays to milestone parties, our sweet tables bring colour, theme, and a centrepiece cake that becomes the heart of the celebration. We tailor flavours and styling to the guest of honour.',
  },
  {
    title: 'Baby Showers & Gender Reveals',
    description: 'Soft, pastel dessert tables with cake pops, mini treats, and a delicate centrepiece cake set the perfect tone for baby showers and reveal moments where presentation matters as much as taste.',
  },
  {
    title: 'Corporate & Private Dinners',
    description: 'Close a corporate event or private dinner with a refined dessert and coffee station. Live finishes, elegant patisserie, and barista-style service leave a lasting final impression on your guests.',
  },
]

const galleryImages = [
  { src: '/menu-dessert.jpg', alt: 'Styled dessert table in Dubai' },
  { src: '/service-events.jpg', alt: 'Event dessert station set-up' },
  { src: '/menu-canapes.jpg', alt: 'Sweet and savoury display' },
  { src: '/service-villa.jpg', alt: 'Villa dessert table styling' },
  { src: '/menu-appetizer.jpg', alt: 'Patisserie and mini treats' },
  { src: '/service-luxury-dining.jpg', alt: 'Luxury dining dessert service' },
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
    q: 'What is included in a dessert table?',
    a: 'A dessert table typically features a centrepiece cake alongside a selection of patisserie, mini cakes, cupcakes, cookies, and bite-sized sweets, all arranged on styled stands. We tailor the mix and quantity to your guest count and theme.',
  },
  {
    q: 'Can you make a custom cake for the table?',
    a: 'Yes. Every dessert table can be built around a bespoke cake designed to your flavour, palette, and theme, whether that is an elegant tiered wedding cake or a playful birthday centrepiece.',
  },
  {
    q: 'Do you style the dessert table to match my theme?',
    a: 'Absolutely. We style each dessert table with tiered stands, plinths, glassware, florals, and signage matched to your colour palette and event theme, so it works as both a feature and a backdrop.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We can arrange eggless, vegetarian, and gluten-free sweets, and we are happy to build allergy-conscious selections. Let us know your guests’ requirements when planning your dessert table.',
  },
  {
    q: 'Do you set up and clear the dessert table?',
    a: 'Yes. Our team delivers, builds, and styles the dessert table on-site at your villa or venue, and we return to pack down and clear afterwards so you can simply enjoy the celebration.',
  },
  {
    q: 'How far in advance should I book a dessert table?',
    a: 'For smaller dessert tables, one to two weeks is ideal. For wedding cakes and fully styled displays, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Wedding Catering',
    description: 'Full-service wedding dining, from canapés to sweet tables for your special day.',
    image: '/service-events.jpg',
    link: '/wedding-catering-dubai',
  },
  {
    title: 'Birthday Catering',
    description: 'Custom cakes, themed menus, and full service for birthdays of every age.',
    image: '/menu-dessert.jpg',
    link: '/birthday-catering-dubai',
  },
  {
    title: 'Baby Shower Catering',
    description: 'Pastel dessert tables and afternoon-tea menus for an intimate baby shower.',
    image: '/menu-canapes.jpg',
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
  name: 'Dessert Table Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Dessert Table Catering Dubai', item: 'https://mychef.ae/dessert-table-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function DessertTableCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.des-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.des-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.des-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.des-fmt-card', {
      scrollTrigger: { trigger: '.des-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.des-uc-item', {
      scrollTrigger: { trigger: '.des-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.des-inc-item', {
      scrollTrigger: { trigger: '.des-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.des-gallery-img', {
      scrollTrigger: { trigger: '.des-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.des-faq-item', {
      scrollTrigger: { trigger: '.des-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.des-loc-item', {
      scrollTrigger: { trigger: '.des-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.des-rel-card', {
      scrollTrigger: { trigger: '.des-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.des-cta', {
      scrollTrigger: { trigger: '.des-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Dessert Table Dubai | Patisserie & Sweet Tables"
        description="Bespoke dessert tables in Dubai for weddings, birthdays, and baby showers. Custom cakes, French patisserie, styled sweet displays with full set-up and dietary options."
        canonicalPath="/dessert-table-catering-dubai"
        ogImage="/menu-dessert.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/dessert-table-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 des-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Dessert Table Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 des-hero-h1">
            Dessert Tables in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 des-hero-sub">
            Custom cakes, French patisserie, and styled sweet tables for weddings, birthdays, and baby showers — designed to look as good as they taste.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=dessert-table-catering-dubai" className="btn-primary opacity-0 translate-y-4 des-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 des-hero-cta"
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
            PATISSERIE & SWEET TABLES
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The Sweetest Moment of the Day
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            The dessert table is where a celebration lingers. It is the centrepiece cake everyone photographs, the tower of macarons that disappears first, the styled display that frames the room. At myCHEF Dubai, our pastry kitchen builds dessert tables as composed, considered installations — bespoke cakes, refined French patisserie, and bite-sized sweets arranged across tiered stands and plinths to match your palette and theme.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Whether you are planning an elegant wedding sweet table, a colourful birthday display, a pastel baby shower, or a refined dessert and coffee station to close a dinner, our team designs, delivers, and styles it on-site at your villa or venue. Discover our dessert formats below, or see how they fit within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DESSERT FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Sweet Tables for Every Occasion
            </h2>
          </div>

          <div className="des-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dessertFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="des-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE DESSERT TABLES SHINE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Styled for Every Celebration
            </h2>
          </div>

          <div className="des-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="des-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Dessert Tables Include
          </h2>

          <div className="des-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="des-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Dessert Tables
          </h2>

          <div className="des-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="des-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Dessert Table Questions
          </h2>

          <div className="des-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="des-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

          <div className="des-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="des-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="des-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="des-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center des-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Design Your Dessert Table
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll create a cake and dessert table styled to your theme, palette, and guest count.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=dessert-table-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
