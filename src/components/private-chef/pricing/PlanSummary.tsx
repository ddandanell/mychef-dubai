import { Check, Info, MessageCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { LONG_TERM_LENGTHS, type Quote, type QuoteInput } from '@/content/privateChefPricing'
import type { Feedback } from './feedback'
import { useCountUp } from './useCountUp'

interface PlanSummaryProps {
  input: QuoteInput
  quote: Quote
  feedback: Feedback | null
  whatsappHref: string
  variant?: 'card' | 'sheet'
}

function AmountRow({ value, label, strong = false }: { value: number; label: string; strong?: boolean }) {
  const v = useCountUp(value)
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className={cn('font-inter text-caption uppercase tracking-[0.12em]', strong ? 'text-gold-ink' : 'text-gray-400')}>{label}</span>
      <span className={cn('whitespace-nowrap font-playfair tabular-nums leading-none', strong ? 'text-[clamp(32px,2.8vw,42px)] text-gold-ink' : 'text-h3 text-gray-700')}>
        <span className="mr-1.5 font-inter text-caption tracking-wider text-gray-400">AED</span>
        {v.toLocaleString('en-US')}
      </span>
    </div>
  )
}

/** The live price. Light, quiet, gold for the number — the only thing on the page that should shout. */
export default function PlanSummary({ input, quote, feedback, whatsappHref, variant = 'card' }: PlanSummaryProps) {
  const length = LONG_TERM_LENGTHS.find((l) => l.id === input.lengthId)?.label ?? 'Ongoing'
  const facts = [
    quote.shortStay ? `${quote.servicesTotal} chef visits over the stay` : `${quote.servicesPerMonth} chef visits a month`,
    quote.shortStay ? `${quote.hoursPerService * quote.servicesTotal} chef hours over the stay` : `${quote.chefHoursPerMonth} chef hours a month`,
    quote.groceryManaged ? 'Grocery management included' : 'You manage the groceries',
    quote.customStaffing ? 'Custom staffing review' : quote.assistants ? `${quote.assistants} assistant${quote.assistants > 1 ? 's' : ''} in the figure` : 'No assistant needed',
    'Groceries charged at actual cost',
    'Account manager included',
  ]
  const sheet = variant === 'sheet'

  return (
    <aside className={cn('bg-white border-t-2 border-t-gold', sheet ? '' : 'border border-gray-200')} aria-live="polite">
      <div className={cn('border-b border-gray-200', sheet ? 'px-5 py-5' : 'p-6 lg:p-7')}>
        <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-2">Your plan</p>
        <p className="font-playfair text-h4 text-black">{quote.service.name}</p>
        <p className="mt-1 font-inter text-body-sm text-gray-600">
          {quote.hoursPerService} hours a visit
          {quote.service.asksMeal ? ` · ${input.meal}` : ''}
        </p>
        <p className="font-inter text-body-sm text-gray-600">
          {quote.shortStay ? `Short stay · ${input.stayDays} chef days` : `${input.daysPerWeek} day${input.daysPerWeek > 1 ? 's' : ''} a week · ${length}`} · {input.guests >= 40 ? '40+' : input.guests} people
        </p>
      </div>

      <div className={cn('space-y-4 border-b border-gray-200', sheet ? 'px-5 py-5' : 'p-6 lg:p-7')}>
        <AmountRow value={quote.perService} label={`per ${quote.service.unit === 'day' ? 'day' : 'visit'}`} />
        <AmountRow value={quote.perWeek} label="typical week" />
        {quote.shortStay ? <AmountRow value={quote.total ?? 0} label="for the stay" strong /> : <AmountRow value={quote.perMonth} label="estimated month" strong />}
        {feedback ? (
          <p key={feedback.title} className="animate-in fade-in slide-in-from-bottom-1 duration-300 border-l-2 border-gold pl-3 font-inter text-body-sm text-gray-700">
            <span className="text-gold-ink font-medium">{feedback.title}.</span> {feedback.body}
          </p>
        ) : null}
      </div>

      <div className={cn('border-b border-gray-200', sheet ? 'px-5 py-5' : 'p-6 lg:p-7')}>
        <div className="mb-3 flex items-center gap-2">
          <span className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">{quote.tier ? quote.tier.name : 'Short-stay rate'}</span>
          <Tooltip>
            <TooltipTrigger asChild>
              <button type="button" className="text-gray-400 hover:text-gold-ink" aria-label="Why does the rate change?">
                <Info size={14} />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-[260px] text-body-sm leading-relaxed">
              {quote.shortStay
                ? 'Temporary assignments cost more because trained staff are reserved for a shorter period with less scheduling stability.'
                : 'A recurring schedule lets us plan staffing efficiently and keep a stable chef relationship around your household. Part of that efficiency comes back as a better rate.'}
            </TooltipContent>
          </Tooltip>
        </div>
        <ul className="space-y-1.5">
          {facts.map((f) => (
            <li key={f} className="flex items-start gap-2 font-inter text-body-sm text-gray-600">
              <Check size={14} className="mt-1 shrink-0 text-gold-ink" />
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-3 font-inter text-caption text-gray-400">
          {quote.relationship.label}. {quote.relationship.body}
        </p>
      </div>

      {!sheet ? (
        <div className="p-6 lg:p-7 flex flex-col gap-3">
          <a href="#send-plan" className="hero-btn--quiet hero-btn--quiet-primary justify-center">Send this plan to myCHEF</a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="hero-btn--quiet hero-btn--quiet-secondary justify-center !text-black !border-gold/60">
            <MessageCircle size={15} className="mr-2" />
            Ask on WhatsApp
          </a>
          <p className="font-inter text-caption text-gray-400 text-center">Estimate before VAT (5%). The exact figure arrives in writing before anything starts.</p>
        </div>
      ) : null}
    </aside>
  )
}
