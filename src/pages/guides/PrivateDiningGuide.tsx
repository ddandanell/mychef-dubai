import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ChefHat,
  Users,
  MapPin,
  Utensils,
  ShieldCheck,
  MessageCircle,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I would like to plan a private dining experience in Dubai (via mychef.ae/guide/private-dining-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const diningLocations = [
  'Private villas and residences in Emirates Hills, Palm Jumeirah, Jumeirah Islands, and Al Barari',
  'Penthouses and apartments with skyline views for intimate dinners',
  'Yachts and boats departing from Dubai Marina, Jumeirah Beach, or Palm Jumeirah',
  'Desert camps and outdoor estates for larger celebrations and cultural experiences',
  'Corporate offices and boardrooms for executive dining and client entertainment',
]

const experienceTypes = [
  {
    title: "Chef's-Table Dinners",
    description: 'A single chef prepares a multi-course tasting menu for 6 to 20 guests, introducing each course with a theme, season, or cuisine focus.',
  },
  {
    title: 'Family-Style Celebrations',
    description: 'Larger groups share platters and bowls at the table — ideal for mixed-age groups, Eid gatherings, birthdays, and relaxed weekend entertaining.',
  },
  {
    title: 'Canapé Receptions',
    description: 'Bite-sized dishes passed among guests during standing receptions. Ideal for pre-wedding events, product launches, art openings, and networking.',
  },
  {
    title: 'BBQ and Poolside Dining',
    description: 'Casual but refined outdoor dining with grilled meats, seafood, salads, and live carving stations, especially popular October through April.',
  },
  {
    title: 'Yacht and Offshore Dining',
    description: 'A private chef boards the yacht before departure and prepares meals during the cruise, adapting service to the compact galley and movement of the vessel.',
  },
  {
    title: 'Themed Cultural Menus',
    description: 'Menus built around Emirati, Levantine, Indian, Mediterranean, or Japanese cuisines, designed to reflect the occasion or heritage of the guests.',
  },
]

const chefCriteria = [
  {
    icon: ChefHat,
    title: 'Culinary Background and Specialisation',
    description: 'Ask about formal training, cuisine expertise, and experience with events similar to yours. A chef who excels at 20-person tasting menus may not be the right fit for a 200-person buffet.',
  },
  {
    icon: Utensils,
    title: 'Menu Flexibility and Tastings',
    description: 'A strong private chef will offer a consultation, propose menus, and often provide a tasting before the event — especially important for weddings and milestone celebrations.',
  },
  {
    icon: Users,
    title: 'Front-of-House Support',
    description: 'Good food needs good service. Confirm whether the chef brings service staff, bartenders, and cleaners, or whether you need to arrange these separately.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensing, Hygiene, and Insurance',
    description: 'In Dubai, food preparation and service should meet local municipality requirements. Reputable chefs operate with the necessary permits and hygiene protocols.',
  },
  {
    icon: MessageCircle,
    title: 'Communication and Reliability',
    description: 'The best private chefs are responsive, detail-oriented, and transparent about timing, ingredients, and costs. Trust your instinct during the first conversation.',
  },
]

const menuWorkflow = [
  'Initial enquiry — date, location, guest count, occasion, and any dietary requirements',
  'Menu proposal — 2–3 menu options tailored to your preferences',
  'Tasting — sample key dishes before committing to the final menu',
  'Final confirmation — locked menu, headcount, timing, and service details',
  'Event day — chef and team arrive, prep, serve, and clear',
]

const dietaryAccommodations = [
  'Halal requirements',
  'Vegetarian and vegan menus',
  'Gluten-free and celiac-safe preparations',
  'Nut, shellfish, and dairy allergies',
  'Low-sugar, keto, and pregnancy-friendly options',
]

const pricingFactors = [
  { factor: 'Guest count', effect: 'Larger groups benefit from economies of scale; very small groups may have a minimum spend' },
  { factor: 'Menu complexity', effect: 'Tasting menus and premium ingredients increase per-person pricing' },
  { factor: 'Staffing', effect: 'Servers, bartenders, and cleanup teams add to the total' },
  { factor: 'Location', effect: 'Remote venues or yacht catering may include transport and loading fees' },
  { factor: 'Service style', effect: 'Plated service requires more staff than family-style or buffet' },
]

const occasions = [
  'Birthdays and anniversaries — fully customised menus and timing',
  'Proposals and romantic dinners — privacy and personal touches',
  'Ramadan iftars and Eid gatherings — large-format shared dining',
  'Wedding-related events — bridal showers, rehearsal dinners, post-wedding brunches',
  'Corporate dinners and board meetings — discreet, professional service',
  'Yacht charters — seamless dining while cruising the Arabian Gulf',
  'Holiday entertaining — Christmas, New Year\'s, and Diwali celebrations at home',
]

const comparisonRows = [
  { privateDining: 'Smaller, chef-led groups', luxuryCatering: 'Larger events and celebrations' },
  { privateDining: 'Curated multi-course menus', luxuryCatering: 'Buffet, stations, or plated banquet service' },
  { privateDining: 'On-site preparation and plating', luxuryCatering: 'Often prepared off-site and finished at venue' },
  { privateDining: 'Highly interactive and personal', luxuryCatering: 'Scalable for hundreds of guests' },
  { privateDining: 'Ideal for 6–40 guests', luxuryCatering: 'Ideal for 40–500+ guests' },
]

const internalLinks = [
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Personal chef service for intimate dinners and daily dining in Dubai.' },
  { title: 'Luxury Dining Dubai', link: '/luxury-dining-dubai', description: 'Premium dining experiences designed for villas, yachts, and penthouses.' },
  { title: 'Yacht Catering Dubai', link: '/yacht-catering-dubai', description: 'Compact, elegant menus designed for Dubai yacht events.' },
  { title: 'Villa Catering Ideas', link: '/villa-catering-ideas-dubai', description: 'Menu formats and setups designed for Dubai villas and homes.' },
  { title: 'Wedding Catering Dubai', link: '/wedding-catering-dubai', description: 'Multi-course and banquet-style catering for Dubai weddings.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'A practical breakdown of catering costs per person in Dubai.' },
]

const faqs = [
  {
    q: 'How far in advance should I book a private chef in Dubai?',
    a: 'Two to four weeks is typical. For peak dates — public holidays, New Year\'s Eve, and Ramadan — we recommend booking earlier to secure your preferred chef and menu.',
  },
  {
    q: 'Can a private chef cook in any location?',
    a: 'Most private residences, villas, and yachts can accommodate a private chef. The chef will assess kitchen facilities, power, water, and access during the consultation.',
  },
  {
    q: 'Do I need to provide equipment or tableware?',
    a: 'Usually no. Professional private chefs bring their own tools, service ware, and often linens. This should be confirmed in your itemised quote.',
  },
  {
    q: 'Can children be accommodated at a private dining event?',
    a: 'Yes. Family-friendly menus, earlier timings, and simpler dishes are easy to arrange. Be sure to share ages and any preferences during the planning call.',
  },
  {
    q: 'What happens if a guest has a severe allergy?',
    a: 'Discuss this during the consultation. A professional chef will have protocols for allergen-free preparation and cross-contamination control.',
  },
  {
    q: 'How does private dining pricing compare to luxury catering?',
    a: 'Private dining is typically chef-led and intimate, with per-person pricing starting around AED 250–350 for family-style meals and rising for premium tasting menus. Luxury catering scales for larger guest counts and broader service formats.',
  },
  {
    q: 'Is private dining suitable for corporate entertaining?',
    a: 'Yes. Boardroom lunches, client dinners, and executive entertaining are well suited to private dining because the setting is discreet, the menu is tailored, and service is highly attentive.',
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

const articleSchema = {
  '@type': 'Article',
  headline: 'The Complete Guide to Private Dining in Dubai',
  description: 'A practical guide to private dining in Dubai: what it is, where it happens, how to choose a private chef, menu planning, pricing, and the best occasions to book.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Private Dining Dubai',
  serviceType: 'Private Dining and Private Chef Service',
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
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://mychef.ae/guides' },
    { '@type': 'ListItem', position: 3, name: 'Private Dining in Dubai', item: 'https://mychef.ae/guide/private-dining-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function PrivateDiningGuide() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.pd-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.pd-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.pd-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.pd-intro', {
      scrollTrigger: { trigger: '.pd-intro', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })

    gsap.to('.pd-what-card', {
      scrollTrigger: { trigger: '.pd-what', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pd-type-card', {
      scrollTrigger: { trigger: '.pd-types', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pd-criteria-card', {
      scrollTrigger: { trigger: '.pd-criteria', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.pd-workflow-item', {
      scrollTrigger: { trigger: '.pd-workflow', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pd-dietary-item', {
      scrollTrigger: { trigger: '.pd-dietary', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.pd-price-row', {
      scrollTrigger: { trigger: '.pd-pricing', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.pd-occasion-item', {
      scrollTrigger: { trigger: '.pd-occasions', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.pd-compare-row', {
      scrollTrigger: { trigger: '.pd-compare', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.pd-link-item', {
      scrollTrigger: { trigger: '.pd-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.pd-faq-item', {
      scrollTrigger: { trigger: '.pd-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.pd-cta', {
      scrollTrigger: { trigger: '.pd-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Dining Dubai: A Complete Guide | myCHEF"
        description="A complete guide to private dining in Dubai: where to host, types of experiences, how to choose a private chef, menu planning, pricing, and FAQs."
        canonicalPath="/guide/private-dining-dubai"
        ogImage="/private-chef-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/private-chef-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 pd-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm flex-wrap">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/guides" className="text-gray-400 hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Private Dining in Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 pd-hero-h1">
            The Complete Guide to Private Dining in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 pd-hero-sub">
            Everything you need to know about hosting chef-led dining experiences in villas, penthouses, yachts, and desert venues across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-dining-guide" className="btn-primary opacity-0 translate-y-4 pd-hero-cta">Plan My Private Dinner</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 pd-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center pd-intro opacity-0 translate-y-10">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            INTIMATE, CHEF-LED DINING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            What Private Dining Means in Dubai
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Dubai&apos;s dining scene has shifted from restaurant reservations to something more intimate: private dining experiences hosted in villas, penthouses, yachts, and desert retreats across the city. It is a practical, flexible, and often more memorable alternative to dining out.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            This guide explains what private dining means in Dubai, how it works, what it costs, and how to choose the right private chef for your occasion.
          </p>
        </div>
      </section>

      {/* ═══════════════ What Is Private Dining ═══════════════ */}
      <section className="bg-black section-padding pd-what">
        <div className="container-custom max-w-[1000px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="pd-what-card opacity-0 translate-y-10">
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                DEFINED
              </span>
              <h2 className="font-playfair text-h2 text-white mb-6">
                What Is Private Dining in Dubai?
              </h2>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                Private dining is a chef-led experience prepared and served in a location of your choice. Unlike traditional catering, which often focuses on volume and buffet-style service, private dining is curated around a specific menu, atmosphere, and guest list.
              </p>
              <p className="font-inter text-body text-gray-400 leading-relaxed">
                The chef designs the meal, prepares it on-site or nearby, and is supported by service staff so hosts can focus on their guests rather than the kitchen.
              </p>
            </div>

            <div className="space-y-4">
              {diningLocations.map((loc, i) => (
                <div key={i} className="pd-what-card flex items-start gap-4 bg-charcoal p-6 opacity-0 translate-y-10">
                  <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                  <p className="font-inter text-body text-gray-300 leading-relaxed">{loc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Types of Experiences ═══════════════ */}
      <section className="bg-cream section-padding pd-types">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              EXPERIENCE FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Types of Private Dining Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceTypes.map((type, i) => (
              <div key={i} className="pd-type-card bg-white p-8 opacity-0 translate-y-12">
                <h3 className="font-playfair text-h3 text-black mb-3">{type.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ How to Choose a Chef ═══════════════ */}
      <section className="bg-white section-padding pd-criteria">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SELECTING THE RIGHT CHEF
            </span>
            <h2 className="font-playfair text-h2 text-black">
              How to Choose a Private Chef in Dubai
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              Selecting a private chef is about more than a beautiful portfolio. Here are the factors worth evaluating before you book.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chefCriteria.map((c, i) => {
              const Icon = c.icon
              return (
                <div key={i} className="pd-criteria-card bg-cream p-8 opacity-0 translate-y-12">
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-black mb-3">{c.title}</h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{c.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Menu Planning ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU PLANNING
            </span>
            <h2 className="font-playfair text-h2 text-white">
              What to Expect From the Process
            </h2>
          </div>

          <div className="pd-workflow space-y-4 mb-12">
            {menuWorkflow.map((step, i) => (
              <div key={i} className="pd-workflow-item flex items-start gap-4 bg-charcoal p-6 opacity-0 -translate-x-5">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold text-black font-inter text-sm font-medium">
                  {i + 1}
                </span>
                <p className="font-inter text-body text-gray-300 leading-relaxed pt-0.5">{step}</p>
              </div>
            ))}
          </div>

          <div className="pd-dietary grid lg:grid-cols-2 gap-12 items-start">
            <div className="pd-dietary-item opacity-0 translate-y-10">
              <h3 className="font-playfair text-h3 text-white mb-4">Dietary Accommodations</h3>
              <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                Dubai&apos;s population is diverse, and dietary requirements are common. A professional private chef should comfortably handle a wide range of needs. Be specific about allergies and cross-contamination concerns during the consultation.
              </p>
              <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-dining-guide" className="btn-primary">Start Planning My Menu</Link>
            </div>
            <div className="space-y-3">
              {dietaryAccommodations.map((item, i) => (
                <div key={i} className="pd-dietary-item flex items-center gap-3 bg-charcoal p-4 opacity-0 translate-y-10">
                  <Check size={18} className="text-gold flex-shrink-0" />
                  <span className="font-inter text-body text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Pricing Overview ═══════════════ */}
      <section className="bg-white section-padding pd-pricing">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              PRICING OVERVIEW
            </span>
            <h2 className="font-playfair text-h2 text-black">
              What Affects Private Dining Pricing
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              Private dining pricing in Dubai depends on several variables. As a general guide for 2026, expect per-person pricing to start from AED 250–350 for a simple family-style meal and rise to AED 700+ for premium multi-course tasting menus with full service.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Factor</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">How It Affects Cost</th>
                </tr>
              </thead>
              <tbody>
                {pricingFactors.map((row, i) => (
                  <tr key={i} className="pd-price-row border-b border-gray-100 opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-playfair text-black text-lg">{row.factor}</td>
                    <td className="py-4 px-4 font-inter text-body text-gray-500">{row.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-inter text-body-sm text-gray-400 mt-6 text-center">
            Always request an itemised quote so you understand exactly what is included.
          </p>
        </div>
      </section>

      {/* ═══════════════ Best Occasions ═══════════════ */}
      <section className="bg-cream section-padding pd-occasions">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              POPULAR USE CASES
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Best Occasions for Private Dining
            </h2>
          </div>

          <div className="space-y-4">
            {occasions.map((occ, i) => (
              <div key={i} className="pd-occasion-item flex items-start gap-4 bg-white p-6 opacity-0 translate-y-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <p className="font-inter text-body text-gray-500 leading-relaxed">{occ}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Comparison ═══════════════ */}
      <section className="bg-black section-padding pd-compare">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              PRIVATE DINING VS. LUXURY CATERING
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Which Service Do You Need?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-[#333]">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Private Dining</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Luxury Catering</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="pd-compare-row border-b border-charcoal-light opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-inter text-gray-300">{row.privateDining}</td>
                    <td className="py-4 px-4 font-inter text-gray-400">{row.luxuryCatering}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="font-inter text-body text-gray-400 mt-8 text-center max-w-[700px] mx-auto">
            Many events blend both. A wedding might use luxury catering for the reception and private dining for the rehearsal dinner. A corporate retreat might use catering for lunch and a private chef for the evening.
          </p>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding pd-links">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Services & Guides
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="pd-link-item group flex items-center justify-between bg-black p-6 opacity-0 hover:bg-[#222] transition-colors"
              >
                <div>
                  <h4 className="font-playfair text-h4 text-white mb-1">{link.title}</h4>
                  <p className="font-inter text-body-sm text-gray-400">{link.description}</p>
                </div>
                <ArrowRight size={18} className="text-gold flex-shrink-0 ml-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="bg-white py-20 pd-faq">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Private Dining FAQ
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="pd-faq-item border border-gray-200 opacity-0 translate-y-5">
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

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center pd-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Private Dining Experience
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your occasion, location, and guest list. We will design a bespoke menu and service plan around the people at your table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=private-dining-guide" className="btn-primary">Plan My Private Dinner</Link>
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
