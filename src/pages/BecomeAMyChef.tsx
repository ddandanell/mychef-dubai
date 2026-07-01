import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ChefHat,
  UtensilsCrossed,
  Car,
  ShieldCheck,
  Award,
  Moon,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
  Send,
} from 'lucide-react'
import SEO from '../components/SEO'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to apply to become a myCHEF chef (via mychef.ae/become-a-mychef)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/become-a-mychef'

const requirements = [
  {
    icon: ChefHat,
    title: 'Professional Cooking Experience',
    description: 'You have worked as a private chef, restaurant chef, event chef, pastry chef, or in a similar professional kitchen role. We look for proven ability to cook to a high standard under pressure.',
  },
  {
    icon: ShieldCheck,
    title: 'UAE Visa & Right to Work',
    description: 'You must hold a valid UAE visa that permits work, or a freelance permit relevant to culinary services. We verify right-to-work documents during onboarding.',
  },
  {
    icon: Car,
    title: 'Reliable Transport',
    description: 'Events happen across Dubai — Palm Jumeirah, Downtown, Marina, Emirates Hills, and beyond. Reliable transport and punctuality are essential.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food-Hygiene Awareness',
    description: 'You must demonstrate safe food handling, temperature control, cross-contamination prevention, and allergen awareness. PIC certification is preferred.',
  },
  {
    icon: Moon,
    title: 'Halal Knowledge',
    description: 'Knowledge of halal ingredients and preparation is a strong advantage in the Dubai market. We source halal-certified proteins for most events.',
  },
  {
    icon: Award,
    title: 'Presentation & Professionalism',
    description: 'Beyond cooking, we value chefs who communicate clearly, present food beautifully, respect client homes, and leave kitchens clean.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Apply Online',
    description: 'Complete the application form below with your experience, cuisines, visa status, certifications, and portfolio or CV link.',
  },
  {
    num: '02',
    title: 'Document Review',
    description: 'Our team reviews your experience, checks your right-to-work documents, and verifies references or portfolio samples.',
  },
  {
    num: '03',
    title: 'Trial Cook',
    description: 'Shortlisted chefs are invited to a practical skill assessment and tasting. We evaluate technique, hygiene, flavour, and presentation.',
  },
  {
    num: '04',
    title: 'Onboarding',
    description: 'Approved chefs receive onboarding on myCHEF standards, booking procedures, client communication, and safety expectations.',
  },
  {
    num: '05',
    title: 'Matched to Events',
    description: 'Once active, you are matched to events based on your cuisine strengths, availability, location, and the client\'s needs.',
  },
]

const whyJoin = [
  'Access to premium private chef and catering events across Dubai',
  'Flexible scheduling around your existing commitments',
  'Support with menu planning, sourcing, and logistics',
  'Timely payments and clear booking terms',
  'Ongoing feedback to help you grow',
  'Work with a trusted brand and vetted client base',
]

const faqs = [
  {
    q: 'Who can apply to become a myCHEF chef?',
    a: 'We welcome experienced private chefs, restaurant chefs, event chefs, pastry chefs, and hospitality professionals who can demonstrate strong cooking skills, professionalism, and legal right to work in the UAE.',
  },
  {
    q: 'Do I need HACCP certification?',
    a: 'HACCP is not mandatory, but food-hygiene awareness and safe handling practices are required. PIC (Person in Charge) certification is preferred.',
  },
  {
    q: 'What cuisines are in demand?',
    a: 'We regularly need chefs skilled in Arabic, Indian, Mediterranean, Italian, Asian, sushi, pastry, healthy, halal, and fusion cuisines. Multiple cuisines are a strong advantage.',
  },
  {
    q: 'How does payment work?',
    a: 'Payment terms are agreed during onboarding. Chefs are generally paid per event on a schedule outlined in our contractor agreement.',
  },
  {
    q: 'Will I be an employee of myCHEF Dubai?',
    a: 'Chefs typically join as independent contractors or freelancers. Your exact arrangement depends on your visa status and local regulations.',
  },
  {
    q: 'How do I increase my bookings?',
    a: 'High ratings, punctuality, strong presentation, and flexibility lead to more matches. We share client feedback after every event to help you improve.',
  },
]

