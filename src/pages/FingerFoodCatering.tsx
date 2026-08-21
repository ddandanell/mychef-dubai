import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Sandwich,
  Building,
  Users,
  Coffee,
  PartyPopper,
  Salad,
  Check,
  Phone,
  ArrowRight,
} from 'lucide-react'
import SEO from '../components/SEO'
import TrustSignalStrip from '../components/TrustSignalStrip'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan finger food catering in Dubai (via mychef.ae/finger-food-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const fingerFoodFormats = [
  {
    icon: Building,
    title: 'Office & Corporate',
    description: 'Bite-size spreads for meetings, training days, and office celebrations — easy to serve, easy to eat, and kind to your schedule.',
    link: '/corporate',
  },
  {
    icon: PartyPopper,
    title: 'Casual Celebrations',
    description: 'Relaxed birthdays, get-togethers, and house parties with generous platters guests can graze on throughout the event.',
    link: '/party-catering-dubai',
  },
  {
    icon: Salad,
    title: 'Sharing Platters',
    description: 'Mezze boards, sliders, mini wraps, and dips arranged as beautiful sharing displays for tables and counters.',
    link: '/catering-dubai',
  },
  {
    icon: Coffee,
    title: 'Networking & Workshops',
    description: 'Light, mess-free bites that keep conversations flowing at networking sessions, seminars, and breakout breaks.',
    link: '/corporate',
  },
  {
    icon: Users,
    title: 'Receptions & Mixers',
    description: 'Stand-up receptions and informal mixers served with a steady flow of warm and cold finger food.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Sandwich,
    title: 'Buffet-Style Bites',
    description: 'A relaxed alternative to a full meal — abundant finger-food stations that let guests serve themselves.',
    link: '/buffet-catering-dubai',
  },
]

const includedItems = [
  { title: 'Bite-Size Menus', description: 'Sliders, wraps, skewers, dips, and mini bites designed to eat on the move.' },
  { title: 'Hot & Cold Selections', description: 'A balanced range of warm savoury bites and fresh chilled options.' },
  { title: 'Sharing Platters & Boards', description: 'Generous, styled grazing boards for tables, counters, and breakout areas.' },
  { title: 'Office-Friendly Delivery', description: 'Clean, organised drop-off and setup that fits around your working day.' },
  { title: 'Service Staff (Optional)', description: 'Servers and hosts available when you want full-service presentation.' },
  { title: 'Dietary Flexibility', description: 'Halal, vegetarian, vegan, and allergy-aware bites clearly labelled.' },
  { title: 'Presentation & Styling', description: 'Tidy, attractive displays that look considered without being fussy.' },
  { title: 'Setup & Cleanup', description: 'We set up, keep things flowing, and clear away so you can carry on.' },
]

const useCases = [
  {
    title: 'Office Events & Meetings',
    description: 'Working lunches, training days, board meetings, and office celebrations served with clean, mess-free bites that fit around a busy schedule. Reliable delivery and setup across DIFC, Business Bay, and beyond.',
  },
  {
    title: 'Casual Home Gatherings',
    description: 'Relaxed birthdays, family get-togethers, and house parties where guests prefer to graze rather than sit down. Generous platters let everyone help themselves throughout the event.',
  },
  {
    title: 'Networking & Workshops',
    description: 'Light, easy-to-hold finger food that keeps conversation flowing at networking sessions, seminars, and breakout breaks, without interrupting the flow of the day.',
  },
  {
    title: 'Receptions & Mixers',
    description: 'Stand-up receptions and informal mixers served with a steady rhythm of warm and cold bites, designed to keep energy high and guests mingling.',
  },
]

const galleryImages = [
  { src: '/menu-canapes.webp', alt: 'Finger food selection in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Sharing platters and bite-size food' },
  { src: '/service-corporate.webp', alt: 'Corporate finger food catering' },
  { src: '/service-events.webp', alt: 'Finger food at a Dubai event' },
  { src: '/menu-cocktails.webp', alt: 'Drinks and finger food reception' },
  { src: '/service-catering.webp', alt: 'Buffet-style finger food spread' },
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
    q: 'What is the difference between finger food and canapés?',
    a: 'Finger food tends to be slightly larger, more casual, and generous — sliders, wraps, skewers, and sharing boards. Canapés are smaller, more refined single bites for formal receptions. We offer both and can advise on the right fit.',
  },
  {
    q: 'Is finger food suitable for office and corporate events?',
    a: 'Yes. Finger food is ideal for meetings, training days, and office celebrations. It is mess-free, easy to serve, and fits around a working schedule, with clean delivery and setup that does not disrupt your day.',
  },
  {
    q: 'Do you offer hot and cold finger food?',
    a: 'Absolutely. We balance warm savoury bites with fresh chilled options, so every spread feels varied and satisfying. Menus are built around your event, guest count, and the time of day.',
  },
  {
    q: 'Can you deliver finger food without full service staff?',
    a: 'Yes. For office and casual events, we offer clean drop-off and setup without staff. For receptions and larger gatherings, full-service waiters and hosts are available on request.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Yes. We routinely create vegetarian, vegan, halal, gluten-free, and allergy-aware finger food, clearly labelled, so every guest can eat with confidence.',
  },
  {
    q: 'How far in advance should I book finger food catering?',
    a: 'For office and smaller events, a few days to one week is usually enough. For larger gatherings, we recommend one to two weeks. During peak season (November to March), earlier booking is advised.',
  },
  { q: "How much does finger food catering cost in Dubai?", a: "Finger food catering in Dubai is priced by custom quote, because the cost depends on your guest count, the number and type of bites, whether you want hot and cold selections, and if you add service staff. Once you tell us the details, we send a clear, itemised proposal with 5% VAT shown separately and no hidden extras. For a fuller breakdown of how catering is priced across the city, see our [Dubai catering prices guide](/dubai-catering-prices-guide)." },
  { q: "What is included in your finger food catering price?", a: "Our finger food catering includes menu design, ingredient sourcing and shopping, on-site preparation or clean drop-off, presentation and styling of platters, and full cleanup afterwards. Service staff to pass bites and host are optional and quoted separately when you want a full-service reception. You can see everything covered on our [catering packages](/catering-packages-dubai) page." },
  { q: "Is there a minimum order or minimum guest count for finger food catering?", a: "We cater finger food for a wide range of group sizes, from small office gatherings to large stand-up receptions, and we set the right menu and quantities to match. Rather than a rigid minimum, we build the proposal around your guest count so the spread feels generous without over-ordering. Share your numbers with us and we'll advise the ideal quantity per person." },
  { q: "Is your finger food halal and prepared to food-safety standards?", a: "Yes, our finger food is halal sourced by default, and everything is prepared by our chefs in kitchens that operate to Dubai Municipality food-safety standards. Hot bites are held hot and cold bites kept properly chilled through delivery and service, so every platter arrives fresh and safe. We can also flag any pork or alcohol-free requirements clearly on request." },
  { q: "How many pieces of finger food should I order per person?", a: "As a general guide, plan for around 4 to 6 bites per person if finger food accompanies drinks, 6 to 8 for a short reception, and 10 to 14 when finger food replaces a meal. We spread that count across several different items so there's real variety, and we adjust upward for longer events or evenings with drinks. Tell us your event length and time of day and we'll size the order precisely." },
  { q: "Can you keep hot finger food hot and cold bites fresh during the event?", a: "Yes, we manage temperature carefully from our kitchen through to service, holding warm savoury bites hot and keeping chilled items properly cold so nothing sits in the danger zone. For receptions and longer gatherings we plan replenishment in waves so bites arrive fresh throughout, not all at once. This is exactly the kind of detail our team handles so you don't have to think about it." },
  { q: "Do you provide serving staff, platters, and equipment for finger food receptions?", a: "Yes, we can supply trained servers to pass bites and host, along with styled platters, boards, and the display setup your event needs. For casual drop-offs we simply arrange everything cleanly and leave; for stand-up receptions and mixers we bring the full-service presentation. Staffing is optional and quoted based on your guest count and service style." },
  { q: "Do you deliver finger food to offices and homes across Dubai?", a: "Yes, we deliver and set up finger food across Dubai, including DIFC, Business Bay, Downtown, Dubai Marina, Palm Jumeirah, and the wider communities. We coordinate timing around your working day or event schedule so the spread is ready exactly when you need it. Let us know your area and we'll confirm the delivery and setup plan in your quote." },
  { q: "How quickly can you reply and arrange finger food catering?", a: "We typically reply within 15 minutes during business hours, so you'll get a fast response and a menu direction quickly after you reach out. For smaller office orders a few days' notice is comfortable, while larger receptions are best booked one to two weeks ahead. The quickest way to start is to [contact us](/contact) with your date, guest count, and location." },
  { q: "Can you build a mixed menu of vegetarian, vegan, and allergy-aware bites?", a: "Yes, we routinely build finger food spreads that mix vegetarian, vegan, gluten-free, and nut-aware options alongside meat and seafood bites, all clearly labelled so guests choose with confidence. Just share dietary needs when you enquire and we'll balance the menu so no one is left out. For guests with strict requirements, see our [allergy-safe catering](/allergy-safe-catering-dubai) approach." },
  { q: "Can you add live stations or a grazing table to a finger food spread?", a: "Yes, we can pair finger food with live cooking stations or a styled grazing table to create a more interactive, abundant display. It's a popular upgrade for receptions and parties where you want a centrepiece and a bit of theatre alongside passed bites. Explore our [live cooking stations](/live-cooking-stations-dubai) and [grazing table](/grazing-table-dubai) options to see what fits your event." },
  { q: "What is the difference between finger food catering and a full buffet?", a: "Finger food is designed to be eaten standing and on the move, with bite-size portions and no need for a seated setup, while a buffet offers fuller plated portions guests serve at a table. Finger food keeps a party or reception relaxed and mingling, whereas a buffet suits sit-down meals. If you're weighing the two, our [buffet catering](/buffet-catering-dubai) page helps you compare." },
  { q: "Is finger food a good choice for birthdays and house parties?", a: "Yes, finger food is ideal for birthdays and house parties because guests can graze all evening rather than sitting for a formal meal, keeping the mood social and easy. We lay out generous sharing platters and warm bites and can add servers if you'd rather host hands-free. It works beautifully for casual [party catering](/party-catering-dubai) across Dubai." },
  { q: "When is the busiest season to book finger food catering in Dubai?", a: "Peak season runs from November to March, when cooler weather brings a rush of corporate functions, receptions, and celebrations, so dates fill quickly. If your event falls in this window, we recommend confirming as early as possible to lock in your preferred date. Outside peak season, shorter lead times are usually comfortable." },
  { q: "Why choose myCHEF for finger food catering instead of a restaurant order?", a: "We handle the whole thing end to end, from designing a balanced bite-size menu and sourcing ingredients to on-site setup, presentation, and full cleanup, so you host without lifting a finger. A restaurant order leaves you juggling reheating, plating, and clearing, while we manage the experience as caterers who do this every day. Learn more [about us](/about) and how we work." },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'fully-coordinated catering for events of every size across Dubai.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Canapé Catering',
    description: 'Refined passed canapés and styled displays for elegant receptions.',
    image: '/menu-canapes.webp',
    link: '/canape-catering-dubai',
  },
  {
    title: 'Corporate Catering',
    description: 'Professional dining for boardroom lunches, conferences, and functions.',
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
  name: 'Finger Food Catering Dubai',
  serviceType: 'Catering Service',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Finger Food Catering Dubai', item: 'https://www.mychef.ae/finger-food-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Finger Food quote in Dubai. Date: __ Guests: __ Area: __"
export default function FingerFoodCatering() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.fin-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.fin-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.fin-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.fin-fmt-card', {
      scrollTrigger: { trigger: '.fin-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fin-uc-item', {
      scrollTrigger: { trigger: '.fin-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fin-inc-item', {
      scrollTrigger: { trigger: '.fin-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fin-gallery-img', {
      scrollTrigger: { trigger: '.fin-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.fin-faq-item', {
      scrollTrigger: { trigger: '.fin-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.fin-loc-item', {
      scrollTrigger: { trigger: '.fin-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.fin-rel-card', {
      scrollTrigger: { trigger: '.fin-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.fin-cta', {
      scrollTrigger: { trigger: '.fin-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Finger Food Catering Dubai | Office & Party Bite-Size Menus | myCHEF"
        description="Bite-size finger food catering in Dubai for offices, parties & corporate events. Hot & cold sharing platters, easy service, halal options. Request a quote."
        canonicalPath="/finger-food-catering-dubai"
        ogImage="/menu-canapes.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/canape-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 fin-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Finger Food Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 fin-hero-h1">
            Finger Food Catering in Dubai — Office, Party & Event Bites
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 fin-hero-sub">
            Generous bite-size menus, sharing platters, and easy service for offices, corporate events, and casual celebrations — relaxed, mess-free, and beautifully presented across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=finger-food-catering-dubai" className="btn-primary opacity-0 translate-y-4 fin-hero-cta">Get a Finger Food Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 fin-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            DUBAI FINGER FOOD SPECIALISTS
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Effortless Bites for Every Gathering
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Not every event calls for a seated meal. Sometimes the best hosting is a generous spread of bites that lets guests eat, move, and talk freely. At myCHEF Dubai, finger food catering is about exactly that — relaxed, satisfying, mess-free food that keeps an office meeting, a casual party, or a stand-up reception flowing.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Our menus span sliders, wraps, skewers, mezze boards, dips, and warm savoury bites, balanced between hot and cold and built around the time of day. For corporate events, we deliver and set up cleanly around your schedule; for casual gatherings, we lay out abundant platters guests can graze on all evening. Add service staff when you want full presentation, or keep it simple with a tidy drop-off. Explore our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or speak to us to start planning.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Finger Food Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              FINGER FOOD FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Finger Food for Every Event
            </h2>
          </div>

          <div className="fin-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fingerFoodFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="fin-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE WE SERVE
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Finger Food for Every Setting
            </h2>
          </div>

          <div className="fin-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="fin-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Finger Food Catering Includes
          </h2>

          <div className="fin-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="fin-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Finger Food Catering
          </h2>

          <div className="fin-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="fin-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Finger Food Catering Questions
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Finger Food Catering Across Dubai
          </h2>

          <div className="fin-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="fin-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="fin-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="fin-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center fin-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Finger Food Spread
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your event and we'll design a bite-size menu and service plan that fits it perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=finger-food-catering-dubai" className="btn-primary">Get a Finger Food Quote</Link>
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
