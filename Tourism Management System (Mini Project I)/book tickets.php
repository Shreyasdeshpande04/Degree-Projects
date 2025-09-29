<?php
session_start();
error_reporting(0);
include('includes/config.php');
?>
<!DOCTYPE HTML>
<html>
<head>
  
<title> EXPLORE INDIA | BOOK TICKETS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
<!--//end-animate-->
</head>
<body style="background-color: orange">
<?php include('includes/header.php');?>


<br><br>


<center><h2><p style="font-family:Comic Sans MS";>"WELCOME TO BOOK TICKETS PAGE"</p><hr></center></h2><br>
<p><font size="+2"> <center><strong>YOU CAN BOOK TICKETS THROUGH THE FOLLOWING GIVEN TRAVELLING SERVICES:---<hr></strong></center> <center><strong>ROAD<hr></strong></center>
   <div class="jumbotron"style="background-color: lightgreen;">

  <center>

    <br><img src="images/ola.png" alt="Uploading Error" height="200px" width="400px">
   <p> <strong><br>

<a href="https://www.olacabs.com/">OLA </a>


  </center>
</div>



   <div class="jumbotron"style="background-color: pink">

  <center>
    <br><img src="images/uber.png" alt="Uploading Error" height="200px" width="400px">
   <p> <strong><br>

<a href="https://www.uber.com/in/en/">UBER</a>

  </center>
</div>
<div class="jumbotron"style="background-color: khaki">

  <center>
    <br><img src="images/redbus.png" alt="Uploading Error" height="200px" width="400px">
   <p> <strong><br>

<a href="https://m.redbus.in/">REDBUS </a>
  </center>
</div>

<center><strong>RAIL<hr></strong></center>

<div class="jumbotron"style="background-color: tan">

  <center>
   <br><img src="images/irctc.png" alt="Uploading Error" height="200px" width="400px">
   <p> <strong><br>

<a href="https://www.irctc.co.in/">IRCTC</a>
  </center>
</div>

<center><strong>AIR<hr></strong></center>

<div class="jumbotron"style="background-color: powderblue">

  <center>
    <br><img src="images/air india.png" alt="Uploading Error" height="200px" width="400px">
   <p> <strong><br>

<a href="https://www.airindia.in/">AIR INDIA</a>
  </center>
</div>

    <!--- /footer-top ---->
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