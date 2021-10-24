import login from "../js/login.js"

async function cargarPerfil() {
    const sesion = login.obtenerSesionCliente()
    var id = sesion.cliente.cliente.idCliente
    const tabla = document.querySelector('#perfil_cliente')
    const respuesta = await fetch('../../../api/entidades/cliente/listar.php?idCliente='+id, {
        method: 'POST'
    })
    const clientes = await respuesta.json()
 
    clientes.forEach(cliente => {
    tabla.innerHTML += `
      <div class="profile-content">
         <img src="${cliente.imgC}" alt="profileImg">
      </div>
      <div class="name-job">
         <div class="profile_name"><span> ${cliente.nombre}</span> </div>
         <div class="job"><span>Cliente</span></div>
      </div>
      <i class='bx bx-log-out'></i>    
       `
    });  

}
cargarPerfil()