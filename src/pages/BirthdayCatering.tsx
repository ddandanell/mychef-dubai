import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Cake,
  PartyPopper,
  Baby,
  Crown,
  Home,
  UtensilsCrossed,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan birthday catering in Dubai (via mychef.ae/birthday-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const birthdayFormats = [
  {
    icon: Baby,
    title: 'Kids Birthday Parties',
    description: 'Fun, colourful menus designed for younger guests, with interactive food stations, mini treats, and kid-friendly favourites.',
    link: '/party-catering-dubai',
  },
  {
    icon: Crown,
    title: 'Milestone Birthdays',
    description: 'Sophisticated menus for 18ths, 30ths, 40ths, and beyond, with plated dinners, grazing tables, and bar service.',
    link: '/party-catering-dubai',
  },
  {
    icon: UtensilsCrossed,
    title: 'Themed Menus',
    description: 'Menus styled around your theme and colour palette, from glamorous to playful, designed to match the celebration.',
    link: '/catering-dubai',
  },
  {
    icon: Cake,
    title: 'Custom Cakes & Desserts',
    description: 'Bespoke birthday cakes, cupcakes, and styled dessert tables created around the guest of honour and the theme.',
    link: '/dessert-table-catering-dubai',
  },
  {
    icon: Home,
    title: 'Villa & Garden Parties',
    description: 'Full-service birthday catering at your villa, garden, or rooftop across Dubai, with setup, service, and clear-down.',
    link: '/catering-dubai',
  },
  {
    icon: PartyPopper,
    title: 'Surprise Celebrations',
    description: 'Discreet planning and seamless setup for surprise parties, so the only thing the guest of honour notices is the moment.',
    link: '/private-party-catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Birthday Menu', description: 'A menu built around the age, theme, and tastes of the celebration.' },
  { title: 'Custom Birthday Cake', description: 'A signature cake designed to the theme, flavour, and guest of honour.' },
  { title: 'Kids & Adult Options', description: 'Playful favourites for children alongside refined dishes for adults.' },
  { title: 'Grazing & Dessert Tables', description: 'Styled grazing spreads and dessert tables as a party centrepiece.' },
  { title: 'Drinks & Mocktail Bar', description: 'Cocktails, mocktails, and soft-drink stations tailored to the party.' },
  { title: 'Service & Party Staff', description: 'Waiters, hosts, and bartenders scaled to your guest count.' },
  { title: 'Themed Styling', description: 'Tableware, linens, and presentation matched to your party theme.' },
  { title: 'Full Setup & Clear-Down', description: 'We arrive early, run the party, and leave your space spotless.' },
]

const useCases = [
  {
    title: 'Kids & Family Birthdays',
    description: 'For younger guests, we build bright, fun menus with interactive stations and mini treats, alongside grown-up options for the parents. Every detail is designed so the whole family can relax and enjoy the day.',
  },
  {
    title: 'Milestone & Adult Celebrations',
    description: 'Big birthdays call for something special. For 18ths, 30ths, 40ths, and beyond, we design plated dinners, grazing tables, canapés, and a styled bar that turn the evening into a genuine occasion.',
  },
  {
    title: 'Villa & Garden Parties',
    description: 'We transform your villa, garden, rooftop, or pool deck into a full party space across Palm Jumeirah, Emirates Hills, Dubai Hills, and beyond, bringing the kitchen, the staff, and the styling to you.',
  },
  {
    title: 'Themed & Surprise Parties',
    description: 'From a colour-led theme to a carefully kept surprise, we plan discreetly and set up seamlessly, designing the menu, cake, and styling outward from the concept so everything feels considered and cohesive.',
  },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Birthday party catering setup in Dubai' },
  { src: '/menu-dessert.webp', alt: 'Birthday dessert table and cake' },
  { src: '/menu-canapes.webp', alt: 'Canapés for a birthday celebration' },
  { src: '/service-villa.webp', alt: 'Villa birthday party in Dubai' },
  { src: '/menu-cocktails.webp', alt: 'Drinks service at a birthday party' },
  { src: '/menu-appetizer.webp', alt: 'Birthday party appetizers' },
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
    q: 'Do you cater both kids and adult birthday parties?',
    a: 'Yes. We design bright, playful menus and interactive stations for children, and sophisticated plated dinners, grazing tables, and bar service for adult and milestone birthdays. Many parties combine both for mixed-age guests.',
  },
  {
    q: 'Can you make a custom birthday cake?',
    a: 'Absolutely. Every birthday package can include a bespoke cake designed around the theme, flavour, and guest of honour, alongside cupcakes, cookies, and a styled dessert table if you wish.',
  },
  {
    q: 'Do you cater themed birthday parties?',
    a: 'Yes. We build menus, cakes, and styling around your theme and colour palette, from glamorous milestone celebrations to playful children’s themes, so the food and presentation feel part of the concept.',
  },
  {
    q: 'Can you provide drinks and a mocktail bar?',
    a: 'Yes. We offer cocktails, crafted mocktails, and soft-drink stations tailored to the party, including family-friendly and alcohol-free options so every guest, of every age, is well looked after.',
  },
  {
    q: 'Do you cater birthday parties at villas and at home?',
    a: 'Yes. We regularly cater villa, garden, rooftop, and at-home birthday parties across Dubai, bringing a full mobile kitchen, service staff, and styling, then handling setup and clear-down so you can simply celebrate.',
  },
  {
    q: 'How far in advance should I book birthday catering?',
    a: 'For smaller parties, one to two weeks is ideal. For larger or fully themed celebrations, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Party Catering',
    description: 'Bespoke menus, drinks, and full service for celebrations of every kind.',
    image: '/service-events.webp',
    link: '/party-catering-dubai',
  },
  {
    title: 'Dessert Table Catering',
    description: 'Custom cakes and styled sweet tables to make the birthday unforgettable.',
    image: '/menu-dessert.webp',
    link: '/dessert-table-catering-dubai',
  },
  {
    title: 'Kids Birthday Catering',
    description: 'Safe, fun, allergy-aware party food designed for children and their friends.',
    image: '/images/kids-birthday-catering-dubai-hero.webp',
    link: '/kids-birthday-catering-dubai',
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
  name: 'Birthday Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Birthday Catering Dubai', item: 'https://mychef.ae/birthday-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function BirthdayCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bday-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bday-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bday-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bday-fmt-card', {
      scrollTrigger: { trigger: '.bday-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bday-uc-item', {
      scrollTrigger: { trigger: '.bday-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bday-inc-item', {
      scrollTrigger: { trigger: '.bday-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bday-gallery-img', {
      scrollTrigger: { trigger: '.bday-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bday-faq-item', {
      scrollTrigger: { trigger: '.bday-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bday-loc-item', {
      scrollTrigger: { trigger: '.bday-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bday-rel-card', {
      scrollTrigger: { trigger: '.bday-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bday-cta', {
      scrollTrigger: { trigger: '.bday-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Birthday Catering Dubai | Kids & Adult Parties"
        description="Birthday party catering in Dubai for kids and adults. Themed menus, custom cakes, grazing and dessert tables, mocktail bars, and full villa-party service across Dubai."
        canonicalPath="/birthday-catering-dubai"
        ogImage="/service-events.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/birthday-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bday-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Birthday Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bday-hero-h1">
            Birthday Party Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bday-hero-sub">
            From first birthdays to milestone celebrations — themed menus, custom cakes, dessert tables, and full villa-party service across Dubai for kids and adults alike.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=birthday-catering-dubai" className="btn-primary opacity-0 translate-y-4 bday-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bday-hero-cta"
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
            DUBAI BIRTHDAY SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Birthday They'll Always Remember
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Every birthday deserves to feel like an occasion. At myCHEF Dubai, we design birthday catering around the guest of honour — their age, their theme, and the people gathered to celebrate them. From a child’s playful first party to a glamorous milestone evening, we bring the menu, the cake, the styling, and the service, so the host gets to enjoy the day as much as everyone else.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are planning an intimate family lunch, a lively kids’ party, or a polished milestone celebration in your villa, our team handles every detail from concept to clear-down. Explore our birthday services below, or see how they fit within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              BIRTHDAY SERVICES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering for Every Birthday
            </h2>
          </div>

          <div className="bday-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdayFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="bday-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              EVERY AGE, EVERY THEME
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Birthdays for Every Celebration
            </h2>
          </div>

          <div className="bday-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bday-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Birthday Catering Includes
          </h2>

          <div className="bday-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bday-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Birthday Catering
          </h2>

          <div className="bday-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bday-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Birthday Catering Questions
          </h2>

          <div className="bday-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bday-faq-item border border-gray-200 opacity-0 translate-y-5">
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
            Birthday Catering Across Dubai
          </h2>

          <div className="bday-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bday-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="bday-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bday-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center bday-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan the Birthday
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about the celebration and we'll design a menu, cake, and service plan that makes their birthday unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=birthday-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
