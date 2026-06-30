import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Rocket,
  Sparkles,
  Network,
  Mic,
  GlassWater,
  Leaf,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan corporate event catering')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const eventFormats = [
  {
    icon: Rocket,
    title: 'Product Launches',
    description: 'Styled canapé receptions and live stations that set the tone for a launch and keep guests circulating and engaged.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Sparkles,
    title: 'Galas & Awards Dinners',
    description: 'Elegant plated dinners and reception menus for formal corporate galas, award nights, and milestone celebrations.',
    link: '/catering-dubai',
  },
  {
    icon: Network,
    title: 'Networking Receptions',
    description: 'Passed canapés, grazing stations, and drinks-friendly bites designed to keep a networking room moving easily.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Mic,
    title: 'Conferences & Seminars',
    description: 'Coffee breaks, working lunches, and multi-day catering that keeps delegates energised across a full programme.',
    link: '/conference-catering-dubai',
  },
  {
    icon: GlassWater,
    title: 'Client & VIP Hospitality',
    description: 'Refined hospitality menus for hosting clients, partners, and VIP guests at corporate events of any scale.',
    link: '/corporate',
  },
  {
    icon: Leaf,
    title: 'Dietary-Inclusive Menus',
    description: 'Vegetarian, vegan, gluten-free, and halal options woven through every menu so all delegates are catered for.',
    link: '/healthy-catering-dubai',
  },
]

const includedItems = [
  { title: 'Event Menu Design', description: 'Bespoke menus shaped around your theme, brand, and guest profile.' },
  { title: 'Professional Service Staff', description: 'Trained waiters, hosts, and bar staff scaled to your guest numbers.' },
  { title: 'Styled Presentation', description: 'Stations, canapé service, and plating styled to a polished standard.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so your team can host.' },
  { title: 'On-Site Coordination', description: 'A coordinator manages timing and flow so service runs seamlessly.' },
  { title: 'Dietary Inclusivity', description: 'Vegetarian, vegan, gluten-free, and halal options as standard.' },
  { title: 'Flexible Service Styles', description: 'Plated, buffet, canapé, or live stations to suit your format.' },
  { title: 'Venue Coordination', description: 'We work with your venue, office, or outdoor space across Dubai.' },
]

const useCases = [
  {
    title: 'Product Launches & Brand Events',
    description: 'A launch is a statement, and the catering is part of the message. We design styled canapé receptions and live stations that keep guests circulating, photograph beautifully, and reinforce the impression you want your brand to leave — handled end to end so your team can focus on the moment.',
  },
  {
    title: 'Corporate Galas & Awards',
    description: 'For formal galas, award dinners, and milestone celebrations, we deliver elegant plated service and reception menus at scale, with the coordination to match. Timing, flow, and presentation are managed precisely, so a room of hundreds feels considered rather than mass-catered.',
  },
  {
    title: 'Networking & Client Hospitality',
    description: 'Networking events live or die on whether the room keeps moving. Passed canapés, grazing stations, and drinks-friendly bites keep guests mingling and hands free, while refined VIP hospitality menus make hosting clients and partners genuinely effortless.',
  },
  {
    title: 'Recurring Corporate Calendars',
    description: 'Many organisations run a full calendar of events through the year — launches, town halls, client evenings, and seasonal celebrations. A standing relationship means we already know your brand, standards, and preferences, making each event quicker to plan and reliably consistent.',
  },
]

const galleryImages = [
  { src: '/service-corporate.jpg', alt: 'Corporate event catering set-up in Dubai' },
  { src: '/service-events.jpg', alt: 'Corporate gala and event catering' },
  { src: '/menu-canapes.jpg', alt: 'Canapé reception catering for a product launch' },
  { src: '/service-catering.jpg', alt: 'Networking reception catering styling' },
  { src: '/menu-appetizer.jpg', alt: 'Event appetizer and canapé selection' },
  { src: '/menu-seafood.jpg', alt: 'Plated corporate dinner seafood course' },
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
    q: 'What types of corporate events do you cater?',
    a: 'We cater the full range of corporate events — product launches, galas and award dinners, networking receptions, conferences, client hospitality, and seasonal celebrations. Whatever the format and scale, we design the menu and service style around your brand, venue, and guest profile.',
  },
  {
    q: 'How many guests can you cater for?',
    a: 'We cater intimate executive gatherings as well as large-scale corporate events with hundreds of guests. For bigger events, the difference is in coordination — we scale staff, stations, and timing so the experience stays polished no matter the headcount.',
  },
  {
    q: 'Can you provide service staff and on-site coordination?',
    a: 'Yes. Trained service staff, hosts, and bar staff are provided to suit your numbers, and an on-site coordinator manages timing and flow throughout. Full setup, service, and pack-down are included, so your team is free to focus on the event itself.',
  },
  {
    q: 'Do you work with our venue or office space?',
    a: 'We do. We regularly cater events at hotels, dedicated venues, offices, and outdoor spaces across Dubai. We coordinate with your venue on logistics and access in advance so service runs smoothly on the day.',
  },
  {
    q: 'Can you accommodate dietary requirements at large events?',
    a: 'Absolutely. Vegetarian, vegan, gluten-free, and halal options are built into our menus as standard, and we can clearly label and manage dietary needs across large guest lists so every delegate is properly looked after.',
  },
  {
    q: 'How far in advance should we book corporate event catering?',
    a: 'For larger corporate events we recommend booking two to four weeks ahead, and earlier during the busy season from November to March. For organisations running a full events calendar, a standing arrangement makes each booking faster and keeps quality consistent throughout the year.',
  },
]

