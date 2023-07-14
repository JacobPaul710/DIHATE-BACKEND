require('../config/connection');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter your chosen username."],
            unique: true
        },
        email: {
            type: String,
            required: [true, "Please enter your chosen email."],
            unique: true 
        },
        password: {
            type: String,
            required: [true, "Please enter your password to avoid starving."],
            minlength: [8, "Your password must be at least 8 characters."]
        }
    }
)

const User = mongoose.model('user', userSchema);