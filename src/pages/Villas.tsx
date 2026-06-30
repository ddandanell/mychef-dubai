import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { ChevronRight, Utensils, Calendar, Home, PartyPopper, Baby, Leaf, ShoppingBag, Users, Sparkles, Clock, Shield, ChevronDown, Phone, MapPin, } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/villas-private-residences)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const villaServices = [
  { icon: Utensils, title: 'Daily Private Chef', desc: 'A dedicated chef for your daily meals. Fresh, restaurant-quality dining prepared right in your villa kitchen, every day of your stay.', link: '/private-chef-dubai' },
  { icon: Calendar, title: 'Weekly Meal Prep', desc: 'Comprehensive weekly meal planning and preparation. Nutritious, delicious meals ready when you are — perfect for busy families.', link: '/corporate-meal-prep-dubai' },
  { icon: Home, title: 'Special Occasion Dinner', desc: 'An unforgettable multi-course dinner for birthdays, anniversaries, or any special celebration in the comfort of your villa.', link: '/luxury-dining-experiences' },
  { icon: PartyPopper, title: 'Family Style Dining', desc: 'Beautifully presented family-style meals that bring everyone together. Perfect for family gatherings and multi-generational stays.', link: '/catering-dubai' },
  { icon: Baby, title: 'Poolside BBQ', desc: 'Premium BBQ dining by your villa pool. Chef-manned grilling station with premium cuts, seafood, and all the trimmings.', link: '/bbq-catering-dubai' },
  { icon: Leaf, title: 'Breakfast & Brunch', desc: 'Elegant breakfast and brunch service at your villa. Fresh pastries, eggs any style, smoothie bowls, and champagne upon request.', link: '/brunch-catering-dubai' },
]

const villaLocationsWeServe = [
  { image: '/loc-emirates-hills.webp', name: 'Emirates Hills', link: '/locations/emirates-hills' },
  { image: '/loc-jbr.webp', name: 'Arabian Ranches', link: '/locations/arabian-ranches' },
  { image: '/loc-jumeirah.webp', name: 'Jumeirah', link: '/locations/jumeirah' },
  { image: '/loc-palm-jumeirah.webp', name: 'Palm Jumeirah', link: '/locations/palm-jumeirah' },
]

const villaCommunities = [
  { image: '/loc-palm-jumeirah.webp', name: 'Palm Jumeirah', link: '/locations/palm-jumeirah' },
  { image: '/loc-emirates-hills.webp', name: 'Emirates Hills', link: '/locations/emirates-hills' },
  { image: '/loc-downtown.webp', name: 'Dubai Hills', link: '/locations/dubai-hills' },
  { image: '/loc-dubai-marina.webp', name: 'Jumeirah Islands', link: '/locations/jumeirah-islands' },
  { image: '/loc-jbr.webp', name: 'Arabian Ranches', link: '/locations/arabian-ranches' },
  { image: '/loc-difc.webp', name: 'Jumeirah Golf Estates', link: '/locations/jumeirah-golf-estates' },
]

const extraCommunities = [
  'The Springs',
  'The Meadows',
  'Al Barari',
  'Bluewaters Island',
  'Downtown Dubai',
  'Dubai Marina',
  'JBR',
  'DIFC',
  'Business Bay',
  'Meydan',
  'Jumeirah',
  'Umm Suqeim',
]

const experienceFeatures = [
  { icon: ShoppingBag, title: 'Grocery Shopping', desc: 'We source the freshest ingredients from Dubai\'s premium markets and suppliers. Everything hand-selected for quality.' },
  { icon: Utensils, title: 'In-Villa Preparation', desc: 'Everything prepared fresh in your villa kitchen. No compromises on quality or technique.' },
  { icon: Users, title: 'Full Service', desc: 'Professional service staff attend to your guests throughout the meal, ensuring an effortless experience.' },
  { icon: Sparkles, title: 'Complete Cleanup', desc: 'We leave your villa kitchen spotless. You will not know we were there.' },
  { icon: Clock, title: 'Flexible Scheduling', desc: 'Available for breakfast, lunch, dinner, or all-day service. You set the schedule that works for you.' },
  { icon: Shield, title: 'Discreet & Professional', desc: 'Our team respects your privacy and operates with complete discretion at all times.' },
]

