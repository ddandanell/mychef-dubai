import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Package,
  Repeat,
  HeartPulse,
  Salad,
  CalendarClock,
  Building2,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to set up a corporate meal prep programme in Dubai (via mychef.ae/corporate-meal-prep-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const mealPrepFormats = [
  {
    icon: Package,
    title: 'Portioned Meal Boxes',
    description: 'Individually portioned, freshly prepared meals delivered ready to serve or store, designed for consistency across teams of any size.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: Repeat,
    title: 'Recurring Programmes',
    description: 'Weekly and monthly meal schedules on a reliable rotation, so your people always know good food is arriving without any organising on their part.',
    link: '/office-catering-dubai',
  },
  {
    icon: HeartPulse,
    title: 'Wellness Retainers',
    description: 'Ongoing wellness-focused menus on a retainer basis, pairing balanced nutrition with the convenience of a managed, repeatable service.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: Salad,
    title: 'Balanced & Dietary Menus',
    description: 'Nutrition-led menus with low-carb, high-protein, vegetarian, and other options, prepared side by side so every preference is covered.',
    link: '/healthy-catering-dubai',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Scheduling',
    description: 'Programmes that flex with headcount, office days, and changing needs, scaling up or down without disrupting the routine you rely on.',
    link: '/corporate',
  },
  {
    icon: Building2,
    title: 'Office & Workplace Delivery',
    description: 'Coordinated delivery to offices and workplaces across Dubai, timed around your working day and set up with minimal disruption.',
    link: '/office-catering-dubai',
  },
]

const useCases = [
  {
    title: 'Recurring Team Meal Plans',
    description: 'For companies that want their people fed well without the daily logistics, we run recurring meal programmes — weekly or monthly — delivering individually portioned, balanced meals on a dependable schedule that simply runs in the background.',
  },
  {
    title: 'Corporate Wellness Retainers',
    description: 'For organisations investing in employee wellbeing, our wellness retainers provide ongoing nutrition-focused menus on a managed basis, keeping balanced food a consistent part of the working week rather than a one-off initiative.',
  },
  {
    title: 'Hybrid & Office-Day Programmes',
    description: 'For hybrid teams, we align meal prep with office days and changing headcounts, scaling portions to who is in and keeping the programme efficient, predictable, and easy to manage.',
  },
  {
    title: 'Multi-Site & Departmental Plans',
    description: 'For larger businesses, we coordinate portioned meal programmes across departments and sites, with menus and quantities tailored to each location while keeping the overall service consistent and simple to oversee.',
  },
]

const includedItems = [
  { title: 'Individually Portioned Meals', description: 'Freshly prepared, consistent portions ready to serve or store.' },
  { title: 'Recurring Schedules', description: 'Weekly or monthly programmes on a reliable, repeatable rotation.' },
  { title: 'Wellness-Focused Menus', description: 'Balanced, nutrition-led menus designed around employee wellbeing.' },
  { title: 'Dietary Coverage', description: 'Low-carb, high-protein, vegetarian, and other options prepared together.' },
  { title: 'Flexible Quantities', description: 'Programmes that scale with headcount, office days, and demand.' },
  { title: 'Coordinated Delivery', description: 'Timed delivery to offices and workplaces across Dubai.' },
  { title: 'Rotating Menu Cycles', description: 'Varied menu rotations that keep recurring meals fresh and appealing.' },
  { title: 'Managed, Hands-Off Service', description: 'A retained programme you set once and rely on going forward.' },
]

const galleryImages = [
  { src: '/service-corporate.webp', alt: 'Corporate meal prep programme set-up in Dubai' },
  { src: '/menu-seafood.webp', alt: 'Balanced portioned protein meal for a workplace plan' },
  { src: '/menu-appetizer.webp', alt: 'Fresh prepared meal components for corporate delivery' },
  { src: '/service-catering.webp', alt: 'Office meal prep catering spread in Dubai' },
  { src: '/service-events.webp', alt: 'Workplace wellness catering delivery' },
  { src: '/service-villa.webp', alt: 'Managed corporate meal programme in Dubai' },
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
    q: 'What is corporate meal prep?',
    a: 'Corporate meal prep is a recurring, managed programme of individually portioned meals delivered to your workplace on a regular schedule. Instead of organising catering each time, you set the programme once and balanced meals arrive reliably for your team.',
  },
  {
    q: 'How do recurring programmes work?',
    a: 'We agree a rotating menu and a weekly or monthly schedule, then deliver freshly prepared, portioned meals on that cadence. Quantities flex with your headcount and office days, and the programme simply runs in the background once it is set up.',
  },
  {
    q: 'Can the menus support wellness goals?',
    a: 'Yes. Our wellness retainers are built around balanced nutrition, with low-carb, high-protein, vegetarian, and other options available. The aim is to make healthy eating a consistent, effortless part of the working week.',
  },
  {
    q: 'Can you handle different dietary needs across a team?',
    a: 'We can. Different dietary options are prepared side by side and clearly identified, so a single programme can cover varied preferences and requirements across your whole team.',
  },
  {
    q: 'Can you scale across multiple sites or departments?',
    a: 'Yes. For larger businesses, we coordinate portioned meal programmes across departments and locations, tailoring menus and quantities to each site while keeping the overall service consistent and easy to oversee.',
  },
  {
    q: 'How far in advance should we set up a programme?',
    a: 'For ongoing programmes, we recommend a short planning period before launch so menus, quantities, and delivery logistics are agreed. Once running, the programme continues on its schedule with adjustments as your needs change.',
  },
]

