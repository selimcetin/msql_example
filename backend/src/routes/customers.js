const express = require("express");
const router = express.Router();

const { pool, sql } = require("../utils/sqlConnection");
const { validateSchema } = require("../middleware/joiValidator");
const { customerSchema } = require("../schemas/customerSchema");
const { tryCatch } = require("../utils/tryCatch");
const {
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
} = require("../utils/sqlQueryHelper");

const tableName = "dbo.Customers";
const idColumnName = "CustomerID";

router
  .route("/:id")
  .get(
    tryCatch(async (req, res) => {
      const id = req.params.id;

      const request = new sql.Request(pool);
      const result = await request.query(
        getSelectStatementWithFilter(tableName, idColumnName, id)
      );
      return res.json(result.recordset);
    })
  )
  .put((req, res) => {})
  .delete(
    tryCatch(async (req, res) => {
      const id = req.params.id;

      const request = new sql.Request(pool);
      const result = await request.query(
        getDeleteStatementWithFilter(tableName, idColumnName, id)
      );
      return res.json(result.recordset);
    })
  );

router.post(
  "/",
  validateSchema(customerSchema),
  tryCatch(async (req, res) => {
    console.log("reqbody:", req.body);
    const { PracticeID, CustomerName, Email, Phone } = req.body;

    const request = new sql.Request(pool);
    const result = await request
      .input("PracticeID", sql.Int, PracticeID)
      .input("CustomerName", sql.VarChar(255), CustomerName)
      .input("Email", sql.VarChar(255), Email)
      .input("Phone", sql.VarChar(15), Phone)
      .execute("sp_CreateCustomer");

    return res.json(result.recordset);
  })
);

router.param("id", (req, res, next, id) => {
  console.log("inside customers id route");
  next();
});

module.exports = { router };
