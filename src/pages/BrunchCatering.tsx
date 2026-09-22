import { NonCateringVisual } from '@/components/catering/CateringEditorial'
// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /brunch-catering-dubai
//     primary:     "brunch catering dubai"
//     subkeywords: "brunch catering dubai price" · "brunch catering price per person dubai" · "best brunch catering dubai" · "brunch catering packages dubai" · "brunch catering menu dubai" · "halal brunch catering dubai" · "villa brunch catering dubai" · "birthday brunch catering dubai" · "easter brunch catering dubai" · "mothers day brunch catering dubai" · "brunch offers in dubai" · "brunch on sundays in dubai"
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
  Sun,
  Coffee,
  Egg,
  Croissant,
  Users,
  UtensilsCrossed,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to discuss brunch catering (via mychef.ae/brunch-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const brunchServices = [
  {
    icon: Sun,
    title: 'Weekend Villa Brunch',
    description: 'A late morning table at a villa or apartment: pastries, eggs, fruit and coffee. Staffed so you stay with your guests.',
    link: '/villas-private-residences',
  },
  {
    icon: Coffee,
    title: 'Breakfast Chef Service',
    description: 'A standing breakfast chef for the household is a different product. That brief sits on private chef, not this catering page.',
    link: '/private-chef-dubai',
  },
  {
    icon: Users,
    title: 'Corporate Morning Events',
    description: 'A morning meeting, launch or team gathering: food that holds, labelled, and cleared before the next slot.',
    link: '/corporate',
  },
  {
    icon: Egg,
    title: 'Celebration Brunch',
    description: 'A birthday, farewell or family morning. Daytime pacing, not an evening party menu served early.',
    link: '/private-party-catering-dubai',
  },
]

const includedItems = [
  { title: 'Menu written for the morning', description: 'Dishes, dietary notes and how long people stay, approved before the date.' },
  { title: 'Pastries and breads', description: 'Croissants, muffins, sourdough and Arabic bread, shopped the morning of service.' },
  { title: 'Eggs', description: 'Benedict, shakshuka, omelettes, scrambled, or a station if the room should move.' },
  { title: 'Fruit, granola and yoghurt', description: 'Seasonal fruit, granola bowls, chia pots and yoghurt parfaits.' },
  { title: 'Coffee, tea and juices', description: 'Coffee, tea, juices and smoothies. Mocktail bellinis if you want them. Alcohol is licence dependent.' },
  { title: 'Chef and service team', description: 'Chefs and hosts sized to the guest count. You stay at the table.' },
  { title: 'Equipment and tableware', description: 'Chafing dishes, boards, plates, glassware and linen, in and out with the team.' },
  { title: 'Setup and clear-down', description: 'Arrive early, run the service, leave the room as it was found.' },
]

const menuHighlights = [
  'Eggs Benedict',
  'Shakshuka',
  'Avocado Toast',
  'Fresh Croissants',
  'Pancakes & Waffles',
  'Fruit Platters',
  'Granola Bowls',
  'Artisanal Coffee',
  'Fresh Juices',
  'Smoothies',
]

const howItWorks = [
  { title: 'Date, guest count, venue', description: 'Tell us the morning, how many people, and whether it is a villa table or a structured office event.' },
  { title: 'Menu and staffing', description: 'A written brunch menu, drinks and how many people are in the room. You approve it before anything is booked.' },
  { title: 'Confirm in writing', description: 'Menu, team and timings locked. 5% VAT shown on the proposal.' },
  { title: 'Shopping', description: 'The chef shops for produce, bakery, eggs, dairy and coffee the morning of service.' },
  { title: 'Arrive early', description: 'Chefs and hosts set the table and start coffee before guests walk in.' },
  { title: 'Serve and clear', description: 'Stations refilled, plates cleared, kitchen left as found.' },
]

const useCases = [
  {
    title: 'Weekend Villa Brunch',
    description: 'Friends and family at a villa table or by the pool. Pastries, eggs, fruit and coffee, with the team on service and clear-down.',
  },
  {
    title: 'Corporate Breakfast Meetings',
    description: 'A morning meeting in Downtown or DIFC: food that holds, labelled, and cleared before the next slot.',
  },
  {
    title: 'Looking for regular household cooking?',
    description: 'A standing breakfast chef for the house is the private chef service. This page is one morning, with a guest list.',
  },
  {
    title: 'Celebration & Birthday Brunch',
    description: 'Mark a birthday, anniversary or farewell with a daytime table: pastries, eggs, fruit and coffee, with the team on service and clear-down.',
  },
]

const faqs = [
  {
    q: 'Do you cater brunches at villas and private homes?',
    a: 'Yes. We regularly cater weekend brunches, family breakfasts, and celebration mornings at villas, apartments, and private residences across Dubai.',
  },
  {
    q: 'Can you provide a private breakfast chef every day?',
    a: 'A standing breakfast chef for the household is the [private chef](/private-chef-dubai) service, not this catering page. This page is one morning, with a guest list.',
  },
  {
    q: 'What kind of brunch menu can we choose?',
    a: 'Eggs, pastries, fruit, granola bowls, pancakes, shakshuka, avocado toast, coffee and juices are the usual starting point. The menu is written for this table, not pulled from a hotel brunch list.',
  },
  {
    q: 'Do you cater corporate breakfast events?',
    a: 'Yes. We coordinate catering for breakfast meetings, launches, and corporate morning events in offices, hotels, and event spaces with professional setup and service.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We coordinate catering for vegetarian, vegan, gluten-free, dairy-free, and allergy-aware diets. Just let us know your requirements when you request a quote.',
  },
  {
    q: 'How far in advance should I book brunch catering?',
    a: 'One to two weeks is typical for a house brunch. Large corporate mornings and November to March weekends need longer. Daily household breakfast is a [private chef](/private-chef-dubai) plan, quoted separately.',
  },
  { q: "How much does brunch catering cost in Dubai?", a: "Brunch catering in Dubai is priced by custom quote, because the cost depends on your guest count, menu, service style and location. A chef cooking in your kitchen is a different number from a hotel dining room you did not book. Tell us your numbers and we typically acknowledge the enquiry within 15 minutes during business hours, with an itemised proposal to follow." },
  { q: "What exactly is included in a brunch catering booking?", a: "Every booking includes menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, plus full cleanup afterwards. We also supply the serving equipment, chafing dishes, tableware, and linens, and remove everything once service is finished. Serving staff and additional hosts are optional add-ons depending on your guest count and how hands-off you want the morning to be." },
  { q: "Are your brunch prices inclusive of VAT?", a: "Our quotes clearly show pricing before the 5% VAT that applies to catering services in the UAE, so there are no surprises on your final invoice. Because we build every brunch to order, the proposal itemises the menu, staffing, and any extras before you confirm. You always see exactly what you are paying for before committing." },
  { q: "Is your brunch food halal and prepared to Dubai food-safety standards?", a: "Yes. Our ingredients are halal sourced by default, and our chefs and kitchens operate to Dubai Municipality food-safety standards. We handle temperature control, safe transport, and hygienic on-site preparation as part of every brunch, so you can host with complete confidence. If you have specific certification requirements, just mention them when you request your quote." },
  { q: "How do I know I can trust myCHEF with an event at my home?", a: "We are an established, full-service private chef and catering company that handles brunches end to end, from menu to cleanup, so you deal with one experienced team throughout. Our chefs regularly cook in private villas, apartments, and offices across Dubai and treat your space with care. You can read more [about us](/about) and see how we work before you book." },
  { q: "Can you make eggs, pancakes, and waffles to order in front of guests?", a: "Yes. We set up live cooking stations so your guests get eggs any style, fresh pancakes, waffles, and shakshuka made to order on the spot. Interactive stations are one of the best parts of a home brunch, adding a relaxed, sociable energy to the morning. We bring all the equipment and the chef handles everything, then clears it away after service." },
  { q: "Is there a minimum number of guests for brunch catering?", a: "We cater brunches for intimate groups of a handful of people right up to large gatherings of sixty or more, so there is no rigid one-size minimum. For very small brunches a single chef manages the whole spread, while larger events get additional kitchen and serving support. Share your guest count when you enquire and we scale the team and menu to fit." },
  { q: "Do you provide waiters and serving staff for the brunch?", a: "Yes, serving staff are an optional add-on so you can host completely hands-free while we pour coffee, refill stations, and clear plates. For smaller brunches the chef can handle both cooking and light service, while larger events benefit from dedicated hosts. We recommend the right staffing level for your guest count in your [private chef](/private-chef-dubai) proposal." },
  { q: "Can you cater a brunch with drinks, mocktails, or a bar setup?", a: "Yes. We include fresh juices, smoothies, artisanal coffee, specialty teas, and mocktail bellinis as part of our brunch menus, and we can add a dedicated drinks station. For a livelier setup we can arrange a full [mocktail bar](/bar-services-dubai) with a host mixing to order. Let us know the vibe you want and we design the beverage service around it." },
  { q: "Can you handle allergies and mixed dietary needs at one brunch?", a: "Yes. Vegan, vegetarian, gluten-free, dairy-free and nut-aware plates can sit on the same table when you flag them. For a declared allergy, see [allergy-safe catering](/allergy-safe-catering-dubai)." },
  { q: "Which areas of Dubai do you cover for brunch catering?", a: "We cater brunches across all of Dubai, including Palm Jumeirah, Downtown Dubai, Dubai Marina, Emirates Hills, JBR, and beyond, in villas, apartments, offices, and event spaces. Our chefs travel to you with everything needed for the morning. If you are in a gated community, holiday home, or hotel suite, just share the access details when you book." },
  { q: "How early should I book brunch catering to secure my date?", a: "For most brunches, booking one to two weeks ahead is comfortable, while large corporate mornings or peak-season dates are best secured two to four weeks in advance. Peak season in Dubai runs November to March, when weekends fill up fastest. If your date is soon, still reach out, as we often accommodate shorter timelines depending on availability." },
  { q: "Can you set up brunch outdoors, poolside, or on a terrace?", a: "Yes. We regularly serve brunches poolside, on terraces and in garden settings at villas and private residences, adapting the setup to your space. We bring shaded stations, serving equipment, and keep food held at the right temperature outdoors. We can also cook brunch on a [yacht](/yachts) you have chartered, or at a private villa." },
  { q: "Do I need to provide anything, or do you bring everything?", a: "You provide the space and we bring everything else, from ingredients and cooking equipment to chafing dishes, tableware, glassware, and linens. Our chefs arrive early to set up, cook fresh on-site, and then handle the full clear-down so your kitchen and dining area are left spotless. All you need to do is enjoy the morning with your guests." },
  { q: "Is brunch catering at home better than booking a hotel brunch?", a: "A catered brunch at home is a private morning with a menu written for your table, no hotel sitting time, and no shared dining room. You choose what is served and who is there. If you want to compare formats, our team can walk you through the options on the [contact](/contact) page." },
  { q: "Can a private chef prepare breakfast every day during a villa stay?", a: "Yes, as a household plan, not as brunch catering. A chef who comes back sits on [private chef](/private-chef-dubai) and [private chef prices](/private-chef-dubai/pricing). This page is one morning." },
  {
    q: 'Is easter brunch catering Dubai the same as brunch catering Dubai?',
    a: 'We design the menu around your event, bring the chef and team to your address, and quote it itemised so you can see what each part costs. Tell us the date and headcount and we recommend the format.',
  },
]

const relatedServices = [
  {
    title: "Mother's Day Catering",
    description: 'A daytime table for Mother’s Day: brunch, lunch or tea at home.',
    image: '/images/mothers-day-catering-dubai-hero.webp',
    link: '/private-party-catering-dubai',
  },
  {
    title: 'Private Chef Dubai',
    description: 'A standing household chef plan. One brunch is catering; a daily cook is a different product.',
    image: '/service-catering.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional catering for meetings, launches, and company events.',
    image: '/service-events.webp',
    link: '/corporate',
  },
  {
    title: 'Breakfast Catering Dubai',
    description: 'Weekday first-meal catering for offices, villas and hotels. Not the same as a weekend brunch sitting.',
    image: '/images/breakfast-catering-dubai-hero.webp',
    link: '/breakfast-catering-dubai',
  },
]

const locations = [
  { name: 'Palm Jumeirah', slug: 'palm-jumeirah' },
  { name: 'Downtown Dubai', slug: 'downtown-dubai' },
  { name: 'Dubai Marina', slug: 'dubai-marina' },
  { name: 'Emirates Hills', slug: 'emirates-hills' },
  { name: 'JBR', slug: 'jbr' },
]

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


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
  name: 'Brunch Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Catering Dubai', item: 'https://www.mychef.ae/catering-dubai' },
    { '@type': 'ListItem', position: 3, name: 'Brunch Catering Dubai', item: 'https://www.mychef.ae/brunch-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Brunch quote in Dubai. Date: __ Guests: __ Area: __"
export default function BrunchCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.brunch-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.brunch-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.brunch-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.brunch-fmt-card', {
      scrollTrigger: { trigger: '.brunch-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.brunch-inc-item', {
      scrollTrigger: { trigger: '.brunch-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.brunch-menu-item', {
      scrollTrigger: { trigger: '.brunch-menu-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out',
    })

    gsap.to('.brunch-step', {
      scrollTrigger: { trigger: '.brunch-steps-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.brunch-why', {
      scrollTrigger: { trigger: '.brunch-why-section', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.brunch-uc-item', {
      scrollTrigger: { trigger: '.brunch-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.brunch-faq-item', {
      scrollTrigger: { trigger: '.brunch-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.brunch-loc-item', {
      scrollTrigger: { trigger: '.brunch-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.brunch-rel-card', {
      scrollTrigger: { trigger: '.brunch-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.brunch-cta', {
      scrollTrigger: { trigger: '.brunch-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Brunch Catering Dubai | myCHEF"
        description="Brunch catering Dubai: weekend villa tables, corporate mornings and a chef in your kitchen. Pastries, eggs, fruit and coffee, then we clear down."
        canonicalPath="/brunch-catering-dubai"
        ogImage="/service-villa.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <NonCateringVisual><section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/brunch-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 brunch-hero-h1" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/catering-dubai" className="text-gray-400 hover:text-gold transition-colors">Catering</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Brunch Catering Dubai</span></li>
            </ol>
          </nav>

          <p className="font-inter text-caption uppercase tracking-[0.2em] text-gold mb-4 opacity-0 translate-y-4 brunch-hero-h1">
            Brunch at your address
          </p>
          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 brunch-hero-h1">
            Brunch Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 brunch-hero-sub">
            Brunch catering in Dubai, with freshly prepared eggs, pastries, fruit and coffee for relaxed villa gatherings, office occasions and celebration mornings. The menu and service are tailored to your guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 brunch-hero-cta">Get a Brunch Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 brunch-hero-cta"
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
          <SectionLabel align="center">BRUNCH IN DUBAI</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Brunch catering Dubai for a well-planned morning
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Brunch catering in Dubai brings a relaxed, generous morning menu to your villa, apartment or office. A chef and service team handle the agreed preparation, presentation and clear-down. For an earlier start to the working day, explore{' '}
            <Link to="/breakfast-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">
              breakfast catering Dubai
            </Link>
            .
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Guest count, menu and how much service happens in the room move the quote. Dietary notes go into the first draft. The written proposal itemises food, chefs, staff and 5% VAT.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Bowls and juice, or eggs Benedict and pastries: the menu follows the morning. A standing breakfast chef for the household is a different product, on{' '}
            <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">
              private chef
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Target Audience ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-10">
            <SectionLabel align="center">Who We Serve</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Villa tables, offices and visitors
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-8 border border-gray-200">
              <Sun className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Villa Residents</h3>
              <p className="font-inter text-body-sm text-gray-500">Weekend brunches at home with family and friends, served poolside or around the dining table.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <Users className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Companies & Teams</h3>
              <p className="font-inter text-body-sm text-gray-500">Breakfast meetings, team brunches, and corporate morning events with professional service.</p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <Croissant className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-playfair text-h4 text-black mb-2">Visitors & Hotels</h3>
              <p className="font-inter text-body-sm text-gray-500">Daily breakfast chef service for villa stays, holiday homes, and extended visits in Dubai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Service Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">BRUNCH SERVICES</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              How the morning is staffed
            </h2>
          </div>

          <div className="brunch-fmt-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brunchServices.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="brunch-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What the brunch quote lists
          </h2>

          <div className="brunch-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="brunch-inc-item flex gap-3 opacity-0 -translate-x-5">
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

      {/* ═══════════════ Section 6: Menu Highlights ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">MENU HIGHLIGHTS</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              What goes on the morning table
            </h2>
          </div>

          <div className="brunch-menu-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {menuHighlights.map((item, i) => (
              <div key={i} className="brunch-menu-item bg-black p-6 text-center opacity-0 translate-y-6">
                <UtensilsCrossed size={24} className="text-gold mx-auto mb-3" />
                <p className="font-inter text-sm text-white">{item}</p>
              </div>
            ))}
          </div>

          <p className="font-inter text-body text-gray-400 text-center max-w-[700px] mx-auto mt-10 leading-relaxed">
            Every brunch menu is designed from scratch. We do not offer a fixed set menu. We combine your favourite morning dishes with seasonal produce and dietary notes.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 7: How It Works ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">THE PROCESS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Arrival, cook, clear-down
            </h2>
          </div>

          <div className="brunch-steps-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="brunch-step bg-cream p-8 opacity-0 translate-y-8">
                <span className="font-playfair text-[48px] text-gold/30 leading-none block mb-4">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-inter text-base font-semibold text-black mb-2">{step.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 8: Arrival and clear-down ═══════════════ */}
      <section className="brunch-why-section bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="brunch-why opacity-0 translate-y-8">
            <h2 className="font-playfair text-h2 text-white mb-8 text-center">
              Preparation, service and clear-down coordinated for you
            </h2>
            <div className="space-y-5">
              <p className="font-inter text-body-lg text-gray-400 leading-relaxed">
                Brunch fails when the host is still in the kitchen. We arrive early, set the table, cook fresh and serve, so you stay with your guests. The same team can run a villa morning for six or a corporate sitting for sixty. Staffing follows the headcount, not a slogan.
              </p>
              <p className="font-inter text-body-lg text-gray-400 leading-relaxed">
                We shop for seasonal produce, bakery items and coffee. Menus follow dietary needs, the format and guest count. Setup and clear-down stay with the chefs, so the room is left as we found it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Use Cases ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">DUBAI BRUNCH OCCASIONS</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Mornings we cook for
            </h2>
          </div>

          <div className="brunch-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="brunch-uc-item bg-white p-8 border border-gray-200 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 10: Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <h2 className="font-playfair text-h2 text-white text-center mb-10">
            Other morning services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Related Services</h3>
              <ul className="space-y-3">
                <li><Link to="/catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Luxury Catering Dubai</Link></li>
                <li><Link to="/private-chef-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Private Chef Dubai</Link></li>
                <li><Link to="/corporate" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Corporate Catering</Link></li>
                <li><Link to="/private-party-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Party Catering</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Related Seasonal Services</h3>
              <ul className="space-y-3">
                <li><Link to="/new-year-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> New Year's Eve Catering Dubai</Link></li>
                <li><Link to="/christmas-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Christmas Catering Dubai</Link></li>
                <li><Link to="/birthday-catering-dubai" className="font-inter text-body text-gray-400 hover:text-gold transition-colors flex items-center gap-2"><ArrowRight size={14} /> Birthday Catering Dubai</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter text-caption uppercase tracking-wider text-gold mb-4">Popular Locations</h3>
              <ul className="space-y-3">
                <li><ArrowRight size={14} /> Downtown Dubai</li>
                <li><ArrowRight size={14} /> Dubai Marina</li>
                <li><ArrowRight size={14} /> Palm Jumeirah</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 11: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10">
            <SectionLabel align="center">FAQ</SectionLabel>
            <h2 className="font-playfair text-fluid-h2 text-black">
              The questions we get before a brunch booking
            </h2>
          </div>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 12: Locations ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Brunch Catering Across Dubai
          </h2>

          <div className="brunch-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="brunch-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {loc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 13: Related Services ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="brunch-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="brunch-rel-card group bg-black overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Section 14: Final CTA ═══════════════ */}
      <section className="brunch-cta bg-gradient-to-b from-black to-charcoal py-20">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Send the date, the headcount and the address
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us the morning sitting and we will send a brunch menu, service style and staffing plan for your villa, office or event space in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Get a Brunch Quote</Link>
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
          <p className="font-inter text-body-sm text-gray-500 mt-6">
            We typically reply within 15 minutes during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
