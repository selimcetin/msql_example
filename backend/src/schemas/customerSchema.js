const Joi = require("joi");

const customerSchema = Joi.object({
  PracticeID: Joi.number().required(),
  CustomerName: Joi.string().required(),
  Email: Joi.string().required(),
  Phone: Joi.string().required(),
});

const customerUpdateSchema = Joi.object({
  PracticeID: Joi.number(),
  CustomerName: Joi.string(),
  Email: Joi.string(),
  Phone: Joi.string(),
}).min(1);

module.exports = { customerSchema, customerUpdateSchema };
