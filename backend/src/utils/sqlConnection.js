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

const connectSql = async () => {
  try {
    console.log(config);
    await sql.connect(config);
    console.log("Connected to SQL Server");
  } catch (err) {
    console.error("Error connecting to SQL Server:", err);
    throw err; // Re-throw the error to be handled by the caller
  }
};

const getSqlObject = async () => {
  await connectSql();
  return sql;
};

module.exports = {
  getSqlObject,
};
