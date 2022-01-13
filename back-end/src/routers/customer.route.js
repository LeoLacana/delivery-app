const express = require('express');
const customerCtrl = require('../controllers/customer.controller');

const router = express.Router();

// customer/products
router.route('/products').get(customerCtrl.listProducts);

// customer/checkout
router.route('/checkout').post(customerCtrl.createSale);

// /orders
router.route('/orders').get(customerCtrl.listOrders);

// customer/order/:id
router.route('/orders/:id').get(customerCtrl.getOrderById);

module.exports = router;
