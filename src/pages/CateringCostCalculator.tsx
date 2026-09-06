// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /catering-cost-calculator-dubai
//     primary:     "catering cost calculator dubai"
//     subkeywords: "estimate catering cost dubai" · "catering budget calculator dubai" · "how much will catering cost dubai" · "how much catering do i need for 50 guests dubai" · "birthday catering cost calculator dubai" · "small catering cost calculator dubai" · "wedding catering cost calculator dubai" · "catering calculator per person"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useEffect, useRef, useState } from 'react'
import { trackConversion } from '@/lib/track'
import { bucketGuests } from '@/lib/trackVocab'
import { Link } from 'react-router'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { Calculator, Users, UtensilsCrossed, ArrowRight, Info } from 'lucide-react'
import SEO from '@/components/SEO'
import LocationStrip from '@/components/LocationStrip'
import PageHero from '@/components/PageHero'
import { breadcrumbSchema } from '@/utils/schema'
import {
  CALCULATOR_FORMAT_IDS,
  CATERING_FORMAT_BY_ID,
  STAFF_LEVELS,
  type CalculatorFormatId,
  type StaffLevelId,
  clampGuests,
  formatEstimate,
  formatFrom,
  formatTypical,
  isCalculatorFormatId,
  isStaffLevelId,
  quoteCatering,
} from '@/content/cateringPricing'

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Catering Cost Calculator', path: '/catering-cost-calculator-dubai' },
]

const serviceOptions = CALCULATOR_FORMAT_IDS.map((id) => {
  const format = CATERING_FORMAT_BY_ID[id]
  return {
    value: id,
    label: format.calculatorLabel ?? format.label,
    minGuests: format.minGuests,
  }
})

