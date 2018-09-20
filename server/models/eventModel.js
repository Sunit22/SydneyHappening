const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    EventId: {
        type: Number,
        require: true
    },
    EventName: {
        type: string,
        require: true
    },
    EventVenue: {
        type: string,
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