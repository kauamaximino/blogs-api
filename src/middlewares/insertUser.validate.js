const { schemaPostUser } = require('../schemas/insertUser.schema');

const insertUserValidate = (request, response, next) => { 
  const { displayName, email, password, image } = request.body;

  const { error } = schemaPostUser.validate({ displayName, email, password, image });
  
  if (!error) return next();

  return response.status(400).json({ message: error.message });
};

module.exports = insertUserValidate;