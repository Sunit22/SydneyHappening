var express = require('express');
var router = express.Router();
var Users = require('../Models/Users.js');
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var signInKey = require('../signInKeys/signInKey');
const jwt = require('jsonwebtoken'); 
var userDao = require('../DaoLayer/userDao');

//this route would be used to register a new user. 
router.post('/register', function(req, res, next) {   
    userDao.findUser(req.body.registerationData.email, function(err, user) {
        if(err) {
            //return error with db
            return res.status(500).json("server error registering user");
        }
        if(user) {
            //email already registered
            return res.status(500).json("Email already registered.");
        }  

        /*
        * generate salt and has the password using bcrypt
        * hashed password would be stored in variable "hash"
        */
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.registerationData.password, salt, function(err, hash) {
                //create a json to register data.
                const registerUser = new Users({
                    _id: new mongoose.Types.ObjectId(),
                    FirstName: req.body.registerationData.firstName,
                    LastName: req.body.registerationData.lastName,
                    email: req.body.registerationData.email,
                    password: hash,
                    IsAdmin: req.body.registerationData.IsAdmin,
                });
                userDao.registerUser(registerUser, function(err, user) {
                    if(user) {
                        return res.status(200).json("user registered");
                    }
                    else {
                        return res.status(500).json("error registering user");
                    }
                });
            });
        }); 
    });        
});

//this route would be used for user login
router.post('/login', function(req,res,next) {
    userDao.findUser(req.body.email, function(err, user) {
        if(err) {
            //return user is not registered
            return res.status(500).json("error email is not registered");
        }
        if(user) {
            /*
            * email is found, decrypt and verify password.
            * @match would be true is password matches, else false.
            */
            bcrypt.compare(req.body.password, user.password, function(err, match) {
                if(match) {
                    //payload to be added to sign in
                    const payload = {
                        id: user._id,
                        firstName: user.FirstName,
                        email: user.email
                    }

                    /*
                    * generate jwt token to be passed as header in client requests.
                    * This token would be used to verify sign in and access server functions.
                    */ 
                    let token = jwt.sign(payload, signInKey.signInKey,{expiresIn: '3h'});
                    //confirm login and send server response. 
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
    });
});

/* 
* used to validate the jwt token.
* redirect user to dashboard if already logged in through valid token.
*/
router.get('/validateToken', verifyToken,function(req, res, next) {
    return res.status(200).json("loggedin");
});

/*
* This function would be used as a middleware function.
* Verify the token passed in the header.
* If the token is not present or expiered, return http status 400.
* If the token is valid, move to the next function. 
*/
function verifyToken(req, res, next) {
    let token = req.get('token');
    jwt.verify(token, signInKey.signInKey, function(err, tokenData) {
        if(err) {
            return res.status(400).json("Unauthorized request");
        }
        if(tokenData) {
            decodedToken = tokenData;
            next();
        }
    })
}

module.exports = router;