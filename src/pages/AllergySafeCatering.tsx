import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ShieldAlert,
  UtensilsCrossed,
  ClipboardList,
  Phone,
  ChevronRight,
  ArrowRight,
  Check,
  Leaf,
} from 'lucide-react'
import SEO from '../components/SEO'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss allergy-safe catering (via mychef.ae/allergy-safe-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/allergy-safe-catering-dubai'
const CAMPAIGN = 'allergy-safe-catering'

const protocols = [
  {
    icon: ClipboardList,
    title: 'Detailed Allergen Briefing',
    description: 'Before any booking, we collect a complete allergen and dietary profile: specific allergens, severity, cross-contact risks, religious or lifestyle requirements, and any certified ingredient needs. This briefing travels with the booking to the matched chef.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Ingredient Verification',
    description: 'Chefs verify ingredient labels and supplier declarations. Where required, we source from trusted suppliers and keep packaging available for client review. No substituted ingredient is used without client approval.',
  },
  {
    icon: ShieldAlert,
    title: 'Cross-Contact Controls',
    description: 'For severe allergies, chefs prepare allergen-free dishes first, use cleaned or dedicated equipment, and segregate storage and plating. We communicate honestly about what can and cannot be guaranteed in your specific kitchen or venue.',
  },
  {
    icon: Leaf,
    title: 'Dietary & Lifestyle Alignment',
    description: 'Beyond allergens, we handle halal, kosher-style, vegan, vegetarian, gluten-free, dairy-free, nut-free, keto, Jain, low-FODMAP, and diabetic-friendly requirements — always matched to chefs with relevant experience.',
  },
]

const commitments = [
  {
    title: 'No hidden ingredient substitutions',
    description: 'If a requested ingredient is unavailable, the chef contacts you before making any change.',
  },
  {
    title: 'Severity-sensitive workflow',
    description: 'Anaphylaxis-risk events are flagged and handled with enhanced separation and communication protocols.',
  },
  {
    title: 'Chef experience matching',
    description: 'We prioritise chefs who have demonstrable experience with the specific allergen or dietary protocol you require.',
  },
  {
    title: 'Transparent limitations',
    description: 'We tell you upfront if a requested menu cannot be made safely in your venue or with available supply.',
  },
]

const faqs = [
  {
    q: 'Do you guarantee a 100% allergen-free environment?',
    a: 'We cannot guarantee absolute zero exposure in every private kitchen or venue, because home and event environments vary. What we guarantee is a rigorous protocol: detailed briefing, ingredient verification, cross-contact controls, and honest communication about what is achievable in your specific setting.',
  },
  {
    q: 'Can you handle anaphylaxis-level allergies?',
    a: 'Yes, but with clear boundaries. We flag high-severity allergies, match the booking to experienced chefs, and apply enhanced separation protocols. Clients must still carry their own emergency medication and inform guests of residual risk.',
  },
  {
    q: 'Are your chefs certified in allergen training?',
    a: 'All chefs in our network are required to demonstrate food safety awareness, including allergen handling. For high-risk bookings, we prioritise chefs with additional allergen or clinical-dietary experience.',
  },
  {
    q: 'What allergens can you accommodate?',
    a: 'We regularly handle gluten, dairy, eggs, nuts, peanuts, shellfish, fish, soy, sesame, and sulphites, as well as lifestyle diets including vegan, vegetarian, halal, kosher-style, keto, Jain, and low-FODMAP.',
  },
  {
    q: 'Do you charge extra for allergy-safe catering?',
    a: 'Standard allergen accommodation is included in most menus. Complex protocols, certified ingredient sourcing, or dedicated equipment may incur a supplement, which is quoted transparently before booking.',
  },
]

const relatedServices = [
  {
    title: 'Healthy Catering Dubai',
    description: 'Balanced, nutrition-conscious menus for events and family dining.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/healthy-catering-dubai',
  },
  {
    title: 'Gluten-Free Catering',
    description: 'Dedicated gluten-free menus with cross-contact controls.',
    image: '/images/gluten-free-catering-dubai-hero.webp',
    link: '/gluten-free-catering-dubai',
  },
  {
    title: 'Nut-Free Catering',
    description: 'Safe nut-free event catering for homes, schools, and venues.',
    image: '/images/nut-free-catering-dubai-hero.webp',
    link: '/nut-free-catering-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Allergy-Safe Catering',
      'Allergy-safe private chef and catering service in Dubai with allergen briefing, ingredient verification, cross-contact controls, and dietary accommodation.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Allergy-Safe Catering Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

export default function AllergySafeCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.asc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.asc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.asc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.asc-intro-text', {
      scrollTrigger: { trigger: '.asc-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.asc-protocol-card', {
      scrollTrigger: { trigger: '.asc-protocols', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.asc-commitment-item', {
      scrollTrigger: { trigger: '.asc-commitments', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.asc-faq-item', {
      scrollTrigger: { trigger: '.asc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.asc-rel-card', {
      scrollTrigger: { trigger: '.asc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.asc-cta', {
      scrollTrigger: { trigger: '.asc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Allergy-Safe Catering Dubai | Zero Cross-Contamination Protocol | myCHEF"
        description="Allergy-safe private chef and catering in Dubai. Detailed allergen briefings, ingredient verification, cross-contact controls, and dietary accommodation."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/healthy-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/healthy-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 asc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Allergy-Safe Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 asc-hero-h1">
            Allergy-Safe Catering You Can Trust
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 asc-hero-sub">
            Private chef and event catering in Dubai with rigorous allergen protocols, ingredient verification, and cross-contact controls — so every guest can eat with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 asc-hero-cta">Request an Allergy-Safe Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 asc-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            ALLERGEN-AWARE PRIVATE DINING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Safety Through Protocol, Not Assumption
          </h2>
          <div className="asc-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Feeding guests with allergies, intolerances, or strict dietary requirements demands more than a talented chef. It requires a system: clear communication, verified ingredients, controlled preparation, and honest disclosure of what can and cannot be guaranteed.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              At myCHEF Dubai, allergy-safe catering begins before the chef shops. We collect a detailed allergen profile, match the booking to chefs with relevant experience, verify ingredients and suppliers, and apply cross-contact controls appropriate to the severity of the allergy. We do not claim miracles — we claim methodical care.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Explore our <Link to="/gluten-free-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">gluten-free</Link>, <Link to="/dairy-free-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">dairy-free</Link>, and <Link to="/nut-free-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">nut-free</Link> catering pages, or learn about our broader <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">healthy catering</Link> options.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Protocols ═══════════════ */}
      <section className="asc-protocols bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              OUR PROTOCOL
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Four Steps to Safer Catering
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {protocols.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="asc-protocol-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Commitments ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT SETS US APART
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Our Allergy-Safe Commitments
            </h2>
          </div>

          <div className="asc-commitments grid md:grid-cols-2 gap-6">
            {commitments.map((item, i) => (
              <div key={i} className="asc-commitment-item bg-charcoal p-8 opacity-0 translate-y-8">
                <Check size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              <strong className="text-white">Important:</strong> While we apply rigorous protocols, clients with severe allergies must still carry emergency medication and communicate all risks clearly. We will always be honest about the limits of what can be guaranteed in a given environment.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Allergy-Safe Catering Questions
          </h2>

          <div className="asc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="asc-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 6: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Related Dietary Services
          </h3>

          <div className="asc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="asc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-gray-400 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center asc-cta opacity-0 translate-y-8">
          <ShieldAlert size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Protect Every Guest at Your Table
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your guests' allergies and dietary needs. We will design a safe, delicious menu and match you with a chef who knows how to execute it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Request a Quote</Link>
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
