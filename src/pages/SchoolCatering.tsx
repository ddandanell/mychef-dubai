import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  GraduationCap,
  Apple,
  ShieldCheck,
  CalendarDays,
  Leaf,
  Soup,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss school catering in Dubai (via mychef.ae/school-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const schoolFormats = [
  {
    icon: Soup,
    title: 'Daily Hot Lunch Programmes',
    description: 'Freshly prepared hot lunches delivered on a daily schedule, with rotating menus that keep students looking forward to mealtimes throughout the term.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: Apple,
    title: 'Balanced, Nutritious Menus',
    description: 'Menus built around balance — lean proteins, whole grains, vegetables, and fruit — designed to support concentration, energy, and healthy growth.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: ShieldCheck,
    title: 'Allergen-Aware Service',
    description: 'Clear allergen labelling and careful preparation for common allergens, with alternatives arranged so children with dietary requirements are looked after.',
    link: '/corporate',
  },
  {
    icon: Leaf,
    title: 'Halal & Dietary Options',
    description: 'Fully halal menus as standard, with vegetarian and other dietary options available so every student has a suitable, satisfying meal each day.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: GraduationCap,
    title: 'School Events & Functions',
    description: 'Catering for sports days, parent evenings, graduations, and staff gatherings, from light refreshments to full buffets across the school calendar.',
    link: '/catering-dubai',
  },
  {
    icon: CalendarDays,
    title: 'Flexible Term Scheduling',
    description: 'Programmes that flex with the academic calendar and changing numbers, from full-term daily catering to one-off event days when you need them.',
    link: '/corporate',
  },
]

const useCases = [
  {
    title: 'Daily Student Lunches',
    description: 'For schools running a daily meal service, we provide freshly prepared, balanced lunches on a consistent schedule, with rotating menus that keep students engaged and nourished through the full school day.',
  },
  {
    title: 'Allergen & Dietary Management',
    description: 'We work closely with schools to manage allergens and dietary needs, with clear labelling, careful preparation, and suitable alternatives so children with allergies, intolerances, or specific requirements are safely catered for.',
  },
  {
    title: 'School Events & Parent Days',
    description: 'From sports days and open mornings to parent evenings and graduation ceremonies, we cater the full range of school occasions with refreshments, buffets, and styled catering that suits the audience and the moment.',
  },
  {
    title: 'Staff & Faculty Catering',
    description: 'Teachers and staff deserve good food too. We provide working lunches, staff-room catering, and refreshments for training days and meetings, keeping faculty fuelled across busy terms.',
  },
]

const includedItems = [
  { title: 'Balanced Daily Menus', description: 'Nutritious lunches built on proteins, whole grains, vegetables, and fruit.' },
  { title: 'Halal as Standard', description: 'Fully halal menus prepared to give every student a suitable meal.' },
  { title: 'Allergen Awareness', description: 'Clear labelling and careful handling for common allergens.' },
  { title: 'Dietary Alternatives', description: 'Vegetarian and other options arranged for specific requirements.' },
  { title: 'Rotating Menu Cycles', description: 'Varied menu rotations that keep daily lunches fresh and appealing.' },
  { title: 'Hygiene-First Preparation', description: 'Careful food handling and preparation standards throughout.' },
  { title: 'Event & Function Catering', description: 'Refreshments and buffets for sports days, parent evenings, and more.' },
  { title: 'Flexible Term Programmes', description: 'Scheduling that flexes with the academic calendar and numbers.' },
]

const galleryImages = [
  { src: '/service-catering.webp', alt: 'Balanced school lunch catering buffet in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Fresh fruit and healthy starters for students' },
  { src: '/service-corporate.webp', alt: 'School event catering set-up' },
  { src: '/service-events.webp', alt: 'Catering for a school function in Dubai' },
  { src: '/menu-seafood.webp', alt: 'Nutritious main course for a school menu' },
  { src: '/service-villa.webp', alt: 'Catering service for a Dubai school' },
]

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
  { name: 'DIFC', slug: 'difc' },
  { name: 'Business Bay', slug: 'business-bay' },
  { name: 'Jumeirah', slug: 'jumeirah' },
  { name: 'Arabian Ranches', slug: 'arabian-ranches' },
  { name: 'Dubai Hills', slug: 'dubai-hills' },
  { name: 'Bluewaters Island', slug: 'bluewaters-island' },
  { name: 'Jumeirah Islands', slug: 'jumeirah-islands' },
  { name: 'Al Barari', slug: 'al-barari' },
  { name: 'Umm Suqeim', slug: 'umm-suqeim' },
  { name: 'Meydan', slug: 'meydan' },
  { name: 'Dubai Creek Harbour', slug: 'dubai-creek-harbour' },
]

