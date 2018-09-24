var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../Models/Events.js');



/* GET ALL Events */
router.get('/getAllEvents', function(req, res, next) {  
    // Events.insertMany({EventId: 3}, (err, events) => {
    //   console.log(events);
    //   res.json(events);
    // })
    Events.find(function (err, events) {
      console.log("reached here again !!!");
      console.log(events);
    if (err) return next(err);
    res.json(events);
  });
});

module.exports = router;