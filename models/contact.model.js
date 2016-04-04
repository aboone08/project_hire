var mailgun = require('mailgun-js'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
