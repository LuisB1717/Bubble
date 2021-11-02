<?php
    include("../../dependencias/db/conexión.php");

   try {
    $id=$_POST['idproducto'];
    $nombreP=$_POST['nombreP'];
    $des=$_POST['descripcion'];
    $img=$_POST['foto'];

  
    $solicitud="UPDATE producto SET nombreP='$nombreP',descripcion='$des',foto='$img' WHERE idproducto=$id";
    $resultado=mysqli_query($conexion,$solicitud);
    echo json_encode(array("result" => true));
   } catch (\Throwable $th) {
    echo json_encode(array("result" => false, "data"=>$th));

   }

?>