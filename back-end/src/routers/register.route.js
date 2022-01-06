const { Users } = require('../database/models');
const bcrypt = require('bcrypt');
const express = require('express');
const registerCtrl = require('../controllers/register.controller');

const router = express.Router();

// /register
router.route('/').post(registerCtrl.create);

module.exports = router;
