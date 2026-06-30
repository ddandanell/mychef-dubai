import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Crown,
  Star,
  Gem,
  Phone,
  ChevronRight,
  ArrowRight,
  Check,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to learn more about the VIP Club membership (via mychef.ae/vip-club)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const membershipTiers = [
  {
    icon: Crown,
    title: 'Gold Member',
    subtitle: 'For occasional hosts',
    benefits: [
      'Priority booking window',
      'Complimentary menu consultation',
      '5% member discount',
      'Seasonal tasting invitation',
    ],
  },
  {
    icon: Star,
    title: 'Platinum Member',
    subtitle: 'For frequent entertainers',
    benefits: [
      'All Gold benefits',
      'Dedicated account manager',
      '10% member discount',
      'Complimentary canapé upgrade on events',
      'Exclusive access to new chefs and menus',
      'Priority during peak seasons',
    ],
  },
]

const includedItems = [
  { title: 'Priority booking', description: 'Including last-minute requests and peak-season dates.' },
  { title: 'Exclusive menus & chef access', description: 'Menus and private chefs reserved for members.' },
  { title: 'Member rates & event upgrades', description: 'Discounted pricing and complimentary upgrades.' },
  { title: 'Complimentary tastings', description: 'Seasonal previews of new menus and chef concepts.' },
  { title: 'Concierge event planning', description: 'Dedicated support for every dining occasion.' },
  { title: 'Birthday & anniversary perks', description: 'Special touches to celebrate member milestones.' },
  { title: 'Early access to seasonal offerings', description: 'First booking window for Ramadan, NYE and more.' },
]

const useCases = [
  {
    title: 'Frequent Villa Hosts',
    description: 'From casual family lunches to formal villa dinners, members enjoy a private chef on speed dial and menus tailored to every guest list.',
  },
  {
    title: 'Yacht Owners & Charter Guests',
    description: 'Priority yacht catering with fresh, bespoke menus designed for life on the water across Dubai’s marinas and coastline.',
  },
  {
    title: 'Busy Executives & Families',
    description: 'Save time with a dedicated account manager who understands your preferences and handles every detail.',
  },
  {
    title: 'Wedding & Event Planners',
    description: 'Reliable private chef access, member rates, and concierge support for flawless celebrations.',
  },
  {
    title: 'Corporate Concierge Teams',
    description: 'Annual memberships for businesses that regularly host board dinners, client events, and team experiences.',
  },
]

const galleryImages = [
  { src: '/images/luxury-dining-dubai-hero.webp', alt: 'Exclusive VIP private dining experience in Dubai' },
  { src: '/images/villa-catering-dubai-hero.webp', alt: 'Luxury villa private dining for VIP members in Dubai' },
  { src: '/images/yacht-catering-dubai-hero.webp', alt: 'Yacht catering for myCHEF VIP members in Dubai' },
  { src: '/images/private-chef-dubai-hero.webp', alt: 'Private chef service for VIP Club members in Dubai' },
  { src: '/images/canape-catering-dubai-hero.webp', alt: 'Canapé catering at a VIP event in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Bespoke canapés for myCHEF Dubai VIP members' },
]

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'Jumeirah Islands', slug: 'jumeirah-islands' },
  { name: 'Al Barari', slug: 'al-barari' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim' },
  { name: 'Meydan', slug: 'meydan' },
  { name: 'Dubai Creek Harbour', slug: 'dubai-creek-harbour' },
]

const faqs = [
  {
    q: 'What is the myCHEF VIP Club?',
    a: 'It is an annual membership offering priority private chef bookings, exclusive menus, member rates, and concierge dining support for frequent hosts in Dubai.',
  },
  {
    q: 'What benefits do VIP members receive?',
    a: 'Benefits include priority booking, dedicated account management, member discounts, complimentary tastings, menu upgrades, and early access to seasonal experiences.',
  },
  {
    q: 'Is the VIP Club available for corporate clients?',
    a: 'Yes. We offer corporate concierge memberships for businesses that regularly host clients, board dinners, or team events.',
  },
  {
    q: 'How do I book as a VIP member?',
    a: 'Members book via a dedicated WhatsApp line or account manager for fast, priority responses and personalized planning.',
  },
  {
    q: 'Can I gift a VIP membership?',
    a: 'Yes. Memberships can be purchased as gifts. Contact us for gift packaging and recipient onboarding.',
  },
]

