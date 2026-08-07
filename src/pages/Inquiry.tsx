import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Phone, Mail, MapPin } from 'lucide-react'
import SEO from '@/components/SEO'
import TrustBar from '@/components/TrustBar'
import { breadcrumbSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to request a bespoke quote for an upcoming event (via mychef.ae/inquiry)")
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Request a Quote', path: '/inquiry' },
]

const valueBullets = [
  'Custom menu designed around your event',
  'Vetted, licensed chefs matched to your occasion',
  'Reply within 15 minutes during business hours',
]

const trustBadges = [
  'Reply within 15 minutes during business hours',
  'No obligation quote',
  'Booking protection & insurance',
  'Discreet & professional',
]

export default function Inquiry() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const altContactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(heroTitleRef.current?.querySelectorAll('.word') || [], { opacity: 1, y: 0 })
        gsap.set([heroSubRef.current, ctaRef.current, sidebarRef.current, altContactRef.current?.querySelector('.alt-content')], { opacity: 1, y: 0, x: 0 })
        return
      }

      if (heroTitleRef.current) {
        const words = heroTitleRef.current.querySelectorAll('.word')
        gsap.fromTo(words,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        )
      }

      if (heroSubRef.current) {
        gsap.fromTo(heroSubRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power3.out' }
        )
      }

      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: ctaRef.current, start: 'top 80%' } }
        )
      }

      if (sidebarRef.current) {
        gsap.fromTo(sidebarRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
            scrollTrigger: { trigger: sidebarRef.current, start: 'top 80%' } }
        )
      }

      if (altContactRef.current) {
        gsap.fromTo(altContactRef.current.querySelector('.alt-content'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: altContactRef.current, start: 'top 85%' } }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO
        title="Request a Quote | Private Chef Dubai"
        description="Request a custom quote for private chef services or luxury catering in Dubai. We typically respond within 15 minutes with a bespoke proposal tailored to your event."
        canonicalPath="/inquiry"
        ogImage="/service-catering.webp"
        schema={breadcrumbSchema(breadcrumbs) as unknown as Record<string, unknown>}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-black border-b border-charcoal-light">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 font-inter text-caption text-gray-500">
            <Link to="/" className="hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm">Home</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gold">Request a Quote</span>
          </nav>
        </div>
      </div>

      {/* Section 1: Page Hero */}
      <section ref={heroRef} className="relative min-h-[40vh] flex items-center justify-center bg-black">
        <div className="container-custom text-center py-16">
          <span className="font-inter text-caption font-medium uppercase tracking-wider text-gold mb-4 block">
            GET STARTED
          </span>
          <h1
            ref={heroTitleRef}
            className="font-playfair text-fluid-h1 text-white mb-6"
          >
            <span className="word inline-block">Get</span>{' '}
            <span className="word inline-block">Your</span>{' '}
            <span className="word inline-block">Free,</span>{' '}
            <span className="word inline-block">Tailored</span>
            <br className="hidden sm:block" />
            <span className="word inline-block">Quote</span>{' '}
            <span className="word inline-block">on</span>{' '}
            <span className="word inline-block">WhatsApp</span>
          </h1>
          <p ref={heroSubRef} className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto">
            Tell us what you are planning and we will reply with menu ideas and indicative pricing. Most requests get a response within 15 minutes during business hours.
          </p>
        </div>
      </section>

      {/* Section 2: WhatsApp CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-y-12 lg:gap-x-12">
            {/* Left Column — WhatsApp CTA */}
            <div ref={ctaRef}>
              <h2 className="font-playfair text-fluid-h3 text-black mb-4">
                Get Your Tailored Quote on WhatsApp
              </h2>
              <p className="font-inter text-body text-gray-500 mb-8">
                Tap the button below to start a WhatsApp chat. A coordinator will review your event and send a tailored proposal fast.
              </p>

              <ul className="flex flex-col gap-4 mb-8">
                {valueBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 font-inter text-body text-black">
                    <Check size={20} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 focus-visible:ring-offset-white"
              >
                <Phone size={18} aria-hidden="true" />
                Get My Free Quote on WhatsApp
              </a>

              <p className="font-inter text-body-sm text-gray-600 mt-4 flex items-center gap-2">
                <Check size={16} className="text-gold flex-shrink-0" aria-hidden="true" />
                We reply within 15 minutes during business hours
              </p>

              <p className="font-inter text-body-sm text-gray-500 mt-6">
                Prefer email?{' '}
                <a href="mailto:info@mychef.id" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
                  info@mychef.id
                </a>
              </p>
            </div>

            {/* Right Column — Trust Sidebar */}
            <div ref={sidebarRef}>
              <div className="bg-black p-6 md:p-8 lg:sticky lg:top-[100px]">
                <h3 className="font-playfair text-fluid-h3 text-white mb-8">
                  What Happens Next?
                </h3>

                {/* Steps */}
                <div className="flex flex-col gap-6 mb-8">
                  {[
                    { title: 'We Review Your Request', desc: 'Within 15 minutes during business hours, a coordinator reviews your details and brings you a vetted chef.' },
                    { title: 'We Create Your Proposal', desc: 'A bespoke menu and indicative quote tailored to your event.' },
                    { title: 'You Confirm & Relax', desc: 'Once confirmed, we coordinate every detail so you can be a guest at your own event.' },
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <span className="font-inter text-sm font-medium text-black">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-inter text-body-sm font-medium text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="font-inter text-body-sm text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-charcoal-light my-8" />

                {/* Trust Badges */}
                <div className="flex flex-col gap-3 mb-8">
                  {trustBadges.map((badge) => (
                    <div key={badge} className="flex items-center gap-3">
                      <Check size={16} className="text-gold flex-shrink-0" aria-hidden="true" />
                      <span className="font-inter text-body-sm text-gray-400">{badge}</span>
                    </div>
                  ))}
                </div>

                <TrustBar variant="dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Alternative Contact */}
      <section ref={altContactRef} className="bg-cream py-16">
        <div className="alt-content container-custom max-w-[800px] text-center">
          <h3 className="font-playfair text-fluid-h3 text-black mb-4">
            Prefer to Talk Directly?
          </h3>
          <p className="font-inter text-body text-gray-500 mb-6">
            We are available on WhatsApp for quick questions and immediate availability.
          </p>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 mb-6 focus-visible:ring-offset-cream"
          >
            <Phone size={16} aria-hidden="true" />
            Chat on WhatsApp
          </a>

          {/* Other contacts */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+971551744849"
              className="flex items-center gap-2 font-inter text-body-sm text-gray-500 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            >
              <Phone size={16} className="text-gold" aria-hidden="true" />
              +971 55 174 4849
            </a>
            <a
              href="mailto:info@mychef.id"
              className="flex items-center gap-2 font-inter text-body-sm text-gray-500 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            >
              <Mail size={16} className="text-gold" aria-hidden="true" />
              info@mychef.id
            </a>
            <span className="flex items-center gap-2 font-inter text-body-sm text-gray-500">
              <MapPin size={16} className="text-gold" aria-hidden="true" />
              Dubai, UAE
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-inter text-body-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors underline underline-offset-4">Privacy Policy</Link>
            <span className="hidden sm:inline">·</span>
            <Link to="/terms" className="hover:text-gold transition-colors underline underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </section>
    </>
  )
}
