const { db } = require("./dbConnection");

function getDbResponse() {
  return db
    .select("*")
    .from("table")
    .then((data) => data);
}

module.exports = { getDbResponse };
