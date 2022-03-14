const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
//Routes
const userRoutes = require('./api/routes/user');
app.use('/user', userRoutes);

module.exports = app;