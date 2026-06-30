import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sparkles,
  Grape,
  Martini,
  Cake,
  Home,
  Building,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to plan bachelorette party catering (via mychef.ae/bachelorette-party-catering-dubai)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const formats = [
  {
    icon: Sparkles,
    title: 'Elegant Canape Receptions',
    description:
      'Beautifully composed passed canapes and bite-sized plates. Refined, photogenic, and perfectly suited to a stand-up celebration with cocktails in hand.',
  },
  {
    icon: Grape,
    title: 'Grazing & Charcuterie Tables',
    description:
      'Lavish grazing tables layered with cheeses, fruits, dips, and artisan bites. A centerpiece spread that looks as good as it tastes.',
  },
  {
    icon: Martini,
    title: 'Cocktails & Mocktails',
    description:
      'Signature cocktails and elegant alcohol-free mocktails poured by professional bartenders, served to suit every guest in the group.',
  },
  {
    icon: Cake,
    title: 'Dessert Tables',
    description:
      'Styled dessert spreads with pastries, petit fours, and a statement cake. The sweet finish that makes the celebration feel complete.',
  },
  {
    icon: Home,
    title: 'Villa Celebrations',
    description:
      'Full-service catering for private villa parties across Dubai. We style, serve, and clear away so the group can simply enjoy the day.',
  },
  {
    icon: Building,
    title: 'Rooftop & Terrace Soirees',
    description:
      'Catering tailored to rooftop and terrace settings, from sunset canapes to evening cocktails against the Dubai skyline.',
  },
]

const useCases = [
  {
    title: 'Villa Brunch Parties',
    description:
      'A relaxed villa brunch with grazing tables, fresh canapes, and a free-flowing mocktail bar. We handle the styling and the service while the group celebrates.',
  },
  {
    title: 'Rooftop Cocktail Evenings',
    description:
      'Sunset on a rooftop terrace with passed canapes, signature cocktails, and a dessert table. Elegant, effortless, and made for photographs.',
  },
  {
    title: 'Spa-Day Send-Offs',
    description:
      'Light, refined bites and refreshing mocktails to complement a pampered spa-day theme, served wherever the group is gathering.',
  },
  {
    title: 'Garden & Poolside Gatherings',
    description:
      'Daytime garden or poolside celebrations with grazing boards, chilled drinks, and a styled dessert spread, all set up and cleared by our team.',
  },
]

const includedItems = [
  { title: 'Bespoke Menu Design', description: 'A menu styled around the theme, the venue, and the group, planned together in advance.' },
  { title: 'Premium Ingredients', description: 'Fresh, high-quality produce and ingredients sourced from trusted Dubai suppliers.' },
  { title: 'Styled Presentation', description: 'Grazing tables, dessert spreads, and canape displays arranged for an elegant, photogenic finish.' },
  { title: 'Cocktail & Mocktail Bar', description: 'Professional bartenders serving signature cocktails and refined alcohol-free options.' },
  { title: 'Service Staff', description: 'Hosts and servers to pass canapes, top up drinks, and keep the celebration flowing.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, style the space, serve through the event, and clear it all away.' },
  { title: 'Flexible Venues', description: 'Villa, rooftop, garden, or terrace — we cater wherever the celebration is happening.' },
  { title: 'On-Site Coordination', description: 'A coordinator keeps the timing, service, and bar running seamlessly throughout.' },
]

const galleryImages = [
  { src: '/service-events.jpg', alt: 'Bachelorette party event catering in Dubai' },
  { src: '/menu-canapes.jpg', alt: 'Elegant canapes for a bachelorette party' },
  { src: '/menu-cocktails.jpg', alt: 'Cocktails and mocktails for a bachelorette party' },
  { src: '/menu-dessert.jpg', alt: 'Styled dessert table for a bachelorette party' },
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
  { name: 'Meydan', slug: 'meydan' },
]

const faqs = [
  {
    q: 'What does bachelorette party catering usually include?',
    a: 'Most bachelorette celebrations combine a grazing or canape spread, a cocktail and mocktail bar, and a styled dessert table. We tailor the mix to your theme and venue, and our team handles the setup, service, and cleanup from start to finish.',
  },
  {
    q: 'Can you create alcohol-free options for the group?',
    a: 'Yes. Our bartenders prepare elegant alcohol-free mocktails alongside any cocktails, so every guest is looked after. Just let us know the preferences of the group when we design the drinks list.',
  },
  {
    q: 'Do you style grazing and dessert tables?',
    a: 'We do. Styled grazing tables and dessert spreads are a signature part of our bachelorette catering, arranged to look beautiful and photograph well. Share your colour theme and we will build the presentation around it.',
  },
  {
    q: 'Can you cater a villa or rooftop celebration?',
    a: 'Absolutely. We regularly cater private villa parties, rooftop soirees, garden gatherings, and poolside celebrations across Dubai, bringing full setup and service to whichever venue you choose.',
  },
  {
    q: 'How many guests can you cater for?',
    a: 'We cater intimate bachelorette gatherings as well as larger celebrations. Grazing tables, canape menus, and dessert spreads all scale to your numbers, so tell us the headcount and we will plan accordingly.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'We recommend booking one to two weeks ahead for most bachelorette parties, and earlier during peak season between November and March. Reach out as soon as you have a date to secure your preferred styling and service.',
  },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Full-service event catering across Dubai for celebrations of every size and style.',
    image: '/service-catering.jpg',
    link: '/catering-dubai',
  },
  {
    title: 'Private Chef',
    description: 'A dedicated chef preparing a refined, intimate menu in your villa or home.',
    image: '/service-private-chef.jpg',
    link: '/private-chef-dubai',
  },
  {
    title: 'Luxury Dining',
    description: 'Bespoke fine-dining experiences for a truly memorable celebration.',
    image: '/service-luxury-dining.jpg',
    link: '/luxury-dining-experiences',
  },
]

