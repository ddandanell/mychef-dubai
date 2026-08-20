import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MessageCircle, Palette, Sparkles, Utensils, Phone, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a luxury dining quote (via mychef.ae/luxury-dining-experiences)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

/* ────────────────────── Data ────────────────────── */

const experiences = [
  {
    image: '/service-luxury-dining.webp',
    title: 'Romantic Dinner Dubai',
    description: 'An intimate evening for two. Candlelit table, bespoke multi-course menu, discreet service. Perfect for anniversaries, proposals, or simply celebrating love.',
    link: '/romantic-dinner-dubai',
  },
  {
    image: '/service-private-chef.webp',
    title: 'Fine Dining at Home',
    description: 'Restaurant-quality cuisine in the comfort of your home. A multi-course tasting menu with wine pairing, served by our chefs.',
    link: '/private-chef-dubai',
  },
  {
    image: '/service-events.webp',
    title: 'Birthday Dinner Experience',
    description: 'A memorable birthday celebration with a custom menu, elegant presentation, and attentive service. From intimate to grand.',
    link: '/birthday-catering-dubai',
  },
  {
    image: '/service-yacht.webp',
    title: 'Yacht Dining Experience',
    description: 'A private chef experience on your yacht with the Dubai skyline as your backdrop. Canapes, multi-course dinner, or BBQ.',
    link: '/yachts',
  },
]

const relatedExperiences = [
  {
    title: "Valentine's Day Catering",
    description: 'Candlelit private dining, proposal setups and romantic menus for February 14 and beyond.',
    image: '/images/valentines-day-catering-dubai-hero.webp',
    link: '/valentines-day-catering-dubai',
  },
  {
    title: 'Private Cooking Classes',
    description: 'Learn professional techniques from our chefs in a hands-on, private setting.',
    image: '/service-private-chef.webp',
    link: '/private-cooking-classes-dubai',
  },
  {
    title: 'VIP Club',
    description: 'Priority access, exclusive menus, and dedicated concierge for frequent hosts.',
    image: '/service-luxury-dining.webp',
    link: '/vip-club',
  },
  {
    title: 'Gift Cards',
    description: 'Give the gift of a bespoke dining experience with a myCHEF Dubai gift card.',
    image: '/menu-dessert.webp',
    link: '/gift-cards',
  },
]

const processSteps = [
  {
    icon: MessageCircle,
    title: 'What happens during the consultation?',
    description: 'We discuss your vision, preferences, dietary requirements, and the mood you want to create.',
  },
  {
    icon: Palette,
    title: 'How is your bespoke menu created?',
    description: 'our chefs crafts a bespoke menu that tells a story through each course.',
  },
  {
    icon: Sparkles,
    title: 'How does your chef prepare your dining space?',
    description: 'We arrive early, transform your space, and prepare everything to perfection.',
  },
  {
    icon: Utensils,
    title: 'What happens on the night of your dinner?',
    description: 'You and your guests enjoy an unforgettable evening. We handle every detail.',
  },
]

const galleryImages = [
  { src: '/service-luxury-dining.webp', alt: 'Luxury dining experience', className: 'aspect-[4/3]' },
  { src: '/menu-appetizer.webp', alt: 'Fine dining appetizer', className: 'aspect-[3/4]' },
  { src: '/menu-dessert.webp', alt: 'Elegant dessert', className: 'aspect-[1/1]' },
  { src: '/service-villa.webp', alt: 'Villa dining setup', className: 'aspect-[4/3]' },
  { src: '/menu-seafood.webp', alt: 'Premium seafood dish', className: 'aspect-[3/4]' },
  { src: '/testimonial-villa.webp', alt: 'Happy guests at dinner', className: 'aspect-[4/3]' },
]

const occasionTags = [
  'Anniversaries',
  'Marriage Proposals',
  'Birthday Celebrations',
  'Engagement Dinners',
  "Valentine's Day",
  'Eid Celebrations',
  'Christmas Dinner',
  "New Year's Eve",
  'Corporate Entertainment',
  'Client Hosting',
  'Family Reunions',
  'Graduation Celebrations',
]

