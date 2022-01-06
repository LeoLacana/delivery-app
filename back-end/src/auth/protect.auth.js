const verifyToken = require('./verify.token');

const protect = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: 'Token not found'
    });
  }
  let payload;
  try {
    payload = verifyToken(token);
  } catch (error) {
    return res.status(401).json({
      message: 'expired or invalid token'
    });
  }
  next();
};

module.exports = protect;
