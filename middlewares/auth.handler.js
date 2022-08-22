import boom from '@hapi/boom';

export const authHandler = (req, res, next) => {
  const api = req.headers['apikey'];
  api === '1234' ? next() : next(boom.unauthorized());
};

export const authRoles = (...roles) => {
  return (req, res, next) => {
    const role = req.user.role;
    roles.includes(role) || roles.includes('all')
      ? next()
      : next(boom.unauthorized());
  };
};
