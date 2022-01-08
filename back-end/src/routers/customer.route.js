const express = require('express');
const customerCtrl = require('../controllers/customer.controller');
// const userSchema = require('../schemas/user.schema');
// const validateSchemas = require('../middlewares/schemaValidate.middlewares');

const router = express.Router();

// /products
router.route('/products').get(customerCtrl.listProducts);

// /checkout
router.route('/checkout').post(customerCtrl.createSale);

module.exports = router;
