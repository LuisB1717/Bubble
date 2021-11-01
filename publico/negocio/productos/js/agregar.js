import config from '../../../config.js'
import login from '../../js/login.js'

var btnAbrirPopup = document.getElementById('btn-abrir-popup-trabajador'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
    });
    
btnCerrarPopup.addEventListener('click', function (e) {
     e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
    });


async function registrarProducto() {
	try {
		const formulario = document.getElementById('registar-empleado-form')
		const formData = new FormData(formulario)
		const sesion = login.obtenerSesionNegocio()
		formData.append("idNegocio",sesion.negocio.idNegocio)
		
		const resultado = await fetch(`${config.API_URL}/entidades/producto/insertar.php`, {
			method: 'post',
			body: formData
		})
		console.log('Registro', resultado);
		alert("REGISTRADO CON EXITO")
		/*cerrarPopUp()
		location.reload()*/
	} catch (error) {
		console.error('Ups', error);
		
	}
	
}
const registrarEmpleadoBoton = document.getElementById('guardar-empleado')
registrarEmpleadoBoton.addEventListener('click',registrarProducto)

function cerrarPopUp (e) {
	if(e) e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
}
