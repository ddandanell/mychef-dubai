// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /allergy-safe-catering-dubai
//     primary:     "allergy safe catering dubai"
//     subkeywords: "allergy safe catering dubai price" · "allergy safe catering cost per person dubai" · "best allergy safe catering dubai" · "allergy safe catering packages dubai" · "allergy safe catering menu dubai" · "catering for guests with food allergies dubai" · "best catering service in dubai" · "catering services availability in dubai" · "event catering" · "most reliable catering in dubai" · "food safety in dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  ShieldAlert,
  UtensilsCrossed,
  ClipboardList,
  Phone,
  ArrowRight,
  Check,
  Leaf,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss allergy-safe catering (via mychef.ae/allergy-safe-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/allergy-safe-catering-dubai'

const protocols = [
  {
    icon: ClipboardList,
    title: 'Allergen briefing before a chef is matched',
    description: 'You name the allergens, the severity, and any religious or lifestyle rules. That list travels with the booking. Dietary notes go into the first menu draft. We do not discover a gap two days before service.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Labels checked before they hit the pot',
    description: 'Partner chefs check ingredient labels and supplier notes. If a listed ingredient is unavailable, they contact you before substituting. Packaging can be kept for review when you ask.',
  },
  {
    icon: ShieldAlert,
    title: 'Cross-contact controls, with honest limits',
    description: 'For severe allergies we cook the restricted dishes first, use cleaned equipment, and separate storage and plating where the room allows. Shared kitchens still carry residual risk. We say what your kitchen or hired space can and cannot support.',
  },
  {
    icon: Leaf,
    title: 'Diets on the same brief',
    description: 'Halal, vegan, vegetarian, gluten-free, dairy-free, nut-free, keto, Jain, low-FODMAP and sugar-aware lines sit on the same draft when you list them. Jain and halal are different systems. We never combine them as one label.',
  },
]

const commitments = [
  {
    title: 'No silent substitutions',
    description: 'If an ingredient on the draft cannot be sourced, the chef contacts you before changing it.',
  },
  {
    title: 'Severity is flagged early',
    description: 'Anaphylaxis-risk bookings are marked before matching. Extra separation is planned. We still cannot call a shared kitchen allergen-free.',
  },
  {
    title: 'Chef matching to the brief',
    description: 'We match a partner chef who has cooked this kind of brief. We do not publish years of experience we cannot evidence.',
  },
  {
    title: 'We would rather say no',
    description: 'If the menu cannot be made safely in your kitchen or with available supply, we tell you before you book.',
  },
]

const faqs = [
  {
    q: 'Do you guarantee a 100% allergen-free kitchen?',
    a: 'No. Partner chefs cook in shared kitchens and in your home. We brief, verify labels, and separate prep where the room allows. Residual cross-contact risk remains. Guests who carry emergency medication should still bring it.',
  },
  {
    q: 'Can you handle anaphylaxis-level allergies?',
    a: 'We can take the booking when the space and the brief support it. High-severity allergies are flagged, the chef is matched accordingly, and we apply tighter separation. We will say no if the kitchen cannot support that. Carry prescribed medication.',
  },
  {
    q: 'Are chefs certified in allergen training?',
    a: 'Chefs in our network must show food-safety awareness, including allergen handling. We do not invent a named certificate we cannot show. For high-risk bookings we match chefs who have cooked that brief before.',
  },
  {
    q: 'What allergens can you accommodate?',
    a: 'Gluten, dairy, eggs, nuts, peanuts, shellfish, fish, soy, sesame and sulphites are common lines. Lifestyle diets such as vegan, vegetarian, halal, keto, Jain and low-FODMAP sit on the same draft when you list them.',
  },
  {
    q: 'How is allergy safe catering Dubai priced?',
    a: 'By custom quote. Guest count, the menu and how much of the work happens in the room move the figure. Extra separation or named-ingredient sourcing is itemised when it applies. 5% VAT is shown separately. Send the date, headcount and the allergen list.',
  },
]

const relatedServices = [
  {
    title: 'Cuisines Dubai',
    description: 'Indian, Arabic, Italian, vegan, vegetarian, Jain and more, built around how your guests eat.',
    image: '/images/cuisines-hub-dubai-hero.webp',
    link: '/cuisines-dubai',
  },
  {
    title: 'Halal Catering',
    description: 'Halal sourcing as the default, not an add-on.',
    image: '/images/halal-catering-dubai-hero.webp',
    link: '/halal-catering-dubai',
  },
  {
    title: 'Catering Dubai',
    description: 'The full catering service this protocol sits inside.',
    image: '/images/catering-dubai-hero.webp',
    link: '/catering-dubai',
  },
]

const requirementSections = [
  {
    title: 'Gluten',
    description: 'Wheat, barley and rye stay off the plate when you brief us. We verify labels, keep a separate prep path for coeliac-risk guests, and say clearly if a home kitchen cannot support that separation.',
  },
  {
    title: 'Dairy',
    description: 'Lactose-free and dairy-free are not the same brief. Tell us which you need. We swap stocks, pastries and finishing butters before service, not at the pass.',
  },
  {
    title: 'Nuts',
    description: 'For nut-free events we treat the whole menu, not one dish. That includes oils, garnishes, desserts and supplier declarations. Severe nut allergy is flagged before a chef is matched.',
  },
  {
    title: 'Low-FODMAP and sugar-aware',
    description: 'Onion, garlic, wheat and high-FODMAP fruit come off the build when requested. Reduced-sugar desserts are designed as the menu, not a garnish swap on the night.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Allergy-Safe Catering',
      'Allergy Safe Catering Dubai: allergen briefing, label checks, cross-contact controls, and honest limits in shared kitchens.',
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

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in allergy-safe catering in Dubai. Date: __ Guests: __ Area: __"
export default function AllergySafeCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

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
        title="Allergy Safe Catering Dubai | myCHEF"
        description="Allergy Safe Catering Dubai with a vetted myCHEF team. Briefing, label checks and honest cross-contact limits. You stay a guest at your own table."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/healthy-catering-dubai-hero.webp"
        hideSiteName
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
            Allergy Safe Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 asc-hero-sub">
            Allergy Safe Catering Dubai is a written brief, a named chef, and an honest note about shared kitchens. We cook at your address. Cross-contact risk remains. We say so before you book.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 asc-hero-cta">Request your quote</Link>
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

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">ALLERGEN-AWARE PRIVATE DINING</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The brief first. Then the kitchen.
          </h2>
          <div className="asc-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Send the guest list of allergens, the severity, and anything else that cannot hit the plate. We match a partner chef, write the menu, and check labels before shopping. Partner kitchens are shared. We do not call that an allergen-free kitchen. Residual cross-contact risk remains. Guests who carry emergency medication should still bring it.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              The quote moves with guest count, the menu, and how much of the work happens in the room. We start from a published format and adjust it to your date. What to check: the named chef, an itemised quote, and who buys the ingredients. Dietary notes go into the first menu draft.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Gluten, dairy and nut lines are written on this brief. See <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">gluten-free</Link>, <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">dairy-free</Link>, and <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">nut-free</Link> notes here, or the wider <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">cuisine collection</Link> when the table also wants a cuisine, not only a restriction.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Protocols ═══════════════ */}
      <section className="asc-protocols bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">OUR PROTOCOL</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Four checks before we cook
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

      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">REQUIREMENTS WE BUILD FOR</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">Gluten, dairy, nuts and the menus that follow</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {requirementSections.map((item) => (
              <div key={item.title} className="border border-gray-200 p-8">
                <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Commitments ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHAT SETS US APART</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              What we will and will not claim
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
              <strong className="text-white">Important:</strong> Shared kitchens and home kitchens are not dedicated allergen-free rooms. Carry prescribed medication. Tell every guest the residual risk. We will be honest about what your space can support.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Allergy Safe Catering Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
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
                    {svc.title} <ArrowRight size={14} />
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
            Send the allergen list with the date
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Name the guests, the severity, and the kitchen you have. We put that on the first menu draft and quote the night as an itemised figure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Request your quote</Link>
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
