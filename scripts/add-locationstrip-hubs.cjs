const fs = require('fs')
const path = require('path')

const pagesDir = path.resolve(__dirname, '../src/pages')

const pages = [
  { file: 'CateringPackages.tsx', title: 'Catering packages delivered across Dubai', marker: '      {/* ═══════════════ Final CTA ═══════════════ */}' },
  { file: 'CateringCostCalculator.tsx', title: 'Catering cost estimates for every Dubai area', marker: '      {/* CTA */}' },
  { file: 'Cuisines.tsx', title: 'Cuisine-led catering across Dubai', marker: '      {/* ═══════════════ Final CTA ═══════════════ */}' },
]

let changed = 0
for (const { file, title, marker } of pages) {
  const filePath = path.join(pagesDir, file)
  let content = fs.readFileSync(filePath, 'utf-8')

  if (content.includes('LocationStrip')) {
    console.log(`SKIP ${file} — LocationStrip already present`)
    continue
  }

  // Add import after existing component imports (before PageHero or first local import)
  content = content.replace(
    /import SEO from '\.\.\/components\/SEO'\n/,
    `import SEO from '../components/SEO'\nimport LocationStrip from '../components/LocationStrip'\n`
  )

  // Insert LocationStrip before marker
  const insert = `      <LocationStrip title="${title}" />\n\n`
  if (content.includes(marker)) {
    content = content.replace(marker, insert + marker)
    fs.writeFileSync(filePath, content)
    console.log(`UPDATED ${file}`)
    changed++
  } else {
    console.log(`MARKER NOT FOUND ${file}`)
  }
}

console.log(`\nDone. ${changed} files updated.`)
