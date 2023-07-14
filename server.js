require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('./config/connection');

const authRoutes = require('./routes/authRoutes');

app.get('/', (req, res) => {
    res.json('test')
})

app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})