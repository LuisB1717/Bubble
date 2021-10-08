
function mostrar_chats(){
    
    $.ajax({
        url:'lista_chats.html',
        beforesed:function(){
            $('#chat_lista').html("Cargando...");
        },
        success: function (mensaje_mostar){
            $('#chat_lista').html(mensaje_mostar);
        }
    })
}