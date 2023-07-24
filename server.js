require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('./config/connection');
const cookieParser = require('cookie-parser');
const authController = require('./routes/authRoutes');
const iceboxController = require('./routes/icebox');

const meals = require('./routes/icebox')
const cors = require('cors');

app.get('/', (req, res) => {
    res.json('test')
})

app.use(cors({
    origin: 'https://dihate-backend.onrender.com',
    credentials: true,
}
));
app.use(express.json());
app.use(cookieParser());

app.use(authController);
app.use(iceboxController)

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})