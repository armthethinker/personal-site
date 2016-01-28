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

   <title><?= $m_title ?></title>
   <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

   <!--  Meta Meta  -->
   <!--<meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta name="description" content="A lightweight web design company that focuses on how everything interacts. Design for the embedded environment." />
   <meta name="keywords" content="web design, Columbia, MO, Missouri, web development, flat design, user interface, user experience, layout, " />
   -->
   <!--  Schema Tags  -->
   <!--<meta itemprop="name" content="Dasein Design">
   <meta itemprop="description" content="A lightweight web design company that focuses on how everything interacts. Design for the embedded environment.">
   <meta itemprop="image" content="http://daseindesign.co/img/logo-sq.png">
   -->
   <!--  Open Graph Tags  -->
   <!--<meta property="og:title" content="Dasein Design" />
   <meta property="og:site_name" content="Dasein Design"/>
   <meta property="og:url" content="http://daseindesign.co" />
   <meta property="og:description" content="A lightweight web design company that focuses on how everything interacts. Design for the embedded environment." />
   <meta property="og:image" content="/img/logo-sq.png" />
   <meta property="fb:app_id" content="1445828285671294" />
   <meta property="og:type" content="website" />-->

   <?php
      if ($old==true){
         if ($m_location=="home"){
            echo '<link rel="stylesheet" href="'.$tooty.'/dist/css/DaseinDesign-v0.2.0.cover.css" media="screen" type="text/css" />';
         }
         else{
            echo '<link rel="stylesheet" href="'.$tooty.'/dist/css/DaseinDesign-v0.2.0.css" media="screen" type="text/css" />';
            echo '<link rel="stylesheet" href="/css/patch.css" media="screen" type="text/css" />';
            echo '<link href="http://fonts.googleapis.com/css?family=Lato:100,300,400,900,900italic|Vollkorn:400italic,400,700|Montserrat" rel="stylesheet" type="text/css">'
         }
      }
      else{
         ?>
            <link rel="stylesheet" href="/dist/css/andrewrmchughrocks.css" media="screen" type="text/css" />
            <link href='https://fonts.googleapis.com/css?family=Lato:400,300italic,300,700|Droid+Serif' rel='stylesheet' type='text/css'>
         <?php
      }
   ?>

</head>

<body class="<?php echo $bg_body //.' '.$classes_header; ?>">