export default function CateringCostCalculator() {
  useScrollTrigger()
  const [guests, setGuests] = useState(10)
  const [service, setService] = useState<CalculatorFormatId>(serviceOptions[0].value)
  const [staffLevel, setStaffLevel] = useState<StaffLevelId>(STAFF_LEVELS[0].id)
  const resultRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const selectedService = serviceOptions.find((s) => s.value === service) || serviceOptions[0]
  const selectedStaff = STAFF_LEVELS.find((s) => s.id === staffLevel) || STAFF_LEVELS[0]
  const selectedFormat = CATERING_FORMAT_BY_ID[service]
  const countedGuests = clampGuests(service, guests)
  const quote = quoteCatering({ formatId: service, guests: countedGuests, staffId: staffLevel })
  const calcArmed = useRef(false)

  useEffect(() => {
    if (!calcArmed.current) {
      calcArmed.current = true
      return
    }
    const t = window.setTimeout(() => {
      trackConversion('calc_use', 'link', bucketGuests(countedGuests))
    }, 800)
    return () => window.clearTimeout(t)
  }, [countedGuests, guests, service, staffLevel])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (resultRef.current) {
        gsap.fromTo(
          resultRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: resultRef.current, start: 'top 85%' },
          }
        )
      }
      if (faqRef.current) {
        gsap.fromTo(
          faqRef.current.querySelectorAll('.faq-item'),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: { trigger: faqRef.current, start: 'top 85%' },
          }
        )
      }
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO
        title="Catering Cost Calculator Dubai | Instant Price Estimate"
        description="A catering cost calculator Dubai. Instant per-person pricing for villas, yachts, weddings and corporate events, plus private chef estimates."
        canonicalPath="/catering-cost-calculator-dubai"
        ogImage="/images/catering-dubai-hero.webp"
        schema={breadcrumbSchema(breadcrumbs) as unknown as Record<string, unknown>}
      />

      <PageHero
        eyebrow="PRICING TOOL"
        title="Catering Cost Calculator Dubai"
        subtitle="Get an instant estimate for private chef and luxury catering services based on your guest count and service style."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Cost Calculator' }]}
        minHeight="medium"
        overlay="dark"
      />

      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1000px]">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Calculator */}
            <div className="bg-cream p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="text-gold" size={28} />
                <h2 className="font-playfair text-h3 text-black">Estimate Your Event</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block font-inter text-caption font-medium uppercase tracking-wider text-gray-500 mb-3">
                    Service Style
                  </label>
                  <select
                    value={service}
                    onChange={(e) => {
                      if (!isCalculatorFormatId(e.target.value)) return
                      const next = e.target.value
                      setService(next)
                      setGuests((current) => clampGuests(next, current))
                    }}
                    className="w-full bg-white border border-gray-200 px-4 py-3.5 font-inter text-body text-black focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-caption font-medium uppercase tracking-wider text-gray-500 mb-3">
                    Number of Guests
                  </label>
                  <div className="flex items-center gap-4">
                    <Users className="text-gold" size={20} />
                    <input
                      type="number"
                      min={selectedService.minGuests}
                      value={countedGuests}
                      onChange={(e) => setGuests(clampGuests(service, Number(e.target.value)))}
                      className="flex-1 bg-white border border-gray-200 px-4 py-3.5 font-inter text-body text-black focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                  <p className="mt-2 font-inter text-body-xs text-gray-400">
                    Minimum {selectedService.minGuests} guests for this service
                  </p>
                </div>

                <div>
                  <label className="block font-inter text-caption font-medium uppercase tracking-wider text-gray-500 mb-3">
                    Service Level
                  </label>
                  <select
                    value={staffLevel}
                    onChange={(e) => {
                      if (!isStaffLevelId(e.target.value)) return
                      setStaffLevel(e.target.value)
                    }}
                    className="w-full bg-white border border-gray-200 px-4 py-3.5 font-inter text-body text-black focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  >
                    {STAFF_LEVELS.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Result */}
            <div ref={resultRef} className="bg-black p-8 md:p-10 text-center md:text-left">
              <UtensilsCrossed className="text-gold mx-auto md:mx-0 mb-6" size={32} />
              <h3 className="font-playfair text-h3 text-white mb-2">Estimated Investment</h3>
              <p className="font-inter text-body-sm text-gray-400 mb-8">
                {selectedFormat.calculatorEstimate != null
                  ? `${formatEstimate(selectedFormat.calculatorEstimate).replace(' per person', '')} for ${selectedService.label.toLowerCase()} with ${selectedStaff.label.toLowerCase()}`
                  : `${selectedService.label} is not quoted in the calculator.`}
              </p>

              {quote.ok ? (
                <>
                  <div className="mb-8">
                    <span className="font-playfair text-fluid-h2 text-gold">AED {quote.perPerson.toLocaleString()}</span>
                    <span className="font-inter text-body text-gray-400 ml-2">/ person</span>
                  </div>

                  <div className="border-t border-white/10 pt-8 mb-8">
                    <p className="font-inter text-caption uppercase tracking-wider text-gray-500 mb-2">
                      Total estimated range
                    </p>
                    <p className="font-playfair text-h2 text-white">
                      AED {quote.totalLow.toLocaleString()} – {quote.totalHigh.toLocaleString()}
                    </p>
                    <p className="font-inter text-body-xs text-gray-500 mt-2">
                      For {quote.guests} guests. {formatFrom(selectedFormat.fromPerPerson)}. {formatTypical(selectedFormat.typicalMin, selectedFormat.typicalMax)}. Final quote depends on menu, ingredients, and location.
                    </p>
                  </div>
                </>
              ) : (
                <div className="mb-8 border-t border-white/10 pt-8">
                  <p className="font-inter text-body text-white">
                    This format starts at {selectedService.minGuests} guests. Enter at least {selectedService.minGuests} to see a calculator estimate.
                  </p>
                  <p className="font-inter text-body-xs text-gray-500 mt-3">
                    {formatFrom(selectedFormat.fromPerPerson)}. {formatTypical(selectedFormat.typicalMin, selectedFormat.typicalMax)}.
                  </p>
                </div>
              )}

              <Link
                to="/inquiry"
                className="btn-primary inline-flex items-center gap-2 w-full md:w-auto justify-center"
              >
                Get My Exact Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 flex items-start gap-3 bg-gray-50 p-6">
            <Info className="text-gold flex-shrink-0 mt-0.5" size={18} />
            <p className="font-inter text-body-sm text-gray-500">
              This is a calculator estimate, not the published floor. Each format also has a “from” figure and a
              typical range, shown on the catering prices guide. Premium ingredients, custom menus, late-night service,
              dietary requirements, and venue logistics move the final price. For an exact proposal, request a quote
              and we will respond within 15 minutes during business hours.
            </p>
            <p className="font-inter text-body-sm text-gray-500">
              Estimate catering cost Dubai, catering calculator per person, small catering cost calculator Dubai, wedding catering cost calculator Dubai and birthday catering cost calculator Dubai depend on the same three things: the guest count, the menu, and how much of the work happens in front of people.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="bg-cream section-padding">
        <div className="container-custom max-w-[800px]">
          <h2 className="font-playfair text-fluid-h2 text-black text-center mb-12">
            Common Pricing Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How much does a private chef cost in Dubai?',
                a: 'Chef-led plated dining is typically AED 700–950 per person. The calculator estimate for that format is AED 950 per person before staffing. Household chef visit rates are separate, on the private chef pricing page.',
              },
              {
                q: 'Is there a minimum guest count?',
                a: 'Yes. The calculator will not total a format below its minimum: 2 guests for plated chef dining, 10 for canapés, 15 for buffet and BBQ, 8 for yacht catering, 20 for wedding catering. A standard event buffet on the catering hub starts from 20 guests.',
              },
              {
                q: 'What is included in the price?',
                a: 'Most quotes include menu design, premium ingredients, chef travel, preparation, service, and basic cleanup. Staffing, glassware, tableware, and venue rentals are quoted separately based on your needs.',
              },
              {
                q: 'Can we customize the menu?',
                a: 'Absolutely. Every menu is bespoke. We accommodate dietary requirements, cuisine preferences, and theme requests during the consultation process.',
              },
            ].map((item) => (
              <div key={item.q} className="faq-item bg-white p-6 md:p-8">
                <h3 className="font-playfair text-h4 text-black mb-3">{item.q}</h3>
                <p className="font-inter text-body text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationStrip title="Catering cost estimates for every Dubai area" />

      {/* CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-fluid-h2 text-white mb-6">
            Catering Cost Calculator Dubai: Ready for Your Exact Quote?
          </h2>
          <p className="font-inter text-body text-gray-400 max-w-[600px] mx-auto mb-10">
            Tell us about your event and we will craft a bespoke proposal tailored to your vision and budget.
          </p>
          <Link
            to="/inquiry"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get a Tailored Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
