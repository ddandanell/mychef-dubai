import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { locationPath } from '@/data/locations'
import { isParked } from '@/content/parkedUrls'
import {
  Heart,
  ChefHat,
  UtensilsCrossed,
  Cake,
  Wine,
  Home,
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


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to plan an anniversary dinner (via mychef.ae/anniversary-catering-dubai)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const formats = [
  {
    icon: Heart,
    title: 'Dinner for two',
    description:
      'Two covers marking a year belong on a romantic dinner page. That is a different brief from a house night with friends.',
  },
  {
    icon: ChefHat,
    title: 'Chef at the table',
    description:
      'A partner chef cooking in your kitchen when everyone sits at one table and dinner is the event.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Courses at the table',
    description:
      'A paced menu from canapé to dessert when the guest list fits one sitting.',
  },
  {
    icon: Cake,
    title: 'Dessert',
    description:
      'A cake or sweet course quoted when you want us to supply it, or we plate a cake you bring.',
  },
  {
    icon: Wine,
    title: 'Drinks and a toast',
    description:
      'Pairings, cocktails or alcohol-free options. Alcohol at a private residence is sourced by the host.',
  },
  {
    icon: Home,
    title: 'Villa and home settings',
    description:
      'We set the table, serve and clear at the address you give us. We do not own the house.',
  },
]

const useCases = [
  {
    title: 'Dinner for two at home',
    description:
      'Two people, one table. That brief sits on romantic dinner, not this house-night page.',
  },
  {
    title: 'Anniversary with friends at the table',
    description:
      'A mixed guest list, a toast, a kitchen that may not plate everyone at once. That is private party catering.',
  },
  {
    title: 'Villa sittings',
    description:
      'Courses at a villa table you control. Access, the kitchen and how many sit decide the crew.',
  },
  {
    title: 'Surprise dinners',
    description:
      'Arrival timed so the table is set before they walk in. Who lets the team in belongs in the brief.',
  },
]

const includedItems = [
  { title: 'Menu written for the table', description: 'Courses, dietary notes and who is eating, approved before the date.' },
  { title: 'Ingredients', description: 'Sourced for this sitting. Named in the quote, not marked up as a mystery line.' },
  { title: 'Chef', description: 'A licensed culinary partner matched to the night. No chef is guaranteed by name.' },
  { title: 'Service', description: 'Courses paced to the table. Staff sized to the format.' },
  { title: 'Tableware', description: 'Linen and serving kit brought in and taken out.' },
  { title: 'Dessert', description: 'Quoted when you want us to supply it.' },
  { title: 'Setup and cleanup', description: 'We cook in your kitchen and leave it as we found it.' },
  { title: 'Drinks', description: 'Pairings or alcohol-free options. Alcohol at a private residence is sourced by the host.' },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Romantic anniversary dinner catering in Dubai' },
  { src: '/service-private-chef.webp', alt: 'Private chef preparing an anniversary dinner at home' },
  { src: '/menu-dessert.webp', alt: 'Celebration dessert for an anniversary dinner' },
  { src: '/service-villa.webp', alt: 'Intimate villa anniversary celebration in Dubai' },
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
  { name: 'Meydan', slug: 'meydan' },
]

// Only areas whose page is live: an area whose page is parked is still served, it just
// does not get a link to a page Google has been asked to forget.
const liveLocations = locations.filter((l) => !isParked(locationPath(l.slug)))


const faqs = [
  {
    q: 'How does a private anniversary dinner at home work?',
    a: 'A dedicated chef arrives at your home or villa with everything needed, prepares your menu course by course in your kitchen, and serves each one with discreet attention. After the meal, the team clears and cleans up, leaving you to enjoy the evening without lifting a finger.',
  },
  {
    q: 'Can you create a romantic dinner for just two people?',
    a: 'Yes. An intimate dinner for two is one of our most requested anniversary experiences. We design a multi-course menu around your tastes, set a romantic table, and serve the evening privately in your own space.',
  },
  {
    q: 'Do you offer multi-course tasting menus?',
    a: 'We do. Our anniversary menus often take the form of a multi-course tasting menu, paced from canape to dessert with thoughtful drink pairings, so the evening flows gracefully and feels truly special.',
  },
  {
    q: 'Can you accommodate dietary requirements and favourite dishes?',
    a: 'Absolutely. We build every anniversary menu around you, including dietary needs, preferences, and even a meaningful dish you would like recreated. Just let us know when we design the menu together.',
  },
  {
    q: 'Can you cater a larger milestone anniversary celebration?',
    a: 'Yes. Alongside intimate dinners for two, we coordinate catering for larger milestone anniversaries for family and close friends, with a seated menu, attentive service, and a celebration dessert scaled to your guest count.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'For an intimate private-chef dinner we recommend booking one to two weeks ahead, and earlier for larger celebrations or peak season dates between November and March. Reach out as soon as you have a date to secure your preferred service.',
  },
  { q: "How much does anniversary dinner catering in Dubai cost?", a: "Anniversary dinner catering in Dubai is priced by custom quote, because the cost depends on your guest count, the number of courses, and the ingredients you choose. An intimate private-chef dinner for two carries a higher per-head figure than a larger gathering, since the chef and service are shared across fewer people, while everything is quoted transparently upfront with 5% VAT applied. Share your date and tastes and we typically acknowledge enquiries within 15 minutes during business hours, with a tailored proposal to follow after reviewing the details." },
  { q: "What is included in the price, and are there any hidden fees?", a: "Every anniversary booking includes menu design, ingredient sourcing and shopping, on-site cooking, plating and course-by-course service, and full cleanup afterwards, so there are no surprise add-ons. Serving staff are optional and quoted separately if you want them, and 5% VAT is shown clearly on your quote. You can see exactly [how it works](/how-it-works) before you commit to anything." },
  { q: "Is your food halal and prepared to Dubai food-safety standards?", a: "Yes. We source halal ingredients by default and our chefs and kitchens operate to Dubai Municipality food-safety standards, so your anniversary dinner is both compliant and safe. If you have specific requirements around sourcing or preparation, just tell us when we design your menu and we will confirm everything in advance." },
  { q: "When is a chef at home a better brief than a restaurant for an anniversary?", a: "When you want the clock, the guest list and the kitchen to stay yours. We cook in your kitchen, plate, and clear down. Two covers belong on [romantic dinner](/romantic-dinner-dubai). Friends at the table belong on [private party catering](/private-party-catering-dubai). Compare a household visit on [private chef in Dubai](/private-chef-dubai)." },
  { q: "Can you plan a surprise anniversary dinner for my partner?", a: "Absolutely. Surprise anniversary dinners are one of our most-loved requests, and we plan every detail in advance so the evening is delivered seamlessly while you focus on the moment. We coordinate the arrival timing, menu, and table styling quietly with you, so all your partner sees is a beautifully set table and a chef ready to cook." },
  { q: "How many guests can you cater for an anniversary celebration?", a: "There is no strict minimum, so we cater everything from an intimate dinner for two to a larger milestone gathering for family and close friends. For bigger celebrations we scale the menu, service, and celebration dessert to your guest count, and can add optional serving staff to keep everything flowing smoothly." },
  { q: "Do you bring everything, or do we need to provide anything?", a: "We bring the ingredients and cook in your own kitchen, needing only a standard setup with an oven, hob, and worktop space to work from. If your menu calls for any special tableware, glassware, or equipment, we will confirm the details with you in advance so nothing is left to chance on the night. You simply relax while we handle setup, service, and cleanup." },
  { q: "Can you set a romantic table with candles, flowers, and styling?", a: "Yes. Elegant table setting and styling with linens, tableware, and a considered romantic scene is part of our anniversary service, and we can layer in candles, florals, and personal touches on request. Tell us the mood you want and we will design the setting to match, from soft and intimate to a grander milestone celebration." },
  { q: "Can you accommodate allergies and specific dietary needs safely?", a: "Yes. We build every anniversary menu around your dietary requirements, whether that is vegetarian, vegan, gluten-free, dairy-free, nut allergies, or other restrictions, and we handle preparation carefully to keep it safe. Just share the details when we design the menu together and we will plan each course accordingly. See our [allergy-safe catering](/allergy-safe-catering-dubai) approach for more." },
  { q: "Do you provide wine pairings, cocktails, or alcohol-free options?", a: "We offer thoughtful drink pairings and toast-ready service to complement each course, including cocktails or refined alcohol-free and mocktail options to suit your evening. We tailor the pairings to your menu and preferences, so the drinks feel as considered as the food across the celebration." },
  { q: "Which areas of Dubai do you cover for anniversary dinners?", a: "We bring full-service anniversary dining to homes, villas, and apartments right across Dubai, including Palm Jumeirah, Downtown, Dubai Marina, Emirates Hills, JBR, Business Bay, Arabian Ranches, and beyond. Wherever your celebration is, we arrive early, cook on-site, serve throughout, and leave your space spotless." },
  { q: "Can you recreate a meaningful dish or the meal from our wedding?", a: "Yes, and it is one of the most special touches we offer. If there is a dish tied to a memory, a favourite cuisine, or the meal you shared on a milestone occasion, tell us and our chefs will recreate it as part of your anniversary menu. We design the whole evening around what matters most to you." },
  { q: "What happens after the meal, and how much cleanup do we handle?", a: "None. Full cleanup is included in every anniversary booking, so after the final course our team clears the table, cleans the kitchen and any spaces we used, and leaves everything spotless. You get to stay in the moment and enjoy the rest of the evening together without lifting a finger." },
  { q: "How do we book, and what if we have questions first?", a: "Booking starts with a quick message sharing your date, guest count, and tastes, and we typically acknowledge enquiries within 15 minutes during business hours and prepare the proposal once the brief is clear. There is no obligation to explore your options, and you can reach our team any time through our [contact page](/contact) to talk through ideas before you decide. Peak season runs November to March, so earlier dates fill quickly." },
]

const relatedServices = [
  {
    title: 'Catering Dubai',
    description: 'Format catalogue: drop-off through full service.',
    image: '/service-catering.webp',
    link: '/catering-dubai',
  },
  {
    title: 'Private Chef',
    description: 'A household chef visit when dinner is one table and a workable kitchen.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Luxury Dining',
    description: 'A tasting menu sitting, if that is the product rather than a house night.',
    image: '/service-luxury-dining.webp',
    link: '/luxury-dining-experiences',
  },
]

const serviceObj = {
  '@type': 'Service',
  name: 'Anniversary Dinner Catering Dubai',
  serviceType: 'Anniversary Dinner Catering',
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

const faqObj = {
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbObj = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Anniversary Dinner Catering Dubai', item: 'https://www.mychef.ae/anniversary-catering-dubai' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [serviceObj, faqObj, breadcrumbObj],
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a Anniversary quote in Dubai. Date: __ Guests: __ Area: __"
export default function AnniversaryCatering() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.an-hero-h1', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to('.an-hero-sub', { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power3.out' })
    gsap.to('.an-hero-cta', { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, delay: 0.6, ease: 'power3.out' })

    gsap.to('.an-fmt-card', {
      scrollTrigger: { trigger: '.an-fmt-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.an-use-item', {
      scrollTrigger: { trigger: '.an-use-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.an-inc-item', {
      scrollTrigger: { trigger: '.an-inc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.an-gallery-img', {
      scrollTrigger: { trigger: '.an-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    gsap.to('.an-faq-item', {
      scrollTrigger: { trigger: '.an-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    gsap.to('.an-loc-item', {
      scrollTrigger: { trigger: '.an-loc-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, duration: 0.5, stagger: 0.04, ease: 'power3.out',
    })

    gsap.to('.an-rel-card', {
      scrollTrigger: { trigger: '.an-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.an-cta', {
      scrollTrigger: { trigger: '.an-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Anniversary Catering Dubai | myCHEF"
        description="Anniversary catering Dubai: two covers belong on a romantic dinner; friends at the table is a house night. Cooked at your address. Itemised quote."
        canonicalPath="/private-party-catering-dubai"
        ogImage="/service-luxury-dining.webp"
        hideSiteName
        schema={schema}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <section className="relative min-h-[85dvh] md:min-h-[85dvh] md:min-h-[100dvh] flex items-center justify-center bg-black overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: 'url(/images/romantic-dinner-dubai-hero.webp)' }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container-custom text-center max-w-[800px] py-20">
          <nav className="mb-6 opacity-0 translate-y-4 an-hero-h1">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">Anniversary Dinner Catering Dubai</span></li>
            </ol>
          </nav>

          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6 opacity-0 translate-y-10 an-hero-h1">
            Anniversary Catering Dubai
          </h1>
          <p className="font-inter text-lg text-white/90 max-w-[600px] mx-auto mb-8 leading-relaxed opacity-0 translate-y-5 an-hero-sub">
            Anniversary catering Dubai for a house night with friends, or a pointer to dinner for two. We cook at your address. We do not own the table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary opacity-0 translate-y-4 an-hero-cta">Plan My Anniversary</Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary opacity-0 translate-y-4 an-hero-cta"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TrustSignalStrip />

      {/* ═══════════════ Section 2: Intro ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[820px] text-center">
          <SectionLabel align="center">CELEBRATE THE YEARS</SectionLabel>
          <h2 className="font-playfair text-h2 text-black mb-6">
            Anniversary catering Dubai: two covers, or friends at the table
          </h2>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
            Anniversary catering Dubai is either dinner for two or a house night with friends. Two covers marking a year sit on{' '}
            <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">romantic dinner Dubai</Link>
            . Friends at the table, a toast, a kitchen that may not plate everyone at once: that is this sitting, and it redirects into private party catering.
          </p>
          <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
            A staffed buffet starts from AED 120 per person. Chef-led plated dining is AED 700–950. The date-night package for two is AED 1,200. All before 5% VAT. A proposal dinner is a different brief on{' '}
            <Link to="/proposal-dinner-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">proposal dinner Dubai</Link>
            . A tasting as the product sits on{' '}
            <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">luxury dining experiences</Link>
            . Send the date through{' '}
            <Link to="/inquiry" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">inquiry</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 3: Formats ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center" tone="dark">WHAT WE CREATE</SectionLabel>
            <h2 className="font-playfair text-h2 text-white">
              How the sitting is served
            </h2>
          </div>

          <div className="an-fmt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, i) => {
              const Icon = fmt.icon
              return (
                <div
                  key={i}
                  className="an-fmt-card bg-charcoal p-8 opacity-0 translate-y-12"
                >
                  <Icon size={36} className="text-gold mb-4" />
                  <h3 className="font-playfair text-h3 text-white mb-3">{fmt.title}</h3>
                  <p className="font-inter text-body-sm text-gray-400 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Use Cases ═══════════════ */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionLabel align="center">WAYS TO CELEBRATE</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Two covers, or a house night
            </h2>
          </div>

          <div className="an-use-grid grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div key={i} className="an-use-item bg-white p-8 border border-gray-200 opacity-0 translate-y-10">
                <h3 className="font-playfair text-h3 text-black mb-3">{uc.title}</h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
          <p className="font-inter text-body-sm text-gray-500 text-center max-w-[680px] mx-auto mt-10 leading-relaxed">
            For a grander evening, explore our{' '}
            <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">luxury dining experiences</Link>, or browse our full range of{' '}
            <Link to="/catering-dubai" className="text-gold hover:text-gold-dark transition-colors underline underline-offset-2">catering in Dubai</Link>.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 5: What's Included ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-h2 text-black text-center mb-12">
            What a staffed anniversary sitting includes
          </h2>

          <div className="an-inc-grid grid md:grid-cols-2 gap-6">
            {includedItems.map((item, i) => (
              <div key={i} className="an-inc-item flex gap-3 opacity-0 -translate-x-5">
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
            How anniversary catering looks in Dubai
          </h2>

          <div className="an-gallery grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="an-gallery-img aspect-[4/3] overflow-hidden opacity-0 scale-95">
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
            Questions before you book
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

          <div className="an-loc-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {liveLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={locationPath(loc.slug)}
                className="an-loc-item flex items-center gap-2 font-inter text-sm text-gray-400 hover:text-gold transition-colors opacity-0"
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

          <div className="an-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="an-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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
          <p className="font-inter text-body-sm text-gray-400 text-center mt-10">
            An unnamed house night sits on{' '}
            <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">private party catering</Link>.
          </p>
        </div>
      </section>

      <LocationStrip title="Anniversary private dining across Dubai" />

      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center an-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Plan Your Anniversary Dinner
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Share the date, guest count and whether it is two covers or friends at the table. We send an itemised quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Plan My Anniversary</Link>
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
