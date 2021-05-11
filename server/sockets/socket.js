const { io } = require('../server');

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
                resp: 'Todo salió bien.'
            });
        }
    });
});