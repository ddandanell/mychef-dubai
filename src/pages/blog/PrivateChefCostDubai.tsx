import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import BlogRelated from '../../components/BlogRelated'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import KeyFactsBox from '../../components/KeyFactsBox'
import SourcesBlock from '../../components/SourcesBlock'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your private chef cost blog and would like a custom quote (via mychef.ae/blog/how-much-does-private-chef-cost-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=how-much-does-private-chef-cost-dubai'
const SLUG = 'how-much-does-private-chef-cost-dubai'

const articleSchema = {
  '@type': 'Article',
  headline: 'How Much Does a Private Chef Cost in Dubai?',
  description: 'A practical breakdown of private chef pricing in Dubai, the factors that move the cost, and how to get an accurate quote for your dinner.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai Team' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://www.mychef.ae' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-22',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.mychef.ae/blog/${SLUG}` },
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mychef.ae/blog' },
    { '@type': 'ListItem', position: 3, name: 'How Much Does a Private Chef Cost in Dubai?', item: `https://www.mychef.ae/blog/${SLUG}` },
  ],
}

const faqs = [
  {
    q: 'How much does a private chef cost per person in Dubai?',
    a: 'A multi-course private chef dinner in Dubai typically ranges from AED 350 to AED 650 per person. Smaller, highly bespoke dinners for two to six guests often sit at the higher end because the chef’s time is spread across fewer people.',
  },
  {
    q: 'What is included in a private chef’s fee?',
    a: 'A typical fee covers menu consultation, grocery shopping, ingredient preparation, cooking at your venue, service during the meal, and kitchen clean-up. Wines, specialty rentals, extra staff, and long-distance transport may be quoted separately.',
  },
  {
    q: 'Why do small dinners sometimes cost more per person?',
    a: 'The chef, assistant, and preparation time are fixed costs divided by the number of guests. With fewer guests, each person carries a larger share of that fixed cost, so the per-person price rises even though the total bill is lower.',
  },
  {
    q: 'Are groceries included in the private chef price?',
    a: 'Usually yes, either bundled into the per-person or daily rate, or billed as a separate grocery line. Always ask for an itemised proposal so you know whether ingredients, service, and staff are included or charged separately.',
  },
  {
    q: 'How do I get an accurate private chef quote in Dubai?',
    a: 'Share the date, location, number of guests, preferred cuisine, dietary restrictions, and service style. The more detail you provide, the more accurate the estimate. Tastings are available for larger or more complex bookings.',
  },
]

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function PrivateChefCostDubai() {
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
        title="How Much Does a Private Chef Cost in Dubai?"
        description="A practical breakdown of private chef pricing in Dubai, the factors that move the cost, and how to get an accurate quote for your dinner."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/private-chef-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Private Chef"
        title="How Much Does a Private Chef Cost in Dubai?"
        subtitle="Understand what goes into private chef pricing so you can budget confidently for an intimate dinner, family celebration, or special occasion."
        image="/images/private-chef-dubai-hero.webp"
        imageAlt="Private chef cost Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Private Chef Cost Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip />

      {/* ═══════════════ Article ═══════════════ */}
      <article className="bg-white section-padding">
        <div className="article-body container-custom max-w-[820px]">
          <div className="article-section opacity-0 translate-y-8 mb-8 flex items-center gap-3 text-gray-400 font-inter text-sm">
            <span>By <strong className="text-black font-medium">myCHEF Dubai Team</strong></span>
            <span>|</span>
            <time dateTime="2026-07-01">July 2026</time>
          </div>

          <KeyFactsBox
            answer="A private chef dinner in Dubai typically ranges from AED 350–650 per person for a multi-course meal, while daily or weekly chef services usually fall between AED 1,500–4,000 per day depending on scope."
            facts={[
              { label: 'Multi-course dinner', value: 'AED 350–650 per person' },
              { label: 'Daily / weekly chef service', value: 'AED 1,500–4,000 per day' },
              { label: 'Small bespoke dinners', value: 'Often at the higher end per person' },
              { label: 'Major cost drivers', value: 'Group size, menu complexity, ingredients, staffing' },
              { label: 'Usually included', value: 'Menu planning, groceries, cooking, service, clean-up' },
            ]}
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Hiring a private chef in Dubai is one of the easiest ways to turn a regular evening into a memorable dining experience. Whether you want a romantic dinner for two, a family celebration in your villa, or a refined tasting menu for friends, a private chef brings restaurant-quality food and service directly to your home.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Pricing varies based on group size, menu complexity, ingredients, and staffing. This guide explains typical private chef costs in Dubai and what to ask when requesting a quote.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Typical Private Chef Price Ranges</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              In Dubai, private chef dinners typically range from AED 350 to AED 650 per person for a multi-course meal prepared and served in your home or villa. Smaller, highly bespoke dinners for two to six guests often sit at the higher end of the range because the chef’s time and preparation are spread across fewer people.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              For daily or weekly private chef services, pricing is usually structured as a daily rate or retainer rather than per head. This can range from AED 1,500 to AED 4,000 per day depending on the number of meals, dietary complexity, and whether the chef handles grocery shopping.
            </p>
          </section>

          <SourcesBlock
            sources={[
              { label: 'Market-reference pricing compiled from competitor published menus and platform rates (2025–26): Take a Chef, Splidu, Chef On Demand, Caterernear, Maison Culinaire' },
            ]}
            note="Pricing ranges are indicative and vary by guest count, menu complexity, ingredient quality, staffing, and travel. Always request an itemised quote before booking."
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">What Affects the Cost?</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Group size</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Smaller groups usually have a higher per-person cost because the chef, assistant, and ingredients are divided among fewer guests. Larger groups of twelve or more can benefit from economies of scale, though they may require additional service staff.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Menu complexity</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              A three-course bistro menu costs less than a six-course tasting menu with wine pairings and intricate plating. Live cooking stations, molecular touches, and highly customised themes all increase preparation time and cost.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Ingredients and cuisine</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Premium proteins such as wagyu, lobster, truffles, or imported specialty items will raise the price. Seasonal, locally sourced menus are often more cost-effective while still delivering excellent flavour.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Staffing and service</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              A private chef may work alone for intimate dinners or bring a sous chef and waiters for larger events. The level of service you want — from casual family-style to formal plated dining — directly affects staffing costs.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">What Is Included in the Price?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              A typical private chef quote includes menu consultation, grocery shopping, ingredient preparation, cooking at your venue, service during the meal, and kitchen clean-up. Some chefs also provide table styling advice or coordinate rentals.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Items that may be quoted separately include wines and beverages, specialty rentals, additional service staff, and transport to venues outside central Dubai. Always ask for an itemised proposal so you know exactly what is covered.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">How to Get an Accurate Quote</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              To receive a precise quote, share the date, location, number of guests, preferred cuisine, dietary restrictions, and service style. The more detail you provide, the more accurate the estimate. If you are flexible on menu or service style, mention that too — a good chef can suggest options that fit your budget.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Tastings are available for larger bookings or complex menus. They are a worthwhile investment if you want to confirm flavour profiles and presentation before the main event.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Is a Private Chef Worth It?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              For many Dubai residents and visitors, the value of a private chef goes beyond the food. It means no restaurant reservations, no traffic, no rushed service, and a menu designed around your exact preferences. You control the music, the guest list, the pace, and the atmosphere.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              When compared to a high-end restaurant bill for a similar group — including transport, drinks, and tips — a private chef can be surprisingly competitive while offering a far more personalised experience.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Book a Private Chef with myCHEF Dubai</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Our <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">private chef service in Dubai</Link> brings you experienced chefs who design bespoke menus for intimate dinners, family gatherings, and special celebrations. we design and manage the experience from ingredients to service so you can enjoy the evening as a guest.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Share your vision with us and we will provide a transparent, itemised quote based on your group, menu, and venue.
            </p>
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

          <BlogRelated currentSlug="/blog/how-much-does-private-chef-cost-dubai" />

          {/* ═══════════════ CTA ═══════════════ */}
          <section className="article-cta bg-cream border border-gray-200 p-8 md:p-10 opacity-0 translate-y-8">
            <h2 className="font-playfair text-h3 text-black mb-3">Get Your Private Chef Quote</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
              Tell us about your occasion, guest count, and preferred cuisine. We will design a private dining experience tailored to your home or villa in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to={CTA_HREF} className="btn-primary">
                Request My Quote
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
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
