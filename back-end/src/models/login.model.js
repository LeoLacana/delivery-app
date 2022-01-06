const { Users } = require('../database/models');
const newToken = require('../auth/newToken.auth');
const bcrypt = require('bcrypt');

const login = async (email, password) => {
  const user = await Users.findOne({
    where: { email }
  });
  if (!user) return null;
  const result = bcrypt.compareSync(password, user.password);
  if (!result) return null;
  const token = newToken(email, user.role);
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token
  };
};

module.exports = {
  login
};
