//var log  = new Date(milliseconds) ;

var socketio =require('socket.io');
var connect = require('connect');
var server= connect.createServer(
    connect.static(__dirname )
).listen(8080 ,function(){ console.log('Listening at: http://localhost:8080');});


socketio.listen(server).on('connection', function (socket) {
    
 socket.on('message', function (msg) {
        console.log('Message Received: ', msg);
        socket.broadcast.emit('message', msg);
    });
    
    socket.on('login', function(name){
		
		console.log('New User Logged In :', name );
		socket.broadcast.emit('login' , name );
		
		
		
		} );
		
		
		
	socket.on('cam', function(out){
		
		console.log('New  :', out );
		socket.broadcast.emit('cam' , out );
		
		
		
		} );	




});



