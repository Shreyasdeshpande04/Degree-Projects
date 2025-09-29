
<html>
<head>
<title>ARTICLE- LIFE</title>
</head>
<body bgcolor="	#90EE90">
<a href="index.html">HOME</a>&nbsp;&nbsp;&nbsp;
<a href="Page2.html">BOOKS</a>&nbsp;&nbsp;&nbsp;
<a href="Page3.html">LESSONS</a>&nbsp;&nbsp;&nbsp;
<a href="Page4.php">MEDITATION</a>&nbsp;&nbsp;&nbsp;
<a href="Page5.php">THINKINGS</a>&nbsp;&nbsp;&nbsp;
<a href="Page6.html">QUOTES</a>
<br>
<br>

<center><h1>THINKINGS</h1> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnc12NN_Kb5tRSpkLcU4TuOFUMMr-49unYWQ&usqp=CAU" width="500"></center>
<p>PHP Cookies</p>
<?php
$cookie_name = "Exercise";
$cookie_value = "Meditation";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
?>

<?php
if(!isset($_COOKIE[$cookie_name])) {
  echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
  echo "Cookie '" . $cookie_name . "' is set!<br>";
  echo "Value is: " . $_COOKIE[$cookie_name];

}
echo "<br>";echo "<br>";
echo "PHP String Functions";
echo "<br>";echo "<br>";
echo "String is: ";
$str = "LIVE LIFE HAPPILY";
$str1 = "Keep Smiling and";
$str2 = " Enjoy Life";
echo "<br>";echo "<br>";
echo $str;
echo "<br>";echo "<br>";
echo "Length of the string is:  ". strlen($str);
echo "<br>";echo "<br>";
echo "Number of words in the string are: ". str_word_count($str);
echo "<br>";echo "<br>";
echo "Reverse: ". strrev($str);
echo "<br>";echo "<br>";
echo "Position of 'LIFE' in string: ". strpos($str, 'LIFE');
echo "<br>";echo "<br>";
echo "String to uppercase: ";
echo strtoupper($str);
echo "<br>";echo "<br>";
echo "String to lowercase: ";
echo strtolower($str);
echo "<br>";echo "<br>";
echo "String concat: ";
echo $str1;
echo $str2;
echo strcmp($str1, $str2);
?>
</body>
</html>