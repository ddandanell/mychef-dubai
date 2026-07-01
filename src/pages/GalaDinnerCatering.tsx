import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  Soup,
  GlassWater,
  CakeSlice,
  Wine,
  Award,
  HeartHandshake,
  Building2,
  Users,
  Flag,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss gala dinner catering in Dubai (via mychef.ae/gala-dinner-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const galaFormats = [
  {
    icon: UtensilsCrossed,
    title: 'Plated Banquet',
    description: 'Multi-course seated dinner with synchronized service, elegant plate presentation, and captain-led floor coordination.',
  },
  {
    icon: Soup,
    title: 'Buffet Gala',
    description: 'Refined buffet stations designed for larger guest counts, with live carving, chef-attended counters, and graceful flow.',
  },
  {
    icon: GlassWater,
    title: 'Canapé & Champagne Reception',
    description: 'Pre-dinner reception with passed canapés, welcome drinks, and roaming service to set a sophisticated tone.',
  },
  {
    icon: CakeSlice,
    title: 'Dessert & Coffee Service',
    description: 'Styled dessert tables, plated petit fours, and after-dinner coffee service to close the evening gracefully.',
  },
  {
    icon: Wine,
    title: 'Wine & Beverage Pairing',
    description: 'Curated wine, champagne, and bespoke beverage service selected to complement each course of the gala menu.',
  },
]

const galaTypes = [
  {
    icon: Award,
    title: 'Awards Ceremonies',
    description: 'Impeccable timing and plated service that keeps the spotlight on the stage while guests dine in style.',
  },
  {
    icon: HeartHandshake,
    title: 'Charity Balls & Fundraisers',
    description: 'Elegant catering that reflects the cause, with menus and service designed to impress donors and supporters.',
  },
  {
    icon: Building2,
    title: 'Corporate Anniversary Galas',
    description: 'Landmark celebrations for companies that want a refined dining experience befitting their brand and achievements.',
  },
  {
    icon: Users,
    title: 'Association & Industry Dinners',
    description: 'Formal dinners for professional associations, trade bodies, and industry groups across Dubai.',
  },
  {
    icon: Flag,
    title: 'National Day & Diplomatic Events',
    description: 'Protocol-aware catering for diplomatic receptions, national celebrations, and formal state occasions.',
  },
]

const includedItems = [
  { title: 'Bespoke Menu Development & Tasting', description: 'A tailored menu built around your theme, with private tasting where required.' },
  { title: 'Executive Chef & Kitchen Team', description: 'Senior culinary leadership and a full brigade to execute every course flawlessly.' },
  { title: 'White-Glove Service Staff & Captains', description: 'Polished waiters, event captains, and front-of-house managers for seamless service.' },
  { title: 'Premium Tableware, Glassware & Linens', description: 'Elegant crockery, crystal, and linens selected to suit the gala setting.' },
  { title: 'Bar & Sommelier Service', description: 'Curated beverage lists, champagne service, and skilled bartenders for the evening.' },
  { title: 'Timed Service Coordination', description: 'Service run in step with speeches, awards, and entertainment for a smooth flow.' },
  { title: 'Full Setup & Clear-Down', description: 'Complete kitchen build, styling, and post-event removal so the venue is left pristine.' },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Elegant gala dinner table setting in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Refined appetizer course for a formal dinner in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Passed canapés at a gala reception in Dubai' },
  { src: '/menu-meat.webp', alt: 'Plated main course for an awards dinner in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Elegant dessert service at a gala dinner in Dubai' },
  { src: '/service-events.webp', alt: 'Formal event catering service in Dubai' },
]

const locations = [
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'DWTC', slug: 'dwtc' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
]

const faqs = [
  {
    q: 'Do you cater large gala dinners in Dubai?',
    a: 'Yes. We cater gala dinners from 50 to several hundred guests, with menus and staffing scaled to the venue and event format.',
  },
  {
    q: 'Can you create a multi-course plated menu for a formal dinner?',
    a: 'Absolutely. We design multi-course plated menus with tasting options and can accommodate dietary, halal, and cultural requirements.',
  },
  {
    q: 'Do you provide service staff and bar service for galas?',
    a: 'Yes. Our gala packages include professional waiters, captains, bartenders, and event managers to ensure seamless service.',
  },
  {
    q: 'Can you cater at hotels and ballrooms?',
    a: 'Yes. We work within hotels, ballrooms, and partner venues across Dubai, coordinating with venue teams on logistics and timings.',
  },
  {
    q: 'How far in advance should we book gala dinner catering?',
    a: 'We recommend 4–6 weeks for large galas to allow menu tastings, venue walkthroughs, and detailed service planning.',
  },
]

const relatedServices = [
  {
    title: 'Corporate Event Catering',
    description: 'Professional dining and hospitality for launches, conferences, and corporate celebrations across Dubai.',
    image: '/corporate-catering-dubai-hero.webp',
    link: '/corporate-event-catering-dubai',
  },
  {
    title: 'Wedding Catering',
    description: 'Luxury wedding menus and service for receptions, from intimate villas to grand ballroom celebrations.',
    image: '/wedding-catering-dubai-hero.webp',
    link: '/wedding-catering-dubai',
  },
  {
    title: 'Canapé Catering',
    description: 'Elegant passed canapés and reception bites for standing receptions and pre-dinner galas.',
    image: '/canape-catering-dubai-hero.webp',
    link: '/canape-catering-dubai',
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
  name: 'Gala Dinner Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Gala Dinner Catering Dubai', item: 'https://mychef.ae/gala-dinner-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function GalaDinnerCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.gala-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.gala-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.gala-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.gala-fmt-card', {
      scrollTrigger: { trigger: '.gala-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.gala-type-card', {
      scrollTrigger: { trigger: '.gala-type-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gala-inc-item', {
      scrollTrigger: { trigger: '.gala-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gala-gallery-img', {
      scrollTrigger: { trigger: '.gala-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.gala-faq-item', {
      scrollTrigger: { trigger: '.gala-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gala-loc-item', {
      scrollTrigger: { trigger: '.gala-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.gala-rel-card', {
      scrollTrigger: { trigger: '.gala-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.gala-cta', {
      scrollTrigger: { trigger: '.gala-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Gala Dinner Catering Dubai | Formal Events | myCHEF"
        description="Elegant gala dinner catering in Dubai for awards nights, charity balls, and corporate galas. Multi-course menus and white-glove service."
        canonicalPath="/gala-dinner-catering-dubai"
        ogImage="/images/gala-dinner-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/gala-dinner-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 gala-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Gala Dinner Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 gala-hero-h1">
            Gala Dinners Worthy of the Occasion
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 gala-hero-sub">
            Refined catering for awards nights, charity galas, and formal celebrations across distinguished Dubai venues.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=gala-dinner-catering-dubai" className="btn-primary opacity-0 translate-y-4 gala-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 gala-hero-cta"
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
            Formal Event Catering
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The Importance of Gala Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A gala is a statement. From the moment guests arrive to the final course, every detail should reflect the prestige of the occasion. At myCHEF Dubai, we deliver gala dinner catering that matches the elegance of the venue, the formality of the dress code, and the ambition of the event itself. Our team designs multi-course menus, curates sommelier-style beverage service, and fields polished front-of-house teams trained for black-tie occasions.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are planning an awards ceremony, charity ball, or corporate anniversary gala, we work behind the scenes so the evening flows flawlessly. Explore our gala formats below, or see how we complement formal occasions through our{' '}
            <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate event catering Dubai</Link>{' '}
            and{' '}
            <Link to="/bar-services-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">bar service for galas</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Gala Catering Formats
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Service Styles for Every Formal Dinner
            </h2>
          </div>

          <div className="gala-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galaFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="gala-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Gala Types ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Gala Types
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Occasions We Cater
            </h2>
          </div>

          <div className="gala-type-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galaTypes.map((type, i) => {
              const Icon = type.icon
              return (
                <div key={i} className="gala-type-card bg-charcoal p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{type.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{type.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What’s Included
          </h2>

          <div className="gala-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="gala-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Gala Dinners
          </h2>

          <div className="gala-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="gala-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Gala Dinner Catering Questions
          </h2>

          <div className="gala-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="gala-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Gala Catering Across Dubai
          </h2>

          <div className="gala-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="gala-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/venue-partners"
              className="inline-flex items-center gap-2 font-inter text-body-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              View Gala Venues & Partners <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="gala-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="gala-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center gala-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Gala Dinner Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your awards night, charity ball, or formal celebration and we will design a gala menu and service plan worthy of the occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=gala-dinner-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
