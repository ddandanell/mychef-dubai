import BlogProse from '@/components/blog/BlogProse'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /blog/private-chef-palm-jumeirah-guide
//     primary:     "planning a dinner in palm jumeirah: kitchen and access checklist"
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
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
import ArticleToc from '../../components/ArticleToc'
import BlogFigure from '../../components/BlogFigure'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your Private Chef Palm Jumeirah guide and would like a custom quote (via mychef.ae/blog/private-chef-palm-jumeirah-guide)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = "/luxury-dining-experiences"
const SLUG = 'private-chef-palm-jumeirah-guide'

const faqs = [
  {
    q: 'What does a private chef service include in Palm Jumeirah?',
    a: 'A typical service covers menu planning, grocery sourcing, in-home cooking, plated service or family-style presentation, and kitchen clean-up. Some hosts also request table styling, wine or mocktail pairings, and live cooking stations.',
  },
  {
    q: 'How much does a private chef cost in Palm Jumeirah?',
    a: 'The price depends on the cooking time, menu, guest count and service responsibilities. Check the current service or pricing page, then request an itemised proposal with groceries, staffing, transport and VAT identified.',
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
  headline: "Planning a Dinner in Palm Jumeirah: Kitchen and Access Checklist",
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
        title="Palm Jumeirah Dinner Planning: Kitchen & Access | myCHEF"
        description="A Palm Jumeirah dinner brief should explain property access, the kitchen and where guests will eat."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/blog/private-chef-palm-jumeirah-guide-hero.webp"
        schema={schema}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Private Chef"
        title="Planning a Dinner in Palm Jumeirah: Kitchen and Access Checklist"
        subtitle={"A Palm Jumeirah dinner brief should explain property access, the kitchen and where guests will eat. Confirm gate passes, parking and preparation space before deciding on the menu."}
        image="/images/blog/private-chef-palm-jumeirah-guide-hero.webp"
        imageAlt="Private chef dining experience in Palm Jumeirah, Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Private Chef Palm Jumeirah Guide' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip />

      {/* Article */}
      <BlogProse className="bg-white section-padding">
        <div className="article-body container-custom max-w-[820px]">
          <div className="article-section opacity-0 translate-y-8 mb-8 flex items-center gap-3 text-gray-400 font-inter text-sm">
            <span>By <strong className="text-black font-medium">myCHEF Dubai Team</strong></span>
            <span>|</span>
            <time dateTime="2026-07-01">July 2026</time>
          </div>

          <KeyFactsBox
            answer="A Palm Jumeirah dinner brief should explain property access, the kitchen and where guests will eat. Confirm gate passes, parking and preparation space before deciding on the menu."
            facts={[
              { label: 'Start with', value: 'Guest needs and meal format' },
              { label: 'Prepare', value: 'Kitchen photos and access details' },
              { label: 'Confirm', value: 'Menu, responsibilities and service window' },
              { label: 'Prices', value: 'See the current service page and written proposal' },
            ]}
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A Palm Jumeirah dinner brief should explain property access, the kitchen and where guests will eat. Confirm gate passes, parking and preparation space before deciding on the menu.
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef in Dubai</Link> who cooks, serves, and cleans inside their own home.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              This guide walks you through what a private chef service in Palm Jumeirah actually includes, how pricing works, and how to plan a flawless evening for your guests.
            </p>
          </section>

          <p className="font-inter text-body text-gray-500 mb-8">For the service itself, explore <Link to="/luxury-dining-experiences" className="text-gold underline underline-offset-4">private dining experiences in Dubai</Link>. Use the checklist below to prepare your brief.</p>
          <ArticleToc />
          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="why-palm-jumeirah-hosts-hire-private-chefs" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Why Palm Jumeirah Hosts Hire Private Chefs</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Privacy is the most common reason. A villa on the fronds or an apartment with a marina view gives you a setting that no restaurant can replicate. Add a chef, and the evening becomes entirely yours: no reservations, no fixed closing times, and no shared dining room.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">Compare the current service options and confirm the menu, cooking time, ingredients, staffing and transport in the written proposal. Household cooking and a staffed celebration are different arrangements.</p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Families with children, couples celebrating quietly, and groups of friends who want to linger over conversation all benefit from the flexibility. You control the music, dress code, guest list, and menu. The chef simply handles the food.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              For residents of Palm Jumeirah, the convenience is hard to beat. There is no valet queue and no late-night taxi arrangement: just a short walk from dining table to sofa.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="what-the-service-includes" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Questions to Confirm About the Service</h2>
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
            <h2 id="indicative-pricing-in-palm-jumeirah" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Compare the Scope of Your Proposal</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed">For current options, see <Link to="/luxury-dining-experiences" className="text-gold underline underline-offset-4">private dining experiences in Dubai</Link>. Use the menu, guest count, kitchen and service requirements to request an itemised proposal.</p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mt-5">
              These ranges are indicative and vary by menu, guest count, ingredient quality, and staffing. Grocery costs are usually billed separately or bundled into a per-person package, depending on the chef.
            </p>
          </section>



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
            <h2 className="font-playfair text-h3 text-black mb-4">Put Your Palm Jumeirah Dinner Brief Together</h2>
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
      </BlogProse>
    </div>
  )
}
