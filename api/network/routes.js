const user = require("../components/user/network/router");
const routes = function (server) {
  server.use("/api/user", user);
};
module.exports = routes;
