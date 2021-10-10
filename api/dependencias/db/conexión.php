<?php
  $host="us-cdbr-east-04.cleardb.com";
  $user="b9072a4748f020";
  $pass="8c696840";
  $db="heroku_414c7b065675b91";

  $conexion=mysqli_connect($host,$user,$pass,$db);
  mysqli_set_charset($conexion,"utf8");

//MOSTRAR EMPLEADOS
$sql ="SELECT nombre FROM empleado";
$resultado=mysqli_query($conexion,$sql);
$datos = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
    echo json_encode($datos);
}else{
    echo json_encode([]);
}

?>