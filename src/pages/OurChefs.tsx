import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield, Award, Utensils, Heart } from 'lucide-react'
import SEO from '@/components/SEO'
import { breadcrumbSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971500000000'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Our Chefs', path: '/our-chefs' },
]

const chefs = [
  {
    image: '/team-head-chef.jpg',
    name: 'Marco Adriano',
    role: 'Executive Chef & Founder',
    experience: '15+ Years',
    bio: 'Marco began his career in Milan, training under a Michelin-starred chef before leading kitchens across Europe. He founded myCHEF Dubai to bring that same level of precision and artistry to private dining. Under his leadership, the team has grown to serve hundreds of events across Dubai with an unwavering commitment to excellence.',
    specialties: ['Fine Dining', 'European Cuisine', 'Menu Design', 'Team Leadership'],
  },
  {
    image: '/team-sous-chef.jpg',
    name: 'Elena Vasquez',
    role: 'Head Sous Chef',
    experience: '12+ Years',
    bio: 'Elena brings a decade of experience from Barcelona\'s celebrated restaurant scene, including two years at a 2-Michelin-star establishment. Her expertise in seafood, molecular techniques, and artistic plating adds a creative dimension to every menu. She leads menu innovation and ensures every dish meets our exacting standards.',
    specialties: ['Seafood', 'Molecular Gastronomy', 'Plating Design', 'Mediterranean'],
  },
  {
    image: '/team-pastry-chef.jpg',
    name: 'Thomas Chen',
    role: 'Pastry Chef',
    experience: '10+ Years',
    bio: 'A graduate of Le Cordon Bleu Paris, Thomas specializes in modern patisserie that transforms dessert into an experience. His chocolate work and sugar artistry have become a signature of myCHEF Dubai events. He believes dessert should be the conversation everyone remembers.',
    specialties: ['Pastry', 'Chocolate Work', 'Dessert Design', 'Sugar Art'],
  },
]

const standards = [
  { icon: Shield, label: 'Background-checked team members' },
  { icon: Award, label: 'Formal culinary training required' },
  { icon: Utensils, label: 'Regular skills assessments' },
  { icon: Heart, label: 'Hospitality-first mindset' },
]

