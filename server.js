// import lib
var express = require('express');
var http = require('http');
var io = require('socket.io');
var path = require('path');
var request = require('request');
 
// init express
var app = express();
app.get('/', function(req, res, next) {
	res.sendFile('./public/radar.html', {root: __dirname});
});

app.get('/test', function(req, res, next) {
        request('http://192.168.1.83:1337', function(error, response, body) {
            if(!error && response.statusCode == 200) {
                console.log(body);
                res.writeHead(200, {'Content-Type': 'text:plain'});
                res.end('Ça fonctionne, voir la console pour le contenu de la page\n');
            }
        })
});

//configure the path to public file
app.use(express.static(__dirname + '/public'));

//manage 404 error
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.send(404, 'page introuvable');
});

 
// init http server
var server = http.createServer(app);
server.listen(8333);
