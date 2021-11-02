<?php
	include("../../dependencias/db/conexión.php");

	function BuscaRepetido($idNegocio,$idCliente,$conexion){
		$sql_buscar="SELECT * from chat  WHERE $idNegocio='$idNegocio' AND idCliente = '$idCliente'";

		$result=mysqli_query($conexion,$sql_buscar);

		if(mysqli_num_rows($result)>0) return 1;

		return 0;
		
	}
	function BuscaEmpleado($idNegocio,$conexion){
		$sql_buscar="SELECT empleado.*, COUNT(chat.idChat) as cantidadDeChats from empleado LEFT JOIN chat ON chat.idEmpleado = empleado.idEmpleado WHERE empleado.idNegocio = '$idNegocio' GROUP BY chat.idEmpleado  ORDER BY cantidadDeChats ASC  LIMIT 1 ";
		
		$resultado=mysqli_query($conexion,$sql_buscar);

		$datos = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

		return $datos[0];
		
	}

	$idCliente=$_POST['idCliente'];
	$idNegocio=$_POST['idNegocio'];
	
	

	if(BuscaRepetido($idNegocio,$idCliente,$conexion)==1) {  
		echo json_encode(array("mensaje"=>"Continuando chat", "resultado"=>false));
		die();
	}

	$empleado = BuscaEmpleado($idNegocio,$conexion);

	$solicitud="INSERT INTO chat(idCliente,idEmpleado,idNegocio)VALUES('$idCliente',". $empleado['idEmpleado'] .",'$idNegocio')";
  $resultado=mysqli_query($conexion,$solicitud);

	echo json_encode(array("mensaje"=>"Chat iniciado", "resultado"=>true));

	

?>