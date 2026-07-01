import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Heart,
  Users,
  Building2,
  ChefHat,
  Wine,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
  Search,
  ShoppingBag,
  Home,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book a private cooking class in Dubai (via mychef.ae/private-cooking-classes-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const classFormats = [
  {
    icon: Heart,
    title: 'Couples Date Night',
    description: 'A romantic, hands-on cooking class followed by a candlelit dinner in your own villa or apartment.',
    link: '/romantic-dinner-dubai',
  },
  {
    icon: Users,
    title: 'Family Masterclass',
    description: 'Fun, interactive sessions designed for adults and children to cook, learn, and eat together.',
    link: '/villas-private-residences',
  },
  {
    icon: Building2,
    title: 'Team Building',
    description: 'Collaborative cooking challenges and culinary competitions for corporate groups across Dubai.',
    link: '/corporate',
  },
  {
    icon: ChefHat,
    title: 'Cuisine-Focused Class',
    description: 'Italian pasta, sushi rolling, Middle Eastern mezze, or pastry workshops tailored to your taste.',
    link: '/italian-catering-dubai',
  },
  {
    icon: Wine,
    title: 'Chef-Led Dinner Party',
    description: 'Your chef demonstrates refined techniques while guests relax, sip, and enjoy a full dinner.',
    link: '/private-chef-dubai',
  },
]

const howItWorks = [
  {
    icon: Search,
    title: 'Choose Your Cuisine & Group',
    description: 'Pick a cuisine, date, and group size — from an intimate couple to a full corporate team.',
  },
  {
    icon: ShoppingBag,
    title: 'Chef Designs the Menu & Shops',
    description: 'Your private chef creates a bespoke menu and sources premium ingredients for the class.',
  },
  {
    icon: Home,
    title: 'Class at Your Villa or Venue',
    description: 'We bring everything to your kitchen across Dubai — villa, apartment, or event venue.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cook Together, Dine Together',
    description: 'Learn techniques hands-on, then sit down to enjoy the full meal you helped create.',
  },
  {
    icon: Sparkles,
    title: 'Chef Handles Cleanup',
    description: 'Leave the washing up to us. Your kitchen is left spotless after the experience.',
  },
]

const audienceGroups = [
  {
    title: 'Couples & Anniversary Celebrations',
    description: 'A private cooking class is a memorable date night or anniversary gift — cook together, then enjoy a romantic dinner without leaving home.',
  },
  {
    title: 'Families & Birthday Experiences',
    description: 'Celebrate a birthday with a hands-on family cooking class where everyone takes part, from kids to grandparents.',
  },
  {
    title: 'Corporate Team-Building Groups',
    description: 'Bring colleagues together with collaborative cooking challenges designed to build communication and morale.',
  },
  {
    title: 'Food-Loving Residents & Visitors',
    description: 'Whether you live in Dubai or are visiting, enjoy a chef-led culinary experience in the comfort of your own space.',
  },
  {
    title: 'Gift Voucher Recipients',
    description: 'A cooking class gift card is a thoughtful experience present — redeemable for any cuisine or occasion.',
  },
]

const includedItems = [
  { title: 'Private Chef / Instructor', description: 'A professional chef who guides you through every step of the class.' },
  { title: 'All Ingredients & Recipe Cards', description: 'Premium produce, proteins, and printed recipes to take home.' },
  { title: 'Aprons & Basic Tools', description: 'Everything you need to cook comfortably and safely.' },
  { title: 'Specialized Equipment', description: 'Pasta machines, sushi mats, and other tools for advanced techniques.' },
  { title: 'A Full Sit-Down Meal', description: 'Everything prepared during the class is served and enjoyed together.' },
  { title: 'Complete Cleanup', description: 'Your chef leaves the kitchen spotless after the experience.' },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Private chef dining experience in Dubai' },
  { src: '/service-private-chef.webp', alt: 'Chef-led cooking class in a Dubai villa' },
  { src: '/menu-appetizer.webp', alt: 'Fresh ingredients prepared during a cooking class' },
  { src: '/service-villa.webp', alt: 'Villa kitchen cooking class in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Plated dishes from a private chef experience' },
  { src: '/menu-dessert.webp', alt: 'Dessert plating at a chef-led dinner party' },
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
    q: 'Do you offer private cooking classes at home in Dubai?',
    a: 'Yes. Our chefs come to your villa, apartment, or venue with ingredients and equipment for a fully private cooking class.',
  },
  {
    q: 'Are cooking classes suitable for beginners?',
    a: 'Absolutely. Classes are tailored to your skill level, from complete beginners to confident home cooks.',
  },
  {
    q: 'Can we choose the cuisine for the class?',
    a: 'Yes. Popular options include Italian, Middle Eastern, Asian, sushi, pastry, and healthy cuisine, or we can design something unique.',
  },
  {
    q: 'Do you offer cooking classes for corporate team building?',
    a: 'Yes. We run collaborative cooking challenges and team-building culinary experiences for corporate groups across Dubai.',
  },
  {
    q: 'Is the meal included after the cooking class?',
    a: 'Yes. After cooking together, you sit down and enjoy the full meal you prepared, served by the chef.',
  },
]

