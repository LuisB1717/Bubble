<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$password=md5($_POST['contrasena']);
	$idNegocio=$_POST['idNegocio'];

	$solicitud="INSERT INTO empleado(nombre,contrasena,idNegocio)VALUES('$nombre','$contrasena',$idNegocio)";

	$resultado=mysqli_query($conexion,$solicitud);;

?>