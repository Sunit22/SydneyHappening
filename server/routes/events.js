var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../Models/Events.js');
var Users = require('../Models/Users');
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


//register user to an event. 
router.post('/registerToAttend', verifyToken, function(req,res, next){
  //first check if seats are available, someone else may book at the same time. 
  Events.findById(req.body.eventID, function (err, event) {
    if(err) {
      return res.status(500).json("Error finding Event to register.");
    }
    if(event) {
      if(event.AvailableSeats < 0) {
        //No available seats, inform user. 
        return res.status(500).json("Sorry, no seats available");
      }
      else {
        console.log("registering user to event");
        //Decrease the number of seats available by 1. 
        Events.findByIdAndUpdate(event._id, {$inc : {"AvailableSeats": -1}}, function(err,events) {
          if(err) {
            console.log(err);
            return res.status(500).json("Error registering user to event, please try again");
          }
          if(events) {
            Users.findByIdAndUpdate(req.body.userID,{$push: { "EventsRegistered":
              {"EventID": events._id, "EventName": events.EventName}}}, function(err, users) {
                if(err) {
                  console.log(err);
                  //since the register to user function has failed, increment the seat to original.
                  Events.findByIdAndUpdate(event._id, {$inc : {"AvailableSeats": 1}});
                  return res.status(500).json("Error registering user to event, please try again");
                }
                if(users) {
                  return res.status(200).json("User registered to event successfully");
                }
              });
          }
        });
      }
    }
  });

});

//get the events registered by user.
router.post('/getUserEvents',verifyToken,function(req, res, nex) {
  Users.findById(req.body.userID, {"EventsRegistered": 1}, function(err, userEvents){
    if(err) {
      return res.status(500).json("There was error fetching user events");
    }
    if(userEvents) {      
      return res.status(200).json(userEvents.EventsRegistered);
    }
  })
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