const express = require('express');
const { sellerNamesCtrl, sellerOrdersCtrl } = require('../controllers/seller.controller');

const router = express.Router();

// /seller/names
router.route('/names').get(sellerNamesCtrl);

// /seller/orders
router.route('/orders').get(sellerOrdersCtrl);

module.exports = router;
