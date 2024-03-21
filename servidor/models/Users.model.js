const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['regular','admin','instructor'],
        default: 'regular'
    }
});

module.exports = mongoose.model('user', userSchema);