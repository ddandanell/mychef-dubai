import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Heart,
  ChefHat,
  UtensilsCrossed,
  Cake,
  Wine,
  Home,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to plan an anniversary dinner (via mychef.ae/anniversary-catering-dubai)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const formats = [
  {
    icon: Heart,
    title: 'Romantic Private Dinners',
    description:
      'An intimate dinner for two at home, plated and served with quiet attention. The romance of a fine restaurant, in the comfort of your own space.',
  },
  {
    icon: ChefHat,
    title: 'Private Chef at Home',
    description:
      'A dedicated chef cooking course by course in your kitchen, so the evening unfolds in private with no reservations, no crowds, and no rushing.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Multi-Course Tasting Menus',
    description:
      'Considered tasting menus that move gracefully from canape to dessert, each course paced to let the conversation breathe.',
  },
  {
    icon: Cake,
    title: 'Dessert & Sweet Finishes',
    description:
      'A patisserie-led finale with a celebration dessert to mark the occasion, plated and presented to make the moment feel special.',
  },
  {
    icon: Wine,
    title: 'Pairings & Toasts',
    description:
      'Thoughtful drink pairings and toast-ready service, with cocktails or refined alcohol-free options to suit the evening.',
  },
  {
    icon: Home,
    title: 'Villa & Home Settings',
    description:
      'Full-service dining brought to your villa or home across Dubai. We set the table, serve each course, and clear away after.',
  },
]

const useCases = [
  {
    title: 'Dinner for Two at Home',
    description:
      'A private chef prepares a romantic multi-course dinner in your kitchen, plated and served just for the two of you. Intimate, unhurried, and entirely yours.',
  },
  {
    title: 'Milestone Anniversary Dinners',
    description:
      'A larger gathering to mark a significant anniversary, with a seated menu, attentive service, and a celebration dessert for the family or close friends.',
  },
  {
    title: 'Villa Tasting Menu Evenings',
    description:
      'A multi-course tasting menu served at a private villa, paced course by course with thoughtful pairings for a refined, relaxed evening.',
  },
  {
    title: 'Surprise Celebration Dinners',
    description:
      'A surprise dinner planned in advance and delivered seamlessly, so you can focus entirely on the moment while we handle every detail.',
  },
]

const includedItems = [
  { title: 'Bespoke Menu Design', description: 'A multi-course menu designed around your tastes, the occasion, and any dietary needs, planned in advance.' },
  { title: 'Premium Ingredients', description: 'Fresh, high-quality produce and ingredients sourced from trusted Dubai suppliers.' },
  { title: 'Dedicated Private Chef', description: 'An experienced chef cooking and plating each course in your home or villa.' },
  { title: 'Course-by-Course Service', description: 'Discreet, attentive service paced to let the evening unfold at its own rhythm.' },
  { title: 'Table Setting & Styling', description: 'Elegant tableware, linens, and presentation to set a romantic, considered scene.' },
  { title: 'Celebration Dessert', description: 'A patisserie-led dessert to mark the anniversary and close the evening on a sweet note.' },
  { title: 'Full Setup & Cleanup', description: 'We arrive early, prepare in your kitchen, serve throughout, and leave it spotless after.' },
  { title: 'Drink Pairings', description: 'Thoughtful pairings, cocktails, or refined alcohol-free options to complement each course.' },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Romantic anniversary dinner catering in Dubai' },
  { src: '/service-private-chef.webp', alt: 'Private chef preparing an anniversary dinner at home' },
  { src: '/menu-dessert.webp', alt: 'Celebration dessert for an anniversary dinner' },
  { src: '/service-villa.webp', alt: 'Intimate villa anniversary celebration in Dubai' },
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
    q: 'How does a private anniversary dinner at home work?',
    a: 'A dedicated chef arrives at your home or villa with everything needed, prepares your menu course by course in your kitchen, and serves each one with discreet attention. After the meal, the team clears and cleans up, leaving you to enjoy the evening without lifting a finger.',
  },
  {
    q: 'Can you create a romantic dinner for just two people?',
    a: 'Yes. An intimate dinner for two is one of our most requested anniversary experiences. We design a multi-course menu around your tastes, set a romantic table, and serve the evening privately in your own space.',
  },
  {
    q: 'Do you offer multi-course tasting menus?',
    a: 'We do. Our anniversary menus often take the form of a multi-course tasting menu, paced from canape to dessert with thoughtful drink pairings, so the evening flows gracefully and feels truly special.',
  },
  {
    q: 'Can you accommodate dietary requirements and favourite dishes?',
    a: 'Absolutely. We build every anniversary menu around you, including dietary needs, preferences, and even a meaningful dish you would like recreated. Just let us know when we design the menu together.',
  },
  {
    q: 'Can you cater a larger milestone anniversary celebration?',
    a: 'Yes. Alongside intimate dinners for two, we cater larger milestone anniversaries for family and close friends, with a seated menu, attentive service, and a celebration dessert scaled to your guest count.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'For an intimate private-chef dinner we recommend booking one to two weeks ahead, and earlier for larger celebrations or peak season dates between November and March. Reach out as soon as you have a date to secure your preferred service.',
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
    title: 'Private Chef',
    description: 'A dedicated chef cooking an intimate, bespoke menu in your home or villa.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Luxury Dining',
    description: 'Bespoke fine-dining experiences for a truly memorable evening.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
]

