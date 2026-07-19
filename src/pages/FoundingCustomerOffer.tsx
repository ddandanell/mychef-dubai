import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Crown,
  Lock,
  ConciergeBell,
  Gift,
  Phone,
  ChevronRight,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/SEO'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn more about the founding customer offer (via mychef.ae/founding-customer-offer)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/founding-customer-offer'
const CAMPAIGN = 'founding-customer'

const inclusions = [
  {
    icon: Crown,
    title: 'Priority Booking',
    description: 'Founding members jump the queue for peak dates, holiday weekends, and last-minute chef requests. Your occasion gets first pick of our available private chefs.',
  },
  {
    icon: Lock,
    title: 'Locked-In Pricing',
    description: 'Your founding rate is fixed for 12 months, even if our standard pricing changes. Predictable costs make it easier to plan regular dinners and celebrations.',
  },
  {
    icon: ConciergeBell,
    title: 'Dedicated Concierge',
    description: 'A single point of contact who knows your preferences, dietary needs, and favourite cuisines. Menu planning, vendor coordination, and changes handled directly.',
  },
  {
    icon: Gift,
    title: 'Complimentary Upgrades',
    description: 'Enjoy periodic upgrades such as extra courses, welcome canapés, premium table styling, or additional service staff — included at no extra charge.',
  },
]

const packages = [
  {
    name: 'Silver Founding Member',
    price: 'AED 2,500/year',
    description: 'Perfect for households who want priority access and locked-in rates for intimate dining.',
    features: [
      '12 months locked-in pricing',
      'Priority booking window',
      'Dedicated concierge line',
      '1 complimentary upgrade per quarter',
      'Access to member-only menus',
    ],
  },
  {
    name: 'Gold Founding Member',
    price: 'AED 5,500/year',
    description: 'Our most popular founding tier for families and hosts who dine privately several times a year.',
    features: [
      'Everything in Silver, plus',
      'Complimentary welcome canapés on every booking',
      '2 complimentary upgrades per quarter',
      'Preferred chef shortlist for each event',
      'Guest-list flexibility up to 24 hours before',
    ],
    highlighted: true,
  },
  {
    name: 'Platinum Founding Member',
    price: 'AED 12,000/year',
    description: 'The full concierge experience for villas, yachts, and frequent entertainers who expect white-glove service.',
    features: [
      'Everything in Gold, plus',
      'Unlimited complimentary upgrades',
      'VIP tablescaping and florals included',
      'Dedicated event manager on bookings',
      'Quarterly tasting-menu preview dinners',
    ],
  },
]

const faqs = [
  {
    q: 'What is a founding customer?',
    a: 'Founding customers are the first members to join myCHEF Dubai as we expand premium private chef and catering services across the city. In return for trusting us early, you receive exclusive pricing, priority booking, and perks for 12 months.',
  },
  {
    q: 'How long is pricing locked in?',
    a: 'Your founding rate is guaranteed for 12 months from the date you join. It applies to all eligible private chef and dining experiences booked during that period.',
  },
  {
    q: 'Can I share benefits with family or guests?',
    a: 'Yes. Founding membership benefits apply to bookings made under your account, including dinners hosted for family, friends, or colleagues. Some upgrades are tied to the event rather than the individual.',
  },
  {
    q: 'What happens after 12 months?',
    a: 'After your founding year, you can renew as a standard myCHEF member at the then-current rate, or continue booking as a guest. Founding members often receive a loyalty rate at renewal.',
  },
  {
    q: 'How do I sign up?',
    a: 'Tap the WhatsApp button or fill out our inquiry form. We will confirm your membership tier, answer any questions, and activate your founding customer benefits before your first booking.',
  },
]

const relatedServices = [
  {
    title: 'MyChef Membership',
    description: 'Ongoing membership benefits, credits, and priority access for regular private dining.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/mychef-membership',
  },
  {
    title: 'VIP Club',
    description: 'Exclusive invitations, preview menus, and premium perks for our most loyal guests.',
    image: '/images/luxury-dining-dubai-hero.webp',
    link: '/vip-club',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Hire a private chef for dinner parties, celebrations, and everyday luxury dining at home.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Founding Customer Offer',
      'Founding customer membership for myCHEF Dubai: priority booking, locked-in pricing, dedicated concierge, and complimentary upgrades for early private chef and catering members.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Founding Customer Offer', path: CANONICAL_PATH },
    ]),
  ],
}

export default function FoundingCustomerOffer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.fc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.fc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.fc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.fc-intro-text', {
      scrollTrigger: { trigger: '.fc-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.fc-inclusion-card', {
      scrollTrigger: { trigger: '.fc-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fc-package-card', {
      scrollTrigger: { trigger: '.fc-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.fc-faq-item', {
      scrollTrigger: { trigger: '.fc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fc-rel-card', {
      scrollTrigger: { trigger: '.fc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fc-cta', {
      scrollTrigger: { trigger: '.fc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Founding Customer Offer Dubai | Early Access Private Chef | myCHEF"
        description="Join myCHEF Dubai as a founding customer. Exclusive pricing, priority booking, and premium perks for early members who trust us first."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/home-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/home-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 fc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Founding Customer Offer</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 fc-hero-h1">
            Founding Customer Offer
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 fc-hero-sub">
            Be among the first to experience myCHEF Dubai. Founding customers lock in exclusive pricing, priority chef matching, and premium perks for 12 months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 fc-hero-cta">Join as a Founding Customer</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 fc-hero-cta"
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
            LIMITED FOUNDING MEMBERSHIP
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Premium Perks for Early Believers
          </h2>
          <div className="fc-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              myCHEF Dubai is building a new standard for private chef and luxury catering experiences in the city. As a founding customer, you are not just booking a service — you are helping shape a concierge-level offering designed around how Dubai actually dines.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              In return for joining early, we lock in your pricing, reserve priority access to our best chefs, and assign a dedicated concierge who learns your preferences over time. Whether it is a weekly family dinner or a milestone celebration, your experience gets better with every booking.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Explore more ways to dine with us: <Link to="/mychef-membership" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">membership</Link>, <Link to="/vip-club" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">VIP Club</Link>, or <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="fc-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT IS INCLUDED
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Built Around You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="fc-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="fc-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FOUNDING MEMBERSHIP TIERS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Tier
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`fc-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
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
            Founding Customer Questions
          </h2>

          <div className="fc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="fc-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Related Services
          </h3>

          <div className="fc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="fc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center fc-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Lock In Your Founding Rate
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Founding memberships are limited. Secure your priority booking, locked-in pricing, and dedicated concierge before the window closes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Join as a Founding Customer</Link>
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
