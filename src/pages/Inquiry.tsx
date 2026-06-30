import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Phone, Mail, MapPin, Loader2, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '@/components/SEO'
import TrustBar from '@/components/TrustBar'
import { breadcrumbSchema } from '@/utils/schema'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I\'d like to request a quote')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Request a Quote', path: '/inquiry' },
]

const serviceTypes = [
  'Private Chef — Dinner Party',
  'Private Chef — Weekly/Regular',
  'Catering — Buffet',
  'Catering — Plated Dinner',
  'Catering — Canapes & Cocktails',
  'Catering — BBQ',
  'Luxury Dining Experience',
  'Corporate Event',
  'Yacht Catering',
  'Villa Chef',
  'Other',
]

const dietaryOptions = [
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Halal',
  'Kosher',
  'Nut Allergies',
  'Other',
]

const additionalServices = [
  'Waiter',
  'Bartender',
  'Sommelier',
  'Butler',
  'Table Setting',
  'Cleanup',
]

const dubaiAreas = [
  'Palm Jumeirah',
  'Downtown Dubai',
  'Dubai Marina',
  'Emirates Hills',
  'JBR (Jumeirah Beach Residence)',
  'DIFC',
  'Jumeirah',
  'Business Bay',
  'Dubai Hills',
  'Arabian Ranches',
  'Al Barari',
  'Bluewaters Island',
  'Dubai Creek Harbour',
  'Jumeirah Islands',
  'The Lakes',
  'Meadows',
  'Springs',
  'Victory Heights',
  'Other / Not Listed',
]

const steps = [
  { number: 1, label: 'Event Details' },
  { number: 2, label: 'Contact Info' },
  { number: 3, label: 'Preferences' },
]

const stepFields: Record<number, string[]> = {
  1: ['serviceType', 'eventDate', 'numGuests', 'location'],
  2: ['fullName', 'email', 'whatsapp'],
  3: [],
}

type FormErrors = Partial<Record<string, string>>

