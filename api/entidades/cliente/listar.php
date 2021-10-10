<?php
	include("../../dependencias/db/conexión.php");

	$solicitud="SELECT * FROM cliente";
	$resultado=mysqli_query($conexion,$solicitud);

	echo "<table border='1'><tr><td>ID</td><td>Nombre</td><td>Correo</td>";

	while ($fila=mysqli_fetch_assoc($resultado)) {
		echo "<tr>";
		echo "<td>".$fila['idCliente']."</td>";
		echo "<td>".$fila['nombre']."</td>";
		echo "<td>".$fila['correoC']."</td>";
		echo "</tr>";
	}
	echo "</table>";
?>