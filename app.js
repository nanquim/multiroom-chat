/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(80, function(){
    console.log('Servidor online');
})

var io = require('socket.io').listen(server);

/** criar conexão por websocket */



