import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  GlassWater,
  Sparkles,
  Building,
  Ship,
  Heart,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan canapé catering in Dubai (via mychef.ae/canape-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const canapeFormats = [
  {
    icon: UtensilsCrossed,
    title: 'Passed Canapés',
    description: 'Servers move through the room offering bite-size creations, keeping guests mingling and the energy flowing throughout your reception.',
    link: '/catering-dubai',
  },
  {
    icon: Sparkles,
    title: 'Canapé Displays',
    description: 'Beautifully styled stationary platters and grazing displays that double as a centrepiece for guests to gather around at their own pace.',
    link: '/catering-dubai',
  },
  {
    icon: GlassWater,
    title: 'Canapés & Cocktails',
    description: 'Paired bite and drink menus with bartender service, designed so each canapé complements the cocktail or mocktail it arrives with.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    icon: Building,
    title: 'Openings & Launches',
    description: 'Polished, photogenic canapés for gallery openings, product launches, and brand events where presentation carries the moment.',
    link: '/luxury-dining-experiences',
  },
  {
    icon: Ship,
    title: 'Yacht & Rooftop Receptions',
    description: 'Compact, mess-free canapés designed for the deck and the skyline — elegant, easy to hold, and spectacular to look at.',
    link: '/catering-dubai',
  },
  {
    icon: Heart,
    title: 'Engagement & Celebrations',
    description: 'Refined canapé selections and dessert bites for engagements, anniversaries, and intimate milestone receptions.',
    link: '/engagement-catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Canapé Menus', description: 'Bite-size creations designed around your event, palette, and guests.' },
  { title: 'Passed & Stationary Service', description: 'Servers passing canapés, plus styled display platters and grazing tables.' },
  { title: 'Cocktail & Drink Pairing', description: 'Optional cocktails, mocktails, and bartender service to match each bite.' },
  { title: 'Hot & Cold Selections', description: 'A balanced range from chilled seafood bites to warm savoury morsels.' },
  { title: 'Sweet Canapés & Petit Fours', description: 'Dessert bites and petit fours to round out the reception elegantly.' },
  { title: 'Professional Service Staff', description: 'Waiters, hosts, and bartenders scaled to your guest count.' },
  { title: 'Styling & Presentation', description: 'Elegant trays, displays, and styling that photograph beautifully.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, run the service, and leave your space spotless.' },
]

const useCases = [
  {
    title: 'Cocktail Receptions',
    description: 'The classic pairing of passed canapés and well-made drinks keeps a room moving and a conversation flowing. Ideal for the welcome hour of a larger event or as a standalone evening reception.',
  },
  {
    title: 'Gallery Openings & Launches',
    description: 'When the canapés are part of the brand statement, presentation matters. We design photogenic, refined bites for openings, product launches, and press events across DIFC, Downtown, and beyond.',
  },
  {
    title: 'Yacht & Rooftop Gatherings',
    description: 'Compact, mess-free canapés that travel cleanly and look spectacular against the skyline or the water. Designed for charters around Dubai Marina and rooftop venues across the city.',
  },
  {
    title: 'Engagements & Intimate Celebrations',
    description: 'For engagements, anniversaries, and milestone toasts, a curated canapé selection feels considered and elegant without the formality of a seated dinner.',
  },
]

const galleryImages = [
  { src: '/menu-canapes.jpg', alt: 'Luxury canapé selection in Dubai' },
  { src: '/menu-cocktails.jpg', alt: 'Cocktail and canapé pairing service' },
  { src: '/service-events.jpg', alt: 'Canapé reception at a Dubai event' },
  { src: '/menu-appetizer.jpg', alt: 'Styled canapé display platter' },
  { src: '/menu-dessert.jpg', alt: 'Sweet canapés and petit fours' },
  { src: '/service-luxury-dining.jpg', alt: 'Elegant reception catering' },
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
    q: 'How many canapés should I plan per guest?',
    a: 'For a pre-dinner reception, six to eight canapés per guest is typical. For a standalone canapé evening replacing a meal, we recommend ten to fourteen per guest. We will advise based on your timing and format.',
  },
  {
    q: 'Do you offer passed canapés and display platters?',
    a: 'Yes. We provide both passed service, where servers move through the room offering canapés, and beautifully styled stationary displays and grazing tables. Many events combine the two.',
  },
  {
    q: 'Can you pair canapés with cocktails and drinks?',
    a: 'Absolutely. We offer cocktails, mocktails, and bartender service, and can design paired menus so each canapé complements the drink it arrives with, including fully non-alcoholic options.',
  },
  {
    q: 'Are canapés suitable for openings and launch events?',
    a: 'Yes. Passed canapés are ideal for gallery openings, product launches, and brand events where guests are mingling. We focus on refined, photogenic bites that reflect the occasion.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We routinely create vegetarian, vegan, halal, gluten-free, and allergy-aware canapés, clearly identified, so every guest can enjoy the reception with confidence.',
  },
  {
    q: 'How far in advance should I book canapé catering?',
    a: 'For smaller receptions, one to two weeks is ideal. For larger or branded events, we recommend two to four weeks. During peak season (November to March), earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Full-service luxury catering for events of every size across Dubai.',
    image: '/service-catering.jpg',
    link: '/catering-dubai',
  },
  {
    title: 'Cocktail Party Catering',
    description: 'Cocktails, mocktails, and bartender service for stylish receptions.',
    image: '/menu-cocktails.jpg',
    link: '/cocktail-party-catering-dubai',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Bespoke fine-dining experiences crafted for memorable occasions.',
    image: '/service-luxury-dining.jpg',
    link: '/luxury-dining-experiences',
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
  name: 'Canapé Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Canapé Catering Dubai', item: 'https://mychef.ae/canape-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function CanapeCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.can-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.can-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.can-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.can-fmt-card', {
      scrollTrigger: { trigger: '.can-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.can-uc-item', {
      scrollTrigger: { trigger: '.can-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.can-inc-item', {
      scrollTrigger: { trigger: '.can-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.can-gallery-img', {
      scrollTrigger: { trigger: '.can-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.can-faq-item', {
      scrollTrigger: { trigger: '.can-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.can-loc-item', {
      scrollTrigger: { trigger: '.can-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.can-rel-card', {
      scrollTrigger: { trigger: '.can-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.can-cta', {
      scrollTrigger: { trigger: '.can-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Canapé Catering Dubai | Passed Canapés"
        description="Premium canapé catering in Dubai with passed canapés, styled displays, and cocktail pairings. Ideal for receptions, openings, launches, and elegant celebrations."
        canonicalPath="/canape-catering-dubai"
        ogImage="/menu-canapes.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/menu-canapes.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 can-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Canapé Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 can-hero-h1">
            Canapé Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 can-hero-sub">
            Passed canapés, styled displays, and cocktail pairings — refined, photogenic bites and seamless service for receptions, openings, launches, and elegant celebrations across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=canape-catering-dubai" className="btn-primary opacity-0 translate-y-4 can-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 can-hero-cta"
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
            DUBAI CANAPÉ SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Small Bites, Lasting Impressions
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            A great canapé does a lot of work in a single bite. It sets the tone of a reception, keeps guests mingling, and looks as considered as it tastes. At myCHEF Dubai, we treat canapé catering as precision work — each piece designed for balance, elegance, and the way it photographs on the tray.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Our team builds menus that move easily through a room, pairing chilled seafood bites, warm savoury morsels, and sweet petit fours with optional cocktails and mocktails. Servers pass canapés with timing and grace, while styled displays give guests a centrepiece to gather around. Whether it is a cocktail reception, a gallery opening, a rooftop gathering, or an engagement toast, we bring the bites, the staff, and the styling to you. Explore our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or speak to us to start planning.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Canapé Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CANAPÉ SERVICE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Canapés for Every Reception
            </h2>
          </div>

          <div className="can-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canapeFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="can-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              Canapés for Every Setting
            </h2>
          </div>

          <div className="can-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="can-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Canapé Catering Includes
          </h2>

          <div className="can-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="can-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Canapé Catering
          </h2>

          <div className="can-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="can-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Canapé Catering Questions
          </h2>

          <div className="can-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="can-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
            Canapé Catering Across Dubai
          </h2>

          <div className="can-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="can-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="can-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="can-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center can-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Reception
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your event and we'll design a canapé selection, drinks, and service plan that fits it perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=canape-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
