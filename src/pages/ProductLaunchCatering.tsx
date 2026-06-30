import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Wine,
  Newspaper,
  Crown,
  Flame,
  CakeSlice,
  Cpu,
  Car,
  Gem,
  UtensilsCrossed,
  Landmark,
  Sparkles,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I would like to discuss product launch catering in Dubai (via mychef.ae/product-launch-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const launchFormats = [
  {
    icon: Wine,
    title: 'Canapé & Champagne Reception',
    description: 'A standing reception with passed canapés, flutes, and circulating service — ideal for unveilings and pre-launch networking.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Newspaper,
    title: 'Media & Press Lunch',
    description: 'Seated or buffet lunches designed for journalists, creators, and PR teams, with photogenic plating and seamless timing.',
    link: '/business-lunch-catering-dubai',
  },
  {
    icon: Crown,
    title: 'Investor Dinner',
    description: 'Plated multi-course dining in a private venue, with discreet service and a menu that reflects the ambition of your round.',
    link: '/luxury-dining-dubai',
  },
  {
    icon: Flame,
    title: 'Live Station Theatre',
    description: 'Chef-manned stations that create energy and shareable moments around your product, from carving to made-to-order small plates.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: CakeSlice,
    title: 'Branded Dessert & Coffee Bar',
    description: 'Custom desserts, petit fours, and specialty coffee finished with brand accents for a memorable final impression.',
    link: '/dessert-table-catering-dubai',
  },
]

const industries = [
  { icon: Cpu, name: 'Technology & Startups' },
  { icon: Car, name: 'Automotive' },
  { icon: Gem, name: 'Fashion & Luxury Retail' },
  { icon: UtensilsCrossed, name: 'F&B and Hospitality' },
  { icon: Landmark, name: 'Finance & Real Estate' },
  { icon: Sparkles, name: 'Wellness & Beauty' },
]

const planningChecklist = [
  'Menu aligned with brand identity',
  'Dietary and cultural requirements',
  'Timed service around speeches / reveals',
  'Branded presentation and linens',
  'Photographer-friendly plating',
  'Dedicated event captain',
]

const includedItems = [
  { title: 'Bespoke menu design', description: 'A tailored menu built around your product, audience, and venue.' },
  { title: 'Premium ingredients', description: 'Seasonal produce, imported specialties, and trusted local suppliers.' },
  { title: 'Chef and service team', description: 'Experienced chefs, captains, and front-of-house staff for your event.' },
  { title: 'Bar and beverage service', description: 'Curated drinks, bartenders, and optional mobile bar setup.' },
  { title: 'Tableware, linens, and styling', description: 'Elegant crockery, glassware, and presentation details.' },
  { title: 'Setup, service, and clear-down', description: 'Full logistics from kitchen build to final breakdown.' },
]

const galleryImages = [
  { src: '/images/canape-catering-dubai-hero.webp', alt: 'Canapé reception at a Dubai product launch event' },
  { src: '/images/corporate-catering-dubai-hero.webp', alt: 'Corporate launch catering in Dubai' },
  { src: '/images/live-cooking-stations-dubai-hero.webp', alt: 'Live cooking station theatre at a Dubai media event' },
  { src: '/images/cocktail-party-catering-dubai-hero.webp', alt: 'Drinks service for a brand launch in Dubai' },
  { src: '/images/dessert-table-catering-dubai-hero.webp', alt: 'Branded dessert display for a product launch' },
  { src: '/images/events-catering-dubai-hero.webp', alt: 'Premium event catering setup in Dubai' },
]

const locations = [
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'DWTC', slug: 'dwtc' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'Dubai Creek Harbour', slug: 'dubai-creek-harbour' },
]

const faqs = [
  {
    q: 'Do you cater small product launches in Dubai?',
    a: 'Yes. We cater intimate press previews through to large-scale public launches, scaling the menu and team to your guest count.',
  },
  {
    q: 'Can the menu reflect our brand or product theme?',
    a: 'Absolutely. We design custom menus, named dishes, branded desserts, and themed presentation to align with your launch narrative.',
  },
  {
    q: 'Do you provide service staff and bartenders?',
    a: 'Yes. Every launch package includes professional service staff, event captains, and optional bartenders or mobile bar service.',
  },
  {
    q: 'How far in advance should I book launch catering?',
    a: 'We recommend 2–4 weeks for large launches to allow menu development and venue coordination. Shorter timelines can often be accommodated.',
  },
  {
    q: 'Can you cater at venues, showrooms, or offices?',
    a: 'Yes. We cater at offices, showrooms, hotels, yachts, and partner venues across Dubai, and can coordinate directly with your venue team.',
  },
]

