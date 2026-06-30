import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  GlassWater,
  Leaf,
  Users,
  Building2,
  Moon,
  Baby,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan a mocktail bar in Dubai (via mychef.ae/mocktail-bar-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const mocktailFormats = [
  {
    icon: GlassWater,
    title: 'Craft Mocktail Bar',
    description: 'A styled bar where mixologists shake fresh, alcohol-free signatures to order, with the same craft and theatre as a full cocktail service.',
    link: '/cocktail-party-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Fresh & Botanical Drinks',
    description: 'Cold-pressed juices, botanical infusions, and herb-forward refreshers built from fresh fruit, herbs, and house syrups.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Family & Kids Friendly',
    description: 'Bright, fun, alcohol-free drinks the whole family can enjoy, from playful kids’ creations to elegant grown-up refreshers.',
    link: '/birthday-catering-dubai',
  },
  {
    icon: Building2,
    title: 'Corporate Mocktail Service',
    description: 'A polished, inclusive bar for launches, conferences, and office celebrations where every guest is equally well looked after.',
    link: '/corporate',
  },
  {
    icon: Moon,
    title: 'Ramadan & Iftar Bars',
    description: 'Refreshing, alcohol-free drink stations designed for Iftar gatherings and Ramadan majlis, from dates-and-laban to fruit coolers.',
    link: '/iftar-catering-dubai',
  },
  {
    icon: Baby,
    title: 'Baby & Bridal Showers',
    description: 'Soft, pastel mocktail menus styled to suit baby showers, bridal afternoons, and gentle daytime celebrations.',
    link: '/baby-shower-catering-dubai',
  },
]

const includedItems = [
  { title: 'Signature Mocktail Menu', description: 'A bespoke alcohol-free drinks list designed around your theme.' },
  { title: 'Skilled Bartenders', description: 'Mixologists crafting fresh mocktails with full bar theatre.' },
  { title: 'Fresh Produce & Syrups', description: 'Seasonal fruit, herbs, and house-made syrups and infusions.' },
  { title: 'Styled Mobile Bar', description: 'A bar set-up suited to villas, offices, and event venues.' },
  { title: 'Juice & Cooler Stations', description: 'Cold-pressed juices, infusions, and refreshing coolers.' },
  { title: 'Family-Friendly Options', description: 'Playful, kid-friendly creations alongside elegant refreshers.' },
  { title: 'Glassware & Garnishes', description: 'Quality glassware, garnishes, and elegant presentation.' },
  { title: 'Full Set-Up & Clear-Down', description: 'We arrive early, run the bar, and leave the space spotless.' },
]

const useCases = [
  {
    title: 'Ramadan & Iftar Gatherings',
    description: 'An alcohol-free craft bar suits the spirit of Ramadan perfectly. We design refreshing drink stations for Iftar and majlis gatherings — date-and-laban classics, fruit coolers, and botanical refreshers served with care.',
  },
  {
    title: 'Family & Children’s Celebrations',
    description: 'For birthdays, family days, and gatherings with younger guests, a mocktail bar brings colour and fun without alcohol. Bright, playful creations for kids sit alongside elegant refreshers for the adults.',
  },
  {
    title: 'Corporate & Inclusive Events',
    description: 'A mocktail bar makes corporate launches, conferences, and office celebrations welcoming to everyone. The same craft and theatre as a cocktail bar, served so no guest feels left out of the experience.',
  },
  {
    title: 'Showers & Daytime Soirées',
    description: 'Baby showers, bridal afternoons, and relaxed daytime events call for fresh, photogenic drinks. We style soft, seasonal mocktail menus to match your palette and the gentle mood of the occasion.',
  },
]

const galleryImages = [
  { src: '/menu-cocktails.jpg', alt: 'Craft mocktail bar service in Dubai' },
  { src: '/service-events.jpg', alt: 'Event mocktail bar set-up' },
  { src: '/menu-appetizer.jpg', alt: 'Fresh appetizers with mocktail service' },
  { src: '/service-villa.jpg', alt: 'Villa mocktail bar in Dubai' },
  { src: '/menu-canapes.jpg', alt: 'Canapés paired with mocktails' },
  { src: '/menu-dessert.jpg', alt: 'Sweet pairings for a mocktail bar' },
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
    q: 'What is a mocktail bar?',
    a: 'A mocktail bar is a fully alcohol-free drinks station where skilled bartenders craft fresh, sophisticated mocktails to order. It brings the same theatre, presentation, and quality as a cocktail bar, with no alcohol involved.',
  },
  {
    q: 'Is the mocktail bar suitable for Ramadan and Iftar?',
    a: 'Yes. Our mocktail bar is entirely alcohol-free and a popular choice for Iftar gatherings and Ramadan majlis. We design refreshing menus with classics like date-and-laban alongside fruit coolers and botanical infusions.',
  },
  {
    q: 'Do you cater for families and children?',
    a: 'Absolutely. We create bright, playful drinks for younger guests alongside elegant refreshers for adults, making the mocktail bar a fun, inclusive feature for birthdays, family days, and celebrations of every age.',
  },
  {
    q: 'Can you build a menu around a theme or palette?',
    a: 'Yes. We design signature mocktail menus around your event theme, colour palette, and the season, using fresh fruit, herbs, and house-made syrups so the bar feels considered and bespoke to your occasion.',
  },
  {
    q: 'Do you provide the bar, bartenders, and glassware?',
    a: 'Yes. We bring a styled mobile bar, professional bartenders, fresh produce, glassware, and garnishes. The bar is set up to suit your venue, whether that is a villa, office, or event space.',
  },
  {
    q: 'How far in advance should I book a mocktail bar?',
    a: 'For smaller gatherings, one to two weeks is ideal. For larger or fully styled bars, we recommend two to four weeks. During Ramadan and peak season from November to March, earlier booking is strongly advised.',
  },
]

