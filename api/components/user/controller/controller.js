const TABLA = "user";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }
  function list() {
    return store.list(TABLA);
  }
  function get(id) {
    return store.get(TABLA, id);
  }
  function upsert(user) {
    return store.upsert(TABLA, user);
  }
  function remove(user) {
    return store.remove(TABLA, user);
  }
  return { list, get, upsert, remove };
};
