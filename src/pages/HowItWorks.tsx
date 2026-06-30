import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { Clock, Shield, Utensils, Users, Sparkles, Award, ChevronRight, Plus, Minus } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/how-it-works)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const steps = [
  { num: '01', image: '/process-1.jpg', title: 'Reach Out', desc: 'Contact us via WhatsApp or our online form. Tell us about your occasion — the date, number of guests, location in Dubai, and any vision you have in mind. No detail is too small.' },
  { num: '02', image: '/process-2.jpg', title: 'We Design Your Menu', desc: 'Our chef creates a bespoke menu tailored to your tastes, dietary requirements, and the nature of your event. We share the proposal with you for approval and adjustments.' },
  { num: '03', image: '/process-3.jpg', title: 'We Source & Arrive', desc: 'On the day, we arrive early with everything needed — premium ingredients, professional equipment, tableware if required. We prepare everything in your kitchen or event space.' },
  { num: '04', image: '/process-4.jpg', title: 'You Simply Enjoy', desc: 'Your chef plates each course with precision. Our service team attends to your guests. After the final course, we leave your kitchen spotless. You remember the evening.' },
]

const features = [
  { icon: Clock, title: 'Punctual Arrival', desc: 'We arrive early, fully prepared. Timing is never an afterthought.' },
  { icon: Shield, title: 'Discreet Service', desc: 'Our team blends into the background. Your privacy is always respected.' },
  { icon: Utensils, title: 'Premium Ingredients', desc: 'We source the freshest, finest ingredients — locally and internationally.' },
  { icon: Users, title: 'Attentive Staff', desc: 'Professional service staff dedicated to your guests\' comfort.' },
  { icon: Sparkles, title: 'Immaculate Cleanup', desc: 'We leave your kitchen cleaner than we found it. Every single time.' },
  { icon: Award, title: 'Flexible Menus', desc: 'Dietary restrictions, allergies, preferences — all accommodated without compromise.' },
]

const faqs = [
  { q: 'How far in advance should I book?', a: 'We recommend booking at least 48 hours in advance for private chef services and 1 week for larger catering events. However, we do accommodate last-minute requests when possible — contact us and we will do our best.' },
  { q: 'What areas of Dubai do you cover?', a: 'We serve all areas of Dubai including Palm Jumeirah, Downtown Dubai, Dubai Marina, Emirates Hills, JBR, DIFC, Business Bay, Jumeirah, Arabian Ranches, and everywhere in between.' },
  { q: 'Do you accommodate dietary restrictions?', a: 'Absolutely. We handle all dietary requirements including vegetarian, vegan, gluten-free, halal, kosher, nut allergies, and any other restrictions. Every menu is fully customized.' },
  { q: 'Do I need to provide anything?', a: 'We bring all ingredients, cooking equipment, and serving tools. If you need tableware, glassware, or linens, let us know and we can arrange those as well.' },
  { q: 'How long does a private chef dinner typically last?', a: 'A standard multi-course dinner service lasts 3–4 hours from arrival to departure. This includes setup, cooking, service, and cleanup. We adjust timing based on your schedule.' },
  { q: 'Can I see sample menus?', a: 'Yes — visit our Menus page to explore the types of cuisine and dishes we offer. Keep in mind that every menu is bespoke and created specifically for your event.' },
  { q: 'Is your service insured?', a: 'Yes. myCHEF Dubai is fully licensed and insured. Our team members are professionally trained and background-checked.' },
  { q: 'What is your cancellation policy?', a: 'Cancellations made more than 48 hours before the event receive a full refund. Cancellations within 48 hours may be subject to a cancellation fee. Contact us for details.' },
]

