/**
 * Corporate package register and estimate rules.
 *
 *   npx tsx scripts/test-corporate-packages.ts
 */
import { CORPORATE_INVENTORY, inventoryForPath } from '../src/content/corporateInventory'
import {
  ADVERTISED,
  CORPORATE_PACKAGES,
  CORPORATE_VAT_RATE,
  corporateInquiryHref,
  estimateCorporatePackage,
  packageById,
  packagesForOwner,
  publicPriceLabel,
} from '../src/content/corporatePackages'

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

eq('thirty packages', CORPORATE_PACKAGES.length, 30)
eq('stable ids unique', new Set(CORPORATE_PACKAGES.map((pkg) => pkg.id)).size, 30)
eq('VAT 5%', CORPORATE_VAT_RATE, 0.05)
eq('drop-off floor', ADVERTISED.dropOffPerPerson, 90)
eq('buffet floor', ADVERTISED.buffetPerPerson, 120)
eq('canapé floor', ADVERTISED.canapePerPerson, 150)
eq('plated band', [ADVERTISED.platedMin, ADVERTISED.platedMax], [700, 950])
eq('dinner package', ADVERTISED.dinnerPackageAed, 4500)

const dinner = packageById('corp-dinner-package')
eq('dinner is a package unit', dinner?.pricingUnit, 'package')
eq('dinner guests 10-15', [dinner?.minGuests, dinner?.maxGuests], [10, 15])

const dinner12 = estimateCorporatePackage({ packageId: 'corp-dinner-package', guests: 12 })
eq('dinner 12 is ok', dinner12.ok, true)
if (dinner12.ok) {
  eq('dinner is not multiplied by 12', dinner12.food, 4500)
  eq('dinner VAT', dinner12.vat, Math.round(4500 * 0.05))
  eq('dinner total', dinner12.total, 4500 + Math.round(4500 * 0.05))
  eq('dinner per-person states 12', dinner12.perPersonAssumption, 12)
}

const dinner9 = estimateCorporatePackage({ packageId: 'corp-dinner-package', guests: 9 })
eq('dinner below range fails', dinner9.ok, false)
const dinner16 = estimateCorporatePackage({ packageId: 'corp-dinner-package', guests: 16 })
eq('dinner above range fails', dinner16.ok, false)
const dinnerDays = estimateCorporatePackage({ packageId: 'corp-dinner-package', guests: 12, days: 3 })
eq('dinner not multiplied by days', dinnerDays.ok, false)

const lunch = estimateCorporatePackage({ packageId: 'corp-office-lunch-dropoff', guests: 12 })
eq('office lunch ok', lunch.ok, true)
if (lunch.ok) {
  eq('office lunch food 12x90', lunch.food, 1080)
  eq('included delivery not added', lunch.delivery, 0)
  eq('drop-off has no included staff charge', lunch.additionalStaff, 0)
}

const tiny = estimateCorporatePackage({ packageId: 'corp-office-lunch-dropoff', guests: 4 })
eq('below min guests still estimates at minimum', tiny.ok, true)
if (tiny.ok) {
  eq('billed at 10', tiny.billedGuests, 10)
  eq('min order 900', tiny.food, 900)
}

const extraStaffOnIncluded = estimateCorporatePackage({
  packageId: 'corp-event-staff-party',
  guests: 40,
  extraStaffAed: 800,
})
eq('extra staff is additional, not a second copy of included waiters', extraStaffOnIncluded.ok && extraStaffOnIncluded.additionalStaff === 800, true)
eq(
  'food line still uses the buffet floor only',
  extraStaffOnIncluded.ok && extraStaffOnIncluded.food === 40 * 120,
  true,
)

const plated = estimateCorporatePackage({ packageId: 'corp-dinner-executive', guests: 8 })
eq('executive dinner uses 700 floor not 4500', plated.ok && plated.food === 5600, true)

const weekly = estimateCorporatePackage({ packageId: 'corp-office-weekly-lunch', guests: 15, days: 4 })
eq('weekly uses actual service days', weekly.ok && weekly.food === 15 * 90 * 4, true)

const retainer = estimateCorporatePackage({ packageId: 'corp-retainer-account', guests: 20 })
eq('retainer has no public estimate', retainer.ok, false)

eq(
  'office owner has packages',
  packagesForOwner('/office-catering-dubai').length >= 4,
  true,
)
eq(
  'dinner package label names guest range',
  publicPriceLabel(dinner!),
  'AED 4,500 for 10–15 guests',
)
eq(
  'inquiry prefill carries package id',
  corporateInquiryHref(dinner!).includes('package=corp-dinner-package'),
  true,
)

const owners = new Set(CORPORATE_PACKAGES.map((pkg) => pkg.ownerPath))
eq(
  'no protected general catering owner',
  [...owners].some((path) => path === '/catering-dubai' || path === '/yachts' || path === '/'),
  false,
)

eq('inventory sections', CORPORATE_INVENTORY.length >= 12, true)
eq('hub shows every inventory slice', inventoryForPath('/corporate').length, CORPORATE_INVENTORY.length)
eq('office is a slice not the whole list', inventoryForPath('/office-catering-dubai').length < CORPORATE_INVENTORY.length, true)
eq('office still has formats and week', inventoryForPath('/office-catering-dubai').some((s) => s.id === 'corp-inv-office'), true)
eq('production slice exists', inventoryForPath('/production-catering-dubai').some((s) => s.id === 'corp-inv-production'), true)

if (fails) {
  console.error(`\n${fails} failed`)
  process.exit(1)
}
console.log('\nAll corporate package checks passed')
