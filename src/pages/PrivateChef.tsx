import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Utensils, Home, Calendar, Baby, Leaf, Star, Check, Phone, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import LocationStrip from '../components/LocationStrip'
import TrustSignalStrip from '../components/TrustSignalStrip'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
import FaqAccordion from '../components/FaqAccordion'
import { plainFaqAnswer } from '../utils/schema'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote for a private chef (via mychef.ae/private-chef-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const featureChecks = [
  'Fully bespoke menu design',
  'Premium ingredient sourcing',
  'Complete in-home preparation',
  'Service staff included',
  'Full cleanup after service',
  'Available across all Dubai locations',
]

const serviceTypes = [
  {
    icon: Utensils,
    title: 'Dinner Party Chef',
    description: 'Multi-course fine dining for dinner parties of 2\u201320 guests. Perfect for celebrations and special occasions.',
    link: '/luxury-dining-experiences',
  },
  {
    icon: Home,
    title: 'Weekly Private Chef',
    description: 'A dedicated chef for your household \u2014 daily meal preparation, menu planning, and kitchen management.',
    link: '/private-chef-dubai',
  },
  {
    icon: Calendar,
    title: 'Holiday Chef',
    description: 'Short-term private chef for your Dubai holiday. We handle every meal so you can relax.',
    link: '/christmas-catering-dubai',
  },
  {
    icon: Baby,
    title: 'Family Chef',
    description: 'Family-friendly menus that delight every age. Nutritious, delicious, and beautifully presented.',
    link: '/catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Healthy Meal Prep',
    description: 'Nutrition-focused menus designed around your health goals. Fresh, balanced, and flavourful.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: Star,
    title: 'VIP & Celebrity Chef',
    description: 'Ultra-discreet service for high-profile clients. Confidentiality is standard.',
    link: '/vip-club',
  },
]

const experienceSteps = [
  {
    num: '01',
    title: 'Menu Consultation',
    description: 'A personal consultation to understand your tastes, dietary needs, and vision for the evening.',
  },
  {
    num: '02',
    title: 'Ingredient Sourcing',
    description: 'We hand-select the best available ingredients \u2014 seafood from the market, produce from premium suppliers, specialty items imported as needed.',
  },
  {
    num: '03',
    title: 'In-Home Preparation',
    description: 'Your chef arrives with everything needed and prepares each course fresh in your kitchen.',
  },
  {
    num: '04',
    title: 'Professional Service',
    description: 'Each course is plated and served with the precision and presentation of a fine dining restaurant.',
  },
  {
    num: '05',
    title: 'Immaculate Cleanup',
    description: 'We leave your kitchen spotless \u2014 as if we were never there.',
  },
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
    q: 'How much does a private chef cost in Dubai?',
    a: 'Every event is unique, so we provide custom quotes based on your requirements. Factors include the number of guests, number of courses, ingredient preferences, and location. Contact us for a bespoke proposal.',
  },
  {
    q: 'How far in advance should I book a private chef?',
    a: 'We recommend 48 hours for most bookings. For larger events or peak seasons, 1\u20132 weeks is advised. Last-minute requests are accommodated when possible.',
  },
  {
    q: 'What cuisines can your chefs prepare?',
    a: 'our chefs specialize in European fine dining, Mediterranean, Middle Eastern, Asian fusion, seafood-focused menus, and modern international cuisine. Every menu is customized to your preferences.',
  },
  {
    q: 'Do I need special kitchen equipment?',
    a: 'No. Our chefs bring all necessary equipment. We only need access to your kitchen and basic utilities.',
  },
  {
    q: 'How long does a private chef dinner take?',
    a: 'A typical multi-course dinner service lasts 3\u20134 hours from arrival to departure. This includes preparation, service, and cleanup.',
  },
  {
    q: 'Is the service discreet?',
    a: 'Absolutely. Discretion is a core value at myCHEF Dubai. Our chefs operate with complete professionalism and confidentiality.',
  },
  {
    q: 'What is included in the price of a private chef?',
    a: 'A private chef booking is all-inclusive: menu design, grocery shopping and premium ingredients, on-site cooking, plating and table service, and a full kitchen clean-up afterwards. You provide the kitchen and the guests — the chef handles everything else. Extras like extra courses, additional servers, or equipment rentals are quoted transparently up front.',
  },
  {
    q: 'Are your private chefs licensed and food-safety certified in Dubai?',
    a: 'Yes. The chefs and kitchens on our team operate to Dubai Municipality food-safety requirements, and our vetting covers identity checks, a practical cooking assessment, reference verification and food-handler training. We match each booking to a chef suited to it, so you get verified, professional service rather than an anonymous freelancer.',
  },
  {
    q: 'Do you cook halal, and can you work in a halal kitchen?',
    a: 'Yes. We source halal ingredients by default and our chefs are experienced working in halal households and kitchens, keeping utensils and preparation separated to your standards. Just let us know your requirements when you enquire.',
  },
  {
    q: 'Can you accommodate allergies and diets like vegan, vegetarian or gluten-free?',
    a: 'Yes. Share allergies and dietary needs — vegan, vegetarian, gluten-free, dairy-free, nut-free — when you book, well before the event, and the menu is planned around them rather than adjusted at the last minute. For severe allergies we discuss cross-contact handling openly so you can host with confidence.',
  },
  {
    q: 'How many guests can a private chef cook for?',
    a: 'From an intimate dinner for two up to large celebrations of a hundred or more. Smaller dinners are typically one chef; larger events add support chefs and serving staff scaled to the guest count so the pace and quality stay consistent.',
  },
  {
    q: 'Do you provide waiters and serving staff?',
    a: 'Yes. Professional servers and hosts can be added to any booking and are recommended for plated dinners and larger events, so you stay a guest at your own table while the team manages service and clearing.',
  },
  {
    q: 'Can a private chef cook in my villa, apartment or yacht kitchen?',
    a: 'Yes — villas, apartments, penthouses and yachts across Dubai are all standard. The chef adapts to the space, whether it is a full villa kitchen or a compact galley, and confirms access and equipment details before the date.',
  },
  {
    q: 'Which areas of Dubai do you cover?',
    a: 'We serve all of Dubai, including Palm Jumeirah, Dubai Marina, Downtown, Emirates Hills, Dubai Hills, JBR, Business Bay, DIFC and Jumeirah. Full coverage is listed on our [locations page](/locations).',
  },
  {
    q: 'Do you bring the groceries, or do I need to buy the ingredients?',
    a: 'The chef handles all grocery shopping and brings the ingredients, sourced fresh — often the same day — so the menu flexes with what the market has. You do not need to prepare or buy anything.',
  },
  {
    q: 'Can I see and customise the menu before I book?',
    a: 'Yes. Nothing is fixed until you sign it off. You tell us the occasion, guest count and any preferences, and we design a bespoke menu with you; for larger events you can taste a shortlist before committing.',
  },
  {
    q: 'How do I get a quote and pay, and is a deposit required?',
    a: 'Send your date, guest count and venue and we reply with a tailored quote — typically within 15 minutes during business hours. Bookings are confirmed with a deposit and the balance settled before or on the day; a 5% VAT line applies. See typical [private chef prices](/private-chef-prices-dubai) before you enquire.',
  },
  {
    q: 'Is hiring a private chef cheaper than a restaurant for a group?',
    a: 'For a group it is often comparable or better value — you get a restaurant-quality, multi-course meal cooked to order in your own space, with no minimum spend per head, no travel, and privacy included. Our [private chef vs catering guide](/private-chef-vs-catering-dubai) breaks down when each option makes sense.',
  },
  {
    q: 'Can you provide a private chef for a birthday, anniversary or proposal?',
    a: 'Yes. Milestone dinners, romantic dinners and proposals are among the most popular bookings; the chef and optional servers handle timing, courses and the reveal so you can be fully present. Explore our [luxury dining experiences](/luxury-dining-experiences) for occasion formats.',
  },
  {
    q: 'Can I book a private chef regularly or for weekly meal prep?',
    a: 'Yes. Beyond one-off dinners, our chefs offer [weekly meal prep](/weekly-meal-prep-dubai) and part-time or full-time private chef arrangements for households that want consistent, tailored cooking. Tell us your routine and we will match a chef and cadence.',
  },
  {
    q: 'How much should I tip a private chef in Dubai?',
    a: 'Tipping is appreciated but never expected — service is included in your quote. If a chef and team exceed expectations, many hosts add 10–15%, but it is entirely at your discretion.',
  },
]

