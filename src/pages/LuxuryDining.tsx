import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Cake,
  CalendarHeart,
  Compass,
  Diamond,
  Gem,
  GraduationCap,
  Handshake,
  Heart,
  Moon,
  PartyPopper,
  Phone,
  TreePine,
  Users,
  UtensilsCrossed,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import TrustSignalStrip from '../components/TrustSignalStrip'
import LocationStrip from '../components/LocationStrip'
import StarterPackagesSection from '@/sections/StarterPackagesSection'
import FaqAccordion from '../components/FaqAccordion'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { deferNonCritical } from '../lib/deferNonCritical'
import { Section, Container, SectionLabel, DisplayHeading, BodyCopy } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like a luxury private dining quote. Date: __, Guests: __, Venue: __, Occasion: __ (via mychef.ae/luxury-dining-experiences)")
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
    title: 'Tell us the evening',
    description: 'Date, guests, venue, occasion, dietary requirements and the mood you want. One conversation.',
  },
  {
    title: 'The chef writes the menu',
    description: 'Course by course, around your palate and the occasion — not a set list.',
  },
  {
    title: 'We arrive early',
    description: 'Kitchen, equipment and table are set before your guests arrive.',
  },
  {
    title: 'You host',
    description: 'Cooking, plating, service and cleanup are handled. Your space is left as we found it.',
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

const occasionTags: { label: string; link: string; icon: LucideIcon }[] = [
  { label: 'Anniversaries', link: '/anniversary-catering-dubai', icon: CalendarHeart },
  { label: 'Marriage Proposals', link: '/proposal-dinner-dubai', icon: Gem },
  { label: 'Birthday Celebrations', link: '/birthday-catering-dubai', icon: Cake },
  { label: 'Engagement Dinners', link: '/engagement-catering-dubai', icon: Diamond },
  { label: "Valentine's Day", link: '/valentines-day-catering-dubai', icon: Heart },
  { label: 'Eid Celebrations', link: '/eid-catering-dubai', icon: Moon },
  { label: 'Christmas Dinner', link: '/christmas-catering-dubai', icon: TreePine },
  { label: "New Year's Eve", link: '/new-year-catering-dubai', icon: PartyPopper },
  { label: 'Corporate Entertainment', link: '/corporate', icon: Briefcase },
  { label: 'Client Hosting', link: '/corporate', icon: Handshake },
  { label: 'Family Reunions', link: '/reunion-catering-dubai', icon: Users },
  { label: 'Graduation Celebrations', link: '/graduation-catering-dubai', icon: GraduationCap },
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

const PAGE_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like a luxury private dining quote. Date: __, Guests: __, Venue: __, Occasion: __ (via mychef.ae/luxury-dining-experiences)"
export default function LuxuryDining() {
  useScrollTrigger()
  useWhatsAppMessage(PAGE_WHATSAPP_MESSAGE)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // Defer below-the-fold ScrollTrigger animations so they do not contend
    // with LCP/INP during the initial load.
    deferNonCritical(() => {
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

      // Occasion panels (hairline grid animates as one surface)
      gsap.to('.ld-tags', {
        scrollTrigger: { trigger: '.ld-tags', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
      })

      // FAQ
      gsap.to('.ld-faq-item', {
        scrollTrigger: { trigger: '.ld-faq', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
      })

      // Related services + experiences (one merged list)
      gsap.to('.ld-rel-card', {
        scrollTrigger: { trigger: '.ld-rel-grid', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out',
      })

      // CTA
      gsap.to('.ld-cta', {
        scrollTrigger: { trigger: '.ld-cta', start: 'top 85%', toggleActions: 'play none none none' },
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Private Dining Dubai | Luxury Chef Experiences in Villas & Penthouses"
        description="Luxury private dining in Dubai with a private chef at your villa, penthouse or yacht. Bespoke tasting menus, full service, halal options. Request a custom menu."
        canonicalPath="/luxury-dining-experiences"
        ogImage="/service-luxury-dining.webp"
        preloadHero="/images/luxury-dining-experiences-dubai-hero.webp"
        schema={{ ...schema, ...breadcrumbSchema, ...faqPageSchema }}
      />

      {/* ═══════════════ Section 1: Hero ═══════════════ */}
      <PageHero
        title="Luxury Private Dining Dubai — Fine Dining at Home"
        subtitle="A private chef, a menu written for the evening and full service — in your villa, on your yacht or at your penthouse. We reply within 15 minutes during business hours."
        image="/images/luxury-dining-experiences-dubai-hero.webp"
        imageAlt="Private chef plating fine dining at a candlelit terrace table overlooking the Dubai skyline at night"
        imageWidth={1683}
        imageHeight={935}
        cta={{ label: 'Request My Private Dining Proposal', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=luxury-dining-experiences' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Luxury Dining Experiences' }]}
        minHeight="full"
        overlay="dark"
        imagePosition="center 45%"
      />

      <TrustSignalStrip variant="dark" />

      {/* ═══════════════ Section 2: Experience Types ═══════════════ */}
      <Section tone="white" rhythm="standard">
        <Container>
          <div className="max-w-[760px] mb-12 lg:mb-16">
            <SectionLabel icon={UtensilsCrossed}>Four formats</SectionLabel>
            <DisplayHeading size="h2" className="text-black mb-5">
              Private dining in Dubai comes in four formats. Start with the one that fits the evening.
            </DisplayHeading>
            <BodyCopy muted>
              Tell us about your occasion and we will bring you a vetted{' '}
              <Link to="/private-chef-dubai" className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors">private chef</Link>
              {' '}within 24 hours. From penthouses in Downtown to villas in{' '}
              <Link to="/locations/emirates-hills" className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors">Emirates Hills</Link>
              , we bring restaurant-quality dining to your door — with a bespoke menu, elegant table styling, and discreet service.
            </BodyCopy>
          </div>

          <ol className="ld-exp-grid border-t border-gray-200">
            {experiences.map((exp, i) => (
              <li key={exp.link} className="ld-exp-card border-b border-gray-200 opacity-0 translate-y-12">
                <Link
                  to={exp.link}
                  className="group grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-4 gap-y-5 py-8 md:grid-cols-[4.5rem_minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-x-10 lg:py-10"
                >
                  <span
                    className="pt-1 font-inter font-light tabular-nums leading-none text-3xl text-gold-ink/70 transition-colors group-hover:text-gold-ink md:pt-0 md:text-5xl"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative aspect-[3/2] overflow-hidden md:col-start-2 md:aspect-[16/10]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      width={640}
                      height={360}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy" decoding="async"/>
                  </div>
                  <div className="col-start-2 md:col-start-3 md:row-start-1">
                    <h3 className="font-playfair text-h3 text-black mb-3 transition-colors group-hover:text-gold-ink">{exp.title}</h3>
                    <p className="font-inter text-body text-gray-500 leading-relaxed mb-5 max-w-[52ch]">
                      {exp.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink">
                      Explore this experience <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ═══════════════ Section 3: The Experience ═══════════════ */}
      <Section tone="dark" rhythm="standard">
        <Container>
          <div className="max-w-[760px] mb-12 lg:mb-16">
            <SectionLabel tone="dark">How it works</SectionLabel>
            <DisplayHeading size="h2" className="text-white mb-5">
              Tell us about the evening. The menu is written around it.
            </DisplayHeading>
            <BodyCopy tone="dark">
              Four steps from first message to last course. You do the first one.
            </BodyCopy>
          </div>

          <ol className="ld-steps grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((step, i) => (
              <li key={step.title} className="ld-step opacity-0 translate-y-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-inter font-light tabular-nums text-4xl leading-none text-gold" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-gold/20" aria-hidden />
                  {i < processSteps.length - 1 && (
                    <ArrowRight size={16} className="hidden text-gold/50 md:block" aria-hidden />
                  )}
                </div>
                <h3 className="font-playfair text-h4 text-white mb-3">{step.title}</h3>
                <p className="font-inter text-body-sm text-gray-400 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* ═══════════════ Section 4: Gallery ═══════════════ */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <div className="max-w-[760px] mb-10 lg:mb-12">
            <SectionLabel tone="dark">Gallery</SectionLabel>
            <DisplayHeading size="h2" className="text-white">
              What the evening looks like: the plate, the table, the setting.
            </DisplayHeading>
          </div>

          <div className="ld-gallery columns-2 md:columns-3 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`ld-gallery-img overflow-hidden break-inside-avoid opacity-0 scale-95 ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy" decoding="async"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Section 5: Special Occasions ═══════════════ */}
      <Section tone="ivory" rhythm="standard">
        <Container>
          <div className="max-w-[760px] mb-10 lg:mb-12">
            <SectionLabel>Occasions</SectionLabel>
            <DisplayHeading size="h2" className="text-black mb-5">
              Name the occasion. The menu, the table and the timing follow from it.
            </DisplayHeading>
            <BodyCopy muted>Pick the closest. The detail is on the next page.</BodyCopy>
          </div>

          <ul className="ld-tags grid grid-cols-2 gap-px border border-gray-200 bg-gray-200 opacity-0 translate-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {occasionTags.map(({ label, link, icon: Icon }) => (
              <li key={label}>
                <Link
                  to={link}
                  className="group flex h-full items-center gap-3 bg-white px-4 py-4 transition-colors hover:bg-cream sm:px-5 sm:py-5"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-gold/35 text-gold-ink transition-colors group-hover:border-gold">
                    <Icon size={16} strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="font-inter text-body-sm text-black">{label}</span>
                  <ArrowUpRight size={14} className="ml-auto hidden flex-shrink-0 text-gray-300 transition-colors group-hover:text-gold-ink sm:block" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ═══════════════ Section 6: FAQ ═══════════════ */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <div className="text-center mb-10">
            <SectionLabel align="center">FAQ</SectionLabel>
            <DisplayHeading size="h2" className="text-black">
              Prices, lead times, discretion, the yacht. The questions hosts ask before they book.
            </DisplayHeading>
          </div>

          <FaqAccordion items={faqs} showJumpNav />
        </div>
      </section>

      {/* ═══════════════ Section 7: Related Services ═══════════════ */}
      <Section tone="charcoal" rhythm="standard">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel tone="dark" icon={Compass}>Next to this page</SectionLabel>
              <DisplayHeading size="h2" className="text-white mb-5">
                One evening is this page. A chef who comes back is a different product.
              </DisplayHeading>
              <BodyCopy tone="dark">
                If you want the same chef in the kitchen every week, that is the managed private chef service. If tonight is the job, these are the formats and add-ons that sit next to it.
              </BodyCopy>
            </div>

            <div className="ld-rel-grid">
              <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold mb-1">Pairs with this page</p>
              <ul className="divide-y divide-white/10 border-y border-white/10 mb-12">
                {relatedServices.map((svc) => (
                  <li key={svc.link} className="ld-rel-card opacity-0 translate-y-12">
                    <Link to={svc.link} className="group flex items-start justify-between gap-6 py-5">
                      <div>
                        <h3 className="font-playfair text-h4 text-white mb-1 transition-colors group-hover:text-gold">{svc.title}</h3>
                        <p className="font-inter text-body-sm text-gray-400 leading-relaxed max-w-[56ch]">{svc.description}</p>
                      </div>
                      <ArrowUpRight size={18} className="mt-1 flex-shrink-0 text-gold/60 transition-colors group-hover:text-gold" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold mb-1">Add to the evening</p>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {relatedExperiences.map((exp) => (
                  <li key={exp.link} className="ld-rel-card opacity-0 translate-y-12">
                    <Link to={exp.link} className="group flex items-start justify-between gap-6 py-5">
                      <div>
                        <h3 className="font-playfair text-h4 text-white mb-1 transition-colors group-hover:text-gold">{exp.title}</h3>
                        <p className="font-inter text-body-sm text-gray-400 leading-relaxed max-w-[56ch]">{exp.description}</p>
                      </div>
                      <ArrowUpRight size={18} className="mt-1 flex-shrink-0 text-gold/60 transition-colors group-hover:text-gold" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <StarterPackagesSection
        campaign="luxury-dining-experiences"
        eyebrow="PRICING"
        title="Four things build the price: guests, courses, ingredient tier and venue."
        subtitle="Indicative starting prices for private dining in Dubai. Every final quote is built from those four and the occasion, with 5% VAT stated up front."
      />

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-white py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Planning it yourself first? Three guides.</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/luxury-dinner-planning-guide-dubai" className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors">Luxury Dinner Planning Guide</Link>,
            {' '}explore <Link to="/romantic-dinner-dubai" className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors">romantic dinner Dubai</Link> experiences,
            {' '}or see indicative costs in our <Link to="/private-chef-prices-dubai" className="text-gold-ink hover:text-gold underline underline-offset-4 transition-colors">private chef prices Dubai</Link> guide.
          </p>
        </div>
      </section>

      <LocationStrip title="Private dining across Dubai" subtitle="From Downtown penthouses to Palm Jumeirah villas and Dubai Marina yachts, we bring fine dining to your chosen venue." />

      {/* ═══════════════ Section 8: CTA Banner ═══════════════ */}
      <section className="bg-gradient-to-b from-charcoal to-black py-20">
        <div className="container-custom text-center ld-cta opacity-0 translate-y-8">
          <h2 className="font-playfair text-h2 text-white mb-4">
            Four details start the quote.
          </h2>
          <p className="mb-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-inter text-caption uppercase tracking-[0.14em] text-gold" aria-label="Date, guests, venue, occasion">
            {['Date', 'Guests', 'Venue', 'Occasion'].map((item, i) => (
              <span key={item} className="inline-flex items-center gap-3">
                {i > 0 && <ArrowRight size={12} className="text-gold/50" aria-hidden />}
                {item}
              </span>
            ))}
          </p>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Send those and we reply within 15 minutes during business hours with a quote for the evening.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=luxury-dining-experiences" className="btn-primary">Request My Private Dining Proposal</Link>
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
