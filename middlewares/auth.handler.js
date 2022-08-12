import boom from '@hapi/boom';

export const authHandler = (req, res, next) => {
  const api = req.headers['apikey'];
  api === '1234' ? next() : next(boom.unauthorized());
};
