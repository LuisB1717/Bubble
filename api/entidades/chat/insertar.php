<?php
	include("../../dependencias/db/conexión.php");

	$idCliente=$_POST['idCliente'];
	$idEmpleado=$_POST['idEmpleado'];
	$idNegocio=$_POST['idNegocio'];
	$mensaje=$_POST['mensaje'];
	
	$solicitud="INSERT INTO chat(idCliente,idEmpleado,idNegocio,mensaje)VALUES('$idCliente','$idEmpleado','$idNegocio','$mensaje')";

    $resultado=mysqli_query($conexion,$solicitud);

?>