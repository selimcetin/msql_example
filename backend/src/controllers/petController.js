const {
  getSelectStatement,
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
  getUpdateStatement,
  executeSqlQuery,
  executeStoredProcedure,
} = require("../controllers/sqlController");

const tableName = "dbo.Pets";
const idColumnName = "PetID";

const getAllPets = async (req, res) => {
  return executeSqlQuery(res, getSelectStatement(tableName));
};

const getPetById = async (req, res) => {
  return executeSqlQuery(
    res,
    getSelectStatementWithFilter(tableName, idColumnName, req.params.id)
  );
};

const deletePetById = async (req, res) => {
  return executeSqlQuery(
    res,
    getDeleteStatementWithFilter(tableName, idColumnName, req.params.id)
  );
};

const updatePetById = async (req, res) => {
  return executeSqlQuery(
    res,
    getUpdateStatement(req.params.id, req.body, tableName, idColumnName)
  );
};

const insertPet = async (req, res) => {
  return executeStoredProcedure(req, res, "sp_CreatePet");
};

module.exports = {
  getAllPets,
  getPetById,
  insertPet,
  deletePetById,
  updatePetById,
};
