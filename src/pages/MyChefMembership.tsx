import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Crown,
  Star,
  CalendarCheck,
  Phone,
  ChevronRight,
  ArrowRight,
  Check,
  Gift,
} from 'lucide-react'
import SEO from '../components/SEO'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn about myCHEF Membership (via mychef.ae/membership)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/mychef-membership'
const CAMPAIGN = 'mychef-membership'

const tiers = [
  {
    name: 'Lite',
    price: '99',
    period: '/month',
    description: 'For occasional hosts who want priority access and member perks without a big commitment.',
    icon: Star,
    features: [
      'Priority booking window (7 days ahead of non-members)',
      'AED 50 dining credit every quarter',
      'Member-only seasonal menus and packages',
      'Dedicated WhatsApp concierge line',
      'Waived booking service fee on events under AED 5,000',
    ],
    cta: 'Join Lite',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '199',
    period: '/month',
    description: 'For frequent entertainers and weekly meal prep clients who want maximum value and flexibility.',
    icon: Crown,
    features: [
      'Everything in Lite, plus:',
      'Priority booking window (14 days ahead)',
      'AED 150 dining credit every quarter',
      '10% off all private chef and catering bookings',
      'Free menu consultation each month',
      'Complimentary guest-portion upgrade on meal prep visits',
      'First access to limited chef experiences and events',
    ],
    cta: 'Join Premium',
    highlighted: true,
  },
]

const whyJoin = [
  {
    title: 'Priority Access',
    description: 'Peak dates, weekends, and seasonal events fill fast. Members get first choice before dates open to the public.',
  },
  {
    title: 'Real Credit Back',
    description: 'Quarterly dining credits offset the membership cost — Lite members earn back AED 200/year, Premium members AED 600/year.',
  },
  {
    title: 'Concierge Line',
    description: 'Skip the general enquiry queue. Members message a dedicated WhatsApp line for fast replies and booking changes.',
  },
  {
    title: 'Exclusive Menus',
    description: 'Seasonal tasting menus, chef collaborations, and members-only packages are released to members first.',
  },
]

const faqs = [
  {
    q: 'What is myCHEF Membership?',
    a: 'It is a monthly membership programme that gives you priority booking, dining credits, member pricing, and concierge support for private chef and catering bookings in Dubai. It is separate from the cost of any meal or event.',
  },
  {
    q: 'How does the quarterly credit work?',
    a: 'Lite members receive AED 50 in dining credit every quarter; Premium members receive AED 150. Credits are applied automatically to your next eligible booking and expire if not used within the quarter.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Memberships are billed monthly and can be cancelled before your next billing date. Credits already issued remain valid until their expiry.',
  },
  {
    q: 'Does membership include the cost of food or the chef?',
    a: 'No. Membership covers perks and priority access. The cost of your private chef, ingredients, staff, and event services is quoted and billed separately.',
  },
  {
    q: 'Is membership worth it for one event per year?',
    a: 'Probably not. Membership is designed for households who book private dining or catering multiple times per year, or who want priority access during busy seasons.',
  },
]

const relatedServices = [
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'Recurring private chef visits that keep your fridge stocked with fresh, ready-to-eat meals.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'VIP Club',
    description: 'Exclusive invitations, early access, and premium perks for myCHEF Dubai regulars.',
    image: '/images/luxury-dining-dubai-hero.webp',
    link: '/vip-club',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke private dining for dinner parties, celebrations, and intimate gatherings.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'myCHEF Membership',
      'myCHEF Dubai membership programme with priority booking, dining credits, member pricing, and concierge support. Plans start from AED 99/month.',
      'Membership Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'myCHEF Membership', path: CANONICAL_PATH },
    ]),
  ],
}

