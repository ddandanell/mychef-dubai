// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /blog/corporate-catering-full-service-vs-drop-off
//     primary:     "full service vs drop off catering dubai"
//     subkeywords: "what is drop off catering dubai" · "do i need serving staff for office catering dubai" · "corporate catering full service vs drop off" · "drop off vs pick up catering" · "bbq drop off catering" · "wedding drop off catering" · "private chef vs catering" · "catering ideas dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Phone, Check, X } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'
import BlogRelated from '../../components/BlogRelated'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import KeyFactsBox from '../../components/KeyFactsBox'
import SourcesBlock from '../../components/SourcesBlock'
import ArticleToc from '../../components/ArticleToc'
import BlogFigure from '../../components/BlogFigure'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your corporate catering comparison blog and would like a proposal (via mychef.ae/blog/corporate-catering-full-service-vs-drop-off)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry'
const SLUG = 'corporate-catering-full-service-vs-drop-off'

const articleSchema = {
  '@type': 'Article',
  headline: 'Corporate Catering: Full-Service vs Drop-Off',
  description: 'Compare drop-off and fully-coordinated catering by cost, setup, staffing, and guest experience so you can choose the right format.',
  author: { '@id': 'https://www.mychef.ae/#organization' },
  publisher: { '@id': 'https://www.mychef.ae/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-09-13',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.mychef.ae/blog/${SLUG}` },
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mychef.ae/blog' },
    { '@type': 'ListItem', position: 3, name: 'Corporate Catering: Full-Service vs Drop-Off', item: `https://www.mychef.ae/blog/${SLUG}` },
  ],
}

const comparison = [
  { label: 'Food delivery', dropOff: true, fullService: true },
  { label: 'Set-up at venue', dropOff: false, fullService: true },
  { label: 'Service staff on site', dropOff: false, fullService: true },
  { label: 'Tableware & linens included', dropOff: false, fullService: true },
  { label: 'Real-time replenishment', dropOff: false, fullService: true },
  { label: 'Kitchen clear-down', dropOff: false, fullService: true },
  { label: 'Food-only coverage', dropOff: true, fullService: false },
  { label: 'Best for formal events', dropOff: false, fullService: true },
]

