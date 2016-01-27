<?php
   include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

  $bg_body='palette20';
  $m_location="projects";
  include($path_includes.'/header.php');
  include($path_includes.'/navbar.php');
?>
<div class="container-fluid palette19 palette15-t">
	<?php perch_content('Description'); ?>
   <?php perch_content('Image Wall'); ?>
</div>
<?php
//<div class="container palette20 palette15-t">
//	<div class="row m-b-md">
//	  <div class="col-xs-12">
//		  <h3>Related Projects</h3>
//		  <div class="row">
//				<phpz
//				  $projectNum=1;
//				  while ( $projectNum<= 3) {
//                  include ($path_includes.'/t-project.php');
//                  $projectNum++;
//				  }
//				>
//			 </div>
//	  </div>
//	</div>
//</div>
?>
<?php include($path_includes.'/footer.php');?>
