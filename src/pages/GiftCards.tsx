import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Gift,
  Heart,
  Users,
  ChefHat,
  Ship,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to buy a gift card (via mychef.ae/gift-cards)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const giftOptions = [
  {
    icon: Gift,
    title: 'Fixed Value Voucher',
    description: 'Choose a gift value that suits your budget. The recipient can apply it toward any private chef experience, dining event, or cooking class.',
    link: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=gift-cards',
  },
  {
    icon: Heart,
    title: 'Romantic Dinner for Two',
    description: 'A candlelit private chef dinner designed for couples — perfect for anniversaries, proposals, or an intimate date night in Dubai.',
    link: '/romantic-dinner-dubai',
  },
  {
    icon: Users,
    title: 'Family Private Chef Experience',
    description: 'A relaxed, restaurant-quality meal prepared and served in the comfort of your home or villa for the whole family.',
    link: '/private-chef-dubai',
  },
  {
    icon: ChefHat,
    title: 'Couples Cooking Class',
    description: 'A hands-on cooking class gift voucher where a myCHEF chef guides you through a bespoke menu in your own kitchen.',
    link: '/private-cooking-classes-dubai',
  },
  {
    icon: Ship,
    title: 'Yacht Day with Private Chef',
    description: 'Combine Dubai’s coastline with exceptional food — a private chef on board for a yacht day they will never forget.',
    link: '/yachts',
  },
]

const occasions = [
  {
    title: 'Birthdays',
    description: 'Give a birthday gift that stands out — a private chef dinner or experience voucher tailored to their tastes.',
  },
  {
    title: 'Anniversaries',
    description: 'Celebrate another year together with a romantic dining experience designed just for two.',
  },
  {
    title: 'Weddings & Engagements',
    description: 'A thoughtful present for newlyweds or engaged couples who appreciate fine food and intimate moments.',
  },
  {
    title: 'Housewarming',
    description: 'Help friends or family turn a new house into a home with a private chef dinner in their new space.',
  },
  {
    title: 'Corporate Gifts & Client Rewards',
    description: 'Luxury gift vouchers that leave a lasting impression on clients, partners, and high-performing teams.',
  },
  {
    title: 'Ramadan & Eid',
    description: 'Share the spirit of the season with an Iftar experience or private dining voucher for loved ones.',
  },
  {
    title: 'Mother’s & Father’s Day',
    description: 'Say thank you with a memorable meal — no cooking, no planning, just time together over exceptional food.',
  },
  {
    title: 'Christmas & New Year',
    description: 'Give the gift of a stress-free festive celebration or a luxurious start to the new year.',
  },
]

const howItWorks = [
  {
    num: '01',
    title: 'Choose Voucher Type & Value',
    description: 'Pick a fixed-value gift card or select a specific experience voucher.',
  },
  {
    num: '02',
    title: 'Personalize Your Message',
    description: 'Add a custom gift message to make the voucher feel truly personal.',
  },
  {
    num: '03',
    title: 'Select Delivery Method',
    description: 'Receive the gift card instantly by email, or request a printed voucher for a classic presentation.',
  },
  {
    num: '04',
    title: 'Recipient Books Their Experience',
    description: 'They contact us via WhatsApp or the inquiry form to reserve their preferred date and menu.',
  },
  {
    num: '05',
    title: 'Chef Designs & Delivers',
    description: 'Our chef plans, prepares, and serves the experience — leaving only memories behind.',
  },
]

const includedItems = [
  { title: 'Custom Gift Message', description: 'Personal wording included with every digital or printed voucher.' },
  { title: 'Instant Digital Delivery', description: 'Gift cards sent by email, ready to forward or print at home.' },
  { title: 'Printed Voucher Option', description: 'Elegant printed cards available for hand delivery or gifting.' },
  { title: 'Corporate Bulk Orders', description: 'Branded or co-branded voucher batches for client and team gifting.' },
  { title: 'Bespoke Menu Design', description: 'Every experience is built around the recipient’s preferences.' },
  { title: 'Premium Ingredient Sourcing', description: 'Fresh, high-quality produce and specialty items selected by the chef.' },
  { title: 'Private Chef & Service Staff', description: 'Professional chef and service team included in the experience.' },
  { title: 'Full Setup & Clear-Down', description: 'We handle everything from arrival to departure, leaving the space spotless.' },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Luxury private dining gift experience in Dubai' },
  { src: '/service-private-chef.webp', alt: 'Private chef preparing a gifted dinner in Dubai' },
  { src: '/service-villa.webp', alt: 'Villa private chef experience gift voucher Dubai' },
  { src: '/service-yacht.webp', alt: 'Yacht dining gift experience with private chef Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Appetizers served during a private chef gift dinner' },
  { src: '/menu-dessert.webp', alt: 'Dessert course for a Dubai private chef dining voucher' },
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
    q: 'Can I buy a myCHEF gift card for someone else?',
    a: 'Yes. You can purchase a gift voucher for a private chef experience, cooking class, or dining event and send it to someone else.',
  },
  {
    q: 'How are gift cards delivered?',
    a: 'Gift cards can be delivered instantly by email or as a printed voucher. Corporate bulk orders can be arranged.',
  },
  {
    q: 'Do gift cards expire?',
    a: 'Vouchers are typically valid for 12 months from the date of purchase. Terms are provided with each voucher.',
  },
  {
    q: 'Can the recipient choose their own menu or date?',
    a: 'Yes. The recipient contacts us to book their preferred date and works with our chef to design their bespoke menu.',
  },
  {
    q: 'Can I customize the gift card amount?',
    a: 'Yes. We offer fixed-value and experience vouchers, and can customize amounts for corporate or special requests.',
  },
]

