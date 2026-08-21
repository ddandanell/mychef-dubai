const fs = require('fs')
const path = require('path')

const pagesDir = path.resolve(__dirname, '../src/pages')

const pages = [
  { file: 'BirthdayCatering.tsx', title: 'Birthday party catering across Dubai' },
  { file: 'AnniversaryCatering.tsx', title: 'Anniversary private dining across Dubai' },
  { file: 'EngagementCatering.tsx', title: 'Engagement party catering across Dubai' },
  { file: 'BabyShowerCatering.tsx', title: 'Baby shower catering across Dubai' },
  { file: 'PrivatePartyCatering.tsx', title: 'Private party catering across Dubai' },
  { file: 'BachelorPartyCatering.tsx', title: 'Bachelor party catering across Dubai' },
  { file: 'BachelorettePartyCatering.tsx', title: 'Bachelorette party catering across Dubai' },
  { file: 'CorporateEventCatering.tsx', title: 'Corporate event catering across Dubai' },
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
