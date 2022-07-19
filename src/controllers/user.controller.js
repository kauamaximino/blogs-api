const userService = require('../services/user.service');

const postUser = async (request, response) => { 
  try {
    const { displayName, email, password, image } = request.body;
    const user = { displayName, email, password, image };
    const token = await userService.postUser(user);
    response.status(201).json({ token });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = {
  postUser,
};
