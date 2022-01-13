const { sellerNamesModel, sellerOrdersModel } = require('../models/seller.model');
const verifyToken = require('../auth/verify.token');

const sellerNamesCtrl = async (_req, res) => {
  try {
    const sellerNames = await sellerNamesModel(); 
    return res.status(200).json(sellerNames);
  } catch (error) {
    return res.status(500).json({ message: 'Não foi possivel encontrar os vendedores.' });
  }
};

const sellerOrdersCtrl = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = await verifyToken(token);
  try {
    const ordersbySellerId = await sellerOrdersModel(id);
    return res.status(201).json(ordersbySellerId);
  } catch (error) {
    return res.status(500).json({ message: 'Não foi possivel encontrar os pedidos cadastrados.' });
  }
};

module.exports = {
  sellerNamesCtrl,
  sellerOrdersCtrl,
};
