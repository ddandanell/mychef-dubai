import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ChefHat,
  Users,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'m deciding between a private chef and catering')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const comparison = [
  { feature: 'Typical guest count', privateChef: '2–20 guests', catering: '15–200+ guests' },
  { feature: 'Menu personalisation', privateChef: 'Highly custom, daily input', catering: 'Custom within event format' },
  { feature: 'Service style', privateChef: 'Chef-led, intimate table service', catering: 'Waiters, buffet, stations, or plated' },
  { feature: 'Staff included', privateChef: 'Chef + 1–2 assistants', catering: 'Chef, event manager, waiters, bartenders' },
  { feature: 'Best for', privateChef: 'Dinners, tastings, family meals', catering: 'Parties, weddings, corporate events' },
  { feature: 'Cost structure', privateChef: 'Per service or per person', catering: 'Per person with itemised add-ons' },
  { feature: 'Setup & cleanup', privateChef: 'Minimal, kitchen-focused', catering: 'Full event setup, service, and clear-down' },
]

const privateChefBest = [
  'Intimate dinners for two to ten guests',
  'Weekly or recurring family meals at home',
  'Highly customised tasting menus',
  'Dietary programmes requiring daily attention',
  'Hosts who want direct chef collaboration',
]

const cateringBest = [
  'Birthdays, weddings, and celebrations with many guests',
  'Corporate events needing fast, professional service',
  'Events requiring waiters, bartenders, and rentals',
  'Mixed formats such as buffet, canapés, and live stations',
  'Hosts who want a full-service team rather than one chef',
]

const hybridOptions = [
  { title: 'Private chef + serving staff', description: 'A chef cooks in your home while waiters serve courses to a slightly larger group.' },
  { title: 'Catering with chef’s table', description: 'A buffet or plated meal with a dedicated chef station for VIP guests.' },
  { title: 'Family-style catering', description: 'Shared platters served to the table, combining the warmth of home dining with full-service support.' },
]

const costScale = [
  { title: 'Small groups (2–10)', note: 'Private chef is often simpler and more cost-effective; you pay for one chef and minimal ingredients.' },
  { title: 'Medium groups (15–40)', note: 'Either option can work. A private chef with assistants suits seated dinners; catering suits mixed formats.' },
  { title: 'Large groups (50+)', note: 'Catering is usually the practical choice for staffing, service flow, rentals, and kitchen capacity.' },
]

const internalLinks = [
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for homes and villas.' },
  { title: 'Catering Dubai', link: '/catering-dubai', description: 'Full-service catering for events of all sizes.' },
  { title: 'Villa Catering Ideas', link: '/villa-catering-ideas-dubai', description: 'Menu formats designed for Dubai homes.' },
  { title: 'Luxury Dining Dubai', link: '/luxury-dining-dubai', description: 'Elegant private dining experiences.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Cost guidance for chef and catering formats.' },
  { title: 'Party Catering Dubai', link: '/party-catering-dubai', description: 'Full-service catering for private celebrations.' },
]

