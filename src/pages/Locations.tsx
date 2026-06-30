import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { MapPin, ArrowRight, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/locations)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const dubaiLocations = [
  { name: 'Dubai Marina', slug: 'dubai-marina', image: '/loc-dubai-marina.webp', description: 'Yacht-ready private dining and event catering in Dubai Marina' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai', image: '/loc-downtown.webp', description: 'Premium private dining near Burj Khalifa' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah', image: '/loc-palm-jumeirah.webp', description: 'Ultra-luxury private chef services for Palm Jumeirah villas' },
  { name: 'Jumeirah', slug: 'jumeirah', image: '/loc-jumeirah.webp', description: 'Beachfront private chef for Jumeirah villas' },
  { name: 'JBR', slug: 'jbr', image: '/loc-jbr.webp', description: 'Beachfront catering and private chef services in JBR' },
  { name: 'Business Bay', slug: 'business-bay', image: '/loc-difc.webp', description: 'Corporate catering and private dining in Business Bay' },
  { name: 'DIFC', slug: 'difc', image: '/loc-difc.webp', description: 'Executive dining and corporate catering in DIFC' },
  { name: 'Emirates Hills', slug: 'emirates-hills', image: '/loc-emirates-hills.webp', description: 'Discreet luxury villa chef services in Emirates Hills' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches', image: '/loc-emirates-hills.webp', description: 'Family chef and BBQ catering in Arabian Ranches' },
  { name: 'Dubai Hills', slug: 'dubai-hills', image: '/loc-emirates-hills.webp', description: 'Villa private chef and golf event catering in Dubai Hills' },
  { name: 'JVC', slug: 'jvc', image: '/loc-dubai-marina.webp', description: 'Family-focused private chef and catering in JVC' },
  { name: 'JLT', slug: 'jlt', image: '/loc-dubai-marina.webp', description: 'Lakeside office and residential catering in JLT' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island', image: '/loc-jbr.webp', description: 'Luxury private dining for Bluewaters Island residents and visitors' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim', image: '/loc-jumeirah.webp', description: 'Beachfront villa private dining in Umm Suqeim' },
  { name: 'Al Barsha', slug: 'al-barsha', image: '/loc-downtown.webp', description: 'Flexible luxury catering for Al Barsha homes and offices' },
]

const additionalAreas = [
  'Mirdif', 'Meydan', 'Dubai Creek Harbour', 'Jumeirah Islands',
  'Jumeirah Golf Estates', 'The Springs', 'The Meadows', 'Al Barari',
  'Al Safa', 'Dubai Silicon Oasis', 'Nad Al Sheba', 'Al Wasl',
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
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <SEO
        title="Private Chef & Catering Locations | myCHEF Dubai"
        description="Premium private chef and luxury catering services across Dubai. Palm Jumeirah, Downtown, Dubai Marina, Emirates Hills, JBR, DIFC, Business Bay, JVC & more."
        canonicalPath="/locations"
        ogImage="/loc-downtown.webp"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
            { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mychef.ae/locations' }
          ]
        }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Dubai Coverage"
        title="We Serve All of Dubai"
        subtitle="From Palm Jumeirah to Downtown, Emirates Hills to Dubai Marina — we bring premium dining to your doorstep."
        image="/images/locations-dubai-hero.webp"
        imageAlt="Map of Dubai locations served by myCHEF"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
        minHeight="medium"
        overlay="dark"
      />

      {/* Location Cards Grid */}
      <section className="py-24 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  <p className="text-gray-400 text-xs leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                    {loc.description}
                  </p>
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
        <div className="container-custom">
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
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-medium text-sm tracking-wider uppercase hover:bg-[#D9BC7A] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} className="mr-2" />
              Request My Custom Quote
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
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
