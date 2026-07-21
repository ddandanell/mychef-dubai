import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Utensils,
  Camera,
  Users,
  Gift,
  Phone,
  ChevronRight,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss an influencer partnership (via mychef.ae/influencer-partnerships)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/influencer-partnerships'
const CAMPAIGN = 'influencer-partnerships'

const inclusions = [
  {
    icon: Utensils,
    title: 'Bespoke Dining Experiences',
    description: 'Private chef menus tailored to your audience and aesthetic — from cinematic tasting courses to relaxed, family-style setups designed for shareable moments.',
  },
  {
    icon: Camera,
    title: 'Content-Friendly Setups',
    description: 'Beautiful plating, styled tablescapes, and controlled lighting so every shot reflects the luxury myCHEF Dubai is known for.',
  },
  {
    icon: Users,
    title: 'Co-Branded Campaigns',
    description: 'Joint storytelling across myCHEF and your channels, including event previews, behind-the-scenes reels, and aligned messaging.',
  },
  {
    icon: Gift,
    title: 'Affiliate and Gifting Options',
    description: 'Commission structures, gifted experiences for giveaways, and ambassador perks for creators whose audiences match our brand.',
  },
]

const packages = [
  {
    name: 'Experience Collaboration',
    price: 'Complimentary or Co-Funded',
    description: 'A one-off private chef experience for you and your guests in exchange for authentic content.',
    features: [
      'Private chef experience for up to 4 guests',
      'Curated menu aligned with your content style',
      'Styled plating and tablescape',
      'Permission to film and photograph',
      '1 feed post + 3 stories',
    ],
  },
  {
    name: 'Content Partnership',
    price: 'On Request',
    description: 'A multi-post collaboration with dedicated shoot time, interview access, and campaign reporting.',
    features: [
      'Multiple private chef experiences or events',
      'Behind-the-scenes chef access',
      'Co-created content calendar',
      'Usage rights for both parties',
      'Performance summary and insights',
    ],
    highlighted: true,
  },
  {
    name: 'Brand Ambassador',
    price: 'Retainer + Perks',
    description: 'An ongoing partnership that makes myCHEF Dubai part of your regular luxury lifestyle content.',
    features: [
      'Monthly or quarterly experiences',
      'Unique affiliate or discount code',
      'Priority access to new menus and events',
      'Co-hosted giveaways and launches',
      'Direct line to our partnerships team',
    ],
  },
]

const faqs = [
  {
    q: 'Who can apply for an influencer partnership?',
    a: 'Food, lifestyle, luxury, family, and Dubai-focused creators with an engaged audience. We review follower count, content quality, audience fit, and alignment with our brand values rather than numbers alone.',
  },
  {
    q: 'What kind of content works best?',
    a: 'Authentic storytelling performs best: chef interviews, menu reveals, plating process, reaction videos, and real guest experiences. High-production visuals are welcome, but genuine enthusiasm matters most.',
  },
  {
    q: 'Are experiences complimentary?',
    a: 'Experience Collaborations may be complimentary or co-funded depending on audience reach and content scope. Content Partnerships and Brand Ambassador arrangements are negotiated individually.',
  },
  {
    q: 'Do you offer affiliate codes?',
    a: 'Yes. Brand Ambassadors and selected Content Partners can receive a unique code or referral link. Commission and tracking terms are agreed before the partnership begins.',
  },
  {
    q: 'How do I propose a collaboration?',
    a: 'Send us a message with your media kit, audience insights, and a brief idea. We will review and respond within a few business days with options that fit both sides.',
  },
]

const relatedServices = [
  {
    title: 'Partner With Us',
    description: 'Explore villa, yacht, event planner, and concierge partnership opportunities with myCHEF Dubai.',
    image: '/images/luxury-dining-dubai-hero.webp',
    link: '/partner-with-us',
  },
  {
    title: 'Press & Media Kit',
    description: 'Downloadable assets, brand story, and media contact information for coverage and features.',
    image: '/images/luxury-dining-dubai-hero.webp',
    link: '/press',
  },
  {
    title: 'Private Chef Dubai',
    description: 'The flagship myCHEF Dubai private chef experience for dinners, events, and celebrations.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Influencer Partnerships',
      'Influencer and creator partnership programme with myCHEF Dubai: bespoke private chef experiences, content-friendly setups, co-branded campaigns, and affiliate opportunities.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Influencer Partnerships', path: CANONICAL_PATH },
    ]),
  ],
}

export default function InfluencerPartnerships() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ip-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ip-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ip-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ip-intro-text', {
      scrollTrigger: { trigger: '.ip-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.ip-inclusion-card', {
      scrollTrigger: { trigger: '.ip-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ip-package-card', {
      scrollTrigger: { trigger: '.ip-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.ip-faq-item', {
      scrollTrigger: { trigger: '.ip-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ip-rel-card', {
      scrollTrigger: { trigger: '.ip-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ip-cta', {
      scrollTrigger: { trigger: '.ip-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Influencer Partnerships Dubai"
        description="Partner with myCHEF Dubai for private chef experiences, content collaborations, and exclusive dining events across the UAE."
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
          <nav className="mb-6 opacity-0 translate-y-4 ip-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Influencer Partnerships</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ip-hero-h1">
            Influencer Partnerships
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ip-hero-sub">
            Tell us about your audience and content goals, and our partnerships team will reply within 15 minutes during business hours with a tailored collaboration proposal — from a single private chef experience to an ongoing ambassador arrangement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 ip-hero-cta">Discuss a Partnership</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ip-hero-cta"
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
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            COLLABORATE WITH US
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Content Worth Savouring
          </h2>
          <div className="ip-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              MyCHEF Dubai partners with food, lifestyle, and luxury creators who want exceptional food and shareable moments for their audience. Tell us about your content goals and follower profile, and we will match you with a vetted private chef and a collaboration plan that fits your brand.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Our partnerships team handles menu curation, chef matching, styling, shoot timing, and usage rights. You bring your voice and audience; we bring the culinary production value that makes every post stand out.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Learn more about <Link to="/partner-with-us" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">partnership options</Link>, explore our <Link to="/press" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">press kit</Link>, or book a <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef experience</Link> to see what we do first-hand.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="ip-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT IS INCLUDED
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Built for Creators
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="ip-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="ip-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              PARTNERSHIP OPTIONS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Collaboration
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`ip-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
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
          <p className="font-inter text-body-sm text-gray-400 text-center mt-8 max-w-[600px] mx-auto">
            Final collaboration terms are tailored to your audience size, content scope, and event requirements.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Partnership Questions
          </h2>

          <div className="ip-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="ip-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="ip-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ip-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center ip-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let Us Create Together
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your media kit and collaboration idea. We will review your profile and propose a partnership that works for your audience and ours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Discuss a Partnership</Link>
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
