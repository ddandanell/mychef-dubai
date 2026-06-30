import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Flame,
  Soup,
  Fish,
  ChefHat,
  Leaf,
  Utensils,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Asian catering in Dubai (via mychef.ae/asian-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const menuHighlights = [
  {
    icon: Flame,
    title: 'Live Wok Stations',
    description: 'A chef-manned wok station firing noodles, fried rice, and stir-fries to order — high heat, fresh ingredients, and a plate served sizzling to every guest.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: ChefHat,
    title: 'Dim Sum',
    description: 'Steamed and pan-fried dumplings, bao buns, and siu mai, freshly prepared and served from bamboo baskets — a hands-on, shareable favourite.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Soup,
    title: 'Thai Specialities',
    description: 'Fragrant green and red curries, pad thai, and tom yum balancing the sweet, sour, salty, and spicy notes that define authentic Thai cooking.',
    link: '/catering-dubai',
  },
  {
    icon: Utensils,
    title: 'Chinese Classics',
    description: 'Cantonese roast meats, Szechuan stir-fries, sweet-and-sour dishes, and hand-pulled noodles drawn from China\'s great regional kitchens.',
    link: '/catering-dubai',
  },
  {
    icon: Fish,
    title: 'Sushi & Sashimi',
    description: 'Maki, nigiri, and sashimi rolled by hand at a live counter — the perfect pan-Asian complement, with vegetarian rolls for every guest.',
    link: '/sushi-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Pan-Asian Fusion',
    description: 'Vietnamese, Malaysian, and Korean accents — bao, satay, bulgogi, and fresh herb salads — blended into a vibrant, modern pan-Asian spread.',
    link: '/indian-catering-dubai',
  },
]

const useCases = [
  {
    title: 'Receptions & Cocktail Events',
    description: 'Dim sum, satay skewers, and bao buns make brilliant passed bites, while a live wok station keeps guests gathered and the energy high at receptions and networking evenings across Dubai.',
  },
  {
    title: 'Villa & Garden Gatherings',
    description: 'Pan-Asian sharing menus suit relaxed villa days perfectly — abundant stir-fries, curries, sushi platters, and noodles laid out for guests to graze on at their own pace.',
  },
  {
    title: 'Weddings & Large Celebrations',
    description: 'A pan-Asian spread brings colour, variety, and interactive stations to weddings and milestone events, balancing Thai, Chinese, Japanese, and fusion dishes to please every palate.',
  },
  {
    title: 'Corporate & Themed Nights',
    description: 'Live wok and dim sum stations turn a corporate lunch or themed evening into an experience, serving fresh, fast plates while keeping conversation and movement flowing.',
  },
]

const includedItems = [
  { title: 'Pan-Asian Menu Design', description: 'Thai, Chinese, Japanese, and fusion dishes balanced for your guests and occasion.' },
  { title: 'Live Wok & Dim Sum', description: 'Chef-manned stations firing stir-fries and steaming fresh dumplings to order.' },
  { title: 'Sushi Counter', description: 'Hand-rolled maki, nigiri, and sashimi prepared live, with vegetarian rolls.' },
  { title: 'Spice-Level Tailoring', description: 'Heat adjusted across dishes so every guest is comfortable.' },
  { title: 'Halal Sourcing', description: 'Halal meat and poultry as standard, sourced from trusted suppliers.' },
  { title: 'Vegetarian & Vegan', description: 'Plentiful plant-based stir-fries, curries, and rolls arranged on request.' },
  { title: 'Professional Chefs', description: 'Experienced pan-Asian culinary team led by our executive chef.' },
  { title: 'Full Setup & Service', description: 'Styling, waiters, on-site coordination, and full pack-down included.' },
]

const galleryImages = [
  { src: '/menu-seafood.jpg', alt: 'Asian seafood and sushi catering in Dubai' },
  { src: '/menu-appetizer.jpg', alt: 'Asian dim sum and appetizer spread' },
  { src: '/service-events.jpg', alt: 'Asian catering event with live wok station' },
  { src: '/menu-canapes.jpg', alt: 'Asian canapé and bao bun selection' },
  { src: '/service-catering.jpg', alt: 'Pan-Asian catering buffet setup in Dubai' },
  { src: '/menu-dessert.jpg', alt: 'Asian dessert and mochi display' },
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
    q: 'What cuisines does your Asian catering cover?',
    a: 'Our pan-Asian menus span Thai, Chinese, Japanese, and fusion influences from Vietnam, Malaysia, and Korea. We can focus on one cuisine or blend several, balancing curries, stir-fries, dim sum, sushi, and noodles to suit your event.',
  },
  {
    q: 'Can you set up live wok and dim sum stations?',
    a: 'Yes. Chef-manned live wok stations fire noodles and stir-fries to order, while dim sum stations steam fresh dumplings and bao. These interactive stations are popular at receptions, weddings, and themed corporate nights.',
  },
  {
    q: 'Is the meat halal?',
    a: 'Yes. Halal meat and poultry are standard across our Asian catering in Dubai, sourced from trusted suppliers. Halal is the baseline for our menus, and we are glad to confirm sourcing details when you plan.',
  },
  {
    q: 'Can you adjust spice levels for mixed guests?',
    a: 'We tailor heat across dishes so spice-sensitive guests and those who love bold Thai and Szechuan flavour are both comfortable. We can also flag the heat level of each dish for your guests.',
  },
  {
    q: 'Do you offer sushi and vegetarian options?',
    a: 'Yes. We provide a live sushi counter with hand-rolled maki, nigiri, and sashimi, including vegetarian rolls. Asian cuisine is rich in plant-based dishes, so we build generous vegetarian and vegan menus on request.',
  },
  {
    q: 'How far in advance should I book Asian catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For weddings and large functions with live stations, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Luxury Catering Dubai',
    description: 'Full-service event catering across Dubai with bespoke menus for any occasion.',
    image: '/service-catering.jpg',
    link: '/catering-dubai',
  },
  {
    title: 'Sushi Catering',
    description: 'Hand-rolled sushi and sashimi platters prepared at a live counter for your event.',
    image: '/menu-seafood.jpg',
    link: '/sushi-catering-dubai',
  },
  {
    title: 'Indian Catering',
    description: 'North & South Indian feasts with biryani, tandoor live stations, and veg options.',
    image: '/menu-appetizer.jpg',
    link: '/indian-catering-dubai',
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
  name: 'Asian Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Asian Catering Dubai', item: 'https://mychef.ae/asian-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function AsianCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.asia-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.asia-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.asia-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.asia-fmt-card', {
      scrollTrigger: { trigger: '.asia-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.asia-uc-item', {
      scrollTrigger: { trigger: '.asia-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.asia-inc-item', {
      scrollTrigger: { trigger: '.asia-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.asia-gallery-img', {
      scrollTrigger: { trigger: '.asia-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.asia-faq-item', {
      scrollTrigger: { trigger: '.asia-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.asia-loc-item', {
      scrollTrigger: { trigger: '.asia-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.asia-rel-card', {
      scrollTrigger: { trigger: '.asia-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.asia-cta', {
      scrollTrigger: { trigger: '.asia-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Asian Catering Dubai | Thai, Chinese & Wok"
        description="Asian catering in Dubai — Thai, Chinese, and pan-Asian fusion with live wok, dim sum, and sushi stations for weddings, villas, and corporate events. Halal sourcing."
        canonicalPath="/asian-catering-dubai"
        ogImage="/menu-seafood.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/asian-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 asia-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Asian Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 asia-hero-h1">
            Asian Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 asia-hero-sub">
            Thai, Chinese, and pan-Asian fusion with live wok, dim sum, and sushi stations — vibrant, interactive menus brought to weddings, villas, and events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=asian-catering-dubai" className="btn-primary opacity-0 translate-y-4 asia-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 asia-hero-cta"
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
            VIBRANT ASIAN CATERING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            One Continent, Endless Flavour
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Asian cuisine is a world of contrasts — the sweet-sour-salty-spicy balance of a Thai curry, the high-heat char of a Cantonese wok, the precision of hand-rolled sushi, and the comfort of steaming dim sum. It is built for sharing, for movement, and for moments of theatre. At myCHEF Dubai, we bring those moments to your event with live stations and freshly cooked plates, drawing on Thai, Chinese, Japanese, and fusion traditions across the continent.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            From live wok and dim sum stations to a hand-rolled <Link to="/sushi-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">sushi counter</Link>, our pan-Asian menus suit receptions, villa gatherings, weddings, and themed corporate nights. Halal sourcing is the baseline, spice levels are tailored to your guests, and vegetarian and vegan dishes are plentiful — explore how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
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
              From Wok to Counter
            </h2>
          </div>

          <div className="asia-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="asia-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHO WE COOK FOR
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Asian Catering for Every Occasion
            </h2>
          </div>

          <div className="asia-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="asia-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Asian Catering Includes
          </h2>

          <div className="asia-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="asia-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Asian Catering
          </h2>

          <div className="asia-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="asia-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Asian Catering Questions
          </h2>

          <div className="asia-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="asia-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

          <div className="asia-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="asia-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="asia-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="asia-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center asia-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Asian Feast
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design a pan-Asian menu — with live wok, dim sum, or sushi stations — that suits your guests, dietary needs, and the scale of your occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=asian-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
