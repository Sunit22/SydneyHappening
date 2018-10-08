var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer');

router.post('/sendEmail', function(req, res, next) {
    console.log("reaches here");

    var useremail = req.body.email;
    var username = req.body.name;
    var phone = req.body.phone;
    var message = req.body.message;    

    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                
                type: 'OAuth2',
                user: 'sydneyhappening@gmail.com',
                clientId: '996719947905-asd3t21k2468jdabmcncnb85i4ukb6oq.apps.googleusercontent.com',
                clientSecret: 'dFNAdhxaPGpne8w_Jm7pBus0',
                refreshToken: '1/Ddmr-o82-cia431t1bCXFVuA9EcEgEXOl5TT4D9gjHQ',
                accessToken: 'ya29.GlswBlvQ82Q6fWz3glirdBSRfOOKGx6PFC5aMA9w1Hx9Vclu0MTsd1r16M9xeWcf2ZrEr8ii_aEYAWJuc0fld0rnaaHo6SFAX-5WwxLTmxL5ciOhoOEfrSMZbllz',
                expires: 3600  
            }
        });
    
        // setup email data with unicode symbols
        //send email confirmation to user that their message has been recieved.
        let mailOptions = {
            from: '"Sydney Happening" <sunit@sydneyhappening.com>', // sender address
            to: useremail, // list of receivers
            subject: 'Auto generated email.', // Subject line
            text: 'Hello, we have recieved your message, we would get back to you soon.' // plain text body
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            return res.status(200).json("Your message has been sent. We would contact you.")
        });

        //send an email to admins with the user message
          let  mailAdminOptions = {
            from: '"Sydney Happening" <sunit@sydneyhappening.com>', // sender address
            to: 'sunitsingh2291@gmail.com, patilmayur5572@gmail.com',  // list of receivers
            subject: 'New user message from Sydney Happening', // Subject line
            text: 'Hello,'+ username +' sent a message for Sydney Happening, message:  ' +
            message + ' contact-phone: ' + phone + ' contact-email: ' + useremail  
        };

        // send mail with defined transport object
        transporter.sendMail(mailAdminOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            return res.status(200).json("Your message has been sent. We would contact you.")
        });

    });
});


module.exports = router;