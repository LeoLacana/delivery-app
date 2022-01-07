const customerModel = require('../models/customer.model');

const listProducts = async (req, res) => {
  try {
    const products = await customerModel.listProducts();
    if (!products) {
      return res.status(409).json({
        message: 'Produtos não encontrados'
      });
    }
    return res.status(201).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

module.exports = {
  listProducts
};
