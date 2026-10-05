import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import ts from 'typescript'
import { inspectCopy, reviewPattern } from './copy-rules.mjs'

const root = new URL('../', import.meta.url)
const failures = []
const review = []
let reviewed = 0

async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory)
    if (entry.isDirectory()) await scan(path)
    else if (/\.tsx?$/.test(entry.name)) {
      const source = await readFile(path, 'utf8')
      const ast = ts.createSourceFile(entry.name, source, ts.ScriptTarget.Latest, true, entry.name.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS)
      const visit = node => {
        if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isJsxText(node)) {
          const text = node.text.trim()
          if (/[가-힣]/.test(text)) {
            reviewed++
            const location = ast.getLineAndCharacterOfPosition(node.getStart(ast))
            const label = `${fileURLToPath(path).replace(fileURLToPath(root), '')}:${location.line + 1}`
            for (const reason of inspectCopy(text)) failures.push(`${label}: ${text}\n  ${reason}`)
            if (reviewPattern.test(text)) review.push(`${label}: ${text}`)
          }
        }
        ts.forEachChild(node, visit)
      }
      visit(ast)
    }
  }
}

await scan(new URL('src/', root))
const index = await readFile(new URL('index.html', root), 'utf8')
for (const match of index.matchAll(/(?:content="([^"]+)"|<title>([^<]+)<\/title>)/g)) {
  const text = match[1] ?? match[2]
  for (const reason of inspectCopy(text)) failures.push(`index.html: ${text}\n  ${reason}`)
}
if (review.length) throw new Error(`Review these generic expressions before shipping:\n${review.join('\n')}`)
if (failures.length) throw new Error(`Rejected copy patterns:\n${failures.join('\n')}`)
console.log(`Checked ${reviewed} Korean text literals. No named copy regressions. Sentence-level review is still required.`)
