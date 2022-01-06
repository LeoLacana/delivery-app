const registerModel = require('../models/register.model');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await registerModel.create(name, email, password);
    if (!user) {
      return res.status(409).json({
        message: 'Nome ou email já cadastrado'
      });
    }
    return res.status(201).json(user);
  } catch (error) {}
};

module.exports = {
  create
};
