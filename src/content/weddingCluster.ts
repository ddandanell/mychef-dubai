/** Shared wedding-cluster facts. Import these — do not rewrite with drift. */

export const WEDDING_IDENTITY =
  'myCHEF designs and coordinates your catering plan, then matches your wedding with vetted chefs, service professionals and licensed culinary partners suited to the venue and menu. We manage the complete food and beverage operation and coordinate it with your wedding planner, venue and other suppliers.'

export const WEDDING_TIMELINE =
  'We recommend contacting us three to six months before your wedding. Larger weddings and peak dates from November to March should begin earlier — often six to twelve months. Short-notice weddings may be possible depending on the venue, menu and partner availability.'

export const WEDDING_TASTING =
  'After the date is held and the menu direction is agreed, typically four to eight weeks before the wedding. Larger or peak-season weddings: eight to twelve weeks.'

export const WEDDING_FINAL_NUMBERS =
  'Final guest count is seven to fourteen days before the wedding. The menu locks with those numbers.'

export const WEDDING_VAT = '5% VAT is shown as its own line on every proposal.'

export const WEDDING_PATHS = {
  hub: '/wedding-catering-dubai',
  cost: '/blog/wedding-catering-cost-dubai',
  checklist: '/wedding-catering-checklist-dubai',
  menu: '/wedding-catering-menu-planning-dubai',
} as const

export const WEDDING_INQUIRY =
  '/inquiry'

export const WEDDING_WHATSAPP_MESSAGE =
  "Hi myCHEF Dubai, wedding catering brief. Date: __. Venue/area: __. Guests: __. Format (plated/buffet/family-style/stations/canapés/not sure): __. Cuisine: __. Dietary: __. Budget band: __. Need (staff/bar/cake/dessert/rentals): __. Planner: __ (via mychef.ae/wedding-catering-dubai)"

export const WEDDING_WHATSAPP_LINK = `https://wa.me/971551744849?text=${encodeURIComponent(WEDDING_WHATSAPP_MESSAGE)}`

export const inclusionBuckets = {
  always: [
    'Menu design',
    'Chef matching',
    'A named point of contact',
    'Dietary planning',
    'A written itemised proposal',
    'Setup and clear-down of the food service',
  ],
  whenAgreed: [
    'Service staff',
    'Tableware, glassware, linens',
    'Bar team',
    'Styling',
    'On-site cooking equipment',
    'A tasting',
  ],
  optional: [
    'Cake and dessert table',
    'Grazing table',
    'Live stations',
    'Late-night food',
    'Children’s menu',
    'Vendor meals',
    'Coffee cart',
    'Extra rental furniture',
  ],
  venue: [
    'Kitchen access',
    'Power, water, waste removal',
    'Corkage and supplier-list fees',
    'Weather cover',
    'Loading windows',
  ],
  partners: [
    'Alcohol service',
    'Some hotel-ballroom executions',
    'Specialist pastry',
    'Temporary kitchens where the site has no production space',
  ],
} as const

/** Planning estimates, 2026, plus 5% VAT. Cost article owns the full table. */
export const estimateBands = [
  {
    product: 'Food-only or drop-off wedding buffet',
    estimate: 'From about AED 120 per guest. Minimum about 20 guests. Food and delivery, not a staffed reception.',
  },
  {
    product: 'Full-service wedding buffet',
    estimate: 'Typically AED 180–350 per guest in the wider Dubai market; myCHEF’s published full-service buffet guide sits around AED 220–420. Minimum about 20 guests.',
  },
  {
    product: 'Live stations or premium buffet',
    estimate: 'Typically AED 250–500 per guest once chefs stand in front of the room. Food-led station starting point about AED 150; staffed wedding stations usually land higher.',
  },
  {
    product: 'Canapé reception',
    estimate: 'Typically AED 120–250 per guest for the hour, or AED 180–350 on myCHEF’s published canapé guide. Usually added to dinner, not used instead of it.',
  },
  {
    product: 'Hotel-style plated wedding dinner',
    estimate: 'Typically AED 250–550 per guest with independent or hotel teams; five-star in-house packages often AED 380–800+ and may bundle the room.',
  },
  {
    product: 'Chef-led plated villa dinner (myCHEF’s core product)',
    estimate: 'Typically AED 700–950 per guest, rising toward AED 1,200 for a luxury tasting. Named chef and service team cooking on site, not a banquet drop-off.',
  },
] as const

export const estimateFloors =
  'Typical minimum booking values already published on the site: from about AED 900 for food-led orders; chef-led evenings often sit on package floors around AED 2,400 / 3,600 / 4,500 depending on the team.'

export const hubEstimateSummary =
  'A food-led wedding buffet or station plan in Dubai often sits around AED 180–350 per guest once staff are in the room — less if it is true drop-off, more if you open live kitchens. A chef-led plated dinner in a villa, the evening most couples mean when they want myCHEF in the house, typically sits around AED 700–950 per guest. Hotel ballroom packages are a third thing: often AED 380–800+ and they may already include the room. Small villa dinners often work to a night minimum around AED 2,400–4,500 rather than a cheap head-rate.'

export const WEDDING_DIETARY =
  'We plan vegetarian, vegan, Jain, gluten-free, dairy-free and nut-conscious covers when you share them in time. Halal is the default kitchen standard. We are allergy-aware and allergen-conscious. Cross-contact cannot be ruled out unless controls have been confirmed for the assigned kitchen.'

export const WEDDING_ALCOHOL =
  'Alcohol is venue-licence dependent. Soft drinks, mocktails, tea and coffee can be planned through myCHEF. Spirit and wine service is coordinated with the venue or a licensed partner.'

export const WEDDING_SEASON =
  'Peak outdoor season: November to March. Shoulder: October and April. Indoor or cooled-marquee season: May to September.'

export const ESTIMATE_CAPTION = 'Planning estimates, 2026, plus 5% VAT.'

export const FIGURES_REVIEWED = 'August 2026'

export const WEDDING_SETUP =
  'Setup is usually about two hours before guests. Service is usually about three hours unless the run sheet is longer.'