export default function MyChefMembership() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.mem-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.mem-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.mem-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.mem-intro-text', {
      scrollTrigger: { trigger: '.mem-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.mem-tier-card', {
      scrollTrigger: { trigger: '.mem-tiers', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.mem-why-item', {
      scrollTrigger: { trigger: '.mem-why', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.mem-faq-item', {
      scrollTrigger: { trigger: '.mem-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.mem-rel-card', {
      scrollTrigger: { trigger: '.mem-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.mem-cta', {
      scrollTrigger: { trigger: '.mem-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="myCHEF Membership Dubai | Priority Booking & Member Perks"
        description="Join myCHEF Dubai membership for priority booking, quarterly dining credits, member-only pricing, and concierge support. Plans start from AED 99/month."
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
          <nav className="mb-6 opacity-0 translate-y-4 mem-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Membership</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 mem-hero-h1">
            myCHEF Membership
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 mem-hero-sub">
            Priority booking, quarterly dining credits, member-only pricing, and a dedicated concierge line — designed for Dubai hosts who love great food without the friction.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 mem-hero-cta">Join MyChef Membership</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 mem-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Join via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            MEMBERSHIP PERKS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            More Value for Frequent Hosts
          </h2>
          <div className="mem-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Tell us how often you host and what you value most, and we will recommend the right membership tier within one business day. myCHEF Membership is not a meal subscription — it is an access pass that unlocks priority dates, real dining credits, member pricing, and a direct concierge line.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Whether you host monthly dinner parties, run a busy household with weekly meal prep, or simply want first access to seasonal menus and chef experiences, membership gives you a smoother, more rewarding way to dine.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Compare with our <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link> and <Link to="/vip-club" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">VIP Club</Link> programmes, or explore <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef services</Link> in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Tiers ═══════════════ */}
      <section className="mem-tiers bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CHOOSE YOUR PLAN
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Membership Tiers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {tiers.map((tier, i) => {
              const Icon = tier.icon
              return (
                <div
                  key={i}
                  className={`mem-tier-card relative p-8 opacity-0 translate-y-10 ${tier.highlighted ? 'bg-black text-white border-2 border-gold' : 'bg-white text-black'}`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={28} className="text-gold" />
                    <h3 className="font-playfair text-h3">{tier.name}</h3>
                  </div>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className={`font-playfair text-4xl font-semibold ${tier.highlighted ? 'text-white' : 'text-black'}`}>From AED {tier.price}</span>
                    <span className="font-inter text-body-sm text-gray-500">{tier.period}</span>
                  </div>
                  <p className="font-inter text-body-sm text-gray-500 mb-2 leading-relaxed">
                    {tier.description}
                  </p>
                  <p className="font-inter text-body-xs text-gray-500 mb-6 leading-relaxed italic">
                    Final quote tailored to your household and booking frequency.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                        <span className="font-inter text-body-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full py-3 font-inter text-sm uppercase tracking-wider transition-colors ${tier.highlighted ? 'bg-gold text-black hover:bg-gold-light' : 'bg-black text-white hover:bg-charcoal'}`}
                  >
                    {tier.cta}
                  </a>
                </div>
              )
            })}
          </div>

          <p className="text-center font-inter text-body-sm text-gray-500 mt-8 max-w-[700px] mx-auto">
            Membership is billed monthly. Credits are issued quarterly and expire at the end of each quarter. Perks apply to new bookings made while membership is active.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 4: Why Join ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHY MEMBERSHIP MAKES SENSE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built for People Who Dine Well Often
            </h2>
          </div>

          <div className="mem-why grid md:grid-cols-2 gap-6">
            {whyJoin.map((item, i) => (
              <div key={i} className="mem-why-item bg-charcoal p-8 opacity-0 translate-y-8">
                <CalendarCheck size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <p className="font-inter text-body text-gray-400 leading-relaxed">
              <strong className="text-white">Not a meal subscription:</strong> Membership covers access, credits, and service perks. The cost of chefs, ingredients, staff, and events is quoted separately. This keeps pricing transparent and flexible.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Membership Questions
          </h2>

          <div className="mem-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="mem-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            You May Also Like
          </h3>

          <div className="mem-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="mem-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center mem-cta opacity-0 translate-y-8">
          <Gift size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Join myCHEF Membership Today
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Get priority access, quarterly credits, and member-only pricing for private chef and catering experiences in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Join MyChef Membership</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Phone size={16} className="mr-2" />
              Join via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
