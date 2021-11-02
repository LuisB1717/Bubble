import config from '../../config.js'
import login from './login.js'
async function listarChat(){
    const session=login.obtenerSesionCliente()
     var idCliente=session.cliente.cliente.idCliente
     const tabla = document.querySelector('#lista-chats')
     tabla.innerHTML = ``;
    const respuesta = await  fetch(`${config.API_URL}/entidades/chat/listar.php?idCliente=`+idCliente, {
        method: 'POST',
       
    })
    const chats = await respuesta.json()
    chats.forEach(chat => {

        tabla.innerHTML += `
        <div class="ms-a ">
        <div class="avatar">
            <img src="${chat.img}" alt="" class="redondas">
        </div>
        <div class="mesg-info ">
            <div class="ms-info">
                <span class=" sender-name"> ${chat.nombre}</span>
                <span class="time"> <span class="msge-num"></span></span>
            </div>
            <div class="action">
                <span></span>
            </div>
        </div>
    </div>
             `
    });
}
window.listarChat = listarChat
listarChat();