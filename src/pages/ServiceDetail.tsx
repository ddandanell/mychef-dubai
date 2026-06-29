import { useParams, Link } from 'react-router'
import SEO from '../components/SEO'

const serviceData: Record<string, { name: string; description: string; image: string }> = {
  'private-chef-dubai': { name: 'Private Chef Dubai', description: 'Your personal chef for any occasion. Custom menus, premium ingredients, full service.', image: '/service-private-chef.jpg' },
  'personal-chef-dubai': { name: 'Personal Chef Dubai', description: 'A dedicated chef for your household. Regular meal preparation, dietary accommodation.', image: '/service-private-chef.jpg' },
  'villa-private-chef': { name: 'Villa Private Chef Dubai', description: 'Private chef services for Dubai villas. Poolside dining, BBQs, family meals.', image: '/service-villa.jpg' },
  'luxury-private-dining': { name: 'Luxury Private Dining Dubai', description: 'Michelin-level private dining experiences in your Dubai home.', image: '/service-luxury-dining.jpg' },
  'fine-dining-at-home': { name: 'Fine Dining at Home Dubai', description: 'Restaurant-quality fine dining without leaving your home.', image: '/service-luxury-dining.jpg' },
  'romantic-dinner': { name: 'Romantic Dinner Dubai', description: 'Intimate private dinners for couples. Perfect for anniversaries and proposals.', image: '/service-luxury-dining.jpg' },
  'birthday-catering': { name: 'Birthday Catering Dubai', description: 'Make your birthday unforgettable with bespoke catering.', image: '/service-events.jpg' },
  'wedding-catering': { name: 'Wedding Catering Dubai', description: 'Elegant wedding catering from intimate ceremonies to grand receptions.', image: '/service-events.jpg' },
  'corporate-catering': { name: 'Corporate Catering Dubai', description: 'Professional catering for board meetings, corporate events, and office lunches.', image: '/service-corporate.jpg' },
  'yacht-catering': { name: 'Yacht Catering Dubai', description: 'Premium catering for yacht charters. Canapes, BBQ, fine dining at sea.', image: '/service-yacht.jpg' },
  'bbq-catering': { name: 'BBQ Catering Dubai', description: 'Premium BBQ catering with live grilling stations.', image: '/service-catering.jpg' },
  'buffet-catering': { name: 'Buffet Catering Dubai', description: 'Elegant buffet setups for any event size.', image: '/service-catering.jpg' },
  'canape-catering': { name: 'Canape Catering Dubai', description: 'Sophisticated canapes and finger food for cocktail receptions.', image: '/service-catering.jpg' },
  'cocktail-party': { name: 'Cocktail Party Catering Dubai', description: 'Stylish catering for cocktail parties and networking events.', image: '/service-catering.jpg' },
  'family-dinner': { name: 'Family Dinner Catering Dubai', description: 'Family-style catering bringing everyone together.', image: '/service-catering.jpg' },
  'kids-party': { name: 'Kids Party Catering Dubai', description: 'Fun, delicious catering for children\'s parties.', image: '/service-events.jpg' },
  'private-chef-tourists': { name: 'Private Chef for Tourists Dubai', description: 'Visiting Dubai? Enjoy a private chef in your hotel or rental.', image: '/service-private-chef.jpg' },
  'private-chef-airbnb': { name: 'Private Chef for Airbnb Dubai', description: 'Enhance your Airbnb stay with a private chef experience.', image: '/service-villa.jpg' },
  'private-chef-vip': { name: 'Private Chef for VIP Families Dubai', description: 'Discreet, long-term private chef placement for VIP households.', image: '/service-private-chef.jpg' },
  'healthy-meal-prep': { name: 'Healthy Meal Prep Dubai', description: 'Nutritious, chef-prepared meals delivered to your door.', image: '/service-private-chef.jpg' },
  'brunch-catering': { name: 'Brunch Catering Dubai', description: 'Elegant brunch catering for weekend gatherings.', image: '/service-catering.jpg' },
  'iftar-catering': { name: 'Iftar Catering Dubai', description: 'Traditional and contemporary Iftar menus for Ramadan.', image: '/service-catering.jpg' },
  'christmas-catering': { name: 'Christmas Catering Dubai', description: 'Festive catering for Christmas celebrations in Dubai.', image: '/service-events.jpg' },
  'new-year-catering': { name: 'New Year Catering Dubai', description: 'Ring in the New Year with spectacular catering.', image: '/service-events.jpg' },
}

const relatedLocations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'Business Bay', slug: 'business-bay' },
]

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const svc = serviceData[slug || ''] || {
    name: slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Private Chef Service',
    description: `Premium ${slug?.replace(/-/g, ' ')} services in Dubai. Request a custom quote for your event.`,
    image: '/hero-home.jpg'
  }

  return (
    <div>
      <SEO
        title={`${svc.name} | myCHEF Dubai`}
        description={`${svc.description} Premium private chef and catering in Dubai. Custom menus, full service, all locations covered.`}
        canonicalPath={`/services/${slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychefdubai.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mychefdubai.com/services' },
            { '@type': 'ListItem', position: 3, name: svc.name, item: `https://mychefdubai.com/services/${slug}` }
          ]
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src={svc.image} alt={svc.name} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <nav className="text-sm mb-6">
            <Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gold">{svc.name}</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">{svc.name}</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{svc.description}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Custom Menu Design', desc: 'Every menu is created specifically for your tastes, dietary needs, and event theme.' },
              { title: 'Premium Ingredients', desc: 'We source the finest ingredients from Dubai\'s best suppliers and markets.' },
              { title: 'Full Service', desc: 'From preparation to cleanup, we handle everything so you can enjoy your event.' },
              { title: 'Professional Chefs', desc: 'Our chefs are trained in international cuisines with years of experience.' },
              { title: 'Flexible Booking', desc: 'Available 7 days a week, from last-minute requests to months in advance.' },
              { title: 'All Dubai Locations', desc: 'We cover every neighborhood in Dubai, from Palm Jumeirah to Downtown.' },
            ].map((f, i) => (
              <div key={i} className="text-center p-6 border border-charcoal-light hover:border-gold/50 transition-colors">
                <h3 className="font-playfair text-xl text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-2xl text-white text-center mb-8">Available Across Dubai</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="px-6 py-3 bg-black text-gold border border-gold/30 hover:bg-gold hover:text-black transition-all duration-300 text-sm uppercase tracking-wider"
              >
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">Book {svc.name}</h2>
          <p className="text-gray-400 mb-8">Tell us about your event and we\'ll create a custom proposal tailored to your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inquiry" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-medium text-sm tracking-wider uppercase hover:bg-[#D9BC7A] transition-all duration-300 hover:-translate-y-0.5">
              Request My Custom Quote
            </a>
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold font-medium text-sm tracking-wider uppercase hover:bg-gold hover:text-black transition-all duration-300">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
