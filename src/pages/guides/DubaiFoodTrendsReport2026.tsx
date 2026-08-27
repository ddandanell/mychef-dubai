// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /dubai-food-trends-report-2026
//     primary:     "dubai food trends 2026"
//     subkeywords: "dubai catering trends 2026" · "uae food trends 2026" · "private dining trends dubai 2026" · "dubai food trends report" · "what are the big food trends for 2026" · "what are the food design trends in 2026" · "dubai food expo 2026" · "dubai food fair 2026"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Leaf,
  ChefHat,
  Users,
  Globe,
  Sparkles,
  Wine,
  Phone,
  ArrowRight,
  Check,
} from 'lucide-react'
import SEO from '../../components/SEO'
import TrustSignalStrip from '../../components/TrustSignalStrip'
import FaqAccordion from '../../components/FaqAccordion'
import { SectionLabel } from '../../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I read your Dubai Food Trends Report 2026 and would like a custom catering proposal.')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const trends = [
  {
    icon: Leaf,
    title: 'Hyper-Local and Seasonal Sourcing',
    description: 'Dubai hosts increasingly expect menus that highlight regional flavours — dates, saffron, za’atar, camel milk, local fish and Gulf herbs — alongside seasonal produce. Caterers who can source responsibly and tell the story behind each ingredient are winning trust and press coverage.',
  },
  {
    icon: ChefHat,
    title: 'Chef-Led, Bespoke Tasting Menus',
    description: 'The private-chef model is moving from “staff for the night” to culinary collaborator. Clients want a chef who designs a one-off tasting menu around a theme, heritage, or dietary need, then plates each course in front of guests.',
  },
  {
    icon: Users,
    title: 'Inclusive Dining by Default',
    description: 'Vegetarian, vegan, Jain, halal, gluten-free and allergen-aware menus are no longer special requests — they are baseline expectations. The best Dubai caterers build inclusive options into every proposal rather than treating them as afterthoughts.',
  },
  {
    icon: Globe,
    title: 'Global Cuisines, Dubai Interpretation',
    description: 'Japanese-Peruvian, Levantine-Indian and Mediterranean-Asian fusions continue to dominate high-end events. The trend is not random mixing; it is a thoughtful interpretation that reflects Dubai’s multicultural guest lists and well-travelled hosts.',
  },
  {
    icon: Wine,
    title: 'Non-Alcoholic Beverage Experiences',
    description: 'Mocktails, kombucha, house-made shrubs, specialty coffee and zero-proof pairing menus are becoming centre-stage. This aligns with family celebrations, Ramadan and Suhoor gatherings, and corporate events where alcohol is not served.',
  },
  {
    icon: Sparkles,
    title: 'Theatre and Live Stations',
    description: 'Live chaat counters, sushi bars, pasta stations and dessert finishing bring energy to events. In 2026, the focus is on curated, Instagram-friendly moments that also taste as good as they look.',
  },
]

const whatThisMeans = [
  {
    title: 'For Home Celebrations',
    description: 'Expect more interactive service, family-style sharing platters and menus that cater to several dietary traditions at one table.',
  },
  {
    title: 'For Weddings',
    description: 'Couples are choosing shorter, chef-led tasting menus, late-night snack stations and locally inspired desserts over oversized buffets.',
  },
  {
    title: 'For Corporate Events',
    description: 'Sustainability narratives, inclusive menus and zero-proof bars are becoming standard asks for ESG-conscious brands and multinational teams.',
  },
  {
    title: 'For Yachts',
    description: 'Compact, high-impact grazing boards, sushi and individually plated courses are replacing large buffet setups on board.',
  },
]

const howToUse = [
  'Review the trends above and identify which matter most for your guest list.',
  'Discuss dietary requirements, cultural considerations and any must-have dishes with your caterer.',
  'Ask for a tasting so you can experience the menu before committing.',
  'Plan service style — plated, family-style, stations, or a mix — around the flow of your event.',
  'Build in one “signature moment” such as a live station, local-ingredient course, or mocktail pairing.',
]

