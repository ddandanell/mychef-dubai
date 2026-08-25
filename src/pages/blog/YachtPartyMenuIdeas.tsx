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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your yacht party menu ideas blog and would like a custom yacht menu (via mychef.ae/blog/yacht-party-menu-ideas-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=yacht-party-menu-ideas-dubai'
const SLUG = 'yacht-party-menu-ideas-dubai'

const articleSchema = {
  '@type': 'Article',
  headline: 'Yacht Party Menu Ideas in Dubai',
  description: 'Yacht party menu ideas for Dubai: canapés, fresh seafood and desserts that travel well, planned for a Dubai Marina or Palm Jumeirah cruise.',
  author: { '@id': 'https://www.mychef.ae/#organization' },
  publisher: { '@id': 'https://www.mychef.ae/#organization' },
  datePublished: '2026-07-01',
  dateModified: '2026-07-22',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.mychef.ae/blog/${SLUG}` },
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mychef.ae/blog' },
    { '@type': 'ListItem', position: 3, name: 'Yacht Party Menu Ideas in Dubai', item: `https://www.mychef.ae/blog/${SLUG}` },
  ],
}

const faqs = [
  {
    q: 'What food works best for a yacht party in Dubai?',
    a: 'Handheld, one-bite foods work best: canapés, skewers, mini cones, grazing boxes, fresh seafood, and individually portioned desserts. They travel well, need little cutlery, and reduce spills on a moving deck.',
  },
  {
    q: 'How do you plan a menu for a small yacht galley?',
    a: 'Prepare most dishes onshore and finish them on the boat. Avoid elaborate last-minute frying, baking, or assembly. Cold starters, pre-plated salads, and individually portioned desserts keep service efficient in a compact galley.',
  },
  {
    q: 'What desserts survive heat and movement on a yacht?',
    a: 'Choose sturdy, heat-tolerant desserts such as mini fruit tarts, chocolate truffles, date-based bites, individual panna cotta pots, and layered trifles in clear cups. Avoid tall cakes and ice cream.',
  },
  {
    q: 'Should I serve alcohol or mocktails on a Dubai yacht cruise?',
    a: 'Mocktails are always appropriate. Sparkling water with citrus, iced hibiscus tea, fresh coconut water, and a signature non-alcoholic serve are popular. Alcohol is only permitted where the yacht operator holds the correct licence and the guests are of legal drinking age.',
  },
  {
    q: 'How far in advance should I order yacht catering?',
    a: 'For small sunset cruises, three to five days is usually enough. For larger celebrations, themed menus, or peak-season weekends, book one to two weeks ahead so the chef can plan around galley constraints and secure fresh ingredients.',
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

export default function YachtPartyMenuIdeas() {
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
        title="Yacht Party Menu Ideas in Dubai"
        description="Yacht party menu ideas for Dubai: canapés, fresh seafood and desserts that travel well, planned for a Dubai Marina or Palm Jumeirah cruise."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/blog/yacht-party-menu-ideas-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Yacht Catering"
        title="Yacht Party Menu Ideas in Dubai"
        subtitle="How to build a menu that looks elegant, travels well, and tastes incredible while cruising Dubai Marina or the Palm."
        image="/images/blog/yacht-party-menu-ideas-dubai-hero.webp"
        imageAlt="Canapés being passed on a Dubai yacht deck at golden hour"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Yacht Party Menu Ideas' }]}
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
            answer="The best yacht party menus in Dubai feature handheld canapés, pre-plated seafood, individually portioned desserts, and hydrating mocktails that travel well on the water."
            facts={[
              { label: 'Outdoor yacht season', value: 'Nov–Apr daily max 24–32°C' },
              { label: 'Summer peak', value: 'Jul–Aug ≈ 40°C' },
              { label: 'Best formats', value: 'Canapés, skewers, mini cones, grazing boxes' },
              { label: 'Recommended proteins', value: 'Grilled sea bass, king prawns, sushi-grade tuna' },
              { label: 'Maritime regulator', value: 'Dubai Maritime Authority (DMA) under PCFC' },
            ]}
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A yacht party in Dubai is one of the most memorable ways to celebrate a birthday, anniversary, corporate milestone, or simply a sunset among friends. But the best yacht menus are not just smaller versions of a land-based banquet. They need to account for compact galleys, movement on the water, limited plating space, and guests who want to socialise without juggling heavy plates.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              This guide shares menu ideas that work beautifully on a yacht, from handheld canapés to fresh seafood and desserts that hold up in the marina breeze.
            </p>
          </section>

          <ArticleToc />
          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="plan-around-the-yacht-environment" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Plan Around the Yacht Environment</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Compact kitchens call for smart prep</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Most yacht galleys are tight, so menus that can be largely prepared onshore and finished on the boat work best. Items that require extensive last-minute frying, baking, or elaborate assembly can slow service and fill the cabin with heat. Cold starters, pre-plated salads, and individually portioned desserts keep things efficient.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Handheld food wins on deck</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              On a moving vessel, guests prefer food they can hold in one hand while holding a drink in the other. Canapés, skewers, mini cones, and grazing boxes eliminate the need for cutlery and reduce the risk of spills.
            </p>
            <BlogFigure
              image={{
                src: '/images/blog/yacht-party-menu-ideas-dubai-2.webp',
                alt: 'Chef finishing cold seafood in a compact yacht galley',
                width: 1920,
                height: 1280,
                caption: 'Most of the work happens onshore. The galley is for finishing, not a full restaurant pass.',
              }}
            />
          </section>

          <SourcesBlock
            sources={[
              { label: 'Dubai Maritime Authority (DMA) — yacht charter and maritime safety regulations under Ports, Customs and Free Zone Corporation (PCFC)' },
              { label: 'UAE National Centre of Meteorology — historical climate data for Dubai' },
            ]}
            note="Temperature ranges are historical averages for Dubai. Yacht catering logistics should always be confirmed with your yacht operator and captain."
          />

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="canap-s-and-handheld-starters" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Canapés and Handheld Starters</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Start the cruise with a selection of light, elegant bites. Tuna tartare on crispy wonton, prawn cocktail shots, mini lamb kofta with tahini, and whipped feta crostini all travel well and set a sophisticated tone. For vegetarian guests, consider beetroot cured salmon alternatives, halloumi skewers, and avocado mousse cups.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Serve canapés in rounds of three to four bites per guest rather than all at once. This keeps the deck clear and gives guests something to look forward to as the cruise unfolds.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="fresh-seafood-and-light-mains" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Fresh Seafood and Light Mains</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Let the location inspire the menu</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Dubai’s coastal setting makes seafood a natural choice. Grilled sea bass, citrus-cured hammour, king prawns with garlic butter, and sushi-grade tuna all feel right at home on a yacht. Keep sauces light and acidic rather than heavy, as rich dishes can feel overwhelming in the sun.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Individual plating for seated courses</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              If your group is small enough for plated service, choose dishes that hold their structure. Pan-seared salmon with herbed quinoa, lemon chicken with roasted vegetables, or a Mediterranean mezze platter arranged in individual boxes all work well.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="salads-and-sides-that-travel-well" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Salads and Sides That Travel Well</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Salads should be dressed just before serving to avoid wilting. Build-your-own grain bowls with quinoa, chickpeas, roasted peppers, and a choice of proteins are a practical middle ground between buffet and plated service. They give guests control while keeping portions manageable.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Bread baskets with warm pita, olive rolls, and crisp lavash are always popular, but keep butter and dips covered to protect them from wind and spray.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="desserts-and-sweet-finishes" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Desserts and Sweet Finishes</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Avoid anything fragile or melty</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Yacht desserts need to survive heat and movement. Mini fruit tarts, chocolate truffles, date-based bites, and individual panna cotta pots are safer choices than tall cakes or ice cream. A fresh fruit platter with passionfruit, mango, and berries adds colour and refreshment.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">A celebratory cake alternative</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              For birthdays or anniversaries, consider a pre-sliced cake served in individual boxes or a layered trifle in clear cups. This avoids the logistical challenge of cutting cake on a moving deck.
            </p>
            <BlogFigure
              image={{
                src: '/images/blog/yacht-party-menu-ideas-dubai-3.webp',
                alt: 'Individual heat-stable desserts in a chilled box on a yacht counter',
                width: 1200,
                height: 1600,
                caption: 'Desserts that survive heat and movement: cups and tarts, not a tall cake.',
              }}
            />
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="beverages-for-the-marina" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Beverages for the Marina</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Keep drinks light and hydrating. Sparkling water with citrus and herbs, iced hibiscus tea, fresh coconut water, and a signature mocktail served from a central dispenser all work well. If alcohol is permitted, a crisp rosé, sparkling wine, or curated gin and tonic bar are popular on sunset cruises.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Provide plenty of water, especially during summer months. Dehydration can spoil the experience quickly, and thoughtful hosts make hydration part of the menu.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 id="let-mychef-dubai-handle-the-details" className="font-playfair text-h2 text-black mb-5 scroll-mt-28">Let myCHEF Dubai Handle the Details</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Our <Link to="/yachts" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">yacht catering service in Dubai</Link> is built around the realities of cooking and serving at sea. We coordinate directly with your yacht crew, plan menus around galley capacity, and provide service staff who understand how to move safely on deck.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              From sunset canapés to multi-course dinners at anchor, we design yacht menus that look as good as they taste.
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

          <BlogRelated currentSlug="/blog/yacht-party-menu-ideas-dubai" />

          {/* ═══════════════ CTA ═══════════════ */}
          <section className="article-cta bg-cream border border-gray-200 p-8 md:p-10 opacity-0 translate-y-8">
            <h2 className="font-playfair text-h3 text-black mb-3">Planning a Yacht Party?</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-6">
              Tell us your route, group size, and occasion. We will create a yacht menu that is elegant, practical, and perfectly suited to life on the water.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to={CTA_HREF} className="btn-primary">
                Plan My Yacht Menu
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
