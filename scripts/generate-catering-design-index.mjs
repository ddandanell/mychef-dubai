import { readFileSync, writeFileSync } from 'node:fs'

// Keep the route/image lookup small. Full hero copy and supporting photographs
// belong to the catering route chunk, not every visitor's initial download.
const source = new URL('../src/content/cateringDesign.json', import.meta.url)
const output = new URL('../src/content/cateringDesignIndex.json', import.meta.url)
const designs = JSON.parse(readFileSync(source, 'utf8'))
const index = Object.fromEntries(Object.entries(designs).map(([route, page]) => {
  if (typeof page.image !== 'string' || !page.image) throw new Error(`Missing catering image: ${route}`)
  return [route, page.image]
}))
const text = `${JSON.stringify(index, null, 2)}\n`

if (process.argv.includes('--check')) {
  if (readFileSync(output, 'utf8') !== text) {
    throw new Error('Catering design index is stale. Run node scripts/generate-catering-design-index.mjs.')
  }
} else {
  writeFileSync(output, text)
}
console.log(`Catering design index: ${Object.keys(index).length} routes.`)
