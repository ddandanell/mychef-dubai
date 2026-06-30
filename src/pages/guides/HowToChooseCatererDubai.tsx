import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  MessageSquare,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
  AlertTriangle,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'m comparing caterers and would like to learn more')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const checklist = [
  {
    title: 'Menu flexibility',
    description: 'The caterer should adapt cuisines, courses, and portion sizes to your event rather than force a fixed package. Ask how they handle custom menus and dietary restrictions.',
  },
  {
    title: 'Tasting policy',
    description: 'A tasting lets you judge quality, presentation, and portion size before committing. Clarify whether tastings are complimentary, deducted from the final bill, or charged separately.',
  },
  {
    title: 'Staffing & service style',
    description: 'Confirm waiter, bartender, chef, and event-manager ratios for your format. Plated dinners and canapé receptions need more staff than buffet service.',
  },
  {
    title: 'Licenses & insurance',
    description: 'Ask about food-handling licenses, liability cover, and alcohol-service permissions if required. Reputable caterers will provide documentation without hesitation.',
  },
  {
    title: 'References & track record',
    description: 'Request examples of similar events they have handled in Dubai. Case studies, venue familiarity, and repeat clients are strong signals of reliability.',
  },
  {
    title: 'Dietary handling',
    description: 'A good caterer asks about allergies, halal requirements, vegan and vegetarian guests, and cross-contamination before you mention them.',
  },
  {
    title: 'Transparent quoting',
    description: 'The quote should itemise food, staff, rentals, transport, VAT, and extras. Avoid caterers who only give a single lump-sum figure with no breakdown.',
  },
  {
    title: 'Venue familiarity',
    description: 'Caterers who know your venue understand kitchen access, loading, timing, and layout constraints, which reduces day-of surprises.',
  },
  {
    title: 'Backup plans',
    description: 'Ask what happens if a key staff member is ill, equipment fails, or guest count changes. Professional caterers have contingency plans for common issues.',
  },
  {
    title: 'Communication',
    description: 'You should receive clear, timely responses and a single point of contact. Slow or vague communication during sales rarely improves once you have paid.',
  },
]

const redFlags = [
  'Refusing to provide an itemised quote or breakdown.',
  'No tasting option before a large or high-value booking.',
  'Unwilling to share license, insurance, or reference information.',
  'Guaranteeing an exact guest count too early or hiding cancellation terms.',
  'Slow, unclear, or evasive communication during the enquiry stage.',
]

const questionsToAsk = [
  'Can I see a sample menu and customise it?',
  'Is a tasting included, and what does it cost?',
  'How many staff will be on site for my guest count and format?',
  'Do you hold food-handling and liability insurance?',
  'How do you handle allergies, halal, vegan, and other dietary needs?',
  'What is included in the final price, and what is extra?',
  'Have you catered at my venue before?',
  'What is your backup plan for staff illness or equipment failure?',
]

const internalLinks = [
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Understand per-person costs and quote structure.' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Highly personalised chef service for homes and villas.' },
  { title: 'Wedding Catering Dubai', link: '/wedding-catering-dubai', description: 'Full-service wedding catering and banquet menus.' },
  { title: 'Corporate Catering Dubai', link: '/corporate-catering-dubai', description: 'Office lunches, boardroom catering, and events.' },
  { title: 'Yacht Catering Dubai', link: '/yacht-catering-dubai', description: 'Specialised catering for Dubai yacht events.' },
  { title: 'Villa Catering Ideas', link: '/villa-catering-ideas-dubai', description: 'Menu formats and setups for Dubai homes.' },
]

