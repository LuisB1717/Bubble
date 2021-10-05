<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$img= $_POST['img'];
	


	$solicitud="INSERT INTO cliente(nombre,correoC,imgC)VALUES('$nombre','$correo','$img')";

	$resultado=mysqli_query($conexion,$solicitud);

?>