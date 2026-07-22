import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const HANDOFF_PATH = path.resolve(__dirname, '../docs/handoff/mychef_reword_changes.json')
const SRC_DIR = path.resolve(__dirname, '../src')

interface Handoff {
  global: {
    scanner: {
      regex_must_be_zero: string[]
    }
    positive_assertions: string[]
  }
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

function parseCaseInsensitiveRegex(raw: string): RegExp {
  // Handoff patterns are formatted like (?i)\bwe cater\b
  const cleaned = raw.replace(/^\(\?i\)/, '')
  return new RegExp(cleaned, 'i')
}

function main() {
  const handoff: Handoff = JSON.parse(fs.readFileSync(HANDOFF_PATH, 'utf-8'))
  const files = walk(SRC_DIR)

  let failed = false
  const patterns = handoff.global.scanner.regex_must_be_zero

  console.log(`Scanning ${files.length} files against ${patterns.length} banned patterns...\n`)

  for (const rawPattern of patterns) {
    const regex = parseCaseInsensitiveRegex(rawPattern)
    const hits: { file: string; line: number; text: string }[] = []

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8')
      const lines = content.split('\n')
      const relativeFile = path.relative(SRC_DIR, file)
      lines.forEach((line, idx) => {
        if (regex.test(line)) {
          hits.push({ file: relativeFile, line: idx + 1, text: line.trim() })
        }
      })
    }

    if (hits.length > 0) {
      failed = true
      console.log(`❌ ${regex.source}: ${hits.length} hit(s)`)
      hits.slice(0, 8).forEach((h) => {
        const snippet = h.text.length > 120 ? h.text.substring(0, 120) + '…' : h.text
        console.log(`   ${h.file}:${h.line}  ${snippet}`)
      })
      if (hits.length > 8) console.log(`   ... and ${hits.length - 8} more`)
    } else {
      console.log(`✅ ${regex.source}: 0 hits`)
    }
  }

  console.log('\nPositive assertions (manual / extendable):')
  handoff.global.positive_assertions.forEach((a) => console.log(`  • ${a}`))

  if (failed) {
    console.log('\nScanner FAILED — banned patterns found.')
    process.exit(1)
  } else {
    console.log('\nScanner PASSED — zero banned patterns found.')
    process.exit(0)
  }
}

main()
