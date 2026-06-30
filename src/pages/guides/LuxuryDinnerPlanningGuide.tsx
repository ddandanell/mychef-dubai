import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sparkles,
  UtensilsCrossed,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like help planning a luxury dinner')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const definingOccasion = [
  {
    title: 'Purpose',
    description: 'Is the dinner celebratory, romantic, corporate, or a thank-you? The occasion shapes the menu, guest count, and atmosphere.',
  },
  {
    title: 'Guest list',
    description: 'A luxury dinner is usually intimate. Smaller groups allow for personal touches, detailed service, and meaningful conversation.',
  },
  {
    title: 'Setting',
    description: 'Choose between a private villa, penthouse, yacht, or venue space. The setting determines kitchen access, styling, and entertainment flow.',
  },
  {
    title: 'Tone',
    description: 'Decide whether the evening is formal and elegant, relaxed and convivial, or somewhere in between. This guides every later decision.',
  },
]

const menuDesign = [
  {
    title: 'Tasting menus',
    description: 'A structured progression of five to eight courses, each designed to build flavour and theatre. Ideal for milestone celebrations and curated experiences.',
  },
  {
    title: 'Wine pairing style service',
    description: 'Each course is matched with a chosen beverage, whether wine, craft mocktail, or infused tea. Non-alcoholic pairings can be equally refined.',
  },
  {
    title: 'Premium ingredients',
    description: 'Seasonal produce, quality proteins, and thoughtful sourcing form the foundation. The focus is on execution rather than excess.',
  },
  {
    title: 'Dietary artistry',
    description: 'Special dietary requirements are treated as design constraints, not compromises, with dishes that look and taste exceptional.',
  },
]

const tablescape = [
  { title: 'Linens & tableware', note: 'High-quality cloth, polished cutlery, crystal or stemware, and chargers set the visual tone.' },
  { title: 'Florals & candles', note: 'Low arrangements encourage conversation; candlelight adds warmth and intimacy.' },
  { title: 'Menu cards & place cards', note: 'Printed details make the evening feel considered and personal.' },
  { title: 'Napkin folds & accents', note: 'Small touches such as custom napkins or name cards elevate the experience.' },
]

const ambience = [
  { title: 'Lighting', note: 'Layered lighting with dimmers, candles, and accent fixtures creates depth and mood.' },
  { title: 'Music', note: 'A curated playlist or live musician sets the pace without overpowering conversation.' },
  { title: 'Scent', note: 'Subtle, fresh fragrances in entryways and bathrooms enhance the sensory impression.' },
  { title: 'Service timing', note: 'Courses are paced to allow conversation, toasts, and natural pauses.' },
]

const hostingTips = [
  'Welcome guests personally and introduce the menu or chef if appropriate.',
  'Keep speeches and toasts brief so the kitchen can maintain course timing.',
  'Seat guests with conversation in mind, mixing personalities and relationships.',
  'Plan a small surprise, such as an amuse-bouche or palate cleanser, between courses.',
  'End the evening with coffee, petit fours, or a digestif in a separate lounge area.',
]

