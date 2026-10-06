import { readFile } from 'node:fs/promises'

const routes = ['/', '/projects/vuddy/', '/projects/model-evaluation/', '/projects/momentica/']
const allScreens = []
for (const route of routes) {
  const html = await readFile(new URL(`../dist${route}index.html`, import.meta.url), 'utf8')
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1]
  if (!main) throw new Error(`Missing readable static content: ${route}`)
  const expected = route === '/' ? ['projects', 'experience', 'contact'] : [route.split('/')[2]]
  for (const id of expected) {
    if (!new RegExp(`id=["']${id}["']`).test(main)) throw new Error(`Missing static section: ${id}`)
  }
  if (route === '/' && /data-project=/.test(main)) throw new Error('Keep full technical reading on project pages, outside the home overview.')
  if (route !== '/' && /id=["']projects["']/.test(main)) throw new Error('Each detail page contains one project, without repeating the overview.')
  const images = [...main.matchAll(/<img\b[^>]*>/g)].map(match => match[0])
  const sources = images.map(tag => tag.match(/\bsrc=["']([^"']+)["']/)?.[1])
  if (!images.length || sources.some(src => !src?.startsWith('/screens/'))) throw new Error('Use actual approved app screenshots.')
  if (images.some(tag => !/\bwidth=["']\d+["']/.test(tag) || !/\bheight=["']\d+["']/.test(tag))) throw new Error('Reserve screenshot dimensions before loading.')
  allScreens.push(...sources)
  if ((html.match(/rel="canonical"/g) ?? []).length !== 1 || !html.includes(`href="https://evergreentree97.github.io${route}"`)) throw new Error(`Wrong canonical route: ${route}`)
  if (!html.includes('href="/#projects"') && route !== '/') throw new Error('Details must return to the actual project list.')
}
if (allScreens.length !== 8 || new Set(allScreens).size !== 8) throw new Error('Preserve all eight unique approved screenshots across home and project pages.')
console.log('Four readable static pages, route-specific canonical links and eight distinct dimensioned app screens verified.')
