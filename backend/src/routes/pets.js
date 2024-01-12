const express = require("express");
const router = express.Router();

const { validateSchema } = require("../middlewares/joiValidator");
const { petSchema, petUpdateSchema } = require("../schemas/petSchema");
const { tryCatch } = require("../utils/tryCatch");

const {
  getAllPets,
  getPetById,
  deletePetById,
  updatePetById,
  insertPet,
} = require("../controllers/petController");

router.get("/", tryCatch(getAllPets));

router
  .route("/:id")
  .get(tryCatch(getPetById))
  .put(validateSchema(petUpdateSchema), tryCatch(updatePetById))
  .delete(tryCatch(deletePetById));

router.post("/", validateSchema(petSchema), tryCatch(insertPet));

module.exports = { router };
