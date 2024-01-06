require("dotenv").config();
const sql = require("mssql");

const config = {
  user: process.env.SQL_USER_NAME,
  password: process.env.SQL_USER_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE_NAME,
  options: {
    encrypt: true, // For Azure users
    trustServerCertificate: true, // For local dev only
  },
};

const pool = new sql.ConnectionPool(config);

const connectToMsqlDatabase = async () => {
  try {
    await pool.connect();
    console.log("Connected to Database.");
  } catch (err) {
    console.error("Error connecting to Database:", err);
    throw err; // Re-throw the error to be handled by the caller
  }
};

module.exports = {
  connectToMsqlDatabase,
  pool,
  sql,
};
