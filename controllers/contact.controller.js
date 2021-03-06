var Contact = require('../models/contact.model.js');
var ContactCtrl = {
  contact: submitContact
};

function submitContact(req, res, next){
  var name = req.body.name;
  var email = req.body.email;
  var comment = req.body.comment;

  Contact.create(function(err, contact){
    if(err) throw err;

    res.json(contact);
  });
};

module.exports = ContactCtrl;
