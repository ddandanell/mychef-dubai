/**
 * Yacht catering estimator — only numbers from the 113-guest Dubai Harbour proposal.
 *
 *   npx tsx scripts/test-yacht-catering-quote.ts
 */
import {
  LIVE_STATION_CHEFS_AED,
  OVERTIME_PER_SERVER_PER_HOUR_AED,
  YACHT_GUEST_DEFAULT,
  YACHT_GUEST_MAX,
  YACHT_GUEST_MIN,
  YACHT_MENU_FORMATS,
  YACHT_VAT_RATE,
  clampYachtGuests,
  estimateYachtCatering,
  yachtInquiryHref,
} from '../src/content/yachtCateringQuote'

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

eq('three formats only', YACHT_MENU_FORMATS.length, 3)
eq('canapé rate', YACHT_MENU_FORMATS[0].perGuestAed, 170)
eq('buffet rate', YACHT_MENU_FORMATS[1].perGuestAed, 162)
eq('live-station rate', YACHT_MENU_FORMATS[2].perGuestAed, 258)
eq('live station chefs', LIVE_STATION_CHEFS_AED, 720)
eq('overtime rate', OVERTIME_PER_SERVER_PER_HOUR_AED, 240)
eq('VAT rate', YACHT_VAT_RATE, 0.05)
eq('guest default', YACHT_GUEST_DEFAULT, 40)
eq('guest clamp low', clampYachtGuests(2), YACHT_GUEST_MIN)
eq('guest clamp high', clampYachtGuests(999), YACHT_GUEST_MAX)
eq('guest clamp round', clampYachtGuests(40.6), 41)

const buffet113 = estimateYachtCatering({
  guests: 113,
  formatId: 'buffet',
  extraIds: [],
  overtimeServers: 0,
  overtimeHours: 0,
})
eq('buffet 113 food', buffet113.food, 113 * 162)
eq('buffet 113 no live chefs', buffet113.liveChefs, 0)
eq('buffet 113 VAT rounded', buffet113.vat, Math.round(113 * 162 * 0.05))
eq('buffet 113 total matches real quote', buffet113.total, 19221)

const live113 = estimateYachtCatering({
  guests: 113,
  formatId: 'canape-live',
  extraIds: [],
  overtimeServers: 0,
  overtimeHours: 0,
})
eq('live 113 food', live113.food, 113 * 258)
eq('live 113 chefs', live113.liveChefs, 720)
eq('live 113 total matches real quote', live113.total, 31368)

const canape113 = estimateYachtCatering({
  guests: 113,
  formatId: 'canape',
  extraIds: [],
  overtimeServers: 0,
  overtimeHours: 0,
})
eq('canapé 113 food', canape113.food, 113 * 170)
eq('canapé 113 no live chefs', canape113.liveChefs, 0)
eq('canapé 113 uses formula not a guessed extra', canape113.total, 113 * 170 + Math.round(113 * 170 * 0.05))

const extras = estimateYachtCatering({
  guests: 40,
  formatId: 'canape',
  extraIds: ['bar-station', 'bartender-only', 'icebox'],
  overtimeServers: 2,
  overtimeHours: 1,
})
eq('bartender extras mutually exclusive — one bar line', extras.extras.filter((e) => e.group === 'bartender').length, 1)
eq('icebox kept with bartender', extras.extras.some((e) => e.id === 'icebox'), true)
eq('overtime 2×1×240', extras.overtime, 480)
eq('live chefs off unless format 3', extras.liveChefs, 0)

const liveNoInventedStation = estimateYachtCatering({
  guests: 40,
  formatId: 'buffet',
  extraIds: [],
  overtimeServers: 0,
  overtimeHours: 0,
})
eq('format 2 cannot sneak in live-chef price', liveNoInventedStation.liveChefs, 0)

eq(
  'inquiry href carries guests and format',
  yachtInquiryHref({ guests: 40, formatId: 'canape' }),
  '/inquiry?from=yachts&guests=40&format=canape',
)

if (fails) {
  console.log(`\n${fails} failure(s)`)
  process.exit(1)
}
console.log('\n✓ yacht catering quote tests passed')
