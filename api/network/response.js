function success(request, response, message, status = 200) {
  response.status(status).send({
    error: false,
    status: status,
    body: message,
  });
}
function error(
  request,
  response,
  message = "Internal server error",
  status = 500
) {
  response.status(status).send({
    error: true,
    status: status,
    body: message,
  });
}

module.exports = {
  success,
  error,
};