const serviceObj = {
  '@type': 'Service',
  name: 'Anniversary Dinner Catering Dubai',
  serviceType: 'Anniversary Dinner Catering',
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
    { '@type': 'ListItem', position: 2, name: 'Anniversary Dinner Catering Dubai', item: 'https://mychef.ae/anniversary-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceObj, faqObj, breadcrumbObj],
}

/* ────────────────────── Component ────────────────────── */

export default function AnniversaryCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.an-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.an-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.an-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.an-fmt-card', {
      scrollTrigger: { trigger: '.an-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.an-use-item', {
      scrollTrigger: { trigger: '.an-use-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.an-inc-item', {
      scrollTrigger: { trigger: '.an-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.an-gallery-img', {
      scrollTrigger: { trigger: '.an-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.an-faq-item', {
      scrollTrigger: { trigger: '.an-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.an-loc-item', {
      scrollTrigger: { trigger: '.an-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.an-rel-card', {
      scrollTrigger: { trigger: '.an-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.an-cta', {
      scrollTrigger: { trigger: '.an-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Anniversary Dinner Catering Dubai | Private Chef"
        description="Anniversary dinner catering in Dubai with romantic private-chef dinners at home, multi-course tasting menus, and celebration desserts. Request a custom proposal today."
        canonicalPath="/anniversary-catering-dubai"
        ogImage="/service-luxury-dining.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/romantic-dinner-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 an-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Anniversary Dinner Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 an-hero-h1">
            Anniversary Dinner Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[600px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 an-hero-sub">
            Romantic private-chef dinners at home, multi-course tasting menus, and celebration desserts. Intimate anniversary dining brought to your villa or home across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=anniversary-catering-dubai" className="btn-primary opacity-0 translate-y-4 an-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 an-hero-cta"
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
            CELEBRATE THE YEARS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Dinner Worthy of the Milestone
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            An anniversary deserves more than another night out. There is something quietly special about celebrating in your own space, with a chef cooking just for you and no table to vacate by a certain hour. Our anniversary dinner catering brings a dedicated private chef to your home or villa, preparing a romantic multi-course menu and serving it course by course while you simply enjoy the evening together.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether it is an intimate dinner for two or a larger milestone gathering with family, every menu is designed around your tastes, paced for conversation, and finished with a celebration dessert to mark the occasion. Our team handles the setup, the service, and the cleanup, available for Dubai homes and villas of every size. Explore our{' '}
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">private chef service</Link>{' '}
            or request a{' '}
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=anniversary-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">Request a Proposal</Link>.
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
              Dining Crafted for the Occasion
            </h2>
          </div>

          <div className="an-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="an-fmt-card bg-charcoal p-8 opacity-0 translate-y-12"
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
              How We Cater Anniversary Dinners
            </h2>
          </div>

          <div className="an-use-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="an-use-item bg-white p-8 border border-gray-200 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[680px] mx-auto mt-10 leading-relaxed">
            For a grander evening, explore our{' '}
            <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">luxury dining experiences</Link>, or browse our full range of{' '}
            <Link to="/catering-dubai" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Your Dinner Includes
          </h2>

          <div className="an-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="an-inc-item flex gap-3 opacity-0 -translate-x-5">
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

          <div className="an-gallery grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="an-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Anniversary Dinner Catering Questions
          </h2>

          <div className="an-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="an-faq-item border border-gray-200 opacity-0 translate-y-5">
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

          <div className="an-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="an-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="an-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="an-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
          <p className="font-inter text-body-sm text-gray-400 text-center mt-10">
            Marking the start of the journey instead? Explore our{' '}
            <Link to="/engagement-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">engagement party catering</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center an-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Anniversary Dinner
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share the date and your tastes — we will bring the chef, the menu, and the celebration to your table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=anniversary-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
