const express = require('express');
const cors = require('cors');

const registerRoute = require('../routers/register.route');
// const loginRoute = require('../routers/login.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/register', registerRoute);
// app.use('/login', loginRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
