const originCors = () => {
  const whitelist = ['http://localhost:8080', 'https://myapp.com'];
  const options = {
    origin: (origin, callback) => {
      whitelist.inclide(origin)
        ? callback(null, true)
        : callback(new Error('Ip no permitida'));
    },
  };

  return options;
};

export default originCors;
