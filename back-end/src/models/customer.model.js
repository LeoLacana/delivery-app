const { Products, Sales, SalesProducts } = require('../database/models');

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

const listOrders = async (id) => {
  const orders = await Sales.findAll({
    where: { id }
  });
  if (!orders) return null;
  return orders;
};

module.exports = {
  listProducts,
  createSale,
  listOrders,
};
