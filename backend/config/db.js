const mysql = require("mysql");

const DB_HOST = "localhost";
const USER = "root";
const PASSWORD = "";
const DATABASE = "peakit";

const pool = mysql.createPool({
  host: DB_HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

module.exports = pool;
