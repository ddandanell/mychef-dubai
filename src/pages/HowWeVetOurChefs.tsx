import ServiceImage from '@/components/private-chef/ServiceImage'
import PageHero from '@/components/PageHero'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /how-we-vet-our-chefs
//     primary:     "private chef background checks dubai"
//     subkeywords: "are private chefs vetted dubai" · "private chef food safety dubai" · "are private chefs licensed in dubai" · "private chefs in dubai" · "personal chefs on offer in dubai" · "find a private chef" · "top personal chef services policies" · "find a personal chef"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  IdCard,
  ChefHat,
  ClipboardCheck,
  GraduationCap,
  CalendarCheck,
  TrendingUp,
  ShieldCheck,
  Users,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '../utils/schema'
import FaqAccordion from '../components/FaqAccordion'
import { SectionLabel } from '../components/system'

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to learn more about how you vet your chefs (via mychef.ae/how-we-vet-our-chefs)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const CANONICAL_PATH = '/how-we-vet-our-chefs'

const vetSteps = [
  {
    icon: IdCard,
    title: 'Identity and right to work',
    description: 'We ask to see government-issued identification, a valid UAE visa and the right-to-work document. We do not take a declaration on a form. A licensed supplier employs the chef; the checks are ours to run.',
  },
  {
    icon: ChefHat,
    title: 'A cooking assessment, not a CV',
    description: 'Every chef cooks in a kitchen we can watch. We look at hygiene, timing, how they handle a brief, and whether the food is right for a house rather than a restaurant pass. A CV is not enough.',
  },
  {
    icon: ClipboardCheck,
    title: 'References we actually call',
    description: 'We speak to previous employers, clients or venues. Gaps and concerns are investigated before anyone is sent into a home. Nothing on a chef’s record is invented, imported or guessed.',
  },
  {
    icon: GraduationCap,
    title: 'Food safety, not a badge on every profile',
    description: 'Safe handling, temperature control, cross-contamination and allergen practice are required. PIC (Person in Charge) is preferred. We do not claim every chef holds a named certificate.',
  },
  {
    icon: CalendarCheck,
    title: 'A supervised first visit',
    description: 'New chefs start on smaller or supervised bookings: a household lunch before a household plan, a small night before a large one. A first real visit tells us more than the cook-off.',
  },
  {
    icon: TrendingUp,
    title: 'The house scores the work',
    description: 'After visits we ask four questions: the service, the food, the person, and what would make next week better. Consistently strong work climbs a level. Steady holds. Below the standard drops a level. Well under, twice, and we stop sending that chef to homes. Safety is never a score. It is a stop.',
  },
]

const standards = [
  {
    title: 'Papers before the kitchen',
    description: 'No chef is sent until identity, visa and right-to-work documents are checked and recorded.',
  },
  {
    title: 'They cook before they enter a house',
    description: 'Theory is not enough. We watch real dishes, real timing and how they leave a kitchen.',
  },
  {
    title: 'References, not testimonials on a website',
    description: 'We speak to past employers or clients. We do not publish invented reviews.',
  },
  {
    title: 'Food safety sits beside flavour',
    description: 'Taste matters. Safe handling is what stops a booking. PIC is preferred; basic hygiene is required.',
  },
  {
    title: 'No chef is guaranteed work',
    description: 'Household plans and event nights are assigned on availability, skill fit and what the client needs. A chef holding Level 3 sees catering work first, because a person who holds a house together is who we want running an event.',
  },
]

const faqs = [
  {
    q: 'How do you verify your chefs?',
    a: 'We verify identity, UAE visa status and right-to-work documents. We ask to see them, not to be told about them. We also run a practical cooking assessment, reference checks, food-safety evaluation and a supervised first visit. A licensed supplier employs the chef; the checks are ours to run and ours to stand behind.',
  },
  {
    q: 'Are private chefs licensed in Dubai?',
    a: 'The chef is employed by a licensed supplier on a proper visa. We are not the employer. We match the person, run the checks, score the work and stand behind the booking.',
  },
  {
    q: 'Do you check references for every chef?',
    a: 'Yes. We contact previous employers or clients. A CV is not enough.',
  },
  {
    q: 'What happens on a new chef’s first bookings?',
    a: 'New chefs are assigned to smaller or supervised visits: a household lunch before a household plan, a small night before a large one. We look at punctuality, presentation and how they are with the people in the room before anything high-stakes.',
  },
  {
    q: 'Is a named chef guaranteed?',
    a: 'No. We match the brief to the best available chef. If a preferred chef is unavailable, we propose a replacement who fits the cuisine, the house and the date.',
  },
  {
    q: 'How do you keep the standard after the first visit?',
    a: 'The household scores the service, the food, the person and what would make next week better. Consistently strong work climbs a level. Below the standard drops a level. Well under, twice, and we stop sending that chef to homes. Safety is a stop, not a score.',
  },
]

