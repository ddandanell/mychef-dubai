const fs = require('fs')
const path = require('path')

const pagesDir = path.resolve(__dirname, '../src/pages')

const pages = [
  { file: 'BrandActivationCatering.tsx', title: 'Brand activation catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'BusinessLunchCatering.tsx', title: 'Business lunch catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'ConferenceCatering.tsx', title: 'Conference catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'CorporateMealPrep.tsx', title: 'Corporate meal prep across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'FilmCrewCatering.tsx', title: 'Film crew catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'GalaDinnerCatering.tsx', title: 'Gala dinner catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'NurseryCatering.tsx', title: 'Nursery catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'OfficeCatering.tsx', title: 'Office catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'ProductionCatering.tsx', title: 'Production catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'SchoolCatering.tsx', title: 'School catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'StaffMealsCatering.tsx', title: 'Staff meal catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'SuhoorCatering.tsx', title: 'Suhoor catering across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'VIPClub.tsx', title: 'VIP private chef experiences across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'WeeklyMealPrep.tsx', title: 'Weekly meal prep across Dubai', marker: '      {/* ═══════════════ Section 10: CTA Banner ═══════════════ */}\n' },
  { file: 'ProductLaunchCatering.tsx', title: 'Product launch catering across Dubai', marker: '      {/* ═══════════════ Section 11: CTA Banner ═══════════════ */}\n' },
  { file: 'FestiveCatering.tsx', title: 'Festive catering across Dubai', marker: '      {/* ═══════════════ Final CTA ═══════════════ */}\n' },
]

let changed = 0
for (const { file, title, marker } of pages) {
  const filePath = path.join(pagesDir, file)
  let content = fs.readFileSync(filePath, 'utf-8')

  if (content.includes('LocationStrip')) {
    console.log(`SKIP ${file} — LocationStrip already present`)
    continue
  }

  if (!content.includes(marker)) {
    console.log(`MISS ${file} — insertion marker not found`)
    continue
  }

  const trustImport = "import TrustSignalStrip from '../components/TrustSignalStrip'\n"
  if (content.includes(trustImport) && !content.includes("import LocationStrip from '../components/LocationStrip'")) {
    content = content.replace(
      trustImport,
      `${trustImport}import LocationStrip from '../components/LocationStrip'\n`,
    )
  } else if (!content.includes('LocationStrip')) {
    console.log(`MISS ${file} — TrustSignalStrip import not found`)
    continue
  }

  content = content.replace(
    marker,
    `      <LocationStrip title="${title}" />\n\n${marker}`,
  )

  fs.writeFileSync(filePath, content)
  console.log(`UPDATED ${file}`)
  changed++
}

console.log(`\nDone. ${changed} files updated.`)
