/**
 * Birthday extras catalogue and enquiry helpers.
 *
 *   npx tsx scripts/test-birthday-extras.ts
 */
import { CATERING_FORMAT_BY_ID, eventPackageById } from '../src/content/cateringPricing'
import { BIRTHDAY_KEYWORD_LOCK, BIRTHDAY_PACKAGE, BIRTHDAY_SIBLING_LINKS } from '../src/content/birthdayCluster'
import { formatLadder, packagePointer, pricingH2 } from '../src/content/birthdayPage'
import {
  BIRTHDAY_BUNDLES,
  BIRTHDAY_BUDGET_EXAMPLE,
  BIRTHDAY_EXTRAS,
  BIRTHDAY_EXTRAS_DISCLAIMER,
  birthdayInquiryHref,
  birthdayInquirySubtitle,
  birthdayPrivateWhatsAppMessage,
  birthdayWhatsAppMessage,
  bundlePlanningTotal,
  extraById,
  extrasFromIds,
  parseBirthdayExtraIds,
  planningSubtotal,
  toggleExtraId,
  unionExtraIds,
} from '../src/content/birthdayExtras'
import { BIRTHDAY_PRIVATE_INQUIRY_HREF, isStatementScenarioId, privateEveningBands, statementScenarios, whatWeDont } from '../src/content/birthdayStatement'

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

eq('ten extras', BIRTHDAY_EXTRAS.length, 10)
eq('stable ids unique', new Set(BIRTHDAY_EXTRAS.map((item) => item.id)).size, 10)
eq('disclaimer is planning not shop', BIRTHDAY_EXTRAS_DISCLAIMER.includes('not a shop price'), true)
eq('disclaimer includes VAT', BIRTHDAY_EXTRAS_DISCLAIMER.includes('5% VAT'), true)

const mealBox = extraById('meal-box')
eq('meal box requires catering', mealBox?.requiresCatering, true)
eq('meal box min 10', mealBox?.minQty, 10)
eq('meal box 55', mealBox?.amountAed, 55)

eq('parse drops junk', parseBirthdayExtraIds('cake-standard,not-real,balloons,cake-standard'), [
  'cake-standard',
  'balloons',
])
eq('parse empty', parseBirthdayExtraIds(null), [])

eq('inquiry without extras', birthdayInquiryHref(), '/inquiry?from=birthday')
eq('private lane href', birthdayInquiryHref([], { lane: 'private' }), '/inquiry?from=birthday-private')
eq(
  'private scenario href',
  birthdayInquiryHref(['cake-standard'], { lane: 'private', scenario: 'palm-villa' }),
  '/inquiry?from=birthday-private&extras=cake-standard&scenario=palm-villa',
)
eq('private inquiry constant', BIRTHDAY_PRIVATE_INQUIRY_HREF, '/inquiry?from=birthday-private')
eq('five statement scenarios', statementScenarios.length, 5)
eq('palm villa is a scenario', isStatementScenarioId('palm-villa'), true)
eq('junk scenario rejected', isStatementScenarioId('not-real'), false)
eq(
  'private whatsapp asks surprise',
  birthdayPrivateWhatsAppMessage({ surprise: 'yes' }).includes('Surprise: yes'),
  true,
)
eq('yacht scenario says you arrange the boat', statementScenarios.some((item) => item.body.includes('You own or charter the boat')), true)
eq('do not hire yachts', whatWeDont.some((item) => item.includes('do not hire yachts')), true)
eq('3600 band is published', privateEveningBands[0].figure.includes('3,600'), true)
eq('villa band is typical not floor', privateEveningBands[1].note.includes('not a published floor'), true)
eq(
  'inquiry with extras',
  birthdayInquiryHref(['cake-standard', 'balloons']),
  '/inquiry?from=birthday&extras=cake-standard%2Cballoons',
)

const cakeColour = BIRTHDAY_BUNDLES.find((item) => item.id === 'cake-colour')
const littleGuests = BIRTHDAY_BUNDLES.find((item) => item.id === 'little-guests')
const picturePerfect = BIRTHDAY_BUNDLES.find((item) => item.id === 'picture-perfect')
eq('cake and colour total', cakeColour ? bundlePlanningTotal(cakeColour).amountAed : 0, 700)
eq('little guests total', littleGuests ? bundlePlanningTotal(littleGuests).amountAed : 0, 1500)
eq('picture perfect total', picturePerfect ? bundlePlanningTotal(picturePerfect).amountAed : 0, 2750)
eq('cake and colour is from', cakeColour ? bundlePlanningTotal(cakeColour).kind : '', 'from')