const villaFeatures = [
  { title: 'Familiar Chef Assignment', desc: 'The same chef for your entire stay — they learn your preferences and anticipate your needs.' },
  { title: 'Kitchen Stocking', desc: 'We handle all grocery shopping and pantry stocking. Your villa kitchen is always prepared.' },
  { title: 'Family-Friendly Menus', desc: 'From toddler-approved meals to gourmet adult dining — everyone at the table is delighted.' },
  { title: 'Discreet Service', desc: 'Our team blends seamlessly into your villa environment. Professional, quiet, invisible.' },
]

const galleryImages = [
  '/service-villa.webp',
  '/service-luxury-dining.webp',
  '/service-private-chef.webp',
  '/service-events.webp',
  '/testimonial-villa.webp',
  '/menu-appetizer.webp',
]

const faqItems = [
  {
    q: 'Can a private chef cook in my villa kitchen?',
    a: 'Yes. Our chefs are experienced in working with all types of villa kitchens — from compact apartments to expansive estates. They bring any specialized equipment needed and adapt seamlessly to your space.',
  },
  {
    q: 'Do I need to be present during the service?',
    a: 'Not at all. Many of our clients are out enjoying Dubai while we prepare dinner. We coordinate access and timing in advance, and our team is fully vetted and trustworthy. Your villa is in safe hands.',
  },
  {
    q: 'Can you cater for large villa parties?',
    a: 'Absolutely. We regularly cater villa parties for 20 to 100+ guests with full service teams including chefs, servers, bartenders, and event coordination. No event is too large or too complex.',
  },
  {
    q: 'Do you work with Airbnb and short-stay guests?',
    a: 'Yes. We provide private chef services for short-stay villa and apartment guests across Dubai. Many guests book us for their entire stay, making their Dubai holiday truly exceptional.',
  },
  {
    q: 'What villa communities do you cover?',
    a: 'All of them — Palm Jumeirah, Emirates Hills, Arabian Ranches, Dubai Hills, Jumeirah Islands, Jumeirah Golf Estates, The Springs, The Meadows, Al Barari, Bluewaters, and everywhere in between. If you are in Dubai, we come to you.',
  },
]

const relatedServices = [
  { label: 'Private Chef Dubai', href: '/private-chef-dubai' },
  { label: 'Luxury Dining Experiences', href: '/luxury-dining-experiences' },
  { label: 'Yacht Catering', href: '/yachts' },
  { label: 'Event Catering', href: '/events' },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Villas & Private Residences', item: 'https://mychef.ae/villas-private-residences' },
  ],
}