const faqs = [
  {
    q: 'Can you set up a romantic dinner on my terrace?',
    a: 'Absolutely. We create stunning terrace dining setups with candles, flowers, and elegant table settings \u2014 all customized to your space and preferences.',
  },
  {
    q: 'Do you provide table decoration?',
    a: 'Yes. We offer full table styling including linens, glassware, candles, and floral arrangements. Let us know your aesthetic and we will design accordingly.',
  },
  {
    q: 'Can you accommodate surprise proposals?',
    a: 'Yes \u2014 we love being part of surprise proposals. We coordinate discreetly to ensure the moment is perfect.',
  },
  {
    q: 'What is the minimum number of guests?',
    a: 'Our luxury dining experiences start from 2 guests. There is no upper limit.',
  },
  {
    q: 'Can I request a specific cuisine?',
    a: 'Of course. Every menu is fully bespoke. Share your preferences and our chefs will design the perfect menu.',
  },
  { q: "How much does a luxury private dining experience in Dubai cost?", a: "Luxury private dining in Dubai is quoted per experience rather than sold at a fixed price, because the cost depends on your guest count, chosen courses, ingredient tier, and venue. As a guide, refined multi-course dinners typically start around AED 600 to 1,200 per guest before beverages, with signature tasting menus and premium produce sitting higher. Share your occasion and we return a transparent custom quote — inclusive of 5% VAT — usually within 15 minutes during business hours; see our [private chef prices Dubai](/private-chef-prices-dubai) guide for indicative ranges." },
  { q: "What is included in a luxury dining experience, and are there hidden costs?", a: "Everything is included in one transparent quote: bespoke menu design, premium ingredients, all cooking, professional plating and service, and full cleanup so your space is left immaculate. There are no hidden charges — VAT at 5% is stated up front, and any optional extras such as additional courses, extra service staff, or specialist beverages are agreed before you confirm. You host effortlessly while our professional chefs handles every detail from arrival to the final course." },
  { q: "How far in advance should I book, and how quickly will you respond?", a: "We recommend booking a luxury dinner five to seven days ahead so your chef can source the finest ingredients and refine the menu, though shorter lead times can often be accommodated for smaller parties. Peak dates — New Year's Eve, Valentine's Day, and the November to April season — fill quickly, so earlier is better. Send your details and we reply within 15 minutes during business hours to confirm availability; you can review the full process in [how it works](/how-it-works)." },
  { q: "What actually makes a private dining experience luxury rather than standard catering?", a: "Luxury private dining is defined by bespoke menu creation, restaurant-grade technique, premium and rare ingredients, and choreographed service delivered by an experienced chef and dedicated team — not by simply plating pre-made food. Each course is designed around your palate, the occasion, and the mood you want to create, then executed with fine-dining presentation in your own home, villa, or venue. The result feels closer to a private Michelin-style tasting than conventional event catering." },
  { q: "Can you guarantee complete discretion for VIP and high-profile guests?", a: "Yes — discretion is standard for our VIP and high-profile clients, and confidentiality can be formalised on request. Our chefs and service staff are vetted professionals experienced with private residences, public figures, and sensitive events, arriving unbranded and working seamlessly in the background. Whether you are hosting dignitaries, executives, or a private celebration, your event, guest list, and menu remain entirely confidential." },
  { q: "Can we arrange a tasting before a major event?", a: "Yes, private tastings can be arranged ahead of significant events such as weddings, milestone anniversaries, or corporate hosting so you can refine each course before the day. This gives you the confidence that flavours, presentation, and pairings are exactly right for your guests. Tastings are quoted separately and best requested early; for smaller intimate dinners, a detailed menu consultation usually replaces the need for one, and you can explore formats on our [tasting menu Dubai](/tasting-menu-dubai) page." },
  { q: "Can you host a luxury dinner on a yacht in Dubai?", a: "Yes — we bring a private chef directly onboard your yacht, preparing canapés, a multi-course dinner, or a premium BBQ while cruising past the Dubai skyline. Menus are designed for the galley and sea conditions, and everything from provisioning to serving and cleanup is handled so you simply enjoy the water. Share your charter details and guest count, and we tailor a menu and timeline to your itinerary via our [yacht dining](/yachts) service." },
  { q: "Do you offer private dining in the desert?", a: "Yes, we create bespoke desert dining experiences that pair Dubai's dunes at golden hour with a fully catered private chef menu and elegant setting. From intimate proposal dinners to celebratory gatherings, we coordinate the location, styling, service staff, and a menu suited to an outdoor setting. Because desert setups require additional logistics, we recommend booking with extra lead time — explore the format on our [desert dining](/desert-dining-dubai) page." },
  { q: "Where can the experience take place — villa, penthouse, or private residence?", a: "Luxury private dining can be hosted almost anywhere in Dubai: your villa, penthouse, private residence, rooftop terrace, or a venue of your choosing. Our chefs are experienced working in high-end residential kitchens across communities from Palm Jumeirah and Emirates Hills to Downtown, bringing all necessary equipment. Tell us your location and we confirm the setup and design the evening around your space." },
  { q: "How many courses are included and how long does the evening last?", a: "Most luxury dinners run from four to seven or more courses, with the evening typically lasting around three to four hours from the first course to coffee. The exact number of courses is tailored to your occasion — an intimate romantic dinner may be a curated tasting sequence, while a celebration might extend with additional plates and desserts. Your chef paces service to the mood of the night, so nothing feels rushed." },
  { q: "Are your menus halal, and can you handle allergies or specific diets?", a: "Yes — our menus are halal by default and prepared to Dubai Municipality food-safety standards, and we readily accommodate allergies, intolerances, and dietary preferences such as vegetarian, vegan, keto, pescatarian, and gluten-free. Share every requirement when you enquire and your chef designs each course around it without compromising on refinement. Guests with different needs at the same table can each be catered for individually." },
  { q: "Can you arrange wine pairings and beverage service, and how does alcohol licensing work?", a: "Yes, we can design beverage and wine pairings to complement your tasting menu, matching each course thoughtfully for a complete fine-dining experience. Because alcohol supply in Dubai is regulated, arrangements are handled compliantly — typically through your own licensed provision or an approved supplier — while our team manages elegant service on the night. Non-alcoholic pairings, signature mocktails, and premium soft beverages are equally available for a fully alcohol-free evening." },
  { q: "Who serves the meal, and can you provide waiters and additional staff?", a: "Your experience is delivered by a professional chef and, where the occasion calls for it, a dedicated team of servers so you and your guests are attentively looked after throughout. For larger gatherings or formal multi-course dinners we scale the service team accordingly, ensuring seamless plating and hosting. All staff arrive prepared, work discreetly, and leave your space spotless once the evening concludes." },
  { q: "Can you help plan a proposal or anniversary dinner down to the details?", a: "Absolutely — proposal and anniversary dinners are among our most requested experiences, and we coordinate every detail from menu and styling to timing and discreet surprise moments. We work closely with you in advance to choreograph the evening so it unfolds exactly as you imagine, whether that is a candlelit terrace, a yacht, or a private villa. Tell us your vision and we build the entire evening around the moment that matters." },
  { q: "Can a luxury dining experience be booked as a corporate or client-hosting event?", a: "Yes — bespoke private dining is an elegant way to host clients, reward executives, or entertain partners in a refined, private setting away from busy restaurants. We design menus and service to reflect your standards and can incorporate branding, seating, and pacing suited to business hosting. From intimate boardroom dinners to larger entertainment evenings, we tailor the experience to the impression you want to make." },
  { q: "Do you offer luxury dining as a gift for someone else?", a: "Yes, a bespoke luxury dining experience makes a memorable gift for birthdays, anniversaries, weddings, or corporate recognition, and can be arranged so the recipient chooses their own menu and date. We handle the planning discreetly so the experience feels effortless and personal for whoever you are gifting it to. Get in touch and we will help you structure the perfect gifted evening." },
]

