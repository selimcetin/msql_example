const {
  getSelectStatement,
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
  getUpdateStatement,
  executeSqlQuery,
  executeStoredProcedure,
} = require("../controllers/sqlController");

const tableName = "dbo.VeterinaryPractices";
const idColumnName = "PracticeID";

const getAllVeterinaryPractices = async (req, res) => {
  return executeSqlQuery(res, getSelectStatement(tableName));
};

const getVeterinaryPracticeById = async (req, res) => {
  return executeSqlQuery(
    res,
    getSelectStatementWithFilter(tableName, idColumnName, req.params.id)
  );
};

const deleteVeterinaryPracticeById = async (req, res) => {
  return executeSqlQuery(
    res,
    getDeleteStatementWithFilter(tableName, idColumnName, req.params.id)
  );
};

const updateVeterinaryPracticeById = async (req, res) => {
  return executeSqlQuery(
    res,
    getUpdateStatement(req.params.id, req.body, tableName, idColumnName)
  );
};

const insertVeterinaryPractice = async (req, res) => {
  return executeStoredProcedure(req, res, "sp_CreateVeterinaryPractice");
};

module.exports = {
  getAllVeterinaryPractices,
  getVeterinaryPracticeById,
  insertVeterinaryPractice,
  deleteVeterinaryPracticeById,
  updateVeterinaryPracticeById,
};
