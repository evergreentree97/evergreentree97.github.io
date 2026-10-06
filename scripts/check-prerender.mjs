import { readFile } from 'node:fs/promises'

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]
if (!main || !main.includes('Android 개발자')) throw new Error('The built HTML must contain the readable portfolio without JavaScript.')
for (const id of ['projects', 'vuddy', 'model-evaluation', 'momentica', 'experience', 'contact']) {
  if (!new RegExp(`id=["']${id}["']`).test(main)) throw new Error(`Missing prerendered section: ${id}`)
}
const images = [...main.matchAll(/<img\b[^>]*>/g)].map(match => match[0])
const sources = images.map(tag => tag.match(/\bsrc=["']([^"']+)["']/)?.[1])
if (!images.length || sources.some(src => !src?.startsWith('/screens/'))) throw new Error('Use actual approved app screenshots in the rendered portfolio.')
if (new Set(sources).size !== sources.length) throw new Error('A screenshot is repeated in the rendered portfolio.')
if (images.some(tag => !/\bwidth=["']\d+["']/.test(tag) || !/\bheight=["']\d+["']/.test(tag))) throw new Error('Reserve screenshot dimensions before images load.')
console.log(`Prerendered HTML contains the career sections and ${images.length} distinct, dimensioned app screens.`)
