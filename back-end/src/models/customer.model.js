const { Products } = require('../database/models');

const listProducts = async () => {
  const products = await Products.findAll();
  if (!products) return null;
  return products;
};

module.exports = {
  listProducts,
};
