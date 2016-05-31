var express = require('express')
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var db = require('./dbfunctions');


app.get('/', function(req, res){
  res.sendFile('/index.html' , { root : __dirname});
});

app.get('/signup.html', function(req,res){
	res.sendFile('/signup.html', { root: __dirname});
});

app.use(express.static(path.join(__dirname, 'public')));


http.listen(3000, function(){
  console.log('listening on *:3000');
});

//db.insert({id:9,name:'john',password:'hi'},'users');


