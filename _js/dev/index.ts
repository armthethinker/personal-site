// Dev tools entry — bundled to assets/js/dev.js, loaded only outside production
// (see _includes/common-js.html). Comment out a line to disable a tool.
import { highlightTK } from './components/highlight-tk'

document.addEventListener('DOMContentLoaded', () => {
   highlightTK()
})
