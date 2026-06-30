import { useRef } from 'react'
import { Link } from 'react-router'
import { Star, Shield, Heart, Clock, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/about)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const values = [
  { icon: Star, title: 'Uncompromising Quality', desc: 'Only the finest ingredients. Only the most skilled preparation. We never cut corners — ever.' },
  { icon: Shield, title: 'Complete Discretion', desc: 'Your privacy is paramount. Our team operates with the utmost professionalism and confidentiality.' },
  { icon: Heart, title: 'Genuine Hospitality', desc: 'We do not just cook — we create experiences. Warm, attentive service that makes every guest feel special.' },
  { icon: Clock, title: 'Reliability & Precision', desc: 'On time, every time. Meticulous planning ensures your event runs flawlessly from start to finish.' },
]

const team = [
  { image: '/team-head-chef.jpg', name: 'Marco Adriano', role: 'Executive Chef', bio: 'Trained under Michelin-starred chefs in Milan. Two decades of experience across Europe and the Middle East. Specializes in modern European cuisine with Mediterranean influences.', exp: '20+ Years Experience' },
  { image: '/team-sous-chef.jpg', name: 'Elena Vasquez', role: 'Sous Chef', bio: 'Formerly of a 2-Michelin-star restaurant in Barcelona. Expert in seafood, molecular gastronomy, and artistic plating. Brings creativity and precision to every dish.', exp: '15+ Years Experience' },
  { image: '/team-pastry-chef.jpg', name: 'Thomas Chen', role: 'Pastry Chef', bio: 'Graduate of Le Cordon Bleu Paris. Specializes in modern patisserie, chocolate work, and dessert presentation that doubles as edible art.', exp: '12+ Years Experience' },
]

const stats = [
  { number: 500, suffix: '+', label: 'Private Events Hosted' },
  { number: 50, suffix: '+', label: 'Hospitality Professionals' },
  { number: 30, suffix: '+', label: 'Dubai Locations Served' },
  { number: 100, suffix: '%', label: 'Client Satisfaction' },
]

