
module.exports = function(io){
  io.on('connection',function(socket){
      console.log('Nuevo Usuario Conectado');
      unirseMensajesCliente(socket);
     
  });
  
}
function unirseMensajesCliente(socket){
  socket.on('mensaje-cliente',function(data){
     console.log("Llego mensaje cliente",data);
  });
}
