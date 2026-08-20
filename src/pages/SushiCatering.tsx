import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Fish,
  ChefHat,
  Utensils,
  Sparkles,
  Ship,
  Building,
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
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to plan sushi catering in Dubai (via mychef.ae/sushi-catering-dubai)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const sushiFormats = [
  {
    icon: Fish,
    title: 'Sashimi & Nigiri Platters',
    description: 'Hand-cut sashimi and pressed nigiri built from premium tuna, salmon, hamachi, and seasonal fish, arranged as a striking centrepiece for your gathering.',
    link: '/canape-catering-dubai',
  },
  {
    icon: ChefHat,
    title: 'Live Sushi Chef Station',
    description: 'A dedicated sushi chef rolls, slices, and plates in front of your guests, bringing the theatre of an omakase counter into your villa or venue.',
    link: '/live-cooking-stations-dubai',
  },
  {
    icon: Utensils,
    title: 'Maki & Roll Selections',
    description: 'Classic and signature maki, uramaki, and temaki — from delicate cucumber rolls to richly layered specialty rolls — cut and presented to order.',
    link: '/asian-catering-dubai',
  },
  {
    icon: Sparkles,
    title: 'Canapé-Style Sushi',
    description: 'Bite-sized sushi and sashimi spoons passed as elegant canapés, ideal for cocktail receptions, gallery openings, and networking evenings.',
    link: '/canape-catering-dubai',
  },
  {
    icon: Ship,
    title: 'Yacht & Marina Sushi',
    description: 'Chilled sushi towers and sashimi boats prepared for yacht charters and waterfront events across Dubai Marina and the Palm.',
    link: '/catering-dubai',
  },
  {
    icon: Building,
    title: 'Corporate Sushi Lunches',
    description: 'Refined sushi spreads and bento-style boxes for boardroom lunches, client entertaining, and product launches that need to impress.',
    link: '/luxury-dining-experiences',
  },
]

const includedItems = [
  { title: 'Premium-Grade Fish', description: 'Fish selected for freshness and quality from trusted suppliers, handled to sushi standards.' },
  { title: 'Sushi Chef on Request', description: 'A skilled sushi chef to slice, roll, and plate live at your event.' },
  { title: 'Sashimi & Nigiri', description: 'Hand-cut sashimi and pressed nigiri across a range of premium fish.' },
  { title: 'Signature Maki Rolls', description: 'Classic and house-style rolls, cut and presented for sharing or canapé service.' },
  { title: 'Vegetarian Options', description: 'Avocado, cucumber, and inari pieces for plant-based and vegetarian guests.' },
  { title: 'Condiments & Garnish', description: 'Soy, wasabi, pickled ginger, and considered garnishing for every platter.' },
  { title: 'On-Site Styling', description: 'Platters, boats, and stations arranged and styled at your venue.' },
  { title: 'Full Pack-Down', description: 'We set up, serve, and clear away so your space is left spotless.' },
]

const useCases = [
  {
    title: 'Villa & Garden Celebrations',
    description: 'For at-home gatherings across Palm Jumeirah, Emirates Hills, and Dubai Hills, a sushi station or sashimi centrepiece adds a sense of occasion. We build and replenish on-site so the spread stays fresh throughout the evening.',
  },
  {
    title: 'Cocktail & Canapé Receptions',
    description: 'Passed sushi canapés and sashimi spoons keep guests mingling at openings, launches, and networking evenings. Each bite is composed to be eaten standing, with elegance and ease.',
  },
  {
    title: 'Yacht Parties on the Water',
    description: 'Chilled sushi towers and sashimi boats are made for yacht charters around Dubai Marina and Bluewaters. Your chef prepares and presents so the menu travels beautifully out onto the water.',
  },
  {
    title: 'Corporate Entertaining',
    description: 'A live sushi chef or curated sushi lunch elevates client meetings, board lunches, and milestone celebrations, pairing naturally with our wider luxury dining offering.',
  },
]