export default function OurChefs() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)
  const philosophyRef = useRef<HTMLDivElement>(null)
  const profilesRef = useRef<HTMLDivElement>(null)
  const standardsRef = useRef<HTMLDivElement>(null)
  const hiringRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title word stagger
      if (heroTitleRef.current) {
        const words = heroTitleRef.current.querySelectorAll('.word')
        gsap.fromTo(words,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.06, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        )
      }

      // Hero subtitle
      if (heroSubRef.current) {
        gsap.fromTo(heroSubRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: 'power3.out' }
        )
      }

      // Philosophy section
      if (philosophyRef.current) {
        const left = philosophyRef.current.querySelector('.philosophy-left')
        const right = philosophyRef.current.querySelectorAll('.stat-block')
        if (left) {
          gsap.fromTo(left,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: philosophyRef.current, start: 'top 80%' } }
          )
        }
        if (right.length > 0) {
          gsap.fromTo(right,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: philosophyRef.current, start: 'top 80%' } }
          )
        }
      }

      // Chef profiles
      if (profilesRef.current) {
        const cards = profilesRef.current.querySelectorAll('.chef-card')
        cards.forEach((card) => {
          gsap.fromTo(card,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 85%' } }
          )
        })
      }

      // Standards section
      if (standardsRef.current) {
        const items = standardsRef.current.querySelectorAll('.standard-item')
        gsap.fromTo(items,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: standardsRef.current, start: 'top 80%' } }
        )
      }

      // Hiring section
      if (hiringRef.current) {
        gsap.fromTo(hiringRef.current.querySelector('.hiring-content'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: hiringRef.current, start: 'top 80%' } }
        )
      }

      // CTA section
      if (ctaRef.current) {
        const children = ctaRef.current.querySelector('.cta-content')?.children
        if (children) {
          gsap.fromTo(children,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' } }
          )
        }
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO
        title="Our Chefs | myCHEF Dubai | Private Chef Team & Culinary Experts"
        description="Meet the experienced culinary team behind myCHEF Dubai. Professional private chefs specializing in fine dining, international cuisine, and luxury hospitality."
        canonicalPath="/our-chefs"
        schema={breadcrumbSchema(breadcrumbs) as unknown as Record<string, unknown>}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-black border-b border-charcoal-light">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 font-inter text-caption text-gray-500">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gold">Our Chefs</span>
          </nav>
        </div>
      </div>

      {/* Section 1: Page Hero */}
      <section ref={heroRef} className="relative min-h-[55vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/team-kitchen.jpg"
            alt="Our culinary team at work"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)' }}
          />
        </div>
        <div className="relative z-10 container-custom text-center py-20">
          <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
            THE TEAM
          </span>
          <h1
            ref={heroTitleRef}
            className="font-playfair text-h1 md:text-[56px] text-white mb-6"
          >
            <span className="word inline-block">The</span>{' '}
            <span className="word inline-block">Hands</span>{' '}
            <span className="word inline-block">Behind</span>
            <br className="hidden sm:block" />
            <span className="word inline-block">Every</span>{' '}
            <span className="word inline-block">Extraordinary</span>{' '}
            <span className="word inline-block">Meal</span>
          </h1>
          <p ref={heroSubRef} className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto">
            Experienced professionals. Passionate craftspeople. Dedicated to your experience.
          </p>
        </div>
      </section>

      {/* Section 2: Culinary Philosophy */}
      <section ref={philosophyRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="philosophy-left">
              <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
                OUR APPROACH
              </span>
              <h2 className="font-playfair text-h2 text-black mb-6">
                More Than Cooking —<br />
                An Act of Hospitality
              </h2>
              <p className="font-inter text-body text-gray-500 leading-relaxed mb-4">
                Every chef on our team has been selected not only for technical skill but for something harder to teach: the instinct for genuine hospitality. We believe that a truly exceptional dining experience is about how your guests feel — not just what they eat.
              </p>
              <p className="font-inter text-body text-gray-500 leading-relaxed">
                Our culinary approach blends classical technique with modern creativity. We draw from European fine dining traditions, Mediterranean warmth, Middle Eastern flavors, and Asian precision to create menus that are both familiar and surprising.
              </p>
            </div>

            {/* Right Column - Stats */}
            <div className="flex flex-col gap-8 justify-center">
              <div className="stat-block border-l-2 border-gold pl-6">
                <h4 className="font-playfair text-h4 text-black mb-2">Classically Trained</h4>
                <p className="font-inter text-body-sm text-gray-500">
                  Every chef trained in professional culinary programs
                </p>
              </div>
              <div className="stat-block border-l-2 border-gold pl-6">
                <h4 className="font-playfair text-h4 text-black mb-2">International Experience</h4>
                <p className="font-inter text-body-sm text-gray-500">
                  Team members from Europe, Asia, and the Middle East
                </p>
              </div>
              <div className="stat-block border-l-2 border-gold pl-6">
                <h4 className="font-playfair text-h4 text-black mb-2">Continuous Development</h4>
                <p className="font-inter text-body-sm text-gray-500">
                  Regular training in new techniques and cuisines
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Chef Profiles */}
      <section ref={profilesRef} className="bg-black section-padding">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
              MEET THE TEAM
            </span>
            <h2 className="font-playfair text-h2 text-white">Our Culinary Team</h2>
          </div>

          {/* Chef Cards */}
          <div className="flex flex-col gap-12">
            {chefs.map((chef, index) => (
              <div
                key={chef.name}
                className={`chef-card grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-[1fr_35%]' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold">
                      {chef.role}
                    </span>
                    <span className="font-inter text-caption font-medium bg-charcoal-light text-gold px-3 py-1">
                      {chef.experience}
                    </span>
                  </div>
                  <h3 className="font-playfair text-h2 text-white mb-4">{chef.name}</h3>
                  <p className="font-inter text-body text-gray-400 leading-relaxed mb-6">
                    {chef.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {chef.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="font-inter text-xs text-gold border px-3 py-1"
                        style={{ borderColor: 'rgba(200,164,92,0.3)' }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Kitchen Standards */}
      <section ref={standardsRef} className="bg-charcoal py-20">
        <div className="container-custom max-w-[1000px]">
          <h2 className="font-playfair text-[36px] text-white text-center mb-12">Our Standards</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map(({ icon: Icon, label }) => (
              <div key={label} className="standard-item flex flex-col items-center text-center">
                <Icon size={40} className="text-gold mb-4" />
                <span className="font-inter text-body-sm text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Hiring Inquiry */}
      <section ref={hiringRef} className="bg-cream py-20">
        <div className="hiring-content container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-h3 text-black mb-4">Join Our Team?</h3>
          <p className="font-inter text-body text-gray-500 mb-4">
            We are always looking for exceptional culinary talent. If you are an experienced chef with a passion for private dining, we would love to hear from you.
          </p>
          <a
            href="mailto:careers@mychef.ae"
            className="font-inter text-body text-gold hover:underline"
          >
            Send your CV to careers@mychef.ae
          </a>
        </div>
      </section>

      {/* Section 6: CTA Banner */}
      <section
        ref={ctaRef}
        className="relative py-28 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)' }}
      >
        <div className="container-custom text-center">
          <div className="cta-content">
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-playfair text-h2 md:text-[48px] text-white mb-6">
              Taste the Difference<br />
              <span className="text-gold">Experience Makes</span>
            </h2>
            <p className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto mb-10">
              Every dish prepared by hands that have trained in the world&apos;s finest kitchens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/inquiry" className="btn-primary">
                Request My Custom Quote
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
