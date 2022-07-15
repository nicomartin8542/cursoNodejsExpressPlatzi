const originCors = () => {
  const whitelist = ['http://localhost:3000/', 'https://myapp.com'];
  const options = {
    origin: (origin, callback) => {
      whitelist.includes(origin) || !origin
        ? callback(null, true)
        : callback(new Error('Ip no permitida'));
    },
  };

  return options;
};

export default originCors;
