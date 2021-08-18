const express = require("express");
const router = express.Router();
const res = require("../../../network/response");
const controller = require("../index");

router.get("/", get);
router.get("/:id", getUser);
router.post("/", upsert);
router.delete("/:id", removeUser);

function get(request, response) {
  controller
    .list()
    .then((lista) => {
      res.success(request, response, lista, 200);
    })
    .catch((err) => {
      res.error(request, response, err.message, 400);
    });
}
function getUser(request, response) {
  controller
    .get(request.params.id)
    .then((user) => {
      res.success(request, response, user, 200);
    })
    .catch((err) => {
      res.error(request, response, err.message, 400);
    });
}
function upsert(request, response) {
  controller
    .upsert(request.body.user)
    .then((user) => {
      res.success(request, response, user, 201);
    })
    .catch((err) => {
      res.error(request, response, err.message, 400);
    });
}

function removeUser(request, response) {
  controller
    .remove(request.params.id)
    .then((info) => {
      res.success(request, response, info, 200);
    })
    .catch((err) => {
      console.log(err);
      res.error(request, response, err.message, 400);
    });
}

module.exports = router;
