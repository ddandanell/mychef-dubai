// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /inquiry
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Check, Phone, Mail, MapPin } from 'lucide-react'
import SEO from '@/components/SEO'
import TrustBar from '@/components/TrustBar'
import { breadcrumbSchema } from '@/utils/schema'
import {
  clampYachtGuests,
  isYachtFormatId,
  yachtWhatsAppMessage,
} from '@/content/yachtCateringQuote'
import { corporateWhatsAppMessage, packageById } from '@/content/corporatePackages'
import {
  birthdayBriefFromSearchParams,
  birthdayInquirySubtitle,
  birthdayPrivateInquirySubtitle,
  birthdayPrivateWhatsAppMessage,
  birthdayWhatsAppMessage,
  parseBirthdayExtraIds,
} from '@/content/birthdayExtras'
import { scenarioById } from '@/content/birthdayStatement'
import BirthdayPrivateBrief from '@/components/birthday/BirthdayPrivateBrief'
import QuoteRequestForm from '@/components/inquiry/QuoteRequestForm'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { cateringCalculatorBrief } from '@/lib/cateringInquiry'

const WHATSAPP_NUMBER = '971551744849'
const DEFAULT_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, I'd like to request a bespoke quote for an upcoming event (via mychef.ae/inquiry)"

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Request a Quote', path: '/inquiry' },
]

const trustBadges = [
  'Reply within 15 minutes during business hours',
  'No obligation quote',
  'Booking protection & insurance',
  'Discreet & professional',
]

export default function Inquiry() {
  const [params] = useSearchParams()
  const formatParam = params.get('format') ?? ''
  const guestsParam = Number(params.get('guests'))
  const yachtPrefill = params.get('from') === 'yachts' && isYachtFormatId(formatParam)
  const corporatePkg = params.get('from') === 'corporate' ? packageById(params.get('package') ?? '') : undefined
  const birthdayLane = params.get('from') === 'birthday-private' ? 'private' : params.get('from') === 'birthday' ? 'catalogue' : null
  const birthdayExtraIds = birthdayLane ? parseBirthdayExtraIds(params.get('extras')) : []
  const birthdayScenario = scenarioById(params.get('scenario'))
  const birthdayPrefill = birthdayLane === 'catalogue'
  const birthdayPrivatePrefill = birthdayLane === 'private'
  const birthdayPrivateBrief = birthdayPrivatePrefill
    ? {
        ...birthdayBriefFromSearchParams(params),
        extraIds: birthdayExtraIds,
        scenario: birthdayScenario?.title,
      }
    : null
  const chefPref = params.get('chef')
  const calculatorBrief = cateringCalculatorBrief(params)
  const whatsappMessage = chefPref
    ? `Hi myCHEF Dubai, I would like to enquire about chef ${chefPref.replace(/-/g, ' ')} as a preference. Availability to be confirmed. (via mychef.ae/inquiry)`
    : yachtPrefill
    ? yachtWhatsAppMessage({ guests: clampYachtGuests(guestsParam), formatId: formatParam })
    : corporatePkg
      ? corporateWhatsAppMessage(corporatePkg, Number.isFinite(guestsParam) && guestsParam > 0 ? guestsParam : undefined)
      : birthdayPrivateBrief
        ? birthdayPrivateWhatsAppMessage(birthdayPrivateBrief)
        : birthdayPrefill
          ? birthdayWhatsAppMessage(birthdayExtraIds)
          : calculatorBrief.length
            ? `Hi myCHEF Dubai, I would like a catering proposal.\n${calculatorBrief.join('\n')}`
            : DEFAULT_WHATSAPP_MESSAGE
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`
  useWhatsAppMessage(whatsappMessage)

  useScrollTrigger()
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
        title="Get a Quote | Private Chef & Catering Dubai | myCHEF"
        description="Tell myCHEF your date or preferred schedule, number of people and Dubai area. Ask about a private chef or catering; we confirm details before preparing a proposal."
        canonicalPath="/inquiry"
        ogImage="/service-catering.webp"
        noindex
        hideSiteName
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
            <span className="word inline-block">Tell</span>{' '}
            <span className="word inline-block">Us</span>{' '}
            <span className="word inline-block">What</span>{' '}
            <span className="word inline-block">You</span>{' '}
            <span className="word inline-block">Need</span>
          </h1>
          <p ref={heroSubRef} className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto">
            {yachtPrefill
              ? 'Your yacht estimate is attached to the WhatsApp message. Add the charter date and marina, then send.'
              : corporatePkg
                ? `Package selected: ${corporatePkg.name}. Add the date, area and guest count, then send.`
                : birthdayPrivateBrief
                  ? birthdayPrivateInquirySubtitle(birthdayPrivateBrief)
                  : birthdayPrefill
                    ? birthdayInquirySubtitle(birthdayExtraIds)
                    : "A private chef for your home or catering for your event. Share your date or preferred schedule, number of people and Dubai area. We will confirm the details before preparing a written proposal."}
          </p>
        </div>
      </section>

      {/* Section 2: WhatsApp CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-custom max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-y-12 lg:gap-x-12">
            {/* Left Column — WhatsApp CTA */}
            <div ref={ctaRef}>
              {birthdayPrivatePrefill ? (
                <div className="mb-12">
                  <BirthdayPrivateBrief extraIds={birthdayExtraIds} scenarioId={params.get('scenario')} />
                </div>
              ) : null}
              <h2 className="font-playfair text-fluid-h3 text-black mb-4">
                Send a short brief
              </h2>
              <p className="font-inter text-body text-gray-500 mb-8">
                Tell us when, how many people and where in Dubai. Choose where you want our first reply. There is no need to decide the menu before you contact us.
              </p>
              <QuoteRequestForm />
              <p className="font-inter text-body-sm text-gray-500 mt-6">
                Or skip the form and{' '}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
                >
send the essentials directly on WhatsApp
                </a>
                . You can also write to{' '}
                <a href="mailto:info@mychef.ae" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
                  info@mychef.ae
                </a>
                .
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
                    { title: 'We Review Your Request', desc: 'A coordinator reviews your brief and confirms the details needed to prepare a relevant proposal.' },
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
Ask us a quick question on WhatsApp. We will confirm availability after checking your date and brief.
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
              href="mailto:info@mychef.ae"
              className="flex items-center gap-2 font-inter text-body-sm text-gray-500 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            >
              <Mail size={16} className="text-gold" aria-hidden="true" />
              info@mychef.ae
            </a>
            <span className="flex items-center gap-2 font-inter text-body-sm text-gray-500">
              <MapPin size={16} className="text-gold" aria-hidden="true" />
              Dubai, UAE
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-inter text-body-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors underline underline-offset-4">Privacy Policy</Link>
            <span className="hidden sm:inline">·</span>
            <Link to="/private-client-booking-terms" className="hover:text-gold transition-colors underline underline-offset-4">Private booking terms</Link>
            <span className="hidden sm:inline">·</span>
            <Link to="/corporate-booking-terms" className="hover:text-gold transition-colors underline underline-offset-4">Corporate booking terms</Link>
            <span className="hidden sm:inline">·</span>
            <Link to="/terms" className="hover:text-gold transition-colors underline underline-offset-4">Terms of Service</Link>
          </div>
        </div>
      </section>
    </>
  )
}
