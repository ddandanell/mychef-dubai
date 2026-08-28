// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /full-time-private-chef-dubai
//     primary:     "full time private chef dubai"
//     subkeywords: "household chef dubai" · "hire a full time chef dubai" · "full time private chef cost dubai" · "monthly private chef dubai" · "private chef for family" · "part time chef dubai" · "top personal chef providers in dubai" · "best time to hire caterers"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  ClipboardList,
  ChefHat,
  Users,
  ShieldCheck,
  Phone,
  ArrowRight,
  Check,
  Home,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to hire a full-time private chef (via mychef.ae/full-time-private-chef-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/full-time-private-chef-dubai'

const inclusions = [
  {
    icon: ClipboardList,
    title: 'Household Menu Planning',
    description: 'Weekly menus designed around your family\'s preferences, nutritional goals, and social calendar. Rotated seasonally so meals never feel repetitive.',
  },
  {
    icon: ChefHat,
    title: 'Daily Meal Preparation',
    description: 'A vetted chef in your kitchen preparing breakfast, lunch, dinner, and snacks to your household\'s schedule — fresh, organised, and ready to serve.',
  },
  {
    icon: Users,
    title: 'Event & Entertainment Support',
    description: 'Your residential chef can extend service for family dinners, brunches, and small gatherings without the need to bring in outside catering.',
  },
  {
    icon: ShieldCheck,
    title: 'Dietary & Allergy Management',
    description: 'Strict allergen protocols, halal sourcing, and tailored nutrition plans for children, athletes, clinical needs, or weight-management goals.',
  },
]

/**
 * "Full-time" here is the most-days end of the same household ladder, priced per visit like
 * every other plan. It used to sell live-in placement from AED 4,500 with a 30-day trial and
 * "UAE employment norms for domestic staff" — a different company, and one that contradicted
 * every other page: we do not place staff onto a household's payroll.
 */
const packages = [
  {
    name: 'Four days a week',
    price: 'AED 16,800/mo',
    description: 'Kitchen on Autopilot, 16 visits a month. The most common shape of a full household plan.',
    features: [
      '5 hours a visit, four days a week',
      'Menus, shopping, cooking and cleanup',
      'Food Profile kept current',
      'Groceries at the actual receipts, no markup',
      'Backup chef briefed from your profile',
    ],
  },
  {
    name: 'Five days a week',
    price: 'AED 26,400/mo',
    description: 'A Full-Day chef, 20 visits a month, on the Dedicated Household Rate.',
    features: [
      '9 hours a day, five days a week',
      'Breakfast, lunch and dinner in the house rhythm',
      'Grocery management included',
      'Household food administration',
      'Chef capacity substantially reserved for you',
    ],
    highlighted: true,
  },
  {
    name: 'Six days a week',
    price: 'AED 31,680/mo',
    description: 'A Full-Day chef, 24 visits a month — as close to resident as this service goes.',
    features: [
      'Six days of full-day cover',
      'All meals, snacks and household events',
      'Full kitchen organisation',
      'One contact for changes and absence',
      'Same rate per visit as five days',
    ],
  },
]

const faqs = [
  {
    q: 'How do I hire a full-time private chef through myCHEF Dubai?',
    a: 'Start with a brief consultation: household size, cuisine preferences, schedule, dietary needs and how many days a week the kitchen should be staffed. We match a chef from the network, you approve the profile before anything starts, and the plan is priced per visit — there is no placement fee and no salary to negotiate.',
  },
  {
    q: 'What is the notice period for a full-time private chef?',
    a: 'Plans begin at 30 days, and the first month is where the match is tested rather than assumed — we call you separately from the chef after about two days, and again through the month. A wrong match is changed, not argued about. Nothing auto-renews into a longer term than you agreed, and either side can end the plan with a month’s notice.',
  },
  {
    q: 'Can the chef live in?',
    a: 'No — we do not place live-in staff, and we are clearer about that than the rest of the market. A live-in chef is an employment relationship between your household and a person, with the visa, accommodation, rest days and end-of-service that come with it. Our model is the opposite: a licensed supplier employs the chef on a proper visa, and the house buys days of cooking. Six days a week of full-day cover is as close to resident as this gets, without you becoming an employer.',
  },
  {
    q: 'What if the chef is sick or leaves?',
    a: 'myCHEF Dubai maintains a roster of vetted replacement chefs. If your chef is unavailable, we arrange temporary coverage so your household routine continues without disruption.',
  },
  {
    q: 'What cuisines can they cook?',
    a: 'Chefs in our network cover Arabic, Mediterranean, Italian, Indian, Asian, sushi, healthy, halal, vegan, and child-friendly cuisines. We match chefs to your specific taste profile during selection.',
  },
]

const relatedServices = [
  {
    title: 'Part-Time Private Chef Dubai',
    description: 'Flexible chef support a few days per week for busy households.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/part-time-private-chef-dubai',
  },
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'Planned, prepared, and delivered meals designed around your week.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'On-demand private chefs for dinners, events, and special occasions.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Full-Time Private Chef Dubai',
      'A full-time private chef in Dubai for daily household meal preparation, menu planning and dietary management — priced per visit, four to six days a week, with the chef employed by a licensed supplier rather than by your household.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Full-Time Private Chef Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a full-time private chef in Dubai. Date: __ Guests: __ Area: __"
export default function FullTimePrivateChef() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.fp-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.fp-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.fp-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.fp-intro-text', {
      scrollTrigger: { trigger: '.fp-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.fp-inclusion-card', {
      scrollTrigger: { trigger: '.fp-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fp-package-card', {
      scrollTrigger: { trigger: '.fp-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.fp-faq-item', {
      scrollTrigger: { trigger: '.fp-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fp-rel-card', {
      scrollTrigger: { trigger: '.fp-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fp-cta', {
      scrollTrigger: { trigger: '.fp-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Full-Time Private Chef Dubai | Live-In & Live-Out | myCHEF"
        description="Hire a full time private chef Dubai. myCHEF Dubai sources vetted residential chefs for villas, families, and HNWI households. Get a quote in 15 minutes."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/private-chef-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/private-chef-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 fp-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Full-Time Private Chef Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 fp-hero-h1">
            Full-Time Private Chef Dubai: Live-In & Live-Out Chefs
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 fp-hero-sub">
            A dedicated chef for your household, matched to your family's tastes, schedule, and dietary needs. Vetted, experienced, and ready to move in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 fp-hero-cta">Get My Full-Time Chef Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 fp-hero-cta"
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
          <SectionLabel align="center">RESIDENTIAL CHEF PLACEMENT</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Chef Who Becomes Part of Your Home
          </h2>
          <div className="fp-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Hire a full-time private chef in Dubai and bring consistent, restaurant-quality dining into your home. Tell us your household size, cuisine preferences and schedule, and we come back with the match, the start date and the monthly figure in writing before anything begins.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Full time private chef cost Dubai depends on the household: how many people eat at home, how many meals a week you want covered, and how often the chef comes. For best time to hire caterers, two to three weeks is comfortable, and December, Ramadan and New Year fill earlier than that. If you are weighing up top personal chef providers in Dubai, the things worth checking are the named chef, the itemised quote and who buys the ingredients.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Every candidate is vetted for culinary skill, professionalism, food-safety awareness, and experience in private households. We handle the shortlisting, interviews, and placement terms so you can focus on finding the right match for your family.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Explore <Link to="/part-time-private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">part-time private chef</Link>, <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link>, <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">on-demand private chef</Link> options, or see <Link to="/private-chef-dubai/pricing" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef prices in Dubai</Link> for more flexibility.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="fp-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT IS INCLUDED</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Complete Household Culinary Support
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="fp-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="fp-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">RESIDENTIAL CHEF PACKAGES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Arrangement
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`fp-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black font-inter text-xs uppercase tracking-wider px-4 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className="font-playfair text-h3 mb-2">{pkg.name}</h3>
                <p className="font-playfair text-2xl font-semibold text-gold mb-1">{pkg.price}</p>
                <p className="font-inter text-xs text-gray-500 mb-4 leading-relaxed">
                  Final quote tailored to your household after consultation.
                </p>
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
            Full Time Private Chef Dubai: the questions we get before a booking
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

          <div className="fp-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="fp-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center fp-cta opacity-0 translate-y-8">
          <Home size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Find Your Household Chef
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your household, schedule, and cuisine preferences. We will bring you a vetted full-time private chef who fits your home.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Get My Full-Time Chef Quote</Link>
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
