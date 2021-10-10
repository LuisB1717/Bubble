function mostrar_producto(){
    
    $.ajax({
        url:'lista_producto.html',
        beforesed:function(){
            $('#empleado_lista').html("Cargando...");
        },
        success: function (msg_mostar){
            $('#empleado_lista').html(msg_mostar);
        }
    })
}