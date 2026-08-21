import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Cake,
  Coffee,
  GlassWater,
  Flower,
  Sparkles,
  Leaf,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan baby shower catering in Dubai (via mychef.ae/baby-shower-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const showerFormats = [
  {
    icon: Leaf,
    title: 'Grazing Tables',
    description: 'Abundant, beautifully styled grazing tables of cheeses, charcuterie, fresh fruit, and artisan bites in soft, photogenic palettes.',
  },
  {
    icon: Sparkles,
    title: 'Canapé Selections',
    description: 'Delicate passed and displayed canapés — light, refined, and easy to enjoy while guests mingle and celebrate.',
  },
  {
    icon: Coffee,
    title: 'Afternoon Tea Style',
    description: 'Finger sandwiches, warm scones, savoury tarts, and petit fours served in an elegant afternoon-tea format.',
  },
  {
    icon: Cake,
    title: 'Dessert Tables',
    description: 'Statement dessert displays with cakes, macarons, tarts, and themed sweets styled around your colour scheme.',
  },
  {
    icon: GlassWater,
    title: 'Mocktails & Drinks',
    description: 'Refreshing mocktails, fruit coolers, and infused waters — celebratory, alcohol-free, and beautifully presented.',
  },
  {
    icon: Flower,
    title: 'Themed Styling',
    description: 'Soft pastels, florals, gender-reveal palettes, or modern neutrals — we style the spread to match your theme.',
  },
]

const includedItems = [
  { title: 'Bespoke Shower Menu', description: 'A menu designed around your theme, palette, and guests’ tastes.' },
  { title: 'Grazing & Dessert Styling', description: 'Photogenic tables styled with boards, stands, florals, and props.' },
  { title: 'Light, Elegant Bites', description: 'Refined canapés and afternoon-tea fare that feels celebratory but effortless.' },
  { title: 'Mocktail Bar', description: 'A non-alcoholic drinks station with fresh mocktails and infusions.' },
  { title: 'Tableware & Linens', description: 'Soft, considered tableware and linens to complete the look.' },
  { title: 'Gentle Service Staff', description: 'Discreet, warm hosts who keep the table replenished throughout.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early to style, and leave your space spotless.' },
  { title: 'Dietary Care', description: 'Vegetarian, vegan, halal, and allergy-friendly options handled with care.' },
]

const useCases = [
  {
    title: 'Intimate Home Showers',
    description: 'A grazing table in the living room, a dessert display by the window, and mocktails for everyone. We bring a polished, magazine-worthy spread to your home without taking over your kitchen.',
  },
  {
    title: 'Garden & Villa Celebrations',
    description: 'Soft pastels against greenery make for unforgettable baby showers. We style outdoor grazing tables and afternoon-tea setups across villas and gardens throughout Dubai.',
  },
  {
    title: 'Gender Reveals',
    description: 'Coordinate the menu, desserts, and drinks around your reveal colour. Pink-and-blue dessert tables and themed canapés add a playful, photogenic touch to the moment.',
  },
  {
    title: 'Elegant Afternoon Gatherings',
    description: 'For a calmer, refined celebration, our afternoon-tea format brings finger sandwiches, scones, and petit fours together in a timeless, graceful spread.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Baby shower catering setup in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Canapé selection for a baby shower' },
  { src: '/menu-dessert.webp', alt: 'Dessert table for a baby shower' },
  { src: '/menu-canapes.webp', alt: 'Afternoon tea bites for a shower' },
  { src: '/menu-dessert.webp', alt: 'Themed baby shower sweets' },
  { src: '/service-events.webp', alt: 'Elegant grazing table styling' },
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
    q: 'What food works best for a baby shower?',
    a: 'Light, elegant fare tends to suit baby showers best — grazing tables, delicate canapés, afternoon-tea bites, and a beautiful dessert display. We keep portions easy to enjoy while guests mingle and celebrate.',
  },
  {
    q: 'Can you match the menu to our theme or colour palette?',
    a: 'Yes. We style grazing and dessert tables to match your palette, whether that is soft pastels, florals, neutral tones, or a gender-reveal colour scheme. Themed sweets and presentation are part of the service.',
  },
  {
    q: 'Do you serve alcohol-free drinks?',
    a: 'Absolutely. We design a dedicated mocktail bar with fresh mocktails, fruit coolers, and infused waters. Everything is celebratory and alcohol-free, with soft drink and tea or coffee options available too.',
  },
  {
    q: 'How many guests do you cater for at a baby shower?',
    a: 'we coordinate catering intimate showers of around 10 guests up to larger gatherings of 50 or more. Grazing tables and dessert displays scale beautifully, and we advise on quantities based on your guest list.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We routinely provide vegetarian, vegan, halal, gluten-free, and allergy-friendly options. Just share any requirements when planning and we will build them into the menu seamlessly.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'For most baby showers, one to two weeks is ideal. For larger or heavily themed events, we recommend two to three weeks. During peak season (November to March), earlier booking is advised.',
  },
  { q: "How much does baby shower catering in Dubai cost?", a: "Baby shower catering in Dubai is priced by custom quote, because the cost depends on your guest count, the format you choose (grazing table, canapes, afternoon tea, or dessert display), and how much styling you want. Share your date, guest number, and theme and we'll send a clear, itemised proposal, usually within 15 minutes during business hours. All quotes include 5% VAT so there are no surprises later. For a fuller breakdown you can also read our [private chef prices guide](/private-chef-prices-dubai)." },
  { q: "What exactly is included in the price?", a: "Every baby shower package includes menu design, ingredient sourcing and shopping, on-site cooking or assembly, styling and plating, and full cleanup afterwards. In other words, we handle the whole spread from start to finish so the hosts can enjoy the day. Serving staff can be added when you want a fully hosted table, and that's noted separately in your quote." },
  { q: "Is there a minimum spend or minimum guest count?", a: "We cater baby showers of almost any size, from an intimate gathering of around ten guests to larger celebrations of fifty or more. There's no rigid one-size rule; instead we build the menu and quantities around your actual guest list so nothing is wasted. Just tell us your numbers and we'll advise on the right format and portions." },
  { q: "Do you cook fresh on-site or deliver the food?", a: "For most baby showers we arrive early, style the grazing and dessert tables in your space, and prepare fresh where the menu calls for it. Some elegant cold items and dessert displays are beautifully assembled on-site rather than cooked, which keeps everything looking pristine for photos. Either way, our team sets up, replenishes, and cleans up so your kitchen stays untouched." },
  { q: "Are your chefs and kitchens food-safety licensed?", a: "Yes. Our chefs and kitchens operate to Dubai Municipality food-safety standards, and food is handled, transported, and stored with proper hygiene throughout. This matters especially at a baby shower, where you often have expecting mums and young children as guests. You can read more about how we work on our [about page](/about)." },
  { q: "Is the food halal?", a: "Yes, our baby shower menus are halal sourced by default, which suits the vast majority of gatherings in Dubai. If you have specific requirements beyond that, just mention them when we plan and we'll confirm every item. Non-halal is not something we offer as standard." },
  { q: "How do I book, and how quickly will I hear back?", a: "You can book by sending an inquiry with your date, guest count, and theme, and we typically reply within 15 minutes during business hours. From there we confirm the menu, styling, and quote, and lock in your date. Start your request on our [contact page](/contact) and we'll take it from there." },
  { q: "Can you provide serving staff and hosts for the shower?", a: "Yes, serving staff are an optional add-on for baby showers. A discreet host can keep the grazing and dessert tables replenished, top up mocktails, and clear away throughout, so the mum-to-be and guests never have to lift a finger. If you'd prefer a simpler drop-and-style setup, that works too, and we'll price accordingly." },
  { q: "Can you provide the baby shower cake and dessert table too?", a: "Yes, we design statement dessert tables with cakes, macarons, tarts, cupcakes, and themed sweets styled around your colour scheme. Whether you want a subtle pastel display or a bold gender-reveal centrepiece, the desserts are coordinated with the rest of the spread. It's part of our wider [dessert table catering](/dessert-table-catering-dubai) service." },
  { q: "Can you cater a gender reveal as part of the shower?", a: "Absolutely. We coordinate the desserts, canapes, and mocktails around your reveal colour, from pink-and-blue dessert tables to a cake with a coloured centre. We keep everything photogenic and timed so the reveal moment lands beautifully. Just share your plan and we'll build the menu around it." },
  { q: "Do you cater baby showers in villas, apartments, and gardens?", a: "Yes, we cater baby showers across homes, villas, gardens, and apartments throughout Dubai, and we style each space to suit. Garden and villa showers work wonderfully with outdoor grazing tables, while apartments and living rooms suit a compact dessert-and-mocktail display. Tell us your venue and we'll plan a setup that fits the space and flow." },
  { q: "Do you handle the setup and styling, or just drop off the food?", a: "We handle the full setup and styling as standard, arriving early to build your grazing boards, dessert stands, mocktail station, florals, and props. The goal is a magazine-worthy spread that's ready before your first guest arrives. After the celebration we pack down and leave your space spotless." },
  { q: "How far in advance should I book during peak season?", a: "During Dubai's peak season from November to March, we recommend booking two to three weeks ahead, as dates fill quickly for showers and celebrations. Outside peak season, one to two weeks is usually comfortable for most baby showers. If your date is close, still reach out, we'll always try to accommodate." },
  { q: "Can baby shower catering be combined with other party services?", a: "Yes, many clients pair a baby shower with a wider celebration or upgrade to a fuller spread. Baby showers sit within our broader [party catering](/party-catering-dubai) offering, so it's easy to scale up to a bigger event or add a live station, canapes, or a grazing table. Just tell us the vibe you want and we'll shape one seamless menu." },
  { q: "What makes myCHEF different from booking a venue package for a baby shower?", a: "We come to your chosen space and build the entire experience around you, rather than fitting your celebration into a fixed venue slot and menu. That means your theme, palette, guest list, and dietary needs shape everything, from the grazing table to the mocktail bar. You get a private, personal shower at home with full-service catering and cleanup handled by our team." },
]

