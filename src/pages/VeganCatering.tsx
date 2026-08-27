// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /vegan-catering-dubai
//     primary:     "vegan catering dubai"
//     subkeywords: "vegan catering dubai price" · "vegan catering cost per person dubai" · "best vegan catering dubai" · "vegan catering packages dubai" · "vegan catering menu dubai" · "plant based catering dubai" · "vegan caterers dubai" · "vegan private chef dubai" · "vegan cakes in dubai" · "vegan food dubai" · "vegan ready meals dubai" · "vegan christmas dinner dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import {
  Leaf,
  Salad,
  Sparkles,
  Cake,
  Home,
  Building,
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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan vegan catering in Dubai (via mychef.ae/vegan-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const veganFormats = [
  {
    icon: Salad,
    title: 'Plant-Based Fine Dining',
    description: 'Multi-course vegan menus plated with care — seasonal vegetables, grains, and pulses transformed into refined dishes worthy of any celebration.',
    link: '/catering-dubai',
  },
  {
    icon: Sparkles,
    title: 'Vegan Canapés',
    description: 'Bite-sized plant-based canapés for receptions and cocktail evenings, from crisp tartlets to delicate spoons that never feel like an afterthought.',
    link: '/grazing-table-dubai',
  },
  {
    icon: Leaf,
    title: 'Vegan Grazing Tables',
    description: 'Abundant plant-based grazing spreads of vegan cheeses, dips, marinated vegetables, fruits, and breads, styled as a generous centrepiece.',
    link: '/grazing-table-dubai',
  },
  {
    icon: Cake,
    title: 'Vegan Desserts & Cakes',
    description: 'Dairy-free and egg-free patisserie, tarts, and celebration cakes that close the meal without compromise on texture or flavour.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Garden Vegan Menus',
    description: 'fully-coordinated catering for villa dinners and garden parties across Dubai, with on-site cooking, service, and pack-down.',
    link: '/catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Vegan Catering',
    description: 'Inclusive plant-based lunches and reception menus for offices and events where dietary choice matters and presentation still counts.',
    link: '/cuisines-dubai',
  },
]

const includedItems = [
  { title: 'Fully Plant-Based Menus', description: 'Entirely vegan dishes with no animal-derived ingredients across the spread.' },
  { title: 'Seasonal Produce', description: 'Fresh seasonal vegetables, fruits, and herbs sourced from trusted suppliers.' },
  { title: 'Creative Mains', description: 'Considered plant-based mains built on pulses, grains, mushrooms, and vegetables.' },
  { title: 'Vegan Canapés & Bites', description: 'Elegant passed canapés and finger food designed for plant-based menus.' },
  { title: 'Dairy-Free Desserts', description: 'Patisserie and celebration cakes made without dairy or eggs.' },
  { title: 'Allergen Awareness', description: 'Gluten-free and nut-free elements arranged on request for mixed groups.' },
  { title: 'On-Site Service', description: 'Plating, service staff, and styling handled at your venue.' },
  { title: 'Full Setup & Pack-Down', description: 'We arrive, set up, serve, and clear away so you can simply host.' },
]

const useCases = [
  {
    title: 'Dietary-Inclusive Celebrations',
    description: 'Hosting a mixed group where some guests are vegan and others are not? We design plant-based menus that stand confidently on their own, so vegan guests feel considered rather than catered to as an afterthought.',
  },
  {
    title: 'Villa & Garden Dinners',
    description: 'For at-home gatherings across Palm Jumeirah, Emirates Hills, and Dubai Hills, we bring a full plant-based menu to your terrace or garden, cooking and serving on-site with the same polish as any fine-dining event.',
  },
  {
    title: 'Corporate Wellness Events',
    description: 'Plant-based reception menus and working lunches suit wellness days, launches, and inclusive office events. They pair naturally with our wider healthy catering offering for teams who care about what they eat.',
  },
  {
    title: 'Receptions & Showers',
    description: 'Vegan grazing tables, canapés, and dessert displays make beautiful, photogenic spreads for bridal showers, baby showers, and engagement celebrations — colourful, abundant, and entirely plant-based.',
  },
]

const galleryImages = [
  { src: '/menu-appetizer.webp', alt: 'Plant-based vegan appetizers in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Vegan canapé selection' },
  { src: '/menu-dessert.webp', alt: 'Dairy-free vegan dessert display' },
  { src: '/service-catering.webp', alt: 'Vegan catering set-up at a Dubai event' },
  { src: '/service-villa.webp', alt: 'Villa vegan dinner styling' },
  { src: '/service-events.webp', alt: 'Plant-based event catering in Dubai' },
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
    q: 'Is the entire menu fully vegan?',
    a: 'Yes. When you book vegan catering, every dish is built without animal-derived ingredients — no meat, fish, dairy, eggs, or honey. We design the full menu, from canapés to desserts, to be entirely plant-based while still feeling generous and refined.',
  },
  {
    q: 'Will the food feel substantial, not just side dishes?',
    a: 'Absolutely. Our plant-based mains are built around pulses, grains, mushrooms, and seasonal vegetables to be satisfying and complete. We design menus so vegan guests enjoy a full, considered meal rather than a collection of sides.',
  },
  {
    q: 'Can you cater a mixed group of vegan and non-vegan guests?',
    a: 'Yes. We regularly create menus where a fully vegan offering sits alongside other dishes, or where the entire spread is plant-based and designed to please everyone. We will advise the best approach based on your guest list.',
  },
  {
    q: 'Do you handle other dietary needs alongside vegan?',
    a: 'We do. Gluten-free, nut-free, and other allergen-conscious elements can be arranged within a vegan menu. Let us know your guests’ requirements when planning and we will build the spread around them.',
  },
  {
    q: 'Do you offer vegan desserts and celebration cakes?',
    a: 'Yes. We create dairy-free and egg-free patisserie, tarts, and celebration cakes that hold their own on texture and flavour, so the sweet course is every bit as considered as the rest of the meal.',
  },
  {
    q: 'How far in advance should I book vegan catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For larger events or fully styled menus, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
  { q: "How much does vegan catering cost in Dubai?", a: "Vegan catering in Dubai is priced by custom quote, shaped by your guest count, menu style, and level of service rather than a fixed per-head rate. Fully plant-based menus can involve more specialist ingredients and preparation, but we build the spread to your budget so you know exactly what you are paying for. Share your date and headcount and we will send a clear, itemised proposal, usually within 15 minutes during business hours." },
  { q: "What is included in your vegan catering price?", a: "Every booking includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, and full cleanup afterwards. In practice you get a complete plant-based experience from first canapé to final dessert, with our team handling setup and pack-down so you simply host. Serving staff can be added when you want table service, and you can review sample menus on our [menus](/menus) page." },
  { q: "Is VAT included in the vegan catering quote?", a: "The standard 5% UAE VAT applies to catering services and is shown clearly on your quote. We keep pricing transparent with no hidden charges, so the figure you approve is the figure you pay. Any optional extras like additional serving staff are itemised separately before you confirm." },
  { q: "Do you cook the vegan food fresh on-site or deliver it prepared?", a: "For most events our chefs cook and plate your vegan menu fresh on-site, so dishes arrive at their best rather than sitting in transit. We bring the equipment we need and work cleanly in your kitchen or a suitable prep area, then clear everything away when service ends. For simpler gatherings, prepared drop-off options can also be arranged if you prefer." },
  { q: "Is your vegan catering prepared to Dubai food-safety standards?", a: "Yes. Our chefs and kitchens operate to Dubai Municipality food-safety standards, with careful handling and hygiene throughout preparation and service. Plant-based menus are prepared with the same rigour we apply to every event, and we take allergen separation seriously for mixed groups. You can read more about how we work on our [how it works](/how-it-works) page." },
  { q: "Is vegan food automatically halal?", a: "Fully vegan dishes contain no meat, poultry, or animal products, so they naturally sit within halal dietary requirements, and we source halal by default across all our menus. We also avoid alcohol-based ingredients in cooking unless you specifically request otherwise. This makes plant-based menus a genuinely inclusive choice for mixed cultural and religious guest lists." },
  { q: "How do you prevent cross-contact between vegan and non-vegan dishes?", a: "We keep plant-based items separate throughout sourcing, preparation, and service, using clean equipment and dedicated handling so vegan dishes stay truly vegan. For guests with allergies alongside a vegan diet, we plan the menu around their needs and label clearly where helpful. Tell us about every requirement when planning and we will build safeguards into the setup." },
  { q: "Will you use ingredients like honey, gelatin, or wine in the food?", a: "No. When you book a vegan menu we exclude all animal-derived ingredients, including honey, gelatin, dairy, eggs, and any non-vegan additives, and we avoid animal-based cooking wines. We check labels and swap in genuine plant-based alternatives so the whole spread is trustworthy for strict vegan guests. If you have any grey areas you want confirmed, just ask and we will clarify." },
  { q: "Where do you get plant-based protein and will guests feel full?", a: "Our vegan mains are built around satisfying plant proteins such as lentils, chickpeas, tofu, tempeh, beans, mushrooms, and grains like quinoa. The result is a complete, filling meal rather than a plate of vegetables, so guests leave content. We balance flavour, texture, and portion so nobody goes hungry, vegan or not." },
  { q: "What is the minimum number of guests for vegan catering?", a: "We cater intimate plant-based dinners for a handful of guests right through to large receptions and corporate events. Because we quote to your specific occasion, there is no rigid one-size minimum, and smaller gatherings simply get a menu scaled to suit them. Tell us your headcount and we will design accordingly, whether it is an eight-person villa dinner or a two-hundred-guest event." },
  { q: "Can you provide serving staff for a vegan event?", a: "Yes, professional serving staff are an optional add-on for any vegan booking. They handle passing canapés, plating courses, topping up grazing tables, and clearing throughout the evening so you stay with your guests. If you prefer a relaxed self-serve buffet, we can set up and step back instead." },
  { q: "Do you cater vegan menus at villas, gardens, and private residences?", a: "Absolutely. We regularly bring full vegan menus to villas, gardens, and terraces across Dubai, cooking and serving on-site with the same polish as any fine-dining event. Our team assesses your space in advance so setup runs smoothly, and we handle everything from arrival to pack-down. See how we work in [villas and private residences](/villas-private-residences) for at-home plant-based dining." },
  { q: "Can you cater a vegan wedding or large celebration?", a: "Yes, we design and serve fully plant-based menus for weddings and large celebrations, from styled grazing tables and canapé receptions to multi-course plated dinners. We scale the kitchen, staffing, and service to match your guest count and venue while keeping every dish genuinely refined. Explore our approach to [wedding catering in Dubai](/wedding-catering-dubai) and we will tailor a vegan menu to your day." },
  { q: "Should I choose a vegan buffet or plated service?", a: "A vegan buffet suits relaxed, sociable events and lets guests sample a wide plant-based spread, while plated service gives a more formal, refined dining experience with courses brought to the table. Both work beautifully for vegan menus, and the right choice depends on your venue, guest count, and the mood you want. We will recommend the best format once we know more about your celebration." },
  { q: "Can we arrange a tasting before booking a large vegan event?", a: "For larger and fully styled vegan events, a tasting can often be arranged so you can approve the menu with confidence before the day. It is a good chance to refine flavours, presentation, and portion sizes to your taste. Get in touch via our [contact](/contact) page and we will let you know what is possible for your booking." },
  { q: "How is vegan catering different from your vegetarian menus?", a: "Vegan catering excludes every animal product, including dairy, eggs, and honey, while vegetarian menus can include cheese, yoghurt, and other dairy items. If your guest list is mixed, we can build a fully vegan spread that pleases everyone or blend the two thoughtfully. For groups that eat dairy, our [vegetarian catering Dubai](/vegetarian-catering-dubai) menus offer even more variety." },
  { q: "How quickly can you respond and confirm a vegan catering booking?", a: "During business hours we typically reply within 15 minutes with next steps and an initial quote once we have your date, headcount, and menu style. Confirming the booking is quick once you approve the proposal, though popular dates in peak season from November to March fill early. Reach out as soon as your date is set so we can secure it for you." },
]

const relatedServices = [
  {
    title: 'Vegetarian Catering',
    description: 'Global vegetarian menus, from mezze to Indian veg, for inclusive celebrations.',
    image: '/menu-appetizer.webp',
    link: '/vegetarian-catering-dubai',
  },
  {
    title: 'Dairy-Free Catering',
    description: 'Lactose-free menus with creamy plant-based alternatives for every course.',
    image: '/images/dairy-free-catering-dubai-hero.webp',
    link: '/allergy-safe-catering-dubai',
  },
  {
    title: 'Nut-Free Catering',
    description: 'Allergy-aware catering free from peanuts and tree nuts for safe family events.',
    image: '/images/nut-free-catering-dubai-hero.webp',
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
  name: 'Vegan Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Vegan Catering Dubai', item: 'https://www.mychef.ae/vegan-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Vegan quote in Dubai. Date: __ Guests: __ Area: __"
export default function VeganCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.vgn-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.vgn-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.vgn-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.vgn-fmt-card', {
      scrollTrigger: { trigger: '.vgn-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.vgn-uc-item', {
      scrollTrigger: { trigger: '.vgn-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.vgn-inc-item', {
      scrollTrigger: { trigger: '.vgn-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.vgn-gallery-img', {
      scrollTrigger: { trigger: '.vgn-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.vgn-faq-item', {
      scrollTrigger: { trigger: '.vgn-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.vgn-loc-item', {
      scrollTrigger: { trigger: '.vgn-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.vgn-rel-card', {
      scrollTrigger: { trigger: '.vgn-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.vgn-cta', {
      scrollTrigger: { trigger: '.vgn-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Vegan Catering Dubai | Plant-Based Events & Dining"
        description="Vegan catering Dubai for plant-based events & private dining. Creative fine dining, canapés, grazing tables & dairy-free desserts. Quote in ~15 mins."
        canonicalPath="/vegan-catering-dubai"
        ogImage="/menu-appetizer.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/vegan-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 vgn-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Vegan Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 vgn-hero-h1">
            Vegan Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 vgn-hero-sub">
            Creative plant-based fine dining, vegan canapés, grazing tables, and dairy-free desserts — designed for inclusive, beautiful celebrations across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 vgn-hero-cta">Get My Vegan Catering Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 vgn-hero-cta"
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
          <SectionLabel align="center">PLANT-BASED DINING IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Vegan Menus Worth Celebrating
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Plant-based food has come a long way from the side salad. Done well, vegan catering is vivid, generous, and genuinely exciting — seasonal vegetables, grains, pulses, and herbs coaxed into dishes that feel complete in their own right. At myCHEF Dubai, we approach vegan menus with the same creativity and finish we bring to every event, so plant-based guests are never an afterthought and the food earns its place at the centre of the table.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Vegan catering Dubai price and vegan catering cost per person Dubai depend on the same three things: the guest count, the menu, and how much of the work happens in front of people. Vegan catering packages Dubai start from a set format and get adjusted to your date rather than sold as a fixed box. If you are weighing up best vegan catering Dubai, the things worth checking are the named chef, the itemised quote and who buys the ingredients. The vegan catering menu Dubai is drafted around the occasion, the season and the dietary list, and you change it before anything is confirmed. Vegan food Dubai, vegan caterers Dubai, vegan cakes in Dubai, vegan ready meals Dubai, vegan private chef Dubai and vegan Christmas dinner Dubai are planned into the first draft of the menu rather than bolted on at the end.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting a fully vegan dinner, a dietary-inclusive celebration with mixed guests, a corporate wellness day, or a styled reception, our chefs design and serves menus tailored to your occasion. From canapés to dairy-free desserts, every course is considered. For events where some guests prefer vegetarian dishes, you can also explore our <Link to="/vegetarian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">vegetarian catering Dubai</Link> menus, or browse our <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">dairy-free</Link> and <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">nut-free catering</Link> options. Explore our vegan formats below, or see how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">VEGAN FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Plant-Based for Every Occasion
            </h2>
          </div>

          <div className="vgn-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {veganFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="vgn-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHERE VEGAN SHINES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Designed for the Moment
            </h2>
          </div>

          <div className="vgn-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="vgn-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Vegan Catering Includes
          </h2>

          <div className="vgn-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="vgn-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Vegan Catering
          </h2>

          <div className="vgn-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="vgn-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Vegan Catering Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="vgn-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="vgn-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="vgn-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="vgn-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Vegan catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center vgn-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Design Your Vegan Menu
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll create a plant-based menu that delights every guest — vegan and otherwise — from the first canapé to the final dessert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get My Vegan Catering Quote</Link>
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
