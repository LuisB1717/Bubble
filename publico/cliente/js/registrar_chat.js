import config from '../../config.js';
import login from "../js/login.js";

async function registrarChat() {

    const sesion = login.obtenerSesionCliente()
    var id = sesion.cliente.cliente.idCliente
    console.log('sda', id)
    const formData = new FormData()
    formData.append('idCliente', id)
    formData.append('idNegocio', 20)
    formData.append('mensaje', '')
    formData.append('idEmpleado', sesion.cliente.cliente.idCliente)

    const resultado = await fetch(`${config.API_URL}/entidades/chat/insertar.php`, {
        method: 'post',
        body: formData

    })

}