const locations = [
  { group: 'Beach & Island', items: ['Palm Jumeirah', 'Bluewaters Island'] },
  { group: 'Marina & Waterfront', items: ['Dubai Marina', 'JBR', 'Dubai Creek Harbour'] },
  { group: 'City Center', items: ['Downtown Dubai', 'DIFC', 'Business Bay'] },
  { group: 'Premium Residential', items: ['Emirates Hills', 'Dubai Hills', 'Jumeirah Islands', 'Jumeirah Golf Estates', 'Arabian Ranches'] },
  { group: 'Traditional', items: ['Jumeirah', 'Umm Suqeim', 'Al Safa'] },
  { group: 'Emerging', items: ['Al Barari', 'Meydan', 'Dubai Silicon Oasis', 'Dubai South'] },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://mychef.ae/about' },
  ],
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.about-hero-eyebrow', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
      gsap.from('.about-hero-h1', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', delay: 0.2 })
      gsap.from('.about-hero-sub', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out', delay: 0.8 })

      // Story section
      gsap.from('.story-left', {
        opacity: 0, x: -30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.story-left', start: 'top 85%', toggleActions: 'play none none none' },
      })
      gsap.from('.story-right', {
        opacity: 0, x: 30, duration: 0.8, ease: 'power3.out', delay: 0.2,
        scrollTrigger: { trigger: '.story-right', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Values cards
      gsap.from('.value-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.values-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Team cards
      gsap.from('.team-card', {
        opacity: 0, y: 50, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.team-grid', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // Stats counter
      const statEls = document.querySelectorAll('.stat-number')
      statEls.forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10)
        const suffix = el.getAttribute('data-suffix') || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          onUpdate: () => { el.textContent = Math.round(obj.val) + suffix },
        })
      })

      // Coverage section
      gsap.from('.coverage-item', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.coverage-section', start: 'top 85%', toggleActions: 'play none none none' },
      })

      // CTA section
      gsap.from('.about-cta-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-cta', start: 'top 85%', toggleActions: 'play none none none' },
      })
    }, containerRef)

    return () => ctx.revert()
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="About myCHEF Dubai"
        description="Discover the story behind myCHEF Dubai. Led by experienced culinary professionals, we deliver premium private chef services and luxury catering across Dubai."
        canonicalPath="/about"
        ogImage="/team-head-chef.jpg"
        schema={breadcrumbSchema}
      />

      {/* Section 1: Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
        <img
          src="/images/about-mychef-dubai-hero.webp"
          alt="myCHEF Dubai kitchen team"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%)' }} />
        <div className="relative z-10 text-center container-custom py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center justify-center gap-2 font-inter text-body-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><ChevronRight size={14} className="text-gray-500" /></li>
              <li className="text-gold">About</li>
            </ol>
          </nav>
          <p className="about-hero-eyebrow font-inter text-caption font-medium uppercase tracking-[0.1em] text-gold mb-4">ABOUT US</p>
          <h1 className="about-hero-h1 font-playfair text-h1 md:text-[3.5rem] text-white mb-6" style={{ lineHeight: '1.1' }}>
            The Story Behind<br />Every Exceptional Meal
          </h1>
          <p className="about-hero-sub font-inter text-body-lg text-gray-400 max-w-xl mx-auto">
            Experience, passion, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Section 2: Our Story */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            <div className="story-left">
              <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">OUR STORY</p>
              <h2 className="font-playfair text-h2 text-black mb-8" style={{ lineHeight: '1.15' }}>
                From Fine Kitchens<br />to Dubai's Finest Homes
              </h2>
              <div className="space-y-4 font-inter text-body text-gray-500" style={{ lineHeight: '1.7' }}>
                <p>myCHEF Dubai was founded with a simple belief: that exceptional dining should not be limited to restaurants. Drawing on years of experience in Europe's most demanding kitchens, our founder assembled a team of culinary talent dedicated to bringing restaurant-quality dining into private homes, villas, and yachts across Dubai.</p>
                <p>Today, we are a full-service hospitality team — not just chefs, but a complete dining experience. From menu design and ingredient sourcing to table setting, service, and cleanup, we handle every detail so you can focus on what matters: enjoying the moment.</p>
                <p>We serve clients across Dubai — from Palm Jumeirah to Emirates Hills, Downtown to Dubai Marina — and every engagement is approached with the same standard: excellence without compromise.</p>
              </div>
            </div>
            <div className="story-right">
              <img
                src="/testimonial-villa.jpg"
                alt="Founder at a private dinner event"
                className="w-full object-cover"
                style={{ border: '1px solid rgba(200,164,92,0.3)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Values */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">OUR VALUES</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>What Drives Us</h2>
          </div>
          <div className="values-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="value-card text-center">
                <v.icon size={48} className="text-gold mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-playfair text-h3 text-black mb-3">{v.title}</h3>
                <p className="font-inter text-body-sm text-gray-500" style={{ lineHeight: '1.6' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Team */}
      <section className="bg-black section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">THE TEAM</p>
            <h2 className="font-playfair text-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>Meet the Culinary Team</h2>
            <p className="font-inter text-body text-gray-400 max-w-xl mx-auto">Experienced professionals, each bringing unique expertise to your table.</p>
          </div>
          <div className="team-grid grid md:grid-cols-3 gap-8">
            {team.map((chef) => (
              <div key={chef.name} className="team-card">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-playfair text-h3 text-white">{chef.name}</h3>
                <p className="font-inter text-body-sm text-gold uppercase tracking-[0.05em] mt-1">{chef.role}</p>
                <p className="font-inter text-body-sm text-gray-400 mt-3" style={{ lineHeight: '1.6' }}>{chef.bio}</p>
                <span className="inline-block mt-3 font-inter text-caption text-gray-400 border border-charcoal-light px-3 py-1">{chef.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Stats */}
      <section className="bg-charcoal py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  className="stat-number font-playfair text-[48px] text-gold"
                  data-target={s.number}
                  data-suffix={s.suffix}
                >
                  0{s.suffix}
                </div>
                <p className="font-inter text-body-sm text-gray-400 uppercase tracking-wider mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Coverage Map */}
      <section className="coverage-section bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">OUR REACH</p>
            <h2 className="font-playfair text-h2 text-black" style={{ lineHeight: '1.15' }}>We Serve All of Dubai</h2>
          </div>
          <div className="grid lg:grid-cols-[40%_60%] gap-12">
            <div className="space-y-6">
              {locations.map((loc) => (
                <div key={loc.group} className="coverage-item">
                  <h4 className="font-playfair text-h4 text-black mb-2">{loc.group}</h4>
                  <div className="flex flex-wrap gap-2">
                    {loc.items.map((item) => (
                      <Link
                        key={item}
                        to={`/locations/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="font-inter text-body-sm text-gray-500 hover:text-gold transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="coverage-item flex items-center justify-center">
              <div className="w-full h-full min-h-[300px] bg-charcoal relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-playfair text-h3 text-gold mb-4">Dubai Coverage</p>
                    <div className="grid grid-cols-3 gap-4">
                      {['Palm', 'Marina', 'Downtown', 'DIFC', 'Emirates Hills', 'JBR', 'Business Bay', 'Jumeirah', 'Arabian Ranches'].map((loc) => (
                        <div key={loc} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gold" />
                          <span className="font-inter text-body-sm text-gray-400">{loc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: CTA Banner */}
      <section className="about-cta bg-black section-padding">
        <div className="about-cta-content container-custom text-center">
          <h2 className="font-playfair text-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>Experience the Difference</h2>
          <p className="font-inter text-body text-gray-400 max-w-xl mx-auto mb-8">
            Join the discerning clients who trust myCHEF Dubai for their most important occasions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=about" className="btn-primary">Request My Custom Quote</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
