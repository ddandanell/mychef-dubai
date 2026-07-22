import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const HANDOFF_PATH = path.resolve(__dirname, '../docs/handoff/mychef_reword_changes.json')
const SRC_DIR = path.resolve(__dirname, '../src')

const EXCLUDED_FILES = new Set([
  // Quarantined pages
  'HealthcareCatering.tsx',
  'SchoolCatering.tsx',
  'NurseryCatering.tsx',
  'UniversityCatering.tsx',
  'GovernmentEventCatering.tsx',
  // Key pages already manually reworded
  'Home.tsx',
  'About.tsx',
  'HowItWorks.tsx',
  'FAQ.tsx',
  'OurChefs.tsx',
  'Catering.tsx',
  'Terms.tsx',
  'ChefAhmed.tsx',
  'ChefSofia.tsx',
  'ChefMarco.tsx',
  'ChefLayla.tsx',
])

interface Replacement {
  find: string
  replace: string
}

interface PhraseMapItem {
  banned_regex: string
  replace: string
}

interface Template {
  find_replace?: Replacement[]
  rule?: string
}

interface Handoff {
  global: {
    find_replace_exact: Replacement[]
    phrase_map: PhraseMapItem[]
  }
  templates: Record<string, Template>
}

function loadHandoff(): Handoff {
  return JSON.parse(fs.readFileSync(HANDOFF_PATH, 'utf-8'))
}

function walk(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walk(fullPath))
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      files.push(fullPath)
    }
  }
  return files
}

function applyExactReplacements(content: string, replacements: Replacement[]): string {
  for (const { find, replace } of replacements) {
    if (!find) continue
    content = content.split(find).join(replace)
  }
  return content
}

function applyPhraseMap(content: string, phraseMap: PhraseMapItem[]): string {
  for (const { banned_regex, replace } of phraseMap) {
    if (!banned_regex || !replace) continue
    // Handoff regexes may contain multiple (?i) inline flags and alternations.
    // JavaScript does not support inline (?i); strip all occurrences and use the i flag.
    const rawRegex = banned_regex.replace(/\(\?i\)/g, '')
    try {
      const regex = new RegExp(rawRegex, 'gi')
      content = content.replace(regex, replace)
    } catch {
      console.warn(`Invalid regex: ${rawRegex}`)
    }
  }
  return content
}

function categorizeFile(relativePath: string): string {
  const lower = relativePath.toLowerCase()
  const basename = path.basename(relativePath)

  if (lower.includes('/chefs/')) return 'chef pages'
  if (lower.includes('/locations') || basename.toLowerCase().includes('location')) return 'location pages'
  if (basename.toLowerCase().includes('catering') && basename.toLowerCase().endsWith('.tsx')) return 'occasion-catering'
  if (lower.includes('/blog/') || lower.includes('/guides/') || basename.toLowerCase().includes('guide')) return 'blog & guides'
  if (basename === 'CaseStudies.tsx' || basename === 'Press.tsx' || basename === 'Gallery.tsx') return '/case-studies + /press + /gallery'
  if (['PrivateChef.tsx', 'LuxuryDining.tsx', 'Events.tsx', 'Corporate.tsx', 'Villas.tsx', 'Yachts.tsx', 'Catering.tsx'].includes(basename)) return 'service pages'
  return 'catch-all'
}

function getTemplateReplacements(handoff: Handoff, category: string): Replacement[] {
  // Map our categories to JSON template keys
  const templateKeyMap: Record<string, string> = {
    'occasion-catering': 'occasion-catering (~120 pages: every /*-catering-dubai, cuisine, dietary, festive, corporate-type page)',
    'chef pages': 'chef pages (/our-chefs + /chefs/ahmed-executive-chef, /chefs/sofia-pastry-chef, /chefs/marco-italian-chef, /chefs/layla-middle-eastern-chef)',
    'location pages': 'location pages (/locations/*)',
    'service pages': 'service pages (/private-chef-dubai, /catering-dubai, /luxury-dining-experiences, /events, /corporate, /villas-private-residences, /yachts)',
    'blog & guides': 'blog & guides (/blog/*, /guides, /*-guide, /*-checklist-dubai, /dubai-food-trends-report-2026)',
    '/case-studies + /press + /gallery': '/case-studies + /press + /gallery',
    'catch-all': 'catch-all (every remaining sitemap page + shared components)',
  }

  const key = templateKeyMap[category]
  if (key && handoff.templates[key] && handoff.templates[key].find_replace) {
    return handoff.templates[key].find_replace as Replacement[]
  }
  return []
}

function main() {
  const handoff = loadHandoff()
  const files = walk(SRC_DIR)

  let processed = 0
  const changedFiles: string[] = []

  for (const file of files) {
    const basename = path.basename(file)
    if (EXCLUDED_FILES.has(basename)) continue

    const relativePath = path.relative(SRC_DIR, file)
    const content = fs.readFileSync(file, 'utf-8')
    const category = categorizeFile(relativePath)

    let newContent = content
    newContent = applyExactReplacements(newContent, handoff.global.find_replace_exact)
    newContent = applyPhraseMap(newContent, handoff.global.phrase_map)
    newContent = applyExactReplacements(newContent, getTemplateReplacements(handoff, category))

    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf-8')
      changedFiles.push(relativePath)
    }
    processed++
  }

  console.log(`Processed ${processed} files.`)
  console.log(`Changed ${changedFiles.length} files.`)
  if (changedFiles.length > 0) {
    console.log(changedFiles.slice(0, 20).join('\n'))
    if (changedFiles.length > 20) console.log(`... and ${changedFiles.length - 20} more`)
  }
}

main()
