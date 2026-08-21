import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  Flame,
  UtensilsCrossed,
  Leaf,
  Soup,
  ChefHat,
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

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan Indian catering in Dubai (via mychef.ae/indian-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const menuHighlights = [
  {
    icon: Soup,
    title: 'Biryani & Rice',
    description: 'Slow-cooked Hyderabadi and Lucknowi biryanis layered with saffron, whole spices, and tender meats — alongside fragrant pulao and lemon rice for South Indian tables.',
    link: '/catering-dubai',
  },
  {
    icon: Flame,
    title: 'Tandoor Live Stations',
    description: 'A partner-chef-led clay-oven station searing kebabs, tikka, paneer, and fresh naan to order — theatre and aroma brought straight to your guests.',
    link: '/buffet-catering-dubai',
  },
  {
    icon: UtensilsCrossed,
    title: 'North Indian Curries',
    description: 'Rich, layered gravies — butter chicken, rogan josh, dal makhani, and palak paneer — simmered the traditional way and balanced for every palate.',
    link: '/catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'South Indian Specialities',
    description: 'Dosa, idli, sambar, and coconut-laced curries from the southern coast, served with chutneys and a lighter, spice-forward character.',
    link: '/asian-catering-dubai',
  },
  {
    icon: Leaf,
    title: 'Jain & Vegetarian',
    description: 'Considered Jain, pure-vegetarian, and vegan menus — no onion or garlic on request — so every guest is catered for without compromise.',
    link: '/catering-dubai',
  },
  {
    icon: Users,
    title: 'Street Food & Chaat',
    description: 'Interactive chaat counters with pani puri, bhel, and tikki — playful, shareable bites that keep guests mingling at receptions and parties.',
    link: '/arabic-catering-dubai',
  },
]

const useCases = [
  {
    title: 'Weddings & Sangeets',
    description: 'From mehndi afternoons to grand reception banquets, we build multi-course Indian menus that move from chaat counters to live tandoor stations and a sweeping main buffet, scaled for hundreds of guests.',
  },
  {
    title: 'Villa & Home Celebrations',
    description: 'For Diwali dinners, milestone birthdays, and family gatherings across Dubai, our chefs come to your villa fully equipped — cooking, serving, and clearing so you can host without lifting a finger.',
  },
  {
    title: 'Corporate & Cultural Events',
    description: 'Boardroom lunches, festival functions, and community evenings benefit from an authentic Indian spread that feels generous and familiar, presented with the polish a corporate setting demands.',
  },
  {
    title: 'Intimate Dinners at Home',
    description: 'For smaller gatherings, a private chef can prepare a curated regional tasting in your kitchen — perfect when you want depth of flavour without a full buffet.',
  },
]

const includedItems = [
  { title: 'Regional Menu Design', description: 'North Indian, South Indian, or a blended spread built around your guests and occasion.' },
  { title: 'Live Tandoor & Chaat', description: 'partner-chef-led stations for fresh-from-the-oven breads, kebabs, and street-food counters.' },
  { title: 'Spice-Level Tailoring', description: 'Heat and seasoning adjusted across dishes so every guest is comfortable.' },
  { title: 'Jain, Veg & Vegan', description: 'Pure-vegetarian, Jain (no onion or garlic), and vegan options arranged on request.' },
  { title: 'Halal Sourcing', description: 'Halal meat and poultry as standard, sourced from trusted suppliers.' },
  { title: 'Professional Chefs', description: 'Experienced Indian culinary team led by a partner chef.' },
  { title: 'Service & Setup', description: 'Waiters, buffet styling, warmers, and full on-site coordination.' },
  { title: 'Full Pack-Down', description: 'We set up, serve, and clear so your space is left spotless.' },
]

const galleryImages = [
  { src: '/menu-meat.webp', alt: 'Indian tandoori meat catering in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Indian appetizers and chaat spread' },
  { src: '/service-catering.webp', alt: 'Indian catering buffet setup in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Indian canapé and finger food selection' },
  { src: '/service-events.webp', alt: 'Indian wedding catering event' },
  { src: '/menu-dessert.webp', alt: 'Indian dessert and mithai display' },
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
    q: 'Do you cater both North and South Indian cuisine?',
    a: 'Yes. We build menus across regions — from North Indian tandoor, biryani, and rich curries to South Indian dosa, idli, sambar, and coconut-based dishes. Many clients choose a blended spread so guests enjoy the best of both.',
  },
  {
    q: 'Can you provide Jain and pure-vegetarian menus?',
    a: 'Absolutely. your chef prepares pure-vegetarian, vegan, and Jain menus, including no-onion and no-garlic preparations on request. We can run an entirely vegetarian event or arrange dedicated vegetarian sections within a larger spread.',
  },
  {
    q: 'Is the meat halal?',
    a: 'Yes. Halal meat and poultry are standard for all our Indian catering in Dubai, sourced from trusted suppliers. Halal is the baseline across our menus and we are happy to confirm sourcing details when you plan.',
  },
  {
    q: 'Can you adjust the spice level for mixed guests?',
    a: 'We tailor heat and seasoning across dishes so spice-sensitive guests and those who love bold flavour are both comfortable. We can also flag the heat level of each dish on the buffet for your guests.',
  },
  {
    q: 'Do you offer live tandoor and chaat stations?',
    a: 'Yes. Partner-chef-led tandoor stations grill kebabs, tikka, paneer, and fresh naan to order, while live chaat counters serve pani puri, bhel, and tikki. These interactive stations are popular at weddings and large receptions.',
  },
  {
    q: 'How far in advance should I book Indian catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For weddings and large functions, we recommend three to four weeks. During peak wedding and festival season, earlier booking is strongly advised.',
  },
  { q: "How much does Indian catering in Dubai cost per person?", a: "Indian catering in Dubai is priced by custom quote, because the per-head cost depends on your menu, guest count, and whether you add live tandoor or chaat stations. Buffet-style spreads are the most economical, while plated multi-course dinners and premium dishes like Hyderabadi biryani or lamb rogan josh sit higher. Share your date and numbers and we'll send a clear, itemised proposal — usually within 15 minutes during business hours." },
  { q: "What's included in the price of your Indian catering?", a: "Every quote covers menu design, ingredient sourcing and shopping, on-site cooking, plating and serving, and full cleanup afterwards. Live tandoor and chaat counters, warmers, buffet styling, and coordination are built in, so there are no surprise add-ons. See exactly what a booking includes on our [how it works](/how-it-works) page." },
  { q: "Are there any hidden charges like VAT or service fees?", a: "No hidden charges — your proposal itemises everything, and the only statutory addition is 5% VAT as required in the UAE. Optional extras like additional serving staff or specialty live stations are quoted transparently up front so you can decide what to include. You approve the full menu and price before anything is confirmed." },
  { q: "Do you have a minimum number of guests for Indian catering?", a: "We cater Indian menus for a wide range of gatherings, from an intimate villa dinner to a wedding banquet for several hundred. For very small groups a private chef preparing a regional tasting in your kitchen is often the better fit, while buffets and live stations suit larger celebrations. Tell us your headcount and we'll recommend the right format." },
  { q: "Are your kitchens and chefs licensed and food-safe?", a: "Yes — our chefs and kitchens operate to Dubai Municipality food-safety standards, with proper hygiene and temperature control from prep through to serving. This matters especially for large Indian spreads with rich gravies and dairy-based dishes that need careful handling on the day. You can read more about our team and standards on our [about](/about) page." },
  { q: "Can I taste the food before booking a large event?", a: "Yes, tasting sessions can be arranged for larger events such as weddings and corporate functions so you can confirm dishes, spice levels, and portion sizes before you commit. It's a good chance to fine-tune your menu across starters, mains, breads, and sweets. Ask about a [tasting menu](/tasting-menu-dubai) when you request your proposal." },
  { q: "Do you provide waiters and serving staff for Indian events?", a: "Yes, professional serving staff and waiters are available for buffets, plated dinners, and live-station setups. Staffing is optional and scaled to your guest count and service style, so a relaxed villa buffet can run lighter while a formal reception gets full front-of-house support. We'll suggest the right number of staff for a smooth service." },
  { q: "Can you cater a fully Jain menu with no onion or garlic?", a: "Yes — we prepare complete Jain menus with no onion, no garlic, and no root vegetables, cooked as a full spread rather than a stripped-back version. Pure-vegetarian, satvik, and vegan dishes are handled with the same care, and veg and non-veg are kept separate during preparation. Explore our dedicated [Jain catering](/jain-catering-dubai) options for festivals and family gatherings." },
  { q: "Do you cater Indian food at home villas and apartments across Dubai?", a: "Yes, our chefs come fully equipped to villas, apartments, and private residences across Dubai and cook, serve, and clear on-site. For a Diwali dinner, a birthday, or a family celebration, we bring the tandoor, chaat counter, and buffet to you so you can host without lifting a finger. We cater in [villas and private residences](/villas-private-residences) throughout the city." },
  { q: "Can you handle Indian mithai, desserts, and a sweets table?", a: "Yes, we prepare traditional Indian sweets and mithai — from gulab jamun and jalebi to kheer and barfi — and can style a dedicated dessert or sweets table for weddings and festivals. Low-sugar and vegan dessert options are available on request so every guest is looked after. It pairs beautifully with a [dessert table](/dessert-table-catering-dubai) setup for larger celebrations." },
  { q: "Do you offer live chaat and street-food counters for parties?", a: "Yes, interactive chaat counters with pani puri, bhel, and tikki are among our most-booked party formats, cooked fresh in front of your guests. They keep people mingling and add real theatre to receptions, birthdays, and festival evenings alongside a live tandoor. See our full range of [live cooking stations](/live-cooking-stations-dubai) to build your spread." },
  { q: "How far in advance should I book Indian catering for a wedding?", a: "For a wedding or large function we recommend booking three to four weeks ahead, and earlier during peak season from November to March when dates fill quickly. Smaller villa dinners can often be arranged with one to two weeks' notice. The sooner you reach out, the more flexibility you have on menu, staffing, and live stations." },
  { q: "Can you cater a large Indian wedding for several hundred guests?", a: "Yes, we regularly build multi-course Indian menus for large weddings and sangeets, flowing from chaat counters to live tandoor stations and a sweeping main buffet. We scale kitchen capacity, staffing, and logistics to match your guest count without compromising on freshness or authenticity. Plan the full celebration through our [wedding catering](/wedding-catering-dubai) service." },
  { q: "Is Indian catering cheaper as a buffet or a plated dinner?", a: "A buffet is generally the more economical choice because it needs less serving staff and lets guests help themselves, while plated and multi-course service costs more due to higher staffing. For weddings, many hosts combine both — live stations and a buffet for the crowd, with plated courses for a head table. We'll advise the best value format for your occasion and can compare a [buffet](/buffet-catering-dubai) against plated service in your quote." },
  { q: "How do I get a quote and how quickly will you reply?", a: "Send us your event date, guest count, and any dietary needs and we'll reply with a tailored Indian catering proposal, typically within 15 minutes during business hours. There's no obligation — you review the menu and pricing before anything is confirmed. Start by reaching out through our [contact](/contact) page or WhatsApp." },
]

