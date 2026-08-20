import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Heart,
  UtensilsCrossed,
  Wine,
  Users,
  Salad,
  Home,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { plainFaqAnswer } from '../utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan wedding catering in Dubai (via mychef.ae/wedding-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const weddingFormats = [
  {
    icon: UtensilsCrossed,
    title: 'Plated Wedding Dinners',
    description: 'Elegant multi-course dinners with professional table service, ideal for formal receptions and seated celebrations.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Buffet & Live Stations',
    description: 'Beautifully styled buffet and partner-chef-led live stations offering variety and movement for larger weddings.',
    link: '/catering-dubai',
  },
  {
    icon: Wine,
    title: 'Canapés & Cocktail Hour',
    description: 'Passed canapés, sparkling service, and a styled bar to welcome guests during your cocktail reception.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    icon: Salad,
    title: 'Family-Style Sharing',
    description: 'Generous shared platters served to the table for a warm, convivial atmosphere across long banquet seating.',
    link: '/catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Venue Weddings',
    description: 'fully-coordinated catering at your villa, garden, or chosen venue across Dubai, with setup, service, and clear-down.',
    link: '/catering-dubai',
  },
  {
    icon: Heart,
    title: 'Sweet & Dessert Tables',
    description: 'Bespoke wedding cakes, patisserie, and styled dessert tables to close the celebration on a memorable note.',
    link: '/dessert-table-catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Wedding Menu', description: 'A menu designed around your love story, cuisine, and guest list.' },
  { title: 'Multi-Cuisine Options', description: 'Arabic, Mediterranean, Asian, and international menus, blended as you wish.' },
  { title: 'Professional Service Staff', description: 'Waiters, captains, and bartenders scaled to your guest count.' },
  { title: 'Cocktail & Bar Service', description: 'Welcome drinks, cocktails, mocktails, and attentive bar service.' },
  { title: 'Dietary & Cultural Catering', description: 'Halal, vegetarian, vegan, and allergy-conscious menus as standard.' },
  { title: 'Table Styling & Tableware', description: 'Elegant tableware, glassware, linens, and presentation styling.' },
  { title: 'Wedding Cake & Desserts', description: 'A bespoke cake and dessert table styled to your theme.' },
  { title: 'Full Setup & Clear-Down', description: 'Every detail is arranged and overseen from arrival to the final clean-up.' },
]