const relatedServices = [
  {
    title: 'Luxury Dining',
    description: 'Bespoke private dining experiences for romantic dinners and special occasions.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
  {
    title: 'Villa Chef',
    description: 'Dedicated private chef services for your villa stay or residence.',
    image: '/service-villa.webp',
    link: '/villas-private-residences',
  },
  {
    title: 'Tasting Menu Dubai',
    description: 'Multi-course chef’s table dining for intimate groups who want a curated culinary journey.',
    image: '/images/tasting-menu-dubai-hero.webp',
    link: '/tasting-menu-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Private Chef Dubai',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF Dubai',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  serviceType: 'Private Chef Service',
  areaServed: 'Dubai, UAE',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Private Chef Services',
    itemListElement: serviceTypes.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae' },
    { '@type': 'ListItem', position: 2, name: 'Private Chef Dubai', item: 'https://www.mychef.ae/private-chef-dubai' },
  ],
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: plainFaqAnswer(faq.a),
    },
  })),
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a private chef in Dubai. Date: __ Guests: __ Area: __"
export default function PrivateChef() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeServiceTab, setActiveServiceTab] = useState(0)

  useGSAP(() => {
    if (!containerRef.current) return

    // Hero animations

    // Explanation section
    gsap.to('.pc-exp-left', {
      scrollTrigger: { trigger: '.pc-exp-left', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
    })
    gsap.to('.pc-exp-check', {
      scrollTrigger: { trigger: '.pc-exp-checks', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    })

    // Service type cards
    gsap.to('.pc-svc-card', {
      scrollTrigger: { trigger: '.pc-svc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // Experience steps
    gsap.to('.pc-step-item', {
      scrollTrigger: { trigger: '.pc-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    // Locations
    gsap.to('.pc-loc-item', {
      scrollTrigger: { trigger: '.pc-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    // FAQ
    gsap.to('.pc-faq-item', {
      scrollTrigger: { trigger: '.pc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    // Testimonial
    gsap.to('.pc-testi', {
      scrollTrigger: { trigger: '.pc-testi', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
    })

    // Related services
    gsap.to('.pc-rel-card', {
      scrollTrigger: { trigger: '.pc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // CTA
    gsap.to('.pc-cta', {
      scrollTrigger: { trigger: '.pc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Chef Dubai | Hire a Personal Chef at Home | From AED 700pp"
        description="Hire a vetted private chef in Dubai for villas, yachts & homes. Bespoke menus, halal-first, full service. Quote in 15 minutes during business hours."
        canonicalPath="/private-chef-dubai"
        ogImage="/service-private-chef.webp"
        hideSiteName
        schema={{ ...schema, ...breadcrumbSchema, ...faqPageSchema }}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero
        title="Book a Private Chef in Dubai"
        subtitle="Tell us about your event and we will bring you a vetted private chef. We reply within 15 minutes during business hours. Fully bespoke menus, prepared in your home or villa, with service and cleanup included."
        image="/images/private-chef-dubai-hero.webp"
        imageAlt="Private chef preparing a meal in Dubai"
        cta={{ label: 'Request a Private Chef Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-chef-dubai' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Private Chef Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />
      <TrustSignalStrip />

      <StarterPackagesSection
        campaign="private-chef-dubai"
        eyebrow="START WITH A PACKAGE"
        title="Private Chef Packages in Dubai"
        subtitle="Ready-to-book starting points for our most requested private chef experiences. Final quote tailored to your event, menu, and dietary preferences."
      />

      {/* ═══════════════ Section 2: What Is a Private Chef ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="pc-exp-left opacity-0 -translate-x-8">
              <h2 className="font-playfair text-h2 text-black mb-6">
                What does a private chef do in Dubai?
              </h2>
              <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
                A private chef is a professional culinary expert who comes to your home, villa, or yacht to prepare bespoke meals exclusively for you and your guests. Unlike a restaurant experience, everything is designed around your preferences — the menu, the pacing, the atmosphere, the dietary requirements.
              </p>
              <p className="font-inter text-body text-gray-500 leading-relaxed">
                At myCHEF Dubai, our private chef service includes menu consultation, ingredient sourcing, meal preparation, professional plating, table service, and complete kitchen cleanup. You simply enjoy the evening. Tell us about your occasion and we will send a tailored proposal within 24 hours. We regularly serve clients in{' '}
                <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Downtown Dubai</Link>{' '}
                and across every major Dubai community, from relaxed family dinners to{' '}
                <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury private dining</Link>{' '}
                experiences.
              </p>
            </div>

            {/* Right Column - Feature checks */}
            <div className="pc-exp-checks flex flex-col justify-center gap-4">
              {featureChecks.map((item, i) => (
                <div key={i} className="pc-exp-check flex items-center gap-3 opacity-0 translate-x-8">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-gold" />
                  </div>
                  <span className="font-inter text-body text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Service Types with Tab Nav ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT KIND OF PRIVATE CHEF DO YOU NEED?
            </span>
            <h2 className="font-playfair text-h2 text-white">
              What private chef services are available in Dubai?
            </h2>
          </div>

          {/* Left-side tab navigation + content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab nav - left side */}
            <div className="lg:w-1/4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {serviceTypes.map((svc, i) => {
                const Icon = svc.icon
                return (
                  <button
                    key={i}
                    onClick={() => setActiveServiceTab(i)}
                    className={`flex items-center gap-3 px-4 py-3 text-left font-inter text-sm whitespace-nowrap transition-all duration-300 border-l-2 ${
                      activeServiceTab === i
                        ? 'border-gold text-gold bg-charcoal'
                        : 'border-charcoal-light text-gray-400 hover:text-white hover:border-gray-400'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="hidden lg:inline">{svc.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Active service content */}
            <div className="lg:w-3/4 pc-svc-grid">
              <div className="grid md:grid-cols-2 gap-6">
                {serviceTypes.map((svc, i) => {
                  const Icon = svc.icon
                  // Show all cards, but highlight the active one
                  const isActive = activeServiceTab === i
                  return (
                    <div
                      key={i}
                      onClick={() => setActiveServiceTab(i)}
                      className={`pc-svc-card bg-charcoal p-8 cursor-pointer transition-all duration-300 opacity-0 translate-y-12 ${
                        isActive ? 'ring-1 ring-gold' : 'hover:bg-charcoal-light'
                      }`}
                    >
                      <Icon size={40} className="text-gold mb-4" />
                      <h3 className="font-playfair text-h3 text-white mb-3">{svc.title}</h3>
                      <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                        {svc.description}
                      </p>
                      <Link
                        to={svc.link}
                        className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: The Experience ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            How does a private chef dinner work in Dubai?
          </h2>

          <div className="pc-steps space-y-10">
            {experienceSteps.map((step, i) => (
              <div key={i} className="pc-step-item flex gap-6 md:gap-8 opacity-0 translate-y-8">
                <span className="font-playfair text-[48px] text-gold leading-none flex-shrink-0 w-[60px] text-right">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-playfair text-h3 text-black mb-2">{step.title}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Locations ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHERE IN DUBAI DO YOU COVER?
            </span>
            <h2 className="font-playfair text-fluid-h2 text-white">
              Where in Dubai can I hire a private chef?
            </h2>
          </div>

          <div className="pc-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="pc-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            What should I know before hiring a private chef in Dubai?
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 7: Review Invite ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom max-w-[800px]">
          <div className="pc-testi bg-charcoal border border-charcoal-light p-8 md:p-10 opacity-0 translate-y-5 text-center">
            <h3 className="font-playfair text-h3 text-white mb-4">Love your myCHEF experience?</h3>
            <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
              Leave us a review and receive AED 50 credit toward your next private chef booking.
            </p>
            <Link to="/review" className="btn-primary">
              Leave a Review
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Which other services pair with a private chef in Dubai?
          </h3>

          <div className="pc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="pc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <StarterPackagesSection
        campaign="private-chef-dubai"
        eyebrow="HOW MUCH DOES A PRIVATE CHEF COST IN DUBAI?"
        title="How much does a private chef cost in Dubai?"
        subtitle="Transparent starting prices for private chef experiences in Dubai. Final quote tailored to your event, menu, and guest count."
      />

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Where can I learn more about hiring a private chef in Dubai?</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/private-chef-vs-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Private Chef vs Catering</Link>{' '}
            guide, see our{' '}
            <Link to="/private-chef-prices-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef prices Dubai</Link>{' '}
            breakdown, read{' '}
            <Link to="/blog/how-much-does-private-chef-cost-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how much does a private chef cost in Dubai</Link>,
            {' '}or explore{' '}
            <Link to="/blog/private-chef-palm-jumeirah-guide" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef Palm Jumeirah</Link>,
            {' '}
            <Link to="/guide/private-dining-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private dining in Dubai</Link>
            {' '}and{' '}
            <Link to="/buffet-vs-plated-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">buffet vs plated service in Dubai</Link>.
          </p>
        </div>
      </section>

      <LocationStrip title="Private chef services across Dubai" />

      {/* ═══════════════ Section 9: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center pc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book Your Private Chef Today
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your occasion and we will craft a bespoke proposal within 15 minutes during business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-chef-dubai" className="btn-primary">Request a Private Chef Quote</Link>
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
