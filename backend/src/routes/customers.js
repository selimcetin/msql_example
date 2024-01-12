const express = require("express");
const router = express.Router();

const { validateSchema } = require("../middlewares/joiValidator");
const {
  customerSchema,
  customerUpdateSchema,
} = require("../schemas/customerSchema");
const { tryCatch } = require("../utils/tryCatch");

const {
  getAllCustomers,
  getCustomerById,
  deleteCustomerById,
  updateCustomerById,
  insertCustomer,
} = require("../controllers/customerController");

router.get("/", tryCatch(getAllCustomers));

router
  .route("/:id")
  .get(tryCatch(getCustomerById))
  .put(validateSchema(customerUpdateSchema), tryCatch(updateCustomerById))
  .delete(tryCatch(deleteCustomerById));

router.post("/", validateSchema(customerSchema), tryCatch(insertCustomer));

module.exports = { router };
