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
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from '@/utils/schema'
import {
  Check,
  Quote,
  Star,
  ArrowRight,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi myCHEF Dubai, I'd like to request a quote for event catering (via mychef.ae/events)"
)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ───── Data ───── */

const eventTypes = [
  {
    image: '/service-events.jpg',
    title: 'Birthday Catering',
    description:
      'From intimate family dinners to milestone celebrations. Custom menus, cakes, and full service.',
    link: '/services/birthday-catering-dubai',
  },
  {
    image: '/service-luxury-dining.jpg',
    title: 'Wedding Catering',
    description:
      'Receptions, rehearsal dinners, post-wedding brunches. Elegant, bespoke, and unforgettable.',
    link: '/services/wedding-catering-dubai',
  },
  {
    image: '/service-villa.jpg',
    title: 'Villa Party Catering',
    description:
      'Full-service catering for villa events. Setup, service, cleanup \u2014 all handled professionally.',
    link: '/services/villa-party-catering-dubai',
  },
  {
    image: '/service-corporate.jpg',
    title: 'Corporate Events',
    description:
      'Product launches, client entertaining, team celebrations. Professional and impressive.',
    link: '/services/corporate-event-catering-dubai',
  },
  {
    image: '/service-yacht.jpg',
    title: 'Yacht Event Catering',
    description:
      'Catering for yacht parties and events. Canapes, BBQ, plated service on the water.',
    link: '/services/yacht-event-catering-dubai',
  },
  {
    image: '/service-catering.jpg',
    title: 'Cocktail Receptions',
    description:
      'Sophisticated canapes, passed appetizers, and cocktail service for networking events.',
    link: '/services/cocktail-reception-catering-dubai',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Initial Consultation',
    description:
      'We discuss your event vision, guest count, venue, dietary needs, and budget.',
  },
  {
    num: '02',
    title: 'Menu & Service Design',
    description:
      'Our chef creates a bespoke menu and we design the service flow for your event.',
  },
  {
    num: '03',
    title: 'Event Day Execution',
    description:
      'We arrive early, set up, and execute flawlessly. You focus on your guests.',
  },
  {
    num: '04',
    title: 'Post-Event Wrap-Up',
    description:
      'Complete cleanup and follow-up to ensure everything exceeded expectations.',
  },
]

const includedItems = [
  'Bespoke Menu Design',
  'Premium Ingredients',
  'Professional Chefs',
  'Service Staff',
  'Tableware & Linens',
  'Bar Service (Optional)',
  'Setup & Decoration',
  'Full Cleanup',
]

const galleryImages = [
  '/service-events.jpg',
  '/service-catering.jpg',
  '/service-villa.jpg',
  '/service-luxury-dining.jpg',
  '/menu-canapes.jpg',
  '/testimonial-villa.jpg',
]

const faqs = [
  {
    question: 'What is the minimum guest count for event catering?',
    answer:
      'Our event catering starts from 10 guests. For smaller groups, our private chef service is ideal.',
  },
  {
    question: 'Can you cater at any venue in Dubai?',
    answer:
      'Yes. We cater at villas, penthouses, yachts, event spaces, and outdoor venues across Dubai.',
  },
  {
    question: 'Do you provide staff for large events?',
    answer:
      'Absolutely. We provide chefs, waiters, bartenders, and event coordinators based on your guest count and service style.',
  },
  {
    question: 'Can you create themed menus?',
    answer:
      'Yes. We design themed menus for any occasion \u2014 seasonal, cultural, or personal themes.',
  },
  {
    question: 'What happens if guest numbers change?',
    answer:
      'We understand plans change. Contact us as soon as possible and we will adjust accordingly.',
  },
]

const relatedServices = [
  {
    title: 'Corporate Dining',
    description: 'Professional catering for business events and meetings.',
    link: '/corporate',
  },
  {
    title: 'Villas & Residences',
    description: 'Private chef services for villa events and celebrations.',
    link: '/villas-private-residences',
  },
  {
    title: 'Yacht Catering',
    description: 'Catering for yacht parties and on-water events.',
    link: '/yachts',
  },
]

/* ───── Schema ───── */

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/catering-dubai' },
  { name: 'Events', path: '/events' },
]

const schema = [
  breadcrumbSchema(breadcrumbs),
  faqPageSchema(faqs),
  serviceSchema(
    'Event Catering Dubai',
    'Premium event catering in Dubai for birthdays, weddings, and private celebrations with bespoke menus and professional staff.',
    'EventCatering',
    'Dubai'
  ),
]

/* ───── Page Component ───── */

