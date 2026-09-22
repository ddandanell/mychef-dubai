// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /menus
//     primary:     "catering menus dubai"
//     subkeywords: "catering menu ideas dubai" · "sample catering menu dubai" · "family catering menus dubai" · "food catering menus dubai" · "small catering menus dubai" · "catering menu description" · "paul catering menu dubai" · "foods to cater" · "what is a good catering menu" · "finger foods to cater"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useEffect, useRef, useState } from 'react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Check, ChevronRight, Wine, GlassWater, Users } from 'lucide-react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
import { breadcrumbSchema } from '@/utils/schema'
import { SectionLabel } from '../components/system'
import {
  CATERING_FORMAT_BY_ID,
  MENU_FORMAT_IDS,
  formatFrom,
  formatTypical,
} from '@/content/cateringPricing'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/menus)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Menus', path: '/menus' },
]

const filters = ['All', 'European', 'Mediterranean', 'Middle Eastern', 'Asian', 'Seafood', 'Desserts']

const menuItems = [
  { image: '/menu-appetizer.webp', name: 'Truffle & Burrata Tartlet', cuisine: 'European' },
  { image: '/menu-seafood.webp', name: 'Pan-Seared Sea Bass', cuisine: 'Seafood' },
  { image: '/menu-meat.webp', name: 'Wagyu Beef Tenderloin', cuisine: 'European' },
  { image: '/menu-dessert.webp', name: 'Dark Chocolate Fondant', cuisine: 'Desserts' },
  { image: '/menu-cocktails.webp', name: 'Signature Cocktail Pairing', cuisine: 'European' },
  { image: '/menu-canapes.webp', name: 'Smoked Salmon Canapes', cuisine: 'European' },
]

const courses = [
  { course: 'Amuse-Bouche', dish: 'Chilled Cucumber & Yuzu Soup, Caviar Pearl' },
  { course: 'Starter', dish: 'Seared Scallop, Cauliflower Puree, Crispy Pancetta' },
  { course: 'Fish Course', dish: 'Line-Caught Sea Bass, Saffron Veloute, Baby Vegetables' },
  { course: 'Main Course', dish: '48-Hour Short Rib, Truffle Jus, Potato Mille-Feuille' },
  { course: 'Cheese', dish: 'Artisan Selection, Fig Compote, Honeycomb' },
  { course: 'Dessert', dish: 'Valrhona Chocolate Sphere, Salted Caramel, Gold Leaf' },
]

const dietaryTags = [
  'Vegetarian', 'Vegan', 'Gluten-Free', 'Halal', 'Kosher',
  'Dairy-Free', 'Nut-Free', 'Keto', 'Pescatarian', 'Low-Sodium', 'Diabetic-Friendly',
]

const pairings = [
  {
    icon: Wine,
    title: 'Wine pairing',
    description: 'Wine only where the venue is licensed or the quotation says so. Pairing notes sit on the proposal as a line, not as a default.',
  },
  {
    icon: GlassWater,
    title: 'Cocktails and mocktails',
    description: 'Mocktails as standard. Cocktails only where licensed. The bar is staff and kit, quoted with the food.',
  },
  {
    icon: Users,
    title: 'Service staff',
    description: 'Waiters, bartenders and hosts sized to headcount. Not assumed if you only want the chef.',
  },
]

const MENU_FEATURES: Record<string, string[]> = {
  'plated-chef': [
    'A multi-course menu written for the table',
    'Chef and service staff sized to the sitting',
    'Ingredients named on the quote',
    'For 2 guests and up. AED 700–950 per person',
  ],
  canapes: [
    'Hand-passed canapés, counted to the standing hour',
    'Mocktails as standard. Cocktails only where licensed',
    'Service staff as quoted',
    'From AED 150 per person, from 10 guests',
  ],
  buffet: [
    'A maintained hot and cold line',
    'Labels for diets, not a mixed unmarked tray',
    'Staff to replenish, not a waiter on every chair',
    'From AED 120 per person, from 20 guests',
  ],
  bbq: [
    'A live grill where the venue allows flame',
    'Named proteins, sides and sauces',
    'Chef at the station, waiters if you ask',
    'From AED 150 per person, from 15 guests',
  ],
}

const pricingTiers = MENU_FORMAT_IDS.map((id) => {
  const format = CATERING_FORMAT_BY_ID[id]
  return {
    id,
    name: format.calculatorLabel ?? format.label,
    from: format.fromPerPerson,
    typicalMin: format.typicalMin,
    typicalMax: format.typicalMax,
    estimate: format.calculatorEstimate,
    features: MENU_FEATURES[id] ?? [],
  }
})

