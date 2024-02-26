var eventos = require('events');

var EmisorEventos = eventos.EventEmitter;

var events = new EmisorEventos();

events.on('datos', function(fecha) {
    console.log(fecha)
})

setInterval(function(){
    events.emit('datos', Date.now())
}, 500)