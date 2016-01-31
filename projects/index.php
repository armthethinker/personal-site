<?php
include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

$m_location="projects";
$m_title="Showcase of Andrew R McHugh";
include($path_includes.'/header.php');
?>

<div class="container">
   <div class="row nav-top">
      <div class="col-sm-6 col-xs-12">
         <div class="name">Andrew R McHugh</div>
      </div>
      <div class="col-sm-6 col-xs-12">
         <?php include($path_includes.'/nav-main.php'); ?>
      </div>
   </div>
   <div class="row">
      <div class="col-lg-7 col-md-8 col-sm-10 col-xs-12">
         <h1>Selected Projects</h1>
         <p class="lead">These projects best exemplify the type of work I aim to do in the future. Each showcases unique abilities. To see a wider-view of my work, skim my <a>archive</a>.</p>
      </div>
   </div>
   <div class="row">
      <div class="col-xs-12">
         <?php
            perch_content_custom('Description', array(
               'page'=>'/projects/*',
               'template'=>'project-showcase.html',
               'sort'=>'date_start',
               'sort-order'=>'DESC',
               // 'filter'=>'ongoing',
               // 'match'=>'eq',
               // 'value'=>true
            ));
         ?>
      </div>
   </div>
</div>
<?php include($path_includes.'/footer.php');?>
