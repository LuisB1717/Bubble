<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$correo=$_POST['correo'];
	$img= $_POST['img'];
	$id_google=$_POST['id_google'];

	$sql ="SELECT * FROM negocio where id_google_n = '$id_google'";
	$validacion=mysqli_query($conexion,$sql);
	$datosNegocio = mysqli_fetch_all($validacion,MYSQLI_ASSOC);

	if(!empty($datosNegocio)){
    $sql ="SELECT * FROM negocio where id_google_n = '$id_google'";
    $validacion=mysqli_query($conexion,$sql);
    $datosEmpleado = mysqli_fetch_all($validacion,MYSQLI_ASSOC);
		echo json_encode(array("negocio"=>$datosNegocio[0],"empleado"=>$datosEmpleado[0]));
    die();
	}
	
  $solicitud="INSERT INTO negocio(id_google_n,nombre,correo,img)VALUES('$id_google','$nombre','$correo','$img')";
	$resultado=mysqli_query($conexion,$solicitud);

  $sql ="SELECT * FROM negocio where id_google_n = '$id_google'";
	$validacion=mysqli_query($conexion,$sql);
	$datosNegocio = mysqli_fetch_all($validacion,MYSQLI_ASSOC);

  $solicitud="INSERT INTO empleado(idGoogle,nombre,contrasena,nombre_usuario,idNegocio)VALUES('$id_google','$nombre','$correo','$correo',". $datosNegocio[0]["idNegocio"] . ")";
	$resultado=mysqli_query($conexion,$solicitud);

  $sql ="SELECT * FROM empleado where idGoogle = '$id_google'";
  $validacion=mysqli_query($conexion,$sql);
  $datosEmpleado = mysqli_fetch_all($validacion,MYSQLI_ASSOC);
  echo json_encode(array("negocio"=>$datosNegocio[0],"empleado"=>$datosEmpleado[0]));
?>