const galleryImages = [
  { src: '/menu-seafood.webp', alt: 'Premium sushi and sashimi platter in Dubai' },
  { src: '/menu-canapes.webp', alt: 'Sushi canapés on a styled spread' },
  { src: '/service-luxury-dining.webp', alt: 'Luxury sushi dining set-up in Dubai' },
  { src: '/menu-appetizer.webp', alt: 'Sushi appetizer selection' },
  { src: '/service-events.webp', alt: 'Sushi catering at a Dubai event' },
  { src: '/service-villa.webp', alt: 'Villa sushi station set-up' },
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
    q: 'Can you provide a live sushi chef at my event?',
    a: 'Yes. A sushi chef can be stationed at your venue to slice, roll, and plate in front of your guests, bringing the experience of a sushi counter to your villa, yacht, or event space. The station is built around your guest count and menu.',
  },
  {
    q: 'How fresh is the fish you use?',
    a: 'We work with trusted suppliers and select fish for freshness and quality, handling everything to sushi standards. Platters are prepared close to service and kept chilled so the sashimi and nigiri reach your guests at their best.',
  },
  {
    q: 'Do you cater sushi for yacht and outdoor events?',
    a: 'Absolutely. Chilled sushi towers, sashimi boats, and passed canapés travel well to yacht charters, beach gatherings, and poolside celebrations across Dubai. We plan presentation and timing around the conditions on the day.',
  },
  {
    q: 'Are there vegetarian or cooked options available?',
    a: 'Yes. Alongside raw sashimi and nigiri we offer vegetarian pieces such as avocado, cucumber, and inari, as well as cooked elements like tempura and teriyaki rolls, so every guest is well looked after.',
  },
  {
    q: 'How many pieces should I plan per guest?',
    a: 'It depends on whether sushi is the main offering or part of a wider spread. As a guide, we suggest a more generous count when sushi is the centrepiece and fewer pieces when it sits alongside other catering. We will advise a tailored quantity when planning.',
  },
  {
    q: 'How far in advance should I book sushi catering?',
    a: 'For smaller gatherings, one to two weeks is ideal. For larger events or a live sushi chef station, we recommend two to four weeks. During peak season from November to March, earlier booking is strongly advised.',
  },
  { q: "How much does sushi catering cost in Dubai?", a: "Sushi catering in Dubai is priced by custom quote, because the cost depends on your guest count, the fish selection, and whether you want platters, a live sushi station, or passed canapes. Premium sashimi and imported fish sit at the higher end of catering budgets, while roll-focused spreads are more accessible. Tell us your numbers and menu and we'll build a clear, itemised quote for you." },
  { q: "What is included in your sushi catering price?", a: "Our sushi catering includes menu design, sourcing and preparing the fish, on-site slicing and plating, styling of platters and stations, and full cleanup afterwards. There are no hidden extras hiding behind a low headline number, which makes it easy to compare our quote to others. See exactly [what's included in our catering](/catering-dubai) and how we work end to end." },
  { q: "Is there a minimum order for sushi catering?", a: "We cater sushi for gatherings of most sizes, from an intimate villa dinner to a large reception, and we'll advise the most sensible format for your group when we quote. Smaller bookings usually work best as platters or a sashimi centrepiece, while bigger events suit a live station or passed canapes. Share your guest count and we'll tell you the best fit." },
  { q: "Do you handle everything or just drop off the sushi?", a: "We handle everything ourselves, from sourcing and preparing the fish to slicing, plating, styling, and clearing away at the end. This is full-service catering rather than a drop-off tray, so your evening runs smoothly without you lifting a finger. Learn more about [how we work](/how-it-works) from first enquiry to the final clean-up." },
  { q: "Is your sushi prepared to Dubai food-safety standards?", a: "Yes. Our chefs and kitchens operate to Dubai Municipality food-safety standards, and raw fish for sushi and sashimi is handled and stored to the strict requirements Dubai sets for serving it. We manage the cold chain carefully so everything reaches your guests fresh and safe. Food safety is never something we cut corners on." },
  { q: "Is your sushi halal?", a: "Yes. We source halal by default, and fish is naturally permissible in Islam whether served raw or cooked, so our sashimi, nigiri, and rolls are suitable for halal guests. We prepare without alcohol-based ingredients unless you specifically request otherwise. Just let us know your requirements when we plan your menu." },
  { q: "Can you accommodate gluten-free, nut, and other allergies?", a: "Yes. We can prepare gluten-free sushi using tamari in place of regular soy, and we take nut, shellfish, and other allergies seriously with careful separation during preparation. Sashimi is naturally gluten-free, and we clearly flag which pieces suit which guests. Tell us about any dietary needs early so we can build them into the menu." },
  { q: "Can you cater sushi alongside cooked dishes and other cuisines?", a: "Absolutely. Sushi works beautifully as one part of a wider spread, and we can pair it with tempura, teriyaki, hot Asian dishes, or a completely different cuisine at the same event. Many clients use a sushi station as a showpiece next to a fuller menu. Browse our [Asian catering](/asian-catering-dubai) options to see how it all comes together." },
  { q: "Do you provide serving staff for sushi events?", a: "Serving staff are available as an optional addition, whether you want a sushi chef at a live station, waiters passing canapes, or a team to replenish and tend the display. For a plated sashimi centrepiece you may need very few hands, while a large reception benefits from a full team. We'll recommend the right staffing when we quote." },
  { q: "Which areas of Dubai do you cover for sushi catering?", a: "We cater sushi across Dubai, including Palm Jumeirah, Emirates Hills, Downtown, Dubai Marina, Dubai Hills, and the wider city, as well as villas, apartments, yachts, and event venues. Waterfront and outdoor settings are planned carefully so chilled sushi stays at its best. Wherever you're hosting, we bring the full set-up to you." },
  { q: "How do I get a quote and how quickly will you reply?", a: "Share your date, guest count, venue, and the sushi style you have in mind, and we'll come back with a tailored quote, typically within about 15 minutes during business hours. Prices are quoted per event and include our full service, with 5% VAT applied. You can [get in touch here](/contact) to start planning." },
  { q: "Can you build a live sushi station or omakase-style experience?", a: "Yes. Beyond platters, we can create a live sushi station where a chef slices and rolls in front of your guests, or a more intimate omakase-style progression for a seated dinner. It turns the food itself into part of the entertainment. Explore our [live cooking stations](/live-cooking-stations-dubai) to see the format in action." },
  { q: "Can I taste the sushi before booking a large event?", a: "For larger events and weddings, a tasting can often be arranged so you can experience the fish quality and finalise your selections before the day. It's a good way to fine-tune the menu when the stakes and guest numbers are high. Ask us about a [tasting menu](/tasting-menu-dubai) when you enquire and we'll advise what's possible." },
  { q: "Should I choose a sushi station over restaurant delivery or takeaway?", a: "A live sushi station or freshly prepared platters give you restaurant-level quality at your own venue, with fish sliced on-site rather than sitting in a delivery box. You get the freshness, presentation, and theatre of a sushi counter without leaving your event. It's the difference between catering built for the occasion and food that simply arrives." },
]

