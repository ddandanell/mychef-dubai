// KEYWORD LOCK — this page owns: "corporate catering dubai" (the broad hub).
// One-off company events belong to /corporate-event-catering-dubai; office lunches,
// conferences, staff meals, meal prep and retainers each have their own page.
// Do not target another corporate page's primary here.
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import LocationStrip from '@/components/LocationStrip'
import TrustSignalStrip from '@/components/TrustSignalStrip'
import CorporateTrustStrip from '@/components/CorporateTrustStrip'
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from '@/utils/schema'
import { Check, Quote, Star, ArrowRight, Clock, Shield, Award, Users, Leaf, FileText, Building, PartyPopper, } from 'lucide-react'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { deferNonCritical } from '../lib/deferNonCritical'
import { SectionLabel } from '../components/system'
import {
  boundaries,
  formatLadder,
  pricingIntro,
  pricingNotes,
  quoting,
  routing,
} from '@/content/corporatePage'


const WHATSAPP_NUMBER = '971551744849'

/* ───── Data ───── */

const corporateServices = [
  {
    icon: Building,
    title: 'Boardroom Lunch',
    description:
      'Elegant working lunches for board meetings and executive sessions. Plated or buffet service.',
    link: '/business-lunch-catering-dubai',
  },
  {
    icon: Users,
    title: 'Team Lunch Catering',
    description:
      'Group lunch catering for teams of 10\u2013200. Fresh, delicious, and professionally served.',
    link: '/office-catering-dubai',
  },
  {
    icon: Award,
    title: 'Client Entertainment',
    description:
      'Impress clients with sophisticated private dining. Bespoke menus in your office or a private venue.',
    link: '/luxury-dining-experiences',
  },
  {
    icon: PartyPopper,
    title: 'Corporate Events',
    description:
      'Product launches, company celebrations, networking events. fully-coordinated catering and coordination.',
    link: '/corporate-event-catering-dubai',
  },
  {
    icon: Clock,
    title: 'Daily Office Catering',
    description:
      'Regular catering for your Dubai office. Breakfast, lunch, or both \u2014 scheduled and reliable.',
    link: '/office-catering-dubai',
  },
  {
    icon: Star,
    title: 'Executive Private Chef',
    description:
      'A dedicated chef for your executive dining room. Daily meal preparation for leadership teams.',
    link: '/private-chef-dubai',
  },
]

const corporateSolutions = [
  { title: 'Office Catering', link: '/office-catering-dubai' },
  { title: 'Business Lunch Catering', link: '/business-lunch-catering-dubai' },
  { title: 'Corporate Event Catering', link: '/corporate-event-catering-dubai' },
  { title: 'Conference Catering', link: '/conference-catering-dubai' },
  { title: 'Staff Meals Catering', link: '/staff-meals-catering-dubai' },
  { title: 'Film Crew Catering', link: '/film-crew-catering-dubai' },
  { title: 'Production Catering', link: '/production-catering-dubai' },
  { title: 'Corporate Meal Prep', link: '/corporate-meal-prep-dubai' },
  { title: 'Product Launch Catering', link: '/product-launch-catering-dubai' },
  { title: 'Gala Dinner Catering', link: '/gala-dinner-catering-dubai' },
]

const trustFeatures = [
  {
    icon: Clock,
    title: 'Reliable & Punctual',
    description:
      'We understand business schedules. We arrive on time, every time, and execute without disruption.',
  },
  {
    icon: Shield,
    title: 'Discreet & Professional',
    description:
      'Confidentiality assured. our service team operates with the discretion your business demands.',
  },
  {
    icon: Award,
    title: 'Premium Presentation',
    description:
      'Your clients and colleagues will be impressed. Every detail reflects the quality of your brand.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    description:
      'A single point of contact for all your corporate catering needs. Efficient communication, seamless execution.',
  },
  {
    icon: Leaf,
    title: 'Dietary Accommodation',
    description:
      'All dietary requirements handled expertly. Vegetarian, vegan, halal, allergen-free \u2014 all options available.',
  },
  {
    icon: FileText,
    title: 'Detailed Invoicing',
    description:
      'Clear, professional invoicing with all documentation for your finance team.',
  },
]

