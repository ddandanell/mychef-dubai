import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'
import {
  Salad,
  Fish,
  Apple,
  Dumbbell,
  Home,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan healthy catering in Dubai (via mychef.ae/healthy-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const healthyFormats = [
  {
    icon: Salad,
    title: 'Balanced Plated Menus',
    description: 'Plated meals built on the proteins, grains and vegetables this table actually eats. The definition of healthy is yours, written on the draft.',
    link: '/catering-dubai',
  },
  {
    icon: Fish,
    title: 'Low-Carb & Keto',
    description: 'A carbohydrate cap when you ask for one. Grilled proteins, salads and vegetable sides. Keto is a stricter brief than low-carb. Name which.',
    link: '/mediterranean-catering-dubai',
  },
  {
    icon: Apple,
    title: 'Salad Bars & Grain Bowls',
    description: 'Build-your-own salad bars and pre-styled bowls for lunches that need to stay light through the afternoon.',
    link: '/mediterranean-catering-dubai',
  },
  {
    icon: Dumbbell,
    title: 'Corporate Wellness',
    description: 'Working lunches and receptions for offices. You stay in the meeting. We cook, label and pack down.',
    link: '/corporate',
  },
  {
    icon: Home,
    title: 'Villa & Family Healthy Menus',
    description: 'Family tables at home. We cook in your kitchen or garden, serve, and leave the space handled.',
    link: '/catering-dubai',
  },
  {
    icon: Salad,
    title: 'Meal Prep & Boxes',
    description: 'Portioned boxes for multi-day gatherings when the same brief has to hold for more than one sitting.',
    link: '/corporate',
  },
]

const includedItems = [
  { title: 'Menus written to this table', description: 'Healthy here means the brief you send: lighter sauces, more vegetables, a carb cap, or all three.' },
  { title: 'Low-carb when you ask', description: 'Keto and low-carb are extra lines, not automatic. They live on the same draft if you list them.' },
  { title: 'Seasonal produce', description: 'Vegetables, fruit and herbs from trusted suppliers for the date.' },
  { title: 'Proteins that fill a plate', description: 'Fish, poultry and plant proteins cooked as mains, not as a garnish on starch.' },
  { title: 'Salad bars and bowls', description: 'On request. Labelled so guests are not guessing.' },
  { title: 'Other diets on the same brief', description: 'Vegetarian, vegan, gluten-free and dairy-free when you list them. Shared kitchens still carry cross-contact risk.' },
  { title: 'On-site service', description: 'Partner chefs, plating and service staff at your address. We are not the venue.' },
  { title: 'Setup and pack-down', description: 'We arrive, serve and clear. You stay a guest at your own table.' },
]

const useCases = [
  {
    title: 'Corporate wellness days',
    description: 'Working lunches that do not dump a heavy tray on an afternoon of meetings. The menu follows the brief, not a slogan.',
  },
  {
    title: 'Fitness gatherings',
    description: 'If the programme already limits carbohydrates or sugar, the catering should match it. Put the rule on the enquiry.',
  },
  {
    title: 'Villa and family tables',
    description: 'Palm Jumeirah, Emirates Hills and Dubai Hills homes. We cook on site so a lighter menu still feels like a proper dinner.',
  },
  {
    title: 'Daytime receptions',
    description: 'Salad bars, grain bowls and vegetable-forward plates for lunches when guests still have the rest of the day ahead.',
  },
]

const galleryImages = [
  { src: '/menu-seafood.webp', alt: 'Healthy lean protein and seafood plate in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Fresh healthy appetizer selection' },
  { src: '/service-corporate.webp', alt: 'Healthy corporate catering set-up' },
  { src: '/service-catering.webp', alt: 'Balanced catering spread at a Dubai event' },
  { src: '/service-villa.webp', alt: 'Villa healthy dinner styling' },
  { src: '/service-events.webp', alt: 'Healthy event catering in Dubai' },
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

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


const faqs = [
  {
    q: 'What does healthy mean on this page?',
    a: 'It means the brief you send: more vegetables, lighter sauces, a carbohydrate cap, or a sugar rule. We are not a clinic. We cook to how this table eats.',
  },
  {
    q: 'Do you offer low-carb and keto options?',
    a: 'Yes, when you ask. Keto is stricter than low-carb. Name the cap. Those dishes are written on the first draft, not swapped at the pass.',
  },
  {
    q: 'Can you handle office lunches and multi-day boxes?',
    a: 'Yes. Working lunches, receptions and portioned boxes for multi-day gatherings. The same brief holds across sittings when you say so.',
  },
  {
    q: 'Will a lighter menu still fill a plate?',
    a: 'Yes, if the proteins and vegetables are designed as mains. Restriction without a proper plate is a poor brief. We would rather write a full meal.',
  },
  {
    q: 'Can other diets sit on the same menu?',
    a: 'Vegetarian, vegan, gluten-free and dairy-free can sit alongside if you list them. Shared kitchens still carry cross-contact risk. Dietary notes go into the first menu draft.',
  },
  {
    q: 'How is healthy catering Dubai priced?',
    a: 'By custom quote. Guest count, the menu and service in the room move the figure. You get an itemised proposal with 5% VAT shown separately. Send the date, headcount and what healthy means for this table.',
  },
]

const relatedServices = [
  {
    title: 'Gluten-Free Catering',
    description: 'Wheat, barley and rye off the written menu, with honest limits in shared kitchens.',
    image: '/images/gluten-free-catering-dubai-hero.webp',
    link: '/allergy-safe-catering-dubai',
  },
  {
    title: 'Keto & Low-Carb Catering',
    description: 'A carbohydrate cap on a written menu. Keto is stricter than low-carb. Name which.',
    image: '/images/keto-catering-dubai-hero.webp',
    link: '/cuisines-dubai',
  },
  {
    title: 'Breakfast Catering Dubai',
    description: 'Morning menus with bowls, fruit and proteins, written to the same household brief.',
    image: '/images/breakfast-catering-dubai-hero.webp',
    link: '/breakfast-catering-dubai',
  },
  {
    title: 'Sugar-Free Catering',
    description: 'Reduced-sugar menus when sugar is a separate line on the brief, not a slogan.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/allergy-safe-catering-dubai',
  },
  {
    title: 'FODMAP-Friendly Catering',
    description: 'Onion, garlic and other high-FODMAP foods off the build when you send that list.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/allergy-safe-catering-dubai',
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
  name: 'Healthy Catering Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Healthy Catering Dubai', item: 'https://www.mychef.ae/healthy-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Healthy quote in Dubai. Date: __ Guests: __ Area: __"
export default function HealthyCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.hlth-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.hlth-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.hlth-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.hlth-fmt-card', {
      scrollTrigger: { trigger: '.hlth-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.hlth-uc-item', {
      scrollTrigger: { trigger: '.hlth-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hlth-inc-item', {
      scrollTrigger: { trigger: '.hlth-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hlth-gallery-img', {
      scrollTrigger: { trigger: '.hlth-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.hlth-faq-item', {
      scrollTrigger: { trigger: '.hlth-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.hlth-loc-item', {
      scrollTrigger: { trigger: '.hlth-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.hlth-rel-card', {
      scrollTrigger: { trigger: '.hlth-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.hlth-cta', {
      scrollTrigger: { trigger: '.hlth-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Healthy Catering Dubai | myCHEF"
        description="Healthy Catering Dubai with a vetted myCHEF team. Menus written to how this table eats. Service and clear-down so you stay a guest at your table."
        canonicalPath="/cuisines-dubai"
        ogImage="/menu-seafood.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/healthy-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 hlth-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Healthy Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 hlth-hero-h1">
            Healthy Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 hlth-hero-sub">
            Healthy Catering Dubai is a brief, not a slogan. Tell us what this table should eat. We cook at your address, serve, and pack down.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 hlth-hero-cta">Request your quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 hlth-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <TrustSignalStrip className="mt-8" variant="dark" />
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">BALANCED DINING IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Healthy means how this table eats
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            We do not sell a medical diet. Healthy Catering Dubai is proteins, vegetables and sauces written to your rule: lighter, lower carb, less sugar, or simply more plants. Dietary notes go into the first menu draft. The plate still has to be a proper meal.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            The quote moves with guest count, the menu, and how much of the work happens in the room. We start from a published format and adjust it to your date. What to check: the named chef, an itemised quote, and who buys the ingredients.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            For a carbohydrate cap see <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">keto catering Dubai</Link>. For wheat off the plate see <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">gluten-free catering Dubai</Link>. The catering formats sit on <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">HEALTHY FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Formats for a lighter table
            </h2>
          </div>

          <div className="hlth-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthyFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="hlth-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHERE HEALTHY SHINES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Offices, homes and daytime rooms
            </h2>
          </div>

          <div className="hlth-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="hlth-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What a healthy booking actually covers
          </h2>

          <div className="hlth-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="hlth-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            What healthy service looks like
          </h2>

          <div className="hlth-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="hlth-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Healthy Catering Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="hlth-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="hlth-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="hlth-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="hlth-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
                    {svc.title} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LocationStrip title="Healthy catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center hlth-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send what healthy means for this table
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Name the carb cap, the sugar rule, and any allergens. We put that on the first menu draft and quote the night as an itemised figure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Request your quote</Link>
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
