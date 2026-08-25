import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Coins,
  TrendingUp,
  Users,
  Sparkles,
  Phone,
  ArrowRight,
  Check,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn about the loyalty programme (via mychef.ae/loyalty-programme)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/loyalty-programme'

const inclusions = [
  {
    icon: Coins,
    title: 'Points on Every Dirham Spent',
    description: 'Earn points on every private chef and catering booking. The more you invest in memorable dining, the faster your rewards accumulate towards credits and upgrades.',
  },
  {
    icon: TrendingUp,
    title: 'Tier Upgrades',
    description: 'Move from Silver to Gold and Platinum as your lifetime spend grows. Each tier unlocks a higher points multiplier and a richer set of member benefits.',
  },
  {
    icon: Users,
    title: 'Referral Bonuses',
    description: 'Share myCHEF Dubai with friends and colleagues. When they complete their first booking, you both receive bonus points added to your loyalty balance.',
  },
  {
    icon: Sparkles,
    title: 'Member-Only Experiences',
    description: 'Access exclusive tastings, chef meet-and-greets, seasonal previews, and priority invitations to private dining events reserved for loyalty members.',
  },
]

const packages = [
  {
    name: 'Silver',
    price: '1x Points',
    description: 'Entry tier for every guest who completes a first booking.',
    features: [
      'Earn 1 point per AED spent',
      'Birthday month bonus points',
      'Early access to seasonal menus',
      'Member-only newsletter',
      'Redeem points for dining credits',
    ],
  },
  {
    name: 'Gold',
    price: '1.25x Points',
    description: 'Reached as your lifetime booking value grows.',
    features: [
      'Earn 1.25 points per AED spent',
      'Complimentary chef upgrade on select bookings',
      'Priority booking windows',
      'Double referral bonuses',
      'Exclusive member events',
    ],
    highlighted: true,
  },
  {
    name: 'Platinum',
    price: '1.5x Points',
    description: 'Reached after consistent bookings across the year.',
    features: [
      'Earn 1.5 points per AED spent',
      'Dedicated concierge support',
      'Complimentary canapé or dessert upgrade',
      'First access to new chefs and venues',
      'Invitation-only tastings and previews',
    ],
  },
]

const faqs = [
  {
    q: 'How do I earn points?',
    a: 'You earn points every time you complete a private chef or catering booking with myCHEF Dubai. Points are calculated on the total booking value before any discounts or credits are applied.',
  },
  {
    q: 'What can points be redeemed for?',
    a: 'Points can be converted into dining credits towards future bookings, used for complimentary upgrades, or exchanged for access to member-only experiences and seasonal events.',
  },
  {
    q: 'Do points expire?',
    a: 'Points remain active as long as you complete at least one qualifying booking every 24 months. Inactive accounts may forfeit older points, but we notify members before any expiry.',
  },
  {
    q: 'How do tiers work?',
    a: 'Tiers are based on your lifetime spend with myCHEF Dubai. Silver starts from your first booking, while Gold and Platinum unlock as your lifetime spend crosses higher thresholds. Once reached, tiers are reviewed annually.',
  },
  {
    q: 'Can I transfer points?',
    a: 'Points are tied to the member account and cannot be transferred or sold. You may, however, redeem credits from your points towards a booking made for family, friends, or colleagues.',
  },
]

const relatedServices = [
  {
    title: 'MyChef Membership',
    description: 'A broader membership with standing reservations, fixed pricing, and a dedicated account manager.',
    image: '/images/vip-club-hero.webp',
    link: '/mychef-membership',
  },
  {
    title: 'Referral Programme',
    description: 'Give AED 100, get AED 100 when you introduce someone to myCHEF Dubai.',
    image: '/images/gift-cards-hero.webp',
    link: '/referral-programme',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Book a private chef for your home, villa, or yacht and start earning loyalty points today.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Loyalty Programme',
      'Earn rewards on every private chef and catering booking with myCHEF Dubai. Silver, Gold and Platinum tiers offer points multipliers, referral bonuses, and member-only dining experiences.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Loyalty Programme', path: CANONICAL_PATH },
    ]),
  ],
}

export default function LoyaltyProgramme() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.lp-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.lp-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.lp-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.lp-intro-text', {
      scrollTrigger: { trigger: '.lp-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.lp-inclusion-card', {
      scrollTrigger: { trigger: '.lp-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lp-package-card', {
      scrollTrigger: { trigger: '.lp-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.lp-faq-item', {
      scrollTrigger: { trigger: '.lp-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.lp-rel-card', {
      scrollTrigger: { trigger: '.lp-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.lp-cta', {
      scrollTrigger: { trigger: '.lp-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Loyalty Programme Dubai | Private Dining"
        description="Earn rewards every time you book a private chef or catering with myCHEF Dubai. Our loyalty programme turns repeat dining into credits and experiences."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/luxury-dining-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/luxury-dining-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 lp-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Loyalty Programme</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 lp-hero-h1">
            Loyalty Programme
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 lp-hero-sub">
            Every booking earns you closer to credits, chef upgrades, and exclusive experiences. The more you dine with myCHEF Dubai, the more we give back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 lp-hero-cta">Join the Loyalty Programme</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 lp-hero-cta"
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
          <SectionLabel align="center">EAT WELL, EARN MORE</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Rewards That Taste Better
          </h2>
          <div className="lp-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Join the myCHEF Dubai loyalty programme and turn every private chef dinner, catering event, and weekly meal-prep plan into credits, complimentary upgrades, and member-only experiences. Tell us how you like to dine and our concierge team will enrol you and bring you a vetted chef within 24 hours.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              As you move through Silver, Gold and Platinum tiers, you unlock higher points multipliers, priority booking windows, and invitations to exclusive tastings and previews. There are no hidden fees or complicated rules: just dine well, earn more, and enjoy the perks.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Combine loyalty rewards with our <Link to="/referral-programme" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">referral programme</Link> for even faster earnings, or explore <Link to="/mychef-membership" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">MyChef Membership</Link> for standing reservations and a dedicated account manager.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="lp-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT IS INCLUDED</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              How You Earn and Grow
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="lp-inclusion-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Packages ═══════════════ */}
      <section className="lp-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">LOYALTY TIERS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Climb the Tiers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`lp-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-playfair text-h3 mb-2">{pkg.name}</h3>
                <p className="font-playfair text-2xl font-semibold text-gold mb-2">{pkg.price}</p>
                <p className="font-inter text-body-sm text-gray-400 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-body-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-3 font-inter text-sm uppercase tracking-wider bg-gold text-black hover:bg-gold-light transition-colors"
                >
                  Enquire
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Loyalty Programme Questions
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 6: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Related Services
          </h3>

          <div className="lp-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="lp-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center lp-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Start Earning Today
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Book your next private chef or catering experience and join the myCHEF Dubai loyalty programme. The rewards begin with your first meal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Join the Loyalty Programme</Link>
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
