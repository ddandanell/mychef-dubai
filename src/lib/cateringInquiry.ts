import {
  CATERING_FORMAT_BY_ID,
  STAFF_LEVELS,
  clampGuests,
  isCalculatorFormatId,
  isStaffLevelId,
  quoteCatering,
  type CalculatorFormatId,
  type StaffLevelId,
} from '../content/cateringPricing'
import { inquiryHref } from './inquiry'

export function cateringCalculatorHref(format: CalculatorFormatId, guests: number, staff: StaffLevelId): string {
  return inquiryHref('catering-calculator', {
    format,
    guests: String(clampGuests(format, guests)),
    staff,
  })
}

/** Validate the selections and recalculate; never trust a price supplied in a URL. */
export function cateringCalculatorBrief(params: URLSearchParams, guestOverride?: string): string[] {
  if (params.get('from') !== 'catering-calculator') return []
  const format = params.get('format') ?? ''
  const staff = params.get('staff') ?? ''
  const guests = Number(guestOverride ?? params.get('guests'))
  if (!isCalculatorFormatId(format) || !isStaffLevelId(staff) || !Number.isFinite(guests) || guests <= 0) return []
  const count = clampGuests(format, guests)
  const quote = quoteCatering({ formatId: format, guests: count, staffId: staff })
  const lines = [
    `Catering format: ${CATERING_FORMAT_BY_ID[format].label}`,
    `Staffing: ${STAFF_LEVELS.find((item) => item.id === staff)!.label}`,
    `Calculator guests: ${count}`,
  ]
  if (quote.ok) lines.push(`Indicative estimate: AED ${quote.totalLow.toLocaleString('en-US')}–${quote.totalHigh.toLocaleString('en-US')}, before VAT and any additional quoted items.`)
  lines.push('Final menu, inclusions and price to be confirmed in the written proposal.')
  return lines
}
