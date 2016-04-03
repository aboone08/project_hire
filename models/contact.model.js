var mailgun = require('mailgun-js')
    Schema = mailgun.Schema;

// Contact model
var contactSchema = new Contact({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

var Contact = mailgun.model('Contact', contactSchema);

module.exports = Contact;
