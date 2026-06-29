import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const locations = [
  { image: '/loc-palm-jumeirah.jpg', name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { image: '/loc-downtown.jpg', name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { image: '/loc-dubai-marina.jpg', name: 'Dubai Marina', slug: 'dubai-marina' },
  { image: '/loc-emirates-hills.jpg', name: 'Emirates Hills', slug: 'emirates-hills' },
  { image: '/loc-jbr.jpg', name: 'Jumeirah Beach Residence', slug: 'jumeirah-beach-residence' },
  { image: '/loc-difc.jpg', name: 'DIFC', slug: 'difc' },
]

export default function LocationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.location-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-black section-padding">
      <div className="container-custom">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold">
            Across Dubai
          </span>
          <h2 className="font-playfair text-h2 text-white mt-4 mb-4">
            We Serve Every Corner of Dubai
          </h2>
          <p className="font-inter text-lg text-gray-400 max-w-2xl mx-auto">
            From Palm Jumeirah to Downtown, Emirates Hills to Dubai Marina — we bring premium dining to your doorstep.
          </p>
        </div>

        {/* Locations Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {locations.map((loc) => (
            <Link
              key={loc.slug}
              to={`/locations/${loc.slug}`}
              className="location-card group relative aspect-[4/3] overflow-hidden block"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
              {/* Location name */}
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-playfair text-2xl text-white group-hover:text-gold transition-colors duration-300">
                  {loc.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 font-inter text-[13px] font-medium uppercase tracking-wider text-gold hover:gap-3 transition-all duration-300"
          >
            View All Dubai Locations
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
