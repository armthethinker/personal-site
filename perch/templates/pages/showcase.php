<?php
   include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

   $m_location="projects";
   include($path_includes.'/header.php');
?>
<div class="container">
   <?php perch_content('Showcase Meta'); ?>
   <?php perch_content('Showcase Description'); ?>
</div>
<?php include($path_includes.'/footer.php');?>
