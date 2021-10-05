<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$telefono=$_POST['telefono'];
	$correo=$_POST['correo'];
	

	$solicitud="INSERT INTO cliente(nombre,correoC,imgC)VALUES('$nombre','$correo','$telefono')";

	$resultado=mysqli_query($conexion,$solicitud);
	
	header("location:../../vistas/Formulario.php");
	
?>