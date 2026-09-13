/**
 * Thirty corporate packages mapped onto existing owner URLs.
 * Idea list treated as occasion + meal + format + service + beverage + dietary.
 * Do not mint extra URLs. Do not publish proposed rates.
 */

export type PriceEvidence = 'advertised' | 'competitor' | 'proposed' | 'approved'
export type PriceVisibility = 'public' | 'preview' | 'hold'
export type PricingUnit = 'per_person' | 'package'
export type Coverage = 'food_only' | 'delivery' | 'delivery_setup' | 'full_staffed'

export type CorporatePackage = {
  id: string
  name: string
  ownerPath: string
  occasions: readonly string[]
  sampleMenu: readonly string[]
  portionNote: string
  pricingUnit: PricingUnit
  minGuests: number
  maxGuests?: number
  minOrderAed?: number
  includedGuestCount?: string
  serviceDuration: string
  includedStaff: string
  includedEquipment: string
  delivery: string
  exclusions: readonly string[]
  optionalAdditions: readonly string[]
  dietary: string
  bookingNotice: string
  tax: string
  validity: string
  coverage: Coverage
  includesStaff: boolean
  includesDelivery: boolean
  includesEquipment: boolean
  evidence: PriceEvidence
  priceVisibility: PriceVisibility
  publicAmountAed?: number
  publicAmountMaxAed?: number
  source: string
}

const DIETARY =
  'Halal ingredients are the default. Vegetarian, vegan and gluten-free dishes are planned when named in the brief. This is not a medical or allergen-free promise.'
const NOTICE_OFFICE = 'A few days is usually enough for a repeating drop-off. Headcount deadline is confirmed in the proposal.'
const NOTICE_EVENT = 'Two to four weeks is comfortable for a staffed event. Earlier between November and March.'
const TAX = '5% VAT is shown as its own line. Figures on this page are before VAT unless labelled.'
const VALIDITY = 'The written proposal is the offer. Page figures are starting points, not a booking.'

const dropOffExclusions = [
  'Service staff in the room',
  'Open bar or alcohol unless separately agreed and licensed',
  'Venue hire, AV, staging or entertainment',
] as const

function dropOff(
  partial: Pick<CorporatePackage, 'id' | 'name' | 'ownerPath' | 'occasions' | 'sampleMenu' | 'portionNote' | 'serviceDuration'> &
    Partial<Pick<CorporatePackage, 'minGuests' | 'bookingNotice'>>,
): CorporatePackage {
  return {
    pricingUnit: 'per_person',
    minGuests: partial.minGuests ?? 10,
    minOrderAed: 900,
    includedStaff: 'None remaining in the room. Your team serves itself.',
    includedEquipment: 'Sealed packaging, serving tongs, napkins and labels.',
    delivery: 'Delivered and laid out on the table or counter. Collection of empties on request.',
    exclusions: dropOffExclusions,
    optionalAdditions: ['Staffed setup', 'Beverage station', 'Fruit platters'],
    dietary: DIETARY,
    bookingNotice: partial.bookingNotice ?? NOTICE_OFFICE,
    tax: TAX,
    validity: VALIDITY,
    coverage: 'delivery',
    includesStaff: false,
    includesDelivery: true,
    includesEquipment: true,
    evidence: 'advertised',
    priceVisibility: 'public',
    publicAmountAed: 90,
    source: 'src/content/cateringPricing.ts drop-off floor',
    ...partial,
  }
}

function buffet(
  partial: Pick<CorporatePackage, 'id' | 'name' | 'ownerPath' | 'occasions' | 'sampleMenu' | 'portionNote' | 'serviceDuration'> &
    Partial<Pick<CorporatePackage, 'minGuests' | 'bookingNotice'>>,
): CorporatePackage {
  return {
    pricingUnit: 'per_person',
    minGuests: partial.minGuests ?? 20,
    includedStaff: '1–2 service staff for setup, replenishing and clearance.',
    includedEquipment: 'Chafing dishes, linen and service ware for the line.',
    delivery: 'Delivered, set and cleared. Unusual venue access is quoted separately.',
    exclusions: ['Open flame where the building forbids it', 'AV, staging, entertainment, venue hire', 'Alcohol unless licensed and agreed'],
    optionalAdditions: ['Extra waiter', 'Live station', 'Dessert table'],
    dietary: DIETARY,
    bookingNotice: partial.bookingNotice ?? NOTICE_EVENT,
    tax: TAX,
    validity: VALIDITY,
    coverage: 'full_staffed',
    includesStaff: true,
    includesDelivery: true,
    includesEquipment: true,
    evidence: 'advertised',
    priceVisibility: 'public',
    publicAmountAed: 120,
    source: 'src/content/cateringPricing.ts buffet floor',
    ...partial,
  }
}

