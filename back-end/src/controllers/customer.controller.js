const customerModel = require('../models/customer.model');

const verifyToken = require('../auth/verify.token');

const errorMessage = 'Erro interno no servidor';

const listProducts = async (_req, res) => {
  try {
    const products = await customerModel.listProducts();
    if (!products) {
      return res.status(409).json({
        message: 'Produtos não encontrados',
      });
    }
    return res.status(201).json(products);
  } catch (error) {
    return res.status(500).json({ message: errorMessage });
  }
};

const createSale = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { id } = verifyToken(token);
    const saleId = await customerModel.createSale({
      ...req.body,
      userId: id,
    });
    return res.status(201).json({
      saleId,
    });
  } catch (error) {
    return res.status(500).json({ message: errorMessage });
  }
};

const listOrders = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = await verifyToken(token);
  try {
    const orders = await customerModel.listOrders(id);
    if (!orders) {
      return res.status(409).json({
        message: 'Pedidos não encontrados',
      });
    }
    return res.status(201).json(orders);
  } catch (error) {
    return res.status(500).json({ message: errorMessage });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await customerModel.getOrderById(id);
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

module.exports = {
  listProducts,
  createSale,
  getOrderById,
  listOrders,
};
