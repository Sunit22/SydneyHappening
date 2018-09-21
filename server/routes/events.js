var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Event = require('../Models/eventModel.js');



/* GET ALL Events */
router.get('/events', function(req, res, next) {  
    Event.find(function (err, events) {
      console.log(events);
    if (err) return next(err);
    res.json(events);
  });
});

module.exports = router;