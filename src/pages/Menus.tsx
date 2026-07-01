import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ChevronRight, Wine, GlassWater, Users } from 'lucide-react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { breadcrumbSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

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
    title: 'Wine Pairing',
    description: 'Expertly curated wine selections to complement each course. From Old World classics to emerging New World gems.',
  },
  {
    icon: GlassWater,
    title: 'Signature Cocktails',
    description: 'Bespoke cocktail menus crafted by our mixologist. Welcome drinks, palate cleansers, and after-dinner libations.',
  },
  {
    icon: Users,
    title: 'Service Staff',
    description: 'Professional waitstaff, bartenders, and hosts to ensure seamless service throughout your event.',
  },
]

const pricingTiers = [
  {
    name: 'Private Chef Experience',
    price: '950',
    features: [
      'Multi-course bespoke menu designed around your preferences',
      'Private chef and dedicated service staff',
      'Premium ingredients and elegant plating',
      'Ideal for intimate dinners, villas, and celebrations',
    ],
  },
  {
    name: 'Canapes & Cocktails',
    price: '280',
    features: [
      'Curated selection of hand-passed canapés',
      'Welcome cocktails and palate cleansers',
      'Professional service staff included',
      'Perfect for receptions and networking events',
    ],
  },
  {
    name: 'Buffet & Family Style',
    price: '220',
    features: [
      'Generous shared dishes and live stations',
      'Hot and cold options to suit all tastes',
      'Flexible menu design and dietary coverage',
      'Great for larger gatherings and celebrations',
    ],
  },
  {
    name: 'BBQ & Live Stations',
    price: '260',
    features: [
      'Grilled meats, seafood, and vegetable stations',
      'Live chef cooking and interactive service',
      'Sides, salads, and condiments included',
      'Ideal for poolside, garden, and villa events',
    ],
  },
]

const pricingFaqs = [
  {
    q: 'How much does a private chef cost in Dubai?',
    a: 'Private chef experiences in Dubai typically start from AED 950 per person for a bespoke multi-course menu. Final pricing depends on guest count, menu complexity, ingredient selection, and service level.',
  },
  {
    q: 'Is there a minimum guest count?',
    a: 'We cater events of almost any size, from intimate dinners for two to large celebrations. Smaller groups may have a higher per-person rate due to dedicated staff and preparation time.',
  },
  {
    q: 'Can we customize the menu?',
    a: 'Absolutely. Every menu is designed from scratch based on your preferences, dietary requirements, and event style. Our chefs collaborate with you to create a menu that fits your vision.',
  },
]

export default function Menus() {
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
        title="Menus & Cuisine | myCHEF Dubai | Private Chef Menu Inspiration"
        description="Explore bespoke menu options from myCHEF Dubai. Fine dining, Mediterranean, Middle Eastern, Asian fusion, and more. Every menu is custom-designed for your event."
        canonicalPath="/menus"
        schema={breadcrumbSchema(breadcrumbs) as unknown as Record<string, unknown>}
      />

      {/* Section 1: Page Hero */}
      <PageHero
        eyebrow="CULINARY OFFERINGS"
        title={<>Bespoke Menus,<br className="hidden sm:block" /> Crafted for Every Palate</>}
        subtitle="Every menu is designed from scratch. Here is a glimpse of what we create."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Menus' }]}
        minHeight="medium"
        overlay="dark"
      />

      {/* Section 2: Transparent Pricing */}
      <section ref={pricingRef} className="bg-cream section-padding">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
              PRICING & PACKAGES
            </span>
            <h2 className="font-playfair text-h2 text-black mb-4">Transparent Pricing</h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto">
              Clear starting prices for our most popular private chef and catering formats. Every quote is tailored to your event.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="pricing-card bg-white p-8 border border-gray-200 flex flex-col"
              >
                <h3 className="font-playfair text-h4 text-black mb-2">{tier.name}</h3>
                <div className="mb-5">
                  <span className="font-inter text-caption text-gray-500 uppercase tracking-wider">from</span>
                  <p className="font-playfair text-3xl text-gold">
                    AED {tier.price}
                    <span className="font-inter text-sm text-gray-500 ml-1">/ person</span>
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
                  to="/inquiry?utm_source=mychef.ae&utm_medium=pricing_card&utm_campaign=menus"
                  className="btn-primary text-center w-full"
                >
                  Request Custom Quote
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
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
            <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
              A TASTE OF WHAT WE CREATE
            </span>
            <h2 className="font-playfair text-h2 text-white mb-4">Sample Evening Menu</h2>
            <p className="font-inter text-body text-gray-400">
              This is an example of a multi-course private dining experience. Every menu is fully customized.
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
            This is a sample menu for inspiration only. Every menu we create is bespoke.
          </p>
          <div className="text-center">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=menus" className="btn-primary">
              Request Your Custom Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Dietary Accommodations */}
      <section ref={dietaryRef} className="bg-cream py-20">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Every Dietary Need, Expertly Handled
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
            Have specific requirements? We accommodate all dietary needs without compromising on flavor or presentation.
          </p>
        </div>
      </section>

      {/* Section 5: Pairings & Add-Ons */}
      <section ref={pairingsRef} className="bg-black py-20">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
              ELEVATE YOUR EXPERIENCE
            </span>
            <h2 className="font-playfair text-fluid-h2 text-white">Wine, Cocktails & Service</h2>
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
            Pricing FAQ
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
              Your Perfect<br />
              <span className="text-gold">Menu Awaits</span>
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto mb-10">
              Tell us your vision. We will design a menu that exceeds every expectation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=menus" className="btn-primary">
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
