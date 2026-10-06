import { useState } from 'react'
import HouseholdEnquiryForm from '@/components/household/HouseholdEnquiryForm'
import { useSearchParams } from 'react-router'
import { Mail, MessageCircle } from 'lucide-react'
import { trackConversion } from '@/lib/track'
import { trackDeliveredQuoteLead } from '@/lib/analytics'
import { CATERING_WHATSAPP_NUMBER } from '@/content/cateringCluster'
import { lastServicePage, serviceLabelFromSource } from '@/lib/inquiry'
import { householdBriefFromParams, householdBriefLines } from '@/lib/householdInquiry'
import { householdBudgetOptions } from '@/content/householdChefs'
import { cateringCalculatorBrief } from '@/lib/cateringInquiry'
import { adAttributionSource, getAdAttribution } from '@/lib/adAttribution'

const field =
  'w-full border border-gray-200 bg-white px-4 py-3 font-inter text-body-sm text-black placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

type Props = {
  sourcePage?: string
}

function StandardQuoteRequestForm({ sourcePage }: Props) {
  const [params] = useSearchParams()
  const household = householdBriefFromParams(params, sourcePage || lastServicePage() || '')
  const [householdFields, setHouseholdFields] = useState({ arrangement: household.arrangement as string, budget: '', budgetBasis: 'Complete managed service budget', duration: '', schedule: '', preferences: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [contactBy, setContactBy] = useState<'whatsapp' | 'email'>('email')
  const fromParam = params.get('from') || ''
  const remembered = lastServicePage()
  const sourcePath = sourcePage || fromParam || remembered || '/inquiry'
  const inferredServiceChoice: 'catering' | 'private-chef' | '' = /chef|meal-prep|private-chef/.test(`${fromParam} ${sourcePath}`)
    ? 'private-chef'
    : /cater|corporate|event|birthday|yacht|wedding|buffet|bbq|canape/.test(`${fromParam} ${sourcePath}`)
      ? 'catering'
      : ''
  const [serviceChoice, setServiceChoice] = useState<'catering' | 'private-chef' | ''>(inferredServiceChoice)
  const [fields, setFields] = useState({
    date: params.get('date') || '',
    guests: params.get('guests') || '',
    area: params.get('area') || '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const chef = params.get('chef')
  const serviceType = household.active ? 'Long-term household chef' : serviceLabelFromSource(fromParam || sourcePath, chef)
  const calculatorBrief = cateringCalculatorBrief(params, fields.guests)

  const update = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((current) => ({ ...current, [key]: e.target.value }))
  }

  const brief = [
    serviceType,
    serviceChoice ? `Requested service: ${serviceChoice === 'catering' ? 'Catering' : 'Private chef only'}` : '',
    `Came from: ${sourcePath}`,
    chef ? `Chef preference (subject to availability): ${chef}` : '',
    fields.date ? `${household.active ? 'Preferred start' : 'Date'}: ${fields.date}` : 'Date: flexible',
    fields.guests ? `Guests / household: ${fields.guests}` : '',
    fields.area ? `Area: ${fields.area}` : '',
    params.get('package') ? `Package: ${params.get('package')}` : '',
    params.get('extras') ? `Extras: ${params.get('extras')}` : '',
    ...calculatorBrief,
    ...householdBriefLines(params, householdFields, sourcePath),
    fields.notes.trim() ? `Notes: ${fields.notes.trim()}` : '',
    `Preferred reply: ${contactBy === 'whatsapp' ? 'WhatsApp' : 'Email'}`,
  ]
    .filter(Boolean)
    .join('\n')

  const waHref = `https://wa.me/${CATERING_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi myCHEF Dubai, I would like a quote.\n${brief}`,
  )}`

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fields.phone.trim() && !fields.email.trim()) {
      setStatus('error')
      return
    }
    setStatus('sending')
    trackConversion('inquiry_start', 'inquiry_form')
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: 'quote_request',
          name: fields.name.trim() || 'Website enquiry',
          email: fields.email.trim(),
          phone: fields.phone.trim(),
          serviceType,
          requestedService: serviceChoice === 'catering' ? 'Catering' : serviceChoice === 'private-chef' ? 'Private chef only' : '',
          eventDate: fields.date,
          guests: fields.guests,
          location: fields.area,
          chef: chef || '',
          package: params.get('package') || '',
          extras: params.get('extras') || '',
          sourcePage: sourcePath,
          message: brief,
          source: adAttributionSource(fromParam || sourcePath),
          gclid: getAdAttribution().gclid,
          utm_source: getAdAttribution().source, utm_medium: getAdAttribution().medium,
          utm_campaign: getAdAttribution().campaign, utm_content: getAdAttribution().content,
          utm_term: getAdAttribution().term,
          page: typeof window !== 'undefined' ? window.location.pathname + window.location.search : '/inquiry',
        }),
      })
      if (res.ok) {
        trackConversion('inquiry_complete', 'inquiry_form')
        trackDeliveredQuoteLead(serviceType)
        setStatus('sent')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-gray-200 bg-white p-8">
        <p className="font-playfair text-h3 text-[#1B2A4A] mb-2">Request sent</p>
        <p className="font-inter text-body text-gray-600 leading-relaxed">
          We have your brief. We typically send a first reply during business hours within 15 minutes; a written proposal follows after we confirm your requirements. We will reply by {contactBy === 'whatsapp' ? 'WhatsApp' : 'email'}.
        </p>
      </div>
    )
  }

  return (
    <form id="quote_request" onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
      {fromParam || (sourcePage && sourcePage !== '/inquiry') ? (
        <p className="sm:col-span-2 font-inter text-body-sm text-gray-600">
          Your enquiry: <span className="text-[#1B2A4A]">{serviceType}</span>. No menu decision is needed yet.
        </p>
      ) : null}
      {chef ? (
        <p className="sm:col-span-2 font-inter text-body-sm text-gray-600">
          Chef preference: {chef.replace(/-/g, ' ')}. Assignment is confirmed in the proposal, not on this form.
        </p>
      ) : null}
      {calculatorBrief.length > 0 && (
        <p className="sm:col-span-2 whitespace-pre-line font-inter text-body-sm text-gray-600">
          {calculatorBrief.join('\n')}
        </p>
      )}
      <fieldset className="sm:col-span-2">
        <legend className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-3">What do you need?</legend>
        <div className="grid sm:grid-cols-2 gap-3">
          <label className={`flex items-center gap-3 border px-4 py-4 cursor-pointer transition-colors ${serviceChoice === 'catering' ? 'border-gold bg-gold/5' : 'border-gray-200 bg-white'}`}>
            <input type="radio" name="requestedService" value="catering" required checked={serviceChoice === 'catering'} onChange={() => setServiceChoice('catering')} />
            <span className="font-inter text-body-sm text-black">Catering for an event</span>
          </label>
          <label className={`flex items-center gap-3 border px-4 py-4 cursor-pointer transition-colors ${serviceChoice === 'private-chef' ? 'border-gold bg-gold/5' : 'border-gray-200 bg-white'}`}>
            <input type="radio" name="requestedService" value="private-chef" required checked={serviceChoice === 'private-chef'} onChange={() => setServiceChoice('private-chef')} />
            <span className="font-inter text-body-sm text-black">Private chef only</span>
          </label>
        </div>
      </fieldset>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">{household.active ? 'Preferred start date' : 'Date or flexible'}</span>
        <input name="eventDate" className={field} value={fields.date} onChange={update('date')} placeholder="e.g. 3 Oct or flexible" />
      </label>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">{household.active ? 'Adults & children (ages if useful)' : 'Guests or household size'}</span>
        <input name="guests" required className={field} inputMode={household.active ? 'text' : 'numeric'} value={fields.guests} onChange={update('guests')} placeholder={household.active ? 'e.g. 4 adults and 2 children' : 'e.g. 12'} />
      </label>
      <label className="block sm:col-span-2">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Area in Dubai</span>
        <input name="location" required className={field} value={fields.area} onChange={update('area')} placeholder="e.g. Palm Jumeirah" />
      </label>
      {!household.active && (
        <label className="block sm:col-span-2">
          <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Anything else we should know? (optional)</span>
          <textarea
            name="notes"
            className={field}
            rows={4}
            maxLength={2000}
            value={fields.notes}
            onChange={(e) => setFields((current) => ({ ...current, notes: e.target.value }))}
            placeholder="Tell us about the occasion, cuisine, service style, allergies, timing, budget or anything else that will help us prepare the right proposal."
          />
        </label>
      )}
      {household.active && <>
        {household.profiles.length > 0 && <div className="sm:col-span-2 border-l-2 border-gold bg-cream p-4"><p className="font-inter text-caption uppercase tracking-wide text-gray-600 mb-2">Your selected chef styles</p><ul className="font-inter text-body-sm text-black space-y-1">{household.profiles.map(profile => <li key={profile.id}>{profile.title}</li>)}</ul><p className="font-inter text-xs text-gray-500 mt-2">We use these preferences to build your personal chef shortlist.</p></div>}
        <label className="block"><span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Living arrangement</span><select name="arrangement" className={field} value={householdFields.arrangement} onChange={e => setHouseholdFields(current => ({ ...current, arrangement: e.target.value }))}><option value="help-me-choose">Help me choose</option><option value="live-in">Live-in chef</option><option value="live-out">Daily live-out chef</option></select></label>
        <label className="block"><span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Monthly service budget</span><select name="monthlyBudget" required className={field} value={householdFields.budget} onChange={e => setHouseholdFields(current => ({ ...current, budget: e.target.value }))}><option value="" disabled>Select your monthly budget</option>{householdBudgetOptions.map(budget => <option key={budget} value={budget}>{budget}</option>)}</select></label>
        <label className="block"><span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">This budget covers</span><select name="budgetBasis" className={field} value={householdFields.budgetBasis} onChange={e => setHouseholdFields(current => ({ ...current, budgetBasis: e.target.value }))}><option>Complete managed service budget</option><option>Chef compensation only</option><option>I would like help understanding the total</option></select></label>
        <label className="block"><span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Expected length of arrangement</span><select name="householdDuration" className={field} value={householdFields.duration} onChange={e => setHouseholdFields(current => ({ ...current, duration: e.target.value }))}><option value="">To discuss</option><option>1–3 months</option><option>3–6 months</option><option>6–12 months</option><option>Ongoing</option></select></label>
        <p className="sm:col-span-2 font-inter text-xs text-gray-500 leading-relaxed">Managed Household starts from AED 15,000/month before 5% VAT. We review your budget and scope first; AED 950 Match Activation is payable only after the search is agreed. Paid trials, groceries and agreed extras are separate. For a smaller budget or schedule, we can discuss cooking visits.</p>
        <label className="block sm:col-span-2"><span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Working days, hours & meal times</span><input name="householdSchedule" required className={field} value={householdFields.schedule} maxLength={500} onChange={e => setHouseholdFields(current => ({ ...current, schedule: e.target.value }))} placeholder="e.g. Monday to Friday, 10am–7pm, lunch and dinner"/></label>
        <label className="block sm:col-span-2"><span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Food & household preferences (optional)</span><textarea name="householdPreferences" className={field} rows={4} maxLength={2000} value={householdFields.preferences} onChange={e => setHouseholdFields(current => ({ ...current, preferences: e.target.value }))} placeholder="Favourite cuisines, what food feels like home, and what would make everyday life easier. We discuss detailed dietary and household requirements privately."/></label>
      </>}
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Name (optional)</span>
        <input name="name" className={field} autoComplete="name" value={fields.name} onChange={update('name')} />
      </label>
      <fieldset className="block">
        <legend className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">How should we reply?</legend>
        <div className="flex gap-4 font-inter text-body-sm text-gray-700 pt-2">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactBy" checked={contactBy === 'email'} onChange={() => setContactBy('email')} />
            Email
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactBy" checked={contactBy === 'whatsapp'} onChange={() => setContactBy('whatsapp')} />
            WhatsApp
          </label>
        </div>
      </fieldset>
      {contactBy === 'whatsapp' ? (
        <label className="block sm:col-span-2">
          <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">WhatsApp number</span>
          <input name="phone" required className={field} type="tel" autoComplete="tel" value={fields.phone} onChange={update('phone')} />
        </label>
      ) : (
        <label className="block sm:col-span-2">
          <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Email</span>
          <input name="email" required className={field} type="email" autoComplete="email" value={fields.email} onChange={update('email')} />
        </label>
      )}
      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
        <button type="submit" disabled={status === 'sending'} className="btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-60">
          {contactBy === 'whatsapp' ? <MessageCircle size={16} aria-hidden /> : <Mail size={16} aria-hidden />}
          {status === 'sending' ? 'Sending…' : household.active ? 'Request my household consultation' : 'Send my brief'}
        </button>
        {household.active && <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-gray-300 px-5 py-3 font-inter text-sm text-black"><MessageCircle size={16} aria-hidden/>Send on WhatsApp</a>}
      </div>
      {household.active && <p className="sm:col-span-2 font-inter text-xs text-gray-500 leading-relaxed">This is an initial enquiry, with no payment taken. Your detailed Household Brief follows our suitability review. Share only what is useful at this stage. See our <a className="underline" href="/privacy-policy">privacy policy</a>.</p>}
      {status === 'error' ? (
        <p className="sm:col-span-2 font-inter text-body-sm text-red-700" role="alert">
          We could not send your brief. Check your contact details or <a href={waHref} target="_blank" rel="noopener noreferrer" className="underline">send it on WhatsApp</a> instead.
        </p>
      ) : null}
    </form>
  )
}

export default function QuoteRequestForm(props: Props) {
  const [params] = useSearchParams()
  const source = props.sourcePage || params.get('from') || lastServicePage() || '/inquiry'
  return householdBriefFromParams(params, source).active
    ? <HouseholdEnquiryForm sourcePage={source}/>
    : <StandardQuoteRequestForm {...props}/>
}
