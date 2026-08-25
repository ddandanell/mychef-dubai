import { ChevronUp } from 'lucide-react'
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { fmt, type Quote, type QuoteInput } from '@/content/privateChefPricing'
import type { Feedback } from './feedback'
import PlanSummary from './PlanSummary'

interface PlanSheetProps {
  input: QuoteInput
  quote: Quote
  feedback: Feedback | null
  whatsappHref: string
}

/** Mobile only: a sticky bar with the one number that matters, opening the full breakdown from the bottom. */
export default function PlanSheet({ input, quote, feedback, whatsappHref }: PlanSheetProps) {
  const headline = quote.shortStay ? `${fmt(quote.total ?? 0)} for the stay` : `${fmt(quote.perMonth)} / month`
  return (
    <Drawer>
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-white/95 backdrop-blur px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-playfair text-[22px] leading-none text-gold-ink tabular-nums whitespace-nowrap">{headline}</p>
            <p className="mt-1 truncate font-inter text-caption text-gray-500">
              {feedback ? `${feedback.title}.` : `${quote.chef.name} · ${quote.service.name}`}
            </p>
          </div>
          <DrawerTrigger asChild>
            <button type="button" className="hero-btn--quiet hero-btn--quiet-primary !min-h-[44px] !px-4 text-[13px] shrink-0">
              View plan <ChevronUp size={14} className="ml-1.5" />
            </button>
          </DrawerTrigger>
        </div>
      </div>
      <DrawerContent className="lg:hidden max-h-[88vh] rounded-none border-t border-gold/40 bg-white">
        <DrawerTitle className="sr-only">Your private chef plan</DrawerTitle>
        <div className="overflow-y-auto">
          <PlanSummary input={input} quote={quote} feedback={feedback} whatsappHref={whatsappHref} variant="sheet" />
          <div className="p-5 flex flex-col gap-3">
            <DrawerClose asChild>
              <a href="#send-plan" className="hero-btn--quiet hero-btn--quiet-primary justify-center">Send this plan to myCHEF</a>
            </DrawerClose>
            <DrawerClose asChild>
              <button type="button" className="font-inter text-body-sm text-gray-500 underline underline-offset-4">Keep building</button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
