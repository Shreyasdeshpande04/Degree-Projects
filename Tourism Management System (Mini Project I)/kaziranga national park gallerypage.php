<?php
session_start();
error_reporting(0);
include('includes/config.php');
?>


  <!DOCTYPE HTML>
<html>
<head>

 <link rel="stylesheet" href="css/style5.css">
 
 <link rel="stylesheet" href="css/style3.css">
 
  <link rel="stylesheet" href="css/style4.css">
 <script type="text/javascript" src="js/script1.js"></script>
    

 
<title>EXPLORE INDIA | KAZIRANGA NATIONAL PARK GALLERYPAGE</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
<script type="applijewelleryion/x-javascript">  </script>
<link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
<link href="css/style.css" rel='stylesheet' type='text/css' />
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,700,600' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
<link href="css/font-awesome.css" rel="stylesheet">
<!-- Custom Theme files -->
<script src="js/jquery-1.12.0.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!--animate-->
<link href="css/animate.css" rel="stylesheet" type="text/css" media="all">
<script src="js/wow.min.js"></script>
    <script>
         new WOW().init();
    </script>
    <style>
hr{
height: 3px;
background-color: white;
border: none;
}
</style>
<!--//end-animate-->
</head>

<body style="background-color: aquamarine;">
<?php include('includes/header.php');?>
<!--- banner ----><BR>
<center><h2><p style="font-family:Comic Sans MS";>"WELCOME TO KAZIRANGA NATIONAL PARK GALLERYPAGE"</p><hr></center></h2><br><br>
<div class="container">

  <!-- Full-width images with number text -->
  <div class="mySlides">
    <div class="numbertext">1 / 5</div>
      <img src="images/264.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 5</div>
      <img src="images/265.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">3 / 5</div>
      <img src="images/266.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">4 / 5</div>
      <img src="images/305.jpg" style="width:100%">
  </div>

  <div class="mySlides">
    <div class="numbertext">5 / 5</div>
      <img src="images/306.jpg" style="width:100%">
  </div>

  

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

  <!-- Image text -->
  <div class="caption-container">
    <p id="caption"></p>
  </div>

  <!-- Thumbnail images -->
  <div class="row">
    <div class="column">
      <img class="demo cursor" src="images/264.jpg" style="width:100%" height="170px" onclick="currentSlide(1)">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/265.jpg" style="width:100%" height="170px"  onclick="currentSlide(2)">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/266.jpg" style="width:100%" height="170px" onclick="currentSlide(3)">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/305.jpg" style="width:100%" height="170px" onclick="currentSlide(4)">
    </div>
    <div class="column">
      <img class="demo cursor" src="images/306.jpg" style="width:100%"  height="170px" onclick="currentSlide(5)">
    </div>
   
    </div>
  </div>
</div>
<br><br><br><br><br>
    
   <?php include('includes/footer.php');?>
<!-- signup -->
<?php include('includes/signup.php');?>         
<!-- //signu -->
<!-- signin -->
<?php include('includes/signin.php');?>         
<!-- //signin -->
<!-- write us -->
<?php include('includes/write-us.php');?>           
<!-- //write us -->
  
</body>
</html>