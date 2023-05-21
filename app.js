import { html, render } from './js/standalone.module.js'
import Modal from './index.js'

render(html`<${Modal} label="click me" content="nostr" />`, document.body)
