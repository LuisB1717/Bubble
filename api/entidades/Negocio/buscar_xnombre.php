<?php
include("../../dependencias/db/conexión.php");

$buscar= $_GET['nombre'];
$sql ="SELECT * FROM negocio where nombre like '%$buscar%'";
$resultado=mysqli_query($conexion,$sql);
$datos = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
    echo json_encode($datos);
}else{
    echo json_encode([]);
}

?>