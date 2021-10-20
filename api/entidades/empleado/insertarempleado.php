<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$password=$_POST['contrasena'];
	$idNegocio=$_POST['idNegocio'];
	$nombre_usuario=$_POST['nombre_usuario'];

	$solicitud="INSERT INTO empleado(nombre,contrasena,idNegocio,nombre_usuario)VALUES('$nombre','$contrasena','$idNegocio','$nombre_usuario')";

	$resultado=mysqli_query($conexion,$solicitud);;

?>