import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'
import { MapPin, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const dubaiLocations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah', image: '/loc-palm-jumeirah.jpg', description: 'Private chef services for Palm Jumeirah villas and apartments' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai', image: '/loc-downtown.jpg', description: 'Premium private dining near Burj Khalifa' },
  { name: 'Dubai Marina', slug: 'dubai-marina', image: '/loc-dubai-marina.jpg', description: 'Private chef and yacht catering in Dubai Marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills', image: '/loc-emirates-hills.jpg', description: 'Luxury villa chef services in Emirates Hills' },
  { name: 'Jumeirah', slug: 'jumeirah', image: '/loc-jumeirah.jpg', description: 'Private chef for Jumeirah beach villas' },
  { name: 'JBR', slug: 'jbr', image: '/loc-jbr.jpg', description: 'Catering and private chef services in JBR' },
  { name: 'Business Bay', slug: 'business-bay', image: '/loc-difc.jpg', description: 'Corporate catering and private dining in Business Bay' },
  { name: 'DIFC', slug: 'difc', image: '/loc-difc.jpg', description: 'Executive dining and corporate catering in DIFC' },
  { name: 'Dubai Hills', slug: 'dubai-hills', image: '/loc-emirates-hills.jpg', description: 'Villa private chef services in Dubai Hills' },
  { name: 'Jumeirah Islands', slug: 'jumeirah-islands', image: '/loc-palm-jumeirah.jpg', description: 'Private chef for Jumeirah Islands residences' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches', image: '/loc-emirates-hills.jpg', description: 'Family chef and catering in Arabian Ranches' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island', image: '/loc-dubai-marina.jpg', description: 'Luxury dining at Bluewaters Island' },
  { name: 'Jumeirah Golf Estates', slug: 'jumeirah-golf-estates', image: '/loc-emirates-hills.jpg', description: 'Private chef for golf estate villas' },
  { name: 'The Springs', slug: 'the-springs', image: '/loc-emirates-hills.jpg', description: 'Private chef services in The Springs' },
  { name: 'Al Barari', slug: 'al-barari', image: '/loc-emirates-hills.jpg', description: 'Luxury private dining in Al Barari' },
  { name: 'Meydan', slug: 'meydan', image: '/loc-downtown.jpg', description: 'Private chef services near Meydan' },
]

const additionalAreas = [
  'Umm Suqeim', 'Al Safa', 'Jumeirah Village Circle', 'Dubai Creek Harbour',
  'Nad Al Sheba', 'Al Wasl', 'Dubai Silicon Oasis', 'Mirdif',
  'Deira', 'Bur Dubai', 'Al Quoz', 'Dubai South', 'Expo City Dubai'
]

export default function Locations() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-loc-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.05,
          scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }
        })
      })
      gsap.from('.gsap-hero', { opacity: 0, y: 30, duration: 0.8 })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <SEO
        title="Private Chef & Catering Locations | myCHEF Dubai"
        description="Premium private chef and luxury catering services across all Dubai locations. Palm Jumeirah, Downtown, Dubai Marina, Emirates Hills, JBR, DIFC & more."
        canonicalPath="/locations"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychefdubai.com/' },
            { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mychefdubai.com/locations' }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/loc-downtown.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 text-center px-4 gsap-hero">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">Dubai Coverage</p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">
            We Serve All of Dubai
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From Palm Jumeirah to Downtown, our private chefs and catering teams cover every corner of Dubai
          </p>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dubaiLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="gsap-loc-card group relative overflow-hidden bg-charcoal block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <MapPin size={14} />
                    <span className="text-xs uppercase tracking-wider">Dubai</span>
                  </div>
                  <h3 className="font-playfair text-xl text-white font-medium mb-1">{loc.name}</h3>
                  <div className="flex items-center text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore</span>
                    <ArrowRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl text-white text-center mb-8">Also Serving</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalAreas.map((area) => (
              <span key={area} className="px-4 py-2 border border-gold/30 text-gray-300 text-sm hover:border-gold hover:text-gold transition-colors duration-300">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">Not Sure If We Cover Your Area?</h2>
          <p className="text-gray-400 mb-8">We serve all of Dubai and surrounding Emirates. Message us to confirm availability for your location.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971501234567?text=Hi%20myCHEF%20Dubai%2C%20I%27d%20like%20to%20request%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-medium text-sm tracking-wider uppercase hover:bg-[#D9BC7A] transition-all duration-300 hover:-translate-y-0.5"
            >
              Request My Custom Quote
            </a>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold font-medium text-sm tracking-wider uppercase hover:bg-gold hover:text-black transition-all duration-300"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
