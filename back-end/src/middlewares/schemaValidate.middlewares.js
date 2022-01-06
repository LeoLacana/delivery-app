const isValid = (body, schema) => {
  const result = schema.validate(body);
  if (result.error) {
    return result.error.details[0].message;
  }
  return null;
};

const validateSchemas = (schema) => (req, res, next) => {
  const errorMessage = isValid(req.body, schema);
  if (!errorMessage) return next();
  return res.status(400).json({ message: errorMessage });
};

module.exports = validateSchemas;
