const validateSchema = (body, schema) => {
  const result = schema.validate(body);
  return result;
};

const validateBody = (schema) => (req, res, next) => {
  const errorMessage = validateSchema(schema, req.body);
  return console.log(errorMessage);
};
