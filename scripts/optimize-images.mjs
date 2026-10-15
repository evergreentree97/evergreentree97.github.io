import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const root = new URL('../', import.meta.url)
const manifestUrl = new URL('src/data/imageSources.json', root)
const sourceFiles = ['src/data/projects.ts', 'src/components/HowIWork.tsx']
const originals = new Set()
for (const file of sourceFiles) {
  const text = await readFile(new URL(file, root), 'utf8')
  for (const [path] of text.matchAll(/\/(?:screens|images\/tooling)\/[\w-]+\.(?:png|jpg)/g)) originals.add(path)
}

const hash = (buffer) => createHash('sha256').update(buffer).digest('hex').slice(0, 12)
const pixels = (buffer) => sharp(buffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const checkOnly = process.argv.includes('--check')
const sources = checkOnly ? JSON.parse(await readFile(manifestUrl, 'utf8')) : {}
let before = 0
let after = 0

if (!checkOnly) await mkdir(new URL('public/optimized/', root), { recursive: true })
for (const original of [...originals].sort()) {
  const input = await readFile(new URL(`public${original}`, root))
  before += input.length
  if (checkOnly) {
    const outputPath = sources[original]
    if (!outputPath) { after += input.length; continue }
    const output = await readFile(new URL(`public${outputPath}`, root))
    assert(outputPath.endsWith(`.${hash(output)}.webp`), `Image hash changed: ${original}`)
    assert(output.length < input.length, `Optimized image is larger: ${original}`)
    const [a, b] = await Promise.all([pixels(input), pixels(output)])
    assert.deepEqual(a.info, b.info, `Image dimensions changed: ${original}`)
    assert(a.data.equals(b.data), `Image pixels changed: ${original}`)
    after += output.length
  } else {
    const output = await sharp(input).webp({ lossless: true, effort: 6 }).toBuffer()
    const [a, b] = await Promise.all([pixels(input), pixels(output)])
    assert.deepEqual(a.info, b.info, `Image dimensions changed: ${original}`)
    assert(a.data.equals(b.data), `Image pixels changed: ${original}`)
    if (output.length < input.length) {
      const name = original.split('/').at(-1).replace(/\.[^.]+$/, '')
      const path = `/optimized/${name}.${hash(output)}.webp`
      await writeFile(new URL(`public${path}`, root), output)
      sources[original] = path
      after += output.length
    } else after += input.length
  }
}
assert(Object.keys(sources).every((path) => originals.has(path)), 'Unused optimized image in manifest')
if (!checkOnly) await writeFile(manifestUrl, `${JSON.stringify(sources, null, 2)}\n`)
console.log(`${originals.size} images: ${before} -> ${after} bytes. Optimized image pixels match originals.`)
