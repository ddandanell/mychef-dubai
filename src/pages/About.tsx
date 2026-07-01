import { useRef } from 'react'
import { Link } from 'react-router'
import { Star, Shield, Heart, Clock } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote (via mychef.ae/about)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const values = [
  { icon: Star, title: 'Uncompromising Quality', desc: 'Only premium ingredients. Only skilled preparation. We never cut corners — ever.' },
  { icon: Shield, title: 'Complete Discretion', desc: 'Your privacy is paramount. Our team operates with the utmost professionalism and confidentiality.' },
  { icon: Heart, title: 'Genuine Hospitality', desc: 'We do not just cook — we create experiences. Warm, attentive service that makes every guest feel special.' },
  { icon: Clock, title: 'Reliability & Precision', desc: 'On time, every time. Meticulous planning ensures your event runs flawlessly from start to finish.' },
]

const team = [
  { image: '/team-head-chef.webp', name: 'Marco Adriano', role: 'Executive Chef', bio: 'Classically trained in modern European fine dining across Europe and the Middle East. Two decades of experience shaping menus that balance precision with Mediterranean warmth.', exp: 'Fine Dining Leadership' },
  { image: '/team-sous-chef.webp', name: 'Elena Vasquez', role: 'Sous Chef', bio: 'Experienced in seafood-led cuisine, modern plating, and kitchen coordination for high-end private events. Brings creativity and calm execution to every service.', exp: 'Private Event Specialist' },
  { image: '/team-pastry-chef.webp', name: 'Thomas Chen', role: 'Pastry Chef', bio: 'Specializes in modern patisserie, chocolate work, and dessert presentation designed to close a meal with impact and elegance.', exp: 'Dessert & Pastry' },
]

const stats = [
  { value: 'Tailored', label: 'Menus' },
  { value: 'Chef-Led', label: 'Team' },
  { value: 'Dubai-wide', label: 'Coverage' },
  { value: 'Clear', label: 'Pricing' },
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
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.story-left, .story-right, .value-card, .team-card, .coverage-item, .about-cta-content', {
          opacity: 1, x: 0, y: 0, scale: 1,
        })
        return
      }

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

      // Stats counter (scoped to this component)
      const statEls = containerRef.current?.querySelectorAll('.stat-number')
      statEls?.forEach((el) => {
        const valueEl = el.querySelector('.stat-value')
        const targetAttr = el.getAttribute('data-target')
        if (!valueEl || !targetAttr) return
        const target = parseInt(targetAttr, 10)
        const suffix = el.getAttribute('data-suffix') || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          onUpdate: () => { valueEl.textContent = Math.round(obj.val) + suffix },
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
        ogImage="/team-head-chef.webp"
        schema={breadcrumbSchema}
      />

      {/* Section 1: Hero */}
      <PageHero
        eyebrow="ABOUT US"
        title={<>The Story Behind<br />Every Exceptional Meal</>}
        subtitle="Experience, passion, and an unwavering commitment to excellence."
        image="/images/about-mychef-dubai-hero.webp"
        imageAlt="myCHEF Dubai kitchen team"
        minHeight="medium"
        overlay="dark"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Section 2: Our Story */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            <div className="story-left">
              <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">OUR STORY</p>
              <h2 className="font-playfair text-fluid-h2 text-black mb-8" style={{ lineHeight: '1.15' }}>
                From Fine Kitchens<br />to Dubai's Most Distinguished Homes
              </h2>
              <div className="space-y-4 font-inter text-body text-gray-500" style={{ lineHeight: '1.7' }}>
                <p>myCHEF Dubai was founded with a simple belief: that exceptional dining should not be limited to restaurants. Drawing on years of experience in Europe's most demanding kitchens, our founder assembled a team of culinary talent dedicated to bringing restaurant-quality dining into private homes, villas, and yachts across Dubai.</p>
                <p>Today, we are a full-service hospitality team — not just chefs, but a complete dining experience. From menu design and ingredient sourcing to table setting, service, and cleanup, we handle every detail so you can focus on what matters: enjoying the moment.</p>
                <p>We serve clients across Dubai — from Palm Jumeirah to Emirates Hills, Downtown to Dubai Marina — and every engagement is approached with the same standard: excellence without compromise.</p>
              </div>
            </div>
            <div className="story-right">
              <img
                src="/testimonial-villa.webp"
                alt="Founder at a private dinner event"
                className="w-full object-cover"
                style={{ border: '1px solid rgba(200,164,92,0.3)' }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Values */}
      <section className="bg-cream section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">OUR VALUES</p>
            <h2 className="font-playfair text-fluid-h2 text-black" style={{ lineHeight: '1.15' }}>What Drives Us</h2>
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
          <div className="text-center mb-12 md:mb-16">
            <p className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-3">THE TEAM</p>
            <h2 className="font-playfair text-fluid-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>Meet the Culinary Team</h2>
            <p className="font-inter text-body text-gray-400 max-w-xl mx-auto">Experienced professionals, each bringing unique expertise to your table.</p>
          </div>
          <div className="team-grid grid md:grid-cols-3 gap-8">
            {team.map((chef) => (
              <div key={chef.name} className="team-card">
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
                <div className="stat-number font-playfair text-4xl md:text-[48px] text-gold">
                  {s.value}
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
                        className="font-inter text-body-sm text-gray-500 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
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
          <h2 className="font-playfair text-fluid-h2 text-white mb-4" style={{ lineHeight: '1.15' }}>Experience the Difference</h2>
          <p className="font-inter text-body text-gray-400 max-w-xl mx-auto mb-8">
            Join the discerning clients who trust myCHEF Dubai for their most important occasions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=about" className="btn-primary focus-visible:ring-offset-black">Request My Custom Quote</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary focus-visible:ring-offset-black">Chat on WhatsApp</a>
          </div>
          <p className="mt-6 font-inter text-body-sm text-gray-500">
            Own a venue or manage properties?{' '}
            <Link to="/partner-with-us" className="text-gold hover:underline">
              Partner with us
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
