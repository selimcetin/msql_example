const Joi = require("joi");

const petSchema = Joi.object({
  CustomerID: Joi.number().required(),
  PetName: Joi.string().required(),
  Species: Joi.string().required(),
  BirthDate: Joi.date().required(),
  IsAlive: Joi.boolean().required(),
});

const petUpdateSchema = Joi.object({
  CustomerID: Joi.number(),
  PetName: Joi.string(),
  Species: Joi.string(),
  BirthDate: Joi.date(),
  IsAlive: Joi.boolean(),
}).min(1);

module.exports = { petSchema, petUpdateSchema };
