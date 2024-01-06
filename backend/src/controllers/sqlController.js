const { sql, pool } = require("../utils/sqlConnection");

const executeSqlQuery = async (res, sqlStatement) => {
  const request = new sql.Request(pool);
  const result = await request.query(sqlStatement);
  return res.json(result.recordset);
};

const executeStoredProcedure = async (req, res, spName) => {
  const request = new sql.Request(pool);

  // Take in all parameters for the Stored Procedure
  //------------------------------------------------
  for (const key in req.body) {
    const value = req.body[key];

    if (typeof value === "number") request.input(key, sql.Int, value);
    if (typeof value === "string") request.input(key, sql.VarChar(255), value);
    if (typeof value === "boolean") request.input(key, sql.Bit, value);
  }
  const result = await request.execute(spName);

  return res.json(result.recordset);
};

const getSelectStatement = (tableName) => {
  return `SELECT * FROM ${tableName}`;
};

const getSelectStatementWithFilter = (tableName, columnName, filterValue) => {
  return `SELECT * FROM ${tableName} WHERE ${columnName}=${filterValue}`;
};

const getDeleteStatementWithFilter = (tableName, columnName, filterValue) => {
  return `DELETE FROM ${tableName} WHERE ${columnName}=${filterValue}`;
};

const getUpdateStatement = (id, jsonUpdateObject, tableName, idColumnName) => {
  let sqlSetQuery = "SET ";
  let count = Object.keys(jsonUpdateObject).length;

  for (const key in jsonUpdateObject) {
    const value = jsonUpdateObject[key];

    if (typeof value === "number") {
      sqlSetQuery += `${key}=${value}`;
    } else {
      sqlSetQuery += `${key}='${value}'`;
    }

    // Dont add the last comma
    //------------------------
    count--;
    sqlSetQuery += count !== 0 ? "," : "";
  }

  return `UPDATE ${tableName} ${sqlSetQuery} WHERE ${idColumnName}=${id}`;
};

module.exports = {
  getSelectStatement,
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
  getUpdateStatement,
  executeSqlQuery,
  executeStoredProcedure,
};
