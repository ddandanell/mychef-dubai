import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { breadcrumbSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/gallery)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
]

const filters = ['All', 'Weddings', 'Yachts', 'Villas', 'Corporate', 'Cuisine']

const galleryItems = [
  {
    image: '/images/wedding-catering-dubai-hero.webp',
    title: 'Elegant Wedding Reception',
    category: 'Weddings',
    aspect: 'aspect-[4/5]',
  },
  {
    image: '/images/engagement-catering-dubai-hero.webp',
    title: 'Engagement Celebration',
    category: 'Weddings',
    aspect: 'aspect-[3/4]',
  },
  {
    image: '/images/romantic-dinner-dubai-hero.webp',
    title: 'Romantic Dinner Setup',
    category: 'Weddings',
    aspect: 'aspect-square',
  },
  {
    image: '/images/yacht-catering-dubai-hero.webp',
    title: 'Yacht Sunset Dinner',
    category: 'Yachts',
    aspect: 'aspect-[4/3]',
  },
  {
    image: '/service-yacht.webp',
    title: 'Private Yacht Charter Catering',
    category: 'Yachts',
    aspect: 'aspect-[3/4]',
  },
  {
    image: '/testimonial-yacht.webp',
    title: 'Yacht Party Service',
    category: 'Yachts',
    aspect: 'aspect-[4/5]',
  },
  {
    image: '/images/villa-catering-dubai-hero.webp',
    title: 'Villa Garden Dinner',
    category: 'Villas',
    aspect: 'aspect-[4/5]',
  },
  {
    image: '/service-villa.webp',
    title: 'Luxury Villa Catering',
    category: 'Villas',
    aspect: 'aspect-[4/3]',
  },
  {
    image: '/testimonial-villa.webp',
    title: 'Villa Private Dining',
    category: 'Villas',
    aspect: 'aspect-square',
  },
  {
    image: '/images/luxury-dining-dubai-hero.webp',
    title: 'Luxury Dining Experience',
    category: 'Villas',
    aspect: 'aspect-[3/4]',
  },
  {
    image: '/images/corporate-catering-dubai-hero.webp',
    title: 'Corporate Event Catering',
    category: 'Corporate',
    aspect: 'aspect-[4/3]',
  },
  {
    image: '/service-corporate.webp',
    title: 'Business Lunch Service',
    category: 'Corporate',
    aspect: 'aspect-square',
  },
  {
    image: '/testimonial-corporate.webp',
    title: 'Corporate Gala Dinner',
    category: 'Corporate',
    aspect: 'aspect-[4/5]',
  },
  {
    image: '/images/office-catering-dubai-hero.webp',
    title: 'Office Catering Setup',
    category: 'Corporate',
    aspect: 'aspect-[3/4]',
  },
  {
    image: '/menu-appetizer.webp',
    title: 'Truffle & Burrata Tartlet',
    category: 'Cuisine',
    aspect: 'aspect-square',
  },
  {
    image: '/menu-seafood.webp',
    title: 'Pan-Seared Sea Bass',
    category: 'Cuisine',
    aspect: 'aspect-[4/5]',
  },
  {
    image: '/menu-meat.webp',
    title: 'Wagyu Beef Tenderloin',
    category: 'Cuisine',
    aspect: 'aspect-[3/4]',
  },
  {
    image: '/menu-dessert.webp',
    title: 'Dark Chocolate Fondant',
    category: 'Cuisine',
    aspect: 'aspect-square',
  },
  {
    image: '/menu-canapes.webp',
    title: 'Smoked Salmon Canapes',
    category: 'Cuisine',
    aspect: 'aspect-[4/3]',
  },
  {
    image: '/menu-cocktails.webp',
    title: 'Signature Cocktail Pairing',
    category: 'Cuisine',
    aspect: 'aspect-[3/4]',
  },
  {
    image: '/images/mediterranean-catering-dubai-hero.webp',
    title: 'Mediterranean Feast',
    category: 'Cuisine',
    aspect: 'aspect-[4/5]',
  },
  {
    image: '/images/arabic-catering-dubai-hero.webp',
    title: 'Arabic Cuisine Spread',
    category: 'Cuisine',
    aspect: 'aspect-square',
  },
  {
    image: '/images/asian-catering-dubai-hero.webp',
    title: 'Asian Fusion Menu',
    category: 'Cuisine',
    aspect: 'aspect-[4/3]',
  },
]

