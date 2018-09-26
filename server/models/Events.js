const mongoose = require('mongoose');

const Events = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    EventId: {
        type: Number,
        require: true
    },
    EventName: {
        type: String,
        require: true
    },
    EventVenue: {
        type: String,
        require: true
    },
    EventDate: {
        type: Date,
        require: true
    },
    AvailableSeats: {
        type: Number,
    }
});

module.exports = mongoose.model('Events', Events);