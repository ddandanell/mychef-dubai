import { useState } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { computeQuote, type QuoteInput } from '@/content/privateChefPricing'
import { planText } from './planText'

const WA = '971551744849'
const field = 'w-full border border-gray-200 bg-white px-4 py-3 font-inter text-body-sm text-black placeholder:text-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30'

/** Lead capture AFTER the price. Receives the live plan from the calculator (single state owner). */
export default function PlanForm({ input }: { input: QuoteInput }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fields, setFields] = useState({ first: '', last: '', email: '', whatsapp: '', area: '', start: '' })
  const update = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) => setFields((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const quote = computeQuote(input)
    const name = `${fields.first} ${fields.last}`.trim()
    const message = planText(input, quote, { name, area: fields.area, start: fields.start })
    setStatus('sending')
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: 'private-chef-plan', name, email: fields.email, phone: fields.whatsapp, serviceType: 'Private Chef — household plan', eventDate: fields.start || input.startDate || '', guests: input.guests, location: fields.area, message, source: 'pricing-calculator', page: '/private-chef-dubai/pricing' }),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch { setStatus('error') }
  }

  const waHref = () => {
    const text = planText(input, computeQuote(input), { name: `${fields.first} ${fields.last}`.trim(), area: fields.area, start: fields.start })
    return `https://wa.me/${WA}?text=${encodeURIComponent(`Hi myCHEF, please confirm this plan:\n\n${text}`)}`
  }

  if (status === 'sent') {
    return (
      <div className="border border-gold/40 bg-cream p-8 text-center">
        <p className="font-playfair text-h3 text-black mb-2">Plan received.</p>
        <p className="font-inter text-body text-gray-600">A coordinator reads it, checks chef availability for your days, and comes back with the figure in writing — typically within 15 minutes during business hours.</p>
      </div>
    )
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input required className={field} placeholder="First name" autoComplete="given-name" value={fields.first} onChange={update('first')} />
      <input required className={field} placeholder="Last name" autoComplete="family-name" value={fields.last} onChange={update('last')} />
      <input required type="email" className={field} placeholder="Email" autoComplete="email" value={fields.email} onChange={update('email')} />
      <input required type="tel" className={field} placeholder="WhatsApp number" autoComplete="tel" value={fields.whatsapp} onChange={update('whatsapp')} />
      <input className={field} placeholder="Area in Dubai" value={fields.area} onChange={update('area')} />
      <input type="date" className={field} aria-label="Preferred start date" value={fields.start} onChange={update('start')} />
      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 pt-2">
        <button type="submit" disabled={status === 'sending'} className="hero-btn--quiet hero-btn--quiet-primary justify-center disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send My Plan to myCHEF'} <ArrowRight size={15} className="ml-2" />
        </button>
        <a href={waHref()} target="_blank" rel="noopener noreferrer" className="hero-btn--quiet hero-btn--quiet-secondary justify-center !text-black !border-gold/60"><MessageCircle size={15} className="mr-2" />Send via WhatsApp instead</a>
      </div>
      {status === 'error' ? <p className="sm:col-span-2 font-inter text-body-sm text-red-600">We could not send that just now. Use the WhatsApp button — the plan is already written into the message.</p> : null}
      <p className="sm:col-span-2 font-inter text-caption text-gray-400">Your duration, days, service, chef level, guests, assistants, groceries and estimate are attached automatically.</p>
    </form>
  )
}