const faqs = [
  {
    q: 'What should I look for first when choosing a caterer in Dubai?',
    a: 'Start with menu flexibility, transparent pricing, and event experience that matches your format. A caterer who asks detailed questions about your venue, guest count, dietary needs, and service style is usually better prepared than one who offers a one-size-fits-all package.',
  },
  {
    q: 'How important is a tasting before booking?',
    a: 'Very important for weddings, corporate events, and large private parties. A tasting confirms quality, portion size, and presentation. Ask whether it is complimentary, credited against the final bill, or charged separately.',
  },
  {
    q: 'Should a caterer have insurance and licenses?',
    a: 'Yes. Any caterer handling food at your home, villa, office, or venue should hold current food-handling licenses and public liability insurance. Do not hesitate to ask for documentation.',
  },
  {
    q: 'How do I compare catering quotes fairly?',
    a: 'Ask every caterer for the same format, menu style, staff count, and inclusions. Compare itemised breakdowns rather than headline prices, because a cheaper lump sum may exclude staff, VAT, rentals, or transport.',
  },
  {
    q: 'What are the biggest red flags when hiring a caterer?',
    a: 'Watch for refusal to itemise costs, no tasting option, unwillingness to provide references or insurance, vague cancellation terms, and slow communication. These issues rarely improve after booking.',
  },
  {
    q: 'How far in advance should I book a caterer in Dubai?',
    a: 'For small gatherings, two to three weeks is usually enough. For weddings, corporate events, and peak season from November to March, book six to twelve weeks ahead.',
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
  headline: 'How to Choose the Right Caterer in Dubai',
  description: 'A 10-point checklist for choosing a caterer in Dubai: tastings, licenses, staffing, dietary handling, transparent quoting, venue familiarity, and red flags to avoid.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'How to Choose a Caterer in Dubai',
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
    { '@type': 'ListItem', position: 3, name: 'How to Choose a Caterer in Dubai', item: 'https://mychef.ae/how-to-choose-caterer-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function HowToChooseCatererDubai() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.choose-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.choose-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.choose-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.choose-check-item', {
      scrollTrigger: { trigger: '.choose-checklist', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.choose-flag-item', {
      scrollTrigger: { trigger: '.choose-flags', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.choose-question-item', {
      scrollTrigger: { trigger: '.choose-questions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.choose-link-item', {
      scrollTrigger: { trigger: '.choose-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.choose-faq-item', {
      scrollTrigger: { trigger: '.choose-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.choose-cta', {
      scrollTrigger: { trigger: '.choose-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="How to Choose a Caterer in Dubai | 10-Point Checklist | myCHEF"
        description="Use our 10-point checklist to choose a caterer in Dubai. Covers tastings, licenses, staffing, dietary handling, transparent quotes, venue familiarity, and red flags."
        canonicalPath="/how-to-choose-caterer-dubai"
        ogImage="/service-catering.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-catering.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 choose-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">How to Choose a Caterer in Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 choose-hero-h1">
            How to Choose the Right Caterer in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 choose-hero-sub">
            A practical 10-point checklist to help you compare caterers, spot red flags, and book a team that matches your event, venue, and guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 choose-hero-cta">
              Request a Catering Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 choose-hero-cta"
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
            VETTING & SELECTION
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Make Your Decision With Confidence
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Choosing a caterer is one of the most important decisions for any event. The right partner will ask the right questions, offer a clear proposal, and handle the details so you can focus on hosting. The wrong one can create stress on the day through poor communication, hidden costs, or mismatched service.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            This checklist covers ten areas to evaluate before signing a contract, from menu flexibility and tastings to licenses, staffing, and backup plans.
          </p>
        </div>
      </section>

      {/* ═══════════════ Checklist ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              10-POINT CHECKLIST
            </span>
            <h2 className="font-playfair text-h2 text-white">
              What to Check Before You Book
            </h2>
          </div>

          <div className="choose-checklist grid md:grid-cols-2 gap-6">
            {checklist.map((item, i) => (
              <div key={i} className="choose-check-item bg-charcoal p-8 opacity-0 translate-y-10">
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gold text-black font-inter text-sm font-medium">
                    {i + 1}
                  </span>
                  <h3 className="font-playfair text-h3 text-white pt-1">{item.title}</h3>
                </div>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Red Flags ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                WATCH OUT FOR
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                Red Flags to Avoid
              </h2>
              <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
                These warning signs suggest a caterer may not be ready to deliver the service your event needs. Trust your instincts during the enquiry stage.
              </p>
            </div>
            <div className="space-y-4">
              {redFlags.map((flag, i) => (
                <div key={i} className="choose-flag-item flex gap-3 bg-white p-5 opacity-0 -translate-x-5">
                  <AlertTriangle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-body text-[#737373] leading-relaxed">{flag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Questions to Ask ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DURING THE ENQUIRY
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Questions to Ask Every Caterer
            </h2>
          </div>

          <div className="choose-questions grid md:grid-cols-2 gap-4">
            {questionsToAsk.map((q, i) => (
              <div key={i} className="choose-question-item flex gap-3 items-start p-5 border border-[#E5E5E5] opacity-0 translate-y-5">
                <MessageSquare size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-inter text-body text-black leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Why myCHEF ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHEN TO BOOK MYCHEF
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Why Hosts Choose myCHEF Dubai
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Custom menus built around your guests, venue, and event style.',
              'Itemised proposals with no hidden charges for staff, rentals, or VAT.',
              'Experienced chefs and service staff for villas, offices, yachts, and venues across Dubai.',
              'Dietary requirements handled with care, including halal, vegan, and allergen-free options.',
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
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Services & Guides
          </h2>

          <div className="choose-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="choose-link-item group flex items-center justify-between bg-black p-6 opacity-0 hover:bg-[#222] transition-colors"
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
            Choosing a Caterer FAQ
          </h2>

          <div className="choose-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="choose-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
        <div className="container-custom text-center choose-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Compare Caterers With Confidence
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Ask us anything on your checklist. We will answer honestly, share a clear itemised quote, and help you decide if we are the right fit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Catering Quote
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
        </div>
      </section>
    </div>
  )
}
