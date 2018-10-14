var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Events = require('../Models/Events.js');
var Users = require('../Models/Users');
var signInKey = require('../signInKeys/signInKey');
const jwt = require('jsonwebtoken'); 
var eventDao = require('../DaoLayer/eventDao')

// this route will be used to fetch all events
router.get('/getAllEvents', verifyToken, function(req, res, next) {  
  	eventDao.getAllEvents(function(err, events) {
    	if (err) {
      		res.status(500).json("Error while fething the events, please try again")
    	}
    	if(events) {
      		res.status(200).json(events);
    	}
  	});    
});

// this route will be used to fetch specific event by EventID
router.get('/getEvent/:_id', verifyToken, function(req, res, next) {
    eventDao.getEventByEventID(req.params._id ,function(err, event){
        if (err) {
          res.status(500).json("Error while fething the event, please try again")
        }
        if(event) {
          res.status(200).json(event);
        }
    });  
});

// this route will be used to Add New Event
router.post('/addEvent', verifyToken, function(req, res, next) {
    const newEvent = new Events({
        _id : new mongoose.Types.ObjectId(),
        EventName : req.body.EventName,
        EventVenue : req.body.EventVenue,
        EventDate : req.body.EventDate,
        EventTime : req.body.EventTime,
        AvailableSeats : req.body.AvailableSeats,
        CreatedBy : req.body.CreatedBy
    });
    eventDao.addEvent(newEvent, function(err, event){
        if(err) {
          res.status(500).json("Error while adding the event, please try again")
        }
        if(event) {
          res.status(200).json("Event added successfully");
        }
    })
});

// this route will be used to Delete existing event
router.delete('/deleteEvent/:_id', verifyToken, function(req, res, next) {
  	eventDao.deleteEvent({_id: req.params._id},function (err, event) {
    	if (err) {
      		res.status(500).json("Error while deleting the event, please try again")
    	}
    	if(event) {
      		res.status(200).json("Event deleted successfully");
    	}    
  	});
});

// this route will be used to Update existing event
router.patch('/updateEvent', verifyToken,function(req, res, next) {
	//create json to save the updated event
  	const eventJson = {
    	"EventName" : "" +req.body.EventName+ "",
    	"EventVenue" : ""+req.body.EventVenue+ "",
    	"EventDate" : "" +req.body.EventDate+ "",
    	"EventTime" : "" +req.body.EventTime+ "",
    	"AvailableSeats" : "" +req.body.AvailableSeats+ "",
    	"CreatedBy" : "" +req.body.CreatedBy+ ""
  	};
  	eventDao.updateEvent(req.body._id , eventJson, function (err, event) {
		if (err) {
			res.status(500).json("Error while updating the event, please try again")
		}
		if(event) {
			res.status(200).json("Event updated successfully");
		}    
  	});
});


// this route will be used to register a user to particular event 
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
        //Decrease the number of seats available by 1. 
        Events.findByIdAndUpdate(event._id, {$inc : {"AvailableSeats": -1}}, function(err,events) {
          if(err) {            
            return res.status(500).json("Error registering user to event, please try again");
          }
          if(events) {
            Users.findByIdAndUpdate(req.body.userID,{$push: { "EventsRegistered":
              {"EventID": events._id, "EventName": events.EventName}}}, function(err, users) {
                if(err) {                  
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


  eventDao.getEventByEventID(req.body.eventID, function(err, event){
      if(err){
        return res.status(500).json("Error finding Event to register.");
      }
      if(event) {
        if(event.AvailableSeats < 0) {
          //No available seats, inform user. 
          return res.status(500).json("Sorry, no seats available");
        }
        else {
          //Decrease the number of seats available by 1. 
          Events.findByIdAndUpdate(event._id, {$inc : {"AvailableSeats": -1}}, function(err,events) {
            if(err) {            
              return res.status(500).json("Error registering user to event, please try again");
            }
            if(events) {
              Users.findByIdAndUpdate(req.body.userID,{$push: { "EventsRegistered":
                {"EventID": events._id, "EventName": events.EventName}}}, function(err, users) {
                  if(err) {                  
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
           //Decrease the number of seats available by 1. 
          
        }
      }
  })

});

// this route will be used to retireve the events registered by user.
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
      return res.status(400).json("Unauthorized request");
    }
    if(tokenData) {
      decodedToken = tokenData;
      next();
    }
  })
}

module.exports = router;