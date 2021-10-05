<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$password=$_POST['contrasena'];
	

	$solicitud="INSERT INTO empleado(nombre,contrasena)VALUES('$nombre','$contrasena')";

	$resultado=mysqli_query($conexion,$solicitud);
	header("location:../../../publico/negocio/index.html");
	
?>