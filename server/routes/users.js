var express = require('express');
var router = express.Router();
var Users = require('../Models/Users.js');
var mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
var signInKey = require('../signInKeys/signInKey');
const jwt = require('jsonwebtoken'); 

router.post('/register', (req,res) => {
    console.log(req.body.email + " " + req.body.password);
    Users.findOne({email: req.body.email})
    .then(user =>{
        if(user) {
            return res.status(400).json({msg:'Email already registered'});
        }
        else {
            bcryptjs.genSalt(10, function(err, salt) {
                bcryptjs.hash(req.body.password, salt, function(err, hash) {
                    console.log("hashed password = " + hash);
                    const registerUser = new Users({
                        _id: new mongoose.Types.ObjectId(),
                        FirstName: req.body.firstName,
                        LastName: req.body.lastName,
                        email: req.body.email,
                        password: hash,
                        IsAdmin: req.body.IsAdmin
                    });
                    registerUser.save()
                        .then(user => res.json(),{
                            message:"User registered"
                        })
                        .catch(err => console.log(err));
                });
            }); 

        }
    })

});


router.post('/login', (req,res) => {
    console.log('here');
    const errorMessage = 'email or password invalid';
    console.log(req.body.email + req.body.password);

    Users.findOne({email: req.body.email})
    .then(user =>{
        if(!user) {
            console.log("not found");
            return res.status(200).json({msg:errorMessage});        
        }
        else {
            console.log('found');
            bcryptjs.compare(req.body.password, user.password, function(err, match) {
                console.log(match);
                if(match) {
                    console.log("password matched");
                    
                    const payload = {
                        id: user._id,
                        firstName: user.FirstName,
                        email: user.email
                    } 
                    console.log(payload);

                    jwt.sign(payload, signInKey.signInKey, {expiresIn: 6000}, (err, token) => {
                        if(err) {
                            res.sendStatus(500);
                        }
                        else {
                            res.json({
                               loginStatus: true,
                               token: token,
                               userID: user._id,
                               firstName: user.FirstName,
                               email: user.email,
                               IsAdmin: user.IsAdmin
                            })
                        }
                    })

                }
                else {
                    console.log("password not matched");
                    return res.status(200).json({msg:errorMessage});
                }
            });
        } 
    })  

});

module.exports = router;