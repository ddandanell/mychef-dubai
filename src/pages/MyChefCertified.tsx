// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /mychef-certified
//     primary:     "mychef certified chefs"
//     subkeywords: "certified private chefs dubai" · "verified private chef dubai" · "personal chefs in dubai" · "how much do private chefs charge" · "the chefs table private chef and catering"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  ChefHat,
  ShieldCheck,
  Utensils,
  Award,
  Phone,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to know more about MyChef Certified (via mychef.ae/mychef-certified)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/mychef-certified'

const inclusions = [
  {
    icon: ChefHat,
    title: 'In-Person Audition',
    description: 'Every chef prepares a live tasting menu for our evaluation panel. We assess technique, presentation, flavour balance, and the ability to cook under real event conditions.',
  },
  {
    icon: ShieldCheck,
    title: 'Background Verification',
    description: 'We verify identity, work history, and professional references before a chef is approved. Only vetted professionals are introduced to myCHEF Dubai clients.',
  },
  {
    icon: Utensils,
    title: 'Food-Safety Check',
    description: 'Chefs must demonstrate current food-safety knowledge, safe handling practices, allergen awareness, and clean kitchen discipline before they receive any certification level.',
  },
  {
    icon: Award,
    title: 'Halal Competency',
    description: 'We evaluate each chef\'s understanding of halal principles, cross-contamination risks, and alcohol-free cooking so they can serve Dubai\'s diverse households with confidence.',
  },
]

const packages = [
  {
    name: 'Standard Certification',
    price: 'Entry Level',
    description: 'For chefs starting their private-dining journey with myCHEF Dubai.',
    features: [
      'In-person culinary audition',
      'Identity verification',
      'Food safety knowledge review',
      'Halal awareness check',
      'Platform standards briefing',
    ],
  },
  {
    name: 'Premium Certification',
    price: 'Advanced Level',
    description: 'For experienced chefs ready to deliver elevated home dining and events.',
    features: [
      'Enhanced practical skills assessment',
      'Verified professional kitchen experience',
      'Current food safety credential review',
      'Halal competency evaluation',
      'Service and communication review',
    ],
    highlighted: true,
  },
  {
    name: 'Master Certification',
    price: 'Expert Level',
    description: 'For senior chefs capable of leading complex menus and high-end experiences.',
    features: [
      'Master-level practical examination',
      'Extensive private-dining experience review',
      'Advanced allergen and food safety validation',
      'Specialist halal and dietary verification',
      'Peer and client feedback review',
    ],
  },
]

const faqs = [
  {
    q: 'What does MyChef Certified mean?',
    a: 'MyChef Certified is our internal quality standard. It means a chef has passed our in-person audition, background verification, food-safety review, and halal-competency screening before being matched with clients.',
  },
  {
    q: 'How often is certification renewed?',
    a: 'Certification is reviewed on a rolling basis. We check credentials, refresh food-safety awareness, and evaluate recent client feedback to ensure every chef continues to meet our standards.',
  },
  {
    q: 'What fails a chef during certification?',
    a: 'A chef may not pass if we find inconsistencies in their background, unsafe food-handling practices, poor tasting results, inability to follow dietary requirements, or unprofessional communication.',
  },
  {
    q: 'Do all chefs meet food safety standards?',
    a: 'Every chef on our platform must demonstrate food-safety knowledge and safe handling practices. We do not onboard chefs who cannot meet this baseline requirement.',
  },
  {
    q: 'How is halal competency verified?',
    a: 'We assess each chef\'s practical understanding of halal preparation, ingredient sourcing, and cross-contamination prevention. This helps us match chefs appropriately with households that observe halal requirements.',
  },
  {
    q: 'How much do private chefs charge?',
    a: 'There is no single number for how much do private chefs charge: guest count, menu, service style and staffing move the figure. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
]

const relatedServices = [
  {
    title: 'How We Vet Partner Chefs',
    description: 'The full myCHEF Dubai vetting process: auditions, checks, and ongoing quality control for every our chef.',
    image: '/images/how-we-vet-our-chefs-dubai-hero.webp',
    link: '/how-we-vet-our-chefs',
  },
  {
    title: 'Become a myCHEF',
    description: 'Are you a chef? Apply to join our platform and work with private clients across Dubai.',
    image: '/images/become-a-mychef-dubai-hero.webp',
    link: '/become-a-mychef',
  },
  {
    title: 'Private Chef Dubai',
    description: 'Book a MyChef Certified private chef for dinner parties, weekly meals, and special occasions.',
    image: '/images/private-chef-dubai-hero.webp',
    link: '/private-chef-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'MyChef Certified',
      'MyChef Certified chef vetting in Dubai: in-person auditions, background checks, food-safety verification, and halal-competency screening for private chefs.',
      'ProfessionalService',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'MyChef Certified', path: CANONICAL_PATH },
    ]),
  ],
}