const timelineStages = [
  { timeframe: '24–48 hours', label: 'Last Minute', desc: 'Private chef dinners, small gatherings' },
  { timeframe: '3–7 days', label: 'Standard', desc: 'Medium events, villa dining, family dinners' },
  { timeframe: '1–2 weeks', label: 'Planned', desc: 'Corporate events, birthday parties, yacht dining' },
  { timeframe: '3+ weeks', label: 'Early', desc: 'Weddings, large celebrations, holiday events' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'How It Works', item: 'https://mychef.ae/how-it-works' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hiw-hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
      gsap.from('.hiw-hero-h1', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.hiw-hero-sub', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.6 })

      // Timeline steps
      gsap.from('.timeline-step', {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.timeline-section', start: 'top 80%', toggleActions: 'play none none none' },
      })

      // Timeline line draw
      gsap.from('.timeline-line', {
        scaleY: 0, duration: 1.5, ease: 'power2.out', transformOrigin: 'top center',
        scrollTrigger: { trigger: '.timeline-section', start: 'top 80%', toggleActions: 'play none none none' },
      })

      gsap.from('.feature-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.features-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.timeline-stage', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.booking-timeline', start: 'top 85%', toggleActions: 'play none none none' },
      })

      gsap.from('.hiw-cta-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.hiw-cta', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="How It Works"
        description="See how easy it is to book a private chef in Dubai. From your first message to the final course — a seamless, bespoke experience every time."
        canonicalPath="/how-it-works"
        schema={{ ...breadcrumbSchema, ...faqSchema }}
      />

      {/* Section 1: Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-black overflow-hidden">
        <img src="/images/how-it-works-dubai-hero.webp" alt="Dining experience" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%)' }} />
        <div className="relative z-10 text-center container-custom py-24">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><ChevronRight size={14} className="text-gray-500" /></li>
              <li className="text-gold">How It Works</li>
            </ol>
          </nav>
          <p className="hiw-hero-eyebrow font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4">THE EXPERIENCE</p>
          <h1 className="hiw-hero-h1 font-playfair text-h1 md:text-[3.5rem] text-white mb-6" style={{ lineHeight: '1.1' }}>
            Simple. Seamless.<br />Extraordinary.
          </h1>
          <p className="hiw-hero-sub font-inter text-body-lg text-gray-400 max-w-xl mx-auto">
            From your first message to the final course — every step is handled with care.
          </p>
        </div>
      </section>

      {/* Section 2: Timeline */}
      <section className="timeline-section bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">THE JOURNEY</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>Your Experience, Step by Step</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="timeline-line absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gold lg:-translate-x-px" />

            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={step.num} className={`timeline-step relative flex flex-col lg:flex-row gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-gold border-4 border-cream lg:-translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`ml-12 lg:ml-0 lg:w-[calc(50%-32px)] ${i % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                    <span className="font-playfair text-[72px] text-gold leading-none opacity-15 block mb-2">{step.num}</span>
                    <img src={step.image} alt={step.title} className="w-full aspect-[16/10] object-cover mb-4" loading="lazy" />
                    <h3 className="font-playfair text-h3 text-black mb-3">{step.title}</h3>
                    <p className="font-inter text-body text-gray-500" style={{ lineHeight: '1.7' }}>{step.desc}</p>
                  </div>
                  {/* Spacer for other side */}
                  <div className="hidden lg:block lg:w-[calc(50%-32px)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Features */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">THE DETAILS</p>
            <h2 className="font-playfair text-h2 text-white" style={{ lineHeight: '1.15' }}>What You Can Always Expect</h2>
          </div>
          <div className="features-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="feature-card text-center">
                <f.icon size={48} className="text-gold mx-auto mb-4" strokeWidth={1.5} />
                <h4 className="font-playfair text-h4 text-white mb-3">{f.title}</h4>
                <p className="font-inter text-body-sm text-gray-400" style={{ lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: FAQ Accordion */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">FAQ</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>Common Questions</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-inter text-body font-medium text-black pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 text-gold transition-transform duration-300" style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: openFaq === i ? '300px' : '0', opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="pt-4 font-inter text-body text-gray-500" style={{ lineHeight: '1.7' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Booking Timeline */}
      <section className="bg-charcoal py-20">
        <div className="booking-timeline container-custom max-w-[1000px]">
          <h3 className="font-playfair text-h3 text-white text-center mb-12" style={{ lineHeight: '1.2' }}>When Should You Book?</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting lines */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-charcoal-light" />
            {timelineStages.map((stage) => (
              <div key={stage.label} className="timeline-stage text-center relative z-10">
                <div className="w-4 h-4 rounded-full bg-gold mx-auto mb-4" />
                <p className="font-playfair text-h4 text-gold mb-1">{stage.timeframe}</p>
                <p className="font-inter text-body-sm font-medium text-white mb-2">{stage.label}</p>
                <p className="font-inter text-body-sm text-gray-400">{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="hiw-cta bg-black section-padding">
        <div className="hiw-cta-content container-custom text-center">
          <h2 className="font-playfair text-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>Ready to Begin?</h2>
          <p className="font-inter text-body text-gray-400 max-w-xl mx-auto mb-8">
            Your bespoke dining experience starts with a single message.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=how-it-works" className="btn-primary">Request My Custom Quote</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
