import App from './App'

export async function prerender() {
  const { default: renderToString } = await import('preact-render-to-string')
  return { html: renderToString(<App />) }
}
