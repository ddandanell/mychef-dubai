import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Flame,
  UtensilsCrossed,
  Leaf,
  Soup,
  ChefHat,
  Users,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Indian catering in Dubai (via mychef.ae/indian-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const menuHighlights = [
  {
    icon: Soup,
    title: 'Biryani & Rice',
    description: 'Slow-cooked Hyderabadi and Lucknowi biryanis layered with saffron, whole spices, and tender meats — alongside fragrant pulao and lemon rice for South Indian tables.',
    link: '/catering-dubai',
  },
  {
    icon: Flame,
    title: 'Tandoor Live Stations',
    description: 'A chef-manned clay-oven station searing kebabs, tikka, paneer, and fresh naan to order — theatre and aroma brought straight to your guests.',
    link: '/buffet-catering-dubai',
  },
  {
    icon: UtensilsCrossed,
    title: 'North Indian Curries',
    description: 'Rich, layered gravies — butter chicken, rogan josh, dal makhani, and palak paneer — simmered the traditional way and balanced for every palate.',
    link: '/catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'South Indian Specialities',
    description: 'Dosa, idli, sambar, and coconut-laced curries from the southern coast, served with chutneys and a lighter, spice-forward character.',
    link: '/asian-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Jain & Vegetarian',
    description: 'Considered Jain, pure-vegetarian, and vegan menus — no onion or garlic on request — so every guest is catered for without compromise.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Street Food & Chaat',
    description: 'Interactive chaat counters with pani puri, bhel, and tikki — playful, shareable bites that keep guests mingling at receptions and parties.',
    link: '/arabic-catering-dubai',
  },
]

const useCases = [
  {
    title: 'Weddings & Sangeets',
    description: 'From mehndi afternoons to grand reception banquets, we build multi-course Indian menus that move from chaat counters to live tandoor stations and a sweeping main buffet, scaled for hundreds of guests.',
  },
  {
    title: 'Villa & Home Celebrations',
    description: 'For Diwali dinners, milestone birthdays, and family gatherings across Dubai, our team brings the kitchen to your villa — cooking, serving, and clearing so you can host without lifting a finger.',
  },
  {
    title: 'Corporate & Cultural Events',
    description: 'Boardroom lunches, festival functions, and community evenings benefit from an authentic Indian spread that feels generous and familiar, presented with the polish a corporate setting demands.',
  },
  {
    title: 'Intimate Dinners at Home',
    description: 'For smaller gatherings, a private chef can prepare a curated regional tasting in your kitchen — perfect when you want depth of flavour without a full buffet.',
  },
]

const includedItems = [
  { title: 'Regional Menu Design', description: 'North Indian, South Indian, or a blended spread built around your guests and occasion.' },
  { title: 'Live Tandoor & Chaat', description: 'Chef-manned stations for fresh-from-the-oven breads, kebabs, and street-food counters.' },
  { title: 'Spice-Level Tailoring', description: 'Heat and seasoning adjusted across dishes so every guest is comfortable.' },
  { title: 'Jain, Veg & Vegan', description: 'Pure-vegetarian, Jain (no onion or garlic), and vegan options arranged on request.' },
  { title: 'Halal Sourcing', description: 'Halal meat and poultry as standard, sourced from trusted suppliers.' },
  { title: 'Professional Chefs', description: 'Experienced Indian culinary team led by our executive chef.' },
  { title: 'Service & Setup', description: 'Waiters, buffet styling, warmers, and full on-site coordination.' },
  { title: 'Full Pack-Down', description: 'We set up, serve, and clear so your space is left spotless.' },
]

const galleryImages = [
  { src: '/menu-meat.webp', alt: 'Indian tandoori meat catering in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Indian appetizers and chaat spread' },
  { src: '/service-catering.webp', alt: 'Indian catering buffet setup in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Indian canapé and finger food selection' },
  { src: '/service-events.webp', alt: 'Indian wedding catering event' },
  { src: '/menu-dessert.webp', alt: 'Indian dessert and mithai display' },
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
    q: 'Do you cater both North and South Indian cuisine?',
    a: 'Yes. We build menus across regions — from North Indian tandoor, biryani, and rich curries to South Indian dosa, idli, sambar, and coconut-based dishes. Many clients choose a blended spread so guests enjoy the best of both.',
  },
  {
    q: 'Can you provide Jain and pure-vegetarian menus?',
    a: 'Absolutely. We prepare pure-vegetarian, vegan, and Jain menus, including no-onion and no-garlic preparations on request. We can run an entirely vegetarian event or arrange dedicated vegetarian sections within a larger spread.',
  },
  {
    q: 'Is the meat halal?',
    a: 'Yes. Halal meat and poultry are standard for all our Indian catering in Dubai, sourced from trusted suppliers. Halal is the baseline across our menus and we are happy to confirm sourcing details when you plan.',
  },
  {
    q: 'Can you adjust the spice level for mixed guests?',
    a: 'We tailor heat and seasoning across dishes so spice-sensitive guests and those who love bold flavour are both comfortable. We can also flag the heat level of each dish on the buffet for your guests.',
  },
  {
    q: 'Do you offer live tandoor and chaat stations?',
    a: 'Yes. Chef-manned tandoor stations grill kebabs, tikka, paneer, and fresh naan to order, while live chaat counters serve pani puri, bhel, and tikki. These interactive stations are popular at weddings and large receptions.',
  },
  {
    q: 'How far in advance should I book Indian catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For weddings and large functions, we recommend three to four weeks. During peak wedding and festival season, earlier booking is strongly advised.',
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
    title: 'Arabic Catering',
    description: 'Mezze, charcoal grills, and Levantine feasts styled for celebrations of any size.',
    image: '/service-events.webp',
    link: '/arabic-catering-dubai',
  },
  {
    title: 'Asian Catering',
    description: 'Thai, Chinese, and pan-Asian menus with live wok and dim sum stations.',
    image: '/menu-seafood.webp',
    link: '/asian-catering-dubai',
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
  name: 'Indian Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Indian Catering Dubai', item: 'https://mychef.ae/indian-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function IndianCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ind-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ind-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ind-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ind-fmt-card', {
      scrollTrigger: { trigger: '.ind-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ind-uc-item', {
      scrollTrigger: { trigger: '.ind-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ind-inc-item', {
      scrollTrigger: { trigger: '.ind-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ind-gallery-img', {
      scrollTrigger: { trigger: '.ind-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.ind-faq-item', {
      scrollTrigger: { trigger: '.ind-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ind-loc-item', {
      scrollTrigger: { trigger: '.ind-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.ind-rel-card', {
      scrollTrigger: { trigger: '.ind-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ind-cta', {
      scrollTrigger: { trigger: '.ind-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Indian Catering Dubai | Biryani, Tandoor & Veg"
        description="Indian catering in Dubai for weddings, villas, and corporate events. North & South Indian menus, live tandoor and chaat stations, biryani, halal and Jain options."
        canonicalPath="/indian-catering-dubai"
        ogImage="/menu-meat.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/indian-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ind-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Indian Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ind-hero-h1">
            Indian Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ind-hero-sub">
            North and South Indian feasts, live tandoor and chaat stations, and considered Jain and vegetarian menus — authentic flavour brought to villas, weddings, and events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=indian-catering-dubai" className="btn-primary opacity-0 translate-y-4 ind-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ind-hero-cta"
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
            AUTHENTIC INDIAN CATERING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The Depth of Indian Cuisine, Done Properly
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Indian food is built on layers — of spice, of region, of ritual. A great Indian menu is not a single cuisine but dozens, from the smoky tandoors and saffron biryanis of the north to the coconut curries, dosa, and tangy chutneys of the south. At myCHEF Dubai, we treat each menu as a journey across that map, cooking the way each dish is meant to be cooked and seasoning it with respect for tradition rather than shortcuts.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting a grand wedding banquet, a Diwali dinner at your villa, or a corporate function that needs to feel both generous and refined, our team, led by <Link to="/chefs/ahmed-executive-chef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Executive Chef Ahmed</Link>, brings live tandoor and chaat stations, slow-cooked curries, and considered vegetarian, vegan, and Jain options to the table. Halal sourcing is the baseline, spice levels are tailored to your guests, and every detail is handled — explore how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
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
              From Tandoor to Table
            </h2>
          </div>

          <div className="ind-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="ind-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              Indian Catering for Every Occasion
            </h2>
          </div>

          <div className="ind-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="ind-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Indian Catering Includes
          </h2>

          <div className="ind-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="ind-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Indian Catering
          </h2>

          <div className="ind-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="ind-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Indian Catering Questions
          </h2>

          <div className="ind-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="ind-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Catering Across Dubai
          </h2>

          <div className="ind-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="ind-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="ind-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ind-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center ind-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Indian Feast
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design an Indian menu that suits your guests, dietary needs, and the scale of your occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=indian-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
