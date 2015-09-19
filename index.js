var express = require('express');
var request = require('request');
var app = express();
var path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


var server = app.listen(80, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Application started at http://%s:%s', host, port);
});