export default function Villas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Hero

      // Service cards
      gsap.from('.villa-service-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-services-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Community cards
      gsap.from('.community-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.communities-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Villa location cards
      gsap.from('.villa-location-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-locations-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Experience features
      gsap.from('.exp-feature', {
        opacity: 0, y: 40, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.exp-features-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Villa features
      gsap.from('.villa-feature', {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-features-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Gallery
      gsap.from('.gallery-item', {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Testimonial
      gsap.from('.villa-testimonial', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.villa-testimonial', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // CTA
      gsap.from('.villas-cta-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.villas-cta-section', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Villa Private Chef Dubai"
        description="Private chef services for Dubai villas and luxury residences. Palm Jumeirah, Emirates Hills, Arabian Ranches, and more. Bespoke dining at your villa. Request a quote."
        canonicalPath="/villas-private-residences"
        ogImage="/service-villa.webp"
        schema={breadcrumbSchema}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="VILLA CHEF SERVICES"
        title="<>Villa Private Chef<br />Dubai</>"
        subtitle="A world-class chef in your Dubai villa. From one-night dinners to full-time residential chef services — experience exceptional dining without leaving home."
        image="/images/villa-catering-dubai-hero.webp"
        imageAlt="Villa private chef in Dubai"
        cta={{ label: 'Request a Villa Chef', href: WHATSAPP_LINK, external: true }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Villas & Private Residences' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* Section 2: Villa Chef Services */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">VILLA SERVICES</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              Chef Services for Your Dubai Villa
            </h2>
          </div>
          <div className="villa-services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {villaServices.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="villa-service-card group block p-8 border border-gray-200 hover:border-gold transition-all duration-300 bg-white"
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

      {/* Section 3: Villa Communities */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">DUBAI VILLA COMMUNITIES</p>
            <h2 className="font-playfair text-h2 text-white" style={{ lineHeight: '1.15' }}>
              We Serve Every Villa Community in Dubai
            </h2>
          </div>
          <div className="communities-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {villaCommunities.map((comm) => (
              <Link key={comm.name} to={comm.link} className="community-card group relative overflow-hidden block">
                <img src={comm.image} alt={comm.name} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy"/>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-h4 text-white group-hover:text-gold transition-colors">{comm.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-inter text-body text-gray-400 mb-6 max-w-2xl mx-auto">
              We also serve {extraCommunities.join(', ')}, and all other Dubai residential communities.
            </p>
            <Link to="/locations" className="inline-flex items-center gap-2 font-inter text-body-sm font-medium text-gold hover:text-gold-light transition-colors">
              <MapPin size={16} />
              View All Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Villa Locations We Serve */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">VILLA LOCATIONS</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              Villa Locations We Serve
            </h2>
          </div>
          <div className="villa-locations-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {villaLocationsWeServe.map((loc) => (
              <Link key={loc.name} to={loc.link} className="villa-location-card group relative overflow-hidden block">
                <img src={loc.image} alt={loc.name} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy"/>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-h4 text-white group-hover:text-gold transition-colors">{loc.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The Villa Experience */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              What the Villa Experience Includes
            </h2>
          </div>
          <div className="exp-features-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceFeatures.map((feat) => (
              <div key={feat.title} className="exp-feature text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(200,164,92,0.1)' }}>
                  <feat.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-playfair text-h4 text-black mb-2">{feat.title}</h3>
                <p className="font-inter text-body-sm text-gray-500" style={{ lineHeight: '1.7' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Villa Features */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">WHY VILLA DINING</p>
              <h2 className="font-playfair text-h2 text-black mb-6" style={{ lineHeight: '1.15' }}>
                The myCHEF Villa<br />Advantage
              </h2>
              <p className="font-inter text-body text-gray-500 mb-8" style={{ lineHeight: '1.7' }}>
                Having a private chef in your villa transforms everyday dining into an extraordinary experience. No reservations, no travel, no crowds — just exceptional food, prepared exclusively for you in the comfort of your own home. Browse our <Link to="/villa-catering-ideas-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">villa catering ideas</Link> for inspiration.
              </p>
              <div className="villa-features-grid space-y-6">
                {villaFeatures.map((feat) => (
                  <div key={feat.title} className="villa-feature flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(200,164,92,0.1)' }}>
                      <Shield size={16} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-h4 text-black mb-1">{feat.title}</h4>
                      <p className="font-inter text-body-sm text-gray-500" style={{ lineHeight: '1.6' }}>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/testimonial-villa.webp"
                alt="Private villa dining experience in Dubai"
                className="w-full h-[500px] object-cover"
                style={{ border: '1px solid rgba(200,164,92,0.2)' }} decoding="async" loading="lazy"/>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Gallery */}
      <section className="bg-black py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">GALLERY</p>
            <h2 className="font-playfair text-h2 text-white" style={{ lineHeight: '1.15' }}>
              Villa Dining Moments
            </h2>
          </div>
          <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item relative overflow-hidden group aspect-[4/3]">
                <img src={img} alt={`Villa dining gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Testimonial */}
      <section className="bg-charcoal py-20">
        <div className="villa-testimonial max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gold text-4xl font-playfair mb-6">&ldquo;</div>
          <blockquote className="font-playfair text-h3 text-white mb-6" style={{ lineHeight: '1.3' }}>
            We stayed in a Palm Jumeirah villa for two weeks and had myCHEF prepare every meal. It was the highlight of our holiday. The chef learned our preferences, adapted menus daily, and made every dinner feel like a special occasion.
          </blockquote>
          <cite className="font-inter text-body-sm text-gray-400 not-italic">
            — Sarah & James M., Palm Jumeirah
          </cite>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="bg-white section-padding">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">FAQ</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>
              Common Questions About Villa Chef Services
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

      {/* Section 10: Related Services */}
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
            <Link to="/villa-catering-ideas-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">Villa Catering Ideas</Link>.
          </p>
        </div>
      </section>

      {/* Section 11: CTA Banner */}
      <section className="villas-cta-section bg-black py-24">
        <div className="villas-cta-content container-custom text-center">
          <h2 className="font-playfair text-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>
            Book Your Villa Chef Today
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Whether it is one evening or your entire stay — we bring exceptional dining to your Dubai villa.
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