const relatedServices = [
  {
    title: 'Healthy Catering',
    description: 'Nutrition-focused, balanced menus with low-carb and keto options.',
    image: '/menu-seafood.webp',
    link: '/healthy-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional corporate dining, from working lunches to large functions.',
    image: '/service-corporate.webp',
    link: '/corporate',
  },
  {
    title: 'Office Catering',
    description: 'Reliable catering for meetings, working lunches, and office events.',
    image: '/menu-appetizer.webp',
    link: '/office-catering-dubai',
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
  name: 'Corporate Meal Prep Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Corporate Meal Prep Dubai', item: 'https://mychef.ae/corporate-meal-prep-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function CorporateMealPrep() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.cmp-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.cmp-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.cmp-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.cmp-fmt-card', {
      scrollTrigger: { trigger: '.cmp-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cmp-uc-item', {
      scrollTrigger: { trigger: '.cmp-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cmp-inc-item', {
      scrollTrigger: { trigger: '.cmp-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cmp-gallery-img', {
      scrollTrigger: { trigger: '.cmp-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.cmp-faq-item', {
      scrollTrigger: { trigger: '.cmp-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cmp-loc-item', {
      scrollTrigger: { trigger: '.cmp-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.cmp-rel-card', {
      scrollTrigger: { trigger: '.cmp-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cmp-cta', {
      scrollTrigger: { trigger: '.cmp-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Corporate Meal Prep Dubai | Recurring Team Programmes"
        description="Corporate meal prep in Dubai — recurring portioned meal programmes, wellness retainers, and balanced menus delivered to your workplace. Request your custom quote today."
        canonicalPath="/corporate-meal-prep-dubai"
        ogImage="/service-corporate.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/corporate-meal-prep-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 cmp-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Corporate Meal Prep Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 cmp-hero-h1">
            Corporate Meal Prep in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 cmp-hero-sub">
            Recurring, portioned meal programmes and wellness retainers for teams across Dubai — balanced menus delivered on a reliable schedule, so good food becomes part of the working week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate-meal-prep-dubai" className="btn-primary opacity-0 translate-y-4 cmp-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 cmp-hero-cta"
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
            GOOD FOOD, ON A SCHEDULE
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Managed Programme, Not a One-Off
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Feeding a team well, consistently, is a logistics challenge as much as a culinary one. The value of corporate meal prep is that it removes the organising entirely — balanced, individually portioned meals arrive on a reliable schedule, and good nutrition becomes a quiet, dependable part of the working week. At myCHEF Dubai, we design these programmes to run themselves once set up, scaling with your headcount and adapting as your needs change.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you want a recurring weekly meal plan, a wellness retainer focused on employee wellbeing, or a multi-site programme across departments, we build a managed service around your team — with low-carb, high-protein, vegetarian, and other options covered. Explore our meal prep formats below, or see how it connects with our wider <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering in Dubai</Link> and <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">healthy catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MEAL PREP FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Programmes Built Around Your Team
            </h2>
          </div>

          <div className="cmp-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mealPrepFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="cmp-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              HOW TEAMS USE IT
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Designed for the Workplace
            </h2>
          </div>

          <div className="cmp-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="cmp-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Corporate Meal Prep Includes
          </h2>

          <div className="cmp-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="cmp-inc-item flex gap-3 opacity-0 -translate-x-5">
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
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            A Taste of Our Meal Prep
          </h2>

          <div className="cmp-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="cmp-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Corporate Meal Prep Questions
          </h2>

          <div className="cmp-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="cmp-faq-item border border-gray-200 opacity-0 translate-y-5">
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
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="cmp-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="cmp-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="cmp-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="cmp-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center cmp-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Set Up Your Meal Prep Programme
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your team, your office days, and any dietary needs, and we'll design a recurring, portioned meal programme — wellness-focused and fully managed — that keeps your people well fed week after week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=corporate-meal-prep-dubai" className="btn-primary">Request a Proposal</Link>
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
