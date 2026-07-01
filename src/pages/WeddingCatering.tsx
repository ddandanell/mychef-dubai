import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Heart,
  UtensilsCrossed,
  Wine,
  Users,
  Salad,
  Home,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan wedding catering in Dubai (via mychef.ae/wedding-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const weddingFormats = [
  {
    icon: UtensilsCrossed,
    title: 'Plated Wedding Dinners',
    description: 'Elegant multi-course dinners with professional table service, ideal for formal receptions and seated celebrations.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Buffet & Live Stations',
    description: 'Beautifully styled buffet and chef-manned live stations offering variety and movement for larger weddings.',
    link: '/catering-dubai',
  },
  {
    icon: Wine,
    title: 'Canapés & Cocktail Hour',
    description: 'Passed canapés, sparkling service, and a styled bar to welcome guests during your cocktail reception.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    icon: Salad,
    title: 'Family-Style Sharing',
    description: 'Generous shared platters served to the table for a warm, convivial atmosphere across long banquet seating.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Venue Weddings',
    description: 'Full-service wedding catering at your villa, garden, or chosen venue across Dubai, with setup, service, and clear-down.',
    link: '/catering-dubai',
  },
  {
    icon: Heart,
    title: 'Sweet & Dessert Tables',
    description: 'Bespoke wedding cakes, patisserie, and styled dessert tables to close the celebration on a memorable note.',
    link: '/dessert-table-catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Wedding Menu', description: 'A menu designed around your love story, cuisine, and guest list.' },
  { title: 'Multi-Cuisine Options', description: 'Arabic, Mediterranean, Asian, and international menus, blended as you wish.' },
  { title: 'Professional Service Staff', description: 'Waiters, captains, and bartenders scaled to your guest count.' },
  { title: 'Cocktail & Bar Service', description: 'Welcome drinks, cocktails, mocktails, and attentive bar service.' },
  { title: 'Dietary & Cultural Catering', description: 'Halal, vegetarian, vegan, and allergy-conscious menus as standard.' },
  { title: 'Table Styling & Tableware', description: 'Elegant tableware, glassware, linens, and presentation styling.' },
  { title: 'Wedding Cake & Desserts', description: 'A bespoke cake and dessert table styled to your theme.' },
  { title: 'Full Setup & Clear-Down', description: 'We handle every detail from arrival to the final clean-up.' },
]

const useCases = [
  {
    title: 'Villa & Garden Weddings',
    description: 'For intimate weddings at home, we transform your villa, garden, or terrace into a full reception space — bringing the kitchen, the staff, and the styling to you across Palm Jumeirah, Emirates Hills, Dubai Hills, and beyond.',
  },
  {
    title: 'Grand Hotel & Venue Receptions',
    description: 'For larger celebrations, we work seamlessly within your chosen venue, coordinating with planners and stylists to deliver plated dinners, buffets, and live stations at scale without compromising on detail.',
  },
  {
    title: 'Multi-Day Wedding Events',
    description: 'Engagements, pre-wedding dinners, the main reception, and the post-wedding brunch each deserve their own menu. We design a considered culinary thread across every event in your celebration.',
  },
  {
    title: 'Cultural & Fusion Menus',
    description: 'From a traditional Arabic feast to a Mediterranean banquet or an East-meets-West fusion, we design menus that honour your heritage and tastes, always prepared to halal standards as required.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Luxury wedding catering setup in Dubai' },
  { src: '/service-luxury-dining.webp', alt: 'Elegant plated wedding dinner' },
  { src: '/menu-canapes.webp', alt: 'Canapé service at a wedding reception' },
  { src: '/service-villa.webp', alt: 'Villa wedding catering in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Wedding dessert table' },
  { src: '/menu-meat.webp', alt: 'Plated main course at a wedding' },
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
    q: 'How many guests can you cater for at a wedding?',
    a: 'We cater weddings of every scale, from intimate gatherings of around 20 to grand receptions of several hundred guests. The service style, staffing, and kitchen set-up are tailored to your final guest count and venue.',
  },
  {
    q: 'What service styles do you offer for weddings?',
    a: 'We offer plated multi-course dinners, buffet and live cooking stations, family-style sharing platters, and canapé cocktail-hour service. We advise on the best format based on your venue, guest count, and the mood you want.',
  },
  {
    q: 'Can you create multi-cuisine and cultural menus?',
    a: 'Yes. We design Arabic, Mediterranean, Asian, and international menus, and we are happy to blend cuisines across courses. All menus can be prepared to halal standards, and we cater for vegetarian, vegan, and allergy needs.',
  },
  {
    q: 'Do you provide staff, tableware, and bar service?',
    a: 'Absolutely. Every wedding package includes professional service staff, elegant tableware, glassware and linens, and bar service with cocktails and mocktails, all scaled to your guest count and styled to your theme.',
  },
  {
    q: 'Can you cater weddings at villas and outdoor venues?',
    a: 'Yes. We regularly cater villa, garden, beach, and rooftop weddings across Dubai, bringing a full mobile kitchen, staff, and styling. We also work within hotels and dedicated venues alongside your planner.',
  },
  {
    q: 'How far in advance should we book wedding catering?',
    a: 'For weddings, we recommend booking two to three months in advance to secure your date and finalise menus through tastings. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Engagement Catering',
    description: 'Elegant menus and service for engagement parties and proposal celebrations.',
    image: '/service-events.webp',
    link: '/engagement-catering-dubai',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Bespoke fine-dining experiences for the most special moments of your celebration.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
  {
    title: 'Dessert Table Catering',
    description: 'Bespoke wedding cakes and styled sweet tables to close your celebration.',
    image: '/menu-dessert.webp',
    link: '/dessert-table-catering-dubai',
  },
  {
    title: 'Gelato & Dessert Cart',
    description: 'Elegant gelato and sweet carts to add theatre to your wedding reception.',
    image: '/images/dessert-table-catering-dubai-hero.webp',
    link: '/dessert-cart-dubai',
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
  name: 'Wedding Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Wedding Catering Dubai', item: 'https://mychef.ae/wedding-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function WeddingCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.wed-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.wed-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.wed-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.wed-fmt-card', {
      scrollTrigger: { trigger: '.wed-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wed-uc-item', {
      scrollTrigger: { trigger: '.wed-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-inc-item', {
      scrollTrigger: { trigger: '.wed-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-gallery-img', {
      scrollTrigger: { trigger: '.wed-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.wed-faq-item', {
      scrollTrigger: { trigger: '.wed-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-loc-item', {
      scrollTrigger: { trigger: '.wed-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.wed-rel-card', {
      scrollTrigger: { trigger: '.wed-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wed-cta', {
      scrollTrigger: { trigger: '.wed-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Wedding Catering Dubai | Luxury Reception Dining"
        description="Luxury wedding catering in Dubai for villa, garden, and venue receptions. Plated dinners, buffets, canapés, multi-cuisine menus, service staff, and bespoke dessert tables."
        canonicalPath="/wedding-catering-dubai"
        ogImage="/service-events.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/wedding-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 wed-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Wedding Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 wed-hero-h1">
            Wedding Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 wed-hero-sub">
            From intimate villa ceremonies to grand venue receptions — plated dinners, multi-cuisine menus, beautiful styling, and flawless service for your wedding day in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=wedding-catering-dubai" className="btn-primary opacity-0 translate-y-4 wed-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 wed-hero-cta"
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
            DUBAI WEDDING SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering Worthy of Your Wedding Day
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Your wedding deserves a culinary experience as memorable as the day itself. At myCHEF Dubai, we design wedding catering around your love story — the cuisines that mean something to you, the moments you want to savour, and the guests you want to delight. From the welcome canapés to the final slice of cake — finished by our <Link to="/chefs/sofia-pastry-chef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">pastry chef for wedding desserts</Link> — every detail is considered, styled, and executed with quiet precision.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are planning an intimate villa ceremony, a grand hotel reception, or a multi-day celebration spanning engagement to brunch, our team brings the kitchen, the service, and the styling to you. We work seamlessly with planners and stylists, and pair naturally with our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>. Explore our wedding services below.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WEDDING SERVICE STYLES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering for Every Wedding Format
            </h2>
          </div>

          <div className="wed-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="wed-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              Weddings for Every Setting
            </h2>
          </div>

          <div className="wed-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="wed-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Wedding Catering Includes
          </h2>

          <div className="wed-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="wed-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Wedding Catering
          </h2>

          <div className="wed-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="wed-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Wedding Catering Questions
          </h2>

          <div className="wed-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="wed-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Wedding Catering Across Dubai
          </h2>

          <div className="wed-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="wed-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="wed-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="wed-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Related Guides</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/wedding-catering-checklist-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Wedding Catering Checklist</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center wed-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Wedding Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your vision and we'll craft a bespoke menu, service plan, and styling to make your wedding day unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=wedding-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
