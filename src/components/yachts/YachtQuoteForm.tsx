import { useState } from 'react'
import { trackConversion } from '@/lib/track'
import { CATERING_WHATSAPP_NUMBER } from '@/content/cateringCluster'
import { YACHT_GUEST_MAX, YACHT_GUEST_MIN } from '@/content/yachtCateringQuote'
import { YACHT_FORM_STYLES, YACHT_OCCASIONS, yachtQuoteWhatsApp, type YachtFormStyleId } from '@/content/yachtPage'

export type YachtQuotePrefill = {
  style?: YachtFormStyleId | ''
  guests?: string
  estimate?: string
  occasion?: string
}

function isYachtFormStyleId(value: string): value is YachtFormStyleId {
  return YACHT_FORM_STYLES.some((item) => item.id === value)
}

type Props = {
  prefill: YachtQuotePrefill
}

const field =
  'w-full border border-gray-200 bg-white px-4 py-3 font-inter text-body-sm text-black placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

export default function YachtQuoteForm({ prefill }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fields, setFields] = useState({
    date: '',
    guests: prefill.guests || '',
    marina: '',
    occasion: prefill.occasion || '',
    style: (prefill.style || 'not-sure') as YachtFormStyleId,
    yacht: '',
    name: '',
    phone: '',
    email: '',
  })
  const [appliedPrefill, setAppliedPrefill] = useState({
    style: prefill.style || '',
    guests: prefill.guests || '',
    occasion: prefill.occasion || '',
  })
  if (
    (prefill.style || '') !== appliedPrefill.style ||
    (prefill.guests || '') !== appliedPrefill.guests ||
    (prefill.occasion || '') !== appliedPrefill.occasion
  ) {
    setAppliedPrefill({
      style: prefill.style || '',
      guests: prefill.guests || '',
      occasion: prefill.occasion || '',
    })
    setFields((current) => ({
      ...current,
      ...(prefill.style ? { style: prefill.style } : {}),
      ...(prefill.guests ? { guests: prefill.guests } : {}),
      ...(prefill.occasion ? { occasion: prefill.occasion } : {}),
    }))
  }

  const update = (key: Exclude<keyof typeof fields, 'style'>) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFields((current) => ({ ...current, [key]: e.target.value }))
  }

  const updateStyle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const style = e.target.value
    if (!isYachtFormStyleId(style)) return
    setFields((current) => ({ ...current, style }))
  }

  const styleLabel = YACHT_FORM_STYLES.find((item) => item.id === fields.style)?.label || fields.style

  const waHref = `https://wa.me/${CATERING_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    yachtQuoteWhatsApp({
      date: fields.date,
      guests: fields.guests,
      marina: fields.marina,
      occasion: fields.occasion,
      style: styleLabel,
      yacht: fields.yacht,
      estimate: prefill.estimate,
    }),
  )}`

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    trackConversion('inquiry_start', 'inquiry_form')
    const message = [
      'Yacht catering enquiry',
      `Date: ${fields.date}`,
      `Guests: ${fields.guests}`,
      `Marina: ${fields.marina}`,
      fields.occasion ? `Occasion: ${fields.occasion}` : '',
      `Service style: ${styleLabel}`,
      fields.yacht ? `Yacht: ${fields.yacht}` : '',
      prefill.estimate ? `Indicative estimate: ${prefill.estimate}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formId: 'yacht-quote-form',
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          serviceType: `Yacht catering — ${styleLabel}`,
          eventDate: fields.date,
          guests: fields.guests,
          location: fields.marina,
          message,
          source: 'yacht-page',
          page: '/yachts',
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
      <div className="border border-gold/40 bg-white p-8" role="status">
        <p tabIndex={-1} className="font-playfair text-h3 text-[#1B2A4A] mb-2">
          Brief received.
        </p>
        <p className="font-inter text-body text-gray-600 leading-relaxed">
          A coordinator reads it and comes back with a written proposal — typically within 15 minutes during business hours.
        </p>
      </div>
    )
  }

  return (
    <form id="yacht-quote-form" onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" data-placement="inquiry_form">
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Charter date</span>
        <input required type="date" className={field} value={fields.date} onChange={update('date')} />
      </label>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Guest count</span>
        <input
          required
          type="number"
          min={YACHT_GUEST_MIN}
          max={YACHT_GUEST_MAX}
          className={field}
          value={fields.guests}
          onChange={update('guests')}
        />
      </label>
      <label className="block sm:col-span-2">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">
          Boarding marina / location
        </span>
        <input
          required
          className={field}
          placeholder="Dubai Marina, Harbour, Palm, JBR…"
          value={fields.marina}
          onChange={update('marina')}
        />
      </label>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">
          Type of event (optional)
        </span>
        <select className={field} value={fields.occasion} onChange={update('occasion')}>
          <option value="">Not sure yet</option>
          {YACHT_OCCASIONS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Service style</span>
        <select
          id="yacht-quote-style"
          required
          className={field}
          value={fields.style}
          onChange={updateStyle}
        >
          {YACHT_FORM_STYLES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block sm:col-span-2">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">
          Yacht name or size (optional)
        </span>
        <input className={field} value={fields.yacht} onChange={update('yacht')} />
      </label>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Name</span>
        <input required className={field} autoComplete="name" value={fields.name} onChange={update('name')} />
      </label>
      <label className="block">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">WhatsApp / phone</span>
        <input required type="tel" className={field} autoComplete="tel" value={fields.phone} onChange={update('phone')} />
      </label>
      <label className="block sm:col-span-2">
        <span className="block font-inter text-caption uppercase tracking-[0.1em] text-gray-500 mb-2">Email</span>
        <input required type="email" className={field} autoComplete="email" value={fields.email} onChange={update('email')} />
      </label>
      {prefill.estimate ? (
        <p className="sm:col-span-2 font-inter text-body-sm text-gray-600">
          Indicative estimate attached: {prefill.estimate}
        </p>
      ) : null}
      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
        <button type="submit" disabled={status === 'sending'} className="btn-primary justify-center disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Get a Yacht Catering Quote'}
        </button>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-center !text-[#1B2A4A] !border-[#1B2A4A]/25"
        >
          WhatsApp myCHEF
        </a>
      </div>
      {status === 'error' ? (
        <p className="sm:col-span-2 font-inter text-body-sm text-red-700" role="alert">
          We could not send that just now. Use WhatsApp — the brief is already in the message.
        </p>
      ) : null}
    </form>
  )
}