const faqs = [
  {
    q: 'Are your school menus nutritious and balanced?',
    a: 'Yes. Our school menus are built around balance — lean proteins, whole grains, vegetables, and fruit — to support concentration, energy, and healthy growth. We focus on food that children genuinely enjoy while keeping nutrition front of mind.',
  },
  {
    q: 'How do you handle allergens and dietary needs?',
    a: 'We take allergens seriously. Menus are clearly labelled, common allergens are handled with care, and we arrange suitable alternatives for children with allergies, intolerances, or specific dietary requirements. We work closely with the school to get this right.',
  },
  {
    q: 'Is the food halal?',
    a: 'Yes. Our school menus are fully halal as standard, with vegetarian and other dietary options available so every student has a suitable, satisfying meal each day.',
  },
  {
    q: 'Can you cater school events as well as daily lunches?',
    a: 'Absolutely. Alongside daily lunch programmes, we cater sports days, parent evenings, open mornings, graduations, and staff functions, with refreshments and buffets tailored to the occasion.',
  },
  {
    q: 'Can the programme flex with the school calendar?',
    a: 'Yes. We design programmes around the academic calendar and changing numbers, from full-term daily catering to one-off event days, adjusting as your schedule and requirements change.',
  },
  {
    q: 'How far in advance should we arrange school catering?',
    a: 'For ongoing term programmes, we recommend setting up well before the term begins so menus and logistics are agreed in good time. For individual events, a few weeks of notice lets us plan around the day.',
  },
]

const relatedServices = [
  {
    title: 'Nursery Catering',
    description: 'Soft, allergen-safe menus and careful hygiene for young children.',
    image: '/service-catering.webp',
    link: '/nursery-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional catering for staff, faculty, and institutional events.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
  {
    title: 'Healthy Catering',
    description: 'Nutrition-focused, balanced menus for wellness-minded programmes.',
    image: '/menu-appetizer.webp',
    link: '/healthy-catering-dubai',
  },
]

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceSchema = {
  '@type': 'Service',
  name: 'School Catering Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'School Catering Dubai', item: 'https://mychef.ae/school-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function SchoolCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.sch-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.sch-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.sch-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.sch-fmt-card', {
      scrollTrigger: { trigger: '.sch-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.sch-uc-item', {
      scrollTrigger: { trigger: '.sch-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.sch-inc-item', {
      scrollTrigger: { trigger: '.sch-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.sch-gallery-img', {
      scrollTrigger: { trigger: '.sch-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.sch-faq-item', {
      scrollTrigger: { trigger: '.sch-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.sch-loc-item', {
      scrollTrigger: { trigger: '.sch-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.sch-rel-card', {
      scrollTrigger: { trigger: '.sch-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.sch-cta', {
      scrollTrigger: { trigger: '.sch-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="School Catering Dubai | Nutritious Student Meals"
        description="School catering in Dubai with nutritious, balanced student lunches, halal menus, allergen-aware service, and daily programmes. Request your custom quote today."
        canonicalPath="/school-catering-dubai"
        ogImage="/service-catering.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/staff-meals-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 sch-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">School Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 sch-hero-h1">
            School Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 sch-hero-sub">
            Nutritious, balanced student meals across Dubai — halal as standard, allergen-aware, and delivered through reliable daily programmes that support healthy, focused learning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=school-catering-dubai" className="btn-primary opacity-0 translate-y-4 sch-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 sch-hero-cta"
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
            NOURISHING YOUNG LEARNERS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Meals That Support Healthy Learning
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            What children eat during the school day shapes how they learn, concentrate, and grow. A balanced, nutritious lunch helps students stay focused through the afternoon and builds healthy habits that last. At myCHEF Dubai, we approach school catering with that responsibility in mind — designing menus around nutrition, presented in a way that children actually enjoy, and prepared with hygiene and allergen awareness at the centre of everything we do.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Our menus are fully halal as standard, clearly labelled for allergens, and flexible enough to accommodate vegetarian and other dietary needs. From daily lunch programmes to sports days, parent evenings, and staff functions, we support the whole school community. Explore our school formats below, or see how it sits within our wider <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">healthy catering in Dubai</Link> and the option of <Link to="/nursery-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">nursery catering</Link> for younger children.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SCHOOL CATERING FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering for the Whole School
            </h2>
          </div>

          <div className="sch-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="sch-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Use Cases ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HOW WE SUPPORT SCHOOLS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built for the School Community
            </h2>
          </div>

          <div className="sch-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="sch-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Our School Catering Includes
          </h2>

          <div className="sch-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="sch-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            A Taste of Our School Catering
          </h2>

          <div className="sch-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="sch-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            School Catering Questions
          </h2>

          <div className="sch-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="sch-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="sch-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="sch-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="sch-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="sch-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center sch-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your School's Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your school, your numbers, and any dietary requirements, and we'll design a nutritious, halal, allergen-aware catering programme that supports every student through the school day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=school-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
