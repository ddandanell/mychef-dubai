import catalogue from '@/content/canapes/collection.json'

export type CanapeCategory = 'seafood' | 'meat' | 'vegetarian' | 'vegan' | 'sweet'
export type CanapeItem = {
  id: number; slug: string; category: CanapeCategory; name: string; description: string;
  temperature: 'warm' | 'cold'; allergens: string; tier: string;
  diet: '' | 'vegetarian' | 'vegan'; image: string; alt: string;
}
export const canapes = catalogue.menu as CanapeItem[]
export const canapeCollections = catalogue.collections
export const canapeCategories: { value: CanapeCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All 50 creations' }, { value: 'seafood', label: 'Seafood' },
  { value: 'meat', label: 'Meat & poultry' }, { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' }, { value: 'sweet', label: 'Sweet' },
]
export const receptionFormats = [
  { id: 'welcome', label: 'Welcome before a meal', duration: 'About 45–90 minutes', low: 6, high: 8 },
  { id: 'reception', label: 'Standing reception', duration: 'About 1½–2 hours', low: 8, high: 12 },
  { id: 'evening', label: 'Longer evening', duration: 'Add substantial food', low: 12, high: 16 },
] as const
export type ReceptionFormat = typeof receptionFormats[number]['id']
export function estimateCanapes(guests: number, format: ReceptionFormat) {
  if (!Number.isInteger(guests) || guests < 10 || guests > 5000) return null
  const range = receptionFormats.find(item => item.id === format)
  if (!range) return null
  return { low: guests * range.low, high: guests * range.high, perGuestLow: range.low, perGuestHigh: range.high }
}
export function buildCanapeMessage(brief: {
  ids: number[]; guests: string; date: string; occasion: string; venue: string;
  format: ReceptionFormat; notes: string;
}) {
  const selected = canapes.filter(item => brief.ids.includes(item.id))
  return [
    "Hi myCHEF, I'd like to plan canapé catering in Dubai.",
    `Occasion: ${brief.occasion || 'To discuss'}`,
    `Date: ${brief.date || 'To confirm'}`, `Guests: ${brief.guests || 'To confirm'}`,
    `Venue / area: ${brief.venue || 'To confirm'}`,
    `Format: ${receptionFormats.find(item => item.id === brief.format)?.label || 'To discuss'}`,
    '', selected.length ? `My menu ideas (${selected.length} varieties, quantities to agree):\n${selected.map(item => `${String(item.id).padStart(2, '0')}. ${item.name}`).join('\n')}` : 'Please help me choose a menu.',
    brief.notes ? `\nPreferences / dietary requirements: ${brief.notes}` : '',
    '\nPlease confirm availability, final recipes, service and pricing in a proposal.',
    'Via https://www.mychef.ae/canape-catering-dubai',
  ].filter(Boolean).join('\n')
}
export function matchesCanape(item: CanapeItem, filters: { category: string; temperature: string; diet: string; query: string }) {
  const normalise = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  return (filters.category === 'all' || item.category === filters.category)
    && (filters.temperature === 'all' || item.temperature === filters.temperature)
    && (filters.diet === 'all' || (filters.diet === 'vegetarian' ? Boolean(item.diet) : item.diet === filters.diet))
    && normalise(`${item.name} ${item.description}`).includes(normalise(filters.query.trim()))
}
