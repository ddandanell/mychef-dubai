// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /part-time-private-chef-dubai
//     primary:     "part time private chef dubai"
//     subkeywords: "part time private chef dubai price" · "part time private chef dubai monthly cost" · "hire part time private chef dubai" · "part time private chef packages dubai" · "part time cook in dubai" · "full time private chef" · "the private chef" · "personal chef near me" · "family chef dubai full time"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Calendar,
  Users,
  ChefHat,
  Wallet,
  Phone,
  ArrowRight,
  Check,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss a part-time private chef (via mychef.ae/part-time-private-chef-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/part-time-private-chef-dubai'

const benefits = [
  {
    icon: Calendar,
    title: 'Two or three days a week',
    description: 'A regular chef between weekly Food Prep and a most-days plan. Fresh cooking without staffing the house every evening, and without a live-in hire.',
  },
  {
    icon: Users,
    title: 'The same chef, most weeks',
    description: 'One person who already knows breakfast, the children, and Friday. Backup is briefed from the Food Profile.',
  },
  {
    icon: ChefHat,
    title: 'Cook, pack, or stay for dinner',
    description: 'Fresh Meal is three hours, AED 750. Food Prep is four hours, AED 900. Autopilot is five hours, AED 1,050. The job decides the hours.',
  },
  {
    icon: Wallet,
    title: 'The same price list as every household plan',
    description: 'Two dinners a week is AED 6,000 a month. Four days on Kitchen on Autopilot is 16 visits at AED 16,800. Groceries at actual receipts. VAT at 5%.',
  },
]

const arrangements = [
  {
    title: 'Dinner only',
    description: 'Fresh Meal visits, two or three evenings a week. The chef cooks, serves the way this house likes, and leaves the kitchen handled.',
  },
  {
    title: 'Prep plus one dinner',
    description: 'Food Prep mid-week, then a Fresh Meal when the table is together. Same chef, same Food Profile.',
  },
  {
    title: 'Lunch and dinner on set days',
    description: 'Kitchen on Autopilot on the days you book: planning, shopping, cooking, cleanup. Groceries at receipts.',
  },
  {
    title: 'The week, plus one night of guests',
    description: 'Standing days stay on this plan. A dinner party is catering, quoted per person, not folded into the month.',
  },
]

const faqs = [
  {
    q: 'What is a part-time private chef?',
    a: 'A part-time private chef visits your home on a fixed schedule, typically two or three days a week, to cook, pack or stay for dinner. They do not live in. You do not employ them. The booking is with myCHEF.',
  },
  {
    q: 'How much does a part-time private chef cost in Dubai?',
    a: 'Part-time is the same price list as every other household plan, counted per visit: from AED 3,000 a month for one Fresh Meal a week, AED 6,000 for two dinners a week, AED 16,800 for four days of Kitchen on Autopilot. There is no separate part-time tariff. Levels are what the chef earns, not what you pay. VAT at 5% is shown on its own line.',
  },
  {
    q: 'Is the chef employed by myCHEF or by me?',
    a: 'A licensed supplier employs your chef on a proper visa we have asked to see. myCHEF matches the person to the house, manages the arrangement, scores the work and pays the quality extra to the cook. You never employ or contract the chef yourself. The booking is with us.',
  },
  {
    q: 'Can I try a part-time chef before committing?',
    a: 'Yes. We recommend starting with one or two trial visits or a short weekly meal prep arrangement to confirm the chef is the right fit for your household.',
  },
  {
    q: 'What if the chef is unavailable one week?',
    a: 'MyCHEF provides backup chef coordination for part-time arrangements when your regular chef is sick or on leave, so your household is not left without support.',
  },
]

const relatedServices = [
  {
    title: 'Weekly Meal Prep Dubai',
    description: 'Four hours, once or twice a week, when you do not need a chef at dinner.',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
    link: '/weekly-meal-prep-dubai',
  },
  {
    title: 'Wellness Meal Prep',
    description: 'The Food Prep job with a health brief, not a most-days cook.',
    image: '/images/healthy-catering-dubai-hero.webp',
    link: '/wellness-meal-prep-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'The standing household chef. This page is the two-or-three-days end of it.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Part-Time Private Chef',
      'Part-time private chef service in Dubai: 2–3 days per week cooking, meal planning, and kitchen management for families who want regular support without full-time placement.',
      'Catering Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Part-Time Private Chef Dubai', path: CANONICAL_PATH },
    ]),
  ],
}

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a part-time private chef in Dubai. Date: __ Guests: __ Area: __"
export default function PartTimePrivateChef() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.pt-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.pt-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.pt-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.pt-intro-text', {
      scrollTrigger: { trigger: '.pt-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.pt-benefit-card', {
      scrollTrigger: { trigger: '.pt-benefits', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pt-arrangement-item', {
      scrollTrigger: { trigger: '.pt-arrangements', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pt-faq-item', {
      scrollTrigger: { trigger: '.pt-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pt-rel-card', {
      scrollTrigger: { trigger: '.pt-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pt-cta', {
      scrollTrigger: { trigger: '.pt-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Part Time Private Chef Dubai | 2–3 Days a Week | myCHEF"
        description="Hire a part time private chef Dubai for two or three days a week. Same price list as every household plan. Groceries at receipts. VAT 5%."
        canonicalPath={CANONICAL_PATH}
        ogImage="/service-private-chef.webp"
        hideSiteName
        schema={schema}
      />

      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-private-chef.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 pt-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Part-Time Private Chef Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 pt-hero-h1">
            Part Time Private Chef Dubai: two or three days a week
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 pt-hero-sub">
            A part time private chef Dubai plan is the same household chef, on fewer days. Fresh Meal AED 750, Food Prep AED 900. Groceries at receipts. VAT 5%.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 pt-hero-cta">Get My Part-Time Chef Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 pt-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">FEWER DAYS, SAME SYSTEM</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Part time private chef Dubai is days of cooking, not a salary
          </h2>
          <div className="pt-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Hire a part time private chef Dubai when two or three days cover the week. A part time cook in Dubai on this page is that standing chef, not a one-night team. Part time private chef Dubai monthly cost is the visit rate times the days. Groceries at receipts. VAT at 5%.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Two or three days is often enough that the chef stops asking how you like things, and rare enough that the house is not staffed every evening. The same person comes back. The Food Profile carries what they learn. Someone briefed from it covers the weeks they are off.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A personal chef near me still needs a match, not a pin. Family chef Dubai full time is the most-days page. The private chef, here, is the person who cooks on your days. One dinner is catering.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Compare with <Link to="/weekly-meal-prep-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">weekly meal prep</Link>, <Link to="/full-time-private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">full-time private chef</Link>, or the parent <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef Dubai</Link> page. Build the month on <Link to="/private-chef-dubai/pricing" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef prices</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-benefits bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHY TWO OR THREE DAYS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Enough days to learn the house
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="pt-benefit-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pt-arrangements bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">HOW THE WEEK IS BUILT</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Dinner, prep, or both
            </h2>
          </div>

          <div className="pt-arrangement grid md:grid-cols-2 gap-6">
            {arrangements.map((item, i) => (
              <div key={i} className="pt-arrangement-item bg-charcoal p-8 opacity-0 translate-y-8">
                <Check size={24} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{item.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Questions before a two-or-three-day plan
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            Nearby pages
          </h3>

          <div className="pt-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="pt-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center pt-cta opacity-0 translate-y-8">
          <ChefHat size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Build the two-or-three-day plan
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Days, meals, and the area. We match the chef, you approve the profile, and the month is in writing before anyone starts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Get My Part-Time Chef Quote</Link>
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
