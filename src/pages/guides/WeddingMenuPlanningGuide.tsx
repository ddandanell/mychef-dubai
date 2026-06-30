import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Heart,
  Users,
  MapPin,
  Calendar,
  ChefHat,
  UtensilsCrossed,
  GlassWater,
  Leaf,
  ClipboardList,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
  Download,
} from 'lucide-react'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like help planning a wedding catering menu (via mychef.ae/wedding-catering-menu-planning-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const uniqueFactors = [
  {
    icon: Users,
    title: 'Cultural & Religious Needs',
    description: 'Halal, vegetarian, Jain, kosher-style, and multi-faith requirements shape ingredient choices, preparation methods, and service flow.',
  },
  {
    icon: MapPin,
    title: 'Venue Variety',
    description: 'Hotel ballrooms, beach clubs, private villas, yachts, gardens, and desert camps each demand different logistics and menu formats.',
  },
  {
    icon: Calendar,
    title: 'Season & Schedule',
    description: 'Outdoor weddings peak from October to April, while multi-day celebrations and separate gatherings require phased menus.',
  },
  {
    icon: Heart,
    title: 'Guest Demographics',
    description: 'Age range, travel background, and dietary trends all influence spice levels, portion sizes, and cuisine selection.',
  },
]

const serviceStyles = [
  {
    title: 'Plated Dinner',
    description: 'Elegant and formal. Each guest is served a set course at the table. Best for seated ballroom weddings and upscale celebrations.',
  },
  {
    title: 'Buffet',
    description: 'Flexible and social. Guests serve themselves from stations. Ideal for large guest counts and mixed dietary needs.',
  },
  {
    title: 'Family-Style Sharing',
    description: 'Large platters are placed on each table for guests to share. Creates warmth and conversation for intimate and medium-sized weddings.',
  },
  {
    title: 'Food Stations / Live Cooking',
    description: 'Interactive stations where chefs prepare dishes to order — pasta, sushi, shawarma, carving, dessert. Adds theatre and variety.',
  },
  {
    title: 'Canapé Reception',
    description: 'Bite-sized dishes passed during cocktail hour. A good way to keep guests satisfied while photos or arrivals take place.',
  },
]

const cuisineTable = [
  { cuisine: 'Arabic / Levantine', bestFor: 'Mixed crowds, traditional celebrations', notes: 'Mezze, grills, mansaf, ouzi, mixed rice' },
  { cuisine: 'Indian / South Asian', bestFor: 'Large celebrations, spice-forward menus', notes: 'Biryani, curries, tandoor, live chaat stations' },
  { cuisine: 'Mediterranean', bestFor: 'Fresh, light, outdoor weddings', notes: 'Seafood, salads, grills, mezze' },
  { cuisine: 'International', bestFor: 'Hotel ballrooms, cosmopolitan guest lists', notes: 'Fusion menus, multiple courses' },
  { cuisine: 'Japanese', bestFor: 'Boutique weddings, refined tastes', notes: 'Sushi, sashimi, delicate desserts' },
  { cuisine: 'Emirati', bestFor: 'Heritage celebrations, local families', notes: 'Machboos, thareed, luqaimat' },
]

const menuSegments = [
  {
    title: 'Welcome Drinks & Canapés',
    items: [
      '3–5 bite-sized pieces per guest',
      'Light options that do not fill guests before the main meal',
      'Mocktails, fresh juices, infused waters',
    ],
  },
  {
    title: 'Main Course',
    items: [
      'Protein: lamb, beef, chicken, fish, or vegetarian centrepiece',
      'Starches: rice, bread, or potato dishes',
      'Vegetables and salads',
      'Sauces and accompaniments',
    ],
  },
  {
    title: 'Dessert & Cake',
    items: [
      'Wedding cake (often served but not always eaten by every guest)',
      'Dessert table or live dessert station',
      'Arabic coffee and dates',
    ],
  },
  {
    title: 'Late-Night Bites',
    items: [
      'Increasingly popular for long celebrations',
      'Options: shawarma, sliders, manakish, mini pastries, fruit platters',
    ],
  },
]

const dietaryNeeds = [
  {
    title: 'Halal',
    description: 'Most Muslim weddings require fully halal menus. Confirm with your caterer that all meat, poultry, and preparation methods meet halal standards.',
  },
  {
    title: 'Vegetarian & Vegan',
    description: 'Label all vegetarian and vegan dishes clearly. Consider dedicated stations to avoid cross-contamination.',
  },
  {
    title: 'Gluten-Free & Allergies',
    description: 'Provide gluten-free bread, rice-based options, and clearly marked desserts. Share allergy information with service staff.',
  },
  {
    title: 'Jain & Religious Requirements',
    description: 'Some Indian weddings require Jain, Sattvic, or no-root-vegetable preparations. A specialised caterer will understand these requirements.',
  },
  {
    title: 'Alcohol Service',
    description: 'If alcohol is served, confirm venue licence, bar packages, and whether the caterer or venue provides bar staff.',
  },
]

const beverageTips = [
  { phase: 'Welcome reception', options: 'Sparkling wine, champagne, signature mocktails' },
  { phase: 'Main meal', options: 'Wine pairings or curated non-alcoholic pairings' },
  { phase: 'Dessert', options: 'Dessert wine, coffee, tea' },
  { phase: 'Bar service', options: 'Premium spirits, mixers, soft drinks' },
]

const trends2026 = [
  'Grazing tables and elaborate dessert displays',
  'Live cooking stations — shawarma, pasta, sushi, tandoor',
  'Miniature portions — small plates that let guests try more',
  'Locally sourced and seasonal ingredients',
  'Personalised menus — printed with couple\'s names, story, or dietary notes',
  'Late-night comfort food — shawarma, fries, manakish',
]

const sampleMenus = [
  {
    title: 'Intimate Garden Wedding (30 guests)',
    items: [
      'Canapés: Beetroot hummus tartlet, lamb kibbeh, halloumi skewer',
      'Main: Grilled sea bass or lamb cutlets, roasted vegetables, herb rice',
      'Dessert: Mini pavlovas, fresh fruit, Arabic coffee',
    ],
  },
  {
    title: 'Ballroom Celebration (120 guests)',
    items: [
      'Canapés: 4 varieties during reception',
      'Buffet: Arabic station, Indian station, international grill station',
      'Dessert: Wedding cake + dessert table with 6 options',
      'Late night: Mini shawarma wraps',
    ],
  },
  {
    title: 'Yacht Wedding Reception (40 guests)',
    items: [
      'Welcome: Sparkling date juice, canapés',
      'Main: Mediterranean seafood platter, grilled chicken, seasonal salads',
      'Dessert: Lemon tart, fresh berries, Arabic sweets',
    ],
  },
]

const catererSteps = [
  { title: 'Initial Consultation', description: 'Discuss your vision, guest profile, venue, budget, and any must-have dishes.' },
  { title: 'Menu Proposal', description: 'Receive 2–3 menu options with pricing, service style, and staffing plan.' },
  { title: 'Tasting', description: 'Sample the proposed dishes and refine seasoning, presentation, and portion sizes.' },
  { title: 'Final Confirmation', description: 'Lock the menu, headcount, timeline, rentals, and service details.' },
  { title: 'Wedding Day', description: 'The caterer manages setup, service, and breakdown so you can focus on celebrating.' },
]

const worksheetItems = [
  'Guest count and dietary requirement tracker',
  'Service style comparison',
  'Cuisine preference checklist',
  'Menu segment planner',
  'Questions to ask your caterer',
]

const internalLinks = [
  { title: 'Wedding Catering Dubai', link: '/wedding-catering-dubai', description: 'Bespoke menus and full-service wedding catering across Dubai.' },
  { title: 'Buffet Catering Dubai', link: '/buffet-catering-dubai', description: 'Flexible buffet stations for celebrations of any size.' },
  { title: 'Canapé Catering Dubai', link: '/canape-catering-dubai', description: 'Elegant bite-sized reception food and cocktail catering.' },
  { title: 'Private Chef Dubai', link: '/private-chef-dubai', description: 'Intimate chef-led dining for rehearsal dinners and small gatherings.' },
  { title: 'BBQ Catering Dubai', link: '/bbq-catering-dubai', description: 'Live grill stations and outdoor wedding dining options.' },
  { title: 'Dubai Catering Prices Guide', link: '/dubai-catering-prices-guide', description: 'Understand per-person costs and what affects your quote.' },
]

const faqs = [
  {
    q: 'How far in advance should we book wedding catering in Dubai?',
    a: 'Ideally 3–6 months before the wedding, especially during peak season from November to March. Popular dates and large guest counts require earlier confirmation.',
  },
  {
    q: 'Can we mix cuisines in one wedding menu?',
    a: 'Yes. Fusion menus are very common in Dubai. Your caterer can help balance flavours, spice levels, and service flow so every guest finds something they enjoy.',
  },
  {
    q: 'How many dishes should we offer at a wedding buffet?',
    a: 'For a buffet, 6–10 dishes plus sides and bread is typical. For plated service, 3–4 courses are standard. The right number depends on guest count, service style, and event duration.',
  },
  {
    q: 'Do caterers provide cutlery, linens, and service staff?',
    a: 'Most premium caterers provide full service including staff, but confirm exactly what is included in the quote. Rentals, linens, and bar staff may be quoted separately.',
  },
  {
    q: 'Can we accommodate guests with severe allergies?',
    a: 'Yes. Share full allergy details during the consultation and confirm cross-contamination protocols. Clear labelling and dedicated stations add an extra layer of safety.',
  },
  {
    q: 'What is the best service style for a mixed-cultural Dubai wedding?',
    a: 'Buffets and food stations work well because they let guests choose what suits their tastes and dietary needs. Many couples also add canapés during the reception and a plated main course.',
  },
  {
    q: 'Should we schedule a tasting before confirming the menu?',
    a: 'A tasting is highly recommended for weddings. It lets you check seasoning, presentation, and portion sizes, and refine dishes before the final confirmation.',
  },
  {
    q: 'Can myCHEF Dubai cater dry or halal-only weddings?',
    a: 'Absolutely. We regularly design halal, vegetarian, Jain, and alcohol-free menus. Share your requirements early and we will build the service around them.',
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
  headline: 'Wedding Catering Menu Planning Guide for Dubai',
  description: 'Plan a Dubai wedding catering menu: service styles, cuisines, dietary considerations, sample menus, and how to work with your caterer.',
  author: { '@type': 'Organization', name: 'myCHEF Dubai' },
  publisher: { '@type': 'Organization', name: 'myCHEF Dubai', url: 'https://mychef.ae' },
}

const serviceSchema = {
  '@type': 'Service',
  name: 'Wedding Catering Menu Planning Guide',
  serviceType: 'Wedding Catering Service',
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
    { '@type': 'ListItem', position: 3, name: 'Wedding Menu Planning Guide', item: 'https://mychef.ae/wedding-catering-menu-planning-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, articleSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function WeddingMenuPlanningGuide() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.wedding-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.wedding-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.wedding-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.wedding-factor-card', {
      scrollTrigger: { trigger: '.wedding-factors', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wedding-style-card', {
      scrollTrigger: { trigger: '.wedding-styles', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wedding-table-row', {
      scrollTrigger: { trigger: '.wedding-cuisines', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.wedding-segment-card', {
      scrollTrigger: { trigger: '.wedding-segments', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wedding-diet-card', {
      scrollTrigger: { trigger: '.wedding-dietary', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wedding-trend-item', {
      scrollTrigger: { trigger: '.wedding-trends', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wedding-menu-card', {
      scrollTrigger: { trigger: '.wedding-menus', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.wedding-step-item', {
      scrollTrigger: { trigger: '.wedding-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wedding-link-item', {
      scrollTrigger: { trigger: '.wedding-links', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.wedding-faq-item', {
      scrollTrigger: { trigger: '.wedding-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.wedding-cta', {
      scrollTrigger: { trigger: '.wedding-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Wedding Catering Menu Planning Guide Dubai | myCHEF"
        description="Plan a Dubai wedding catering menu: service styles, cuisines, dietary needs, sample menus, and how to work with your caterer. WhatsApp +971 55 174 4849."
        canonicalPath="/wedding-catering-menu-planning-dubai"
        ogImage="/wedding-catering-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/wedding-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 wedding-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm flex-wrap">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/guides" className="text-gray-400 hover:text-gold transition-colors">Guides</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Wedding Menu Planning Guide</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 wedding-hero-h1">
            Wedding Catering Menu Planning Guide for Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 wedding-hero-sub">
            From service styles and cultural requirements to sample menus and tastings — everything you need to design a memorable wedding dining experience in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=wedding-menu-planning-guide" className="btn-primary opacity-0 translate-y-4 wedding-hero-cta">Plan My Wedding Menu</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 wedding-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            WEDDING CATERING
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Create a Menu That Reflects Your Celebration
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            The menu is one of the most talked-about elements of any wedding. In Dubai, where celebrations often bring together multiple cultures, generations, and dietary traditions, wedding catering requires both creativity and precision.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            This guide walks you through the process of planning a wedding catering menu in Dubai. From choosing a service style to accommodating cultural requirements, it covers everything you need to create a memorable dining experience for your guests.
          </p>
        </div>
      </section>

      {/* ═══════════════ Why Unique ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              DUBAI WEDDINGS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Why Wedding Catering in Dubai Is Unique
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              Dubai weddings are diverse. A single celebration may include guests from across the Middle East, South Asia, Europe, and beyond.
            </p>
          </div>

          <div className="wedding-factors grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueFactors.map((factor, i) => {
              const Icon = factor.icon
              return (
                <div key={i} className="wedding-factor-card bg-charcoal p-8 opacity-0 translate-y-12">
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{factor.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{factor.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Service Styles ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SERVICE FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Choosing Your Service Style
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              The service style sets the tone for the entire meal. Most Dubai weddings combine two or more styles.
            </p>
          </div>

          <div className="wedding-styles grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceStyles.map((style, i) => (
              <div key={i} className="wedding-style-card bg-white p-8 opacity-0 translate-y-12">
                <UtensilsCrossed size={32} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-black mb-3">{style.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{style.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Cuisines Table ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              CUISINES
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Popular Wedding Cuisines in Dubai
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              Many couples choose a fusion approach, blending cuisines to reflect both families or to surprise international guests with local flavours.
            </p>
          </div>

          <div className="wedding-cuisines overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Cuisine</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Best For</th>
                  <th className="text-left font-inter text-sm uppercase tracking-wider text-gold py-4 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {cuisineTable.map((row, i) => (
                  <tr key={i} className="wedding-table-row border-b border-gray-100 opacity-0 translate-y-4">
                    <td className="py-4 px-4 font-playfair text-black text-lg">{row.cuisine}</td>
                    <td className="py-4 px-4 font-inter text-gray-500">{row.bestFor}</td>
                    <td className="py-4 px-4 font-inter text-body-sm text-gray-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════ Menu Segments ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU STRUCTURE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Menu Structure by Wedding Segment
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              A complete wedding dining experience usually includes several phases.
            </p>
          </div>

          <div className="wedding-segments grid md:grid-cols-2 gap-6">
            {menuSegments.map((segment, i) => (
              <div key={i} className="wedding-segment-card bg-charcoal p-8 opacity-0 translate-y-12">
                <h3 className="font-playfair text-h3 text-white mb-4">{segment.title}</h3>
                <ul className="space-y-3">
                  {segment.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-body-sm text-gray-400 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Dietary Considerations ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              INCLUSIVE MENUS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Dietary & Cultural Considerations
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              Dubai wedding caterers must handle a wide range of dietary needs. Discuss these early in the planning process.
            </p>
          </div>

          <div className="wedding-dietary grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dietaryNeeds.map((need, i) => (
              <div key={i} className="wedding-diet-card bg-white p-8 opacity-0 translate-y-12">
                <Leaf size={32} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-black mb-3">{need.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{need.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Beverage Pairing ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                DRINKS & SERVICE
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                Beverage Pairing & Bar Service
              </h2>
              <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-6">
                For weddings where alcohol is permitted, consider curated pairings for each phase. For dry weddings, focus on creative mocktails, fresh juices, infused waters, Arabic coffee, and specialty teas.
              </p>
              <Link to="/bar-services-dubai?utm_source=mychef.ae&utm_medium=internal_link&utm_campaign=wedding-menu-planning-guide" className="btn-primary">Explore Bar Services</Link>
            </div>
            <div className="space-y-4">
              {beverageTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-4 bg-cream p-5">
                  <GlassWater size={24} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-playfair text-h4 text-black mb-1">{tip.phase}</h4>
                    <p className="font-inter text-body-sm text-gray-500">{tip.options}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 2026 Trends ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              2026 TRENDS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Wedding Menu Trends in Dubai
            </h2>
            <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto mt-4">
              Based on what couples are requesting for upcoming celebrations.
            </p>
          </div>

          <div className="wedding-trends space-y-4">
            {trends2026.map((trend, i) => (
              <div key={i} className="wedding-trend-item flex items-start gap-4 bg-charcoal p-6 opacity-0 -translate-x-5">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold text-black font-inter text-sm font-medium">
                  {i + 1}
                </span>
                <p className="font-inter text-body text-white leading-relaxed pt-0.5">{trend}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Sample Menus ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SAMPLE TEMPLATES
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Sample Wedding Menu Templates
            </h2>
            <p className="font-inter text-body text-gray-500 max-w-[640px] mx-auto mt-4">
              Three starting points for different wedding sizes and settings in Dubai.
            </p>
          </div>

          <div className="wedding-menus grid md:grid-cols-3 gap-6">
            {sampleMenus.map((menu, i) => (
              <div key={i} className="wedding-menu-card bg-white p-8 opacity-0 translate-y-12">
                <ChefHat size={32} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-black mb-4">{menu.title}</h3>
                <ul className="space-y-3">
                  {menu.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <Check size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-body-sm text-gray-500 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Working With Caterer ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[900px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            Working With Your Wedding Caterer
          </h2>
          <p className="font-inter text-body-lg text-gray-500 text-center max-w-[640px] mx-auto mb-12">
            A strong caterer relationship makes the wedding day smoother. Here is what to expect at each stage.
          </p>

          <div className="wedding-steps space-y-4">
            {catererSteps.map((step, i) => (
              <div key={i} className="wedding-step-item flex items-start gap-4 bg-cream p-6 opacity-0 -translate-x-5">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold text-black font-inter text-sm font-medium">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-playfair text-h4 text-black mb-1">{step.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Worksheet CTA ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
                FREE WORKSHEET
              </span>
              <h2 className="font-playfair text-h2 text-white mb-6">
                Downloadable Menu Planning Worksheet
              </h2>
              <p className="font-inter text-body-lg text-gray-400 leading-relaxed mb-6">
                We have created a printable worksheet to help you capture your ideas and share them with your caterer.
              </p>
              <button
                onClick={() => window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer')}
                className="btn-primary inline-flex items-center"
              >
                <Download size={18} className="mr-2" />
                Request Your Worksheet
              </button>
            </div>
            <div className="bg-black p-8">
              <h3 className="font-playfair text-h3 text-white mb-6">The worksheet includes:</h3>
              <ul className="space-y-4">
                {worksheetItems.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <ClipboardList size={20} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-body text-gray-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Internal Links ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <h2 className="font-playfair text-h3 text-white text-center mb-10">
            Related Wedding Catering Services & Guides
          </h2>

          <div className="wedding-links grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internalLinks.map((link, i) => (
              <Link
                key={i}
                to={link.link}
                className="wedding-link-item group flex items-center justify-between bg-charcoal p-6 opacity-0 hover:bg-[#222] transition-colors"
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
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Wedding Menu Planning FAQ
          </h2>

          <div className="wedding-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="wedding-faq-item border border-gray-200 opacity-0 translate-y-5">
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
      <section className="bg-gradient-to-b from-charcoal to-black py-20 wedding-cta">
        <div className="container-custom text-center opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Start Planning Your Wedding Menu
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we will create a bespoke wedding menu tailored to your guest list, venue, and vision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=wedding-menu-planning-guide" className="btn-primary">Plan My Wedding Menu</Link>
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
