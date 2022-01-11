const { sellerNamesModel } = require('../models/seller.names.model');

const sellerNamesCtrl = async (_req, res) => {
  try {
    const sellerNames = await sellerNamesModel(); 
    return res.status(200).json(sellerNames);
  } catch (error) {
    return res.status(500).json({ message: 'Não foi possivel encontrar os vendedores' });
  }
};

module.exports = {
  sellerNamesCtrl,
};
