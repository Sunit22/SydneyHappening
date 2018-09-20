const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    UserId: {
        type: Number,
        require: true
    },
    FirstName: {
        type: String,
        require: true
    },
    LastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);