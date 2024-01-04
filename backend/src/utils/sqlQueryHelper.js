const { json } = require("stream/consumers");

const getSelectStatementWithFilter = (tableName, columnName, filterValue) => {
  return `SELECT * FROM ${tableName} WHERE ${columnName}=${filterValue}`;
};

const getDeleteStatementWithFilter = (tableName, columnName, filterValue) => {
  return `DELETE FROM ${tableName} WHERE ${columnName}=${filterValue}`;
};

const getUpdateStatementCustomer = (id, jsonUpdateObject) => {
  let dynamicQueryPart = "";

  for (const key in jsonUpdateObject) {
    if (jsonUpdateObject.hasOwnProperty(key)) {
      dynamicQueryPart += `${key}=${jsonUpdateObject[key]},`;
    }
  }

  return `UPDATE dbo.Customers SET ${dynamicQueryPart} WHERE CustomerID=${id}`;
};

module.exports = {
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
  getUpdateStatementCustomer,
};
