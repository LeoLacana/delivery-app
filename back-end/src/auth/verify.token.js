const jwt = requite('jsonwebtoken');
const secretKey = require('fs').readFileSync(
  path.join(__dirname, '../../jwt.evaluation.key'),
  {
    encoding: 'utf8'
  }
);

const verifyToken = (token) => {
  const decoded = jwt.verify(token, secretKey);
};

module.exports = verifyToken;
