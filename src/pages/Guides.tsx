import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  BookOpen,
  ArrowRight,
  Phone,
  DollarSign,
  ClipboardCheck,
  Home,
  Heart,
  Briefcase,
  Users,
  UtensilsCrossed,
  Ship,
  Moon,
  Sparkles,
  ChevronRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I found your guides and would like to discuss catering')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const guides = [
  {
    slug: '/dubai-catering-prices-guide',
    title: 'Dubai Catering Prices Guide',
    description: 'Realistic per-person budgets for private chefs, canapés, buffets, plated dinners, BBQs and yacht catering in Dubai.',
    icon: DollarSign,
  },
  {
    slug: '/how-to-choose-caterer-dubai',
    title: 'How to Choose a Caterer in Dubai',
    description: 'A 10-point checklist for comparing caterers, spotting red flags, and asking the right questions before you book.',
    icon: ClipboardCheck,
  },
  {
    slug: '/villa-catering-ideas-dubai',
    title: 'Villa Catering Ideas',
    description: 'Menu formats and setup inspiration for villa parties, poolside gatherings and at-home celebrations across Dubai.',
    icon: Home,
  },
  {
    slug: '/wedding-catering-checklist-dubai',
    title: 'Wedding Catering Checklist',
    description: 'Month-by-month planning timeline from tasting to table settings so your wedding catering feels effortless.',
    icon: Heart,
  },
  {
    slug: '/corporate-catering-checklist-dubai',
    title: 'Corporate Catering Checklist',
    description: 'Headcount, dietary requirements, formats and service flow for office lunches, conferences and company events.',
    icon: Briefcase,
  },
  {
    slug: '/private-chef-vs-catering-dubai',
    title: 'Private Chef vs Catering',
    description: 'Compare the two approaches by group size, occasion, budget and customisation to find the right fit.',
    icon: Users,
  },
  {
    slug: '/buffet-vs-plated-dubai',
    title: 'Buffet vs Plated Service',
    description: 'Pros, cons and venue fit for each format, plus how to combine buffet and plated service at the same event.',
    icon: UtensilsCrossed,
  },
  {
    slug: '/yacht-catering-guide-dubai',
    title: 'Yacht Catering Guide',
    description: 'Menus, logistics and serving tips for Dubai Marina and Palm Jumeirah yacht parties and sunset cruises.',
    icon: Ship,
  },
  {
    slug: '/ramadan-catering-guide-dubai',
    title: 'Ramadan Catering Guide',
    description: 'Planning Iftar, Suhoor and Eid gatherings with halal menus, cultural timing and large-group service.',
    icon: Moon,
  },
  {
    slug: '/luxury-dinner-planning-guide-dubai',
    title: 'Luxury Dinner Planning Guide',
    description: 'Design an intimate fine-dining experience at home with tasting menus, tablescape ideas and service details.',
    icon: Sparkles,
  },
]

const relatedServices = [
  { title: 'Catering Dubai', link: '/catering-dubai' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai' },
  { title: 'Event Catering', link: '/events' },
  { title: 'Corporate Catering', link: '/corporate' },
  { title: 'Yacht Catering', link: '/yachts' },
  { title: 'Villa Dining', link: '/villas-private-residences' },
]

const faqs = [
  {
    q: 'Are your guides free to read?',
    a: 'Yes. Every guide on this page is free and designed to help you plan catering in Dubai with realistic advice, not sales pressure.',
  },
  {
    q: 'Can I request a custom quote after reading a guide?',
    a: 'Absolutely. Each guide includes a link to our inquiry form and a WhatsApp button so you can move from research to a tailored proposal quickly.',
  },
  {
    q: 'Do the price ranges in your guides include staff and equipment?',
    a: 'Our Dubai Catering Prices Guide breaks down what is typically included and which factors add cost, such as extra staff, bar service, premium ingredients or equipment rentals.',
  },
  {
    q: 'Are these guides written for Dubai specifically?',
    a: 'Yes. Every guide references Dubai venues, seasons, cultural considerations and local logistics so the advice is relevant to events here.',
  },
  {
    q: 'How do I know whether to choose a private chef or full catering?',
    a: 'Our Private Chef vs Catering guide compares the two options by group size, occasion and budget so you can choose the right service model.',
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

const collectionSchema = {
  '@type': 'CollectionPage',
  name: 'Catering Guides Dubai',
  url: 'https://mychef.ae/guides',
  description: 'Free guides for planning catering in Dubai: prices, checklists, villa ideas, yacht catering, Ramadan, luxury dinners and more.',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://mychef.ae/guides' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [collectionSchema, faqSchema, breadcrumbSchema],
}

export default function Guides() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.guides-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.guides-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.guides-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.guides-card', {
      scrollTrigger: { trigger: '.guides-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.guides-faq-item', {
      scrollTrigger: { trigger: '.guides-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.guides-services', {
      scrollTrigger: { trigger: '.guides-services', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.guides-cta', {
      scrollTrigger: { trigger: '.guides-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div ref={containerRef}>
      <SEO
        title="Catering Guides Dubai | Prices, Checklists & Planning | myCHEF"
        description="Free Dubai catering guides: prices, wedding and corporate checklists, villa ideas, yacht catering, Ramadan planning, private chef vs catering, and more."
        canonicalPath="/guides"
        ogImage="/service-catering.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-catering.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 guides-hero-h1" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Guides</span></li>
            </ol>
          </nav>

          <p className="font-inter text-caption uppercase tracking-[0.2em] text-gold mb-4 opacity-0 translate-y-4 guides-hero-h1">
            Free Planning Resources
          </p>
          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 guides-hero-h1">
            Catering Guides for Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 guides-hero-sub">
            Practical guides to help you plan private dining, events, weddings, corporate functions and celebrations across Dubai — from budgets and checklists to menu ideas and timing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 guides-hero-cta">
              Request a Custom Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 guides-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Guides Grid ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Browse by Topic
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Everything You Need to Plan Catering in Dubai
            </h2>
          </div>

          <div className="guides-grid grid md:grid-cols-2 gap-6">
            {guides.map((guide, i) => {
              const Icon = guide.icon
              return (
                <Link
                  key={i}
                  to={guide.slug}
                  className="guides-card group flex gap-5 bg-cream p-6 border border-[#E5E5E5] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 translate-y-10"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black flex items-center justify-center">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-h3 text-black mb-2 group-hover:text-gold transition-colors">
                      {guide.title}
                    </h3>
                    <p className="font-inter text-body-sm text-[#737373] leading-relaxed mb-3">
                      {guide.description}
                    </p>
                    <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                      Read Guide <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Related Services ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="guides-services opacity-0 translate-y-8">
            <h2 className="font-playfair text-h2 text-white text-center mb-10">
              Explore Our Catering Services
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {relatedServices.map((svc, i) => (
                <Link
                  key={i}
                  to={svc.link}
                  className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FAQ
            </span>
            <h2 className="font-playfair text-[36px] text-black">
              About Our Catering Guides
            </h2>
          </div>

          <div className="guides-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="guides-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openFaq === i}
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
      <section className="guides-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <BookOpen size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Read the guides, then request a custom proposal. We design menus and service plans for villas, offices, yachts and event spaces across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Custom Quote
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
          <p className="font-inter text-sm text-[#A3A3A3] mt-6">
            We typically reply within 2 hours during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
