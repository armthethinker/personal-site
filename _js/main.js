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

$(document).ready(function(){

   // Setup anchor links
   anchors.options = {
      placement: 'left',
      icon: '#'
   };
   anchors.add('.page h2:not(:empty)');

   // If there isn't a TOC, make one from the anchors elements
   if ($('#table-of-contents')[0] != undefined)
      generateTableOfContents(anchors.elements);

});


document.addEventListener('DOMContentLoaded', function () {
   const grid = document.querySelector('.m-grid')
   new Masonry(grid, {
      itemSelector: '.m-grid-item',
      columnWidth: '.m-grid-sizer',
      percentPosition: true
   })
})
