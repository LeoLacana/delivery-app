const jwt = require('jsonwebtoken');
const path = require('path');

const secretKey = require('fs').readFileSync(
  path.join(__dirname, '../../jwt.evaluation.key'),
  {
    encoding: 'utf8'
  }
);

const newToken = (id, email, role) => {
  const token = jwt.sign({ id, email, role }, secretKey);
  return token;
};

module.exports = newToken;