const relatedServices = [
  {
    title: 'How We Vet Our Chefs',
    description: 'Understand the verification and assessment process every chef completes.',
    image: '/images/how-we-vet-our-chefs-dubai-hero.webp',
    link: '/how-we-vet-our-chefs',
  },
  {
    title: 'Our Chefs',
    description: 'Meet the chefs who represent myCHEF Dubai at private events.',
    image: '/service-private-chef.webp',
    link: '/our-chefs',
  },
  {
    title: 'Corporate Catering',
    description: 'High-volume events where experienced event chefs are always in demand.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
]

const inputClasses =
  'w-full px-4 py-3.5 min-h-[48px] font-inter text-body border bg-white text-black placeholder:text-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200'
const inputErrorClasses = 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
const inputNormalClasses = 'border-gray-200'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Become a myCHEF',
      'Join the myCHEF Dubai private chef network. Apply online with your experience, cuisines, visa status, and certifications.',
      'Chef Recruitment Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Become a myCHEF', path: CANONICAL_PATH },
    ]),
  ],
}

export default function BecomeAMyChef() {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    cuisines: '',
    visaStatus: '',
    certificate: '',
    portfolio: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const validate = () => {
    const newErrors: Record<string, boolean> = {}
    if (!formData.name.trim()) newErrors.name = true
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true
    if (!formData.phone.trim()) newErrors.phone = true
    if (!formData.experience) newErrors.experience = true
    if (!formData.cuisines.trim()) newErrors.cuisines = true
    if (!formData.visaStatus) newErrors.visaStatus = true
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceType: 'chef-application',
      message: [
        'Years of experience: ' + formData.experience,
        'Cuisines: ' + formData.cuisines,
        'Visa status: ' + formData.visaStatus,
        'Food handling / PIC certificate: ' + formData.certificate,
        'Portfolio / CV: ' + formData.portfolio,
        '',
        formData.message,
      ].filter(Boolean).join('\n'),
      formId: 'chef-application-form',
      page: window.location.pathname + window.location.search,
      source: 'become_a_mychef_page',
    }

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submit failed')
      navigate('/thank-you')
    } catch {
      const lines = [
        'New chef application — myCHEF Dubai',
        '',
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Experience: ${formData.experience}`,
        `Cuisines: ${formData.cuisines}`,
        `Visa status: ${formData.visaStatus}`,
        `Certificate: ${formData.certificate}`,
        `Portfolio/CV: ${formData.portfolio}`,
        '',
        `Message: ${formData.message}`,
      ].filter(Boolean)
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
      window.open(waUrl, '_blank')
      setFormState('success')
    }
  }

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bmc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bmc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bmc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bmc-intro-text', {
      scrollTrigger: { trigger: '.bmc-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.bmc-req-card', {
      scrollTrigger: { trigger: '.bmc-requirements', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bmc-step-item', {
      scrollTrigger: { trigger: '.bmc-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    })

    gsap.to('.bmc-why-item', {
      scrollTrigger: { trigger: '.bmc-why', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bmc-form-left', {
      scrollTrigger: { trigger: '.bmc-form-section', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: -30, duration: 0.8, ease: 'power3.out',
    })

    gsap.to('.bmc-form-right', {
      scrollTrigger: { trigger: '.bmc-form-section', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 30, duration: 0.8, delay: 0.15, ease: 'power3.out',
    })

    gsap.to('.bmc-faq-item', {
      scrollTrigger: { trigger: '.bmc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bmc-rel-card', {
      scrollTrigger: { trigger: '.bmc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bmc-cta', {
      scrollTrigger: { trigger: '.bmc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Become a myCHEF | Private Chef Jobs Dubai"
        description="Join the myCHEF Dubai private chef network. Experienced chefs, pastry chefs, and event chefs can apply online. Flexible events across Dubai."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/become-a-mychef-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/become-a-mychef-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bmc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Become a myCHEF</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bmc-hero-h1">
            Join the myCHEF Dubai Chef Network
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bmc-hero-sub">
            Experienced private chefs, pastry chefs, and event chefs — work with Dubai's trusted luxury catering brand on flexible, premium events.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#chef-application-form" className="btn-primary opacity-0 translate-y-4 bmc-hero-cta">Apply Now</a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bmc-hero-cta"
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
            CHEF RECRUITMENT
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Cook at Dubai's Most Exciting Private Events
          </h2>
          <div className="bmc-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              myCHEF Dubai is always looking for talented, reliable chefs who can deliver exceptional food in private homes, villas, yachts, and venues across the city. Whether you are a private chef with years of household experience, a restaurant chef ready for a new challenge, a pastry specialist, or an event chef who thrives under pressure, we want to hear from you.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              We are not a gig platform. We are a curated network. Every chef is vetted, every menu is bespoke, and every event is supported by a team that understands the standards expected in Dubai's luxury market. In return, you get access to interesting clients, flexible scheduling, clear payment terms, and a brand that promotes your skills professionally.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Read on to see our requirements, the application process, and what makes a strong candidate. You can also review <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how we vet our chefs</Link> or explore the <Link to="/our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">chefs already in our network</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Requirements ═══════════════ */}
      <section className="bmc-requirements bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              REQUIREMENTS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              What We Look For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, i) => {
              const Icon = req.icon
              return (
                <div key={i} className="bmc-req-card bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{req.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{req.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Process ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              APPLICATION JOURNEY
            </span>
            <h2 className="font-playfair text-h2 text-white">
              How to Join
            </h2>
          </div>

          <div className="bmc-steps space-y-8">
            {processSteps.map((step, i) => (
              <div key={i} className="bmc-step-item flex gap-6 md:gap-8 opacity-0 translate-y-8">
                <span className="font-playfair text-[48px] text-gold leading-none flex-shrink-0 w-[60px] text-right">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-playfair text-h3 text-white mb-2">{step.title}</h3>
                  <p className="font-inter text-body text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Why Join ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                WHY JOIN
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                Cook More. Worry Less.
              </h2>
              <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-6">
                Joining myCHEF Dubai means spending more time doing what you love — cooking — and less time marketing, negotiating, or chasing payments. We handle client acquisition, menu coordination, and logistics so you can focus on the food.
              </p>
            </div>
            <div className="bmc-why space-y-4">
              {whyJoin.map((item, i) => (
                <div key={i} className="bmc-why-item flex items-start gap-3 opacity-0 translate-y-5">
                  <Check size={18} className="text-gold flex-shrink-0 mt-1" />
                  <span className="font-inter text-body text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: Application Form ═══════════════ */}
      <section id="chef-application-form" className="bmc-form-section bg-cream section-padding">
        <div className="container-custom max-w-[1200px]">
          {formState === 'success' ? (
            <div className="text-center max-w-xl mx-auto py-16">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold/10">
                <Check size={32} className="text-gold" />
              </div>
              <h2 className="font-playfair text-fluid-h2 text-black mb-4">Application Received</h2>
              <p className="font-inter text-body text-gray-500 mb-8">
                Thank you for applying to become a myCHEF. Our team will review your details and respond within 2–3 business days.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                <Phone size={18} />
                Follow Up on WhatsApp
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-y-12 lg:gap-x-12">
              <div className="bmc-form-left">
                <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3 block">CHEF APPLICATION</span>
                <h2 className="font-playfair text-fluid-h2 text-black mb-2" style={{ lineHeight: '1.15' }}>
                  Apply to Become a myCHEF
                </h2>
                <p className="font-inter text-body text-gray-500 mb-8">
                  Fill in the form below. The more detail you provide about your experience and cuisines, the faster we can assess your fit.
                </p>
                <form id="chef-application-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className={`${inputClasses} ${errors.name ? inputErrorClasses : inputNormalClasses}`}
                      />
                      {errors.name && <p className="text-red-500 text-body-sm mt-1">Name is required</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={e => handleChange('email', e.target.value)}
                        className={`${inputClasses} ${errors.email ? inputErrorClasses : inputNormalClasses}`}
                      />
                      {errors.email && <p className="text-red-500 text-body-sm mt-1">Valid email is required</p>}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      className={`${inputClasses} ${errors.phone ? inputErrorClasses : inputNormalClasses}`}
                    />
                    {errors.phone && <p className="text-red-500 text-body-sm mt-1">Phone number is required</p>}
                  </div>
                  <div>
                    <select
                      value={formData.experience}
                      onChange={e => handleChange('experience', e.target.value)}
                      className={`${inputClasses} appearance-none cursor-pointer ${errors.experience ? inputErrorClasses : inputNormalClasses} ${!formData.experience ? 'text-gray-400' : 'text-black'}`}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C8A45C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                    >
                      <option value="">Years of professional cooking experience</option>
                      <option value="1-3 years">1–3 years</option>
                      <option value="3-5 years">3–5 years</option>
                      <option value="5-10 years">5–10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                    {errors.experience && <p className="text-red-500 text-body-sm mt-1">Please select your experience</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Cuisines you specialise in (e.g. Arabic, Indian, pastry, sushi)"
                      value={formData.cuisines}
                      onChange={e => handleChange('cuisines', e.target.value)}
                      className={`${inputClasses} ${errors.cuisines ? inputErrorClasses : inputNormalClasses}`}
                    />
                    {errors.cuisines && <p className="text-red-500 text-body-sm mt-1">Please list your cuisines</p>}
                  </div>
                  <div>
                    <select
                      value={formData.visaStatus}
                      onChange={e => handleChange('visaStatus', e.target.value)}
                      className={`${inputClasses} appearance-none cursor-pointer ${errors.visaStatus ? inputErrorClasses : inputNormalClasses} ${!formData.visaStatus ? 'text-gray-400' : 'text-black'}`}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C8A45C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                    >
                      <option value="">Current visa / right-to-work status</option>
                      <option value="UAE resident visa with work permit">UAE resident visa with work permit</option>
                      <option value="Freelance permit (culinary/F&B)">Freelance permit (culinary/F&B)</option>
                      <option value="Sponsor visa, eligible for freelance">Sponsor visa, eligible for freelance</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.visaStatus && <p className="text-red-500 text-body-sm mt-1">Please select your visa status</p>}
                  </div>
                  <div>
                    <select
                      value={formData.certificate}
                      onChange={e => handleChange('certificate', e.target.value)}
                      className={`${inputClasses} appearance-none cursor-pointer ${inputNormalClasses} ${!formData.certificate ? 'text-gray-400' : 'text-black'}`}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C8A45C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                    >
                      <option value="">Do you hold a valid food-handling / PIC certificate?</option>
                      <option value="Yes, PIC certificate">Yes, PIC certificate</option>
                      <option value="Yes, basic food hygiene">Yes, basic food hygiene</option>
                      <option value="No, but willing to obtain">No, but willing to obtain</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="url"
                      placeholder="Link to portfolio, CV, or Instagram"
                      value={formData.portfolio}
                      onChange={e => handleChange('portfolio', e.target.value)}
                      className={`${inputClasses} ${inputNormalClasses}`}
                    />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your background, favourite cuisines, and why you want to join myCHEF Dubai..."
                      value={formData.message}
                      onChange={e => handleChange('message', e.target.value)}
                      className={`${inputClasses} resize-none ${inputNormalClasses}`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    {formState === 'submitting' ? 'Sending...' : 'Submit Application'}
                  </button>
                </form>
              </div>

              <div className="bmc-form-right bg-black p-8 lg:p-12 h-fit">
                <h3 className="font-playfair text-fluid-h3 text-white mb-8" style={{ lineHeight: '1.2' }}>
                  Before You Apply
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-inter text-body text-gray-400">Only experienced professional chefs are accepted.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-inter text-body text-gray-400">Right-to-work in the UAE is mandatory.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-inter text-body text-gray-400">A practical trial cook is required before approval.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-inter text-body text-gray-400">References and portfolio strengthen your application.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                    <span className="font-inter text-body text-gray-400">No chef is guaranteed events — work is matched by fit and availability.</span>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-charcoal-light">
                  <p className="font-inter text-body-sm text-gray-400 mb-4">
                    Questions before applying? Reach out directly.
                  </p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2 w-full justify-center">
                    <Phone size={16} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Chef Application Questions
          </h2>

          <div className="bmc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bmc-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 8: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="bmc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bmc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 9: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bmc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Ready to Join?
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Take the first step toward cooking with myCHEF Dubai. Submit your application and our team will be in touch within 2–3 business days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#chef-application-form" className="btn-primary">Apply Now</a>
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
