const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
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

module.exports = mongoose.model('Event', eventSchema);