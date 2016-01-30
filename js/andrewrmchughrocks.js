// Document functions
$(document).ready(function() {

   // FUNCTION Set the showcase item height
   function setShowcaseItemHeight() {
      $('.showcase-item').each(function(i) {
         //console.log('i: ' + i + ' ' + this);
         var xWindow = $(window).width();
         var yImg = $(this).find('.showcase-img').height();
         if (xWindow >= 992) { //EDIT error at 992 px that is resolved at 993
            var yShowcaseItem = yImg + 50;
         } else {
            //console.log(this);
            var yShowcaseDescription = $(this).find('.showcase-description').height();
            var yShowcaseItem = yImg + yShowcaseDescription;
            //console.log('yImg: ' + yImg + '; yShowcaseDescription: ' + yShowcaseDescription + '; yShowcaseItem: ' + yShowcaseItem);
         }
         $(this).height(yShowcaseItem);
      });
   }

   // On load and window resize, reset the showcase item height
   setShowcaseItemHeight();
   $(window).resize(function() {
      setShowcaseItemHeight();
   });


   // FUNCTION (prototyping) Change active state on nav //edit
   function setNavActive(click){
      $(click).closest('.nav-items').find('.nav-item').removeClass('active');
      $(click).addClass('active');
      return false;
   }
   $('.nav-top').on('click', '.nav-item', function(){
      setNavActive(this);
   })
});