const internalLinks = [
  { title: 'Luxury Dining Dubai', link: '/luxury-dining-dubai', description: 'Elegant private dining and tasting menus.' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for intimate dinners.' },
  { title: 'Villa Catering Ideas', link: '/villa-catering-ideas-dubai', description: 'Setup and menu ideas for villa dinners.' },
  { title: 'Romantic Dinner Dubai', link: '/romantic-dinner-dubai', description: 'Intimate dining experiences for two.' },
  { title: 'Anniversary Catering Dubai', link: '/anniversary-catering-dubai', description: 'Celebratory dinners for anniversaries.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Budget guidance for luxury dinner formats.' },
]

const faqs = [
  {
    q: 'How many courses should a luxury dinner have?',
    a: 'Most luxury dinners include five to eight courses, including amuse-bouche, starter, fish, main, cheese, dessert, and petit fours. The number depends on the length of the evening and guest appetite.',
  },
  {
    q: 'Can a luxury dinner be hosted at home?',
    a: 'Yes. Private homes and villas are excellent settings for luxury dinners. A private chef and service team bring the restaurant experience to you, including table styling, wine service, and cleanup.',
  },
  {
    q: 'What makes a dinner feel luxurious?',
    a: 'Attention to detail: a cohesive menu, beautiful tablescape, attentive service, thoughtful pacing, and ambient lighting and music. Luxury is felt in the consistency of every touchpoint.',
  },
  {
    q: 'Do you provide wine pairing?',
    a: 'Yes. We can create wine or non-alcoholic pairings for each course. Pairings are selected to complement the menu and suit the preferences of your guests.',
  },
  {
    q: 'How far in advance should I plan a luxury dinner?',
    a: 'Two to four weeks is ideal. For large or themed events, or during peak season from November to March, six to eight weeks allows time for tastings and detailed planning.',
  },
  {
    q: 'Can dietary requirements be accommodated elegantly?',
    a: 'Absolutely. Dietary needs are integrated into the menu from the start so every guest receives a beautiful, delicious course that matches the rest of the table.',
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
  headline: 'Luxury Dinner Planning Guide for Dubai',
  description: 'A guide to planning a luxury dinner in Dubai: menu design, tasting menus, tablescape, chef and service staff, lighting, music, ambience, and hosting tips.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Luxury Dinner Planning Guide Dubai',
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
    { '@type': 'ListItem', position: 3, name: 'Luxury Dinner Planning Guide Dubai', item: 'https://mychef.ae/luxury-dinner-planning-guide-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function LuxuryDinnerPlanningGuide() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.lux-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.lux-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.lux-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.lux-occasion-card', {
      scrollTrigger: { trigger: '.lux-occasion', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lux-menu-card', {
      scrollTrigger: { trigger: '.lux-menu', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lux-table-row', {
      scrollTrigger: { trigger: '.lux-tablescape', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lux-ambience-card', {
      scrollTrigger: { trigger: '.lux-ambience', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lux-tip-item', {
      scrollTrigger: { trigger: '.lux-tips', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lux-link-item', {
      scrollTrigger: { trigger: '.lux-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.lux-faq-item', {
      scrollTrigger: { trigger: '.lux-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lux-cta', {
      scrollTrigger: { trigger: '.lux-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Luxury Dinner Planning Guide Dubai | Private Dining | myCHEF"
        description="Plan a luxury dinner in Dubai: tasting menus, tablescape, wine pairings, private chef, service staff, lighting, music, ambience, and hosting tips."
        canonicalPath="/luxury-dinner-planning-guide-dubai"
        ogImage="/service-luxury-dining.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-luxury-dining.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 lux-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Luxury Dinner Planning Guide Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 lux-hero-h1">
            Luxury Dinner Planning Guide for Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 lux-hero-sub">
            How to design an unforgettable private dining experience, from menu and tablescape to lighting, service, and hosting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 lux-hero-cta">
              Plan a Luxury Dinner
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 lux-hero-cta"
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
            PRIVATE DINING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Create an Evening Worth Remembering
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            A luxury dinner is not only about fine food. It is the combination of a considered menu, beautiful surroundings, attentive service, and a host who can relax and enjoy the evening. In Dubai, private villas, penthouses, yachts, and exclusive spaces provide the perfect canvas for an intimate, restaurant-quality experience at home.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            This guide walks you through the key decisions, from defining the occasion to designing the menu, tablescape, ambience, and service flow.
          </p>
        </div>
      </section>

      {/* ═══════════════ Defining Occasion ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FIRST STEPS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Defining the Occasion
            </h2>
          </div>

          <div className="lux-occasion grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {definingOccasion.map((item, i) => (
              <div key={i} className="lux-occasion-card bg-charcoal p-8 opacity-0 translate-y-12">
                <Sparkles size={32} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Menu Design ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU DESIGN
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Designing the Menu
            </h2>
          </div>

          <div className="lux-menu grid md:grid-cols-2 gap-6">
            {menuDesign.map((item, i) => (
              <div key={i} className="lux-menu-card bg-white p-8 opacity-0 translate-y-10">
                <UtensilsCrossed size={28} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Tablescape ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              TABLESCAPE
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Styling the Table
            </h2>
          </div>

          <div className="lux-tablescape space-y-4">
            {tablescape.map((item, i) => (
              <div key={i} className="lux-table-row flex gap-3 bg-cream p-6 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-playfair text-h3 text-black mb-1">{item.title}</h3>
                  <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Ambience ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              ATMOSPHERE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Lighting, Music & Ambience
            </h2>
          </div>

          <div className="lux-ambience grid md:grid-cols-2 gap-6">
            {ambience.map((item, i) => (
              <div key={i} className="lux-ambience-card bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Service Team ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                SERVICE
              </span>
              <h2 className="font-playfair text-h2 text-white mb-6">
                Chef and Service Staff
              </h2>
              <p className="font-inter text-body-lg text-[#A3A3A3] leading-relaxed">
                A luxury dinner requires a team that understands timing and discretion. The chef executes the menu while service staff anticipate guest needs without interrupting conversation.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Private chef to design and execute the menu.',
                'Dedicated waiter for each table or zone.',
                'Sommelier or drinks steward for pairings.',
                'Event manager to coordinate pacing and host communication.',
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-body text-[#A3A3A3] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Hosting Tips ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HOSTING
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Hosting Tips for the Evening
            </h2>
          </div>

          <div className="lux-tips space-y-4">
            {hostingTips.map((tip, i) => (
              <div key={i} className="lux-tip-item flex gap-3 p-5 border border-[#E5E5E5] opacity-0 translate-y-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-inter text-body text-black leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Private Dining Services
          </h2>

          <div className="lux-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="lux-link-item group flex items-center justify-between bg-charcoal p-6 opacity-0 hover:bg-[#222] transition-colors"
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
            Luxury Dinner FAQ
          </h2>

          <div className="lux-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="lux-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
        <div className="container-custom text-center lux-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Design Your Luxury Dinner
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your occasion, guest list, and vision. We will create a tailored menu, tablescape, and service plan for an unforgettable evening.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Plan My Luxury Dinner
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
