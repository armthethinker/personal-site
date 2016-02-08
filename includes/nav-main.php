<?php
   if ($navStyle == 1){
      $navStyle = 'nav-main-inverse';
   }
?>
<div class="nav-main <?= $navStyle ?>">
   <div class="nav-items">
      <div class="nav-item <?php if ($menu_location=="bio"){echo 'active';}?>"><a href="/">Bio</a></div>
      <div class="nav-item <?php if ($menu_location=="projects"){echo 'active';}?>"><a href="/projects">Projects</a></div>
      <div class="nav-item"><a href="https://dl.dropboxusercontent.com/u/32463552/CV/CV.pdf" target="_blank">CV</a></div>
      <div class="nav-item"><a href="http://amzn.com/1582705291" target="_blank">Book</a></div>
   </div>
</div>
