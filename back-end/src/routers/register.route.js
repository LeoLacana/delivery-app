const express = require('express');
const registerCtrl = require('../controllers/register.controller');
const userSchema = require('../schemas/user.schema');
const validateSchemas = require('../middlewares/schemaValidate.middlewares');

const router = express.Router();

// /register
router.route('/').post(validateSchemas(userSchema), registerCtrl.create);

module.exports = router;
