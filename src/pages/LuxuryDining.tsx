import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  MessageCircle,
  Palette,
  Sparkles,
  Utensils,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a luxury dining quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const experiences = [
  {
    image: '/service-luxury-dining.jpg',
    title: 'Romantic Dinner Dubai',
    description: 'An intimate evening for two. Candlelit table, bespoke multi-course menu, discreet service. Perfect for anniversaries, proposals, or simply celebrating love.',
    link: '/services/romantic-dinner-dubai',
  },
  {
    image: '/service-private-chef.jpg',
    title: 'Fine Dining at Home',
    description: 'Restaurant-quality cuisine in the comfort of your home. A multi-course tasting menu with wine pairing, served by our team.',
    link: '/services/fine-dining-at-home-dubai',
  },
  {
    image: '/service-events.jpg',
    title: 'Birthday Dinner Experience',
    description: 'A memorable birthday celebration with a custom menu, elegant presentation, and attentive service. From intimate to grand.',
    link: '/services/birthday-catering-dubai',
  },
  {
    image: '/service-yacht.jpg',
    title: 'Yacht Dining Experience',
    description: 'A private chef experience on your yacht with the Dubai skyline as your backdrop. Canapes, multi-course dinner, or BBQ.',
    link: '/services/yacht-dining-dubai',
  },
]

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    description: 'We discuss your vision, preferences, dietary requirements, and the mood you want to create.',
  },
  {
    icon: Palette,
    title: 'Menu Design',
    description: 'Our chef crafts a bespoke menu that tells a story through each course.',
  },
  {
    icon: Sparkles,
    title: 'The Setup',
    description: 'We arrive early, transform your space, and prepare everything to perfection.',
  },
  {
    icon: Utensils,
    title: 'The Experience',
    description: 'You and your guests enjoy an unforgettable evening. We handle every detail.',
  },
]

const galleryImages = [
  { src: '/service-luxury-dining.jpg', alt: 'Luxury dining experience', className: 'aspect-[4/3]' },
  { src: '/menu-appetizer.jpg', alt: 'Fine dining appetizer', className: 'aspect-[3/4]' },
  { src: '/menu-dessert.jpg', alt: 'Elegant dessert', className: 'aspect-[1/1]' },
  { src: '/service-villa.jpg', alt: 'Villa dining setup', className: 'aspect-[4/3]' },
  { src: '/menu-seafood.jpg', alt: 'Premium seafood dish', className: 'aspect-[3/4]' },
  { src: '/testimonial-villa.jpg', alt: 'Happy guests at dinner', className: 'aspect-[4/3]' },
]

const occasionTags = [
  'Anniversaries',
  'Marriage Proposals',
  'Birthday Celebrations',
  'Engagement Dinners',
  "Valentine's Day",
  'Eid Celebrations',
  'Christmas Dinner',
  "New Year's Eve",
  'Corporate Entertainment',
  'Client Hosting',
  'Family Reunions',
  'Graduation Celebrations',
]

const faqs = [
  {
    q: 'Can you set up a romantic dinner on my terrace?',
    a: 'Absolutely. We create stunning terrace dining setups with candles, flowers, and elegant table settings \u2014 all customized to your space and preferences.',
  },
  {
    q: 'Do you provide table decoration?',
    a: 'Yes. We offer full table styling including linens, glassware, candles, and floral arrangements. Let us know your aesthetic and we will design accordingly.',
  },
  {
    q: 'Can you accommodate surprise proposals?',
    a: 'Yes \u2014 we love being part of surprise proposals. We coordinate discreetly to ensure the moment is perfect.',
  },
  {
    q: 'What is the minimum number of guests?',
    a: 'Our luxury dining experiences start from 2 guests. There is no upper limit.',
  },
  {
    q: 'Can I request a specific cuisine?',
    a: 'Of course. Every menu is fully bespoke. Share your preferences and our chef will design the perfect menu.',
  },
]

const relatedServices = [
  {
    title: 'Private Chef',
    description: 'Your own personal chef for an evening of bespoke cuisine in your home.',
    image: '/service-private-chef.jpg',
    link: '/private-chef-dubai',
  },
  {
    title: 'Catering',
    description: 'Elegant catering for larger gatherings and celebrations across Dubai.',
    image: '/service-catering.jpg',
    link: '/catering-dubai',
  },
  {
    title: 'Yachts',
    description: 'Private dining on the water with the Dubai skyline as your backdrop.',
    image: '/service-yacht.jpg',
    link: '/yachts',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Luxury Dining Experiences Dubai',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  serviceType: 'Luxury Private Dining',
  areaServed: 'Dubai, UAE',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dining Experiences',
    itemListElement: experiences.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae' },
    { '@type': 'ListItem', position: 2, name: 'Luxury Dining Experiences', item: 'https://mychef.ae/luxury-dining-experiences' },
  ],
}

