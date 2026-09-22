import fs from 'node:fs'
import path from 'node:path'
import ts from 'typescript'

// Read-only source inventory used for the September 2026 editorial review.
// Source positions allow exact, reviewable edits without touching identifiers.
const root = process.cwd()
const rows = []
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name)
    if (item.isDirectory()) { if (item.name !== 'ui') walk(file); continue }
    if (!/\.(ts|tsx)$/.test(file)) continue
    const source = fs.readFileSync(file, 'utf8')
    const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true)
    function visit(node) {
      if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isJsxText(node)) {
        const text = node.text.replace(/\s+/g, ' ').trim()
        const jsx = ts.isJsxText(node)
        const attribute = ts.isJsxAttribute(node.parent) ? node.parent.name.getText(ast) : null
        if (text.length >= 15 && /[a-zA-Z]{3}/.test(text) && !/^(className|class|id|src|href|to|style|key)$/.test(attribute || '') && !/^(https?:|\/|@\/|\.\/|\.\.\/)/.test(text) && !/^(?:font-|text-|bg-|flex |grid |border-|relative |absolute |fixed |w-|h-|mt-|mb-|px-|py-|max-w-|min-h-)/.test(text)) {
          rows.push({ file: path.relative(root, file), line: ast.getLineAndCharacterOfPosition(node.getStart(ast)).line + 1, start: node.getStart(ast), end: node.end, kind: jsx ? 'jsx' : attribute ? 'attribute' : 'string', text, value: node.text })
        }
      }
      ts.forEachChild(node, visit)
    }
    visit(ast)
  }
}
walk(path.join(root, 'src'))
fs.writeFileSync(process.argv[2] || '/tmp/mychef-copy-inventory.json', JSON.stringify(rows, null, 2) + '\n')
console.log(`${rows.length} source text records`)
