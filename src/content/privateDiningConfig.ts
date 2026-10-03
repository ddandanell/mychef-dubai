/** Owner's Complete System & Build Guide, Parts 2–4. Separate from cooking-visit prices.
 * The owner's 2026-10-03 instruction overrides the guide's two-guest minimum to six.
 * Dining fees are used directly; cross-service chef multipliers are NOT applied again.
 */
export const DINING_CONFIG = {
  currency: 'AED', vat: 0.05, whatsapp: '971551744849',
  minGuests: 6, maxGuests: 20, minDishes: 3, maxDishes: 5,
  perGuestCourse: { E: 35, S: 55, C: 90 },
  ingredientUplift: { L: 0, M: 15, H: 35 },
  eveningFee: {
    essential: 1200, signature: 1800,
    master: { base: 3000, max: 5000, pricing: 'bespoke' },
  },
  assistantFee: 400,
  assistantThresholds: [{ guests: 20, count: 2 }, { guests: 9, count: 1 }],
  transport: [
    { id: '1', label: 'Downtown · DIFC · Business Bay · Jumeirah', fee: 40 },
    { id: '2', label: 'Umm Suqeim · Al Barsha · Dubai Hills', fee: 65 },
    { id: '3', label: 'Marina · JBR · JLT · Palm · Emirates Hills · JVC', fee: 95 },
    { id: '4', label: 'Arabian Ranches and beyond', fee: 130 },
  ],
} as const

export const DINING_PACKAGES = [
  { id: 'essential', name: 'Essential', maxChefLevel: 2, tagline: 'Relaxed food, thoughtfully cooked.', description: 'A professional chef for a simple, generous menu and a relaxed evening at home.' },
  { id: 'signature', name: 'Signature', maxChefLevel: 4, tagline: 'A dinner worth gathering for.', description: 'A senior or executive chef, more involved dishes and a menu shaped around your occasion.' },
  { id: 'master', name: 'Master', maxChefLevel: 5, tagline: 'A bespoke chef request.', description: 'Tell us your vision. We check specialist chef availability and prepare a personal proposal.' },
] as const

export const DISH_TIERS = { E: 'Everyday', S: 'Signature', C: "Chef’s Special" } as const
export const DINING_PRESETS = [
  { name: 'Signature dinner', dishIds: [23, 27, 54, 44], service: 'signature' },
  { name: 'Italian evening', dishIds: [45, 36, 41, 44], service: 'signature' },
  { name: 'Indian favourites', dishIds: [7, 3, 5, 9], service: 'signature' },
  { name: 'Relaxed Mediterranean', dishIds: [33, 31, 34, 44], service: 'essential' },
] as const

export const DINING_ESTIMATE_NOTE = 'Every total is an estimate until your coordinator confirms the chef, menu, availability and final price in writing.'

export const DINING_FAQS = [
  { q: 'What is included in a private dinner package?', a: 'Your selected menu includes the ingredients, shopping, cooking, plating, table service and kitchen clean-up. The calculator also includes the chef evening fee, assistants required for your guest count, transport for your area and 5% VAT. Drinks, tableware and linen hire, flowers and other extras are quoted separately if requested.' },
  { q: 'How many people can I book a dinner package for?', a: 'Private dinner packages have a minimum of six guests. The calculator covers six to twenty people. For a larger celebration, ask us for a tailored catering proposal.' },
  { q: 'Can I change the suggested menu?', a: 'Yes. Start with a suggested menu or choose three to five dishes from the catalogue. Each selected dish is prepared for every guest. Tell us about allergies, dietary requirements, children and alternative portions so we can agree a suitable menu before booking.' },
  { q: 'Does sending my menu on WhatsApp confirm a booking?', a: 'No. It sends a booking request with your package, menu, guest count, preferred date, location and estimate. Your coordinator checks availability and dietary requirements, then confirms the chef, final menu, price and booking terms in writing.' },
] as const
