/**
 * Google RSA limits for docs/ads/birthday-rsa.json
 *
 *   npx tsx scripts/test-birthday-rsa.ts
 */
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const pack = JSON.parse(readFileSync(resolve('docs/ads/birthday-rsa.json'), 'utf8')) as {
  ad_groups: Array<{
    id: string
    headlines: string[]
    descriptions: string[]
    path1: string
    path2: string
    landing: string
    keywords: { exact?: string[]; phrase?: string[]; do_not_bid?: string[] }
  }>
  shared_assets: {
    sitelinks: Array<{ title: string; desc1: string; desc2: string; url: string }>
    callouts: string[]
  }
}

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = got === want
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

const max = (name: string, s: string, limit: number) => {
  const ok = s.length <= limit
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name} (${s.length}/${limit}): ${s}`)
}

eq('five ad groups', pack.ad_groups.length, 5)

for (const group of pack.ad_groups) {
  eq(`${group.id} 15 headlines`, group.headlines.length, 15)
  eq(`${group.id} 4 descriptions`, group.descriptions.length, 4)
  for (const h of group.headlines) max(`${group.id} H`, h, 30)
  for (const d of group.descriptions) max(`${group.id} D`, d, 90)
  max(`${group.id} path1`, group.path1, 15)
  max(`${group.id} path2`, group.path2, 15)
  eq(`${group.id} lands on birthday URL`, group.landing.includes('/birthday-catering-dubai'), true)
  eq(`${group.id} has utm_content`, group.landing.includes(`utm_content=${group.id}`), true)
}

const yacht = pack.ad_groups.find((g) => g.id === 'birthday-yacht')
eq('yacht does not bid yacht catering dubai exact', yacht?.keywords.do_not_bid?.includes('[yacht catering dubai]'), true)
eq(
  'yacht headlines say we do not hire',
  yacht?.headlines.includes('We Do Not Hire Yachts'),
  true,
)

const priv = pack.ad_groups.find((g) => g.id === 'birthday-private')
eq(
  'private group has no AED 90',
  ![...priv!.headlines, ...priv!.descriptions].some((s) => /AED 90/.test(s)),
  true,
)
eq(
  'private group has no AED 120',
  ![...priv!.headlines, ...priv!.descriptions].some((s) => /AED 120/.test(s)),
  true,
)

const banned = ['unforgettable', 'world-class', 'exquisite', 'luxurious', 'indulge', 'cheapest']
const allCopy = [
  ...pack.ad_groups.flatMap((g) => [...g.headlines, ...g.descriptions]),
  ...pack.shared_assets.callouts,
  ...pack.shared_assets.sitelinks.flatMap((s) => [s.title, s.desc1, s.desc2]),
]
eq(
  'no prohibited brochure words',
  allCopy.some((s) => banned.some((w) => s.toLowerCase().includes(w))),
  false,
)
eq(
  'kids group refuses allergen-free',
  pack.ad_groups.some(
    (g) => g.id === 'birthday-kids' && g.descriptions.some((d) => d.toLowerCase().includes('do not claim allergen-free')),
  ),
  true,
)

for (const link of pack.shared_assets.sitelinks) {
  max(`sitelink ${link.title}`, link.title, 25)
  max(`sitelink ${link.title} d1`, link.desc1, 35)
  max(`sitelink ${link.title} d2`, link.desc2, 35)
}
for (const c of pack.shared_assets.callouts) max(`callout ${c}`, c, 25)

console.log(fails ? `\n${fails} FAILURES` : '\nALL PASS')
process.exit(fails ? 1 : 0)
