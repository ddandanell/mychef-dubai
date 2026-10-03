import { fmt, MEMBER_NOTE, LONG_TERM_LENGTHS, TRANSPORT_ZONES, type Quote, type QuoteInput } from '@/content/privateChefPricing'

/** Same itemised estimate for the enquiry and the WhatsApp prefill. */
export function planText(input: QuoteInput, q: Quote, lead?: { name?: string; area?: string; start?: string }): string {
  const length = LONG_TERM_LENGTHS.find(l => l.id === input.lengthId)?.label ?? 'Ongoing'
  return [
    'PRIVATE CHEF PLAN · SIGNATURE',
    lead?.name ? `Client: ${lead.name}` : '',
    lead?.area ? `Area: ${lead.area}` : '',
    `Start: ${lead?.start || input.startDate || 'To be confirmed'}`,
    q.shortStay ? `Booking: ${q.servicesTotal} visit(s) at the single rate` : `Member plan: ${length}; ${input.daysPerWeek} day(s)/week; ${q.servicesTotal} visits over four weeks`,
    q.shortStay ? '' : MEMBER_NOTE,
    `Service: ${q.service.name} · ${q.hoursPerService} hours per visit${q.service.asksMeal ? ` · ${input.meal}` : ''}`,
    `Household: ${input.guests >= 40 ? '40+' : input.guests} people · ${q.customStaffing ? 'custom staffing review required' : `${q.assistants} assistant(s)`}`,
    ...q.lines.map(line => `${line.label}: ${fmt(line.amount)} per visit, before 5% VAT`),
    `Service fee: ${fmt(q.perService)} per visit; ${fmt(q.perMonth)} for ${q.shortStay ? 'the booking' : 'four weeks'}, before 5% VAT`,
    q.transportPerService === null ? 'Zone transport: AED 40–130 per visit, before 5% VAT; address to be confirmed' : `Zone transport: ${TRANSPORT_ZONES.find(zone => zone.id === input.transportZoneId)?.label}, ${fmt(q.transportPerService)} per visit before 5% VAT`,
    q.vatPerService === null ? '' : `VAT: ${fmt(q.vatPerService)} per visit (5% of service fee and zone transport)`,
    q.periodWithVat === null ? '' : `Estimate including transport and 5% VAT: ${fmt(q.periodWithVat)} for ${q.shortStay ? 'the booking' : 'four weeks'}`,
    `Shopping: ${q.groceryManaged ? 'managed by myCHEF' : 'managed by client'}. Groceries at actual cost, no markup; not included in the estimate. Grocery delivery and agreed extras are separate.`,
    q.shortStay ? '' : 'Additional calendar-month visits are quoted separately.',
    'Availability, menu and final price confirmed in writing before booking.',
  ].filter(Boolean).join('\n')
}
