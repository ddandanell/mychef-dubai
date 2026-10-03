import catalogue from '../content/privateDiningMenu.json'
import { DINING_CONFIG as config, DINING_ESTIMATE_NOTE } from '../content/privateDiningConfig'

export type DiningService = 'delivery' | 'home' | 'buffet'
export type Diet = 'standard' | 'vegetarian' | 'vegan' | 'other'
export type Course = 'Starter' | 'Main' | 'Side' | 'Dessert'
export type DiningDish = { id: string; name: string; cuisine: string; course: Course; diet: Exclude<Diet, 'other'>; tier: 'E' | 'S' | 'C'; groceryBand: 'L' | 'M' | 'H'; minChefLevel: number; quoteRequired: boolean; active: boolean; recipeNote: string }
export const DINING_DISHES = catalogue as DiningDish[]
export const DIET_GROUPS = ['vegetarian', 'vegan', 'other'] as const
export const DIET_LABELS = { standard: 'Main menu', vegetarian: 'Vegetarian', vegan: 'Vegan', other: 'Other dietary needs' }
export type DiningInput = { service: DiningService; guests: number; area: string; cuisine: string; dishCount: number; dishIds: string[]; dietary: Record<'vegetarian' | 'vegan' | 'other', number>; alternatives: Record<'vegetarian' | 'vegan' | 'other', string[]>; drinkIds: string[] }
export type DiningDetails = { name: string; whatsapp: string; date: string; time: string; address: string; dietaryNotes: string; kitchen: boolean; equipment: string[]; theme: string; cake: string; notes: string }
export const emptyDetails: DiningDetails = { name: '', whatsapp: '', date: '', time: '', address: '', dietaryNotes: '', kitchen: false, equipment: [], theme: 'No decoration', cake: 'No cake', notes: '' }
export const money = (n: number) => `AED ${n.toLocaleString('en-AE', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`
const cents = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100
export const dishPrice = (dish: DiningDish) => dish.quoteRequired ? null : config.perGuestCourse[dish.tier] + config.ingredientUplift[dish.groceryBand]
export const compatible = (dish: DiningDish, diet: Diet) => diet === 'standard' || diet === 'other' || dish.diet === diet || (diet === 'vegetarian' && dish.diet === 'vegan')

