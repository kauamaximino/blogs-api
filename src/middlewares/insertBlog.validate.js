const insertBlog = (request, response, next) => {
  const { title, content, categoryIds } = request.body;

  if (!title || !content || !categoryIds) {
    return response.status(400).json({ message: 'Some required fields are missing' });
  }

  if (categoryIds.length === 0) {
    return response.status(400).json({ message: '"categoryIds" not found' });
  }

  next();
};

module.exports = insertBlog;