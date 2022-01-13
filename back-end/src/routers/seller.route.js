const express = require('express');
const {
    sellerNamesCtrl,
    sellerOrdersCtrl,
    sellerOrderByIdCtrl,
    updateOderStatusCtrl } = require('../controllers/seller.controller');

const router = express.Router();

// /seller/names
router.route('/names').get(sellerNamesCtrl);

// /seller/orders
router.route('/orders').get(sellerOrdersCtrl);

// /seller/orders/details
router.route('/orders/:id')
    .get(sellerOrderByIdCtrl)
    .put(updateOderStatusCtrl);

module.exports = router;