const serviceObj = {
  '@type': 'Service',
  name: 'Bachelorette Party Catering Dubai',
  serviceType: 'Bachelorette Party Catering',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const faqObj = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbObj = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Bachelorette Party Catering Dubai', item: 'https://mychef.ae/bachelorette-party-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceObj, faqObj, breadcrumbObj],
}

/* ────────────────────── Component ────────────────────── */

export default function BachelorettePartyCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bt-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bt-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bt-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bt-fmt-card', {
      scrollTrigger: { trigger: '.bt-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bt-use-item', {
      scrollTrigger: { trigger: '.bt-use-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bt-inc-item', {
      scrollTrigger: { trigger: '.bt-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bt-gallery-img', {
      scrollTrigger: { trigger: '.bt-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bt-faq-item', {
      scrollTrigger: { trigger: '.bt-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bt-loc-item', {
      scrollTrigger: { trigger: '.bt-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bt-rel-card', {
      scrollTrigger: { trigger: '.bt-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bt-cta', {
      scrollTrigger: { trigger: '.bt-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Bachelorette Party Catering Dubai | Canapes & More"
        description="Bachelorette party catering in Dubai with elegant canapes, grazing tables, cocktails, mocktails, and dessert spreads for villa and rooftop celebrations. Request a proposal."
        canonicalPath="/bachelorette-party-catering-dubai"
        ogImage="/service-events.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/service-events.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 bt-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Bachelorette Party Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bt-hero-h1">
            Bachelorette Party Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[600px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bt-hero-sub">
            Elegant canapes, lavish grazing tables, signature cocktails and mocktails, and styled dessert spreads. Refined catering for villa and rooftop celebrations across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bachelorette-party-catering-dubai" className="btn-primary opacity-0 translate-y-4 bt-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bt-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 2: Intro ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            CELEBRATE IN STYLE
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Celebration Worth Styling
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            A bachelorette party is a moment to gather the closest friends and celebrate properly. Whether the day unfolds across a private villa, a rooftop terrace, or a sunlit garden, the catering should feel as considered as the rest of the plan. Our bachelorette party catering brings styled grazing tables, refined canapes, a polished bar, and a statement dessert spread straight to your chosen venue.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Every menu is designed around the theme, the colours, and the group, with elegant alcohol-free mocktails poured alongside signature cocktails so no guest is left out. Our team styles the space, serves throughout, and clears it all away, available for Dubai events of every size. Explore our wider{' '}
            <Link to="/catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">catering in Dubai</Link>{' '}
            or request a{' '}
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bachelorette-party-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Request a Proposal</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT WE CREATE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering Styled for the Occasion
            </h2>
          </div>

          <div className="bt-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="bt-fmt-card bg-charcoal p-8 opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Use Cases ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WAYS TO CELEBRATE
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Where We Cater Bachelorette Parties
            </h2>
          </div>

          <div className="bt-use-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bt-use-item bg-white p-8 border border-[#E5E5E5] opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-body-sm text-[#737373] text-center max-w-[680px] mx-auto mt-10 leading-relaxed">
            Prefer a seated dinner to close the celebration? A{' '}
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">private chef</Link>{' '}
            can plate a refined menu at the villa, or step up to a full{' '}
            <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">luxury dining experience</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Your Catering Includes
          </h2>

          <div className="bt-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bt-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of the Celebration
          </h2>

          <div className="bt-gallery grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bt-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Bachelorette Party Catering Questions
          </h2>

          <div className="bt-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bt-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

          <div className="bt-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bt-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="bt-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bt-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
          <p className="font-inter text-body-sm text-[#A3A3A3] text-center mt-10">
            Planning the other half of the celebration? Explore our{' '}
            <Link to="/bachelor-party-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">bachelor party catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bt-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan the Celebration
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Share the date, the venue, and the theme — we will style the grazing tables, the bar, and the dessert spread around it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bachelorette-party-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
