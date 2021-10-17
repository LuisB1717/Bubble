<?php
    include("../../dependencias/db/conexión.php");

    $id=$_GET['idEmpleado'];

    $solicitud="SELECT * FROM empleado WHERE idEmpleado=$id";
    $resultado=mysqli_query($conexion,$solicitud);
    $datos = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

    if(!empty($datos)){
      echo json_encode(array(result => true, data=>$datos[0]));
    }else{
      echo json_encode(array(result => false, data=>null));
    }
?>