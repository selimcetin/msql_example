const express = require("express");
const router = express.Router();

const { validateSchema } = require("../middlewares/joiValidator");
const { petSchema, petUpdateSchema } = require("../schemas/petSchema");
const { tryCatch } = require("../utils/tryCatch");

const {
  getPetById,
  deletePetById,
  updatePetById,
  insertPet,
} = require("../controllers/petController");

router
  .route("/:id")
  .get(tryCatch(getPetById))
  .put(validateSchema(petUpdateSchema), tryCatch(updatePetById))
  .delete(tryCatch(deletePetById));

router.post("/", validateSchema(petSchema), tryCatch(insertPet));

router.param("id", (req, res, next, id) => {
  console.log(`inside pets ${id} route`);
  next();
});

module.exports = { router };
