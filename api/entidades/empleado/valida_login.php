<?php
include("../../dependencias/db/conexión.php");

  if(isset($_POST['nombre_usuario']) && !empty($_POST['nombre_usuario']) && isset($_POST['contrasena']) && !empty($_POST['contrasena'])){
      $nombre_usuario = $_POST['nombre_usuario'];
     $contrasena = $_POST['contrasena'];
      $query = "SELECT * FROM empleado WHERE (nombre_usuario ='$nombre_usuario' && contrasena = '$contrasena')";
      $result = mysqli_query($conexion,$query);

      if(mysqli_num_rows($result)>0){
          echo json_encode(array('success'=> 1));
          
      }else{
        echo json_encode(array('success'=> 0));
      }
  }

?>