<?php
include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

$m_location="home";
$m_title="Andrew R McHugh | Designer & Developer";
include($path_includes.'/header.php');
?>
<div class="img-background-container">

   <div class="img-gradient"></div>
   <div class="img-background"></div>
   <div class="container">
      <div class="row">
         <div class="col-lg-5 col-md-6 col-xs-12">
            <div class="homepage-hero animated slideFadeInUp">
               <h1>Andrew R McHugh</h1>
               <h3>Designer of New Futures</h3>
               <p>I break down complexity into understandable and useable chunks. Currently, I am a Masters student at Carnegie Mellon University, studying human-computer interaction with a focus on virtual reality. Previously, I cofounded the What If…? Conference, What If…? 360’s predecessor. I left in 2014 and have been designing and developing user experiences ever since.</p>
               <p>Actively curious about many things, I have a background in design, philosophy, technology and people, mathematics, and physics. During my undergraduate years, I built a bikeshare program, led a movement for systematic sustainability change, and researched brain-computer interfaces and digital divide/differentiation problems. In my free time, I tinkers on side projects and listen to music louder than necessary.</p>
               <?php
                  $navStyle = 1;
                  include($path_includes.'/nav-main.php');
               ?>
            </div>
         </div>
      </div>
   </div>
</div>
<?php include($path_includes.'/footer.php'); ?>
