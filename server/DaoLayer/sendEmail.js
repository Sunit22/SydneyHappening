var express = require('express');
const nodemailer = require('nodemailer');

module.exports = {
    sendEmail: function(emailFrom, emailTo, emailSubject, emailMessage, callback) {
        /*
        * using nodemailer for sending emails.
        * for using gmail, you need OAuth2 authentication.
        * generate client ID, client secret, refresh and access token with gmail to use.
        */  
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

        /* 
        * set the email options here.
        * @from: sender's email
        * @to: reciever's email(s)
        * @subject: subject of the email
        * @text: message body
        */
        let mailOptions = {
            from: emailFrom, 
            to: emailTo, 
            subject: emailSubject, 
            text:  emailMessage
        };

        //this sends the email
        transporter.sendMail(mailOptions, (error, info) => {
            callback(error, info);
        });
    }
}