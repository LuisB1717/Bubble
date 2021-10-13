<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$img= $_POST['img'];
	$id_google=$_POST['id_google'];

	$sql ="SELECT * FROM negocio where id_google_n= '$id_google'";
	$validacion=mysqli_query($conexion,$sql);
	$datos = mysqli_fetch_all($validacion,MYSQLI_ASSOC);
	if(!empty($datos)){
		echo json_encode([]);
	}else{
		$solicitud="INSERT INTO negocio(id_google_n,nombre,correo,img)VALUES('$id_google','$nombre','$correo','$img')";
	    $resultado=mysqli_query($conexion,$solicitud);
	}
	
?>