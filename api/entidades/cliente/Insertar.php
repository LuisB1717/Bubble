<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$img= $_POST['img'];
	$id_google=$_POST['id_google'];

	$sql ="SELECT * FROM cliente where id_google_c= '$id_google'";
	$validacion=mysqli_query($conexion,$sql);
	$datos = mysqli_fetch_all($validacion,MYSQLI_ASSOC);
	if(!empty($datos)){
		echo json_encode(array("cliente"=>$datos[0]));
    die();
	}
	else{
	$solicitud="INSERT INTO cliente(id_google_c,nombre,corsreoC,imgC)VALUES('$id_google','$nombre','$correo','$img')";
	$resultado=mysqli_query($conexion,$solicitud);
	$sql ="SELECT * FROM cliente where id_google_c= '$id_google'";
	$validacion=mysqli_query($conexion,$sql);
	$datoscliente = mysqli_fetch_all($validacion,MYSQLI_ASSOC);
	echo json_encode(array("cliente"=>$datos[0]));
	}

	
?>