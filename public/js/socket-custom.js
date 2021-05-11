var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// EScuchar info
socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
});

// Enviar info
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar info
socket.on('enviarMensaje', function(mensaje) {
    console.log('Administrador: ', mensaje);
});