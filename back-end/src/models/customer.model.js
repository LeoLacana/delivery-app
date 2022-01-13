const moment = require('moment');
const { Products, Sales, SalesProducts, Users } = require('../database/models');

const listProducts = async () => {
  const products = await Products.findAll();
  if (!products) return null;
  return products;
};

const createSale = async (sale) => {
  const { products } = sale;
  const saleId = await Sales.create(sale);
  products.forEach(({ productId, quantity }) =>
    SalesProducts.create({
      productId,
      saleId: saleId.dataValues.id,
      quantity,
    }));
  return saleId.dataValues.id;
};

const listOrders = async (id) => {
  const orders = await Sales.findAll({
    where: { userId: id },
    attributes: { exclude: ['deliveryNumber', 'deliveryAddress', 'sellerId', 'userId'] },
  });
  if (!orders) return null;
  return orders;
};

const getOrderById = async (id) => {
  const order = await Sales.findOne({
    where: { id },
    include: [
      { model: Users, as: 'seller', attributes: ['name'] },
      {
        model: Products,
        as: 'products',
        attributes: { exclude: ['urlImage'] },
        through: { attributes: ['quantity'] },
      },
    ],
  });
  const timestamp = order.dataValues.sale_date;
  if (!order) return null;
  return {
    ...order.dataValues,
    saleDate: moment(timestamp).format('DD/MM/YYYY'),
  };
};

module.exports = {
  listProducts,
  createSale,
  listOrders,
  getOrderById,
};
