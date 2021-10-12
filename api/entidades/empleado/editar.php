<?php
    include("../../dependencias/db/conexión.php");

    $id=$_GET['idEmpleado'];

    $solicitud="SELECT *FROM empleado WHERE idEmpleado=$id";
    $resultado=mysqli_query($conexion,$solicitud);
    
?>

<form method="POST" action="editar2.php">
<?php
    while ($fila=mysqli_fetch_array($resultado)) {
        echo "Nombre:<input type='text' name='nombre' value='".$fila['nombre']."'><br>";
        echo "<input type='hidden' name='id' value='".$id."'><br>";
    }
   
?>
<input type="submit" name="ENVIAR" value="CAMBIAR">
</form>