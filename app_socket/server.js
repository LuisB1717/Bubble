const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors())

const server = require('http').Server(app);
const io = require('socket.io')(server,{
  cors: {
    origin: '*',
  }})


require('./sockets')(io);

const port = process.env.PORT || 4000

server.listen(port, function(){
    console.log('Servidor corriendo en el puerto '+ port);
})