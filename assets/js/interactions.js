if (is.desktop()){
   $('.project-card').tilt({
      maxTilt: 20,
      perspective: 1500
   })
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

// // Document functions
//
// // FUNCTION Set the wide img width to 100% of window
// function setImgWideWidth() {
//    $('.pd-img-wide').each(function(i) {
//       //console.log('i: ' + i + ' ' + this);
//       var xWindow = $(window).width();
//       var xImg = xWindow;
//       var xImgOffset = $(this).offset();
//       var xImgOffsetLeft = xImgOffset.left;
//       $(this).offset({ left: 0 }).width(xImg);
//    });
// }
// // FUNCTION Set the showcase item height
// function setShowcaseItemHeight() {
//    var xWindow = $(window).width();
//    var yImg = $('.showcase-item').find('.showcase-img').height();
//    $('.showcase-item').each(function(i) {
//       var yShowcaseDescription = $(this).find('.showcase-description').height();
//       if (xWindow > 992) {
//          var yShowcaseItem = yImg + 180;
//       } else {
//          var yShowcaseItem = yImg + yShowcaseDescription + 20;
//       }
//       $(this).height(yShowcaseItem);
//    });
// }
// // FUNCTION (prototyping) Change active state on nav //edit
// function setNavActive(click){
//    $(click).closest('.nav-items').find('.nav-item').removeClass('active');
//    $(click).addClass('active');
//    return false;
// }
//
// // FUNCTION Set the height/width of constrained images
// function setConstrainedImgDimensions(){
//    $('.pd-img-contain, .pd-img-wide, .pd-img-side').each(function(i){
//
//       heightNatural = $(this).data('height');
//        widthNatural = $(this).data('width');
//
//       heightGiven =  $(this).height();
//        widthGiven =  $(this).width();
//
//       if(widthNatural >= heightNatural){
//          $(this).height(widthGiven * heightNatural / widthNatural);
//       } else{
//          $(this).width(widthNatural * heightGiven / heightNatural);
//       }
//
//    });
//
//    sideBySides = $('.pd-img-side-by-side');
//    for(i = 0; i < sideBySides.length; i+=2){
//
//       heightG = $(sideBySides[i]).height();
//       widthG  = $(sideBySides[i]).parent().outerWidth() - 2 * Number($(sideBySides[i]).parent().css('padding-left').replace(/px/, ''));
//
//       // spread = Number($(sideBySides[i]).css('margin-right').replace(/px/, ''));
//
//
//       imgL = {
//          el:      $(sideBySides[i]),
//          height:  $(sideBySides[i]).data('height'),
//          width:   $(sideBySides[i]).data('width'),
//          ratio:   $(sideBySides[i]).data('width') / $(sideBySides[i]).data('height')
//       }
//
//       imgR = {
//          el:      $(sideBySides[i + 1]),
//          height:  $(sideBySides[i + 1]).data('height'),
//          width:   $(sideBySides[i + 1]).data('width'),
//          ratio:   $(sideBySides[i + 1]).data('width') / $(sideBySides[i + 1]).data('height')
//       }
//
//       imgL.el.height(imgL.height);
//       imgR.el.height(imgR.height);
//
//       imgL.el.width(imgL.width);
//       imgR.el.width(imgR.width);
//
//       imgRatio = imgL.width / imgR.width;
//
//       imgR.el.height(imgL.height);
//       imgR.el.width(imgR.width * (imgL.height / imgR.height));
//
//
//       widthRatio = widthG / (imgL.el.width() + imgR.el.width());
//
//       oldRWidth = imgR.el.width();
//
//       imgL.el.width(imgL.el.width() * widthRatio);
//       imgR.el.width(imgR.el.width() * widthRatio);
//
//       heightScalar = oldRWidth / imgR.el.width();
//
//       imgL.el.height(imgL.el.height() / heightScalar);
//       imgR.el.height(imgR.el.height() / heightScalar);
//    }
//
// }
// $(document).ready(function(){
//    if(is.not.touchDevice()){
//       $(function () {
//          $('[data-toggle="tooltip"]').tooltip()
//       })
//    }
//
//    // Prototyping nav
//    $('.nav-top').on('click', '.nav-item', function(){
//       setNavActive(this);
//    });
//
//
//    // Scroll to
//    $('.js-to-top').on('click', function(){
//       $(window).scrollTo($('#top'), 800,{
//          interrupt: true
//       });
//    });
//    $('.nav-item.active + .nav-projects>a').on('click', function(e){
//       e.preventDefault();
//       window.history.pushState("Projects", "Projects", "#projects");
//       $(window).scrollTo($('#projects'), 600, {
//          interrupt: true,
//          offset: -50
//       });
//    });
//
//    // Responsive video resizing
//    $(".pd-embed").fitVids({
//       customSelector: "iframe[src^='https://marvelapp.com']" // InVision doesn't work...
//    });
//
//    // On load reset the showcase item height
//    setShowcaseItemHeight();
//    // On load reset the img width to 100% of window
//    setImgWideWidth();
//    // On load set the image dimensions for particular images
//    setConstrainedImgDimensions();
//    // On resize, re-run functions
//    $(window).resize(function() {
//       setShowcaseItemHeight();
//       setImgWideWidth();
//       setConstrainedImgDimensions();
//    });
//
//    anchors.options = {
//       placement: 'left',
//       icon: '#'
//    };
//    anchors.add('.pd-section h2');
//
//    $('.pd-header').after('<div class="row pd-section"><div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12"><div id="table-of-contents"></div></div></div>')
//
//    if ($('#table-of-contents')[0] != undefined)
//       generateTableOfContents(anchors.elements);
//
//    anchors.add('.pd-section h3');
//
//    $('#table-of-contents a').on('click', function(e){
//       e.preventDefault();
//       newLocation = $(this);
//       window.history.pushState(newLocation.text(), newLocation.text(), newLocation.attr('href'));
//       $(window).scrollTo($(newLocation.attr('href')), 600, {
//          interrupt: true,
//          offset: -50
//       });
//    });
//    // tkFinder();
// });
//
// // External code for generating a simple dynamic Table of Contents
// function generateTableOfContents(els) {
//    var anchoredElText,
//        anchoredElHref,
//        list = document.createElement('OL');
//
//    document.getElementById('table-of-contents').appendChild(list);
//
//    for (var i = 0; i < els.length; i++) {
//       anchoredElText = els[i].textContent;
//       anchoredElHref = els[i].querySelector('.anchorjs-link').getAttribute('href');
//       addNavItem(list, anchoredElHref, anchoredElText);
//    }
//    function addNavItem(ul, href, text) {
//       var listItem = document.createElement('LI'),
//           anchorItem = document.createElement('A'),
//           textNode = document.createTextNode(text);
//
//       anchorItem.href = href;
//       list.appendChild(listItem);
//       listItem.appendChild(anchorItem);
//       anchorItem.appendChild(textNode);
//    }
// }
//
// function tkFinder(){
//    findInPage('TK')
// }
//
// function findInPage(str) {
//    var documentHTML = $('html').html();
//    var found = documentHTML.search(str);
//
//    if(found>0){
//       $('.tk-error').removeClass('hidden');
//    }
//
// }
//
// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// // particlesJS.load('particles-js', 'js/config-particles.json', function() {
// //   console.log('Particles are loaded.');
// // });
