const joi = require("joi");

const petSchema = joi.object({
  customerID: joi.number().required(),
  petName: joi.string().required(),
  species: joi.string().required(),
  birthDate: joi.date().required(),
  isAlive: joi.boolean().required(),
});

module.exports = { petSchema };