/* ────────────────────── Component ────────────────────── */

export default function LuxuryDining() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Hero
    gsap.to('.ld-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ld-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ld-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    // Experience cards
    gsap.to('.ld-exp-card', {
      scrollTrigger: { trigger: '.ld-exp-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    })

    // Process steps
    gsap.to('.ld-step', {
      scrollTrigger: { trigger: '.ld-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    // Gallery
    gsap.to('.ld-gallery-img', {
      scrollTrigger: { trigger: '.ld-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    // Occasion tags
    gsap.to('.ld-tag', {
      scrollTrigger: { trigger: '.ld-tags', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: 'power3.out',
    })

    // FAQ
    gsap.to('.ld-faq-item', {
      scrollTrigger: { trigger: '.ld-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    // Related
    gsap.to('.ld-rel-card', {
      scrollTrigger: { trigger: '.ld-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // CTA
    gsap.to('.ld-cta', {
      scrollTrigger: { trigger: '.ld-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Luxury Private Dining Dubai | Fine Dining at Home"
        description="Experience luxury private dining in Dubai. Romantic dinners, special occasions, and bespoke culinary experiences in your villa or penthouse. Request your custom menu."
        canonicalPath="/luxury-dining-experiences"
        ogImage="/service-luxury-dining.jpg"
        schema={{ ...schema, ...breadcrumbSchema }}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-luxury-dining.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ld-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Luxury Dining Experiences</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ld-hero-h1">
            Luxury Dining<br className="hidden sm:block" /> Experiences
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[600px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ld-hero-sub">
            Bespoke private dining crafted for life's most memorable moments. In your villa, on your yacht, or at your penthouse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 ld-hero-cta">
              Plan My Experience
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ld-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 2: Experience Types ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CURATED EXPERIENCES
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Dining Experiences Tailored to You
            </h2>
          </div>

          <div className="ld-exp-grid grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <Link
                key={i}
                to={exp.link}
                className="ld-exp-card group bg-white border border-[#E5E5E5] overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-h3 text-black mb-3">{exp.title}</h3>
                  <p className="font-inter text-body text-[#737373] leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore This Experience <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: The Experience ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              THE EXPERIENCE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              A Evening Designed Around You
            </h2>
          </div>

          <div className="ld-steps relative">
            {/* Vertical dotted line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gold/30 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, i) => {
                const Icon = step.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={i}
                    className={`ld-step relative flex flex-col md:flex-row items-center gap-6 md:gap-12 opacity-0 translate-y-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content side */}
                    <div className={`flex-1 text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="font-playfair text-h3 text-white mb-2">{step.title}</h3>
                      <p className="font-inter text-body text-[#A3A3A3] leading-relaxed">{step.description}</p>
                    </div>

                    {/* Icon circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-gold" />
                    </div>

                    {/* Spacer side */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Gallery ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Moments We Have Created
          </h2>

          <div className="ld-gallery columns-2 md:columns-3 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`ld-gallery-img overflow-hidden break-inside-avoid opacity-0 scale-95 ${img.className}`}
              >
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

      {/* ═══════════════ Section 5: Special Occasions ═══════════════ */}
      <section className="bg-cream py-20">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Perfect For Every Special Occasion
          </h2>

          <div className="ld-tags flex flex-wrap justify-center gap-3">
            {occasionTags.map((tag, i) => (
              <span
                key={i}
                className="ld-tag bg-white border border-[#E5E5E5] px-5 py-2.5 font-inter text-sm text-black opacity-0 scale-90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Luxury Dining Questions
          </h2>

          <div className="ld-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="ld-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 7: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-h3 text-white">
              Explore Our Services
            </h3>
          </div>

          <div className="ld-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ld-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Related Guides</h3>
          <p className="font-inter text-body text-[#737373] leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/luxury-dinner-planning-guide-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Luxury Dinner Planning Guide</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 8: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ld-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Create an Unforgettable Evening
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Your bespoke dining experience begins with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">
              Request My Custom Quote
            </Link>
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
