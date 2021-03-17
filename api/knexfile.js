// const host = process.env.DB_HOST || "localhost"; // Don't need to be used if composed
// const port = process.env.DB_PORT || "5433";  // Don't need to be used if composed
// const user = process.env.DB_USER || "test";  // Don't need to be used if composed
// const password = process.env.DB_PASS || "testpass";  // Don't need to be used if composed
const connectionString = process.env.DB_CONNECTION_STRING; // defined in the docker-compose.yml

module.exports = {
  development: {
    client: "pg",
    // connection: {
    //   host,
    //   port,
    //   user,
    //   password,
    //   database: "pern_app_db",
    // },
    connection: connectionString,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
