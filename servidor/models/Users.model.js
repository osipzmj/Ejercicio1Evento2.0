const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'regular'
    }
});

module.exports = mongoose.model('user', userSchema);