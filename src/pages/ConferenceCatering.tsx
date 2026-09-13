// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /conference-catering-dubai
//     primary:     "conference catering dubai"
//     subkeywords: "conference catering dubai price" · "conference catering dubai cost per person" · "conference catering companies dubai" · "conference catering packages dubai" · "conference catering menu dubai" · "conference lunch catering dubai" · "catering & conference services coordinator" · "conference food catering" · "catering conference 2025" · "catering conference 2026" · "conference room catering" · "eisenhower conference & catering"
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
  Coffee,
  Utensils,
  CalendarRange,
  Users,
  Cookie,
  Leaf,
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
import CorporatePackageCompare from '@/components/corporate/CorporatePackageCompare'
import CorporateWorkedBudgets from '@/components/corporate/CorporateWorkedBudgets'
import CorporateInventory from '@/components/corporate/CorporateInventory'
import { packagesForOwner } from '@/content/corporatePackages'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to arrange conference catering (via mychef.ae/conference-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const conferenceFormats = [
  {
    icon: Coffee,
    title: 'Coffee breaks',
    description: 'Timed to the slot. Coffee, tea, water, a pastry or savoury bite. Barista labour is not a full coffee cart unless named.',
    link: '/corporate',
  },
  {
    icon: Utensils,
    title: 'Delegate lunch',
    description: 'Boxed if the agenda is tight. Buffet if you have 45 minutes. From AED 90 drop-off or AED 120 staffed.',
    link: '/business-lunch-catering-dubai',
  },
  {
    icon: CalendarRange,
    title: 'Multi-day',
    description: 'Each service day is billed. Lunch rotates. The dietary map carries across days. No automatic volume discount.',
    link: '/corporate',
  },
  {
    icon: Cookie,
    title: 'Holding through the day',
    description: 'Water and fruit that stay up between sessions. Staffed if it has to be replenished. Not a second lunch.',
    link: '/drop-off-catering-dubai',
  },
  {
    icon: Users,
    title: 'Closing reception',
    description: 'Canapés after the last session. That sitting belongs on corporate event catering, not on this page.',
    link: '/corporate-event-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Dietary marks',
    description: 'Halal default. Vegetarian, vegan and gluten-free labelled on every break and meal when named.',
    link: '/halal-catering-dubai',
  },
]

const includedItems = [
  { title: 'The agenda owns the clock', description: 'Breaks and lunch sit in named slots. We hold and clear so the next session can start.' },
  { title: 'Stations that feed a room', description: 'Enough points so a queue does not eat the break. Power and flame checked first.' },
  { title: 'Rotation on multi-day', description: 'Lunch changes by day. The same grain bowl does not appear twice in a row.' },
  { title: 'Labels', description: 'Halal, vegetarian, vegan, gluten-free marked on the tray when those lines are booked.' },
  { title: 'Staff when the format needs them', description: 'Drop-off has no one in the room. A staffed day includes setup, replenishment and clearance.' },
  { title: 'Venue access', description: 'Lift, bay and security list. Unusual access is a separate line. We do not hire the room or run AV.' },
]

const useCases = [
  {
    title: 'Coffee Breaks That Re-Energise',
    description: 'The break is where a conference recovers its energy. Well-timed coffee breaks with proper coffee, fresh pastries, and a few healthy bites keep delegates alert through long programmes: and a smooth, fast service means people return to the room on schedule rather than drifting.',
  },
  {
    title: 'Working Lunches at Pace',
    description: 'Lunch at a conference has one job: feed a full room quickly and get everyone back for the afternoon. Whether buffet stations or grab-and-go boxes, we design lunches that move large numbers efficiently without feeling rushed or cutting corners on quality.',
  },
  {
    title: 'Multi-Day Conferences',
    description: 'Across a multi-day programme, repetition is the enemy. We plan rotating menus so each day feels fresh, manage refreshments from open to close, and keep the service rhythm consistent: so organisers can focus on the agenda rather than the catering logistics.',
  },
  {
    title: 'Seminars & Training Days',
    description: 'Smaller seminars, workshops, and training days still deserve considered catering. We scale the same standard down to intimate groups, with all-day refreshments and a working lunch that keeps a focused session running comfortably from start to finish.',
  },
]

const galleryImages = [
  { src: '/service-corporate.webp', alt: 'Conference catering set-up in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Conference coffee break pastries and bites' },
  { src: '/service-events.webp', alt: 'Conference working lunch buffet' },
  { src: '/service-catering.webp', alt: 'Multi-day conference refreshment station' },
  { src: '/menu-seafood.webp', alt: 'Conference lunch plated selection' },
  { src: '/menu-canapes.webp', alt: 'Closing networking reception canapés' },
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
    q: 'Can you cater large conferences and small seminars alike?',
    a: 'Yes. We scale the same standard across the full range: from intimate seminars and training days to large multi-day conferences with hundreds of delegates. The format and logistics change with the numbers, but the quality and timing stay consistent.',
  },
  {
    q: 'How do you keep coffee breaks and lunches on schedule?',
    a: 'We plan every break and meal around your agenda and set up in advance so service is ready the moment a session ends. Fast, organised stations and on-site staff keep delegates moving, so breaks run to time rather than overrunning into the next session.',
  },
  {
    q: 'Do you provide varied menus for multi-day conferences?',
    a: 'We do. For multi-day programmes we plan a rotating menu so each day feels fresh and nothing repeats. We manage refreshments from open to close and keep the service rhythm consistent across the full event.',
  },
  {
    q: 'Can you cater for delegates’ dietary requirements?',
    a: 'Absolutely. Vegetarian, vegan, gluten-free, and halal options are available across every break and meal, and we label them clearly so delegates can choose with confidence. Share any specific requirements in advance and we will plan accordingly.',
  },
  {
    q: 'Do you work with conference venues across Dubai?',
    a: 'Yes. We regularly cater conferences at hotels, dedicated venues, and corporate spaces across Dubai. We coordinate logistics, timing, and access with your venue ahead of the event so service runs smoothly on the day.',
  },
  {
    q: 'How far in advance should we book conference catering?',
    a: 'For multi-day conferences we recommend booking two to four weeks ahead, and earlier during the peak season from November to March. For organisers running events regularly, a standing arrangement makes planning each conference faster and keeps standards consistent.',
  },
]

