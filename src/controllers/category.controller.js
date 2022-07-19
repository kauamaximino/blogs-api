const categoryService = require('../services/category.service');

const postCategory = async (request, response) => { 
  const { name } = request.body;

  if (!name) response.status(200).json({ message: '"name" is required' });

  const category = await categoryService.postCategory(name);

  response.status(201).json(category);
};

module.exports = {
  postCategory,
};