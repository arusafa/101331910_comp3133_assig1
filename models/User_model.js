const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        primaryKey: true,
        required: [true, 'Please enter a username'],
    },
    email: {
        type: String,
        unique: [true, 'Email already exists'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
});

const User_Model = mongoose.model('User', UserSchema);
module.exports = User_Model;