const relatedServices = [
  {
    title: 'Corporate Event Catering',
    description: 'Product launches, galas, and networking receptions, styled and coordinated end to end.',
    image: '/service-events.webp',
    link: '/corporate-event-catering-dubai',
  },
  {
    title: 'Business Lunch Catering',
    description: 'Boardroom lunches, client meetings, and working lunches presented to a professional standard.',
    image: '/menu-appetizer.webp',
    link: '/business-lunch-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional corporate dining, from working lunches to large company functions.',
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
  name: 'Conference Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Conference Catering Dubai', item: 'https://www.mychef.ae/conference-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Conference quote in Dubai. Date: __ Guests: __ Area: __"
export default function ConferenceCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.conf-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.conf-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.conf-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.conf-fmt-card', {
      scrollTrigger: { trigger: '.conf-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.conf-uc-item', {
      scrollTrigger: { trigger: '.conf-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.conf-inc-item', {
      scrollTrigger: { trigger: '.conf-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.conf-gallery-img', {
      scrollTrigger: { trigger: '.conf-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.conf-faq-item', {
      scrollTrigger: { trigger: '.conf-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.conf-loc-item', {
      scrollTrigger: { trigger: '.conf-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.conf-rel-card', {
      scrollTrigger: { trigger: '.conf-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.conf-cta', {
      scrollTrigger: { trigger: '.conf-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Conference Catering Dubai | Breaks & Working Lunches | myCHEF"
        description="Conference catering Dubai: coffee breaks, half-day and full-day menus around the agenda. Drop-off from AED 90 per person. Staffed buffet from AED 120 per person."
        canonicalPath="/conference-catering-dubai"
        ogImage="/service-corporate.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/office-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 conf-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Conference Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 conf-hero-h1">
            Conference Catering Dubai: Coffee Breaks, Working Lunches & Multi-Day
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 conf-hero-sub">
            Meals and refreshments throughout your conference, timed to the agenda. Drop-off from AED 90 per person. Staffed buffet from AED 120 per person.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?from=corporate" className="btn-primary opacity-0 translate-y-4 conf-hero-cta">Request a corporate catering quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 conf-hero-cta"
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
          <SectionLabel align="center">CATERING FOR CONFERENCES</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Keeping Delegates Sharp All Day
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Conference catering in Dubai is planned around your agenda. Delegates need coffee, water and a proper lunch without losing the day. We time breaks to the slot, keep lunch inside 45 minutes when the programme is tight, and rotate menus on multi-day work.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Drop-off food starts from AED 90 per person. A staffed buffet starts from AED 120 per person. Live stations and canapés start from AED 150 per person. Half-day and full-day packages both use that staffed buffet starting price. The difference is the meal plan: a half day includes arrival coffee, one break and lunch; a full day includes two breaks and lunch. The quote lists the trays, hours and team. Room hire and presentation equipment stay with the venue.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            A closing reception is <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate event catering</Link>. A repeating office week is <Link to="/office-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">office catering</Link>. The hub is <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering in Dubai</Link>.
          </p>
        </div>
      </section>

      <section className="bg-cream section-padding">
        <div className="container-custom">
          <CorporatePackageCompare
            packages={packagesForOwner('/conference-catering-dubai')}
            heading="Coffee break, half-day, full-day and multi-day"
            intro="Half-day and full-day packages both start from AED 120 per person on the staffed buffet rate. The half day covers arrival coffee, one break and lunch. The full day covers two breaks and lunch. Multi-day programmes are quoted in writing, billed per service day."
          />
          <div className="mt-12">
            <CorporateWorkedBudgets
              heading="Conference catering packages, worked totals"
              intro="Conference lunch catering in Dubai is quoted around the agenda. Coffee breaks use the drop-off starting price unless a barista cart is named. Half-day and full-day rows use the staffed buffet starting price; the package subtotal includes that food and the included service."
              examples={[
                {
                  title: '40-person morning break',
                  packageId: 'corp-conf-coffee',
                  guests: 40,
                  note: 'Coffee, pastry, fruit. Barista labour is not a full coffee cart.',
                },
                {
                  title: '40-person half day',
                  packageId: 'corp-conf-half-day',
                  guests: 40,
                  note: 'Arrival coffee, one break, working lunch.',
                },
                {
                  title: '40-person full day',
                  packageId: 'corp-conf-full-day',
                  guests: 40,
                  note: 'Two breaks and lunch. Unusual venue costs extra.',
                },
              ]}
            />
          </div>
          <p className="mt-8 max-w-[65ch] font-inter text-body text-gray-600">
            Conference food catering is the hospitality around the agenda. Room hire, audiovisual equipment and speaker production stay with those specialists. A closing reception is corporate event catering. A repeating office week is office catering.
          </p>
          <div className="mt-12 overflow-x-auto">
            <h3 className="font-playfair text-h4 text-black mb-4">Sample agenda</h3>
            <table className="w-full min-w-[560px] text-left font-inter text-body-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 pr-4 font-medium text-black">Time</th>
                  <th className="py-3 pr-4 font-medium text-black">Session</th>
                  <th className="py-3 font-medium text-black">Food</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">08:00</td><td className="py-3 pr-4">Registration</td><td className="py-3">Coffee, tea, water, light pastry</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">10:30</td><td className="py-3 pr-4">Morning break</td><td className="py-3">Coffee refresh, savoury bite, fruit</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">13:00</td><td className="py-3 pr-4">Lunch</td><td className="py-3">Buffet or boxed lunch, 45 minutes</td></tr>
                <tr className="border-b border-gray-100"><td className="py-3 pr-4">15:30</td><td className="py-3 pr-4">Afternoon break</td><td className="py-3">Tea, sweet, water</td></tr>
                <tr><td className="py-3 pr-4">17:30</td><td className="py-3 pr-4">Close</td><td className="py-3">Clearance. Optional networking canapés on the event page</td></tr>
              </tbody>
            </table>
            <p className="mt-4 font-inter text-body-sm text-gray-500 max-w-[65ch]">
              Meal allowances follow the package: one break plus lunch, or two breaks plus lunch. Stations are planned to the room, power and how long food needs to stay at temperature.
            </p>
          </div>
        </div>
      </section>

      <CorporateInventory path="/conference-catering-dubai" quoteHref="/inquiry" />

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">CONFERENCE CATERING FORMATS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Catering Around Your Agenda
            </h2>
          </div>

          <div className="conf-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferenceFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="conf-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
            <SectionLabel align="center" tone="dark">WHERE IT MATTERS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              Catering That Runs to Time
            </h2>
          </div>

          <div className="conf-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="conf-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Conference Catering Includes
          </h2>

          <div className="conf-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="conf-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Conference Catering
          </h2>

          <div className="conf-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="conf-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Conference Catering Dubai: Conference Catering Questions
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

          <div className="conf-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="conf-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="conf-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="conf-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Conference catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center conf-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Conference Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your agenda, delegate numbers and venue. We will build a timed catering plan: coffee breaks, working lunches and multi-day menus that keep the conference on the agenda.
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