const faqs = [
  {
    q: 'What is the difference between drop-off and full-service corporate catering?',
    a: 'Drop-off catering delivers prepared food to your office in trays; your team handles set-up and clean-up. Full-service catering includes delivery, set-up, on-site staff, replenishment, clear-down, and often tableware and linens.',
  },
  {
    q: 'When should I choose full-service catering over drop-off?',
    a: 'Choose full-service for client-facing events, board meetings, product launches, award ceremonies, or any occasion where presentation and guest experience matter. Drop-off works well for internal working lunches and training sessions.',
  },
  {
    q: 'Can drop-off catering handle dietary restrictions and allergens?',
    a: 'Yes, but it requires clear labelling and separate packaging. Full-service makes real-time allergen management easier because staff can guide guests and keep vegetarian, halal, and allergy-aware options separate.',
  },
  {
    q: 'How far in advance should I book corporate catering in Dubai?',
    a: 'A few days is usually enough for a repeating drop-off. Two to four weeks is comfortable for a staffed event. Earlier between November and March. The headcount deadline is confirmed in the proposal.',
  },
  {
    q: 'What is included in full-service corporate catering?',
    a: 'A full-service package typically includes menu consultation, delivery, set-up, service staff, replenishment during the event, kitchen and dining clear-down, and often tableware, linens, and basic styling.',
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

export default function CorporateCateringFullServiceVsDropOff() {
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
        title="Full Service vs Drop Off Catering Dubai | myCHEF Journal"
        description="Full service vs drop off catering Dubai: drop-off is food and delivery from AED 90 per person. Full service adds staff, setup and clearance from AED 120."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/blog/corporate-catering-full-service-vs-drop-off-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Corporate Catering"
        title="Full Service vs Drop Off Catering Dubai"
        subtitle="Drop-off is food delivered and laid out. Full service is food plus people in the room. The format decides most of the price."
        image="/images/blog/corporate-catering-full-service-vs-drop-off-hero.webp"
        imageAlt="Corporate catering full service vs drop off Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Full-Service vs Drop-Off' }]}
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
            answer="Drop-off is food and delivery from AED 90 per person. Full service adds staff, setup and clearance. A staffed buffet starts from AED 120. Canapés start from AED 150. Choose the coverage the room actually needs."
            facts={[
              { label: 'Drop-off floor', value: 'From AED 90 per person, min 10 guests, AED 900 min order' },
              { label: 'Staffed buffet floor', value: 'From AED 120 per person, min 20 guests' },
              { label: 'Canapé / live station', value: 'From AED 150 per person' },
              { label: 'Best for drop-off', value: 'Repeating office lunches and training sittings' },
              { label: 'Best for full service', value: 'Client lunches, launches, awards, staff parties' },
            ]}
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Full service vs drop off catering in Dubai is a coverage question. Drop-off is food delivered and laid out. Your team serves itself and facilities clears. Full service is food plus people in the room: setup, replenishment and clearance. The food can be the same. The labour is not.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              What is drop off catering in Dubai, in practice: sealed trays or boxes, tongs, labels, a delivery window. Do you need serving staff for office catering in Dubai? Only if someone has to run a line, pass canapés or clear a client room. A Tuesday team lunch usually does not. A launch usually does.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Private chef versus catering is a different split: a household chef visit is not this page. Wedding food is not this page. BBQ drop-off is still drop-off if nobody stays. This article is for office managers, EAs and event organisers choosing coverage for a corporate sitting.
            </p>
          </section>

          <ArticleToc />
          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="what-is-drop-off-catering" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">What Is Drop-Off Catering?</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Food arrives. Your team runs the room.</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Drop-off catering delivers prepared food to your office or venue in disposable or returnable trays. Your team sets it out, guests serve themselves, and you handle the clean-up. It is the most straightforward option for working lunches, training sessions, and casual team meetings.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">When drop-off works best</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Use drop-off when the sitting is internal, the headcount is known, and nobody needs to pass plates. It starts from AED 90 per person, minimum 10 guests and AED 900. It does not include waiters. If you later add staff, that is a different line, not a cheaper version of full service.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="what-is-fully-coordinated-catering" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">What Is fully-coordinated catering?</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Everything handled for you</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              fully-coordinated catering includes delivery, set-up, on-site service staff, replenishment during the event, clear-down, and often tableware, linens, and styling. The catering team remains on site throughout the meal, allowing your employees to focus on the meeting or event.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">When full-service is the better choice</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Choose full-service for client-facing events, board meetings, award ceremonies, product launches, and any occasion where presentation and guest experience matter. It is also the right choice when no one on your team has time to manage catering logistics.
            </p>
            <BlogFigure
              image={{
                src: '/images/blog/corporate-catering-full-service-vs-drop-off-2.webp',
                alt: 'Staffed office buffet with servers behind the line',
                width: 1920,
                height: 1280,
                caption: 'Full service is people on site: servers, replenishment, clear-down. That labour is the price gap.',
              }}
            />
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="head-to-head-comparison" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Feature</th>
                    <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Drop-Off</th>
                    <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Full-Service</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-4 px-4 font-inter text-black">{row.label}</td>
                      <td className="py-4 px-4">
                        {row.dropOff ? (
                          <Check size={18} className="text-green-600" />
                        ) : (
                          <X size={18} className="text-gray-300" />
                        )}
                      </td>
                      <td className="py-4 px-4">
                        {row.fullService ? (
                          <Check size={18} className="text-green-600" />
                        ) : (
                          <X size={18} className="text-gray-300" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="budget-beyond-the-menu" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Budget Beyond the Menu</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Compare the same coverage. Drop-off from AED 90 is food and delivery. A staffed buffet from AED 120 already includes 1 to 2 people for setup and clearance. Do not add waiters again on that line. Extra staff is only for roles not in the package. 5% VAT is shown separately.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Consider your event goals. A working lunch for the internal team may not justify full-service, while a board dinner for investors almost certainly does. The right choice is the one that matches your objectives, not just your budget.
            </p>
            <BlogFigure
              image={{
                src: '/images/blog/corporate-catering-full-service-vs-drop-off-3.webp',
                alt: 'Extra servers putting on aprons in an office pantry before service',
                width: 1920,
                height: 1280,
                caption: 'The extra cost is often two more people in the pantry, not a more expensive sandwich.',
              }}
            />
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="dietary-requirements-and-dietary-labels" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Dietary Requirements and Dietary Labels</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Both formats can accommodate dietary needs, but fully-coordinated catering makes it easier to manage allergens and preferences in real time. Staff can guide guests, keep vegetarian and halal options separate, and replenish dishes that run low. For drop-off, clear labelling and separate packaging are essential.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Always share dietary requirements with your caterer at least 48 hours before the event. Last-minute changes are harder to manage and increase the risk of cross-contamination.
            </p>
          </section>

          <SourcesBlock
            sources={[
              { label: 'Dubai Municipality Food Code 2.0 — food safety, allergen management, and catering hygiene requirements' },
              { label: 'u.ae — federal food-safety framework and consumer licence verification' },
            ]}
            note="Service formats and allergen practices described reflect standard UAE catering conventions and Dubai Municipality guidance."
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="corporate-catering-with-mychef-dubai" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Corporate Catering with myCHEF Dubai</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Our <Link to="/corporate" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">corporate catering service in Dubai</Link> offers both drop-off and full-service options. We work with your office, venue, and schedule to recommend the format that best fits your event, headcount, and budget.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              From daily office lunches to gala dinners and conference receptions, we deliver food that reflects the professionalism of your brand.
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

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Also useful</h2>
            <ul className="space-y-2 font-inter text-body text-gray-600">
              <li>
                <Link to="/drop-off-catering-dubai" className="text-gold-ink underline underline-offset-4">
                  Drop-off catering
                </Link>
              </li>
              <li>
                <Link to="/office-catering-dubai" className="text-gold-ink underline underline-offset-4">
                  Office catering
                </Link>
              </li>
              <li>
                <Link to="/blog/corporate-event-catering-ideas-dubai" className="text-gold-ink underline underline-offset-4">
                  Corporate event catering ideas
                </Link>
              </li>
              <li>
                <Link to="/corporate-catering-checklist-dubai" className="text-gold-ink underline underline-offset-4">
                  Corporate catering checklist
                </Link>
              </li>
            </ul>
          </section>

          <BlogRelated currentSlug="/blog/corporate-catering-full-service-vs-drop-off" />

          {/* ═══════════════ CTA ═══════════════ */}
          <section className="article-cta bg-cream border border-gray-200 p-8 md:p-10 opacity-0 translate-y-8">
            <h2 className="font-playfair text-h3 text-black mb-3">Full Service vs Drop Off Catering Dubai: Plan Your Next Corporate Event</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
              Tell us about your event, headcount, and service preference. We will recommend the right format and send a transparent, itemised proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to={CTA_HREF} className="btn-primary">
                Request a Corporate Quote
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
