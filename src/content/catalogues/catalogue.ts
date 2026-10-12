export const CORPORATE_MENUS_PATH = '/corporate/menus-prices'
export const DINNER_MENUS_PATH = '/luxury-dining-experiences/menus-prices'
export interface PriceTier { range: string; minGuests: number; maxGuests: number | null; mychefRate: number; lumpsum?: boolean }
export interface CorporatePackage { id: string; name: string; section: string; guestTiers: PriceTier[]; menu: Record<string, string[]>; inclusions: string[]; notes: string[] }
export interface Station { id: string; name: string; guestRange: string; perHeadTiers: PriceTier[]; chooseItems: string[]; servedWith: string[]; salads: string[]; starters: string[]; sideDishes: string[]; miniDesserts: string[]; beverages: string[]; inclusions: string[]; perHeadExtras: {item: string; mychef: number}[]; notes: string[] }
export interface Extra { item: string; unit: string; mychef: number }
export interface StationAddon { group: string; mychefPerPersonPerItem?: number; items?: string[]; note?: string; perPerson?: boolean; options?: {item: string; mychef: number}[] }
export interface CorporateCatalogue { currency: string; vatNote: string; sections: {id: string; name: string; packages: CorporatePackage[]}[]; stations: Station[]; stationChefCharges: {item: string; mychef: number}[]; stationAddOns: StationAddon[]; stationMultiDiscounts: string[]; extras: Extra[]; terms: Record<string, string | string[]> }
export interface DinnerMenu { id: string; name: string; chef: string; cuisine: string; coursesCount: number; courses: {slot: string; dish: string}[]; notes: string[]; sellingPrice: number }
export interface DinnerAddon { id: string; name: string; price: number | null; unit: string }
export interface DinnerCatalogue { menus: DinnerMenu[]; addOns: DinnerAddon[]; terms: Record<string, string | number>; vatNote: string }
export const money = (n: number) => `AED ${n.toLocaleString('en-AE', { maximumFractionDigits: 2 })}`
export const imagePath = (mode: 'corporate' | 'dinner', id: string) => `/images/menu-catalogues/${mode}/${id}.webp`
export function tierPrice(tiers: PriceTier[], guests: number): {amount: number; detail: string} | undefined {
  if (!Number.isInteger(guests) || guests < 1) return undefined
  const tier = tiers.find(t => guests >= t.minGuests && (t.maxGuests === null || guests <= t.maxGuests))
  if (!tier) return undefined
  return { amount: tier.lumpsum ? tier.mychefRate : tier.mychefRate * guests, detail: tier.lumpsum ? `${money(tier.mychefRate)} fixed package` : `${money(tier.mychefRate)} × ${guests} guests` }
}
export function stationChefCharge(guests: number, charges: CorporateCatalogue['stationChefCharges']): number {
  return charges[guests >= 75 ? 1 : 0].mychef
}
export function stationDiscount(count: number, eligibleFood: number): number {
  return count === 2 ? eligibleFood * .15 : count === 3 ? eligibleFood * .2 : 0
}
export const round = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100
export const corporateFaqs = [
  {q:'How do I read the corporate prices?',a:'Rates are in AED and exclude 5% VAT. Each menu shows its exact guest tiers. A fixed small-group package is charged once; a per-guest rate is multiplied by the guest count. Counts between published tiers are quoted individually.'},
  {q:'What is included in each package?',a:'The full menu and inclusions appear on every card. Most packages include skilled waiters, buffet setup, plates, cutlery and glassware. Live stations have mandatory chef charges, shown separately. Furniture, transport and upgrades are listed as extras.'},
  {q:'Can I combine live stations?',a:'Two live stations qualify for 15% off station food and three for 20%. Chef charges and VAT are excluded. More than three stations are quoted individually. The quote confirms staffing and the final discount.'},
  {q:'What is the minimum guest count?',a:'Small-group fixed packages cover 10–15 guests, with a minimum charge for 12 guests per event. Premium packages and live stations start from 20 guests. Each menu’s pricing table gives the applicable range.'},
  {q:'Can you adapt the menu for allergies or vegetarian guests?',a:'Tell us all dietary requirements and allergies before booking. Items may be added, removed or swapped; premium replacements and extra items can change the price. Vegetarian dishes are identified in the menu where supplied.'},
  {q:'How long does catering service last?',a:'Standard catering includes up to four hours of service, excluding setup. Extended catering is AED 500 per hour before VAT. Full-day conference packages are scheduled separately and confirmed in writing.'},
]
export const dinnerFaqs = [
  {q:'How much do signature dinners cost?',a:'The Italian Classic three-course menu starts from AED 600 per person before 5% VAT. Thirteen menus are available, from three to seven courses. The displayed rate applies to 2–20 guests; premium ingredients, add-ons and peak dates can change the final quote.'},
  {q:'Is the chef and waiter included?',a:'The signature dinner includes the chef, ingredients, specialty equipment, plating ware and one waiter per ten guests. Your kitchen needs a working stove, oven, fridge and sink. Additional waiters are available from AED 350 each before VAT.'},
  {q:'Can I see the complete menu before booking?',a:'Yes. Open the full menu on any card to read every course. You can filter by cuisine or chef and choose one signature menu for your party. We confirm any substitutions and dietary changes before you book.'},
  {q:'Are these dinners halal and customisable?',a:'The supplied signature collection is halal by default. Tell us about allergies, intolerances and vegetarian requests when enquiring so the chef can confirm suitable substitutions and preparation requirements.'},
  {q:'Are drinks and table styling included?',a:'Alcohol is client-supplied. Mocktail pairing, tea pairing, sommelier service, bartender service and table styling are optional add-ons. The quote lists every selected extra and its unit.'},
  {q:'What happens on peak dates?',a:'A 50% peak-date surcharge applies to Ramadan iftar, New Year’s Eve and 24–25 December, confirmed in the written quote. Lobster, caviar, bluefin tuna, A5 wagyu and seasonal truffle are subject to market pricing at booking.'},
]
