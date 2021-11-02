<?php
    include("../../dependencias/db/conexión.php");
    $idEmpleado=$_GET['idEmpleado'];

    $solicitud="DELETE FROM empleado WHERE idEmpleado=$idEmpleado";
    $resultado=mysqli_query($conexion,$solicitud);
    
    header("location:../../../publico/negocio/trabajador/vistas/lista_empleado.html");
?>