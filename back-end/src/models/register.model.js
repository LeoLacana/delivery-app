const { Users } = require('../database/models');
const bcrypt = require('bcrypt');
const newToken = require('../auth/newToken.auth');

const create = async (name, email, password) => {
  const token = newToken(name, email, (role = 'customer'));
  const hash_password = await bcrypt.hash(password, 12);
  const user = await Users.create({
    name,
    email,
    password: hash_password,
    role: 'customer'
  });
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token
  };
};

module.exports = {
  create
};
