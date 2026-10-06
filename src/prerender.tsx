import { renderToString } from 'preact-render-to-string'
import App from './App'
import { featuredProjects } from './data/projects'

export function prerender(data: { url: string }) {
  const pathname = new URL(data.url, 'https://evergreentree97.github.io').pathname
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`
  const project = featuredProjects.find(item => path.replace(/\/$/, '') === `/projects/${item.id}`)
  const title = project ? `${project.name} | 최상록` : '최상록 | Android Developer'
  const url = `https://evergreentree97.github.io${path}`
  return {
    html: renderToString(<App path={path} />),
    links: new Set(featuredProjects.map(item => `/projects/${item.id}/`)),
    head: {
      title,
      elements: new Set([
        { type: 'link', props: { rel: 'canonical', href: url } },
        { type: 'meta', props: { property: 'og:url', content: url } },
        { type: 'meta', props: { property: 'og:title', content: title } },
        { type: 'meta', props: { name: 'twitter:title', content: title } },
      ]),
    },
  }
}