const relatedServices = [
  {
    title: 'Private Chef Dubai',
    description: 'Bespoke private chef dining and full-service chef experiences in your home or villa.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Romantic Dinner Dubai',
    description: 'Intimate, chef-prepared romantic dinners for couples celebrating across Dubai.',
    image: '/romantic-dinner-dubai-hero.webp',
    link: '/romantic-dinner-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional dining and team-building culinary experiences for corporate events.',
    image: '/service-corporate.webp',
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
  name: 'Private Cooking Classes Dubai',
  serviceType: 'Cooking Class / Chef Experience',
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
    { '@type': 'ListItem', position: 2, name: 'Private Cooking Classes Dubai', item: 'https://mychef.ae/private-cooking-classes-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function PrivateCookingClassesDubai() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.pcc-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.pcc-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.pcc-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.pcc-fmt-card', {
      scrollTrigger: { trigger: '.pcc-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pcc-hiw-item', {
      scrollTrigger: { trigger: '.pcc-hiw-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pcc-uc-item', {
      scrollTrigger: { trigger: '.pcc-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pcc-inc-item', {
      scrollTrigger: { trigger: '.pcc-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pcc-gallery-img', {
      scrollTrigger: { trigger: '.pcc-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.pcc-faq-item', {
      scrollTrigger: { trigger: '.pcc-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pcc-loc-item', {
      scrollTrigger: { trigger: '.pcc-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.pcc-rel-card', {
      scrollTrigger: { trigger: '.pcc-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pcc-cta', {
      scrollTrigger: { trigger: '.pcc-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Cooking Classes Dubai | Chef Experience | myCHEF"
        description="Learn from a private chef with hands-on cooking classes in Dubai. Perfect for couples, families, and team building. Bespoke menus & premium ingredients."
        canonicalPath="/private-cooking-classes-dubai"
        ogImage="/images/private-cooking-classes-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/private-cooking-classes-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 pcc-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Private Cooking Classes Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 pcc-hero-h1">
            Private Cooking Classes & Chef Experiences in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 pcc-hero-sub">
            Hands-on cooking classes and chef-led dining experiences for couples, families, teams, and special occasions across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-cooking-classes-dubai" className="btn-primary opacity-0 translate-y-4 pcc-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 pcc-hero-cta"
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
            Cook, Learn, Dine
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Turn Your Kitchen Into a Private Culinary School
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A private cooking class is more than a meal — it is an experience. Whether you are planning a unique date night, a family celebration, or a corporate team-building activity, myCHEF Dubai brings a professional chef to your villa, apartment, or venue to teach, guide, and serve. You choose the cuisine, roll up your sleeves, and end the evening around the table enjoying the dishes you created.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From <Link to="/italian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Italian cooking classes</Link> to sushi rolling and Middle Eastern mezze, every session is bespoke. Pair it with a <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">romantic private dinner</Link>, book it as a <Link to="/gift-cards" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">cooking class gift card</Link>, or explore our full <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef service</Link> for an effortless chef-led evening.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Cooking Class Formats
            </span>
            <h2 className="font-playfair text-h2 text-white">
              A Chef Experience for Every Occasion
            </h2>
          </div>

          <div className="pcc-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="pcc-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 4: How It Works ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              How It Works
            </span>
            <h2 className="font-playfair text-h2 text-white">
              From Menu to Table in Five Steps
            </h2>
          </div>

          <div className="pcc-hiw-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={i} className="pcc-hiw-item bg-black p-8 opacity-0 translate-y-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={28} className="text-gold" />
                    <span className="font-inter text-caption text-gold">Step {i + 1}</span>
                  </div>
                  <h3 className="font-playfair text-h3 text-white mb-3">{step.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Use Cases ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Who It Is For
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Cooking Classes Made for You
            </h2>
          </div>

          <div className="pcc-uc-grid grid md:grid-cols-2 gap-6">
            {audienceGroups.map((uc, i) => (
              <div key={i} className="pcc-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What Is Included
          </h2>

          <div className="pcc-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="pcc-inc-item flex gap-3 opacity-0 -translate-x-5">
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
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            A Taste of Our Cooking Classes
          </h2>

          <div className="pcc-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="pcc-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Private Cooking Class Questions
          </h2>

          <div className="pcc-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="pcc-faq-item border border-gray-200 opacity-0 translate-y-5">
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
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Cooking Classes Across Dubai
          </h2>

          <div className="pcc-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="pcc-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="pcc-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="pcc-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center pcc-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book Your Private Cooking Class
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your group, preferred cuisine, and occasion. We will design a bespoke chef experience in Dubai around you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-cooking-classes-dubai" className="btn-primary">Request a Class Quote</Link>
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
