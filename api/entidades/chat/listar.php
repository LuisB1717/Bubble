<?php
include("../../dependencias/db/conexión.php");
$idCliente=$_GET['idCliente'];

$sql ="SELECT * FROM chat  INNER JOIN negocio on chat.idNegocio =negocio.idNegocio  where idCliente=$idCliente"; 

$resultado=mysqli_query($conexion,$sql);

$datos = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

if(!empty($datos)){
    echo json_encode($datos);
}else{
    echo json_encode([]);
}
?>
