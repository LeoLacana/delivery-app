const loginModel = require('../models/login.model');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginModel.login(email, password);
    if (!user) {
      return res.status(404).json({
        message: 'Usuário não encontrado ou senha inválida',
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

module.exports = {
  login,
};
