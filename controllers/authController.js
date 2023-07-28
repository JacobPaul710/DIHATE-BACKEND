const User = require('../models/User');
const jwt = require('jsonwebtoken');

const sessionLife = 604800; //number of seconds in 7 days

const buildToken = (id) => {
    return jwt.sign({ id },'8c0ccf17158a65a14ab57852e9270ec6b7c74c892fc59960bbf7fcc9ae63337f', 
    {expiresIn: sessionLife}
)};

const processErrors = (err, req) => {
    let errors = { username: '', email: '', password: ''};

    //Sign up errors
    if(err.code === 11000 && err.keyValue.username) {
        errors.username = 'This Username is already in use.';
    }
    if(err.code === 11000 && err.keyValue.email) {
        errors.email = 'This email is already in use.';
    }

    //validation errors
    if (err.message.includes('User validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        })
    }

    //log in errors
    if (err.message === 'incorrect email') {
        errors.email = 'This email is not registered.';
    }
    if (err.message === 'incorrect password') {
        errors.password = 'This password is incorrect.';
    }

    return errors;
    
}

get_signup = (req, res) => {
    res.send('signup');
}
post_signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
       const newUser = await User.create({ username, email, password });
       const token = buildToken(newUser._id);
       res.cookie('jwt', token, {maxAge: sessionLife * 1000});
        res.status(200).json({email: newUser.email, username: newUser.username});
    }
    catch (err) {
        console.log(err);
        const errors = processErrors(err);
        res.json({ errors });
    }
}
get_login = (req, res) => {
    res.send('login');
}
post_login = async  (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.userLogin(email, password);
        const token = buildToken(user._id);
        console.log(token, 'token')
        res.cookie('jwt', token, {httpOnly: true, sameSite: 'none', secure: true, domain: 'dihate-frontend-5r7o5hegn-jacobpaul710.vercel.app', maxAge: sessionLife * 1000});
        console.log('Cookie:', req.cookies);
        res.json({  email: user.email, username: user.username });
    } 
    catch (error) {
        // const errors = processErrors(err);
        // res.json({ errors });
        console.log(error);
    }
}

get_logout = (req, res) => {
    try {
        res.cookie('jwt', '', {cacheControl: 'no-store', maxAge: 0 });
        res.json('logged out')
    }
    catch (err) {
        console.log(err);
    }
}



module.exports = {get_signup, post_signup, get_login, post_login, get_logout};