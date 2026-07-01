import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  IdCard,
  ChefHat,
  ClipboardCheck,
  GraduationCap,
  CalendarCheck,
  TrendingUp,
  ShieldCheck,
  Users,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn more about how you vet your chefs (via mychef.ae/how-we-vet-our-chefs)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/how-we-vet-our-chefs'
const CAMPAIGN = 'how-we-vet-our-chefs'

const vetSteps = [
  {
    icon: IdCard,
    title: 'Identity & Right-to-Work Checks',
    description: 'Before any chef joins our network, we verify government-issued identification, valid UAE visa status, and right-to-work documentation. We do not accept chefs who cannot prove they are legally permitted to work in the UAE.',
  },
  {
    icon: ChefHat,
    title: 'In-Person Skill Assessment',
    description: 'Every chef completes a practical cook-off in a controlled kitchen environment. We evaluate knife skills, hygiene habits, plating precision, time management, and the ability to cook multiple dishes simultaneously under pressure.',
  },
  {
    icon: ClipboardCheck,
    title: 'Reference Checks',
    description: 'We contact previous employers, clients, or hospitality venues to confirm employment history, reliability, professionalism, and quality of output. Gaps or concerns are investigated before approval.',
  },
  {
    icon: GraduationCap,
    title: 'Food Safety Training',
    description: 'Chefs must demonstrate knowledge of safe food handling, temperature control, cross-contamination prevention, and allergen management. PIC (Person in Charge) certification is preferred; basic food hygiene awareness is mandatory.',
  },
  {
    icon: CalendarCheck,
    title: 'Trial Event Period',
    description: 'New chefs begin with supervised trial events or smaller bookings. This lets us observe how they perform in real homes, villas, and venues before assigning high-stakes events independently.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Performance Reviews',
    description: 'Vetting does not stop at onboarding. We collect client feedback after every event, monitor punctuality and presentation, and remove chefs from the network if standards slip.',
  },
]

const standards = [
  {
    title: 'Legal Verification First',
    description: 'No chef is activated until identity, visa, and right-to-work documents are checked and recorded.',
  },
  {
    title: 'Practical Cooking Assessment',
    description: 'Theory alone is not enough. We assess each chef on real dishes, real timing, and real presentation.',
  },
  {
    title: 'Verified References',
    description: 'We speak directly to past employers or clients rather than relying on CV claims.',
  },
  {
    title: 'Food Safety, Not Just Flavour',
    description: 'Taste matters, but so does safe handling. Every chef must demonstrate hygiene discipline before working with clients.',
  },
  {
    title: 'No Guaranteed Placement',
    description: 'We do not guarantee any chef a specific number of events. Work is assigned based on availability, skill fit, and client requirements.',
  },
]

const faqs = [
  {
    q: 'How do you verify your chefs?',
    a: 'We verify identity, UAE visa status, and right-to-work documents. We also conduct practical skill assessments, reference checks, food-safety evaluations, and supervised trial events.',
  },
  {
    q: 'Are all your chefs HACCP certified?',
    a: 'We do not claim that every chef holds HACCP certification. We require basic food-hygiene awareness and safe handling practices. PIC (Person in Charge) certification is preferred where available.',
  },
  {
    q: 'Do you check references for every chef?',
    a: 'Yes. Reference checks are a mandatory part of our vetting process. We contact previous employers or clients to confirm skills, reliability, and professionalism.',
  },
  {
    q: 'What happens during the trial event?',
    a: 'New chefs are assigned to smaller or supervised events so we can observe their real-world performance, punctuality, presentation, and client interaction before larger bookings.',
  },
  {
    q: 'Is a specific chef guaranteed for my event?',
    a: 'No. We match each event to the best available chef based on cuisine expertise, availability, location, and event requirements. If your preferred chef is unavailable, we propose a suitable replacement.',
  },
  {
    q: 'How do you maintain quality over time?',
    a: 'We collect client feedback after every event, monitor punctuality and presentation, and remove chefs from the network if performance falls below our standards.',
  },
]

