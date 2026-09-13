// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /business-lunch-catering-dubai
//     primary:     "business lunch catering dubai"
//     subkeywords: "business lunch catering dubai price" · "business lunch catering dubai cost per person" · "business lunch delivery dubai" · "business lunch catering packages dubai" · "business lunch catering menu dubai" · "working lunch catering dubai" · "business lunch offers in dubai" · "office lunch delivery dubai" · "business lunch options dubai" · "business lunch buffet dubai" · "best business lunch dubai with a view" · "business lunch downtown dubai"
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
  Briefcase,
  Handshake,
  Clock,
  Utensils,
  Presentation,
  Leaf,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import CorporateTrustStrip from '../components/CorporateTrustStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'
import CorporatePackageCompare from '@/components/corporate/CorporatePackageCompare'
import CorporateWorkedBudgets from '@/components/corporate/CorporateWorkedBudgets'
import CorporateInventory from '@/components/corporate/CorporateInventory'
import { packagesForOwner } from '@/content/corporatePackages'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to arrange business lunch catering (via mychef.ae/business-lunch-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const lunchFormats = [
  {
    icon: Presentation,
    title: 'Boardroom lunch',
    description: 'Food in the room so the meeting does not break for a restaurant. Drop-off from AED 90, or plated if the table is a client sitting.',
    link: '/corporate',
  },
  {
    icon: Handshake,
    title: 'Client lunch',
    description: 'Plated courses, staff in the room, devices off the table. AED 700 to 950 per person. Not a view, not a restaurant listing.',
    link: '/corporate-dinner-package-dubai',
  },
  {
    icon: Clock,
    title: 'Working lunch',
    description: 'Boxed or sharing platters that can be eaten with one hand. Delivered before the agenda slot. No staff remaining unless you ask.',
    link: '/office-catering-dubai',
  },
  {
    icon: Briefcase,
    title: 'Leadership sitting',
    description: 'A small senior table. Same floors as above. The difference is headcount, timing and whether anyone stays in the room.',
    link: '/corporate',
  },
  {
    icon: Utensils,
    title: 'Plated or buffet',
    description: 'Plated is courses. Buffet is a line, from AED 120 and 20 guests. Choose the one the room can physically support.',
    link: '/buffet-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Dietary lines',
    description: 'Halal by default. Vegetarian, vegan and gluten-free when named in the brief. Labels on the tray. Not a medical promise.',
    link: '/halal-catering-dubai',
  },
]

const includedItems = [
  { title: 'Timed to the agenda', description: 'Arrival window named in the proposal. Setup before the slot. Clearance after it.' },
  { title: 'Coverage named', description: 'Drop-off is food and delivery. Staffed service is food plus people in the room. VAT 5% as its own line.' },
  { title: 'Quiet in the room', description: 'Staff, when booked, set, replenish and leave. They do not join the meeting.' },
  { title: 'Dietary marks', description: 'Halal default. Named vegetarian, vegan, gluten-free and allergen plates when you send the list.' },
  { title: 'One contact', description: 'One person owns the brief. Recurring lunches do not start from a blank email each week.' },
  { title: 'Itemised invoice', description: 'Food, staff, delivery, equipment and VAT as separate lines. An LPO does not create credit terms by itself.' },
]

const useCases = [
  {
    title: 'The meeting that cannot leave the floor',
    description: 'If people walk out for lunch, the sitting is over. We deliver, lay out, and either leave or stay only if you booked staff. The agenda keeps its slot.',
  },
  {
    title: 'A client at the table',
    description: 'A pitch lunch is plated, not boxed. Chef and service sized to the table. You are not asked to plate it, and you are not asked to leave the building.',
  },
  {
    title: 'The same lunch every Tuesday',
    description: 'Preferences, dietary notes and the delivery window stay on file. Each week is a confirmation, not a new brief. Recurring days are billed as they run.',
  },
  {
    title: 'A deal room that does not pause',
    description: 'Boxed or sharing food that can be eaten at the table. No knife work. No queue. Headcount can move until the kitchen deadline in the booking.',
  },
]

const galleryImages = [
  { src: '/service-corporate.webp', alt: 'Business lunch catering set-up in a Dubai boardroom' },
  { src: '/menu-appetizer.webp', alt: 'Plated business lunch appetizer selection' },
  { src: '/menu-seafood.webp', alt: 'Executive lunch seafood plate' },
  { src: '/service-catering.webp', alt: 'Working lunch buffet styling for a meeting' },
  { src: '/service-events.webp', alt: 'Client meeting catering in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Light finger food for a working session' },
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
    q: 'What is the minimum group size for a business lunch?',
    a: 'we coordinate catering for business lunches from small boardroom groups of around six upward. For intimate executive lunches we lean towards plated service, while larger meetings and client gatherings often work best as a buffet. Tell us your numbers and we will recommend the right format.',
  },
  {
    q: 'Can you time the lunch precisely around our meeting?',
    a: 'Yes. We plan delivery and set-up around your agenda so food is ready exactly when you break, not before. Our chefs work discreetly, and for working lunches we can have everything in place so the session never has to stop.',
  },
  {
    q: 'Do you cater recurring client or leadership lunches?',
    a: 'We do, and it is one of our most valued arrangements. For firms hosting regular client lunches or weekly leadership sessions, we keep your menus, dietary notes, and timings on file so each booking is quick to confirm and consistently high in quality.',
  },
  {
    q: 'Can you accommodate dietary requirements for guests?',
    a: 'Absolutely. Vegetarian, vegan, gluten-free, and halal options are arranged as standard, and we can build lighter, balanced choices into any lunch. Share your guests’ needs in advance and we will make sure everyone at the table is looked after.',
  },
  {
    q: 'Do you deliver to offices across the Dubai business districts?',
    a: 'Yes. We regularly cater business lunches in DIFC, Business Bay, Downtown Dubai, and the wider commercial areas of the city. Provide your office location when planning and we will confirm delivery and timing.',
  },
  {
    q: 'How much notice do you need for a business lunch?',
    a: 'A few days is usually enough for a repeating drop-off. A plated client sitting needs more notice. Recurring Tuesdays are a confirmation, not a new brief.',
  },
]

