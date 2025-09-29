<?php if($_SESSION['login'])
{?>
<div class="top-header">
	<div class="container">
		<ul class="tp-hd-lft wow fadeInLeft animated" data-wow-delay=".5s">
		
			
			<ul class="tp-hd-rgt wow fadeInRight animated" data-wow-delay=".5s"> 
			<li class="tol">WELCOME :</li>				
			<li class="sig"><?php echo htmlentities($_SESSION['login']);?></li> 
			<li class="sigi"><a href="logout.php" >| LOGOUT</a></li>
		</ul>
		
		<div class="clearfix"></div>
	</div>
</div><?php } else {?>
<div class="top-header">
	<div class="container">
		<ul class="tp-hd-lft wow fadeInLeft animated" data-wow-delay=".5s">
			
			<li class="sig"><a href="#" data-toggle="modal" data-target="#myModal" >SIGN UP |</a></li> 
			<li class="sigi"><a href="#" data-toggle="modal" data-target="#myModal4" >SIGN IN</a></li>
		</ul>
		<ul class="tp-hd-rgt wow fadeInRight animated" data-wow-delay=".5s"> 
		
        </ul>
		<div class="clearfix"></div>
	</div>
</div>
<?php }?>
<!--- /top-header ---->
<!--- header ---->
<div class="header">
	<div class="container">
		<div class="logo wow fadeInDown animated" data-wow-delay=".5s">
			<a href="index.php">EXPLORE<span>&nbsp; INDIA</span></a>	
		</div>
	
		
		<div class="clearfix"></div>
	</div>
</div>
<!--- /header ---->
<!--- footer-btm ---->
<div class="footer-btm wow fadeInLeft animated" data-wow-delay=".5s">
	<div class="container">
	<div class="navigation">
			<nav class="navbar navbar-default">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
					<nav class="cl-effect-1">
						<ul class="nav navbar-nav">
														<li><a href="index.php">HOME</a></li>
							<li><a href="destination.php">DESTINATIONS</a></li>
							<li><a href="gallery.php">GALLERY</a></li>
							
							<li><a href="book tickets.php">BOOK TICKETS</a></li>

								
							<li><a href="about.php">ABOUT</a></li>
							
				
							<li><a href="enquiry.php">ENQUIRY</a></li>



							<li><a href="faqs.php">FAQs</a></li>

							<?php if($_SESSION['login'])
{?>
								<li><a href="profile.php"> MY PROFILE</a>  </li>
								<?php } else { ?>
								<li><a href="#"></a></li>
								<?php } ?>
								<div class="clearfix"></div>
								
						
								

						</ul>
					</nav>
				</div><!-- /.navbar-collapse -->	
			</nav>
		</div>
		
		<div class="clearfix"></div>
	</div>
</div>