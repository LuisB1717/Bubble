<?php
    include("../../dependencias/db/conexión.php");
    $id=$_GET['idproducto'];

    $solicitud="DELETE FROM producto WHERE idproducto=$id";
    $resultado=mysqli_query($conexion,$solicitud);
    
    header("location:../../../publico/negocio/productos/vistas/lista_productos.html");
?>