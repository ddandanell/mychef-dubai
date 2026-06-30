import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  Sparkles,
  Cake,
  Home,
  Wine,
  Gem,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to plan engagement party catering (via mychef.ae/engagement-catering-dubai)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const formats = [
  {
    icon: UtensilsCrossed,
    title: 'Refined Plated Dinners',
    description:
      'Elegant multi-course dinners with professional table service. A considered menu and seamless serving for an evening that feels special from the first course.',
  },
  {
    icon: Sparkles,
    title: 'Canape Receptions',
    description:
      'Sophisticated passed canapes and bite-sized plates for a stand-up reception, perfect for mingling guests, toasts, and a relaxed celebratory atmosphere.',
  },
  {
    icon: Cake,
    title: 'Dessert Tables',
    description:
      'Styled dessert spreads with patisserie, petit fours, and a statement centrepiece to mark the occasion and give the evening a memorable finish.',
  },
  {
    icon: Home,
    title: 'Intimate Villa Celebrations',
    description:
      'Full-service catering for private villa engagements across Dubai. We set up, serve, and clear away so you can be fully present with your guests.',
  },
  {
    icon: Wine,
    title: 'Drinks & Toasts',
    description:
      'A polished bar with signature cocktails, mocktails, and toast-ready service, poured by professional staff throughout the celebration.',
  },
  {
    icon: Gem,
    title: 'Tailored Presentation',
    description:
      'Table styling, linens, and plating designed to complement your theme and create an elegant, photograph-worthy setting for the announcement.',
  },
]

const useCases = [
  {
    title: 'Intimate Villa Dinners',
    description:
      'A seated multi-course dinner at a private villa for close family and friends. Refined plating, attentive service, and a calm, celebratory atmosphere.',
  },
  {
    title: 'Canape & Cocktail Receptions',
    description:
      'A stand-up reception with passed canapes and a polished bar, ideal for a larger guest list and a relaxed evening of toasts and conversation.',
  },
  {
    title: 'Garden & Terrace Celebrations',
    description:
      'Outdoor engagement parties in gardens or on terraces, with full setup, elegant styling, and service tailored to the open-air setting.',
  },
  {
    title: 'Family Announcement Dinners',
    description:
      'An intimate gathering to share the news with family, plated and served at home, leaving you free to focus on the moment that matters.',
  },
]

const includedItems = [
  { title: 'Bespoke Menu Design', description: 'A multi-course or canape menu created around your taste, theme, and guest list, planned in advance.' },
  { title: 'Premium Ingredients', description: 'Fresh, high-quality produce and ingredients sourced from trusted Dubai suppliers.' },
  { title: 'Professional Chefs', description: 'An experienced culinary team preparing and plating each course with care.' },
  { title: 'Service Staff', description: 'Waiters, hosts, and bar staff scaled to your event size for seamless service.' },
  { title: 'Table Setting & Styling', description: 'Elegant tableware, linens, and presentation styling to complement your celebration.' },
  { title: 'Dessert & Toast Service', description: 'A styled dessert table and toast-ready drinks service for the high points of the evening.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, set the scene, serve throughout, and clear everything away after.' },
  { title: 'On-Site Coordination', description: 'A coordinator manages timing and service so the evening unfolds effortlessly.' },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Refined plated engagement dinner in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Elegant canapes for an engagement reception' },
  { src: '/menu-dessert.webp', alt: 'Styled dessert table for an engagement party' },
  { src: '/service-villa.webp', alt: 'Intimate villa engagement celebration in Dubai' },
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
    q: 'What type of catering suits an engagement party?',
    a: 'It depends on the style of celebration. Intimate gatherings often call for a refined plated dinner, while larger receptions suit passed canapes with a polished bar. We help you choose the right format for your guest list and venue, and tailor the menu accordingly.',
  },
  {
    q: 'Can you cater an engagement party at a private villa?',
    a: 'Yes. Private villa celebrations are among our most requested engagement formats. We bring full setup, plating, table styling, and service to your home or villa, and handle the cleanup afterwards so you can simply enjoy the evening.',
  },
  {
    q: 'Do you provide a styled dessert table?',
    a: 'We do. A styled dessert table with patisserie and a statement centrepiece is a popular finishing touch for engagement parties. Share your theme and colours and we will design the presentation to match.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Absolutely. We build every engagement menu around your guests, including options for specific dietary needs and preferences. Just let us know when we design the menu together and we will plan around them.',
  },
  {
    q: 'How many guests can you cater for?',
    a: 'We cater intimate engagement dinners for close family as well as larger receptions. Plated menus, canape spreads, and dessert tables all scale to your numbers, so tell us the headcount and we will plan to suit.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'For most engagement parties we recommend booking two to four weeks ahead, and earlier for larger receptions or peak season dates between November and March. Reach out as soon as you have a date to secure your preferred service.',
  },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Full-service event catering across Dubai for celebrations of every size and style.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Wedding Catering',
    description: 'Elegant wedding receptions, rehearsal dinners, and bespoke menus for your big day.',
    image: '/service-events.webp',
    link: '/wedding-catering-dubai',
  },
  {
    title: 'Luxury Dining',
    description: 'Bespoke fine-dining experiences for a truly memorable celebration.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
]

