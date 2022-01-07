const registerModel = require('../models/register.model');

const create = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await registerModel.create(name, email, password);
    if (!user) {
      return res.status(204).json({
        message: 'Nome ou email já cadastrado',
      });
    }
    return res.status(201).json({
      message: 'Usuário cadastrado com sucesso',
    });
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

module.exports = {
  create,
};
