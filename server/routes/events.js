var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../Models/Events.js');

/* GET ALL Events */
router.get('/', verifyToken, function(req, res, next) {  
    Events.find(function (err, events) {
    if (err) return next(err);
    res.json(events);
  });
});

//GET select event by id
router.get('/:_id', verifyToken, function(req, res, next) {
  Events.findById(req.params._id, function (err, event) {
    if (err) return next(err);
    res.json(event);
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
  newEvent.save().then(result => {
    if (err) return next(err);
    res.status(200).json("success");    
  });
});


//Delete Event for admin module
router.delete('/:_id', verifyToken, function(req, res, next) {
  console.log("reached API");
  Events.findOneAndRemove(req.params.eventID, req.body, function (err, event) {
    if (err) return next(err);
    res.json("success");
  });
});

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