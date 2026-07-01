import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your Halal Private Dining in Dubai blog and would like a custom quote (via mychef.ae/blog/halal-private-dining-dubai-what-to-ask)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=blog_cta&utm_campaign=halal-private-dining-dubai-what-to-ask'
const SLUG = 'halal-private-dining-dubai-what-to-ask'

const faqs = [
  {
    q: 'Do I need to ask for a halal certificate when booking private dining in Dubai?',
    a: 'You should always ask how the chef or company defines halal. Some hosts require certified halal meat from approved suppliers; others are comfortable with a chef who prepares only halal ingredients. Clear written confirmation before booking prevents misunderstandings on the day of your event.',
  },
  {
    q: 'Can a halal private dinner still accommodate non-halal guests?',
    a: 'Yes, but the arrangement matters. Many hosts prefer a fully halal menu so every guest can eat with confidence. If some guests want non-halal items, discuss whether those will be served at all, or kept completely separate from preparation, plating, and service.',
  },
  {
    q: 'How does the chef prevent cross-contamination with non-halal ingredients?',
    a: 'Ask about separate chopping boards, knives, cookware, and serving utensils. In shared kitchens, clarify who is responsible for sanitising surfaces before prep begins, and whether halal ingredients are stored in sealed, labelled containers away from other foods.',
  },
  {
    q: 'Is alcohol allowed at a halal private dining event?',
    a: 'This depends on the chef, the host, and the venue. Some halal-focused experiences are alcohol-free by policy; others allow guests to bring their own beverages while the food remains strictly halal. State your preference clearly when requesting a quote.',
  },
  {
    q: 'What is the indicative cost for halal private dining in Dubai?',
    a: 'A multi-course halal dinner at home typically ranges from AED 350–750 per person, depending on menu complexity and service level. Buffet-style events often fall between AED 180–350 per person. A full-time private chef averages AED 18,000–35,000+ per month plus employment costs.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Halal Private Dining in Dubai: What to Ask Before You Book',
  description: 'A practical guide for Dubai hosts booking halal private dining, covering certification, cross-contamination, alcohol policy, sourcing, and indicative costs.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai Team' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://mychef.ae/blog/${SLUG}` },
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://mychef.ae/blog' },
    { '@type': 'ListItem', position: 3, name: 'Halal Private Dining in Dubai', item: `https://mychef.ae/blog/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

export default function HalalPrivateDiningDubaiWhatToAsk() {
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
        title="Halal Private Dining in Dubai: What to Ask Before You Book | myCHEF"
        description="A practical guide for Dubai hosts booking halal private dining, covering certification, cross-contamination, alcohol policy, sourcing, and indicative costs."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/halal-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Halal"
        title="Halal Private Dining in Dubai: What to Ask Before You Book"
        subtitle="The questions every host should ask to ensure a fully halal, stress-free private dining experience at home or in a villa."
        image="/images/halal-catering-dubai-hero.webp"
        imageAlt="Halal private dining setup in Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Halal Private Dining Dubai' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* Article */}
      <article className="bg-white section-padding">
        <div className="article-body container-custom max-w-[820px]">
          <div className="article-section opacity-0 translate-y-8 mb-8 flex items-center gap-3 text-gray-400 font-inter text-sm">
            <span>By <strong className="text-black font-medium">myCHEF Dubai Team</strong></span>
            <span>|</span>
            <time dateTime="2026-07-01">July 2026</time>
          </div>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Dubai is home to some of the finest halal dining experiences in the world, but bringing that experience into a private home, villa, or yacht adds a layer of responsibility. When you book <strong>halal private dining</strong>, you are not just choosing a cuisine; you are choosing how ingredients are sourced, how a kitchen is managed, and how guests are served.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              This guide walks you through the questions every host should ask before confirming a booking, so your event is both memorable and aligned with halal principles.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">What Does Halal Private Dining Actually Mean?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              At its core, halal private dining means every dish is prepared, handled, and served in line with Islamic dietary law. That usually includes halal-certified meat and poultry, the absence of pork and non-halal animal by-products, and careful attention to alcohol, cross-contamination, and overall kitchen hygiene.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              However, &ldquo;halal-friendly&rdquo; is not a regulated phrase. One chef may simply avoid pork and alcohol, while another works only with certified suppliers and dedicated equipment. Always ask for specifics rather than assuming.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">1. Where Do You Source Meat and Poultry?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              The starting point for any halal menu is the protein. Ask whether the chef buys from a UAE-approved halal supplier, whether certificates can be shown on request, and whether all meat, poultry, and processed items such as sausages, deli cuts, or stocks are halal-certified.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              If you are serving a mixed group of guests, this is also a reassurance for non-Muslim attendees that the food meets high welfare and quality standards.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">2. How Do You Handle Cross-Contamination?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Cross-contamination is one of the most common concerns for hosts who want a fully halal meal. In a home kitchen, this means more than avoiding pork; it includes separating knives, boards, pans, oils, and marinades that may have touched non-halal foods.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              A professional <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef in Dubai</Link> should arrive with a clear prep plan, sanitise surfaces before starting, and use separate utensils for halal proteins. If your kitchen is shared or has been used for non-halal cooking, mention this in advance so the chef can plan accordingly.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">3. What Is Your Alcohol Policy?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Halal food must not be cooked with alcohol, and many hosts also prefer an alcohol-free event. Ask whether the chef uses wine, spirits, or beer in any sauces, desserts, or reductions. Even trace amounts in a glaze or stock can affect the halal status of the dish.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Beyond the food, decide whether guests may bring their own alcoholic beverages. Some halal caterers offer alcohol-free service entirely; others are comfortable with a &ldquo;bring your own&rdquo; arrangement as long as food preparation remains halal. Clarify this before the event.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">4. Can the Menu Be Customised for Dietary Needs?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              A halal private dinner can easily be made gluten-free, dairy-free, nut-free, or vegan alongside halal proteins. The key is giving the chef a full list of allergies, intolerances, and strong preferences well ahead of the event.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              If you are planning a larger gathering, a <Link to="/halal-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">halal catering</Link> partner can design a buffet, family-style menu, or plated tasting that satisfies multiple requirements without compromising on flavour or presentation.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">5. What Service Style and Staff Are Included?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Private dining is about more than the food. Ask whether the chef cooks and leaves, or whether service staff, table settings, plating, and clean-up are included. For formal dinners, you may want waiting staff; for intimate family meals, a single chef may be enough.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Confirm arrival times, setup requirements, number of guests, and how long the team will stay after the last course. This protects your schedule and ensures the kitchen is left spotless.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Indicative Pricing for Halal Private Dining in Dubai</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Costs vary widely based on guest count, menu complexity, service style, and whether premium ingredients such as wagyu, fresh seafood, or truffle are included. The figures below are indicative and should be treated as a starting point, not a final quote.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-inter text-body-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 font-medium text-black">Format</th>
                    <th className="py-3 pr-4 font-medium text-black">Indicative cost per person</th>
                    <th className="py-3 font-medium text-black">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Multi-course plated dinner</td>
                    <td className="py-3 pr-4">AED 350–750</td>
                    <td className="py-3">Chef + service staff; premium proteins increase cost</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Buffet or family-style</td>
                    <td className="py-3 pr-4">AED 180–350</td>
                    <td className="py-3">Larger groups; fewer staff per guest</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 pr-4">Canapé reception</td>
                    <td className="py-3 pr-4">AED 150–300</td>
                    <td className="py-3">Short service window; bite-sized menu</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Full-time private chef</td>
                    <td className="py-3 pr-4">AED 18,000–35,000+ / month</td>
                    <td className="py-3">Plus visa, insurance, and accommodation costs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="font-inter text-body text-gray-500 leading-relaxed mt-5">
              Always request an itemised quote that separates food, service, rentals, and any travel fees so you can compare options fairly.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Final Checklist Before You Confirm</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Before signing off, make sure you have written confirmation on the following points:
            </p>
            <ul className="list-disc list-inside font-inter text-body text-gray-500 leading-relaxed mb-5 space-y-2">
              <li>Halal sourcing policy and supplier details</li>
              <li>Cross-contamination prevention plan</li>
              <li>Alcohol policy for both food preparation and guest beverages</li>
              <li>Menu customisation for allergies and dietary restrictions</li>
              <li>Service staff, timings, rentals, and clean-up responsibilities</li>
              <li>Itemised pricing and payment terms</li>
              <li>Cancellation, postponement, and refund terms</li>
            </ul>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              A reputable <Link to="/faq" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef or catering team</Link> will welcome these questions and answer them transparently. If a provider is vague about halal handling, that is a sign to keep looking.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Hosting Mixed Groups and Corporate Guests</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Halal private dining is not limited to family celebrations. Corporate iftars, brand activations, yacht launches, and Eid gatherings often include guests from different backgrounds. A well-designed halal menu lets everyone eat from the same spread without anyone needing to ask awkward questions about ingredients.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              For corporate events, ask whether the chef can provide branded menu cards, portion counts, and service staff ratios that match the formality of the occasion. If you are hosting a seated dinner for twenty or a standing reception for two hundred, the operational plan should be very different.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              The goal is the same in every case: your guests should remember the flavours and the hospitality, not the logistics. Working with an experienced <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef</Link> or <Link to="/halal-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">halal catering</Link> partner makes that possible.
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

          <section className="article-cta opacity-0 translate-y-8 bg-cream p-8 md:p-12 text-center">
            <h2 className="font-playfair text-h3 text-black mb-4">Book a Fully Halal Private Dining Experience</h2>
            <p className="font-inter text-body text-gray-500 max-w-[600px] mx-auto mb-8">
              Tell us about your event, guest count, and halal requirements. We will design a menu and service plan that gives you complete peace of mind.
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