const relatedServices = [
  {
    title: 'Our Chefs',
    description: 'Meet the experienced chefs behind myCHEF Dubai.',
    image: '/service-private-chef.webp',
    link: '/our-chefs',
  },
  {
    title: 'Become a myCHEF',
    description: 'Experienced private chef? Apply to join our trusted network.',
    image: '/images/become-a-mychef-dubai-hero.webp',
    link: '/become-a-mychef',
  },
  {
    title: 'Booking Protection',
    description: 'Learn how we protect your booking with backup chefs and clear policies.',
    image: '/images/booking-protection-insurance-dubai-hero.webp',
    link: '/booking-protection-insurance',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'How We Vet Our Chefs',
      'Learn how myCHEF Dubai vets private chefs through identity checks, skill assessments, reference verification, food-safety training, trial events, and ongoing reviews.',
      'Informational Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'How We Vet Our Chefs', path: CANONICAL_PATH },
    ]),
  ],
}

export default function HowWeVetOurChefs() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.vet-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.vet-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.vet-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.vet-intro-text', {
      scrollTrigger: { trigger: '.vet-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.vet-step-item', {
      scrollTrigger: { trigger: '.vet-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.vet-standard-item', {
      scrollTrigger: { trigger: '.vet-standards', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.vet-faq-item', {
      scrollTrigger: { trigger: '.vet-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.vet-rel-card', {
      scrollTrigger: { trigger: '.vet-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.vet-cta', {
      scrollTrigger: { trigger: '.vet-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="How We Vet Our Chefs | Trust & Safety"
        description="See how myCHEF Dubai vets private chefs: ID checks, skill assessments, references, food-safety training, trial events, and ongoing reviews. No chef is guaranteed."
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
          <nav className="mb-6 opacity-0 translate-y-4 vet-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">How We Vet Our Chefs</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 vet-hero-h1">
            How We Vet Our Private Chefs in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 vet-hero-sub">
            Trust begins with rigorous standards. Every chef in the myCHEF Dubai network passes identity checks, practical assessments, reference verification, and ongoing performance reviews.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary opacity-0 translate-y-4 vet-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 vet-hero-cta"
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
            TRUST & TRANSPARENCY
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Standards You Can See
          </h2>
          <div className="vet-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              When you invite a private chef into your home, villa, or yacht, you are trusting more than their cooking. You are trusting their professionalism, their hygiene habits, their punctuality, and their judgment around your family, guests, and property. That is why myCHEF Dubai does not treat vetting as a one-time checkbox. It is a continuous process built around verification, assessment, reference checks, and real-world observation.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              We are also honest about what vetting means. No system can eliminate every risk, and no chef is automatically guaranteed work. We match each event to the best available chef based on cuisine expertise, availability, and client requirements. Our commitment is that every chef who represents myCHEF Dubai has met the standards below — and continues to meet them through regular feedback and review.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              If you are considering a private chef for your next event, you may also want to read about <Link to="/booking-protection-insurance" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">booking protection and insurance</Link>, meet our <Link to="/our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">featured chefs</Link>, or see how to <Link to="/become-a-mychef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">join our chef network</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Vetting Steps ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              THE VETTING PROCESS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Six Layers of Verification
            </h2>
          </div>

          <div className="vet-steps grid md:grid-cols-2 gap-6">
            {vetSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="vet-step-item bg-white p-8 opacity-0 translate-y-10">
                  <Icon size={32} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{step.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Standards ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              OUR COMMITMENT
            </span>
            <h2 className="font-playfair text-h2 text-white">
              What Vetting Means at myCHEF Dubai
            </h2>
          </div>

          <div className="vet-standards space-y-4">
            {standards.map((item, i) => (
              <div key={i} className="vet-standard-item flex gap-4 bg-charcoal p-6 opacity-0 translate-y-8">
                <ShieldCheck size={24} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-playfair text-h4 text-white mb-2">{item.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-charcoal p-8 border-l-4 border-gold">
            <div className="flex items-start gap-4">
              <Users size={28} className="text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-playfair text-h4 text-white mb-2">No Chef Is Guaranteed</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                  We do not promise any chef a fixed schedule or a specific number of events. Work is assigned based on availability, skill fit, and client needs. If your preferred chef is unavailable, we will propose a replacement who matches your cuisine, event size, and location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Chef Vetting Questions
          </h2>

          <div className="vet-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="vet-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            You May Also Like
          </h3>

          <div className="vet-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="vet-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center vet-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book with Confidence
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Every myCHEF Dubai chef is verified, assessed, and reviewed. Tell us about your event and we will match you with the right chef.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=${CAMPAIGN}`} className="btn-primary">Request a Proposal</Link>
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