eq('toggle add', toggleExtraId([], 'cake-standard'), ['cake-standard'])
eq('toggle remove', toggleExtraId(['cake-standard'], 'cake-standard'), [])
eq('toggle ignores unknown', toggleExtraId(['cake-standard'], 'not-real'), ['cake-standard'])
eq('union keeps order unique', unionExtraIds(['cake-standard'], ['cake-standard', 'balloons']), [
  'cake-standard',
  'balloons',
])

eq('whatsapp names extras', birthdayWhatsAppMessage(['cake-standard']).includes('Birthday cake'), true)
eq('whatsapp asks for children ages', birthdayWhatsAppMessage().includes('Ages:'), true)
eq(
  'inquiry subtitle lists extras',
  birthdayInquirySubtitle(['photographer']).includes('Birthday photographer'),
  true,
)

eq('buffet floor unchanged', CATERING_FORMAT_BY_ID.buffet.fromPerPerson, 120)
eq('drop-off floor unchanged', CATERING_FORMAT_BY_ID['drop-off'].fromPerPerson, 90)
eq('drop-off min order', CATERING_FORMAT_BY_ID['drop-off'].minOrderAed, 900)
eq('plated band unchanged', [CATERING_FORMAT_BY_ID['plated-chef'].typicalMin, CATERING_FORMAT_BY_ID['plated-chef'].typicalMax], [
  700,
  950,
])
eq('birthday package 3600', eventPackageById('birthday').priceAed, 3600)
eq('birthday package guests', BIRTHDAY_PACKAGE.guests, '8–12 guests')
eq('package pointer names cake option', packagePointer.included.includes('Cake option'), true)

eq('budget 20 x 120', BIRTHDAY_BUDGET_EXAMPLE.foodBeforeVat, 20 * 120)
eq('budget VAT 5%', BIRTHDAY_BUDGET_EXAMPLE.vat, Math.round(BIRTHDAY_BUDGET_EXAMPLE.foodBeforeVat * 0.05))
eq('budget catering inc VAT', BIRTHDAY_BUDGET_EXAMPLE.cateringIncludingVat, 2520)
eq('budget illustrative total', BIRTHDAY_BUDGET_EXAMPLE.illustrativeTotalIncludingVat, 3220)

eq('ladder has birthday food delivery', formatLadder.some((row) => row.format === 'Birthday food delivery'), true)
eq('ladder has no stacked market', formatLadder.every((row) => !row.price.includes('Indicative market')), true)
eq('primary in one H2', pricingH2.toLowerCase().includes('birthday catering dubai'), true)
eq('title keeps primary first', BIRTHDAY_KEYWORD_LOCK.title.startsWith('Birthday Catering Dubai'), true)
eq('title under 65', BIRTHDAY_KEYWORD_LOCK.title.length <= 65, true)
eq('meta under 160', BIRTHDAY_KEYWORD_LOCK.description.length <= 160, true)
eq('h1 exact', BIRTHDAY_KEYWORD_LOCK.h1, 'Birthday Catering Dubai')

eq(
  'siblings match contract order',
  BIRTHDAY_SIBLING_LINKS.map((item) => item.href),
  [
    '/birthday-catering-package-dubai',
    '/blog/best-private-chef-birthday-dinner-dubai',
    '/private-party-catering-dubai',
  ],
)

eq('planning subtotal empty', planningSubtotal([]).amountAed, 0)
eq('extrasFromIds skips unknown', extrasFromIds(['nope', 'balloons']).map((item) => item.id), ['balloons'])

const noShopLanguage = !BIRTHDAY_EXTRAS_DISCLAIMER.toLowerCase().includes('buy now')
eq('disclaimer is not a checkout', noShopLanguage, true)

console.log(fails ? `\n${fails} FAILURES` : '\nALL PASS')
process.exit(fails ? 1 : 0)
