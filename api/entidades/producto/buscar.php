<?php
include("../../dependencias/db/conexión.php");


$buscar= $_GET['nombreP'];
$idNegocio= $_GET['idNegocio'];

$sql ="SELECT * FROM producto where nombreP like '%$buscar%' AND idNegocio = '$idNegocio'";
$resultado=mysqli_query($conexion,$sql);
$datos = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
    echo json_encode($datos);
}else{
    echo json_encode([]);
}

?>