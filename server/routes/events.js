var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../Models/Events.js');
var signInKey = require('../signInKeys/signInKey');
const jwt = require('jsonwebtoken'); 

/* GET ALL Events */
router.get('/', verifyToken, function(req, res, next) {  
    Events.find(function (err, events) {
    if (err) return next(err);    
    res.status(200).json(events);
  });
});

//GET select event by id
router.get('/:_id', verifyToken, function(req, res, next) {
  Events.findById(req.params._id, function (err, event) {
    if (err) return next(err);
    res.status(200).json(event);
  });
});

//ADD new Event
router.post('/', verifyToken, function(req, res, next) {
  const newEvent = new Events({
    _id : new mongoose.Types.ObjectId(),
    EventName : req.body.EventName,
    EventVenue : req.body.EventVenue,
    EventDate : req.body.EventDate,
    EventTime : req.body.EventTime,
    AvailableSeats : req.body.AvailableSeats,
    CreatedBy : req.body.CreatedBy
  });
  newEvent.save(function(err, event){
    if(err) return next(err);
    res.status(200).json("success");
  })
});


//Delete Event for admin module
router.delete('/:_id', verifyToken, function(req, res, next) {
  Events.findByIdAndRemove({_id: req.params._id},function (err, event) {
    if (err) return next(err);
    res.status(200).json("success");
  });
});

//Edit Event for admin module
router.patch('/:_id', verifyToken,function(req, res, next) {
  console.log("hi")
  console.log(req.body);
  const updateEvent = {
    
    "EventName" : "" +req.body.EventName+ "",
    "EventVenue" : ""+req.body.EventVenue+ "",
    "EventDate" : "" +req.body.EventDate+ "",
    "EventTime" : "" +req.body.EventTime+ "",
    "AvailableSeats" : "" +req.body.AvailableSeats+ "",
    "CreatedBy" : "" +req.body.CreatedBy+ ""
  };

  Events.findByIdAndUpdate({_id:req.params._id},{$set: updateEvent}, function (err, event) {
    if (err) return next(err);
    console.log(event)
    res.status(200).json("success");
  });
});

function verifyToken(req, res, next) {
  let token = req.get('token');
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