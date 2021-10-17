import config from '../config.js'

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
      alert("Todo good")
    }else alert("aiooz error")
		console.log('Registro', json);
    cerrarPopUpEditar()
	} catch (error) {
		console.error('Ups', error);
	}
}
const editarEmpleadoBoton = document.getElementById('editar-empleado')
editarEmpleadoBoton.addEventListener('click',editarEmpleado)


const btnCerrarPopupEditar = document.getElementById('btn-cerrar-editar');

function cerrarPopUpEditar (e) {
	if(e) e.preventDefault();
	overlayEditar.classList.remove('active');
	popupEditar.classList.remove('active');
}

btnCerrarPopupEditar.addEventListener('click', cerrarPopUpEditar);

