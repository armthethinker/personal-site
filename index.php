<?php
include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

$menu_location="bio";
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
               <h1>Andrew R McHugh TK add links</h1>
               <h3>UX Designer of New Futures</h3>

               <p class="lead"><strong>I break down complexity into understandable and useable chunks.</strong> Currently, <strong>I am a Masters student at Carnegie Mellon University and at the Madeira Interactive Technologies Institute</strong> in Portugal, studying human-computer interaction with a focus on virtual reality. Through August, I am exploring the user experience design implications for virtual reality in an internship called <a>Humane Virtuality</a>.</p>

               <p>Previously, I cofounded, designed, and produced the a curiosity-inspired platform, <a>The What If…? Conference</a>. After three and a half years, I left to design and develop user experiences. In April 2016, my first children’s book <a>The Book of What If…?</a> was published by Beyond Words / Aladdin an imprint of Simon &amp; Schuster. My work has been featured in news outlets including the <a>Wall Street Journal</a> and <a>Silicon Prairie News</a>.</p>

               <p>Actively curious about many things, I have a background in design, philosophy, technology and people, mathematics, and physics. During my undergraduate years, I built a bikeshare program, led a movement for systematic sustainability change, and researched brain-computer interfaces and digital divide/differentiation problems. In my free time, I tinker on side projects and listen to music louder than necessary.</p>
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
