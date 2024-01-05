const { sql, pool } = require("../utils/sqlConnection");

const handleSqlQuery = async (res, sqlStatement) => {
  const request = new sql.Request(pool);
  const result = await request.query(sqlStatement);
  return res.json(result.recordset);
};

const getSelectStatementWithFilter = (tableName, columnName, filterValue) => {
  return `SELECT * FROM ${tableName} WHERE ${columnName}=${filterValue}`;
};

const getDeleteStatementWithFilter = (tableName, columnName, filterValue) => {
  return `DELETE FROM ${tableName} WHERE ${columnName}=${filterValue}`;
};

const getUpdateStatementCustomer = (id, jsonUpdateObject) => {
  let sqlSetQuery = "SET ";
  let count = Object.keys(jsonUpdateObject).length;

  for (const key in jsonUpdateObject) {
    const value = jsonUpdateObject[key];

    if (typeof value === "number") {
      sqlSetQuery += `${key}=${value}`;
    } else {
      sqlSetQuery += `${key}='${value}'`;
    }

    count--;
    if (count !== 0) {
      sqlSetQuery += ",";
    }
  }
  return `UPDATE dbo.Customers ${sqlSetQuery} WHERE CustomerID=${id}`;
};

module.exports = {
  handleSqlQuery,
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
  getUpdateStatementCustomer,
};
