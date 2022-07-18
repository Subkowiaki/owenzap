require("../bootstrap");

module.exports = {
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_bin"
  },
  dialect: process.env.DB_DIALECT || "mysql",
  timezone: "-03:00",
  host: "multichat.ce9l05qknrdw.sa-east-1.rds.amazonaws.com", // process.env.DB_HOST,
  database: "markey", // process.env.DB_NAME,
  username: "markey", // process.env.DB_USER,
  password: "Msjks1705$", // process.env.DB_PASS,
  logging: false
};
