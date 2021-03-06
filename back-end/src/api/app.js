const express = require('express');
const cors = require('cors');
const path = require('path');

const registerRoute = require('../routers/register.route');
const loginRoute = require('../routers/login.route');
const customerRoute = require('../routers/customer.route');
const sellerRoute = require('../routers/seller.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  '/images',
  express.static(path.join(__dirname, '..', '..', 'public', 'images')),
);

app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/customer', customerRoute);
app.use('/seller', sellerRoute);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
