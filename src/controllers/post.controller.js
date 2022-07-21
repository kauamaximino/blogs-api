const { decoderJwt } = require('../helpers/decoderTokenJWT');
const postService = require('../services/post.services');

const postBlogPost = async (request, response) => { 
  try {
    const { title, content, categoryIds } = request.body;
    const { authorization } = request.headers;
    const tokenDecoder = await decoderJwt(authorization);
    const result = await postService.createBlogPost({
      title,
      content,
      categoryIds,
      tokenDecoder,
    });
    response.status(201).json(result);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

module.exports = {
  postBlogPost,
};