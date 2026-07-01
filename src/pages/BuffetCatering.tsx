import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Soup,
  Salad,
  Flame,
  Building,
  Users,
  Globe,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan buffet catering in Dubai (via mychef.ae/buffet-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const buffetFormats = [
  {
    icon: Flame,
    title: 'Hot Stations',
    description: 'Chafing-dish mains, slow-cooked roasts, curries, and pasta or carving stations kept warm and replenished throughout your event.',
    link: '/catering-dubai',
  },
  {
    icon: Salad,
    title: 'Cold & Salad Stations',
    description: 'Vibrant salads, antipasti, seafood on ice, cheeses, and breads — fresh, colourful displays that anchor any buffet table.',
    link: '/catering-dubai',
  },
  {
    icon: Soup,
    title: 'Live Action Stations',
    description: 'Pasta, risotto, carving, and grill stations manned by our chefs, adding theatre and freshness to the buffet experience.',
    link: '/party-catering-dubai',
  },
  {
    icon: Globe,
    title: 'International Cuisines',
    description: 'Arabic, Mediterranean, Asian, and Continental spreads — or a curated mix — designed around your guests and the occasion.',
    link: '/catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Buffets',
    description: 'Working lunches, conferences, and company events with efficient, generous service that keeps things moving on schedule.',
    link: '/corporate',
  },
  {
    icon: Users,
    title: 'Large Gatherings',
    description: 'Weddings, receptions, and milestone celebrations served with abundant, beautifully presented stations for every guest.',
    link: '/party-catering-dubai',
  },
]

const includedItems = [
  { title: 'Hot & Cold Stations', description: 'Balanced buffet menus spanning warm mains, fresh salads, and sides.' },
  { title: 'Live Action Counters', description: 'Chef-manned pasta, carving, and grill stations for freshness and theatre.' },
  { title: 'International Menus', description: 'Arabic, Mediterranean, Asian, and Continental options, or a tailored blend.' },
  { title: 'Elegant Display Styling', description: 'Tiered presentation, chafing dishes, linens, and signage for each dish.' },
  { title: 'Professional Service Staff', description: 'Servers, station chefs, and hosts scaled to your guest count.' },
  { title: 'Replenishment & Flow', description: 'Continuous topping-up so stations stay full and queues stay short.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, run the service, and leave your space spotless.' },
  { title: 'Dietary Flexibility', description: 'Halal, vegetarian, vegan, and allergy-aware dishes clearly labelled.' },
]

const useCases = [
  {
    title: 'Corporate Events & Conferences',
    description: 'Working lunches, product launches, and conference catering that feed large numbers efficiently without compromising on presentation. Polished, professional, and always on schedule across DIFC, Business Bay, and beyond.',
  },
  {
    title: 'Weddings & Receptions',
    description: 'Abundant, beautifully styled buffet stations let guests dine at their own pace. International spreads and live counters bring variety and a sense of occasion to your celebration.',
  },
  {
    title: 'Villa & Garden Gatherings',
    description: 'Relaxed, generous buffets for family celebrations and milestone events at home. We bring the stations, the staff, and the styling to villas across Palm Jumeirah, Emirates Hills, and Dubai Hills.',
  },
  {
    title: 'Community & Cultural Occasions',
    description: 'Iftar gatherings, Eid celebrations, and cultural events served with respect for tradition and a spread designed around the moment, scaled comfortably for large groups.',
  },
]

const galleryImages = [
  { src: '/service-catering.webp', alt: 'Luxury buffet catering setup in Dubai' },
  { src: '/menu-seafood.webp', alt: 'Seafood station on a buffet' },
  { src: '/menu-appetizer.webp', alt: 'Appetizer and salad buffet display' },
  { src: '/service-events.webp', alt: 'Buffet stations at a Dubai event' },
  { src: '/service-corporate.webp', alt: 'Corporate buffet lunch' },
  { src: '/menu-meat.webp', alt: 'Carving station at a buffet' },
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
    q: 'How many guests is buffet catering suitable for?',
    a: 'Buffet service is ideal for larger gatherings, typically from around 30 guests up to several hundred. It lets guests dine at their own pace while we keep stations replenished and flowing throughout the event.',
  },
  {
    q: 'What cuisines can you offer on a buffet?',
    a: 'We design Arabic, Mediterranean, Asian, and Continental spreads, or a curated mix of all four. Every menu is built around your guests, the occasion, and any cultural or dietary preferences you have.',
  },
  {
    q: 'Do you provide live cooking stations with the buffet?',
    a: 'Yes. We can add chef-manned pasta, carving, grill, and other live stations to your buffet. They bring freshness and a sense of theatre, and are popular for weddings and corporate events.',
  },
  {
    q: 'Can you cater corporate buffet lunches?',
    a: 'Absolutely. We regularly cater working lunches, conferences, and company events with efficient, generous service designed to feed large numbers on schedule while keeping presentation polished.',
  },
  {
    q: 'Do you handle styling, setup, and cleanup?',
    a: 'Yes. Every package includes elegant display styling, full setup before guests arrive, attentive service and replenishment during the event, and complete cleanup afterward.',
  },
  {
    q: 'How far in advance should I book buffet catering?',
    a: 'For smaller buffets, one to two weeks is ideal. For large events and weddings, we recommend two to four weeks. During peak season (November to March), earlier booking is strongly advised.',
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
    title: 'BBQ Catering',
    description: 'Chef-manned grills, premium meats, and seafood for villa and yacht events.',
    image: '/service-events.webp',
    link: '/bbq-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional dining for boardroom lunches, conferences, and functions.',
    image: '/service-corporate.webp',
    link: '/corporate',
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
  name: 'Buffet Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Buffet Catering Dubai', item: 'https://mychef.ae/buffet-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function BuffetCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.buf-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.buf-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.buf-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.buf-fmt-card', {
      scrollTrigger: { trigger: '.buf-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.buf-uc-item', {
      scrollTrigger: { trigger: '.buf-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.buf-inc-item', {
      scrollTrigger: { trigger: '.buf-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.buf-gallery-img', {
      scrollTrigger: { trigger: '.buf-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.buf-faq-item', {
      scrollTrigger: { trigger: '.buf-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.buf-loc-item', {
      scrollTrigger: { trigger: '.buf-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.buf-rel-card', {
      scrollTrigger: { trigger: '.buf-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.buf-cta', {
      scrollTrigger: { trigger: '.buf-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Buffet Catering Dubai | Hot & Cold Stations"
        description="Premium buffet catering in Dubai with hot and cold stations, live action counters, and international menus. Ideal for corporate events, weddings, and large gatherings."
        canonicalPath="/buffet-catering-dubai"
        ogImage="/service-catering.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/buffet-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 buf-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Buffet Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 buf-hero-h1">
            Buffet Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 buf-hero-sub">
            Abundant hot and cold stations, live action counters, and international menus — beautifully styled and seamlessly served for corporate events, weddings, and large gatherings across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=buffet-catering-dubai" className="btn-primary opacity-0 translate-y-4 buf-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 buf-hero-cta"
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
            DUBAI BUFFET SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Generous Stations, Effortless Service
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A well-designed buffet is one of the most generous ways to host. It lets guests choose what they love, return for more, and dine at their own pace — while the room stays relaxed and the conversation keeps flowing. At myCHEF Dubai, we treat buffet catering as a balance of abundance and elegance, with stations styled as carefully as they are stocked.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Our menus span hot mains, slow-cooked roasts, vibrant salads, seafood on ice, breads, and desserts, drawing on Arabic, Mediterranean, Asian, and Continental traditions. Live counters add freshness and theatre, while our service team keeps every station full and the flow smooth from first guest to last. Whether it is a corporate lunch, a wedding reception, or a large family celebration, we bring the stations, the staff, and the styling to you. Explore our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or speak to us to start planning.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Buffet Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              BUFFET STATIONS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Build Your Buffet
            </h2>
          </div>

          <div className="buf-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buffetFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="buf-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              Buffets for Every Occasion
            </h2>
          </div>

          <div className="buf-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="buf-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Buffet Catering Includes
          </h2>

          <div className="buf-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="buf-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Buffet Catering
          </h2>

          <div className="buf-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="buf-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Buffet Catering Questions
          </h2>

          <div className="buf-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="buf-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Buffet Catering Across Dubai
          </h2>

          <div className="buf-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="buf-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="buf-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="buf-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center buf-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Buffet
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your event and we'll design a buffet menu, stations, and service plan that fits it perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=buffet-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
