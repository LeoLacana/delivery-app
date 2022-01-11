const express = require('express');
const { sellerNamesCtrl } = require('../controllers/seller.names.controller');

const router = express.Router();

// /seller/names
router.route('/').get(sellerNamesCtrl);

module.exports = router;
