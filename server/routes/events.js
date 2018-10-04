var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../Models/Events.js');

/* GET ALL Events */
router.get('/', function(req, res, next) {  
    Events.find(function (err, events) {
    if (err) return next(err);
    res.json(events);
  });
});

//GET select event by id
router.get('/:_id', function(req, res, next) {
  Events.findById(req.params._id, function (err, event) {
    if (err) return next(err);
    res.json(event);
  });
});

//ADD new Event
router.post('/', function(req, res, next) {
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
    if (result !== null) {
      res.status(200).json({
        message: "created a event sucessfully.",
      });
    }
  });
});

module.exports = router;