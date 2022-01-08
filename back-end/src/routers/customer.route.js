const express = require('express');
const customerCtrl = require('../controllers/customer.controller');

const router = express.Router();

// /products
router.route('/products').get(customerCtrl.listProducts);

// /checkout
router.route('/checkout').post(customerCtrl.createSale);

module.exports = router;
