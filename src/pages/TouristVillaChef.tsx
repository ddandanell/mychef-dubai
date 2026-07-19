import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  CalendarDays,
  MapPin,
  Phone,
  ChevronRight,
  ArrowRight,
  Check,
  Palmtree,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book a tourist villa chef package (via mychef.ae/tourist-villa-chef-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/tourist-villa-chef-dubai'
const CAMPAIGN = 'tourist-villa-chef'

const packages = [
  {
    name: '3-Day Taste of Dubai',
    duration: '3 dinners',
    price: 'From AED 2,500',
    description: 'Perfect for short villa stays. Three chef-prepared dinners featuring Mediterranean, Asian, and Arabic cuisines.',
    features: [
      '3 private chef dinners for 2–6 guests',
      'Mediterranean, Asian, and Arabic menus',
      'Grocery shopping and kitchen cleanup',
      'One WhatsApp briefing before arrival',
      'Flexible timing around your plans',
    ],
  },
  {
    name: '5-Day Culinary Journey',
    duration: '5 dinners',
    price: 'From AED 4,500',
    description: 'A deeper experience across cuisines, ending with a celebratory Arabic feast by the pool or terrace.',
    features: [
      '5 private chef dinners for 2–8 guests',
      'Rotating cuisines: Italian, Indian, Japanese, seafood, Arabic',
      'Arabic feast finale with mezze and grill',
      'One brunch or breakfast add-on option',
      'Concierge coordination for special occasions',
    ],
    highlighted: true,
  },
  {
    name: 'Bespoke Villa Residence',
    duration: 'Custom',
    price: 'On request',
    description: 'For longer stays or larger groups. A dedicated chef plan tailored to your villa, your itinerary, and your guest list.',
    features: [
      'Custom duration and meal frequency',
      'Dedicated chef or rotating specialists',
      'Full villa pantry management',
      'Poolside BBQ, brunch, and canapé options',
      'Coordination with villa manager or concierge',
    ],
  },
]

const whyBook = [
  {
    title: 'Skip Restaurant Logistics',
    description: 'No reservations, no traffic, no splitting the group. Your chef arrives at your villa, cooks, serves, and cleans up.',
  },
  {
    title: 'Authentic Local Flavours',
    description: 'Experience Middle Eastern hospitality and Dubai\'s multicultural food scene from the comfort of your rental.',
  },
  {
    title: 'Flexible Around Your Holiday',
    description: 'Dinner times adjust to your beach, desert, or yacht schedule. We brief you once and handle the rest.',
  },
  {
    title: 'Trusted by Villa Managers',
    description: 'We coordinate directly with your villa rental agency, concierge, or property manager for seamless access.',
  },
]

const faqs = [
  {
    q: 'Who is the tourist villa chef service for?',
    a: 'It is designed for visitors staying in luxury villas, Airbnb Luxe properties, or serviced apartments who want private chef dinners without leaving their accommodation.',
  },
  {
    q: 'Do I need to provide kitchen equipment?',
    a: 'No. Chefs in our network work with what is available in your villa. If a specific menu requires special equipment, we will discuss it during the pre-arrival briefing.',
  },
  {
    q: 'Can the chef cater to children or picky eaters?',
    a: 'Yes. We collect dietary preferences, allergies, and age ranges in advance and design menus that work for everyone in your group.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Ideally 1–2 weeks before your arrival, especially during peak season. Last-minute bookings are sometimes possible depending on chef availability.',
  },
  {
    q: 'Is this available outside Dubai?',
    a: 'Our primary coverage is Dubai. Abu Dhabi and select Emirates may be possible for premium bespoke packages with transport logistics included.',
  },
]

const relatedServices = [
  {
    title: 'Villas & Residences',
    description: 'Private dining and event catering for luxury villas across Dubai.',
    image: '/service-villa.webp',
    link: '/villas-private-residences',
  },
  {
    title: 'Yacht Catering Dubai',
    description: 'Chef service for yacht charters and maritime entertaining.',
    image: '/service-yacht.webp',
    link: '/yachts',
  },
  {
    title: 'Desert Dining Dubai',
    description: 'Premium chef-prepared dining experiences in desert settings.',
    image: '/images/desert-dining-dubai-hero.webp',
    link: '/desert-dining-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Tourist Villa Chef',
      'Tourist villa chef packages in Dubai: multi-day private chef service for luxury villa rentals, featuring themed dinners and an Arabic feast finale.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Tourist Villa Chef Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

export default function TouristVillaChef() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.tvc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.tvc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.tvc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.tvc-intro-text', {
      scrollTrigger: { trigger: '.tvc-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.tvc-package-card', {
      scrollTrigger: { trigger: '.tvc-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.tvc-why-item', {
      scrollTrigger: { trigger: '.tvc-why', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.tvc-faq-item', {
      scrollTrigger: { trigger: '.tvc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.tvc-rel-card', {
      scrollTrigger: { trigger: '.tvc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.tvc-cta', {
      scrollTrigger: { trigger: '.tvc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Tourist Villa Chef Dubai | Multi-Day Private Chef Packages | myCHEF"
        description="Tourist villa chef packages in Dubai. Multi-day private chef service for luxury villa rentals, with themed dinners and an Arabic feast finale."
        canonicalPath={CANONICAL_PATH}
        ogImage="/service-villa.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-villa.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 tvc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Tourist Villa Chef Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 tvc-hero-h1">
            Your Private Chef for Your Dubai Villa Stay
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 tvc-hero-sub">
            Multi-day villa chef packages for visitors who want restaurant-quality dining without leaving their luxury rental. Themed dinners, Arabic feast finale, and zero logistics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 tvc-hero-cta">Plan My Villa Chef Package</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 tvc-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            VISITOR EXPERIENCES
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Dubai Dining, Delivered to Your Villa
          </h2>
          <div className="tvc-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Tell us your villa location, travel dates, and group size, and we will match you with a vetted private chef within 24 hours. Our tourist villa chef service gives visitors a curated multi-day dining programme — a private chef shops, cooks, serves, and cleans so you can spend your holiday actually on holiday.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Menus move through Dubai's best culinary influences and culminate in an Arabic feast that feels like the perfect farewell. We coordinate with villa rental agencies, concierges, and property managers so access and timing are seamless.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Looking for more ways to dine? Explore <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">villa dining</Link> or <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">yacht catering</Link> while you are in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Packages ═══════════════ */}
      <section className="tvc-packages bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              VILLA CHEF PACKAGES
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Choose Your Stay Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`tvc-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-black text-white border-2 border-gold' : 'bg-white text-black'}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <CalendarDays size={20} className="text-gold" />
                  <span className="font-inter text-caption uppercase tracking-wider text-gray-500">{pkg.duration}</span>
                </div>
                <h3 className="font-playfair text-h3 mb-2">{pkg.name}</h3>
                <p className={`font-playfair text-2xl font-semibold mb-4 ${pkg.highlighted ? 'text-white' : 'text-black'}`}>{pkg.price}</p>
                <p className="font-inter text-body-sm text-gray-500 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-body-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`}
                  className={`block text-center w-full py-3 font-inter text-sm uppercase tracking-wider transition-colors ${pkg.highlighted ? 'bg-gold text-black hover:bg-gold-light' : 'bg-black text-white hover:bg-charcoal'}`}
                >
                  Request This Package
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center font-inter text-body-sm text-gray-500 mt-8 max-w-[700px] mx-auto">
            Prices shown are a starting point for 2–6 guests and vary with group size, menu complexity, and villa location. Final quote tailored to your villa, dates, and guest count after a brief planning call.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 4: Why Book ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHY BOOK A VILLA CHEF
            </span>
            <h2 className="font-playfair text-h2 text-white">
              The Smarter Way to Dine on Holiday
            </h2>
          </div>

          <div className="tvc-why grid md:grid-cols-2 gap-6">
            {whyBook.map((item, i) => (
              <div key={i} className="tvc-why-item bg-charcoal p-8 opacity-0 translate-y-8">
                <MapPin size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              <strong className="text-white">For villa managers and concierges:</strong> We offer streamlined booking and commission arrangements for properties that want to offer private chef dining as an amenity. See <Link to="/partners/villa-rentals-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Villa Rental Partnerships</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Tourist Villa Chef Questions
          </h2>

          <div className="tvc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="tvc-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 6: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Related Experiences
          </h3>

          <div className="tvc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="tvc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 7: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center tvc-cta opacity-0 translate-y-8">
          <Palmtree size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book Your Villa Chef Experience
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your villa location, dates, and group size. We will design a multi-day chef package that turns your Dubai stay into a culinary journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Plan My Villa Chef Package</Link>
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
