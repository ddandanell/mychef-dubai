import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Flame,
  UtensilsCrossed,
  Coffee,
  ChefHat,
  IceCream,
  Wine,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
  Sun,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like villa catering ideas for my home (via mychef.ae/villa-catering-ideas-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const menuFormats = [
  {
    icon: Flame,
    title: 'BBQ by the Pool',
    description: 'Live grill stations, marinated meats, seafood, grilled vegetables, fresh salads, and flatbreads served poolside. Ideal for relaxed afternoon and evening gatherings.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Mezze & Grill',
    description: 'A Middle Eastern spread of hot and cold mezze, charcoal-grilled kebabs, rice dishes, and breads. Perfect for mixed-age groups and sharing-style dining.',
  },
  {
    icon: Coffee,
    title: 'Villa Brunch',
    description: 'Eggs, pastries, fresh fruit, smoothie bowls, coffee stations, and light salads designed for late-morning gatherings on a terrace or garden lawn.',
  },
  {
    icon: Wine,
    title: 'Canapé Party',
    description: 'Circulating bites, grazing tables, and drinks service for standing receptions where guests mingle before a seated dinner or as the main event.',
  },
  {
    icon: ChefHat,
    title: 'Seated Dinner',
    description: 'A multi-course plated meal with waiter service, matched wines or mocktails, and elegant table styling for birthdays, anniversaries, and formal celebrations.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Live Cooking Stations',
    description: 'Interactive stations such as pasta, risotto, sushi, tacos, or crepes prepared in front of guests. Adds energy and theatre to villa parties.',
  },
  {
    icon: IceCream,
    title: 'Dessert Table',
    description: 'A styled display of cakes, tarts, macarons, Arabic sweets, and ice cream. Works as a celebration centrepiece or a standalone late-night treat.',
  },
]

const setupTips = [
  'Designate separate zones for cooking, serving, dining, and lounging to keep traffic flowing.',
  'Position grills and live stations downwind of seating areas to manage smoke and aromas.',
  'Plan power and water access for mobile kitchen equipment, coffee machines, and ice stations.',
  'Use covered areas or tents for summer events and outdoor heating for cooler winter evenings.',
  'Arrange tables to take advantage of garden views, pool lighting, and sunset timing.',
]

const staffingNeeds = [
  { role: 'Private chef', note: 'Plans the menu, preps on site, and finishes every dish to order.' },
  { role: 'Event manager', note: 'Coordinates timing, service flow, and host communication.' },
  { role: 'Waiters', note: 'Circulate canapés, serve courses, and clear plates throughout the event.' },
  { role: 'Bartender', note: 'Manages drinks, mocktails, and glassware for standing or seated formats.' },
  { role: 'Grill chef / station cook', note: 'Runs live cooking stations and BBQ grills safely outdoors.' },
]

const seasonalNotes = [
  { season: 'November–March', note: 'Peak outdoor season. Book early and consider heaters for late-night events.' },
  { season: 'April–May', note: 'Pleasant evenings; shaded dining and mist fans keep guests comfortable.' },
  { season: 'June–September', note: 'Indoor or fully tented setups with strong cooling are recommended.' },
]

const internalLinks = [
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for villa dinners and events.' },
  { title: 'BBQ Catering Dubai', link: '/bbq-catering-dubai', description: 'Grill-focused outdoor menus for poolsides and gardens.' },
  { title: 'Party Catering Dubai', link: '/party-catering-dubai', description: 'Full-service catering for villa parties and celebrations.' },
  { title: 'Luxury Dining Dubai', link: '/luxury-dining-dubai', description: 'Plated dinners and private dining experiences at home.' },
  { title: 'Birthday Catering Dubai', link: '/birthday-catering-dubai', description: 'Themed menus and cakes for villa birthday parties.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Understand per-person costs for villa catering formats.' },
]

const faqs = [
  {
    q: 'What is the best catering format for a Dubai villa party?',
    a: 'It depends on the occasion and season. BBQ by the pool, mezze and grill, and live cooking stations work well for casual outdoor gatherings. Seated dinners and canapé parties suit more formal celebrations. Brunch is ideal for daytime events.',
  },
  {
    q: 'How much staff do I need for a villa event?',
    a: 'A typical villa event needs at least a chef, an event manager, and waiters scaled to guest count. Larger parties add bartenders and dedicated grill or station cooks. We recommend ratios based on your format and menu.',
  },
  {
    q: 'Can you cater in a villa without a full kitchen?',
    a: 'Yes. We bring mobile kitchen equipment, power solutions, and serving stations to villas across Dubai. A site briefing helps us plan the setup and identify water, power, and access points.',
  },
  {
    q: 'What works best for summer villa events?',
    a: 'In summer, indoor dining, covered terraces, or tented spaces with cooling are most comfortable. Lighter menus, cold mezze, salads, and refreshing mocktails also suit the heat.',
  },
  {
    q: 'Do you handle setup and cleanup at villas?',
    a: 'Yes. Our villa catering includes full setup, service during the event, and clear-down afterwards, leaving your home clean and tidy.',
  },
  {
    q: 'How far in advance should I book villa catering?',
    a: 'Two to four weeks is ideal for most villa events. During the busy season from November to March, or for large celebrations, book six to eight weeks ahead.',
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

const articleSchema = {
  '@type': 'Article',
  headline: 'Villa Catering Ideas for Dubai Homes and Residences',
  description: 'Villa catering ideas for Dubai homes: BBQ, mezze, brunch, canapé parties, seated dinners, live cooking stations, dessert tables, setup tips, and staffing.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Villa Catering Ideas Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://mychef.ae/guides' },
    { '@type': 'ListItem', position: 3, name: 'Villa Catering Ideas Dubai', item: 'https://mychef.ae/villa-catering-ideas-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function VillaCateringIdeas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.villa-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.villa-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.villa-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.villa-format-card', {
      scrollTrigger: { trigger: '.villa-formats', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.villa-tip-item', {
      scrollTrigger: { trigger: '.villa-tips', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.villa-staff-row', {
      scrollTrigger: { trigger: '.villa-staff', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.villa-season-card', {
      scrollTrigger: { trigger: '.villa-seasons', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.villa-link-item', {
      scrollTrigger: { trigger: '.villa-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.villa-faq-item', {
      scrollTrigger: { trigger: '.villa-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.villa-cta', {
      scrollTrigger: { trigger: '.villa-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Villa Catering Ideas Dubai | Private Chef & Party Menus | myCHEF"
        description="Villa catering ideas for Dubai homes: BBQ, mezze, brunch, canapés, seated dinners, live stations, and dessert tables. Setup tips, staffing, and seasonality advice."
        canonicalPath="/villa-catering-ideas-dubai"
        ogImage="/service-villa.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/villa-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 villa-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Villa Catering Ideas Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 villa-hero-h1">
            Villa Catering Ideas for Dubai Homes and Residences
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 villa-hero-sub">
            Menu formats, setup tips, and staffing guidance for unforgettable villa parties across Dubai, from poolside BBQs to elegant seated dinners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=villa-catering-ideas-dubai" className="btn-primary opacity-0 translate-y-4 villa-hero-cta">Get My Custom Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 villa-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            VILLA PARTY CATERING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Turn Your Villa Into the Venue
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Dubai's villas and private homes are some of the best places to host. With space for a pool, garden, terrace, and indoor dining, a villa lets you design an event that feels personal and relaxed. The right catering format brings the venue to life and keeps guests comfortable from arrival to clear-down.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Below are the most popular villa catering formats in Dubai, plus practical setup, staffing, and seasonality tips to help you plan.
          </p>
        </div>
      </section>

      {/* ═══════════════ Menu Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Villa Catering Ideas That Work
            </h2>
          </div>

          <div className="villa-formats grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div key={i} className="villa-format-card bg-charcoal p-8 opacity-0 translate-y-12">
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{fmt.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Setup Tips ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                FLOW & LAYOUT
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                Villa Setup Tips
              </h2>
              <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
                A well-planned layout keeps guests moving, protects food quality, and lets staff work efficiently. Think in zones: arrival, food, drinks, dining, and lounging.
              </p>
            </div>
            <div className="space-y-4">
              {setupTips.map((tip, i) => (
                <div key={i} className="villa-tip-item flex gap-3 bg-white p-5 opacity-0 -translate-x-5">
                  <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-body text-[#737373] leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Staffing ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SERVICE TEAM
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Staffing for Villa Events
            </h2>
          </div>

          <div className="villa-staff overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-[#E5E5E5]">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Role</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Responsibility</th>
                </tr>
              </thead>
              <tbody>
                {staffingNeeds.map((row, i) => (
                  <tr key={i} className="villa-staff-row border-b border-[#E5E5E5] opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-playfair text-black text-lg">{row.role}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-[#737373]">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════ Seasonality ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SEASONALITY
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Planning Around Dubai's Weather
            </h2>
          </div>

          <div className="villa-seasons grid md:grid-cols-3 gap-6">
            {seasonalNotes.map((s, i) => (
              <div key={i} className="villa-season-card bg-charcoal p-8 text-center opacity-0 translate-y-12">
                <Sun size={32} className="text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{s.season}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Why myCHEF ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHEN TO BOOK MYCHEF
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Why Villa Hosts Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Experience catering at villas across Emirates Hills, Palm Jumeirah, Dubai Hills, and Arabian Ranches.',
              'Mobile kitchen, bar, and service equipment brought to your home.',
              'Menus adapted to poolside, garden, terrace, and indoor settings.',
              'Full setup, service, and cleanup so you can host without stress.',
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-inter text-body text-[#A3A3A3] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Services & Guides
          </h2>

          <div className="villa-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="villa-link-item group flex items-center justify-between bg-charcoal p-6 opacity-0 hover:bg-[#222] transition-colors"
              >
                <div>
                  <h4 className="font-playfair text-h4 text-white mb-1">{link.title}</h4>
                  <p className="font-inter text-body-sm text-[#A3A3A3]">{link.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Villa Catering FAQ
          </h2>

          <div className="villa-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="villa-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-inter text-base font-medium text-black pr-4">{faq.q}</span>
                  <ChevronRight
                    size={18}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-5 pb-5">
                    <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center villa-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Villa Party
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your villa, guest count, and preferred format. We will design a menu and setup plan that fits your space and your occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=villa-catering-ideas-dubai" className="btn-primary">Get My Custom Quote</Link>
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
        </div>
      </section>
    </div>
  )
}
