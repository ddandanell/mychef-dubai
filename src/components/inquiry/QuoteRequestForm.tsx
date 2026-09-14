import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { Mail, MessageCircle } from 'lucide-react'
import { trackConversion } from '@/lib/track'
import { CATERING_WHATSAPP_NUMBER } from '@/content/cateringCluster'

const field =
  'w-full border border-gray-200 bg-white px-4 py-3 font-inter text-body-sm text-black placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

function serviceFromParams(params: URLSearchParams): string {
  const from = params.get('from') || ''
  const chef = params.get('chef')
  if (chef) return `Chef preference: ${chef.replace(/-/g, ' ')}`
  if (from === 'birthday' || from === 'birthday-private') return 'Birthday catering'
  if (from === 'yachts') return 'Yacht catering'
  if (from === 'corporate') return 'Corporate catering'
  if (from === 'chef') return 'Private chef'
  return 'Private chef or catering'
}

export default function QuoteRequestForm() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [contactBy, setContactBy] = useState<'whatsapp' | 'email'>('whatsapp')
  const [fields, setFields] = useState({
    date: params.get('date') || '',
    guests: params.get('guests') || '',
    area: params.get('area') || '',
    name: '',
    phone: '',
    email: '',
  })

  const serviceType = serviceFromParams(params)
  const chef = params.get('chef')

  const update = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((current) => ({ ...current, [key]: e.target.value }))
  }

  const brief = [
    serviceType,
    chef ? `Chef preference (subject to availability): ${chef}` : '',
    fields.date ? `Date: ${fields.date}` : 'Date: flexible',
    fields.guests ? `Guests / household: ${fields.guests}` : '',
    fields.area ? `Area: ${fields.area}` : '',
    params.get('package') ? `Package: ${params.get('package')}` : '',
    params.get('extras') ? `Extras: ${params.get('extras')}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  const waHref = `https://wa.me/${CATERING_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi myCHEF Dubai, I would like a quote.\n${brief}`,
  )}`

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (contactBy === 'whatsapp') {
      trackConversion('inquiry_start', 'inquiry_form')
      window.open(waHref, '_blank', 'noopener,noreferrer')
      setStatus('sent')
      return
    }
    if (!fields.email.trim()) {
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
          phone: fields.phone.trim() || 'not given',
          serviceType,
          eventDate: fields.date,
          guests: fields.guests,
          location: fields.area,
          message: brief,
          source: params.get('from') || 'inquiry',
          page: typeof window !== 'undefined' ? window.location.pathname + window.location.search : '/inquiry',
        }),
      })
      if (res.ok) {
        trackConversion('inquiry_complete', 'inquiry_form')
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
          A coordinator reads it and comes back with a written proposal, typically within 15 minutes during business hours. If you chose WhatsApp, finish sending the draft in the chat window.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
      {chef ? (
        <p className="sm:col-span-2 font-inter text-body-sm text-gray-600">
          Chef preference: {chef.replace(/-/g, ' ')}. Assignment is confirmed in the proposal, not on this form.
        </p>
      ) : null}
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Date or flexible</span>
        <input className={field} value={fields.date} onChange={update('date')} placeholder="e.g. 3 Oct or flexible" />
      </label>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Guests or household size</span>
        <input required className={field} inputMode="numeric" value={fields.guests} onChange={update('guests')} placeholder="e.g. 12" />
      </label>
      <label className="block sm:col-span-2">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Area in Dubai</span>
        <input required className={field} value={fields.area} onChange={update('area')} placeholder="e.g. Palm Jumeirah" />
      </label>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Name (optional)</span>
        <input className={field} autoComplete="name" value={fields.name} onChange={update('name')} />
      </label>
      <fieldset className="block">
        <legend className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">How should we reply?</legend>
        <div className="flex gap-4 font-inter text-body-sm text-gray-700 pt-2">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactBy" checked={contactBy === 'whatsapp'} onChange={() => setContactBy('whatsapp')} />
            WhatsApp
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="contactBy" checked={contactBy === 'email'} onChange={() => setContactBy('email')} />
            Email
          </label>
        </div>
      </fieldset>
      {contactBy === 'whatsapp' ? (
        <label className="block sm:col-span-2">
          <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">WhatsApp number (optional)</span>
          <input className={field} type="tel" autoComplete="tel" value={fields.phone} onChange={update('phone')} />
        </label>
      ) : (
        <label className="block sm:col-span-2">
          <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Email</span>
          <input required className={field} type="email" autoComplete="email" value={fields.email} onChange={update('email')} />
        </label>
      )}
      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
        <button type="submit" disabled={status === 'sending'} className="btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-60">
          {contactBy === 'whatsapp' ? <MessageCircle size={16} aria-hidden /> : <Mail size={16} aria-hidden />}
          {status === 'sending' ? 'Sending…' : contactBy === 'whatsapp' ? 'Send on WhatsApp' : 'Send by email'}
        </button>
      </div>
      {status === 'error' ? (
        <p className="sm:col-span-2 font-inter text-body-sm text-red-700" role="alert">
          We could not send that just now. Use WhatsApp — the brief is ready in the button above.
        </p>
      ) : null}
    </form>
  )
}
