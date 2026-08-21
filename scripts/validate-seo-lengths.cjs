const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, '../dist')
const files = []

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(fullPath)
    else if (entry.name === 'index.html') files.push(fullPath)
  }
}
walk(distDir)

let titleErrors = 0
let descErrors = 0
let h1Errors = 0

for (const file of files) {
  const html = fs.readFileSync(file, 'utf-8')
  const titleMatch = html.match(/<title>([^<]*)<\/title>/)
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
  const h1Match = html.match(/<h1[^>]*>([^<]*)<\/h1>/)

  const route = path.relative(distDir, path.dirname(file)) || '/'
  if (titleMatch) {
    const title = titleMatch[1]
    const rendered = title.replace(/\s*\|\s*myCHEF\s*$/, '')
    if (rendered.length > 70) {
      console.log(`TITLE >70 (${rendered.length}): ${route} | ${title}`)
      titleErrors++
    }
  }
  if (descMatch) {
    const desc = descMatch[1]
    if (desc.length > 160) {
      console.log(`DESC >160 (${desc.length}): ${route} | ${desc}`)
      descErrors++
    }
  }
  if (h1Match) {
    const h1 = h1Match[1].trim()
    if (h1.length > 100) {
      console.log(`H1 >100 (${h1.length}): ${route} | ${h1}`)
      h1Errors++
    }
  }
}

console.log(`\nChecked ${files.length} pages`)
console.log(`Titles >70 chars: ${titleErrors}`)
console.log(`Descriptions >160 chars: ${descErrors}`)
console.log(`H1s >100 chars: ${h1Errors}`)

process.exit(titleErrors || descErrors || h1Errors ? 1 : 0)
