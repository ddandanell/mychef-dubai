import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pagesDir = path.resolve(__dirname, '../src/pages')

interface Meta {
  title: string
  description: string
  source: 'direct' | 'config' | 'prop'
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
  'chefs/ChefProfile.tsx',
  'dietary/DietaryCateringPage.tsx',
  'occasion/OccasionCateringPage.tsx',
  'LocationDetail.tsx',
])

const files = findTsx(pagesDir).sort()
let issues = 0

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8')
  const rel = path.relative(pagesDir, f)

  if (skipFiles.has(rel)) continue

  // Chef profile pages render SEO via the ChefProfile template
  if (rel.startsWith('chefs/') && /import\s+ChefProfile\b/.test(content)) continue

  const meta = getMeta(content)

  if (!meta) {
    issues++
    console.log(`MISSING\t${rel}`)
    continue
  }

  if (meta.title.length > 60) {
    issues++
    console.log(`LONG_TITLE (${meta.title.length})\t${rel}\t${meta.title}`)
  }

  if (/\|\s*myCHEF(?:\s+Dubai)?\s*$/.test(meta.title)) {
    issues++
    console.log(`DUP_SUFFIX\t${rel}\t${meta.title}`)
  }

  for (const pattern of forbiddenPatterns) {
    if (pattern.test(meta.description)) {
      issues++
      console.log(`CLAIM\t${rel}\t${meta.description}`)
      break
    }
  }
}

if (issues === 0) {
  console.log('✓ All meta checks passed')
} else {
  console.log(`\n${issues} issue(s) found`)
}

process.exit(issues ? 1 : 0)
