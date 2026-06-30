import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from '@/utils/schema'
import { Check, Quote, Star, ArrowRight, Clock, Shield, Award, Users, Leaf, FileText, Building, PartyPopper, } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi myCHEF Dubai, I'd like to request a corporate catering quote (via mychef.ae/corporate)"
)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ───── Data ───── */

const corporateServices = [
  {
    icon: Building,
    title: 'Boardroom Lunch',
    description:
      'Elegant working lunches for board meetings and executive sessions. Plated or buffet service.',
    link: '/services/boardroom-lunch-catering-dubai',
  },
  {
    icon: Users,
    title: 'Team Lunch Catering',
    description:
      'Group lunch catering for teams of 10\u2013200. Fresh, delicious, and professionally served.',
    link: '/services/team-lunch-catering-dubai',
  },
  {
    icon: Award,
    title: 'Client Entertainment',
    description:
      'Impress clients with sophisticated private dining. Bespoke menus in your office or a private venue.',
    link: '/services/client-dining-dubai',
  },
  {
    icon: PartyPopper,
    title: 'Corporate Events',
    description:
      'Product launches, company celebrations, networking events. Full-service catering and coordination.',
    link: '/services/corporate-event-catering-dubai',
  },
  {
    icon: Clock,
    title: 'Daily Office Catering',
    description:
      'Regular catering for your Dubai office. Breakfast, lunch, or both \u2014 scheduled and reliable.',
    link: '/services/daily-office-catering-dubai',
  },
  {
    icon: Star,
    title: 'Executive Private Chef',
    description:
      'A dedicated chef for your executive dining room. Daily meal preparation for leadership teams.',
    link: '/services/executive-private-chef-dubai',
  },
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
      'Confidentiality guaranteed. Our staff operates with the discretion your business demands.',
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
      '80\u2013500+ guests',
      'Multiple service stations',
      'Event coordination',
      'Full staffing',
      'Custom branding options',
      'End-to-end management',
    ],
  },
]

const processSteps = [
  { num: '01', title: 'Contact Us', description: 'Reach out with your event details and requirements.' },
  { num: '02', title: 'Menu Planning', description: 'We design a bespoke menu tailored to your occasion.' },
  { num: '03', title: 'Event Execution', description: 'Our team delivers flawless service on the day.' },
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
      'Absolutely. We cater across all Dubai business districts including DIFC, Business Bay, Downtown, and Dubai Media City.',
  },
  {
    question: 'Do you provide setup for boardroom dining?',
    answer:
      'Yes. We handle full table setup including linens, glassware, and presentation styling for boardroom environments.',
  },
  {
    question: 'Can you accommodate large corporate events?',
    answer:
      'Yes. We cater corporate events from 10 to 500+ guests with full service coordination.',
  },
  {
    question: 'Is invoicing available for corporate accounts?',
    answer:
      'Yes. We provide detailed invoicing and can set up corporate account arrangements for regular clients.',
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
    title: 'Yacht Catering',
    description: 'Catering for yacht events and cruises.',
    link: '/yachts',
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

export default function Corporate() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const tiersRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const relatedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

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

      return () => ctx.revert()
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO
        title="Corporate Catering Dubai"
        description="Professional corporate catering in Dubai. Boardroom lunches, client dinners, team events, and office catering. Discreet, premium, reliable. Request a quote."
        canonicalPath="/corporate"
        ogImage="/service-corporate.webp"
        schema={schema as unknown as Record<string, unknown>}
      />

      {/* ─── Hero ─── */}
      <PageHero
        title={<>Corporate Dining<br /><span className="text-gold font-normal">Dubai</span></>}
        subtitle="Impress clients. Reward teams. Elevate every business occasion with premium corporate dining and catering."
        image="/images/corporate-catering-dubai-hero.webp"
        imageAlt="Corporate catering in Dubai"
        cta={{ label: 'Request a Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Corporate' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ─── Corporate Services ─── */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption font-medium uppercase tracking-widest text-gold">
              CORPORATE SOLUTIONS
            </span>
            <h2 className="font-playfair text-h2 text-black mt-4">
              Business Dining Solutions
            </h2>
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

      {/* ─── Why Businesses Choose Us ─── */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-16">
            <span className="font-inter text-caption font-medium uppercase tracking-widest text-gold">
              TRUSTED BY BUSINESS
            </span>
            <h2 className="font-playfair text-h2 text-white mt-4">
              Why Dubai Companies Trust myCHEF
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
              Corporate Catering Options
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
                <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate" className="btn-secondary w-full text-center text-sm py-3">Request a Proposal</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-h2 text-white">
              How Corporate Catering Works
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

      {/* ─── Testimonial ─── */}
      <section className="bg-charcoal py-20 md:py-24">
        <div className="container-custom max-w-[800px]">
          <div ref={testimonialRef} className="text-center">
            <Quote size={32} className="text-gold mx-auto mb-6" />
            <blockquote className="font-playfair text-xl md:text-2xl text-white italic leading-relaxed mb-6">
              &ldquo;We have used myCHEF for over a dozen client dinners at our DIFC office. The quality is consistently exceptional, the team is always professional, and our clients are always impressed. They have become our go-to catering partner.&rdquo;
            </blockquote>
            <cite className="font-inter text-body-sm text-gray-400 not-italic">
              — Richard Hale, Managing Director, DIFC
            </cite>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold" fill="#C8A45C" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption font-medium uppercase tracking-widest text-gold">FAQ</span>
            <h2 className="font-playfair text-h2 text-black mt-4">Common Questions</h2>
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
            <h2 className="font-playfair text-h2 text-black">Explore More Services</h2>
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

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Related Guides</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/corporate-catering-checklist-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Corporate Catering Checklist</Link>.
          </p>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section
        className="relative py-28 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
      >
        <div className="container-custom text-center">
          <div ref={ctaRef}>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-playfair text-h2 md:text-[48px] text-white mb-6">
              Elevate Your Next Business Event
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[500px] mx-auto mb-10">
              Premium corporate catering that reflects the quality of your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate" className="btn-primary">Request a Proposal</Link>
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
