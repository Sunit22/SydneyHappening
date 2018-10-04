const mongoose = require('mongoose');

const Events = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    EventName: {
        type: String,
        require: true
    },
    EventVenue: {
        type: String,
        require: true
    },
    EventDate: {
        type: String,
        require: true
    },
    EventTime:{
        type: String,
        require: true
    },
    AvailableSeats: {
        type: Number,
        require: true
    },
    CreatedBy: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Events', Events);