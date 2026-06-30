import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Check, X } from 'lucide-react'
import SEO from '../../components/SEO'
import PageHero from '../../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your corporate catering comparison blog and would like a proposal (via mychef.ae/blog/corporate-catering-full-service-vs-drop-off)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=blog_cta&utm_campaign=corporate-catering-full-service-vs-drop-off'
const SLUG = 'corporate-catering-full-service-vs-drop-off'

const articleSchema = {
  '@type': 'Article',
  headline: 'Corporate Catering: Full-Service vs Drop-Off',
  description: 'Compare drop-off and full-service corporate catering by cost, setup, staffing, and guest experience so you can choose the right format.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai Team' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://mychef.ae/blog/${SLUG}` },
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://mychef.ae/blog' },
    { '@type': 'ListItem', position: 3, name: 'Corporate Catering: Full-Service vs Drop-Off', item: `https://mychef.ae/blog/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, breadcrumbSchema],
}

const comparison = [
  { label: 'Food delivery', dropOff: true, fullService: true },
  { label: 'Set-up at venue', dropOff: false, fullService: true },
  { label: 'Service staff on site', dropOff: false, fullService: true },
  { label: 'Tableware & linens included', dropOff: false, fullService: true },
  { label: 'Real-time replenishment', dropOff: false, fullService: true },
  { label: 'Kitchen clear-down', dropOff: false, fullService: true },
  { label: 'Lowest cost per head', dropOff: true, fullService: false },
  { label: 'Best for formal events', dropOff: false, fullService: true },
]

export default function CorporateCateringFullServiceVsDropOff() {
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
        title="Corporate Catering: Full-Service vs Drop-Off | myCHEF"
        description="Compare drop-off and full-service corporate catering by cost, setup, staffing, and guest experience so you can choose the right format."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/corporate-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Corporate Catering"
        title="Corporate Catering: Full-Service vs Drop-Off"
        subtitle="Understand the difference between drop-off and full-service corporate catering so you can choose the right format for your office or event."
        image="/images/corporate-catering-dubai-hero.webp"
        imageAlt="Corporate catering full service vs drop off Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Full-Service vs Drop-Off' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ═══════════════ Article ═══════════════ */}
      <article className="bg-white section-padding">
        <div className="article-body container-custom max-w-[820px]">
          <div className="article-section opacity-0 translate-y-8 mb-8 flex items-center gap-3 text-gray-400 font-inter text-sm">
            <span>By <strong className="text-black font-medium">myCHEF Dubai Team</strong></span>
            <span>|</span>
            <time dateTime="2026-07-01">July 2026</time>
          </div>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Corporate catering in Dubai comes in two main formats: drop-off and full-service. Both can deliver excellent food, but they suit very different occasions, budgets, and guest expectations. Choosing the wrong format can leave your team eating cold food from plastic trays or, conversely, paying for service staff you do not need.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              This guide breaks down the differences so you can make a confident decision for your next office lunch, board meeting, product launch, or company celebration.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">What Is Drop-Off Catering?</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Simple, efficient, and budget-friendly</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Drop-off catering delivers prepared food to your office or venue in disposable or returnable trays. Your team sets it out, guests serve themselves, and you handle the clean-up. It is the most straightforward option for working lunches, training sessions, and casual team meetings.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">When drop-off works best</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              This format is ideal when you have a tight budget, limited space, no need for table service, and someone on your team who can manage set-up and disposal. It is fast, flexible, and easy to scale for large headcounts.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">What Is Full-Service Corporate Catering?</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Everything handled for you</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Full-service catering includes delivery, set-up, on-site service staff, replenishment during the event, clear-down, and often tableware, linens, and styling. The catering team remains on site throughout the meal, allowing your employees to focus on the meeting or event.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">When full-service is the better choice</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Choose full-service for client-facing events, board meetings, award ceremonies, product launches, and any occasion where presentation and guest experience matter. It is also the right choice when no one on your team has time to manage catering logistics.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Head-to-Head Comparison</h2>
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
            <h2 className="font-playfair text-h2 text-black mb-5">Budget Beyond the Menu</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              When comparing quotes, look at the total cost rather than the per-head food price. Drop-off may seem cheaper, but if you need to buy disposables, assign staff to set up, or lose productivity managing logistics, the savings shrink. Full-service includes these elements upfront and usually delivers a smoother experience.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Consider your event goals. A working lunch for the internal team may not justify full-service, while a board dinner for investors almost certainly does. The right choice is the one that matches your objectives, not just your budget.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Dietary Requirements and Dietary Labels</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Both formats can accommodate dietary needs, but full-service catering makes it easier to manage allergens and preferences in real time. Staff can guide guests, keep vegetarian and halal options separate, and replenish dishes that run low. For drop-off, clear labelling and separate packaging are essential.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Always share dietary requirements with your caterer at least 48 hours before the event. Last-minute changes are harder to manage and increase the risk of cross-contamination.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Corporate Catering with myCHEF Dubai</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Our <Link to="/corporate" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">corporate catering service in Dubai</Link> offers both drop-off and full-service options. We work with your office, venue, and schedule to recommend the format that best fits your event, headcount, and budget.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              From daily office lunches to gala dinners and conference receptions, we deliver food that reflects the professionalism of your brand.
            </p>
          </section>

          {/* ═══════════════ CTA ═══════════════ */}
          <section className="article-cta bg-cream border border-gray-200 p-8 md:p-10 opacity-0 translate-y-8">
            <h2 className="font-playfair text-h3 text-black mb-3">Plan Your Next Corporate Event</h2>
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
