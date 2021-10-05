<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$img= $_POST['img'];
	$id_google=$_POST['id_google'];
	
	$solicitud="INSERT INTO cliente(id_google_c,nombre,correoC,imgC)VALUES('$id_google','$nombre','$correo','$img')";

	$resultado=mysqli_query($conexion,$solicitud);

?>