/**
 * Chef profile enquiry links must hit /inquiry with a chef preference, never a broken href.
 *
 *   npx tsx scripts/test-chef-inquiry.ts
 */
import { readFileSync } from 'node:fs'
import { chefInquiryHref, chefInquiryId } from '../src/lib/chefInquiry'
import { starterPackages } from '../src/data/starterPackages'

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = got === want
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

eq('id from nested slug', chefInquiryId('/chefs/marco-italian-chef'), 'marco-italian-chef')
eq(
  'href encodes preference',
  chefInquiryHref('/chefs/marco-italian-chef'),
  '/inquiry?from=chef&chef=marco-italian-chef',
)

const profile = readFileSync('src/pages/chefs/ChefProfile.tsx', 'utf8')
eq('no malformed inquiry string', profile.includes("/inquiry'/chefs/', '')}"), false)
eq('uses chefInquiryHref', profile.includes('chefInquiryHref'), true)

const one = starterPackages.find((p) => p.name === 'Fridge Reset — single visit')
const two = starterPackages.find((p) => p.name === 'Fridge Reset — member plan')
eq('single Fridge Reset is AED 1,350', one?.price, '1,350')
eq('member Fridge Reset is AED 900', two?.price, '900')
eq('stale 1,900 weekly card gone', starterPackages.some((p) => p.price === '1,900'), false)

if (fails) {
  console.error(`\n${fails} failed`)
  process.exit(1)
}
console.log('\nchef inquiry links OK')