const relatedServices = [
  {
    title: 'Private Chef',
    description: 'Your own personal chef for an evening of bespoke cuisine in your home.',
    image: '/service-private-chef.webp',
    link: '/private-chef-dubai',
  },
  {
    title: 'Halal Private Dining',
    description: 'Bespoke fully halal private dinners at home or in your venue, served by a dedicated chef team.',
    image: '/images/halal-private-dining-dubai-hero.webp',
    link: '/halal-private-dining-dubai',
  },
  {
    title: 'Tasting Menu Dubai',
    description: 'Multi-course chef’s table experiences designed for intimate dinners and special occasions.',
    image: '/images/tasting-menu-dubai-hero.webp',
    link: '/tasting-menu-dubai',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Luxury Dining Experiences Dubai',
  provider: {
    '@type': 'Organization',
    name: 'myCHEF Dubai',
    url: 'https://www.mychef.ae',
    telephone: '+971-55-174-4849',
    areaServed: 'Dubai, UAE',
  },
  serviceType: 'Luxury Private Dining',
  areaServed: 'Dubai, UAE',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dining Experiences',
    itemListElement: experiences.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae' },
    { '@type': 'ListItem', position: 2, name: 'Luxury Dining Experiences', item: 'https://www.mychef.ae/luxury-dining-experiences' },
  ],
}

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

