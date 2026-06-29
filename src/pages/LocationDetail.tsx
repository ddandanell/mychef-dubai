import { useParams, Link } from 'react-router'
import SEO from '../components/SEO'

const locationData: Record<string, { name: string; description: string; image: string }> = {
  'palm-jumeirah': { name: 'Palm Jumeirah', description: 'Premium private chef and luxury catering services for Palm Jumeirah villas and apartments. From intimate dinners to large celebrations.', image: '/loc-palm-jumeirah.jpg' },
  'downtown-dubai': { name: 'Downtown Dubai', description: 'Exclusive private dining experiences near Burj Khalifa. Perfect for corporate entertainment and special occasions.', image: '/loc-downtown.jpg' },
  'dubai-marina': { name: 'Dubai Marina', description: 'Private chef and yacht catering services in Dubai Marina. Waterfront dining at its finest.', image: '/loc-dubai-marina.jpg' },
  'emirates-hills': { name: 'Emirates Hills', description: 'Luxury villa chef services in Emirates Hills. Discreet, professional culinary excellence.', image: '/loc-emirates-hills.jpg' },
  'jumeirah': { name: 'Jumeirah', description: 'Private chef services for Jumeirah beach villas. Mediterranean-inspired cuisine by the sea.', image: '/loc-jumeirah.jpg' },
  'jbr': { name: 'JBR', description: 'Catering and private chef services in Jumeirah Beach Residence.', image: '/loc-jbr.jpg' },
  'business-bay': { name: 'Business Bay', description: 'Corporate catering and private dining in Business Bay.', image: '/loc-difc.jpg' },
  'difc': { name: 'DIFC', description: 'Executive dining and corporate catering in Dubai International Financial Centre.', image: '/loc-difc.jpg' },
  'dubai-hills': { name: 'Dubai Hills', description: 'Villa private chef services in Dubai Hills Estate.', image: '/loc-emirates-hills.jpg' },
  'jumeirah-islands': { name: 'Jumeirah Islands', description: 'Private chef for Jumeirah Islands residences.', image: '/loc-palm-jumeirah.jpg' },
  'arabian-ranches': { name: 'Arabian Ranches', description: 'Family chef and catering services in Arabian Ranches.', image: '/loc-emirates-hills.jpg' },
  'bluewaters-island': { name: 'Bluewaters Island', description: 'Luxury private dining at Bluewaters Island.', image: '/loc-dubai-marina.jpg' },
  'jumeirah-golf-estates': { name: 'Jumeirah Golf Estates', description: 'Private chef services for golf estate villas.', image: '/loc-emirates-hills.jpg' },
  'the-springs': { name: 'The Springs', description: 'Private chef services in The Springs community.', image: '/loc-emirates-hills.jpg' },
  'al-barari': { name: 'Al Barari', description: 'Luxury private dining in the green sanctuary of Al Barari.', image: '/loc-emirates-hills.jpg' },
  'meydan': { name: 'Meydan', description: 'Private chef services near Meydan Racecourse.', image: '/loc-downtown.jpg' },
}

const relatedServices = [
  { name: 'Private Chef', path: '/private-chef-dubai' },
  { name: 'Catering', path: '/catering-dubai' },
  { name: 'Luxury Dining', path: '/luxury-dining-experiences' },
  { name: 'Villa Dining', path: '/villas-private-residences' },
  { name: 'Yacht Catering', path: '/yachts' },
  { name: 'Corporate', path: '/corporate' },
]

export default function LocationDetail() {
  const { slug } = useParams<{ slug: string }>()
  const loc = locationData[slug || ''] || {
    name: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Dubai',
    description: `Premium private chef and luxury catering services in ${slug?.replace(/-/g, ' ')}. We bring restaurant-quality dining to your home, villa, or venue.`,
    image: '/hero-home.jpg'
  }

  return (
    <div>
      <SEO
        title={`Private Chef ${loc.name} | myCHEF Dubai`}
        description={`Premium private chef and catering services in ${loc.name}, Dubai. Luxury in-villa dining, events, and corporate catering. Request a custom quote.`}
        canonicalPath={`/locations/${slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
            { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://mychef.ae/locations' },
            { '@type': 'ListItem', position: 3, name: loc.name, item: `https://mychef.ae/locations/${slug}` }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src={loc.image} alt={loc.name} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <nav className="text-sm mb-6">
            <Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link to="/locations" className="text-gray-400 hover:text-gold transition-colors">Locations</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gold">{loc.name}</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">
            Private Chef {loc.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{loc.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-3xl text-white mb-6">Why Choose myCHEF in {loc.name}?</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Experience restaurant-quality dining in the comfort of your {loc.name} residence. Our professional chefs 
                bring world-class culinary expertise directly to your kitchen, creating bespoke menus tailored to your tastes.
              </p>
              <ul className="space-y-3 mb-8">
                {['Fully personalized menus designed around your preferences', 'Premium ingredients sourced from Dubai\'s finest suppliers', 'Complete service including setup, dining, and cleanup', 'Available for intimate dinners, family meals, and large events'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-gold mt-1">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Private Chef', icon: '&#128104;&#127995;&#8205;&#127859;' },
                { label: 'Catering', icon: '&#127869;' },
                { label: 'Luxury Dining', icon: '&#127860;' },
                { label: 'Events', icon: '&#127881;' }
              ].map((s) => (
                <div key={s.label} className="bg-charcoal p-6 text-center hover:bg-charcoal-light transition-colors">
                  <div className="text-3xl mb-3" dangerouslySetInnerHTML={{ __html: s.icon }} />
                  <p className="text-white font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl text-white text-center mb-8">Services in {loc.name}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.path}
                to={s.path}
                className="px-6 py-3 bg-black text-gold border border-gold/30 hover:bg-gold hover:text-black transition-all duration-300 text-sm uppercase tracking-wider"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">Book Your Private Chef in {loc.name}</h2>
          <p className="text-gray-400 mb-8">Tell us about your event and we\'ll create a custom proposal tailored to your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inquiry" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-medium text-sm tracking-wider uppercase hover:bg-[#D9BC7A] transition-all duration-300 hover:-translate-y-0.5">
              Request My Custom Quote
            </a>
            <a href="https://wa.me/971588274544" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold font-medium text-sm tracking-wider uppercase hover:bg-gold hover:text-black transition-all duration-300">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
