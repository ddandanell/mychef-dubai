import catalogue from '../content/privateDiningDishes.json'
import { DINING_CONFIG as config, DINING_ESTIMATE_NOTE, DINING_PACKAGES } from '../content/privateDiningConfig'

export type DiningService = 'essential' | 'signature' | 'master'
export type DishTier = 'E' | 'S' | 'C'
export type GroceryBand = 'L' | 'M' | 'H'
export type DiningDish = {
  id: number; name: string; cuisine: string; tier: DishTier; course: string;
  minChefLevel: number; requiresSignoff: boolean; groceryBand: GroceryBand;
  mealPrepEligible: boolean; marketPrice: boolean; status: 'live' | 'proposed_addition';
  needsCostConfirmation: boolean;
}
export const DINING_DISHES = catalogue.dishes as DiningDish[]

export type DiningInput = { guests: number; service: DiningService; zone: string; dishIds: number[] }
export type DiningDetails = {
  name: string; date: string; time: string; occasion: string; area: string;
  dietary: string; kitchen: string; extras: string[];
}

export function money(amount: number): string {
  return `AED ${amount.toLocaleString('en-AE', { minimumFractionDigits: Number.isInteger(amount) ? 0 : 2, maximumFractionDigits: 2 })}`
}
const cents = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100

export function dishPrice(dish: DiningDish): number | null {
  if (dish.marketPrice || dish.needsCostConfirmation || dish.status !== 'live') return null
  return config.perGuestCourse[dish.tier] + config.ingredientUplift[dish.groceryBand]
}

/** A customer cannot grant themselves chef sign-off. Sign-off stays a coordinator task. */
export function dishRestriction(dish: DiningDish, service: DiningService): string | null {
  if (dish.status !== 'live') return 'New · not yet available'
  if (dish.course === 'Breakfast') return 'Available for meal preparation'
  const level = DINING_PACKAGES.find(p => p.id === service)?.maxChefLevel ?? 0
  if (dish.minChefLevel > level) return dish.minChefLevel === 5 ? 'Master specialist required' : 'Signature chef required'
  return null
}

/** The source's per-course dining formula, VAT rounded only at ticket level. */
export function calculateDining(input: DiningInput) {
  const errors: string[] = []
  const reasons: string[] = []
  const zone = config.transport.find(z => z.id === input.zone)
  const service = DINING_PACKAGES.find(p => p.id === input.service)
  if (!Number.isInteger(input.guests) || input.guests < config.minGuests || input.guests > config.maxGuests) {
    errors.push(`Please choose ${config.minGuests}–${config.maxGuests} guests.`)
  }
  if (!zone) errors.push('Please choose your transport area.')
  if (!service) errors.push('Please choose a chef package.')
  const ids = [...new Set(input.dishIds)]
  if (ids.length !== input.dishIds.length) errors.push('Each dish can be selected once.')
  const dishes = ids.flatMap(id => {
    const dish = DINING_DISHES.find(d => d.id === id)
    if (!dish) { errors.push('A selected dish is unavailable. Please choose again.'); return [] }
    const restriction = dishRestriction(dish, input.service)
    if (restriction) errors.push(`${dish.name}: ${restriction}.`)
    if (dish.marketPrice || dish.needsCostConfirmation) reasons.push(`${dish.name}: market price — confirmed on booking.`)
    if (dish.requiresSignoff && input.service !== 'master') reasons.push(`${dish.name}: executive chef and senior sign-off must be confirmed; otherwise a Master chef is required.`)
    return [dish]
  })
  if (dishes.length < config.minDishes || dishes.length > config.maxDishes) errors.push(`Choose ${config.minDishes}–${config.maxDishes} dishes for your menu.`)
  if (!dishes.some(d => d.course === 'Main')) errors.push('Please include at least one main dish.')
  if (input.service === 'master') reasons.push('Master chef availability and the complete event price require a personal proposal.')
  const assistants = config.assistantThresholds.find(band => input.guests >= band.guests)?.count ?? 0
  const assistantTotal = assistants * config.assistantFee
  const chefFee = input.service === 'master' || !service ? null : config.eveningFee[input.service]
  const menuPerGuest = dishes.reduce((sum, dish) => sum + (dishPrice(dish) ?? 0), 0)
  const quoteRequired = reasons.length > 0
  const canEstimate = errors.length === 0 && !quoteRequired
  // Never expose a partial sum as a total for a bespoke or market-price menu.
  const menuTotal = canEstimate ? cents(menuPerGuest * input.guests) : null
  const beforeVat = canEstimate ? cents(menuTotal! + chefFee! + assistantTotal + zone!.fee) : null
  const vat = beforeVat === null ? null : cents(beforeVat * config.vat)
  const total = beforeVat === null ? null : cents(beforeVat + vat!)
  return {
    errors, reasons, dishes, assistants, assistantTotal, chefFee, zone,
    menuTotal, beforeVat, vat, total, quoteRequired,
    perGuest: total === null ? null : cents(total / input.guests),
    canEnquire: errors.length === 0,
  }
}

