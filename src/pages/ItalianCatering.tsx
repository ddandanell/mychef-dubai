import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Wheat,
  Soup,
  Pizza,
  ChefHat,
  Salad,
  Cake,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Italian catering in Dubai (via mychef.ae/italian-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const menuHighlights = [
  {
    icon: Wheat,
    title: 'Handmade Pasta',
    description: 'Tagliatelle, ravioli, gnocchi, and silky tortelli made fresh by hand and finished in sauces from slow ragù to simple tomato and basil.',
    link: '/catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Live Pasta Station',
    description: 'A chef-manned station tossing pasta to order in a wheel of parmesan or a pan of fresh sauce — theatre, aroma, and a plate served warm to every guest.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Soup,
    title: 'Risotto',
    description: 'Creamy risotto cooked the proper way — saffron Milanese, wild mushroom, or seasonal vegetable — stirred to order for that signature texture.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Salad,
    title: 'Antipasti',
    description: 'Cured meats, marinated vegetables, buffalo mozzarella, bruschetta, and olives — an abundant Italian opening spread to share.',
    link: '/grazing-table-dubai',
  },
  {
    icon: Pizza,
    title: 'Wood-Fired Pizza',
    description: 'Thin, blistered Neapolitan-style pizzas baked to order at a live oven, from classic margherita to seasonal specials.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Cake,
    title: 'Dolci & Tiramisu',
    description: 'Tiramisu, panna cotta, cannoli, and affogato — classic Italian desserts and an espresso bar to close the meal.',
    link: '/dessert-table-catering-dubai',
  },
]

const useCases = [
  {
    title: 'Weddings & Receptions',
    description: 'Italian menus bring romance and warmth to weddings — antipasti to welcome, a live pasta or risotto station as a talking point, and a tiramisu and espresso finish that guests remember long after the night.',
  },
  {
    title: 'Villa Dinners & Family Days',
    description: 'For relaxed villa gatherings across Dubai, sharing-style antipasti, pasta, and wood-fired pizza turn a meal into a long, generous afternoon where everyone serves themselves and lingers at the table.',
  },
  {
    title: 'Corporate & Networking',
    description: 'A live pasta station is a natural icebreaker at corporate lunches and networking receptions, serving fresh, warm plates while keeping guests mingling and conversation flowing.',
  },
  {
    title: 'Intimate Plated Dinners',
    description: 'For refined celebrations, a private chef can serve a multi-course Italian dinner — antipasto, primo, secondo, and dolce — plated with restaurant-level care in your own home.',
  },
]

const includedItems = [
  { title: 'Handmade Pasta', description: 'Fresh pasta made by hand and paired with sauces cooked from scratch.' },
  { title: 'Live Pasta & Risotto', description: 'Chef-manned stations tossing pasta and stirring risotto to order.' },
  { title: 'Antipasti Spread', description: 'Cured meats, cheeses, marinated vegetables, and bruschetta to open the meal.' },
  { title: 'Wood-Fired Pizza', description: 'Neapolitan-style pizzas baked to order at a live oven station.' },
  { title: 'Halal Sourcing', description: 'Halal meat and poultry as standard, sourced from trusted suppliers.' },
  { title: 'Vegetarian & Vegan', description: 'Plentiful plant-based pasta, risotto, and antipasti arranged on request.' },
  { title: 'Dolci & Espresso', description: 'Tiramisu, panna cotta, cannoli, and an espresso bar to close.' },
  { title: 'Full Setup & Service', description: 'Styling, waiters, on-site coordination, and full pack-down included.' },
]

const galleryImages = [
  { src: '/menu-appetizer.webp', alt: 'Italian antipasti spread catering in Dubai' },
  { src: '/menu-meat.webp', alt: 'Italian cured meats and main course catering' },
  { src: '/service-catering.webp', alt: 'Italian catering buffet setup in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Italian canapé and finger food selection' },
  { src: '/service-events.webp', alt: 'Italian event catering with live station' },
  { src: '/menu-dessert.webp', alt: 'Italian dolci and tiramisu dessert display' },
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
    q: 'What does your Italian catering menu include?',
    a: 'Our Italian menus run from antipasti and handmade pasta to risotto, wood-fired pizza, and classic dolci such as tiramisu. We tailor the courses to your event, whether that is a sharing-style villa lunch or a multi-course plated dinner.',
  },
  {
    q: 'Can you set up a live pasta station?',
    a: 'Yes. A chef-manned live pasta station — tossing fresh pasta to order, sometimes in a wheel of parmesan — is one of our most popular options. We also offer live risotto and wood-fired pizza stations.',
  },
  {
    q: 'Is the meat halal?',
    a: 'Yes. Halal meat and poultry are standard across our Italian catering in Dubai, sourced from trusted suppliers. Halal is the baseline for our menus, and we are glad to confirm sourcing details when you plan.',
  },
  {
    q: 'Do you cater for vegetarian and vegan guests?',
    a: 'Absolutely. Italian cuisine offers wonderful plant-based options, so we build generous vegetarian and vegan pasta, risotto, and antipasti dishes alongside the rest of the menu for mixed groups.',
  },
  {
    q: 'Is the pasta really made by hand?',
    a: 'Yes. We make fresh pasta by hand and cook our sauces from scratch, from slow-simmered ragù to simple tomato and basil. The difference in texture and flavour is exactly why guests remember an Italian menu.',
  },
  {
    q: 'How far in advance should I book Italian catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For weddings and large functions with live stations, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Luxury Catering Dubai',
    description: 'Full-service event catering across Dubai with bespoke menus for any occasion.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Live Cooking Stations',
    description: 'Interactive chef stations that bring theatre and fresh-cooked plates to your event.',
    image: '/service-events.webp',
    link: '/live-cooking-stations-dubai',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Multi-course plated dining with restaurant-level care in your own home or villa.',
    image: '/service-luxury-dining.webp',
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
  name: 'Italian Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Italian Catering Dubai', item: 'https://mychef.ae/italian-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function ItalianCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ital-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ital-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ital-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ital-fmt-card', {
      scrollTrigger: { trigger: '.ital-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ital-uc-item', {
      scrollTrigger: { trigger: '.ital-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ital-inc-item', {
      scrollTrigger: { trigger: '.ital-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ital-gallery-img', {
      scrollTrigger: { trigger: '.ital-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.ital-faq-item', {
      scrollTrigger: { trigger: '.ital-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ital-loc-item', {
      scrollTrigger: { trigger: '.ital-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.ital-rel-card', {
      scrollTrigger: { trigger: '.ital-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ital-cta', {
      scrollTrigger: { trigger: '.ital-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Italian Catering Dubai | Handmade Pasta & Risotto"
        description="Italian catering in Dubai — handmade pasta, risotto, antipasti, and live pasta and pizza stations for weddings, villa dinners, and corporate events. Halal sourcing."
        canonicalPath="/italian-catering-dubai"
        ogImage="/menu-appetizer.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/italian-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ital-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Italian Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ital-hero-h1">
            Italian Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ital-hero-sub">
            Handmade pasta, creamy risotto, abundant antipasti, and live pasta and pizza stations — the warmth and romance of an Italian kitchen brought to weddings, villas, and events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=italian-catering-dubai" className="btn-primary opacity-0 translate-y-4 ital-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ital-hero-cta"
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
            AUTHENTIC ITALIAN CATERING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Made by Hand, Served with Warmth
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Italian food is the cuisine of generosity and craft — a few good ingredients, treated with patience, turned into something that brings people to the table and keeps them there. Pasta rolled and cut by hand, risotto stirred to that perfect creamy texture, antipasti laid out to share, and dolci to finish slowly over espresso. At myCHEF Dubai, we cook in that tradition, making pasta fresh and simmering sauces from scratch rather than reaching for shortcuts.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From antipasti and handmade pasta to wood-fired pizza, live risotto stations, and a tiramisu-and-espresso finish, our Italian menus suit weddings, villa dinners, corporate receptions, and intimate plated occasions alike. Halal sourcing is the baseline, vegetarian and vegan dishes are plentiful, and a chef-manned <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">live cooking station</Link> can become the centrepiece of your event — explore how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Menu Highlights ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU HIGHLIGHTS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              From Antipasti to Dolci
            </h2>
          </div>

          <div className="ital-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="ital-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHO WE COOK FOR
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Italian Catering for Every Occasion
            </h2>
          </div>

          <div className="ital-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="ital-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Italian Catering Includes
          </h2>

          <div className="ital-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="ital-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Italian Catering
          </h2>

          <div className="ital-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="ital-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Italian Catering Questions
          </h2>

          <div className="ital-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="ital-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="ital-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="ital-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="ital-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ital-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center ital-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Italian Feast
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design an Italian menu — with live stations if you like — that suits your guests, dietary needs, and the scale of your occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=italian-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
