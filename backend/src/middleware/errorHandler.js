exports.errorHandler = (error, req, res, next) => {
  return res.status(400).send(error.message);
};
