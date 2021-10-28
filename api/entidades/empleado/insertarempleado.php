<?php
	include("../../dependencias/db/conexión.php");

	$nombre=$_POST['nombre'];
	$password=$_POST['contrasena'];
	$idNegocio=$_POST['idNegocio'];
	$nombre_usuario=$_POST['nombre_usuario'];

	if(BuscaRepetido($nombre_usuario,$conexion)==1){
		echo ("ya registrado");
	}else{
	$solicitud="INSERT INTO empleado(nombre,contrasena,idNegocio,nombre_usuario)VALUES('$nombre','$password','$idNegocio','$nombre_usuario')";

	$resultado=mysqli_query($conexion,$solicitud);
	}

	function BuscaRepetido($usuario,$conexion){
		$sql_buscar="SELECT *from empleado WHERE nombre_usuario='$usuario'";
		$result=mysqli_query($conexion,$sql_buscar);
		if(mysqli_num_rows($result)>0){
			return 1;
		}else{
			return 0;
		}
	}

?>