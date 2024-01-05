const express = require("express");
const router = express.Router();

const { pool, sql } = require("../utils/sqlConnection");
const { validateSchema } = require("../middlewares/joiValidator");
const {
  customerSchema,
  customerUpdateSchema,
} = require("../schemas/customerSchema");
const { tryCatch } = require("../utils/tryCatch");
const {
  getSelectStatementWithFilter,
  getDeleteStatementWithFilter,
  getUpdateStatementCustomer,
} = require("../controllers/sqlController");
const {
  getCustomerById,
  deleteCustomerById,
  updateCustomerById,
} = require("../controllers/customerController");

router
  .route("/:id")
  .get(tryCatch(getCustomerById))
  .put(validateSchema(customerUpdateSchema), tryCatch(updateCustomerById))
  .delete(tryCatch(deleteCustomerById));

router.post(
  "/",
  validateSchema(customerSchema),
  tryCatch(async (req, res) => {
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
