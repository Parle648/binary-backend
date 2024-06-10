const responseMiddleware = (req, res, next) => {
  // TODO: Implement middleware that returns result of the query
  if (res.data) {
    res.status(res.data.status).json(res.data.data);
  } else {
    res.status(404).json({ status: 404, message: "Something went wrong", error: true });
  };
  next();
};

export { responseMiddleware };
