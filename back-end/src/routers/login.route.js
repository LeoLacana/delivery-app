const express = require('express');
const loginCtrl = require('../controllers/login.controller');
const loginSchema = require('../schemas/login.schema');
const validateSchemas = require('../middlewares/schemaValidate.middlewares');

const router = express.Router();

// /login
router.route('/').post(validateSchemas(loginSchema), loginCtrl.login);

module.exports = router;
