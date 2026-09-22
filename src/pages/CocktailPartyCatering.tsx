import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /cocktail-party-catering-dubai
//     primary:     "cocktail party catering dubai"
//     subkeywords: "cocktail party catering dubai price" · "cocktail party catering price per person dubai" · "best cocktail party catering dubai" · "cocktail party catering packages dubai" · "cocktail party catering menu dubai" · "cocktail reception catering dubai" · "cocktail making class dubai" · "cost of party catering" · "party buffet catering near me" · "party sandwiches catering near me" · "pool party catering price per person dubai" · "private party catering near me"
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
  Martini,
  Wine,
  Building2,
  Ship,
  Sparkles,
  Users,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'
import { CATERING_FORMAT_BY_ID } from '@/content/cateringPricing'

const CANAPES = CATERING_FORMAT_BY_ID.canapes

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan cocktail party catering in Dubai (via mychef.ae/cocktail-party-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const cocktailFormats = [
  {
    icon: Martini,
    title: 'Bar service, where licensed',
    description: 'Bartenders at a bar we bring. Cocktails only when the venue is licensed or the quotation says so. Mocktails otherwise.',
    link: '/catering-dubai',
  },
  {
    icon: Sparkles,
    title: 'Passed canapés',
    description: 'One-bite food moved through a standing room. From AED 150 per person, from 10 guests. Detail lives on the canapé page.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Building2,
    title: 'Rooftop receptions',
    description: 'Compact canapés and a small bar footprint for a terrace. Wind, lift access and the building’s drinks rules decide the kit.',
    link: '/catering-dubai',
  },
  {
    icon: Ship,
    title: 'Yacht and marina',
    description: 'Mess-free canapés and a bar the operator will accept. Alcohol follows the charter rules, not a hope.',
    link: '/yachts',
  },
  {
    icon: Wine,
    title: 'Wine and sparkling, if permitted',
    description: 'Pours listed on the quote. We do not assume a champagne reception in a private home.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Corporate standing receptions',
    description: 'Launches and networking where people stay on their feet. Food is passed. The agenda does not stop for a buffet queue.',
    link: '/corporate',
  },
]

const includedItems = [
  { title: 'Drinks list', description: 'Cocktails where licensed, mocktails as standard. Written before the night.' },
  { title: 'Bartenders', description: 'Staff behind the bar, sized to the guest count.' },
  { title: 'Passed canapés', description: 'Servers moving bites through the room. Quantities follow how long people stand.' },
  { title: 'Spirits, mixers or BYO', description: 'Supplied by us or by you. Named on the proposal so setup is not a surprise.' },
  { title: 'Mobile bar', description: 'Counter, glassware, ice and garnishes for a villa, rooftop, yacht or venue.' },
  { title: 'Mocktails', description: 'Alcohol-free drinks for mixed tables and dry rooms. Same bar, same staff.' },
  { title: 'Service staff', description: 'Bartenders and waiters scaled to headcount. Not assumed if you only want the chef.' },
  { title: 'Setup and clear-down', description: 'We build the bar, run the window and leave the room as we found it.' },
]

const useCases = [
  {
    title: 'Rooftop and terrace',
    description: 'A standing hour on a terrace: compact canapés, a small bar, and a drinks list that matches the building’s rules. Downtown and Marina rooftops are typical.',
  },
  {
    title: 'Yacht and marina',
    description: 'Canapés that hold on a deck, and a bar the operator will load. Alcohol is the charter’s decision. We pack to their window.',
  },
  {
    title: 'Villa receptions',
    description: 'A standing party at home. We bring the bar and the trays. You stay with guests. Open flame and alcohol still follow the house and the quotation.',
  },
  {
    title: 'Corporate networking',
    description: 'A launch or client hour where people need a glass and a bite in one hand. Passed food from AED 150 per person. Drinks only where the venue is licensed.',
  },
]

const galleryImages = [
  { src: '/menu-cocktails.webp', alt: 'Cocktail party service in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Passed canapés at a reception' },
  { src: '/service-luxury-dining.webp', alt: 'Luxury dining cocktail reception' },
  { src: '/service-events.webp', alt: 'Event cocktail bar set-up' },
  { src: '/service-villa.webp', alt: 'Villa cocktail party in Dubai' },
  { src: '/menu-seafood.webp', alt: 'Seafood canapés for cocktails' },
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
    q: 'What does cocktail party catering include?',
    a: 'Passed canapés, a bar we bring, bartenders, glassware and a drinks list. Cocktails only where the venue is licensed or the quotation says so. Mocktails otherwise. Setup and clear-down are in the booking.',
  },
  {
    q: 'Do you provide the bar, glassware, and bartenders?',
    a: 'Yes. Counter, glassware, ice, garnishes and bartenders. The quote names how many people stand behind the bar.',
  },
  {
    q: 'Can you create signature and alcohol-free cocktails?',
    a: 'Mocktails are standard. Named cocktails sit on the proposal only when alcohol is allowed. The mocktail bar is [bar services](/bar-services-dubai), not a second product.',
  },
  {
    q: 'How many canapés do you serve per guest?',
    a: 'Six to eight pieces per guest for a standing hour or two. More if the canapés replace a meal. Timing decides the count, not a slogan.',
  },
  {
    q: 'Do you cater cocktail parties on yachts and rooftops?',
    a: 'Yes, when access and the operator or building allow it. Compact canapés, a small bar footprint, and drinks rules written into the quote.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'One to two weeks for a smaller reception. Two to four weeks for a larger standing night, especially November to March. If the date is soon, ask; we will say what we can staff.',
  },
  {
    q: 'How much does cocktail party catering cost in Dubai?',
    a: `Passed canapés start from AED ${CANAPES.fromPerPerson} per person, from ${CANAPES.minGuests} guests, with the menu and service confirmed in your proposal. Bar staffing, equipment and drinks arrangements are itemised separately. 5% VAT is a separate line.`,
  },
  {
    q: 'What is the minimum number of guests for cocktail catering?',
    a: `Canapés start at ${CANAPES.minGuests} guests. Below that we will say so rather than stretch a standing service. Share the headcount on [contact](/contact).`,
  },
  {
    q: 'Can you serve alcohol legally at a private party in Dubai?',
    a: 'Only where the venue is licensed, the operator allows it, or the quotation records a lawful private arrangement. We will not pour against the paper. A dry brief still gets a mocktail bar.',
  },
  {
    q: 'Do I need to supply my own spirits, or do you provide everything?',
    a: 'Either. We can supply spirits where permitted, or run BYO. Mixers, ice, tools and glassware travel with us either way. The quote says which.',
  },
  {
    q: 'Are your kitchens and chefs licensed and food-safe?',
    a: 'Independent licensed culinary partners cook. Kitchens follow Dubai Municipality food-safety rules. Passed food is timed so it does not sit out as a guess. See [how it works](/how-it-works).',
  },
  {
    q: 'Is the food halal?',
    a: 'Halal ingredients are the default. Corporate certificates, if needed, are requested in the enquiry and shown on the proposal.',
  },
  {
    q: 'How many bartenders and service staff will I need?',
    a: 'The quote sizes the team to headcount and how complex the drinks list is. We do not publish a rigid bartender-to-guest ratio as a promise.',
  },
  {
    q: 'Can you accommodate vegetarian, vegan, and allergy needs in the canapés?',
    a: 'Yes. Named diets go into the first canapé list, labelled on the tray. They are not an afterthought plate.',
  },
  {
    q: 'How much space do you need to set up the bar?',
    a: 'A compact counter. Villa lounge, terrace, pool deck or yacht deck. Send a photo and we confirm the footprint before the night.',
  },
  {
    q: 'How early do you arrive to set up, and do you clean up afterwards?',
    a: 'We arrive before guests, run the window and pack down. Clear-down is in the booking.',
  },
  {
    q: 'Do you cater cocktail parties in apartments and smaller venues, not just villas?',
    a: 'Yes. A smaller bar and a focused canapé list. See [apartment private dining](/apartment-private-dining-dubai) when the night is seated instead of standing.',
  },
  {
    q: 'Can you match the cocktails and canapés to a specific theme or colour palette?',
    a: 'Garnishes and canapé styling can follow a brief. We will not invent a drinks list that the licence does not allow.',
  },
  {
    q: 'What is the difference between a cocktail reception and a buffet or seated dinner?',
    a: 'This format is standing: passed bites and a bar. A buffet or plated dinner is for a room that sits. Compare formats on [private chef versus catering](/private-chef-vs-catering-dubai).',
  },
  {
    q: 'Can a cocktail reception replace a full meal, or does dinner usually follow?',
    a: 'It can replace a meal if the piece count and substance go up. If dinner follows, the canapés stay lighter. Tell us the running order.',
  },
  {
    q: 'How far in advance should I confirm my cocktail party?',
    a: 'As soon as the date is real. Peak weekends from November to March fill first. If the date is close, we will say what we can actually deliver.',
  },
]

