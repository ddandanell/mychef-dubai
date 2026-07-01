import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Coffee,
  Utensils,
  CalendarRange,
  Users,
  Cookie,
  Leaf,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to arrange conference catering (via mychef.ae/conference-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const conferenceFormats = [
  {
    icon: Coffee,
    title: 'Coffee Breaks',
    description: 'Refreshing morning and afternoon breaks with barista-style coffee, teas, and pastries to keep delegates sharp between sessions.',
    link: '/corporate',
  },
  {
    icon: Utensils,
    title: 'Working Lunches',
    description: 'Efficient buffet or boxed lunches designed to feed a full room quickly and get delegates back on schedule.',
    link: '/business-lunch-catering-dubai',
  },
  {
    icon: CalendarRange,
    title: 'Multi-Day Programmes',
    description: 'Varied rotating menus across multi-day conferences so the food stays fresh and interesting from day one to close.',
    link: '/corporate',
  },
  {
    icon: Cookie,
    title: 'All-Day Refreshments',
    description: 'Continuous refreshment stations with drinks, snacks, and energy bites available throughout the conference day.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Networking Receptions',
    description: 'Closing canapé receptions and drinks-friendly bites to round off a conference and keep delegates connecting.',
    link: '/corporate-event-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Dietary-Inclusive Menus',
    description: 'Vegetarian, vegan, gluten-free, and halal options clearly labelled and available across every break and meal.',
    link: '/healthy-catering-dubai',
  },
]

const includedItems = [
  { title: 'Timed Service', description: 'Breaks and lunches delivered precisely around your conference agenda.' },
  { title: 'Efficient Set-Up', description: 'Fast, organised station set-up that feeds large delegate numbers quickly.' },
  { title: 'Rotating Menus', description: 'Varied menus across multi-day events so the food never repeats.' },
  { title: 'Dietary Labelling', description: 'Clear labelling for vegetarian, vegan, gluten-free, and halal options.' },
  { title: 'Refreshment Stations', description: 'Coffee, tea, water, and snack stations maintained through the day.' },
  { title: 'On-Site Service Staff', description: 'Service staff to manage stations, replenishment, and tidy clearing.' },
  { title: 'Venue Coordination', description: 'We coordinate logistics and access with your conference venue.' },
  { title: 'Scalable Headcount', description: 'Catering scaled smoothly from small seminars to large conferences.' },
]

const useCases = [
  {
    title: 'Coffee Breaks That Re-Energise',
    description: 'The break is where a conference recovers its energy. Well-timed coffee breaks with proper coffee, fresh pastries, and a few healthy bites keep delegates alert through long programmes — and a smooth, fast service means people return to the room on schedule rather than drifting.',
  },
  {
    title: 'Working Lunches at Pace',
    description: 'Lunch at a conference has one job: feed a full room quickly and get everyone back for the afternoon. Whether buffet stations or grab-and-go boxes, we design lunches that move large numbers efficiently without feeling rushed or cutting corners on quality.',
  },
  {
    title: 'Multi-Day Conferences',
    description: 'Across a multi-day programme, repetition is the enemy. We plan rotating menus so each day feels fresh, manage refreshments from open to close, and keep the service rhythm consistent — so organisers can focus on the agenda rather than the catering logistics.',
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

const faqs = [
  {
    q: 'Can you cater large conferences and small seminars alike?',
    a: 'Yes. We scale the same standard across the full range — from intimate seminars and training days to large multi-day conferences with hundreds of delegates. The format and logistics change with the numbers, but the quality and timing stay consistent.',
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
    { '@type': 'ListItem', position: 2, name: 'Conference Catering Dubai', item: 'https://mychef.ae/conference-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function ConferenceCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
        title="Conference Catering Dubai | Breaks & Working Lunches"
        description="Conference catering in Dubai with coffee breaks, working lunches, and multi-day refreshments. Timed service, rotating menus, and full venue coordination. Request a quote today."
        canonicalPath="/conference-catering-dubai"
        ogImage="/service-corporate.webp"
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
            Conference Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 conf-hero-sub">
            Coffee breaks, working lunches, and multi-day refreshments — timed precisely around your agenda to keep delegates energised across conferences and seminars in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=conference-catering-dubai" className="btn-primary opacity-0 translate-y-4 conf-hero-cta">Request a Proposal</Link>
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

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            CATERING FOR CONFERENCES
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Keeping Delegates Sharp All Day
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Conference catering is a logistics challenge as much as a culinary one. A full room of delegates needs to be fed and refreshed quickly, on a tight schedule, without losing energy across a long programme. The food matters — but so does the timing, the flow, and the way a break gets people back to their seats. At myCHEF Dubai, we plan conference catering around your agenda first, so service supports the day rather than slowing it down.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            From barista-style coffee breaks and efficient working lunches to all-day refreshments and rotating multi-day menus, we keep delegates energised from the opening session to the closing remarks. Organisers who run regular events find a standing relationship invaluable — we already understand your format and standards, so each conference is quicker to plan. Explore the formats below, or see our wider <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">corporate catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CONFERENCE CATERING FORMATS
            </span>
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
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              WHERE IT MATTERS
            </span>
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
            Conference Catering Questions
          </h2>

          <div className="conf-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="conf-faq-item border border-gray-200 opacity-0 translate-y-5">
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
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="conf-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
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
        <div className="container-custom text-center conf-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Conference Catering
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share your agenda, delegate numbers, and venue, and we'll build a timed catering plan — coffee breaks, working lunches, and multi-day menus — that keeps your conference running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=conference-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