const relatedServices = [
  {
    title: 'Private Chef Dubai',
    description: 'Fully bespoke private chef dinners and experiences in your home, villa, or yacht.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Romantic Dinner Dubai',
    description: 'Intimate, candlelit dining experiences designed for couples and special occasions.',
    image: '/images/romantic-dinner-dubai-hero.webp',
    link: '/romantic-dinner-dubai',
  },
  {
    title: 'Private Cooking Classes',
    description: 'Hands-on cooking lessons with a professional chef in the comfort of your own kitchen.',
    image: '/service-luxury-dining.webp',
    link: '/private-cooking-classes-dubai',
  },
]

const serviceSchema = {
  '@type': 'Service',
  name: 'Private Chef & Dining Experience Gift Cards Dubai',
  serviceType: 'Gift Voucher Service',
  provider: {
    '@type': 'FoodService',
    name: 'myCHEF Dubai',
    url: 'https://mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gift Card & Voucher Options',
    itemListElement: giftOptions.map((o) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: o.title },
    })),
  },
}

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Gift Cards Dubai', item: 'https://mychef.ae/gift-cards' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function GiftCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.gc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.gc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.gc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.gc-opt-card', {
      scrollTrigger: { trigger: '.gc-opt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.gc-occ-item', {
      scrollTrigger: { trigger: '.gc-occ-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gc-step-item', {
      scrollTrigger: { trigger: '.gc-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    gsap.to('.gc-inc-item', {
      scrollTrigger: { trigger: '.gc-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gc-gallery-img', {
      scrollTrigger: { trigger: '.gc-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.gc-faq-item', {
      scrollTrigger: { trigger: '.gc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.gc-loc-item', {
      scrollTrigger: { trigger: '.gc-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.gc-rel-card', {
      scrollTrigger: { trigger: '.gc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.gc-cta', {
      scrollTrigger: { trigger: '.gc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Gift Cards Dubai | Private Chef Experience"
        description="Give an unforgettable private chef experience in Dubai with myCHEF gift cards. Digital or printed vouchers for birthdays, anniversaries, and corporate gifts."
        canonicalPath="/gift-cards"
        ogImage="/images/gift-cards-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/gift-cards-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 gc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Gift Cards Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 gc-hero-h1">
            Private Chef & Dining Experience Gift Cards in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 gc-hero-sub">
            Give the gift of an unforgettable meal. myCHEF Dubai gift cards for private chef dinners, cooking classes, and luxury dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=gift-cards" className="btn-primary opacity-0 translate-y-4 gc-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 gc-hero-cta"
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
            THE GIFT OF EXPERIENCE
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Why a myCHEF Gift Card?
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Some gifts are opened once and forgotten. A myCHEF Dubai gift card is remembered long after the last course — an evening of exceptional food, personal service, and a setting designed around the people who matter most. Whether you are celebrating a birthday, marking an anniversary, welcoming someone to a new home, or thanking a valued client, a private chef experience in Dubai says more than any bottle, box, or bouquet ever could.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Our gift cards and dining vouchers can be used for a private chef dinner at home or in a villa, a couples' cooking class, a romantic meal for two, or even a yacht day with a chef on board. Each experience is planned around the recipient's tastes, dietary preferences, and occasion. Give a <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef dinner gift</Link>, a <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">romantic dinner gift voucher</Link>, or a <Link to="/private-cooking-classes-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">cooking class gift voucher</Link> — and let them choose the moment that becomes a lasting memory.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Gift Card Options ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              GIFT CARD OPTIONS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Choose the Perfect Gift
            </h2>
          </div>

          <div className="gc-opt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {giftOptions.map((opt, i) => {
              const Icon = opt.icon
              return (
                <Link
                  key={i}
                  to={opt.link}
                  className="gc-opt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{opt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed mb-4">
                    {opt.description}
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

      {/* ═══════════════ Section 4: Occasions ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              OCCASIONS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Moments Made for Gifting
            </h2>
          </div>

          <div className="gc-occ-grid grid md:grid-cols-2 gap-6">
            {occasions.map((occ, i) => (
              <div key={i} className="gc-occ-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{occ.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{occ.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: How It Works ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            How It Works
          </h2>

          <div className="gc-steps space-y-10">
            {howItWorks.map((step, i) => (
              <div key={i} className="gc-step-item flex gap-6 md:gap-8 opacity-0 translate-y-8">
                <span className="font-playfair text-[48px] text-gold leading-none flex-shrink-0 w-[60px] text-right">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-playfair text-h3 text-black mb-2">{step.title}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What's Included
          </h2>

          <div className="gc-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="gc-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 7: Gallery ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            A Taste of the Experience
          </h2>

          <div className="gc-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="gc-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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

      {/* ═══════════════ Section 8: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Gift Card Questions
          </h2>

          <div className="gc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="gc-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Section 9: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-[36px] text-white text-center mb-10">
            Gift Experiences Across Dubai
          </h2>

          <div className="gc-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="gc-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 10: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="gc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="gc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 11: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center gc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send an Experience They’ll Never Forget
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Give more than a meal — give a memory. Request a personalized gift card or voucher proposal today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=gift-cards" className="btn-primary">Request a Proposal</Link>
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
