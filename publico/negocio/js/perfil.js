import login from "./login.js"

async function cargarPerfil() {
    const sesion = login.obtenerSesionNegocio()
    var idNegocio = sesion.negocio.idNegocio
  
    const tabla = document.querySelector('#perfil-negocio')
    const respuesta_negocio = await fetch('../../../../api/entidades/Negocio/perfil.php?idNegocio='+idNegocio, {
        method: 'POST'
    })
   
    const negocio = await respuesta_negocio.json();
  
    
    negocio.forEach(
        negocio => {
            tabla.innerHTML += `
            <div class="profile-content">
                <img src="${negocio.img}" alt="profileImg">
            </div>
            <div class="name-job">
                <div class="profile_name"><span> ${negocio.nombre}</span> </div>
                <div class="job"><span>Negocio</span></div>
            </div>
            <i class='bx bx-log-out'></i>   
            `
        }); 

}
cargarPerfil()