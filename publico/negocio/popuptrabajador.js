import config from '../config.js'

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

console.log('config', config);

async function registrarEmpleado() {
	try {
		const formulario = document.getElementById('registar-empleado-form')
		const formData = new FormData(formulario)
		const resultado = await fetch(`${config.API_URL}/entidades/empleado/insertarempleado.php`, {
			method: 'post',
			body: formData
		})
		console.log('Registro', resultado);
	} catch (error) {
		console.error('Ups', error);
	}
}
const registrarEmpleadoBoton = document.getElementById('guardar-empleado')
registrarEmpleadoBoton.addEventListener('click',registrarEmpleado)