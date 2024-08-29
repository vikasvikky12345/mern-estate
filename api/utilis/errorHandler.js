const errorHandler = (statusCode, errorMessage) => {
  const error = new Error(errorMessage);
  error.statusCode = statusCode;
  error.errorMessage = errorMessage;
  return error;
};
module.exports = errorHandler;