const internalLinks = [
  { title: 'Private Dining Dubai', link: '/guide/private-dining-dubai', description: 'How private dining works in Dubai and when it fits your event.' },
  { title: 'Dubai Event Catering Price Guide 2026', link: '/dubai-event-catering-price-guide-2026', description: 'Realistic per-person pricing for events, weddings and corporate functions.' },
  { title: 'Yacht Catering Checklist', link: '/yacht-catering-checklist-dubai', description: 'A practical checklist for catering on Dubai yachts and boats.' },
  { title: 'Wedding Menu Planning Guide', link: '/wedding-catering-menu-planning-dubai', description: 'How to plan a wedding catering menu from tasting to table.' },
  { title: 'Catering Dubai', link: '/catering-dubai', description: 'fully-coordinated catering for events, celebrations and corporate functions.' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for intimate dinners and daily dining.' },
]

const faqs = [
  {
    q: 'What are the biggest Dubai food trends for 2026?',
    a: 'The standout trends are hyper-local sourcing, chef-led bespoke tasting menus, inclusive dining by default, globally influenced Dubai cuisine, elevated non-alcoholic beverages, and live cooking stations that add theatre to events.',
  },
  {
    q: 'Are local ingredients really a big trend in Dubai catering?',
    a: 'Yes. Regional flavours such as dates, saffron, za’atar, Gulf herbs and locally sourced fish are increasingly featured on high-end menus, both for flavour and because they give hosts a stronger “Dubai” story to share with guests.',
  },
  {
    q: 'How do I make a menu inclusive for mixed dietary needs?',
    a: 'Start by collecting dietary requirements with your RSVP, then ask your caterer to design a base menu that is naturally inclusive — for example, a Mediterranean or Indian spread that offers vegetarian, vegan, Jain, halal and gluten-free options without feeling like a separate menu.',
  },
  {
    q: 'Are live cooking stations worth the extra cost?',
    a: 'Live stations add energy and can replace passed canapés or dessert service. They work best when space, ventilation and guest flow allow the chef to interact safely with guests. Your caterer can advise on which stations fit your venue.',
  },
  {
    q: 'Can I have a sophisticated menu without alcohol?',
    a: 'Absolutely. Non-alcoholic beverage pairings, mocktail bars, specialty coffee and house-made shrubs are one of the strongest trends in Dubai for 2026 and suit family events, Ramadan, Suhoor, corporate gatherings and yacht cruises.',
  },
  {
    q: 'How do I book a menu that reflects these 2026 trends?',
    a: 'Share your event brief, guest profile and any themes with myCHEF Dubai. We will propose a menu that combines current trends with your personal preferences, then arrange a tasting before finalising the details.',
  },
  {
    q: 'What are the big food trends for 2026?',
    a: 'Same service as Dubai food trends 2026, different words for it. We design the menu around your event, bring the chef and team to your address, and quote it itemised so you can see what each part costs. Tell us the date and headcount and we recommend the format. If you searched for what are the food design trends in 2026, this is the same service.',
  },
]

const articleSchema = {
  '@type': 'Article',
  headline: 'Dubai Food Trends Report 2026: What Hosts and Caterers Need to Know',
  description: 'A practical look at the Dubai catering trends shaping events in 2026 — local sourcing, inclusive menus, live stations, global-Dubai cuisine and non-alcoholic experiences.',
  image: 'https://www.mychef.ae/images/dubai-food-trends-report-hero.webp',
  author: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    url: 'https://www.mychef.ae',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    logo: { '@type': 'ImageObject', url: 'https://www.mychef.ae/images/mychef-logo.png' },
  },
  datePublished: '2026-07-01',
  dateModified: '2026-07-22',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.mychef.ae/dubai-food-trends-report-2026',
  },
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
    { '@type': 'ListItem', position: 2, name: 'Dubai Food Trends Report 2026', item: 'https://www.mychef.ae/dubai-food-trends-report-2026' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function DubaiFoodTrendsReport2026() {
  useWhatsAppMessage(WHATSAPP_MESSAGE)
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.trends-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.trends-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.trends-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.trends-card', {
      scrollTrigger: { trigger: '.trends-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.trends-mean-item', {
      scrollTrigger: { trigger: '.trends-mean-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.trends-step-item', {
      scrollTrigger: { trigger: '.trends-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.trends-link-item', {
      scrollTrigger: { trigger: '.trends-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.trends-faq-item', {
      scrollTrigger: { trigger: '.trends-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.trends-cta', {
      scrollTrigger: { trigger: '.trends-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Dubai Food Trends 2026 — Report"
        description="Dubai Food Trends 2026 — The Dubai food trends shaping events in 2026: local sourcing, inclusive menus, chef-led tasting experiences, global-Dubai cuisine…"
        canonicalPath="/dubai-food-trends-report-2026"
        ogImage="/images/dubai-food-trends-report-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/dubai-food-trends-report-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container-custom text-center max-w-[820px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 trends-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Dubai Food Trends Report 2026</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 trends-hero-h1">
            Dubai Food Trends 2026 — Report
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[680px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 trends-hero-sub">
            The catering and private-dining movements shaping Dubai events this year — from hyper-local ingredients and inclusive menus to chef-led tasting experiences and non-alcoholic beverage programmes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 trends-hero-cta">
              Request a Custom Menu
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 trends-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      {/* ═══════════════ Introduction ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">What We Are Watching in 2026</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering in Dubai Is Becoming More Personal, More Local, and More Inclusive
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Dubai’s event scene continues to mature. Hosts are no longer impressed by volume alone; they want menus that tell a story, reflect their guests, and feel considered from the first bite to the final petit four. After planning hundreds of private dinners, villa parties, yacht events and corporate functions, here are the trends we see defining 2026.
          </p>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            This report is intended as a practical planning tool, not a collection of passing fads. Each trend below affects how you brief a caterer, what questions to ask, and what your guests are likely to remember.
          </p>
        </div>
      </section>

      {/* ═══════════════ Trends Grid ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">Six Trends Shaping the Year</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              What Hosts Are Asking For in 2026
            </h2>
          </div>

          <div className="trends-grid grid md:grid-cols-2 gap-6">
            {trends.map((trend, i) => {
              const Icon = trend.icon
              return (
                <div key={i} className="trends-card bg-white p-6 border border-gray-200 opacity-0 translate-y-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-h3 text-black mb-2">{trend.title}</h3>
                      <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{trend.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ What This Means for Your Event ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">From Trend to Table</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              What These Trends Mean for Different Events
            </h2>
          </div>

          <div className="trends-mean-grid grid md:grid-cols-2 gap-6">
            {whatThisMeans.map((item, i) => (
              <div key={i} className="trends-mean-item bg-cream p-6 border border-gray-200 opacity-0 translate-y-8">
                <h3 className="font-playfair text-h3 text-black mb-2">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ How to Use This Report ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">Action Steps</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              How to Use This Report for Your Event
            </h2>
          </div>

          <div className="trends-steps space-y-4">
            {howToUse.map((step, i) => (
              <div key={i} className="trends-step-item flex items-start gap-4 bg-charcoal p-5 border border-charcoal-light opacity-0 -translate-x-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gold/10 flex items-center justify-center">
                  <Check size={16} className="text-gold" />
                </div>
                <p className="font-inter text-body text-gray-300 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to={`/inquiry`} className="btn-primary inline-flex items-center gap-2">
              Plan a Trend-Forward Menu <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">Related Resources</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Keep Reading
            </h2>
          </div>

          <div className="trends-links grid md:grid-cols-2 gap-5">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="trends-link-item group flex items-start gap-4 p-5 border border-gray-200 hover:border-gold transition-colors opacity-0 translate-y-6"
              >
                <ArrowRight size={18} className="text-gold mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <div>
                  <h3 className="font-playfair text-h3 text-black group-hover:text-gold transition-colors">{link.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-cream py-20">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10">
            <SectionLabel align="center">FAQ</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-black">
              Dubai Food Trends 2026
            </h2>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="trends-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <Sparkles size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Bring the 2026 Trends to Your Table
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your event and we will design a menu that feels current, personal, and unmistakably Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">
              Request a Custom Proposal
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
          <p className="font-inter text-sm text-gray-400 mt-6">
            We typically reply within 15 minutes during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
