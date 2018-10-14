var Users = require('../Models/Users.js');

module.exports = {
    /*
    * use this function to find user by email id
    * the callback function returns user if found
    * error if db error or empty callback if not found
    */
    findUser: function (email, callback) {
        Users.findOne({email: email}, function (err, user) {
            if(err) {
                callback(err, null);
            }
            if(user) {
                callback(null, user);
            }
            else 
                callback();
        });
    },

    /*
    * Use this function to register user
    * @registerUser Json with details of user to register
    */
    registerUser: function (registerUser, callback) {
        registerUser.save(function (err, user) {
            if(err) {
                callback(err,null);
            }
            if(user) {
                callback(null, user);
            }
        });
    }
}