/* ────────────────────── Component ────────────────────── */

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'm interested in a luxury dining experience in Dubai. Date: __ Guests: __ Area: __"
export default function LuxuryDining() {
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Hero

    // Experience cards
    gsap.to('.ld-exp-card', {
      scrollTrigger: { trigger: '.ld-exp-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
    })

    // Process steps
    gsap.to('.ld-step', {
      scrollTrigger: { trigger: '.ld-steps', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
    })

    // Gallery
    gsap.to('.ld-gallery-img', {
      scrollTrigger: { trigger: '.ld-gallery', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: 'power3.out',
    })

    // Occasion tags
    gsap.to('.ld-tag', {
      scrollTrigger: { trigger: '.ld-tags', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: 'power3.out',
    })

    // FAQ
    gsap.to('.ld-faq-item', {
      scrollTrigger: { trigger: '.ld-faq', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
    })

    // Related
    gsap.to('.ld-rel-card', {
      scrollTrigger: { trigger: '.ld-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // Related Experiences
    gsap.to('.ld-rel-exp-card', {
      scrollTrigger: { trigger: '.ld-rel-exp-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    })

    // CTA
    gsap.to('.ld-cta', {
      scrollTrigger: { trigger: '.ld-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Dining Dubai | Luxury Chef Experiences in Villas & Penthouses"
        description="Luxury private dining in Dubai with a private chef at your villa, penthouse or yacht. Bespoke tasting menus, full service, halal options. Request a custom menu."
        canonicalPath="/luxury-dining-experiences"
        ogImage="/service-luxury-dining.webp"
        schema={{ ...schema, ...breadcrumbSchema, ...faqPageSchema }}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero
        title="Luxury Private Dining Dubai — Fine Dining at Home"
        subtitle="Bespoke private dining crafted for life's most memorable moments. In your villa, on your yacht, or at your penthouse — we reply within 15 minutes during business hours."
        image="/images/luxury-dining-dubai-hero.webp"
        imageAlt="Luxury private dining in Dubai"
        cta={{ label: 'Request a Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=luxury-dining-experiences' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Luxury Dining Experiences' }]}
        minHeight="tall"
        overlay="dark"
      />

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Section 2: Experience Types ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              LUXURY DINING OPTIONS
            </span>
            <h2 className="font-playfair text-h2 text-black">
              What luxury dining experiences can you book in Dubai?
            </h2>
            <p className="font-inter text-body text-gray-500 leading-relaxed max-w-[700px] mx-auto mt-4">
              Tell us about your occasion and we will bring you a vetted{' '}
              <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef</Link>
              {' '}within 24 hours. From penthouses in Downtown to villas in{' '}
              <Link to="/locations/emirates-hills" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Emirates Hills</Link>
              , we bring restaurant-quality dining to your door — with a bespoke menu, elegant table styling, and discreet service.
            </p>
          </div>

          <div className="ld-exp-grid grid md:grid-cols-2 gap-8">
            {experiences.map((exp, i) => (
              <Link
                key={i}
                to={exp.link}
                className="ld-exp-card group bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-h3 text-black mb-3">{exp.title}</h3>
                  <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore This Experience <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 3: The Experience ═══════════════ */}
      <section className="bg-black section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              HOW IT WORKS
            </span>
            <h2 className="font-playfair text-h2 text-white">
              How does booking a luxury dining experience in Dubai work?
            </h2>
          </div>

          <div className="ld-steps relative">
            {/* Vertical dotted line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-gold/30 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((step, i) => {
                const Icon = step.icon
                const isEven = i % 2 === 0
                return (
                  <div
                    key={i}
                    className={`ld-step relative flex flex-col md:flex-row items-center gap-6 md:gap-12 opacity-0 translate-y-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content side */}
                    <div className={`flex-1 text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="font-playfair text-h3 text-white mb-2">{step.title}</h3>
                      <p className="font-inter text-body text-gray-400 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Icon circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-gold" />
                    </div>

                    {/* Spacer side */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 4: Gallery ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <h2 className="font-playfair text-fluid-h2 text-white text-center mb-10">
            What do our luxury dining experiences look like?
          </h2>

          <div className="ld-gallery columns-2 md:columns-3 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`ld-gallery-img overflow-hidden break-inside-avoid opacity-0 scale-95 ${img.className}`}
              >
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

      {/* ═══════════════ Section 5: Special Occasions ═══════════════ */}
      <section className="bg-cream py-20">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            What occasions can you celebrate with luxury dining in Dubai?
          </h2>

          <div className="ld-tags flex flex-wrap justify-center gap-3">
            {occasionTags.map((tag, i) => (
              <span
                key={i}
                className="ld-tag bg-white border border-gray-200 px-5 py-2.5 font-inter text-sm text-black opacity-0 scale-90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 6: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-10">
            What are the most common questions about luxury dining in Dubai?
          </h2>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 7: Related Services ═══════════════ */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-h3 text-white">
              Which myCHEF services pair with luxury dining?
            </h3>
          </div>

          <div className="ld-rel-grid grid md:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <Link
                key={i}
                to={svc.link}
                className="ld-rel-card group bg-charcoal overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] opacity-0 translate-y-12"
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

      {/* ═══════════════ Related Experiences ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-h3 text-black">
              What other experiences can you add?
            </h3>
          </div>

          <div className="ld-rel-exp-grid grid md:grid-cols-3 gap-6">
            {relatedExperiences.map((exp, i) => (
              <Link
                key={i}
                to={exp.link}
                className="ld-rel-exp-card group bg-cream overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 translate-y-12"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy" decoding="async"/>
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-h4 text-black mb-2">{exp.title}</h4>
                  <p className="font-inter text-body-sm text-gray-500 mb-4">{exp.description}</p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StarterPackagesSection
        campaign="luxury-dining-experiences"
        eyebrow="LUXURY DINING PRICING"
        title="How much does luxury private dining cost in Dubai?"
        subtitle="Indicative starting prices for bespoke luxury dining experiences in Dubai. Every final quote is tailored to your guest count, menu, and occasion."
      />

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Which guides help plan a luxury dinner in Dubai?</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/luxury-dinner-planning-guide-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Luxury Dinner Planning Guide</Link>,
            {' '}explore <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">romantic dinner Dubai</Link> experiences,
            {' '}or see indicative costs in our <Link to="/private-chef-prices-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">private chef prices Dubai</Link> guide.
          </p>
        </div>
      </section>

      {/* ═══════════════ Section 8: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ld-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Ready to book your luxury dining experience in Dubai?
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Your bespoke dining experience begins with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=luxury-dining-experiences" className="btn-primary">Request a Proposal</Link>
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
