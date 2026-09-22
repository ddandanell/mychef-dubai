// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-cooking-classes-dubai
//     primary:     "private cooking classes dubai"
//     subkeywords: "private cooking classes dubai price" · "cooking class cost per person dubai" · "best private cooking classes dubai" · "cooking class packages dubai" · "cooking classes at home dubai" · "couples cooking class dubai" · "cooking classes rates dubai" · "cooking classes availability dubai" · "cooking classes in dubai for adults" · "cooking classes in dubai for beginners" · "group cooking classes dubai" · "private cooking class dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'
import {
  Heart,
  Users,
  Building2,
  ChefHat,
  Wine,
  Check,
  Phone,
  ArrowRight,
  Search,
  ShoppingBag,
  Home,
  UtensilsCrossed,
  Sparkles,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book a private cooking class in Dubai (via mychef.ae/private-cooking-classes-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const classFormats = [
  {
    icon: Heart,
    title: 'Couples Date Night',
    description: 'Cook together, then sit down and eat what you made. For two, at home, when dinner out is the wrong format.',
    link: '/romantic-dinner-dubai',
  },
  {
    icon: Users,
    title: 'Family Masterclass',
    description: 'Adults and children cooking the same dishes, with the chef working alongside rather than demonstrating from the pass.',
    link: '/villas-private-residences',
  },
  {
    icon: Building2,
    title: 'Team Building',
    description: 'A team in one kitchen, cooking the same menu. For offices that want an activity that is not another dinner.',
    link: '/corporate',
  },
  {
    icon: ChefHat,
    title: 'Cuisine-Focused Class',
    description: 'Pasta, sushi, mezze or pastry, confirmed against a chef who actually teaches that subject.',
    link: '/italian-catering-dubai',
  },
  {
    icon: Wine,
    title: 'Chef-Led Dinner Party',
    description: 'The chef cooks and talks through the plates. Guests eat. That is a dinner with teaching, not a class. Different brief.',
    link: '/private-chef-dubai',
  },
]

const howItWorks = [
  {
    icon: Search,
    title: 'Choose Your Cuisine & Group',
    description: 'Cuisine, date and group size: two people, a family, or a team. The kitchen you have is checked before we confirm.',
  },
  {
    icon: ShoppingBag,
    title: 'Chef Designs the Menu & Shops',
    description: 'The chef writes the dishes for this group and shops for them. You approve the menu before the date.',
  },
  {
    icon: Home,
    title: 'Class at Your Villa or Venue',
    description: 'The class happens in your villa, apartment or venue kitchen. Equipment the room lacks is brought in.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cook Together, Dine Together',
    description: 'Learn techniques hands-on, then sit down to enjoy the full meal you helped create.',
  },
  {
    icon: Sparkles,
    title: 'Chef Handles Cleanup',
    description: 'The kitchen is left as it was found. You sit down and eat.',
  },
]

const audienceGroups = [
  {
    title: 'Couples & Anniversary Celebrations',
    description: 'Cook together, then eat what you made, at home. A different night from a restaurant table for two.',
  },
  {
    title: 'Families & Birthday Experiences',
    description: 'A family class where children and adults cook the same dishes. Tell us the ages so the session is designed properly.',
  },
  {
    title: 'Corporate Team-Building Groups',
    description: 'Colleagues in one kitchen, cooking a shared menu. For teams that do not want another seated dinner.',
  },
  {
    title: 'Food-Loving Residents & Visitors',
    description: 'Residents and visitors: the class is in your kitchen. The subject is confirmed against a chef who teaches it well.',
  },
  {
    title: 'Booked in someone else’s name',
    description: 'We can hold a class date for someone else. They still choose the cuisine. There is no stored-value voucher.',
  },
]

const includedItems = [
  { title: 'Chef who teaches', description: 'A professional chef working alongside you, not a demonstration from the pass.' },
  { title: 'Ingredients and recipes', description: 'Shopping for the class, plus printed recipes to take home.' },
  { title: 'Aprons and tools', description: 'What you need to cook in that kitchen without raiding the drawers.' },
  { title: 'Specialist kit', description: 'Pasta machines, sushi mats and other tools when the subject needs them.' },
  { title: 'The meal you made', description: 'You sit down and eat what you cooked. That is part of the booking.' },
  { title: 'Clear-down', description: 'The kitchen is left as it was found.' },
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

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


const faqs = [
  {
    q: 'Do you offer private cooking classes at home in Dubai?',
    a: 'Yes. Chefs in our network come to your villa, apartment, or venue with ingredients and equipment for a fully private cooking class.',
  },
  {
    q: 'Are cooking classes suitable for beginners?',
    a: 'Yes. The session is written for the group in the room, from first-time cooks to people who already cook at home.',
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
    description: 'A chef who comes back to the house, not a one-night class.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Romantic Dinner Dubai',
    description: 'Intimate, chef-prepared romantic dinners for couples celebrating across Dubai.',
    image: '/images/romantic-dinner-dubai-hero.webp',
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
    '@type': 'Organization',
    '@id': 'https://www.mychef.ae/#organization',
    name: 'myCHEF',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  areaServed: 'Dubai, UAE',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Private Cooking Classes Dubai', item: 'https://www.mychef.ae/private-cooking-classes-dubai' },
  ],
}

const howToSchema = {
  '@type': 'HowTo',
  name: 'How to Book a Private Cooking Class in Dubai',
  description: 'Five steps: choose the cuisine and group, approve the menu, cook in your kitchen, eat what you made, kitchen left as found.',
  totalTime: 'P1D',
  step: howItWorks.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema, howToSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in private cooking classes in Dubai. Date: __ Guests: __ Area: __"
export default function PrivateCookingClassesDubai() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

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
        title="Private Cooking Classes Dubai | myCHEF"
        description="Private cooking classes Dubai: a chef in your kitchen, you cook, then you eat. Couples, families and teams. Ingredients, kit and clear-down included. Send the group size and cuisine."
        canonicalPath="/private-cooking-classes-dubai"
        ogImage="/images/private-cooking-classes-dubai-hero.webp"
        hideSiteName
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
            Private Cooking Classes Dubai: Chef-Led Lessons at Home
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 pcc-hero-sub">
            Private cooking classes in Dubai, hosted in your own kitchen. Learn from a professional chef, prepare a menu together and sit down to enjoy it. Ingredients, agreed equipment and kitchen clear-down are included.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 pcc-hero-cta">Get a cooking class quote</Link>
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

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">Cook, Learn, Dine</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            What private cooking classes Dubai include
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            A private cooking class is a hands-on experience tailored to your interests. Your chef brings the ingredients, guides you through the techniques and helps you prepare a meal to share. Choose your cuisine and experience level, and we will recommend a suitable session.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Sessions can be planned for couples, families or teams, with the group size matched to the kitchen and teaching format. Beginners and confident cooks are welcome. The booking includes ingredients, recipes and kitchen clear-down.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Pasta, sushi and mezze are common starting points. Pair a class with a <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">romantic dinner</Link> only if you want two different nights. Book it <Link to="/gift-cards" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">in their name</Link> if they should still choose the cuisine. A standing household chef is a different product: see <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">Cooking Class Formats</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Who the class is for
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
            <SectionLabel align="center" tone="dark">How It Works</SectionLabel>
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
            <SectionLabel align="center" tone="dark">Who It Is For</SectionLabel>
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
            Private Cooking Classes Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 9: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Cooking Classes Across Dubai
          </h2>

          <div className="pcc-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
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
                    {svc.title} <ArrowRight size={14} />
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
            Send the group size, cuisine and date
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Couples, family or a team. Tell us the kitchen and what you want to learn. We match a chef who teaches that subject, then send an itemised proposal.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get a cooking class quote</Link>
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