function canape(
  partial: Pick<CorporatePackage, 'id' | 'name' | 'ownerPath' | 'occasions' | 'sampleMenu' | 'portionNote' | 'serviceDuration'> &
    Partial<Pick<CorporatePackage, 'minGuests' | 'bookingNotice'>>,
): CorporatePackage {
  return {
    pricingUnit: 'per_person',
    minGuests: partial.minGuests ?? 10,
    includedStaff: '2–4 staff to pass, replenish and clear.',
    includedEquipment: 'Trays, stands and holding equipment.',
    delivery: 'Team arrives ahead of guest flow. Pack-down after the last pass.',
    exclusions: ['A seated dinner', 'AV and staging', 'Alcohol unless the venue licence allows it and it is agreed'],
    optionalAdditions: ['Bowl-food station', 'Mocktail bar labour', 'Branded napkins'],
    dietary: DIETARY,
    bookingNotice: partial.bookingNotice ?? NOTICE_EVENT,
    tax: TAX,
    validity: VALIDITY,
    coverage: 'full_staffed',
    includesStaff: true,
    includesDelivery: true,
    includesEquipment: true,
    evidence: 'advertised',
    priceVisibility: 'public',
    publicAmountAed: 150,
    source: 'src/content/cateringPricing.ts canapé / live-station floor',
    ...partial,
  }
}

function plated(
  partial: Pick<CorporatePackage, 'id' | 'name' | 'ownerPath' | 'occasions' | 'sampleMenu' | 'portionNote' | 'serviceDuration'> &
    Partial<Pick<CorporatePackage, 'minGuests' | 'bookingNotice'>>,
): CorporatePackage {
  return {
    pricingUnit: 'per_person',
    minGuests: partial.minGuests ?? 2,
    includedStaff: 'Chef plus service team sized to the table. Not the same headcount at every guest number.',
    includedEquipment: 'Service ware and cooking kit for the room.',
    delivery: 'Cooked and served on site. Access and power are checked before the menu is locked.',
    exclusions: ['Venue hire', 'AV', 'A drop-off lunch rate'],
    optionalAdditions: ['Canapé arrival', 'Wine service where licensed', 'Printed menus'],
    dietary: DIETARY,
    bookingNotice: partial.bookingNotice ?? NOTICE_EVENT,
    tax: TAX,
    validity: VALIDITY,
    coverage: 'full_staffed',
    includesStaff: true,
    includesDelivery: true,
    includesEquipment: true,
    evidence: 'advertised',
    priceVisibility: 'public',
    publicAmountAed: 700,
    publicAmountMaxAed: 950,
    source: 'src/content/cateringPricing.ts chef-led plated band',
    ...partial,
  }
}

function proposal(
  partial: Omit<CorporatePackage, 'evidence' | 'priceVisibility' | 'tax' | 'validity' | 'dietary'> &
    Partial<Pick<CorporatePackage, 'dietary' | 'tax' | 'validity'>>,
): CorporatePackage {
  return {
    evidence: 'proposed',
    priceVisibility: 'preview',
    dietary: DIETARY,
    tax: TAX,
    validity: VALIDITY,
    ...partial,
  }
}

