import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Flame,
  Beef,
  Wine,
  Ship,
  Home,
  Users,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to plan bachelor party catering (via mychef.ae/bachelor-party-catering-dubai)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const formats = [
  {
    icon: Flame,
    title: 'Live Grill & BBQ Stations',
    description:
      'Chef-manned grilling stations searing premium cuts to order. The smoke, the sizzle, and the showmanship that make a bachelor party feel like an event.',
  },
  {
    icon: Beef,
    title: 'Premium Meat Spreads',
    description:
      'Dry-aged steaks, wagyu sliders, lamb chops, and slow-smoked brisket. Carnivore-forward menus built for an appetite and an occasion.',
  },
  {
    icon: Wine,
    title: 'Cocktails & Bar Service',
    description:
      'Professional bartenders, signature cocktails, and a stocked bar. Classic old fashioneds, sharp negronis, and crowd-pleasers served all night.',
  },
  {
    icon: Ship,
    title: 'Yacht Party Catering',
    description:
      'Full catering for yacht charters across Dubai Marina. Canapes on departure, grilled mains at anchor, and bar service on the water.',
  },
  {
    icon: Home,
    title: 'Villa Takeovers',
    description:
      'Private villa parties with full setup, poolside grilling, and late-night bites. We handle the catering so the group handles the celebration.',
  },
  {
    icon: Users,
    title: 'Group-Sized Menus',
    description:
      'Sharing platters and family-style boards designed for big groups. Generous portions, zero fuss, and plenty for everyone.',
  },
]

const useCases = [
  {
    title: 'Yacht Send-Offs',
    description:
      'Charter a yacht in Dubai Marina and let us cater the deck. Passed canapes, a grilled lunch at anchor, and chilled drinks as the skyline rolls by.',
  },
  {
    title: 'Villa Pool Parties',
    description:
      'Take over a private villa with a poolside BBQ, a manned bar, and music. We set up, grill on demand, and pack down — you just enjoy the day.',
  },
  {
    title: 'Steakhouse-Style Dinners',
    description:
      'A private chef brings the steakhouse to you: dry-aged cuts, bold sides, and a curated drinks pairing for the groom and his crew.',
  },
  {
    title: 'Desert & Rooftop Nights',
    description:
      'From rooftop terraces to desert setups, we cater wherever the night takes you, with portable grilling stations and full bar service.',
  },
]

const includedItems = [
  { title: 'Custom Menu Build', description: 'A menu shaped around the group, the venue, and the appetite — built with you in advance.' },
  { title: 'Premium Cuts & Ingredients', description: 'Quality steaks, meats, and produce sourced from trusted Dubai suppliers.' },
  { title: 'Chef-Manned Grills', description: 'Experienced chefs running live BBQ and grilling stations throughout the event.' },
  { title: 'Professional Bartenders', description: 'Cocktail service and a stocked bar managed by skilled bar staff.' },
  { title: 'Full Setup & Service', description: 'We arrive early, set up the stations, serve through the night, and clean up after.' },
  { title: 'Flexible Venues', description: 'Yacht, villa, rooftop, or desert — we cater wherever the party is happening.' },
  { title: 'Sharing-Style Platters', description: 'Generous boards and platters designed for groups to dig into together.' },
  { title: 'On-Site Coordination', description: 'A coordinator keeps timing, service, and the bar running smoothly all evening.' },
]

const galleryImages = [
  { src: '/service-events.webp', alt: 'Bachelor party event catering in Dubai' },
  { src: '/menu-meat.webp', alt: 'Premium grilled meats for a bachelor party' },
  { src: '/menu-cocktails.webp', alt: 'Cocktail and bar service for a bachelor party' },
  { src: '/service-yacht.webp', alt: 'Yacht party catering in Dubai Marina' },
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
    q: 'Can you cater a bachelor party on a yacht in Dubai?',
    a: 'Yes. Yacht catering is one of our most requested bachelor party formats. We coordinate canapes for departure, grilled mains at anchor, and full bar service, all packed and served to suit your charter and group size.',
  },
  {
    q: 'Do you provide a bar and bartenders?',
    a: 'We do. Our bar service includes professional bartenders, signature and classic cocktails, and a stocked bar. Let us know the group size and preferences and we will build the drinks list around them.',
  },
  {
    q: 'Can you run a live BBQ or grill at a villa?',
    a: 'Absolutely. Chef-manned grilling stations are a signature part of our bachelor party catering. We set up at your villa, grill premium cuts to order, and handle the full setup and cleanup.',
  },
  {
    q: 'How many guests can you cater for?',
    a: 'We comfortably cater bachelor parties from small groups of close friends up to larger celebrations. Sharing-style platters and group menus are designed to scale, so tell us your numbers and we will plan accordingly.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'For most bachelor parties we recommend booking one to two weeks ahead, and earlier for yacht charters or peak season dates between November and March. Reach out as soon as you have a date to secure your preferred setup.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. While our bachelor party menus lean toward grills and premium meats, we always build in options for guests with specific dietary needs. Just flag any requirements when we design the menu together.',
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
    title: 'Yacht Catering',
    description: 'On-the-water catering for yacht charters and parties in Dubai Marina and beyond.',
    image: '/service-yacht.webp',
    link: '/yachts',
  },
  {
    title: 'Private Chef',
    description: 'A dedicated chef cooking a steakhouse-style dinner in your villa or home.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
]