const relatedServices = [
  {
    title: 'Corporate Event Catering',
    description: 'Full-service catering for conferences, galas, and company milestones across Dubai.',
    image: '/images/corporate-catering-dubai-hero.webp',
    link: '/corporate-event-catering-dubai',
  },
  {
    title: 'Brand Activation Catering',
    description: 'Immersive food and drink experiences designed to amplify brand activations and pop-ups.',
    image: '/images/events-catering-dubai-hero.webp',
    link: '/brand-activation-catering-dubai',
  },
  {
    title: 'Conference Catering',
    description: 'Professional delegate dining, coffee breaks, and working lunches for large-scale conferences.',
    image: '/images/office-catering-dubai-hero.webp',
    link: '/conference-catering-dubai',
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
  name: 'Product Launch Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Product Launch Catering Dubai', item: 'https://mychef.ae/product-launch-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function ProductLaunchCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.plc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.plc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.plc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.plc-fmt-card', {
      scrollTrigger: { trigger: '.plc-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.plc-ind-item', {
      scrollTrigger: { trigger: '.plc-ind-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.plc-check-item', {
      scrollTrigger: { trigger: '.plc-check-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.plc-inc-item', {
      scrollTrigger: { trigger: '.plc-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.plc-gallery-img', {
      scrollTrigger: { trigger: '.plc-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.plc-faq-item', {
      scrollTrigger: { trigger: '.plc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.plc-loc-item', {
      scrollTrigger: { trigger: '.plc-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.plc-rel-card', {
      scrollTrigger: { trigger: '.plc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.plc-cta', {
      scrollTrigger: { trigger: '.plc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Product Launch Catering Dubai | B2B Events | myCHEF"
        description="Impress investors, media, and guests with product launch catering in Dubai. Branded menus, canapés, live stations & full service."
        canonicalPath="/product-launch-catering-dubai"
        ogImage="/images/corporate-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/canape-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 plc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Product Launch Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 plc-hero-h1">
            Product Launch Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 plc-hero-sub">
            Catering that matches the moment. Bespoke menus and flawless service for product launches, press events, and brand unveilings across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=product-launch-catering-dubai" className="btn-primary opacity-0 translate-y-4 plc-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 plc-hero-cta"
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
            B2B EVENT CATERING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Why Launch Catering Matters
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A product launch is more than a presentation — it is the first impression your market will have of something new. The food, the drinks, and the service all signal the quality and attention to detail behind your brand. At myCHEF Dubai, we design product launch catering around your product, your audience, and your venue, so every bite reinforces the story you are telling.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            From intimate investor dinners in DIFC to large-scale unveilings in Downtown Dubai, our team plans menus that match the tone of the event. We time service around speeches and reveals, cater to dietary and cultural requirements, and create presentation that photographs beautifully for press and social coverage. Whether you need a canapé reception, a media lunch, or a branded dessert bar, we deliver the polish your launch deserves.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Explore our launch formats below, or see how we support wider <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate event catering in Dubai</Link>, <Link to="/brand-activation-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">brand activation catering</Link>, and <Link to="/business-lunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">business lunch catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              LAUNCH CATERING FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Formats Built for Unveilings
            </h2>
          </div>

          <div className="plc-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {launchFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="plc-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 4: Industries ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              INDUSTRIES WE SERVE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Trusted Across Dubai Sectors
            </h2>
          </div>

          <div className="plc-ind-grid grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <div key={i} className="plc-ind-item bg-charcoal p-6 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h4 text-white">{ind.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Planning Checklist ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            Launch Catering Planning Checklist
          </h2>

          <div className="plc-check-grid grid md:grid-cols-2 gap-6">
            {planningChecklist.map((item, i) => (
              <div key={i} className="plc-check-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-inter text-body-lg text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What's Included
          </h2>

          <div className="plc-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="plc-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 7: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Launch Moments We Cater
          </h2>

          <div className="plc-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="plc-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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

      {/* ═══════════════ Section 8: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Product Launch Catering Questions
          </h2>

          <div className="plc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="plc-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 9: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Launch Catering Locations
          </h2>

          <div className="plc-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="plc-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
            <Link
              to="/venue-partners"
              className="plc-loc-item flex items-center gap-2 font-inter text-sm text-gold hover:text-gold-light transition-colors opacity-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              Our Dubai Venue Partners
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 10: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="plc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="plc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 11: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center plc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Ready to Launch?
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Plan launch catering that leaves an impression. Tell us about your product, guests, and venue and we will build a proposal tailored to your moment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=product-launch-catering-dubai" className="btn-primary">Request a Launch Catering Quote</Link>
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
