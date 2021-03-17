const knex = require("knex");
const configs = require("../knexfile");
const environment = "development";

const db = knex(configs[environment]);

module.exports = { db };
