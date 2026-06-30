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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your yacht party menu ideas blog and would like a custom yacht menu (via mychef.ae/blog/yacht-party-menu-ideas-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CTA_HREF = '/inquiry?utm_source=mychef.ae&utm_medium=blog_cta&utm_campaign=yacht-party-menu-ideas-dubai'
const SLUG = 'yacht-party-menu-ideas-dubai'

const articleSchema = {
  '@type': 'Article',
  headline: 'Yacht Party Menu Ideas in Dubai',
  description: 'Plan a stylish, seaworthy menu for your next Dubai Marina or Palm Jumeirah cruise with canapés, fresh seafood, and desserts that travel well.',
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
    { '@type': 'ListItem', position: 3, name: 'Yacht Party Menu Ideas in Dubai', item: `https://mychef.ae/blog/${SLUG}` },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, breadcrumbSchema],
}

export default function YachtPartyMenuIdeas() {
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
        title="Yacht Party Menu Ideas in Dubai | myCHEF"
        description="Plan a stylish, seaworthy menu for your next Dubai Marina or Palm Jumeirah cruise with canapés, fresh seafood, and desserts that travel well."
        canonicalPath={`/blog/${SLUG}`}
        ogImage="/images/yacht-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="Yacht Catering"
        title="Yacht Party Menu Ideas in Dubai"
        subtitle="How to build a menu that looks elegant, travels well, and tastes incredible while cruising Dubai Marina or the Palm."
        image="/images/yacht-catering-dubai-hero.webp"
        imageAlt="Yacht party menu ideas Dubai"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: 'Yacht Party Menu Ideas' }]}
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
              A yacht party in Dubai is one of the most memorable ways to celebrate a birthday, anniversary, corporate milestone, or simply a sunset among friends. But the best yacht menus are not just smaller versions of a land-based banquet. They need to account for compact galleys, movement on the water, limited plating space, and guests who want to socialise without juggling heavy plates.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              This guide shares menu ideas that work beautifully on a yacht, from handheld canapés to fresh seafood and desserts that hold up in the marina breeze.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Plan Around the Yacht Environment</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Compact kitchens call for smart prep</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Most yacht galleys are tight, so menus that can be largely prepared onshore and finished on the boat work best. Items that require extensive last-minute frying, baking, or elaborate assembly can slow service and fill the cabin with heat. Cold starters, pre-plated salads, and individually portioned desserts keep things efficient.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">Handheld food wins on deck</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              On a moving vessel, guests prefer food they can hold in one hand while holding a drink in the other. Canapés, skewers, mini cones, and grazing boxes eliminate the need for cutlery and reduce the risk of spills.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Canapés and Handheld Starters</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Start the cruise with a selection of light, elegant bites. Tuna tartare on crispy wonton, prawn cocktail shots, mini lamb kofta with tahini, and whipped feta crostini all travel well and set a sophisticated tone. For vegetarian guests, consider beetroot cured salmon alternatives, halloumi skewers, and avocado mousse cups.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Serve canapés in rounds of three to four bites per guest rather than all at once. This keeps the deck clear and gives guests something to look forward to as the cruise unfolds.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Fresh Seafood and Light Mains</h2>
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
            <h2 className="font-playfair text-h2 text-black mb-5">Salads and Sides That Travel Well</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Salads should be dressed just before serving to avoid wilting. Build-your-own grain bowls with quinoa, chickpeas, roasted peppers, and a choice of proteins are a practical middle ground between buffet and plated service. They give guests control while keeping portions manageable.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Bread baskets with warm pita, olive rolls, and crisp lavash are always popular, but keep butter and dips covered to protect them from wind and spray.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Desserts and Sweet Finishes</h2>
            <h3 className="font-playfair text-h3 text-black mb-3">Avoid anything fragile or melty</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Yacht desserts need to survive heat and movement. Mini fruit tarts, chocolate truffles, date-based bites, and individual panna cotta pots are safer choices than tall cakes or ice cream. A fresh fruit platter with passionfruit, mango, and berries adds colour and refreshment.
            </p>
            <h3 className="font-playfair text-h3 text-black mb-3">A celebratory cake alternative</h3>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              For birthdays or anniversaries, consider a pre-sliced cake served in individual boxes or a layered trifle in clear cups. This avoids the logistical challenge of cutting cake on a moving deck.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Beverages for the Marina</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Keep drinks light and hydrating. Sparkling water with citrus and herbs, iced hibiscus tea, fresh coconut water, and a signature mocktail served from a central dispenser all work well. If alcohol is permitted, a crisp rosé, sparkling wine, or curated gin and tonic bar are popular on sunset cruises.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              Provide plenty of water, especially during summer months. Dehydration can spoil the experience quickly, and thoughtful hosts make hydration part of the menu.
            </p>
          </section>

          <section className="article-section opacity-0 translate-y-8 mb-12">
            <h2 className="font-playfair text-h2 text-black mb-5">Let myCHEF Dubai Handle the Details</h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mb-5">
              Our <Link to="/yachts" className="text-gold hover:text-gold-light transition-colors underline underline-offset-4">yacht catering service in Dubai</Link> is built around the realities of cooking and serving at sea. We coordinate directly with your yacht crew, plan menus around galley capacity, and provide service staff who understand how to move safely on deck.
            </p>
            <p className="font-inter text-body text-gray-500 leading-relaxed">
              From sunset canapés to multi-course dinners at anchor, we design yacht menus that look as good as they taste.
            </p>
          </section>

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