const serviceTiers = [
  {
    title: 'Team Lunch',
    features: [
      '10\u201330 guests',
      'Buffet or plated',
      'Menu consultation',
      'Service staff',
      'Setup & cleanup',
    ],
  },
  {
    title: 'Executive Dining',
    features: [
      '20\u201380 guests',
      'Plated service',
      'Custom menu design',
      'Full service team',
      'Tableware & linens',
      'Bar service',
    ],
  },
  {
    title: 'Corporate Event',
    features: [
      'Large-format events',
      'Multiple service stations',
      'Event coordination',
      'Full staffing',
      'Custom branding options',
      'Catering coordinated with your venue and planner',
    ],
  },
]

const processSteps = [
  { num: '01', title: 'Contact Us', description: 'Reach out with your event details and requirements.' },
  { num: '02', title: 'Menu Planning', description: 'We design a bespoke menu tailored to your occasion.' },
  { num: '03', title: 'Event Execution', description: 'Chefs in our network deliver flawless service on the day.' },
  { num: '04', title: 'Follow-Up', description: 'We follow up to ensure everything met your expectations.' },
]

const faqs = [
  {
    question: 'Do you offer recurring corporate catering?',
    answer:
      'Yes. We provide daily, weekly, or monthly corporate catering packages tailored to your office needs.',
  },
  {
    question: 'Can you cater at our office in DIFC?',
    answer:
      'Absolutely. We coordinate catering across all Dubai business districts including DIFC, Business Bay, Downtown, and Dubai Media City.',
  },
  {
    question: 'Do you provide setup for boardroom dining?',
    answer:
      'Yes. We handle full table setup including linens, glassware, and presentation styling for boardroom environments.',
  },
  {
    question: 'Can you accommodate large corporate events?',
    answer:
      'Yes. We scale from small boardroom lunches to large company events with full service coordination. Tell us your headcount, venue and format and we will confirm what is workable for your date.',
  },
  {
    question: 'Is invoicing available for corporate accounts?',
    answer:
      'Yes. We provide detailed invoicing and can set up corporate account arrangements for regular clients.',
  },
  {
    question: 'How much does corporate catering cost in Dubai?',
    answer:
      'It is quoted per booking, because format, service level, staffing and venue move the figure far more than headcount alone. You receive an itemised proposal with food, staffing, equipment and VAT as separate lines. For indicative market ranges before briefing us, see the Dubai catering prices guide.',
  },
  {
    question: 'What is included in corporate catering services?',
    answer:
      'Menu design, sourcing, cooking, presentation and delivery as standard. Service staff, equipment, setup and pack-down are scoped to your format and shown as separate lines, so you can see what you are approving.',
  },
  {
    question: 'Can you handle both daily office catering and one-off events?',
    answer:
      'Yes, but they are run as different services. Recurring workplace catering is planned around a weekly rhythm and headcount; a one-off company event is planned around a date, a venue and a format. Each has its own page so the detail is not watered down.',
  },
  {
    question: 'Do you offer corporate retainers?',
    answer:
      'Yes. A standing arrangement suits organisations catering regularly through the year — it removes the briefing from every booking and keeps standards consistent. Terms are agreed in writing before anything starts.',
  },
  {
    question: 'Can you cater dietary requirements for our team?',
    answer:
      'Yes. Our kitchens work to halal-first standards, and vegetarian, vegan and gluten-free options are planned into the menu rather than added at the end. For specific allergies, tell us which guest and which allergen so labelling and separation can be planned.',
  },
  {
    question: 'How far in advance should we book?',
    answer:
      'A few days is usually enough for regular office catering. For larger corporate events, two to four weeks is comfortable, and earlier between November and March when demand is highest.',
  },
  {
    question: 'Which areas of Dubai do you cover?',
    answer:
      'We work across Dubai, including DIFC, Business Bay, Downtown, Dubai Media City, Dubai Marina, JLT and the wider business districts. Access, parking and building rules affect delivery timing, so it helps to mention the venue early.',
  },
]

const relatedServices = [
  {
    title: 'Event Catering',
    description: 'Birthdays, weddings, and private celebrations.',
    link: '/events',
  },
  {
    title: 'Villas & Residences',
    description: 'Private dining at your villa or residence.',
    link: '/villas-private-residences',
  },
  {
    title: 'Exhibition Catering',
    description: 'Trade show and exhibition catering for DWTC, Expo City and venues across Dubai.',
    link: '/exhibition-catering-dubai',
  },
]

