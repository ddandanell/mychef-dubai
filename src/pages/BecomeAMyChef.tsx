import { useState } from 'react'
import { Link } from 'react-router'
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
  MessageCircle,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
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
    title: 'Apply on WhatsApp',
    description: 'Send us a message with your experience, cuisines, visa status, certifications, and portfolio or CV link. We review every application personally.',
  },
  {
    num: '02',
    title: 'Document Review',
    description: 'We review your experience, check your right-to-work documents, and verify references or portfolio samples.',
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
    q: 'Do I need food-safety-certified (partner-held) certification?',
    a: 'food-safety-certified (partner-held) is not mandatory, but food-hygiene awareness and safe handling practices are required. PIC (Person in Charge) certification is preferred.',
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
    title: 'How We Vet the Chefs in Our Network',
    description: 'Understand the verification and assessment process every chef completes.',
    image: '/images/how-we-vet-our-chefs-dubai-hero.webp',
    link: '/how-we-vet-our-chefs',
  },
  {
    title: 'The Chefs in Our Network',
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

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'Become a myCHEF',
      'Join the myCHEF Dubai private chef network. Experienced chefs, pastry chefs, and event chefs can apply via WhatsApp. Flexible events across Dubai.',
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
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
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
  })

  return (
    <div>
      <SEO
        title="Become a myCHEF | Private Chef Jobs Dubai"
        description="Join the myCHEF Dubai private chef network. Experienced chefs, pastry chefs, and event chefs can apply via WhatsApp. Flexible events across Dubai."
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
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary opacity-0 translate-y-4 bmc-hero-cta inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Apply on WhatsApp
            </a>
            <a
              href="mailto:hallo@mychef.ae"
              className="btn-secondary opacity-0 translate-y-4 bmc-hero-cta inline-flex items-center gap-2"
            >
              Email Instead
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

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
              Read on to see our requirements, the application process, and what makes a strong candidate. You can also review <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how we vet the chefs in our network</Link> or explore the <Link to="/our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">chefs already in our network</Link>.
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

      {/* ═══════════════ Section 6: WhatsApp Application CTA ═══════════════ */}
      <section id="chef-application-form" className="bmc-form-section bg-cream section-padding">
        <div className="container-custom max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-y-12 lg:gap-x-12">
            <div className="bmc-form-left">
              <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3 block">CHEF APPLICATION</span>
              <h2 className="font-playfair text-fluid-h2 text-black mb-2" style={{ lineHeight: '1.15' }}>
                Apply to Become a myCHEF
              </h2>
              <p className="font-inter text-body text-gray-500 mb-8">
                Tap the button below and send us your details on WhatsApp. Include your experience, cuisines, visa status, certifications, and a link to your portfolio or CV — the more detail, the faster we can assess your fit.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Apply on WhatsApp
              </a>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span className="font-inter text-body-sm text-gray-500">Response within 2–3 business days.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span className="font-inter text-body-sm text-gray-500">No account or app download needed — just WhatsApp.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={16} className="text-gold mt-1 flex-shrink-0" />
                  <span className="font-inter text-body-sm text-gray-500">Prefer email? Send your CV to <a href="mailto:hallo@mychef.ae" className="text-gold hover:text-gold-light underline underline-offset-4">hallo@mychef.ae</a>.</span>
                </div>
              </div>
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
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-playfair text-h4 text-black pr-4">{faq.q}</span>
                  <ChevronRight
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="font-inter text-body text-gray-500 px-5 pb-5 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Related Pages ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-h2 text-white text-center mb-10">
            You Might Also Like
          </h2>
          <div className="bmc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bmc-rel-card group block bg-charcoal overflow-hidden opacity-0 translate-y-8"
              >
                <div className="aspect-[16/10] overflow-hidden">
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
            Take the first step toward cooking with myCHEF Dubai. Send your application on WhatsApp and the chefs in our network will be in touch within 2–3 business days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Apply on WhatsApp
            </a>
            <a
              href="mailto:hallo@mychef.ae"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Email Instead
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
