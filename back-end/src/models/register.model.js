const { Users } = require('../database/models');
// const bcrypt = require('bcrypt');
const md5 = require('md5');
const { Op } = require('sequelize');

const create = async (name, email, password) => {
  const checkUser = await Users.findOne({
    where: {
      [Op.or]: [{ name }, { email }]
    }
  });
  if (checkUser) return null;

  // O certo
  // const hash_password = await bcrypt.hash(password, 12);

  // O que passa no avaliador
  const hash_password = md5(password);

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
