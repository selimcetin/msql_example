const express = require("express");
const router = express.Router();

const { validateSchema } = require("../middlewares/joiValidator");
const {
  customerSchema,
  customerUpdateSchema,
} = require("../schemas/customerSchema");
const { tryCatch } = require("../utils/tryCatch");

const {
  getCustomerById,
  deleteCustomerById,
  updateCustomerById,
  insertCustomer,
} = require("../controllers/customerController");

router
  .route("/:id")
  .get(tryCatch(getCustomerById))
  .put(validateSchema(customerUpdateSchema), tryCatch(updateCustomerById))
  .delete(tryCatch(deleteCustomerById));

router.post("/", validateSchema(customerSchema), tryCatch(insertCustomer));

router.param("id", (req, res, next, id) => {
  console.log(`inside customers ${id} route`);
  next();
});

module.exports = { router };
