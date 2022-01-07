const jwt = require('jsonwebtoken');
const path = require('path');

const secretKey = require('fs').readFileSync(
  path.join(__dirname, '../../jwt.evaluation.key'),
  {
    encoding: 'utf8',
  },
);

const verifyToken = (token) => {
  const decoded = jwt.verify(token, secretKey);

  // return feito pro linter passar :P
  return decoded;
};

module.exports = verifyToken;
