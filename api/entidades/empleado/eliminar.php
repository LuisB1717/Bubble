<?php
    include("../../dependencias/db/conexión.php");
    $id=$_GET['idEmpleado'];

    $solicitud="DELETE FROM empleado WHERE idEmpleado=$id";
    $resultado=mysqli_query($conexion,$solicitud);
    
    header("location:../../../publico/negocio/trabajador/vistas/lista_empleado.html");
?>