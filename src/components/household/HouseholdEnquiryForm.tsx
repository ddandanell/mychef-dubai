import { useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { ArrowLeft, ArrowRight, Check, MessageCircle } from 'lucide-react'
import { householdBudgetOptions } from '@/content/householdChefs'
import { householdBriefFromParams, householdBriefLines } from '@/lib/householdInquiry'
import { trackConversion } from '@/lib/track'
import { trackDeliveredQuoteLead } from '@/lib/analytics'
import { adAttributionSource, getAdAttribution } from '@/lib/adAttribution'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import '@/styles/managed-household.css'

const field = 'w-full border border-gray-200 bg-white px-4 py-3 font-inter text-body-sm text-black placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'
const label = 'block font-inter text-sm font-medium text-gray-700 mb-2'
const schedules = ['Five days a week', 'Six days a week', 'Fewer days / part-time', 'Help me decide', 'Another schedule']

function internationalPhone(value: string): string {
  const compact = value.trim().replace(/[\s().-]/g, '').replace(/^00/, '+')
  return /^\+?[1-9]\d{7,14}$/.test(compact) ? `+${compact.replace(/^\+/, '')}` : ''
}

export default function HouseholdEnquiryForm({ sourcePage }: { sourcePage: string }) {
  const [params] = useSearchParams()
  const selected = householdBriefFromParams(params, sourcePage)
  const heading = useRef<HTMLHeadingElement>(null)
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [reply, setReply] = useState<'whatsapp' | 'email'>('whatsapp')
  const [home, setHome] = useState({ area: params.get('area') || '', guests: params.get('guests') || '', date: params.get('date') || '', arrangement: selected.arrangement as string, schedule: '', budget: '', preferences: '' })
  const [contact, setContact] = useState({ name: '', phone: '', email: '' })
  const source = params.get('from') || sourcePage
  const brief = [
    `Came from: ${source}`,
    `Dubai area: ${home.area || 'To discuss'}`,
    `Household: ${home.guests || 'To discuss'}`,
    `Preferred start: ${home.date || 'Flexible / to discuss'}`,
    ...householdBriefLines(params, { ...home, budgetBasis: 'Complete managed service budget' }, source),
    `Preferred reply: ${reply === 'whatsapp' ? 'WhatsApp' : 'Email'}`,
  ].join('\n')
  const whatsapp = buildWhatsAppLink(`Hi myCHEF, I would like to discuss a dedicated household chef.\n${brief}`)
  const changeStep = (next: number) => {
    setStep(next)
    requestAnimationFrame(() => { heading.current?.focus({ preventScroll: true }); heading.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) })
  }
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (step === 1) { changeStep(2); return }
    setStatus('sending')
    trackConversion('inquiry_start', 'inquiry_form')
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: 'quote_request', serviceType: 'Long-term household chef',
          name: contact.name.trim() || 'Website enquiry', email: reply === 'email' ? contact.email.trim() : '', phone: reply === 'whatsapp' ? internationalPhone(contact.phone) : '',
          eventDate: home.date, guests: home.guests, location: home.area, sourcePage: source,
          message: brief, source: adAttributionSource(source), gclid: getAdAttribution().gclid,
          utm_source: getAdAttribution().source, utm_medium: getAdAttribution().medium,
          utm_campaign: getAdAttribution().campaign, utm_content: getAdAttribution().content,
          utm_term: getAdAttribution().term,
          page: window.location.pathname + window.location.search,
        }),
      })
      if (!response.ok) throw new Error('Delivery failed')
      trackConversion('inquiry_complete', 'inquiry_form')
      trackDeliveredQuoteLead('Long-term household chef')
      setStatus('sent')
      requestAnimationFrame(() => { heading.current?.focus({ preventScroll: true }); heading.current?.scrollIntoView({ behavior: 'auto', block: 'start' }) })
    } catch { setStatus('error') }
  }

  if (status === 'sent') return <div className="mh-enquiry-success" role="status"><Check size={30} aria-hidden="true"/><h2 ref={heading} tabIndex={-1}>Your household enquiry is with myCHEF.</h2><p>We will reply by {reply === 'whatsapp' ? 'WhatsApp' : 'email'} to review your needs, budget and preferred start date.</p><ol><li>We check whether the service and timing fit.</li><li>We help you build and approve a personal household brief.</li><li>You decide whether to activate the paid search.</li></ol><p>No payment has been taken and no chef is reserved yet. You remain in control of the next step.</p><Link className="pc-link" to="/full-time-private-chef-dubai#how-it-works">Review the matching journey <ArrowRight size={16}/></Link></div>

  return <form id="household-enquiry" onSubmit={submit} onKeyDown={event => { if (step === 1 && event.key === 'Enter' && event.target instanceof HTMLInputElement) { event.preventDefault(); if (event.currentTarget.reportValidity()) changeStep(2) } }} className="mh-enquiry-form">
    <ol className="mh-enquiry-progress" aria-label="Enquiry progress"><li aria-current={step === 1 ? 'step' : undefined}>1. Your household</li><li aria-current={step === 2 ? 'step' : undefined}>2. Your reply</li></ol>
    <h2 ref={heading} tabIndex={-1}>{step === 1 ? 'Start with the essentials.' : 'Where should we get back to you?'}</h2>
    <p className="mh-enquiry-intro">{step === 1 ? 'A few details help us check the fit. We will build the personal brief with you afterwards.' : 'We will review your requirements and suggest the next step. There is no payment or booking commitment here.'}</p>
    {step === 1 ? <div className="grid sm:grid-cols-2 gap-5">
      <label><span className={label}>Where in Dubai?</span><input name="location" required className={field} autoComplete="address-level3" maxLength={150} value={home.area} onChange={e => setHome({ ...home, area: e.target.value })} placeholder="e.g. Palm Jumeirah"/></label>
      <label><span className={label}>Who are we cooking for?</span><input name="guests" required className={field} maxLength={150} value={home.guests} onChange={e => setHome({ ...home, guests: e.target.value })} placeholder="e.g. 2 adults and 2 children"/></label>
      <label><span className={label}>Your preferred cooking schedule</span><select name="householdSchedule" required className={field} value={home.schedule} onChange={e => setHome({ ...home, schedule: e.target.value })}><option value="" disabled>Choose a starting point</option>{schedules.map(option => <option key={option}>{option}</option>)}</select></label>
      <label><span className={label}>When would you like to start? <span className="font-normal text-gray-500">(optional)</span></span><input name="eventDate" className={field} maxLength={150} value={home.date} onChange={e => setHome({ ...home, date: e.target.value })} placeholder="A date, a month or flexible"/></label>
      <label><span className={label}>Living arrangement</span><select name="arrangement" className={field} value={home.arrangement} onChange={e => setHome({ ...home, arrangement: e.target.value })}><option value="help-me-choose">Help me choose</option><option value="live-in">Live-in chef</option><option value="live-out">Daily live-out chef</option></select></label>
      <label><span className={label}>Complete monthly service budget</span><select name="monthlyBudget" required className={field} value={home.budget} onChange={e => setHome({ ...home, budget: e.target.value })}><option value="" disabled>Choose a range or ask for guidance</option>{householdBudgetOptions.map(budget => <option key={budget}>{budget}</option>)}</select></label>
      <p className="mh-enquiry-price sm:col-span-2">Dedicated full-time service starts from <strong>AED 15,000/month before 5% VAT</strong>. Days, hours and responsibilities are agreed in your proposal. AED 950 Match Activation, paid trials, groceries and agreed extras are separate. Daily visits use separate rates.</p>
      {(home.budget === 'Under AED 15,000' || home.schedule === 'Fewer days / part-time') && <p className="sm:col-span-2 mh-enquiry-fit">A cooking-visit plan may suit you better. You can still ask us for guidance, or <Link to="/private-chef-dubai/pricing#calculator">explore visit prices</Link>.</p>}
      {selected.profiles.length > 0 && <p className="sm:col-span-2 mh-enquiry-fit">Your cooking-style preferences are saved with this enquiry: {selected.profiles.map(profile => profile.title).join(', ')}.</p>}
      <div className="sm:col-span-2"><button className="pc-button" type="button" onClick={event => { if (event.currentTarget.form?.reportValidity()) changeStep(2) }}>Continue to contact details <ArrowRight size={17}/></button></div>
    </div> : <div className="grid sm:grid-cols-2 gap-5">
      <div className="sm:col-span-2 mh-enquiry-recap"><p><strong>{home.area}</strong> · {home.guests}</p><p>{home.schedule} · Start: {home.date || 'Flexible'}</p><p>{home.budget}</p><button type="button" className="pc-link" onClick={() => changeStep(1)}><ArrowLeft size={15}/> Edit household details</button></div>
      <label className="sm:col-span-2"><span className={label}>Your name <span className="font-normal text-gray-500">(optional)</span></span><input name="name" className={field} autoComplete="name" maxLength={150} value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })}/></label>
      <fieldset className="sm:col-span-2"><legend className={label}>How would you like us to reply?</legend><div className="flex gap-6 py-2"><label className="inline-flex items-center gap-2"><input type="radio" name="contactBy" value="whatsapp" checked={reply === 'whatsapp'} onChange={() => setReply('whatsapp')}/> WhatsApp</label><label className="inline-flex items-center gap-2"><input type="radio" name="contactBy" value="email" checked={reply === 'email'} onChange={() => setReply('email')}/> Email</label></div></fieldset>
      {reply === 'whatsapp' ? <label className="sm:col-span-2"><span className={label}>WhatsApp number, including country code</span><input name="phone" required type="tel" autoComplete="tel" maxLength={40} className={field} value={contact.phone} onChange={e => { const value = e.target.value; e.target.setCustomValidity(value && !internationalPhone(value) ? 'Enter a phone number with country code, for example +971 50 123 4567.' : ''); setContact({ ...contact, phone: value }) }} placeholder="e.g. +971 50 123 4567"/></label> : <label className="sm:col-span-2"><span className={label}>Email address</span><input name="email" required type="email" autoComplete="email" maxLength={254} className={field} value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })}/></label>}
      <details className="sm:col-span-2 mh-enquiry-optional"><summary>Anything you would like us to know? (optional)</summary><label><span className={`${label} mt-4`}>A preference, question or unusual schedule</span><textarea name="householdPreferences" rows={3} maxLength={2000} className={field} value={home.preferences} onChange={e => setHome({ ...home, preferences: e.target.value })} placeholder="We will discuss detailed food and household requirements privately."/></label></details>
      <p className="sm:col-span-2 mh-enquiry-price">We confirm allergies, dietary needs, kitchen arrangements and the detailed role before a paid trial or cooking begins. Your first enquiry does not activate a paid search.</p>
      <div className="sm:col-span-2"><button className="pc-button" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending your enquiry…' : 'Request my household plan'} <ArrowRight size={17}/></button></div>
      {status === 'error' && <p className="sm:col-span-2 text-red-700" role="alert">We could not send your enquiry. Please try again or <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="underline">send your details on WhatsApp</a>.</p>}
    </div>}
    <p className="mh-enquiry-privacy">Your enquiry is handled privately. See our <Link to="/privacy-policy">privacy policy</Link>. Prefer a conversation? <a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={14} aria-hidden="true"/> Talk on WhatsApp</a>.</p>
  </form>
}