const serviceObj = {
  '@type': 'Service',
  name: 'Engagement Party Catering Dubai',
  serviceType: 'Engagement Party Catering',
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
    { '@type': 'ListItem', position: 2, name: 'Engagement Party Catering Dubai', item: 'https://mychef.ae/engagement-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceObj, faqObj, breadcrumbObj],
}

/* ────────────────────── Component ────────────────────── */

export default function EngagementCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.en-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.en-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.en-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.en-fmt-card', {
      scrollTrigger: { trigger: '.en-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.en-use-item', {
      scrollTrigger: { trigger: '.en-use-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.en-inc-item', {
      scrollTrigger: { trigger: '.en-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.en-gallery-img', {
      scrollTrigger: { trigger: '.en-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.en-faq-item', {
      scrollTrigger: { trigger: '.en-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.en-loc-item', {
      scrollTrigger: { trigger: '.en-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.en-rel-card', {
      scrollTrigger: { trigger: '.en-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.en-cta', {
      scrollTrigger: { trigger: '.en-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Engagement Party Catering Dubai | Plated & Canapes"
        description="Engagement party catering in Dubai with refined plated dinners, canape receptions, and dessert tables for intimate villa celebrations. Request a custom proposal today."
        canonicalPath="/engagement-catering-dubai"
        ogImage="/service-luxury-dining.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/celebration-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 en-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Engagement Party Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 en-hero-h1">
            Engagement Party Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[600px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 en-hero-sub">
            Refined plated dinners, sophisticated canape receptions, and styled dessert tables. Elegant catering for intimate villa engagement celebrations across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=engagement-catering-dubai" className="btn-primary opacity-0 translate-y-4 en-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 en-hero-cta"
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
            MARK THE MOMENT
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            An Evening to Celebrate the News
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            An engagement party is a chance to gather the people who matter most and celebrate the start of something new. Whether you are hosting an intimate dinner for close family or a larger reception for friends, the catering sets the tone for the evening. Our engagement party catering brings refined plated dinners, sophisticated canape receptions, and beautifully styled dessert tables to your chosen venue across Dubai.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Each menu is designed around your taste, your theme, and your guest list, with elegant table styling, attentive service, and a polished bar to mark every toast. Our team handles the setup, serves throughout, and clears it all away, available for Dubai celebrations of every size. Explore our wider{' '}
            <Link to="/catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">catering in Dubai</Link>{' '}
            or request a{' '}
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=engagement-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Request a Proposal</Link>.
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
              Catering Crafted for the Occasion
            </h2>
          </div>

          <div className="en-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="en-fmt-card bg-charcoal p-8 opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
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
              Where We Cater Engagement Parties
            </h2>
          </div>

          <div className="en-use-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="en-use-item bg-white p-8 border border-gray-200 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[680px] mx-auto mt-10 leading-relaxed">
            Already thinking ahead to the big day? Explore our{' '}
            <Link to="/wedding-catering-dubai" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">wedding catering</Link>, or elevate the evening into a full{' '}
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

          <div className="en-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="en-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of the Evening
          </h2>

          <div className="en-gallery grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="en-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
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
            Engagement Party Catering Questions
          </h2>

          <div className="en-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="en-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="en-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="en-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="en-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="en-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
                  <p className="font-inter text-body-sm text-gray-400 mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="font-inter text-body-sm text-gray-400 text-center mt-10">
            Celebrating a milestone together? Explore our{' '}
            <Link to="/anniversary-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">anniversary dinner catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center en-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan the Celebration
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share the date, the venue, and your vision — we will craft the menu, the styling, and the service around it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=engagement-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
