const { db } = require("./dbConnection");

function getDbResponse() {
  return db
    .select("*")
    .from("cats")
    .then((data) => data);
}

module.exports = { getDbResponse };
