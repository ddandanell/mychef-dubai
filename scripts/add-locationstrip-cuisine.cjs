const fs = require('fs')
const path = require('path')

const pagesDir = path.resolve(__dirname, '../src/pages')

const pages = [
  { file: 'IndianCatering.tsx', title: 'Indian catering across Dubai' },
  { file: 'ArabicCatering.tsx', title: 'Arabic catering across Dubai' },
  { file: 'MediterraneanCatering.tsx', title: 'Mediterranean catering across Dubai' },
  { file: 'ItalianCatering.tsx', title: 'Italian catering across Dubai' },
  { file: 'AsianCatering.tsx', title: 'Asian catering across Dubai' },
  { file: 'SushiCatering.tsx', title: 'Sushi catering across Dubai' },
  { file: 'VeganCatering.tsx', title: 'Vegan catering across Dubai' },
  { file: 'VegetarianCatering.tsx', title: 'Vegetarian catering across Dubai' },
  { file: 'HalalCatering.tsx', title: 'Halal catering across Dubai' },
  { file: 'HealthyCatering.tsx', title: 'Healthy catering across Dubai' },
]

let changed = 0
for (const { file, title } of pages) {
  const filePath = path.join(pagesDir, file)
  let content = fs.readFileSync(filePath, 'utf-8')

  if (content.includes('LocationStrip')) {
    console.log(`SKIP ${file} — LocationStrip already present`)
    continue
  }

  // Add import after TrustSignalStrip import
  content = content.replace(
    /import TrustSignalStrip from '\.\.\/components\/TrustSignalStrip'\n/,
    `import TrustSignalStrip from '../components/TrustSignalStrip'\nimport LocationStrip from '../components/LocationStrip'\n`
  )

  // Insert LocationStrip before Section 10 CTA Banner
  content = content.replace(
    /      \/\* ═══════════════ Section 10: CTA Banner ═══════════════ \*\/\n/,
    `      <LocationStrip title="${title}" />\n\n      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n`
  )

  fs.writeFileSync(filePath, content)
  console.log(`UPDATED ${file}`)
  changed++
}

console.log(`\nDone. ${changed} files updated.`)
