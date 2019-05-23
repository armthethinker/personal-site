if (is.desktop()){
   $('.project-card').tilt({
      maxTilt: 20,
      perspective: 1500
   })
   const element =  document.querySelector('.animated-hand')
   element.addEventListener('mouseenter', function() {
      element.classList.remove('jackInTheBox', 'delay-1s', 'animated')
      element.classList.add('animated', 'tada')
   })
   element.addEventListener('mouseout', function() {
      element.classList.remove('animated', 'tada')
   })
} else {

}

function flipTimelineButton(){
   $('.btn-timeline span').toggleClass('d-none').toggleClass('d-inline')
}

$('.collapse.collapse-timeline').on('shown.bs.collapse', function(){
   flipTimelineButton()
})
$('.collapse.collapse-timeline').on('hidden.bs.collapse', function(){
   flipTimelineButton()
})
