import { useParams, Link } from 'react-router'
import SEO from '../components/SEO'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a proposal (via mychef.ae/services)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const serviceData: Record<string, { name: string; description: string; image: string }> = {
  'private-chef-dubai': { name: 'Private Chef Dubai', description: 'Your personal chef for any occasion. Custom menus, premium ingredients, full service.', image: '/images/private-chef-dubai-hero.webp' },
  'personal-chef-dubai': { name: 'Personal Chef Dubai', description: 'A dedicated chef for your household. Regular meal preparation, dietary accommodation.', image: '/images/private-chef-dubai-hero.webp' },
  'villa-private-chef': { name: 'Villa Private Chef Dubai', description: 'Private chef services for Dubai villas. Poolside dining, BBQs, family meals.', image: '/images/villa-catering-dubai-hero.webp' },
  'luxury-private-dining': { name: 'Luxury Private Dining Dubai', description: 'Michelin-level private dining experiences in your Dubai home.', image: '/images/luxury-dining-dubai-hero.webp' },
  'fine-dining-at-home': { name: 'Fine Dining at Home Dubai', description: 'Restaurant-quality fine dining without leaving your home.', image: '/images/luxury-dining-dubai-hero.webp' },
  'romantic-dinner': { name: 'Romantic Dinner Dubai', description: 'Intimate private dinners for couples. Perfect for anniversaries and proposals.', image: '/images/romantic-dinner-dubai-hero.webp' },
  'birthday-catering': { name: 'Birthday Catering Dubai', description: 'Make your birthday unforgettable with bespoke catering.', image: '/images/birthday-catering-dubai-hero.webp' },
  'wedding-catering': { name: 'Wedding Catering Dubai', description: 'Elegant wedding catering from intimate ceremonies to grand receptions.', image: '/images/wedding-catering-dubai-hero.webp' },
  'corporate-catering': { name: 'Corporate Catering Dubai', description: 'Professional catering for board meetings, corporate events, and office lunches.', image: '/images/corporate-catering-dubai-hero.webp' },
  'yacht-catering': { name: 'Yacht Catering Dubai', description: 'Premium catering for yacht charters. Canapes, BBQ, fine dining at sea.', image: '/images/yacht-catering-dubai-hero.webp' },
  'bbq-catering': { name: 'BBQ Catering Dubai', description: 'Premium BBQ catering with live grilling stations.', image: '/images/bbq-catering-dubai-hero.webp' },
  'buffet-catering': { name: 'Buffet Catering Dubai', description: 'Elegant buffet setups for any event size.', image: '/images/buffet-catering-dubai-hero.webp' },
  'canape-catering': { name: 'Canape Catering Dubai', description: 'Sophisticated canapes and finger food for cocktail receptions.', image: '/images/canape-catering-dubai-hero.webp' },
  'cocktail-party': { name: 'Cocktail Party Catering Dubai', description: 'Stylish catering for cocktail parties and networking events.', image: '/images/cocktail-party-catering-dubai-hero.webp' },
  'family-dinner': { name: 'Family Dinner Catering Dubai', description: 'Family-style catering bringing everyone together.', image: '/images/celebration-catering-dubai-hero.webp' },
  'kids-party': { name: 'Kids Party Catering Dubai', description: 'Fun, delicious catering for children\'s parties.', image: '/images/birthday-catering-dubai-hero.webp' },
  'private-chef-tourists': { name: 'Private Chef for Tourists Dubai', description: 'Visiting Dubai? Enjoy a private chef in your hotel or rental.', image: '/images/private-chef-dubai-hero.webp' },
  'private-chef-airbnb': { name: 'Private Chef for Airbnb Dubai', description: 'Enhance your Airbnb stay with a private chef experience.', image: '/images/villa-catering-dubai-hero.webp' },
  'private-chef-vip': { name: 'Private Chef for VIP Families Dubai', description: 'Discreet, long-term private chef placement for VIP households.', image: '/images/luxury-dining-dubai-hero.webp' },
  'healthy-meal-prep': { name: 'Healthy Meal Prep Dubai', description: 'Nutritious, chef-prepared meals delivered to your door.', image: '/images/healthy-catering-dubai-hero.webp' },
  'brunch-catering': { name: 'Brunch Catering Dubai', description: 'Elegant brunch catering for weekend gatherings.', image: '/images/buffet-catering-dubai-hero.webp' },
  'iftar-catering': { name: 'Iftar Catering Dubai', description: 'Traditional and contemporary Iftar menus for Ramadan.', image: '/images/ramadan-iftar-catering-dubai-hero.webp' },
  'christmas-catering': { name: 'Christmas Catering Dubai', description: 'Festive catering for Christmas celebrations in Dubai.', image: '/images/christmas-catering-dubai-hero.webp' },
  'new-year-catering': { name: 'New Year Catering Dubai', description: 'Ring in the New Year with spectacular catering.', image: '/images/new-year-catering-dubai-hero.webp' },
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
    image: '/hero-home.webp'
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
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mychef.ae/services' },
            { '@type': 'ListItem', position: 3, name: svc.name, item: `https://mychef.ae/services/${slug}` }
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
            <a href="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=services" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-medium text-sm tracking-wider uppercase hover:bg-[#D9BC7A] transition-all duration-300 hover:-translate-y-0.5">
              Request a Proposal
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold font-medium text-sm tracking-wider uppercase hover:bg-gold hover:text-black transition-all duration-300">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