const useCases = [
  {
    title: 'Villa & Garden Weddings',
    description: 'For intimate weddings at home, we transform your villa, garden, or terrace into a full reception space — bringing the chefs, staff, and styling to you across Palm Jumeirah, Emirates Hills, Dubai Hills, and beyond.',
  },
  {
    title: 'Grand Hotel & Venue Receptions',
    description: 'For larger celebrations, we work seamlessly within your chosen venue, coordinating with planners and stylists to deliver plated dinners, buffets, and live stations at scale without compromising on detail.',
  },
  {
    title: 'Multi-Day Wedding Events',
    description: 'Engagements, pre-wedding dinners, the main reception, and the post-wedding brunch each deserve their own menu. We design a considered culinary thread across every event in your celebration.',
  },
  {
    title: 'Cultural & Fusion Menus',
    description: 'From a traditional Arabic feast to a Mediterranean banquet or an East-meets-West fusion, we design menus that honour your heritage and tastes, always prepared to halal standards as required.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Luxury wedding catering setup in Dubai' },
  { src: '/service-luxury-dining.webp', alt: 'Elegant plated wedding dinner' },
  { src: '/menu-canapes.webp', alt: 'Canapé service at a wedding reception' },
  { src: '/service-villa.webp', alt: 'Villa wedding catering in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Wedding dessert table' },
  { src: '/menu-meat.webp', alt: 'Plated main course at a wedding' },
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
    q: 'How many guests can you cater for at a wedding?',
    a: 'we coordinate catering for weddings of every scale, from intimate gatherings of around 20 to grand receptions of several hundred guests. The service style, staffing, and kitchen set-up are tailored to your final guest count and venue.',
  },
  {
    q: 'What service styles do you offer for weddings?',
    a: 'We offer plated multi-course dinners, buffet and live cooking stations, family-style sharing platters, and canapé cocktail-hour service. We advise on the best format based on your venue, guest count, and the mood you want.',
  },
  {
    q: 'Can you create multi-cuisine and cultural menus?',
    a: 'Yes. We design Arabic, Mediterranean, Asian, and international menus, and we are happy to blend cuisines across courses. All menus can be prepared to halal standards, and we coordinate catering for vegetarian, vegan, and allergy needs.',
  },
  {
    q: 'Do you provide staff, tableware, and bar service?',
    a: 'Absolutely. Every wedding package includes professional service staff, elegant tableware, glassware and linens, and bar service with cocktails and mocktails, all scaled to your guest count and styled to your theme.',
  },
  {
    q: 'Can you cater weddings at villas and outdoor venues?',
    a: 'Yes. We regularly cater villa, garden, beach, and rooftop weddings across Dubai, coordinating the chef, staff, and styling. We also work within hotels and dedicated venues alongside your planner.',
  },
  {
    q: 'How far in advance should we book wedding catering?',
    a: 'For weddings, we recommend booking two to three months in advance to secure your date and finalise menus through tastings. During peak season from November to March, earlier booking is strongly advised.',
  },
  { q: "How much does wedding catering cost per person in Dubai?", a: "Wedding catering in Dubai typically ranges from around AED 180 per person for refined buffet menus to AED 500+ per person for multi-course plated dinners with live stations, though myCHEF works on a custom quote rather than fixed packages. Your final price depends on guest count, service style, cuisine, and season, so we build a proposal around your specific wedding and reply within 15 minutes during business hours. All quotes are transparent and include 5% VAT. Share your date and numbers via our [contact page](/contact) for an exact figure." },
  { q: "What exactly is included in a wedding catering quote?", a: "Every myCHEF wedding quote covers menu design, premium ingredients, cooking, plating, and full clear-down as standard, so there are no hidden line items after the event. Service staff, bar service, tableware, and styling are included based on the plan we agree, and you'll see each element itemised before you commit. Wedding cakes and specialty desserts can be added, and anything optional is flagged clearly so your budget stays predictable." },
  { q: "Do you offer a menu tasting before the wedding?", a: "Yes, we arrange a private tasting once your date is confirmed and the menu direction is agreed, so you can refine dishes, portions, and presentation before the day. Tastings are the best moment to fine-tune seasoning, dietary swaps, and course flow with your assigned chef. We recommend scheduling it four to six weeks ahead so any changes can be locked in comfortably, and you can begin planning courses through our [wedding catering menu planning guide](/wedding-catering-menu-planning-dubai)." },
  { q: "Are your chefs and kitchens licensed to Dubai food-safety standards?", a: "Yes, every chef in the myCHEF network operates to Dubai Municipality food-safety standards and follows the Dubai Food Code for handling, storage, and hygiene. This licensing protects your guests and is especially important for large weddings and outdoor setups where temperature control matters. We're happy to confirm compliance details when we send your proposal, so you can book with full confidence." },
  { q: "Is your wedding catering halal?", a: "Yes, all myCHEF wedding menus are prepared halal by default, using halal-certified meat and poultry as standard across every cuisine. If your celebration blends Arabic, Indian, Mediterranean, or international dishes, each is prepared to halal standards without compromising flavour or presentation. Should you have specific certification or preparation requirements, tell us in advance and we'll match the right chef; you can also explore our dedicated [halal catering in Dubai](/halal-catering-dubai)." },
  { q: "Should we choose a plated dinner or a buffet for our wedding?", a: "Choose a plated dinner for a formal, timeline-controlled reception and a buffet for variety, movement, and a relaxed atmosphere across larger guest counts. Plated service slots cleanly around speeches, first dances, and toasts, while buffets and live stations give guests choice and energy. We help you decide based on your venue, numbers, and mood, and can even combine formats, such as a plated main with a dessert buffet." },
  { q: "Do you handle drinks and bar service at weddings?", a: "Yes, we provide full beverage and bar service, including welcome drinks, signature mocktails, soft drinks, tea, and coffee stations styled to your theme. For alcohol service, arrangements depend on your venue's licensing and any permits it holds, so we coordinate with your venue or planner to ensure everything is handled correctly and legally. Professional bartenders and service staff are scaled to your guest count and included in your plan." },
  { q: "How do you cater outdoor and villa weddings in Dubai's heat?", a: "For outdoor and villa weddings we engineer the menu and setup around Dubai's climate, using heat-stable dishes, shaded and chafing-protected stations, cold-chain storage, and short top-up cycles to keep food fresh and safe. During the warmer months we favour cooler evening service and bring the mobile kitchen, cooling, and warming equipment on site. Our chefs plan for the conditions from the outset rather than improvising on the day, which is why licensed, experienced partners matter for al-fresco receptions." },
  { q: "What happens if the weather changes on our wedding day?", a: "We build a flexible service plan so your catering adapts smoothly if weather forces a move indoors or under cover, without disrupting the menu or timeline. Because our chefs bring their own mobile kitchen and equipment, we can relocate stations, adjust serving points, and re-time courses as needed. We coordinate closely with your planner or venue on a backup layout well before the day so nothing is left to chance." },
  { q: "Can you cater multi-day weddings and pre-wedding events?", a: "Absolutely; we design a considered culinary thread across engagement dinners, mehndi and henna nights, the main reception, and the post-wedding brunch, each with its own menu and mood. Multi-day celebrations benefit from a single coordinated team so styling, service, and dietary needs stay consistent throughout. Tell us your full run of events and we'll build one seamless plan; you can also browse our wider [catering in Dubai](/catering-dubai) for other occasions." },
  { q: "Can you accommodate allergies, vegan guests, and a children's menu?", a: "Yes, we cater vegetarian, vegan, gluten-free, dairy-free, and nut-free needs as standard, and we prepare a dedicated children's menu whenever little guests are attending. Share your guest dietary list during planning and we'll label dishes and separate allergen-sensitive preparations to keep everyone safe. Accommodating these needs is built into the menu design, not treated as an afterthought." },
  { q: "How does the wedding reception service timeline work?", a: "We map the full service timeline around your reception schedule so canapés, courses, and dessert land precisely around speeches, dances, and key moments. Plated dinners run in clear stages of roughly 20 to 30 minutes each, while buffets and live stations are staffed to prevent queues at larger weddings. Your assigned captain coordinates with your planner and MC on the day so the food flow feels effortless and perfectly paced." },
  { q: "How do payment and deposits work for wedding catering?", a: "We confirm your wedding date with a deposit and agree a clear payment schedule in writing, with the balance settled before the event and all pricing inclusive of 5% VAT. Because every wedding is custom-quoted, your proposal spells out exactly what each stage covers so there are no surprises. We'll walk you through the terms when we send your quote, and you can reach us any time through our [contact page](/contact)." },
  { q: "Can you add live cooking stations, grazing tables, or canapés to our wedding?", a: "Yes, live cooking stations, grazing tables, passed canapés, dessert displays, and interactive counters are popular ways to add theatre and choice to a Dubai wedding. These work beautifully for cocktail hours, larger receptions, and multi-event celebrations, and can be layered onto a plated or buffet main service. Tell us the experience you want and we'll design it into your menu, from a styled [grazing table](/grazing-table-dubai) to chef-led live stations." },
  { q: "How much does wedding catering cost in Dubai?", a: "Wedding catering in Dubai is custom-quoted based on guest count, cuisine, and service style. Indicative prices range from AED 180 per person for refined buffets to AED 500+ per person for plated multi-course dinners with live stations. All quotes include 5% VAT and are itemised so your budget stays predictable." },
  { q: "Can you cater a villa wedding in Dubai?", a: "Yes. Villa, garden, and beach weddings are a speciality. We bring the chefs, service staff, and styling to venues across [Palm Jumeirah](/locations/palm-jumeirah), [Emirates Hills](/locations/emirates-hills), and [Dubai Hills](/locations/dubai-hills), handling setup, service, and clear-down so you can focus on the day." },
  { q: "Do you provide menu tastings before the wedding?", a: "Yes. We arrange private tastings once your date is confirmed and the menu direction is agreed, typically four to six weeks before the wedding. This lets you refine dishes, portions, and presentation before the day, and you can begin planning courses through our [wedding catering menu planning guide](/wedding-catering-menu-planning-dubai)." },
  { q: "Can you cater Indian wedding menus in Dubai?", a: "Yes. We design Indian and fusion wedding menus, from regional thalis to modern plated courses, all prepared to halal standards on request. Explore our [Indian catering Dubai](/indian-catering-dubai) options for menu inspiration." },
  { q: "Do you offer wedding catering packages in Dubai?", a: "Every wedding is bespoke, but we create package-style proposals around service tiers such as canapé reception, plated dinner, buffet, and live stations. See our [wedding catering menu planning guide](/wedding-catering-menu-planning-dubai) for how we structure packages and tastings." },
  { q: "Is your wedding catering fully halal?", a: "Yes. All myCHEF wedding menus are halal by default, using halal-certified meat and poultry. We can confirm specific requirements when we build your proposal, and you can read more about our [halal catering in Dubai](/halal-catering-dubai)." },
]

