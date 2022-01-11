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
  products.forEach(({ product_id, quantity }) =>
    SalesProducts.create({
      product_id,
      sale_id: saleId.dataValues.id,
      quantity
    })
  );
  return saleId.dataValues.id;
};

const getOrderById = async (id) => {
  const order = await Sales.findOne({
    where: { id },
    include: [
      {
        model: Users,
        as: 'seller',
        attributes: ['name']
      },
      {
        model: Products,
        as: 'products',
        attributes: { exclude: ['url_image'] },
        through: { attributes: ['quantity'] }
      }
    ]
  });
  const timestamp = order.dataValues.sale_date;
  if (!order) return null;
  return {
    ...order.dataValues,
    sale_date: moment(timestamp).format('DD/MM/YYYY')
  };
};

module.exports = {
  listProducts,
  createSale,
  getOrderById
};
