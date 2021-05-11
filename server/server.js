const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);


app.use(express.static(publicPath));

// Comunicación del backend
let io = socketIO(server);

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        Usuario: 'Administrador',
        mensaje: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        //console.log(mensaje);
        if (mensaje.usuario) {
            callback({
                resp: 'Todo salió bien.'
            });
        } else {
            callback({
                resp: 'Todo salió mal.'
            });
        }
    });
});

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});