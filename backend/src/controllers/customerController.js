const {
  getSelectStatement,
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
  getUpdateStatement,
  executeSqlQuery,
  executeStoredProcedure,
} = require("../controllers/sqlController");

const tableName = "dbo.Customers";
const idColumnName = "CustomerID";

const getAllCustomers = async (req, res) => {
  return executeSqlQuery(res, getSelectStatement(tableName));
};

const getCustomerById = async (req, res) => {
  return executeSqlQuery(
    res,
    getSelectStatementWithFilter(tableName, idColumnName, req.params.id)
  );
};

const deleteCustomerById = async (req, res) => {
  return executeSqlQuery(
    res,
    getDeleteStatementWithFilter(tableName, idColumnName, req.params.id)
  );
};

const updateCustomerById = async (req, res) => {
  return executeSqlQuery(
    res,
    getUpdateStatement(req.params.id, req.body, tableName, idColumnName)
  );
};

const insertCustomer = async (req, res) => {
  return executeStoredProcedure(req, res, "sp_CreateCustomer");
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  insertCustomer,
  deleteCustomerById,
  updateCustomerById,
};
