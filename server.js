var express = require('express'),
     logger = require('morgan')('dev')
     path = require('path'),

     bodyParser = require('body-parser'),
     server = express(),
     Contact = require('./models/contact.model.js'),
     ContactCtrl = require('./controllers/contact.controller.js');

//create a connection to Mailgun
var api_key = 'key-a0dff806e749f4a0f8bd53712a78d946';
var domain = 'sandboxf53bf50dbd0f40cfb9b6344e887b158e.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'serobnic@mail.ru',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});

var port = process.env.PORT || 8080;

server.use(logger);
server.use(express.static(path.join(__dirname,'public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root: __dirname});
});

server.listen(port, function(){
  console.log('Now listening on port '+ port);
});
