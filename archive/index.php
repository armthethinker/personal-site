<?php
   include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");

   $bg_body='palette15';
   $m_location="projects";
   include($path_includes.'/header.php');
   include($path_includes.'/navbar.php');
?>
<div class="container">
   <div class="row m-tb-md">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
         <div class="alert alert-warning small">
            <strong>Note:</strong> ARCHIVE
         </div>
      </div>
   </div>
   <div class="row m-tb-md">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
         <div class="alert alert-warning small">
            <strong>Note:</strong> Some of my work can only be shown privately in an interview setting.
         </div>
         <input class="form-control minimal js-search-projects input-lg" type="text" placeholder="Search for a word or #tag">
         <ul class="list-inline">
            <li>
               <label>
                  <input type="checkbox" id="interestingbox"> Just see what is most interesting
               </label>
            </li>
            <li class="pull-right">
               <i class="fa fa-flash palette7-t"></i> Ongoing &amp; Active Involvement
            </li>
         </ul>
      </div>
   </div>
   <div class="row">
      <?php
         perch_content_custom('Description', array(
            'page'=>'/archive/*',
            'template'=>'project-card.html',
            'sort'=>'date_start',
            'sort-order'=>'DESC'
         ));
      ?>
      <div class="col-xs-12 m-tb-lg">
         <div class="alert alert-warning hidden js-interesting-alert">
            <div class="media">
               <i class="fa fa-fw fa-eye pull-left"></i>
               <div class="media-body">
                  <strong>You're Missing Something!</strong><br>
                     You have the "Most Interesting" checkbox turned on. If you uncheck it, you can see more examples of my work.<br>
                  <label class="m-tb-sm">
                     <input type="checkbox" id="interestingbox2"> Just see what is most interesting
                  </label>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<?php include($path_includes.'/footer.php');?>