export default function Inquiry() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    serviceType: '',
    eventDate: '',
    numGuests: '',
    location: '',
    cuisinePreferences: '',
    dietaryRestrictions: [] as string[],
    additionalServices: [] as string[],
    specialRequests: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubRef = useRef<HTMLParagraphElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const altContactRef = useRef<HTMLDivElement>(null)

  const validateField = (name: string, value: string | string[]): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) return 'Please enter your full name (at least 2 characters)'
        break
      case 'email':
        if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)) return 'Please enter a valid email address'
        break
      case 'whatsapp':
        if (!value || (typeof value === 'string' && value.trim().length < 7)) return 'Please enter a valid phone number'
        break
      case 'eventDate':
        if (!value) return 'Please select an event date'
        break
      case 'location':
        if (!value || value === '') return 'Please select a location area'
        break
      case 'numGuests':
        if (!value || Number(value) < 1) return 'Please enter the number of guests'
        break
      case 'serviceType':
        if (!value || value === '') return 'Please select a service type'
        break
    }
    return undefined
  }

  const validateStep = (step: number): FormErrors => {
    const newErrors: FormErrors = {}
    stepFields[step].forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData] as string)
      if (error) newErrors[field] = error
    })
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleCheckboxChange = (name: 'dietaryRestrictions' | 'additionalServices', value: string) => {
    setFormData((prev) => {
      const current = prev[name]
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
      return { ...prev, [name]: updated }
    })
  }

  const handleNext = () => {
    const stepErrors = validateStep(currentStep)
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      return
    }
    setErrors({})
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const handleBack = () => {
    setErrors({})
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: FormErrors = {}
    Object.values(stepFields).flat().forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData] as string)
      if (error) newErrors[field] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Jump to the first step with errors
      const firstErrorStep = (Object.keys(newErrors)[0] ?
        Object.entries(stepFields).find(([, fields]) => fields.includes(Object.keys(newErrors)[0]))?.[0]
        : undefined)
      if (firstErrorStep) setCurrentStep(Number(firstErrorStep))
      return
    }

    setIsSubmitting(true)
    const lines = [
      'New quote request — myCHEF Dubai',
      '',
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `WhatsApp: ${formData.whatsapp}`,
      `Service: ${formData.serviceType}`,
      `Event date: ${formData.eventDate}`,
      `Guests: ${formData.numGuests}`,
      `Location: ${formData.location}`,
      formData.cuisinePreferences ? `Cuisine: ${formData.cuisinePreferences}` : '',
      formData.dietaryRestrictions.length ? `Dietary: ${formData.dietaryRestrictions.join(', ')}` : '',
      formData.additionalServices.length ? `Add-ons: ${formData.additionalServices.join(', ')}` : '',
      formData.specialRequests ? `Notes: ${formData.specialRequests}` : '',
    ].filter(Boolean)
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(waUrl, '_blank')
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 800)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      if (formRef.current) {
        gsap.fromTo(formRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: formRef.current, start: 'top 80%' } }
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

  if (isSubmitted) {
    return (
      <>
        <SEO
          title="Quote Requested | myCHEF Dubai"
          description="Thank you for requesting a quote. We will respond within 2 hours with a bespoke proposal tailored to your event."
          canonicalPath="/inquiry"
          noindex
        />
        <div className="min-h-[60vh] flex items-center justify-center bg-cream">
          <div className="container-custom max-w-[600px] text-center py-20">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-gold" />
            </div>
            <h2 className="font-playfair text-h2 text-black mb-4">
              Thank You!
            </h2>
            <p className="font-inter text-body text-gray-500 mb-4">
              We have received your request and will craft a bespoke proposal within 2 hours.
            </p>
            <p className="font-inter text-body-sm text-gray-500 mb-8">
              In the meantime, feel free to reach out on WhatsApp for immediate questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone size={16} />
                Chat on WhatsApp
              </a>
              <Link to="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO
        title="Request a Quote | Private Chef & Catering Dubai | myCHEF Dubai"
        description="Request a custom quote for private chef services or luxury catering in Dubai. We respond within 2 hours with a bespoke proposal tailored to your event."
        canonicalPath="/inquiry"
        schema={breadcrumbSchema(breadcrumbs) as unknown as Record<string, unknown>}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-black border-b border-charcoal-light">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 font-inter text-caption text-gray-500">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
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
            className="font-playfair text-h1 md:text-[56px] text-white mb-6"
          >
            <span className="word inline-block">Your</span>{' '}
            <span className="word inline-block">Quote</span>
            <br className="hidden sm:block" />
            <span className="word inline-block">in</span>{' '}
            <span className="word inline-block">3</span>{' '}
            <span className="word inline-block">Simple</span>{' '}
            <span className="word inline-block">Steps</span>
          </h1>
          <p ref={heroSubRef} className="font-inter text-lg text-gray-400 max-w-[600px] mx-auto">
            Complete our short multi-step quote form and we will craft a bespoke proposal within 2 hours.
          </p>
        </div>
      </section>

      {/* Section 2: Quote Request Form */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-16">
            {/* Left Column — Form */}
            <div ref={formRef}>
              <h2 className="font-playfair text-[32px] text-black mb-2">
                Tell Us About Your Event
              </h2>
              <p className="font-inter text-body-sm text-gray-500 mb-8">
                Step {currentStep} of 3 — {steps[currentStep - 1].label}
              </p>

              {/* Step Indicator */}
              <div className="relative mb-10">
                {/* Background track */}
                <div className="absolute top-4 left-0 w-full h-[2px] bg-charcoal-light" />
                {/* Active progress fill */}
                <div
                  className="absolute top-4 left-0 h-[2px] bg-gold transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />
                <div className="relative flex justify-between">
                  {steps.map((step) => {
                    const isCompleted = currentStep > step.number
                    const isActive = currentStep === step.number
                    return (
                      <div key={step.number} className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-200 ${
                            isActive || isCompleted
                              ? 'bg-gold border-gold'
                              : 'bg-white border-charcoal-light'
                          }`}
                        >
                          {isCompleted ? (
                            <Check size={16} className="text-black" />
                          ) : (
                            <span
                              className={`font-inter text-sm font-medium ${
                                isActive ? 'text-black' : 'text-gray-500'
                              }`}
                            >
                              {step.number}
                            </span>
                          )}
                        </div>
                        <span
                          className={`font-inter text-caption mt-2 hidden sm:block ${
                            isActive || isCompleted ? 'text-black' : 'text-gray-500'
                          }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Step 1: Event Details */}
                {currentStep === 1 && (
                  <div className="flex flex-col gap-5">
                    <h3 className="font-playfair text-[24px] text-black mb-2">
                      Event Details
                    </h3>

                    {/* Service Type */}
                    <div>
                      <label htmlFor="serviceType" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Type of Service *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full bg-charcoal border px-4 py-3.5 font-inter text-body text-white outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)] appearance-none cursor-pointer ${
                          errors.serviceType ? 'border-red-500' : 'border-charcoal-light'
                        } ${!formData.serviceType ? 'text-gray-500' : 'text-white'}`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C8A45C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="" disabled>Select a service type</option>
                        {serviceTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="font-inter text-xs text-red-500 mt-1">{errors.serviceType}</p>
                      )}
                    </div>

                    {/* Event Date */}
                    <div>
                      <label htmlFor="eventDate" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full bg-charcoal border px-4 py-3.5 font-inter text-body text-white outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)] ${
                          errors.eventDate ? 'border-red-500' : 'border-charcoal-light'
                        }`}
                      />
                      {errors.eventDate && (
                        <p className="font-inter text-xs text-red-500 mt-1">{errors.eventDate}</p>
                      )}
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label htmlFor="numGuests" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Number of Guests *
                      </label>
                      <input
                        type="number"
                        id="numGuests"
                        name="numGuests"
                        placeholder="Approximate number of guests"
                        min="1"
                        value={formData.numGuests}
                        onChange={handleChange}
                        className={`w-full bg-charcoal border px-4 py-3.5 font-inter text-body text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)] ${
                          errors.numGuests ? 'border-red-500' : 'border-charcoal-light'
                        }`}
                      />
                      {errors.numGuests && (
                        <p className="font-inter text-xs text-red-500 mt-1">{errors.numGuests}</p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Event Location/Area *
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full bg-charcoal border px-4 py-3.5 font-inter text-body text-white outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)] appearance-none cursor-pointer ${
                          errors.location ? 'border-red-500' : 'border-charcoal-light'
                        } ${!formData.location ? 'text-gray-500' : 'text-white'}`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23C8A45C' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                      >
                        <option value="" disabled>Select your area in Dubai</option>
                        {dubaiAreas.map((area) => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                      {errors.location && (
                        <p className="font-inter text-xs text-red-500 mt-1">{errors.location}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Info */}
                {currentStep === 2 && (
                  <div className="flex flex-col gap-5">
                    <h3 className="font-playfair text-[24px] text-black mb-2">
                      Contact Information
                    </h3>

                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full bg-charcoal border px-4 py-3.5 font-inter text-body text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)] ${
                          errors.fullName ? 'border-red-500' : 'border-charcoal-light'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="font-inter text-xs text-red-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-charcoal border px-4 py-3.5 font-inter text-body text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)] ${
                          errors.email ? 'border-red-500' : 'border-charcoal-light'
                        }`}
                      />
                      {errors.email && (
                        <p className="font-inter text-xs text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label htmlFor="whatsapp" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className={`w-full bg-charcoal border px-4 py-3.5 font-inter text-body text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)] ${
                          errors.whatsapp ? 'border-red-500' : 'border-charcoal-light'
                        }`}
                      />
                      {errors.whatsapp && (
                        <p className="font-inter text-xs text-red-500 mt-1">{errors.whatsapp}</p>
                      )}
                      <p className="font-inter text-xs text-gray-500 mt-1">
                        We will contact you via WhatsApp for faster communication.
                      </p>
                    </div>
                  </div>
                )}

                {/* Step 3: Preferences & Submit */}
                {currentStep === 3 && (
                  <div className="flex flex-col gap-5">
                    <h3 className="font-playfair text-[24px] text-black mb-2">
                      Preferences & Special Requests
                    </h3>

                    {/* Cuisine Preferences */}
                    <div>
                      <label htmlFor="cuisinePreferences" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Cuisine Preferences <span className="text-gray-500 normal-case tracking-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="cuisinePreferences"
                        name="cuisinePreferences"
                        placeholder="e.g., Mediterranean, Asian Fusion, French..."
                        value={formData.cuisinePreferences}
                        onChange={handleChange}
                        className="w-full bg-charcoal border border-charcoal-light px-4 py-3.5 font-inter text-body text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)]"
                      />
                    </div>

                    {/* Dietary Restrictions */}
                    <div>
                      <label className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-3 block">
                        Dietary Restrictions <span className="text-gray-500 normal-case tracking-normal">(optional)</span>
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {dietaryOptions.map((option) => (
                          <label
                            key={option}
                            className={`inline-flex items-center gap-2 border px-4 py-2 font-inter text-body-sm cursor-pointer transition-all duration-200 select-none ${
                              formData.dietaryRestrictions.includes(option)
                                ? 'border-gold bg-gold/10 text-black'
                                : 'border-charcoal-light bg-charcoal text-gray-400 hover:border-gold/50'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={formData.dietaryRestrictions.includes(option)}
                              onChange={() => handleCheckboxChange('dietaryRestrictions', option)}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div>
                      <label className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-3 block">
                        Additional Services <span className="text-gray-500 normal-case tracking-normal">(optional)</span>
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {additionalServices.map((service) => (
                          <label
                            key={service}
                            className={`inline-flex items-center gap-2 border px-4 py-2 font-inter text-body-sm cursor-pointer transition-all duration-200 select-none ${
                              formData.additionalServices.includes(service)
                                ? 'border-gold bg-gold/10 text-black'
                                : 'border-charcoal-light bg-charcoal text-gray-400 hover:border-gold/50'
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={formData.additionalServices.includes(service)}
                              onChange={() => handleCheckboxChange('additionalServices', service)}
                            />
                            {service}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label htmlFor="specialRequests" className="font-inter text-caption font-medium uppercase tracking-wider text-black mb-2 block">
                        Special Requests <span className="text-gray-500 normal-case tracking-normal">(optional)</span>
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows={4}
                        placeholder="Share any details about your vision, occasion, or special requests..."
                        value={formData.specialRequests}
                        onChange={handleChange}
                        className="w-full bg-charcoal border border-charcoal-light px-4 py-3.5 font-inter text-body text-white placeholder-gray-500 outline-none transition-all duration-200 focus:border-gold focus:shadow-[0_0_0_2px_rgba(200,164,92,0.2)] resize-none"
                      />
                    </div>

                    {/* Review Summary */}
                    <div className="bg-cream border border-gold/20 p-5 mt-2">
                      <h4 className="font-playfair text-[20px] text-black mb-4">
                        Review Your Request
                      </h4>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-inter text-body-sm">
                        <div>
                          <dt className="text-gray-500">Service</dt>
                          <dd className="text-black">{formData.serviceType || '—'}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Event Date</dt>
                          <dd className="text-black">{formData.eventDate || '—'}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Guests</dt>
                          <dd className="text-black">{formData.numGuests || '—'}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Location</dt>
                          <dd className="text-black">{formData.location || '—'}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Name</dt>
                          <dd className="text-black">{formData.fullName || '—'}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Email</dt>
                          <dd className="text-black">{formData.email || '—'}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">WhatsApp</dt>
                          <dd className="text-black">{formData.whatsapp || '—'}</dd>
                        </div>
                        <div>
                          <dt className="text-gray-500">Cuisine</dt>
                          <dd className="text-black">{formData.cuisinePreferences || '—'}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-gray-500">Dietary Restrictions</dt>
                          <dd className="text-black">{formData.dietaryRestrictions.length ? formData.dietaryRestrictions.join(', ') : '—'}</dd>
                        </div>
                        <div className="sm:col-span-2">
                          <dt className="text-gray-500">Additional Services</dt>
                          <dd className="text-black">{formData.additionalServices.length ? formData.additionalServices.join(', ') : '—'}</dd>
                        </div>
                        {formData.specialRequests && (
                          <div className="sm:col-span-2">
                            <dt className="text-gray-500">Special Requests</dt>
                            <dd className="text-black">{formData.specialRequests}</dd>
                          </div>
                        )}
                      </dl>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex flex-col-reverse sm:flex-row gap-4 mt-2">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2"
                    >
                      <ChevronLeft size={16} />
                      Back
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary w-full sm:w-auto sm:ml-auto inline-flex items-center justify-center gap-2"
                    >
                      Next
                      <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full sm:w-auto sm:ml-auto disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Request My Custom Quote'
                      )}
                    </button>
                  )}
                </div>

                {/* General error */}
                {Object.keys(errors).length > 0 && (
                  <p className="font-inter text-xs text-red-500 text-center">
                    Please fix the errors above and try again.
                  </p>
                )}
              </form>
            </div>

            {/* Right Column — Trust Sidebar */}
            <div ref={sidebarRef}>
              <div className="bg-black p-8 lg:sticky lg:top-[100px]">
                <h3 className="font-playfair text-[24px] text-white mb-8">
                  What Happens Next?
                </h3>

                {/* Steps */}
                <div className="flex flex-col gap-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="font-inter text-sm font-medium text-black">1</span>
                    </div>
                    <div>
                      <h4 className="font-inter text-body-sm font-medium text-white mb-1">
                        We Review Your Request
                      </h4>
                      <p className="font-inter text-body-sm text-gray-400">
                        Within 2 hours, our team reviews your details.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="font-inter text-sm font-medium text-black">2</span>
                    </div>
                    <div>
                      <h4 className="font-inter text-body-sm font-medium text-white mb-1">
                        We Create Your Proposal
                      </h4>
                      <p className="font-inter text-body-sm text-gray-400">
                        A bespoke menu and quote tailored to your event.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                      <span className="font-inter text-sm font-medium text-black">3</span>
                    </div>
                    <div>
                      <h4 className="font-inter text-body-sm font-medium text-white mb-1">
                        You Confirm & Relax
                      </h4>
                      <p className="font-inter text-body-sm text-gray-400">
                        Once confirmed, we handle everything else.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-charcoal-light my-8" />

                {/* Trust Badges */}
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    'Response within 2 hours',
                    'No obligation quote',
                    'Fully insured service',
                    'Discreet & professional',
                  ].map((badge) => (
                    <div key={badge} className="flex items-center gap-3">
                      <Check size={16} className="text-gold flex-shrink-0" />
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
          <h3 className="font-playfair text-[24px] text-black mb-4">
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
            className="btn-primary inline-flex items-center gap-2 mb-6"
          >
            <Phone size={16} />
            Chat on WhatsApp
          </a>

          {/* Other contacts */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+971551744849"
              className="flex items-center gap-2 font-inter text-body-sm text-gray-500 hover:text-gold transition-colors"
            >
              <Phone size={16} className="text-gold" />
              +971 55 174 4849
            </a>
            <a
              href="mailto:hallo@mychef.ae"
              className="flex items-center gap-2 font-inter text-body-sm text-gray-500 hover:text-gold transition-colors"
            >
              <Mail size={16} className="text-gold" />
              hallo@mychef.ae
            </a>
            <span className="flex items-center gap-2 font-inter text-body-sm text-gray-500">
              <MapPin size={16} className="text-gold" />
              Dubai, UAE
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
