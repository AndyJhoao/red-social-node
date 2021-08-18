const db = {
  user: [
    {
      id: "1",
      name: "Andy",
    },
  ],
};

async function list(tabla) {
  return await db[tabla];
}
async function get(tabla, id) {
  let col = await list(tabla);
  return col.filter((user) => user.id === id)[0] || null;
}
async function upsert(tabla, data) {
  await db[tabla].push(data);
  return data;
}
async function remove(tabla, id) {
  let index = db[tabla].findIndex((user) => user.id === id);
  return db[tabla].splice(index, 1);
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
