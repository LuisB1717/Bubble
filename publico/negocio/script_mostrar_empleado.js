
async function cargarEmpleado() {

  const tabla = document.querySelector('#cuerpo')

  const respuesta = await fetch('../../api/entidades/empleado/listar.php', {
    method: 'POST'
  })
  const trabajadores = await respuesta.json()
  trabajadores.forEach(trabajador => {

    tabla.innerHTML += `
              <tr>
                <td>${trabajador.nombre}</td> 
              </tr> `
  });

}
cargarEmpleado()