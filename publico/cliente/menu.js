
function cargarMenu(){
    
    $.ajax({
        url:'menu.html',
        beforesed:function(){
            $('#menu').html("Cargando...");
        },
        success: function (msg_mostar){
            $('#menu').html(msg_mostar);
        }
    })
}
cargarMenu()