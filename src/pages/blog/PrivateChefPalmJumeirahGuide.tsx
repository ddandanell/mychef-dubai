import { useRef } from 'react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Phone } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import BlogRelated from '../../components/BlogRelated'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import KeyFactsBox from '../../components/KeyFactsBox'
import SourcesBlock from '../../components/SourcesBlock'
import ArticleToc from '../../components/ArticleToc'
import BlogFigure from '../../components/BlogFigure'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your Private Chef Palm Jumeirah guide and would like a custom quote (via mychef.ae/blog/private-chef-palm-jumeirah-guide)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry'
const SLUG = 'private-chef-palm-jumeirah-guide'

const faqs = [
  {
    q: 'What does a private chef service include in Palm Jumeirah?',
    a: 'A typical service covers menu planning, grocery sourcing, in-home cooking, plated service or family-style presentation, and kitchen clean-up. Some hosts also request table styling, wine or mocktail pairings, and live cooking stations.',
  },
  {
    q: 'How much does a private chef cost in Palm Jumeirah?',
    a: 'Indicative pricing starts around AED 950–1,450 for a small breakfast or brunch, AED 1,450–2,450 for lunch, and AED 2,200–4,500 for dinner for 2–8 guests. Full-time live-in chefs generally range from AED 22,000–38,000+ per month plus benefits. Final quotes depend on menu complexity, guest count, and service style.',
  },
  {
    q: 'Can the chef accommodate halal, vegan, or allergy-specific menus?',
    a: 'Yes. Menus are built around your dietary requirements, including halal, vegan, vegetarian, gluten-free, dairy-free, and allergy-aware preparations. Always share restrictions when requesting a quote so the chef can plan safely.',
  },
  {
    q: 'Do I need a large villa kitchen to hire a private chef?',
    a: 'No. Experienced private chefs adapt to the kitchen space available, from full villa kitchens to compact apartment setups. They bring standard tools and only need working appliances, refrigerator space, and a sink.',
  },
  {
    q: 'How far in advance should I book a private chef in Palm Jumeirah?',
    a: 'For dinners and small celebrations, 5–7 days is usually enough. For holiday weekends, large parties, or multi-day yacht and villa bookings, 2–4 weeks is recommended to secure the best talent and ingredients.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Private Chef Palm Jumeirah: A Complete Guide to Dining at Home',
  description: 'A practical guide to hiring a private chef in Palm Jumeirah, covering menus, service styles, indicative pricing, and how to book a curated dining experience at home.',
  author: { '@id': 'https://www.mychef.ae/#organization' },
  publisher: { '@id': 'https://www.mychef.ae/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-22',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.mychef.ae/blog/${SLUG}` },
}

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mychef.ae/blog' },
    { '@type': 'ListItem', position: 3, name: 'Private Chef Palm Jumeirah Guide', item: `https://www.mychef.ae/blog/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function PrivateChefPalmJumeirahGuide() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.article-section', {
      scrollTrigger: { trigger: '.article-body', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.article-cta', {
      scrollTrigger: { trigger: '.article-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Chef Palm Jumeirah: A Complete Guide"
        description="A practical guide to hiring a private chef in Palm Jumeirah, covering menus, service styles, indicative pricing, and how to book a curated dining."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/blog/private-chef-palm-jumeirah-guide-hero.webp"
        schema={schema}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Private Chef"
        title="Private Chef Palm Jumeirah: A Complete Guide to Dining at Home"
        subtitle="Everything Dubai hosts need to know about booking a private chef for a Palm Jumeirah villa, apartment, or yacht — from menus and pricing to service and clean-up."
        image="/images/blog/private-chef-palm-jumeirah-guide-hero.webp"
        imageAlt="Private chef dining experience in Palm Jumeirah, Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Private Chef Palm Jumeirah Guide' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip />

      {/* Article */}
      <article className="bg-white section-padding">
        <div className="article-body container-custom max-w-[820px]">
          <div className="article-section opacity-0 translate-y-8 mb-8 flex items-center gap-3 text-gray-400 font-inter text-sm">
            <span>By <strong className="text-black font-medium">myCHEF Dubai Team</strong></span>
            <span>|</span>
            <time dateTime="2026-07-01">July 2026</time>
          </div>

          <KeyFactsBox
            answer="A private chef in Palm Jumeirah typically costs AED 950–1,450 for breakfast or brunch, AED 1,450–2,450 for lunch, and AED 2,200–4,500 for dinner for 2–8 guests, with full-time live-in chefs starting around AED 22,000 per month."
            facts={[
              { label: 'Breakfast / brunch', value: 'AED 950–1,450' },
              { label: 'Lunch (2–8 guests)', value: 'AED 1,450–2,450' },
              { label: 'Dinner (2–8 guests)', value: 'AED 2,200–4,500' },
              { label: 'Large party (10–30 guests)', value: 'AED 4,500–12,000+' },
              { label: 'Full-time live-in chef', value: 'AED 22,000–38,000+ / month + benefits' },
            ]}
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Palm Jumeirah is built for exceptional living, and that extends to the way residents entertain. Instead of battling traffic to a hotel restaurant, many hosts now prefer a <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef in Dubai</Link> who cooks, serves, and cleans inside their own home.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              This guide walks you through what a private chef service in Palm Jumeirah actually includes, how pricing works, and how to plan a flawless evening for your guests.
            </p>
          </section>

          <ArticleToc />
          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="why-palm-jumeirah-hosts-hire-private-chefs" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Why Palm Jumeirah Hosts Hire Private Chefs</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Privacy is the most common reason. A villa on the fronds or an apartment with a marina view gives you a setting that no restaurant can replicate. Add a chef, and the evening becomes entirely yours: no reservations, no fixed closing times, and no shared dining room.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Families with children, couples celebrating quietly, and groups of friends who want to linger over conversation all benefit from the flexibility. You control the music, dress code, guest list, and menu. The chef simply handles the food.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              For residents of <Link to="/locations/palm-jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Palm Jumeirah</Link>, the convenience is hard to beat. There is no valet queue and no late-night taxi arrangement — just a short walk from dining table to sofa.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="what-the-service-includes" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">What the Service Includes</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              A private chef booking is more than cooking. The standard flow starts with a menu consultation, followed by grocery sourcing, in-home preparation, service, and post-meal kitchen clean-up. Most chefs arrive two to four hours before service, depending on the complexity of the menu.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Service styles range from plated multi-course dinners to shared mezze boards, BBQ grill stations, sushi counters, and buffet setups for larger groups. Dietary needs are handled upfront, including halal, vegan, gluten-free, keto, and allergy-aware cooking.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              For a fully polished <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury dining experience</Link>, you can also add table styling, bartending or mocktail service, dedicated service staff, and wine or beverage pairings.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="indicative-pricing-in-palm-jumeirah" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Indicative Pricing in Palm Jumeirah</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-inter text-body-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-medium text-black">Service type</th>
                    <th className="py-3 pr-4 font-medium text-black">Typical range</th>
                    <th className="py-3 font-medium text-black">Best for</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Breakfast / brunch</td>
                    <td className="py-3 pr-4">AED 950–1,450</td>
                    <td className="py-3">Weekend gatherings, family visits</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Lunch (2–8 guests)</td>
                    <td className="py-3 pr-4">AED 1,450–2,450</td>
                    <td className="py-3">Poolside meals, working lunches</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Dinner (2–8 guests)</td>
                    <td className="py-3 pr-4">AED 2,200–4,500</td>
                    <td className="py-3">Celebrations, date nights, anniversaries</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Large party (10–30 guests)</td>
                    <td className="py-3 pr-4">AED 4,500–12,000+</td>
                    <td className="py-3">Birthdays, villas, yacht events</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Full-time live-in chef</td>
                    <td className="py-3 pr-4">AED 22,000–38,000+ / month</td>
                    <td className="py-3">Daily meals, households, frequent hosting</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-inter text-body text-gray-500 leading-relaxed mt-5">
              These ranges are indicative and vary by menu, guest count, ingredient quality, and staffing. Grocery costs are usually billed separately or bundled into a per-person package, depending on the chef.
            </p>
          </section>

          <SourcesBlock
            sources={[
              { label: 'Market-reference pricing compiled from competitor published menus and private-chef platforms (2025–26): Take a Chef, Splidu, Chef On Demand, Caterernear, Maison Culinaire' },
              { label: 'Nakheel — Palm Jumeirah community and access guidelines (general reference)' },
            ]}
            note="Pricing ranges are indicative and depend on menu complexity, guest count, service style, and ingredient sourcing. Always request an itemised quote before booking."
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="how-to-plan-the-menu" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">How to Plan the Menu</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Start with the occasion and the guests. A romantic dinner calls for a shorter, elegant menu with wine pairings. A family brunch benefits from generous sharing platters and lighter desserts. A birthday party may need canapés, a live station, and a plated cake service.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Cuisines that perform well for private dining in Dubai include Arabic sharing menus, Mediterranean seafood, Italian multi-course dinners, Indian tasting menus, and Japanese sushi counters. A good chef will suggest dishes that travel well from kitchen to table and hold their temperature during service.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Be clear about spice levels, halal requirements, alcohol service, and any allergies. The earlier you share this, the more refined the final menu becomes.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="private-chefs-for-yachts-and-special-venues" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Private Chefs for Yachts and Special Venues</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Palm Jumeirah residents do not always dine at home. Many prefer a private chef for a yacht departure from Dubai Marina or a beachside setup on the fronds. The same chef can often provision, pack, and serve meals in off-site locations, though logistics and transport time will affect the quote.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Yacht menus usually favour finger food, fresh salads, grilled seafood, and individually plated desserts that handle movement well. For villa pool parties, BBQ stations and live carving boards create a relaxed, social atmosphere without the host standing over a grill.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              If you are planning a mixed home-and-yacht itinerary, discuss it with the chef early. Menus, staffing, and equipment needs change significantly when food leaves a fully equipped kitchen.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="one-off-events-vs-recurring-private-chef-service" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">One-Off Events vs Recurring Private Chef Service</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              One-off bookings work beautifully for celebrations, anniversaries, and guest arrivals. You get a restaurant-quality experience without leaving the house, and the chef takes care of every detail for that single evening.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Recurring service is better for households that want consistent, healthy meals throughout the week. A chef may visit two or three times per week to prep lunches and dinners, or arrive daily for breakfast and dinner service. Over time, the chef learns your preferences, shortens ordering, and fine-tunes portion sizes.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Recurring arrangements also tend to reduce per-meal costs because the chef can plan ingredients across multiple sessions and minimise food waste.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="booking-and-preparation-tips" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Booking and Preparation Tips</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Book at least five to seven days ahead for a standard dinner, and two to four weeks ahead for peak weekends, holidays, or multi-day bookings. Confirm the number of guests, dietary requirements, and arrival time in writing.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Make sure your kitchen has enough refrigerator space, a working oven and stovetop, and basic serving platters if the chef is not supplying them. If your building has access cards or parking restrictions, share those details in advance.
            </p>
            <BlogFigure
              image={{
                src: '/images/blog/private-chef-palm-jumeirah-guide-2.webp',
                alt: 'Chef carrying an unmarked bag from a car toward a Palm Jumeirah villa gate',
                width: 1920,
                height: 1280,
                caption: 'On the Palm the first problem is access: gate, parking, and how the kit actually arrives.',
              }}
            />
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              On the day, the chef will handle setup, cooking, service, and clean-up. You only need to greet your guests and enjoy the evening.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="what-to-expect-on-the-day" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">What to Expect on the Day</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              The chef will arrive with ingredients and tools, confirm the final menu and timings, and begin prep. Depending on the service style, they may plate each course individually or arrange sharing dishes for the table. Service staff, if included, will refill drinks, clear plates, and reset between courses.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              After the meal, the chef wipes down surfaces, washes equipment, packs leftovers into containers, and removes rubbish. Most hosts find their kitchen cleaner than when the chef arrived.
            </p>
            <BlogFigure
              image={{
                src: '/images/blog/private-chef-palm-jumeirah-guide-3.webp',
                alt: 'Chef plating in a Palm Jumeirah villa kitchen with the waterway beyond the glass',
                width: 1920,
                height: 1280,
                caption: 'The kitchen on a frond villa looks out to water. That is the room the chef actually works in.',
              }}
            />
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="font-playfair text-h4 text-black mb-2">{f.q}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <BlogRelated currentSlug="/blog/private-chef-palm-jumeirah-guide" />

          <section className="article-cta opacity-0 translate-y-8 bg-cream p-8 md:p-12 text-center">
            <h2 className="font-playfair text-h3 text-black mb-4">Ready to Book a Private Chef in Palm Jumeirah?</h2>
            <p className="font-inter text-body text-gray-500 max-w-[600px] mx-auto mb-8">
              Tell us about your occasion, guest count, and menu preferences. We will bring you a vetted chef and send a custom quote within one business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={CTA_HREF} className="btn-primary">Request a Custom Quote</Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Phone size={16} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
