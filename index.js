var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var _dirName = "C:\\Users\\Emilio\\Documents\\Chat project"

app.get('/',function(req,res){
	res.sendFile(_dirName + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message',msg);
  });
});

http.listen(3000,function(){
	console.log('listening on *:3000');
});