export function dubaiToday(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dubai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)
}

export function validDiningDate(date: string, today = dubaiToday()): boolean {
  if (!date) return true // Enquiries with an undecided date are welcome; no calendar booking is claimed.
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  const parsed = new Date(`${date}T12:00:00Z`)
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === date && date >= today
}

export function diningWhatsApp(input: DiningInput, details: DiningDetails): string | null {
  const quote = calculateDining(input)
  if (!quote.canEnquire || !validDiningDate(details.date)) return null
  const name = DINING_PACKAGES.find(p => p.id === input.service)!.name
  const lines = [
    'Hi myCHEF, I would like to request this private dinner package.', '',
    `Package: ${name}`, `Guests: ${input.guests} (minimum ${config.minGuests})`,
    `Name: ${details.name.trim() || 'To confirm'}`,
    `Preferred date: ${details.date || 'To confirm'}`,
    `Preferred serving time: ${details.time ? `${details.time} Dubai time` : 'To confirm'}`,
    `Occasion: ${details.occasion.trim() || 'To confirm'}`,
    `Location: ${details.area.trim() || 'Exact address to confirm'}`,
    `Transport area: ${quote.zone!.label}`, '',
    `Menu (${quote.dishes.length} dishes, each for all ${input.guests} guests):`,
    ...quote.dishes.map(d => `• ${d.name} — ${d.cuisine} (${dishPrice(d) === null ? 'Market price — confirmed on booking' : `${money(dishPrice(d)!)} per guest, before VAT`})`), '',
    'Includes: ingredients, shopping, cooking, plating, table service and kitchen clean-up.',
    `Chef: ${name}${quote.chefFee === null ? ' — bespoke quote' : ` evening fee ${money(quote.chefFee)}`}`,
    `Assistants: ${quote.assistants} (${money(quote.assistantTotal)})`,
    `Transport: ${money(quote.zone!.fee)}`,
  ]
  if (quote.total !== null) {
    lines.push(`Menu: ${money(quote.menuTotal!)}`, `Subtotal before VAT: ${money(quote.beforeVat!)}`, `5% VAT: ${money(quote.vat!)}`, `Estimated total including VAT: ${money(quote.total)}`, `Per guest including VAT: ${money(quote.perGuest!)}`)
  } else {
    lines.push('Complete event price: quote required; no total confirmed.', ...quote.reasons)
  }
  lines.push('', `Allergies / dietary requirements: ${details.dietary.trim() || 'Not provided — please confirm before booking'}`,
    `Kitchen / equipment: ${details.kitchen.trim() || 'To confirm'}`,
    `Extras requested (separate quote): ${details.extras.join(', ') || 'None selected'}`,
    'Drinks, tableware, linen, flowers and other extras are not included in this estimate.', '',
    DINING_ESTIMATE_NOTE, 'This is a booking request; please confirm availability and booking terms.',
    'Source: mychef.ae/private-chef-dubai#dinner-calculator')
  return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}
