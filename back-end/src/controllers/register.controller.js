const registerModel = require('../models/register.model');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await registerModel.create(name, email, password);
    return res.status(200).json(user);
  } catch (error) {}
};

module.exports = {
  create
};
