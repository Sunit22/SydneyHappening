const mongoose = require('mongoose');

const Users = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
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
    },
    IsAdmin: {
        type: Boolean,
    }
});

module.exports = mongoose.model('Users', Users);