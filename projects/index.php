<?php
include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

$menu_location="projects";
$m_title="Showcase of Andrew R McHugh";
include($path_includes.'/header.php');
?>

<div class="container">
   <?php include($path_includes.'/nav-top.php'); ?>
   <div class="row">
      <div class="col-xs-12">
         <h1>Selected Projects</h1>
         <p class="lead">These projects best exemplify the type of work I aim to do in the future.</p>
      </div>
   </div>
   <div class="row">
      <div class="col-xs-12" domFlag>
         <?php
            perch_content_custom('Showcase Meta', array(
               'page'=>'/projects/*',
               'template'=>'project-showcase.html',
               'sort'=>'pd_order'
            ));
         ?>
      </div>
   </div>
</div>
<?php include($path_includes.'/footer.php');?>
