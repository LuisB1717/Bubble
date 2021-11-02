<?php
    include("../../dependencias/db/conexión.php");
    
	$nombreP=$_POST['nombreP'];
	$descripcion=$_POST['descripcion'];
	$foto= $_POST['foto'];
    $idNegocio=$_POST['idNegocio'];

    /*if(BuscaRepetido($nombreP,$conexion)==1){
		echo ("ya registrado");
	}else{*/
	$solicitud="INSERT INTO producto(nombreP,descripcion,foto,idNegocio)VALUES('$nombreP','$descripcion','$foto','$idNegocio')";

	$resultado=mysqli_query($conexion,$solicitud);
	

	/*function BuscaRepetido($usuario,$conexion){
		$sql_buscar="SELECT *from producto WHERE nombre='$usuario'";
		$result=mysqli_query($conexion,$sql_buscar);
		if(mysqli_num_rows($result)>0){
			return 1;
		}else{
			return 0;
		}
	}*/
?>