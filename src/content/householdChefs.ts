export const HOUSEHOLD_PATH = '/full-time-private-chef-dubai'
export const LIVE_IN_PATH = '/private-chef-dubai/live-in-chef'
export const LIVE_OUT_PATH = '/private-chef-dubai/live-out-chef'
export const SHORT_TERM_PATH = '/private-chef-dubai/short-term-chef'

export const householdLevels = [
  { id: 'standard', number: 1, name: 'Standard Household Chef', min: 18000, max: 22000, focus: 'Everyday family favourites', description: 'Familiar meals, a practical weekly menu and a kitchen that runs to your routine.', details: 'A good starting point for straightforward family cooking, lunchbox preparation and dependable dinners.' },
  { id: 'select', number: 2, name: 'Select Household Chef', min: 22000, max: 28000, focus: 'More variety, thoughtfully planned', description: 'A broader repertoire, independent shopping and easy meals for visiting friends.', details: 'For households that enjoy changing menus, seasonal ingredients and informal entertaining alongside daily cooking.' },
  { id: 'senior', number: 3, name: 'Senior Private Chef', min: 28000, max: 35000, focus: 'A more personal kitchen', description: 'Specialist cuisines and different family preferences brought together in one workable plan.', details: 'For homes with several food preferences, detailed meal planning or regular coordination with household staff.' },
  { id: 'executive', number: 4, name: 'Executive Private Chef', min: 35000, max: 42000, focus: 'Daily living. Beautiful entertaining.', description: 'Refined cooking, considered sourcing and confident organisation of the household kitchen.', details: 'For families who want their everyday food and occasional guest dining handled with the same attention.' },
  { id: 'elite', number: 5, name: 'Elite Private Chef', min: 42000, max: 50000, focus: 'An exceptional personal brief', description: 'Highly individual menus and culinary support for demanding residences and private entertaining.', details: 'For principal households, specialist dining and complex routines. Travel, extra chefs and larger teams are scoped separately.' },
] as const

export type HouseholdLevelId = typeof householdLevels[number]['id']
export type HouseholdArrangement = 'live-in' | 'live-out' | 'help-me-choose'
export const money = (value: number) => `AED ${value.toLocaleString('en-AE')}`
export const levelPrice = (level: typeof householdLevels[number]) => `AED ${level.min.toLocaleString('en-AE')}–${level.max.toLocaleString('en-AE')}`
export const householdPriceNote = 'Indicative monthly service fees before VAT. Groceries are separate. Your proposal confirms the working schedule, accommodation or transport, setup costs and any cover allowance.'

export const householdSteps = [
  ['Tell us about your home', 'The food you love, the meals you need, your monthly budget and whether a live-in or daily live-out chef would suit you.'],
  ['Build your personal shortlist', 'We bring together suitable chefs from our network and handle the search and introductions around your household brief.'],
  ['Meet, talk and cook', 'Discuss the routine with your preferred chef. A paid cooking trial lets you experience the food and the fit in your own kitchen.'],
  ['Settle into your routine', 'We coordinate the start, menu preferences, grocery arrangements and a clear handover so everyone knows what a good day looks like.'],
  ['Keep the fit working', 'Your myCHEF contact stays involved, with early check-ins and support for menu changes, planned absences or a different chef match.'],
] as const

export const householdFaqs = [
  { q: 'What does a monthly household chef service include?', a: 'Chef matching and recruitment coordination, introductions, household onboarding and ongoing myCHEF support, alongside the chef service described in your proposal. The written scope sets out cooking days, hours, meal coverage and kitchen responsibilities.' },
  { q: 'Can I choose between a live-in and a daily live-out chef?', a: 'Yes. Both arrangements can be considered across our five culinary levels. Tell us about your routine and, for a live-in chef, the accommodation available. We discuss suitable people, schedules and the full monthly cost with you.' },
  { q: 'How much does a full-time household chef cost?', a: 'Our indicative monthly service bands start at AED 18,000 for a Standard Household Chef and reach AED 50,000 for an Elite Private Chef, before VAT and separate agreed costs. Household size, schedule, cooking requirements and accommodation affect the final proposal.' },
  { q: 'Can we try the chef before making a long-term commitment?', a: 'We can arrange a paid cooking trial with a suitable available chef. The menu, duration, ingredients and trial fee are agreed in advance so you can focus on the food, communication and how the chef fits your home.' },
  { q: 'What happens if the chef is not the right match?', a: 'Speak with your myCHEF contact. We work through your feedback and help arrange adjustments or a new match under your service agreement. Replacement timing, any fees and temporary cover are explained in the proposal.' },
  { q: 'Can I still book a chef for a few hours or a short stay?', a: 'Absolutely. Our [short-term chef service](/private-chef-dubai/short-term-chef), [part-time visits](/part-time-private-chef-dubai) and [weekly meal preparation](/weekly-meal-prep-dubai) remain available. Visit pricing and monthly household arrangements are quoted separately.' },
]

export const householdImage = (id: string, width = 1200) => `/images/household-chefs/${id}-${width}.webp`
export const householdImageSet = (id: string) => [480, 800, 1200, 1536].map(w => `${householdImage(id, w)} ${w}w`).join(', ')
