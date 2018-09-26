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
  console.log("reached");
  console.log(req.params._id);
  Events.findById(req.params._id, function (err, event) {
    if (err) return next(err);
    res.json(event);
  });
});

module.exports = router;