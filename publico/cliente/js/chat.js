import config from "../../config.js";

var socket = io.connect(config.SOCKET_URL, { forceNew: true });


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


