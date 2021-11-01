<?php
    include("../../dependencias/db/conexión.php");

   try {
    $id=$_POST['idproducto'];
    $nombreP=$_POST['nombreP'];
  
    $solicitud="UPDATE producto SET nombreP='$nombreP' WHERE idproducto=$id";
    $resultado=mysqli_query($conexion,$solicitud);
    echo json_encode(array("result" => true));
   } catch (\Throwable $th) {
    echo json_encode(array("result" => false, "data"=>$th));

   }

?>