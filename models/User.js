const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var User = new Schema({
    userNickname: {
        type: String
    },
    userPassword: {
        type: String
    },
    userSubscribedItems: {
        type: Array
    },
}, { collection : 'users'})

module.exports = mongoose.model('User', User);