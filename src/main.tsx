import { hydrate, render } from 'preact'
import './styles/global.css'
import App from './App'

const root = document.getElementById('root')
if (root) {
  if (root.hasChildNodes()) hydrate(<App />, root)
  else render(<App />, root)
  document.documentElement.classList.add('js-ready')
}
