var express = require('express'),
     logger = require('morgan')('dev')
     path = require('path'),

     bodyParser = require('body-parser'),
     server = express(),
     Contact = require('./models/contact.model.js'),
     ContactCtrl = require('./controllers/contact.controller.js');

//create a connection to Mailgun
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var port = process.env.PORT || 8080;

server.use(logger);
server.use(express.static(path.join(__dirname,'public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.post('/submit/contact', ContactCtrl.contact);

server.listen(port, function(){
  console.log('Now listening on port '+ port);
});
