const jwt = require('jsonwebtoken');
const path = require('path');

const secretKey = require('fs').readFileSync(
  path.join(__dirname, '../../jwt.evaluation.key'),
  {
    encoding: 'utf8',
  },
).trim();

const verifyToken = (token) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

module.exports = verifyToken;
