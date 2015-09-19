var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   database : 'riskdb'
 });

 connection.connect();

/*
 connection.query('SELECT * from employees', function(err, rows, fields) {
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
     console.log(err);
 });

 connection.end();
*/

var express = require('express');
var request = require('request');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(server);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/main', function(req, res){
	
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/game', function(req, res){
	
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


var server = app.listen(80, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Application started at http://%s:%s', host, port);
});

io.on('connection', function(socket) {
	console.log("A connection established");

	socket.on('zap', function() {
		console.log('zapped');
		io.emit('zap');
	});
});
