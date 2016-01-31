<?php
   include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

  include($path_includes.'/navbar.php');
   $bg_body='palette20';
   $m_location="projects";
   include($path_includes.'/header.php');
?>
<div class="container-fluid palette19 palette15-t">
   <?php perch_content('Description'); ?>
   <?php perch_content('Image Wall'); ?>
</div>
<?php include($path_includes.'/footer.php');?>
