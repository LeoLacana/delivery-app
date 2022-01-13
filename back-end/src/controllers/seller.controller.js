const { sellerNamesModel, sellerOrdersModel, sellerOrderByIdModel, updateOderStatusModel } = require('../models/seller.model');
const verifyToken = require('../auth/verify.token');

const errorMessage = 'Erro interno no servidor';

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
  const { id } = verifyToken(token);
  try {
    const ordersbySellerId = await sellerOrdersModel(id);
    return res.status(201).json(ordersbySellerId);
  } catch (error) {
    return res.status(500).json({ message: 'Não foi possivel encontrar os pedidos cadastrados.' });
  }
};

const sellerOrderByIdCtrl = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await sellerOrderByIdModel(id);
    if (!order) {
      return res.status(409).json({
        message: 'Venda não encontrada',
      });
    }
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: errorMessage });
  }
};

const updateOderStatusCtrl = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    await updateOderStatusModel(id, status);
    return res.status(200).end();
  } catch(error) {
    return res.status(500).json({ message: errorMessage});
  }
}

module.exports = {
  sellerNamesCtrl,
  sellerOrdersCtrl,
  sellerOrderByIdCtrl,
  updateOderStatusCtrl,
};
