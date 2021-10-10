
function mostrar_empleado(){
    
    $.ajax({
        url:'lista_empleado.html',
        beforesed:function(){
            $('#empleado_lista').html("Cargando...");
        },
        success: function (msg_mostar){
            $('#empleado_lista').html(msg_mostar);
        }
    })
}