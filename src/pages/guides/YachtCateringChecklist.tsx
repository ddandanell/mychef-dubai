import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Ship,
  Anchor,
  Calendar,
  ClipboardCheck,
  Utensils,
  Wine,
  Users,
  Check,
  ChevronRight,
  ArrowRight,
  Phone,
  FileDown,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss yacht catering (via mychef.ae/yacht-catering-checklist-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
const UTM_PARAMS = '?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=yacht-catering-checklist-dubai'

/* ────────────────────── Data ────────────────────── */

const challenges = [
  {
    icon: Ship,
    title: 'Compact Galley',
    description: 'Yacht kitchens are smaller than land venues, so menus must be designed around available oven, fridge, and prep space.',
  },
  {
    icon: Anchor,
    title: 'Fixed Marina Loading',
    description: 'Loading windows at Dubai Marina and other berths are strict. Catering teams must arrive precisely and move efficiently.',
  },
  {
    icon: Calendar,
    title: 'Weather & Sea Conditions',
    description: 'Routes and timings can shift with wind and waves, so service plans need built-in flexibility and contingency.',
  },
  {
    icon: Users,
    title: 'Mobile Service Team',
    description: 'Staff must balance elegant service with safe movement on deck, adapting quickly to the vessel\'s motion.',
  },
  {
    icon: Wine,
    title: 'Finite Resources',
    description: 'Power, refrigeration, fresh water, and ice are limited. Precise quantities and backup plans are essential.',
  },
]

const timeline = [
  {
    phase: '6–8 Weeks Before',
    items: [
      'Finalise guest count and yacht capacity',
      'Confirm charter date, boarding time, route, and return time',
      'Share marina name, berth number, and captain contact with the caterer',
      'Discuss access restrictions or security requirements',
      'Choose service style: canapés, plated, buffet, BBQ, or mixed format',
      'Set cuisine direction and dietary requirements: halal, vegan, gluten-free, allergies',
      'Decide beverage service and confirm glassware and tableware provision',
    ],
  },
  {
    phase: '4 Weeks Before',
    items: [
      'Approve final menu and portion sizes',
      'Confirm number of service staff needed',
      'Discuss plating, presentation, and bar setup',
      'Confirm galley equipment: oven, stove, fridge, freezer, sink',
      'Check power availability and backup generator',
      'Clarify storage space for ingredients and ice',
      'Design seating or standing layout and plan entertainment timing',
    ],
  },
  {
    phase: '2 Weeks Before',
    items: [
      'Confirm final guest count and reconfirm dietary requirements',
      'Lock in menu and service style',
      'Confirm linens, napkins, tableware, and serving platters',
      'Arrange floral or décor elements if needed',
      'Plan lighting for evening cruises',
      'Brief service team on yacht layout, safety points, and uniform standards',
    ],
  },
  {
    phase: '1 Week Before',
    items: [
      'Final menu sign-off with the chef',
      'Confirm loading time and transport plan',
      'Check weather forecast and discuss contingency plan',
      'Confirm emergency contact list',
      'Finalise beverage order, ice delivery, and chilling time',
      'Create a minute-by-minute day-of timeline and share with crew',
    ],
  },
  {
    phase: 'Day Before',
    items: [
      'Confirm prep schedule and what will be finished on board',
      'Pack ingredients in sealed, labelled containers',
      'Prepare garnishes, sauces, and dressings',
      'Load non-perishable items and equipment',
      'Confirm transport vehicle, driver, and marina gate clearance',
      'Pack cleaning supplies, rubbish bags, and backups',
      'Check refrigeration temperatures for chilled items',
    ],
  },
  {
    phase: 'Day Of the Event',
    items: [
      'Arrive at marina with enough time for loading',
      'Store cold items immediately in yacht refrigeration',
      'Set up galley workspace and service stations',
      'Brief staff on safety, routes, and service timing',
      'Serve canapés or welcome drinks promptly after boarding',
      'Monitor food temperatures and freshness throughout the cruise',
      'Adjust service pace to route and guest comfort',
      'Clean galley, service areas, and decks after the cruise',
      'Remove all catering equipment and conduct final walkthrough',
    ],
  },
]

const menuIdeas = [
  { title: 'Mediterranean Mezze', description: 'Hummus, tabbouleh, grilled halloumi, falafel, and marinated olives — fresh, light, and easy to share.' },
  { title: 'Seafood Platter', description: 'Oysters, prawns, crab, and seasonal fish ceviche served on ice for a refined maritime feel.' },
  { title: 'Japanese Selection', description: 'Sushi, sashimi, edamame, and miso soup for an elegant, precise onboard dining experience.' },
  { title: 'BBQ Grill', description: 'Lamb skewers, chicken shish taouk, corn, and grilled vegetables prepared on deck if the yacht allows.' },
  { title: 'Light Desserts', description: 'Fresh fruit, lemon tart, miniature pastries, and Arabic sweets for a sweet finish without heaviness.' },
]

const internalLinks = [
  { title: 'Yacht Catering Dubai', link: '/yacht-catering-dubai', description: 'Compact, elegant menus designed for Dubai yacht events.' },
  { title: 'Canapé Catering Dubai', link: '/canape-catering-dubai', description: 'Bite-sized reception menus perfect for yacht boarding and welcome drinks.' },
  { title: 'BBQ Catering Dubai', link: '/bbq-catering-dubai', description: 'Grill-focused menus for villas, poolsides, and outdoor events.' },
  { title: 'Mediterranean Catering Dubai', link: '/mediterranean-catering-dubai', description: 'Fresh, sun-inspired dishes ideal for cruising the Arabian Gulf.' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for intimate dinners and daily dining.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'A practical guide to catering costs per person in Dubai.' },
]

const faqs = [
  {
    q: 'Can any caterer provide yacht catering?',
    a: 'Not all caterers are equipped for the logistics of yacht service. Look for experience with marina loading, compact galleys, and offshore events where timing, safety, and presentation all matter.',
  },
  {
    q: 'How far in advance should I book yacht catering in Dubai?',
    a: 'Two to four weeks is typical. For peak weekends, public holidays, and New Year cruises around the Palm Jumeirah, booking earlier is strongly recommended.',
  },
  {
    q: 'What happens if the weather is bad?',
    a: 'Most charter companies monitor weather closely and will reschedule or adjust routes if safety is a concern. Discuss the policy when booking so your catering plan can flex with any changes.',
  },
  {
    q: 'Can alcohol be served on a yacht in Dubai?',
    a: 'This depends on the charter licence and route. Confirm directly with your yacht charter company before planning beverage service.',
  },
  {
    q: 'Do I need to provide plates and cutlery?',
    a: 'Some yachts include basic tableware; others do not. Your caterer can arrange premium tableware, glassware, and linens if needed.',
  },
  {
    q: 'Which cuisines work best for yacht catering?',
    a: 'Light, fresh cuisines such as Mediterranean, Japanese, and seafood-focused menus work well. Avoid overly heavy dishes, messy finger foods, and items that do not hold up in outdoor heat.',
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
  headline: 'The Ultimate Dubai Yacht Catering Checklist',
  description: 'A step-by-step checklist for planning flawless yacht catering in Dubai, covering timelines, menu ideas, galley coordination, and day-of service.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Yacht Catering Dubai',
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
    { '@type': 'ListItem', position: 3, name: 'Yacht Catering Checklist', item: 'https://mychef.ae/yacht-catering-checklist-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function YachtCateringChecklist() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.yacht-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.yacht-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.yacht-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.yacht-challenge-card', {
      scrollTrigger: { trigger: '.yacht-challenges', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.yacht-timeline-card', {
      scrollTrigger: { trigger: '.yacht-timeline', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.yacht-menu-card', {
      scrollTrigger: { trigger: '.yacht-menus', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.yacht-download', {
      scrollTrigger: { trigger: '.yacht-download', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.yacht-link-item', {
      scrollTrigger: { trigger: '.yacht-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.yacht-faq-item', {
      scrollTrigger: { trigger: '.yacht-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.yacht-cta', {
      scrollTrigger: { trigger: '.yacht-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Yacht Catering Checklist Dubai | Plan a Flawless Cruise | myCHEF"
        description="Downloadable yacht catering checklist for Dubai. Plan menus, galley logistics, loading, service, and cleanup for yacht events in Dubai Marina and the Arabian Gulf."
        canonicalPath="/yacht-catering-checklist-dubai"
        ogImage="/images/yacht-catering-checklist-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/yacht-catering-checklist-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 yacht-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm flex-wrap">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/guides" className="text-gray-400 hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Yacht Catering Checklist</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 yacht-hero-h1">
            The Ultimate Dubai Yacht Catering Checklist
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 yacht-hero-sub">
            Plan a flawless yacht charter around Dubai Marina, Palm Jumeirah, and the Arabian Gulf — from first enquiry to final cleanup.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry${UTM_PARAMS}`} className="btn-primary opacity-0 translate-y-4 yacht-hero-cta">Plan My Yacht Menu</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 yacht-hero-cta"
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
            Yacht Event Planning
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering at Sea Demands a Different Playbook
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A yacht charter is one of the most memorable ways to entertain in Dubai — but catering on water is not the same as catering on land. Space is tighter, timing is stricter, and the vessel's movement affects everything from plating to refrigeration.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            This checklist walks you through the full timeline, from six weeks before the cruise to the moment your guests step back onto the dock. Use it to coordinate with your charter company, captain, event planner, and catering team so nothing is left to chance.
          </p>
        </div>
      </section>

      {/* ═══════════════ Why Yacht Catering Needs Extra Planning ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Why Yacht Catering Is Unique
            </span>
            <h2 className="font-playfair text-h2 text-white">
              The Logistics Behind a Perfect Yacht Event
            </h2>
          </div>

          <div className="yacht-challenges grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => {
              const Icon = challenge.icon
              return (
                <div key={i} className="yacht-challenge-card bg-charcoal p-8 opacity-0 translate-y-12">
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{challenge.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{challenge.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Timeline Checklists ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Step-by-Step Timeline
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Your Yacht Catering Countdown
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              Follow this checklist at each stage to keep your Dubai yacht event on course.
            </p>
          </div>

          <div className="yacht-timeline grid md:grid-cols-2 gap-6">
            {timeline.map((stage, i) => (
              <div key={i} className="yacht-timeline-card bg-white p-8 opacity-0 translate-y-10">
                <div className="flex items-center gap-3 mb-5">
                  <ClipboardCheck size={24} className="text-gold" />
                  <h3 className="font-playfair text-h3 text-black">{stage.phase}</h3>
                </div>
                <ul className="space-y-3">
                  {stage.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-body-sm text-gray-500 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Menu Ideas ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Menu Inspiration
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Yacht Catering Menu Ideas for Dubai
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              The best yacht menus are fresh, elegant, and easy to enjoy while cruising. Avoid heavy dishes and messy finger foods that do not hold well in outdoor heat.
            </p>
          </div>

          <div className="yacht-menus grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuIdeas.map((menu, i) => {
              const Icon = i === 0 ? Utensils : i === 1 ? Anchor : i === 2 ? Ship : i === 3 ? ClipboardCheck : Wine
              return (
                <div key={i} className="yacht-menu-card bg-charcoal p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{menu.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{menu.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Downloadable Checklist ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="yacht-download bg-black p-10 md:p-12 text-center opacity-0 translate-y-8">
            <FileDown size={48} className="text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-h2 text-white mb-4">
              Download the Yacht Catering Checklist
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[600px] mx-auto mb-8">
              Want a printable version? Request the full PDF checklist with timeline, menu prompts, galley coordination notes, and day-of service flow — perfect to share with your charter company or event planner.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              <Phone size={16} className="mr-2" />
              Request the PDF Checklist
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-black text-center mb-10">
            Related Yacht Catering Services & Guides
          </h2>

          <div className="yacht-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="yacht-link-item group flex items-center justify-between bg-cream p-6 opacity-0 hover:bg-black hover:text-white transition-colors"
              >
                <div>
                  <h4 className="font-playfair text-h4 text-black group-hover:text-white mb-1 transition-colors">{link.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 group-hover:text-gray-400 transition-colors">{link.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-cream py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Yacht Catering FAQ
          </h2>

          <div className="yacht-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="yacht-faq-item border border-gray-200 bg-white opacity-0 translate-y-5">
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
                    <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center yacht-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Yacht Menu with myCHEF Dubai
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            We specialise in bespoke yacht catering across Dubai Marina, Palm Jumeirah, and the Arabian Gulf. Tell us about your charter and we will build a menu that works beautifully at sea.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry${UTM_PARAMS}`} className="btn-primary">Plan My Yacht Menu</Link>
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
