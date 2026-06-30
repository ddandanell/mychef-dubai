import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Flame,
  Beef,
  Fish,
  Home,
  Ship,
  Users,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan BBQ catering in Dubai (via mychef.ae/bbq-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const bbqFormats = [
  {
    icon: Flame,
    title: 'Chef-Manned Grills',
    description: 'A dedicated grill chef works live at your event, cooking each cut to order so every plate arrives hot, charred, and exactly how your guests like it.',
    link: '/catering-dubai',
  },
  {
    icon: Beef,
    title: 'Premium Meat Selection',
    description: 'Aged steaks, lamb chops, marinated chicken, and gourmet burgers, sourced from trusted suppliers and grilled over open flame for deep, smoky flavour.',
    link: '/party-catering-dubai',
  },
  {
    icon: Fish,
    title: 'Seafood on the Grill',
    description: 'Whole fish, prawns, and shellfish grilled with herbs and citrus — a lighter, elegant addition that works beautifully for beachside and poolside events.',
    link: '/buffet-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Garden BBQ',
    description: 'Full-service grilling for villa terraces, gardens, and rooftops across Dubai, with setup, live cooking, and cleanup all handled by our team.',
    link: '/catering-dubai',
  },
  {
    icon: Ship,
    title: 'Yacht BBQ Catering',
    description: 'Compact, mess-free grilling and chilled sides designed for the deck — generous, relaxed dining for charters around Dubai Marina and the coast.',
    link: '/bachelor-party-catering-dubai',
  },
  {
    icon: Users,
    title: 'Sharing-Style Feasts',
    description: 'Grilled platters, mezze, salads, and sides served family-style for a warm, convivial atmosphere that brings guests together around the table.',
    link: '/party-catering-dubai',
  },
]

const includedItems = [
  { title: 'Live Grilling Stations', description: 'Professional grill setup and chef-manned cooking throughout your event.' },
  { title: 'Premium Meats & Seafood', description: 'Quality cuts, marinated proteins, and fresh seafood prepared to order.' },
  { title: 'Marinades & Rubs', description: 'House marinades, spice rubs, and sauces developed by our culinary team.' },
  { title: 'Sides, Salads & Mezze', description: 'A generous spread of hot sides, fresh salads, breads, and dips.' },
  { title: 'Professional Service Staff', description: 'Grill chefs, servers, and hosts scaled to your guest count.' },
  { title: 'Equipment & Setup', description: 'We bring the grills, stations, tableware, and everything needed on site.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, run the service, and leave your space spotless.' },
  { title: 'Dietary Flexibility', description: 'Halal, vegetarian, and allergy-aware options built into every menu.' },
]

const useCases = [
  {
    title: 'Villa & Garden Parties',
    description: 'Turn your villa terrace, garden, or rooftop into an open-air grill house. We bring the stations, the chef, and the styling to you across Palm Jumeirah, Emirates Hills, Dubai Hills, and beyond.',
  },
  {
    title: 'Yacht & Beach Gatherings',
    description: 'Relaxed grilled feasts designed for the water and the sand. Compact menus that look spectacular on deck and travel cleanly to beachside events around Dubai Marina and JBR.',
  },
  {
    title: 'Celebrations & Milestones',
    description: 'Birthdays, bachelor weekends, and family gatherings come alive around a live grill. The aroma, the sizzle, and the shared plates become part of the entertainment.',
  },
  {
    title: 'Corporate & Team Events',
    description: 'A chef-manned BBQ brings a warm, social energy to company days, client entertaining, and team celebrations — polished enough to impress, relaxed enough to enjoy.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Luxury BBQ catering setup in Dubai' },
  { src: '/menu-meat.webp', alt: 'Premium grilled meat selection' },
  { src: '/process-3.webp', alt: 'Chef grilling live at a Dubai event' },
  { src: '/service-villa.webp', alt: 'Villa BBQ catering in Dubai' },
  { src: '/menu-seafood.webp', alt: 'Grilled seafood platter' },
  { src: '/service-catering.webp', alt: 'BBQ buffet spread for a celebration' },
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
    q: 'Do you bring your own grills and equipment?',
    a: 'Yes. We arrive with professional grilling stations, all cooking equipment, serving setups, and tableware. You simply provide the space, whether that is a villa garden, rooftop, beach, or yacht deck.',
  },
  {
    q: 'What meats and seafood do you offer for BBQ?',
    a: 'Our grills feature aged steaks, lamb chops, marinated chicken, gourmet burgers, and sausages, alongside grilled prawns, whole fish, and shellfish. Every menu is built around your preferences and guest count.',
  },
  {
    q: 'Is your BBQ catering halal?',
    a: 'Yes. We source halal meats by default and are happy to confirm the specifics of your menu. We also accommodate vegetarian, vegan, and allergy-aware requirements alongside the grill.',
  },
  {
    q: 'Can you cater a BBQ on a yacht or at the beach?',
    a: 'Absolutely. We design compact, mess-free grilling menus and chilled sides specifically for yacht charters and beachside events around Dubai Marina, JBR, and the wider coastline.',
  },
  {
    q: 'How many guests can you cater a BBQ for?',
    a: 'We grill for intimate gatherings of around 10 guests up to large celebrations of several hundred. Our team scales the number of grill chefs and stations to match your event size.',
  },
  {
    q: 'How far in advance should I book BBQ catering?',
    a: 'For smaller events, one to two weeks is ideal. For larger gatherings, we recommend two to four weeks. During peak season (November to March), earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Full-service luxury catering for events of every size across Dubai.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Buffet Catering',
    description: 'Hot and cold buffet stations for large gatherings and corporate events.',
    image: '/service-events.webp',
    link: '/buffet-catering-dubai',
  },
  {
    title: 'Party Catering',
    description: 'Bespoke menus, styling, and service for celebrations of every kind.',
    image: '/service-villa.webp',
    link: '/party-catering-dubai',
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
  name: 'BBQ Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'BBQ Catering Dubai', item: 'https://mychef.ae/bbq-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function BBQCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bbq-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bbq-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bbq-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bbq-fmt-card', {
      scrollTrigger: { trigger: '.bbq-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bbq-uc-item', {
      scrollTrigger: { trigger: '.bbq-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-inc-item', {
      scrollTrigger: { trigger: '.bbq-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-gallery-img', {
      scrollTrigger: { trigger: '.bbq-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bbq-faq-item', {
      scrollTrigger: { trigger: '.bbq-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bbq-loc-item', {
      scrollTrigger: { trigger: '.bbq-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bbq-rel-card', {
      scrollTrigger: { trigger: '.bbq-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bbq-cta', {
      scrollTrigger: { trigger: '.bbq-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="BBQ Catering Dubai | Chef-Manned Grills"
        description="Premium BBQ catering in Dubai with chef-manned grills, aged steaks, gourmet burgers, and grilled seafood. Villa, garden, beach, and yacht BBQ with full service."
        canonicalPath="/bbq-catering-dubai"
        ogImage="/service-events.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/bbq-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bbq-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">BBQ Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bbq-hero-h1">
            BBQ Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bbq-hero-sub">
            Chef-manned grills, premium meats, and fresh seafood cooked live at your villa, garden, beach, or yacht — the theatre and aroma of open-flame cooking with flawless full service across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bbq-catering-dubai" className="btn-primary opacity-0 translate-y-4 bbq-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bbq-hero-cta"
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
            DUBAI BBQ SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Open-Flame Cooking, Brought to You
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            There is something timeless about food cooked over fire — the sound of the grill, the aroma drifting across the terrace, the moment guests gather while a chef plates a perfectly charred cut. At myCHEF Dubai, our BBQ catering turns that simple pleasure into a polished, full-service experience, designed around your venue and your guests.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Our grill chefs work live at your event, cooking premium steaks, lamb, marinated chicken, gourmet burgers, and fresh seafood to order. Around the grill we build a generous spread of mezze, salads, hot sides, and house sauces, so every guest finds something they love. Whether it is a relaxed villa gathering, a yacht charter, or a corporate celebration, we bring the stations, the staff, and the styling to you. Explore our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or speak to us directly to start planning your menu.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: BBQ Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT WE GRILL
            </span>
            <h2 className="font-playfair text-h2 text-white">
              BBQ Catering, Your Way
            </h2>
          </div>

          <div className="bbq-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bbqFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="bbq-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE WE GRILL
            </span>
            <h2 className="font-playfair text-h2 text-white">
              BBQ for Every Setting
            </h2>
          </div>

          <div className="bbq-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bbq-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our BBQ Catering Includes
          </h2>

          <div className="bbq-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bbq-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our BBQ Catering
          </h2>

          <div className="bbq-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bbq-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            BBQ Catering Questions
          </h2>

          <div className="bbq-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bbq-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            BBQ Catering Across Dubai
          </h2>

          <div className="bbq-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bbq-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="bbq-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bbq-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center bbq-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Fire Up Your Event
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your gathering and we'll design a grill menu, sides, and service plan that fits it perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bbq-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