const relatedServices = [
  {
    title: 'Luxury Catering Dubai',
    description: 'fully-coordinated catering across Dubai with bespoke menus for any occasion.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Arabic Catering',
    description: 'Mezze, charcoal grills, and Levantine feasts styled for celebrations of any size.',
    image: '/service-events.webp',
    link: '/arabic-catering-dubai',
  },
  {
    title: 'Asian Catering',
    description: 'Thai, Chinese, and pan-Asian menus with live wok and dim sum stations.',
    image: '/menu-seafood.webp',
    link: '/asian-catering-dubai',
  },
  {
    title: 'Holi Catering Dubai',
    description: 'Colourful Indian festival menus, chaat stations, thandai and sweets for Holi parties.',
    image: '/images/indian-catering-dubai-hero.webp',
    link: '/holi-catering-dubai',
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
  name: 'Indian Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Indian Catering Dubai', item: 'https://www.mychef.ae/indian-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in Indian catering in Dubai. Date: __ Guests: __ Area: __"
export default function IndianCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.ind-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.ind-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.ind-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.ind-fmt-card', {
      scrollTrigger: { trigger: '.ind-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ind-uc-item', {
      scrollTrigger: { trigger: '.ind-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ind-inc-item', {
      scrollTrigger: { trigger: '.ind-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ind-gallery-img', {
      scrollTrigger: { trigger: '.ind-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.ind-faq-item', {
      scrollTrigger: { trigger: '.ind-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.ind-loc-item', {
      scrollTrigger: { trigger: '.ind-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.ind-rel-card', {
      scrollTrigger: { trigger: '.ind-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.ind-cta', {
      scrollTrigger: { trigger: '.ind-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Indian Catering Dubai | Wedding, Party & Corporate"
        description="Indian catering Dubai for weddings, parties, villas & corporate events. North & South Indian menus, live tandoor, biryani, halal & Jain options. Get a quote."
        canonicalPath="/indian-catering-dubai"
        ogImage="/menu-meat.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/indian-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 ind-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Indian Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 ind-hero-h1">
            Indian Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 ind-hero-sub">
            North and South Indian feasts, live tandoor and chaat stations, and considered Jain and vegetarian menus — authentic flavour brought to villas, weddings, and events across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=indian-catering-dubai" className="btn-primary opacity-0 translate-y-4 ind-hero-cta">Get My Indian Catering Quote</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 ind-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <TrustSignalStrip className="mt-8" variant="dark" />
      </section>

      {/* ═══════════════ Section 2: Opening ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            AUTHENTIC INDIAN CATERING IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            The Depth of Indian Cuisine, Done Properly
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Indian food is built on layers — of spice, of region, of ritual. A great Indian menu is not a single cuisine but dozens, from the smoky tandoors and saffron biryanis of the north to the coconut curries, dosa, and tangy chutneys of the south. At myCHEF Dubai, we treat each menu as a journey across that map, cooking the way each dish is meant to be cooked and seasoning it with respect for tradition rather than shortcuts.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting a grand wedding banquet, a Diwali dinner at your villa, or a corporate function that needs to feel both generous and refined, our chefs, led by <Link to="/chefs/ahmed-executive-chef" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Executive Chef Ahmed</Link>, brings live tandoor and chaat stations, slow-cooked curries, and considered vegetarian, vegan, and Jain options to the table. Halal sourcing is the baseline, spice levels are tailored to your guests, and every detail is handled — explore how it fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or plan a dedicated <Link to="/diwali-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Diwali catering in Dubai</Link> menu.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Menu Highlights ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              MENU HIGHLIGHTS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              From Tandoor to Table
            </h2>
          </div>

          <div className="ind-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="ind-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHO your chef prepares FOR
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Indian Catering for Every Occasion
            </h2>
          </div>

          <div className="ind-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="ind-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Indian Catering Includes
          </h2>

          <div className="ind-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="ind-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Indian Catering
          </h2>

          <div className="ind-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="ind-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Indian Catering Questions
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 8: Locations ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            Catering Across Dubai
          </h2>

          <div className="ind-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="ind-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="ind-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ind-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      <LocationStrip title="Indian catering across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ind-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Indian Feast
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your celebration and we'll design an Indian menu that suits your guests, dietary needs, and the scale of your occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=indian-catering-dubai" className="btn-primary">Get My Indian Catering Quote</Link>
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
