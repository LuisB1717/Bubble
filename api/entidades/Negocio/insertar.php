<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$img= $_POST['img'];
	$id_google=$_POST['id_google'];
	
	$solicitud="INSERT INTO negocio(id_google_n,nombre,correo,img)VALUES('$id_google','$nombre','$correo','$img')";

	$resultado=mysqli_query($conexion,$solicitud);

?>