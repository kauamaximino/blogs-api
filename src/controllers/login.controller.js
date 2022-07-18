const loginService = require('../services/login.service');

const postLogin = async (request, response) => {
  try {
    const { email, password } = request.body;
    const token = await loginService.postLogin(email, password);
    response.status(200).json({ token });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }  
};

module.exports = {
  postLogin,
};