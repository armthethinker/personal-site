<?php
   include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

   $m_location="projects";
   include($path_includes.'/header.php');
?>
<div class="container" id="top">
   <?php include($path_includes.'/nav-top.php'); ?>
   <div class="row pd-container">
      <div class="col-xs-12">
         <?php perch_content('Showcase Meta'); ?>
         <?php perch_content('Showcase Description'); ?>
      </div>
   </div>
   <a class="u-back-to-top js-to-top">Back to Top</a>
</div>
<?php include($path_includes.'/footer.php');?>
