const User = require('../models/User');
const jwt = require('jsonwebtoken');

const sessionLife = 604800; //number of seconds in 7 days

const buildToken = (id) => {
    return jwt.sign({ id },'8c0ccf17158a65a14ab57852e9270ec6b7c74c892fc59960bbf7fcc9ae63337f', 
    {expiresIn: sessionLife}
)};

const processErrors = (err, req) => {
    console.log(err.message, err.code);
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
  
    return errors;
    
}

get_signup = (req, res) => {
    res.send('signup');
}
post_signup = async (req, res) => {
    // console.log(req.body);
    const { username, email, password } = req.body;
    // console.log(username, email, password);

    try {
       const newUser = await User.create({ username, email, password });
       const token = buildToken(newUser._id);
       res.cookie('jwt', token, {httpOnly: true, maxAge: sessionLife * 1000 })
        res.json(newUser._id);
    }
    catch (err) {
        console.log(err.errors);
        const errors = processErrors(err);
        res.json({ errors });
    }
}
get_login = (req, res) => {
    res.send('login');
}
post_login = (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    console.log(email, password);
    res.send('logged in')
}
// get_logout = () => {

// }



module.exports = {get_signup, post_signup, get_login, post_login};