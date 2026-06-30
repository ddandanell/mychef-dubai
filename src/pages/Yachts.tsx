import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { ChevronRight, Utensils, GlassWater, Flame, UtensilsCrossed, Ship, Sunrise, Check, ChevronDown, Phone, MapPin, Anchor, } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/yachts)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const yachtServices = [
  { icon: Utensils, title: 'Yacht Private Chef', desc: 'A dedicated chef on board for your voyage. Multi-course dining prepared fresh in the yacht galley with the Dubai skyline as your backdrop.', link: '/private-chef-dubai' },
  { icon: GlassWater, title: 'Cocktail Party', desc: 'Sophisticated passed canapes and appetizers for yacht cocktail receptions and sunset cruises. Elegant, effortless entertaining.', link: '/cocktail-party-catering-dubai' },
  { icon: Flame, title: 'BBQ on Deck', desc: 'Premium BBQ dining on deck. Chef-manned grilling station with premium cuts, fresh seafood, and Mediterranean-inspired sides.', link: '/bbq-catering-dubai' },
  { icon: UtensilsCrossed, title: 'Formal Yacht Dinner', desc: 'Multi-course plated dinner service on your yacht. White-glove service, stunning presentation, and an unforgettable atmosphere.', link: '/luxury-dining-experiences' },
  { icon: Ship, title: 'Yacht Event Catering', desc: 'Full-service catering for yacht parties and events. Canapes, buffet, plated options — we scale to your guest count.', link: '/events' },
  { icon: Sunrise, title: 'Sunrise & Sunset Brunch', desc: 'Elegant brunch service for morning or evening yacht cruises. Fresh, light, and beautifully presented for any time of day.', link: '/brunch-catering-dubai' },
]

const yachtRoutes = [
  'Dubai Marina',
  'Palm Jumeirah',
  'Burj Al Arab',
  'Atlantis The Palm',
  'World Islands',
  'Dubai Creek',
  'JBR',
  'Bluewaters Island',
  'Dubai Harbour',
]

const yachtFeatures = [
  { title: 'Maritime-Experienced Chefs', desc: 'Our yacht chefs are specifically trained for cooking at sea — they understand galley constraints and plan accordingly.' },
  { title: 'Compact Kitchen Expertise', desc: 'We bring portable equipment and techniques optimized for small yacht galleys. No dish is beyond our reach.' },
  { title: 'Weather-Adaptive Menus', desc: 'Hot day? Cool, refreshing dishes. Evening breeze? Warm, comforting courses. We adapt to conditions.' },
  { title: 'Dock-to-Deck Service', desc: 'We handle everything from provisioning at the marina to plating on deck. Seamless, start to finish.' },
]

const galleryImages = [
  '/service-yacht.webp',
  '/service-luxury-dining.webp',
  '/menu-seafood.webp',
  '/menu-cocktails.webp',
  '/service-events.webp',
  '/testimonial-yacht.webp',
]

const faqItems = [
  {
    q: 'Can your chef work in a yacht galley?',
    a: 'Yes. Our yacht chefs are experienced in working with yacht galleys of all sizes and configurations. They bring specialized compact equipment and plan menus that work beautifully within the unique constraints of on-board kitchens.',
  },
  {
    q: 'What yacht sizes do you cater?',
    a: 'From intimate 40-foot yachts to 200+ foot superyachts. We scale our team and service to match your vessel. Whether it is a romantic dinner for two or a celebration for fifty, we deliver the same exceptional standard.',
  },
  {
    q: 'Do you provide service staff for yachts?',
    a: 'Yes. We provide professional service staff, bartenders, and event coordination as needed for your yacht event. Every detail is handled so you can focus on enjoying your time on the water.',
  },
  {
    q: 'Can you cater at Dubai Marina?',
    a: 'Absolutely. Dubai Marina is one of our primary service areas for yacht catering. We are familiar with marina logistics, provisioning access, and all operational requirements for seamless service.',
  },
  {
    q: 'What cuisines work best on a yacht?',
    a: 'We recommend seafood-focused menus, Mediterranean cuisine, and light, fresh dishes that suit the maritime setting. Of course, every menu is fully customized to your preferences — from Japanese omakase to classic French tasting menus.',
  },
]

const relatedServices = [
  { label: 'Private Chef Dubai', href: '/private-chef-dubai' },
  { label: 'Luxury Dining Experiences', href: '/luxury-dining-experiences' },
  { label: 'Villa Private Chef', href: '/villas-private-residences' },
  { label: 'Event Catering', href: '/events' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Yachts', item: 'https://mychef.ae/yachts' },
  ],
}

