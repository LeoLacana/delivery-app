const { Users } = require('../database/models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

const create = async (name, email, password) => {
  const checkUser = await Users.findOne({
    where: {
      [Op.or]: [{ name }, { email }]
    }
  });
  if (checkUser) return null;
  const hash_password = await bcrypt.hash(password, 12);
  await Users.create({
    name,
    email,
    password: hash_password,
    role: 'customer'
  });
  return true;
};

module.exports = {
  create
};
