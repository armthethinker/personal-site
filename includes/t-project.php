<div class="col-md-6">
  <div class="project-container">
    <a id="p-img-<?php echo $projectNum;?>" class="p-img"></a>
    <div class="p-description">
      <h3 class="fixie"></h3>
      <h5 class="text-muted">More information</h5>
      <p>The real information that gets put in the thing where it is seen by everyone and people know things about the p now. The real information that gets put in the thing where it is seen by everyone and people know things about the p now.about the p now.about the p now.</p>
    </div>
    <div class="p-data">
      <ul class="list-inline">
        <li><i class="fa fa-youtube-play text-danger small"></i> <a>Link</a></li>
        <li><i class="fa fa-heart-o text-danger small"></i> <?php echo rand(1,300);?></li>
        <li><i class="fa fa-envelope-o text-danger small"></i> <?php echo rand(1,300);?></li>
      </ul>
    </div><a class="btn btn-success btn-xs btn-view" href="project.php">View project <i class="fa fa-arrow-right"></i></a>
  </div>
</div>
<style>
  #p-img-<?php echo $projectNum;?>{
    background-image: url('http://www.thewhatifconference.com/img/cphotos/sm/Image<?php echo rand(1,417);?>.jpg');
  }
</style>