const relatedServices = [
  {
    title: 'Our Chefs',
    description: 'Meet the experienced chefs behind myCHEF Dubai.',
    image: '/images/private-chef-2026/household-1200.webp',
    link: '/our-chefs',
  },
  {
    title: 'Become a myCHEF',
    description: 'Experienced private chef? Apply to join our trusted network.',
    image: '/images/private-chef-2026/craft-1200.webp',
    link: '/become-a-mychef',
  },
  {
    title: 'Booking Protection',
    description: 'Learn how we protect your booking with backup chefs and clear policies.',
    image: '/images/private-chef-2026/craft-1200.webp',
    link: '/booking-protection-insurance',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    serviceSchema(
      'How We Vet the Chefs in Our Network',
      'Learn how myCHEF Dubai vets private chefs through identity checks, skill assessments, reference verification, food-safety training, trial events, and ongoing reviews.',
      'Informational Service',
      'Dubai',
    ),
    faqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'How We Vet the Chefs in Our Network', path: CANONICAL_PATH },
    ]),
  ],
}

export default function HowWeVetOurChefs() {
  useScrollTrigger()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return




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
        title="Private Chef Background Checks Dubai | myCHEF"
        description="Private chef background checks in Dubai: identity, right to work, a cooking assessment, references, then a supervised first visit. A CV is not enough."
        canonicalPath={CANONICAL_PATH}
        ogImage="/images/private-chef-2026/craft-1200.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero eyebrow="MYCHEF · DUBAI" title="Private Chef Background Checks Dubai. Know who enters your kitchen." subtitle="Our selection process covers identity and right-to-work documents, practical cooking ability, references and food hygiene awareness, followed by service review." cta={{label:"Plan with myCHEF",href:"/inquiry?from=HowWeVetOurChefs"}} secondaryCta={{label:"Explore experiences",href:"/luxury-dining-experiences"}}/>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">WHO COOKS IN THE HOUSE</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Private chef background checks Dubai before anyone enters
          </h2>
          <div className="vet-intro-text opacity-0 translate-y-8">
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A chef’s work in a private home involves discretion, reliability and respect as well as cooking. We assess those qualities alongside practical ability and references, so the match reflects the needs of your household and guests.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              A licensed supplier employs the chef on a proper visa. We match the person to the house, run the checks, score the work and stand behind the booking. We are not an agency that hands you a stack of CVs and disappears. We are not the employer either.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
              No system removes every risk. No chef is guaranteed work. We match the brief to the person who is available and right for it. If the match is wrong, we change the chef. The Food Profile stays with the household so the next visit is not a restart.
            </p>
            <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
              Also read <Link to="/booking-protection-insurance" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how a booking is protected</Link>, <Link to="/our-chefs" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">who cooks</Link>, or <Link to="/become-a-mychef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">how chefs apply</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: Vetting Steps ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">THE CHECKS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              What we check before a chef represents myCHEF
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
            <SectionLabel align="center" tone="dark">WHAT THIS IS NOT</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Vetting is a loop, not a badge
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
                <h3 className="font-playfair text-h4 text-white mb-2">No chef is guaranteed</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                  We do not promise any chef a fixed schedule. Work is assigned on availability, skill fit and what the client needs. If a preferred chef is unavailable, we propose a replacement who matches the cuisine, the house and the date.
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
            Private Chef Background Checks Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
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
                  <ServiceImage
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
        <div className="container-custom text-center vet-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book with Confidence
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Every myCHEF Dubai chef is verified, assessed, and reviewed. Tell us about your event and we will bring you the right chef.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={`/inquiry`} className="btn-primary">Request a quote</Link>
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
