import { useRef } from 'react'
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

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your Ramadan Iftar trends blog and would like a custom Iftar proposal (via mychef.ae/blog/ramadan-iftar-catering-trends-2026)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=ramadan-iftar-catering-trends-2026'
const SLUG = 'ramadan-iftar-catering-trends-2026'

const articleSchema = {
  '@type': 'Article',
  headline: 'Ramadan Iftar Catering Trends for 2026',
  description: 'Discover the Ramadan Iftar catering trends shaping Dubai in 2026, from grazing-style tables and modern Emirati dishes to sustainable sourcing and mocktail menus.',
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
    { '@type': 'ListItem', position: 3, name: 'Ramadan Iftar Catering Trends 2026', item: `https://www.mychef.ae/blog/${SLUG}` },
  ],
}

const faqs = [
  {
    q: 'What are the top Ramadan Iftar catering trends for 2026?',
    a: 'The leading trends are grazing-style Iftar tables, modern Emirati dishes served in lighter formats, locally sourced ingredients, creative mocktails and hydration menus, and digital pre-ordering to manage dietary needs and reduce waste.',
  },
  {
    q: 'How can I reduce food waste at a large Iftar?',
    a: 'Plan around accurate headcounts, use portion-controlled live stations, and arrange for untouched surplus to be donated through local food-sharing platforms. Grazing tables also let guests take only what they want.',
  },
  {
    q: 'What drinks are popular for Iftar in Dubai?',
    a: 'Beyond traditional jallab and tamarind, hosts are requesting rose-water lemonade, date smoothies, sparkling pomegranate spritzers, and cardamom iced coffee. Water and electrolyte-rich options are also provided through the evening.',
  },
  {
    q: 'Can Iftar catering accommodate dietary restrictions?',
    a: 'Yes. Vegetarian, vegan, gluten-free, dairy-free, and nut-free options can be built into the menu from the start. Collect requirements early so the kitchen can plan safely and avoid cross-contamination.',
  },
  {
    q: 'How far in advance should I book Ramadan catering in Dubai?',
    a: 'For intimate family Iftars, one week is usually enough. For corporate Iftars, large venues, or peak weekends during Ramadan, book two to four weeks ahead to secure staff and preferred ingredients.',
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

export default function RamadanIftarTrends2026() {
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
        title="Ramadan Iftar Catering Trends 2026"
        description="Discover the Ramadan Iftar catering trends shaping Dubai in 2026, from grazing-style tables and modern Emirati dishes to sustainable sourcing and more."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/ramadan-iftar-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Ramadan 2026"
        title="Ramadan Iftar Catering Trends for 2026"
        subtitle="What Dubai hosts are requesting this Holy Month — and how to design an Iftar that feels generous, modern, and deeply memorable."
        image="/images/ramadan-iftar-catering-dubai-hero.webp"
        imageAlt="Ramadan Iftar catering trends Dubai 2026"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Ramadan Iftar Trends 2026' }]}
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
            answer="In 2026, Dubai Iftar catering trends favor grazing-style sharing tables, modern Emirati flavors, locally sourced ingredients, creative mocktails, and digital pre-ordering to reduce waste and accommodate dietary needs."
            facts={[
              { label: 'Leading formats', value: 'Grazing tables, live stations, sharing mezze' },
              { label: 'Signature dishes', value: 'Lamb ouzi, harees, machboos, balaleet' },
              { label: 'Beverage focus', value: 'Rose lemonade, date smoothies, cardamom iced coffee' },
              { label: 'Sourcing priority', value: 'Al Ain dates, UAE farm vegetables, regional seafood' },
              { label: 'Planning tip', value: 'Collect dietary requirements early' },
            ]}
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Ramadan in Dubai is more than a month of fasting; it is a season of gathering, generosity, and carefully planned hospitality. In 2026, Iftar catering is moving away from predictable buffet lines toward curated, visually striking tables that honour tradition while embracing modern dining habits. Hosts want menus that feel abundant without being wasteful, and service that lets guests focus on prayer, family, and conversation.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Whether you are organising an intimate family Iftar or a corporate gathering for several hundred guests, understanding the latest trends helps you plan an event that feels timely and thoughtful.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Modern Emirati Flavours with a Contemporary Touch</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Reinterpreting classic dishes</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              This year, hosts are requesting Emirati staples — lamb ouzi, harees, machboos, and balaleet — presented in lighter, more refined formats. Think mini ouzi portions, individually plated harees, or machboos served from live cooking stations where guests can choose their proteins and garnishes. The flavours remain authentic, but the presentation suits contemporary tables.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Mezze as a conversation starter</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Shared mezze boards are replacing rigid starters. A mix of hot and cold Arabic appetisers — falafel bites, kibbeh, labneh, muhammara, and stuffed vine leaves — encourages guests to graze naturally after Maghrib.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Sustainable, Seasonal Sourcing</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Reducing waste without reducing generosity</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Large Iftar spreads have historically produced significant food waste. In 2026, caterers are designing menus around accurate headcounts, offering portion-controlled live stations, and donating untouched surplus through local food-sharing platforms. Guests still leave satisfied; hosts leave with a clearer conscience.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Local and regional ingredients</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Dates from Al Ain, seafood from regional waters, and seasonal vegetables from UAE farms are being featured more prominently. Menus now tell a story about provenance, which resonates with both residents and international visitors.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Grazing and Sharing-Style Iftar Tables</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              The traditional long buffet is being reimagined as a series of styled grazing tables. Separate stations for salads, hot mains, breads, and desserts allow guests to move at their own pace and reduce bottlenecks. This format also photographs beautifully, which matters when many hosts share their events online.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Sharing-style service is particularly effective for mixed groups where some guests prefer light salads while others want a full hot meal. It offers flexibility without the formality of plated courses.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Mocktails and Hydration-First Beverage Menus</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Beyond juice jugs</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Iftar drinks are becoming more sophisticated. Rose-water lemonades, date smoothies, sparkling pomegranate spritzers, and cardamom iced coffee are appearing alongside traditional jallab and tamarind. Beverage stations are often staffed so guests receive a fresh pour rather than helping themselves from large dispensers.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Hydration throughout the evening</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Smart hosts now provide water and electrolyte-rich options not only at Iftar but also throughout the evening. This is especially appreciated at corporate events where guests may return to work or evening engagements.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Smarter Ordering and Dietary Planning</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Technology is making Ramadan catering easier. Online pre-ordering, digital dietary forms, and guest-specific labels help kitchens plan accurately and avoid cross-contamination. Vegetarian, vegan, gluten-free, and nut-free options are no longer afterthoughts; they are built into the menu from the start.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              If you are planning an Iftar for colleagues or clients, collecting dietary requirements early ensures every guest feels considered. It also helps the catering team avoid last-minute substitutions.
            </p>
          </section>

          <SourcesBlock
            sources={[
              { label: 'Dubai Municipality Food Code 2.0 — food safety, allergen controls, and catering guidance' },
              { label: 'UAE Government Portal (u.ae) — Ramadan customs, working hours, and public observance' },
            ]}
            note="Cultural and culinary trends described reflect current Dubai hospitality practices and commonly requested Iftar formats; they are not official decrees."
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Planning Your Iftar with myCHEF Dubai</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Our <Link to="/ramadan-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">Ramadan catering service in Dubai</Link> is designed around the rhythm of the Holy Month. We handle halal menus, live cooking stations, timed service around prayer schedules, and full setup and clear-down so you can focus on your guests.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Whether you want a traditional Emirati spread, a modern grazing table, or a mix of both, we build each Iftar menu around your group size, venue, and preferences.
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

          <BlogRelated currentSlug="/blog/ramadan-iftar-catering-trends-2026" />

          {/* ═══════════════ CTA ═══════════════ */}
          <section className="article-cta bg-cream border border-gray-200 p-8 md:p-10 opacity-0 translate-y-8">
            <h2 className="font-playfair text-h3 text-black mb-3">Ready to Plan Your 2026 Iftar?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
              Let us design a Ramadan Iftar menu that blends tradition with modern presentation. Request a custom proposal tailored to your venue, guest count, and style.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to={CTA_HREF} className="btn-primary">
                Request My Iftar Quote
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
