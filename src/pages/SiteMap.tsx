// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /site-map
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { BLOG_POSTS } from '@/content/blogTaxonomy'

export default function SiteMap() {
  return (
    <>
      <SEO
        title="Site Map"
        description="Complete site map for myCHEF Dubai. Browse all private chef, catering, event, location, guide, and blog pages."
        canonicalPath="/site-map"
        noindex
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
              <li><Link to="/private-chef-dubai/how-it-works" className="text-gray-600 hover:text-gold transition-colors">/private-chef-dubai/how-it-works</Link></li>
              <li><Link to="/private-chef-dubai/our-chefs" className="text-gray-600 hover:text-gold transition-colors">/private-chef-dubai/our-chefs</Link></li>
              <li><Link to="/private-chef-dubai/quality-training" className="text-gray-600 hover:text-gold transition-colors">/private-chef-dubai/quality-training</Link></li>
              <li><Link to="/private-chef-dubai/privacy-security" className="text-gray-600 hover:text-gold transition-colors">/private-chef-dubai/privacy-security</Link></li>
              <li><Link to="/private-chef-prices-dubai" className="text-gray-600 hover:text-gold transition-colors">/private-chef-prices-dubai</Link></li>
              <li><Link to="/luxury-dining-experiences" className="text-gray-600 hover:text-gold transition-colors">/luxury-dining-experiences</Link></li>
              <li><Link to="/events" className="text-gray-600 hover:text-gold transition-colors">/events</Link></li>
              <li><Link to="/corporate" className="text-gray-600 hover:text-gold transition-colors">/corporate</Link></li>
              <li><Link to="/villas-private-residences" className="text-gray-600 hover:text-gold transition-colors">/villas-private-residences</Link></li>
              <li><Link to="/yachts" className="text-gray-600 hover:text-gold transition-colors">/yachts</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Event & party spokes</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/wedding-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/wedding-catering-dubai</Link></li>
              <li><Link to="/birthday-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/birthday-catering-dubai</Link></li>
              <li><Link to="/private-party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/private-party-catering-dubai</Link></li>
              <li><Link to="/engagement-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/engagement-catering-dubai</Link></li>
              <li><Link to="/baby-shower-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/baby-shower-catering-dubai</Link></li>
              <li><Link to="/desert-dining-dubai" className="text-gray-600 hover:text-gold transition-colors">/desert-dining-dubai</Link></li>
              <li><Link to="/afternoon-tea-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/afternoon-tea-catering-dubai</Link></li>
              <li>/asian-catering-dubai</li>
              <li><Link to="/indian-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/indian-catering-dubai</Link></li>
              <li><Link to="/catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/catering-dubai</Link></li>
              <li><Link to="/live-cooking-stations-dubai" className="text-gray-600 hover:text-gold transition-colors">/live-cooking-stations-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Food formats</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/bbq-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/bbq-catering-dubai</Link></li>
              <li><Link to="/buffet-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/buffet-catering-dubai</Link></li>
              <li><Link to="/canape-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/canape-catering-dubai</Link></li>
              <li><Link to="/live-cooking-stations-dubai" className="text-gray-600 hover:text-gold transition-colors">/live-cooking-stations-dubai</Link></li>
              <li><Link to="/grazing-table-dubai" className="text-gray-600 hover:text-gold transition-colors">/grazing-table-dubai</Link></li>
              <li><Link to="/dessert-table-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/dessert-table-catering-dubai</Link></li>
              <li><Link to="/cocktail-party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/cocktail-party-catering-dubai</Link></li>
              <li><Link to="/bar-services-dubai" className="text-gray-600 hover:text-gold transition-colors">/bar-services-dubai</Link></li>
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
              <li>/asian-catering-dubai</li>
              <li><Link to="/sushi-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/sushi-catering-dubai</Link></li>
              <li><Link to="/vegan-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/vegan-catering-dubai</Link></li>
              <li><Link to="/vegetarian-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/vegetarian-catering-dubai</Link></li>
              <li><Link to="/halal-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/halal-catering-dubai</Link></li>
              <li><Link to="/allergy-safe-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/allergy-safe-catering-dubai</Link></li>
              <li>/jain-catering-dubai</li>
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
              <li>/staff-meals-catering-dubai</li>
              <li>/production-catering-dubai</li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Seasonal & themed</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/festive-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/festive-catering-dubai</Link></li>
              <li><Link to="/romantic-dinner-dubai" className="text-gray-600 hover:text-gold transition-colors">/romantic-dinner-dubai</Link></li>
              <li><Link to="/private-party-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/private-party-catering-dubai</Link></li>
              <li>/uae-national-day-catering-dubai</li>
              <li><Link to="/ramadan-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/ramadan-catering-dubai</Link></li>
              <li><Link to="/iftar-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/iftar-catering-dubai</Link></li>
              <li><Link to="/eid-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/eid-catering-dubai</Link></li>
              <li><Link to="/diwali-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/diwali-catering-dubai</Link></li>
              <li><Link to="/christmas-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/christmas-catering-dubai</Link></li>
              <li><Link to="/new-year-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/new-year-catering-dubai</Link></li>
              <li><Link to="/brunch-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/brunch-catering-dubai</Link></li>
              <li><Link to="/breakfast-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/breakfast-catering-dubai</Link></li>
              <li><Link to="/drop-off-catering-dubai" className="text-gray-600 hover:text-gold transition-colors">/drop-off-catering-dubai</Link></li>
              <li>/tasting-menu-dubai</li>
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
              <li>/corporate-retainer-dubai</li>
              <li>/postpartum-meal-prep-dubai</li>
              <li>/fitness-meal-prep-dubai</li>
              <li>/tourist-villa-chef-dubai</li>
              <li><Link to="/proposal-dinner-dubai" className="text-gray-600 hover:text-gold transition-colors">/proposal-dinner-dubai</Link></li>
              <li><Link to="/founding-customer-offer" className="text-gray-600 hover:text-gold transition-colors">/founding-customer-offer</Link></li>
              <li><Link to="/loyalty-programme" className="text-gray-600 hover:text-gold transition-colors">/loyalty-programme</Link></li>
              <li><Link to="/mychef-certified" className="text-gray-600 hover:text-gold transition-colors">/mychef-certified</Link></li>
              <li>/mystery-dining-dubai</li>
              <li><Link to="/chef-training-academy" className="text-gray-600 hover:text-gold transition-colors">/chef-training-academy</Link></li>
              <li><Link to="/influencer-partnerships" className="text-gray-600 hover:text-gold transition-colors">/influencer-partnerships</Link></li>
              <li><Link to="/full-time-private-chef-dubai" className="text-gray-600 hover:text-gold transition-colors">/full-time-private-chef-dubai</Link></li>
              <li>/kids-nutrition-chef-dubai</li>
              <li><Link to="/apartment-private-dining-dubai" className="text-gray-600 hover:text-gold transition-colors">/apartment-private-dining-dubai</Link></li>
              <li><Link to="/chefs-table-dubai" className="text-gray-600 hover:text-gold transition-colors">/chefs-table-dubai</Link></li>
              <li><Link to="/part-time-private-chef-dubai" className="text-gray-600 hover:text-gold transition-colors">/part-time-private-chef-dubai</Link></li>
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
              <li><Link to="/chefs/ahmed-executive-chef" className="text-gray-600 hover:text-gold transition-colors">/chefs/ahmed-executive-chef</Link></li>
              <li><Link to="/chefs/matteo-pastry-chef" className="text-gray-600 hover:text-gold transition-colors">/chefs/matteo-pastry-chef</Link></li>
              <li><Link to="/chefs/marco-italian-chef" className="text-gray-600 hover:text-gold transition-colors">/chefs/marco-italian-chef</Link></li>
              <li><Link to="/chefs/layla-middle-eastern-chef" className="text-gray-600 hover:text-gold transition-colors">/chefs/layla-middle-eastern-chef</Link></li>
              <li><Link to="/catering-cost-calculator-dubai" className="text-gray-600 hover:text-gold transition-colors">/catering-cost-calculator-dubai</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Locations</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/locations" className="text-gray-600 hover:text-gold transition-colors">/locations</Link></li>
              <li>/locations/dubai-marina</li>
              <li>/locations/downtown-dubai</li>
              <li>/locations/palm-jumeirah</li>
              <li>/locations/jumeirah</li>
              <li><Link to="/locations/jbr" className="text-gray-600 hover:text-gold transition-colors">/locations/jbr</Link></li>
              <li>/locations/business-bay</li>
              <li><Link to="/locations/difc" className="text-gray-600 hover:text-gold transition-colors">/locations/difc</Link></li>
              <li>/locations/emirates-hills</li>
              <li>/locations/arabian-ranches</li>
              <li>/locations/dubai-hills</li>
              <li>/locations/jvc</li>
              <li><Link to="/locations/jlt" className="text-gray-600 hover:text-gold transition-colors">/locations/jlt</Link></li>
              <li>/locations/bluewaters-island</li>
              <li>/locations/umm-suqeim</li>
              <li><Link to="/locations/al-barsha" className="text-gray-600 hover:text-gold transition-colors">/locations/al-barsha</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Blog ({BLOG_POSTS.length})</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              {BLOG_POSTS.map((post) => (
                <li key={post.slug}>
                  <Link to={post.slug} className="text-gray-600 hover:text-gold transition-colors">
                    {post.title}
                  </Link>
                </li>
              ))}
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
              <li>/ramadan-catering-guide-dubai</li>
              <li>/luxury-dinner-planning-guide-dubai</li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Linkable assets / guides</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/guide/private-dining-dubai" className="text-gray-600 hover:text-gold transition-colors">/guide/private-dining-dubai</Link></li>
              <li>/dubai-event-catering-price-guide-2026</li>
              <li><Link to="/yacht-catering-checklist-dubai" className="text-gray-600 hover:text-gold transition-colors">/yacht-catering-checklist-dubai</Link></li>
              <li><Link to="/wedding-catering-menu-planning-dubai" className="text-gray-600 hover:text-gold transition-colors">/wedding-catering-menu-planning-dubai</Link></li>
              <li><Link to="/dubai-food-trends-report-2026" className="text-gray-600 hover:text-gold transition-colors">/dubai-food-trends-report-2026</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-black mb-4">Additional service & experience pages</h2>
            <ul className="space-y-2 font-inter text-body-sm">
              <li><Link to="/bar-services-dubai" className="text-gray-600 hover:text-gold transition-colors">/bar-services-dubai</Link></li>
              <li>/product-launch-catering-dubai</li>
              <li>/brand-activation-catering-dubai</li>
              <li>/exhibition-catering-dubai</li>
              <li>/gala-dinner-catering-dubai</li>
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
