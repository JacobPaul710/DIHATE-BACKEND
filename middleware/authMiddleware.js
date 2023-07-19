const jwt = require('jsonwebtoken');
const { findById } = require('../models/User');

const authVerification = (req, res, next) => {
    const token = req.cookies.jwt
        if (token) {
            jwt.verify(token, '8c0ccf17158a65a14ab57852e9270ec6b7c74c892fc59960bbf7fcc9ae63337f', (err, decodedToken) => {
                if (err) {
                    console.log(err.message);
                    res.json(err.message);
                } else {
                    // console.log(decodedToken);
                    req.body.id = decodedToken.id;
                    next();
                }
            })
        } else {
            res.send('No User Logged in');
            // console.log(err);
        }
}


module.exports = { authVerification };