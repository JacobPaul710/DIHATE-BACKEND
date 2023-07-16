const jwt = require('jsonwebtoken');

const authVerification = (req, res, next) => {

    const token = req.cookies.jwt
    
    if (token) {
        jwt.verify(token, '8c0ccf17158a65a14ab57852e9270ec6b7c74c892fc59960bbf7fcc9ae63337f', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        })
    } else {
        res.redierct('/login');
    }
}

module.exports = authVerification;