<?php
    include("../../dependencias/db/conexión.php");

    $id=$_POST['id'];
    $nombre=$_POST['nombre'];
   

  
    $solicitud="UPDATE empleado SET nombre='$nombre' WHERE idEmpleado=$id";
    $resultado=mysqli_query($conexion,$solicitud);

    header("location:../../../publico/negocio/lista_empleado.html");
?>