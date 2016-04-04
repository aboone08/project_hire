var mailgun = require('mailgun-js'),
  
    Schema = mailgun.Schema;

// Contact model
var contactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

var Contact = mailgun.model('Contact', contactSchema);

module.exports = Contact;
