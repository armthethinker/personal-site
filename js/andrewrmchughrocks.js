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

// FUNCTION Set the height/width of constrained images
function setConstrainedImgDimensions(){
   $('.pd-img-contain, .pd-img-wide, .pd-img-side').each(function(i){

      heightNatural = $(this).data('height');
       widthNatural = $(this).data('width');

      heightGiven =  $(this).height();
       widthGiven =  $(this).width();

      if(widthNatural >= heightNatural){
         $(this).height(widthGiven * heightNatural / widthNatural);
      } else{
         $(this).width(widthNatural * heightGiven / heightNatural);
      }

   });

}
$(document).ready(function(){
   if(is.not.touchDevice()){
      $(function () {
         $('[data-toggle="tooltip"]').tooltip()
      })
   }

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
   $('.nav-item.active + .nav-projects>a').on('click', function(e){
      e.preventDefault();
      window.history.pushState("Projects", "Projects", "#projects");
      $(window).scrollTo($('#projects'), 600,{
         interrupt: true,
         offset: -50
      });
   });

   // Responsive video resizing
   $(".pd-embed").fitVids({
      customSelector: "iframe[src^='https://marvelapp.com']"
   });

   // On load reset the showcase item height
   setShowcaseItemHeight();
   // On load reset the img width to 100% of window
   setImgWideWidth();
   // On load set the image dimensions for particular images
   setConstrainedImgDimensions();
   // On resize, re-run functions
   $(window).resize(function() {
      setShowcaseItemHeight();
      setImgWideWidth();
      setConstrainedImgDimensions();
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