const relatedServices = [
  {
    title: 'Asian Catering',
    description: 'Pan-Asian menus spanning Japanese, Thai, and beyond for events of every size.',
    image: '/menu-appetizer.webp',
    link: '/asian-catering-dubai',
  },
  {
    title: 'Pescatarian Catering',
    description: 'Seafood-focused menus with responsibly sourced fish and plant-based accompaniments.',
    image: '/images/pescatarian-catering-dubai-hero.webp',
    link: '/pescatarian-catering-dubai',
  },
  {
    title: 'Luxury Dining',
    description: 'Bespoke fine-dining experiences with a dedicated chef in your home or villa.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
  {
    title: 'Oyster & Seafood Bar',
    description: 'Freshly shucked oysters, chilled shellfish and caviar for premium events.',
    image: '/images/sushi-catering-dubai-hero.webp',
    link: '/oyster-bar-dubai',
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
  name: 'Sushi Catering Dubai',
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
    { '@type': 'ListItem', position: 2, name: 'Sushi Catering Dubai', item: 'https://www.mychef.ae/sushi-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceSchema, faqSchema, breadcrumbSchema],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Sushi quote in Dubai. Date: __ Guests: __ Area: __"
export default function SushiCatering() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.sush-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.sush-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.sush-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.sush-fmt-card', {
      scrollTrigger: { trigger: '.sush-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.sush-uc-item', {
      scrollTrigger: { trigger: '.sush-uc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.sush-inc-item', {
      scrollTrigger: { trigger: '.sush-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.sush-gallery-img', {
      scrollTrigger: { trigger: '.sush-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.sush-faq-item', {
      scrollTrigger: { trigger: '.sush-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.sush-loc-item', {
      scrollTrigger: { trigger: '.sush-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.sush-rel-card', {
      scrollTrigger: { trigger: '.sush-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.sush-cta', {
      scrollTrigger: { trigger: '.sush-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Sushi Catering Dubai | Live Sushi Chef & Platters"
        description="Sushi catering Dubai for villas, yachts & corporate events. Sashimi & nigiri platters, signature maki, live sushi chef. Quote in ~15 mins."
        canonicalPath="/sushi-catering-dubai"
        ogImage="/menu-seafood.webp"
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/sushi-catering-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 sush-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Sushi Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 sush-hero-h1">
            Sushi Catering in Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[640px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 sush-hero-sub">
            Premium sashimi and nigiri platters, signature maki, and a live sushi chef — from villa gatherings and yacht parties to corporate receptions across Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=sushi-catering-dubai" className="btn-primary opacity-0 translate-y-4 sush-hero-cta">Request a Proposal</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 sush-hero-cta"
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
            ARTISAN SUSHI IN DUBAI
          </span>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Sushi, Crafted for the Occasion
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Few things draw a room together like a beautifully composed sushi spread. The clean lines of hand-cut sashimi, the gloss of fresh nigiri, the careful balance of a well-built maki roll — sushi is as much about presentation as it is about flavour. At myCHEF Dubai, we treat each platter as a piece of edible craft, slicing premium fish to order and arranging every element with intention so it looks as considered as it tastes.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            Whether you are hosting an intimate villa dinner, a cocktail reception, a yacht charter on the marina, or a polished corporate lunch, our chefs can build the experience around you — from a styled sashimi centrepiece to a live sushi chef rolling in front of your guests. Explore the formats below, see how sushi fits within our wider <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">luxury catering in Dubai</Link>, or browse our <Link to="/pescatarian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">pescatarian catering</Link> and <Link to="/asian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Asian catering</Link> menus.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              SUSHI FORMATS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Sushi for Every Occasion
            </h2>
          </div>

          <div className="sush-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sushiFormats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <Link
                  key={i}
                  to={fmt.link}
                  className="sush-fmt-card group bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
              WHERE SUSHI SHINES
            </span>
            <h2 className="font-playfair text-h2 text-white">
              Styled for the Moment
            </h2>
          </div>

          <div className="sush-uc-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="sush-uc-item bg-charcoal p-8 opacity-0 translate-y-10">
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
            What Our Sushi Catering Includes
          </h2>

          <div className="sush-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="sush-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            A Taste of Our Sushi Catering
          </h2>

          <div className="sush-gallery grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="sush-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Sushi Catering Questions
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

          <div className="sush-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="sush-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="sush-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="sush-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
        <div className="container-custom text-center sush-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Let's Plan Your Sushi Experience
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Tell us about your event and we'll design a sushi menu — and, if you wish, a live sushi chef — built around your guests, venue, and occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=sushi-catering-dubai" className="btn-primary">Request a Proposal</Link>
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