const relatedServices = [
  {
    title: 'Conference Catering',
    description: 'Coffee breaks, working lunches, and multi-day catering for conferences and seminars.',
    image: '/service-events.jpg',
    link: '/conference-catering-dubai',
  },
  {
    title: 'Canapé Catering',
    description: 'Sophisticated passed canapés and finger food for receptions, launches, and networking.',
    image: '/menu-canapes.jpg',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional corporate dining, from boardroom lunches to large company functions.',
    image: '/service-corporate.jpg',
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
  name: 'Corporate Event Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Corporate Event Catering Dubai', item: 'https://mychef.ae/corporate-event-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function CorporateEventCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.cev-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.cev-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.cev-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.cev-fmt-card', {
      scrollTrigger: { trigger: '.cev-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cev-uc-item', {
      scrollTrigger: { trigger: '.cev-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cev-inc-item', {
      scrollTrigger: { trigger: '.cev-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cev-gallery-img', {
      scrollTrigger: { trigger: '.cev-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.cev-faq-item', {
      scrollTrigger: { trigger: '.cev-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cev-loc-item', {
      scrollTrigger: { trigger: '.cev-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.cev-rel-card', {
      scrollTrigger: { trigger: '.cev-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cev-cta', {
      scrollTrigger: { trigger: '.cev-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Corporate Event Catering Dubai | Launches & Galas"
        description="Corporate event catering in Dubai for product launches, galas, networking receptions, and conferences. Styled menus, professional service, full coordination. Request a quote."
        canonicalPath="/corporate-event-catering-dubai"
        ogImage="/service-corporate.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-corporate.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 cev-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Corporate Event Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 cev-hero-h1">
            Corporate Event Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 cev-hero-sub">
            Product launches, galas, networking receptions, and conferences — styled menus, professional service, and full coordination for corporate events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 cev-hero-cta">
              Request an Event Catering Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 cev-hero-cta"
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
            CATERING FOR CORPORATE EVENTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Events Your Brand Can Stand Behind
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            A corporate event is a reflection of the organisation behind it. Whether you are launching a product, hosting a gala, or running a networking evening, guests read everything — including the food, the service, and how smoothly it all comes together. Catering that looks considered and runs flawlessly reinforces your brand; catering that feels like an afterthought undermines it. At myCHEF Dubai, we treat every corporate event as a chance to make the right impression.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            From styled canapé receptions for launches to elegant plated galas and full conference programmes, we design the menu, provide the service team, and coordinate the timing end to end. Organisations with a busy events calendar find a standing relationship invaluable — we already know your brand and standards, so each event is faster to plan and reliably consistent. Explore the formats below, or see the wider <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering in Dubai</Link> we provide.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CORPORATE EVENT FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering for Every Corporate Occasion
            </h2>
          </div>

          <div className="cev-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="cev-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE WE EXCEL
            </span>
            <h2 className="font-playfair text-h2 text-white">
              From Launches to Galas
            </h2>
          </div>

          <div className="cev-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="cev-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Corporate Event Catering Includes
          </h2>

          <div className="cev-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="cev-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Corporate Events
          </h2>

          <div className="cev-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="cev-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Corporate Event Questions
          </h2>

          <div className="cev-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="cev-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

          <div className="cev-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="cev-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="cev-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="cev-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center cev-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Corporate Event
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your event, your brand, and your guests, and we'll design a styled menu and service plan — launch, gala, or conference — coordinated end to end across Dubai.
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
