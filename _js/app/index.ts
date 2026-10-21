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

// Supporting the focus group interaction
document.addEventListener('touchstart', () => {
   document.body.classList.add('is-touching')
   document.body.classList.remove('is-hovering')
}, { passive: true })
document.addEventListener('mousemove', () => {
   document.body.classList.add('is-hovering')
   document.body.classList.remove('is-touching')
}, { passive: true })

// if ('paintWorklet' in CSS) {
//    CSS.paintWorklet.addModule('https://www.unpkg.com/css-houdini-squircle/squircle.min.js')
//       .then(() => {
//          document.body.classList.add('ready-smooth-corners')
//       })
//       .catch((e) => {
//          console.error("Squircle paint worklet failed to load", e)
//       })
// }