export default function Events() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)
  const eventCardsRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const includedRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const relatedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero entrance */
      const heroEls = heroContentRef.current?.children
      if (heroEls) {
        gsap.fromTo(
          heroEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2,
          }
        )
      }

      /* Hero parallax */
      const handleScroll = () => {
        if (heroImageRef.current) {
          const scrollY = window.scrollY
          heroImageRef.current.style.transform = `scale(1.05) translateY(${scrollY * 0.5}px)`
        }
      }
      window.addEventListener('scroll', handleScroll, { passive: true })

      /* Event cards */
      if (eventCardsRef.current) {
        const cards = eventCardsRef.current.children
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: eventCardsRef.current,
              start: 'top 85%',
            },
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
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: processRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      /* Included items */
      if (includedRef.current) {
        const items = includedRef.current.querySelectorAll('.check-item')
        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: includedRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      /* Gallery */
      if (galleryRef.current) {
        const imgs = galleryRef.current.children
        gsap.fromTo(
          imgs,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: galleryRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      /* Testimonial */
      if (testimonialRef.current) {
        gsap.fromTo(
          testimonialRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonialRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      /* CTA */
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 80%',
            },
          }
        )
      }

      /* Related services */
      if (relatedRef.current) {
        const cards = relatedRef.current.children
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: relatedRef.current,
              start: 'top 85%',
            },
          }
        )
      }

      return () => {
        ctx.revert()
        window.removeEventListener('scroll', handleScroll)
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO
        title="Event Catering Dubai"
        description="Premium event catering in Dubai for birthdays, weddings, and private celebrations. Full-service catering with bespoke menus and professional staff. Get your quote."
        canonicalPath="/events"
        ogImage="/service-events.jpg"
        schema={schema as unknown as Record<string, unknown>}
      />

      {/* ─── Section 1: Hero ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={heroImageRef}
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: 'url(/images/events-catering-dubai-hero.webp)' }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div
          ref={heroContentRef}
          className="relative z-10 container-custom text-center pt-20"
        >
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center justify-center gap-2 font-inter text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  to="/catering-dubai"
                  className="hover:text-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-gold">Events</li>
            </ol>
          </nav>

          {/* Gold Line */}
          <div className="gold-line mx-auto mb-8" />

          {/* H1 */}
          <h1 className="font-playfair text-h1 md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight">
            Event Catering
            <br />
            <span className="text-gold font-normal">Dubai</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 font-inter text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            From intimate celebrations to grand occasions — exceptional food,
            flawless service, unforgettable events.
          </p>

          {/* CTA Row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=events" className="btn-primary">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Event Types ─── */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-inter text-caption font-medium uppercase tracking-widest text-gold">
              EVENTS WE CATER
            </span>
            <h2 className="font-playfair text-h2 text-black mt-4">
              Every Celebration Deserves Exceptional Food
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={eventCardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 gradient-overlay-bottom" />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-playfair text-h3 text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <Link
                    to={event.link}
                    className="inline-flex items-center gap-2 font-inter text-[13px] font-medium uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
                  >
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Process ─── */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-inter text-caption font-medium uppercase tracking-widest text-gold">
              OUR PROCESS
            </span>
            <h2 className="font-playfair text-h2 text-white mt-4">
              From Planning to Perfect Execution
            </h2>
          </div>

          {/* Steps */}
          <div
            ref={processRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="process-step text-center"
              >
                <span className="font-playfair text-[48px] text-gold leading-none">
                  {step.num}
                </span>
                <h3 className="font-playfair text-h3 text-white mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: What's Included ─── */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">
              What&apos;s Included in Event Catering
            </h2>
          </div>

          {/* Checklist Grid */}
          <div
            ref={includedRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {includedItems.map((item) => (
              <div
                key={item}
                className="check-item flex items-center gap-4 p-4 bg-white rounded-sm"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold/10">
                  <Check size={18} className="text-gold" />
                </div>
                <span className="font-inter text-base text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: Gallery ─── */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-inter text-caption font-medium uppercase tracking-widest text-gold">
              GALLERY
            </span>
            <h2 className="font-playfair text-h2 text-white mt-4">
              Event Moments
            </h2>
          </div>

          {/* Grid */}
          <div
            ref={galleryRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Event catering Dubai ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: Testimonial ─── */}
      <section className="bg-charcoal py-20 md:py-24">
        <div className="container-custom max-w-[800px]">
          <div ref={testimonialRef} className="text-center">
            <Quote size={32} className="text-gold mx-auto mb-6" />
            <blockquote className="font-playfair text-xl md:text-2xl text-white italic leading-relaxed mb-6">
              &ldquo;myCHEF catered our daughter&rsquo;s 21st birthday at our
              Emirates Hills villa. The food was extraordinary, the presentation
              was stunning, and the team was so professional. Our guests are still
              talking about it.&rdquo;
            </blockquote>
            <cite className="font-inter text-body-sm text-gray-400 not-italic">
              — Fatima Al-Rashid, Emirates Hills
            </cite>
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-gold"
                  fill="#C8A45C"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 7: FAQ ─── */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[800px]">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-inter text-caption font-medium uppercase tracking-widest text-gold">
              FAQ
            </span>
            <h2 className="font-playfair text-h2 text-black mt-4">
              Common Questions
            </h2>
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

      {/* ─── Section 8: Related Services ─── */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-h2 text-black">
              Explore More Services
            </h2>
          </div>
          <div
            ref={relatedRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto"
          >
            {relatedServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-white p-8 border-t-[3px] border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-playfair text-h3 text-black mb-2">
                  {service.title}
                </h3>
                <p className="font-inter text-body-sm text-gray-500 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 font-inter text-[13px] font-medium uppercase tracking-wider text-gold group-hover:text-gold-dark transition-colors">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 9: CTA Banner ─── */}
      <section
        className="relative py-28 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)',
        }}
      >
        <div className="container-custom text-center">
          <div ref={ctaRef}>
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-playfair text-h2 md:text-[48px] text-white mb-6">
              Let&apos;s Plan Your Next Event
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[500px] mx-auto mb-10">
              Tell us about your celebration and we will create a catering
              experience your guests will never forget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=events" className="btn-primary">Request a Proposal</Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
