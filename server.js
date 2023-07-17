require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('./config/connection');
const cookieParser = require('cookie-parser');

const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const { authVerification, findUser } = require('./middleware/authMiddleware');

app.get('/', (req, res) => {
    res.json('test')
})

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}
));
app.use(express.json());
app.use(cookieParser());

// app.get('*', findUser);
app.get('/icebox', authVerification, (req, res) => res.send('icebox'));
app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`)
})