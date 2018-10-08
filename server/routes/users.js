var express = require('express');
var router = express.Router();
var Users = require('../Models/Users.js');
var mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
var signInKey = require('../signInKeys/signInKey');
const jwt = require('jsonwebtoken'); 

router.post('/register', (req,res) => {
    console.log(req.body.registerationData.email + " " + req.body.registerationData.password);
    console.log(req.body.captcha);    
            const errMessage= "EC1"
            Users.findOne({email: req.body.registerationData.email})
            .then(user =>{
                if(user) {
                    return res.status(200).json(errMessage);
                }
                else {
                    bcryptjs.genSalt(10, function(err, salt) {
                        bcryptjs.hash(req.body.registerationData.password, salt, function(err, hash) {
                            console.log("hashed password = " + hash);
                            const registerUser = new Users({
                                _id: new mongoose.Types.ObjectId(),
                                FirstName: req.body.registerationData.firstName,
                                LastName: req.body.registerationData.lastName,
                                email: req.body.registerationData.email,
                                password: hash,
                                IsAdmin: req.body.registerationData.IsAdmin,
                            });
                            
                            let promise = registerUser.save();
                            promise.then(function(){
                                return res.status(200).json("SUCCESS");
                            })
                            promise.catch(function(err){
                                console.log(err);
                                return res.status(501).json("Error in registering user");
                            })
                        });
                    }); 
        
                }
            }) 
    }); 
    




router.post('/login', (req,res,next) => {
    let promise = Users.findOne({email: req.body.email}).exec();
    promise.then(function(user) {
        if(user) {
            bcryptjs.compare(req.body.password, user.password, function(err, match) {
                console.log(match);
                if(match) {
                    //payload to be added to sign in
                    const payload = {
                        id: user._id,
                        firstName: user.FirstName,
                        email: user.email
                    }
                    //generate jwt token. 
                    let token = jwt.sign(payload, signInKey.signInKey,{expiresIn: '3h'});
                    return res.status(200).json({
                        loginStatus: true,
                        token: token,
                        userID: user._id,
                        firstName: user.FirstName,
                        email: user.email,
                        IsAdmin: user.IsAdmin
                    });
                }
                else {
                    return res.status(501).json("password does not match");
                }
            });
        }
        else {
            return res.status(501).json("Email not registered");
        }
    });

    promise.catch(function(err) {
        return res.status(501).json("Error user login"); 
    });

});

//used to validate the jwt token, 
//this would be done to redirect user to dashboard if already logged in through valid token.
router.get('/validateToken', verifyToken,function(req, res, next) {
    return res.status(200).json("loggedin");
});

function checkCaptcha(req,res){
    if(req.body.captcha === undefined || req.body.captcha === null || req.body.captcha === ''){
        return res.json({"success": false, "msg": "Please select captcha"});
    }
    //Secret Key
    const secretKey = '6Lc6HScTAAAAAFzuyIswprpJljO1s5JLSSFKgq8c';

    //Verify URL
    const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

    //Make request to verify URL
    router.post(verifyURL,(err,response,body) => {
        body =JSON.parse(body);

        //Not Successful
        if(body.success !== undefined && !body.success){
            return res.json({"success": false, "msg": "Failed captcha verification"});
        }

        //Successful
        return res.json({"success": true, "msg": "Captcha passed"});        
    });

}


function verifyToken(req, res, next) {
    let token = req.get('token');
    console.log(token);
  
    jwt.verify(token, signInKey.signInKey, function(err, tokenData) {
      if(err) {
        console.log("payload false")
        return res.status(400).json("Unauthorized request");
      }
      if(tokenData) {
        console.log("payload true");
        decodedToken = tokenData;
        next();
      }
    })
  }

module.exports = router;