/** These are dishes, not an assertion that a side is a separate plated course. */
export function menuSlots(count: number): { course: Course; label: string }[] {
  const counts: Record<number, number[]> = { 3: [1,1,0,1], 4: [1,1,1,1], 5: [2,1,1,1], 6: [2,2,1,1], 7: [2,2,2,1], 8: [2,2,2,2], 9: [3,2,2,2], 10: [3,3,2,2], 11: [3,3,3,2] }
  const types: Course[] = ['Starter','Main','Side','Dessert']
  return (counts[count] ?? []).flatMap((n, i) => Array.from({length:n}, (_, j) => ({course: types[i], label: n === 1 ? types[i] : `${['First','Second','Third'][j]} ${types[i].toLowerCase()}`})))
}
export function suggestedMenu(cuisine: string, count: number): string[] {
  const used = new Set<string>()
  return menuSlots(count).map(slot => {
    const d = DINING_DISHES.find(d => d.active && d.cuisine === cuisine && d.course === slot.course && !d.quoteRequired && !used.has(d.id))!
    used.add(d.id); return d.id
  })
}
export function assistantCount(service: DiningService, guests: number): number {
  if (service === 'delivery' || !Number.isSafeInteger(guests) || guests < 9) return 0
  const count = guests < 20 ? 1 : Math.floor(guests / 10)
  return service === 'buffet' ? Math.min(count, config.buffetAssistantCap) : count
}
export function resolvedMenu(input: DiningInput, diet: Diet): (DiningDish | undefined)[] {
  return menuSlots(input.dishCount).map((_, i) => {
    const base = DINING_DISHES.find(d => d.id === input.dishIds[i])
    if (diet === 'standard') return base
    const alternative = DINING_DISHES.find(d => d.id === input.alternatives[diet][i])
    return alternative ?? (diet !== 'other' && base && compatible(base, diet) ? base : undefined)
  })
}
export function calculateDining(input: DiningInput) {
  const errors: string[] = [], reasons: string[] = []
  const service = config.services.find(s => s.id === input.service)
  const area = config.areas.find(a => a.id === input.area)
  const zone = config.transport.find(z => z.id === area?.zone)
  if (!service) errors.push('Choose how you would like your food served.')
  if (!Number.isSafeInteger(input.guests) || input.guests < (service?.minGuests ?? 6)) errors.push(`${service?.shortName ?? 'This service'} requires at least ${service?.minGuests ?? 6} guests.`)
  if (!area || !zone) errors.push('Choose your area in Dubai.')
  if (!config.cuisines.some(c => c.id === input.cuisine)) errors.push('Choose one cuisine.')
  if (!Number.isInteger(input.dishCount) || input.dishCount < config.minDishes || input.dishCount > config.maxDishes) errors.push('Choose 3–11 dishes.')
  const dietCount = DIET_GROUPS.reduce((n, d) => n + input.dietary[d], 0)
  if (DIET_GROUPS.some(d => !Number.isSafeInteger(input.dietary[d]) || input.dietary[d] < 0) || dietCount > input.guests) errors.push('Dietary guest counts must be whole numbers and cannot exceed your total guests. Count each guest once.')
  const slots = menuSlots(input.dishCount)
  const base = resolvedMenu(input, 'standard')
  // Validate the main selection even if every guest receives a dietary replacement.
  if (input.dishIds.length !== slots.length || base.some((d, i) => !d || !d.active || d.cuisine !== input.cuisine || d.course !== slots[i].course)) errors.push('Complete each main-menu dish in your chosen cuisine.')
  if (new Set(input.dishIds).size !== input.dishIds.length) errors.push('Choose a different dish for each main-menu slot.')
  const groups = (['standard', ...DIET_GROUPS] as Diet[]).map(diet => {
    const count = diet === 'standard' ? input.guests - dietCount : input.dietary[diet]
    const dishes = resolvedMenu(input, diet)
    if (count > 0 && (dishes.some((d, i) => !d || !d.active || d.cuisine !== input.cuisine || d.course !== slots[i].course || !compatible(d, diet)) || new Set(dishes.map(d => d?.id)).size !== dishes.length)) errors.push(`Complete the ${DIET_LABELS[diet].toLowerCase()} with different, suitable dishes from your chosen cuisine.`)
    const perGuest = dishes.reduce((sum, d) => sum + (d ? dishPrice(d) ?? 0 : 0), 0)
    return { diet, count, dishes, perGuest, total: cents(perGuest * count) }
  }).filter(g => g.count > 0)
  const activeDishes = groups.flatMap(g => g.dishes.filter((d): d is DiningDish => !!d))
  activeDishes.filter(d => d.quoteRequired || d.minChefLevel >= 5).forEach(d => reasons.push(`${d.name}: specialist availability and price to confirm.`))
  const drinks = [...new Set(input.drinkIds)].map(id => config.drinks.find(d => d.id === id))
  if (drinks.some(d => !d) || new Set(input.drinkIds).size !== input.drinkIds.length) errors.push('Please reselect your drinks.')
  const chefLevel = Math.max(2, ...activeDishes.map(d => d.minChefLevel))
  const chefFee = input.service === 'delivery' ? 0 : chefLevel <= 2 ? config.chefFees.professional : config.chefFees.senior
  const assistants = assistantCount(input.service, input.guests)
  const assistantTotal = assistants * config.assistantFee
  const quoteRequired = reasons.length > 0
  const canEstimate = errors.length === 0 && !quoteRequired
  const menuTotal = canEstimate ? cents(groups.reduce((sum, g) => sum + g.total, 0)) : null
  const drinksTotal = cents(drinks.reduce((sum, d) => sum + (d?.price ?? 0), 0) * input.guests)
  const foodAndChef = menuTotal === null ? null : cents(menuTotal + chefFee + assistantTotal)
  const beforeVat = canEstimate ? cents(foodAndChef! + drinksTotal + zone!.fee) : null
  const vat = beforeVat === null ? null : cents(beforeVat * config.vat)
  const total = beforeVat === null ? null : cents(beforeVat + vat!)
  return { errors: [...new Set(errors)], reasons: [...new Set(reasons)], service, area, zone, groups, drinks, chefFee, assistants, assistantTotal, menuTotal, foodAndChef, drinksTotal, beforeVat, vat, total, quoteRequired, perGuest: total === null ? null : cents(total / input.guests), canEnquire: errors.length === 0 }
}
export function dubaiToday(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dubai', year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)
}
export function earliestDiningDate(today = dubaiToday()): string {
  const day = new Date(`${today}T12:00:00Z`); day.setUTCDate(day.getUTCDate() + config.leadDays); return day.toISOString().slice(0,10)
}
export function validDiningDate(date: string, today = dubaiToday()): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  const parsed = new Date(`${date}T12:00:00Z`)
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0,10) === date && date >= earliestDiningDate(today)
}
export function bookingErrors(input: DiningInput, details: DiningDetails, today = dubaiToday()): string[] {
  const errors: string[] = []
  if (!details.name.trim()) errors.push('Enter your name.')
  if (!/^\+?[\d\s()-]{7,24}$/.test(details.whatsapp.trim()) || !/^\d{7,15}$/.test(details.whatsapp.replace(/\D/g, ''))) errors.push('Enter a WhatsApp number with country code.')
  if (!validDiningDate(details.date, today)) errors.push(`Choose a date on or after ${earliestDiningDate(today)} (five days ahead).`)
  if (input.service === 'home' && !details.kitchen) errors.push('Confirm that a fully equipped kitchen is available.')
  if (input.dietary.other > 0 && !details.dietaryNotes.trim()) errors.push('Describe the other dietary needs so our chef can review them.')
  return errors
}
export function diningWhatsApp(input: DiningInput, details: DiningDetails, today = dubaiToday()): string | null {
  const q = calculateDining(input)
  if (!q.canEnquire || bookingErrors(input, details, today).length) return null
  const lines = ['Hi myCHEF, I would like to request this food and chef package.', '', `Service: ${q.service!.shortName}`, `Guests: ${input.guests}`, `Cuisine: ${config.cuisines.find(c => c.id === input.cuisine)!.name}`, `Menu: ${input.dishCount} dishes`, `Date: ${details.date}`, `Serving time: ${details.time || 'To confirm'} (Dubai time)`, `Area: ${q.area!.name}`, `Address: ${details.address.trim() || 'To confirm'}`, `Name: ${details.name.trim()}`, `WhatsApp: ${details.whatsapp.trim()}`, '']
  q.groups.forEach(g => { lines.push(`${DIET_LABELS[g.diet]} — ${g.count} guests:`, ...g.dishes.map((d, i) => `• ${menuSlots(input.dishCount)[i].label}: ${d!.name}`), q.quoteRequired ? 'Menu price: to confirm' : `Menu per person before VAT: ${money(g.perGuest)}`, '') })
  lines.push(`Dietary / allergy details: ${details.dietaryNotes.trim() || 'None provided; please confirm'}`, `Equipped customer kitchen: ${input.service === 'home' ? 'Confirmed by customer' : 'Not required for this service'}`, `Includes: ${q.service!.inclusions}`, `Chef preparation / service: ${input.service === 'delivery' ? 'Included in food prices; no on-site chef' : `${money(q.chefFee)} before VAT; automatically assigned`}`, `Assistants: ${q.assistants} (${money(q.assistantTotal)} before VAT)`, `Transport: ${money(q.zone!.fee)} before VAT`, '', 'Drinks:', ...(q.drinks.length ? q.drinks.map(d => `• ${d!.name}: ${d!.serving} × ${input.guests} guests — ${money(d!.price * input.guests)} before VAT`) : ['None selected']))
  if (q.total !== null) lines.push('', `Food: ${money(q.menuTotal!)}`, `Food and chef team: ${money(q.foodAndChef!)}`, `Selected drinks: ${money(q.drinksTotal)}`, `Subtotal: ${money(q.beforeVat!)}`, `5% VAT: ${money(q.vat!)}`, `Estimated total including VAT: ${money(q.total)}`, `Per guest including VAT: ${money(q.perGuest!)}`)
  else lines.push('', 'Complete price: personal quote required. No partial total is confirmed.', ...q.reasons)
  lines.push('', 'EXTRAS — separate quote, not included in the estimate:', `Equipment: ${details.equipment.join(', ') || 'No thanks'}`, `Decoration: ${details.theme}`, `Cake: ${details.cake}`, `Notes: ${details.notes.trim() || 'None'}`, '', DINING_ESTIMATE_NOTE, 'Source: mychef.ae/private-chef-dubai#dinner-calculator')
  return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
}
