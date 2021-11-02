import config from '../../config.js'
import login from './login.js'
var delayTimer;

async function registrarChat(idNegocio){
    
        console.log(idNegocio)

		const formData = new FormData()      
        const sesionc = login.obtenerSesionCliente()
       
        formData.append("idCliente",sesionc.cliente.cliente.idCliente)
        formData.append("idNegocio",idNegocio)
		       

        const respuestachat = await fetch(`${config.API_URL}/entidades/chat/insertar.php`, {
            method: 'POST',
            body: formData,
            
        } )
        const json = await respuestachat.json()
        alert(json.mensaje)

        location.href = location.href.replace("index","chats")


}



async function buscarNegocio() {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(async function() {

        const buscar = document.querySelector('#buscar');
        const text = buscar.value;
        const tabla = document.querySelector('#cargar-negocio')
        tabla.innerHTML = ``;

        
	
        if (text == "") {
            const respuesta2 = await fetch('../../../api/entidades/negocio/listar.php', {
                method: 'POST',
              
            })

            const negocios = await respuesta2.json()
            negocios.forEach(negocio => {

                tabla.innerHTML += `
                    <div class="card">
                    <figure> <img src="${negocio.img}"></img></figure>
                       <div class="contenido-card">
                              <h3>${negocio.nombre}</h3>
                              <p>Descripción</p>
                              <a onclick="registrarChat(${negocio.idNegocio})">Iniciar chat</a>
                       </div>
                    </div> `
            });

        } else {
     
            const respuesta = await fetch('../../../api/entidades/negocio/buscar_xnombre.php?nombre=' + text, {
                method: 'POST',
               
            })
            const negocios = await respuesta.json()
            console.log('hola', negocios)
            negocios.forEach(negocio => {

                tabla.innerHTML += `
                    <div class="card">
                    <figure> <img src="${negocio.img}"></img></figure>
                       <div class="contenido-card">
                              <h3>${negocio.nombre}</h3>
                              <p>Descripción</p>
                              <a onclick="registrarChat(${negocio.idNegocio})">Iniciar chat</a>
                       </div>
                    </div> `
            });
        }


    }, 500);
}
window.registrarChat = registrarChat
window.buscarNegocio = buscarNegocio
buscarNegocio();