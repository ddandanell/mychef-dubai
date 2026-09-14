// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /locations
//     primary:     "catering near me dubai"
//     subkeywords: "catering services near me dubai" · "private chef service areas dubai" · "dubai chocolate catering near me" · "best catering locations dubai" · "birthday catering locations dubai" · "food catering locations dubai" · "small catering locations dubai" · "what is the largest catering company" · "dubai private chef locations" · "caterers near by"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { MapPin, ArrowRight, Phone } from 'lucide-react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/locations)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const dubaiLocations = [
  { name: 'Dubai Marina', slug: 'dubai-marina', image: '/loc-dubai-marina.webp', description: 'Tower kitchens and marina berths you already hold' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai', image: '/loc-downtown.webp', description: 'Penthouses and offices with loading-bay timing' },
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah', image: '/loc-palm-jumeirah.webp', description: 'Frond villas and Trunk apartments, gate access first' },
  { name: 'Jumeirah', slug: 'jumeirah', image: '/loc-jumeirah.webp', description: 'Beach-road villas and garden tables' },
  { name: 'JBR', slug: 'jbr', image: '/loc-jbr.webp', description: 'Beachfront apartments on The Walk' },
  { name: 'Business Bay', slug: 'business-bay', image: '/loc-difc.webp', description: 'Canal towers, offices and weekday lunches' },
  { name: 'DIFC', slug: 'difc', image: '/loc-difc.webp', description: 'Boardrooms and residences inside the Gate' },
  { name: 'Emirates Hills', slug: 'emirates-hills', image: '/loc-emirates-hills.webp', description: 'Gated villas, house rules, a chef at the door' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches', image: '/loc-emirates-hills.webp', description: 'Villa kitchens and garden grills' },
  { name: 'Dubai Hills', slug: 'dubai-hills', image: '/loc-emirates-hills.webp', description: 'Villas, townhouses and apartment towers' },
  { name: 'JVC', slug: 'jvc', image: '/loc-dubai-marina.webp', description: 'Family apartments, townhouses and compact kitchens' },
  { name: 'JLT', slug: 'jlt', image: '/loc-dubai-marina.webp', description: 'Lakeside apartments and DMCC offices' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island', image: '/loc-jbr.webp', description: 'Island apartments reached by the bridge' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim', image: '/loc-jumeirah.webp', description: 'Coastal villas, garden kitchens, parking that works' },
  { name: 'Al Barsha', slug: 'al-barsha', image: '/loc-downtown.webp', description: 'Villas, apartments and hotel residences' },
]

const additionalAreas = [
  'Mirdif', 'Meydan', 'Dubai Creek Harbour', 'Jumeirah Islands',
  'Jumeirah Golf Estates', 'The Springs', 'The Meadows', 'Al Barari',
  'Al Safa', 'Dubai Silicon Oasis', 'Nad Al Sheba', 'Al Wasl',
  'Deira', 'Bur Dubai', 'Al Quoz', 'Dubai South', 'Expo City Dubai'
]

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm looking for private chef or catering services in Dubai. Date: __ Guests: __ Area: __"
export default function Locations() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
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
        title="Catering Near Me Dubai | Private Chef & Catering Areas | myCHEF"
        description="Catering Near Me Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table."
        canonicalPath="/locations"
        ogImage="/loc-downtown.webp"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
            { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.mychef.ae/locations' }
          ]
        }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Areas we serve"
        title="Catering Near Me Dubai"
        subtitle="Catering near me Dubai is a chef in your kitchen, not a venue we own. These are private chef service areas for a standing household chef or one-night catering. Tell us the address. We typically reply within 15 minutes during business hours."
        image="/images/locations-dubai-hero.webp"
        imageAlt="Map of Dubai locations served by myCHEF"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
        cta={{ label: 'Request your quote', href: '/inquiry' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        minHeight="medium"
        overlay="dark"
      />
      <TrustSignalStrip />

      {/* Location Cards Grid */}
      <section className="py-24 bg-black">
        <div className="container-custom">
          <h2 className="font-playfair text-2xl md:text-3xl text-white text-center mb-10">
            Catering near me Dubai, by neighbourhood
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dubaiLocations.filter((loc) => !isParked(locationPath(loc.slug))).map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="gsap-loc-card group relative overflow-hidden bg-charcoal block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy" decoding="async"/>
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
                    <span>{loc.name}</span>
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
          <h2 className="font-playfair text-2xl text-white text-center mb-8">Other areas we cook in</h2>
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
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">If your street is not on the cards</h2>
          <p className="text-gray-400 mb-8">Catering services near me Dubai still start with an address. A birthday, a small table or a standing chef is the same question: can we work this kitchen, this gate, this timing? Message the area. We confirm in writing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-medium text-sm tracking-wider uppercase hover:bg-[#D9BC7A] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={16} className="mr-2" />
              Request your quote
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
          <p className="mt-6 text-gray-400 text-sm">
            We typically reply within 15 minutes during business hours. The quote is written before anyone arrives.
          </p>
        </div>
      </section>
    </div>
  )
}