export default function Yachts() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Hero

      // Service cards
      gsap.from('.yacht-service-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.yacht-services-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Yacht experience content
      gsap.from('.yacht-exp-left', {
        opacity: 0, x: -30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.yacht-experience-section', start: 'top 85%', toggleActions: 'play none none none' },
      })
      gsap.from('.yacht-exp-right', {
        opacity: 0, x: 30, duration: 0.8, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.yacht-experience-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Route tags
      gsap.from('.route-tag', {
        opacity: 0, scale: 0.9, duration: 0.5, stagger: 0.05, ease: 'power3.out',
        scrollTrigger: { trigger: '.routes-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Features
      gsap.from('.yacht-feature', {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.yacht-features-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Gallery
      gsap.from('.gallery-item', {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Testimonial
      gsap.from('.yacht-testimonial', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.yacht-testimonial', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // CTA
      gsap.from('.yachts-cta-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.yachts-cta-section', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Yacht Catering Dubai"
        description="Premium yacht catering and private chef services in Dubai. Dining on your yacht with Dubai Marina and Palm Jumeirah as your backdrop. Request a bespoke quote."
        canonicalPath="/yachts"
        ogImage="/service-yacht.webp"
        schema={breadcrumbSchema}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="YACHT CATERING"
        title="<>Yacht Catering<br />Dubai</>"
        subtitle="Exceptional dining on the water. A private chef experience with Dubai's iconic skyline as your setting."
        image="/images/yacht-catering-dubai-hero.webp"
        imageAlt="Yacht catering in Dubai"
        cta={{ label: 'Request Yacht Catering', href: WHATSAPP_LINK, external: true }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Yachts' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* Section 2: Yacht Services */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">YACHT DINING</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              Culinary Experiences on the Water
            </h2>
          </div>
          <div className="yacht-services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yachtServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="yacht-service-card group block p-8 border border-gray-200 hover:border-gold transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 transition-colors" style={{ background: 'rgba(200,164,92,0.1)' }}>
                  <service.icon size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="font-inter text-body-sm text-gray-500" style={{ lineHeight: '1.7' }}>{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Yacht Experience */}
      <section className="yacht-experience-section bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">ON BOARD</p>
            <h2 className="font-playfair text-h2 text-white" style={{ lineHeight: '1.15' }}>
              Dining with the Dubai Skyline
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="yacht-exp-left">
              <h3 className="font-playfair text-h3 text-white mb-6" style={{ lineHeight: '1.2' }}>
                Why Yacht Dining Is Special
              </h3>
              <div className="space-y-4 font-inter text-body text-gray-400" style={{ lineHeight: '1.7' }}>
                <p>There is nothing quite like dining on the water with Dubai&apos;s iconic skyline as your backdrop. Whether you are anchored off Palm Jumeirah, cruising past Burj Al Arab, or watching the sunset over Dubai Marina — a private chef elevates the experience to something truly extraordinary.</p>
                <p>Our yacht chef services are designed around the unique challenges and opportunities of cooking at sea. We plan menus that work beautifully in a yacht galley, source ingredients that travel well, and present each course with the same precision you would expect in a fine dining restaurant. For inspiration, explore our <Link to="/blog/yacht-party-menu-ideas-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">yacht party menu ideas</Link>.</p>
              </div>
            </div>
            <div className="yacht-exp-right">
              <div className="yacht-features-grid space-y-6">
                {[
                  'Experienced in yacht galleys of all sizes',
                  'Menus designed for on-board preparation',
                  'Premium seafood & ingredients sourced fresh',
                  'Complete setup & cleanup included',
                ].map((item, i) => (
                  <div key={i} className="yacht-feature flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(200,164,92,0.1)' }}>
                      <Check size={16} className="text-gold" />
                    </div>
                    <span className="font-inter text-body text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 border border-charcoal-light">
                <div className="flex items-center gap-3 mb-3">
                  <Anchor size={18} className="text-gold" />
                  <h4 className="font-playfair text-h4 text-white">Available at All Dubai Marinas</h4>
                </div>
                <p className="font-inter text-body-sm text-gray-400" style={{ lineHeight: '1.6' }}>
                  Dubai Marina, Palm Jumeirah, Dubai Harbour, Dubai Creek, and Jumeirah — we serve yachts at every marina and anchorage across the city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Routes & Locations */}
      <section className="routes-section bg-cream py-20">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              We Cater Yachts Across Dubai
            </h2>
            <p className="font-inter text-body text-gray-500 mt-4 max-w-xl mx-auto">
              From Dubai Marina to the World Islands — our yacht chefs serve every waterway in the city.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {yachtRoutes.map((route) => (
              <span
                key={route}
                className="route-tag inline-flex items-center gap-2 px-5 py-2.5 font-inter text-body-sm text-black bg-white border border-gray-200 hover:border-gold transition-all duration-300"
              >
                <MapPin size={14} className="text-gold" />
                {route}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4b: Yacht Catering Locations */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">LOCATIONS</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              Yacht Catering Locations
            </h2>
            <p className="font-inter text-body text-gray-500 mt-4 max-w-xl mx-auto">
              We board at Dubai&apos;s premier marinas and yacht destinations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {[
              { label: 'Dubai Marina', href: '/locations/dubai-marina' },
              { label: 'Palm Jumeirah', href: '/locations/palm-jumeirah' },
              { label: 'Bluewaters Island', href: '/locations/bluewaters-island' },
            ].map((loc) => (
              <Link
                key={loc.href}
                to={loc.href}
                className="group flex items-center justify-between p-6 border border-gray-200 hover:border-gold transition-all duration-300 bg-white"
              >
                <span className="font-playfair text-h4 text-black group-hover:text-gold transition-colors">{loc.label}</span>
                <ChevronRight size={18} className="text-gold" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Features */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">OUR EXPERTISE</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              Built for Yacht Dining
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yachtFeatures.map((feat) => (
              <div key={feat.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(200,164,92,0.1)' }}>
                  <Anchor size={24} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-2">{feat.title}</h3>
                <p className="font-inter text-body-sm text-gray-500" style={{ lineHeight: '1.7' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Gallery */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">GALLERY</p>
            <h2 className="font-playfair text-h2 text-white" style={{ lineHeight: '1.15' }}>
              On-Board Dining Moments
            </h2>
          </div>
          <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item relative overflow-hidden group aspect-[4/3]">
                <img src={img} alt={`Yacht dining gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Testimonial */}
      <section className="bg-charcoal py-20">
        <div className="yacht-testimonial max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gold text-4xl font-playfair mb-6">&ldquo;</div>
          <blockquote className="font-playfair text-h3 text-white mb-6" style={{ lineHeight: '1.3' }}>
            We chartered a yacht for our anniversary and had myCHEF provide the dining. Watching the sunset over the Burj Al Arab while enjoying a 7-course meal — it was the most romantic evening of our lives. The chef was incredible.
          </blockquote>
          <cite className="font-inter text-body-sm text-gray-400 not-italic">
            — Aisha &amp; Omar K., Dubai Marina
          </cite>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="bg-white section-padding">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">FAQ</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              Common Questions About Yacht Catering
            </h2>
          </div>
          <div className="space-y-0">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-playfair text-h4 text-black group-hover:text-gold transition-colors pr-4">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}
                >
                  <p className="font-inter text-body text-gray-500" style={{ lineHeight: '1.7' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Related Services */}
      <section className="bg-cream py-16">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="font-inter text-body-sm text-gray-500 mr-2">Explore related services:</span>
            {relatedServices.map((svc) => (
              <Link
                key={svc.href}
                to={svc.href}
                className="inline-flex items-center gap-1 px-4 py-2 font-inter text-body-sm text-black border border-gray-200 hover:border-gold hover:text-gold transition-all duration-300 bg-white"
              >
                {svc.label}
                <ChevronRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Related Guides ═══════════════ */}
      <section className="bg-cream py-16">
        <div className="container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Related Guides</h3>
          <p className="font-inter text-body text-gray-500 leading-relaxed">
            Planning an event in Dubai? Read our{' '}
            <Link to="/yacht-catering-guide-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Yacht Catering Guide</Link>.
          </p>
        </div>
      </section>

      {/* Section 10: CTA Banner */}
      <section className="yachts-cta-section bg-black py-24">
        <div className="yachts-cta-content container-custom text-center">
          <h2 className="font-playfair text-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>
            Set Sail with Exceptional Dining
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Your private yacht chef experience awaits. Contact us to plan your on-board culinary journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <Phone size={18} />
              Request My Custom Quote
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