const relatedServices = [
  {
    title: 'Cocktail Party Catering',
    description: 'Mixologists, signature cocktails, and canapés for receptions across Dubai.',
    image: '/menu-cocktails.jpg',
    link: '/cocktail-party-catering-dubai',
  },
  {
    title: 'Iftar Catering',
    description: 'Refined Iftar menus and drink stations for Ramadan gatherings and majlis.',
    image: '/service-events.jpg',
    link: '/iftar-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional dining and inclusive bar service for corporate events.',
    image: '/menu-appetizer.jpg',
    link: '/corporate',
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
  name: 'Mocktail Bar Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Mocktail Bar Catering Dubai', item: 'https://mychef.ae/mocktail-bar-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function MocktailBarCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.moc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.moc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.moc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.moc-fmt-card', {
      scrollTrigger: { trigger: '.moc-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.moc-uc-item', {
      scrollTrigger: { trigger: '.moc-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.moc-inc-item', {
      scrollTrigger: { trigger: '.moc-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.moc-gallery-img', {
      scrollTrigger: { trigger: '.moc-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.moc-faq-item', {
      scrollTrigger: { trigger: '.moc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.moc-loc-item', {
      scrollTrigger: { trigger: '.moc-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.moc-rel-card', {
      scrollTrigger: { trigger: '.moc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.moc-cta', {
      scrollTrigger: { trigger: '.moc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Mocktail Bar Dubai | Alcohol-Free Craft Bar"
        description="Mocktail bar catering in Dubai with crafted alcohol-free drinks for family, corporate, and Ramadan events. Skilled bartenders, fresh menus, styled bar and full service."
        canonicalPath="/mocktail-bar-catering-dubai"
        ogImage="/menu-cocktails.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/cocktail-party-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 moc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Mocktail Bar Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 moc-hero-h1">
            Mocktail Bar Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 moc-hero-sub">
            A crafted, alcohol-free bar with all the theatre of mixology — perfect for family and corporate celebrations, and Ramadan-friendly across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=mocktail-bar-catering-dubai" className="btn-primary opacity-0 translate-y-4 moc-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 moc-hero-cta"
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
            ALCOHOL-FREE CRAFT BAR
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The Craft of a Cocktail Bar, Without the Alcohol
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            A mocktail bar proves that alcohol-free can still feel special. With skilled bartenders, fresh fruit and herbs, house-made syrups, and a styled bar, our mocktail service delivers all the theatre and refinement of a full cocktail bar — only every guest, of every age, can enjoy it. At myCHEF Dubai, we design each menu around your event, your palette, and the season.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Whether you are hosting an Iftar gathering during Ramadan, a family birthday, an inclusive corporate launch, or a gentle baby shower, our mocktail bar brings colour, freshness, and a genuine sense of occasion. Explore our mocktail formats below, or see how the bar pairs with our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MOCKTAIL FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              An Alcohol-Free Bar for Every Occasion
            </h2>
          </div>

          <div className="moc-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mocktailFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="moc-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE WE SERVE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Mocktails for Every Gathering
            </h2>
          </div>

          <div className="moc-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="moc-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Mocktail Bar Includes
          </h2>

          <div className="moc-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="moc-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Mocktail Bar
          </h2>

          <div className="moc-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="moc-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Mocktail Bar Questions
          </h2>

          <div className="moc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="moc-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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

          <div className="moc-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="moc-loc-item flex items-center gap-2 font-inter text-sm text-[#A3A3A3] hover:text-gold transition-colors opacity-0"
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

          <div className="moc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="moc-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center moc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Mocktail Bar
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design an alcohol-free bar and menu that fits your theme, guests, and occasion perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=mocktail-bar-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
