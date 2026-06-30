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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like advice on buffet vs plated service (via mychef.ae/buffet-vs-plated-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const comparison = [
  { aspect: 'Atmosphere', buffet: 'Casual, social, encourages mingling', plated: 'Formal, structured, elegant pacing' },
  { aspect: 'Variety', buffet: 'Guests choose from multiple dishes', plated: 'Set menu, chef-controlled portions' },
  { aspect: 'Portion control', buffet: 'Guest-led, can lead to waste', plated: 'Precise portions, less waste' },
  { aspect: 'Service speed', buffet: 'Depends on queue length', plated: 'Steady, synchronised by table' },
  { aspect: 'Staffing needs', buffet: 'Fewer waiters, more station attendants', plated: 'More waiters and kitchen timing' },
  { aspect: 'Cost efficiency', buffet: 'Often lower per head for large groups', plated: 'Higher due to service and plating' },
  { aspect: 'Best for', buffet: 'Large celebrations, mixed tastes, casual events', plated: 'Weddings, gala dinners, formal occasions' },
]

const buffetPros = [
  'More choice for guests with different tastes',
  'Encourages movement and conversation',
  'Usually more cost-effective for large groups',
  'Easier to accommodate dietary variety with labelled stations',
  'Can include live cooking or carving stations for theatre',
]

const buffetCons = [
  'Queues can form at peak times',
  'Food temperature and presentation need careful management',
  'Higher potential for food waste',
  'Less formal than plated service',
]

const platedPros = [
  'Elegant, restaurant-style presentation',
  'Precise portion control and less waste',
  'Predictable timing for speeches and entertainment',
  'Consistent food temperature and quality',
  'Stronger sense of occasion and formality',
]

const platedCons = [
  'Higher staffing and service costs',
  'Less flexibility for guests with changing preferences',
  'Requires accurate RSVPs and dietary information',
  'Slower to serve very large guest counts',
]

const combining = [
  { title: 'Plated starter + buffet main', description: 'Creates a formal opening then lets guests choose their main course.' },
  { title: 'Buffet dinner + plated dessert', description: 'Relaxed dining followed by an elegant dessert course at the table.' },
  { title: 'VIP plated + guest buffet', description: 'Head table receives plated service while remaining guests enjoy a buffet.' },
]

const internalLinks = [
  { title: 'Buffet Catering Dubai', link: '/buffet-catering-dubai', description: 'Buffet stations for events and celebrations.' },
  { title: 'Wedding Catering Dubai', link: '/wedding-catering-dubai', description: 'Plated and banquet options for weddings.' },
  { title: 'Corporate Catering Dubai', link: '/corporate-catering-dubai', description: 'Business lunch and event formats.' },
  { title: 'Luxury Dining Dubai', link: '/luxury-dining-dubai', description: 'Elegant plated private dining experiences.' },
  { title: 'Party Catering Dubai', link: '/party-catering-dubai', description: 'Flexible formats for private celebrations.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Cost guidance for buffet and plated service.' },
]

const faqs = [
  {
    q: 'Is buffet or plated service better for a wedding?',
    a: 'Plated service suits formal weddings with precise timing. Buffets work well for larger, more relaxed celebrations where guests enjoy variety. Many weddings combine both, such as a plated starter and buffet main.',
  },
  {
    q: 'Which option is more cost-effective?',
    a: 'Buffets are usually more cost-effective for large groups because they require fewer service staff. Plated service costs more due to additional waiters, precise plating, and kitchen timing.',
  },
  {
    q: 'Can dietary needs be handled with both formats?',
    a: 'Yes. Buffets can offer separate labelled stations. Plated service requires dietary information in advance so each guest receives the correct dish.',
  },
  {
    q: 'How does staffing differ between buffet and plated?',
    a: 'Buffets need fewer waiters but may require station attendants. Plated service needs more waiters to serve courses in sync and clear between dishes.',
  },
  {
    q: 'Can we combine buffet and plated service?',
    a: 'Yes. Combinations such as plated starters with buffet mains, or buffet dining with plated dessert, give you the benefits of both formats.',
  },
  {
    q: 'Which format works best for large guest counts?',
    a: 'Buffets generally scale more easily for large guest counts. For very large formal events, multiple buffet stations or family-style service can keep queues short while maintaining quality.',
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
  headline: 'Buffet vs Plated Service: Choosing the Right Format in Dubai',
  description: 'Compare buffet and plated catering in Dubai: pros and cons, guest count fit, venue fit, staffing differences, and how to combine both formats.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Buffet vs Plated Service Dubai',
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
    { '@type': 'ListItem', position: 3, name: 'Buffet vs Plated Service Dubai', item: 'https://mychef.ae/buffet-vs-plated-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function BuffetVsPlated() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bp-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bp-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bp-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bp-table-row', {
      scrollTrigger: { trigger: '.bp-table', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bp-procon-card', {
      scrollTrigger: { trigger: '.bp-procon', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bp-combo-card', {
      scrollTrigger: { trigger: '.bp-combo', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bp-link-item', {
      scrollTrigger: { trigger: '.bp-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bp-faq-item', {
      scrollTrigger: { trigger: '.bp-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bp-cta', {
      scrollTrigger: { trigger: '.bp-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Buffet vs Plated Service Dubai | Catering Guide | myCHEF"
        description="Buffet vs plated catering in Dubai: compare atmosphere, variety, cost, staffing, and venue fit. Learn when to choose each or combine both formats."
        canonicalPath="/buffet-vs-plated-dubai"
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
          <nav className="mb-6 opacity-0 translate-y-4 bp-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/guides" className="text-[#A3A3A3] hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Buffet vs Plated Service Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bp-hero-h1">
            Buffet vs Plated Service: Choosing the Right Format in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bp-hero-sub">
            Compare the two most popular catering formats and learn which suits your event style, guest count, and venue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=buffet-vs-plated-dubai" className="btn-primary opacity-0 translate-y-4 bp-hero-cta">Get My Custom Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bp-hero-cta"
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
            FORMAT COMPARISON
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Match the Service Style to Your Event
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Buffet and plated service are the two most common formats for Dubai events, and each creates a different atmosphere. Buffets encourage guests to move, choose, and socialise. Plated service delivers a refined, paced experience where every dish arrives at the table.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            The right choice depends on your guest count, formality, venue layout, and budget. Many events also combine the two for the best of both worlds.
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
              Buffet vs Plated at a Glance
            </h2>
          </div>

          <div className="bp-table overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Aspect</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Buffet</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Plated</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="bp-table-row border-b border-[#2A2A2A] opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-playfair text-white">{row.aspect}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-[#A3A3A3]">{row.buffet}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-[#A3A3A3]">{row.plated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════ Pros/Cons ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              PROS & CONS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Strengths and Trade-Offs
            </h2>
          </div>

          <div className="bp-procon grid md:grid-cols-2 gap-6">
            <div className="bp-procon-card bg-white p-8 opacity-0 translate-y-10">
              <h3 className="font-playfair text-h3 text-black mb-6">Buffet Service</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-inter text-sm uppercase tracking-wider text-gold mb-2">Pros</h4>
                  <ul className="space-y-2">
                    {buffetPros.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <Check size={16} className="text-gold flex-shrink-0 mt-1" />
                        <span className="font-inter text-body-sm text-[#737373] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-inter text-sm uppercase tracking-wider text-[#737373] mb-2">Considerations</h4>
                  <ul className="space-y-2">
                    {buffetCons.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A3A3A3] flex-shrink-0 mt-2" />
                        <span className="font-inter text-body-sm text-[#737373] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bp-procon-card bg-white p-8 opacity-0 translate-y-10">
              <h3 className="font-playfair text-h3 text-black mb-6">Plated Service</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-inter text-sm uppercase tracking-wider text-gold mb-2">Pros</h4>
                  <ul className="space-y-2">
                    {platedPros.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <Check size={16} className="text-gold flex-shrink-0 mt-1" />
                        <span className="font-inter text-body-sm text-[#737373] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-inter text-sm uppercase tracking-wider text-[#737373] mb-2">Considerations</h4>
                  <ul className="space-y-2">
                    {platedCons.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A3A3A3] flex-shrink-0 mt-2" />
                        <span className="font-inter text-body-sm text-[#737373] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Combining ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              BEST OF BOTH
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Combining Buffet and Plated Service
            </h2>
          </div>

          <div className="bp-combo grid md:grid-cols-3 gap-6">
            {combining.map((combo, i) => (
              <div key={i} className="bp-combo-card bg-cream p-8 opacity-0 translate-y-12">
                <h3 className="font-playfair text-h3 text-black mb-3">{combo.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{combo.description}</p>
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

          <div className="bp-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="bp-link-item group flex items-center justify-between bg-charcoal p-6 opacity-0 hover:bg-[#222] transition-colors"
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
            Buffet vs Plated FAQ
          </h2>

          <div className="bp-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bp-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
        <div className="container-custom text-center bp-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Choose the Right Format for Your Event
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your guest count, venue, and occasion. We will recommend a format and build a menu that fits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=buffet-vs-plated-dubai" className="btn-primary">Get My Custom Quote</Link>
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
