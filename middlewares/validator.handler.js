import boom from '@hapi/boom';

//Clouster para aplicar los schemas de la libreria joi
const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    error && next(boom.badRequest(error));
    next();
  };
};

export default validatorHandler;
