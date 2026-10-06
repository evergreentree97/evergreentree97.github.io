import { renderToString } from 'preact-render-to-string'
import App from './App'

export function prerender() {
  return { html: renderToString(<App />), links: new Set<string>() }
}
