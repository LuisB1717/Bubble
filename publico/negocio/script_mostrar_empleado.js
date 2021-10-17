
let idAEditar = ""
const overlayEditar = document.getElementById('overlay-editar')
const popupEditar = document.getElementById('popup-editar')

function mostrarEditarEmpleado(idEmpleado) {
  idAEditar=idEmpleado
  overlayEditar.classList.add('active');
	popupEditar.classList.add('active');

}

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
              <td><button onclick="mostrarEditarEmpleado(${trabajador.idEmpleado})">Editar</button></td>
              <td><a href='../../api/entidades/empleado/eliminar.php?idEmpleado="${trabajador.idEmpleado}"'>Eliminar</a></td>
              </tr> `
  });

}
cargarEmpleado()

