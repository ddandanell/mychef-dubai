import { Minus, Plus } from 'lucide-react'

interface StepperProps {
  value: number
  min: number
  max: number
  onChange: (value: number) => void
  label: string
  /** Rendered after the number, e.g. "chef days". */
  unit?: string
  /** Custom display for the number (e.g. "40+"). */
  format?: (value: number) => string
}

const btn =
  'flex h-12 w-12 items-center justify-center border border-gray-200 text-gold-ink transition-colors hover:border-gold hover:bg-cream disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold'

/** −  value  + — two big tap targets and one big number. */
export default function Stepper({ value, min, max, onChange, label, unit, format }: StepperProps) {
  const dec = () => onChange(Math.max(min, value - 1))
  const inc = () => onChange(Math.min(max, value + 1))
  return (
    <div className="flex items-center gap-4" role="group" aria-label={label}>
      <button type="button" className={btn} onClick={dec} disabled={value <= min} aria-label={`Fewer ${label}`}>
        <Minus size={18} strokeWidth={1.5} aria-hidden />
      </button>
      <div className="min-w-[96px] text-center">
        <span className="block font-playfair text-[44px] leading-none text-gold-ink tabular-nums" aria-live="polite">
          {format ? format(value) : value}
        </span>
        {unit ? <span className="mt-1 block font-inter text-caption uppercase tracking-[0.12em] text-gray-400">{unit}</span> : null}
      </div>
      <button type="button" className={btn} onClick={inc} disabled={value >= max} aria-label={`More ${label}`}>
        <Plus size={18} strokeWidth={1.5} aria-hidden />
      </button>
    </div>
  )
}
