export const HOUSEHOLD_PATH = '/full-time-private-chef-dubai'
export const LIVE_IN_PATH = '/private-chef-dubai/live-in-chef'
export const LIVE_OUT_PATH = '/private-chef-dubai/live-out-chef'
export const SHORT_TERM_PATH = '/private-chef-dubai/short-term-chef'

export const householdLevels = [
  { id: 'standard', number: 1, name: 'Standard Household Chef', focus: 'Everyday family favourites', description: 'Familiar meals, a practical weekly menu and a kitchen that runs to your routine.', details: 'A good starting point for straightforward family cooking, lunchbox preparation and dependable dinners.' },
  { id: 'select', number: 2, name: 'Select Household Chef', focus: 'More variety, thoughtfully planned', description: 'A broader repertoire, independent shopping and easy meals for visiting friends.', details: 'For households that enjoy changing menus, seasonal ingredients and informal entertaining alongside daily cooking.' },
  { id: 'senior', number: 3, name: 'Senior Private Chef', focus: 'A more personal kitchen', description: 'Specialist cuisines and different family preferences brought together in one workable plan.', details: 'For homes with several food preferences, detailed meal planning or regular coordination with household staff.' },
  { id: 'executive', number: 4, name: 'Executive Private Chef', focus: 'Daily living. Beautiful entertaining.', description: 'Refined cooking, considered sourcing and confident organisation of the household kitchen.', details: 'For families who want their everyday food and occasional guest dining handled with the same attention.' },
  { id: 'elite', number: 5, name: 'Elite Private Chef', focus: 'An exceptional personal brief', description: 'Highly individual menus and culinary support for demanding residences and private entertaining.', details: 'For principal households, specialist dining and complex routines. Travel, extra chefs and larger teams are scoped separately.' },
] as const

export type HouseholdLevelId = typeof householdLevels[number]['id']
export type HouseholdArrangement = 'live-in' | 'live-out' | 'help-me-choose'
export const money = (value: number) => `AED ${value.toLocaleString('en-AE')}`
// Commercial bands describe the complete managed service, independently of culinary level.
export const MATCH_ACTIVATION_FEE = 950
export const householdBudgetOptions = [
  'Under AED 15,000', 'AED 15,000–20,000', 'AED 20,000–25,000',
  'AED 25,000–30,000', 'AED 30,000–40,000', 'AED 40,000+',
  'Flexible for an exceptional match',
] as const
export const managedHouseholdBands = [
  { id: 'managed', name: 'Managed Household Chef', price: 'From approximately AED 20,000', unit: 'per month', description: 'Everyday family cooking, an agreed household role and ongoing myCHEF management.', detail: 'For a clear, workable schedule and a chef whose experience fits your household brief.' },
  { id: 'premium', name: 'Premium Managed Household', price: 'Approximately AED 24,000–30,000', unit: 'per month', description: 'More experienced chefs, a wider cooking repertoire or a more involved household routine.', detail: 'For larger families, broader responsibilities and more complex food preferences.' },
  { id: 'executive', name: 'Executive / Estate Chef', price: 'Individually quoted', unit: 'around your brief', description: 'Senior culinary talent for principal households, private entertaining and extensive responsibilities.', detail: 'Travel, multiple residences, extra staff and specialist requirements are assessed individually.' },
] as const
export const householdPriceNote = 'Indicative service fees before 5% VAT. The monthly proposal includes the agreed chef service and myCHEF management. Match Activation, paid trials, groceries and agreed extras are separate. Accommodation, transport, travel, additional staff and temporary cover are itemised where relevant.'

export const householdSteps = [
  ['Tell us the essentials', 'Share your Dubai area, household size, live-in or live-out preference, schedule, start date and complete monthly budget. We check whether Managed Household is right for you.'],
  ['Build your Private Household Brief', 'We explore your food, routines, favourite dishes and working style together. You approve the brief, realistic budget and scope before a search is accepted.'],
  ['Activate your personal search', 'The AED 950 Match Activation covers the agreed search, screening, availability checks, curated introductions and interview coordination. The first matching stage typically takes 3–5 working days after activation; specialist searches can take longer.'],
  ['Meet, then try the cooking', 'You receive a considered shortlist with our reasons for each match. Meet the chef and arrange a paid home trial, with the menu, duration, ingredients and fee agreed beforehand.'],
  ['Begin your Learning Month', 'Once you choose your chef and approve the service agreement, the first 30 days focus on learning your tastes, kitchen and routine. Your myCHEF contact checks in and helps make adjustments.'],
  ['Keep building the relationship', 'Your approved Household Food Profile develops with your feedback. Monthly reviews, chef support and rematching coordination keep the arrangement responsive as life changes.'],
] as const

