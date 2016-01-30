<?php
include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

$m_location="home";
$m_title="Andrew R McHugh | Design & Developer.";
include($path_includes.'/header.php');
?>

<div class="container">
   <div class="img-background-container">
      <div class="img-gradient"></div>
      <div class="img-background"></div>
   </div>
   <div class="row">
      <div class="col-lg-5 col-md-6 col-xs-12">
         <div class="homepage-hero">
            <h1>Andrew R McHugh</h1>
            <h3>Designer of Futures</h3>
            <p>Sample text. My background is in philosophy, design, how technology and people come together, math, and physics. Along the way, I've built a bikeshare program, worked for systematic sustainability change, codesigned and cobuilt a couple of web apps, cofounded a startup, and did research with sample text sample.</p>
            <?php include($path_includes.'/nav-main.php'); ?>
         </div>
      </div>
   </div>
</div>

<?php //include("includes/scripts-g.php") ?>
<!--
<script>window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));</script>
-->
<?php include("includes/postpage.php") ?>
