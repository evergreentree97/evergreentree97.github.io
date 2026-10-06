import { readFile, readdir, stat } from 'node:fs/promises'
import { createHash } from 'node:crypto'

const root = new URL('../', import.meta.url)
const fontRoot = new URL('public/fonts/', root)
const manifest = JSON.parse(await readFile(new URL('noto-coverage.json', fontRoot), 'utf8'))
const coverage = new Set(manifest.codepoints)

async function sourceText(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  return (await Promise.all(entries.map(async (entry) => {
    const url = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory)
    if (entry.isDirectory()) return sourceText(url)
    if (entry.name.endsWith('.tsx') || directory.pathname.endsWith('/data/') && entry.name.endsWith('.ts')) return readFile(url, 'utf8')
    return ''
  }))).join('')
}

const text = await sourceText(new URL('src/', root)) + await readFile(new URL('index.html', root), 'utf8')
const missing = [...new Set([...text].filter((char) => char.codePointAt(0) >= 32 && !coverage.has(char.codePointAt(0))))]
if (missing.length) throw new Error(`Font glyphs missing for ${missing.join('')}. Rebuild with scripts/subset-font.py.`)

let bytes = 0
for (const file of manifest.files) {
  const url = new URL(file.name, fontRoot)
  const actual = createHash('sha256').update(await readFile(url)).digest('hex')
  if (actual !== file.sha256) throw new Error(`Font differs from its coverage manifest: ${file.name}`)
  bytes += (await stat(url)).size
}
if (bytes > 200000) throw new Error(`Font payload exceeds 200KB: ${bytes}`)
console.log(`Noto Sans KR: complete glyph coverage, ${bytes} bytes across ${manifest.files.length} weights.`)
