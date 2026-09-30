import { fmt, LONG_TERM_LENGTHS, type Quote, type QuoteInput } from '@/content/privateChefPricing'

/** Human-readable plan block — used for the lead email and the WhatsApp prefill. */
export function planText(input: QuoteInput, q: Quote, lead?: { name?: string; area?: string; start?: string }): string {
  const length = LONG_TERM_LENGTHS.find((l) => l.id === input.lengthId)?.label ?? 'Ongoing'
  const lines = [
    'PRIVATE CHEF PLAN',
    lead?.name ? `Client: ${lead.name}` : '',
    lead?.area ? `Area: ${lead.area}` : '',
    `Start: ${lead?.start || input.startDate || 'To be confirmed'}`,
    q.shortStay ? `Duration: Short stay, ${input.stayDays} chef days` : `Duration: Long term, ${length}`,
    q.shortStay ? '' : `Frequency: ${input.daysPerWeek} day${input.daysPerWeek > 1 ? 's' : ''}/week (${q.servicesPerMonth} services/four weeks)`,
    `Service: ${q.service.name} · ${q.hoursPerService}h/service${q.service.asksMeal ? ` · ${input.meal}` : ''}`,
    `Household: ${input.guests} people · ${q.customStaffing ? 'custom staffing review' : q.assistants ? `${q.assistants} assistant(s)` : 'no assistant'}`,
    `Groceries: ${q.groceryManaged ? 'managed by myCHEF' : 'managed by client'} · charged at actual cost`,
    q.tier ? `Rate: ${q.tier.name}` : 'Rate: short-stay',
    `Estimate: ${fmt(q.perService)}/service · ${fmt(q.perWeek)}/week · ${q.shortStay ? `${fmt(q.total ?? 0)} for the stay` : `${fmt(q.perMonth)}/four weeks`}`,
    'Service estimate before 5% VAT. Groceries, paid trials, activation where applicable and agreed extras are separate.',
    q.shortStay ? '' : `Chef hours: ${q.chefHoursPerMonth}/four weeks. Additional calendar-month shifts are quoted separately.`,
  ]
  return lines.filter(Boolean).join('\n')
}
