require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('./config/connection');

const authRoutes = require('./routes/authRoutes');
const { authVerification, findUser } = require('./middleware/authMiddleware');

app.get('/', (req, res) => {
    res.json('test')
})

app.use(express.json());

app.get('*', findUser);
app.get('/icebox', authVerification, (req, res) => res.render('icebox.ejs'));
app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})