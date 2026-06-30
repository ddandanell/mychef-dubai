import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like a corporate catering checklist and quote (via mychef.ae/corporate-catering-checklist-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const preEvent = [
  {
    title: 'Confirm headcount',
    description: 'Collect RSVPs and dietary requirements early. Build in a small buffer for last-minute attendees and no-shows.',
  },
  {
    title: 'Define the format',
    description: 'Breakfast, working lunch, boardroom meeting, standing canapé reception, or buffet? The format shapes menu, staff, and timing.',
  },
  {
    title: 'Set the timing',
    description: 'Agree on arrival, service, and clear-down windows. Corporate events usually run to tight schedules, so precision matters.',
  },
  {
    title: 'Agree the budget',
    description: 'Set a per-person budget range and ask for an itemised quote covering food, staff, rentals, transport, and VAT.',
  },
  {
    title: 'Handle dietary needs',
    description: 'Gather vegetarian, vegan, halal, gluten-free, and allergy information. A professional caterer builds these into the menu seamlessly.',
  },
  {
    title: 'Brief the venue',
    description: 'Share loading access, parking, kitchen facilities, power, and security requirements with your caterer well in advance.',
  },
]

const menuFormats = [
  {
    title: 'Breakfast catering',
    description: 'Pastries, fruit, yoghurt, eggs, smoothie bowls, granola, and barista coffee for early meetings and launches.',
  },
  {
    title: 'Working lunch',
    description: 'Individual boxed lunches or shared platters that are easy to eat while continuing discussion. Clean and efficient.',
  },
  {
    title: 'Buffet lunch',
    description: 'Hot and cold stations for larger groups, with clear dietary labels and fast service lines.',
  },
  {
    title: 'Canapé reception',
    description: 'Circulating bites and drinks for networking events, product launches, and client entertaining.',
  },
]

const serviceFlow = [
  'Caterer arrives and sets up before guests enter the room.',
  'Food is refreshed and kept at correct temperature throughout service.',
  'Staff maintain discreet, professional service without interrupting meetings.',
  'Dietary options are clearly labelled and separately served where needed.',
  'Clear-down happens efficiently between sessions or after the event.',
]

const postEvent = [
  'Review attendance against the order to refine future events.',
  'Collect feedback on food quality, variety, and service timing.',
  'Confirm final invoice matches the agreed quote and any last-minute changes.',
  'Update your preferred caterer brief with lessons learned for next time.',
]

const dubaiExamples = [
  { title: 'DIFC boardroom lunch', description: 'A working lunch for senior executives with individually plated meals and dietary-labelled options.' },
  { title: 'Business Bay product launch', description: 'Canapés and mocktails served during a networking reception for press and clients.' },
  { title: 'Dubai Media City breakfast briefing', description: 'Continental breakfast, fresh juice, and coffee for an early-morning team update.' },
  { title: 'JAFZA training-day buffet', description: 'Hot and cold buffet stations for a full-day training session with rotating seating.' },
]

const internalLinks = [
  { title: 'Corporate Catering Dubai', link: '/corporate-catering-dubai', description: 'Full-service business catering for offices and events.' },
  { title: 'Office Catering Dubai', link: '/office-catering-dubai', description: 'Daily and one-off office lunch solutions.' },
  { title: 'Business Lunch Catering', link: '/business-lunch-catering-dubai', description: 'Refined lunches for meetings and client entertaining.' },
  { title: 'Conference Catering Dubai', link: '/conference-catering-dubai', description: 'Multi-day event catering for conferences and seminars.' },
  { title: 'Canapé Catering Dubai', link: '/canape-catering-dubai', description: 'Bite-sized menus for corporate receptions.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Budget guidance for corporate catering formats.' },
]

const faqs = [
  {
    q: 'How far in advance should I order corporate catering in Dubai?',
    a: 'For regular office lunches, one to two days is usually enough. For large events, launches, or conferences, book one to two weeks ahead. During peak season, earlier is safer.',
  },
  {
    q: 'What information does a caterer need for a corporate event?',
    a: 'Headcount, event format, timing, venue address, dietary requirements, budget, and any branding or presentation preferences. The more detail you share, the smoother the service.',
  },
  {
    q: 'Can you cater dietary requirements for corporate groups?',
    a: 'Yes. We handle vegetarian, vegan, halal, gluten-free, dairy-free, and allergen requirements as standard. All dishes are clearly labelled so guests can choose confidently.',
  },
  {
    q: 'What is the best format for a working lunch?',
    a: 'Boxed lunches, individual platters, or buffet stations with easy-to-eat dishes work best. The goal is minimal interruption, quick service, and easy cleanup.',
  },
  {
    q: 'Do you provide staff for corporate events?',
    a: 'Yes. Service levels are matched to the format. A working lunch may need only delivery and setup, while a canapé reception or buffet requires waiters, a chef, and an event manager.',
  },
  {
    q: 'Is setup and cleanup included?',
    a: 'Yes. Corporate catering includes delivery, setup, service where required, and clear-down. We aim to leave the meeting room or event space exactly as we found it.',
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
  headline: 'Corporate Catering Checklist for Dubai Businesses',
  description: 'A corporate catering checklist for Dubai: pre-event planning, menu formats, service flow, post-event follow-up, and office event tips.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Corporate Catering Checklist Dubai',
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
    { '@type': 'ListItem', position: 3, name: 'Corporate Catering Checklist Dubai', item: 'https://mychef.ae/corporate-catering-checklist-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function CorporateCateringChecklist() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.corp-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.corp-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.corp-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.corp-pre-item', {
      scrollTrigger: { trigger: '.corp-pre', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.corp-format-card', {
      scrollTrigger: { trigger: '.corp-formats', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.corp-flow-item', {
      scrollTrigger: { trigger: '.corp-flow', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.corp-dubai-card', {
      scrollTrigger: { trigger: '.corp-dubai', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.corp-link-item', {
      scrollTrigger: { trigger: '.corp-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.corp-faq-item', {
      scrollTrigger: { trigger: '.corp-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.corp-cta', {
      scrollTrigger: { trigger: '.corp-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Corporate Catering Checklist Dubai | Office Events | myCHEF"
        description="A corporate catering checklist for Dubai businesses: headcount, dietary needs, format, timing, budget, menu options, service flow, and post-event follow-up."
        canonicalPath="/corporate-catering-checklist-dubai"
        ogImage="/service-corporate.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-corporate.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 corp-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Corporate Catering Checklist Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 corp-hero-h1">
            Corporate Catering Checklist for Dubai Businesses
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 corp-hero-sub">
            A practical checklist for planning office breakfasts, working lunches, boardroom meetings, and corporate events in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate-catering-checklist-dubai" className="btn-primary opacity-0 translate-y-4 corp-hero-cta">Get My Custom Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 corp-hero-cta"
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
            OFFICE & BUSINESS EVENTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Catering That Keeps Business Moving
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Corporate catering in Dubai needs to be reliable, timely, and professional. Whether you are feeding a boardroom of ten or hosting a product launch for two hundred, the right checklist ensures nothing is forgotten: headcount, dietary needs, format, timing, budget, and follow-up.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Use this guide to plan your next business event, and share it with your team to keep everyone aligned.
          </p>
        </div>
      </section>

      {/* ═══════════════ Pre-Event Planning ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              BEFORE THE EVENT
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Pre-Event Planning Checklist
            </h2>
          </div>

          <div className="corp-pre grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preEvent.map((item, i) => (
              <div key={i} className="corp-pre-item bg-charcoal p-8 opacity-0 translate-y-12">
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Menu Formats ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Corporate Catering Formats
            </h2>
          </div>

          <div className="corp-formats grid md:grid-cols-2 gap-6">
            {menuFormats.map((fmt, i) => (
              <div key={i} className="corp-format-card bg-white p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{fmt.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{fmt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Service Flow ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                ON THE DAY
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                Service Flow Checklist
              </h2>
              <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
                Corporate events run to tight schedules. A clear service flow keeps the event on time and lets attendees focus on the agenda rather than the catering.
              </p>
            </div>
            <div className="space-y-4">
              {serviceFlow.map((item, i) => (
                <div key={i} className="corp-flow-item flex gap-3 p-5 border border-[#E5E5E5] opacity-0 -translate-x-5">
                  <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-body text-black leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Dubai Examples ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DUBAI BUSINESS SCENARIOS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Corporate Catering Across Dubai
            </h2>
          </div>

          <div className="corp-dubai grid md:grid-cols-2 gap-6">
            {dubaiExamples.map((ex, i) => (
              <div key={i} className="corp-dubai-card bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{ex.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{ex.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Post-Event ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              AFTER THE EVENT
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Post-Event Follow-Up
            </h2>
          </div>

          <div className="space-y-4">
            {postEvent.map((item, i) => (
              <div key={i} className="flex gap-3 p-5 bg-black">
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
            Related Corporate Services & Guides
          </h2>

          <div className="corp-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="corp-link-item group flex items-center justify-between bg-charcoal p-6 opacity-0 hover:bg-[#222] transition-colors"
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
            Corporate Catering FAQ
          </h2>

          <div className="corp-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="corp-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
        <div className="container-custom text-center corp-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Next Corporate Event
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Send us your headcount, date, and format. We will return an itemised corporate catering proposal within two hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate-catering-checklist-dubai" className="btn-primary">Get My Custom Quote</Link>
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
