import config from "../../config.js";
const SOCKET_PRE = {CLIENT: "cliente-"}
const clienteId = "1"

var socketConexion = io.connect(config.SOCKET_URL, { forceNew: true });
socketConexion.on("connection", (socket) => {
    socket.join(SOCKET_PRE.CLIENT + clienteId);   

});
function enviarMensaje(mensaje,negocioId) {
    socketConexion.emit("mensaje-cliente",{mensaje,negocioId});
}




function cargarMenu(){
    
    $.ajax({
        url:'../vistas/menu.html',
        beforesed:function(){
            $('#menu').html("Cargando...");
        },
        success: function (msg_mostar){
            $('#menu').html(msg_mostar);
        }
    })
}
cargarMenu()
