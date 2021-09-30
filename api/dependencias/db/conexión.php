<?php
  $host="us-cdbr-east-04.cleardb.com";
  $user="b9072a4748f020";
  $pass="8c696840";
  $db="heroku_414c7b065675b91";

  $conexion=mysqli_connect($host,$user,$pass,$db);
  mysqli_set_charset($conexion,"utf8");
?>