import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, Palette, Sparkles, Utensils, ChevronRight, Phone, ArrowRight, } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import StarterPackagesSection from '@/sections/StarterPackagesSection'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a luxury dining quote (via mychef.ae/luxury-dining-experiences)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const experiences = [
  {
    image: '/service-luxury-dining.webp',
    title: 'Romantic Dinner Dubai',
    description: 'An intimate evening for two. Candlelit table, bespoke multi-course menu, discreet service. Perfect for anniversaries, proposals, or simply celebrating love.',
    link: '/romantic-dinner-dubai',
  },
  {
    image: '/service-private-chef.webp',
    title: 'Fine Dining at Home',
    description: 'Restaurant-quality cuisine in the comfort of your home. A multi-course tasting menu with wine pairing, served by our team.',
    link: '/private-chef-dubai',
  },
  {
    image: '/service-events.webp',
    title: 'Birthday Dinner Experience',
    description: 'A memorable birthday celebration with a custom menu, elegant presentation, and attentive service. From intimate to grand.',
    link: '/birthday-catering-dubai',
  },
  {
    image: '/service-yacht.webp',
    title: 'Yacht Dining Experience',
    description: 'A private chef experience on your yacht with the Dubai skyline as your backdrop. Canapes, multi-course dinner, or BBQ.',
    link: '/yachts',
  },
]

const relatedExperiences = [
  {
    title: "Valentine's Day Catering",
    description: 'Candlelit private dining, proposal setups and romantic menus for February 14 and beyond.',
    image: '/images/valentines-day-catering-dubai-hero.webp',
    link: '/valentines-day-catering-dubai',
  },
  {
    title: 'Private Cooking Classes',
    description: 'Learn professional techniques from our chefs in a hands-on, private setting.',
    image: '/service-private-chef.webp',
    link: '/private-cooking-classes-dubai',
  },
  {
    title: 'VIP Club',
    description: 'Priority access, exclusive menus, and dedicated concierge for frequent hosts.',
    image: '/service-luxury-dining.webp',
    link: '/vip-club',
  },
  {
    title: 'Gift Cards',
    description: 'Give the gift of a bespoke dining experience with a myCHEF Dubai gift card.',
    image: '/menu-dessert.webp',
    link: '/gift-cards',
  },
]

const processSteps = [
  {
    icon: MessageCircle,
    title: 'What happens during the consultation?',
    description: 'We discuss your vision, preferences, dietary requirements, and the mood you want to create.',
  },
  {
    icon: Palette,
    title: 'How is your bespoke menu created?',
    description: 'Our chef crafts a bespoke menu that tells a story through each course.',
  },
  {
    icon: Sparkles,
    title: 'How do we prepare your dining space?',
    description: 'We arrive early, transform your space, and prepare everything to perfection.',
  },
  {
    icon: Utensils,
    title: 'What happens on the night of your dinner?',
    description: 'You and your guests enjoy an unforgettable evening. We handle every detail.',
  },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Luxury dining experience', className: 'aspect-[4/3]' },
  { src: '/menu-appetizer.webp', alt: 'Fine dining appetizer', className: 'aspect-[3/4]' },
  { src: '/menu-dessert.webp', alt: 'Elegant dessert', className: 'aspect-[1/1]' },
  { src: '/service-villa.webp', alt: 'Villa dining setup', className: 'aspect-[4/3]' },
  { src: '/menu-seafood.webp', alt: 'Premium seafood dish', className: 'aspect-[3/4]' },
  { src: '/testimonial-villa.webp', alt: 'Happy guests at dinner', className: 'aspect-[4/3]' },
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
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Halal Private Dining',
    description: 'Bespoke fully halal private dinners at home or in your venue, served by a dedicated chef team.',
    image: '/images/halal-private-dining-dubai-hero.webp',
    link: '/halal-private-dining-dubai',
  },
  {
    title: 'Yachts',
    description: 'Private dining on the water with the Dubai skyline as your backdrop.',
    image: '/service-yacht.webp',
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

    // Related Experiences
    gsap.to('.ld-rel-exp-card', {
      scrollTrigger: { trigger: '.ld-rel-exp-grid', start: 'top 85%', toggleActions: 'play none none none' },
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
        ogImage="/service-luxury-dining.webp"
        schema={{ ...schema, ...breadcrumbSchema }}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero
        title={<>Luxury Dining<br className="hidden sm:block" /> Experiences</>}
        subtitle="Bespoke private dining crafted for life's most memorable moments. In your villa, on your yacht, or at your penthouse."
        image="/images/luxury-dining-dubai-hero.webp"
        imageAlt="Luxury private dining in Dubai"
        cta={{ label: 'Request a Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=luxury-dining-experiences' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Luxury Dining Experiences' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ═══════════════ Section 2: Experience Types ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              LUXURY DINING OPTIONS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              What luxury dining experiences can you book in Dubai?
            </h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed max-w-[700px] mx-auto mt-4">
              From penthouses in Downtown to villas in{' '}
              <Link to="/locations/emirates-hills" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Emirates Hills</Link>
              , we bring restaurant-quality dining to your door.
            </p>
          </div>

          <div className="ld-exp-grid grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <Link
                key={i}
                to={exp.link}
                className="ld-exp-card group bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-h3 text-black mb-3">{exp.title}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
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
              HOW IT WORKS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              How does booking a luxury dining experience in Dubai work?
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
                      <p className="font-inter text-body text-gray-400 leading-relaxed">{step.description}</p>
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
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            What do our luxury dining experiences look like?
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
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Special Occasions ═══════════════ */}
      <section className="bg-cream py-20">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            What occasions can you celebrate with luxury dining in Dubai?
          </h2>

          <div className="ld-tags flex flex-wrap justify-center gap-3">
            {occasionTags.map((tag, i) => (
              <span
                key={i}
                className="ld-tag bg-white border border-gray-200 px-5 py-2.5 font-inter text-sm text-black opacity-0 scale-90"
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
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            What are the most common questions about luxury dining in Dubai?
          </h2>

          <div className="ld-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="ld-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 7: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-h3 text-white">
              Which myCHEF services pair with luxury dining?
            </h3>
          </div>

          <div className="ld-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ld-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Related Experiences ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-h3 text-black">
              What other experiences can you add?
            </h3>
          </div>

          <div className="ld-rel-exp-grid grid md:grid-cols-3 gap-6">
            {relatedExperiences.map((exp, i) => (
              <Link
                key={i}
                to={exp.link}
                className="ld-rel-exp-card group bg-cream overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-black mb-2">{exp.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 mb-4">{exp.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StarterPackagesSection
        campaign="luxury-dining-experiences"
        eyebrow="LUXURY DINING PRICING"
        title="How much does luxury private dining cost in Dubai?"
        subtitle="Transparent starting prices for bespoke luxury dining experiences in Dubai. Every menu is designed around your occasion."
      />

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Which guides help plan a luxury dinner in Dubai?</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/luxury-dinner-planning-guide-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Luxury Dinner Planning Guide</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 8: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ld-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Ready to book your luxury dining experience in Dubai?
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Your bespoke dining experience begins with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=luxury-dining-experiences" className="btn-primary">Request a Proposal</Link>
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
