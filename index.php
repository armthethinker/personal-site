<?php
include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

$m_location="home";
$m_title="Andrew R McHugh is pretty awesome.";
$bg_body='palette15';
$classes_header="dds-cover";
include($path_includes.'/header.php');
?>
<div class="site-wrapper img-cover" id="img1">
   <div class="site-wrapper overlay">
      <div class="site-wrapper-inner">
         <div class="cover-container">
            <div class="masthead clearfix">
               <div class="inner">
                  <h3 class="masthead-brand">Andrew R McHugh <small>armthethinker</small></h3>
                  <ul class="nav masthead-nav">
                     <li class="active"><a href="http://daseindesign.co/andrew">Home</a></li>
                     <li><a href="cv/">CV</a></li>
                     <li><a href="projects/">Projects</a></li>
                     <li><a href="https://medium.com/@armthethinker" target="_blank">Blog <i class="fa fa-external-link"></i></a></li>
                     <!--<li><a href="connect/">Connect</a></li>-->
                  </ul>
               </div>
            </div>
            <div class="inner cover">
               <div class="current-projects">
                  <h3>Current Projects</h3>
                  <h4><?= $serverRoot ?></h4>
                  <div>Completing a master's program in human-computer interaction at Carnegie Mellon University with a specific interest in virtual reality.</div>
                  <div>Coauthoring a children's book about What If...? questions. It will be published by Beyond Words (an imprint of Simon and Schuster) in spring 2016. <a href="http://amzn.com/1582705291" target="_blank">You can snag a preorder on Amazon.</a></div>
                  <div>Editor of and writer for <a href="http://medium.com/states-of-being" target="_blank">States of Being</a>, a Medium collection. Right now I'm doing a series on <a href="https://medium.com/states-of-being/eighteen-things-virtual-reality-might-be-3e18e99fdb17" target="_blank">Eighteen Things Virtual Reality Might Be</a>.</div>
                  <div>Developing an augmented reality interface that explores the boundaries of our visual perception. <a href="https://medium.com/states-of-being/seeing-in-two-ea011027fe33" target="_blank">It's pretty neato.</a></div>
                  <div class="hidden">A lifestyle brand based on the good parts of Millennial idology. Become a prototype at <a href="http://iamaprototy.pe" target="_blank">iamaprototy.pe</a>.</div>
               </div>
               <p class="lead">Presently, I'm on a sort of sabbatical. <a href="https://medium.com/states-of-being/why-im-leaving-my-first-startup-36bcec319c47">I stepped out of my first startup</a> last year to pursue a graduate degree in human computer interaction. I'll be at Carnegie Mellon in the fall.</p>
               <p class="lead">That startup was <a href="http://www.thewhatifconference.com" target="_blank">What If...?</a>: a place to ask questions that matter and do something about them. We bust stale thought processes by bringing together diverse groups to co-author our future. I left in the summer of 2014.</p>
               <p class="lead">My background is in philosophy, design, how technology and people come together, math, and physics. Along the way, I've built a bikeshare program, worked for systematic sustainability change, codesigned and cobuilt a couple of web apps, cofounded a startup, and did research with brain computer interfaces and also digital divide/differentiation problems.</p>
               <p class="lead">In my off time, I listen to music louder than necessary and ride my bicycle. I also design and build web apps as a <a href="http://daseindesign.co">freelancer</a> (<a href="http://www.caledonvirtual.com" target="_blank">and non</a>).</p>
               <!--<a class="btn btn-success" href="https://tinyletter.com/armthethinker" target="_blank">Get Notified &amp; Stay In Touch</a>-->
               <h4>Stay in touch and say hello</h4>
               <a class="twitter-follow-button"
               href="https://twitter.com/armthethinker"
               data-show-count="true"
               data-size="large"
               data-lang="en">
               Follow @armthethinker
            </a>

            <div class="connect-links">
               <a href="http://be.net/armthethinker"><i class="fa fa-behance-square"></i></a>
               <a href="https://www.facebook.com/arm5629"><i class="fa fa-facebook"></i></a>
               <a href="http://instagram.com/armthethinker"><i class="fa fa-instagram"></i></a>
               <a href="http://codepen.io/armthethinker"><i class="fa fa-codepen"></i></a>
               <a href="https://plus.google.com/+AndrewMcHughARM5629"><i class="fa fa-google-plus-square"></i></a>
               <a href="http://www.linkedin.com/pub/andrew-mchugh/48/72b/3ab/"><i class="fa fa-linkedin-square"></i></a>
               <a href="https://soundcloud.com/andrew-r-mchugh"><i class="fa fa-soundcloud"></i></a>
               <a href="http://twitter.com/armthethinker"><i class="fa fa-twitter-square"></i></a>
               <a href="https://www.youtube.com/user/arm156291"><i class="fa fa-youtube-square"></i></a>
               <a href="http://open.spotify.com/user/arm5629"><i class="fa fa-spotify"></i></a>
               <a href="http://medium.com/@armthethinker"><img class="fa-medium" src="http://daseindesign.co/img/Medium-white.png"></a>
            </div>
         </div>
      </div>
      <div class="mastfoot">
         <div class="inner">

            <!--<p>Cover template for <a href="http://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>-->
         </div>
      </div>
   </div>
</div>
</div>
</div>

<?php //include("includes/scripts-g.php") ?>
<!--
<script>window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));</script>
 -->
<?php include("includes/postpage.php") ?>
