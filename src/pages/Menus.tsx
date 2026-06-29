import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Wine, GlassWater, Users } from 'lucide-react'
import SEO from '@/components/SEO'
import { breadcrumbSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971500000000'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Menus', path: '/menus' },
]

const filters = ['All', 'European', 'Mediterranean', 'Middle Eastern', 'Asian', 'Seafood', 'Desserts']

const menuItems = [
  { image: '/menu-appetizer.jpg', name: 'Truffle & Burrata Tartlet', cuisine: 'European' },
  { image: '/menu-seafood.jpg', name: 'Pan-Seared Sea Bass', cuisine: 'Seafood' },
  { image: '/menu-meat.jpg', name: 'Wagyu Beef Tenderloin', cuisine: 'European' },
  { image: '/menu-dessert.jpg', name: 'Dark Chocolate Fondant', cuisine: 'Desserts' },
  { image: '/menu-cocktails.jpg', name: 'Signature Cocktail Pairing', cuisine: 'European' },
  { image: '/menu-canapes.jpg', name: 'Smoked Salmon Canapes', cuisine: 'European' },
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

export default function Menus() {
  const [activeFilter, setActiveFilter] = useState('All')
  const heroRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const sampleRef = useRef<HTMLDivElement>(null)
  const dietaryRef = useRef<HTMLDivElement>(null)
  const pairingsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const filteredItems = activeFilter === 'All'
    ? menuItems
    : menuItems.filter((item) => item.cuisine === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title word stagger
      if (heroTitleRef.current) {
        const words = heroTitleRef.current.querySelectorAll('.word')
        gsap.fromTo(words,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        )
      }

      // Hero subtitle
      if (heroSubRef.current) {
        gsap.fromTo(heroSubRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power3.out' }
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

      {/* Breadcrumb Navigation */}
      <div className="bg-black border-b border-charcoal-light">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 font-inter text-caption text-gray-500">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gold">Menus</span>
          </nav>
        </div>
      </div>

      {/* Section 1: Page Hero */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center bg-black">
        <div className="container-custom text-center py-20">
          <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
            CULINARY OFFERINGS
          </span>
          <h1
            ref={heroTitleRef}
            className="font-playfair text-h1 md:text-[56px] text-white mb-6"
          >
            <span className="word inline-block">Bespoke</span>{' '}
            <span className="word inline-block">Menus,</span>
            <br className="hidden sm:block" />
            <span className="word inline-block">Crafted</span>{' '}
            <span className="word inline-block">for</span>{' '}
            <span className="word inline-block">Every</span>{' '}
            <span className="word inline-block">Palate</span>
          </h1>
          <p ref={heroSubRef} className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto">
            Every menu is designed from scratch. Here is a glimpse of what we create.
          </p>
        </div>
      </section>

      {/* Section 2: Cuisine Categories - Filterable Gallery */}
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
                    loading="lazy"
                  />
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
            <Link to="/inquiry" className="btn-primary">
              Request Your Custom Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Dietary Accommodations */}
      <section ref={dietaryRef} className="bg-cream py-20">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
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
            <h2 className="font-playfair text-[36px] text-white">Wine, Cocktails & Service</h2>
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
