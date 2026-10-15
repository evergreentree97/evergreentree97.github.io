import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'

const root = new URL('../', import.meta.url)
const html = await readFile(new URL('dist/index.html', root), 'utf8')
for (const id of ['main-content', 'top', 'hero-title', 'experience', 'projects', 'vuddy', 'model-evaluation', 'momentica', 'how-i-work', 'side-projects', 'open-source', 'activities']) {
  assert.equal(html.split(`id="${id}"`).length - 1, 1, `Prerendered anchor missing or duplicated: ${id}`)
}
assert.equal([...html.matchAll(/<img\b/g)].length, 13, 'Prerender all existing images')
assert(!/<details\b[^>]*\bopen(?:\s|=|>)/.test(html), 'Details must start closed')
assert(html.includes('aria-expanded="false"'), 'Mobile menu must start closed')
const scripts = [...html.matchAll(/<script\b[^>]*src="([^"]+)"/g)].map((match) => match[1])
assert.equal(scripts.length, 1, 'Only the browser entry should load as a script')
const preloaded = [...html.matchAll(/<link\b[^>]*rel="modulepreload"[^>]*href="([^"]+)"/g)].map((match) => match[1])
let clientBytes = 0
for (const path of new Set([...scripts, ...preloaded])) {
  const client = await readFile(new URL(`dist${path}`, root))
  clientBytes += gzipSync(client).length
}
assert(clientBytes < 28_000, 'Initial browser JavaScript exceeds its 28KB gzip budget')
console.log(`Prerendered content, anchors and initial states verified. Initial browser JavaScript: ${clientBytes} gzip bytes.`)
