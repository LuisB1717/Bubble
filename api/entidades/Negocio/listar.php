<?php
include("../../dependencias/db/conexión.php");

$sql ="SELECT * FROM negocio "; 
$resultado=mysqli_query($conexion,$sql);
$datos = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
    echo json_encode($datos);
}else{
    echo json_encode([]);
}
?>