const relatedServices = [
  {
    title: 'Party Catering',
    description: 'The hub for birthdays, showers, and private celebrations across Dubai.',
    image: '/service-events.webp',
    link: '/party-catering-dubai',
  },
  {
    title: 'Luxury Catering',
    description: 'Bespoke menus and full service for events of every size in Dubai.',
    image: '/menu-canapes.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Refined, chef-led dining experiences for intimate special occasions.',
    image: '/menu-dessert.webp',
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
  name: 'Baby Shower Catering Dubai',
  serviceType: 'Baby Shower Catering Service',
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
    { '@type': 'ListItem', position: 2, name: 'Baby Shower Catering Dubai', item: 'https://www.mychef.ae/baby-shower-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Baby Shower quote in Dubai. Date: __ Guests: __ Area: __"
export default function BabyShowerCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Hero
    gsap.to('.bsc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bsc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bsc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    // Format cards
    gsap.to('.bsc-fmt-card', {
      scrollTrigger: { trigger: '.bsc-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // Use cases
    gsap.to('.bsc-uc-item', {
      scrollTrigger: { trigger: '.bsc-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    // Included items
    gsap.to('.bsc-inc-item', {
      scrollTrigger: { trigger: '.bsc-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    // Gallery
    gsap.to('.bsc-gallery-img', {
      scrollTrigger: { trigger: '.bsc-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    // FAQ
    gsap.to('.bsc-faq-item', {
      scrollTrigger: { trigger: '.bsc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    // Locations
    gsap.to('.bsc-loc-item', {
      scrollTrigger: { trigger: '.bsc-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    // Related
    gsap.to('.bsc-rel-card', {
      scrollTrigger: { trigger: '.bsc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // CTA
    gsap.to('.bsc-cta', {
      scrollTrigger: { trigger: '.bsc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Baby Shower Catering Dubai | Grazing Tables, Tea & Mocktails | myCHEF"
        description="Book baby shower catering in Dubai. Grazing tables, afternoon tea, canapés, dessert displays and mocktails styled to your theme. Get a quote in 15 minutes."
        canonicalPath="/baby-shower-catering-dubai"
        ogImage="/menu-dessert.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/celebration-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bsc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/party-catering-dubai" className="text-gray-400 hover:text-gold transition-colors">Party Catering</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Baby Shower</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bsc-hero-h1">
            Baby Shower Catering Dubai: Grazing Tables, Tea & Mocktails
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bsc-hero-sub">
            Elegant grazing tables, delicate canapés, afternoon-tea menus, dessert displays, and fresh mocktails — beautifully styled to your theme for a baby shower to remember.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=baby-shower-catering-dubai" className="btn-primary opacity-0 translate-y-4 bsc-hero-cta">Plan My Baby Shower</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bsc-hero-cta"
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
            CELEBRATING NEW BEGINNINGS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Gentle, Beautiful Spread for Your Shower
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A baby shower is a soft, joyful kind of celebration — and the food should feel the same way. At myCHEF Dubai, we specialise in light, elegant catering that looks as lovely as it tastes: abundant grazing tables, delicate canapés, afternoon-tea bites, and dessert displays styled around your colours and theme.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Everything is alcohol-free by default, with a fresh mocktail bar designed to feel celebratory and special. Chefs in our network handle the styling, the service, and the cleanup, so the mum-to-be and her guests can simply relax and enjoy the moment. Baby shower catering is part of our wider <Link to="/party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">party catering in Dubai</Link>, pairs beautifully with our <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering service</Link>, and matches perfectly with a styled <Link to="/grazing-table-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">grazing table</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats Grid ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HOW WE STYLE IT
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Baby Shower Catering Formats
            </h2>
          </div>

          <div className="bsc-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showerFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="bsc-fmt-card bg-charcoal p-8 opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
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
              EVERY KIND OF SHOWER
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Showers we coordinate catering for
            </h2>
          </div>

          <div className="bsc-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bsc-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Baby Shower Catering Includes
          </h2>

          <div className="bsc-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bsc-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            Styled to Celebrate
          </h2>

          <div className="bsc-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bsc-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Baby Shower Catering Questions
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Baby Shower Catering Across Dubai
          </h2>

          <div className="bsc-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bsc-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="bsc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bsc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center bsc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan a Beautiful Baby Shower
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your theme, palette, and guest count, and we'll craft a grazing, dessert, and mocktail experience to match.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=baby-shower-catering-dubai" className="btn-primary">Plan My Baby Shower</Link>
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
