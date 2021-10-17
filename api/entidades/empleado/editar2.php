<?php
    include("../../dependencias/db/conexión.php");

   try {
    $id=$_POST['idEmpleado'];
    $nombre=$_POST['nombre'];
  
    $solicitud="UPDATE empleado SET nombre='$nombre' WHERE idEmpleado=$id";
    $resultado=mysqli_query($conexion,$solicitud);
    echo json_encode(array("result" => true));
   } catch (\Throwable $th) {
    echo json_encode(array("result" => false, "data"=>$th));

   }

?>