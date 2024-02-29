const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'regular'
    }
});

model.exports = model('user', userSchema);