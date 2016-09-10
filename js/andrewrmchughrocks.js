// Document functions

// FUNCTION Set the wide img width to 100% of window
function setImgWideWidth() {
   $('.pd-img-wide').each(function(i) {
      //console.log('i: ' + i + ' ' + this);
      var xWindow = $(window).width();
      var xImg = xWindow;
      var xImgOffset = $(this).offset();
      var xImgOffsetLeft = xImgOffset.left;
      $(this).offset({ left: 0 }).width(xImg);
   });
}
// FUNCTION Set the showcase item height
function setShowcaseItemHeight() {
   var xWindow = $(window).width();
   var yImg = $('.showcase-item').find('.showcase-img').height();
   $('.showcase-item').each(function(i) {
      var yShowcaseDescription = $(this).find('.showcase-description').height();
      if (xWindow > 992) {
         var yShowcaseItem = yImg + 180;
      } else {
         var yShowcaseItem = yImg + yShowcaseDescription + 20;
      }
      $(this).height(yShowcaseItem);
   });
}
// FUNCTION (prototyping) Change active state on nav //edit
function setNavActive(click){
   $(click).closest('.nav-items').find('.nav-item').removeClass('active');
   $(click).addClass('active');
   return false;
}

$(document).ready(function(){
   // On load and window resize, reset the showcase item height
   setShowcaseItemHeight();
   $(window).resize(function() {
      setShowcaseItemHeight();
   });

   // Prototyping nav
   $('.nav-top').on('click', '.nav-item', function(){
      setNavActive(this);
   });


   // Scroll to
   $('.js-to-top').on('click', function(){
      $(window).scrollTo($('#top'), 800,{
         interrupt: true
      });
   });

   // Responsive video resizing
   $(".pd-embed").fitVids({
      customSelector: "iframe[src^='https://marvelapp.com']"
   });


   // On load and window resize, reset the img width to 100% of window
   setImgWideWidth();
   $(window).resize(function() {
      setImgWideWidth();
   });

   // tkFinder();
});

function tkFinder(){
   findInPage('TK')
}

function findInPage(str) {
   var documentHTML = $('html').html();
   var found = documentHTML.search(str);

   if(found>0){
      $('.tk-error').removeClass('hidden');
   }

}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'js/config-particles.json', function() {
//   console.log('Particles are loaded.');
// });
