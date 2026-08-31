import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/system'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'

const locations = [
  { image: '/loc-jbr.webp', name: 'JBR', slug: 'jbr' },
  { image: '/loc-difc.webp', name: 'DIFC', slug: 'difc' },
  { image: '/loc-dubai-marina.webp', name: 'JLT', slug: 'jlt' },
  { image: '/loc-downtown.webp', name: 'Al Barsha', slug: 'al-barsha' },
  { image: '/loc-palm-jumeirah.webp', name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { image: '/loc-emirates-hills.webp', name: 'Emirates Hills', slug: 'emirates-hills' },
]

export default function LocationsSection() {
  useScrollTrigger()
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set([headerRef.current, cardsRef.current?.querySelectorAll('.location-card')], { opacity: 1, y: 0, scale: 1 })
        return
      }

      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      )

      const cards = cardsRef.current?.querySelectorAll('.location-card')
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))
  const gridCols =
    liveLocations.length <= 2
      ? 'grid-cols-2'
      : liveLocations.length <= 4
        ? 'grid-cols-2 md:grid-cols-4'
        : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'

  return (
    <section ref={sectionRef} className="bg-black section-padding">
      <div className="container-custom">
        {/* Editorial header row: argument left, index link right */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-[680px]">
            <SectionLabel tone="dark">Where We Serve in Dubai</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-white mb-4">
              Which areas in Dubai does myCHEF serve?
            </h2>
            <p className="font-inter text-body text-gray-400 leading-relaxed max-w-[58ch]">
              Villas, apartments, yachts and offices across the city. Start with the areas below, or see every neighbourhood we cover.
            </p>
          </div>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 self-start lg:self-auto lg:pb-1 font-inter text-body-sm font-medium uppercase tracking-wider text-gold hover:gap-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            View All Dubai Locations
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Contact sheet — one hairline row at lg, not a card grid */}
        <div
          ref={cardsRef}
          className={`grid ${gridCols} gap-px bg-white/10 border border-white/10`}
        >
          {liveLocations.map((loc) => (
            <Link
              key={loc.slug}
              to={locationPath(loc.slug)}
              className="location-card group relative aspect-[3/4] block overflow-hidden bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
            >
              <img
                src={loc.image}
                alt={loc.name}
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/90 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <h3 className="font-playfair text-h4 text-white group-hover:text-gold transition-colors duration-300">
                  {loc.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
