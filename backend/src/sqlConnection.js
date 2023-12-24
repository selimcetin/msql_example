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

const connectSql = () => {
  sql
    .connect(config)
    .then(() => {
      console.log("Connected to SQL Server");
    })
    .catch((err) => {
      console.error("Error connecting to SQL Server:", err);
    });
};

module.export = {
  connectSql,
};