export const CORPORATE_PACKAGES: readonly CorporatePackage[] = [
  dropOff({
    id: 'corp-office-breakfast-dropoff',
    name: 'Office breakfast drop-off',
    ownerPath: '/office-catering-dubai',
    occasions: ['weekday breakfast', 'early meeting'],
    sampleMenu: ['Egg and labneh wraps', 'Seasonal fruit', 'Granola pots', 'Arabic coffee and tea'],
    portionNote: 'One breakfast set per person.',
    serviceDuration: 'Laid out before the floor fills. Typically a 45–60 minute window.',
  }),
  dropOff({
    id: 'corp-office-lunch-dropoff',
    name: 'Weekday office lunch drop-off',
    ownerPath: '/office-catering-dubai',
    occasions: ['daily office lunch', 'team lunch'],
    sampleMenu: ['Grain bowl or sandwich rotation', 'Salad', 'Cut fruit', 'Still water'],
    portionNote: 'One lunch per person. Labels carry dietary marks.',
    serviceDuration: 'Delivered to the agreed window. You clear trays.',
  }),
  dropOff({
    id: 'corp-office-weekly-lunch',
    name: 'Recurring weekly office lunch',
    ownerPath: '/office-catering-dubai',
    occasions: ['repeating workplace lunch'],
    sampleMenu: ['Two-week rotating mains', 'Salad', 'Fruit', 'Water'],
    portionNote: 'Same headcount each service day. Actual service days are billed. No automatic volume discount.',
    serviceDuration: 'Fixed days and window. One monthly invoice.',
  }),
  buffet({
    id: 'corp-office-meeting-buffet',
    name: 'Office meeting buffet',
    ownerPath: '/office-catering-dubai',
    occasions: ['town hall', 'all-hands lunch'],
    sampleMenu: ['Two hot mains', 'Rice or bread', 'Salad', 'Dessert bites'],
    portionNote: 'Buffet line sized to the room. Minimum 20 guests.',
    serviceDuration: 'Setup, service window and clearance in one sitting.',
  }),
  dropOff({
    id: 'corp-lunch-boxed',
    name: 'Boardroom boxed working lunch',
    ownerPath: '/business-lunch-catering-dubai',
    occasions: ['working meeting', 'training lunch'],
    sampleMenu: ['Named boxed main', 'Side salad', 'Sweet', 'Water'],
    portionNote: 'One labelled box per seat, easy to eat during the meeting.',
    serviceDuration: 'Delivered before the agenda slot. No staff remaining in the room.',
  }),
  dropOff({
    id: 'corp-lunch-boardroom',
    name: 'Boardroom sharing lunch',
    ownerPath: '/business-lunch-catering-dubai',
    occasions: ['board meeting', 'internal review'],
    sampleMenu: ['Sharing platters', 'Salad', 'Bread', 'Cut fruit'],
    portionNote: 'Platters for the table, not a canteen line.',
    serviceDuration: 'Laid out, then left. Clearance by facilities unless staffed.',
  }),
  plated({
    id: 'corp-lunch-client',
    name: 'Client lunch, plated',
    ownerPath: '/business-lunch-catering-dubai',
    occasions: ['client lunch', 'partner lunch'],
    sampleMenu: ['Starter', 'Main', 'Dessert'],
    portionNote: 'Starter, main and dessert at the table. AED 700–950 per person, separate from drop-off lunch.',
    serviceDuration: 'Up to a three-course sitting.',
    minGuests: 2,
  }),
  dropOff({
    id: 'corp-conf-coffee',
    name: 'Conference coffee break',
    ownerPath: '/conference-catering-dubai',
    occasions: ['morning break', 'afternoon break', 'seminar break'],
    sampleMenu: ['Coffee and tea', 'Pastries or savoury bites', 'Fruit', 'Water'],
    portionNote: 'One refreshment break per delegate. A barista or full coffee cart is quoted separately if you want it.',
    serviceDuration: 'Timed to the agenda slot, typically 15–30 minutes.',
    minGuests: 10,
    bookingNotice: NOTICE_EVENT,
  }),
  buffet({
    id: 'corp-conf-half-day',
    name: 'Half-day conference catering',
    ownerPath: '/conference-catering-dubai',
    occasions: ['half-day seminar', 'training morning'],
    sampleMenu: ['Arrival coffee', 'One break', 'Working lunch'],
    portionNote: 'Starting price uses the staffed buffet rate. Includes arrival coffee, one break and lunch for each delegate over up to four hours. Extra venue costs are separate.',
    serviceDuration: 'Up to four hours of food service around the agenda.',
  }),
  buffet({
    id: 'corp-conf-full-day',
    name: 'Full-day conference catering',
    ownerPath: '/conference-catering-dubai',
    occasions: ['full-day conference', 'offsite'],
    sampleMenu: ['Arrival coffee', 'Morning break', 'Lunch', 'Afternoon break'],
    portionNote: 'Starting price uses the same staffed buffet rate. Includes two breaks and lunch for each delegate across the conference day. The meal plan is larger than the half-day; the quote lists the actual trays and hours.',
    serviceDuration: 'One conference day. Refreshments continue between sessions on the staffed format.',
  }),
  proposal({
    id: 'corp-conf-multi-day',
    name: 'Multi-day conference catering',
    ownerPath: '/conference-catering-dubai',
    occasions: ['multi-day conference'],
    sampleMenu: ['Rotating lunch', 'Breaks each day', 'Dietary map carried across days'],
    portionNote: 'Each service day is billed. No automatic multi-day discount.',
    pricingUnit: 'per_person',
    minGuests: 20,
    serviceDuration: 'Named number of days in the proposal.',
    includedStaff: 'Staffed breaks and lunch. Headcount set per day.',
    includedEquipment: 'Stations and holding equipment.',
    delivery: 'Daily load-in timed to the agenda.',
    exclusions: ['AV, staging, venue hire', 'Delegate hotels'],
    optionalAdditions: ['Dinner on one evening', 'All-day refreshment station'],
    coverage: 'full_staffed',
    includesStaff: true,
    includesDelivery: true,
    includesEquipment: true,
    bookingNotice: NOTICE_EVENT,
    source: 'Proposed complete-operation rate. Not an approved public price.',
  }),
  proposal({
    id: 'corp-conf-training',
    name: 'Training-day catering',
    ownerPath: '/conference-catering-dubai',
    occasions: ['training day'],
    sampleMenu: ['Arrival coffee', 'Boxed or buffet lunch', 'Afternoon break'],
    portionNote: 'Same as a half-day or full-day, chosen in the brief.',
    pricingUnit: 'per_person',
    minGuests: 10,
    serviceDuration: 'One training day.',
    includedStaff: 'Depends on drop-off versus staffed lunch.',
    includedEquipment: 'As per the chosen format.',
    delivery: 'Timed to the training agenda.',
    exclusions: ['Facilitation, AV, room hire'],
    optionalAdditions: ['All-day fruit and water station'],
    coverage: 'delivery_setup',
    includesStaff: false,
    includesDelivery: true,
    includesEquipment: true,
    bookingNotice: NOTICE_OFFICE,
    source: 'Proposed. Public quote uses advertised drop-off or buffet floors.',
  }),
  buffet({
    id: 'corp-event-staff-party',
    name: 'Staff party buffet',
    ownerPath: '/corporate-event-catering-dubai',
    occasions: ['staff party', 'company celebration', 'office party'],
    sampleMenu: ['Hot buffet', 'Salad', 'Dessert', 'Soft drinks'],
    portionNote: 'Standing or seated buffet. Minimum 20 guests.',
    serviceDuration: 'One evening service and clearance.',
  }),
  canape({
    id: 'corp-event-networking',
    name: 'Networking canapé reception',
    ownerPath: '/corporate-event-catering-dubai',
    occasions: ['networking', 'after-work reception'],
    sampleMenu: ['8–10 passed canapés', 'One sweet', 'Soft drinks and water'],
    portionNote: 'About 8–12 pieces per guest over a 90-minute reception.',
    serviceDuration: 'Typically 90 minutes of passing, then clearance.',
  }),
  buffet({
    id: 'corp-event-seasonal',
    name: 'Seasonal corporate gathering',
    ownerPath: '/corporate-event-catering-dubai',
    occasions: ['end-of-year gathering', 'company iftar when in season'],
    sampleMenu: ['Seasonal buffet or stations', 'Dessert', 'Soft drinks'],
    portionNote: 'Quoted per event. Seasonal menus follow the calendar, not a leftover year in the copy.',
    serviceDuration: 'One event window.',
  }),
  canape({
    id: 'corp-event-awards',
    name: 'Awards-night reception',
    ownerPath: '/corporate-event-catering-dubai',
    occasions: ['awards night', 'recognition evening'],
    sampleMenu: ['Canapés through speeches', 'Optional seated course on the gala page'],
    portionNote: 'Standing food during speeches. A seated banquet is a different package.',
    serviceDuration: 'Timed to the run of show. We pause for speeches.',
  }),
  canape({
    id: 'corp-launch-canape',
    name: 'Product launch canapé reception',
    ownerPath: '/product-launch-catering-dubai',
    occasions: ['product launch', 'showroom launch'],
    sampleMenu: ['Passed canapés timed to the reveal', 'One signature bite', 'Soft drinks'],
    portionNote: 'Standing canapés timed around the reveal. Easy to pause for speeches.',
    serviceDuration: 'Arrival hour plus reveal window.',
  }),
  canape({
    id: 'corp-launch-press',
    name: 'Press launch hospitality',
    ownerPath: '/product-launch-catering-dubai',
    occasions: ['press launch'],
    sampleMenu: ['Canapés', 'Coffee', 'Still and sparkling water'],
    portionNote: 'Smaller room, tighter timing, labelled dietary plates.',
    serviceDuration: 'Press hour, then pack-down.',
    minGuests: 10,
  }),
  dropOff({
    id: 'corp-expo-stand',
    name: 'Exhibition stand hospitality',
    ownerPath: '/exhibition-catering-dubai',
    occasions: ['trade stand', 'visitor refreshments'],
    sampleMenu: ['Bites that hold without a kitchen', 'Water', 'Coffee where power exists'],
    portionNote: 'Visitor hospitality at the stand. No on-stand kitchen assumed. Replenishment follows hall rules.',
    serviceDuration: 'Show hours named in the brief.',
    bookingNotice: NOTICE_EVENT,
  }),
  dropOff({
    id: 'corp-expo-exhibitor',
    name: 'Exhibitor crew meals',
    ownerPath: '/exhibition-catering-dubai',
    occasions: ['exhibitor meals', 'build-up crew'],
    sampleMenu: ['Boxed lunch', 'Fruit', 'Water'],
    portionNote: 'Meals for the exhibitor team, separate from visitor hospitality at the stand.',
    serviceDuration: 'Delivered to the stand or marshalling point.',
  }),
  {
    id: 'corp-dinner-package',
    name: 'Corporate dinner package',
    ownerPath: '/corporate-dinner-package-dubai',
    occasions: ['board dinner', 'team dinner', 'client dinner for 10–15'],
    sampleMenu: [
      'Starter: burrata and tomato salad',
      'Mains: grilled salmon, herb chicken, vegetables, risotto',
      'Dessert: chocolate fondant or fruit tartlets',
    ],
    portionNote: 'Fixed package price of AED 4,500 for 10–15 guests, including a private chef and service team. Not multiplied by headcount.',
    pricingUnit: 'package',
    minGuests: 10,
    maxGuests: 15,
    includedGuestCount: '10–15 guests',
    serviceDuration: 'One dinner service, typically up to four hours including setup and clearance.',
    includedStaff: 'Private chef and service staff sized to this table. The same total does not claim identical staffing at 10 and at 15.',
    includedEquipment: 'Tableware, linens and place settings.',
    delivery: 'Office or venue in Dubai. Setup, service and kitchen cleanup included.',
    exclusions: [
      'Tables larger than 15 guests; those are quoted as plated dining',
      'AV and presentation setup',
      'Alcohol unless licensed and agreed',
    ],
    optionalAdditions: ['Arrival canapés', 'Printed menus', 'Mocktail or licensed wine service'],
    dietary: DIETARY,
    bookingNotice: NOTICE_EVENT,
    tax: TAX,
    validity: VALIDITY,
    coverage: 'full_staffed',
    includesStaff: true,
    includesDelivery: true,
    includesEquipment: true,
    evidence: 'advertised',
    priceVisibility: 'public',
    publicAmountAed: 4500,
    source: 'EVENT_PACKAGES corporate-dinner in cateringPricing.ts',
  },
  plated({
    id: 'corp-dinner-executive',
    name: 'Executive plated dinner',
    ownerPath: '/corporate-dinner-package-dubai',
    occasions: ['executive dinner', 'small client dinner outside the 10–15 package'],
    sampleMenu: ['Canapé or starter', 'Main', 'Dessert'],
    portionNote: 'Chef-led courses at AED 700–950 per person. Use this when the table is smaller or larger than the 10–15 guest dinner package, or when you want a fully plated menu.',
    serviceDuration: 'Courses at the table.',
    minGuests: 2,
  }),
  buffet({
    id: 'corp-gala-banquet',
    name: 'Gala banquet',
    ownerPath: '/gala-dinner-catering-dubai',
    occasions: ['gala', 'formal banquet', 'awards dinner'],
    sampleMenu: ['Starter', 'Main', 'Dessert', 'Tea and coffee'],
    portionNote: 'A formal seated dinner with courses timed around speeches and awards. Wine only where the venue licence allows it.',
    serviceDuration: 'Seated run of show, typically three to four hours.',
  }),
  dropOff({
    id: 'corp-staff-daily',
    name: 'Daily staff meals',
    ownerPath: '/staff-meals-catering-dubai',
    occasions: ['workforce lunch', 'canteen sitting'],
    sampleMenu: ['Rotating hot main', 'Rice or bread', 'Salad', 'Fruit'],
    portionNote: 'A hot main, carbohydrate, salad and fruit for a known headcount, billed per meal.',
    serviceDuration: 'Named meals per week.',
    bookingNotice: NOTICE_OFFICE,
  }),
  dropOff({
    id: 'corp-staff-shift',
    name: 'Shift-based staff meals',
    ownerPath: '/staff-meals-catering-dubai',
    occasions: ['shift meals'],
    sampleMenu: ['Hot main that holds', 'Carbohydrate', 'Salad', 'Water'],
    portionNote: 'Billed on the meals we actually deliver, not empty calendar days.',
    serviceDuration: 'Each named shift.',
  }),
  proposal({
    id: 'corp-retainer-account',
    name: 'Corporate catering account',
    ownerPath: '/corporate-retainer-dubai',
    occasions: ['recurring corporate account'],
    sampleMenu: ['Drawn from office, lunch and event packages already on those pages'],
    portionNote: 'Credit, fees, expiry and overages are set only in the written agreement. No public monthly fee on this page.',
    pricingUnit: 'package',
    minGuests: 10,
    serviceDuration: 'Named term in the agreement.',
    includedStaff: 'As per each booking drawn from the account.',
    includedEquipment: 'As per each booking.',
    delivery: 'As per each booking.',
    exclusions: [
      'An LPO or consolidated invoice does not create credit terms by itself',
      'Unused credit rules are not published as a shop window',
    ],
    optionalAdditions: ['Named account contact', 'Monthly usage summary'],
    coverage: 'delivery',
    includesStaff: false,
    includesDelivery: false,
    includesEquipment: false,
    bookingNotice: 'Terms are proposed in writing. Nothing here is a retainer contract.',
    source: 'Commercial arrangement. AED 3,500 / 8,000 monthly figures on the old page are unapproved and held.',
  }),
  dropOff({
    id: 'corp-prod-craft',
    name: 'Production craft services',
    ownerPath: '/production-catering-dubai',
    occasions: ['shoot', 'film crew', 'event crew'],
    sampleMenu: ['Snacks through the call', 'Fruit', 'Hot drinks', 'Water'],
    portionNote: 'A separate purchase from crew lunch: snacks and drinks through the call hours, timed to the sheet.',
    serviceDuration: 'Call hours named on the sheet.',
    bookingNotice: NOTICE_OFFICE,
  }),
  dropOff({
    id: 'corp-prod-crew-lunch',
    name: 'Crew lunch',
    ownerPath: '/production-catering-dubai',
    occasions: ['crew lunch', 'wrap lunch'],
    sampleMenu: ['Hot main', 'Salad', 'Bread', 'Dessert'],
    portionNote: 'A separate purchase from craft services: one hot lunch per crew member named on the call sheet.',
    serviceDuration: 'One sitting, moved if the call moves.',
  }),
  canape({
    id: 'corp-brand-activation',
    name: 'Brand activation hospitality',
    ownerPath: '/brand-activation-catering-dubai',
    occasions: ['brand activation', 'experiential sampling'],
    sampleMenu: ['Signature bite', 'Passed canapés', 'Soft drinks'],
    portionNote: 'Canapés and small plates that guests can enjoy while they meet and mingle around the brand moment.',
    serviceDuration: 'Activation hours.',
  }),
  canape({
    id: 'corp-office-station',
    name: 'Office live station',
    ownerPath: '/office-catering-dubai',
    occasions: ['office celebration', 'Friday gathering'],
    sampleMenu: ['One live station', 'Salad', 'Soft drinks'],
    portionNote: 'Staffed cooking in the room. Building flame and power rules apply.',
    serviceDuration: 'One sitting.',
    minGuests: 15,
  }),
]

if (CORPORATE_PACKAGES.length !== 30) {
  throw new Error(`Expected 30 corporate packages, found ${CORPORATE_PACKAGES.length}`)
}
