import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  TreePine,
  Gift,
  Flame,
  UtensilsCrossed,
  Users,
  Check,
  ChevronRight,
  Phone,
  ArrowRight,
  Sparkles,
  Home,
} from 'lucide-react'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to book Christmas catering in Dubai (via mychef.ae/christmas-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const christmasFormats = [
  {
    icon: TreePine,
    title: 'Traditional Roast Dinner',
    description: 'Roasted turkey, honey-glazed ham, seasonal vegetables, stuffing, gravy, and cranberry sauce served as a plated or family-style feast.',
    link: '/catering-dubai',
  },
  {
    icon: Gift,
    title: 'Christmas Canapé Party',
    description: 'Festive bite-sized starters and circulating canapés for cocktail-style celebrations, office parties, and pre-dinner receptions.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Flame,
    title: 'Festive Outdoor BBQ',
    description: 'A Dubai-style Christmas BBQ with grilled meats, seafood, festive sides, and live cooking stations in your garden or terrace.',
    link: '/bbq-catering-dubai',
  },
  {
    icon: UtensilsCrossed,
    title: 'Christmas Brunch',
    description: 'Lazy late-morning brunch with pastries, eggs, roast carving station, festive salads, and seasonal desserts for relaxed gatherings.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Corporate Christmas Lunch',
    description: 'End-of-year office lunches, team celebrations, and client entertaining with full setup, service, and seasonal menu design.',
    link: '/corporate',
  },
  {
    icon: Sparkles,
    title: 'Vegetarian & Vegan Christmas',
    description: 'Plant-based festive mains, vegetable terrines, nut roasts, and dairy-free desserts designed for modern dietary needs.',
    link: '/catering-dubai',
  },
]

const includedItems = [
  { title: 'Bespoke Festive Menu', description: 'A Christmas menu designed around your guest count, dietary needs, and celebration style.' },
  { title: 'Roasted Turkey or Ham', description: 'Traditional roast mains with all the trimmings, or a plant-based alternative if preferred.' },
  { title: 'Canapés & Starters', description: 'Seasonal starters, soups, and circulating canapés to welcome your guests.' },
  { title: 'Seasonal Sides & Sauces', description: 'Roasted vegetables, potatoes, stuffing, gravies, and festive condiments.' },
  { title: 'Dessert Table & Christmas Cake', description: 'Styled sweet tables, yule logs, mince pies, and a celebration cake if requested.' },
  { title: 'Service Staff & Bartenders', description: 'Professional waiters, hosts, and bar staff scaled to the size of your party.' },
  { title: 'Table Setup & Styling', description: 'Festive tableware, linens, and presentation that complements the occasion.' },
  { title: 'Kitchen Cleanup & Clear-Down', description: 'We leave your villa, office, or venue clean and tidy after the celebration.' },
]

const useCases = [
  {
    title: 'Villa Christmas Dinner',
    description: 'Host a warm family Christmas dinner in Emirates Hills, Palm Jumeirah, or Dubai Hills. Our team brings the kitchen, the roast, and the service to your dining room so everyone can gather around the table.',
  },
  {
    title: 'Corporate Christmas Party',
    description: 'From DIFC offices to Business Bay boardrooms, we cater end-of-year lunches, cocktail parties, and client receptions with festive menus, service staff, and seasonal styling.',
  },
  {
    title: 'Christmas Day at Home',
    description: 'For expat families and friends celebrating away from home, we recreate the traditional Christmas lunch experience in your apartment or villa, complete with turkey, trimmings, and dessert.',
  },
  {
    title: 'Festive Yacht Celebration',
    description: 'Take advantage of Dubai\'s December weather with a Christmas celebration on the water. We provide yacht-friendly menus, compact setups, and seamless service for marine events.',
  },
]

const howItWorks = [
  { step: '01', title: 'Share Your Plans', description: 'Tell us your date, guest count, venue, and the kind of Christmas celebration you have in mind.' },
  { step: '02', title: 'Menu Consultation', description: 'We propose a festive menu with roast options, sides, desserts, and drinks tailored to your group.' },
  { step: '03', title: 'Receive a Proposal', description: 'You receive a clear, itemised proposal covering food, staffing, styling, and service for the event.' },
  { step: '04', title: 'Confirm Your Booking', description: 'Once the menu and details are approved, we lock in your date and finalise logistics.' },
  { step: '05', title: 'Chef & Team Arrive', description: 'Our chef and service team arrive with ingredients, equipment, and everything needed to prepare the meal.' },
  { step: '06', title: 'Serve, Celebrate & Clear', description: 'We serve your guests, manage the kitchen, and clear down afterwards so you can simply enjoy the day.' },
]

const faqs = [
  {
    q: 'Do you provide traditional Christmas turkey and ham?',
    a: 'Yes. Our Christmas catering includes roasted turkey, honey-glazed ham, and all the classic trimmings. We can also provide a plant-based festive main for vegetarian or vegan guests.',
  },
  {
    q: 'Can you cater Christmas parties at offices and corporate venues?',
    a: 'Yes. We cater corporate Christmas lunches, cocktail receptions, and end-of-year team events across Dubai offices and event spaces, with full service and seasonal menu design.',
  },
  {
    q: 'Do you offer vegetarian or vegan Christmas menus?',
    a: 'Yes. We design vegetarian, vegan, and allergen-aware Christmas menus, including nut roasts, vegetable terrines, dairy-free desserts, and plant-based sides.',
  },
  {
    q: 'Can you cater on Christmas Day or Christmas Eve?',
    a: 'Yes. We are available for Christmas Eve, Christmas Day, and Boxing Day events across Dubai. Dates fill quickly, so we recommend booking early during the festive season.',
  },
  {
    q: 'Do you provide service staff and cleanup?',
    a: 'Yes. Every Christmas catering package includes professional service staff, hosts, and bartenders as needed, plus full setup, service, and clear-down after the event.',
  },
  {
    q: 'How far in advance should I book Christmas catering in Dubai?',
    a: 'We recommend booking two to four weeks in advance. For Christmas Day itself and large events, earlier is better to secure your preferred menu and staffing.',
  },
]

const relatedServices = [
  {
    title: 'Party Catering',
    description: 'Full-service catering for private parties, celebrations, and seasonal gatherings across Dubai.',
    image: '/service-events.jpg',
    link: '/party-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Office lunches, boardroom dining, and corporate events with professional service.',
    image: '/service-catering.jpg',
    link: '/corporate',
  },
  {
    title: 'Private Chef Dubai',
    description: 'A dedicated chef and team for intimate dinners and special occasions at your location.',
    image: '/service-luxury-dining.jpg',
    link: '/private-chef-dubai',
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
  name: 'Christmas Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Christmas Catering Dubai', item: 'https://mychef.ae/christmas-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

export default function ChristmasCatering() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.xmas-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.xmas-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.xmas-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.xmas-fmt-card', {
      scrollTrigger: { trigger: '.xmas-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.xmas-uc-item', {
      scrollTrigger: { trigger: '.xmas-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.xmas-inc-item', {
      scrollTrigger: { trigger: '.xmas-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.xmas-step-item', {
      scrollTrigger: { trigger: '.xmas-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.xmas-faq-item', {
      scrollTrigger: { trigger: '.xmas-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.xmas-rel-card', {
      scrollTrigger: { trigger: '.xmas-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.xmas-cta', {
      scrollTrigger: { trigger: '.xmas-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Christmas Catering Dubai | Private Chef & Festive Menus"
        description="Festive Christmas catering in Dubai with private chef service, roasted turkey, canapés, and seasonal menus for villa, office, and family celebrations across Dubai."
        canonicalPath="/christmas-catering-dubai"
        ogImage="/service-catering.jpg"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/christmas-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 xmas-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-[13px]">
              <li><Link to="/" className="text-[#A3A3A3] hover:text-gold transition-colors">Home</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><Link to="/events" className="text-[#A3A3A3] hover:text-gold transition-colors">Events</Link></li>
              <li className="text-[#A3A3A3]">/</li>
              <li><span className="text-gold">Christmas Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-[40px] md:text-[56px] lg:text-[72px] font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 xmas-hero-h1">
            Christmas Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 xmas-hero-sub">
            Traditional festive menus, roast turkey, canapés, and full-service Christmas catering for villa dinners, office parties, and family celebrations across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=christmas-catering-dubai" className="btn-primary opacity-0 translate-y-4 xmas-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 xmas-hero-cta"
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
            Festive Catering in Dubai
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            A Christmas Feast Without the Stress
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            Christmas in Dubai is a special time of year. With cooler evenings, twinkling city lights, and a community that loves to gather, many families and companies choose to host festive celebrations at home, in the office, or on a private terrace. At myCHEF Dubai, our Christmas catering service brings the seasonal spirit to your table with traditional flavours, modern presentation, and full-service hospitality.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            From roasted turkey and honey-glazed ham to vegetarian festive mains and styled dessert tables, we design menus that suit your guest list, venue, and celebration style. Every detail is handled by our team, so you can focus on the people around you. Explore our Christmas catering options below, or see how they fit within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Target Audience ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom max-w-[900px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            Who Our Christmas Catering Is For
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Celebrations for Every Kind of Host
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            Our Christmas catering is designed for Dubai hosts who want a festive meal without the stress of cooking and cleanup. Families gathering for Christmas Eve or Christmas Day, companies hosting end-of-year parties, villa owners entertaining friends, and expat groups celebrating away from home all use our service. We also cater Christmas brunches, corporate gift-lunch events, and private yacht celebrations during the holiday season. Whether your group is small and intimate or spans fifty guests, our team adapts the menu, staffing, and format to match the occasion.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 4: Formats / Menu Options ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Christmas Menus & Formats
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Catering Styles for the Festive Season
            </h2>
          </div>

          <div className="xmas-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {christmasFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="xmas-fmt-card group bg-charcoal p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed mb-4">
                    {fmt.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
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
            What Our Christmas Catering Includes
          </h2>

          <div className="xmas-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="xmas-inc-item flex gap-3 opacity-0 -translate-x-5">
                <Check size={20} className="text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-inter text-base font-medium text-black mb-1">{item.title}</h4>
                  <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: How It Works ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              How It Works
            </span>
            <h2 className="font-playfair text-h2 text-white">
              From Inquiry to Christmas Dinner
            </h2>
          </div>

          <div className="xmas-steps grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div key={i} className="xmas-step-item bg-charcoal p-8 opacity-0 translate-y-10">
                <span className="font-playfair text-[32px] text-gold/40 block mb-3">{step.step}</span>
                <h3 className="font-playfair text-h3 text-white mb-2">{step.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 7: Why Choose myCHEF ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            Why Choose myCHEF
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Festive Hospitality, Delivered to Your Door
          </h2>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed mb-5">
            At myCHEF Dubai, we bring the full restaurant experience to your Christmas celebration. Our chefs and event team are available for Dubai events in private villas, homes, offices, and event spaces, designing menus that reflect both tradition and your personal taste.
          </p>
          <p className="font-inter text-body-lg text-[#737373] leading-relaxed">
            We never use fixed, one-size-fits-all menus. Instead, we listen to your plans and build a custom proposal that covers food, drinks, service, and styling. Menus can be adapted to guest count, dietary needs, and event style, so your Christmas celebration feels considered, personal, and effortless from start to finish.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 8: Dubai Use Cases ═══════════════ */}
      <section className="bg-black section-padding pt-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Dubai Christmas Celebrations
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Where We Cater Christmas Across Dubai
            </h2>
          </div>

          <div className="xmas-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="xmas-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
                <Home size={28} className="text-gold mb-4" />
                <h3 className="font-playfair text-h3 text-white mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-[#A3A3A3] leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 9: Internal Links ═══════════════ */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom max-w-[900px]">
          <h2 className="font-playfair text-h3 text-white text-center mb-8">
            Explore Related Services & Locations
          </h2>
          <p className="font-inter text-body text-[#A3A3A3] text-center mb-8 leading-relaxed">
            Christmas catering is part of our wider event and private dining services. Browse these related pages to plan your full festive experience across Dubai.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/events" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Events</Link>
            <Link to="/catering-dubai" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Catering Dubai</Link>
            <Link to="/party-catering-dubai" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Party Catering</Link>
            <Link to="/corporate" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Corporate Events</Link>
            <Link to="/yachts" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Yacht Catering</Link>
            <Link to="/canape-catering-dubai" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Canapé Catering</Link>
            <Link to="/locations/palm-jumeirah" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Palm Jumeirah</Link>
            <Link to="/locations/downtown-dubai" className="px-5 py-2.5 border border-gold/30 text-gold font-inter text-sm hover:bg-gold hover:text-black transition-colors rounded-sm">Downtown Dubai</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 10: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-[36px] text-black text-center mb-10">
            Christmas Catering Questions
          </h2>

          <div className="xmas-faq space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="xmas-faq-item border border-[#E5E5E5] opacity-0 translate-y-5">
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
                    <p className="font-inter text-body-sm text-[#737373] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 11: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <h3 className="font-playfair text-h3 text-white text-center mb-10">
            You May Also Like
          </h3>

          <div className="xmas-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="xmas-rel-card group bg-charcoal overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-white mb-2">{svc.title}</h4>
                  <p className="font-inter text-body-sm text-[#A3A3A3] mb-4">{svc.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-[13px] uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 12: Final CTA ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center xmas-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Book My Christmas Catering
          </h2>
          <p className="font-inter text-body-lg text-[#A3A3A3] max-w-[600px] mx-auto mb-8">
            Tell us about your Christmas plans and we will design a menu, service plan, and festive setup that lets you enjoy the day with your guests.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=christmas-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
          <p className="font-inter text-sm text-[#A3A3A3] mt-6">
            We typically reply within 2 hours during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