const relatedServices = [
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke in-home dining with a private chef for every occasion across Dubai.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Luxury Dining Experiences',
    description: 'Curated luxury dining experiences designed for discerning hosts and guests.',
    image: '/images/luxury-dining-dubai-hero.webp',
    link: '/luxury-dining-experiences',
  },
  {
    title: 'Yacht Catering Dubai',
    description: 'Premium yacht catering with fresh menus and full service on the water.',
    image: '/images/yacht-catering-dubai-hero.webp',
    link: '/yachts',
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

const serviceSchema = {
  '@type': 'Service',
  name: 'myCHEF VIP Club Dubai',
  serviceType: 'Membership',
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
    { '@type': 'ListItem', position: 2, name: 'VIP Club', item: 'https://mychef.ae/vip-club' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function VIPClub() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.vip-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.vip-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.vip-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.vip-tier-card', {
      scrollTrigger: { trigger: '.vip-tier-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.vip-uc-item', {
      scrollTrigger: { trigger: '.vip-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.vip-inc-item', {
      scrollTrigger: { trigger: '.vip-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.vip-gallery-img', {
      scrollTrigger: { trigger: '.vip-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.vip-faq-item', {
      scrollTrigger: { trigger: '.vip-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.vip-loc-item', {
      scrollTrigger: { trigger: '.vip-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.vip-rel-card', {
      scrollTrigger: { trigger: '.vip-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.vip-cta', {
      scrollTrigger: { trigger: '.vip-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="VIP Club Dubai | Private Chef Membership | myCHEF"
        description="Join the myCHEF VIP Club for priority private chef bookings, exclusive menus, member rates, and concierge dining across Dubai."
        canonicalPath="/vip-club"
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
          <nav className="mb-6 opacity-0 translate-y-4 vip-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">VIP Club</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 vip-hero-h1">
            myCHEF VIP Club
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 vip-hero-sub">
            Priority access, exclusive menus, and member-only perks for Dubai’s most discerning hosts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=vip-club" className="btn-primary opacity-0 translate-y-4 vip-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 vip-hero-cta"
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
            MEMBERSHIP
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Why Join the myCHEF VIP Club?
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            For hosts who entertain often, the myCHEF VIP Club transforms dining from a series of one-off bookings into a curated, year-round culinary relationship. Membership gives you priority access to Dubai’s finest private chefs, exclusive menus, and member-only rates across every service — from <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">villa private dining</Link> to <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">yacht catering Dubai</Link> and <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate dining</Link>.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            As a member, you skip the queue. Last-minute villa dinner? A fully-staffed yacht lunch? A board dinner in DIFC? Your request is handled first by a dedicated account manager who knows your preferences. Explore our <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef service Dubai</Link>, browse <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury dining experiences</Link>, or apply today and discover why Dubai’s most discerning hosts choose myCHEF.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Membership Tiers ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MEMBERSHIP TIERS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Level of Access
            </h2>
          </div>

          <div className="vip-tier-grid grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {membershipTiers.map((tier, i) => {
              const Icon = tier.icon
              return (
                <div
                  key={i}
                  className="vip-tier-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={40} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-1">{tier.title}</h3>
                  <p className="font-inter text-body-sm text-gold mb-5">{tier.subtitle}</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex gap-3 font-inter text-body-sm text-gray-400">
                        <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            Member Benefits
          </h2>

          <div className="vip-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="vip-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Gem size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Use Cases / Audience ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHO IT’S FOR
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built for Dubai’s Most Discerning Hosts
            </h2>
          </div>

          <div className="vip-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="vip-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            A Taste of VIP Life
          </h2>

          <div className="vip-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="vip-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            VIP Club Questions
          </h2>

          <div className="vip-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="vip-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            VIP Service Across Dubai
          </h2>

          <div className="vip-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="vip-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="vip-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="vip-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center vip-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Elevate Every Occasion
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Apply for myCHEF VIP membership today and enjoy priority private chef access, exclusive menus, and member-only perks across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=vip-club" className="btn-primary">Apply for VIP Membership</Link>
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
