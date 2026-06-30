import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Baby,
  ShieldCheck,
  Apple,
  Soup,
  Sparkles,
  HeartHandshake,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss nursery catering in Dubai (via mychef.ae/nursery-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const nurseryFormats = [
  {
    icon: Soup,
    title: 'Soft, Age-Appropriate Meals',
    description: 'Gentle textures and small portions designed for toddlers and young children, prepared so that meals are easy to eat, enjoy, and digest.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: Apple,
    title: 'Balanced Nutrition',
    description: 'Wholesome menus built around fruit, vegetables, gentle proteins, and whole grains to support healthy growth and steady energy through the day.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: ShieldCheck,
    title: 'Allergen-Safe Preparation',
    description: 'Careful handling and clear labelling for common allergens, with safe alternatives arranged so every child can eat with confidence.',
    link: '/corporate',
  },
  {
    icon: Sparkles,
    title: 'Hygiene-First Standards',
    description: 'Meticulous food handling, preparation, and presentation, with hygiene treated as the foundation of catering for very young children.',
    link: '/corporate',
  },
  {
    icon: HeartHandshake,
    title: 'Halal & Dietary Options',
    description: 'Fully halal menus as standard, with vegetarian and other dietary options arranged so every family’s needs are respected and met.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: Baby,
    title: 'Daily Nursery Programmes',
    description: 'Consistent, freshly prepared daily meals and snacks scheduled around nap times and routines, with menus that gently rotate over the week.',
    link: '/school-catering-dubai',
  },
]

const useCases = [
  {
    title: 'Daily Meals & Snacks',
    description: 'For nurseries running a daily food service, we provide freshly prepared meals and snacks scheduled around the routines of young children, with soft textures, small portions, and gentle menus that rotate through the week.',
  },
  {
    title: 'Allergen & Safety Management',
    description: 'With very young children, allergen safety is paramount. We label clearly, handle common allergens with great care, and arrange safe alternatives, working closely with nurseries and families to make sure every child is protected.',
  },
  {
    title: 'Hygiene & Care Standards',
    description: 'Catering for toddlers demands the highest standards of hygiene. From preparation to presentation, we treat cleanliness and care as the foundation of everything, giving staff and parents complete peace of mind.',
  },
  {
    title: 'Family-Conscious Menus',
    description: 'Halal as standard, with vegetarian and dietary options on request, our menus respect the needs and preferences of every family while keeping nutrition and enjoyment at the heart of each meal.',
  },
]

const includedItems = [
  { title: 'Soft, Gentle Textures', description: 'Age-appropriate meals prepared for toddlers and young children.' },
  { title: 'Balanced Nutrition', description: 'Fruit, vegetables, gentle proteins, and whole grains for healthy growth.' },
  { title: 'Allergen-Safe Handling', description: 'Careful preparation and clear labelling for common allergens.' },
  { title: 'Halal as Standard', description: 'Fully halal menus with vegetarian and dietary options on request.' },
  { title: 'Hygiene-First Preparation', description: 'Meticulous food handling and cleanliness throughout.' },
  { title: 'Small, Suitable Portions', description: 'Portions sized appropriately for young appetites and routines.' },
  { title: 'Rotating Weekly Menus', description: 'Gently varied menus that keep daily meals fresh and appealing.' },
  { title: 'Routine-Friendly Scheduling', description: 'Meals and snacks timed around nap times and nursery routines.' },
]

const galleryImages = [
  { src: '/service-catering.jpg', alt: 'Soft, balanced nursery meal catering in Dubai' },
  { src: '/menu-appetizer.jpg', alt: 'Fresh fruit and gentle snacks for young children' },
  { src: '/service-corporate.jpg', alt: 'Nursery catering preparation set-up' },
  { src: '/service-events.jpg', alt: 'Catering service for a Dubai nursery' },
  { src: '/menu-seafood.jpg', alt: 'Nutritious gentle main course for toddlers' },
  { src: '/service-villa.jpg', alt: 'Wholesome catering for young children in Dubai' },
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
    q: 'Are your nursery meals suitable for very young children?',
    a: 'Yes. Our nursery menus use soft, age-appropriate textures and small portions designed for toddlers and young children, so meals are easy to eat, enjoy, and digest while still being balanced and nutritious.',
  },
  {
    q: 'How do you keep meals allergen-safe?',
    a: 'Allergen safety is a priority. We handle common allergens with great care, label clearly, and arrange safe alternatives, working closely with the nursery and families to make sure every child can eat with confidence.',
  },
  {
    q: 'What hygiene standards do you follow?',
    a: 'Hygiene is the foundation of our nursery catering. We maintain meticulous standards of food handling, preparation, and presentation throughout, giving staff and parents complete peace of mind.',
  },
  {
    q: 'Is the food halal, and can you handle dietary needs?',
    a: 'Yes. Our nursery menus are fully halal as standard, with vegetarian and other dietary options arranged on request so every family’s needs are respected and met.',
  },
  {
    q: 'Can you provide daily meals and snacks?',
    a: 'We can. We provide consistent, freshly prepared daily meals and snacks scheduled around nap times and nursery routines, with gently rotating menus that keep food fresh and appealing through the week.',
  },
  {
    q: 'How far in advance should we arrange nursery catering?',
    a: 'For ongoing daily programmes, we recommend setting things up before the term or intake begins so menus, allergen plans, and logistics are agreed in good time. Contact us and we will guide you through the process.',
  },
]

