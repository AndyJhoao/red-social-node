const express = require("express");
const app = express();
const server = require("http").Server(app);
const config = require("../config");
const swagger = require("swagger-ui-express");

const router = require("./network/routes");
const swaggerDoc = require("./swagger.json");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api-docs", swagger.serve, swagger.setup(swaggerDoc));
router(app);

server.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto " + config.api.port);
});