export const householdFaqs = [
  { q: 'What is myCHEF Managed Household?', a: 'A managed household chef relationship in Dubai. We learn your requirements, coordinate a personal chef search, help with interviews and a paid trial, support onboarding and stay involved through the monthly service. Your chef handles the agreed cooking responsibilities; myCHEF remains your contact for feedback, support and rematching.' },
  { q: 'How much does a full-time private chef cost?', a: 'Managed Household Chef services start from approximately AED 20,000 per month. Premium arrangements are approximately AED 24,000–30,000; Executive / Estate roles are individually quoted. These are indicative client service fees including myCHEF management, before 5% VAT. AED 950 Match Activation, paid trials, groceries and agreed extras are separate. Your written proposal confirms the complete cost.' },
  { q: 'What does the AED 950 Match Activation cover?', a: 'The agreed personal search, initial screening, availability checks, curated introductions, interview coordination and refinement of the search where needed. It is separate from monthly management and any paid cooking trial. We first review your brief and budget and accept a search only when we believe it is realistic. The fee is before 5% VAT; the activation terms are provided before payment.' },
  { q: 'How long does matching take?', a: 'The first matching stage typically takes 3–5 working days after your brief is approved and the search is activated. This is a target for initial matching, not a guaranteed chef start date. Specialist requirements, interviews, trials and a chef’s notice period may take longer.' },
  { q: 'Can I choose a live-in or live-out chef?', a: 'Yes. Living arrangements and culinary experience are separate choices. A live-in role requires suitable accommodation; a live-out role needs a workable travel and arrival schedule. Working hours, days off, meals and responsibilities are agreed in either arrangement.' },
  { q: 'What happens during the first 30 days?', a: 'The Learning Month gives the chef time to understand portions, seasoning, meal times, family favourites and kitchen routines. We plan early check-ins and a first-month review, record useful feedback with your permission and help refine the service.' },
  { q: 'What if we need a different chef?', a: 'You may request rematching whenever something is not working. During an active Managed Household agreement, continued matching for substantially the same role does not require another activation fee. We review your feedback, update the brief and coordinate suitable introductions. New chef costs may differ, paid trials remain chargeable and temporary cover or a materially changed role may cost extra. Timing depends on suitable availability.' },
  { q: 'Is holiday or emergency cover included?', a: 'We discuss continuity in your service agreement. Planned absence may be addressed with a relief chef, advance meal preparation or an adjusted schedule. Unexpected absence depends on available relief capacity. Temporary cover may cost extra, and an immediate replacement is not guaranteed.' },
  { q: 'Who can see our Household Food Profile?', a: 'We retain useful household information with your permission and share relevant details with the people supporting your service. You can ask us to correct it. During a chef change, only approved information needed for the handover is passed on. See our [privacy policy](/privacy-policy) or discuss specific confidentiality requirements with your myCHEF contact.' },
  { q: 'Can we learn to cook or preserve family recipes?', a: 'Tell us if you would enjoy learning with your chef or recording a meaningful family recipe. We confirm teaching capability, permission and the extra time or scope required as part of your arrangement. These are optional services.' },
  { q: 'What if we only need a few visits each week?', a: 'Explore [part-time chef visits](/part-time-private-chef-dubai), [weekly meal preparation](/weekly-meal-prep-dubai) or [short-term chef bookings](/private-chef-dubai/short-term-chef). These are priced separately from Managed Household and may be a better fit for a smaller schedule or budget.' },
]

export const householdImage = (id: string, width = 1200) => `/images/household-chefs/${id}-${width}.webp`
export const householdImageSet = (id: string) => [480, 800, 1200, 1536].map(w => `${householdImage(id, w)} ${w}w`).join(', ')
