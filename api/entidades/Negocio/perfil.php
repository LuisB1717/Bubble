<?php
include("../../dependencias/db/conexión.php");

$idNegocio=$_GET['idNegocio'];

$sql ="SELECT * FROM negocio where idNegocio='$idNegocio'"; 
$resultado=mysqli_query($conexion,$sql);
$datos = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
    echo json_encode($datos);
}else{
    echo json_encode([]);
}
?>