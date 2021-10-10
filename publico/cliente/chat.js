
function mostrar_chats(){
    
    $.ajax({
        url:'../../api/entidades/cliente/listar.php',
        dataType:'text',
        beforesed:function(){
            $('#chat_lista').html("Cargando...");
        },
        success: function (mensaje_mostar){
            $('#chat_lista').html(mensaje_mostar);
        }
    })
}