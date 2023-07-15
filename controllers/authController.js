const User = require('../models/User');

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
    if (err.message.includes())

    //log in errors
    // if (err.message === 'incorrect email') {
    //     errors.emails = 'That email is not registered';
    // }


    if(err.code === 11000 && err.keyValue.username) {
        errors.username = 'This Username is already in use.';
    }
    if(err.code === 11000 && err.keyValue.email) {
        errors.email = 'This email is already in use.';
    }


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
        res.json(newUser);
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