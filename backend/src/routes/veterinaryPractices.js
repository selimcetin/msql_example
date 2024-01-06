const express = require("express");
const router = express.Router();

const { validateSchema } = require("../middlewares/joiValidator");
const {
  veterinaryPracticeSchema,
  veterinaryPracticeUpdateSchema,
} = require("../schemas/veterinaryPracticeSchema");
const { tryCatch } = require("../utils/tryCatch");

const {
  getAllVeterinaryPractices,
  getVeterinaryPracticeById,
  deleteVeterinaryPracticeById,
  updateVeterinaryPracticeById,
  insertVeterinaryPractice,
} = require("../controllers/veterinaryPracticeController");

router.get("/", tryCatch(getAllVeterinaryPractices));

router
  .route("/:id")
  .get(tryCatch(getVeterinaryPracticeById))
  .put(
    validateSchema(veterinaryPracticeUpdateSchema),
    tryCatch(updateVeterinaryPracticeById)
  )
  .delete(tryCatch(deleteVeterinaryPracticeById));

router.post(
  "/",
  validateSchema(veterinaryPracticeSchema),
  tryCatch(insertVeterinaryPractice)
);

module.exports = { router };
