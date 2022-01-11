const { Users } = require('../database/models');

const sellerNamesModel = async () => {
  const sellers = await Users.findAll({
    where: {
      role: 'seller',
    },
    attributes: { exclude: ['password', 'email', 'role'] }
  });
  return sellers;
};

module.exports = {
  sellerNamesModel,
};
