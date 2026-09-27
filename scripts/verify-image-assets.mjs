import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../public/', import.meta.url))
const extensions = new Set(['.webp', '.png', '.jpg', '.jpeg', '.gif', '.avif', '.svg', '.ico'])
const failures = []
let count = 0

async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      await inspect(file)
      continue
    }
    const extension = path.extname(entry.name).toLowerCase()
    if (!entry.isFile() || !extensions.has(extension)) continue
    count++
    const bytes = await readFile(file)
    let reason
    if (bytes.length === 0) {
      reason = 'empty image'
    } else if (extension === '.webp' && (
      bytes.length < 20 || bytes.toString('ascii', 0, 4) !== 'RIFF' ||
      bytes.toString('ascii', 8, 12) !== 'WEBP' || bytes.readUInt32LE(4) + 8 !== bytes.length
    )) {
      reason = 'invalid or truncated WebP container'
    }
    if (reason) failures.push(`${path.relative(root, file)}: ${reason}`)
  }
}

await inspect(root)
if (failures.length) {
  console.error(`Image asset verification failed:\n${failures.join('\n')}`)
  process.exitCode = 1
} else {
  console.log(`Verified ${count} image assets: no empty files or malformed WebP containers.`)
}
