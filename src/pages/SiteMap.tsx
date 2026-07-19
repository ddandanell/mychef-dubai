import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'

export default function SiteMap() {
  return (
    <>
      <SEO
        title="Site Map"
        description="Complete site map for myCHEF Dubai. Browse all private chef, catering, event, location, guide, and blog pages."
        canonicalPath="/site-map"
      />
      <PageHero
        eyebrow="Navigation"
        title="Site Map"
        subtitle="Every page on myCHEF Dubai, organized by topic."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Site Map' }]}
        minHeight="short"
      />
      <section className="bg-cream py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">General</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-600 hover:text-gold transition-colors">/</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Core hubs</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/catering-dubai</Link></li>
              <li><Link to="/catering-packages-dubai" className="text-gray-600 hover:text-gold transition-colors">/catering-packages-dubai</Link></li>
              <li><Link to="/private-chef-dubai" className="text-gray-600 hover:text-gold transition-colors">/private-chef-dubai</Link></li>
              <li><Link to="/private-chef-prices-dubai" className="text-gray-600 hover:text-gold transition-colors">/private-chef-prices-dubai</Link></li>
              <li><Link to="/luxury-dining-experiences" className="text-gray-600 hover:text-gold transition-colors">/luxury-dining-experiences</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-gold transition-colors">/events</Link></li>
              <li><Link to="/corporate" className="text-gray-600 hover:text-gold transition-colors">/corporate</Link></li>
              <li><Link to="/villas-private-residences" className="text-gray-600 hover:text-gold transition-colors">/villas-private-residences</Link></li>
              <li><Link to="/yachts" className="text-gray-600 hover:text-gold transition-colors">/yachts</Link></li>
              <li><Link to="/party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/party-catering-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Event & party spokes</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/wedding-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/wedding-catering-dubai</Link></li>
              <li><Link to="/birthday-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/birthday-catering-dubai</Link></li>
              <li><Link to="/bachelor-party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/bachelor-party-catering-dubai</Link></li>
              <li><Link to="/bachelorette-party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/bachelorette-party-catering-dubai</Link></li>
              <li><Link to="/engagement-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/engagement-catering-dubai</Link></li>
              <li><Link to="/anniversary-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/anniversary-catering-dubai</Link></li>
              <li><Link to="/baby-shower-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/baby-shower-catering-dubai</Link></li>
              <li><Link to="/private-party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/private-party-catering-dubai</Link></li>
              <li><Link to="/kids-birthday-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/kids-birthday-catering-dubai</Link></li>
              <li><Link to="/pool-party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/pool-party-catering-dubai</Link></li>
              <li><Link to="/beach-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/beach-catering-dubai</Link></li>
              <li><Link to="/desert-dining-dubai" className="text-gray-600 hover:text-gold transition-colors">/desert-dining-dubai</Link></li>
              <li><Link to="/afternoon-tea-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/afternoon-tea-catering-dubai</Link></li>
              <li><Link to="/housewarming-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/housewarming-catering-dubai</Link></li>
              <li><Link to="/graduation-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/graduation-catering-dubai</Link></li>
              <li><Link to="/farewell-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/farewell-catering-dubai</Link></li>
              <li><Link to="/reunion-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/reunion-catering-dubai</Link></li>
              <li><Link to="/fathers-day-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/fathers-day-catering-dubai</Link></li>
              <li><Link to="/chinese-new-year-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/chinese-new-year-catering-dubai</Link></li>
              <li><Link to="/holi-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/holi-catering-dubai</Link></li>
              <li><Link to="/picnic-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/picnic-catering-dubai</Link></li>
              <li><Link to="/coffee-tea-service-dubai" className="text-gray-600 hover:text-gold transition-colors">/coffee-tea-service-dubai</Link></li>
              <li><Link to="/dessert-cart-dubai" className="text-gray-600 hover:text-gold transition-colors">/dessert-cart-dubai</Link></li>
              <li><Link to="/shawarma-station-dubai" className="text-gray-600 hover:text-gold transition-colors">/shawarma-station-dubai</Link></li>
              <li><Link to="/oyster-bar-dubai" className="text-gray-600 hover:text-gold transition-colors">/oyster-bar-dubai</Link></li>
              <li><Link to="/government-event-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/government-event-catering-dubai</Link></li>
              <li><Link to="/university-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/university-catering-dubai</Link></li>
              <li><Link to="/healthcare-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/healthcare-catering-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Food formats</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/bbq-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/bbq-catering-dubai</Link></li>
              <li><Link to="/buffet-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/buffet-catering-dubai</Link></li>
              <li><Link to="/canape-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/canape-catering-dubai</Link></li>
              <li><Link to="/finger-food-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/finger-food-catering-dubai</Link></li>
              <li><Link to="/live-cooking-stations-dubai" className="text-gray-600 hover:text-gold transition-colors">/live-cooking-stations-dubai</Link></li>
              <li><Link to="/grazing-table-dubai" className="text-gray-600 hover:text-gold transition-colors">/grazing-table-dubai</Link></li>
              <li><Link to="/dessert-table-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/dessert-table-catering-dubai</Link></li>
              <li><Link to="/cocktail-party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/cocktail-party-catering-dubai</Link></li>
              <li><Link to="/mocktail-bar-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/mocktail-bar-catering-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Cuisines</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/cuisines-dubai" className="text-gray-600 hover:text-gold transition-colors">/cuisines-dubai</Link></li>
              <li><Link to="/indian-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/indian-catering-dubai</Link></li>
              <li><Link to="/arabic-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/arabic-catering-dubai</Link></li>
              <li><Link to="/mediterranean-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/mediterranean-catering-dubai</Link></li>
              <li><Link to="/italian-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/italian-catering-dubai</Link></li>
              <li><Link to="/asian-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/asian-catering-dubai</Link></li>
              <li><Link to="/sushi-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/sushi-catering-dubai</Link></li>
              <li><Link to="/vegan-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/vegan-catering-dubai</Link></li>
              <li><Link to="/vegetarian-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/vegetarian-catering-dubai</Link></li>
              <li><Link to="/halal-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/halal-catering-dubai</Link></li>
              <li><Link to="/healthy-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/healthy-catering-dubai</Link></li>
              <li><Link to="/gluten-free-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/gluten-free-catering-dubai</Link></li>
              <li><Link to="/dairy-free-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/dairy-free-catering-dubai</Link></li>
              <li><Link to="/nut-free-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/nut-free-catering-dubai</Link></li>
              <li><Link to="/keto-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/keto-catering-dubai</Link></li>
              <li><Link to="/jain-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/jain-catering-dubai</Link></li>
              <li><Link to="/pescatarian-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/pescatarian-catering-dubai</Link></li>
              <li><Link to="/sugar-free-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/sugar-free-catering-dubai</Link></li>
              <li><Link to="/fodmap-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/fodmap-catering-dubai</Link></li>
              <li><Link to="/halal-private-dining-dubai" className="text-gray-600 hover:text-gold transition-colors">/halal-private-dining-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Corporate & institutional</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/office-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/office-catering-dubai</Link></li>
              <li><Link to="/business-lunch-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/business-lunch-catering-dubai</Link></li>
              <li><Link to="/corporate-event-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/corporate-event-catering-dubai</Link></li>
              <li><Link to="/conference-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/conference-catering-dubai</Link></li>
              <li><Link to="/staff-meals-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/staff-meals-catering-dubai</Link></li>
              <li><Link to="/film-crew-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/film-crew-catering-dubai</Link></li>
              <li><Link to="/production-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/production-catering-dubai</Link></li>
              <li><Link to="/school-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/school-catering-dubai</Link></li>
              <li><Link to="/nursery-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/nursery-catering-dubai</Link></li>
              <li><Link to="/corporate-meal-prep-dubai" className="text-gray-600 hover:text-gold transition-colors">/corporate-meal-prep-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Seasonal & themed</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/festive-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/festive-catering-dubai</Link></li>
              <li><Link to="/romantic-dinner-dubai" className="text-gray-600 hover:text-gold transition-colors">/romantic-dinner-dubai</Link></li>
              <li><Link to="/valentines-day-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/valentines-day-catering-dubai</Link></li>
              <li><Link to="/mothers-day-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/mothers-day-catering-dubai</Link></li>
              <li><Link to="/uae-national-day-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/uae-national-day-catering-dubai</Link></li>
              <li><Link to="/easter-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/easter-catering-dubai</Link></li>
              <li><Link to="/halloween-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/halloween-catering-dubai</Link></li>
              <li><Link to="/ramadan-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/ramadan-catering-dubai</Link></li>
              <li><Link to="/iftar-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/iftar-catering-dubai</Link></li>
              <li><Link to="/suhoor-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/suhoor-catering-dubai</Link></li>
              <li><Link to="/eid-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/eid-catering-dubai</Link></li>
              <li><Link to="/diwali-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/diwali-catering-dubai</Link></li>
              <li><Link to="/christmas-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/christmas-catering-dubai</Link></li>
              <li><Link to="/new-year-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/new-year-catering-dubai</Link></li>
              <li><Link to="/brunch-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/brunch-catering-dubai</Link></li>
              <li><Link to="/breakfast-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/breakfast-catering-dubai</Link></li>
              <li><Link to="/drop-off-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/drop-off-catering-dubai</Link></li>
              <li><Link to="/tasting-menu-dubai" className="text-gray-600 hover:text-gold transition-colors">/tasting-menu-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Supporting</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/menus" className="text-gray-600 hover:text-gold transition-colors">/menus</Link></li>
              <li><Link to="/our-chefs" className="text-gray-600 hover:text-gold transition-colors">/our-chefs</Link></li>
              <li><Link to="/how-it-works" className="text-gray-600 hover:text-gold transition-colors">/how-it-works</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gold transition-colors">/about</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">/contact</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gold transition-colors">/faq</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Bluebook trust & service pages</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/weekly-meal-prep-dubai" className="text-gray-600 hover:text-gold transition-colors">/weekly-meal-prep-dubai</Link></li>
              <li><Link to="/wellness-meal-prep-dubai" className="text-gray-600 hover:text-gold transition-colors">/wellness-meal-prep-dubai</Link></li>
              <li><Link to="/how-we-vet-our-chefs" className="text-gray-600 hover:text-gold transition-colors">/how-we-vet-our-chefs</Link></li>
              <li><Link to="/booking-protection-insurance" className="text-gray-600 hover:text-gold transition-colors">/booking-protection-insurance</Link></li>
              <li><Link to="/quality-guarantee-dubai" className="text-gray-600 hover:text-gold transition-colors">/quality-guarantee-dubai</Link></li>
              <li><Link to="/allergy-safe-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/allergy-safe-catering-dubai</Link></li>
              <li><Link to="/become-a-mychef" className="text-gray-600 hover:text-gold transition-colors">/become-a-mychef</Link></li>
              <li><Link to="/review" className="text-gray-600 hover:text-gold transition-colors">/review</Link></li>
              <li><Link to="/referral-programme" className="text-gray-600 hover:text-gold transition-colors">/referral-programme</Link></li>
              <li><Link to="/mychef-membership" className="text-gray-600 hover:text-gold transition-colors">/mychef-membership</Link></li>
              <li><Link to="/corporate-retainer-dubai" className="text-gray-600 hover:text-gold transition-colors">/corporate-retainer-dubai</Link></li>
              <li><Link to="/postpartum-meal-prep-dubai" className="text-gray-600 hover:text-gold transition-colors">/postpartum-meal-prep-dubai</Link></li>
              <li><Link to="/fitness-meal-prep-dubai" className="text-gray-600 hover:text-gold transition-colors">/fitness-meal-prep-dubai</Link></li>
              <li><Link to="/tourist-villa-chef-dubai" className="text-gray-600 hover:text-gold transition-colors">/tourist-villa-chef-dubai</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-600 hover:text-gold transition-colors">/partner-with-us</Link></li>
              <li><Link to="/partners/villa-rentals-dubai" className="text-gray-600 hover:text-gold transition-colors">/partners/villa-rentals-dubai</Link></li>
              <li><Link to="/partners/yacht-charters-dubai" className="text-gray-600 hover:text-gold transition-colors">/partners/yacht-charters-dubai</Link></li>
              <li><Link to="/partners/event-planners-dubai" className="text-gray-600 hover:text-gold transition-colors">/partners/event-planners-dubai</Link></li>
              <li><Link to="/partners/concierge-services-dubai" className="text-gray-600 hover:text-gold transition-colors">/partners/concierge-services-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Content gaps closed</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/gallery" className="text-gray-600 hover:text-gold transition-colors">/gallery</Link></li>
              <li><Link to="/venue-partners" className="text-gray-600 hover:text-gold transition-colors">/venue-partners</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-gold transition-colors">/blog</Link></li>
              <li><Link to="/blog/ramadan-iftar-catering-trends-2026" className="text-gray-600 hover:text-gold transition-colors">/blog/ramadan-iftar-catering-trends-2026</Link></li>
              <li><Link to="/blog/yacht-party-menu-ideas-dubai" className="text-gray-600 hover:text-gold transition-colors">/blog/yacht-party-menu-ideas-dubai</Link></li>
              <li><Link to="/blog/how-much-does-private-chef-cost-dubai" className="text-gray-600 hover:text-gold transition-colors">/blog/how-much-does-private-chef-cost-dubai</Link></li>
              <li><Link to="/blog/corporate-catering-full-service-vs-drop-off" className="text-gray-600 hover:text-gold transition-colors">/blog/corporate-catering-full-service-vs-drop-off</Link></li>
              <li><Link to="/blog/weekly-meal-prep-vs-full-time-chef-dubai" className="text-gray-600 hover:text-gold transition-colors">/blog/weekly-meal-prep-vs-full-time-chef-dubai</Link></li>
              <li><Link to="/blog/best-private-chef-birthday-dinner-dubai" className="text-gray-600 hover:text-gold transition-colors">/blog/best-private-chef-birthday-dinner-dubai</Link></li>
              <li><Link to="/blog/private-chef-palm-jumeirah-guide" className="text-gray-600 hover:text-gold transition-colors">/blog/private-chef-palm-jumeirah-guide</Link></li>
              <li><Link to="/blog/halal-private-dining-dubai-what-to-ask" className="text-gray-600 hover:text-gold transition-colors">/blog/halal-private-dining-dubai-what-to-ask</Link></li>
              <li><Link to="/chefs/ahmed-executive-chef" className="text-gray-600 hover:text-gold transition-colors">/chefs/ahmed-executive-chef</Link></li>
              <li><Link to="/chefs/sofia-pastry-chef" className="text-gray-600 hover:text-gold transition-colors">/chefs/sofia-pastry-chef</Link></li>
              <li><Link to="/chefs/marco-italian-chef" className="text-gray-600 hover:text-gold transition-colors">/chefs/marco-italian-chef</Link></li>
              <li><Link to="/chefs/layla-middle-eastern-chef" className="text-gray-600 hover:text-gold transition-colors">/chefs/layla-middle-eastern-chef</Link></li>
              <li><Link to="/catering-cost-calculator-dubai" className="text-gray-600 hover:text-gold transition-colors">/catering-cost-calculator-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Locations</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/locations" className="text-gray-600 hover:text-gold transition-colors">/locations</Link></li>
              <li><Link to="/locations/dubai-marina" className="text-gray-600 hover:text-gold transition-colors">/locations/dubai-marina</Link></li>
              <li><Link to="/locations/downtown-dubai" className="text-gray-600 hover:text-gold transition-colors">/locations/downtown-dubai</Link></li>
              <li><Link to="/locations/palm-jumeirah" className="text-gray-600 hover:text-gold transition-colors">/locations/palm-jumeirah</Link></li>
              <li><Link to="/locations/jumeirah" className="text-gray-600 hover:text-gold transition-colors">/locations/jumeirah</Link></li>
              <li><Link to="/locations/jbr" className="text-gray-600 hover:text-gold transition-colors">/locations/jbr</Link></li>
              <li><Link to="/locations/business-bay" className="text-gray-600 hover:text-gold transition-colors">/locations/business-bay</Link></li>
              <li><Link to="/locations/difc" className="text-gray-600 hover:text-gold transition-colors">/locations/difc</Link></li>
              <li><Link to="/locations/emirates-hills" className="text-gray-600 hover:text-gold transition-colors">/locations/emirates-hills</Link></li>
              <li><Link to="/locations/arabian-ranches" className="text-gray-600 hover:text-gold transition-colors">/locations/arabian-ranches</Link></li>
              <li><Link to="/locations/dubai-hills" className="text-gray-600 hover:text-gold transition-colors">/locations/dubai-hills</Link></li>
              <li><Link to="/locations/jvc" className="text-gray-600 hover:text-gold transition-colors">/locations/jvc</Link></li>
              <li><Link to="/locations/jlt" className="text-gray-600 hover:text-gold transition-colors">/locations/jlt</Link></li>
              <li><Link to="/locations/bluewaters-island" className="text-gray-600 hover:text-gold transition-colors">/locations/bluewaters-island</Link></li>
              <li><Link to="/locations/umm-suqeim" className="text-gray-600 hover:text-gold transition-colors">/locations/umm-suqeim</Link></li>
              <li><Link to="/locations/al-barsha" className="text-gray-600 hover:text-gold transition-colors">/locations/al-barsha</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Guides</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/guides" className="text-gray-600 hover:text-gold transition-colors">/guides</Link></li>
              <li><Link to="/dubai-catering-prices-guide" className="text-gray-600 hover:text-gold transition-colors">/dubai-catering-prices-guide</Link></li>
              <li><Link to="/how-to-choose-caterer-dubai" className="text-gray-600 hover:text-gold transition-colors">/how-to-choose-caterer-dubai</Link></li>
              <li><Link to="/villa-catering-ideas-dubai" className="text-gray-600 hover:text-gold transition-colors">/villa-catering-ideas-dubai</Link></li>
              <li><Link to="/wedding-catering-checklist-dubai" className="text-gray-600 hover:text-gold transition-colors">/wedding-catering-checklist-dubai</Link></li>
              <li><Link to="/corporate-catering-checklist-dubai" className="text-gray-600 hover:text-gold transition-colors">/corporate-catering-checklist-dubai</Link></li>
              <li><Link to="/private-chef-vs-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/private-chef-vs-catering-dubai</Link></li>
              <li><Link to="/buffet-vs-plated-dubai" className="text-gray-600 hover:text-gold transition-colors">/buffet-vs-plated-dubai</Link></li>
              <li><Link to="/yacht-catering-guide-dubai" className="text-gray-600 hover:text-gold transition-colors">/yacht-catering-guide-dubai</Link></li>
              <li><Link to="/ramadan-catering-guide-dubai" className="text-gray-600 hover:text-gold transition-colors">/ramadan-catering-guide-dubai</Link></li>
              <li><Link to="/luxury-dinner-planning-guide-dubai" className="text-gray-600 hover:text-gold transition-colors">/luxury-dinner-planning-guide-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Linkable assets / guides</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/guide/private-dining-dubai" className="text-gray-600 hover:text-gold transition-colors">/guide/private-dining-dubai</Link></li>
              <li><Link to="/dubai-event-catering-price-guide-2026" className="text-gray-600 hover:text-gold transition-colors">/dubai-event-catering-price-guide-2026</Link></li>
              <li><Link to="/yacht-catering-checklist-dubai" className="text-gray-600 hover:text-gold transition-colors">/yacht-catering-checklist-dubai</Link></li>
              <li><Link to="/wedding-catering-menu-planning-dubai" className="text-gray-600 hover:text-gold transition-colors">/wedding-catering-menu-planning-dubai</Link></li>
              <li><Link to="/dubai-food-trends-report-2026" className="text-gray-600 hover:text-gold transition-colors">/dubai-food-trends-report-2026</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Additional service & experience pages</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/bar-services-dubai" className="text-gray-600 hover:text-gold transition-colors">/bar-services-dubai</Link></li>
              <li><Link to="/product-launch-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/product-launch-catering-dubai</Link></li>
              <li><Link to="/brand-activation-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/brand-activation-catering-dubai</Link></li>
              <li><Link to="/exhibition-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/exhibition-catering-dubai</Link></li>
              <li><Link to="/gala-dinner-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/gala-dinner-catering-dubai</Link></li>
              <li><Link to="/private-cooking-classes-dubai" className="text-gray-600 hover:text-gold transition-colors">/private-cooking-classes-dubai</Link></li>
              <li><Link to="/vip-club" className="text-gray-600 hover:text-gold transition-colors">/vip-club</Link></li>
              <li><Link to="/gift-cards" className="text-gray-600 hover:text-gold transition-colors">/gift-cards</Link></li>
              <li><Link to="/case-studies" className="text-gray-600 hover:text-gold transition-colors">/case-studies</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Press / Media</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/press" className="text-gray-600 hover:text-gold transition-colors">/press</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Utility</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/site-map" className="text-gray-600 hover:text-gold transition-colors">/site-map</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Legal</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gold transition-colors">/privacy-policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-gold transition-colors">/terms</Link></li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
