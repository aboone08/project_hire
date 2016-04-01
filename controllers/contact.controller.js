var mailer = require('../models/contact.model.js');

    exports.contact = function (req,res,next) {
        res.render('contact');
    };


    exports.receiveMessage = function (req,res,next) {

            mailer.sendOne(req.body,function (err,body) {
                if(err) return next(err);
                console.log(body);
                res.send({message:'Your message has been successfully sent'});
            });

    };
