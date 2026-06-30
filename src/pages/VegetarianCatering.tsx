import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Carrot,
  Soup,
  Salad,
  Flame,
  Home,
  Building,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan vegetarian catering in Dubai (via mychef.ae/vegetarian-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const vegFormats = [
  {
    icon: Soup,
    title: 'Indian & Jain Vegetarian',
    description: 'Rich, aromatic vegetarian Indian menus, including Jain-friendly options prepared without onion and garlic, from curries and dals to dosa and chaat.',
    link: '/indian-catering-dubai',
  },
  {
    icon: Salad,
    title: 'Mezze & Mediterranean',
    description: 'Generous spreads of hummus, moutabel, falafel, vine leaves, fattoush, and warm breads — a vegetarian table built for sharing and grazing.',
    link: '/catering-dubai',
  },
  {
    icon: Carrot,
    title: 'Garden Salads & Bowls',
    description: 'Vibrant seasonal salads, grain bowls, and roasted vegetable plates that feel light, fresh, and substantial all at once.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: Flame,
    title: 'Vegetarian Live Stations',
    description: 'Interactive stations — pasta, dosa, stir-fry, or grill — prepared fresh in front of your guests for a touch of theatre.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Garden Menus',
    description: 'Full-service vegetarian catering for villa dinners and garden parties across Dubai, with on-site cooking, service, and pack-down.',
    link: '/catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Vegetarian',
    description: 'Inclusive vegetarian lunches and reception menus for offices and events where dietary variety and presentation both matter.',
    link: '/healthy-catering-dubai',
  },
]

const includedItems = [
  { title: 'Global Vegetarian Menus', description: 'Indian, Mediterranean, Levantine, and modern vegetarian dishes across one spread.' },
  { title: 'Jain-Friendly Options', description: 'Menus prepared without onion and garlic on request for Jain guests.' },
  { title: 'Mezze & Sharing Plates', description: 'Generous shared spreads of dips, breads, and small plates for grazing.' },
  { title: 'Seasonal Produce', description: 'Fresh seasonal vegetables, pulses, and herbs sourced from trusted suppliers.' },
  { title: 'Live Vegetarian Stations', description: 'Interactive stations cooking fresh dishes in front of your guests on request.' },
  { title: 'Allergen Awareness', description: 'Vegan, gluten-free, and nut-free elements arranged for mixed groups.' },
  { title: 'On-Site Service', description: 'Plating, service staff, and styling handled at your venue.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so you can simply host.' },
]

const useCases = [
  {
    title: 'Indian & Jain Celebrations',
    description: 'For festivals, pujas, and family gatherings, we prepare rich vegetarian Indian menus, including Jain-friendly dishes made without onion and garlic. Every spread is built to feel abundant and authentic for the occasion.',
  },
  {
    title: 'Mezze & Mediterranean Spreads',
    description: 'A vegetarian mezze table is one of the most generous ways to feed a crowd. Hummus, falafel, vine leaves, salads, and warm breads keep guests grazing and mingling throughout the event.',
  },
  {
    title: 'Villa & Garden Dinners',
    description: 'For at-home gatherings across Palm Jumeirah, Emirates Hills, and Dubai Hills, we bring a full vegetarian menu to your terrace or garden, cooking and serving on-site with care.',
  },
  {
    title: 'Inclusive Corporate Events',
    description: 'Vegetarian reception menus and working lunches suit diverse teams and dietary-aware events, pairing naturally with our wider healthy catering offering for offices across Dubai.',
  },
]

const galleryImages = [
  { src: '/menu-appetizer.webp', alt: 'Vegetarian appetizers and mezze in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Vegetarian canapé selection' },
  { src: '/service-catering.webp', alt: 'Vegetarian catering set-up at a Dubai event' },
  { src: '/service-villa.webp', alt: 'Villa vegetarian dinner styling' },
  { src: '/service-events.webp', alt: 'Vegetarian event catering in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Vegetarian dessert display' },
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
    q: 'What styles of vegetarian food do you cater?',
    a: 'We span a wide range — Indian and Jain vegetarian, Mediterranean and Levantine mezze, modern salads and grain bowls, and live vegetarian stations. We can build a single-cuisine menu or a global spread, depending on your guests and occasion.',
  },
  {
    q: 'Can you prepare Jain food without onion and garlic?',
    a: 'Yes. We regularly prepare Jain-friendly menus without onion and garlic, and we take care over preparation and sourcing to respect the requirement. Let us know your needs when planning and we will design the menu accordingly.',
  },
  {
    q: 'Do you cater mixed vegetarian and non-vegetarian groups?',
    a: 'We do. Our vegetarian offering can stand entirely on its own, or sit alongside other dishes for a mixed guest list. We will advise the best approach based on your numbers and preferences.',
  },
  {
    q: 'Are vegan and gluten-free options available too?',
    a: 'Yes. Within a vegetarian menu we can arrange vegan, gluten-free, and nut-free elements for guests with additional needs. Share your guests’ requirements when planning and we will build the spread around them.',
  },
  {
    q: 'Can you provide live vegetarian cooking stations?',
    a: 'Absolutely. Pasta, dosa, stir-fry, and grill stations can be set up to cook fresh in front of your guests, adding a sense of theatre and keeping the food at its best throughout the event.',
  },
  {
    q: 'How far in advance should I book vegetarian catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For larger events or live stations, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Vegan Catering',
    description: 'Fully plant-based fine dining, canapés, and dairy-free desserts for inclusive events.',
    image: '/menu-canapes.webp',
    link: '/vegan-catering-dubai',
  },
  {
    title: 'Indian Catering',
    description: 'Aromatic Indian menus, from curries and biryani to chaat, for celebrations of any size.',
    image: '/menu-appetizer.webp',
    link: '/indian-catering-dubai',
  },
  {
    title: 'Healthy Catering',
    description: 'Nutrition-focused, balanced menus for wellness days and corporate events.',
    image: '/service-catering.webp',
    link: '/healthy-catering-dubai',
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
  name: 'Vegetarian Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Vegetarian Catering Dubai', item: 'https://mychef.ae/vegetarian-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function VegetarianCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.veg-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.veg-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.veg-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.veg-fmt-card', {
      scrollTrigger: { trigger: '.veg-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.veg-uc-item', {
      scrollTrigger: { trigger: '.veg-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.veg-inc-item', {
      scrollTrigger: { trigger: '.veg-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.veg-gallery-img', {
      scrollTrigger: { trigger: '.veg-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.veg-faq-item', {
      scrollTrigger: { trigger: '.veg-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.veg-loc-item', {
      scrollTrigger: { trigger: '.veg-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.veg-rel-card', {
      scrollTrigger: { trigger: '.veg-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.veg-cta', {
      scrollTrigger: { trigger: '.veg-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Vegetarian Catering Dubai | Global Veg & Jain Menus"
        description="Vegetarian catering in Dubai spanning Indian and Jain menus, Mediterranean mezze, salads, and live stations for inclusive events. Request your custom quote today."
        canonicalPath="/vegetarian-catering-dubai"
        ogImage="/menu-appetizer.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/vegetarian-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 veg-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Vegetarian Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 veg-hero-h1">
            Vegetarian Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 veg-hero-sub">
            Global vegetarian menus — Indian and Jain, Mediterranean mezze, garden salads, and live stations — for inclusive, generous celebrations across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=vegetarian-catering-dubai" className="btn-primary opacity-0 translate-y-4 veg-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 veg-hero-cta"
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
            VEGETARIAN DINING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A World of Vegetarian Flavour
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Vegetarian food is some of the most varied and characterful cooking in the world. From the spice and depth of Indian and Jain kitchens to the bright, shareable abundance of a Mediterranean mezze, there is no shortage of colour, texture, or generosity when meat is left off the plate. At myCHEF Dubai, we draw on that breadth to build vegetarian menus that feel complete and celebratory, never like a compromise.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting a festival or family gathering, a mezze-style reception, a villa dinner, or an inclusive corporate lunch, our team designs and serves a menu suited to your guests — including Jain-friendly dishes without onion and garlic. For a fully plant-based version, see our <Link to="/vegan-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">vegan catering Dubai</Link> menus. Explore our vegetarian formats below, or see how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              VEGETARIAN FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Vegetarian for Every Occasion
            </h2>
          </div>

          <div className="veg-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vegFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="veg-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE VEGETARIAN SHINES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Designed for the Moment
            </h2>
          </div>

          <div className="veg-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="veg-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Vegetarian Catering Includes
          </h2>

          <div className="veg-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="veg-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Vegetarian Catering
          </h2>

          <div className="veg-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="veg-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Vegetarian Catering Questions
          </h2>

          <div className="veg-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="veg-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="veg-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="veg-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="veg-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="veg-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center veg-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Design Your Vegetarian Menu
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll create a vegetarian menu — global or single-cuisine, Jain-friendly if needed — that delights every guest at your table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=vegetarian-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
