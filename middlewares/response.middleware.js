const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  if (res.data.status === 200) {
    res.status(res.data.status).json(res.data);
  } else {
    console.log(res.data.status);
    res.status(res.data.status).json({status: res.status, message: res.data})
  };
  next();
};

export { responseMiddleware };
