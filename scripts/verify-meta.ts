import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import allLocations from '../src/data/locations.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pagesDir = path.resolve(__dirname, '../src/pages')

const SITE_NAME = 'myCHEF'
const TITLE_SUFFIX = ` | ${SITE_NAME}`
// Mirrors src/components/SEO.tsx: the suffix is appended unless hideSiteName or the
// title already ends in the brand. Cap = title_max_chars in the SEO contract.
const MAX_FINAL_TITLE_LEN = 65
const BRAND_SUFFIX_RE = /\|\s*myCHEF(?:\s+Dubai)?\s*$/i
const finalTitleLength = (title: string, hideSiteName: boolean): number =>
  hideSiteName || BRAND_SUFFIX_RE.test(title) ? title.length : title.length + TITLE_SUFFIX.length
const MAX_PROP_TITLE_LEN = MAX_FINAL_TITLE_LEN - TITLE_SUFFIX.length

interface Meta {
  title: string
  description: string
  source: 'direct' | 'config' | 'prop' | 'location' | 'chef'
  hideSiteName?: boolean
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

const contractPath = path.resolve(__dirname, '../docs/seo/myCHEF-AE-SEO-STANDARD.json')
const contractPages = fs.existsSync(contractPath)
  ? (JSON.parse(fs.readFileSync(contractPath, 'utf8')).pages || {})
  : {}

function normaliseWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim()
}

function resolveVar(varName: string, content: string, currentFile: string): string | null {
  const parts = varName.split('.')
  const base = parts[0]
  const field = parts[1]

  // 1. check local const X = "..."
  const localConst = content.match(new RegExp(`(?:const|let|var)\\s+${base}\\s*=\\s*['"\`]([^'"\`]+)['"\`]`))
  if (localConst && !field) return localConst[1]

  // 2. check local object
  const localObj = content.match(new RegExp(`(?:const|let|var)\\s+${base}\\s*=\\s*\\{([\\s\\S]*?\\n\\})`))
  if (localObj && field) {
    const fMatch = localObj[1].match(new RegExp(`${field}:\\s*['"\`]([^'"\`]+)['"\`]`))
    if (fMatch) return fMatch[1]
  }

  // 3. check local assignment from another var, e.g. const seo = childSeo.howItWorks
  const aliasMatch = content.match(new RegExp(`(?:const|let|var)\\s+${base}\\s*=\\s*([A-Za-z0-9_.]+)`))
  if (aliasMatch && aliasMatch[1] !== base) {
    const chained = aliasMatch[1] + (field ? '.' + field : '')
    const res = resolveVar(chained, content, currentFile)
    if (res) return res
  }

  // 4. check imports
  const impMatch = content.match(new RegExp(`import\\s+\\{[^}]*\\b${base}\\b[^}]*\\}\\s+from\\s+['"\`]([^'"\`]+)['"\`]`))
  if (impMatch) {
    let impPath = impMatch[1]
    let resolvedPath = ''
    if (impPath.startsWith('@/')) {
      resolvedPath = path.resolve(__dirname, '../src', impPath.slice(2))
    } else {
      resolvedPath = path.resolve(path.dirname(currentFile), impPath)
    }
    for (const ext of ['.ts', '.tsx', '/index.ts', '/index.tsx']) {
      if (fs.existsSync(resolvedPath + ext)) {
        resolvedPath = resolvedPath + ext
        break
      }
    }
    if (fs.existsSync(resolvedPath)) {
      const impContent = fs.readFileSync(resolvedPath, 'utf8')
      const res = resolveVar(varName, impContent, resolvedPath)
      if (res) return res
    }
  }

  // Check exported const in content: export const X = { ... }
  if (field) {
    const expObj = content.match(new RegExp(`export\\s+const\\s+${base}\\s*=\\s*\\{([\\s\\S]*?\\n\\})`))
    if (expObj) {
      if (parts.length === 2) {
        const fMatch = expObj[1].match(new RegExp(`${field}:\\s*['"\`]([^'"\`]+)['"\`]`))
        if (fMatch) return fMatch[1]
      } else if (parts.length === 3) {
        const sub = parts[1]
        const subfield = parts[2]
        const subObj = expObj[1].match(new RegExp(`${sub}:\\s*\\{([\\s\\S]*?)\\}`))
        if (subObj) {
          const sfMatch = subObj[1].match(new RegExp(`${subfield}:\\s*['"\`]([^'"\`]+)['"\`]`))
          if (sfMatch) return sfMatch[1]
        }
      }
    }
  }

  return null
}

