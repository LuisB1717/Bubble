import config from "../../config.js";
import login from "../js/login.js"
const SOCKET_PRE = { CLIENT: "cliente-" }
const clienteId = "1"
const sesion = login.obtenerSesionCliente()
var id = sesion.cliente.cliente.idCliente
const btn = document.getElementById('btnenviarmsg')
var socketConexion = io.connect(config.SOCKET_URL, { forceNew: true });
socketConexion.on("connection", (socket) => {
    socket.join(SOCKET_PRE.CLIENT + clienteId);

});

function enviarMensaje(mensaje, negocioId) {
    socketConexion.emit("mensaje-cliente", { mensaje, negocioId });
}

btn.onclick = function() {
    enviarMensaje($('#msgenviar').val(), 5)
};

function cargarMenu() {

    $.ajax({
        url: '../vistas/menu.html',
        beforesed: function() {
            $('#menu').html("Cargando...");
        },
        success: function(msg_mostar) {
            $('#menu').html(msg_mostar);
        }
    })
}
cargarMenu()