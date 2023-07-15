require('../config/connection');
const bcrypt = require('bcrypt');

const { isEmail } = require('validator');

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
            unique: true, 
            validate: [isEmail, "That email is not valid."]
        },
        password: {
            type: String,
            required: [true, "Please enter your password to avoid starving."],
            minlength: [8, "Your password must be at least 8 characters."]
        }
    }
)

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;