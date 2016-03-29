var express = require('express'),
     server = express(),
     path = require('path'),
     logger = require('morgan')('dev');

var port = process.env.PORT || 8080;

server.use(logger);
server.use(express.static(path.join(__dirname,'public')));

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port '+ port);
});