export default function MyChefCertified() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.mc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.mc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.mc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.mc-intro-text', {
      scrollTrigger: { trigger: '.mc-intro-text', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.mc-inclusion-card', {
      scrollTrigger: { trigger: '.mc-inclusions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.mc-package-card', {
      scrollTrigger: { trigger: '.mc-packages', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.mc-faq-item', {
      scrollTrigger: { trigger: '.mc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.mc-rel-card', {
      scrollTrigger: { trigger: '.mc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.mc-cta', {
      scrollTrigger: { trigger: '.mc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="MyChef Certified Chefs Dubai | Quality"
        description="Only MyChef Certified chefs make it to your table. Learn our audition, background-check, food-safety and halal competency standards for Dubai."
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
          <nav className="mb-6 opacity-0 translate-y-4 mc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">MyChef Certified</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 mc-hero-h1">
            myCHEF Certified Chefs
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 mc-hero-sub">
            A certification that means something. Every chef on our platform passes in-person auditions, background checks, food-safety verification, and halal-competency screening.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary opacity-0 translate-y-4 mc-hero-cta">Book a Certified Chef</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 mc-hero-cta"
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
          <SectionLabel align="center">TRUST BUILT IN, NOT ADDED ON</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Standard You Can Taste
          </h2>
          <div className="mc-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              MyChef Certified means every chef we send to your home, villa, or yacht in Dubai has passed in-person auditions, background checks, food-safety verification, and halal-competency screening. Tell us about your event and we will bring you a vetted chef within 24 hours.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              From the first tasting to the final reference check, we look for chefs who combine technical skill with professionalism, discretion, and respect for the dietary and cultural expectations that matter in this city.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Read more about <Link to="/how-we-vet-our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how we vet partner chefs</Link>, <Link to="/become-a-mychef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">apply as a chef</Link>, or <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">book a private chef</Link> for your next occasion.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Inclusions ═══════════════ */}
      <section className="mc-inclusions bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WHAT IS INCLUDED</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Four Pillars of Certification
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {inclusions.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="mc-inclusion-card bg-white p-8 opacity-0 translate-y-10">
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
      <section className="mc-packages bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">CERTIFICATION LEVELS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Chef Qualification Tiers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`mc-package-card relative p-8 opacity-0 translate-y-10 ${pkg.highlighted ? 'bg-charcoal border-2 border-gold text-white' : 'bg-charcoal text-white'}`}
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
          <p className="font-inter text-body-sm text-gray-400 text-center mt-8 max-w-[600px] mx-auto">
            Certification scope and timeline are tailored to each chef's experience. Final details confirmed after application review.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 5: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            myCHEF Certified Chefs: the questions we get before a booking
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

          <div className="mc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="mc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center mc-cta opacity-0 translate-y-8">
          <Sparkles size={48} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book with Confidence
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Every myCHEF Dubai chef is MyChef Certified. Tell us about your event and we will bring you a chef who has already earned our trust.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Book a Certified Chef</Link>
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