/* ───── Schema ───── */

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/catering-dubai' },
  { name: 'Corporate', path: '/corporate' },
]

const schema = [
  breadcrumbSchema(breadcrumbs),
  faqPageSchema(faqs),
  serviceSchema(
    'Corporate Catering Dubai',
    'Professional corporate catering in Dubai for boardroom lunches, client dinners, team events, and office catering. Discreet, premium, reliable.',
    'CorporateCatering',
    'Dubai'
  ),
]

/* ───── Page Component ───── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I need corporate catering. Date: __, Guests: __, Venue/area: __, Format: __ (via mychef.ae/corporate)"

interface CorporateProps {
  seoTitle?: string
  seoDescription?: string
  canonicalPath?: string
  pageHeroTitle?: string
  pageHeroSubtitle?: string
  whatsappAttribution?: string
}

export default function Corporate({
  seoTitle = 'Corporate Catering Dubai | Office Lunches & Events | From AED 90pp | myCHEF',
  seoDescription = 'Corporate catering in Dubai for offices, conferences, product launches & galas. VAT/TRN invoicing, halal sourcing, dedicated account manager. Get a quote.',
  canonicalPath = '/corporate',
  pageHeroTitle = 'Corporate Catering Dubai — Office, Boardroom & Events',
  pageHeroSubtitle = 'Impress clients. Reward teams. Elevate every business occasion with premium corporate dining and catering. We reply within 15 minutes during business hours.',
  whatsappAttribution = 'corporate',
}: CorporateProps) {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)

  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi myCHEF Dubai, I need corporate catering. Date: __, Guests: __, Venue/area: __, Format: __ (via mychef.ae/${whatsappAttribution})`
  )}`
  const RETAINER_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi myCHEF Dubai, I'd like a corporate retainer proposal (via mychef.ae/${whatsappAttribution})`
  )}`

  const cardsRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const tiersRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const relatedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: gsap.Context | null = null
    // Defer below-the-fold ScrollTrigger animations so they do not contend
    // with LCP/INP during the initial load.
    deferNonCritical(() => {
      ctx = gsap.context(() => {
        /* Service cards */
        if (cardsRef.current) {
          const cards = cardsRef.current.children
          gsap.fromTo(
            cards,
            { opacity: 0, y: 50 },
            {
              opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
              scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' },
            }
          )
        }

        /* Corporate solutions */
        if (solutionsRef.current) {
          const items = solutionsRef.current.children
          gsap.fromTo(
            items,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
              scrollTrigger: { trigger: solutionsRef.current, start: 'top 85%' },
            }
          )
        }

        /* Trust features */
        if (trustRef.current) {
          const items = trustRef.current.children
          gsap.fromTo(
            items,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
              scrollTrigger: { trigger: trustRef.current, start: 'top 85%' },
            }
          )
        }

        /* Service tiers */
        if (tiersRef.current) {
          const cards = tiersRef.current.children
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
              scrollTrigger: { trigger: tiersRef.current, start: 'top 85%' },
            }
          )
        }

        /* Process steps */
        if (processRef.current) {
          const steps = processRef.current.querySelectorAll('.process-step')
          gsap.fromTo(
            steps,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
              scrollTrigger: { trigger: processRef.current, start: 'top 85%' },
            }
          )
        }

        /* Testimonial */
        if (testimonialRef.current) {
          gsap.fromTo(
            testimonialRef.current.children,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: testimonialRef.current, start: 'top 85%' },
            }
          )
        }

        /* CTA */
        if (ctaRef.current) {
          gsap.fromTo(
            ctaRef.current.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
              scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' },
            }
          )
        }

        /* Related services */
        if (relatedRef.current) {
          gsap.fromTo(
            relatedRef.current.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
              scrollTrigger: { trigger: relatedRef.current, start: 'top 85%' },
            }
          )
        }
      })
    })

    return () => ctx?.revert()
  }, [])

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath={canonicalPath}
        ogImage="/service-corporate.webp"
        hideSiteName
        preloadHero="/images/corporate-catering-dubai-hero.webp"
        schema={schema as unknown as Record<string, unknown>}
      />

      {/* ─── Hero ─── */}
      <PageHero
        title={pageHeroTitle}
        subtitle={pageHeroSubtitle}
        image="/images/corporate-catering-dubai-hero.webp"
        imageAlt="Corporate catering in Dubai"
        imageWidth={1344}
        imageHeight={752}
        cta={{ label: 'Get a Corporate Catering Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Corporate' }]}
        minHeight="large"
        overlay="dark"
      />
      <TrustSignalStrip />
      <CorporateTrustStrip />

      {/* ─── Corporate Services ─── */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT WE OFFER</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mt-4">
              What corporate dining solutions does myCHEF Dubai offer?
            </h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed mt-4 max-w-[700px] mx-auto">
              Tell us about your event and we will bring you a vetted chef within 24 hours.
              We deliver corporate catering across Dubai's key business districts, including{' '}
              <Link to="/locations/business-bay" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Business Bay</Link>,{' '}
              <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">DIFC</Link>,{' '}
              <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Downtown Dubai</Link>,{' '}
              <Link to="/locations/dubai-media-city" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Dubai Media City</Link>, and{' '}
              <Link to="/locations/dubai-internet-city" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Dubai Internet City</Link>,
              from boardroom lunches to{' '}
              <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">company-wide events</Link>.
            </p>
          </div>
          <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((svc) => (
              <Link
                key={svc.title}
                to={svc.link}
                className="group bg-charcoal p-8 text-center hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                <svc.icon size={48} className="text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-2">{svc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                  {svc.description}
                </p>
                <span className="inline-flex items-center gap-2 font-inter text-body-sm font-medium uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Corporate Catering Solutions ─── */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">CATERING OPTIONS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mt-4">
              What types of corporate catering do you provide in Dubai?
            </h2>
          </div>
          <div ref={solutionsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corporateSolutions.map((solution) => (
              <Link
                key={solution.title}
                to={solution.link}
                className="group bg-white p-6 border-l-[3px] border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-playfair text-h3 text-black mb-2">{solution.title}</h3>
                <span className="inline-flex items-center gap-2 font-inter text-body-sm font-medium uppercase tracking-wider text-gold group-hover:text-gold-dark transition-colors">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Businesses Choose Us ─── */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-16">
            <SectionLabel align="center" tone="dark">WHY CHOOSE US</SectionLabel>
            <h2 className="font-playfair text-h2 text-white mt-4">
              Why do Dubai companies choose myCHEF for corporate catering?
            </h2>
          </div>
          <div ref={trustRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((f) => (
              <div key={f.title} className="text-center">
                <f.icon size={48} className="text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{f.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Tiers ─── */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">
              What corporate catering packages are available in Dubai?
            </h2>
          </div>
          <div ref={tiersRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {serviceTiers.map((tier) => (
              <div key={tier.title} className="bg-white p-8 md:p-10 border-t-[3px] border-gold">
                <h3 className="font-playfair text-h3 text-black mb-4">{tier.title}</h3>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check size={16} className="text-gold flex-shrink-0 mt-1" />
                      <span className="font-inter text-body-sm text-gray-600">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate" className="btn-secondary w-full text-center text-sm py-3">Get a Corporate Catering Quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Corporate Retainer Tiers ─── */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">MONTHLY RETAINERS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white mt-4">
              Ongoing corporate catering plans for Dubai businesses
            </h2>
            <p className="font-inter text-body text-gray-400 leading-relaxed mt-4 max-w-[700px] mx-auto">
              Predictable monthly catering for boardrooms, teams, and client events. VAT-compliant invoicing with TRN-ready documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-charcoal p-8 border-t-[3px] border-gold">
              <h3 className="font-playfair text-h3 text-white mb-2">Starter</h3>
              <p className="font-playfair text-3xl text-gold mb-1">From AED 3,500<span className="text-base text-gray-400">/mo</span></p>
              <p className="font-inter text-body-sm text-gray-400 mb-6">Ideal for small offices and monthly board lunches.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">1 catered event per month</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">Up to 20 guests</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">Menu consultation included</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">VAT invoice provided</span></li>
              </ul>
              <a href={RETAINER_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-center text-sm py-3">Get a Retainer Quote</a>
            </div>
            <div className="bg-charcoal p-8 border-t-[3px] border-gold relative">
              <span className="absolute top-0 right-0 bg-gold text-black text-xs font-bold uppercase tracking-wider px-3 py-1">Popular</span>
              <h3 className="font-playfair text-h3 text-white mb-2">Professional</h3>
              <p className="font-playfair text-3xl text-gold mb-1">From AED 8,500<span className="text-base text-gray-400">/mo</span></p>
              <p className="font-inter text-body-sm text-gray-400 mb-6">For growing teams with regular client and team events.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">2 catered events per month</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">Quarterly team lunch</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">Priority scheduling</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">TRN-ready invoicing</span></li>
              </ul>
              <a href={RETAINER_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center text-sm py-3">Get a Retainer Quote</a>
            </div>
            <div className="bg-charcoal p-8 border-t-[3px] border-gold">
              <h3 className="font-playfair text-h3 text-white mb-2">Enterprise</h3>
              <p className="font-playfair text-3xl text-gold mb-1">From AED 18,000<span className="text-base text-gray-400">/mo</span></p>
              <p className="font-inter text-body-sm text-gray-400 mb-6">Dedicated support for larger organisations and venues.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">4+ events per month</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">Dedicated account manager</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">Custom menus & branding</span></li>
                <li className="flex items-start gap-3"><Check size={16} className="text-gold flex-shrink-0 mt-1" /><span className="font-inter text-body-sm text-gray-300">Consolidated monthly billing</span></li>
              </ul>
              <a href={RETAINER_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-center text-sm py-3">Get a Retainer Quote</a>
            </div>
          </div>
          <p className="font-inter text-body-sm text-gray-400 text-center mt-10 mb-3">
            Final quote tailored to your headcount, frequency, and menu choices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <FileText size={18} className="text-gold" />
            <span className="font-inter text-body-sm text-gray-400">
              All retainers include detailed VAT invoices and TRN-ready documentation for your finance team.
            </span>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-h2 text-white">
              How does corporate catering work with myCHEF Dubai?
            </h2>
          </div>
          <div ref={processRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="process-step text-center">
                <span className="font-playfair text-[48px] text-gold leading-none">{step.num}</span>
                <h3 className="font-playfair text-h3 text-white mt-4 mb-2">{step.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Corporate Trust CTA ─── */}
      <section className="bg-charcoal py-20 md:py-24">
        <div className="container-custom max-w-[800px]">
          <div ref={testimonialRef} className="text-center">
            <Quote size={32} className="text-gold mx-auto mb-6" />
            <h2 className="font-playfair text-xl md:text-2xl text-white italic leading-relaxed mb-6">
              Join the Dubai businesses that trust myCHEF for boardroom lunches, client dinners, and team events.
            </h2>
            <p className="font-inter text-body text-gray-400 mb-6">
              We are collecting verified reviews from corporate clients. Share your experience and receive AED 50 credit towards your next booking.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/review" className="btn-primary">Leave a Review</Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">FAQ</SectionLabel>
            <h2 className="font-playfair text-h2 text-black mt-4">Frequently Asked Questions About Corporate Catering in Dubai</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="font-inter text-base font-medium text-black hover:text-gold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-body-sm text-gray-500 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ─── Related Services ─── */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">Which other catering services does myCHEF Dubai offer?</h2>
          </div>
          <div ref={relatedRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-white p-8 border-t-[3px] border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-playfair text-h3 text-black mb-2">{service.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 font-inter text-body-sm font-medium uppercase tracking-wider text-gold group-hover:text-gold-dark transition-colors">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate pricing. The shared StarterPackagesSection was removed here: six of its
          seven cards are private packages (date night, family feast, birthday, weekly prep)
          that have no place on a corporate page. Figures come from corporatePage.ts — see the
          provenance note at the top of that file. */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mt-4 mb-6">
            How much does corporate catering cost in Dubai?
          </h2>
          {pricingIntro.map((t) => (
            <p key={t} className="font-inter text-body text-gray-600 leading-relaxed mb-4">
              {t}
            </p>
          ))}

          {/* Mobile: stacked cards, so the price is never hidden behind a horizontal scroll. */}
          <ul className="mt-10 border-t border-gray-200 sm:hidden">
            {formatLadder.map((r) => (
              <li key={r.format} className="border-b border-gray-200 py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-playfair text-h4 text-black">{r.format}</span>
                  <span className="font-inter text-body-sm font-medium text-gold-ink text-right">{r.price}</span>
                </div>
                <p className="mt-1.5 font-inter text-body-sm text-gray-600">{r.what}</p>
                <p className="mt-1 font-inter text-caption uppercase tracking-[0.12em] text-gray-400">
                  Staff: {r.staff}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 hidden overflow-x-auto sm:block">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 pr-4 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">Format</th>
                  <th className="py-3 pr-4 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">What it is</th>
                  <th className="py-3 pr-4 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">Staff</th>
                  <th className="py-3 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">From</th>
                </tr>
              </thead>
              <tbody>
                {formatLadder.map((r) => (
                  <tr key={r.format} className="border-b border-gray-200">
                    <td className="py-4 pr-4 font-playfair text-h4 text-black">{r.format}</td>
                    <td className="py-4 pr-4 font-inter text-body-sm text-gray-600">{r.what}</td>
                    <td className="py-4 pr-4 font-inter text-body-sm text-gray-600">{r.staff}</td>
                    <td className="py-4 font-inter text-body-sm font-medium text-gold-ink whitespace-nowrap">{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-8 border-t border-gray-200">
            {pricingNotes.map((n) => (
              <li key={n} className="flex items-start gap-3 border-b border-gray-200 py-3">
                <span className="mt-2.5 h-px w-3 shrink-0 bg-gold-ink/60" aria-hidden />
                <span className="font-inter text-body-sm text-gray-600">{n}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link
              to="/dubai-catering-prices-guide"
              className="group inline-flex items-center gap-2 font-inter text-caption uppercase tracking-[0.14em] text-gold-ink hover:text-gold"
            >
              Dubai catering prices guide
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/corporate-event-catering-dubai"
              className="font-inter text-body-sm text-gray-500 underline underline-offset-4 hover:text-gold-ink"
            >
              Catering a company event?
            </Link>
          </div>
        </div>
      </section>

      {/* Routing — the hub's real job */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px]">
          <SectionLabel>Choosing a service</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mt-4 mb-6">{routing.h2}</h2>
          {routing.paragraphs.map((t) => (
            <p key={t} className="font-inter text-body text-gray-600 leading-relaxed mb-4">
              {t}
            </p>
          ))}
          <div className="mt-10 grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {boundaries.map((b) => (
              <Link key={b.href} to={b.href} className="group bg-white p-6 transition-colors hover:bg-cream">
                <p className="font-playfair text-h4 text-black mb-2">{b.q}</p>
                <p className="font-inter text-body-sm leading-relaxed text-gray-600 mb-5">{b.a}</p>
                <span className="inline-flex items-center gap-1.5 font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">
                  {b.cta}
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How a quote is built */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[820px]">
          <SectionLabel>Quoting</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mt-4 mb-6">{quoting.h2}</h2>
          {quoting.paragraphs.map((t) => (
            <p key={t} className="font-inter text-body text-gray-600 leading-relaxed mb-4">
              {t}
            </p>
          ))}
        </div>
      </section>

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Helpful Guides for Planning Corporate Events in Dubai</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/corporate-catering-checklist-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Corporate Catering Checklist</Link>,
            {' '}compare{' '}
            <Link to="/blog/corporate-catering-full-service-vs-drop-off" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">fully-coordinated catering</Link>,
            {' '}or explore our{' '}
            <Link to="/exhibition-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">exhibition catering</Link>{' '}
            and{' '}
            <Link to="/brand-activation-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">brand activation catering</Link>{' '}
            services.
          </p>
        </div>
      </section>

      <LocationStrip
        title="Corporate catering across Dubai"
        subtitle={
          <>
            Trusted for corporate catering in{' '}
            <Link to="/locations/business-bay" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Business Bay</Link>{' '}
            and{' '}
            <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">DIFC</Link>.
          </>
        }
      />

      {/* ─── CTA Banner ─── */}
      <section
        className="relative py-28 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
      >
        <div className="container-custom text-center">
          <div ref={ctaRef}>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-playfair text-h2 md:text-[48px] text-white mb-6">
              Ready to book corporate catering in Dubai?
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[500px] mx-auto mb-10">
              Premium corporate catering that reflects the quality of your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate" className="btn-primary">Get a Corporate Catering Quote</Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