const relatedServices = [
  {
    title: 'Canapé catering',
    description: 'Passed bites from AED 150 per person, from 10 guests. The food side of a standing hour.',
    image: '/menu-canapes.webp',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Bar services',
    description: 'Bartender hire and a mocktail bar. Cocktails only where the venue is licensed.',
    image: '/menu-cocktails.webp',
    link: '/bar-services-dubai',
  },
  {
    title: 'Yacht catering',
    description: 'Food coordinated to the galley and the operator. Drinks follow the charter rules.',
    image: '/service-luxury-dining.webp',
    link: '/yachts',
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
  name: 'Cocktail Party Catering Dubai',
  serviceType: 'Catering Service',
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
    { '@type': 'ListItem', position: 2, name: 'Cocktail Party Catering Dubai', item: 'https://www.mychef.ae/cocktail-party-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Cocktail Party quote in Dubai. Date: __ Guests: __ Area: __"
export default function CocktailPartyCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.cock-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.cock-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.cock-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.cock-fmt-card', {
      scrollTrigger: { trigger: '.cock-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cock-uc-item', {
      scrollTrigger: { trigger: '.cock-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cock-inc-item', {
      scrollTrigger: { trigger: '.cock-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cock-gallery-img', {
      scrollTrigger: { trigger: '.cock-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.cock-faq-item', {
      scrollTrigger: { trigger: '.cock-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.cock-loc-item', {
      scrollTrigger: { trigger: '.cock-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.cock-rel-card', {
      scrollTrigger: { trigger: '.cock-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.cock-cta', {
      scrollTrigger: { trigger: '.cock-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Cocktail Party Catering Dubai | You Stay a Guest | myCHEF"
        description="Cocktail party catering in Dubai: passed canapés from AED 150 per person, standing service, setup and clear-down. Tell us the date, headcount and room."
        canonicalPath="/cocktail-party-catering-dubai"
        ogImage="/menu-cocktails.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <NonCateringVisual><section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/cocktail-party-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 cock-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Cocktail Party Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 cock-hero-h1">
            Cocktail Party Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 cock-hero-sub">
            Cocktail party catering Dubai is a standing reception: passed canapés from AED {CANAPES.fromPerPerson}  per person, with bartenders, setup and clear-down quoted to your event. Alcohol service requires a permitted venue and written confirmation in the booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 cock-hero-cta">Plan My Cocktail Reception</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 cock-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section></NonCateringVisual>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">STANDING FOOD AND A BAR</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            How cocktail party catering Dubai is built
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Cocktail party catering in Dubai brings together canapés, a tailored drinks list and attentive service for a standing reception. Passed canapés start from AED {CANAPES.fromPerPerson} per person, from {CANAPES.minGuests} guests. This is the starting price for food. Bar staff and equipment are quoted separately in the same proposal.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Alcohol is poured only where the venue is licensed, the operator allows it, or the quotation records a lawful private arrangement. Mocktails run either way. A cocktail-making class can sit in the brief if you want guests behind the bar; it is not a default.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Rooftop, yacht, villa or office: the format is the same. See <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">catering in Dubai</Link> for the other formats when the room should sit.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">COCKTAIL FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Food designed for a standing reception
            </h2>
          </div>

          <div className="cock-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cocktailFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="cock-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 4: Use Cases ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHERE WE POUR</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Settings for a relaxed reception
            </h2>
          </div>

          <div className="cock-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="cock-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What the reception quote lists
          </h2>

          <div className="cock-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="cock-inc-item flex gap-3 opacity-0 -translate-x-5">
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
      <NonCateringVisual><section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Trays and a bar in the room
          </h2>

          <div className="cock-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="cock-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section></NonCateringVisual>

      {/* ═══════════════ Section 7: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Cocktail Party Catering Dubai: the questions we get before a booking
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Standing receptions across Dubai
          </h2>

          <div className="cock-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="cock-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="cock-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="cock-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <NonCateringVisual><div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div></NonCateringVisual>
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

      <LocationStrip title="Cocktail party catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center cock-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the date, the headcount and whether alcohol is allowed
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            We typically reply within 15 minutes during business hours with the format that fits the room.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Plan My Cocktail Reception</Link>
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
