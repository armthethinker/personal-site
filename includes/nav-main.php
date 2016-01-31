<?php
   if ($navStyle == 1){
      $navStyle = 'nav-main-inverse';
   }
   else {
      $navStyle = null;
   }
?>
<div class="nav-main <?= $navStyle ?>">
   <div class="nav-items">
      <div class="nav-item active"><a href="/">Bio</a></div>
      <div class="nav-item"><a href="/projects">Projects</a></div>
      <div class="nav-item"><a href="">CV</a></div>
      <div class="nav-item"><a href="http://amzn.com/1582705291" target="_blank">Book</a></div>
   </div>
</div>
