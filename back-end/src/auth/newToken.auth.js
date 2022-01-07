const jwt = require('jsonwebtoken');
const path = require('path');

const secretKey = require('fs').readFileSync(
  path.join(__dirname, '../../jwt.evaluation.key'),
  {
    encoding: 'utf8',
  },
).trim();

const newToken = (email, role) => {
  const token = jwt.sign({ email, role }, secretKey);
  return token;
};

module.exports = newToken;
