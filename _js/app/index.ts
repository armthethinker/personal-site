// App entry — bundled to assets/js/app.js (ships in production).
// Comment out a line to disable a feature.
import { initMasonry } from './components/masonry'
import { initSectionNav } from './components/section-nav'

// Run each feature in isolation so one throwing doesn't take down the others.
function run(feature: () => void): void {
   try {
      feature()
   } catch (e) {
      console.error(e)
   }
}

document.addEventListener('DOMContentLoaded', () => {
   run(initMasonry)
   run(initSectionNav)
})
