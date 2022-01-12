const { Users, Sales } = require('../database/models');

const sellerNamesModel = async () => {
  const sellers = await Users.findAll({
    where: {
      role: 'seller',
    },
    attributes: { exclude: ['password', 'email', 'role'] },
  });
  return sellers;
};

const sellerOrdersModel = async (id) => {
  const orders = await Sales.findAll({
    where: {
      seller_id: id,
    },
    attributes: { exclude: ['user_id', 'seller_id'] },
  });
  return orders;
};

module.exports = {
  sellerNamesModel,
  sellerOrdersModel,
};