function altFor(item: typeof galleryItems[number]) {
  const suffix = item.category === 'Cuisine' ? 'private chef dubai' : 'luxury catering dubai'
  return `${item.title} — ${suffix}`
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const galleryRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (introRef.current) {
        gsap.fromTo(
          introRef.current.querySelectorAll('.reveal'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: introRef.current, start: 'top 80%' },
          }
        )
      }

      if (galleryRef.current) {
        const cards = galleryRef.current.querySelectorAll('.gallery-card')
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: galleryRef.current, start: 'top 80%' },
          }
        )
      }

      if (ctaRef.current) {
        const children = ctaRef.current.querySelector('.cta-content')?.children
        if (children) {
          gsap.fromTo(
            children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.15,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
            }
          )
        }
      }
    })

    return () => ctx.revert()
  }, [])

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    requestAnimationFrame(() => {
      if (galleryRef.current) {
        const cards = galleryRef.current.querySelectorAll('.gallery-card')
        gsap.fromTo(
          cards,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, stagger: 0.05, duration: 0.4, ease: 'power3.out' }
        )
      }
    })
  }

  return (
    <>
      <SEO
        title="Event Gallery | myCHEF Dubai | Private Chef & Catering"
        description="Explore our portfolio of luxury private chef and catering events across Dubai. Villa dinners, yacht parties, weddings, and corporate events."
        canonicalPath="/gallery"
        ogImage="/images/events-catering-dubai-hero.webp"
        schema={breadcrumbSchema(breadcrumbs) as unknown as Record<string, unknown>}
      />

      <PageHero
        eyebrow="PORTFOLIO"
        title={<>Event Gallery</>}
        subtitle="A curated look at the private dinners, yacht celebrations, villa events, and corporate experiences we bring to life across Dubai."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
        minHeight="medium"
        overlay="dark"
        image="/images/events-catering-dubai-hero.webp"
        imageAlt="Luxury event gallery — private chef dubai"
      />

      {/* Intro */}
      <section ref={introRef} className="bg-black section-padding">
        <div className="container-custom text-center max-w-3xl">
          <span className="reveal font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
            INSPIRATION FOR EVERY OCCASION
          </span>
          <h2 className="reveal font-playfair text-h2 text-white mb-6">
            Where Culinary Art Meets Distinguished Dubai Venues
          </h2>
          <p className="reveal font-inter text-body text-gray-400">
            Browse moments from real myCHEF events. Each image reflects our commitment to exquisite
            presentation, bespoke menus, and flawless service — whether on a yacht, in a villa, or at a
            corporate gathering.
          </p>
        </div>
      </section>

      {/* Filterable Gallery */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`font-inter text-caption font-medium uppercase tracking-wider pb-2 transition-colors duration-200 whitespace-nowrap ${
                  activeFilter === filter
                    ? 'text-white border-b-2 border-gold'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Gallery */}
          <div
            ref={galleryRef}
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredItems.map((item) => (
              <div key={item.title} className="gallery-card break-inside-avoid group cursor-pointer">
                <div className={`relative ${item.aspect} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={altFor(item)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-2">
                      {item.category}
                    </span>
                    <h4 className="font-playfair text-h4 text-white mb-4">
                      {item.title}
                    </h4>
                    <span className="font-inter text-xs text-gold uppercase tracking-wider">
                      View Inspiration
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        ref={ctaRef}
        className="relative py-28 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
      >
        <div className="container-custom text-center">
          <div className="cta-content">
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-playfair text-h2 md:text-[48px] text-white mb-6">
              Ready to Create Your Own<br />
              <span className="text-gold">Unforgettable Event?</span>
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto mb-10">
              Tell us your vision and we will design a bespoke culinary experience tailored to your venue and guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=gallery"
                className="btn-primary"
              >
                Request a Proposal
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
