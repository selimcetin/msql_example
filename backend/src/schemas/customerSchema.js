const joi = require("joi");

const customerSchema = joi.object({
  PracticeID: joi.number().required(),
  CustomerName: joi.string().required(),
  Email: joi.string().required(),
  Phone: joi.string().required(),
});

module.exports = { customerSchema };