const relatedServices = [
  {
    title: 'School Catering',
    description: 'Nutritious, halal, allergen-aware lunch programmes for students.',
    image: '/service-catering.jpg',
    link: '/school-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional catering for staff, institutions, and group events.',
    image: '/service-corporate.jpg',
    link: '/corporate',
  },
  {
    title: 'Healthy Catering',
    description: 'Nutrition-focused, balanced menus for wellness-minded programmes.',
    image: '/menu-appetizer.jpg',
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
  name: 'Nursery Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Nursery Catering Dubai', item: 'https://mychef.ae/nursery-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function NurseryCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.nur-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.nur-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.nur-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.nur-fmt-card', {
      scrollTrigger: { trigger: '.nur-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.nur-uc-item', {
      scrollTrigger: { trigger: '.nur-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.nur-inc-item', {
      scrollTrigger: { trigger: '.nur-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.nur-gallery-img', {
      scrollTrigger: { trigger: '.nur-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.nur-faq-item', {
      scrollTrigger: { trigger: '.nur-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.nur-loc-item', {
      scrollTrigger: { trigger: '.nur-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.nur-rel-card', {
      scrollTrigger: { trigger: '.nur-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.nur-cta', {
      scrollTrigger: { trigger: '.nur-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Nursery Catering Dubai | Meals for Young Children"
        description="Nursery catering in Dubai with soft, balanced meals, allergen-safe preparation, halal menus, and hygiene-first standards for young children. Request your custom quote today."
        canonicalPath="/nursery-catering-dubai"
        ogImage="/service-catering.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-catering.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 nur-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Nursery Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 nur-hero-h1">
            Nursery Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 nur-hero-sub">
            Soft, balanced meals for young children across Dubai — allergen-safe, halal as standard, and prepared to hygiene-first standards that give staff and parents complete peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=nursery-catering-dubai" className="btn-primary opacity-0 translate-y-4 nur-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 nur-hero-cta"
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
            GENTLE NUTRITION FOR LITTLE ONES
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Meals Made for the Youngest Guests
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Catering for very young children calls for a particular kind of care. Textures need to be gentle, portions small, nutrition balanced, and every meal prepared with safety and hygiene treated as non-negotiable. At myCHEF Dubai, we approach nursery catering with exactly that mindset — building wholesome menus around the needs of toddlers and young children, and handling allergens, preparation, and presentation with the seriousness they deserve.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Our nursery menus are fully halal as standard, clearly labelled for allergens, and flexible enough to accommodate vegetarian and other dietary needs. From daily meals and snacks scheduled around nap times to gently rotating weekly menus, we support nurseries and the families they serve. Explore our nursery formats below, or see how it sits alongside our <Link to="/school-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">school catering in Dubai</Link> and wider <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">healthy catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              NURSERY CATERING FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Care in Every Meal
            </h2>
          </div>

          <div className="nur-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nurseryFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="nur-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
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
              HOW WE SUPPORT NURSERIES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Built Around Young Children
            </h2>
          </div>

          <div className="nur-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="nur-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Our Nursery Catering Includes
          </h2>

          <div className="nur-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="nur-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{item.description}</p>
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
            A Taste of Our Nursery Catering
          </h2>

          <div className="nur-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="nur-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-400 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Nursery Catering Questions
          </h2>

          <div className="nur-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="nur-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
                    <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{faq.a}</p>
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

          <div className="nur-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="nur-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="nur-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="nur-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-[#A3A3A3] mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
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
        <div className="container-custom text-center nur-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Nursery's Catering
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your nursery, your numbers, and any allergen or dietary requirements, and we'll design a soft, balanced, halal catering programme prepared with the care and hygiene young children deserve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=nursery-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
