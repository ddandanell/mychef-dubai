import { Check, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fmt, MEMBER_NOTE, type Quote, type QuoteInput } from '@/content/privateChefPricing'
import type { Feedback } from './feedback'

interface PlanSummaryProps {
  input: QuoteInput
  quote: Quote
  feedback: Feedback | null
  whatsappHref: string
  variant?: 'card' | 'sheet'
}
function AmountRow({ value, label, strong = false }: { value: number; label: string; strong?: boolean }) {
  return <div className="flex items-baseline justify-between gap-3">
    <span className={cn('font-inter text-body-sm', strong ? 'text-gold-ink' : 'text-gray-600')}>{label}</span>
    <span className={cn('whitespace-nowrap font-playfair tabular-nums', strong ? 'text-h3 text-gold-ink' : 'text-body-lg text-gray-700')}>{fmt(value)}</span>
  </div>
}
export default function PlanSummary({ input, quote, feedback, whatsappHref, variant = 'card' }: PlanSummaryProps) {
  const sheet = variant === 'sheet'
  const padding = sheet ? 'px-5 py-5' : 'p-6 lg:p-7'
  const period = quote.shortStay ? 'booking' : 'four weeks'
  const facts = [
    `${quote.servicesTotal} visit${quote.servicesTotal === 1 ? '' : 's'} in this ${quote.shortStay ? 'booking' : 'four-week estimate'}`,
    quote.groceryManaged ? 'Shopping time included; ingredients separate' : 'You buy ingredients from your chef’s shopping list',
    'Groceries at actual cost, no markup',
    quote.customStaffing ? '40+ people: team and price need a custom review' : quote.assistants ? `${quote.assistants} assistant${quote.assistants > 1 ? 's' : ''} included in the service fee below` : 'Chef fee covers up to eight people',
  ]
  return <aside className={cn('bg-white border-t-2 border-t-gold', sheet ? '' : 'border border-gray-200')} aria-live="polite" data-testid="chef-plan-summary">
    <div className={cn('border-b border-gray-200', padding)}>
      <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-2">Signature · {quote.shortStay ? 'Single rate' : 'Member rate'}</p>
      <h3 className="font-playfair text-h4 text-black">{quote.service.name}</h3>
      <p className="mt-2 font-inter text-body-sm text-gray-600">{quote.hoursPerService} hours per visit{quote.service.asksMeal ? ` · ${input.meal}` : ''} · {input.guests >= 40 ? '40+' : input.guests} people</p>
      {!quote.shortStay && <p className="mt-2 font-inter text-body-sm text-gray-600">{MEMBER_NOTE}</p>}
    </div>
    <div className={cn('space-y-3 border-b border-gray-200', padding)}>
      <p className="font-inter text-caption uppercase tracking-wider text-gold-ink">Per visit · before 5% VAT</p>
      {quote.lines.map(line => <AmountRow key={line.label} label={line.label} value={line.amount}/>)}
      <AmountRow label={`Service fee · ${period}`} value={quote.perMonth} strong/>
      <p className="font-inter text-caption text-gray-500">Service fees exclude transport, groceries and 5% VAT.</p>
      {quote.transportPerService === null ? <p className="font-inter text-body-sm text-gray-600">Transport: AED 40–130 per visit. Select your zone to see the estimate with transport and VAT.</p> : <div className="space-y-3 border-t border-gray-200 pt-4">
        <AmountRow label="Transport per visit" value={quote.transportPerService}/>
        <AmountRow label="5% VAT per visit" value={quote.vatPerService!}/>
        <AmountRow label={`With transport & VAT · ${period}`} value={quote.periodWithVat!} strong/>
        <p className="font-inter text-caption text-gray-500">Groceries, grocery delivery and any agreed extras remain separate. Final transport zone is confirmed from your address.</p>
      </div>}
      {feedback && <p className="border-l-2 border-gold pl-3 font-inter text-body-sm text-gray-700"><strong className="text-gold-ink font-medium">{feedback.title}.</strong> {feedback.body}</p>}
    </div>
    <div className={padding}>
      <ul className="space-y-2">{facts.map(fact => <li key={fact} className="flex items-start gap-2 font-inter text-body-sm text-gray-600"><Check size={14} className="mt-1 shrink-0 text-gold-ink"/>{fact}</li>)}</ul>
      {!quote.shortStay && <p className="mt-3 font-inter text-caption text-gray-500">Four weeks of visits shown. Any extra calendar-month visits are itemised in your proposal.</p>}
      <p className="mt-3 font-inter text-caption text-gray-500">{quote.relationship.body}</p>
    </div>
    {!sheet && <div className="p-6 lg:p-7 flex flex-col gap-3 border-t border-gray-200">
      <a href="#send-plan" className="hero-btn--quiet hero-btn--quiet-primary justify-center">Send this plan to myCHEF</a>
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hero-btn--quiet hero-btn--quiet-secondary justify-center !text-black !border-gold/60"><MessageCircle size={15} className="mr-2"/>Ask on WhatsApp</a>
      <p className="font-inter text-caption text-gray-500 text-center">An estimate, confirmed in writing before you book.</p>
    </div>}
  </aside>
}
