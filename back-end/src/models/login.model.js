const md5 = require('md5');
const { Users } = require('../database/models');
const newToken = require('../auth/newToken.auth');

const login = async (email, password) => {
  const user = await Users.findOne({
    where: { email },
  });
  if (!user) return null;
  const hashPassword = md5(password);
  const result = hashPassword === user.password;

  if (!result) return null;
  const token = newToken(user.id, email, user.role);
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  };
};

module.exports = {
  login,
};
