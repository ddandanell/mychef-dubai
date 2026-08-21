import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  ChefHat,
  ShieldCheck,
  UtensilsCrossed,
  Leaf,
  Phone,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn more about the Chef Training Academy (via mychef.ae/chef-training-academy)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/chef-training-academy'
const CAMPAIGN = 'chef-training-academy'

const inclusions = [
  {
    icon: ChefHat,
    title: 'Hands-On Private Dining Modules',
    description: 'Practical sessions in villa and residence service, menu pacing, guest interaction, and the standards expected in high-end home dining.',
  },
  {
    icon: ShieldCheck,
    title: 'Food-Safety Refresh',
    description: 'Temperature control, safe prep zones, cross-contamination prevention, and Dubai municipality-aligned hygiene practices for private kitchens.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Plating and Presentation',
    description: 'Learn how to plate courses that look as refined as they taste, from canapés and starters to main courses and individual desserts.',
  },
  {
    icon: Leaf,
    title: 'Halal and Dietary Competency',
    description: 'Confidently handle halal requirements, allergies, intolerances, vegan, vegetarian, and religious dietary requests without compromising flavour.',
  },
]

const packages = [
  {
    name: 'Foundation Course',
    price: 'From AED 2,500',
    description: 'Two-day introduction for aspiring private dining chefs.',
    features: [
      '2 days of hands-on training',
      'Private dining fundamentals',
      'Food safety and hygiene review',
      'Basic plating techniques',
      'myCHEF attendance certificate',
    ],
  },
  {
    name: 'Professional Certificate',
    price: 'From AED 6,500',
    description: 'Five-day intensive programme with live service practice and assessment.',
    features: [
      '5 days of practical instruction',
      'Live service scenarios in a villa setting',
      'Menu design and dietary protocols',
      'Halal and allergy-safe workflows',
      'myCHEF Professional Certificate',
    ],
    highlighted: true,
  },
  {
    name: 'Master Private Chef Diploma',
    price: 'From AED 12,000',
    description: 'Ten-day residential-style programme for chefs ready to lead private events.',
    features: [
      '10 days of advanced training',
      'Villa, yacht, and event service modules',
      'Team leadership and timing drills',
      'Graduate placement pathway',
      'myCHEF Master Diploma',
    ],
  },
]

const faqs = [
  {
    q: 'Who can apply to the Chef Training Academy?',
    a: 'The academy is open to commis chefs, line cooks, culinary students, and serious home cooks who want to specialise in private dining. A basic understanding of kitchen fundamentals is helpful for the Professional and Master programmes.',
  },
  {
    q: 'Is the academy only for chefs who want to join myCHEF?',
    a: 'No. Anyone can enrol to improve their private dining skills. Graduates who meet our standards are invited to join the myCHEF Dubai chef network, but there is no obligation.',
  },
  {
    q: 'What certification do I receive?',
    a: 'You receive a myCHEF Dubai certificate of completion for the Foundation Course, a Professional Certificate, or a Master Private Chef Diploma depending on the programme. These confirm practical competency in private dining service.',
  },
  {
    q: 'How long are the courses?',
    a: 'The Foundation Course runs for 2 days, the Professional Certificate for 5 days, and the Master Private Chef Diploma for 10 days. Schedules are published before each intake.',
  },
  {
    q: 'Are online modules available?',
    a: 'Theory modules can be completed online, but all practical assessments and live-service practice take place in Dubai under instructor supervision.',
  },
]

const relatedServices = [
  {
    title: 'Become a myCHEF',
    description: 'Join our professional chefs and access private dining opportunities across Dubai.',
    image: '/images/become-a-mychef-dubai-hero.webp',
    link: '/become-a-mychef',
  },
  {
    title: 'myCHEF Certified',
    description: 'Learn what it means to be a myCHEF certified private chef and how the badge works.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/mychef-certified',
  },
  {
    title: 'How We Vet Partner Chefs',
    description: 'Discover the interview, tasting, and background-check process behind every our chef.',
    image: '/images/how-we-vet-our-chefs-dubai-hero.webp',
    link: '/how-we-vet-our-chefs',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Chef Training Academy',
      'Practical chef training in Dubai for private dining: hands-on modules, food safety, plating, and halal and dietary competency.',
      'Educational Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Chef Training Academy', path: CANONICAL_PATH },
    ]),
  ],
}

export default function ChefTrainingAcademy() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ct-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ct-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ct-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ct-intro-text', {
      scrollTrigger: { trigger: '.ct-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.ct-inclusion-card', {
      scrollTrigger: { trigger: '.ct-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ct-package-card', {
      scrollTrigger: { trigger: '.ct-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.ct-faq-item', {
      scrollTrigger: { trigger: '.ct-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ct-rel-card', {
      scrollTrigger: { trigger: '.ct-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ct-cta', {
      scrollTrigger: { trigger: '.ct-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Chef Training Academy Dubai | Certified"
        description="Train with myCHEF Dubai's chef academy. Master private dining standards, food safety, plating, and halal competency for high-end home dining."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/how-we-vet-our-chefs-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/how-we-vet-our-chefs-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ct-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Chef Training Academy</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ct-hero-h1">
            Chef Training Academy
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ct-hero-sub">
            A practical academy for chefs who want to excel in private dining. Learn the standards that make myCHEF Dubai chefs trusted in the city&apos;s most distinguished homes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 ct-hero-cta">Apply to the Academy</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ct-hero-cta"
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
            ELEVATE YOUR CRAFT
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Training Built for Private Dining
          </h2>
          <div className="ct-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              Private dining is a different discipline from restaurant service. Our academy teaches the timing, presentation, and guest-service skills that turn a good cook into a confident private chef. Tell us about your experience and goals, and we will recommend the right programme and help you enrol for the next intake.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              You will learn how to design menus for real households, manage dietary requirements with confidence, plate under pressure, and run a villa kitchen from prep to final course. Instructors are experienced private-dining chefs who understand what families, hosts, and guests expect. Graduates who meet our standards are also invited to join the <Link to="/become-a-mychef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">myCHEF Dubai chef network</Link>.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Explore <Link to="/become-a-mychef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">joining the myCHEF chef network</Link>, <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">the vetting process</Link>, or <Link to="/mychef-certified" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">myCHEF certification</Link> to see how the academy connects to our platform.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="ct-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT IS INCLUDED
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Skills That Set You Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="ct-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="ct-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              ACADEMY PROGRAMMES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose Your Path
            </h2>
            <p className="font-inter text-body-sm text-gray-400 mt-3 max-w-[600px] mx-auto">
              Final quote is tailored to your chosen programme, schedule, and any add-on modules.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`ct-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
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
            Chef Training Questions
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

          <div className="ct-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ct-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center ct-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Begin Your Private Dining Journey
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Applications are open for the next intake. Tell us about your experience and goals, and we will recommend the right programme.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Apply to the Academy</Link>
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