const relatedServices = [
  {
    title: 'Engagement Catering',
    description: 'Elegant menus and service for engagement parties and proposal celebrations.',
    image: '/service-events.webp',
    link: '/engagement-catering-dubai',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Bespoke fine-dining experiences for the most special moments of your celebration.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
  {
    title: 'Dessert Table Catering',
    description: 'Bespoke wedding cakes and styled sweet tables to close your celebration.',
    image: '/menu-dessert.webp',
    link: '/dessert-table-catering-dubai',
  },
  {
    title: 'Gelato & Dessert Cart',
    description: 'Elegant gelato and sweet carts to add theatre to your wedding reception.',
    image: '/images/dessert-table-catering-dubai-hero.webp',
    link: '/dessert-cart-dubai',
  },
]

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: plainFaqAnswer(f.a) },
  })),
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Wedding Catering Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Wedding Catering Dubai', item: 'https://www.mychef.ae/wedding-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm planning a wedding reception in Dubai. Date: __ Guests: __ Venue: __"
export default function WeddingCatering() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.wed-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.wed-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.wed-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.wed-fmt-card', {
      scrollTrigger: { trigger: '.wed-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wed-uc-item', {
      scrollTrigger: { trigger: '.wed-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-inc-item', {
      scrollTrigger: { trigger: '.wed-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-gallery-img', {
      scrollTrigger: { trigger: '.wed-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.wed-faq-item', {
      scrollTrigger: { trigger: '.wed-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wed-loc-item', {
      scrollTrigger: { trigger: '.wed-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.wed-rel-card', {
      scrollTrigger: { trigger: '.wed-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wed-cta', {
      scrollTrigger: { trigger: '.wed-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Wedding Catering Dubai | Villa, Garden & Venue Receptions"
        description="Luxury wedding catering in Dubai for villas, gardens & venues. Plated or buffet, multi-cuisine menus, halal, full service. Request a custom proposal."
        canonicalPath="/wedding-catering-dubai"
        ogImage="/service-events.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/wedding-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 wed-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Wedding Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 wed-hero-h1">
            Wedding Catering Dubai: Villa, Garden & Venue Receptions
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 wed-hero-sub">
            From intimate villa ceremonies to grand venue receptions — plated dinners, multi-cuisine menus, beautiful styling, and flawless service for your wedding day in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=wedding-catering-dubai" className="btn-primary opacity-0 translate-y-4 wed-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 wed-hero-cta"
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
            DUBAI WEDDING SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering Worthy of Your Wedding Day
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Your wedding deserves a culinary experience as memorable as the day itself. At myCHEF Dubai, we design wedding catering around your love story — the cuisines that mean something to you, the moments you want to savour, and the guests you want to delight. From the welcome canapés to the final slice of cake — finished by our partner <Link to="/chefs/sofia-pastry-chef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">pastry chef for wedding desserts</Link> — every detail is considered, styled, and executed with quiet precision.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are planning an intimate villa ceremony, a grand hotel reception, or a multi-day celebration spanning engagement to brunch, we bring in the chef, the service, and the styling — through vetted licensed partners you engage. We work seamlessly with planners and stylists, and pair naturally with our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>. Explore our wedding services below.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WEDDING SERVICE STYLES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering for Every Wedding Format
            </h2>
          </div>

          <div className="wed-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="wed-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE WE SERVE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Weddings for Every Setting
            </h2>
          </div>

          <div className="wed-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="wed-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Wedding Catering Includes
          </h2>

          <div className="wed-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="wed-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Wedding Catering
          </h2>

          <div className="wed-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="wed-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Wedding Catering Questions
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Wedding Catering Across Dubai
          </h2>

          <div className="wed-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="wed-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="wed-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="wed-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Related Guides</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/wedding-catering-checklist-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Wedding Catering Checklist</Link>{' '}
            and{' '}
            <Link to="/wedding-catering-menu-planning-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">wedding catering menu planning guide</Link>,
            {' '}and meet{' '}
            <Link to="/chefs/sofia-pastry-chef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Pastry Chef Sofia</Link>{' '}
            for your dessert table.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center wed-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Wedding Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your vision and we'll craft a bespoke menu, service plan, and styling to make your wedding day unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=wedding-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
