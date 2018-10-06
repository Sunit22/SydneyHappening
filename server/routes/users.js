var express = require('express');
var router = express.Router();
var Users = require('../Models/Users.js');
var mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

router.post('/register', (req,res) => {
    console.log(req.body.email + " " + req.body.password);
    Users.findOne({email:req.body.email})
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
                        FirstName:req.body.firstName,
                        LastName:req.body.lastName,
                        email:req.body.email,
                        password:hash
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
    const email = req.body.email;
    const password = req.body.password;
    const errMSg = 'email or password invalid';
    console.log(req.body.email + req.body.password);

    Users.findOne({email: email})
    .then(user =>{
        if(!user) {
            console.log("not found");
            return res.status(200).json({msg:errMSg});
            
        }
        else {
            console.log('found');
            //return res.status(200).json({msg:message});
        } 
    })

});

module.exports = router;