const serviceObj = {
  '@type': 'Service',
  name: 'Bachelor Party Catering Dubai',
  serviceType: 'Bachelor Party Catering',
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
    { '@type': 'ListItem', position: 2, name: 'Bachelor Party Catering Dubai', item: 'https://mychef.ae/bachelor-party-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceObj, faqObj, breadcrumbObj],
}

/* ────────────────────── Component ────────────────────── */

export default function BachelorPartyCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.bp-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.bp-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.bp-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.bp-fmt-card', {
      scrollTrigger: { trigger: '.bp-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bp-use-item', {
      scrollTrigger: { trigger: '.bp-use-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bp-inc-item', {
      scrollTrigger: { trigger: '.bp-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bp-gallery-img', {
      scrollTrigger: { trigger: '.bp-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.bp-faq-item', {
      scrollTrigger: { trigger: '.bp-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.bp-loc-item', {
      scrollTrigger: { trigger: '.bp-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.bp-rel-card', {
      scrollTrigger: { trigger: '.bp-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.bp-cta', {
      scrollTrigger: { trigger: '.bp-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Bachelor Party Catering Dubai | Grills & Cocktails"
        description="Bachelor party catering in Dubai with live BBQ grills, premium meats, and cocktail bar service for yacht and villa parties. Request a custom proposal today."
        canonicalPath="/bachelor-party-catering-dubai"
        ogImage="/service-events.webp"
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
          <nav className="mb-6 opacity-0 translate-y-4 bp-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Bachelor Party Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 bp-hero-h1">
            Bachelor Party Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[600px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 bp-hero-sub">
            Live grills, premium cuts, and full cocktail service for the send-off. Catering built for yacht charters, villa takeovers, and unforgettable nights across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bachelor-party-catering-dubai" className="btn-primary opacity-0 translate-y-4 bp-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 bp-hero-cta"
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
            THE LAST NIGHT OUT
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Send-Off Worth Remembering
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A bachelor party deserves more than a table booking. Whether the crew is taking over a villa, chartering a yacht through Dubai Marina, or holding court on a rooftop, the food should match the occasion. Our bachelor party catering brings the grill, the bar, and the chefs straight to you, so the celebration never has to pause for a reservation.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            We lean into bold, carnivore-forward menus: dry-aged steaks, wagyu sliders, slow-smoked brisket, and lamb chops seared over live flame. Pair them with signature cocktails poured by professional bartenders and you have a setup designed for a long night with a great group. Every detail is planned with you in advance and available for Dubai events of all sizes. Browse our wider{' '}
            <Link to="/catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">catering in Dubai</Link>{' '}
            or jump straight to a{' '}
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bachelor-party-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Request a Proposal</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHAT WE BRING
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering Built for the Party
            </h2>
          </div>

          <div className="bp-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="bp-fmt-card bg-charcoal p-8 opacity-0 translate-y-12"
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
              Where We Cater Bachelor Parties
            </h2>
          </div>

          <div className="bp-use-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="bp-use-item bg-white p-8 border border-gray-200 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[680px] mx-auto mt-10 leading-relaxed">
            Planning something on the water? Our{' '}
            <Link to="/yachts" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">yacht catering</Link>{' '}
            covers the full charter, and for a steakhouse-style dinner at the villa, a{' '}
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">private chef</Link>{' '}
            brings the kitchen to you.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Your Catering Includes
          </h2>

          <div className="bp-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="bp-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of the Night
          </h2>

          <div className="bp-gallery grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="bp-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Bachelor Party Catering Questions
          </h2>

          <div className="bp-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bp-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="bp-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="bp-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="bp-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="bp-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            Planning the other half of the celebration? Explore our{' '}
            <Link to="/bachelorette-party-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">bachelorette party catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center bp-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan the Send-Off
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us the date, the venue, and the group — we will build the grill, the bar, and the menu around it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=bachelor-party-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
