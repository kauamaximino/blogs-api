const decoderJwt = (token) => {
  const tokenDecoder = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());

  return (tokenDecoder.credentials);
};

module.exports = {
  decoderJwt,
};

// ref: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library