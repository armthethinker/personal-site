<?php
   include($_SERVER['DOCUMENT_ROOT']."/includes/global-vars.php");
  $m_location='cv';
  $m_title="Curriculum Vitae";
  $bg_body='palette17 cv';
  include($path_includes.'/header.php');
include($path_includes.'/navbar.php');
  ?>

<div class="container m-t-lg">
   <div class="row hidden">
      <div class="col-xs-12">
         <h1 class="palette15-t"><?php echo $m_title ?></h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3" id="scrollspy-nav">
         <ul class="nav nav-pills nav-stacked well well-sm visible-lg-block visible-md-block" role="tablist" data-spy="affix" data-offset-top="82" data-offset-bottom="200">
            <li role="presentation"><a data-scroll href="#sec-andrew">Andrew</a></li>
            <li role="presentation"><a data-scroll href="#sec-education">Education</a></li>
            <li role="presentation"><a data-scroll href="#sec-work">Entreprenurial &amp; Work Experience</a></li>
            <li role="presentation"><a data-scroll href="#sec-awards">Honors &amp; Awards</a></li>
            <li role="presentation"><a data-scroll href="#sec-publication">Presentations &amp; Papers</a></li>
            <li role="presentation"><a data-scroll href="#sec-skills">Skills</a></li>
            <li role="presentation"><a data-scroll href="#sec-campus">Campus Activities</a></li>
            <li role="presentation"><a data-scroll href="#sec-facts">Other Facts</a></li>
         </ul>
      </div>
      <div class="col-md-9">
         <section id="sec-andrew">
            <h1><i class="fa fa-fw fa-rocket animated"></i> Andrew</h1>
            <?php perch_content('Andrew'); ?>
         </section>
         <section id="sec-education">
            <h1><i class="fa fa-fw fa-graduation-cap animated"></i> Education</h1>
            <?php perch_content('Education'); ?>
         </section>
         <section id="sec-work">
            <h1><i class="fa fa-fw fa-lightbulb-o animated"></i> Entrepreneurial &amp; Work Experience</h1>
            <?php perch_content('Work'); ?>
         </section>
         <section id="sec-awards">
            <h1><i class="fa fa-fw fa-trophy animated"></i> Honors &amp; Awards</h1>
            <?php perch_content('Honors'); ?>
         </section>
         <section id="sec-publication">
            <h1><i class="fa fa-fw fa-bullhorn animated"></i> Publications, Papers, &amp; Presentations</h1>
            <?php perch_content('Publications'); ?>
         </section>
         <section id="sec-skills">
            <h1><i class="fa fa-fw fa-wrench animated"></i> Skills</h1>
            <?php perch_content('Skill Bars'); ?>
            <?php perch_content('Skill Pills'); ?>
         </section>
         <section id="sec-campus">
            <h1><i class="fa fa-fw fa-paper-plane-o animated"></i> Campus Activities</h1>
            <?php perch_content('Campus'); ?>
         </section>
         <section id="sec-facts">
            <h1><i class="fa fa-fw fa-lemon-o animated"></i> Other Facts</h1>
            <?php perch_content('Facts');?>
         </section>
         <div class="alert alert-success">
            <div class="media">
               <i class="fa fa-fw fa-code pull-left"></i>
               <div class="media-body">
                  <strong>Check out my code portfolio!</strong> To see a few code snippets, check out my <a href="http://codepen.io/armthethinker" target="_blank"><i class="fa fa-codepen"></i> Codepen portfolio</a>.
               </div>
            </div>
         </div>
         <div class="alert alert-info">
            <div class="media">
               <i class="fa fa-fw fa-wrench pull-left"></i>
               <div class="media-body">
                  <strong>Don't forget!</strong> To see projects related to my CV, go to <a href="../projects/">projects</a>.
               </div>
            </div>
         </div>
         <div class="alert alert-warning hidden js-interesting-alert">
            <div class="media">
               <i class="fa fa-fw fa-eye pull-left"></i>
               <div class="media-body">
                  <strong>You're Missing Something!</strong><br>
                     You have the "Most Interesting" checkbox turned on. If you uncheck it, you can see more examples of my work like my 81+K OK GO video remix, how I built this site, and more.<br>
                  <label class="m-tb-sm">
                     <input type="checkbox" id="interestingbox2"> Just see what is most interesting
                  </label>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
<?php include("../../includes/footer.php") ?>