const faqs = [
  {
    q: 'Is a private chef or catering better for a dinner party?',
    a: 'For small, intimate dinners, a private chef offers personal attention and a custom menu. For larger or more complex events with multiple courses, drinks, and service, catering provides the full team needed to run everything smoothly.',
  },
  {
    q: 'Can a private chef handle more than ten guests?',
    a: 'Yes, with additional support staff. For groups above fifteen to twenty, the line between private chef service and small-event catering begins to blur, and a catering team may be more efficient.',
  },
  {
    q: 'What is a hybrid private chef and catering option?',
    a: 'Hybrid options include a private chef with waiters, chef-attended stations within a buffet, or family-style service. These give you chef-led quality with the service coverage of a catering team.',
  },
  {
    q: 'Which option is more cost-effective?',
    a: 'For very small groups, a private chef can be more cost-effective. For larger events, catering usually offers better value because the cost is spread across many guests and includes a full service team.',
  },
  {
    q: 'Do both options include setup and cleanup?',
    a: 'Private chefs typically focus on kitchen prep and plating, with light cleanup. Catering includes full setup, service, and clear-down as part of the package.',
  },
  {
    q: 'How do I decide which is right for my Dubai event?',
    a: 'Start with guest count and service style. If you want an intimate chef experience, choose a private chef. If you need full event service for many guests, choose catering. We can advise once we know your event details.',
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
  headline: 'Private Chef vs Catering: What Works Best in Dubai?',
  description: 'Compare private chef and catering services in Dubai: guest count, service style, cost, when to choose each, and hybrid options.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Private Chef vs Catering Dubai',
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
    { '@type': 'ListItem', position: 3, name: 'Private Chef vs Catering Dubai', item: 'https://mychef.ae/private-chef-vs-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function PrivateChefVsCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.pvc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.pvc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.pvc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.pvc-table-row', {
      scrollTrigger: { trigger: '.pvc-table', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.pvc-best-card', {
      scrollTrigger: { trigger: '.pvc-best', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pvc-hybrid-card', {
      scrollTrigger: { trigger: '.pvc-hybrid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pvc-scale-row', {
      scrollTrigger: { trigger: '.pvc-scale', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pvc-link-item', {
      scrollTrigger: { trigger: '.pvc-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.pvc-faq-item', {
      scrollTrigger: { trigger: '.pvc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pvc-cta', {
      scrollTrigger: { trigger: '.pvc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Chef vs Catering Dubai | Which to Choose | myCHEF"
        description="Private chef vs catering in Dubai: compare guest count, service style, cost, and when to choose each. Hybrid options and scale guidance included."
        canonicalPath="/private-chef-vs-catering-dubai"
        ogImage="/service-private-chef.jpg"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-private-chef.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 pvc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Private Chef vs Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 pvc-hero-h1">
            Private Chef vs Catering: What Works Best in Dubai?
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 pvc-hero-sub">
            A clear comparison to help you choose between a private chef and full catering for your Dubai home, villa, or event.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 pvc-hero-cta">
              Get Personalised Advice
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 pvc-hero-cta"
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
            DECISION GUIDE
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Choose the Right Service for Your Occasion
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Private chefs and catering teams both bring restaurant-quality food to your location, but they serve different needs. A private chef is ideal when you want close collaboration and an intimate experience. Catering is the better fit when you need a full team to manage a larger event with service, rentals, and clear-down.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Below is a side-by-side comparison, plus guidance on hybrid options and how cost changes with scale.
          </p>
        </div>
      </section>

      {/* ═══════════════ Comparison Table ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SIDE-BY-SIDE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Private Chef vs Catering Comparison
            </h2>
          </div>

          <div className="pvc-table overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Feature</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Private Chef</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Catering</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="pvc-table-row border-b border-[#2A2A2A] opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-playfair text-white">{row.feature}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-[#A3A3A3]">{row.privateChef}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-[#A3A3A3]">{row.catering}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════ When to Choose ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MAKING THE CHOICE
            </span>
            <h2 className="font-playfair text-h2 text-black">
              When to Choose Each Option
            </h2>
          </div>

          <div className="pvc-best grid md:grid-cols-2 gap-6">
            <div className="pvc-best-card bg-white p-8 opacity-0 translate-y-10">
              <div className="flex items-center gap-3 mb-6">
                <ChefHat size={28} className="text-gold" />
                <h3 className="font-playfair text-h3 text-black">Choose a Private Chef</h3>
              </div>
              <ul className="space-y-3">
                {privateChefBest.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-body text-[#737373] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pvc-best-card bg-white p-8 opacity-0 translate-y-10">
              <div className="flex items-center gap-3 mb-6">
                <Users size={28} className="text-gold" />
                <h3 className="font-playfair text-h3 text-black">Choose Catering</h3>
              </div>
              <ul className="space-y-3">
                {cateringBest.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-body text-[#737373] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Hybrid Options ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              BEST OF BOTH
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Hybrid Options
            </h2>
          </div>

          <div className="pvc-hybrid grid md:grid-cols-3 gap-6">
            {hybridOptions.map((opt, i) => (
              <div key={i} className="pvc-hybrid-card bg-cream p-8 opacity-0 translate-y-12">
                <h3 className="font-playfair text-h3 text-black mb-3">{opt.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{opt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Cost/Scale ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              COST & SCALE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              How Group Size Affects the Decision
            </h2>
          </div>

          <div className="pvc-scale space-y-4">
            {costScale.map((item, i) => (
              <div key={i} className="pvc-scale-row flex gap-3 bg-charcoal p-6 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-playfair text-h3 text-white mb-1">{item.title}</h3>
                  <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Explore Our Services
          </h2>

          <div className="pvc-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="pvc-link-item group flex items-center justify-between bg-black p-6 opacity-0 hover:bg-[#222] transition-colors"
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
            Private Chef vs Catering FAQ
          </h2>

          <div className="pvc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="pvc-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
        <div className="container-custom text-center pvc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Not Sure Which to Choose?
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your guest count, venue, and the experience you want. We will recommend the right service and send a tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Recommendation
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
