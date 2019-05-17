<?php
   $serverRoot = $_SERVER['DOCUMENT_ROOT'];

   include($serverRoot.'/perch/runtime.php');
   $andrew_dbox="https://dl.dropboxusercontent.com/u/32463552/temp-public-assets";
   $tooty = $andrew_dbox;
   ?>
<!DOCTYPE html>
<html>

<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
   <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->


   <link rel="shortcut icon" href="http://andrewrmchugh.rocks/favicon.ico" type="image/x-icon" />
   <?php
      $domain        = 'http://'.$_SERVER["HTTP_HOST"];
      $url           = $domain.$_SERVER["REQUEST_URI"];
      $sitename      = "Andrew R McHugh | UX Designer of New Futures";
      $twittername   = "@armthethinker";
      $sharing_image = 'http://andrewrmchugh.rocks/img/andrew-mchugh-lg.jpg';
      $fbname        = "https://www.facebook.com/arm5629";

      PerchSystem::set_var('sitename',$sitename);
      PerchSystem::set_var('domain',$domain);
      PerchSystem::set_var('url',$url);
      PerchSystem::set_var('sharing_image',$sharing_image);
      PerchSystem::set_var('twittername',$twittername);
      PerchSystem::set_var('fbname',$fbname);

      perch_page_attributes(array(
         'template' => 'seo.html'
      ));
   ?>

   <?php
      if ($old==true){
         if ($m_location=="home"){
            echo '<link rel="stylesheet" href="'.$tooty.'/dist/css/DaseinDesign-v0.2.0.cover.css" media="screen" type="text/css" />';
         }
         else{
            echo '<link rel="stylesheet" href="'.$tooty.'/dist/css/DaseinDesign-v0.2.0.css" media="screen" type="text/css" />';
            echo '<link rel="stylesheet" href="/css/patch.css" media="screen" type="text/css" />';
            echo '<link href="http://fonts.googleapis.com/css?family=Lato:100,300,400,900,900italic|Vollkorn:400italic,400,700|Montserrat" rel="stylesheet" type="text/css">';
         }
      }
      else{
         ?>
            <link rel="stylesheet" href="/dist/css/andrewrmchughrocks-3.min.css" media="screen" type="text/css" />
            <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700' rel='stylesheet' type='text/css'>
            <script src="https://use.fontawesome.com/8a0ca50a3d.js"></script>
         <?php
      }
   ?>

</head>

<body>
<div class="alert alert-danger tk-error hidden">
   <strong class="tk-count"></strong> To Come(s) on page.
</div>
