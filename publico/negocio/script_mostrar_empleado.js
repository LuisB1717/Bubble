


async function cargarEmpleado() {

  const tabla = document.querySelector('#cuerpo')

  const respuesta = await fetch('../../api/entidades/empleado/listar.php', {
    method: 'POST'
  })
  const trabajadores = await respuesta.json()
  trabajadores.forEach(trabajador => {

    tabla.innerHTML += `
              <tr>
              <td>${trabajador.idEmpleado}</td>
                <td>${trabajador.nombre}</td> 
              <td><a href='../../api/entidades/empleado/editar.php?idEmpleado="${trabajador.idEmpleado}"'>Editar</a></td>
              <td><a href='../../api/entidades/empleado/eliminar.php?idEmpleado="${trabajador.idEmpleado}"'>Eliminar</a></td>
              </tr> `
  });

}
cargarEmpleado()