if (is.desktop()){
   // $('.project-card').tilt({
   //    maxTilt: 20,
   //    perspective: 1500
   // })
   const element =  document.querySelector('.animated-hand')
   if (element != null){
      element.addEventListener('mouseenter', function() {
         element.classList.remove('jackInTheBox', 'delay-1s', 'animated')
         element.classList.add('animated', 'tada')
      })
      element.addEventListener('mouseout', function() {
         element.classList.remove('animated', 'tada')
      })
   }
   
   $('.visible-desktop').toggleClass('invisible')
}

function flipTimelineButton(){
   $('.btn-timeline span').toggleClass('d-none').toggleClass('d-inline')
   $('.btn-timeline .fas').toggleClass('fa-rotate-180')
}

$('.collapse.collapse-timeline').on('show.bs.collapse', function(){
   flipTimelineButton()
})
$('.collapse.collapse-timeline').on('hide.bs.collapse', function(){
   flipTimelineButton()
})

// Generate a table of contents
function generateTableOfContents(els) {
   var anchoredElText,
   anchoredElHref;
   list = document.getElementById('table-of-contents');
   
   // Find where you want to put the TOC, append the list we just made
   // document.getElementById('table-of-contents').appendChild(list);
   
   // Take all of the elements in the els and create+add a nav item
   // Start at 2 to skip the page subheader and TOC header
   for (var i = 2; i < els.length; i++) {
      anchoredElText = els[i].textContent;
      if (anchoredElText != ''){
         anchoredElHref = els[i].querySelector('.anchorjs-link').getAttribute('href');
         addNavItem(list, anchoredElHref, anchoredElText);
      }
   }
}

// Add nav items to a TOC
function addNavItem(list, href, text) {
   var anchorItem = document.createElement('A'),
   textNode = document.createTextNode(text),
   listItem = document.createElement('DIV');
   
   // prepend number
   
   anchorItem.classList.add('toc-link');
   anchorItem.href = href;
   list.appendChild(listItem);
   listItem.appendChild(anchorItem);
   listItem.classList.add('toc-list-item')
   anchorItem.appendChild(textNode);
}

// $(document).ready(function(){
   
//    // Setup anchor links
//    anchors.options = {
//       placement: 'left',
//       icon: '#'
//    };
//    anchors.add('.page h2:not(:empty)');
   
//    // If there isn't a TOC, make one from the anchors elements
//    if ($('#table-of-contents')[0] != undefined)
//       generateTableOfContents(anchors.elements);
   
// });


document.addEventListener('DOMContentLoaded', function () {
   const grid = document.querySelector('.m-grid')
   new Masonry(grid, {
      itemSelector: '.m-grid-item',
      columnWidth: '.m-grid-sizer',
      percentPosition: true,
      horizontalOrder: true,
   })
})

// function highlightTK() {
//   const regex = /\bTK\b/g;
//   let content = document.body.innerHTML;
//   const newContent = content.replace(regex, '<span class="blink">TK</span>');
//   document.body.innerHTML = newContent;
// }

// highlightTK();

// document.addEventListener('DOMContentLoaded', () => {
//    const breadcrumbContainer = document.querySelector('.breadcrumb')
//    const headers = Array.from(document.querySelectorAll('h1, h2, h3, h4'))
   
//    headers.forEach((header, index) => {
//       if (!header.id) header.id = `section-${index}`
//    })
   
//    const updateBreadcrumbs = () => {
//       const threshold = 120;
      
//       // 1. Find the "Active" header (the one closest to the top but not below the threshold)
//       let activeHeader = null;
      
//       for (let i = headers.length - 1; i >= 0; i--) {
//          const rect = headers[i].getBoundingClientRect();
//          if (rect.top <= threshold) {
//             activeHeader = headers[i];
//             break; 
//          }
//       }
      
//       // 2. If no header is active (we are at the top), just show Home
//       if (!activeHeader) {
//          renderBreadcrumbs([]);
//          return;
//       }
      
//       // 3. Build the hierarchy stack by looking backwards from the active header
//       const stack = [activeHeader];
//       let currentLevel = parseInt(activeHeader.tagName.substring(1));
//       let activeIndex = headers.indexOf(activeHeader);
      
//       for (let i = activeIndex - 1; i >= 0; i--) {
//          const level = parseInt(headers[i].tagName.substring(1));
//          if (level < currentLevel) {
//             stack.unshift(headers[i]); // Add to the start of the array
//             currentLevel = level;
//          }
//       }
      
//       renderBreadcrumbs(stack);
//    };
   
//    const renderBreadcrumbs = (stack) => {
//       let html = ``;
      
//       stack.forEach((header, index) => {
//          const isLast = index === stack.length - 1;
//          if (isLast) {
//             html += `<li class="breadcrumb-item active" aria-current="page">${header.innerText}</li>`;
//          } else {
//             html += `<li class="breadcrumb-item"><a href="#${header.id}">${header.innerText}</a></li>`;
//          }
//       });
      
//       breadcrumbContainer.innerHTML = html;
//    };
   
//    let ticking = false;
//    window.addEventListener('scroll', () => {
//       if (!ticking) {
//          window.requestAnimationFrame(() => {
//             updateBreadcrumbs();
//             ticking = false;
//          });
//          ticking = true;
//       }
//    });
   
//    updateBreadcrumbs(); // Initial check
// });


// function debugHeaderHierarchy(containerSelector = '.debug-output') {
//     const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
//     const container = document.querySelector(containerSelector);
    
//     if (!container) {
//         console.error("Debug container not found!");
//         return;
//     }

//     let rootUl = document.createElement('ul');
//     let currentUl = rootUl;
//     let stack = [{ level: 0, ul: rootUl }];

//     headers.forEach(header => {
//         const level = parseInt(header.tagName.substring(1));
//         const li = document.createElement('li');
//         li.innerHTML = `<strong>${header.tagName}:</strong> ${header.innerText}`;

//         // Find the correct parent in the stack
//         while (stack.length > 1 && stack[stack.length - 1].level >= level) {
//             stack.pop();
//         }

//         currentUl = stack[stack.length - 1].ul;

//         // If we are nesting deeper, we need a new UL inside the last LI
//         if (level > stack[stack.length - 1].level) {
//             const newUl = document.createElement('ul');
//             // If the current UL has an LI, append the new UL to that LI
//             if (currentUl.lastElementChild) {
//                 currentUl.lastElementChild.appendChild(newUl);
//             } else {
//                 currentUl.appendChild(newUl);
//             }
//             currentUl = newUl;
//             stack.push({ level: level, ul: currentUl });
//         }

//         currentUl.appendChild(li);
//     });

//     container.innerHTML = '<h3>Document Structure Debug</h3>';
//     container.appendChild(rootUl);
// }

// // Usage: 
// debugHeaderHierarchy();