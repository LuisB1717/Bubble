
import login from '../../js/login.js'
import config from '../../../config.js'

let idAEditar = ""
let id_negocio= ""
const overlayEditar = document.getElementById('overlay-editar')
const popupEditar = document.getElementById('popup-editar')

function mostrarEditarEmpleado(idproducto) {
  idAEditar=idproducto
  overlayEditar.classList.add('active');
	popupEditar.classList.add('active');

}

async function editarProducto() {
  console.log(idAEditar)
	try {
		const formulario = document.getElementById('editar-empleado-form')
		const formData = new FormData(formulario)
    formData.append("idproducto",idAEditar)
		const resultado = await fetch(`${config.API_URL}/entidades/producto/editar.php`, {
			method: 'post',
			body: formData
		})
    const json = await resultado.json()
    if(json.result){
      alert("Todo bien")
    }else alert(" error")
		console.log('Registro', json);
    cerrarPopUpEditar()
    location.reload()
	} catch (error) {
		console.error('Ups', error);
	}
}

const editarEmpleadoBoton = document.getElementById('editar-producto')
editarEmpleadoBoton.addEventListener('click',editarProducto)
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
