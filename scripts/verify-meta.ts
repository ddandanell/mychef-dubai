import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import allLocations from '../src/data/locations.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pagesDir = path.resolve(__dirname, '../src/pages')

const SITE_NAME = 'myCHEF Dubai'
const TITLE_SUFFIX = ` | ${SITE_NAME}`
const MAX_FINAL_TITLE_LEN = 60
const MAX_PROP_TITLE_LEN = MAX_FINAL_TITLE_LEN - TITLE_SUFFIX.length

interface Meta {
  title: string
  description: string
  source: 'direct' | 'config' | 'prop' | 'location' | 'chef'
}

function findTsx(dir: string): string[] {
  const results: string[] = []
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      results.push(...findTsx(full))
    } else if (entry.endsWith('.tsx')) {
      results.push(full)
    }
  }
  return results
}

function normaliseWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim()
}

function extractSEO(content: string): Meta | null {
  const seoTag = content.match(/<SEO\s+([\s\S]*?)(?:\/>|>(?:[\s\S]*?)<\/SEO>)/)
  if (seoTag) {
    const props = seoTag[1]
    const titleMatch = props.match(/title=\{?"([^"]+)"\}?/)
    const descMatch = props.match(/description=\{?"([^"]+)"\}?/)
    if (titleMatch && descMatch) {
      return { title: titleMatch[1], description: descMatch[1], source: 'direct' }
    }
  }
  return null
}

function extractConfig(content: string): Meta | null {
  const titleMatch = content.match(/seoTitle:\s*['"]([\s\S]*?)['"],?\s*$/m)
  const descMatch = content.match(/metaDescription:\s*['"]([\s\S]*?)['"],?\s*$/m)
  if (titleMatch && descMatch) {
    return {
      title: normaliseWhitespace(titleMatch[1]),
      description: normaliseWhitespace(descMatch[1]),
      source: 'config',
    }
  }
  return null
}

function extractProps(content: string): Meta | null {
  const titleMatch = content.match(/seoTitle=\{?"([^"]+)"\}?/)
  const descMatch = content.match(/\bdescription=\{?"([^"]+)"\}?/)
  if (titleMatch && descMatch) {
    return { title: titleMatch[1], description: descMatch[1], source: 'prop' }
  }
  return null
}

function getMeta(content: string): Meta | null {
  return extractSEO(content) || extractConfig(content) || extractProps(content)
}

const forbiddenPatterns = [
  /myCHEF\s+cater/i,
  /\bwe\s+cater/i,
  /our\s+catering\s+team/i,
  /full[-\s]service\s+catering/i,
]

const skipFiles = new Set([
  'shared/ServiceLandingPage.tsx',
  'partners/PartnerPageTemplate.tsx',
  'dietary/DietaryCateringPage.tsx',
  'occasion/OccasionCateringPage.tsx',
])

// These files render SEO dynamically from data sources that are linted separately.
const coveredByDataSources = new Set([
  'LocationDetail.tsx',
  'chefs/ChefProfile.tsx',
])

let issues = 0

function logIssue(type: string, label: string, detail: string) {
  issues++
  console.log(`${type}\t${label}\t${detail}`)
}

function checkMeta(meta: Meta, label: string) {
  const finalTitleLen = meta.title.length + TITLE_SUFFIX.length

  if (finalTitleLen > MAX_FINAL_TITLE_LEN) {
    logIssue(
      'LONG_TITLE',
      label,
      `prop=${meta.title.length} final=${finalTitleLen} "${meta.title}"`
    )
  }

  if (/[,|]\s*myCHEF(?:\s+Dubai)?\s*$/.test(meta.title)) {
    logIssue('DUP_SUFFIX', label, meta.title)
  }

  for (const pattern of forbiddenPatterns) {
    if (pattern.test(meta.description)) {
      logIssue('CLAIM', label, meta.description)
      break
    }
  }
}

// 1. Lint page components
const files = findTsx(pagesDir).sort()

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8')
  const rel = path.relative(pagesDir, f)

  if (skipFiles.has(rel)) continue

  // Chef profile data files are covered by the explicit chef check below.
  if (rel.startsWith('chefs/') && /import\s+ChefProfile\b/.test(content)) continue

  const meta = getMeta(content)

  if (!meta) {
    if (!coveredByDataSources.has(rel)) {
      logIssue('MISSING', rel, '')
    }
    continue
  }

  checkMeta(meta, rel)
}

// 2. Lint location data
for (const loc of allLocations) {
  checkMeta(
    {
      title: loc.title,
      description: loc.metaDescription,
      source: 'location',
    },
    `locations:${loc.slug}`
  )
}

// 3. Lint ChefProfile template and each chef's rendered title
const chefProfilePath = path.join(pagesDir, 'chefs/ChefProfile.tsx')
const chefProfileContent = fs.readFileSync(chefProfilePath, 'utf8')

const chefTitleTemplate = chefProfileContent.match(/title=\{`([\s\S]*?)`\}/)
if (!chefTitleTemplate) {
  logIssue('CHEF_TEMPLATE', 'chefs/ChefProfile.tsx', 'Could not find title template')
} else if (chefTitleTemplate[1].includes('myCHEF Dubai')) {
  logIssue(
    'DUP_SUFFIX',
    'chefs/ChefProfile.tsx',
    `Title template already includes site name: ${chefTitleTemplate[1]}`
  )
}

const chefFiles = findTsx(path.join(pagesDir, 'chefs'))
  .filter((f) => /import\s+ChefProfile\b/.test(fs.readFileSync(f, 'utf8')))
  .sort()

for (const f of chefFiles) {
  const content = fs.readFileSync(f, 'utf8')
  const rel = path.relative(pagesDir, f)
  const nameMatch = content.match(/name:\s*['"]([^'"]+)['"]/)
  const titleMatch = content.match(/\btitle:\s*['"]([^'"]+)['"]/)

  if (!nameMatch || !titleMatch) {
    logIssue('CHEF_DATA', rel, 'Could not extract chef name/title')
    continue
  }

  const titleProp = `${nameMatch[1]} | ${titleMatch[1]}`
  const finalTitleLen = titleProp.length + TITLE_SUFFIX.length

  if (finalTitleLen > MAX_FINAL_TITLE_LEN) {
    logIssue(
      'LONG_TITLE',
      rel,
      `prop=${titleProp.length} final=${finalTitleLen} "${titleProp}"`
    )
  }
}

if (issues === 0) {
  console.log('✓ All meta checks passed')
} else {
  console.log(`\n${issues} issue(s) found`)
}

process.exit(issues ? 1 : 0)
