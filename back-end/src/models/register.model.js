const md5 = require('md5');
// const bcrypt = require('bcrypt');

const { Op } = require('sequelize');
const { Users } = require('../database/models');

const create = async (name, email, password) => {
  const checkUser = await Users.findOne({
    where: {
      [Op.or]: [{ name }, { email }]
    }
  });
  if (checkUser) return null;

  const hashPassword = md5(password);

  await Users.create({
    name,
    email,
    password: hashPassword,
    role: 'customer'
  });
  return true;
};

module.exports = {
  create
};