function extractSEO(content: string, filePath?: string): Meta | null {
  const seoTag = content.match(/<SEO\s+([\s\S]*?)(?:\/>|>(?:[\s\S]*?)<\/SEO>)/)
  if (seoTag) {
    const props = seoTag[1]
    const hideSiteName = /\bhideSiteName\b/.test(props)
    const titleMatch = props.match(/title=\{?"?([^"}\n>]+)"?\}?/)
    const descMatch = props.match(/description=\{?"?([^"}\n>]+)"?\}?/)
    if (titleMatch && descMatch) {
      const rawTitle = titleMatch[1].trim().replace(/^["'`]|["'`]$/g, '')
      const rawDesc = descMatch[1].trim().replace(/^["'`]|["'`]$/g, '')
      const title = filePath && !rawTitle.includes(' ')
        ? (resolveVar(rawTitle, content, filePath) || rawTitle)
        : rawTitle
      const desc = filePath && !rawDesc.includes(' ')
        ? (resolveVar(rawDesc, content, filePath) || rawDesc)
        : rawDesc
      if (title && desc && !title.includes('${') && !desc.includes('${')) {
        return {
          title: normaliseWhitespace(title),
          description: normaliseWhitespace(desc),
          source: 'direct',
          hideSiteName,
        }
      }
    }

    // Try resolving from KEYWORD LOCK comment contract
    const urlMatch = content.match(/\/\/\s+KEYWORD LOCK[\s\S]*?\/\/\s+(\/[^\s\n]+)/)
    if (urlMatch) {
      const url = urlMatch[1]
      const page = contractPages[url]
      if (page?.on_page?.title && page?.on_page?.meta_description) {
        return {
          title: normaliseWhitespace(page.on_page.title),
          description: normaliseWhitespace(page.on_page.meta_description),
          source: 'direct',
          hideSiteName,
        }
      }
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
      hideSiteName: /\bhideSiteName:\s*true\b/.test(content),
    }
  }
  return null
}

function extractProps(content: string): Meta | null {
  const titleMatch = content.match(/seoTitle=\{?"([^"]+)"\}?/)
  const descMatch = content.match(/\bdescription=\{?"([^"]+)"\}?/)
  if (titleMatch && descMatch) {
    return {
      title: titleMatch[1],
      description: descMatch[1],
      source: 'prop',
      hideSiteName: /\bhideSiteName\b/.test(content),
    }
  }
  return null
}

function getMeta(content: string, filePath?: string): Meta | null {
  return extractSEO(content, filePath) || extractConfig(content) || extractProps(content)
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
  'BlogCategoryHub.tsx',
])

let issues = 0

function logIssue(type: string, label: string, detail: string) {
  issues++
  console.log(`${type}\t${label}\t${detail}`)
}

function checkMeta(meta: Meta, label: string) {
  const finalTitleLen = finalTitleLength(meta.title, meta.hideSiteName)

  if (finalTitleLen > MAX_FINAL_TITLE_LEN) {
    logIssue(
      'LONG_TITLE',
      label,
      `prop=${meta.title.length} final=${finalTitleLen} "${meta.title}"`
    )
  }

  if (/myCHEF(?:\s+Dubai)?\s*\|\s*myCHEF(?:\s+Dubai)?\s*$/i.test(meta.title) || /myCHEF Dubai\s*$/.test(meta.title)) {
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

  const meta = getMeta(content, f)

  if (!meta) {
    if (!coveredByDataSources.has(rel)) {
      logIssue('MISSING', rel, '')
    }
    continue
  }

  checkMeta(meta, rel)
}

// 2. Lint location data
const locationDetailContent = fs.readFileSync(
  path.join(pagesDir, 'LocationDetail.tsx'),
  'utf8'
)
const locationDetailHidesSiteName = /\bhideSiteName\b/.test(locationDetailContent)

for (const loc of allLocations) {
  checkMeta(
    {
      title: loc.title,
      description: loc.metaDescription,
      source: 'location',
      hideSiteName: locationDetailHidesSiteName,
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
  const finalTitleLen = finalTitleLength(titleProp, false)

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
