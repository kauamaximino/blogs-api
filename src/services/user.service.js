const { User } = require('../database/models/index');
const { generateToken } = require('../helpers/generateTokenJWT');

const postUser = async (credentials) => { 
  console.log(credentials);
  const user = await User.findOne({ where: { email: credentials.email } });

  if (user) throw new Error('User already registered');

  await User.create(credentials);

  return generateToken(credentials);
};

module.exports = { postUser };