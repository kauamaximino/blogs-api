const categoryService = require('../services/category.service');

const postCategory = async (request, response) => { 
  const { name } = request.body;

  const category = await categoryService.postCategory(name);

  response.status(201).json(category);
};

module.exports = {
  postCategory,
};