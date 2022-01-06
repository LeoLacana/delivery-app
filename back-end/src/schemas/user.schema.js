const Joi = require('joi');

const userSchema = Joi.object().keys({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

module.exports = userSchema;