const relatedServices = [
  {
    title: 'Office Catering',
    description: 'Daily office lunches, breakfast spreads, and recurring retainers for teams across Dubai.',
    image: '/menu-appetizer.webp',
    link: '/office-catering-dubai',
  },
  {
    title: 'Conference Catering',
    description: 'Coffee breaks, working lunches, and multi-day catering for conferences and seminars.',
    image: '/service-events.webp',
    link: '/conference-catering-dubai',
  },
  {
    title: 'Drop-Off Catering Dubai',
    description: 'Delivered working lunches and meeting boxes served simply with no on-site staff required.',
    image: '/images/drop-off-catering-dubai-hero.webp',
    link: '/drop-off-catering-dubai',
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
  name: 'Business Lunch Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Business Lunch Catering Dubai', item: 'https://www.mychef.ae/business-lunch-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Business Lunch quote in Dubai. Date: __ Guests: __ Area: __"
export default function BusinessLunchCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.blun-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.blun-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.blun-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.blun-fmt-card', {
      scrollTrigger: { trigger: '.blun-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.blun-uc-item', {
      scrollTrigger: { trigger: '.blun-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.blun-inc-item', {
      scrollTrigger: { trigger: '.blun-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.blun-gallery-img', {
      scrollTrigger: { trigger: '.blun-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.blun-faq-item', {
      scrollTrigger: { trigger: '.blun-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.blun-loc-item', {
      scrollTrigger: { trigger: '.blun-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.blun-rel-card', {
      scrollTrigger: { trigger: '.blun-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.blun-cta', {
      scrollTrigger: { trigger: '.blun-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Business Lunch Catering Dubai | Boardroom & Client | myCHEF"
        description="Business lunch catering Dubai for boardrooms and client lunches. Drop-off from AED 90 per person. Plated client lunch AED 700 to 950 per person. Itemised VAT invoice."
        canonicalPath="/business-lunch-catering-dubai"
        ogImage="/images/business-lunch-catering-dubai-hero.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/business-lunch-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 blun-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Business Lunch Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 blun-hero-h1">
            Business Lunch Catering Dubai: Boardroom, Client & Working Lunches
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 blun-hero-sub">
            Thoughtful food and discreet service in the office. Choose delivered lunches from AED 90 per person, a sharing table, or individually plated service from AED 700 to 950 per person.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 blun-hero-cta">Request a quote for this package</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 blun-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip variant="dark" />
      <CorporateTrustStrip variant="dark" />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">CATERING FOR MEETINGS</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Lunches That Keep Business Moving
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Business lunch catering in Dubai is food in your boardroom, timed to the agenda. A working lunch arrives labelled and ready, so the meeting stays in the room. A client lunch is plated and staffed, so the table feels looked after without anyone leaving for a restaurant.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Delivered working lunches start from AED 90 per person. Chef-led plated client lunches are AED 700 to 950 per person. Choose the format that suits the meeting. Recurring team days sit on <Link to="/office-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">office catering</Link>. A seated evening for 10 to 15 guests is the <Link to="/corporate-dinner-package-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate dinner package</Link>. The hub is <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering in Dubai</Link>.
          </p>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-custom">
          <CorporatePackageCompare
            packages={packagesForOwner('/business-lunch-catering-dubai')}
            heading="Boardroom, working lunch and client lunch"
            intro="A boxed or sharing lunch starts from AED 90 per person, delivered and laid out. A plated client lunch is AED 700 to 950 per person with a chef and service team. Each format has its own starting price."
          />
          <div className="mt-12">
            <CorporateWorkedBudgets
              heading="Business lunch catering Dubai, worked totals"
              intro="Business lunch delivery in Dubai is usually drop-off. A plated client lunch is a staffed service. These totals use published starting prices."
              examples={[
                {
                  title: '6-person boxed working lunch',
                  packageId: 'corp-lunch-boxed',
                  guests: 6,
                  note: 'Billed at the 10-guest minimum and AED 900 order floor.',
                },
                {
                  title: '12-person boardroom sharing lunch',
                  packageId: 'corp-lunch-boardroom',
                  guests: 12,
                  note: 'Platters on the table. No staff remaining in the room.',
                },
                {
                  title: '8-person client lunch, plated',
                  packageId: 'corp-lunch-client',
                  guests: 8,
                  note: 'Chef-led plated lunch in the boardroom. AED 700 to 950 per person.',
                },
              ]}
            />
          </div>
          <div className="mt-12 max-w-[65ch] font-inter text-body text-gray-600 space-y-4">
            <h3 className="font-playfair text-h4 text-black">Working lunch versus a client sitting</h3>
            <p>
              Business meeting catering that has to stay in the room is a working lunch: labelled boxes or sharing platters, timed to the agenda, devices off the table. Business lunch options in Dubai for a client pitch are plated. Downtown and Business Bay buildings change lift and loading times, so name the tower early.
            </p>
            <p>
              Recurring company lunch belongs on office catering. A multi-session day belongs on conference catering. This page is the sitting that has a start time and a conversation attached.
            </p>
          </div>
        </div>
      </section>

      <CorporateInventory path="/business-lunch-catering-dubai" quoteHref="/inquiry" />

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">BUSINESS LUNCH FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              The Right Lunch for the Room
            </h2>
          </div>

          <div className="blun-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lunchFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="blun-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHERE IT FITS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Made for the Moment
            </h2>
          </div>

          <div className="blun-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="blun-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Business Lunch Catering Includes
          </h2>

          <div className="blun-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="blun-inc-item flex gap-3 opacity-0 -translate-x-5">
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
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            A Taste of Our Business Lunches
          </h2>

          <div className="blun-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="blun-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            Business Lunch Catering Dubai: Business Lunch Questions
          </h2>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="blun-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="blun-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="blun-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="blun-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Business lunch catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center blun-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Business Lunch
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Send the date, the floor, the headcount and whether anyone should stay in the room. You get an itemised proposal. Dietary notes can follow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Request a corporate catering quote</Link>
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
