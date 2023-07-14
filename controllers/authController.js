get_signup = (req, res) => {
    res.send('signup');
}
post_signup = (req, res) => {
    // console.log(req.body);
    const { username, email, password } = req.body;
    console.log(username, email, password);
    res.send('new signup')
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