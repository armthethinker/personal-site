<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#supercoolnav">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="http://daseindesign.co/">Andrew R McHugh</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="supercoolnav">
      <ul class="nav navbar-nav">
        <li class="<?php if ($m_location=="cv"){echo 'active';}?>"><a href="/cv/">CV</a></li>
        <li class="<?php if ($m_location=="projects"){echo 'active';}?>"><a href="/projects/">Projects</a></li>
        <li class="<?php if ($m_location=="blog"){echo 'active';}?>"><a href="https://medium.com/@armthethinker" target="_blank">Blog <i class="fa fa-external-link"></i></a></li>
        <!--<li class="<?php //if ($m_location=="connect"){echo 'active';}?>"><a href="/connect/">Connect</a></li>-->

      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
