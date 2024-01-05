const {
  handleSqlQuery,
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
  getUpdateStatementCustomer,
} = require("../controllers/sqlController");

const tableName = "dbo.Customers";
const idColumnName = "CustomerID";

const getCustomerById = async (req, res) => {
  return handleSqlQuery(
    res,
    getSelectStatementWithFilter(tableName, idColumnName, req.params.id)
  );
};

const deleteCustomerById = async (req, res) => {
  return handleSqlQuery(
    res,
    getDeleteStatementWithFilter(tableName, idColumnName, req.params.id)
  );
};

const updateCustomerById = async (req, res) => {
  return handleSqlQuery(
    res,
    getUpdateStatementCustomer(req.params.id, req.body)
  );
};

module.exports = { getCustomerById, deleteCustomerById, updateCustomerById };
