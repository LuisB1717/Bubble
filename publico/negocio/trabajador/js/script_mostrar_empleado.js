
import login from '../../js/login.js'
import config from '../../../config.js'

let idAEditar = ""
let id_negocio= ""
const overlayEditar = document.getElementById('overlay-editar')
const popupEditar = document.getElementById('popup-editar')

function mostrarEditarEmpleado(idEmpleado) {
  idAEditar=idEmpleado
  overlayEditar.classList.add('active');
	popupEditar.classList.add('active');

}
async function editarEmpleado() {
  console.log(idAEditar)
	try {
		const formulario = document.getElementById('editar-empleado-form')
		const formData = new FormData(formulario)
    formData.append("idEmpleado",idAEditar)
		const resultado = await fetch(`${config.API_URL}/entidades/empleado/editar2.php`, {
			method: 'post',
			body: formData
		})
    const json = await resultado.json()
    if(json.result){
      alert("Todo bien")
    }else alert(" error")
		console.log('Registro', json);
    cerrarPopUpEditar()
	} catch (error) {
		console.error('Ups', error);
	}
}
const editarEmpleadoBoton = document.getElementById('editar-empleado')
editarEmpleadoBoton.addEventListener('click',editarEmpleado)
window.mostrarEditarEmpleado = mostrarEditarEmpleado



const btnCerrarPopupEditar = document.getElementById('btn-cerrar-editar');

function cerrarPopUpEditar (e) {
	if(e) e.preventDefault();
	const overlayEditar = document.getElementById('overlay-editar')
	const popupEditar = document.getElementById('popup-editar')

	overlayEditar.classList.remove('active');
	popupEditar.classList.remove('active');
}

btnCerrarPopupEditar.addEventListener('click', cerrarPopUpEditar);


async function cargarEmpleado() {
  const session=login.obtenerSesionNegocio()
  var idNegocio=session.negocio.idNegocio
  const tabla = document.querySelector('#cuerpo')

  const respuesta = await fetch('../../../../api/entidades/empleado/listar.php?idNegocio='+idNegocio, {
    method: 'POST'
  })
  const trabajadores = await respuesta.json()
  trabajadores.forEach(trabajador => {
    tabla.innerHTML += `
              <tr>
              <td>${trabajador.idEmpleado}</td>
                <td>${trabajador.nombre}</td> 
                <td>${trabajador.nombre_usuario}</td> 
              <td><button type="button" class="btn btn-info" onclick='mostrarEditarEmpleado(${trabajador.idEmpleado})'>Editar</button></td>
              <td><button  type="button" class="btn btn-danger" href='../../../../api/entidades/empleado/eliminar.php?idEmpleado="${trabajador.idEmpleado}"'>Eliminar</button></td>
              </tr> `
  });

}
cargarEmpleado()

