const moment = require('moment');
const { Products, Sales, Users } = require('../database/models');

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
      sellerId: id,
    },
    attributes: { exclude: ['userId', 'sellerId'] },
  });
  return orders;
};

const sellerOrderByIdModel = async (id) => {
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

const updateOderStatusModel = async (id, status) => {
  await Sales.update(
    { status },
    { where: { id } },
  );
}

module.exports = {
  sellerNamesModel,
  sellerOrdersModel,
  sellerOrderByIdModel,
  updateOderStatusModel,
};