const pricingFaqs = [
  {
    q: 'How are catering menus Dubai priced?',
    a: 'By format, using the same floors as the Catering hub: plated AED 700–950 per person, canapés from AED 150, buffet from AED 120, BBQ and live stations from AED 150. Packages are totals, not per-person floors. Household chef visit rates are separate.',
  },
  {
    q: 'Is there a minimum guest count?',
    a: 'Yes, by format: 2 for plated, 10 for canapés, 15 for BBQ, 20 for a standard event buffet. Below a minimum we will say so rather than stretch the format.',
  },
  {
    q: 'Can we customise the menu?',
    a: 'Yes. The sample dishes on this page are samples. The written menu follows the occasion, the guest list and the kitchen. Diets go into the first draft.',
  },
]

export default function Menus() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)
  useScrollTrigger()
  const [activeFilter, setActiveFilter] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const sampleRef = useRef<HTMLDivElement>(null)
  const dietaryRef = useRef<HTMLDivElement>(null)
  const pairingsRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const filteredItems = activeFilter === 'All'
    ? menuItems
    : menuItems.filter((item) => item.cuisine === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Pricing cards scroll reveal
      if (pricingRef.current) {
        const cards = pricingRef.current.querySelectorAll('.pricing-card')
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: pricingRef.current, start: 'top 80%' } }
        )
      }

      // Gallery cards scroll reveal
      if (galleryRef.current) {
        const cards = galleryRef.current.querySelectorAll('.menu-card')
        gsap.fromTo(cards,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: galleryRef.current, start: 'top 80%' } }
        )
      }

      // Sample menu section
      if (sampleRef.current) {
        gsap.fromTo(sampleRef.current.querySelector('.menu-container'),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: sampleRef.current, start: 'top 80%' } }
        )
        const courseEls = sampleRef.current.querySelectorAll('.course-item')
        if (courseEls.length > 0) {
          gsap.fromTo(courseEls,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, delay: 0.3, ease: 'power3.out',
              scrollTrigger: { trigger: sampleRef.current, start: 'top 80%' } }
          )
        }
      }

      // Dietary tags
      if (dietaryRef.current) {
        const tags = dietaryRef.current.querySelectorAll('.dietary-tag')
        gsap.fromTo(tags,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, stagger: 0.05, duration: 0.5, ease: 'power3.out',
            scrollTrigger: { trigger: dietaryRef.current, start: 'top 80%' } }
        )
      }

      // Pairings
      if (pairingsRef.current) {
        const items = pairingsRef.current.querySelectorAll('.pairing-item')
        gsap.fromTo(items,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: pairingsRef.current, start: 'top 80%' } }
        )
      }

      // Pricing FAQ
      if (faqRef.current) {
        const items = faqRef.current.querySelectorAll('.faq-item')
        gsap.fromTo(items,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: faqRef.current, start: 'top 80%' } }
        )
      }

      // CTA section
      if (ctaRef.current) {
        const children = ctaRef.current.querySelector('.cta-content')?.children
        if (children) {
          gsap.fromTo(children,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' } }
          )
        }
      }
    })

    return () => ctx.revert()
  }, [])

  // Handle filter change with animation
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    // Animate cards on filter change
    requestAnimationFrame(() => {
      if (galleryRef.current) {
        const cards = galleryRef.current.querySelectorAll('.menu-card')
        gsap.fromTo(cards,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, stagger: 0.06, duration: 0.4, ease: 'power3.out' }
        )
      }
    })
  }

  return (
    <>
      <SEO
        title="Catering Menus Dubai | myCHEF"
        description="Catering Menus Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table."
        canonicalPath="/menus"
        ogImage="/images/catering-dubai-hero.webp"
        schema={breadcrumbSchema(breadcrumbs) as unknown as Record<string, unknown>}
      />

      {/* Section 1: Page Hero */}
      <PageHero
        eyebrow="CULINARY OFFERINGS"
        title="Catering Menus Dubai"
        subtitle={"Explore catering menus in Dubai, from private dinners to larger celebrations. These sample menus are a starting point: we tailor the dishes, chef and service to your occasion, guests and venue."}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Menus' }]}
        minHeight="medium"
        overlay="dark"
      />

      <TrustSignalStrip />

      {/* Section 2: Starter Packages */}
      <StarterPackagesSection campaign="menus" />

      {/* Section 3: Service Format Pricing */}
      <section ref={pricingRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">PER-PERSON STARTING RATES</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mb-4">Starts by format, same as the hub</h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto">
              Starts match the Catering hub floors. Indicative market bands on the prices guide are not myCHEF starts. Household chef visit rates stay on the private chef pricing page.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="pricing-card bg-cream p-8 border border-gray-200 flex flex-col"
              >
                <h3 className="font-playfair text-h4 text-black mb-2">{tier.name}</h3>
                <div className="mb-5">
                  <span className="font-inter text-caption text-gray-500 uppercase tracking-wider">from</span>
                  <p className="font-playfair text-3xl text-gold">
                    AED {tier.from}
                    <span className="font-inter text-sm text-gray-500 ml-1">/ person</span>
                  </p>
                  <p className="mt-2 font-inter text-body-xs text-gray-500 leading-relaxed">
                    {formatFrom(tier.from)}. {formatTypical(tier.typicalMin, tier.typicalMax)} (indicative market, not the myCHEF floor).
                  </p>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 font-inter text-body-sm text-gray-500">
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/inquiry"
                  className="btn-primary text-center w-full"
                >
                  Request Custom Quote
                </Link>
              </div>
            ))}
          </div>

          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[700px] mx-auto">
            Final quotes depend on guest count, menu complexity, service level, and location.
          </p>
        </div>
      </section>

      {/* Section 3: Cuisine Categories - Filterable Gallery */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`font-inter text-caption font-medium uppercase tracking-wider pb-2 transition-colors duration-200 whitespace-nowrap ${
                  activeFilter === filter
                    ? 'text-black border-b-2 border-gold'
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.name} className="menu-card group cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-2">
                      {item.cuisine}
                    </span>
                    <h4 className="font-playfair text-h4 text-white mb-4 px-4 text-center">
                      {item.name}
                    </h4>
                    <span className="font-inter text-xs text-gold uppercase tracking-wider">
                      View Inspiration
                    </span>
                  </div>
                </div>
                <p className="font-inter text-body-sm text-black mt-3 px-1">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Sample Menu Experience */}
      <section ref={sampleRef} className="bg-charcoal section-padding">
        <div className="container-custom max-w-[1000px]">
          {/* Section Header */}
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">SAMPLE, NOT A FIXED LIST</SectionLabel>
            <h2 className="font-playfair text-h2 text-white mb-4">A sample evening, not a printed list</h2>
            <p className="font-inter text-body text-gray-400">
              One plated evening, written as an example. Your menu is rewritten for the occasion, the guest list and the kitchen.
            </p>
          </div>

          {/* Menu Display */}
          <div
            className="menu-container border p-8 md:p-12 text-center"
            style={{ borderColor: 'rgba(200,164,92,0.2)' }}
          >
            {courses.map((course, index) => (
              <div key={course.course} className="course-item">
                {index > 0 && (
                  <div className="gold-line mx-auto my-6" />
                )}
                <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold block mb-2">
                  {course.course}
                </span>
                <p className="font-playfair text-xl text-white mb-1">{course.dish}</p>
              </div>
            ))}
          </div>

          {/* Note + CTA */}
          <p className="font-inter text-body-sm text-gray-400 italic text-center mt-8 mb-8">
            Sample only. The dishes you confirm are the ones on the proposal.
          </p>
          <div className="text-center">
            <Link to="/inquiry" className="btn-primary">
              Request Your Custom Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Dietary Accommodations */}
      <section ref={dietaryRef} className="bg-cream py-20">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Diets go on the first draft
          </h2>

          {/* Dietary Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {dietaryTags.map((tag) => (
              <span
                key={tag}
                className="dietary-tag inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 font-inter text-body-sm text-black"
              >
                <Check size={16} className="text-gold flex-shrink-0" />
                {tag}
              </span>
            ))}
          </div>

          <p className="font-inter text-body text-gray-500 text-center max-w-[700px] mx-auto">
            Named diets, including halal by default, sit on the menu as dishes. This is not a medical allergen-free claim.
          </p>
        </div>
      </section>

      {/* Section 5: Pairings & Add-Ons */}
      <section ref={pairingsRef} className="bg-black py-20">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">DRINKS AND STAFF</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-white">Wine, cocktails and waiters, quoted as lines</h2>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pairings.map(({ icon: Icon, title, description }) => (
              <div key={title} className="pairing-item text-center">
                <div className="flex justify-center mb-6">
                  <Icon size={48} className="text-gold" />
                </div>
                <h4 className="font-playfair text-h4 text-white mb-3">{title}</h4>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Pricing FAQ */}
      <section ref={faqRef} className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Catering Menus Dubai: the questions we get before a booking
          </h2>

          <div className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="faq-item border border-gray-200">
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

      {/* Section 6: CTA Banner */}
      <section
        ref={ctaRef}
        className="relative py-28 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
      >
        <div className="container-custom text-center">
          <div className="cta-content">
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-playfair text-h2 md:text-[48px] text-white mb-6">
              Send the occasion<br />
              <span className="text-gold">and the guest list</span>
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto mb-10">
              We rewrite the sample into a menu for that table and send an itemised quote. We typically reply within 15 minutes during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry" className="btn-primary">
                Request My Custom Quote
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
